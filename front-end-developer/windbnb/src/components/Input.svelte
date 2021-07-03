<script lang="ts">
  export let grouped         = false;
  export let borders         = false;
  export let bordersGrouped  = false;
  export let placeholder     = '';
  export let value           = '';
  export let id              = '';
  export let full            = false;
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
  class:bordersGrouped
  class:full
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
    @apply border-gray-light;
    @apply border;
  }

  .bordersGrouped {
    @apply border-r-2;
    @apply border-l-2;
    @apply border-gray-light;
  }

  .grouped {
    @apply rounded-l-xl;
  }

  .full{
    @apply w-full;
  }
</style>
