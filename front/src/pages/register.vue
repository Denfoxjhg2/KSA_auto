<template>
    <section class="pt-30">
        <div class="h-[600px] p-4 flex items-center justify-center bg-[#141414] m-6 rounded-lg border-[#1F1F1F] border-2">
            <form @submit.prevent="handleRegister" class="text-white flex flex-col gap-6">
                <h1 class="text-3xl font-sans text-white mb-2">Регистрация</h1>
                
                <input 
                    v-model="username"
                    type="text" 
                    placeholder="Имя пользователя" 
                    class="w-full bg-[#1F1F1F] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC0320] focus:border-transparent transition"
                >
                
                <input 
                    v-model="email"
                    type="email" 
                    placeholder="Email" 
                    class="w-full bg-[#1F1F1F] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC0320] focus:border-transparent transition"
                >
                
                <input 
                    v-model="password"
                    type="password" 
                    placeholder="Пароль" 
                    class="w-full bg-[#1F1F1F] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC0320] focus:border-transparent transition"
                >
                
                <input 
                    v-model="confirmPassword"
                    type="password" 
                    placeholder="Подтверждение пароля" 
                    class="w-full bg-[#1F1F1F] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC0320] focus:border-transparent transition"
                >
                
                <button 
                    type="submit"
                    class="w-full bg-[#FC0320] hover:bg-red-600 text-white font-medium py-4 rounded-lg transition-colors"
                >
                    Зарегистрироваться
                </button>
                
                <p>Уже есть аккаунт? <a href="/login" class="text-gray-600 hover:text-blue-500 transition-colors duration-300">Войти</a></p>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = () => {
    console.log('Данные для отправки на бэк:', {
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    })

}
</script>