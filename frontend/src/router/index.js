import { createRouter, createWebHistory } from "vue-router";

import Sort from "@/components/Sort.vue";
import Path from "@/components/Path.vue";
import BinTree from "@/components/BinTree.vue"
import Sudoku from "@/components/Sudoku.vue";

const routes = [
    {path: '/', name: 'Sort', component: Sort},
    {path: '/sudoku', name: 'Sudoku', component: Sudoku},
    {path: '/path', name: 'Path', component: Path},
    {path: '/bin', name: 'BinTree', component: BinTree},
];

const router = createRouter({
    history:createWebHistory(),
    routes
}); 

//remember to export 
export default router;