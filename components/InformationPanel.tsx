import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import CityPicker from "./CityPicker";
import Image from "next/image";
import weatherCodeToString from "@/lib/weatherCodeToStringcomponents";
import { formatInTimeZone } from "date-fns-tz";
type Props = {
  city: string;
  lat: string;
  long: string;
  results: Root;
  tz: string;
};

function InformationPanel({ city, lat, long, results, tz }: Props) {
  return (
    <div className='bg-gradient-to-br from-[#394f68] to-[#183b7e] p-10 lg:max-w-md'>
      <div className='pb-5 text-white'>
        <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
        <p className='text-xs text-gray-400'>
          Lat/Long : {lat}, {long}
        </p>
      </div>

      <CityPicker />

      <hr className='my-10' />

      <svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='50' cy='20' r='2' fill='white'>
          <animate
            attributeName='cy'
            from='20'
            to='80'
            dur='2s'
            begin='0s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='30' cy='20' r='2' fill='white'>
          <animate
            attributeName='cy'
            from='20'
            to='80'
            dur='2.5s'
            begin='0.2s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>

      <div className='text-white mt-5 flex items-center justify-between space-x-9 mb-5'>
        <div>
          <p className='text-xl'>
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
              timeZone: tz,
            })}
          </p>

          <p className='font-extralight max-w-md'>Timezone: {tz}</p>
        </div>

        <p className='text-xl font-bold uppercase'>
          {/* {formatInTimeZone(, tz, "hh:mm a")} */}
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timeZone: tz,
          })}
        </p>
      </div>

      <hr className='mt-10 mb-5' />

      <div className='text-white flex items-center justify-between'>
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            alt={`${
              weatherCodeToString[results.current_weather.weathercode].label
            }`}
            height={75}
            width={75}
          />

          <div className='flex items-center justify-between space-x-10 w-72'>
            <p className='text-xl md:text-6xl font-semibold'>
              {results.current_weather.temperature.toFixed(1)}°C
            </p>

            <p className='text-right font-extralight text-lg'>
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>

      <div className='text-white space-y-2 py-5'>
        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885]'>
          <SunIcon className='h-10 w-10 text-gray-400' />
          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight'>Sunrise</p>
            <p className='uppercase text-2xl'>
              {formatInTimeZone(results.daily.sunrise[0], tz, "hh:mm a")}
              {/* {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
                timeZone: tz,
              })} */}
            </p>
          </div>
        </div>

        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885]'>
          <MoonIcon className='h-10 w-10 text-gray-400' />
          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight'>Sunset</p>
            <p className='uppercase text-2xl'>
              {formatInTimeZone(results.daily.sunset[0], tz, "hh:mm a")}
              {/* {new Date(results.daily.sunset[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
                // timeZone: tz,
              })} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanel;
