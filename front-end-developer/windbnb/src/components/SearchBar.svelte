<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Input  from './Input.svelte';
  import Button from './Button.svelte';
  import { filters } from '../stores/filters';

  const dispatch = createEventDispatcher();

  const handleLocationInput = ( event ) => {
  }

  const handleSubmit = ( event ) => {
    console.log( currFilters );
  }

  const submit = () => dispatch("submit");

</script>

<header class="search">
  <form on:submit|preventDefault={handleSubmit}>
    <Input 
      grouped
      value={`${$filters.location.city}, ${$filters.location.country}`}
      placeholder="Location"/>
    <Input 
      borders
      on:input={handleLocationInput} 
      placeholder="Add guests"/>
    <Button 
      grouped
      on:click={submit}
      color="red"
      background="white-light"
      icon="search"/>
  </form>
</header>

<style>
  .search {
    @apply m-auto;
  }

  form {
    font-family: 'Mulish', sans-serif;
    font-size: 0.4rem;
    @apply flex;
    @apply flex-row;
    @apply w-full;
    @apply rounded-xl;
    @apply shadow-md;
  }

</style>
