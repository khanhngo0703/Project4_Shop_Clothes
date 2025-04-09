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
                <div class="flex-1 p-6 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                    <!-- Sales Overview -->
                    <div class="bg-white p-6 rounded-lg shadow-md flex-1">
                        <div class="flex justify-between items-center mb-4">
                            <div>
                                <h2 class="text-xl font-bold">
                                    Sales Overview
                                </h2>
                                <p class="text-gray-600">
                                    Ample Admin Vs Pixel Admin
                                </p>
                            </div>
                            <div class="flex space-x-4">
                                <div class="flex items-center">
                                    <span class="w-3 h-3 bg-blue-600 rounded-full mr-2">
                                    </span>
                                    <span>
                                        Ample
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <span class="w-3 h-3 bg-teal-400 rounded-full mr-2">
                                    </span>
                                    <span>
                                        Pixel
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="h-64">
                            <img alt="Bar chart showing sales overview" height="300"
                                src="https://storage.googleapis.com/a1aa/image/4ncw8AbxMq3_YAWhZHWuNMg7Q_4JvMl-hBYIdoVFAwM.jpg"
                                width="400" />
                        </div>
                    </div>
                    <!-- News -->
                    <div class="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
                        <img alt="Person sitting on a ledge overlooking the sea" class="rounded-lg mb-4" height="200"
                            src="https://storage.googleapis.com/a1aa/image/nkH1YmRf9Uz1RVd0ZOmm27wrE8nvM4_gls-viWBP4jw.jpg"
                            width="400" />
                        <div class="flex items-center text-gray-600 mb-4">
                            <i class="fas fa-clock mr-2">
                            </i>
                            <span>
                                22 March, 2023
                            </span>
                        </div>
                        
                        <div class="flex space-x-2 mb-4">
                            <span class="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                                Medium
                            </span>
                            <span class="bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                                Low
                            </span>
                        </div>
                        <div class="flex space-x-2">
                            <img alt="Avatar of a person" class="w-10 h-10 rounded-full" height="40"
                                src="https://storage.googleapis.com/a1aa/image/OodXxVYeFQc4q_haA563Aht3Y5xGXNgIfW5_c-FJErE.jpg"
                                width="40" />
                            <img alt="Avatar of a person" class="w-10 h-10 rounded-full" height="40"
                                src="https://storage.googleapis.com/a1aa/image/OodXxVYeFQc4q_haA563Aht3Y5xGXNgIfW5_c-FJErE.jpg"
                                width="40" />
                            <img alt="Avatar of a person" class="w-10 h-10 rounded-full" height="40"
                                src="https://storage.googleapis.com/a1aa/image/OodXxVYeFQc4q_haA563Aht3Y5xGXNgIfW5_c-FJErE.jpg"
                                width="40" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponents from './SidebarComponent.vue';

export default {
    name: 'DashboardComponent',
    components: {
        SidebarComponents
    }
}
</script>