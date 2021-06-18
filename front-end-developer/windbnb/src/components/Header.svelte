
<header>
  <span class="logo">
    <i class="triangle" />
    <span class="text-red font-bold">windbnb</span>
  </span>
</header>

<style>
  header {
    @apply flex;
    @apply flex-row;
    @apply items-center;
    @apply justify-start;
    @apply w-4/5;
  }

  .logo {
    @apply flex;
    @apply flex-row;
    @apply items-center;
  }

  .triangle {
    @apply bg-red;
    @apply m-2;
    position: relative;
    text-align: left;
  }

  .triangle:before,
  .triangle:after {
    content: '';
    position: absolute;
    background-color: inherit;
  }

  .triangle,
  .triangle:before,
  .triangle:after {
    width: 0.5em;
    height: 0.5em;
    border-top-right-radius: 40%;
  }

  .triangle {
    transform: rotate(-60deg) skewX(-30deg) scale(1,.866);
  }
  .triangle:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
  }
  .triangle:after {
    transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
  }
</style>
