<script lang="ts">
  import Header      from './components/Header.svelte';
  import Card        from './components/Card.svelte';
  import SearchBar   from './components/SearchBar.svelte';
  import data        from './stays.json'
  import { filters } from './stores/filters';

  // array of unique cities
  let availableLocations = [ ...new Set( data.map(({city, country}) => `${city}, ${country}`) ) ];

  let staysFilters = { location: { city: '', country: '' }, guests: 0 };
  filters.subscribe( value => staysFilters = value );
</script>

<Header/>
<main role="main">
  <section class="locations">
    <SearchBar/>
    <header class="locations-header">
      <h2>Stays in {staysFilters.location.country}</h2>
      <span class="total-stays">12+ stays</span>
    </header>

    <section class="locations-list">
      {#each data as item}
        <Card {...item} locationType={item.type} />
      {/each}
    </section>
  </section>
</main>
<footer class="text-sm text-gray">
created by 
  <a class="text-gray underline font-bold" href="https://www.github.com/kirontoo" target="-default"> Kirontoo </a>
  - devChallenges.io
</footer>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    @apply m-auto;
    @apply my-6;
    @apply flex;
    @apply flex-col;
    @apply justify-center;
    @apply items-center;
    font-family: 'Montserrat', sans-serif;
  }

  .locations {
    @apply px-4;
    @apply my-4;
    @apply w-full;
  }

  .locations-header {
    @apply flex;
    @apply justify-between;
    @apply items-center;
    @apply mb-4;
    @apply mt-4;
  }

  .total-stays {
    @apply text-gray-dark;
    @apply font-medium;
    font-size: 0.5rem;
  }

  h2 {
    @apply font-bold;
  }

  footer {
    @apply m-4;
  }
</style>
