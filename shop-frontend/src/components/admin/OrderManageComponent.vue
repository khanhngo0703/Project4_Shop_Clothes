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
                                Order Manage
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
                                        OrderDate
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        CustomerName
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Phone
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Address
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="o in orderData" :key="o.id">
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ o.id }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ o.customer.createdAt }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ o.customer.name }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ o.customer.phone }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ o.customer.address }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <button type="button" class="bg-yellow-500 text-white px-2 py-1 rounded"
                                            @click="viewDetails(o.id)">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="mt-6 flex justify-center items-center space-x-2">
                            <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                                @click="previousPage">
                                « Previous
                            </button>

                            <div v-for="page in Math.ceil(totalItems / pageSize)" :key="page">
                                <button
                                    class="px-4 py-2 mx-1 border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white"
                                    @click="changePage(page)">
                                    {{ page }}
                                </button>
                            </div>

                            <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                                @click="nextPage">
                                Next »
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- Update Modal -->
        <div v-if="showUpdateModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 class="text-xl font-bold mb-4">Update Category</h2>
                <form @submit.prevent="updateCategory">
                    <label class="block mb-2">Category Name:</label>
                    <input v-model="currentCategory.name" type="text" class="w-full p-2 border rounded mb-4" />
                    <div class="flex justify-end">
                        <button class="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            @click="closeUpdateModal">Cancel</button>
                        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios';
import SidebarComponents from './SidebarComponent.vue';

export default {
    name: 'OrderManageComponent',
    components: {
        SidebarComponents
    },
    data() {
        return {
            orderData: [],
            searchKeyword: '',
            pageSize: 3,
            currentPage: 1,
            totalPages: 0,
            totalItems: 0,
            showUpdateModal: false,
            currentOrder: {
                id: null,
                categoryName: ''
            }
        }
    },
    setup() {
        const success = () => {
            toast("Success!", {
                autoClose: 1000,
                type: "success"
            });
        }
        return { success };
    },
    methods: {
        loadOrderData() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/orders/GetOrder`;
            axios.get(url).then((response) => {
                this.totalItems = response.data.data.length;
                this.totalPages = Math.ceil(this.totalItems / this.pageSize);

                let startIndex = (this.currentPage - 1) * this.pageSize;
                let endIndex = this.currentPage * this.pageSize;

                this.orderData = response.data.data.slice(startIndex, endIndex);
            }).catch((error) => {
                console.log(error.response);
            })
        },
        onSearchClick() {
            if (this.searchKeyword.trim() === '') {
                this.loadOrderData();
            } else {
                var url = process.env.VUE_APP_BASE_API_URL + `/Customers/fullFilter`;
                var requestData = {
                    filterParams: [
                        {
                            colName: "customerName",
                            _operator: "like",
                            value: this.searchKeyword
                        }
                    ]
                };

                axios.post(url, requestData)
                    .then(response => {
                        this.orderData = response.data;
                        this.totalItems = this.orderData.length;
                        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
                        this.currentPage = 1;
                    })
                    .catch(error => {
                        console.error('Lỗi khi tìm kiếm danh mục:', error);
                    });
            }
        },
        changePage(page) {
            this.currentPage = page;
            this.loadOrderData();
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.loadOrderData();
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.loadOrderData();
            }
        },
        viewDetails(id) {
            console.log(id);
            this.$router.push({ name: 'OrderDetailManageView', params: { id } });
        }
    },
    mounted() {
        this.loadOrderData();
    }
}
</script>