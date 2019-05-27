import config from "../config";

function getConfig(component) {
  const { env } = config;
  if (!config[component]) {
    throw new Error(`Config for component '${component}' does not exist`);
  }

  return config[component][env];
}

export default getConfig;
