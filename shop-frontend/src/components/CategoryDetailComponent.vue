<template>
    <HeaderComponents />
    <div class="container mx-auto px-4 py-6">
        <div class="flex items-center text-sm text-gray-600 mb-4">
            <a class="hover:text-orange-500" href="#">
                Trang chủ
            </a>
            <span class="mx-2">
                /
            </span>
            <span class="text-orange-500">
                Phụ kiện
            </span>
        </div>
        <div class="flex">
            <!-- Sidebar -->
            <div class="w-1/4 pr-4">
                <div class="mb-6">
                    <h2 class="text-lg font-bold text-orange-500 mb-2">
                        DANH MỤC SẢN PHẨM
                    </h2>
                    <ul class="space-y-2">
                        <li>
                            <button class="w-full text-left">
                                Hàng mới về
                            </button>
                        </li>
                        <li>
                            <button class="w-full text-left">
                                Bộ sưu tập thu đông 2019
                            </button>
                        </li>
                        <li>
                            <button class="w-full text-left">
                                Thời trang nam
                            </button>
                        </li>
                        <li>
                            <button class="w-full text-left">
                                Thời trang nữ
                            </button>
                        </li>
                        <li>
                            <button class="w-full text-left">
                                Thời trang công sở
                            </button>
                        </li>
                        <li>
                            <button class="w-full text-left">
                                Phụ kiện nam
                            </button>
                        </li>
                        <li>
                            <button class="w-full text-left">
                                Phụ kiện nữ
                            </button>
                        </li>
                        <li>
                            <button class="w-full text-left">
                                Giày da công sở
                            </button>
                        </li>
                        <li>
                            <button class="w-full text-left">
                                Áo phông
                            </button>
                        </li>
                        <li>
                            <button class="w-full text-left">
                                Áo sơ mi
                            </button>
                        </li>
                        <li>
                            <button class="w-full text-left">
                                Áo len
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-lg font-bold text-orange-500 mb-2">
                        TÌM KIẾM THEO GIÁ
                    </h2>
                    <ul class="space-y-2">
                        <li>
                            <label class="flex items-center">
                                <input class="mr-2" type="checkbox" />
                                Giá dưới 100.000đ
                            </label>
                        </li>
                        <li>
                            <label class="flex items-center">
                                <input class="mr-2" type="checkbox" />
                                100.000đ - 200.000đ
                            </label>
                        </li>
                        <li>
                            <label class="flex items-center">
                                <input class="mr-2" type="checkbox" />
                                200.000đ - 300.000đ
                            </label>
                        </li>
                        <li>
                            <label class="flex items-center">
                                <input class="mr-2" type="checkbox" />
                                300.000đ - 500.000đ
                            </label>
                        </li>
                        <li>
                            <label class="flex items-center">
                                <input class="mr-2" type="checkbox" />
                                500.000đ - 1.000.000đ
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Main Content -->
            <div class="w-3/4">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold text-gray-800">
                        PHỤ KIỆN
                    </h2>
                    <div class="flex items-center">
                        <span class="mr-2">
                            Sắp xếp theo
                        </span>
                        <select class="border border-gray-300 rounded px-2 py-1">
                            <option>
                                Thứ tự
                            </option>
                        </select>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="text-center">
                        <img alt="Khăn choàng thời trang" height="300"
                            src="https://storage.googleapis.com/a1aa/image/803bF4tKeWD8t37nVdSm-iL2OrY84KSeMyzab2bBQs8.jpg"
                            width="300" />
                        <p class="mt-2">
                            Khăn choàng thời trang
                        </p>
                        <p class="text-orange-500 font-bold">
                            450.000 đ
                        </p>
                    </div>
                    <div class="text-center">
                        <img alt="Kính râm phốt gọng nhựa màu đồi mồi" height="300"
                            src="https://storage.googleapis.com/a1aa/image/ryi0hG2IdDZWaiMYLhSN768U-bbOCLEFKE7BPrutq38.jpg"
                            width="300" />
                        <p class="mt-2">
                            Kính râm phốt gọng nhựa màu đồi mồi
                        </p>
                        <p class="text-orange-500 font-bold">
                            150.000 đ
                        </p>
                    </div>
                    <div class="text-center">
                        <img alt="Mũ lưỡi trai xanh lam 9FORTY" height="300"
                            src="https://storage.googleapis.com/a1aa/image/rP9WIowC_i06P50xxnCkScpJHotx3Ql2g5f1CLbY25Q.jpg"
                            width="300" />
                        <p class="mt-2">
                            Mũ lưỡi trai xanh lam 9FORTY
                        </p>
                        <p class="text-orange-500 font-bold">
                            230.000 đ
                        </p>
                    </div>
                    <div class="text-center">
                        <img alt="Đồng hồ cao cấp dây da" height="300"
                            src="https://storage.googleapis.com/a1aa/image/gbZy0dzjSml211VzH1rN3RVY4iQXl-lHTVSy5vN65OI.jpg"
                            width="300" />
                        <p class="mt-2">
                            Đồng hồ cao cấp dây da
                        </p>
                        <p class="text-orange-500 font-bold">
                            450.000 đ
                        </p>
                    </div>
                    <div class="text-center">
                        <img alt="Dây đeo hoa xanh ngọc" height="300"
                            src="https://storage.googleapis.com/a1aa/image/ynRnAoUy9btY5bXuuFFjAH6WhQCUdTb_rOsnTl3v4jo.jpg"
                            width="300" />
                        <p class="mt-2">
                            Dây đeo hoa xanh ngọc
                        </p>
                        <p class="text-orange-500 font-bold">
                            150.000 đ
                        </p>
                    </div>
                    <div class="text-center">
                        <img alt="Vòng cổ thời trang" height="300"
                            src="https://storage.googleapis.com/a1aa/image/GkhVVd138O96bSok-SOdmBI7j6abJBkNI8qiUMJ7WH4.jpg"
                            width="300" />
                        <p class="mt-2">
                            Vòng cổ thời trang
                        </p>
                        <p class="text-orange-500 font-bold">
                            230.000 đ
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponents />
</template>
<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';



export default {
    name: 'CategoryDetailComponent',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>