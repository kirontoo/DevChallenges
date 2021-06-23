<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte';
  import Input  from './Input.svelte';
  import Button from './Button.svelte';
  import { filters } from '../stores/filters';

  const dispatch = createEventDispatcher();
  let currFilters = { location: { city: '', country: '' }, guests: 0 };
  const unsubscribe = filters.subscribe( value => currFilters = value );


  const handleLocationInput = ( event ) => {
  }

  const handleSubmit = ( event ) => {
    console.log( currFilters );
  }

  const submit = () => dispatch("submit");

  onDestroy( () => unsubscribe() );
</script>

<header class="search">
  <form on:submit|preventDefault={handleSubmit}>
    <Input 
      grouped
      value={`${currFilters.location.city}, ${currFilters.location.country}`}
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
