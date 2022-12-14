import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueProgressBar from 'vue-progressbar'

const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
      speed: '0.2s',
      opacity: '0.6s',
      termination: 300
    },
    autoRevert: true,
    location: 'left',
    inverse: false
  }

createApp(App).use(router).mount('#app')
App.use(VueProgressBar,options)