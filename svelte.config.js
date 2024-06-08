import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

// const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {

  kit: {
    paths: {
      base: '',
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