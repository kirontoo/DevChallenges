<script lang="ts">
export let superHost    : boolean;
export let locationType : string;
export let beds         : number;
export let photo        : string;
export let title        : string;
export let rating       : number;

let description = locationType;
if ( beds ) {
  description += ` ${beds} beds`;
}
</script>

<section class="card">
  <header class="card-header"><img src={photo} alt={title}></header>
  <div class="card-info">
    <div class="card-info-container">
      {#if superHost}
        <span class="card-host">super host</span>
      {/if}
      <span class="card-type">
        <span class="card-type-description">{description}</span>
        <span class="card-rating">
          <span class="material-icons">star_rate</span>
          <span class="rating">{rating}</span>
        </span>
      </span>
    </div>
    <span class="card-title">{title}</span>
  </div>
</section>

<style>
.card {
  @apply mb-8;
  @apply w-full;
  @apply h-full;
  @apply font-medium;
}
.card-header {
  @apply w-full;
}

img {
  @apply rounded-3xl;
  @apply w-full;
  @apply h-56;
}

.card-info {
  @apply w-full;
  @apply flex;
  @apply flex-col;
  @apply items-center;
}

.card-info-container {
  @apply w-full;
  @apply flex;
  @apply flex-row;
  @apply flex-wrap;
  @apply items-center;
  @apply my-4;
}

.card-host {
  @apply text-center;
  @apply uppercase;
  @apply rounded-full;
  @apply border-gray-dark;
  @apply text-gray-dark;
  @apply font-bold;
  @apply border-solid;
  @apply border-2;
  @apply p-2;
  @apply mb-2;
  @apply w-full;
  font-size: 0.1em;
}

.card-type {
  font-size: 0.2em;
  @apply w-full;
  @apply text-gray;
  @apply font-medium;
  @apply flex;
  @apply flex-row;
  @apply justify-between;
  @apply font-medium;
}

.card-type-description {
  @apply text-gray;
}

.material-icons {
  @apply text-red;
  @apply mr-2;
}

.card-rating {
  @apply flex;
  @apply items-center;
  @apply text-gray-dark;
}

.card-title {
  font-size: 0.9rem;
  @apply w-full;
  @apply text-gray-dark;
  @apply font-bold;
}
</style>
