<template>
    <HeaderComponents />
    <div class="container mx-auto p-4">
        <div class="text-sm mb-4">
            <a class="text-gray-600" href="#">
                Trang chủ
            </a>
            /
            <span class="text-orange-500">
                Liên hệ
            </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div class="bg-white p-4 shadow-md flex items-center">
                <i class="fas fa-map-marker-alt text-orange-500 text-2xl mr-4">
                </i>
                <div>
                    <h3 class="font-bold">
                        Địa chỉ
                    </h3>
                    <p>
                        266 Đội Cấn, Ba Đình, Hà Nội
                    </p>
                </div>
            </div>
            <div class="bg-white p-4 shadow-md flex items-center">
                <i class="fas fa-phone-alt text-orange-500 text-2xl mr-4">
                </i>
                <div>
                    <h3 class="font-bold">
                        Hotline
                    </h3>
                    <p>
                        1900 6750
                    </p>
                </div>
            </div>
            <div class="bg-white p-4 shadow-md flex items-center">
                <i class="fas fa-envelope text-orange-500 text-2xl mr-4">
                </i>
                <div>
                    <h3 class="font-bold">
                        Email
                    </h3>
                    <p>
                        support@sapo.vn
                    </p>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <iframe class="w-full h-96" frameborder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.902214011364!2d105.8189083154021!3d21.03623779291864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4a1b1a1b1b%3A0x1b1b1b1b1b1b1b1b!2s266%20%C4%90%E1%BB%99i%20C%E1%BA%A5n%2C%20Ba%20%C4%90%C3%ACnh%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
                    style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div>
                <h2 class="text-2xl font-bold mb-2">
                    GỬI TIN NHẮN CHO CHÚNG TÔI
                </h2>
                <p class="mb-4">
                    Mô tả ngắn trang liên hệ
                </p>
                <form>
                    <div class="mb-4">
                        <input class="w-full p-2 border border-gray-300 rounded" placeholder="Họ và tên*" type="text" />
                    </div>
                    <div class="mb-4">
                        <input class="w-full p-2 border border-gray-300 rounded" placeholder="Email*" type="email" />
                    </div>
                    <div class="mb-4">
                        <input class="w-full p-2 border border-gray-300 rounded" placeholder="Số điện thoại*"
                            type="text" />
                    </div>
                    <div class="mb-4">
                        <textarea class="w-full p-2 border border-gray-300 rounded h-32"
                            placeholder="Nội dung"></textarea>
                    </div>
                    <button class="bg-orange-500 text-white px-4 py-2 rounded" type="submit">
                        Gửi liên hệ của bạn
                    </button>
                </form>
            </div>
        </div>
    </div>
    <FooterComponents />
</template>
<script>
import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';



export default {
    name: 'AboutUsComponent',
    components: {
        HeaderComponents, FooterComponents
    }
}
</script>