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
                                Category Manage
                            </h2>
                            <router-link to="/admin/create_category" class="bg-green-500 text-white px-4 py-2 rounded">
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
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        1
                                    </td>
                                    <td class="py-2 px-4 border-b border-gray-200">
                                        John Doe
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
                                        Jane Smith
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
                                        Alice Johnson
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
                                        Bob Brown
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
    name: 'CategoryManageComponent',
    components: {
        SidebarComponents
    }
}
</script>