import axios from 'axios';

const KEY = 'AIzaSyDzB2TVDgT2eZ9SjUtLiiDutke75pq0kNY'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});
