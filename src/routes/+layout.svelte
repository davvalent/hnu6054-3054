<script>
  import "$lib/css/style.css";
</script>

<svelte:head>
  <meta name="author" content="David Valentine" />
</svelte:head>

<main>
  <header>
    <nav>
      <ul>

        <li>
          <a href="./plan-de-cours/">Plan de cours</a>
        </li>

        <li>
          <a href="./" aria-current="page">HNU6054 Web sémantique et données</a>
        </li>

        <li>
          <a href="./bibliographie/">Bibliographie</a>
        </li>

      </ul>
    </nav>
  </header>

  <slot />

  <footer>
    Pied de page
  </footer>

</main>

