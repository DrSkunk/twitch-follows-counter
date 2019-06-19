import fetch from 'node-fetch';
import config from './config';

let state = {
  total: 0,
  follower: ''
};

export default async function poll(callback) {
  const newState = await fetchData(config);
  if (true || state.total < newState.total) {
    state = Object.assign({}, newState);
    callback(state);
  }

  setTimeout(poll, config.timeout, callback);
}

async function fetchData() {
  console.log('Fetching data');
  const result = await fetch(
    'https://api.twitch.tv/helix/users/follows?to_id=' + config.channelId,
    {
      headers: {
        'Client-ID': config.clientId
      }
    }
  );
  const jsonResult = await result.json();

  return {
    total: jsonResult.total,
    follower: jsonResult.data[0].from_name
  };
}
