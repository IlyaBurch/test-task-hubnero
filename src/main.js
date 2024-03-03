import Vue from "vue";

import App from "./App.vue";
import router from "./router";
// import Button from "primevue/button";
// import DataTable from "primevue/datatable";
// import Paginator from "primevue/paginator";

import "./assets/main.css";
// import Paginator from "primevue/paginator/Paginator";

// Vue.use(PrimeVue);
// Vue.use(PrimeVue, { ripple: true });

// Vue.component("Paginator", Paginator);
// Vue.component("DataTable", DataTable);
// Vue.directive('ripple', Ripple);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
