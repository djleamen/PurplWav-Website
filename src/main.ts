import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#5b3690',
          secondary: '#4a2c77',
          accent: '#8f6fbe',
          error: '#b3261e',
          warning: '#9a6700',
          info: '#1d5a96',
          success: '#1e7d4f',
        },
      },
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");



