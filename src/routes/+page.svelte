<script>
  export let data;
</script>

<h1>Séances</h1>

<section id="séances">
  <ul>
    {#each data.seances as seance}
      <li>
        <h2>
          <a href="s/{seance.slug}">
            {seance.meta.title}
          </a>
        </h2>
        Published {seance.meta.date}
      </li>
    {/each}
  </ul>
</section>