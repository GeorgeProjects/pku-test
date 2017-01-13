import Vue from 'vue'
import App from 'APPS/index'
import Store from '../vuex/index'
import config from '../commons/config'

// 原型链安装
Vue.prototype.CommonsConfig = config

let run = () => {
  return new Vue({
    el: 'body',
    replace: false,
    components: {
      App
    },
    store: Store
  })
}

run()
