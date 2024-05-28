<!-- page d'accueil -->

<script>
  export let data;
</script>

<h1>Séances</h1>

<section>
  <h2>Séance 1</h2>
  <ul class="seances">
    {#each data.seances as seance}
      {#if seance.meta.seance === 1}
        <li>
          <a href="s/{seance.slug}">{seance.meta.title}</a>
          <hr>
          <time datetime="{seance.meta.date}">{seance.meta.date}</time>
        </li>
      {/if}
    {/each}
  </ul>

  <h2>Séance 2</h2>
  <ul class="seances">
    {#each data.seances as seance}
      {#if seance.meta.seance === 2}
        <li>
          <a href="s/{seance.slug}">{seance.meta.title}</a>
          <hr>
          <time datetime="{seance.meta.date}">{seance.meta.date}</time>
        </li>
      {/if}
    {/each}
  </ul>

  <h2>Séance 3</h2>
  <ul>
    {#each data.seances as seance}
      {#if seance.meta.seance === 3}
        <li>
          <a href="s/{seance.slug}">{seance.meta.title}</a>
          <hr>
          <time datetime="{seance.meta.date}">{seance.meta.date}</time>
        </li>
      {/if}
    {/each}
  </ul>
</section>

<style>

.seances {
  padding: 0;
}

ul a {
  text-decoration: none;
}

.seances li {
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: .7rem;
}

.seances li a {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-decoration: none;
}

.seances hr {
	margin-top: 0;
	margin-bottom: 0;
	margin-right: .5rem;
	margin-left: .5rem;
	height: 1px;
	border: none;
	border-bottom: 1px #0609c6;
	flex: 1 0 1rem;
}

.seances li time {
	padding-left: 1rem;
	white-space: nowrap;
	font-variant-numeric: tabular-nums;
}

</style>