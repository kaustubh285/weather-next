"use client";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

type Props = {
  results: Root;
  tz: string;
};

function HumidityChart({ results, tz }: Props) {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
        timeZone: tz,
      })
    )
    .slice(0, 24);

  const chartData = hourly.map((hour, i) => ({
    time: Number(hour),
    "Humidity (%)": results.hourly.relativehumidity_2m[i],
  }));
  const data = {
    labels: chartData.map((entry) => entry.time),
    datasets: [
      {
        label: "Humidity (%)",
        data: chartData.map((entry) => entry["Humidity (%)"]),
        // fill: true,
        pointStyle: "rect",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(227, 168, 135, 0.4)",
        borderColor: "rgba(227, 168, 135, 1)",
        pointHoverBackgroundColor: "rgba(227, 168, 135, 1)",
        pointHoverBorderColor: "rgba(207, 138, 105, 1)",
        borderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointHitRadius: 10,
        // cubicInterpolationMode: "monotone",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          title: (context: any) => `Time: ${context[0].label}'o Clock`,
          label: (context: any) => {
            const label = context.dataset.label || "";
            return `${label}: ${context.parsed.y}%`;
          },
        },
      },
      title: {
        display: true,
        text: "Temperature Chart",
        fontSize: 16,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Set to false to allow custom size
    animation: {
      duration: 2000, // Animation duration in milliseconds
    },
  };
  return (
    <Card>
      <CardHeader>Humidity Graph</CardHeader>

      <CardBody className='sm:h-28 lg:h-60'>
        <Line
          data={data}
          // width={100}
          // height={15}
          className='cursor-pointer'
          options={options}
        />
      </CardBody>
    </Card>
  );
}

export default HumidityChart;
