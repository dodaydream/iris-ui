import './base.less'
import irNavbar from './irNavbar'
import irMenu from './irMenu'
import irButton from './irButton'
import irJumbotron from './irJumbotron'
import irFooter from './irFooter'
//  import MaterialRipple from './ripple'
require('the-flex-grid')

const components = {
  irNavbar,
  irMenu,
  irButton,
  irJumbotron,
  irFooter
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
