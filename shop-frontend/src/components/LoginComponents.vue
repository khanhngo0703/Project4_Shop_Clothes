<template>
    <HeaderComponents />
    <div class="container mx-auto p-4">
        <nav class="text-sm mb-4">
            <a href="#" class="text-gray-500">Trang chủ</a> / <span class="text-orange-500">Đăng nhập tài khoản</span>
        </nav>
        <h1 class="text-xl font-bold mb-2">ĐĂNG NHẬP TÀI KHOẢN</h1>
        <hr class="border-t-2 border-orange-500 mb-6">
        <div class="max-w-md mx-auto">
            <h2 class="text-2xl font-semibold mb-2">Khách hàng đăng nhập</h2>
            <p class="mb-4">Nếu bạn có một tài khoản, xin vui lòng đăng nhập</p>
            <div class="flex space-x-2 mb-4">
                <button class="flex-1 bg-blue-600 text-white py-2 px-4 rounded">
                    <i class="fab fa-facebook-f"></i> Facebook
                </button>
                <button class="flex-1 bg-red-600 text-white py-2 px-4 rounded">
                    <i class="fab fa-google"></i> Google
                </button>
            </div>
            <form>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium mb-1">Email *</label>
                    <input type="email" id="email" class="w-full border border-gray-300 p-2 rounded" required>
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium mb-1">Mật khẩu *</label>
                    <input type="password" id="password" class="w-full border border-gray-300 p-2 rounded" required>
                </div>
                <div class="flex items-center justify-between mb-4">
                    <button type="submit" class="bg-gray-200 text-gray-800 py-2 px-4 rounded">Đăng nhập</button>
                    <a href="#" class="text-gray-500">Mất mật khẩu?</a>
                </div>
                <a href="#" class="text-gray-500">Đăng ký</a>
            </form>
        </div>
    </div>
    <FooterComponents />

</template>
<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';

export default {
    name: 'LoginComponents',
    components: {
        HeaderComponents,
        FooterComponents
    },
    mounted() {
        
    },
    methods: {
        
    }
}
</script>
