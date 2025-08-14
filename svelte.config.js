import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
        postcss: true,
        typescript: false
    }),

    kit: {
        adapter: adapter({
            pages: path.resolve('../resto_nm_api/frontend'),
            assets: path.resolve('../resto_nm_api/frontend'),
            fallback: 'index.html',
            precompress: false
        }),
        paths: {
            base: '',
            relative: false // ✅ tambahkan koma setelah ini jika ada config lanjutan
        },
        prerender: {
            entries: ['*']
        }
        // trailingSlash: 'always' ← kalau ini masih ada, HAPUS
    }
};

export default config;