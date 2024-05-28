<!--
  charge dynamiquement le layout web ou print
  en fonction de la présence du paramètre d'URL ?print
-->

<script>

// ordre d'import important pour l'application des styles CSS
import WebLayout from './__web-layout.svelte';
import PrintLayout from './__print-layout.svelte';

export let data;

let LayoutComponent;
  
$: LayoutComponent = (data.layout === "print") ? PrintLayout : WebLayout;

console.log("LAYOUT :", data.layout);

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