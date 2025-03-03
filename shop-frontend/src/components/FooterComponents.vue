<template>
    <div class="bg-gray-100">
        <div class="container mx-auto py-8">
            <!-- Image Section -->
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">
                    HÌNH ẢNH CỦA CHÚNG TÔI
                </h2>
                <p class="text-gray-600">
                    Hình ảnh sản phẩm của chúng tôi đã bán ra thị trường
                </p>
            </div>
            <div class="flex justify-center space-x-4 mb-8">
                <img alt="A person holding a camera" class="w-32 h-32 object-cover" height="200"
                    src="https://storage.googleapis.com/a1aa/image/qoqMGuPMZLXe-Uk6ccVb_4GU3-HR43Zc89mFj5YH4_M.jpg"
                    width="200" />
                <img alt="Two people wearing sweaters" class="w-32 h-32 object-cover" height="200"
                    src="https://storage.googleapis.com/a1aa/image/JRiX2WY3JkwdKPkIpLGE9ZLkg9AKf_tHlgoEeiyYTNE.jpg"
                    width="200" />
                <img alt="Group of people wearing fashionable clothes" class="w-32 h-32 object-cover" height="200"
                    src="https://storage.googleapis.com/a1aa/image/nZHJPDfqa2vp6KPTgftUrqEQL_q5lpTElaNqGaikXlw.jpg"
                    width="200" />
                <img alt="Person holding a round bag" class="w-32 h-32 object-cover" height="200"
                    src="https://storage.googleapis.com/a1aa/image/70UbUEO67aOEByqW5hpWHGYnnUga3-k1YsM6-5m_Zic.jpg"
                    width="200" />
                <img alt="Two people sitting on the floor" class="w-32 h-32 object-cover" height="200"
                    src="https://storage.googleapis.com/a1aa/image/w8_2bnmquzvOrfUsnRXDS-eD5J3XFRXskAu3W20CFGI.jpg"
                    width="200" />
                <img alt="Person walking on the street" class="w-32 h-32 object-cover" height="200"
                    src="https://storage.googleapis.com/a1aa/image/T16s8af0nOUiwPHrwDROVpebOlAzXkJlQBwt9DgVX3w.jpg"
                    width="200" />
            </div>
        </div>
        <!-- Footer Section -->
        <div class="bg-white py-8 w-full">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- About Us -->
                <div class="text-center md:text-left">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">
                        VỀ CHÚNG TÔI
                    </h3>
                    <p class="text-gray-600 mb-2">
                        <i class="fas fa-map-marker-alt text-orange-500">
                        </i>
                        266 Đội Cấn, Hà Nội
                    </p>
                    <p class="text-gray-600 mb-2">
                        <i class="fas fa-map-marker-alt text-orange-500">
                        </i>
                        70 Lữ Gia, P.15, Q.11. TP.HCM
                    </p>
                    <p class="text-gray-600 mb-2">
                        <i class="fas fa-map-marker-alt text-orange-500">
                        </i>
                        124 Lê Đình Lý, P.Vĩnh Trung, Đà Nẵng
                    </p>
                    <p class="text-gray-600 mb-2">
                        <i class="fas fa-phone-alt text-orange-500">
                        </i>
                        1800.6750
                    </p>
                    <p class="text-gray-600">
                        <i class="fas fa-envelope text-orange-500">
                        </i>
                        support@sapo.vn
                    </p>
                </div>
                <!-- Promotions -->
                <div class="text-center">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">
                        NHẬN KHUYẾN MÃI
                    </h3>
                    <p class="text-gray-600 mb-4">
                        Đăng ký email để nhận ngay mã giảm giá &amp; những
                        thông tin sản phẩm mới nhất từ chúng tôi
                    </p>
                    <input class="border border-gray-300 p-2 w-full mb-4" placeholder="Nhập email của bạn..."
                        type="email" />
                    <button class="bg-orange-500 text-white px-4 py-2">
                        ĐĂNG KÝ
                    </button>
                </div>
                <!-- Customer Support -->
                <div class="text-center md:text-right">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">
                        HỖ TRỢ KHÁCH HÀNG
                    </h3>
                    <p class="text-gray-600 mb-2">
                        Từ thứ 2 - thứ 6: 8:00 AM - 10:00 PM
                    </p>
                    <p class="text-gray-600 mb-2">
                        Thứ 7: 9:00 AM - 8:00 PM
                    </p>
                    <p class="text-gray-600 mb-4">
                        Chủ nhật: Nghỉ cả ngày
                    </p>
                    <div class="flex justify-center md:justify-end space-x-4">
                        <a class="text-gray-600" href="#">
                            <i class="fab fa-facebook-f">
                            </i>
                        </a>
                        <a class="text-gray-600" href="#">
                            <i class="fab fa-youtube">
                            </i>
                        </a>
                        <a class="text-gray-600" href="#">
                            <i class="fab fa-instagram">
                            </i>
                        </a>
                        <a class="text-gray-600" href="#">
                            <i class="fab fa-pinterest">
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterHomePage",
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>