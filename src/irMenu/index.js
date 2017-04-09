import irMenu from './irMenu.vue'
import irMenuItem from './irMenuItem.vue'
export default function install (Vue) {
  Vue.component('ir-menu', irMenu)
  Vue.component('ir-menu-item', irMenuItem)
}
