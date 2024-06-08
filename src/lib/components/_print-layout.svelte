<script>

import { onMount } from 'svelte';
import { base } from '$app/paths';

export let layoutData;
  
onMount(() => console.log("Print layout mounted"));

</script>

<svelte:head>
  <script src="{base}/paged.polyfill.min.js"></script>
</svelte:head>

<header>
  <h1>HNU6054 Humanités numériques : Web sémantique et données</h1>
</header>

<main>

  <h1>{layoutData.title}</h1>
  {#if layoutData.description}
    <section class="description">
      <p>{layoutData.description}</p>
    </section>
  {/if}

  <slot />

</main>

<style>

  @media print {
    main,
    header {
      font-size: 75%;
      color: black;
      font-family: sans-serif;
    }
    main {
      padding: 0;
    }
    header h1 {
      font-size: 1.25em;
    }
  }

   @page {
    size: letter;
    margin-left: 2cm;
    margin-right: 2cm;
    margin-top: 3cm;
    margin-bottom: 3cm;
    @bottom-left {
      color: black;
      font-size: 75%;
      font-style: italic;
      font-family: sans-serif;
      content: "HNU6054 Humanités numériques : Web sémantique et données";
    }
    @bottom-right {
      color: black;
      font-size: 75%;
      font-family: sans-serif;
      content: counter(page);
    }
  }

</style>
