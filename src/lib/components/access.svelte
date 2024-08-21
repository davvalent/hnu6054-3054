<script>

  export let deactivated;
  export let slug;
  export let title;
  
</script>

<span title="{title}">
  {#if deactivated}
    <a href="s/{slug}"
      tabindex="-1"
      aria-disabled="true">{title}</a>
  {:else}
    <a href="s/{slug}">{title}</a>
  {/if}
</span>

<style>

a {
	text-decoration: none;
}

a[aria-disabled="true"] {
  pointer-events: none;
}

span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}

</style>