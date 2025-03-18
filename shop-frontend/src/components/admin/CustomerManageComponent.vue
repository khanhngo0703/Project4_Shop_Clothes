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
                                Customer Manage
                            </h2>
                        </div>
                        <table class="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        ID
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Name
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Email
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Phone
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Address
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="c in customerData" :key="c.id">
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ c.id }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ c.name }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ c.email }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ c.phone }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ c.address }}
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
    </div>
</template>
<script>

import axios from 'axios';
import SidebarComponents from './SidebarComponent.vue';

export default {
    name: 'CategoryManageComponent',
    components: {
        SidebarComponents
    },
    data() {
        return {
            customerData: [],
            searchKeyword: '',
            pageSize: 3,
            currentPage: 1,
            totalPages: 0,
            totalItems: 0,
            showUpdateModal: false,
            currentCustomer: {
                id: null,
                fullName: ''
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
        loadCustomerData() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/customers/GetAll`;
            axios.get(url).then((response) => {
                this.totalItems = response.data.data.length;
                this.totalPages = Math.ceil(this.totalItems / this.pageSize);

                let startIndex = (this.currentPage - 1) * this.pageSize;
                let endIndex = this.currentPage * this.pageSize;

                this.customerData = response.data.data.slice(startIndex, endIndex);
            }).catch((error) => {
                console.log(error.response);
            })
        },
        onSearchClick() {
            if (this.searchKeyword.trim() === '') {
                this.loadCustomerData();
            } else {
                var url = process.env.VUE_APP_BASE_API_URL + `/Customers/fullFilter`;
                var requestData = {
                    filterParams: [
                        {
                            colName: "fullName",
                            _operator: "like",
                            value: this.searchKeyword
                        }
                    ]
                };

                axios.post(url, requestData)
                    .then(response => {
                        this.customerData = response.data;
                        this.totalItems = this.customerData.length;
                        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
                        this.currentPage = 1;
                    })
                    .catch(error => {
                        console.error('Lỗi khi tìm kiếm khách hàng:', error);
                    });
            }
        },
        changePage(page) {
            this.currentPage = page;
            this.loadCustomerData();
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.loadCustomerData();
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.loadCustomerData();
            }
        },
        openUpdateModal(customer) {
            this.currentCustomer = { ...customer };
            this.showUpdateModal = true;
        },
        closeUpdateModal() {
            this.showUpdateModal = false;
        }
    },
    mounted() {
        this.loadCustomerData();
    }
}
</script>