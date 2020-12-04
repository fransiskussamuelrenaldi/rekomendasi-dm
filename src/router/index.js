import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Entry = () => import(/* webpackChunkName: "entry" */ '../views/entry copy')
const Herbal = () => import(/* webpackChunkName: "herbal" */ '../views/herbal')
const PolaMakan = () => import(/* webpackChunkName: "polamakan" */ '../views/pola-makan')
const Fisik = () => import(/* webpackChunkName: "fisik" */ '../views/fisik')
const Obat = () => import(/* webpackChunkName: "obat" */ '../views/obat')
const Resume = () => import(/* webpackChunkName: "resume" */ '../views/resume-copy')
const DrugTable = () => import(/* webpackChunkName: "drug-table" */ '../views/drug-table')
const routes = [
  {
    path: '/',
    name: 'entry',
    component: Entry,
    children: [
      {
        path: 'herbal',
        component: Herbal
      },
      {
        path: 'pola-makan',
        component: PolaMakan
      },
      {
        path: 'fisik',
        component: Fisik
      },
      {
        path: 'obat',
        component: Obat
      }
    ]
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/tabel-obat',
    name: 'tabel-obat',
    component: DrugTable
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
