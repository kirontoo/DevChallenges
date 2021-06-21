<script lang="ts">
  import type { Location } from '../global';
  import Button from './Button.svelte';
  export let location: Location = { city: "Helsinki", country: "Finland" };

</script>

<section>
  <input class="location" type="text" value={`${location.city}, ${location.country}`}>
  <input class="guests" type="text">
  <Button icon="search" />
</section>

<style>
  section {
    @apply flex;
    @apply flex-row;
    @apply w-full;
  }

  input {
    font-family: 'Mulish', sans-serif;
    font-size: 0.4rem;
    @apply p-3;
    @apply rounded-l-xl;
    @apply border-2;
    @apply border-solid;
    @apply border-white;
    @apply w-1/2;
  }

  .location {
    @apply rounded-r-none;
  }

  .guests {
    @apply text-gray-light;
    @apply rounded-l-none;
  }
</style>
