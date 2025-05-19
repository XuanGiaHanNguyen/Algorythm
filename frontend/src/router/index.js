import { createRouter, createWebHistory } from "vue-router";

import Sort from "@/components/Sort.vue";
import Path from "@/components/Path.vue";
import BinTree from "@/components/BinTree.vue"
import Landing from "@/components/Landing.vue";
import Sudoku from "@/components/Sudoku.vue";

const routes = [
    {path: '/sort', name: 'Sort', component: Sort},
    {path: '/sudoku', name: 'Sudoku', component: Sudoku},
    {path: '/path', name: 'Path', component: Path},
    {path: '/bin', name: 'BinTree', component: BinTree},
    {path: '/', name: 'Landing', component: Landing},
];

const router = createRouter({
    history:createWebHistory(),
    routes
}); 

//remember to export 
export default router;