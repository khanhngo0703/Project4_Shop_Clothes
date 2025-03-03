<template>
    <HeaderComponents />
    <!-- Main Content -->
   <div class="font-sans">
    <div class="container mx-auto mt-4 flex min-h-screen">
        <!-- Sidebar -->
        <aside class="w-1/4">
            <div class="bg-orange-600 text-white text-lg font-bold py-2 px-4">
                DANH MỤC SẢN PHẨM
            </div>
            <ul class="border border-gray-300">
                <li class="border-b border-gray-300 py-2 px-4">
                    Hàng mới về
                </li>
                <li class="border-b border-gray-300 py-2 px-4">
                    Bộ sưu tập thu đông 2019
                </li>
                <li class="border-b border-gray-300 py-2 px-4">
                    Thời trang nam
                </li>
                <li class="border-b border-gray-300 py-2 px-4">
                    Thời trang nữ
                </li>
                <li class="border-b border-gray-300 py-2 px-4">
                    Thời trang công sở
                </li>
                <li class="border-b border-gray-300 py-2 px-4">
                    Phụ kiện nam
                </li>
                <li class="border-b border-gray-300 py-2 px-4">
                    Phụ kiện nữ
                </li>
                <li class="border-b border-gray-300 py-2 px-4">
                    Giày da công sở
                </li>
                <li class="py-2 px-4 text-orange-600 font-bold">
                    ++ XEM TẤT CẢ ++
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
                <img alt="Autumn collection with orange sweater and golden shoes" class="w-full h-auto" src="https://bizweb.dktcdn.net/100/311/013/themes/802137/assets/slider_1.jpg?1718007850853"/>
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
                <!-- Product 1 -->
                <div class="relative">
                    <img alt="Váy bèo bó dáng" class="w-full h-auto" height="400"
                        src="https://storage.googleapis.com/a1aa/image/LR9DOE5376ff8qjgevobpaqYoRqokBubukCIt80gz4M.jpg"
                        width="300" />
                    <div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -3%
                    </div>
                    <div class="mt-4 text-center">
                        <p class="text-gray-600">
                            Váy bèo bó dáng
                        </p>
                        <p class="text-orange-500 font-bold">
                            320.000 đ
                            <span class="line-through text-gray-400">
                                330.000 đ
                            </span>
                        </p>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="relative">
                    <img alt="Váy hoa" class="w-full h-auto" height="400"
                        src="https://storage.googleapis.com/a1aa/image/oKNEBCOeLqwZGagrnkdX_R1mJD7F15J_9d25b1JKgeI.jpg"
                        width="300" />
                    <div class="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        <i class="fas fa-shopping-cart">
                        </i>
                    </div>
                    <div class="absolute top-2 right-10 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        <i class="fas fa-search">
                        </i>
                    </div>
                    <div class="mt-4 text-center">
                        <p class="text-gray-600">
                            Váy hoa
                        </p>
                        <p class="text-orange-500 font-bold">
                            350.000 đ
                        </p>
                    </div>
                </div>
                <!-- Product 3 -->
                <div class="relative">
                    <img alt="Áo phông tay lửng" class="w-full h-auto" height="400"
                        src="https://storage.googleapis.com/a1aa/image/fV6z-QUAwblu9HXQnhfRQ7tNNpH15YEnncJ5HuM0d08.jpg"
                        width="300" />
                    <div class="mt-4 text-center">
                        <p class="text-gray-600">
                            Áo phông tay lửng
                        </p>
                        <p class="text-orange-500 font-bold">
                            Liên hệ
                        </p>
                    </div>
                </div>
                <!-- Product 4 -->
                <div class="relative">
                    <img alt="Comple nhung xanh" class="w-full h-auto" height="400"
                        src="https://storage.googleapis.com/a1aa/image/1RSGFtiJ6A_as1nGU7vSaGvE8SbEZLXbykl4ejx1lGI.jpg"
                        width="300" />
                    <div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -7%
                    </div>
                    <div class="mt-4 text-center">
                        <p class="text-gray-600">
                            Comple nhung xanh
                        </p>
                        <p class="text-orange-500 font-bold">
                            1.400.000 đ
                            <span class="line-through text-gray-400">
                                1.500.000 đ
                            </span>
                        </p>
                    </div>
                </div>
                <!-- Product 5 -->
                <div class="relative">
                    <img alt="Áo bèo trắng" class="w-full h-auto" height="400"
                        src="https://storage.googleapis.com/a1aa/image/rlhUYxLweD0MokLhT1SSDdRmG6G2VjQqOFG0mqIErh0.jpg"
                        width="300" />
                    <div class="mt-4 text-center">
                        <p class="text-gray-600">
                            Áo bèo trắng
                        </p>
                        <p class="text-orange-500 font-bold">
                            200.000 đ
                        </p>
                    </div>
                </div>
                <!-- Product 6 -->
                <div class="relative">
                    <img alt="Bộ thể thao" class="w-full h-auto" height="400"
                        src="https://storage.googleapis.com/a1aa/image/89Ellx45E1k2J_j86fef-gneeJYwm71eJcyroZMCQDk.jpg"
                        width="300" />
                    <div class="mt-4 text-center">
                        <p class="text-gray-600">
                            Bộ thể thao
                        </p>
                        <p class="text-orange-500 font-bold">
                            180.000 đ
                        </p>
                    </div>
                </div>
                <!-- Product 7 -->
                <div class="relative">
                    <img alt="Áo khoác cam dáng ngắn" class="w-full h-auto" height="400"
                        src="https://storage.googleapis.com/a1aa/image/YDhHy44vDWn2KHQPLUQiQ1ZuD0GyH4oXcYDctPxdzPw.jpg"
                        width="300" />
                    <div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -8%
                    </div>
                    <div class="mt-4 text-center">
                        <p class="text-gray-600">
                            Áo khoác cam dáng ngắn
                        </p>
                        <p class="text-orange-500 font-bold">
                            740.000 đ
                            <span class="line-through text-gray-400">
                                800.000 đ
                            </span>
                        </p>
                    </div>
                </div>
                <!-- Product 8 -->
                <div class="relative">
                    <img alt="Áo cổ lọ" class="w-full h-auto" height="400"
                        src="https://storage.googleapis.com/a1aa/image/r0eQpd3IQIF4rG1b9SXHT2vZVLx_LiwZplu2nS8KxOU.jpg"
                        width="300" />
                    <div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -17%
                    </div>
                    <div class="mt-4 text-center">
                        <p class="text-gray-600">
                            Áo cổ lọ
                        </p>
                        <p class="text-orange-500 font-bold">
                            150.000 đ
                            <span class="line-through text-gray-400">
                                180.000 đ
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 py-8">
            <div class="flex justify-between items-center mb-4">
                <h1 class="text-2xl font-bold text-orange-600">
                    DANH MỤC SẢN PHẨM
                </h1>
                <div>
                    <button class="border border-orange-600 text-orange-600 px-4 py-2 mr-2">
                        Nam
                    </button>
                    <button class="border border-orange-600 text-orange-600 px-4 py-2">
                        Nữ
                    </button>
                </div>
            </div>
            <p class="mb-4">
                Các sản phẩm thời trang nam, nữ phù hợp với nhiều lứa tuổi
            </p>
            <div class="mb-8">
                <img alt="Promotional banner with a woman in a colorful dress and a woman in a hat, with text 'Nhập mã giảm giá Autumn 100 Giảm ngay 100K'"
                    class="w-full" height="300"
                    src="https://bizweb.dktcdn.net/100/311/013/themes/802137/assets/collection_tab.jpg?1718007850853"
                    width="1200" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div class="text-center">
                    <img alt="Man wearing a striped sweater" class="w-full mb-2" height="400"
                        src="https://storage.googleapis.com/a1aa/image/QZfYDLkatltdA7uw5u4LJe78CuIjP_RSmbOrUMal2xE.jpg"
                        width="300" />
                    <p>
                        Áo len cộc kẻ ngang
                    </p>
                    <p class="text-orange-600 font-bold">
                        200.000 đ
                    </p>
                </div>
                <div class="text-center">
                    <img alt="Man wearing a blue jacket" class="w-full mb-2" height="400"
                        src="https://storage.googleapis.com/a1aa/image/ijJljXKkwJMzX_PnHNyHPpBX7eI0g9wd_-UoL7iDp8E.jpg"
                        width="300" />
                    <p>
                        Áo khoác xanh lam
                    </p>
                    <p class="text-orange-600 font-bold">
                        670.000 đ
                    </p>
                </div>
                <div class="text-center relative">
                    <img alt="Man wearing a gray jacket" class="w-full mb-2" height="400"
                        src="https://storage.googleapis.com/a1aa/image/G6sKT2dgxc2QZCx-f-UX14pq1b17FKw-BSefYocHCiI.jpg"
                        width="300" />
                    <div class="absolute top-2 right-2">
                        <i class="fas fa-search text-orange-600">
                        </i>
                    </div>
                    <p>
                        Áo khoác xám
                    </p>
                    <p class="text-orange-600 font-bold">
                        180.000 đ
                    </p>
                </div>
                <div class="text-center">
                    <img alt="Man wearing a blue Lacoste sweater" class="w-full mb-2" height="400"
                        src="https://storage.googleapis.com/a1aa/image/7i-Oc9LFHm_dv1DRXaAdv3_1NnVavpX5eUe8sx7YZL4.jpg"
                        width="300" />
                    <p>
                        Áo Phone Lacoste
                    </p>
                    <p class="text-orange-600 font-bold">
                        220.000 đ
                    </p>
                </div>
                <div class="text-center">
                    <img alt="Man wearing a gray sweater and a blue cap" class="w-full mb-2" height="400"
                        src="https://storage.googleapis.com/a1aa/image/Zp2yMXD8olWnKNAkOjAQdFamZ0SXGdRAVkZrTevSVOE.jpg"
                        width="300" />
                    <p>
                        Áo len nam màu ghi
                    </p>
                    <p class="text-orange-600 font-bold">
                        350.000 đ
                    </p>
                </div>
                <div class="text-center">
                    <img alt="Man wearing a green hoodie with a pumpkin face" class="w-full mb-2" height="400"
                        src="https://storage.googleapis.com/a1aa/image/IbLGDsvbj_azFaavuLVFnlVZpiZ_r27cKBGXn-LuXtQ.jpg"
                        width="300" />
                    <p>
                        Áo gió xanh lá
                    </p>
                    <p class="text-orange-600 font-bold">
                        870.000 đ
                    </p>
                </div>
                <div class="text-center">
                    <img alt="Man wearing a pink t-shirt and a blue shirt" class="w-full mb-2" height="400"
                        src="https://storage.googleapis.com/a1aa/image/Y8h6a1EEdZJ4lAkPsQSzdWBOAojP9TJ_11BlpKFtaYo.jpg"
                        width="300" />
                    <p>
                        Áo phông cộc hồng
                    </p>
                    <p class="text-orange-600 font-bold">
                        240.000 đ
                    </p>
                </div>
                <div class="text-center">
                    <img alt="Man wearing a blue sweater and a white shirt" class="w-full mb-2" height="400"
                        src="https://storage.googleapis.com/a1aa/image/4GcUqCHKnaNr8Dxvkh3lrYuhcJrmkwo2AdlbN5zYlYk.jpg"
                        width="300" />
                    <p>
                        Áo dạ xanh lam
                    </p>
                    <p class="text-orange-600 font-bold">
                        520.000 đ
                    </p>
                </div>
            </div>
            <div class="text-center mt-8">
                <button class="border border-gray-800 text-gray-800 px-4 py-2">
                    + XEM THÊM
                </button>
            </div>
        </div>
        <div class="container mx-auto p-4">
            <div class="flex justify-between items-center mb-4">
                <h1 class="text-2xl font-bold text-gray-800">PHỤ KIỆN</h1>
                <button
                    class="border border-orange-500 text-orange-500 px-4 py-2 hover:bg-orange-500 hover:text-white transition">XEM
                    THÊM</button>
            </div>
            <p class="text-gray-600 mb-6">Các loại phụ kiện đi cùng với
                những trang phục của bạn</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="relative col-span-1 md:col-span-1">
                    <img alt="Sale off 50% tất cả phụ kiện" class="w-full h-auto" height="400"
                        src="https://bizweb.dktcdn.net/thumb/grande/100/311/013/products/16.jpg?v=1559575806330"
                        width="400" />
                    <div
                        class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <div class="text-center text-white">
                            <p class="text-2xl font-bold">SALE OFF</p>
                            <p class="text-5xl font-bold">50%</p>
                            <p class="text-lg">tất cả phụ kiện</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="flex items-center">
                        <img alt="Khăn choàng thời trang" class="w-24 h-24 object-cover" height="100"
                            src="https://bizweb.dktcdn.net/thumb/grande/100/311/013/products/16.jpg?v=1559575806330"
                            width="100" />
                        <div class="ml-4">
                            <p class="text-gray-800">Khăn choàng thời
                                trang</p>
                            <p class="text-orange-500 font-bold">450.000
                                đ</p>
                            <a class="text-blue-500" href="#">Xem chi
                                tiết</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <img alt="Kính râm phớt gọng nhựa màu da báo" class="w-24 h-24 object-cover" height="100"
                            src="https://bizweb.dktcdn.net/thumb/grande/100/311/013/products/16.jpg?v=1559575806330"
                            width="100" />
                        <div class="ml-4">
                            <p class="text-gray-800">Kính râm phớt gọng nhựa
                                màu da báo</p>
                            <p class="text-orange-500 font-bold">150.000
                                đ</p>
                            <a class="text-blue-500" href="#">Xem chi
                                tiết</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <img alt="Mũi lưỡi trai xanh lam 9FORTY" class="w-24 h-24 object-cover" height="100"
                            src="https://bizweb.dktcdn.net/thumb/grande/100/311/013/products/16.jpg?v=1559575806330"
                            width="100" />
                        <div class="ml-4">
                            <p class="text-gray-800">Mũi lưỡi trai xanh lam
                                9FORTY</p>
                            <p class="text-orange-500 font-bold">230.000
                                đ</p>
                            <a class="text-blue-500" href="#">Xem chi
                                tiết</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <img alt="Đồng hồ cao cấp dây da" class="w-24 h-24 object-cover" height="100"
                            src="https://bizweb.dktcdn.net/thumb/grande/100/311/013/products/16.jpg?v=1559575806330"
                            width="100" />
                        <div class="ml-4">
                            <p class="text-gray-800">Đồng hồ cao cấp dây
                                da</p>
                            <p class="text-orange-500 font-bold">1.200.000
                                đ</p>
                            <a class="text-blue-500" href="#">Xem chi
                                tiết</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <img alt="Dây đeo hoa xanh ngọc" class="w-24 h-24 object-cover" height="100"
                            src="https://bizweb.dktcdn.net/thumb/grande/100/311/013/products/16.jpg?v=1559575806330"
                            width="100" />
                        <div class="ml-4">
                            <p class="text-gray-800">Dây đeo hoa xanh
                                ngọc</p>
                            <p class="text-orange-500 font-bold">120.000
                                đ</p>
                            <a class="text-blue-500" href="#">Xem chi
                                tiết</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <img alt="Vòng cổ thời trang" class="w-24 h-24 object-cover" height="100"
                            src="https://bizweb.dktcdn.net/thumb/grande/100/311/013/products/16.jpg?v=1559575806330"
                            width="100" />
                        <div class="ml-4">
                            <p class="text-gray-800">Vòng cổ thời trang</p>
                            <p class="text-orange-500 font-bold">450.000
                                đ</p>
                            <a class="text-blue-500" href="#">Xem chi
                                tiết</a>
                        </div>
                    </div>
                </div>
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
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';



export default {
    name: 'HomePage',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>
