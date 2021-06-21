<script lang="ts">
  export let grouped: boolean = false;
  export let placeholder = '';
  export let value = '';
  import type { Location } from '../global';
  import Button from './Button.svelte';
  export let inputValue= '';

// TODO: make option with grouped like in button
// TODO: make this a simple input component with options for borders
</script>

<!--
<section>
  <input 
    on:input
    on:change
    on:click
    class="location"
    type="text"
    placeholder="Location"
    value={`${value.city}, ${value.country}`}>
  <input 
    on:input
    on:change
    on:click
    class="guests"
    type="text"
    placeholder="Add guests">
  <button 
    on:click
    class="search-btn material-icons">
    search
  </button>
</section>
-->
  <input 
    bind:value
    on:input
    on:change
    on:click
    class="guests"
    type="text"
    {placeholder}>

<style>
  section {
    font-family: 'Mulish', sans-serif;
    font-size: 0.4rem;
    @apply flex;
    @apply flex-row;
    @apply w-full;
    @apply rounded-xl;
    @apply shadow-md;
  }

  input {
    @apply w-1/2;
  }

  input::placeholder {
    @apply text-center;
  }

  .location {
    @apply rounded-l-xl;
  }

  .guests {
    @apply border-r;
    @apply border-l;
    @apply border-gray-light;
  }

  .search-btn {
    @apply text-red;
  }

  input, .search-btn {
    @apply p-3;
  }
</style>
