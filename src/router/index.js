// import Vue from 'vue'
import Home from '../components/Home.vue'
import Bestiary from '../components/Bestiary.vue'
import Nav from '../components/Nav.vue'
import Map from '../components/Map.vue'
import App from '../App.vue'
import {createRouter, createWebHistory} from "vue-router";

// Vue.use(Router)

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
        path: "/map",
        name: "map",
		component: Map,
    },
    {
        path: "/bestiary",
        name: "bestiary",
		component: Bestiary,
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
