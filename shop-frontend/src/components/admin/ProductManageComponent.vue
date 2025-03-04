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
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        1
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Product A
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        $10.00
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <img alt="Product A image" class="w-10 h-10" height="100"
                                            src="https://storage.googleapis.com/a1aa/image/SIkFs-niz40sk4WPNWS63gk-Llhlsd6xUIrLV0uEqsA.jpg"
                                            width="100" />
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        100
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Category 1
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Brand X
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <button class="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                            Update
                                        </button>
                                        <button class="bg-red-500 text-white px-2 py-1 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        2
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Product B
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        $20.00
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <img alt="Product B image" class="w-10 h-10" height="100"
                                            src="https://storage.googleapis.com/a1aa/image/zxRdgLs_4h2IPq_yE2Yc_0Snuo_Wy2mF7HIO8jd0T9w.jpg"
                                            width="100" />
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        200
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Category 2
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Brand Y
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <button class="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                            Update
                                        </button>
                                        <button class="bg-red-500 text-white px-2 py-1 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        3
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Product C
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        $30.00
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <img alt="Product C image" class="w-10 h-10" height="100"
                                            src="https://storage.googleapis.com/a1aa/image/uOq83DZqyahLzLXCW4cW4C919nE_Cv7m-FW2iB_SBGE.jpg"
                                            width="100" />
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        300
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Category 3
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Brand Z
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <button class="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                            Update
                                        </button>
                                        <button class="bg-red-500 text-white px-2 py-1 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        4
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Product D
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        $40.00
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <img alt="Product D image" class="w-10 h-10" height="100"
                                            src="https://storage.googleapis.com/a1aa/image/hBJ-IzrWgZrmufByxgfSNAg1AO4QI_dGNxHVVzhBBGE.jpg"
                                            width="100" />
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        400
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Category 4
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        Brand W
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        <button class="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                            Update
                                        </button>
                                        <button class="bg-red-500 text-white px-2 py-1 rounded">
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
import SidebarComponents from './SidebarComponent.vue';

export default {
    name: 'ProductManageComponent',
    components: {
        SidebarComponents
    }
}
</script>