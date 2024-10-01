import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '@/views/DataBindingHtml.vue'
import DataBindingInputType from '@/views/DataBindingInputType.vue'
import DataBindingInputNum from '@/views/DataBindingInputNum.vue'
import DataBindingListAPI from '@/views/DataBindingListAPI.vue'
import NestedComponent from '@/views/NestedComponent.vue'
import ParentComponent from '@/views/ParentComponent.vue'
import UseSlotModal from '@/views/UseSlotModal.vue'
import ProvideInject from '@/views/ProvideInject.vue'
import Cube from '@/views/Cube.vue'
import CubeCompositionAPI from '@/views/CubeCompositionAPI.vue'
import CompositionAPIProvide from '@/views/CompositionAPIProvide.vue'
import GridView from '@/views/GridView.vue'
import ElPractice from '@/views/ElPractice.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/htmlbinding',
    name: 'HtmlBinding',
    component: DataBindingHtml
  },
  {
    path: '/input',
    name: 'InputBInding',
    component: DataBindingInputType
  },
  {
    path: '/inputnumber',
    name: 'InputBInding',
    component: DataBindingInputNum
  },
  {
    path: '/listbinding',
    name: 'listbinding',
    component: DataBindingListAPI
  },
  {
    path: '/event',
    name: 'event',
    component: () => import('../views/Event.vue')
  },
  {
    path:'/compTest',
    name:'compTest',
    component: NestedComponent
  },
  {
    path:'/parentComp',
    name:'parentComp',
    component: ParentComponent
  },
  {
    path:'/useslotmodal',
    name:'useslotmodal',
    component: UseSlotModal
  },
  {
    path:'/provideinject',
    component: ProvideInject
  },
  {
    path:'/cube',
    component: Cube,
    name:'cube'
  },
  {
    path:'/cubeCompositionAPI',
    component:CubeCompositionAPI
  },
  {
    path:'/CompositionAPIProvide',
    component:CompositionAPIProvide
  },
  {
    path:'/GridView',
    component:GridView
  },
  {
    path:'/ElPractice',
    component:ElPractice
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
