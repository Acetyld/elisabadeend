
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Anime {
  mal_id: number;
  title: string;
}

const games = ref<Anime[]>([]);

const fetchGames = async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime');
    games.value = response.data.data;
  } catch (error) {
    console.error('Er is een fout opgetreden bij het ophalen van de games:', error);
  }
};

onMounted(() => {
  fetchGames();
});
</script>
<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-yellow-200 p-4">
      <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <div class="flex items-center mb-4">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femojigraph.org%2Fmedia%2Fwhatsapp%2Fhatching-chick_1f423.png&f=1&nofb=1&ipt=3b130b8e413134e59b7e8d8cb16122917d4c519a8b1c79dc41730f032f3235c5&ipo=images" alt="Badeendje" class="w-12 h-12 mr-2">
          <h1 class="text-3xl font-bold text-yellow-800">Badeendjes Games</h1>
        </div>
        <ul class="space-y-2">
          <!-- Lijst van games die we ophalen van de API -->
          <li v-for="game in games" :key="game.mal_id" class="flex items-center text-yellow-600 hover:text-yellow-800">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femojigraph.org%2Fmedia%2Fwhatsapp%2Fhatching-chick_1f423.png&f=1&nofb=1&ipt=3b130b8e413134e59b7e8d8cb16122917d4c519a8b1c79dc41730f032f3235c5&ipo=images" alt="Badeendje" class="w-6 h-6 mr-2">
            <router-link :to="{ name: 'GameDetail', params: { id: game.mal_id } }" class="hover:underline">
              {{ game.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  /* Voeg hier je eigen styling toe */
  </style>