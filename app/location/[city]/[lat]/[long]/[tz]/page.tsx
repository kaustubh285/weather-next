import { getClient } from "@/apollo-clientcomponents";
import Callout from "@/components/Calloutcomponents";
import HumidityChart from "@/components/HumidityChartcomponents";
import InformationPanel from "@/components/InformationPanelcomponents";
import RainChart from "@/components/RainChartcomponents";
import StatCard from "@/components/StatCardcomponents";
import TempChart from "@/components/TempChartcomponents";
import fetchWeatherQuery from "@/graphql/queries/fetchWeathercomponents";
// import cleanData from "@/lib/cleanDatacomponents";
// import getBasePath from "@/lib/getBasePathcomponents";

export const revalidate = 120;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
    tz: string;
  };
};

async function WeatherPage({ params: { city, lat, long, tz } }: Props) {
  const client = getClient();
  const timezone = decodeURIComponent(tz);
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  });

  const results: Root = data.myQuery;
  // const dataToFetch = cleanData(results, city);

  // const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     weatherData: dataToFetch,
  //   }),
  // });

  // const AIdata = await res.json();

  return (
    <div className='flex flex-col min-h-screen md:flex-row'>
      {/* Building the weather page {city} {lat} {long} */}
      <InformationPanel
        city={city}
        lat={lat}
        long={long}
        results={results}
        tz={timezone}
      />
      <div className='flex-1 p-5 lg:p-10'>
        <div className='p-5'>
          <div className='pb-5'>
            <h2 className='text-xl font-bold'>Todays overview</h2>
            <p className='text-sm text-gray-400'>
              Last updated at:{" "}
              {new Date(results.current_weather.time).toLocaleString("en-GB", {
                timeZone: timezone,
              })}{" "}
              ({timezone})
            </p>
          </div>
          <div className='m-2 mb-5'>
            {/* Figure out a way to add calloutCard using Llama2 */}
            <Callout
              message={"Figuring out a way to add a summary built using Llama2"}
              warning
            />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-2'>
            <StatCard
              title='maximum temperature'
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color='bg-teal-100'
            />
            <StatCard
              title='minimum temperature'
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
              color='bg-violet-100'
            />

            <div>
              <StatCard
                title='UV Index'
                metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                color='bg-sky-100'
              />
            </div>
            <div className='flex space-x-3'>
              <StatCard
                title='Wind Speed'
                metric={`${results.current_weather.windspeed.toFixed(1)} ${
                  results.current_weather_units.windspeed
                }`}
                color='bg-red-100'
              />
              <StatCard
                title='Wind Direction'
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color='bg-fuchsia-100'
              />
            </div>
          </div>
        </div>

        <hr className='mb-5' />

        <div className='space-y-5'>
          <TempChart results={results} tz={timezone} />
          <RainChart results={results} tz={timezone} />
          <HumidityChart results={results} tz={timezone} />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
