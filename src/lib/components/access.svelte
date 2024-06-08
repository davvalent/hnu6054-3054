<script>

  export let deactivated;
  export let slug;
  export let title;
  
</script>
  
{#if deactivated}
  {title}
{:else}
  <a href="s/{slug}">{title}</a>
{/if}

<style>

a {
  text-decoration: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-decoration: none;
}

</style>