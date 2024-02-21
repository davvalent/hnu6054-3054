<script>

export let collections;

</script>

{#each collections.collections as collection}
  <h1>{collection.data.name}</h1>
  {@html collection.formattedData}
{/each}
