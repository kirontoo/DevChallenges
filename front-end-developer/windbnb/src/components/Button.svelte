<script lang="ts">
  export let text: string = "";
  export let outline: boolean = false;
  export let icon: string = "";
</script>

<button 
  on:click
  class:outline
  class="btn"
>
  {#if icon.length}
    <span class="material-icons">{icon}</span>
  {/if}
  {text}
</button>

<style type="text/postcss">
  .btn {
    @apply bg-red;
    @apply p-2; 
    @apply rounded-md; 
    @apply shadow;
    @apply text-center;
    @apply text-white;
    @apply flex;
    @apply justify-between;
    @apply items-center;
  }

  .btn:hover {
    @apply bg-red;
  }

  .outline {
    @apply bg-white;
    @apply border-2;
    @apply border-gray-dark;
    @apply border-solid ;
    @apply text-gray-dark;
  }
</style>
