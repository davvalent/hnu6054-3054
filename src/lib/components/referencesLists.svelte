<script>

export let collections;
export let path;

</script>

  {#if path == "/plan-de-cours/"}
    <h2>Bibliographie sommaire</h2>

    {#each collections.collections as collection}
      {#if collection.key == 'BIVM4HNB'}
        {@html collection.formattedData}
      {/if}
    {/each}

  {:else}

    {#each collections.collections as collection}
      {#if collection.key !== 'BIVM4HNB'}
        <h2>{collection.data.name}</h2>
        {@html collection.formattedData}
      {/if}
    {/each}

  {/if}


