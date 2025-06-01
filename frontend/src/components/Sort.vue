<template>
  <div class="p-6 px-10 mx-auto" :class="isDarkMode ? 'dark-mode' : 'light-mode'">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl text-gray-700 font-bold">Sorting Algorithm Visualizer</h1>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="space-y-4">
        <div>
          <label class="block mb-2 text-gray-600 font-medium">Input Array (comma separated):</label>
          <div class="flex gap-2">
            <input
              type="text"
              v-model="inputArray"
              class="w-full p-2 border rounded transition-colors"
              :class="'bg-white border-gray-300'"
              :disabled="isSorting && isPlaying"
            />
            <button
              @click="generateRandomArray"
              class="bg-secondary border-gray-300 px-3 py-2 border-2 rounded transition-colors hover:bg-secondary-dark"
              :disabled="isSorting && isPlaying"
              title="Generate Random Array"
            >
              <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div>
          <label class="block mb-2 font-medium text-gray-600">Algorithm:</label>
          <select
            v-model="algorithm"
            class="w-full p-2 border rounded transition-colors"
            :class="'bg-white border-gray-300'"
            :disabled="isSorting && isPlaying"
          >
            <option value="insertion">Insertion Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="merge">Merge Sort</option>
          </select>
        </div>
        
        <div>
          <label class="block mb-2 font-medium text-gray-600">Array Size:</label>
          <div class="flex items-center gap-2">
            <input
              type="range"
              min="5"
              max="30"
              v-model.number="arraySize"
              class="w-full"
              :disabled="isSorting && isPlaying"
            />
            <span class="w-8 text-center">{{ arraySize }}</span>
          </div>
        </div>
      </div>
      
      <div class="space-y-4">
        <div class="algorithm-info p-4 rounded transition-colors" :class="'bg-gray-100'">
          <h3 class="font-bold text-lg text-gray-700 mb-2">{{ getAlgorithmName }}</h3>
          <div class="grid grid-cols-2 gap-2 mb-2">
            <div>
              <p class="text-sm font-medium text-gray-700">Time Complexity:</p>
              <p class="text-sm">{{ getAlgorithmInfo.time }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-700">Space Complexity:</p>
              <p class="text-sm">{{ getAlgorithmInfo.space }}</p>
            </div>
          </div>
          <p class="text-sm mt-2">{{ getAlgorithmInfo.description }}</p>
        </div>
        
        <!-- Unified Control Panel -->
        <div class="control-panel p-4 rounded transition-colors" :class="'bg-gray-100'">
          <div class="flex flex-col">
            <!-- Main Start/Restart Button -->
            <button
              @click="startSort"
              class="bg-primary text-gray-700 py-1 px-4 rounded transition-colors hover:bg-primary-dark flex items-center justify-center gap-2"
              :disabled="false"
            >
              <div class="p-1 rounded">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd"/>
                </svg>
              </div>
              {{ isSorting ? 'Restart Sort' : 'Start Sorting' }}
            </button>

            <!-- Playback Controls (only show when sorting is active) -->
            <div v-if="isSorting" class="flex justify-center rounded-t bg-white py-2 pt-4 space-x-4">
              <button
                @click="stepBack"
                class="bg-white border-2 border-gray-300 text-white px-3 py-2 rounded transition-colors hover:bg-gray-50 flex items-center"
                :disabled="stepIndex === 0 || isPlaying"
                title="Step Back"
              >
               <svg class="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4"/>
                </svg>
              </button>
              
              <button
                @click="togglePlay"
                :class="[
                  'bg-white border-2 border-gray-300 hover:bg-gray-50',
                  'text-gray-600 px-4 py-2 rounded transition-colors flex items-center justify-center'
                ]"
                title="Play/Pause"
              >
                <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              
              <button
                @click="stepForward"
                class="bg-white border-2 border-gray-300 text-white px-3 py-2 rounded transition-colors hover:bg-gray-50 flex items-center"
                :disabled="stepIndex >= sortSteps.length - 1 || isPlaying"
                title="Step Forward"
              >
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4"/>
                </svg>
              </button>
              
              <button
                @click="resetSort"
                class="border-2 border-gray-300 px-3 py-2 rounded transition-colors hover:bg-gray-50 flex items-center"
                title="Reset"
              >
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                </svg>

              </button>
            </div>
            
            <!-- Speed Control (only show when sorting is active) -->
            <div v-if="isSorting" class="flex items-center justify-center gap-2 rounded-b pb-2 pt-1 bg-white">
              <span class="text-sm">Speed:</span>
              <input
                type="range"
                min="50"
                max="1000"
                v-model="speedValue"
                class="w-32"
              />
              <span class="text-xs">{{ speedValue }}ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="visualization-container mb-6 p-4 rounded-lg border transition-colors" 
         :class="'bg-white border-gray-200'">
      <div class="flex items-end justify-center h-64 w-full">
        <div
          v-for="(value, index) in currentArray"
          :key="index"
          class="mx-0.5 rounded-t-md transition-all duration-200 flex flex-col justify-end items-center"
          :class="{'transform scale-y-105': isActive(index)}"
          :style="{ 
            height: (value * heightRatio) + 'px',
            backgroundColor: getBarColor(index),
            width: getBarWidth
          }"
        >
          <div class="text-center text-xs font-medium" :class="isDarkMode ? 'text-white' : ''" v-if="showValues">
            {{ value }}
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="isSorting" class="progress-info mb-6 p-4 rounded-lg border transition-colors"
         :class="isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'">
      <div class="flex justify-between mb-4">
        <span>Step: {{ stepIndex }} / {{ sortSteps.length - 1 }}</span>
        <div class="flex items-center gap-2">
          <span>Show Values:</span>
          <label class="switch">
            <input type="checkbox" v-model="showValues">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      
      <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div class="bg-primary h-2.5 rounded-full transition-all" 
             :style="{width: `${(stepIndex / (sortSteps.length - 1)) * 100}%`}"></div>
      </div>
    </div>
    
    <div class="legend flex flex-wrap justify-center gap-6 mt-6">
      <div class="flex items-center">
        <div class="w-4 h-4 mr-2 rounded" style="background-color: var(--color-normal);"></div>
        <span>Normal</span>
      </div>
      <div class="flex items-center">
        <div class="w-4 h-4 mr-2 rounded" style="background-color: var(--color-comparing);"></div>
        <span>Comparing</span>
      </div>
      <div class="flex items-center">
        <div class="w-4 h-4 mr-2 rounded" style="background-color: var(--color-swapping);"></div>
        <span>Swapping</span>
      </div>
      <div class="flex items-center">
        <div class="w-4 h-4 mr-2 rounded" style="background-color: var(--color-pivot);"></div>
        <span>Pivot/Special</span>
      </div>
      <div class="flex items-center">
        <div class="w-4 h-4 mr-2 rounded" style="background-color: var(--color-sorted);"></div>
        <span>Sorted</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputArray: '64,34,25,12,22,11,90',
      algorithm: 'insertion',
      sortSteps: [],
      stepIndex: 0,
      currentArray: [],
      isPlaying: false,
      isSorting: false,
      speedValue: 300,
      comparingIndices: [],
      swappingIndices: [],
      pivotIndices: [],
      sortedIndices: [],
      timer: null,
      isDarkMode: false,
      showValues: true,
      arraySize: 15
    }
  },
  
  computed: {
    speed() {
      return 1050 - parseInt(this.speedValue);
    },
    
    heightRatio() {
      const maxValue = Math.max(...this.currentArray, 1);
      return 250 / maxValue;
    },
    
    getBarWidth() {
      const width = Math.max(8, Math.min(30, 600 / this.currentArray.length));
      return `${width}px`;
    },
    
    getAlgorithmName() {
      const names = {
        bubble: 'Bubble Sort',
        insertion: 'Insertion Sort',
        selection: 'Selection Sort',
        quick: 'Quick Sort',
        merge: 'Merge Sort',
        heap: 'Heap Sort'
      };
      return names[this.algorithm] || 'Unknown Algorithm';
    },
    
    getAlgorithmInfo() {
      const info = {
        bubble: {
          time: 'Best: O(n), Average: O(n²), Worst: O(n²)',
          space: 'O(1)',
          description: 'Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.'
        },
        insertion: {
          time: 'Best: O(n), Average: O(n²), Worst: O(n²)',
          space: 'O(1)',
          description: 'Insertion sort builds the final sorted array one item at a time, by comparing each element with the previous items.'
        },
        selection: {
          time: 'Best: O(n²), Average: O(n²), Worst: O(n²)',
          space: 'O(1)',
          description: 'Selection sort finds the minimum element from the unsorted part and puts it at the beginning.'
        },
        quick: {
          time: 'Best: O(n log n), Average: O(n log n), Worst: O(n²)',
          space: 'O(log n)',
          description: 'Quick sort selects a pivot element and partitions the array around the pivot, then recursively sorts the sub-arrays.'
        },
        merge: {
          time: 'Best: O(n log n), Average: O(n log n), Worst: O(n log n)',
          space: 'O(n)',
          description: 'Merge sort divides the array into halves, sorts them recursively, and then merges the sorted halves.'
        },
        heap: {
          time: 'Best: O(n log n), Average: O(n log n), Worst: O(n log n)',
          space: 'O(1)',
          description: 'Heap sort converts the array into a heap data structure, and then repeatedly extracts the maximum element.'
        }
      };
      return info[this.algorithm] || { time: '', space: '', description: '' };
    }
  },
  
  watch: {
    stepIndex(newValue) {
      if (this.sortSteps.length > 0 && newValue < this.sortSteps.length) {
        const step = this.sortSteps[newValue];
        this.currentArray = step.array;
        this.comparingIndices = step.comparing || [];
        this.swappingIndices = step.swapping || [];
        this.pivotIndices = step.pivot || [];
        this.sortedIndices = step.sorted || [];
      }
    },
    
    arraySize() {
      this.generateRandomArray();
    }
  },
  
  mounted() {
    this.currentArray = this.parseInput();
    // Check for user preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = true;
    }
  },
  
  beforeUnmount() {
    this.clearTimer();
  },
  
  methods: {
    parseInput() {
      return this.inputArray.split(',')
        .map(item => parseInt(item.trim(), 10))
        .filter(num => !isNaN(num));
    },
    
    generateRandomArray() {
      const length = this.arraySize;
      const randomArray = Array.from({ length }, () => Math.floor(Math.random() * 90) + 10); // 10-100
      this.inputArray = randomArray.join(',');
      this.currentArray = randomArray;
      this.resetSort();
    },
    
    startSort() {
      const parsedArray = this.parseInput();
      if (parsedArray.length < 2) return;
      
      this.currentArray = parsedArray;
      this.isSorting = true;
      
      this.sortSteps = this.getSortingSteps(parsedArray, this.algorithm);
      this.stepIndex = 0;
      this.playSteps();
    },
    
    playSteps() {
      this.isPlaying = true;
      this.clearTimer();
      
      this.timer = setInterval(() => {
        if (this.stepIndex < this.sortSteps.length - 1) {
          this.stepIndex++;
        } else {
          this.clearTimer();
          this.isPlaying = false;
        }
      }, this.speed);
    },
    
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    
    togglePlay() {
      if (this.stepIndex >= this.sortSteps.length - 1) {
        this.resetSort();
        this.playSteps();
        return;
      }
      
      if (this.isPlaying) {
        this.clearTimer();
        this.isPlaying = false;
      } else {
        this.playSteps();
      }
    },
    
    stepForward() {
      if (this.stepIndex < this.sortSteps.length - 1) {
        this.stepIndex++;
      }
    },
    
    stepBack() {
      if (this.stepIndex > 0) {
        this.stepIndex--;
      }
    },
    
    resetSort() {
      this.clearTimer();
      this.stepIndex = 0;
      this.isPlaying = false;
      this.isSorting = false;
      this.comparingIndices = [];
      this.swappingIndices = [];
      this.pivotIndices = [];
      this.sortedIndices = [];
    },
    
    getBarColor(index) {
      if (this.swappingIndices.includes(index)) return 'var(--color-swapping)';
      if (this.comparingIndices.includes(index)) return 'var(--color-comparing)';
      if (this.pivotIndices.includes(index)) return 'var(--color-pivot)';
      if (this.sortedIndices.includes(index)) return 'var(--color-sorted)';
      return 'var(--color-normal)';
    },
    
    isActive(index) {
      return this.comparingIndices.includes(index) || 
             this.swappingIndices.includes(index) || 
             this.pivotIndices.includes(index);
    },
    
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    
    getSortingSteps(arr, algorithm) {
      const steps = [];
      const a = [...arr];
      
      if (algorithm === 'insertion') {
        // Insertion Sort
        const n = a.length;
        const sorted = [0];
        
        for (let i = 1; i < n; i++) {
          let key = a[i];
          let j = i - 1;
          
          steps.push({
            array: [...a],
            comparing: [i, j],
            swapping: [],
            sorted: [...sorted]
          });
          
          while (j >= 0 && a[j] > key) {
            steps.push({
              array: [...a],
              comparing: [i, j],
              swapping: [j + 1, j],
              sorted: [...sorted]
            });
            
            a[j + 1] = a[j];
            j--;
            
            steps.push({
              array: [...a],
              comparing: [i, j >= 0 ? j : 0],
              swapping: [],
              sorted: [...sorted]
            });
          }
          
          a[j + 1] = key;
          sorted.push(i);
          
          steps.push({
            array: [...a],
            comparing: [],
            swapping: [],
            sorted: [...sorted]
          });
        }
      } else if (algorithm === 'quick') {
        // Quick Sort
        const sorted = [];
        
        const partition = (arr, low, high) => {
          const pivot = arr[high];
          steps.push({
            array: [...arr],
            comparing: [],
            swapping: [],
            pivot: [high],
            sorted: [...sorted]
          });
          
          let i = low - 1;
          
          for (let j = low; j < high; j++) {
            steps.push({
              array: [...arr],
              comparing: [j, high],
              swapping: [],
              pivot: [high],
              sorted: [...sorted]
            });
            
            if (arr[j] <= pivot) {
              i++;
              
              if (i !== j) {
                steps.push({
                  array: [...arr],
                  comparing: [],
                  swapping: [i, j],
                  pivot: [high],
                  sorted: [...sorted]
                });
                
                [arr[i], arr[j]] = [arr[j], arr[i]];
                
                steps.push({
                  array: [...arr],
                  comparing: [],
                  swapping: [],
                  pivot: [high],
                  sorted: [...sorted]
                });
              }
            }
          }
          
          steps.push({
            array: [...arr],
            comparing: [],
            swapping: [i + 1, high],
            pivot: [],
            sorted: [...sorted]
          });
          
          [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
          
          steps.push({
            array: [...arr],
            comparing: [],
            swapping: [],
            pivot: [i + 1],
            sorted: [...sorted]
          });
          
          return i + 1;
        };
        
        const quickSort = (arr, low, high) => {
          if (low < high) {
            const pi = partition(arr, low, high);
            
            if (low === 0 && high === arr.length - 1) {
              sorted.push(pi);
              steps.push({
                array: [...arr],
                comparing: [],
                swapping: [],
                pivot: [],
                sorted: [...sorted]
              });
            }
            
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
            
            // Mark sorted regions
            if (low === 0 && high === pi - 1) {
              for (let i = low; i <= high; i++) {
                if (!sorted.includes(i)) sorted.push(i);
              }
              steps.push({
                array: [...arr],
                comparing: [],
                swapping: [],
                pivot: [],
                sorted: [...sorted]
              });
            }
            
            if (pi + 1 === low && high === arr.length - 1) {
              for (let i = low; i <= high; i++) {
                if (!sorted.includes(i)) sorted.push(i);
              }
              steps.push({
                array: [...arr],
                comparing: [],
                swapping: [],
                pivot: [],
                sorted: [...sorted]
              });
            }
          } else if (low === high && !sorted.includes(low)) {
            sorted.push(low);
            steps.push({
              array: [...arr],
              comparing: [],
              swapping: [],
              pivot: [],
              sorted: [...sorted]
            });
          }
        };
        
        quickSort(a, 0, a.length - 1);
      } else if (algorithm === 'merge') {
        // Merge Sort
        const sorted = [];
        const tempArray = [...a];
        
        const merge = (arr, left, mid, right) => {
          const n1 = mid - left + 1;
          const n2 = right - mid;
          
          const L = new Array(n1);
          const R = new Array(n2);
          
          for (let i = 0; i < n1; i++) {
            L[i] = arr[left + i];
          }
          for (let j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
          }
          
          let i = 0, j = 0, k = left;
          
          while (i < n1 && j < n2) {
            steps.push({
              array: [...arr],
              comparing: [left + i, mid + 1 + j],
              swapping: [],
              sorted: [...sorted]
            });
            
            if (L[i] <= R[j]) {
              steps.push({
                array: [...arr],
                comparing: [],
                swapping: [k],
                sorted: [...sorted]
              });
              
              arr[k] = L[i];
              i++;
            } else {
              steps.push({
                array: [...arr],
                comparing: [],
                swapping: [k],
                sorted: [...sorted]
              });
              
              arr[k] = R[j];
              j++;
            }
            k++;
            
            steps.push({
              array: [...arr],
              comparing: [],
              swapping: [],
              sorted: [...sorted]
            });
          }
          
          while (i < n1) {
            steps.push({
              array: [...arr],
              comparing: [],
              swapping: [k],
              sorted: [...sorted]
            });
            
            arr[k] = L[i];
            i++;
            k++;
            
            steps.push({
              array: [...arr],
              comparing: [],
              swapping: [],
              sorted: [...sorted]
            });
          }
          
          while (j < n2) {
            steps.push({
              array: [...arr],
              comparing: [],
              swapping: [k],
              sorted: [...sorted]
            });
            
            arr[k] = R[j];
            j++;
            k++;
            
            steps.push({
              array: [...arr],
              comparing: [],
              swapping: [],
              sorted: [...sorted]
            });
          }
          
          // Mark the merged region as sorted
          for (let i = left; i <= right; i++) {
            if (!sorted.includes(i)) {
              sorted.push(i);
            }
          }
          
          steps.push({
            array: [...arr],
            comparing: [],
            swapping: [],
            sorted: [...sorted]
          });
        };
        
        const mergeSort = (arr, left, right) => {
          if (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            
            merge(arr, left, mid, right);
          } else if (left === right && !sorted.includes(left)) {
            sorted.push(left);
            steps.push({
              array: [...arr],
              comparing: [],
              swapping: [],
              sorted: [...sorted]
            });
          }
        };
        
        mergeSort(a, 0, a.length - 1);
      } else if (algorithm === 'heap') {
        // Heap Sort
        const n = a.length;
        const sorted = [];
        
        const heapify = (arr, n, i) => {
          let largest = i;
          const left = 2 * i + 1;
          const right = 2 * i + 2;
          
          if (left < n) {
            steps.push({
              array: [...arr],
              comparing: [largest, left],
              swapping: [],
              sorted: [...sorted]
            });
            
            if (arr[left] > arr[largest]) {
              largest = left;
            }
          }
          
          if (right < n) {
            steps.push({
              array: [...arr],
              comparing: [largest, right],
              swapping: [],
              sorted: [...sorted]
            });
            
            if (arr[right] > arr[largest]) {
              largest = right;
            }
          }
          
          if (largest !== i) {
            steps.push({
              array: [...arr],
              comparing: [],
              swapping: [i, largest],
              sorted: [...sorted]
            });
            
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            
            steps.push({
              array: [...arr],
              comparing: [],
              swapping: [],
              sorted: [...sorted]
            });
            
            heapify(arr, n, largest);
          }
        };
        
        // Build heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          heapify(a, n, i);
        }
        
        // Extract elements from heap
        for (let i = n - 1; i > 0; i--) {
          steps.push({
            array: [...a],
            comparing: [],
            swapping: [0, i],
            sorted: [...sorted]
          });
          
          [a[0], a[i]] = [a[i], a[0]];
          sorted.push(i);
          
          steps.push({
            array: [...a],
            comparing: [],
            swapping: [],
            sorted: [...sorted]
          });
          
          heapify(a, i, 0);
        }
        
        sorted.push(0);
        steps.push({
          array: [...a],
          comparing: [],
          swapping: [],
          sorted: [...sorted]
        });
      }
      
      // Final sorted array
      steps.push({
        array: [...a],
        comparing: [],
        swapping: [],
        pivot: [],
        sorted: Array.from({ length: a.length }, (_, i) => i)
      });
      
      return steps;
    }
  }
}
</script>

<style>
:root {
  --color-normal: #5c6166;
  --color-comparing: #7b8085;
  --color-swapping: #7b98b5;
  --color-pivot: #384047;
  --color-sorted: #d6d6d6;
}

.light-mode {
  --bg-color: #ffffff;
  --text-color: #1f2937;
  --primary: #0ea5e9;
  --primary-dark: #0284c7;
  --secondary: #6366f1;
  --secondary-dark: #4f46e5;
}

/* Toggle Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--primary);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--primary);
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.slider.round {
  border-radius: 20px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>