<template>
  <div class="min-h-screen p-4 flex items-center justify-center pt-30">
    <div class="max-w-md w-full">

      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Запись на услугу</h1>
        <p class="text-gray-400">Работаем в будни с 9 до 21, в ближайшее время перезвоним</p>
      </div>
      <form @submit.prevent="submitForm" class="space-y-5">

        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">
            Имя и фамилия *
          </label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC0320] focus:border-transparent transition"
            placeholder="Иван Иванов"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">
            Номер телефона *
          </label>
          <input
            v-model="form.phone"
            type="tel"
            required
            class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC0320] focus:border-transparent transition"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">
            Марка и модель авто *
          </label>
          <input
            v-model="form.car"
            type="text"
            required
            class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC0320] focus:border-transparent transition"
            placeholder="BMW X5"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">
            Выберите услугу *
          </label>
          <select
            v-model="form.service"
            required
            class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC0320] focus:border-transparent transition appearance-none cursor-pointer"
          >
            <option value="" disabled selected class="bg-gray-800">Выберите услугу</option>
            <option value="basic_wash" class="bg-gray-800">Детейлинг-мойка</option>
            <option value="full_wash" class="bg-gray-800">Химчистка салона</option>
            <option value="interior_cleaning" class="bg-gray-800">Полировка + защита</option>
            <option value="polishing" class="bg-gray-800">Защитная оклейка</option>
            <option value="waxing" class="bg-gray-800">Мойка двигателя</option>
            <option value="glass_coating" class="bg-gray-800">Шумоизоляция</option>
            <option value="engine_cleaning" class="bg-gray-800">Сухой туман</option>
            <option value="dry_cleaning" class="bg-gray-800">Антихром</option>
            <option value="complex" class="bg-gray-800">Автозвук</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">
            Предпочтительная дата
          </label>
          <input
            v-model="form.date"
            type="date"
            class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC0320] focus:border-transparent transition"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">
            Комментарий (необязательно)
          </label>
          <textarea
            v-model="form.comment"
            rows="3"
            class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC0320] focus:border-transparent transition resize-none"
            placeholder="Дополнительные пожелания..."
          ></textarea>
        </div>
        <div class="flex items-start">
          <input
            v-model="form.agreement"
            type="checkbox"
            required
            class="mt-1 mr-3 h-5 w-5 text-[#FC0320] bg-gray-900 border-gray-700 rounded focus:ring-[#FC0320] cursor-pointer"
          />
          <label class="text-sm text-gray-400 leading-tight">
            Я согласен на обработку персональных данных
          </label>
        </div>
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-[#FC0320] hover:bg-red-600 text-white font-medium py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Отправка...' : 'Записаться' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)

const form = reactive({
  name: '',
  phone: '',
  car: '',
  service: '',
  date: '',
  comment: '',
  agreement: false
})

const submitForm = async () => {
  if (!form.agreement) {
    alert('Нужно согласие на обработку данных')
    return
  }

  if (!form.name || !form.phone || !form.car || !form.service) {
    alert('Заполните обязательные поля')
    return
  }

  loading.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Отправленная форма:', JSON.stringify(form, null, 2))
    Object.assign(form, {
      name: '',
      phone: '',
      car: '',
      service: '',
      date: '',
      comment: '',
      agreement: false
    })
    router.push({
      path: '/',
      query: { success: 'true' }
    })
    
  } catch (error) {
    console.error('Ошибка:', error)
    alert('Ошибка при отправке. Попробуйте снова.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  opacity: 0.6;
  cursor: pointer;
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5em;
  padding-right: 3rem;
}
</style>