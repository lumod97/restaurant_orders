import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import mixins
// SWAL
import swalMixin from '@/mixins/globals/swal';
// SOCKETS
import sockets from '@/mixins/sockets/sockets'
// IMPORT BOOTSTRAP + BOOTSTRAP VUE
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// import mixins globally
Vue.mixin(swalMixin);

// IMPORT FEATHER ICONS
import feather from 'feather-icons';
// MAKE FEATHER ICON GLOBAL
Vue.component('feather-icon', {
  functional: true,
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '24',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
  render(createElement, { props }) {
    const { icon, size, color } = props;
    const svg = feather.icons[icon].toSvg({
      width: size,
      height: size,
      stroke: color,
    });
    return createElement('span', {
      domProps: {
        innerHTML: svg,
      },
    });
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
