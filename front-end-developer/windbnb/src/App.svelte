<script lang="ts">
  import Header from './components/Header.svelte';
  import Input from './components/Input.svelte';
  import Card from './components/Card.svelte';
  import data from './stays.json'
</script>

<Header/>
<main role="main">
  <header class="search">
    <Input />
  </header>
  <section class="locations">
    <header class="locations-header">
      <h2>Stays in Finland</h2>
      <span>12+ stays</span>
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
  }

  .search {
    @apply w-5/6;
    @apply m-auto;
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
  }

  span {
    @apply text-gray-dark;
  }

  h2 {
    @apply font-bold;
  }

  footer {
    @apply m-4;
  }
</style>
