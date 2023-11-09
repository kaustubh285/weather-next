"use client";
import React, { useState } from "react";
import { Country, City } from "country-state-city";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { GlobeIcon } from "@heroicons/react/solid";

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
    timezone: country.timezones ? country.timezones[0].zoneName : null, // Access the 'zoneName' property
  },
  label: country.name,
}));

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

type countryOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
    timezone: string | null | undefined;
  };
  label: string;
} | null;

function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<countryOption>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  const handleCountrySelect = (option: countryOption) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleCitySelect = (option: cityOption) => {
    setSelectedCity(option);
    router.push(
      `/location/${option?.label}/${option?.value.latitude}/${
        option?.value.longitude
      }/${encodeURIComponent(selectedCountry?.value?.timezone || "UTC")}`
    );
  };
  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <div className='text-white/80 font-bold text-lg flex items-center space-x-2'>
          <GlobeIcon height={25} width={25} />
          <label htmlFor='country'>Country</label>
        </div>
        <Select
          value={selectedCountry}
          onChange={handleCountrySelect}
          options={options}
        />
      </div>
      {selectedCountry && (
        <div className='space-y-2'>
          <div className='text-white/80 font-bold text-lg flex items-center space-x-2'>
            <GlobeIcon height={25} width={25} />
            <label htmlFor='country'>City</label>
          </div>
          <Select
            value={selectedCity}
            onChange={handleCitySelect}
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((city) => ({
              value: {
                latitude: city.latitude!,
                longitude: city.longitude!,
                countryCode: city.countryCode,
                name: city.name,
                stateCode: city.stateCode,
              },
              label: city.name,
            }))}
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;
