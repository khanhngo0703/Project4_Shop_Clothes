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
                            Add Category
                        </h2>
                        <form>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-gray-700" for="productName">
                                        Category Name
                                    </label>
                                    <input class="w-full mt-2 p-2 border border-gray-300 rounded" id="productName"
                                        name="productName" type="text" />
                                </div>
                                
                                <div>
                                    <label class="block text-gray-700" for="image">
                                        Image
                                    </label>
                                    <input class="w-full mt-2 p-2 border border-gray-300 rounded" id="image"
                                        name="image" type="file" />
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
    name: 'CreateCategoryComponent',
    components: {
        SidebarComponents
    }
}
</script>