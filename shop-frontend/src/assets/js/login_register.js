// src/assets/js/login_register.js

export function showTab(tab) {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (tab === 'login') {
        loginTab.classList.add('border-yellow-400', 'text-black');
        loginTab.classList.remove('text-gray-500');
        registerTab.classList.remove('border-yellow-400', 'text-black');
        registerTab.classList.add('text-gray-500');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        registerTab.classList.add('border-yellow-400', 'text-black');
        registerTab.classList.remove('text-gray-500');
        loginTab.classList.remove('border-yellow-400', 'text-black');
        loginTab.classList.add('text-gray-500');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
}
