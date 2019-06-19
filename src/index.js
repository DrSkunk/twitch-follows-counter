import poller from './poller';
import connector from './connector';
console.log('Twitch follows counter by Sebastiaan Jansen');

poller(result => {
  console.log(result);
  connector.write(result.total);
});
