<script setup>

</script>

<template>
  <div class="min-h-screen bg-cover bg-center">
   <nav class="flex justify-between items-center px-6 py-3 bg-white shadow-sm">
  <!-- Logo Section -->
  <div class="flex items-center">
    <router-link to="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
      <!-- You can replace this with an actual logo image -->
      <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <span class="text-white font-bold text-xl">A</span>
      </div>
      <span class="text-xl font-bold text-gray-800">AlgoViz</span>
    </router-link>
  </div>

  <!-- Navigation Links -->
  <div class="flex items-center gap-8">
    <router-link 
      to="/sort" 
      class="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-blue-600 bg-blue-50"
    >
      Sorting Algorithms
    </router-link>
    
    <router-link 
      to="/path" 
      class="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-blue-600 bg-blue-50"
    >
      Path-finder
    </router-link>
    
    <router-link 
      to="/sudoku" 
      class="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-blue-600 bg-blue-50"
    >
      Sudoku Solver
    </router-link>
    
    <router-link 
      to="/bin" 
      class="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200 font-medium" 
      active-class="text-blue-600 bg-blue-50"
    >
      Binary Tree
    </router-link>
  </div>
</nav>
    <router-view />
  </div>
</template>