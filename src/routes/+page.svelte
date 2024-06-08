<!-- page d'accueil -->

<script>
  import Access from '$lib/components/access.svelte';
  export let data;
  const seances = data.seances;
</script>

<!-- <h1>Séances</h1> -->

<section>
  <h2>Séance 1</h2>
  <ul class="seances">
    {#each seances as seance}
      {#if seance.meta.seance === 1}
        <li>
          <Access
            deactivated = {seance.meta.deactivated}
            slug = {seance.slug}
            title = {seance.meta.title}
          />
          <hr>
          <time datetime="{seance.meta.date}">{seance.meta.date}</time>
        </li>
      {/if}
    {/each}
  </ul>

  <h2>Séance 2</h2>
  <ul class="seances">
    {#each seances as seance}
      {#if seance.meta.seance === 2}
        <li>
          <Access
            deactivated = {seance.meta.deactivated}
            slug = {seance.slug}
            title = {seance.meta.title}
          />
          <hr>
          <time datetime="{seance.meta.date}">{seance.meta.date}</time>
        </li>
      {/if}
    {/each}
  </ul>

  <h2>Séance 3</h2>
  <ul class="seances">
    {#each seances as seance}
      {#if seance.meta.seance === 3}
        <li>
          <Access
            deactivated = {seance.meta.deactivated}
            slug = {seance.slug}
            title = {seance.meta.title}
          />
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

.seances li {
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: .7rem;
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