<script>
import Input from './Input.svelte';
import Button from './Button.svelte';
export let location = '';

const handleLocationInput = ( event ) => {
  console.log(event.target.value);
}
</script>


<header class="search">
  <section>
    <Input 
      on:input={handleLocationInput}
      value={location}
      placeholder="Location"/>
    <Input 
      on:input={handleLocationInput} 
      placeholder="Add guests"/>
    <Button 
      grouped
      color="red"
      background="white-light"
      icon="search"/>
  </section>
</header>

<style>
.search {
  @apply m-auto;
  @apply w-5/6;
}

section {
  font-family: 'Mulish', sans-serif;
  font-size: 0.4rem;
  @apply flex;
  @apply flex-row;
  @apply w-full;
  @apply rounded-xl;
  @apply shadow-md;
}

</style>
