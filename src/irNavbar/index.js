import irNavbar from './irNavbar.vue'
import irNavbarMenu from './irNavbarMenu.vue'
export default function install (Vue) {
  Vue.component('ir-navbar', irNavbar)
  Vue.component('ir-navbar-menu', irNavbarMenu)
}
