<template>
    <!-- Top Bar -->
    <div class="bg-orange-600 text-white text-sm py-2">
        <div class="container mx-auto flex justify-between items-center">
            <span>
                Chào mừng bạn đến với Fashion Every Year
            </span>
            <span v-if="username">
                Xin chào, {{ username }}
                <button @click="logout" class="ml-2">
                    Đăng xuất
                </button>
            </span>
            <div v-else>
                <router-link to="/login" class="mr-4">
                    Đăng nhập
                </router-link>
                <router-link to="/register">
                    Đăng ký
                </router-link>
            </div>
        </div>
    </div>
    <!-- Header -->
    <header class="bg-white py-4">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center">
                <i class="fas fa-phone-alt text-orange-600 mr-2">
                </i>
                <span class="text-gray-600">
                    Hotline:
                </span>
                <span class="text-orange-600 ml-1">
                    1900 6750
                </span>
            </div>
            <div class="text-center">
                <h1 class="text-gray-800 font-bold text-5xl ">
                    Autumn
                </h1>
                <p class="text-gray-600">
                    MEN &amp; WOMEN CLOTHING
                </p>
            </div>
            <div class="flex items-center">
                <form @submit.prevent="onSearchClick" style="display:inline">
                    <input class="border border-gray-300 rounded px-2 py-1 text-gray-800" placeholder="Tìm kiếm..."
                        v-model="searchKeyword">
                    <button type="submit" class="p-1 bg-gray-200 rounded-md hover:bg-gray-300 transition">
                        <i class="fas fa-search text-gray-600"></i>
                    </button>
                </form>
                <i class="fas fa-shopping-cart text-gray-600 ml-4"></i>
                <span class="bg-red-600 text-white rounded-full px-2 ml-1">
                    0
                </span>
            </div>
        </div>
    </header>
    <!-- Navigation -->
    <nav class="bg-gray-100 py-2">
        <div class="container mx-auto flex justify-center space-x-8">
            <router-link to="/" class="text-orange-600 border-b-2 border-orange-600" href="#">
                TRANG CHỦ
            </router-link>
            <li class="text-gray-600 list-none uppercase" href="#" v-for="c in categoryData.slice(0, 6)" :key="c.id">
                <!-- {{ c.name }} -->
                <router-link :to="{ name: 'CategoryDetailView', params: { categoryId: c.id } }" data-hover="dropdown"
                    class="dropdown-toggle" data-toggle="dropdown">
                    {{ c.name }}
                </router-link>
            </li>
            <a class="text-gray-600" href="#">
                TIN TỨC
            </a>
            <a class="text-gray-600" href="#">
                LIÊN HỆ
            </a>
        </div>
    </nav>

</template>
<script>
// import '../assets/js/header';

import axios from 'axios';

export default {
    name: "HeaderHomePage",
    components: {

    },
    data() {
        return {
            categoryData: [],
            searchKeyword: '',
            username: ''
        }
    },
    methods: {
        loadCategoryData() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/categories/GetAll`;
            axios.get(url).then((response) => {
                this.categoryData = response.data.data;
                console.log(this.categoryData);
            }).catch((error) => {
                console.log(error.response);
            })
        },
        onSearchClick() {
            this.$emit('search', this.searchKeyword);
        },
        logout() {
            localStorage.removeItem('username');
            this.username = '';
            localStorage.removeItem('customerToken');
            this.$router.push('/');
        }
    },
    mounted() {
        this.loadCategoryData();
        this.username = localStorage.getItem('username');
    }
}
</script>
