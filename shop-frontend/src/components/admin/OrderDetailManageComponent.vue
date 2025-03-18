<template>
    <div class="font-roboto bg-gray-100">
        <div class="flex h-screen">
            <SidebarComponents />
            <!-- Main Content -->
            <div class="flex-1 flex flex-col">
                <!-- Header -->
                <header class="bg-blue-600 p-4 flex justify-between items-center">
                    <div class="text-white font-bold text-lg">
                        MATERIALPRO
                    </div>
                    <div class="text-white">
                        <i class="fas fa-search">
                        </i>
                    </div>
                </header>
                <!-- Content -->
                <div class="flex-1 p-6">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="text-xl font-bold">
                                Order Detail Manage
                            </h2>
                        </div>
                        <table class="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        OrderId
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Product Name
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Quantity
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Price
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Total Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="detail in orderDetailsData" :key="detail.product_id">
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ detail.order_id }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ detail.product.name }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ detail.quantity }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ formatCurrency(detail.product.price) }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ formatCurrency(detail.price) }}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4" class="py-2 px-4 border-t border-gray-200 text-right font-bold">
                                        Tổng cộng:
                                    </td>
                                    <td class="py-2 px-4 border-t border-gray-200 font-bold">
                                        {{ formatCurrency(totalOrderPrice) }}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios';
import SidebarComponents from './SidebarComponent.vue';

export default {
    name: 'OrderDetailManageComponent',
    components: {
        SidebarComponents
    },
    props: ["id"],
    computed: {
        totalOrderPrice() {
            return this.orderDetailsData.reduce((total, detail) => total + detail.price, 0);
        }
    },
    data() {
        return {
            orderDetailsData: []
        }
    },
    setup(props) {
        const success = () => {
            toast("Success!", {
                autoClose: 1000,
                type: "success"
            });
        }

        return { success };
    },
    methods: {
        loadOrderDetailsData() {
            // const orderId = this.$route.params.id;
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/orders-details/details/${this.$route.params.id}`;
            axios.get(url).then((response) => {
                this.orderDetailsData = response.data.data;
                console.log(this.orderDetailsData);
            }).catch((error) => {
                console.log(error.response);
            })
        },
        formatCurrency(price) {
            return price.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
            });
        },
    },
    mounted() {
        this.loadOrderDetailsData();
        console.log(this.orderDetailsData);

    }
}
</script>