import config from './config.json';
if (
  !config.channelId ||
  !config.clientId ||
  !config.timeout ||
  !config.serialPort ||
  !config.baudRate
) {
  console.error(
    "config.json needs the keys 'serialPort', 'baudRate, timeout' (in milliseconds, 'channelId' and 'clientId set'"
  );
  process.exit(1);
}
export default config;
