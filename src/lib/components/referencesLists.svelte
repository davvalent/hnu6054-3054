<script>

export let collections;

</script>

{#each collections.collections as collection}
  <h2>{collection.data.name}</h2>
  {@html collection.formattedData}
{/each}
