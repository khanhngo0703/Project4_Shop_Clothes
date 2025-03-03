<template>
    <HeaderComponents />
    <div class="container mx-auto p-4">
        <div class="text-sm text-gray-600 mb-4">
            <a href="#" class="hover:underline">Trang chủ</a> / <span class="text-orange-500">Đăng ký tài khoản</span>
        </div>
        <h1 class="text-2xl font-bold mb-2">ĐĂNG KÝ TÀI KHOẢN</h1>
        <hr class="border-t-2 border-orange-500 mb-6">
        <h2 class="text-xl font-semibold mb-4">Thông tin cá nhân</h2>
        <form class="space-y-4">
            <div>
                <label class="block text-sm font-medium mb-1" for="first-name">Tên *</label>
                <input type="text" id="first-name" class="w-full border border-gray-300 p-2 rounded">
            </div>
            <div>
                <label class="block text-sm font-medium mb-1" for="last-name">Họ *</label>
                <input type="text" id="last-name" class="w-full border border-gray-300 p-2 rounded">
            </div>
            <div>
                <label class="block text-sm font-medium mb-1" for="email">Email *</label>
                <input type="email" id="email" class="w-full border border-gray-300 p-2 rounded">
            </div>
            <div>
                <label class="block text-sm font-medium mb-1" for="phone">Số điện thoại *</label>
                <input type="text" id="phone" class="w-full border border-gray-300 p-2 rounded">
            </div>
            <div>
                <label class="block text-sm font-medium mb-1" for="password">Mật khẩu *</label>
                <input type="password" id="password" class="w-full border border-gray-300 p-2 rounded">
            </div>
            <div class="flex items-center justify-between">
                <button type="submit" class="bg-gray-200 text-gray-800 px-4 py-2 rounded">Đăng ký</button>
                <a href="#" class="text-gray-600 hover:underline flex items-center">
                    <i class="fas fa-undo-alt mr-1"></i> Quay lại
                </a>
            </div>
        </form>
        <div class="mt-8">
            <h2 class="text-xl font-semibold mb-4">Đăng nhập với social</h2>
            <div class="flex space-x-4">
                <button class="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                    <i class="fab fa-facebook-f mr-2"></i> Facebook
                </button>
                <button class="bg-red-600 text-white px-4 py-2 rounded flex items-center">
                    <i class="fab fa-google mr-2"></i> Google
                </button>
            </div>
        </div>
    </div>
    <FooterComponents />
</template>
<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';



export default {
    name: 'RegisterComponents',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>