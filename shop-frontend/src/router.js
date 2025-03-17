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
import BrandManageView from './view/admin/BrandManageView.vue';
import ProductManageView from './view/admin/ProductManageView.vue';
import CreateProductView from './view/admin/CreateProductView.vue';
import CreateCategoryView from './view/admin/CreateCategoryView.vue';
import CreateBrandView from './view/admin/CreateBrandView.vue';
import LoginAdminView from './view/admin/LoginAdminView.vue';




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
        path: '/product-detail/:id',
        name: 'ProductDetailView',
        component: ProductDetail,
    },
    {
        path: '/category-detail/:categoryId',
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
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/categorymanage',
        name: 'CategoryManageView',
        component: CategoryManageView,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/brandmanage',
        name: 'BrandManageView',
        component: BrandManageView,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/productmanage',
        name: 'ProductManageView',
        component: ProductManageView,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/create_product',
        name: 'CreateProductView',
        component: CreateProductView,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/create_category',
        name: 'CreateCategoryView',
        component: CreateCategoryView,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/create_brand',
        name: 'CreateBrandView',
        component: CreateBrandView,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/login',
        name: 'LoginAdminView',
        component: LoginAdminView
    },
];

const router = createRouter({
    history: createWebHistory(),  // Use Web History mode
    routes
});

router.beforeEach((to, from, next) => {
    // Kiểm tra meta data của trang
    if (to.meta.requiresAuth && to.path !== '/admin/login') {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            // Chưa đăng nhập, chuyển hướng đến trang đăng nhập
            next('/admin/login');
        } else {
            // Đã đăng nhập, cho phép truy cập vào trang
            next();
        }
    } else {
        // Trang không yêu cầu đăng nhập, cho phép truy cập
        next();
    }

});

export default router;
