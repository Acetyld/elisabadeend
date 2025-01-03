<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-yellow-200 p-4">
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
      <div class="flex items-center mb-4">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femojigraph.org%2Fmedia%2Fwhatsapp%2Fhatching-chick_1f423.png&f=1&nofb=1&ipt=3b130b8e413134e59b7e8d8cb16122917d4c519a8b1c79dc41730f032f3235c5&ipo=images" alt="Badeendje" class="w-12 h-12 mr-2">
        <h1 class="text-3xl font-bold text-yellow-800">Welkom op de Homepagina blob<3!</h1>
      </div>
      <router-link to="/games" class="bg-yellow-600 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700">
        Ga naar Gamelist
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home'
}
</script>

<style scoped>
/* Voeg hier je eigen styling toe */
</style>