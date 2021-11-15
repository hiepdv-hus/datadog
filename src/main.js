import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "./routes";
import { datadogRum } from '@datadog/browser-rum';

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

datadogRum.init({
  applicationId: 'f492088f-507f-432d-b402-a67d273f53f6',
  clientToken: 'pubd84560c9964b3a787cff572c1d8483ef',
  site: 'http://localhost:8080',
  service:'demoApplication',
  sampleRate: 100,
  trackInteractions: true,
});

datadogRum.getInternalContext();
