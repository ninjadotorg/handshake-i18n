module.exports = ({ env }) => {
  const isProduction = env === 'production';
  return ({
    plugins: {
      precss: isProduction ? {} : false,
      autoprefixer: isProduction ? {} : false,
    },
  });
};
