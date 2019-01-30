module.exports = config => {
  const fileName = 'karma.conf';

  try {
    const customConfig = require(`${process.cwd()}/${fileName}`);
    return { ...config, ...customConfig };
  } catch(e) {
    console.warn(`Cannot find custom karma conf file. Using only default configuration.`);
  }

  return config;
};