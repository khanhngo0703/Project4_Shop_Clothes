<template>
    <HeaderComponents />
    <div class="container mx-auto p-4">
        <!-- Breadcrumb -->
        <nav class="text-sm text-gray-500 mb-4">
            <a class="hover:underline" href="#">
                Trang chủ
            </a>
            /
            <span>
                {{ product.name }}
            </span>
        </nav>
        <!-- Product Section -->
        <div class="flex flex-col md:flex-row">
            <!-- Product Image -->
            <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <img alt="A stylish scarf with a plaid pattern hanging on a hanger" class="w-full md:w-96" height="600"
                    :src="product.image"
                    width="400" />
            </div>
            <!-- Product Details -->
            <div class="flex-grow">
                <h1 class="text-2xl font-semibold mb-2">
                    {{ product.name }}
                </h1>
                <div class="text-sm text-gray-500 mb-4">
                    Thương hiệu: 
                    <span class="text-orange-500">
                        {{ product.brand_id }}
                    </span>
                    |
                    Tình trạng:
                    <span class="text-orange-500">
                        Còn {{ product.quantity }} sản phẩm
                    </span>
                </div>
                <div class="border-t border-gray-200 pt-4 mb-4">
                    <h2 class="text-lg font-semibold mb-2">
                        MÔ TẢ
                    </h2>
                    <p class="text-gray-600">
                        {{ product.description }}
                    </p>
                </div>
                <div class="text-2xl text-orange-500 font-semibold mb-4">
                    <!-- {{ product.price }} đ                     -->
                    {{ formattedTotalSales }}
                </div>
                <div class="flex items-center mb-4">
                    <span class="mr-2">
                        Số lượng
                    </span>
                    <button class="border border-gray-300 px-2 py-1">
                        -
                    </button>
                    <input class="w-12 text-center border-t border-b border-gray-300 px-2 py-1" type="text" value="1" />
                    <button class="border border-gray-300 px-2 py-1">
                        +
                    </button>
                </div>
                <button class="bg-orange-500 text-white px-6 py-2 rounded">
                    THÊM VÀO GIỎ HÀNG
                </button>
                <div class="mt-4 text-gray-600">
                    <i class="fas fa-phone-alt">
                    </i>
                    Tư vấn miễn phí:
                    <span class="text-orange-500">
                        1900 6750
                    </span>
                </div>
            </div>
        </div>
        <!-- Tabs Section -->
        <div class="mt-8">
            <div class="border-b border-gray-200">
                <ul class="flex">
                    <li class="mr-8 pb-2 border-b-2 border-orange-500">
                        <a class="text-orange-500" href="#">
                            Thông tin sản phẩm
                        </a>
                    </li>
                    <li class="mr-8 pb-2">
                        <a class="text-gray-500 hover:text-orange-500" href="#">
                            Cách mua hàng
                        </a>
                    </li>
                    <li class="pb-2">
                        <a class="text-gray-500 hover:text-orange-500" href="#">
                            Điều khoản
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-4">
                <p>
                    {{ product.description }}
                </p>
            </div>
        </div>
    </div>
    <FooterComponents />
</template>

<script>

import axios from 'axios';

import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';


import '../assets/js/movie_detail.js';
export default {
    name: 'ProductDetailComponent',
    components: {
        HeaderComponents, FooterComponents
    },
    data() {
        return {
            product: []
        }
    },
    computed: {
        formattedTotalSales() {
            // Định dạng số tiền theo tiền Việt Nam Đồng
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.product.price);
        }
    },
    methods: {
        loadProductById() {
            const id = this.$route.params.id;
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/products/GetById/${id}`;
            axios.get(url)
                .then(response => {
                    this.product = response.data.data;
                })
                .catch(error => {
                    console.error('Error Response:', error.response); // Log thông điệp lỗi chi tiết
                    if (error.response) {
                        console.error('Error Status:', error.response.status); // Log status code
                        console.error('Error Data:', error.response.data); // Log error data
                        console.log(this.id);
                    } else {
                        console.error('Error:', error.message);
                    }
                });
        },
        addToCart() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            // Thêm thuộc tính quantity với giá trị mặc định là 1 cho sản phẩm được thêm vào
            this.product.quantity = 1;
            cart.push(this.product);
            localStorage.setItem('cart', JSON.stringify(cart));
            // Chuyển hướng đến trang giỏ hàng
            this.$router.push({ name: 'CartView' });
        }

    },
    mounted() {
        this.loadProductById();
    },
    watch: {

    }
}
</script>
<!-- <style scoped>
@import "../assets/css/movie-detail.css";
</style> -->
