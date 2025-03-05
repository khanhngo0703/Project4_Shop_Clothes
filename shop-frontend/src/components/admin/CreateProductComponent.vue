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
                        <h2 class="text-xl font-bold mb-4">
                            Add Product
                        </h2>
                        <form>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-gray-700" for="productName">
                                        Product Name
                                    </label>
                                    <input class="w-full mt-2 p-2 border border-gray-300 rounded" id="productName"
                                        name="productName" type="text" v-model="currentProduct.name" />
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="description">
                                        Description
                                    </label>
                                    <textarea class="w-full mt-2 p-2 border border-gray-300 rounded" id="description"
                                        name="description" rows="4" v-model="currentProduct.description">
         </textarea>
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="price">
                                        Price
                                    </label>
                                    <input class="w-full mt-2 p-2 border border-gray-300 rounded" id="price"
                                        name="price" type="text" v-model="currentProduct.price" />
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="image">
                                        Image
                                    </label>
                                    <input class="w-full mt-2 p-2 border border-gray-300 rounded" id="image"
                                        name="image" type="file" @change="onFileChange" />
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="quantity">
                                        Quantity
                                    </label>
                                    <input class="w-full mt-2 p-2 border border-gray-300 rounded" id="quantity"
                                        name="quantity" type="text" v-model="currentProduct.quantity" />
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="category">
                                        Category
                                    </label>
                                    <select v-model="currentProduct.category_id"
                                        class="w-full mt-2 p-2 border border-gray-300 rounded" id="category"
                                        name="category">
                                        <option disabled value="" selected>Select Category</option>
                                        <option v-for="category in categories" :key="category.id" :value="category.id">
                                            {{ category.name }}
                                        </option>                                        
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="brand">
                                        Brand
                                    </label>
                                    <select v-model="currentProduct.brand_id" class="w-full mt-2 p-2 border border-gray-300 rounded" id="brand"
                                        name="brand">
                                        <option disabled value="" selected>Select Brand</option>
                                        <option v-for="brand in brands" :key="brand.id" :value="brand.id">
                                            {{ brand.name }}
                                        </option>                                        
                                    </select>
                                </div>
                            </div>
                            <div class="mt-6">
                                <button class="bg-blue-500 text-white px-4 py-2 rounded" type="button"
                                    @click="onCreateClick()">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios';
import SidebarComponents from './SidebarComponent.vue';
import router from '../../router.js';

export default {
    name: 'CreateProductComponent',
    components: {
        SidebarComponents
    },
    data() {
        return {
            currentProduct: {
                name: "",
                image: null,
                price: "",
                description: "",
                quantity: "",
                category_id: "",
                brand_id: ""
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
        getCategories() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/categories/GetAll`;
            axios.get(url).then((response) => {
                this.categories = response.data.data;
            }).catch((error) => {
                console.log(error.response);
            })
        },
        getBrands() {
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/brands/GetAll`;
            axios.get(url).then((response) => {
                this.brands = response.data.data;
            }).catch((error) => {
                console.log(error.response);
            })
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                // Kiểm tra phần mở rộng của file
                const validExtensions = ['.png', '.jpg', '.jpeg'];
                const fileName = file.name;
                const fileExtension = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();

                if (!validExtensions.includes(fileExtension)) {
                    alert('Vui lòng chọn một file ảnh có định dạng .png, .jpg hoặc .jpeg!');
                    return;
                }

                const formData = new FormData();
                formData.append('image', file);

                // Gọi API để upload ảnh
                axios.post(import.meta.env.VITE_APP_BASE_API_URL + '/products/UploadImage', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                    .then(response => {
                        // Lưu URL ảnh trả về từ API vào currentProduct.imageProduct
                        this.currentProduct.image = response.data.imageUrl;
                        console.log(this.currentProduct.image);
                    })
                    .catch(error => {
                        console.log('Error uploading image:', error);
                    });
            }
        },
        onCreateClick() {
            if (!this.currentProduct.name || !this.currentProduct.price || !this.currentProduct.description || !this.currentProduct.quantity || !this.currentProduct.category_id || !this.currentProduct.brand_id) {
                alert('Please fill all required fields!');
                return;
            }
            var url = import.meta.env.VITE_APP_BASE_API_URL + `/products/Create`
            axios.post(url, this.currentProduct).then((respone) => {
                console.log(respone.data);
                router.push({ name: 'ProductManageView' });
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    mounted() {
        this.getCategories();
        this.getBrands();
    }
}
</script>