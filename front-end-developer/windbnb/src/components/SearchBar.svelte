<script lang="ts">
  import Button                    from './Button.svelte';
  import Input                     from './Input.svelte';
  import { createEventDispatcher } from 'svelte';
  import { filters }               from '../stores/filters';

  // TODO: inputs should have either the top border rounded or just the bottom rounded
  let focused = false;
  let hidden  = true;

  let inputFocus = {
    focusLocation: false,
    focusGuests: false,
  };

  // event emmitters
  const dispatch            =  createEventDispatcher();
  const toggleFocus         =  () => { focused = true; hidden = !hidden; }
  const submit              =  () => dispatch("submit", $filters);
  const filterData          =  () => dispatch("filterdata");
  const focusLocationInput  =  () => dispatch("focuslocation",{ ...inputFocus, focusLocation: true });
  const focusGuestsInput    =  () => dispatch("focusguests", { ...inputFocus, focusGuests: true });
  /* const focusOut            =  () => dispatch("focusout", inputFocus); */
  /* const focusIn             =  () => dispatch("focusin", inputFocus); */

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

<header
  on:focusin={toggleFocus}
  on:focusout={toggleFocus}
  class:focused
  class="search"
>
  <form class:column={focused} on:submit|preventDefault={handleSubmit}>
    <span class:hidden={false} class="edit">
      <span class="text-xs font-bold text-black">Edit your search</span>
      <i class="material-icons">closed</i>
    </span>
    <div
      class:column={focused}
      class:rounded={focused}
      class="search-container"
    >

      <label class:hidden for="location">Location</label>
      <Input
        full={focused}
        id="location"
        placeholder="Location"
        value={`${$filters.location.city}, ${$filters.location.country}`}
        on:focus={focusLocationInput}
      />

      <label class:hidden for="guests">guests</label>
      <Input
        full={focused}
        bordersGrouped={!focused}
        borders={focused}
        id="guests"
        placeholder="Add guests"
        value={$filters.guests ? `${$filters.guests}` : ''}
        on:focus={focusGuestsInput}
      />
    </div>

    <Button
      full={focused}
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

    /* NOTE: only happens when in focused mode */
    width: 95%;
  }


  .search-container {
    @apply flex;
    @apply flex-row;
    @apply items-center;
    @apply h-full;
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
    /* height: 20em; */
    @apply w-full;
  }

  .hidden {
    display: none;
  }

  .column {
    @apply flex-col;
    width: 90%;
    @apply items-center;
    @apply justify-between;
  }

  .rounded {
    @apply rounded-md;
    @apply border-gray-light;
    @apply border;
  }

</style>
