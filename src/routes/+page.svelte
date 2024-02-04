<script>
  export let data;
</script>

<svelte:head>
  <meta name="author" content="{data.author}" />
</svelte:head>

<section class="description">
  <p>{data.description}</p>
</section>

<p>{data.title}</p>
<p>{data.date}</p>

<h1>Séances</h1>

<section id="séances">
  <ul>
    {#each data.seances as seance}
      <li>
        <h2>
          <a href={seance.slug}>
            {seance.meta.title}
          </a>
        </h2>
        Published {seance.meta.date}
      </li>
    {/each}
  </ul>
</section>