import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import store from "./store/store";
import vuetify from "./plugins/vuetify";
import { createProvider } from "./vue-apollo";
import VueAxios from "vue-axios";
import axios from "axios";
import Vuelidate from "vuelidate";
import VueResource from "vue-resource";
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  VueResource,
  Vuelidate,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);
