import { createRouter, createWebHistory } from "vue-router";

import Content from "./components/Content.vue";
import MediaIndex from "./components/MediaIndex.vue";
import MediaNew from "./components/MediaNew.vue";

const routes = [
	{ path: "/media", component: Content },
	{ path: "/media/new", component: MediaNew },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
