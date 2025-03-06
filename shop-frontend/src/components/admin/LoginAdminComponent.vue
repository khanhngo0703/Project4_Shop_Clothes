<template>
    <div class="bg-blue-900 flex items-center justify-center min-h-screen">
        <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <div class="flex justify-center mb-6">
                <img alt="Illustration of a group of people working together, with one person standing and others sitting around a table with laptops"
                    class="w-64 h-40" height="200"
                    src="https://storage.googleapis.com/a1aa/image/-kD4BimgsNNMh9_BYw4pLl0Qc3HYpLSDeiAOjQrVd14.jpg"
                    width="300" />
            </div>
            <h2 class="text-center text-2xl font-semibold mb-6">
                ĐĂNG NHẬP HỆ THỐNG ADMIN
            </h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2" for="name">
                        Tài khoản quản trị
                    </label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <i class="fas fa-user text-gray-400"></i>
                        </span>
                        <input v-model="name"
                            class="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="name" placeholder="Tài khoản quản trị" type="text" required />
                    </div>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 mb-2" for="password">
                        Mật khẩu
                    </label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <i class="fas fa-lock text-gray-400"></i>
                        </span>
                        <input v-model="password"
                            class="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="password" placeholder="Mật khẩu" type="password" required />
                        <span class="absolute inset-y-0 right-0 flex items-center pr-3">
                            <i class="fas fa-eye text-gray-400 cursor-pointer" @click="togglePassword"></i>
                        </span>
                    </div>
                </div>
                <button class="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    type="submit">
                    Đăng nhập
                </button>
            </form>   
            <p v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</p>                 
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginAdminComponent',
    data() {
        return {
            name: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await axios.post('http://localhost:5000/api/login', {
                    name: this.name,
                    password: this.password
                });

                console.log("Response Data:", response.data);

                if (response.data.token) {
                    localStorage.setItem('adminToken', response.data.token);
                    localStorage.setItem('userRole', response.data.data.role);

                    if (response.data.data.role === "1") {
                        this.$router.push('/admin'); // Chuyển hướng đến trang admin
                    } else {
                        this.errorMessage = "Bạn không có quyền truy cập!";
                    }
                }
            } catch (error) {
                this.errorMessage = error.response?.data?.message || "Đăng nhập thất bại";
            }
        },
        togglePassword() {
            const passwordInput = document.getElementById("password");
            passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        }
    }
};
</script>
