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
                <form @submit.prevent="submitForm">
                    <div class="mb-4">
                        <input class="w-full p-2 border rounded" placeholder="Email" type="email"
                            v-model="currentCustomers.email" />
                    </div>
                    <div class="mb-4">
                        <input class="w-full p-2 border rounded" placeholder="Họ và tên" type="text"
                            v-model="currentCustomers.name" />
                    </div>
                    <div class="mb-4 flex items-center">
                        <input class="w-full p-2 border rounded" placeholder="Số điện thoại (tùy chọn)" type="text"
                            v-model="currentCustomers.phone" />
                        <div class="ml-2">
                            <select class="p-2 border rounded">
                                <option value="vn">
                                    🇻🇳
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-4">
                        <input class="w-full p-2 border rounded" placeholder="Địa chỉ (tùy chọn)" type="text"
                            v-model="currentCustomers.address" />
                    </div>
                    <!-- <div class="mb-4">
                        <textarea class="w-full p-2 border rounded" placeholder="Ghi chú (tùy chọn)"></textarea>
                    </div> -->
                    <button type="submit" class="bg-blue-500 text-white w-full p-2 rounded">
                        ĐẶT HÀNG
                    </button>
                </form>
            </div>
            <!-- Right Section -->
            <div class="w-full lg:w-1/3 bg-white p-6 rounded shadow-md mt-6 lg:mt-0">
                <h2 class="text-lg font-semibold mb-4">
                    Đơn hàng ({{ cart.length }} sản phẩm)
                </h2>
                <div class="flex items-center mb-4" v-for="(product, index) in formattedCart" :key="index">
                    <img alt="" class="w-12 h-12 rounded mr-4" height="50" :src="product.image" width="50" />
                    <div>
                        <p>
                            {{ product.name }}
                        </p>
                        <p class="text-gray-500">
                            {{ product.formattedPrice }} x {{ product.quantity }}
                        </p>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex justify-between">
                        <p>
                            Tạm tính
                        </p>
                        <p>
                            {{ formattedSubtotal }}
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
                            {{ formattedSubtotal }}
                        </p>
                    </div>
                </div>
                <div class="mb-4">
                    <router-link to="/cart"><a class="text-blue-500" href="#">
                            Quay về giỏ hàng
                        </a></router-link>
                </div>
            </div>
        </div>
    </div>
    <FooterComponents />
</template>
<script>
import axios from 'axios';

import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

import moment from 'moment';

export default {
    name: 'PaymentComponent',
    components: {
        HeaderComponents, FooterComponents
    },
    data() {
        return {
            cart: [],
            currentCustomers: {
                name: "",
                email: "",
                phone: "",
                address: ""
            },
            order: []
        }
    },
    computed: {
        formattedCart() {
            return this.cart.map(product => ({
                ...product,
                formattedPrice: new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                }).format(product.price),
                formattedSubtotal: new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                }).format(product.price * product.quantity)
            }));
        },
        formattedSubtotal() {
            const total = this.cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
            }).format(total);
        }
    },
    watch: {
        '$store.state.isLoggedIn'(newValue) {
            // Khi trạng thái đăng nhập thay đổi, kiểm tra và cập nhật các trường required
            this.updateRequiredFields(newValue);
        }
    },
    methods: {
        removeFromCart(index) {
            this.cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        updateGrandtotal() {
            let grandTotal = 0;
            this.cart.forEach(product => {
                grandTotal += product.price * product.quantity;
            });
            this.grandTotal = grandTotal;
        },
        increaseQuantity(index) {
            if (isNaN(this.cart[index].quantity) || typeof this.cart[index].quantity !== 'number') {
                this.cart[index].quantity = 1;
            }
            this.cart[index].quantity++;
            this.updateGrandtotal();
        },
        decreaseQuantity(index) {
            if (isNaN(this.cart[index].quantity) || typeof this.cart[index].quantity !== 'number') {
                this.cart[index].quantity = 1;
            }
            if (this.cart[index].quantity > 1) {
                this.cart[index].quantity--;
                this.updateGrandtotal();
            }
        },
        async submitForm() {
            if (!this.cart.length) {
                Swal.fire({
                    icon: 'info',
                    title: 'Giỏ hàng của bạn trống!',
                    text: 'Vui lòng thêm sản phẩm vào giỏ hàng trước khi đặt hàng.',
                }).then(() => {
                    // Chuyển hướng đến trang chủ và load lại trang
                    this.$router.push('/');
                    // window.location.reload();
                });
                return; // Ngăn chặn các hành động tiếp theo nếu giỏ hàng rỗng
            }

            const isLoggedIn = localStorage.getItem('customerToken');

            if (!isLoggedIn) {
                // Hiển thị thông báo bắt đăng nhập
                Swal.fire({
                    icon: 'error',
                    title: 'Bạn cần đăng nhập!',
                    text: 'Vui lòng đăng nhập để tiếp tục đặt hàng.',
                    showCancelButton: true,
                    confirmButtonText: 'Đăng nhập',
                    cancelButtonText: 'Đóng',
                    cancelButtonColor: '#d33',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Chuyển hướng đến trang đăng nhập
                        this.$router.push('/login');
                    }
                });
            } else {
                try {
                    // Gửi thông tin khách hàng lên server
                    const customerUrl = import.meta.env.VITE_APP_BASE_API_URL + "/customers/Create";
                    const customerResponse = await axios.post(customerUrl, this.currentCustomers);
                    const customerId = customerResponse.data.data.id;

                    console.log(customerId);

                    // Lấy dữ liệu giỏ hàng từ localStorage
                    const cartData = localStorage.getItem('cart');
                    let cartItems = [];
                    if (cartData) {
                        cartItems = JSON.parse(cartData);
                    }

                    console.log(cartData);

                    // Tạo danh sách billDetails từ giỏ hàng
                    const billDetail = cartItems.map(product => {
                        const cartItem = this.cart.find(item => item.id === product.id);
                        const updatedQuantity = cartItem ? cartItem.quantity : 0;

                        return {
                            product_id: product.id, // Đúng với model
                            quantity: updatedQuantity,
                            price: product.price * updatedQuantity,
                            order_id: 0 // Đúng với model
                        };
                    });


                    console.log(billDetail);

                    // Lấy userId từ localStorage
                    const userId = localStorage.getItem('userId');

                    // Tạo đối tượng đơn hàng
                    this.order = {
                        userId: userId, // Nếu không có user thì gửi null
                        customerId: customerId, // Đổi tên đúng chuẩn API
                        status: 1, // Đang chờ xử lý
                        totalPrice: billDetail.reduce((sum, item) => sum + item.price, 0), // Tổng tiền
                        note: "", // Nếu có ghi chú
                        orderDetails: billDetail.map(item => ({
                            productId: item.product_id, // Đổi tên key đúng chuẩn API
                            quantity: item.quantity,
                            price: item.price
                        }))
                    };


                    console.log(this.order);

                    const orderData = JSON.parse(JSON.stringify(this.order));

                    console.log(orderData);

                    // Gửi đơn hàng lên server
                    var url = import.meta.env.VITE_APP_BASE_API_URL + `/orders/CreateFullDetail`;
                    axios.post(url, orderData).then((response) => {
                        console.log(response.data);
                        Swal.fire({
                            icon: 'success',
                            title: 'Đặt hàng thành công!',
                            text: 'Đơn hàng của bạn đã được gửi.'
                        }).then(() => {
                            localStorage.removeItem('cart');
                            window.location.reload();
                        });
                    }).catch((error) => {
                        console.log(error.response);
                        Swal.fire({
                            icon: 'error',
                            title: 'Lỗi!',
                            text: 'Có lỗi xảy ra khi gửi đơn hàng.',
                        });

                    })
                } catch (error) {
                    console.error(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Lỗi!',
                        text: 'Có lỗi xảy ra khi gửi đơn hàng.',
                    });
                }
            }
        },
        updateRequiredFields(isLoggedIn) {
            const formInputs = document.querySelectorAll('.form-xac-nhan input[required]');
            formInputs.forEach(input => {
                input.required = isLoggedIn;
            });
        }
    },
    mounted() {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            this.cart = JSON.parse(cartData);
        }
    }
}
</script>
<style scoped></style>