// Define a Raindrop or Snowflake type
type WeatherElement = {
  cx: number;
  cy: number;
  r: number;
  duration: string;
  delay: string;
};

// Generate a list of random Raindrops
const raindrops: WeatherElement[] = Array.from({ length: 100 }, (_, index) => ({
  cx: Math.random() * 100,
  cy: Math.random() * 100,
  r: Math.random() * 2 + 1, // Random radius between 1 and 3
  duration: `${Math.random() * 0.5 + 0.5}s`, // Random animation duration between 0.5s and 1s
  delay: `${Math.random() * 1}s`, // Random animation delay between 0s and 1s
}));

// Generate a list of random Snowflakes
const snowflakes: WeatherElement[] = Array.from(
  { length: 100 },
  (_, index) => ({
    cx: Math.random() * 100,
    cy: Math.random() * 100,
    r: Math.random() * 2 + 1, // Random radius between 1 and 3
    duration: `${Math.random() * 1.5 + 1}s`, // Random animation duration between 1s and 2.5s
    delay: `${Math.random() * 2}s`, // Random animation delay between 0s and 2s
  })
);

export { raindrops, snowflakes };
