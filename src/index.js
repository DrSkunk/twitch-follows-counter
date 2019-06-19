import config from './config';
import poller from './poller';
console.log('Twitch follows counter by Sebastiaan Jansen');

poller(result => {
  console.log(result);
});
