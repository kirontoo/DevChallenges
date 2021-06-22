<script lang="ts">
  export let grouped     = false;
  export let borders     = false;
  export let placeholder = '';
  export let value       = '';
</script>

  <input 
    on:input
    on:change
    on:click
    class:grouped
    class:borders
    {value}
    type="text"
    {placeholder}>

<style>
  input {
    @apply p-3;
    @apply w-1/2;
  }

  input::placeholder {
    @apply text-center;
  }

  .borders {
    @apply border-r-2;
    @apply border-l-2;
    @apply border-gray-light;
  }

  .grouped {
    @apply rounded-l-xl;
  }
</style>
