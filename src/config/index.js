import config from './config.json';
if (!config.channelId || !config.clientId || !config.timeout) {
  console.error(
    "config.json needs the keys 'timeout' (in milliseconds, 'channelId' and 'clientId set'"
  );
  process.exit(1);
}
export default config;
