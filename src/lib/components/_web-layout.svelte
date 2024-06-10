<script>

import {
	onMount,
	afterUpdate,
} from 'svelte';

import { page } from '$app/stores';
import { base } from '$app/paths';

import "$lib/css/fonts.css";
import "$lib/css/style.css";

export let layoutData;

let navigationList;

function setAriaCurrent(nl) {

  console.log(
    "Dev Informations\n",
    nl, "\n",
    "pathname:", document.location.pathname
  );

  // set aria-current attribute
  for (const navigationListItem of nl.children) {
    if (navigationListItem.id === document.location.pathname) {
      if (navigationListItem.children[0].ariaCurrent == "page") {
        continue;
      } else {
        navigationListItem.children[0].ariaCurrent = "page";
      };
    } else {
      navigationListItem.children[0].ariaCurrent = "";
    };
  };
};

onMount(() => console.log("Web layout mounted"));

afterUpdate (() => {
  console.log(document.location.pathname);
  setAriaCurrent(navigationList);
  console.log("DOM updated");
});

function foobar() {
  console.log('LINK ACTIVATED');
  window.location.href = '?print'
}
</script>

<!-- HEADER -->
<header>
  <nav>
    <ul bind:this={navigationList}>

      <li id="{base}/plan-de-cours/">
        <a href="{base}/plan-de-cours/">Plan de cours</a>
      </li>

      <li id="{base}/">
        <a href="{base}/" aria-current="page">HNU6054 Web sémantique et données</a>
      </li>

      <li id="{base}/bibliographie/">
        <a href="{base}/bibliographie/">Bibliographie</a>
      </li>

    </ul>
  </nav>
</header>

<main>

{#if layoutData.path != `${base}/`}

  <h1>{layoutData.title}</h1>

  {#if layoutData.date}
  <p>{$page.data.date}</p>
  {/if}

  {#if layoutData.print}
  <p>
    <a href="?print" on:click={foobar}>Version imprimable</a> 
  </p>
  {/if}

{/if}

{#if layoutData.description}
  <section class="description">
    <p>{layoutData.description}</p>
  </section>
{/if}

  <slot />

</main>

<!-- FOOTER -->
<footer>
  <p><a href="{base}/a-propos">À propos</p>
  <p><a href="https://mas.to/tags/hnu6054/">#hnu6054@mas.to</a></p>
  <p>Mise à jour : {layoutData.dateGenerated}</p>
</footer>

<style>

  header {
    border-bottom: 2px solid;
  }
  
  header, footer {
    margin: 0 3rem 0 3rem;
  }
  
  header li/*, footer li*/ {
    display: inline;
    text-transform: uppercase;
  }
  
  header a {
      text-decoration: none;
      padding: 0.5em;
      border: 2px solid transparent;
  }
  
  header ul/*, footer ul*/ {
      justify-content: space-between;
      display: flex;
  }
  
  [aria-current="page"] {
    /* font-weight: bold; */
    border: 2px solid;
  }
  
  section.description {
	margin-top: 2rem;
}

section.description p {
  margin: 0.5rem 0 0.5rem 0;
}

footer {
  border-top: solid 2px;
}

</style>