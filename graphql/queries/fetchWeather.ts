import { gql, useQuery } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      longitude: $longitude
      timezone: $timezone
      latitude: $latitude
      hourly: $hourly
    ) {
      current_weather {
        interval
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      current_weather_units {
        interval
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      generationtime_ms
      hourly {
        apparent_temperature
        windgusts_10m
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        snow_depth
        showers
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
      }
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        temperature_2m
        snowfall
        snow_depth
        time
        uv_index
        windgusts_10m
        uv_index_clear_sky
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      elevation
    }
  }
`;

export default fetchWeatherQuery;
