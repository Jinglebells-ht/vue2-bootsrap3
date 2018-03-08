// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
// import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
// import 'assets/css/bootstrap.css'
// import 'assets/js/bootstrap'

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

var app3 = new Vue({
  el: '#app3',
  data: {
    msg: 'test',
    seen: false,
    todos: [
      {text: '学习 JavaScript'},
      {text: '学习 Vue'},
      {text: '222'}
    ]
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('');
      this.seen = true;
    }
  }
  // router,
  // components: { Test },
  // template: '<Test/>'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// $("#h").text("hby");

