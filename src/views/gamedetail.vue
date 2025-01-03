<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-yellow-200 p-4">
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h1 class="text-3xl font-bold text-yellow-800 mb-4">{{ game.title }}</h1>
      <p class="text-yellow-600">{{ game.status }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Anime {
  mal_id: number;
  title: string;
  status: string;
}

const props = defineProps<{
  id: string | number;
}>();

const game = ref<Anime>({
  mal_id: 0,
  title: '',
  status: ''
});

const fetchGameDetails = async () => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${props.id}`);
    game.value = response.data.data;
  } catch (error) {
    console.error('Er is een fout opgetreden bij het ophalen van de game details:', error);
  }
};

onMounted(() => {
  fetchGameDetails();
});
</script>

<style scoped>
/* Voeg hier je eigen styling toe */
</style>