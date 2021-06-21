<script lang="ts">
  import type { Location } from '../global';
  import Button from './Button.svelte';
  export let location: Location = { city: "Helsinki", country: "Finland" };

</script>

<section>
  <input class="location" type="text" placeholder="Location" value={`${location.city}, ${location.country}`}>
  <input class="guests" type="text" placeholder="Add guests">
  <button class="search-btn material-icons">search</button>
</section>

<style>
  section {
    font-family: 'Mulish', sans-serif;
    font-size: 0.4rem;
    @apply flex;
    @apply flex-row;
    @apply w-full;
    @apply rounded-xl;
    @apply shadow-md;
  }

  input {
    @apply w-1/2;
  }

  input::placeholder {
    @apply text-center;
  }

  .location {
    @apply rounded-l-xl;
  }

  .guests {
    @apply border-r;
    @apply border-l;
    @apply border-gray-light;
  }

  .search-btn {
    @apply text-red;
  }

  input, .search-btn {
    @apply p-3;
  }
</style>
