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
                                        name="productName" type="text" />
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="description">
                                        Description
                                    </label>
                                    <textarea class="w-full mt-2 p-2 border border-gray-300 rounded" id="description"
                                        name="description" rows="4">
         </textarea>
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="price">
                                        Price
                                    </label>
                                    <input class="w-full mt-2 p-2 border border-gray-300 rounded" id="price"
                                        name="price" type="text" />
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="image">
                                        Image
                                    </label>
                                    <input class="w-full mt-2 p-2 border border-gray-300 rounded" id="image"
                                        name="image" type="file" />
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="quantity">
                                        Quantity
                                    </label>
                                    <input class="w-full mt-2 p-2 border border-gray-300 rounded" id="quantity"
                                        name="quantity" type="text" />
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="category">
                                        Category
                                    </label>
                                    <select class="w-full mt-2 p-2 border border-gray-300 rounded" id="category"
                                        name="category">
                                        <option>
                                            Category 1
                                        </option>
                                        <option>
                                            Category 2
                                        </option>
                                        <option>
                                            Category 3
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-gray-700" for="brand">
                                        Brand
                                    </label>
                                    <select class="w-full mt-2 p-2 border border-gray-300 rounded" id="brand"
                                        name="brand">
                                        <option>
                                            Brand A
                                        </option>
                                        <option>
                                            Brand B
                                        </option>
                                        <option>
                                            Brand C
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="mt-6">
                                <button class="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
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
import SidebarComponents from './SidebarComponent.vue';

export default {
    name: 'CreateProductComponent',
    components: {
        SidebarComponents
    }
}
</script>