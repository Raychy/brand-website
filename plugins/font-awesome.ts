import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faTwitter, faDeviantart } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faMoon, faArrowRight, faCode, faChartBar } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faGithub, faLinkedin, faTwitter, faEnvelope, faUser, faSearch, faMoon, faDeviantart, faArrowRight, faCode,faChartBar)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})