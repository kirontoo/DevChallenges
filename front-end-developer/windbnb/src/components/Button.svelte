<script lang="ts">
  export let text       : string  = "";
  export let color      : string  = "white";
  export let background : string  = "red";
  export let outline    : boolean = false;
  export let icon       : string  = "";
  export let grouped    : boolean = false;
</script>

<button
  on:click
  class:outline
  class:grouped
  class="btn text-{color} bg-{background}"
>
  {#if icon.length}
    <span class="material-icons">{icon}</span>
  {/if}
  {text}
</button>

<style type="text/postcss">
  .btn {
    @apply p-2;
    @apply rounded-md;
    @apply shadow;
    @apply text-center;
    @apply flex;
    @apply justify-between;
    @apply items-center;
  }

  .outline {
    @apply bg-white;
    @apply border-2;
    @apply border-gray-dark;
    @apply border-solid ;
    @apply text-gray-dark;
  }

  .grouped {
    @apply rounded-l-none;
  }

</style>
