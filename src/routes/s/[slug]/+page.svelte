<script>
  import { base } from '$app/paths';
	export let data;
</script>

<article>
<h2>Support de présentation</h2>

<p>Ouvrir en grand</p>

<!-- iframe dans un if -->
<iframe
  src={base}{data.presentation}
  loading="eager"
  referrerpolicy="no-referrer"
  allowfullscreen="allowfullscreen"
  allow="encrypted-media *"
  title={data.title} />

	{@html data.content}
</article>