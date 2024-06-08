<script>
  import { base } from '$app/paths';
	export let data;
  console.log("path s:", data);
</script>

<article>

{#if data.presentation}

<h2>Support de présentation</h2>

<p><a href="{base}{data.presentation}">Ouvrir en grand</a></p>

<iframe
  src={base}{data.presentation}
  loading="eager"
  referrerpolicy="no-referrer"
  allowfullscreen="allowfullscreen"
  allow="encrypted-media *"
  title={data.title} />
{/if}

{@html data.content}
</article>