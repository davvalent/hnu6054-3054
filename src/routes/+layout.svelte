<script>

import {
		onMount,
		afterUpdate
	} from 'svelte';

import "$lib/css/fonts.css";
import "$lib/css/style.css";

export let data;

let navigationList;

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

onMount(() => console.log("Main layout mounted"));

afterUpdate (() => {
    setAriaCurrent(navigationList);
    console.log("DOM updated");
  });

</script>

<svelte:head>
  <meta name="author" content="{data.author}" />
  <meta name="title" content="{data.title}" />
</svelte:head>

<header>
  <nav>
    <ul bind:this={navigationList}>

      <li id="/plan-de-cours">
        <a href="/plan-de-cours/">Plan de cours</a>
      </li>

      <li id="/">
        <a href="/" aria-current="page">HNU6054 Web sémantique et données</a>
      </li>

      <li id="/bibliographie">
        <a href="/bibliographie/">Bibliographie</a>
      </li>

    </ul>
  </nav>
</header>

<main>

{#if data.path != "/"}
  <h1>{data.title}</h1>
  <p>Version imprimable</p>
{/if}


{#if data.description}
  <section class="description">
    <p>{data.description}</p>
  </section>
{/if}

  <slot />

</main>

<footer>
  <p>Pied de page</p>
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
  margin: 0;
}

footer {
  border-top: solid 2px;
}

</style>