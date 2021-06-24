<script lang="ts">
  export let availableLocations: string[];

  import Button                    from './Button.svelte';
  import Input                     from './Input.svelte';
  import { createEventDispatcher } from 'svelte';
  import { filters }               from '../stores/filters';

  // event emmitters
  const dispatch = createEventDispatcher();
  const submit = () => dispatch("submit", $filters);
  const focusLocationInput = () => dispatch("focuslocation", availableLocations);
  const focusGuestsInput = () => dispatch("focusguests");

  const handleSubmit = ( event ) => {
    let { location, guests } = event.target;
    let [ city, country ] = location.value.split(',');

    // set location
    $filters.location = {
      city: city.trim(),
      country: country.trim()
    };

    // set guests
    $filters.guests = guests.value == '' ? 0 : Number(guests.value);
  }

</script>

<header class="search">
  <form on:submit|preventDefault={handleSubmit}>
    <Input 
      grouped
      id="location"
      placeholder="Location"
      value={`${$filters.location.city}, ${$filters.location.country}`}
      on:focus={focusLocationInput}
    />
    <Input 
      borders
      id="guests"
      placeholder="Add guests"
      value={$filters.guests ? `${$filters.guests}` : ''}
      on:focus={focusGuestsInput}
    />
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
