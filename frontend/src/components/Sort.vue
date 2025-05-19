<script setup>
  import { ref } from 'vue';
</script>

<template>
  <div class=" flex flex-row px-4">
    <!-- Left side with vertical "SORTING" text -->
    <div class="w-1/12 flex items-center justify-center">
      <div class="transform -rotate-90 text-8xl font-bold text-gray-500 tracking-wide">
        SORTING
      </div>
    </div>
    
    <!-- Right side with white background box -->
    <div class="w-11/12 p-4">
      <div class="bg-white rounded-lg h-[85vh]">
        <!-- Content for the white box goes here -->
      </div>
    </div>
  </div>
</template>