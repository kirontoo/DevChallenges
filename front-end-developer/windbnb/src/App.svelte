<script lang="ts">
import Button from './components/Button.svelte';
import Header from './components/Header.svelte';

export let name: string = "Evan";
let src ="favicon.png";
</script>

<Header/>
<main>
  <h1>Hello {name}</h1>
  <img src={src} alt="">
  <Button outline text="text here"/>
</main>
<footer class="text-sm text-gray">
created  by 
  <a class="text-gray underline font-bold" href="https://www.github.com/kirontoo" target="__default"> Kirontoo </a>
  - devChallenges.io
</footer>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
