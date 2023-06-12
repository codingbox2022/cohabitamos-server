const configuration = () => ({
  PORT: parseInt(process.env.PORT as string, 10) || 3000,
  MONGO_CONNECTION_URL: process.env.MONGO_CONNECTION_URL,
});

export default configuration;