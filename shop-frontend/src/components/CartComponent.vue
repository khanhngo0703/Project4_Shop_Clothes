<template>
    <HeaderComponents />
    <div class="container mx-auto p-4">
        <nav class="text-sm mb-4">
            <a class="text-gray-500" href="#">
                Trang chủ
            </a>
            /
            <span class="text-orange-500">
                Giỏ hàng
            </span>
        </nav>
        <h1 class="text-2xl font-semibold mb-6">
            Giỏ hàng của bạn
        </h1>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th class="px-4 py-2 border-b">
                            Ảnh sản phẩm
                        </th>
                        <th class="px-4 py-2 border-b">
                            Tên sản phẩm
                        </th>
                        <th class="px-4 py-2 border-b">
                            Đơn giá
                        </th>
                        <th class="px-4 py-2 border-b">
                            Số lượng
                        </th>
                        <th class="px-4 py-2 border-b">
                            Thành tiền
                        </th>
                        <th class="px-4 py-2 border-b">
                            Xoá
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="px-4 py-2 border-b text-center">
                            <img alt="Khăn choàng thời trang" class="mx-auto" height="100"
                                src="https://storage.googleapis.com/a1aa/image/FOZZEQ48fW5qYq9KxT0ifRRrz04f6njVHPTSim7BpGQ.jpg"
                                width="100" />
                        </td>
                        <td class="px-4 py-2 border-b text-center">
                            Khăn choàng thời trang
                        </td>
                        <td class="px-4 py-2 border-b text-center text-orange-500">
                            450.000 đ
                        </td>
                        <td class="px-4 py-2 border-b text-center">
                            <div class="flex items-center justify-center">
                                <button class="px-2 py-1 border border-gray-300">
                                    -
                                </button>
                                <input class="w-12 text-center border-t border-b border-gray-300" type="text"
                                    value="1" />
                                <button class="px-2 py-1 border border-gray-300">
                                    +
                                </button>
                            </div>
                        </td>
                        <td class="px-4 py-2 border-b text-center text-orange-500">
                            450.000 đ
                        </td>
                        <td class="px-4 py-2 border-b text-center">
                            <button class="text-gray-500 hover:text-red-500">
                                <i class="fas fa-trash">
                                </i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-between items-center mt-6">
            <button class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">
                TIẾP TỤC MUA HÀNG
            </button>
            <div class="text-right">
                <div class="text-lg font-semibold">
                    Tổng tiền thanh toán
                </div>
                <div class="text-2xl text-orange-500">
                    450.000 đ
                </div>
            </div>
        </div>
        <div class="mt-4 text-right">
            <button class="px-6 py-3 bg-orange-500 text-white font-semibold hover:bg-orange-600">
                TIẾN HÀNH THANH TOÁN
            </button>
        </div>
    </div>
    <FooterComponents />
</template>
<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';



export default {
    name: 'CartComponent',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>