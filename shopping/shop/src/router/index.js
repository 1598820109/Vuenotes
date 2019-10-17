import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Section from '@/view/Section'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Section',
      component: Section
    }
  ]
})
