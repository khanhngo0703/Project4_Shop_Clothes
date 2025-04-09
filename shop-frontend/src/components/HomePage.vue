<template>
    <HeaderComponents @search="handleSearch" />
    <!-- Main Content -->
    <div class="font-sans">
        <div class="container mx-auto mt-4 flex min-h-screen">
            <!-- Sidebar -->
            <aside class="w-1/4">
                <div class="bg-orange-600 text-white text-lg font-bold py-2 px-4">
                    DANH MỤC SẢN PHẨM
                </div>
                <ul class="border border-gray-300">
                    <li class="border-b border-gray-300 py-2 px-4 hover:bg-orange-500 hover:text-white transition duration-300" v-for="c in categoryData.slice(0, 8)" :key="c.id">
                        <!-- {{ c.name }} -->
                        <router-link :to="{ name: 'CategoryDetailView', params: { categoryId: c.id } }">
                            {{ c.name }}
                        </router-link>
                    </li>
                </ul>
            </aside>
            <!-- Main Slider -->
            <main class="w-3/4 ml-4">
                <div class="flex space-x-4 mb-4">
                    <div class="bg-black text-white py-2 px-4 flex items-center">
                        <i class="fas fa-star mr-2"></i>
                        Đổi trả trong vòng 7 ngày
                    </div>
                    <div class="bg-black text-white py-2 px-4 flex items-center">
                        <i class="fas fa-star mr-2"></i>
                        Khuyến mãi mùa thu lên đến 50%
                    </div>
                    <div class="bg-black text-white py-2 px-4 flex items-center">
                        <i class="fas fa-star mr-2"></i>
                        Free ship với đơn &gt;= 500k
                    </div>
                </div>
                <div class="relative">
                    <img alt="Autumn collection with orange sweater and golden shoes" class="w-full h-auto"
                        src="https://bizweb.dktcdn.net/100/311/013/themes/802137/assets/slider_1.jpg?1718007850853" />
                    <div class="absolute inset-y-0 left-0 flex items-center">
                        <button class="bg-orange-600 text-white p-2">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center">
                        <button class="bg-orange-600 text-white p-2">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </main>
        </div>
        <div class="bg-white text-gray-800">
            <div class="container mx-auto px-4 py-8">
                <div class="flex justify-between items-center mb-6">
                    <h1 class="text-2xl font-bold text-gray-800">
                        <span class="text-orange-500">
                            |
                        </span>
                        SẢN PHẨM BÁN CHẠY
                    </h1>
                    <button
                        class="text-orange-500 border border-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-300">
                        XEM THÊM
                    </button>
                </div>
                <p class="text-gray-600 mb-8">
                    Chào thu với những mẫu sản phẩm mới nhất
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <template v-if="searchKeyword == '' || !searchKeyword">
                        <div v-for="p in paginatedData" :key="p.id" class="relative">
                            <!-- <img :src="p.image" alt=""> -->
                            <router-link :to="{ name: 'ProductDetailView', params: { id: p.id } }" class="block aspect-square overflow-hidden rounded-lg bg-gray-100">
                                    <img :src="p.image" alt="" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
                                </router-link>
                            <div class="mt-4 text-center">
                                <p class="text-gray-600 font-semibold">{{ p.name }}</p>
                                <p class="text-orange-500 font-bold">
                                    {{ p.price }}
                                    <span class="line-through text-gray-400 text-sm">{{ p.oldprice }}</span>
                                </p>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <template v-if="paginatedData.length > 0">
                            <div v-for="p in paginatedData" :key="p.id" class="relative">
                                <!-- <img :src="p.image" alt=""> -->
                                <router-link :to="{ name: 'ProductDetailView', params: { id: p.id } }" class="w-48 aspect-square flex items-center justify-center bg-gray-100 rounded overflow-hidden">
                                    <img :src="p.image" alt="" class="w-full h-full object-cover">
                                </router-link>
                                <div class="mt-4 text-center">
                                    <p class="text-gray-600 font-semibold">{{ p.name }}</p>
                                    <p class="text-orange-500 font-bold">
                                        {{ p.price }}
                                        <span class="line-through text-gray-400 text-sm">{{ p.oldprice }}</span>
                                    </p>
                                </div>
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
            <div class="container mx-auto px-4 py-8">
                <div class="flex justify-between items-center mb-6">
                    <h1 class="text-2xl font-bold text-gray-800">
                        <span class="text-orange-500">
                            |
                        </span>
                        TIN TỨC THỜI TRANG
                    </h1>
                    <button
                        class="text-orange-500 border border-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-300">
                        XEM THÊM
                    </button>
                </div>
                <p class="text-gray-600 mb-6">
                    Tin tức mới nhất về thời trang trong nước và thế giới
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="flex flex-col">
                        <img alt="A man standing next to a cactus and some pots" class="mb-4" height="400"
                            src="https://storage.googleapis.com/a1aa/image/SbrxBpiIxMbC1ZKi2rc-EhBxX3BqMFok1GVtJaaA3f4.jpg"
                            width="600" />
                        <h2 class="text-lg font-bold mb-2">
                            Học Quang Vinh cách chọn phụ kiện thời trang cho mọi
                            chuyến đi
                        </h2>
                        <p class="text-gray-600">
                            “Bội thu” ảnh đẹp trong chuyến du lịch kéo dài 14
                            ngày tại Maroc, chàng ca sĩ đa tài Quang Vinh thể
                            hiện được gu thời trang tinh tế, sự kết hợp hài hòa
                            giữa trang phục và phụ kiện. Không chỉ nổi bật...
                        </p>
                    </div>
                    <div class="flex flex-col">
                        <img alt="Two women posing in fashionable outfits" class="mb-4" height="400"
                            src="https://storage.googleapis.com/a1aa/image/36MCFg019dfgXL5QSwEaBa0IEkRXg4SxFIXqMthYgmM.jpg"
                            width="600" />
                        <h2 class="text-lg font-bold mb-2">
                            5 xu hướng thời trang giúp bạn trẻ ra cả chục tuổi
                        </h2>
                        <p class="text-gray-600">
                            Chỉ cần diện những item siêu xinh trong dòng xu
                            hướng thời trang 2019 dưới đây. Trông bạn sẽ trẻ
                            trung hơn tuổi của mình vài con số đấy. Chân váy xếp
                            ly – xu hướng thời trang hot nhất 201...
                        </p>
                    </div>
                    <div class="flex flex-col">
                        <img alt="Illustration of fashionable women" class="mb-4" height="400"
                            src="https://storage.googleapis.com/a1aa/image/_Ny0DnmkqgjCIZtGHPivnkB2ZS2HzzhtQw8Bp-_1Vi0.jpg"
                            width="600" />
                        <h2 class="text-lg font-bold text-orange-500 mb-2">
                            6 mẹo thời trang công sở dành cho nữ CEO đẳng cấp
                        </h2>
                        <p class="text-gray-600">
                            Có một câu ngạn ngữ nước ngoài nói rằng: “Hãy ăn mặc
                            vì công việc mà bạn mong muốn, chứ đừng ăn mặc vì
                            công việc hiện tại của mình”. Câu nói này ngụ ý tầm
                            quan trọng của ăn mặc đến công việc và th...
                        </p>
                    </div>
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
    name: 'HomePage',
    components: {
        HeaderComponents, FooterComponents
    },
    data() {
        return {
            productData: [],
            searchKeyword: '',
            pageSize: 8,
            currentPage: 1,
            totalPages: 0,
            totalItems: 0,
            currentProduct: {
                name: "",
                image: null,
                price: "",
                description: "",
                quantity: "",
                category_id: "",
                brand_id: ""
            },
            categoryData: []
        }
    },
    computed: {
        filteredProductData() {
            if (this.searchKeyword) {
                const keyword = this.searchKeyword.toLowerCase(); // Chuyển từ khóa về chữ thường
                return this.productData.filter(product =>
                    product.name.toLowerCase().includes(keyword) // So sánh không phân biệt hoa thường
                );
            } else {
                return this.productData;
            }
        },
        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
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
        }
    },
    methods: {
        loadProductData() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/products/GetAll`;
            axios.get(url).then((response) => {
                this.productData = response.data.data;
                this.totalItems = this.productData.length;
                this.totalPages = Math.ceil(this.totalItems / this.pageSize);
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
        loadCategoryData() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/categories/GetAll`;
            axios.get(url).then((response) => {
                this.categoryData = response.data.data;
            }).catch((error) => {
                console.log(error.response);
            })
        },
        handleSearch(keyword) {
            this.searchKeyword = keyword;
            this.currentPage = 1; // Reset to the first page when a new search is performed
        }
    },
    mounted() {
        this.loadProductData();
        this.loadCategoryData();
    }
}
</script>
