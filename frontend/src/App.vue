<script setup>
import { ref } from 'vue';
import backgroundImage from '@/assets/App.gif';

const bgImage = ref(`url(${backgroundImage})`);
</script>

<template>
  <div class="min-h-screen bg-cover bg-center" :style="{ backgroundImage: bgImage }">
    <nav class="flex justify-center py-3 pt-6">
      <div class="flex flex-row items-center gap-24 text-lg font-semibold text-gray-500 px-10 py-3 bg-white rounded-2xl">
        <router-link to="/sort" class="">Sorting Algorithms</router-link>
        <router-link to="/path">Path-finder</router-link>
        <router-link to="/bin">Binary Tree</router-link>
      </div>    
    </nav>
    <router-view />
  </div>
</template>