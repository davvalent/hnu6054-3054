<script>

import {
	onMount,
	afterUpdate,
} from 'svelte';

import { base } from '$app/paths';

import "$lib/css/fonts.css";
import "$lib/css/style.css";

export let layoutData;

let navigationList;

const dateTimeEdited = Date();
let dateTimeGenerated = Date();

function setAriaCurrent(nl) {

console.log(
  "Dev Informations\n",
  nl, "\n",
  document.location
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
  setAriaCurrent(navigationList);
  console.log("DOM updated");
});

function foobar() {
  console.log('LIEN CLIKÉ');
  window.location.href = '?print'
}
</script>

<!-- HEADER -->
<header>
  <nav>
    <ul bind:this={navigationList}>

      <li id="{base}/plan-de-cours">
        <a href="{base}/plan-de-cours/">Plan de cours</a>
      </li>

      <li id="{base}/">
        <a href="{base}/" aria-current="page">HNU6054 Web sémantique et données</a>
      </li>

      <li id="{base}/bibliographie">
        <a href="{base}/bibliographie/">Bibliographie</a>
      </li>

    </ul>
  </nav>
</header>

<main>

{#if layoutData.path != `${base}/`}

  <h1>{layoutData.title}</h1>

  {#if layoutData.date}
  <p>Page éditée le {dateTimeEdited}</p>
  <p>Page générée le {dateTimeGenerated}</p>
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
  <p>À propos</p>
  <p><a href="https://mas.to/tags/hnu6054/">#hnu6054@mas.to</a></p>
  <p>{new Date()}</p>
</footer>

<style>

  header {
    border-bottom: solid 2px;
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