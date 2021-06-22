<script>
  import Input from './Input.svelte';
  import Button from './Button.svelte';
  export let location = '';

  const handleLocationInput = ( event ) => {
  }

  const handleSubmit = ( event ) => {
    console.log( "submitting!" )
  }
</script>

<header class="search">
  <form on:submit|preventDefault={handleSubmit}>
    <Input 
      grouped
      value={location}
      placeholder="Location"/>
    <Input 
      borders
      on:input={handleLocationInput} 
      placeholder="Add guests"/>
    <Button 
      grouped
      type:submit
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
