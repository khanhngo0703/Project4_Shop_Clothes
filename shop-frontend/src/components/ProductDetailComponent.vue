<template>
    <HeaderComponents />
    <div class="container mx-auto p-4">
        <!-- Breadcrumb -->
        <nav class="text-sm text-gray-500 mb-4">
            <a class="hover:underline" href="#">
                Trang chủ
            </a>
            /
            <a class="hover:underline" href="#">
                Hàng mới về
            </a>
            /
            <span>
                Khăn choàng thời trang
            </span>
        </nav>
        <!-- Product Section -->
        <div class="flex flex-col md:flex-row">
            <!-- Product Image -->
            <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <img alt="A stylish scarf with a plaid pattern hanging on a hanger" class="w-full md:w-96" height="600"
                    src="https://storage.googleapis.com/a1aa/image/q_8QlFbP0AiuUyN2ah_1Cx3L_Io05dZ0nQBA-fboeeg.jpg"
                    width="400" />
            </div>
            <!-- Product Details -->
            <div class="flex-grow">
                <h1 class="text-2xl font-semibold mb-2">
                    Khăn choàng thời trang
                </h1>
                <div class="text-sm text-gray-500 mb-4">
                    Thương hiệu:
                    <span class="text-orange-500">
                        Fashion
                    </span>
                    |
                    Tình trạng:
                    <span class="text-orange-500">
                        Còn hàng
                    </span>
                </div>
                <div class="border-t border-gray-200 pt-4 mb-4">
                    <h2 class="text-lg font-semibold mb-2">
                        MÔ TẢ
                    </h2>
                    <p class="text-gray-600">
                        Đang cập nhật
                    </p>
                </div>
                <div class="text-2xl text-orange-500 font-semibold mb-4">
                    450.000 đ
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
                    420000
                </p>
            </div>
        </div>
    </div>
    <FooterComponents />
</template>

<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';


import '../assets/js/movie_detail.js';
export default {
    name: 'ProductDetailComponent',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>
<!-- <style scoped>
@import "../assets/css/movie-detail.css";
</style> -->
