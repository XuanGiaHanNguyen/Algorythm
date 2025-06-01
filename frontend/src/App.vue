<script setup>

</script>

<template>
  <div class="min-h-screen bg-white">
   <nav class="flex justify-between items-center px-6 py-3 bg-white shadow-md border-b border-gray-200">
  <!-- Logo Section -->
  <div class="flex items-center">
    <router-link to="/" class="flex items-center hover:opacity-80 transition-opacity">
      <!-- Flowbite code icon -->
      <div class="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
      </div>
      <span class="text-xl font-bold text-gray-600 ml-2">Algorythm</span>
    </router-link>
  </div>

  <!-- Navigation Links -->
  <div class="flex items-center gap-6">
    <router-link 
      to="/" 
      class="text-gray-600 hover:text-gray-500 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-gray-600 bg-gray-100"
    >
      Sorting Algorithms
    </router-link>
    
    <router-link 
      to="/path" 
      class="text-gray-600 hover:text-gray-500 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-gray-600 bg-gray-100"
    >
      Path-finder
    </router-link>
    
    <router-link 
      to="/sudoku" 
      class="text-gray-600 hover:text-gray-500 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-gray-600 bg-gray-100"
    >
      Sudoku Solver
    </router-link>
    
    <router-link 
      to="/bin" 
      class="text-gray-600 hover:text-gray-500 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-gray-600 bg-gray-100"
    >
      Binary Tree
    </router-link>
  </div>
</nav>
    <router-view />
  </div>
</template>