export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css", "~/assets/css/animations.css"],
  
  build: {
    transpile: ['three/examples/jsm/loaders/GLTFLoader', 'three/examples/jsm/controls/OrbitControls']
  },
  vite: {
    vue: {
      customElement: true
    },
  },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
      title: "Conquer Design",
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image", "@nuxt/eslint", '@tresjs/nuxt'],
});