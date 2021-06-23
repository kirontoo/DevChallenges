import { writable } from 'svelte/store';
import data from '../stays.json';

export const filters = writable({
  location: {
    city: data[0].city,
    country: data[0].country
  },
  guests: 0
});
