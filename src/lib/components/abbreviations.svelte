<script>

  export let abbr;
  let title = null;

  abbr = abbr.toUpperCase();

  // @todo use switch
  if (abbr == 'RDF')
    title = 'Resource Description Framework';
  if (abbr == 'SPARQL')
    title = 'SPARQL Protocol and RDF Query Language';

</script>

<abbr data-title="{title}"
  title="">{abbr}</abbr>

<style>
  abbr {
    position: relative;
  }
  abbr[data-title]:hover::after {
    content: attr(data-title);
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    background-color: white;
    width: max-content;
    box-shadow: 1px 1px 5px #242424;
    border: 2px solid;
    padding: 0.5em;
  }

  @media print {
    abbr[title] {
	    text-decoration: none;
    }
  }
</style>