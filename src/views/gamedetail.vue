<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-yellow-200 p-4">
      <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 class="text-3xl font-bold text-yellow-800 mb-4">{{ game.title }}</h1>
        <p class="text-yellow-600">{{ game.status }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'GameDetail',
    props: ['id'],
    data() {
      return {
        game: {},  // Hier gaan we de details van de game opslaan
      };
    },
    mounted() {
      this.fetchGameDetails();  // Haal de game details op zodra de component geladen is
    },
    methods: {
      async fetchGameDetails() {
        try {
          // Haal data op van de API
          const response = await axios.get(`https://api.jikan.moe/v4/anime/${this.id}`);
          this.game = response.data.data;  // Sla de opgehaalde game details op
        } catch (error) {
          console.error('Er is een fout opgetreden bij het ophalen van de game details:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Voeg hier je eigen styling toe */
  </style>