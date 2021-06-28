<script lang="ts">
  import Button                    from './Button.svelte';
  import Input                     from './Input.svelte';
  import { createEventDispatcher } from 'svelte';
  import { filters }               from '../stores/filters';

  let focused = false;

  let inputFocus = {
    focusLocation: false,
    focusGuests: false,
  };

  // event emmitters
  const dispatch            =  createEventDispatcher();
  const submit              =  () => dispatch("submit", $filters);
  const filterData          =  () => dispatch("filterdata");
  const focusLocationInput  =  () => dispatch("focuslocation",{ ...inputFocus, focusLocation: true });
  const focusGuestsInput    =  () => dispatch("focusguests", { ...inputFocus, focusGuests: true });
  const focusOut            =  () => dispatch("focusout", inputFocus);
  const focusIn             =  () => dispatch("focusin", inputFocus);

  const handleSubmit = ( event ) => {
    let { location, guests } = event.target;
    let [ city, country ] = location.value.split(',');

    // set location
    $filters.location = {
      city    : city.trim(),
      country : country.trim()
    };

    // set guests
    $filters.guests = guests.value.length  ? 0 : Number(guests.value);

    // dispatch event
    filterData();
    console.log($filters)
  }

</script>

<header class:focused class="search">
  <span class="edit">
    <span class="text-xs font-bold text-black">Edit your search</span>
    <i class="material-icons">closed</i>
  </span>
  <form on:submit|preventDefault={handleSubmit}>
    <!-- TODO: need to implement on:focusin and on:focusout -->
    <Input
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

    /* NOTE: only happens when in focused mode */
    width: 95%;
  }

  .edit {
    /* position: absolute; */
    /* top: 1em; */
    /* left: 1.2em; */
    @apply flex;
    @apply justify-between;
    @apply items-center;
    @apply mb-4;
    @apply bg-white-light;
    @apply w-full;
  }

  i {
    @apply m-0;
    @apply p-0;
  }

  .focused {
    position: absolute;
    top: 1em;
    z-index: 5;
    @apply bg-white-light;
    height: 20em;
  }

</style>
