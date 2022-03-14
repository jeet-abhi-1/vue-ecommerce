import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: 'HomePage'*/'../views/HomePage.vue'),


  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: 'Products'*/'../views/Products.vue'),
  },
  {
    path: '/cart/:id',
    name: 'ShoppingCart',
    component: () => import(/* webpackChunkName: 'ShoppingCart'*/'../views/ShoppingCart.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: 'CartView'*/'../views/CartView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/select-payment',
    name: 'PaymentSelection',
    component: () => import(/* webpackChunkName: 'PaymentSelection'*/'../views/PaymentSelection.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/place-order',
    name: 'Order',
    component: () => import(/* webpackChunkName: 'ShoppingCart'*/'../views/Order.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/orderPlaced',
    name: 'OrderPlaced',
    component: () => import(/* webpackChunkName: 'OrderPlaced'*/'../views/OrderPlaced.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: 'OrderPlaced'*/'../views/ShowOrders.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Authentication/Register'),
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Authentication/Login'),
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: () => import('../views/admin/AddProduct'),
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/HomePage.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem("jwt")) {
      next({
        path: "/login",
      });
    }
    else {
      next()
    }
  }
  next()
});

export default router
