import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homePage'
import Issues from '@/pages/issues'
import IssuesDetail from '@/pages/issuesDetail'
import Products from '@/pages/products'
import ProductsHome from '@/pages/productsHome'
import GoodsCart from '@/pages/goodsCart'
import Login from '@/pages/login'
import ProductsDetailInfo from '@/pages/productsDetailInfo'
import ProductsPreview from '@/pages/productsPreview'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/issues',
    name: 'Issues',
    component: Issues
  },
  {
    path: '/issues/:issuesNum',
    component: IssuesDetail
  },
  {
    path: '/products',
    // name: 'Products',
    component: Products,
    // redirect: '/products',
    children: [{
      path: '/',
      component: ProductsHome
    },
    {
      path: 'swifter-tips',
      component: ProductsDetailInfo
    },
    {
      path: 'functional-swift',
      component: ProductsDetailInfo
    },
    {
      path: 'core-data',
      component: ProductsDetailInfo
    },
    {
      path: 'advanced-swift',
      component: ProductsDetailInfo
    },
    {
      path: 'swifter-tips/preview',
      component: ProductsPreview
    },
    {
      path: 'functional-swift/preview',
      component: ProductsPreview
    },
    {
      path: 'core-data/preview',
      component: ProductsPreview
    },
    {
      path: 'advanced-swift/preview',
      component: ProductsPreview
    }
    ]
  },
  {
    path: '/goodscart',
    name: 'GoodsCart',
    component: GoodsCart
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

  ]
})
