import './base.less'
import irNavbar from '@/irNavbar'
import irMenu from '@/irMenu'
import irButton from '@/irButton'

const components = {
  irNavbar,
  irMenu,
  irButton
}

components.install = (Vue) => {
  for (let component in components) {
    const componentInstaller = components[component]

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller)
    }
  }
}

export default components
