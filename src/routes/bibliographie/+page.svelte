<script>

import Bibliographie from '$lib/content/pages/bibliographie.md';
import ReferencesLists from '$lib/components/referencesLists.svelte';

export let data;

</script>

<Bibliographie />

<ReferencesLists
collections = {data} />
