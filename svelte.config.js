import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {

  kit: {
    paths: {
      base: dev ? '' : '/~david/hnu6054-svelte',
      relative: false
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback:  undefined,
      precompress: false,
      strict: true
		}),
    prerender: {
      handleHttpError: 'fail',
      entries: [
        '/s/2024-06-10',
        '/s/2024-06-12',
        '/s/2024-06-14',
        '/s/2024-06-20',
        '/',
        '/bibliographie',
        '/plan-de-cours'
      ]
    }
	},

  // extensions property tells Svelte what types of files to treat as components
  extensions: ['.svelte', '.md', '.svx'],

  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx'],
    })
  ]
};

export default config;