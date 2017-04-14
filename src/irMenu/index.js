import irMenu from './irMenu.vue'
import irMenuItem from './irMenuItem.vue'
import irMenuItemExpand from './irMenuItemExpand'
export default function install (Vue) {
  Vue.component('ir-menu', irMenu)
  Vue.component('ir-menu-item', irMenuItem)
  Vue.component('ir-menu-item-expand', irMenuItemExpand)
}
