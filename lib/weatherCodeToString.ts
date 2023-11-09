const weatherCodeToString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    label: "Clear sky",
    icon: "c01d",
  },
  1: {
    label: "Mainly clear",
    icon: "c02d",
  },
  2: {
    label: "Partly cloudy",
    icon: "c03d",
  },
  3: {
    label: "Overcast",
    icon: "c04d",
  },
  45: {
    label: "Fog",
    icon: "s05d",
  },
  48: {
    label: "Depositing rime fog",
    icon: "s05d",
  },

  51: {
    label: "Light Drizzle",
    icon: "d01d",
  },
  53: {
    label: "Moderate Drizzle",
    icon: "d01d",
  },
  55: {
    label: "Dense Drizzle",
    icon: "d01d",
  },

  56: {
    label: "Freezing Drizzle",
    icon: "d01d",
  },
  57: {
    label: "Freezing Drizzle",
    icon: "d01d",
  },

  61: {
    label: "Slight Rain",
    icon: "r01d",
  },
  63: {
    label: "Moderate Rain",
    icon: "r01d",
  },
  65: {
    label: "Heavy Rain",
    icon: "r01d",
  },

  66: {
    label: "Freezing Rain",
    icon: "f01d",
  },
  67: {
    label: "Freezing Rain",
    icon: "f01d",
  },
  71: {
    label: "Slight Snow fall",
    icon: "s02d",
  },
  73: {
    label: "Moderate Snow fall",
    icon: "s02d",
  },
  75: {
    label: "Heavy Snow fall",
    icon: "s02d",
  },
  77: {
    label: "Snow grains",
    icon: "s02d",
  },

  80: {
    label: "Slight Rain showers",
    icon: "r02d",
  },
  81: {
    label: "Moderate Rain showers",
    icon: "r02d",
  },
  82: {
    label: "Violent Rain showers",
    icon: "r02d",
  },

  85: {
    label: "Snow showers",
    icon: "s01d",
  },
  86: {
    label: "Snow showers",
    icon: "s01d",
  },

  95: {
    label: "Thunderstorm",
    icon: "t04d",
  },
  96: {
    label: "Thunderstorm",
    icon: "t04d",
  },
  99: {
    label: "Thunderstorm",
    icon: "t04d",
  },
};

export default weatherCodeToString;
