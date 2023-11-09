const getBasePath = () => {
  let basePathURL =
    process.env.NODE_ENV == "development"
      ? "https://localhost:3000"
      : `https://${process.env.VERCEL_URL}`;

  return basePathURL;
};

export default getBasePath;
