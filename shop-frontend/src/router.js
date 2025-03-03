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
];

const router = createRouter({
    history: createWebHistory(),  // Use Web History mode
    routes
});

export default router;
