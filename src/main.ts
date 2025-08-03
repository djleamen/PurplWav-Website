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
          primary: '#825ed1',
          secondary: '#7c3aed',
          accent: '#9575ff',
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#3b82f6',
          success: '#10b981',
        },
      },
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");



