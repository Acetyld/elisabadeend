import './index.css';  // Importeer Tailwind CSS
// src/main.ts
import { createApp } from 'vue';  // Importeer de Vue bibliotheek
import App from './App.vue';  // Importeer de hoofdcomponent van je app
import router from './router';  // Importeer de router die we in stap 1 hebben gemaakt

// Maak de applicatie aan en gebruik de router
const app = createApp(App);
app.use(router);  // Dit vertelt de applicatie om de router te gebruiken
app.mount('#app');  // Laad de applicatie in het HTML-element met id="app"
