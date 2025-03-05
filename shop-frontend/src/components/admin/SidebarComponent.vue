<template>
    <!-- Sidebar -->
    <div class="w-64 bg-white shadow-md">
        <div class="p-4 bg-cover bg-center" >
            <div class="flex items-center">
                <img alt="User profile picture" class="w-12 h-12 rounded-full" height="50"
                    src="https://storage.googleapis.com/a1aa/image/0WnRoh0T7zsiOsz_eAzlOBJKZFHzn63jSYGM9YfOfzo.jpg"
                    width="50" />
                <div class="ml-4 text-white">
                    <p class="font-bold" style="color: black;">
                        ADMIN
                    </p>
                </div>
            </div>
        </div>
        <nav class="mt-6">
            <a class="flex items-center p-4 text-gray-700 hover:bg-gray-200" href="#">
                <i class="fas fa-home w-6">
                </i>
                <span class="ml-4">
                    <router-link to="/admin" class="text">Dashboard</router-link>
                </span>
            </a>
            <a class="flex items-center p-4 text-gray-700 hover:bg-gray-200" href="#">
                <i class="fas fa-circle w-6">
                </i>
                <span class="ml-4">
                    <router-link to="/admin/productmanage" class="text">Product Manage</router-link>                    
                </span>
            </a>
            <a class="flex items-center p-4 text-gray-700 hover:bg-gray-200" href="#">
                <i class="fas fa-circle w-6">
                </i>
                <span class="ml-4">
                    <router-link to="/admin/categorymanage" class="text">Category Manage</router-link>                    
                </span>
            </a>
            <a class="flex items-center p-4 text-gray-700 hover:bg-gray-200" href="#">
                <i class="fas fa-circle w-6">
                </i>
                <span class="ml-4">
                    <router-link to="/admin/brandmanage" class="text">Brand Manage</router-link>                    
                </span>
            </a>
            <a class="flex items-center p-4 text-gray-700 hover:bg-gray-200" href="#">
                <i class="fas fa-circle w-6">
                </i>
                <span class="ml-4">
                    User Manage
                </span>
            </a>
            <a class="flex items-center p-4 text-gray-700 hover:bg-gray-200" href="#">
                <i class="fas fa-circle w-6">
                </i>
                <span class="ml-4">
                    FeedBack Manage
                </span>
            </a>
            <a class="flex items-center p-4 text-gray-700 hover:bg-gray-200" href="#">
                <i class="fas fa-circle w-6">
                </i>
                <span class="ml-4">
                    Order Manage
                </span>
            </a>
        </nav>
    </div>
</template>
<script>

export default {
    name: 'SidebarComponent',
    components: {

    }
}
</script>