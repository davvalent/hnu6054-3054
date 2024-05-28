<script>
  export let layoutData;
</script>

<svelte:head>
  <script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>
</svelte:head>

<header>
  <h1>{layoutData.siteTitle}</h1>
</header>

<main>

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
    margin-left: 1.8cm;
    margin-right: 1.8cm;
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
