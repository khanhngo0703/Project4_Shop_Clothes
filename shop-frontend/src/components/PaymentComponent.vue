<template>
    <HeaderComponents />
    <div class="container mx-auto p-4">
        <div class="flex flex-col lg:flex-row justify-between">
            <!-- Left Section -->
            <div class="w-full lg:w-2/3 bg-white p-6 rounded shadow-md">
                <h1 class="text-2xl text-blue-500 font-bold mb-4">
                    OH! Thời trang và Phụ kiện
                </h1>
                <h2 class="text-lg font-semibold mb-4">
                    Thông tin nhận hàng
                </h2>
                <div class="mb-4">
                    <a class="text-blue-500 flex items-center" href="#">
                        <i class="fas fa-user-circle mr-2">
                        </i>
                        Đăng nhập
                    </a>
                </div>
                <form>
                    <div class="mb-4">
                        <input class="w-full p-2 border rounded" placeholder="Email" type="email" />
                    </div>
                    <div class="mb-4">
                        <input class="w-full p-2 border rounded" placeholder="Họ và tên" type="text" />
                    </div>
                    <div class="mb-4 flex items-center">
                        <input class="w-full p-2 border rounded" placeholder="Số điện thoại (tùy chọn)" type="text" />
                        <div class="ml-2">
                            <select class="p-2 border rounded">
                                <option value="vn">
                                    🇻🇳
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-4">
                        <input class="w-full p-2 border rounded" placeholder="Địa chỉ (tùy chọn)" type="text" />
                    </div>
                    <div class="mb-4">
                        <select class="w-full p-2 border rounded">
                            <option value="">
                                Tỉnh thành ---
                            </option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <select class="w-full p-2 border rounded bg-gray-200" disabled="">
                            <option value="">
                                Quận huyện (tùy chọn)
                            </option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <select class="w-full p-2 border rounded bg-gray-200" disabled="">
                            <option value="">
                                Phường xã (tùy chọn)
                            </option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <textarea class="w-full p-2 border rounded" placeholder="Ghi chú (tùy chọn)"></textarea>
                    </div>
                </form>
                <h2 class="text-lg font-semibold mb-4">
                    Vận chuyển
                </h2>
                <div class="p-4 bg-blue-100 rounded mb-4">
                    Vui lòng nhập thông tin giao hàng
                </div>
                <h2 class="text-lg font-semibold mb-4">
                    Thanh toán
                </h2>
                <div class="flex items-center mb-4">
                    <input class="mr-2" id="cod" name="payment" type="radio" />
                    <label class="flex items-center" for="cod">
                        Thanh toán khi giao hàng (COD)
                        <i class="fas fa-money-bill-wave ml-2">
                        </i>
                    </label>
                </div>
            </div>
            <!-- Right Section -->
            <div class="w-full lg:w-1/3 bg-white p-6 rounded shadow-md mt-6 lg:mt-0">
                <h2 class="text-lg font-semibold mb-4">
                    Đơn hàng (1 sản phẩm)
                </h2>
                <div class="flex items-center mb-4">
                    <img alt="Khăn choàng thời trang" class="w-12 h-12 rounded mr-4" height="50"
                        src="https://storage.googleapis.com/a1aa/image/2cEzdOXIu-zzAL9rtZIKlEuz2c0FIaXz4B5YoZVzlOU.jpg"
                        width="50" />
                    <div>
                        <p>
                            Khăn choàng thời trang
                        </p>
                        <p class="text-gray-500">
                            450.000 đ
                        </p>
                    </div>
                </div>
                <div class="mb-4">
                    <input class="w-full p-2 border rounded" placeholder="Nhập mã giảm giá" type="text" />
                    <button class="bg-blue-500 text-white p-2 rounded mt-2">
                        Áp dụng
                    </button>
                </div>
                <div class="mb-4">
                    <div class="flex justify-between">
                        <p>
                            Tạm tính
                        </p>
                        <p>
                            450.000 đ
                        </p>
                    </div>
                    <div class="flex justify-between">
                        <p>
                            Phí vận chuyển
                        </p>
                        <p>
                            -
                        </p>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex justify-between font-bold text-lg">
                        <p>
                            Tổng cộng
                        </p>
                        <p>
                            450.000 đ
                        </p>
                    </div>
                </div>
                <div class="mb-4">
                    <a class="text-blue-500" href="#">
                        Quay về giỏ hàng
                    </a>
                </div>
                <button class="bg-blue-500 text-white w-full p-2 rounded">
                    ĐẶT HÀNG
                </button>
            </div>
        </div>
    </div>
    <FooterComponents />
</template>
<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';
// import '../assets/js/payment.js';


export default {
    name: 'PaymentComponent',
    components: {
        HeaderComponents, FooterComponents
    },
    data() {
        return {
            
        };
    },
    methods: {
        
    },
}
</script>
<style scoped>

</style>