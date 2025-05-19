import { createRouter, createWebHistory } from "vue-router";
import Sort from "@/components/Sort.vue";
import Path from "@/components/Path.vue";
import Landing from "@/components/Landing.vue"

const routes = [
    {path: '/sort', name: 'Sort', component: Sort},
    {path: '/path', name: 'Path', component: Path},
    {path: '/', name: 'Landing', component: Landing},
];

const router = createRouter({
    history:createWebHistory(),
    routes
}); 

//remember to export 
export default router;