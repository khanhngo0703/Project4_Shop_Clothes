<template>
    <HeaderComponents />
    <div class="p-4">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="flex items-center space-x-2">
                    <label class="text-lg font-bold" for="date">
                        1. Ngày
                    </label>
                    <div class="relative">
                        <input class="bg-gray-800 text-white py-2 px-4 rounded-md" id="date" type="text"
                            value="Hôm Nay 03/03" />
                        <i
                            class="fas fa-calendar-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        </i>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <label class="text-lg font-bold" for="movie">
                        2. Phim
                    </label>
                    <div class="relative">
                        <input class="bg-gray-800 text-white py-2 px-4 rounded-md" id="movie" type="text"
                            value="Chọn Phim" />
                        <i class="fas fa-film absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        </i>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <label class="text-lg font-bold" for="cinema">
                        3. Rạp
                    </label>
                    <div class="relative">
                        <input class="bg-gray-800 text-white py-2 px-4 rounded-md" id="cinema" type="text"
                            value="Chọn Rạp" />
                        <i
                            class="fas fa-map-marker-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        </i>
                    </div>
                </div>
            </div>
            <hr class="border-gray-600 my-4" />
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <img alt="Movie poster for Nhà Gia Tiền" class="w-full rounded-md mb-4" height="600"
                        src="https://storage.googleapis.com/a1aa/image/ko0jsk5Ayd8kx_MahbqtAEMoVYUeol5au8eEL8kLt-I.jpg"
                        width="400" />
                    <div class="text-lg font-bold mb-2">
                        NHÀ GIA TIỀN (T18)
                    </div>
                    <div class="text-sm mb-1">
                        Hài, Gia đình
                    </div>
                    <div class="text-sm mb-1">
                        117
                    </div>
                    <div class="text-sm mb-1">
                        Việt Nam
                    </div>
                    <div class="text-sm mb-1">
                        VN
                    </div>
                    <div class="text-sm">
                        T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="mb-6">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="text-xl font-bold mb-2">
                                    Cinestar
                                </div>
                                <div class="text-lg font-bold mb-1">
                                    Quốc Thanh (TP.HCM)
                                </div>
                                <div class="text-sm mb-2">
                                    271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh
                                </div>
                            </div>
                            <div class="grid grid-cols-6 gap-2">
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    08:10
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    09:15
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    09:50
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    10:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    11:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    13:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    14:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    14:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    15:10
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    16:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    16:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    18:10
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    18:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    19:10
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    20:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    20:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    21:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    21:50
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    22:20
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    23:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    23:50
                                </div>
                            </div>
                        </div>
                        <hr class="border-gray-600 my-4" />
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="text-xl font-bold mb-2">
                                    Cinestar
                                </div>
                                <div class="text-lg font-bold mb-1">
                                    Đà Lạt (TP. Đà Lạt)
                                </div>
                                <div class="text-sm mb-2">
                                    Quảng trường Lâm Viên, P10, TP.Đà Lạt, Lâm Đồng
                                </div>
                            </div>
                            <div class="grid grid-cols-6 gap-2">
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    08:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    09:20
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    10:10
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    11:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    12:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    13:55
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    15:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    15:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    17:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    18:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    18:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    19:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    19:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    20:20
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    22:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    22:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    23:10
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    23:40
                                </div>
                            </div>
                        </div>
                        <hr class="border-gray-600 my-4" />
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="text-xl font-bold mb-2">
                                    Cinestar
                                </div>
                                <div class="text-lg font-bold mb-1">
                                    Hai Bà Trưng (TP.HCM)
                                </div>
                                <div class="text-sm mb-2">
                                    135 Hai Bà Trưng, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh
                                </div>
                            </div>
                            <div class="grid grid-cols-6 gap-2">
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    08:15
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    09:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    10:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    11:15
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    12:15
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    12:45
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    13:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    14:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    15:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    16:45
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    17:15
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    18:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    19:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    20:15
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    21:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    22:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    23:00
                                </div>
                            </div>
                        </div>
                        <hr class="border-gray-600 my-4" />
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="text-xl font-bold mb-2">
                                    Cinestar
                                </div>
                                <div class="text-lg font-bold mb-1">
                                    Huế (TP. Huế)
                                </div>
                                <div class="text-sm mb-2">
                                    25 Hai Bà Trưng, Vĩnh Ninh, Quận Thuận Hóa, TP. Huế
                                </div>
                            </div>
                            <div class="grid grid-cols-6 gap-2">
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    09:10
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    09:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    10:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    11:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    13:10
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    13:50
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    14:20
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    15:40
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    16:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    17:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    19:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    19:30
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    20:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    21:00
                                </div>
                                <div class="bg-gray-800 text-center py-2 rounded-md">
                                    22:00
                                </div>
                            </div>
                        </div>
                        <hr class="border-gray-600 my-4" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="border-gray-600 my-4 w-2/3 mx-auto" />
    <div class="bg-gradient-to-b from-gray-900 to-purple-900 text-white">
        <div class="container mx-auto p-4">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/3">
                    <img alt="Movie poster showing a group of people in a dark, eerie setting with the title 'QUỶ NHẬP TRÀNG' in bold yellow letters at the top"
                        height="600"
                        src="https://storage.googleapis.com/a1aa/image/rqEqU6fhZjzQkDa3gZ3IgIcSFyEE4DOIEBgt0uYEXn4.jpg"
                        width="400" />
                    <div class="text-lg font-bold mt-4">
                        QUỶ NHẬP TRÀNG (T18)
                    </div>
                    <div class="mt-2">
                        <i class="fas fa-film">
                        </i>
                        Kinh Dị
                    </div>
                    <div class="mt-2">
                        <i class="fas fa-clock">
                        </i>
                        122
                    </div>
                    <div class="mt-2">
                        <i class="fas fa-flag">
                        </i>
                        Việt Nam
                    </div>
                    <div class="mt-2">
                        <i class="fas fa-globe">
                        </i>
                        VN
                    </div>
                    <div class="mt-2">
                        <i class="fas fa-exclamation-triangle">
                        </i>
                        T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)
                    </div>
                </div>
                <div class="md:w-2/3 md:pl-8">
                    <div class="mb-4">
                        <button class="border border-gray-500 px-4 py-2 rounded">
                            Chưa có suất chiếu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="border-gray-600 my-4 w-2/3 mx-auto" />
    <div class="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div class="container mx-auto py-8">
            <div class="text-center mb-8">
                <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                    XEM TẤT CẢ LỊCH CHIẾU
                </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="relative">
                        <img alt="Movie poster for ĐẢO CUỒNG SÁT (T18)" class="w-full" height="450"
                            src="https://storage.googleapis.com/a1aa/image/5qm-Dhsrv8kysm1o34a3PsGvscwOVBJ8PsR5Bt42KJY.jpg"
                            width="300" />
                        <div class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1">
                            20
                        </div>
                        <div class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1">
                            T18
                        </div>
                    </div>
                    <h3 class="mt-4 font-bold">
                        ĐẢO CUỒNG SÁT (T18)
                    </h3>
                    <div class="flex justify-center mt-2">
                        <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2">
                            ĐẶT VÉ
                        </button>
                        <button class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2">
                            Xem Trailer
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="relative">
                        <img alt="Movie poster for NỮ TU BÓNG TỐI (T16)" class="w-full" height="450"
                            src="https://storage.googleapis.com/a1aa/image/UC6i6AYdDspLugWqe-taeElLQ6r4O5g-iq0HPMvB4Tk.jpg"
                            width="300" />
                        <div class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1">
                            20
                        </div>
                        <div class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1">
                            T16
                        </div>
                    </div>
                    <h3 class="mt-4 font-bold">
                        NỮ TU BÓNG TỐI (T16)
                    </h3>
                    <div class="flex justify-center mt-2">
                        <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2">
                            ĐẶT VÉ
                        </button>
                        <button class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2">
                            Xem Trailer
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="relative">
                        <img alt="Movie poster for VÕ ĐƯỜNG ĐẠI NÁO (T16)" class="w-full" height="450"
                            src="https://storage.googleapis.com/a1aa/image/ziK7Vwdp3fADgTqNvgDM3MmoQVEBCGEIS-cG2kFwjMs.jpg"
                            width="300" />
                        <div class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1">
                            20
                        </div>
                        <div class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1">
                            T16
                        </div>
                    </div>
                    <h3 class="mt-4 font-bold">
                        VÕ ĐƯỜNG ĐẠI NÁO (T16)
                    </h3>
                    <div class="flex justify-center mt-2">
                        <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2">
                            ĐẶT VÉ
                        </button>
                        <button class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2">
                            Xem Trailer
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="relative">
                        <img alt="Movie poster for CUỘC ĐÀO TẨU TRÊN KHÔNG (T16)" class="w-full" height="450"
                            src="https://storage.googleapis.com/a1aa/image/BZjAV0tHP6YIiLl2LG4-za6CY5cwBKnOOM81RUNki64.jpg"
                            width="300" />
                        <div class="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1">
                            20
                        </div>
                        <div class="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1">
                            T16
                        </div>
                    </div>
                    <h3 class="mt-4 font-bold">
                        CUỘC ĐÀO TẨU TRÊN KHÔNG (T16)
                    </h3>
                    <div class="flex justify-center mt-2">
                        <button class="bg-yellow-500 text-black font-bold py-2 px-4 rounded mx-2">
                            ĐẶT VÉ
                        </button>
                        <button class="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mx-2">
                            Xem Trailer
                        </button>
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
    name: 'ShowtimesComponent',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>