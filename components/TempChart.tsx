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

function TempChart({ results, tz }: Props) {
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
    "UV index": results.hourly.uv_index[i],
    "Temperature (C)": results.hourly.temperature_2m[i],
  }));
  const data = {
    labels: chartData.map((entry) => entry.time),
    datasets: [
      // {
      //   label: "UV index",
      //   data: chartData.map((entry) => entry["UV index"]),
      //   fill: false,
      //   lineTension: 0.1,
      //   backgroundColor: "rgba(75,192,192,0.4)",
      //   borderColor: "rgba(75,192,192,1)",
      //   borderWidth: 1,
      //   pointRadius: 1,
      //   pointHoverRadius: 5,
      // },
      {
        label: "Temperature (C)",
        data: chartData.map((entry) => entry["Temperature (C)"]),
        // fill: true,
        pointStyle: "rect",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
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
            return `${label}: ${context.parsed.y}°C`;
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
      <CardHeader>Temperature Graphs</CardHeader>

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

export default TempChart;
