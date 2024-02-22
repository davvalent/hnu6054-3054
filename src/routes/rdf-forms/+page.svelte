<script>
    import { onDestroy, onMount } from "svelte"; 
    let editor;
    let monaco;
    let editorContainer;
    let theForm;
    const code = `@prefix bot: <https://w3id.org/bot#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix display: <https://ouvroir.umontreal.ca/onto/display#> .
@prefix exhib: <https://ouvroir.umontreal.ca/data/exhib#> .
exhib:space0000 rdfs:label "Préambule"@fr ;
  bot:adjacentZone exhib:space0001 ;
  display:hasExhibit exhib:exhibit0001 ,
    exhib:exhibit0002 ,
    exhib:exhibit0003 ,
    exhib:exhibit0004 ;
  bot:adjacentElement exhib:element0004 ,
    exhib:element0005 ,
    exhib:element0006 ,
    exhib:element0007 .`;

    onMount(async () => {

        // préparer monaco
        monaco = (await import("./monaco")).default;
        const editor = monaco.editor.create(editorContainer);
        const model = monaco.editor.createModel(code, "plaintext",);
        editor.setModel(model);

        // récupérer les données de monaco lors de la création des données du formulaire
        theForm.addEventListener("formdata", event => {
            event.formData.append('content', editor.getModel().getValue());
            console.log(editor.getModel().getValue());
        });
    });

    onDestroy(() => {
        monaco?.editor.getModels().forEach((model) => model.dispose());
        editor?.dispose();
    });

    // contenu MD
    import RdfForms from "$lib/content/pages/rdf-forms.md";

    // output de load()dans server
    // export let data;
</script>

<h2>Formulaire RDF</h2>

<form method="POST" id="MyForm" bind:this={theForm}>
    <!-- voir pour validation syntaxique -->
    <div class="form-group">
        <label for="container">Formulaire d’inférence -- top cool</label>
        <div class="container" name="monaco" bind:this={editorContainer} />
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