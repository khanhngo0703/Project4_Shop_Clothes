<template>
    <HeaderComponents @search="handleSearch" />
    <div class="container mx-auto px-4 py-6">
        <div class="flex items-center text-sm text-gray-600 mb-4">
            <a class="hover:text-orange-500" href="#">
                Trang chủ
            </a>
            <span class="mx-2">
                /
            </span>
            <span class="text-orange-500">
                {{ category ? category.name : 'Đang tải...' }}
            </span>
        </div>
        <div class="flex">
            <!-- Sidebar -->
            <div class="w-1/4 pr-4">
                <div class="mb-6">
                    <aside class="w-1/1">
                        <!-- Tiêu đề -->
                        <h2 class="bg-orange-600 text-white text-lg font-bold py-2 px-4">
                            DANH MỤC SẢN PHẨM
                        </h2>
                        <!-- Danh sách danh mục -->
                        <ul class="border border-gray-300">
                            <li v-for="c in categoryData.slice(0, 8)" :key="c.id"
                                class="border-b border-gray-300 py-2 px-4 hover:bg-orange-500 hover:text-white transition duration-300">
                                <router-link :to="{ name: 'CategoryDetailView', params: { categoryId: c.id } }"
                                    class="block w-full">
                                    {{ c.name }}
                                </router-link>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
            <!-- Main Content -->
            <div class="w-3/4">
                <div class="grid grid-cols-3 gap-4">
                    <template v-if="searchKeyword == '' || !searchKeyword">
                        <div v-for="p in paginatedData" :key="p.id" class="text-center">
                            <router-link :to="{ name: 'ProductDetailView', params: { id: p.id } }">
                                <img :src="p.image" alt="">
                            </router-link>
                            <p class="mt-2">
                                {{ p.name }}
                            </p>
                            <p class="text-orange-500 font-bold">
                                {{ p.formattedPrice }}
                            </p>
                        </div>
                    </template>
                    <template v-else>
                        <template v-if="paginatedData.length > 0">
                            <div v-for="p in paginatedData" :key="p.id" class="text-center">
                                <router-link :to="{ name: 'ProductDetailView', params: { id: p.id } }">
                                    <img :src="p.image" alt="">
                                </router-link>
                                <p class="mt-2">
                                    {{ p.name }}
                                </p>
                                <p class="text-orange-500 font-bold">
                                    {{ p.formattedPrice }}
                                </p>
                            </div>
                        </template>
                    </template>


                </div>
                <div class="flex items-center justify-center space-x-2 mt-4">
                    <!-- Nút Previous -->
                    <button @click="previousPage"
                        class="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                        <i class="fa fa-angle-left"></i>
                    </button>

                    <!-- Danh sách số trang -->
                    <ul class="flex space-x-2">
                        <li v-for="page in totalPages" :key="page">
                            <button @click="changePage(page)"
                                class="px-3 py-2 border border-gray-300 rounded-md hover:bg-blue-500 hover:text-white transition"
                                :class="{ 'bg-blue-500 text-white': currentPage === page }">
                                {{ page }}
                            </button>
                        </li>
                    </ul>

                    <!-- Nút Next -->
                    <button @click="nextPage"
                        class="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                        <i class="fa fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <FooterComponents />
</template>
<script>

import axios from 'axios';

import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';



export default {
    name: 'CategoryDetailComponent',
    components: {
        HeaderComponents, FooterComponents
    },
    data() {
        return {
            products: [],
            categoryData: [],
            searchKeyword: '',
            pageSize: 6,
            currentPage: 1,
            totalPages: 0,
            totalItems: 0
        }
    },
    computed: {
        filteredProductData() {
            if (this.searchKeyword) {
                return this.products.filter(product => product.name.includes(this.searchKeyword));
            } else {
                return this.products;
            }
        },
        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            // return this.filteredProductData.slice(startIndex, endIndex);
            return this.filteredProductData.slice(startIndex, endIndex).map(product => ({
                ...product,
                formattedPrice: new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                }).format(product.price)
            }));
        },
        totalPages() {
            return Math.ceil(this.filteredProductData.length / this.pageSize);
        },
        category() {
            return this.categoryData.find(c => c.id == this.$route.params.categoryId) || {};
        }
    },
    methods: {
        loadProducts() {
            const categoryId = this.$route.params.categoryId;
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/products/GetByCategory/${categoryId}`;
            axios.get(url)
                .then(response => {
                    this.products = response.data.data;
                    this.totalItems = this.products.length;
                    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
                })
                .catch(error => {
                    console.error('Error loading products:', error);
                });
        },
        loadCategoryData() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/categories/GetAll`;
            axios.get(url).then((response) => {
                this.categoryData = response.data.data;
                console.log(this.categoryData);
            }).catch((error) => {
                console.log(error.response);
            })
        },
        changePage(page) {
            this.currentPage = page;
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        handleSearch(keyword) {
            this.searchKeyword = keyword;
            this.currentPage = 1; // Reset to the first page when a new search is performed
        }
    },
    mounted() {
        this.loadProducts();
        this.loadCategoryData();
    },
    watch: {
        '$route'(to, from) {
            if (to.params.categoryId !== from.params.categoryId) {
                this.loadProducts();
            }
        }
    }
}
</script>