<template>
    <!-- Top Bar -->
    <div class="bg-orange-600 text-white text-sm py-2">
        <div class="container mx-auto flex justify-between items-center">
            <span>
                Chào mừng bạn đến với Fashion Every Year
            </span>
            <div>
                <a class="mr-4" href="#">
                    Đăng nhập
                </a>
                <a href="#">
                    Đăng ký
                </a>
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
                <input class="border border-gray-300 rounded px-2 py-1 text-gray-800" placeholder="Tìm kiếm..." type="text" />
                <i class="fas fa-search text-gray-600 ml-2">
                </i>
                <i class="fas fa-shopping-cart text-gray-600 ml-4">
                </i>
                <span class="bg-red-600 text-white rounded-full px-2 ml-1">
                    0
                </span>
            </div>
        </div>
    </header>
    <!-- Navigation -->
    <nav class="bg-gray-100 py-2">
        <div class="container mx-auto flex justify-center space-x-8">
            <a class="text-orange-600 border-b-2 border-orange-600" href="#">
                TRANG CHỦ
            </a>
            <a class="text-gray-600" href="#">
                NAM
                <i class="fas fa-caret-down">
                </i>
            </a>
            <a class="text-gray-600" href="#">
                NỮ
                <i class="fas fa-caret-down">
                </i>
            </a>
            <a class="text-gray-600" href="#">
                PHỤ KIỆN
            </a>
            <a class="text-gray-600" href="#">
                KHUYẾN MẠI
            </a>
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
export default {
    name: "HeaderHomePage",
    components: {

    },
    data() {
        return {
            
        };
    },
    methods: {
        
    },
    mounted() {

    }
}
</script>
