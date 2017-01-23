import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './app.vue'

Vue.use(VueRouter);
Vue.config.debug = true;
Vue.config.devtools = true;

const routes = {
	'/': {
		component: require('./components/index.vue')
	},
	'/list': {
		component: require('./components/list.vue')
	},
	'*': {
		component: require('./components/notfound.vue')
	}
}

export const router = new VueRouter();
router.map(routes);
router.go({'path': '/'});