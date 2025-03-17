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
            <table class="min-w-full bg-white border border-gray-200" v-if="cart.length">
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
                    <tr v-for="(product, index) in formattedCart" :key="index">
                        <td class="px-4 py-2 border-b text-center">
                            <img alt="" class="mx-auto" height="100" :src="product.image" width="100" />
                        </td>
                        <td class="px-4 py-2 border-b text-center">
                            {{ product.name }}
                        </td>
                        <td class="px-4 py-2 border-b text-center text-orange-500">
                            {{ product.formattedPrice }}
                        </td>
                        <td class="px-4 py-2 border-b text-center">
                            <div class="flex items-center justify-center">
                                <div @click="decreaseQuantity(index)" class="px-2 py-1 border border-gray-300">
                                    -
                                </div>
                                <input class="w-12 text-center border-t border-b border-gray-300" type="number" min="1"
                                    v-model="cart[index].quantity" />
                                <div @click="increaseQuantity(index)" class="px-2 py-1 border border-gray-300">
                                    +
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-2 border-b text-center text-orange-500">
                            {{ product.formattedSubtotal }}
                        </td>
                        <td class="px-4 py-2 border-b text-center">
                            <a @click.prevent="removeFromCart(index)" class="text-gray-500 hover:text-red-500">
                                <i class="fas fa-trash">
                                </i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-else>
                <h3 style="text-align: center;">No items in cart.</h3>
            </div>
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
                    {{ formattedSubtotal }}
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

import axios from 'axios';

import HeaderComponents from './HeaderComponent.vue';
import FooterComponents from './FooterComponents.vue';



export default {
    name: 'CartComponent',
    components: {
        HeaderComponents, FooterComponents
    },
    data() {
        return {
            cart: [],
            currentCustomers: {
                fullName: "",
                email: "",
                phoneNumber: "",
                address: "",
                note: ""
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
                    const customerUrl = process.env.VUE_APP_BASE_API_URL + "/Customers/Create";
                    const customerResponse = await axios.post(customerUrl, this.currentCustomers);
                    const customerId = customerResponse.data.id;

                    console.log(customerId);

                    // Lấy dữ liệu giỏ hàng từ localStorage
                    const cartData = localStorage.getItem('cart');
                    let cartItems = [];
                    if (cartData) {
                        cartItems = JSON.parse(cartData);
                    }

                    console.log(this.cartData);

                    // Tạo danh sách billDetails từ giỏ hàng
                    const billDetail = cartItems.map(product => {
                        const updatedQuantity = this.cart.find(item => item.id === product.id).quantity;
                        return {
                            productId: product.id,
                            quantity: updatedQuantity,
                            price: product.price * updatedQuantity,
                            billId: 0,
                            product: product
                        };
                    });

                    console.log(this.billDetail);

                    // Tạo đối tượng đơn hàng
                    this.order = {
                        id: 0,
                        code: "ddfgregter",
                        date: moment(new Date()).format("YYYY-MM-DDTHH:mm:ss"),
                        customerId: customerId,
                        billDetails: billDetail
                    };


                    // Gửi đơn hàng lên server
                    var url = process.env.VUE_APP_BASE_API_URL + `/Bills/InsertFullDetail`;
                    axios.post(url, this.order).then((response) => {
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