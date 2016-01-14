import Vue from 'vue';
import App from './app';

// vue resource
Vue.use(require('vue-resource'));

/* eslint-disable no-new */
new Vue({
	el: 'body',
	components: { App }
});
