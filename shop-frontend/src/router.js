import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './view/HomePage.vue';
import Login from './view/LoginView.vue';
import Cart from './view/CartView.vue';
import ProductDetail from './view/ProductDetailView.vue';
import Register from './view/RegisterView.vue';
import CategoryDetail from './view/CategoryDetailView.vue';
import AboutUs from './view/AboutUsView.vue';
import Payment from './view/PaymentView.vue';
import Showtimes from './view/ShowtimesView.vue';
import DashboardView from './view/admin/DashboardView.vue';
import CategoryManageView from './view/admin/CategoryManageView.vue';
import ProductManageView from './view/admin/ProductManageView.vue';
import CreateProductView from './view/admin/CreateProductView.vue';
import CreateCategoryView from './view/admin/CreateCategoryView.vue';



const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/login',
        name: 'LoginView',
        component: Login,
    },
    {
        path: '/register',
        name: 'RegisterView',
        component: Register,
    },
    {
        path: '/cart',
        name: 'CartView',
        component: Cart,
    },
    {
        path: '/product-detail',
        name: 'ProductDetaillView',
        component: ProductDetail,
    },
    {
        path: '/category-detail',
        name: 'CategoryDetailView',
        component: CategoryDetail,
    },
    {
        path: '/aboutus',
        name: 'AboutUsView',
        component: AboutUs,
    },
    {
        path: '/payment',
        name: 'PaymentView',
        component: Payment,
    },
    {
        path: '/showtimes',
        name: 'ShowtimesView',
        component: Showtimes,
    },
    {
        path: '/admin',
        name: 'DashboardView',
        component: DashboardView,
        // meta: { requiresAuth: true }
    },
    {
        path: '/admin/categorymanage',
        name: 'CategoryManageView',
        component: CategoryManageView,
        // meta: { requiresAuth: true }
    },
    {
        path: '/admin/productmanage',
        name: 'ProductManageView',
        component: ProductManageView,
        // meta: { requiresAuth: true }
    },
    {
        path: '/admin/create_product',
        name: 'CreateProductView',
        component: CreateProductView,
        // meta: { requiresAuth: true }
    },
    {
        path: '/admin/create_category',
        name: 'CreateCategoryView',
        component: CreateCategoryView,
        // meta: { requiresAuth: true }
    },
];

const router = createRouter({
    history: createWebHistory(),  // Use Web History mode
    routes
});

export default router;
