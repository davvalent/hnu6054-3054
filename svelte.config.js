import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import toc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {

  kit: {

    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback:  undefined,
      precompress: false,
      strict: true
		})
	},

  // extensions property tells Svelte what types of files to treat as components
  extensions: ['.svelte', '.md', '.svx'],

  preprocess: [
    mdsvex({

      extensions: ['.md', '.svx'],

// rehype start
      rehypePlugins: [
        [rehypeSlug],
        [toc, {
          headings: ["h2", "h3"],
          cssClasses: {
            toc: "page-outline", 
            link: "page-link",
          },
          position: "afterbegin",
          customizeTOC: toc => {

            toc.children.splice(0, 0, {
              type: "element",
              tagName: "strong",
              children: [{ 
                type: 'text',
                value: 'Table des matières'
              }],
              properties: {}
            });
            return false;
          }
        }]
      ]
// rehype end
    })
  ]
};

export default config;
