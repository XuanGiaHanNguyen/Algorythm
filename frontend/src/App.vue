<script setup>

</script>

<template>
  <div class="min-h-screen bg-black">
   <nav class="flex justify-between items-center px-6 py-3 bg-black shadow-sm">
  <!-- Logo Section -->
  <div class="flex items-center">
    <router-link to="/" class="flex items-center hover:opacity-80 transition-opacity">
      <!-- Flowbite code icon -->
      <div class="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
        <svg class="w-6 h-6 text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
      </div>
      <span class="text-xl font-bold text-orange-500">AlgoViz</span>
    </router-link>
  </div>

  <!-- Navigation Links -->
  <div class="flex items-center gap-8">
    <router-link 
      to="/sort" 
      class="text-orange-300 hover:text-orange-500 hover:bg-gray-900 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-orange-500 bg-gray-800"
    >
      Sorting Algorithms
    </router-link>
    
    <router-link 
      to="/path" 
      class="text-orange-300 hover:text-orange-500 hover:bg-gray-900 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-orange-500 bg-gray-800"
    >
      Path-finder
    </router-link>
    
    <router-link 
      to="/sudoku" 
      class="text-orange-300 hover:text-orange-500 hover:bg-gray-900 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-orange-500 bg-gray-800"
    >
      Sudoku Solver
    </router-link>
    
    <router-link 
      to="/bin" 
      class="text-orange-300 hover:text-orange-500 hover:bg-gray-900 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-orange-500 bg-gray-800"
    >
      Binary Tree
    </router-link>
  </div>
</nav>
    <router-view />
  </div>
</template>