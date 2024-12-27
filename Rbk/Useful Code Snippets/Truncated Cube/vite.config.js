import { defineConfig } from 'vite';

export default defineConfig({
	
  worker: {
    // --- do this
    format: 'es',
    // --- or this
    // rollupOptions: {
    //   output: {
    //     inlineDynamicImports: true,
    //   },
    // },
  },
  
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  }
  
});


