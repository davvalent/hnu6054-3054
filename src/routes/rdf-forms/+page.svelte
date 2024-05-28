<script>
    import { onDestroy, onMount } from "svelte";
    import "$lib/css/picnic.min.css";

    export let data;

  let editor,
    monaco,
    editorContainer,
    rdfForm,
    inputForm;

 const code = data.code;

    onMount(async () => {

        // préparer monaco
        monaco = (await import("./monaco")).default;
        const editor = monaco.editor.create(editorContainer);
        const model = monaco.editor.createModel(code, "plaintext",);
        editor.setModel(model);

        // récupérer les données de monaco lors de la création des données du formulaire
        rdfForm.addEventListener("formdata", event => {
            const graph = editor.getModel().getValue();
            event.formData.append('content', graph);
            console.log(graph);
        });
    });

    onDestroy(() => {
        monaco?.editor.getModels().forEach((model) => model.dispose());
        editor?.dispose();
    });

    // contenu MD
    import RdfForms from "$lib/content/pages/rdf-forms.md";

</script>

<h2>Formulaire RDF</h2>

<h3>Editor</h3>

<p>1) Parse TTL. 2) Serialize => JSON-LD</p>

<form method="POST" id="rdf-form" bind:this={rdfForm}>
    <!-- voir pour validation syntaxique -->
    <div class="form-group">
        <label for="container">Formulaire d’inférence -- top cool</label>
        <div class="container" name="monaco" bind:this={editorContainer} />
    </div>
    <button class="btn btn-primary">Submit</button>
</form>

<h3>Inputs avec inférence</h3>

<p>Saisir un triplet. Insérer dans l'entrepôt. Effectuer une requête avec la clause <code>DESCRIBE</code>. Observer les inférences.</p>

<form  method="POST" id="input-form" bind:this={inputForm}>

  <div>
      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" required />
  </div>

  <div>
      <label for="predicate">Predicate</label>
      <input type="text" id="subject" name="predicate" required />
  </div>

  <div>
      <label for="object">Object</label>
      <input type="text" id="object" name="predicate" required />
  </div>
  <button class="btn btn-primary">Submit</button>
</form>

<!-- Markdown -->
<RdfForms />

<style>

.container {
width: 100%;
height: 300px;
border: solid 2px;
margin: 1rem 0 0 0;
}

</style>
