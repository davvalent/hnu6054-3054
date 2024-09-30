<script>

import Plan from '$lib/content/pages/plan-de-cours.md';
import ReferencesLists from '$lib/components/referencesLists.svelte';

export let data;

</script>

<Plan />

<ReferencesLists
collections = {data}
path = {data.url}/>

