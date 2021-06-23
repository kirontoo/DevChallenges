/// <reference types="svelte" />

type Location = {
  city: string;
  country: string;
};

type Stay = {
  city: string;
  country: string;
  suprHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
};

export { Location, Stay };
