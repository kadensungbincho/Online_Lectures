import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8cd4a879d176576e0355d736836d191a60693f180f74628f2ac81b22a7603976'
  }
});