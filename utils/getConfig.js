import config from "../config";

function getConfig(component) {
  const { env } = config;
  return config[component][env];
}

export default getConfig;
