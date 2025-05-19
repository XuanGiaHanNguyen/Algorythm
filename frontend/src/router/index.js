import { createRouter, createWebHistory } from "vue-router";
import Sort from "@/components/Sort.vue";
import Path from "@/components/Path.vue";

const routes = [
    {path: '/', name: 'Sort', component: Sort},
    {path: '/path', name: 'Path', component: Path},
];

const router = createRouter({
    history:createWebHistory(),
    routes
}); 

//remember to export 
export default router;