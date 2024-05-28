<!--
  charge dynamiquement le layout web ou print
  en fonction de la présence du paramètre d'URL ?print
-->

<script>

import {
	onMount,
} from 'svelte';

import PrintLayout from './__print-layout.svelte';
import WebLayout from './__web-layout.svelte';

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
  <meta name="author" content="{data.author}" />
  <meta name="title" content="{data.siteTitle}" />
</svelte:head>

<svelte:component
  this = {LayoutComponent}
  layoutData = {data}>
  <slot />
</svelte:component>