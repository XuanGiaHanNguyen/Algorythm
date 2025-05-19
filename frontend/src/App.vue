<script setup>
import { ref } from 'vue';
import backgroundImage from '@/assets/App.gif';

const bgImage = ref(`url(${backgroundImage})`);
</script>

<template>
  <div class="min-h-screen bg-cover bg-center" :style="{ backgroundImage: bgImage }">
    <nav class="flex justify-center py-2 pt-6">
      <div class="flex flex-row items-center gap-10 text-lg font-semibold text-gray-500 px-4 py-3 bg-white rounded-2xl">
        <router-link to="/sort" class="hover:bg-gray-400 hover:text-gray-100 px-4 py-1 rounded-lg" active-class="bg-gray-400 text-gray-100">Sorting Algorithms</router-link>
        <router-link to="/path" class="hover:bg-gray-400 hover:text-gray-100 px-4 py-1 rounded-lg" active-class="bg-gray-400 text-gray-100">Path-finder</router-link>
        <router-link to="/sudoku" class="hover:bg-gray-400 hover:text-gray-100 px-4 py-1 rounded-lg" active-class="bg-gray-400 text-gray-100">Sudoku Solver</router-link>
        <router-link to="/bin" class="hover:bg-gray-400 hover:text-gray-100 px-4 py-1 rounded-lg" active-class="bg-gray-400 text-gray-100">Binary Tree</router-link>
      </div>    
    </nav>
    <router-view />
  </div>
</template>