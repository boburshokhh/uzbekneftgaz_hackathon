<script>
export default {
  name: 'App',
  data() {
    return {
      sidebarOpen: false,
      menuItems: [
        { name: 'Панель управления', path: '/', icon: 'dashboard' },
        { name: 'Сценарии', path: '/scenarios', icon: 'auto_fix_high' },
        { name: 'Аналитика', path: '/analytics', icon: 'bar_chart' },
        { name: 'Симулятор', path: '/simulator', icon: 'precision_manufacturing' },
      ],
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background">
    <!-- Шапка -->
    <header class="bg-surface text-text-primary shadow-sm z-10 h-16">
      <div class="container-fluid mx-auto h-full px-4">
        <div class="flex justify-between items-center h-full">
          <!-- Логотип и кнопка меню -->
          <div class="flex items-center gap-4">
            <button
              @click="toggleSidebar"
              class="text-text-secondary hover:text-primary p-2 rounded-full hover:bg-custom-blue-light transition-colors"
            >
              <span class="material-icons-outlined">menu</span>
            </button>
            <h1 class="text-xl font-semibold hidden md:block">
              Система управления энергопотреблением
            </h1>
            <h1 class="text-xl font-semibold md:hidden">Энергоуправление</h1>
          </div>

          <!-- Верхнее меню и профиль -->
          <div class="flex items-center gap-2">
            <!-- Поиск -->
            <div class="hidden md:flex relative rounded-full bg-background">
              <input
                type="text"
                placeholder="Поиск..."
                class="py-2 pl-10 pr-4 rounded-full outline-none bg-background border-0 focus:ring-2 focus:ring-primary text-sm w-48"
              />
              <span
                class="material-icons-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary"
                >search</span
              >
            </div>

            <!-- Иконки уведомлений -->
            <button
              class="p-2 rounded-full hover:bg-custom-blue-light text-text-secondary hover:text-primary transition-colors relative"
            >
              <span class="material-icons-outlined">notifications</span>
              <span
                class="absolute top-0 right-0 h-4 w-4 bg-danger rounded-full text-white text-xs flex items-center justify-center"
                >3</span
              >
            </button>

            <!-- Профиль -->
            <div
              class="flex items-center gap-2 ml-2 cursor-pointer rounded-full p-1 hover:bg-custom-blue-light"
            >
              <div
                class="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold"
              >
                A
              </div>
              <span class="hidden md:block text-sm font-medium">Администратор</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="flex flex-1">
      <!-- Боковая панель -->
      <aside
        class="aside"
        :class="[
          'fixed md:relative left-0  bottom-0 w-64 bg-surface shadow-lg z-20 transition-transform',
          'transform md:transform-none',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        ]"
      >
        <div class="py-4">
          <div class="px-6 mb-6">
            <h2 class="text-lg font-semibold text-text-primary">Навигация</h2>
          </div>

          <nav class="mt-2">
            <ul>
              <li v-for="(item, index) in menuItems" :key="index" class="mb-1 px-3">
                <router-link
                  :to="item.path"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:text-primary hover:bg-custom-blue-light transition-colors"
                  :class="{
                    'bg-custom-blue-light text-primary font-medium': $route.path === item.path,
                  }"
                >
                  <span class="material-icons-outlined">{{ item.icon }}</span>
                  <span>{{ item.name }}</span>
                </router-link>
              </li>
            </ul>
          </nav>

          <!-- Статус системы -->
          <div class="mt-8 px-6">
            <div class="p-3 bg-custom-blue-light rounded-lg">
              <h3 class="text-sm font-medium mb-2 text-primary">Статус системы</h3>
              <div class="flex items-center gap-2 mb-1">
                <span class="w-2 h-2 rounded-full bg-success"></span>
                <span class="text-xs">Все системы работают</span>
              </div>
              <div class="text-xs text-text-secondary">Последнее обновление: 5 мин назад</div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Оверлей для мобильной версии -->
      <div
        v-if="sidebarOpen"
        @click="toggleSidebar"
        class="fixed inset-0 bg-dark bg-opacity-50 z-10 md:hidden"
      ></div>

      <!-- Основное содержимое -->
      <main class="flex-grow p-4 md:p-6 mt-0 min-w-0">
        <div class="bg-surface rounded-lg shadow-sm p-5 min-h-[calc(100vh-6rem)]">
          <router-view />
        </div>
      </main>
    </div>

    <!-- Футер -->
    <footer class="bg-surface text-text-secondary py-4 border-t border-border-color text-sm">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <p>© 2023 Система управления энергопотреблением</p>
        <p class="text-xs">Версия 1.0.0</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Глобальные стили */
:root {
  /* Bootstrap base variables */
  --bs-blue: #0d6efd;
  --bs-dark-blue: #0a58ca;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #02c27a;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #fc185a;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-success-rgb: 2, 194, 122;
  --bs-danger-rgb: 252, 24, 90;
  --bs-orange-rgb: 253, 126, 20;

  /* Dark theme variables based on blue-theme.css */
  --bs-heading-color: #e6ecf0;
  --bs-body-color: #d3d7dc;
  --bs-body-bg: #0f1535;
  --bs-body-bg-2: #181f4a;
  --bs-transparent-bg: rgba(255, 255, 255, 0.1);
  --bs-border-color-translucent: rgba(226, 232, 240, 0.15);
  --bs-border-color: rgba(255, 255, 255, 0.15);
  --bs-sticky-header-bg: rgba(255, 255, 255, 0.45);
  --bs-disabled-bg: #4b5481;
  --bs-tertiary-bg: #181f4a;
  --bs-card-bg: #070c29;

  /* Custom app variables */
  --background: var(--bs-body-bg);
  --surface: var(--bs-body-bg-2);
  --surface-dark: var(--bs-card-bg);
  --text-primary: var(--bs-heading-color);
  --text-secondary: var(--bs-body-color);
  --primary: #3b82f6;
  --custom-blue-light: rgba(59, 130, 246, 0.15);
  --secondary: #64748b;
  --success: #10b981;
  --danger: #ef4444;
  --warning: #f59e0b;
  --info: #38bdf8;
}

body {
  overflow-x: hidden;
  background-color: var(--background);
  color: var(--bs-body-color);
  font-weight: 400;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bs-body-bg-2);
  background-image:
    radial-gradient(at 40% 20%, rgba(105, 111, 251, 0.33) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(105, 111, 251, 0.3) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(105, 111, 251, 0.3) 0px, transparent 50%),
    radial-gradient(at 80% 100%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
    radial-gradient(at 0% 0%, rgba(105, 111, 251, 0.3) 0px, transparent 50%);
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  z-index: -1;
}

@keyframes backgroundShift {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

.container-fluid {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}

.aside {
  top: 25px;
  background-color: var(--bs-card-bg);
  border-right: 1px solid var(--bs-border-color);
}

.card {
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-title-color: var(--bs-heading-color);
  --bs-card-border-width: 1px;
  --bs-card-border-color: var(--bs-border-color);
  --bs-card-border-radius: 0.75rem;
  --bs-card-inner-border-radius: calc(0.75rem - 1px);
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(7, 12, 41, 0.5);
  --bs-card-height: auto;
  --bs-card-bg: var(--bs-card-bg);
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  color: var(--bs-body-color);
  word-wrap: break-word;
  background-image: linear-gradient(
    127.09deg,
    rgba(6, 11, 40, 0.94) 19.41%,
    rgba(10, 14, 35, 0.49) 76.65%
  );
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-card-border-radius);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
}

/* Анимации */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.router-link-active {
  color: var(--primary);
  font-weight: 500;
  background-color: var(--bs-card-bg);
}

/* Кнопки и интерактивные элементы */
button.primary {
  background-color: var(--primary);
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  transition:
    background-color 0.2s,
    transform 0.1s;
}

button.primary:hover {
  background-color: var(--bs-dark-blue);
  transform: translateY(-1px);
}

/* Заголовки */
h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--bs-heading-color);
  font-weight: 600;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bs-card-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--bs-disabled-bg);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}

/* Дополнительные стили для карточек */
.bg-custom-blue-light {
  background-color: var(--bs-tertiary-bg);
}

/* Дополнительные стили для фона */
.bg-background {
  background-color: var(--bs-body-bg);
}

.bg-surface {
  background-color: var(--bs-body-bg-2);
}

.bg-surface-dark {
  background-color: var(--bs-card-bg);
}

/* Формы и элементы управления */
.form-control,
.form-select {
  background-color: var(--bs-body-bg);
  border-color: var(--bs-border-color);
  color: var(--bs-body-color);
}

.form-control:focus,
.form-select:focus {
  background-color: var(--bs-body-bg);
  border-color: var(--primary);
  color: var(--bs-body-color);
}

input::placeholder,
textarea::placeholder {
  color: var(--bs-body-color) !important;
  opacity: 0.5;
}

/* Таблицы */
.table {
  --bs-table-color: var(--bs-body-color);
  --bs-table-bg: var(--bs-body-bg);
  --bs-table-border-color: var(--bs-border-color);
  --bs-table-striped-color: var(--bs-body-color);
  --bs-table-striped-bg: rgba(255, 255, 255, 0.05);
  --bs-table-active-color: var(--bs-body-color);
  --bs-table-active-bg: rgba(255, 255, 255, 0.1);
  --bs-table-hover-color: var(--bs-body-color);
  --bs-table-hover-bg: rgba(255, 255, 255, 0.075);
  border-color: var(--bs-table-border-color);
}
</style>
