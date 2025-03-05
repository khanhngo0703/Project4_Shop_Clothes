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
                                Product Manage
                            </h2>
                            <router-link to="/admin/create_product" class="bg-green-500 text-white px-4 py-2 rounded">
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
                                        Price
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Image
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Quantity
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Category Name
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Brand Name
                                    </th>
                                    <th
                                        class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="p in productData" :key="p.id">
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ p.id }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ p.name }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ p.price }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <img alt="Product A image" class="w-10 h-10" height="100" :src="p.image"
                                            width="100" />
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ p.quantity }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ p.categoryName }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        {{ p.brandName }}
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <button class="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                            Update
                                        </button>
                                        <button type="button" class="bg-red-500 text-white px-2 py-1 rounded" @click="onDeleteClick(p)">
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
    </div>
</template>
<script>

import axios from 'axios';
import SidebarComponents from './SidebarComponent.vue';

export default {
    name: 'ProductManageComponent',
    components: {
        SidebarComponents
    },
    data() {
        return {
            productData: [],
            searchKeyword: '',
            pageSize: 10,
            currentPage: 1,
            totalPages: 0,
            totalItems: 0,
            showUpdateModal: false,
            currentProduct: {
                productName: "",
                imageProduct: null,
                price: "",
                description: "",
                barCode: "",
                categoryId: ""
            },
            categories: [],
            brands: []
        }
    },
    setup() {
        const success = () => {
            toast("Success !", {
                autoClose: 1000,
                type: "success"
            });
        }
        return { success };
    },
    methods: {
        loadProductData() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/products/GetAll`;
            axios.get(url).then((response) => {
                this.totalItems = response.data.length;
                this.totalPages = Math.floor(this.totalItems / this.pageSize);
                if (this.totalItems % this.pageSize !== 0) {
                    this.totalPages++;
                }

                let startIndex = (this.currentPage - 1) * this.pageSize;
                let endIndex = this.currentPage * this.pageSize;

                this.productData = response.data.data.slice(startIndex, endIndex).map(product => {
                    const category = this.categories.find(cat => cat.id === product.category_id);
                    const brand = this.brands.find(bra => bra.id === product.brand_id);
                    return {
                        ...product,
                        categoryName: category ? category.name : 'Unknown',
                        brandName: brand ? brand.name : 'Unknown'
                    };
                });
                console.log("Dữ liệu sản phẩm sau khi load:", this.productData);
            }).catch((error) => {
                console.log(error.response);
            });
        },
        loadCategories() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/categories/GetAll`;
            return axios.get(url).then((response) => {
                this.categories = response.data.data;
            }).catch((error) => {
                console.log(error.response);
            });
        },
        loadBrands() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/brands/GetAll`;
            return axios.get(url).then((response) => {
                this.brands = response.data.data;
            }).catch((error) => {
                console.log(error.response);
            });
        },
        onSearchClick() {
            if (this.searchKeyword.trim() === '') {
                this.loadProductData();
            } else {
                var url = process.env.VUE_APP_BASE_API_URL + `/Products/fullFilter`;
                var requestData = {
                    filterParams: [
                        {
                            colName: "productName",
                            _operator: "like",
                            value: this.searchKeyword
                        }
                    ]
                };

                axios.post(url, requestData)
                    .then(response => {
                        this.productData = response.data;
                        this.totalItems = this.productData.length;
                        this.totalPages = Math.floor(this.totalItems / this.pageSize);
                        if (this.totalItems % this.pageSize !== 0) {
                            this.totalPages++;
                        }
                        this.currentPage = 1;
                    })
                    .catch(error => {
                        console.error('Error during search:', error);
                    });
            }
        },
        changePage(page) {
            this.currentPage = page;
            this.loadProductData();
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.loadProductData();
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.loadProductData();
            }
        },
        openUpdateModal(product) {
            this.currentProduct = { ...product };
            this.showUpdateModal = true;
        },
        closeUpdateModal() {
            this.showUpdateModal = false;
        },
        updateProduct() {
            var url = process.env.VUE_APP_BASE_API_URL + `/Products/Update`;
            axios.put(url, this.currentProduct)
                .then(response => {
                    this.showUpdateModal = false;
                    this.success();
                    this.loadProductData();
                })
                .catch(error => {
                    console.error('Error updating product:', error);
                });
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const formData = new FormData();
                formData.append('image', file);

                axios.post(process.env.VUE_APP_BASE_API_URL + '/Products/UploadImage', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                    .then(response => {
                        this.currentProduct.imageProduct = response.data.imageUrl;
                    })
                    .catch(error => {
                        console.log('Error uploading image:', error);
                    });
            }
        },
        onDeleteClick(p) {
            if (confirm("Are you sure you want to delete this product?")) {
                var url = import.meta.env.VITE_APP_BASE_API_URL + `/products/Delete/${p.id}`;
                axios.delete(url)
                    .then(response => {
                        this.loadProductData();
                        // this.success();
                    })
                    .catch(error => {
                        console.error("Error deleting product:", error);
                        toast.error("Error deleting product. Please try again later.");
                    });
            }
        }
    },
    mounted() {
        this.loadCategories()
            .then(() => this.loadBrands())  // Nếu có brands
            .then(() => this.loadProductData())
            .catch(error => console.error("Error loading categories or brands:", error));

        console.log(this.productData);
        console.log(this.categories);
        console.log(this.brands);

    }
}
</script>