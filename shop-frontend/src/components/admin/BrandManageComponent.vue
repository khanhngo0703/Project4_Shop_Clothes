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
                                Brand Manage
                            </h2>
                            <router-link to="/admin/create_brand" class="bg-green-500 text-white px-4 py-2 rounded">
                                Create
                            </router-link>
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
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="b in brandData" :key="b.id">
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ b.id }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ b.name }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <button class="bg-blue-500 text-white px-2 py-1 rounded mr-2" @click="openUpdateModal(b)">
                                            Update
                                        </button>
                                        <button type="button" class="bg-red-500 text-white px-2 py-1 rounded" @click="onDeleteClick(b)">
                                            Delete
                                        </button>
                                    </td>
                                </tr>                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Update Modal -->
        <div v-if="showUpdateModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 class="text-xl font-bold mb-4">Update Brand</h2>
                <form @submit.prevent="updateBrand">
                    <label class="block mb-2">Brand Name:</label>
                    <input v-model="currentBrand.name" type="text" class="w-full p-2 border rounded mb-4" />
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
    name: 'BrandManageComponent',
    components: {
        SidebarComponents
    },
    data() {
        return {
            brandData: [],
            searchKeyword: '',
            pageSize: 10,
            currentPage: 1,
            totalPages: 0,
            totalItems: 0,
            showUpdateModal: false,
            currentBrand: {
                id: null,
                name: ''
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
        loadBrandData() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/brands/GetAll`;
            axios.get(url).then((response) => {
                this.totalItems = response.data.data.length;
                this.totalPages = Math.floor(this.totalItems / this.pageSize);
                if (this.totalItems % this.pageSize !== 0) {
                    this.totalPages++;
                }

                let startIndex = (this.currentPage - 1) * this.pageSize;
                let endIndex = this.currentPage * this.pageSize;

                this.brandData = response.data.data.slice(startIndex, endIndex);
            }).catch((error) => {
                console.log(error.response);
            });
        },
        onSearchClick() {
            if (this.searchKeyword.trim() === '') {
                this.loadCategoryData();
            } else {
                var url = process.env.VUE_APP_BASE_API_URL + `/Categories/fullFilter`;
                var requestData = {
                    filterParams: [
                        {
                            colName: "categoryName",
                            _operator: "like",
                            value: this.searchKeyword
                        }
                    ]
                };

                axios.post(url, requestData)
                    .then(response => {
                        this.categoryData = response.data;
                        this.totalItems = this.categoryData.length;
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
            this.loadCategoryData();
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.loadCategoryData();
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.loadCategoryData();
            }
        },
        openUpdateModal(brand) {
            this.currentBrand = { ...brand };
            this.showUpdateModal = true;
        },
        closeUpdateModal() {
            this.showUpdateModal = false;
        },
        updateBrand() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/brands/Update`;
            axios.put(url, this.currentBrand)
                .then(response => {
                    this.showUpdateModal = false;
                    // this.success();
                    this.loadBrandData();
                })
                .catch(error => {
                    console.error('Error updating brand:', error);
                });
        },
        onDeleteClick(b) {
            if (confirm("Are you sure you want to delete this brand?")) {
                var url = import.meta.env.VITE_APP_BASE_API_URL + `/brands/Delete/${b.id}`;
                axios.delete(url)
                    .then(response => {
                        this.loadBrandData();
                        // this.success();
                    })
                    .catch(error => {
                        console.error("Error deleting brand:", error);
                        toast.error("Error deleting brand. Please try again later.");
                    });
            }
        }
    },
    mounted() {
        this.loadBrandData();
    }
}
</script>