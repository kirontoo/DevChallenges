<script lang="ts">
  export let grouped     = false;
  export let borders     = false;
  export let placeholder = '';
  export let value       = '';
  export let id          = '';
</script>

<input
  on:input
  on:change
  on:click
  on:focus
  on:focusin
  on:focusout
  class:grouped
  class:borders
  {id}
  {value}
  type="text"
  {placeholder}
/>

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
