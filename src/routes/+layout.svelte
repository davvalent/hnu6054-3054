<!--
  charge dynamiquement le layout web ou print
  en fonction de la présence du paramètre d'URL ?print
-->

<script>

import { onMount } from 'svelte';
import { page } from '$app/stores';
import PrintLayout from '$lib/components/_print-layout.svelte';
import WebLayout from '$lib/components/_web-layout.svelte';

export let data;

let LayoutComponent;
let printLayout;
$: LayoutComponent = (printLayout) ? PrintLayout : WebLayout;

onMount(() => {
  console.log('MAIN LAYOUT MOUNTED');
  const params = new URLSearchParams(window.location.search);
  console.log('has print params:', params.has('print'));
  printLayout = params.has('print');
})

</script>

<svelte:head>
  <!-- meta -->
  <title>HNU6054 | {$page.data.title}</title>
  <meta name="author" content="{$page.data.author}" />
  <meta name="description" content="{$page.data.description}" />
  <meta name="generator" content="Svelte" />

  <!-- DC -->
  <meta property="dc:title" content="{$page.data.title}" />
  <meta property="dc:date" content="{$page.data.date}" />
  
</svelte:head>

<svelte:component
  this = {LayoutComponent}
  layoutData = {data}>
  <slot />
</svelte:component>