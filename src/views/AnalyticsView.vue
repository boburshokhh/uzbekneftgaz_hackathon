<template>
  <div>
    <!-- Хедер страницы и общая информация -->
    <div class="mb-6 flex flex-col md:flex-row gap-4 md:items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-text-primary">Аналитика энергопотребления</h1>
        <p class="text-text-secondary mt-1">Отслеживание и анализ потребления ресурсов</p>
      </div>

      <div class="flex flex-wrap gap-3">
        <div class="flex items-center gap-2 text-sm text-text-secondary">
          <span class="material-icons-outlined text-sm">update</span>
          Обновлено: {{ lastUpdateTime }}
        </div>
        <button
          @click="toggleAutoUpdate"
          class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border-color transition-colors"
          :class="
            isAutoUpdate
              ? 'bg-primary text-white'
              : 'bg-surface-dark text-text-primary hover:border-primary'
          "
        >
          <span class="material-icons-outlined text-sm">{{
            isAutoUpdate ? 'pause' : 'play_arrow'
          }}</span>
          {{ isAutoUpdate ? 'Пауза' : 'Возобновить' }}
        </button>
        <button
          @click="forceUpdate"
          class="flex items-center gap-2 px-3 py-2 text-sm bg-surface-dark rounded-lg border border-border-color hover:border-primary transition-colors"
          :disabled="isUpdating"
        >
          <span class="material-icons-outlined text-sm" :class="{ 'animate-spin': isUpdating }"
            >refresh</span
          >
          Обновить
        </button>
        <button
          class="flex items-center gap-2 px-3 py-2 text-sm bg-surface-dark rounded-lg border border-border-color hover:border-primary transition-colors"
        >
          <span class="material-icons-outlined text-sm">print</span>
          Печать
        </button>

        <button
          class="flex items-center gap-2 px-3 py-2 text-sm bg-surface-dark rounded-lg border border-border-color hover:border-primary transition-colors"
        >
          <span class="material-icons-outlined text-sm">file_download</span>
          Скачать PDF
        </button>

        <button
          class="flex items-center gap-2 px-3 py-2 text-sm bg-surface-dark rounded-lg border border-border-color hover:border-primary transition-colors"
        >
          <span class="material-icons-outlined text-sm">share</span>
          Поделиться
        </button>
      </div>
    </div>

    <!-- Фильтры -->
    <div class="card p-5 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold flex items-center gap-2">
          <span class="material-icons-outlined">filter_alt</span>
          Фильтры
        </h2>
        <button @click="resetFilters" class="text-primary hover:underline text-sm">
          Сбросить все
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <label for="dateRange" class="block mb-2 text-sm font-medium text-text-primary"
            >Период</label
          >
          <div class="relative">
            <select
              id="dateRange"
              v-model="filters.dateRange"
              class="block w-full p-2.5 bg-surface-dark border border-border-color rounded-lg text-sm appearance-none focus:ring-2 focus:ring-primary outline-none"
              @change="handleDateRangeChange"
            >
              <option value="day">День</option>
              <option value="week">Неделя</option>
              <option value="month">Месяц</option>
              <option value="year">Год</option>
            </select>
            <span
              class="material-icons-outlined absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-text-secondary"
            >
              arrow_drop_down
            </span>
          </div>
        </div>

        <div>
          <label for="floor" class="block mb-2 text-sm font-medium text-text-primary">Этаж</label>
          <div class="relative">
            <select
              id="floor"
              v-model="filters.floor"
              class="block w-full p-2.5 bg-surface-dark border border-border-color rounded-lg text-sm appearance-none focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="all">Все этажи</option>
              <option value="1">Первый этаж</option>
              <option value="2">Второй этаж</option>
              <option value="3">Третий этаж</option>
            </select>
            <span
              class="material-icons-outlined absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-text-secondary"
            >
              arrow_drop_down
            </span>
          </div>
        </div>

        <div>
          <label for="deviceType" class="block mb-2 text-sm font-medium text-text-primary"
            >Тип устройства</label
          >
          <div class="relative">
            <select
              id="deviceType"
              v-model="filters.deviceType"
              class="block w-full p-2.5 bg-surface-dark border border-border-color rounded-lg text-sm appearance-none focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="all">Все устройства</option>
              <option value="conditioner">Кондиционеры</option>
              <option value="light">Освещение</option>
              <option value="tv">Телевизоры</option>
              <option value="other">Другие</option>
            </select>
            <span
              class="material-icons-outlined absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-text-secondary"
            >
              arrow_drop_down
            </span>
          </div>
        </div>

        <div class="flex items-end">
          <button
            @click="applyFilters"
            class="w-full p-2.5 bg-primary text-white rounded-lg hover:bg-opacity-80 transition-colors flex items-center justify-center gap-2"
          >
            <span class="material-icons-outlined text-sm">search</span>
            Применить
          </button>
        </div>
      </div>
    </div>

    <!-- Общая статистика -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
      <div class="card p-5 border-l-4 border-primary">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-text-secondary font-medium">Общее потребление</p>
            <div class="flex items-baseline mt-1">
              <h3 class="text-2xl font-semibold text-text-primary">
                <transition name="fade" mode="out-in">
                  <span :key="totalConsumption">{{ totalConsumption }}</span>
                </transition>
              </h3>
              <span class="ml-1 text-text-secondary">кВт⋅ч</span>
            </div>
            <p class="text-xs text-text-secondary mt-1">За выбранный период</p>
          </div>
          <div class="p-2 rounded-lg bg-primary bg-opacity-20 text-primary">
            <span class="material-icons-outlined">bolt</span>
          </div>
        </div>
        <div class="mt-4 h-10">
          <div class="h-1 w-full bg-surface-dark rounded-full overflow-hidden">
            <div
              class="h-full bg-primary transition-all duration-700"
              :style="{ width: parseFloat(totalConsumption) / 2 + '%' }"
            ></div>
          </div>
          <div class="flex justify-between mt-1 text-xs text-text-secondary">
            <span>0 кВт⋅ч</span>
            <span>200 кВт⋅ч</span>
          </div>
        </div>
      </div>

      <div class="card p-5 border-l-4 border-success">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-text-secondary font-medium">Экономия</p>
            <div class="flex items-baseline mt-1">
              <h3 class="text-2xl font-semibold text-success">
                <transition name="fade" mode="out-in">
                  <span :key="savings">{{ savings }}</span>
                </transition>
              </h3>
              <span class="ml-1 text-text-secondary">кВт⋅ч</span>
            </div>
            <p class="text-xs text-text-secondary mt-1">По сравнению с базовым</p>
          </div>
          <div class="p-2 rounded-lg bg-success bg-opacity-20 text-success">
            <span class="material-icons-outlined">eco</span>
          </div>
        </div>
        <div class="mt-4 flex items-center gap-2">
          <span class="material-icons-outlined text-success text-sm">trending_up</span>
          <span class="text-success text-sm">
            <transition name="fade" mode="out-in">
              <span :key="savingsPercentage">+{{ savingsPercentage }}% экономии</span>
            </transition>
          </span>
        </div>
      </div>

      <div class="card p-5 border-l-4 border-info">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-text-secondary font-medium">Средний расход в день</p>
            <div class="flex items-baseline mt-1">
              <h3 class="text-2xl font-semibold text-text-primary">
                <transition name="fade" mode="out-in">
                  <span :key="avgDailyConsumption">{{ avgDailyConsumption }}</span>
                </transition>
              </h3>
              <span class="ml-1 text-text-secondary">кВт⋅ч</span>
            </div>
            <p class="text-xs text-text-secondary mt-1">За последние 30 дней</p>
          </div>
          <div class="p-2 rounded-lg bg-info bg-opacity-20 text-info">
            <span class="material-icons-outlined">insights</span>
          </div>
        </div>
        <div class="mt-4 h-10">
          <div class="flex gap-1">
            <div
              v-for="(value, index) in dailyUsageBarValues"
              :key="index"
              class="h-8 w-2 bg-info opacity-70 rounded-sm transition-all duration-700"
              :style="{ height: value + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <div class="card p-5 border-l-4 border-warning">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-text-secondary font-medium">Пиковое потребление</p>
            <div class="flex items-baseline mt-1">
              <h3 class="text-2xl font-semibold text-warning">
                <transition name="fade" mode="out-in">
                  <span :key="peakConsumption">{{ peakConsumption }}</span>
                </transition>
              </h3>
              <span class="ml-1 text-text-secondary">кВт</span>
            </div>
            <p class="text-xs text-text-secondary mt-1">Максимальная нагрузка</p>
          </div>
          <div class="p-2 rounded-lg bg-warning bg-opacity-20 text-warning">
            <span class="material-icons-outlined">electric_bolt</span>
          </div>
        </div>
        <div class="mt-4 flex items-center gap-2">
          <span class="text-warning text-sm">
            <transition name="fade" mode="out-in">
              <span :key="peakTime">Пик: {{ peakTime }}</span>
            </transition>
          </span>
        </div>
      </div>
    </div>

    <!-- График потребления по времени -->
    <div class="card p-5 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold flex items-center gap-2">
          <span class="material-icons-outlined">timeline</span>
          Динамика потребления
        </h2>
        <div class="flex gap-2">
          <button
            @click="setTimeRange('day')"
            class="px-2 py-1 text-xs rounded-md"
            :class="
              timeRange === 'day' ? 'bg-primary text-white' : 'bg-surface-dark text-text-secondary'
            "
          >
            День
          </button>
          <button
            @click="setTimeRange('week')"
            class="px-2 py-1 text-xs rounded-md"
            :class="
              timeRange === 'week' ? 'bg-primary text-white' : 'bg-surface-dark text-text-secondary'
            "
          >
            Неделя
          </button>
          <button
            @click="setTimeRange('month')"
            class="px-2 py-1 text-xs rounded-md"
            :class="
              timeRange === 'month'
                ? 'bg-primary text-white'
                : 'bg-surface-dark text-text-secondary'
            "
          >
            Месяц
          </button>
        </div>
      </div>
      <div style="height: 300px" class="mt-4">
        <canvas id="consumptionChart"></canvas>
      </div>
    </div>

    <!-- Графики распределения по устройствам и сравнения -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="card p-5">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold flex items-center gap-2">
            <span class="material-icons-outlined">pie_chart</span>
            Распределение по устройствам
          </h2>
          <button class="text-primary hover:underline text-sm flex items-center gap-1">
            <span class="material-icons-outlined text-sm">info</span>
            Детали
          </button>
        </div>
        <div style="height: 300px">
          <canvas id="deviceChart"></canvas>
        </div>
      </div>

      <div class="card p-5">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold flex items-center gap-2">
            <span class="material-icons-outlined">compare</span>
            Сравнение с базовым потреблением
          </h2>
          <div class="flex gap-2 items-center">
            <div class="flex items-center gap-1">
              <span class="w-3 h-3 inline-block bg-primary rounded-sm"></span>
              <span class="text-xs text-text-secondary">Фактическое</span>
            </div>
            <div class="flex items-center gap-1">
              <span class="w-3 h-3 inline-block bg-gray-500 bg-opacity-20 rounded-sm"></span>
              <span class="text-xs text-text-secondary">Базовое</span>
            </div>
            <button class="text-primary hover:underline text-sm flex items-center gap-1">
              <span class="material-icons-outlined text-sm">info</span>
              Детали
            </button>
          </div>
        </div>
        <div style="height: 300px">
          <canvas id="comparisonChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Диаграмма энергопотребления по комнатам -->
    <div class="card p-5 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold flex items-center gap-2">
          <span class="material-icons-outlined">meeting_room</span>
          Энергопотребление по комнатам
        </h2>
        <button class="text-primary hover:underline text-sm flex items-center gap-1">
          <span class="material-icons-outlined text-sm">info</span>
          Детали
        </button>
      </div>

      <!-- Описание и статистика -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
        <div class="col-span-1 lg:col-span-3">
          <div style="height: 300px">
            <canvas id="roomChart"></canvas>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div class="card p-3 border-l-4 border-primary">
            <h3 class="text-sm font-medium">Приемная</h3>
            <div class="mt-2 flex items-center justify-between">
              <span class="text-lg font-bold">47.6 кВт⋅ч</span>
              <span class="material-icons-outlined text-primary">ac_unit</span>
            </div>
            <div class="flex items-center mt-1 text-xs text-success">
              <span class="material-icons-outlined text-xs mr-1">trending_up</span>
              <span>15% экономии</span>
            </div>
          </div>

          <div class="card p-3 border-l-4 border-success">
            <h3 class="text-sm font-medium">Кабинет директора</h3>
            <div class="mt-2 flex items-center justify-between">
              <span class="text-lg font-bold">44.8 кВт⋅ч</span>
              <span class="material-icons-outlined text-success">ac_unit</span>
            </div>
            <div class="flex items-center mt-1 text-xs text-success">
              <span class="material-icons-outlined text-xs mr-1">trending_up</span>
              <span>12% экономии</span>
            </div>
          </div>

          <div class="card p-3 border-l-4 border-info">
            <h3 class="text-sm font-medium">Зал совещаний</h3>
            <div class="mt-2 flex items-center justify-between">
              <span class="text-lg font-bold">61.6 кВт⋅ч</span>
              <span class="material-icons-outlined text-info">ac_unit</span>
            </div>
            <div class="flex items-center mt-1 text-xs text-success">
              <span class="material-icons-outlined text-xs mr-1">trending_up</span>
              <span>8% экономии</span>
            </div>
          </div>

          <div class="card p-3 border-l-4 border-warning">
            <h3 class="text-sm font-medium">Общий офис</h3>
            <div class="mt-2 flex items-center justify-between">
              <span class="text-lg font-bold">79.8 кВт⋅ч</span>
              <span class="material-icons-outlined text-warning">ac_unit</span>
            </div>
            <div class="flex items-center mt-1 text-xs text-danger">
              <span class="material-icons-outlined text-xs mr-1">trending_down</span>
              <span>5% перерасход</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Рекомендации по оптимизации -->
      <div class="bg-surface-dark p-3 rounded-lg border border-border-color mt-4">
        <h3 class="text-sm font-medium flex items-center gap-2 mb-2">
          <span class="material-icons-outlined text-warning">tips_and_updates</span>
          Рекомендации по оптимизации
        </h3>
        <ul class="list-disc list-inside text-sm space-y-1 pl-1">
          <li>
            Установите температуру кондиционера в Общем офисе на 24°C для снижения энергопотребления
          </li>
          <li>
            Настройте автоматическое выключение света в Зале совещаний после окончания рабочего дня
          </li>
          <li>Рассмотрите возможность установки датчиков движения для освещения в коридорах</li>
        </ul>
      </div>
    </div>

    <!-- Таблица потребления по устройствам -->
    <div class="card p-5">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold flex items-center gap-2">
          <span class="material-icons-outlined">view_list</span>
          Детальная статистика по устройствам
        </h2>
        <div class="flex items-center gap-2">
          <div class="relative">
            <input
              type="text"
              placeholder="Поиск устройства"
              class="pl-9 pr-3 py-1.5 bg-surface-dark border border-border-color rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
            <span
              class="material-icons-outlined absolute left-2 top-1/2 transform -translate-y-1/2 text-text-secondary text-sm"
            >
              search
            </span>
          </div>
          <button class="p-1.5 bg-surface-dark hover:bg-bs-tertiary-bg rounded-lg">
            <span class="material-icons-outlined text-text-secondary">filter_list</span>
          </button>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-bs-border-color">
          <thead>
            <tr>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider bg-surface-dark rounded-tl-lg"
              >
                Устройство
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider bg-surface-dark"
              >
                Тип
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider bg-surface-dark"
              >
                Локация
              </th>
              <th
                class="px-4 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider bg-surface-dark"
              >
                Потребление (кВт⋅ч)
              </th>
              <th
                class="px-4 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider bg-surface-dark"
              >
                Часы работы
              </th>
              <th
                class="px-4 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider bg-surface-dark rounded-tr-lg"
              >
                Экономия (%)
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-bs-border-color">
            <tr
              v-for="device in deviceStats"
              :key="device.id"
              class="hover:bg-bs-tertiary-bg transition-colors"
            >
              <td class="px-4 py-3 whitespace-nowrap">
                <div class="flex items-center gap-2">
                  <span
                    class="material-icons-outlined text-primary"
                    v-if="device.type === 'conditioner'"
                    >ac_unit</span
                  >
                  <span
                    class="material-icons-outlined text-warning"
                    v-else-if="device.type === 'light'"
                    >lightbulb</span
                  >
                  <span class="material-icons-outlined text-danger" v-else-if="device.type === 'tv'"
                    >tv</span
                  >
                  <span class="material-icons-outlined text-info" v-else>devices</span>
                  {{ device.name }}
                </div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-text-secondary">
                {{ getDeviceTypeName(device.type) }}
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-text-secondary">
                {{ getLocationName(device.floor) }}
              </td>
              <td class="px-4 py-3 text-right whitespace-nowrap font-medium">
                {{ device.consumption }}
              </td>
              <td class="px-4 py-3 text-right whitespace-nowrap text-text-secondary">
                {{ device.workHours }}
              </td>
              <td class="px-4 py-3 text-right whitespace-nowrap">
                <span
                  class="px-2 py-1 rounded-full text-xs font-medium"
                  :class="
                    device.savings > 0
                      ? 'bg-success bg-opacity-10 text-success'
                      : 'bg-danger bg-opacity-10 text-danger'
                  "
                >
                  {{ device.savings > 0 ? '+' : '' }}{{ device.savings }}%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-between items-center mt-4">
        <p class="text-sm text-text-secondary">Показано 5 из 12 устройств</p>
        <div class="flex gap-2">
          <button
            class="p-1 rounded-lg bg-surface-dark text-text-secondary hover:bg-bs-tertiary-bg"
          >
            <span class="material-icons-outlined">chevron_left</span>
          </button>
          <button class="px-3 py-1 rounded-lg bg-primary text-white">1</button>
          <button
            class="px-3 py-1 rounded-lg bg-surface-dark text-text-secondary hover:bg-bs-tertiary-bg"
          >
            2
          </button>
          <button
            class="px-3 py-1 rounded-lg bg-surface-dark text-text-secondary hover:bg-bs-tertiary-bg"
          >
            3
          </button>
          <button
            class="p-1 rounded-lg bg-surface-dark text-text-secondary hover:bg-bs-tertiary-bg"
          >
            <span class="material-icons-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  name: 'AnalyticsView',
  data() {
    return {
      filters: {
        dateRange: 'week',
        floor: 'all',
        deviceType: 'all',
      },
      totalConsumption: '124.5',
      savings: '31.2',
      avgDailyConsumption: '16.8',
      peakConsumption: '4.2',
      savingsPercentage: '24.8',
      peakTime: '14:30 - 16:00',
      timeRange: 'day',
      updateInterval: null,
      dailyUsageBarValues: [30, 40, 60, 50, 70, 80, 60],
      lastUpdateTime: this.formatDateTime(new Date()),
      isAutoUpdate: true,
      isUpdating: false,

      // Данные для графиков в зависимости от временного периода
      chartData: {
        day: {
          labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
          consumption: [8.5, 7.2, 9.3, 18.8, 20.5, 15.2, 14.0, 10.5],
          baseline: [12.0, 10.0, 12.5, 20.0, 24.5, 21.0, 18.0, 14.0],
        },
        week: {
          labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
          consumption: [18.5, 17.2, 21.3, 19.8, 20.5, 15.2, 12.0],
          baseline: [22.0, 22.0, 22.5, 23.0, 24.5, 21.0, 20.0],
        },
        month: {
          labels: ['1 нед', '2 нед', '3 нед', '4 нед'],
          consumption: [75.5, 81.2, 70.3, 68.8],
          baseline: [90.0, 92.0, 88.5, 85.0],
        },
      },

      // Обновленная статистика устройств с акцентом на 4 кондиционера и светильники
      deviceStats: [
        {
          id: 1,
          name: 'Кондиционер Приемная',
          type: 'conditioner',
          floor: 1,
          room: 'Приемная',
          consumption: 39.2,
          workHours: 84,
          savings: 15,
        },
        {
          id: 2,
          name: 'Кондиционер Кабинет директора',
          type: 'conditioner',
          floor: 1,
          room: 'Кабинет директора',
          consumption: 36.4,
          workHours: 70,
          savings: 12,
        },
        {
          id: 3,
          name: 'Кондиционер Зал совещаний',
          type: 'conditioner',
          floor: 1,
          room: 'Зал совещаний',
          consumption: 44.8,
          workHours: 56,
          savings: 8,
        },
        {
          id: 4,
          name: 'Кондиционер Общий офис',
          type: 'conditioner',
          floor: 1,
          room: 'Общий офис',
          consumption: 57.4,
          workHours: 82,
          savings: -5,
        },
        {
          id: 5,
          name: 'Светильник Приемная',
          type: 'light',
          floor: 1,
          room: 'Приемная',
          consumption: 8.4,
          workHours: 84,
          savings: 28,
        },
        {
          id: 6,
          name: 'Светильник Кабинет директора',
          type: 'light',
          floor: 1,
          room: 'Кабинет директора',
          consumption: 8.4,
          workHours: 70,
          savings: 25,
        },
        {
          id: 8,
          name: 'Светильник Зал совещаний',
          type: 'light',
          floor: 1,
          room: 'Зал совещаний',
          consumption: 16.8,
          workHours: 56,
          savings: 20,
        },
        {
          id: 9,
          name: 'Светильник Общий офис',
          type: 'light',
          floor: 1,
          room: 'Общий офис',
          consumption: 22.4,
          workHours: 84,
          savings: 18,
        },
      ],

      // Данные потребления по комнатам для графика
      roomConsumption: {
        labels: ['Приемная', 'Кабинет директора', 'Зал совещаний', 'Общий офис', 'Прочие'],
        data: [47.6, 44.8, 61.6, 79.8, 22.2],
      },

      charts: {
        consumption: null,
        device: null,
        comparison: null,
        room: null,
      },
    }
  },
  computed: {
    // Расчет общей суммы потребления по всем устройствам
    totalDeviceConsumption() {
      return this.deviceStats.reduce((sum, device) => sum + device.consumption, 0).toFixed(1)
    },

    // Расчет общей экономии по всем устройствам с положительной экономией
    totalDeviceSavings() {
      const savings = this.deviceStats.reduce((sum, device) => {
        return device.savings > 0 ? sum + (device.consumption * device.savings) / 100 : sum
      }, 0)
      return savings.toFixed(1)
    },

    // Процент экономии относительно общего потребления
    totalSavingsPercentage() {
      const total = parseFloat(this.totalDeviceConsumption)
      const savings = parseFloat(this.totalDeviceSavings)
      return ((savings / total) * 100).toFixed(1)
    },
  },
  mounted() {
    this.initCharts()
    // Запускаем интервал обновления данных
    this.startDataUpdates()
  },
  beforeUnmount() {
    // Очищаем интервал при удалении компонента
    this.stopDataUpdates()
  },
  methods: {
    forceUpdate() {
      // Отключаем автообновление на время ручного обновления
      const wasAutoUpdate = this.isAutoUpdate
      this.isAutoUpdate = false
      this.isUpdating = true

      // Симулируем задержку для визуального эффекта
      setTimeout(() => {
        this.generateRandomData()
        this.lastUpdateTime = this.formatDateTime(new Date())
        this.isUpdating = false

        // Восстанавливаем предыдущий режим автообновления
        this.isAutoUpdate = wasAutoUpdate
      }, 500)
    },

    toggleAutoUpdate() {
      this.isAutoUpdate = !this.isAutoUpdate
      if (this.isAutoUpdate) {
        // Если включаем автообновление, сразу обновляем данные
        this.generateRandomData()
        this.lastUpdateTime = this.formatDateTime(new Date())
      }
    },

    startDataUpdates() {
      this.stopDataUpdates()
      this.updateInterval = setInterval(() => {
        if (this.isAutoUpdate) {
          this.generateRandomData()
          this.lastUpdateTime = this.formatDateTime(new Date())
        }
      }, 5000)
    },

    stopDataUpdates() {
      if (this.updateInterval) {
        clearInterval(this.updateInterval)
        this.updateInterval = null
      }
    },

    formatDateTime(date) {
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')
      const seconds = date.getSeconds().toString().padStart(2, '0')
      return `${hours}:${minutes}:${seconds}`
    },

    resetFilters() {
      this.filters = {
        dateRange: 'week',
        floor: 'all',
        deviceType: 'all',
      }
      this.setTimeRange('week')
      this.generateRandomData()
    },

    generateRandomData() {
      // Обновляем основные показатели
      this.totalConsumption = this.generateRandomValue(
        parseFloat(this.totalConsumption),
        3,
        7,
      ).toFixed(1)
      this.savings = this.generateRandomValue(parseFloat(this.savings), 3, 7).toFixed(1)
      this.avgDailyConsumption = this.generateRandomValue(
        parseFloat(this.avgDailyConsumption),
        3,
        7,
      ).toFixed(1)
      this.peakConsumption = this.generateRandomValue(
        parseFloat(this.peakConsumption),
        3,
        7,
      ).toFixed(1)

      // Обновляем проценты экономии (15-30%)
      this.savingsPercentage = this.generateRandomValue(
        parseFloat(this.savingsPercentage),
        3,
        5,
      ).toFixed(1)

      // Обновляем время пика с небольшими вариациями
      const peakHours = ['14:30 - 16:00', '15:00 - 16:30', '14:00 - 15:30', '15:30 - 17:00']
      this.peakTime = peakHours[Math.floor(Math.random() * peakHours.length)]

      // Обновляем индикаторы среднего расхода
      this.dailyUsageBarValues = this.dailyUsageBarValues.map((value) =>
        Math.min(100, Math.max(10, value + (Math.random() * 20 - 10))),
      )

      // Обновляем данные графиков
      this.updateChartData()

      // Обновляем данные по комнатам
      this.updateRoomData()

      // Обновляем графики
      this.updateCharts()

      // Добавляем небольшую задержку для эффекта обновления данных
      this.$nextTick(() => {
        // Здесь можно добавить анимации или другие эффекты
        console.log('Данные обновлены')
      })
    },

    updateRoomData() {
      // Обновляем данные о потреблении по комнатам
      this.roomConsumption.data = this.roomConsumption.data.map((value) =>
        this.generateRandomValue(value, 3, 7),
      )
    },

    generateRandomValue(value, minPercent, maxPercent) {
      const changePercent = minPercent + Math.random() * (maxPercent - minPercent)
      const changeDirection = Math.random() > 0.5 ? 1 : -1
      const changeAmount = value * (changePercent / 100) * changeDirection
      return Math.max(0, value + changeAmount)
    },

    updateChartData() {
      // Обновляем данные графика потребления в зависимости от выбранного периода
      const currentData = this.chartData[this.timeRange]

      // Обновляем данные потребления
      currentData.consumption = currentData.consumption.map((value, index) => {
        // Обеспечиваем баланс между случайностью и логичностью данных
        const baselineValue = currentData.baseline[index]
        const newValue = this.generateRandomValue(value, 3, 7)
        // Гарантируем, что значение не превышает базовое (для логики экономии)
        return Math.min(baselineValue * 0.99, newValue)
      })

      // Обновляем общее потребление как сумму всех дней (приблизительно)
      if (this.timeRange === 'week') {
        const calculatedTotal = currentData.consumption.reduce((sum, val) => sum + val, 0)
        // Небольшая корректировка для согласованности
        const adjustedTotal = calculatedTotal.toFixed(1)
        // Обновляем только если разница существенная
        if (Math.abs(parseFloat(this.totalConsumption) - parseFloat(adjustedTotal)) > 5) {
          this.totalConsumption = adjustedTotal
        }
      }

      // Если выбрана неделя, обновляем данные по устройствам, чтобы сумма соответствовала общему потреблению
      if (this.timeRange === 'week') {
        // Обновляем данные каждого устройства
        const totalWeeklyConsumption = parseFloat(this.totalConsumption)

        // Получаем текущую сумму потребления
        const currentDevicesSum = this.deviceStats.reduce(
          (sum, device) => sum + device.consumption,
          0,
        )

        // Корректируем данные устройств, чтобы сумма была примерно равна общему потреблению
        const ratio = totalWeeklyConsumption / currentDevicesSum

        this.deviceStats = this.deviceStats.map((device) => {
          // Создаем новый объект, чтобы не мутировать исходный
          const updatedDevice = { ...device }
          // Обновляем потребление с небольшой случайностью вокруг соотношения
          const randomFactor = 0.95 + Math.random() * 0.1 // 0.95-1.05
          updatedDevice.consumption = parseFloat(
            (device.consumption * ratio * randomFactor).toFixed(1),
          )

          // Обновляем экономию с небольшой случайностью
          updatedDevice.savings =
            device.savings > 0
              ? Math.min(35, Math.max(3, device.savings + (Math.random() * 6 - 3)))
              : Math.max(-15, Math.min(-2, device.savings + (Math.random() * 6 - 3)))

          return updatedDevice
        })
      }

      // Обновляем данные для день/месяц, если они выбраны
      if (this.timeRange === 'day') {
        // Для дня генерируем данные с большей вариативностью и более выраженной кривой
        this.chartData.day.consumption = Array.from({ length: 8 }, (_, i) => {
          // Создаем кривую суточного потребления с низкими значениями ночью и пиками днем
          let baseValue = 0
          if (i < 2) {
            // 00:00 - 06:00
            baseValue = 5 + Math.random() * 5 // Ночь: низкое потребление
          } else if (i >= 2 && i < 4) {
            // 06:00 - 12:00
            baseValue = 15 + Math.random() * 8 // Утро: рост потребления
          } else if (i >= 4 && i < 6) {
            // 12:00 - 18:00
            baseValue = 20 + Math.random() * 10 // День: пик потребления
          } else {
            // 18:00 - 00:00
            baseValue = 12 + Math.random() * 8 // Вечер: снижение потребления
          }
          return parseFloat(baseValue.toFixed(1))
        })

        // Обновляем базовые значения, чтобы они были немного выше фактических
        this.chartData.day.baseline = this.chartData.day.consumption.map((value) =>
          parseFloat((value * (1 + Math.random() * 0.3)).toFixed(1)),
        )
      } else if (this.timeRange === 'month') {
        // Для месяца генерируем данные с меньшей вариативностью между неделями
        this.chartData.month.consumption = Array.from({ length: 4 }, () => {
          return parseFloat((70 + Math.random() * 20).toFixed(1))
        })

        // Базовые значения для месяца
        this.chartData.month.baseline = this.chartData.month.consumption.map((value) =>
          parseFloat((value * (1 + Math.random() * 0.2)).toFixed(1)),
        )
      }

      // Пересчитываем средний расход в день
      if (this.timeRange === 'day') {
        // Для дня средний расход = общее потребление / 24
        this.avgDailyConsumption = (parseFloat(this.totalConsumption) / 24).toFixed(1)
      } else if (this.timeRange === 'week') {
        // Для недели средний расход = общее потребление / 7
        this.avgDailyConsumption = (parseFloat(this.totalConsumption) / 7).toFixed(1)
      } else if (this.timeRange === 'month') {
        // Для месяца средний расход = общее потребление / 30
        this.avgDailyConsumption = (parseFloat(this.totalConsumption) / 30).toFixed(1)
      }
    },

    setTimeRange(range) {
      // Включаем индикатор обновления
      this.isUpdating = true

      // Меняем режим и генерируем новые данные только если выбран другой режим
      if (this.timeRange !== range) {
        this.timeRange = range

        // Симулируем задержку для наглядности
        setTimeout(() => {
          // Корректируем показатели в зависимости от выбранного периода
          switch (range) {
            case 'day':
              // Разовые значения для дня меньше недельных
              this.totalConsumption = (parseFloat(this.totalConsumption) / 7).toFixed(1)
              this.savings = (parseFloat(this.savings) / 7).toFixed(1)

              // Обновляем время пика для дня
              const dayPeakHours = [
                '12:30 - 14:00',
                '13:00 - 15:30',
                '11:30 - 13:00',
                '14:00 - 16:00',
              ]
              this.peakTime = dayPeakHours[Math.floor(Math.random() * dayPeakHours.length)]

              // Пиковое потребление для дня
              this.peakConsumption = (parseFloat(this.peakConsumption) / 2).toFixed(1)
              break

            case 'week':
              // Неделя - базовый режим
              // Обновляем время пика для недели
              const weekPeakHours = [
                '14:30 - 16:00',
                '15:00 - 16:30',
                '14:00 - 15:30',
                '15:30 - 17:00',
              ]
              this.peakTime = weekPeakHours[Math.floor(Math.random() * weekPeakHours.length)]
              break

            case 'month':
              // Месячные значения больше недельных примерно в 4 раза
              this.totalConsumption = (parseFloat(this.totalConsumption) * 4.2).toFixed(1)
              this.savings = (parseFloat(this.savings) * 4.2).toFixed(1)

              // Обновляем время пика для месяца
              const monthPeakDays = [
                'Вт и Чт, 14:00 - 16:00',
                'Пн и Ср, 15:00 - 17:00',
                'Будние дни, 14:30 - 16:30',
              ]
              this.peakTime = monthPeakDays[Math.floor(Math.random() * monthPeakDays.length)]

              // Пиковое потребление для месяца
              this.peakConsumption = (parseFloat(this.peakConsumption) * 1.5).toFixed(1)
              break
          }

          // Обновляем данные графиков с новыми параметрами
          this.updateChartData()

          // Обновляем графики
          this.updateCharts()

          // Синхронизируем селект фильтра с текущим режимом просмотра
          this.filters.dateRange = range

          // Выключаем индикатор обновления
          this.isUpdating = false
        }, 300)
      } else {
        // Выключаем индикатор обновления если режим не изменился
        this.isUpdating = false
      }
    },

    handleDateRangeChange() {
      // Синхронизируем переключатели времени с фильтром периода
      if (
        this.filters.dateRange === 'day' ||
        this.filters.dateRange === 'week' ||
        this.filters.dateRange === 'month'
      ) {
        this.setTimeRange(this.filters.dateRange)
      }
      this.applyFilters()
    },

    applyFilters() {
      // Фильтруем данные на основе выбранных параметров
      console.log('Применены фильтры:', this.filters)

      // Фильтрация по типу устройства
      let filteredDevices = [...this.deviceStats]

      if (this.filters.deviceType !== 'all') {
        filteredDevices = filteredDevices.filter(
          (device) => device.type === this.filters.deviceType,
        )
      }

      // Фильтрация по этажу
      if (this.filters.floor !== 'all') {
        filteredDevices = filteredDevices.filter(
          (device) => device.floor.toString() === this.filters.floor,
        )
      }

      // Обновляем общее потребление на основе отфильтрованных устройств
      if (filteredDevices.length > 0) {
        const filteredConsumption = filteredDevices.reduce(
          (sum, device) => sum + device.consumption,
          0,
        )
        this.totalConsumption = filteredConsumption.toFixed(1)

        // Рассчитываем экономию для отфильтрованных устройств
        const totalSavings = filteredDevices.reduce((sum, device) => {
          // Если экономия положительная, добавляем к сумме экономии
          if (device.savings > 0) {
            return sum + (device.consumption * device.savings) / 100
          }
          return sum
        }, 0)

        this.savings = totalSavings.toFixed(1)

        // Пересчитываем процент экономии
        this.savingsPercentage = ((totalSavings / filteredConsumption) * 100).toFixed(1)
      }

      // Обновляем статистику и графики
      this.generateRandomData()
      this.lastUpdateTime = this.formatDateTime(new Date())
    },

    getDeviceTypeName(type) {
      const types = {
        conditioner: 'Кондиционер',
        light: 'Освещение',
        tv: 'Телевизор',
        ventilation: 'Вентиляция',
      }
      return types[type] || type
    },

    getLocationName(floor) {
      const floors = {
        1: 'Первый этаж',
        2: 'Второй этаж',
        3: 'Третий этаж',
      }
      return floors[floor] || `Этаж ${floor}`
    },

    initCharts() {
      // Используем цвета из нашей темы
      const primaryColor = '#0d6efd'
      const secondaryColor = '#6c757d'
      const successColor = '#198754'
      const dangerColor = '#dc3545'
      const warningColor = '#ffc107'
      const infoColor = '#0dcaf0'

      // График потребления по времени
      const consumptionCtx = document.getElementById('consumptionChart').getContext('2d')
      this.charts.consumption = new Chart(consumptionCtx, {
        type: 'line',
        data: {
          labels: this.chartData[this.timeRange].labels,
          datasets: [
            {
              label: 'Потребление (кВт⋅ч)',
              data: this.chartData[this.timeRange].consumption,
              fill: {
                target: 'origin',
                above: 'rgba(13, 110, 253, 0.1)',
              },
              borderColor: primaryColor,
              tension: 0.4,
              borderWidth: 2,
              pointBackgroundColor: '#ffffff',
              pointBorderColor: primaryColor,
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 1000, // анимация обновления данных
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.dataset.label}: ${context.raw} кВт⋅ч`
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            y: {
              grid: {
                borderDash: [3, 3],
                drawBorder: false,
              },
              beginAtZero: true,
            },
          },
        },
      })

      // График распределения по устройствам
      const deviceCtx = document.getElementById('deviceChart').getContext('2d')
      this.charts.device = new Chart(deviceCtx, {
        type: 'doughnut',
        data: {
          labels: ['Кондиционеры', 'Освещение', 'Другие'],
          datasets: [
            {
              data: [177.8, 56.0, 22.2],
              backgroundColor: [primaryColor, successColor, secondaryColor],
              borderWidth: 0,
              hoverOffset: 10,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
          animation: {
            duration: 1000, // анимация обновления данных
            animateRotate: true,
            animateScale: true,
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 12,
                padding: 15,
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const value = context.raw
                  const total = context.dataset.data.reduce((acc, val) => acc + val, 0)
                  const percentage = Math.round((value / total) * 100)
                  return `${context.label}: ${value} кВт⋅ч (${percentage}%)`
                },
              },
            },
          },
        },
      })

      // График сравнения с базовым потреблением
      const comparisonCtx = document.getElementById('comparisonChart').getContext('2d')
      this.charts.comparison = new Chart(comparisonCtx, {
        type: 'bar',
        data: {
          labels: this.chartData[this.timeRange].labels,
          datasets: [
            {
              label: 'Фактическое',
              data: this.chartData[this.timeRange].consumption,
              backgroundColor: primaryColor,
              borderRadius: 4,
            },
            {
              label: 'Базовое',
              data: this.chartData[this.timeRange].baseline,
              backgroundColor: 'rgba(108, 117, 125, 0.2)',
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 1000, // анимация обновления данных
          },
          plugins: {
            legend: {
              display: false, // Скрываем легенду, так как используем свою
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const value = context.raw
                  let label = `${context.dataset.label}: ${value} кВт⋅ч`

                  // Для фактического показываем экономию
                  if (context.datasetIndex === 0) {
                    const baseline = context.chart.data.datasets[1].data[context.dataIndex]
                    const diff = baseline - value
                    const percent = ((diff / baseline) * 100).toFixed(1)

                    if (diff > 0) {
                      label += ` (экономия: ${diff.toFixed(1)} кВт⋅ч / ${percent}%)`
                    } else if (diff < 0) {
                      label += ` (перерасход: ${Math.abs(diff).toFixed(1)} кВт⋅ч / ${Math.abs(percent)}%)`
                    }
                  }

                  return label
                },
                afterBody: function (context) {
                  // Добавим дополнительную информацию в подсказку
                  const idx = context[0].dataIndex
                  const actual = context[0].chart.data.datasets[0].data[idx]
                  const baseline = context[0].chart.data.datasets[1].data[idx]
                  const diff = baseline - actual

                  if (diff > 0) {
                    return [`Эффективность: ${((diff / baseline) * 100).toFixed(1)}%`]
                  } else if (diff < 0) {
                    return [`Неэффективность: ${Math.abs((diff / baseline) * 100).toFixed(1)}%`]
                  }
                  return []
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            y: {
              grid: {
                borderDash: [3, 3],
                drawBorder: false,
              },
              beginAtZero: true,
            },
          },
        },
      })

      // Добавляем новый график потребления по комнатам
      const roomCtx = document.getElementById('roomChart').getContext('2d')
      this.charts.room = new Chart(roomCtx, {
        type: 'bar',
        data: {
          labels: this.roomConsumption.labels,
          datasets: [
            {
              label: 'Энергопотребление (кВт⋅ч)',
              data: this.roomConsumption.data,
              backgroundColor: [
                'rgba(13, 110, 253, 0.7)', // Приемная
                'rgba(25, 135, 84, 0.7)', // Кабинет директора
                'rgba(13, 202, 240, 0.7)', // Зал совещаний
                'rgba(245, 158, 11, 0.7)', // Общий офис
                'rgba(108, 117, 125, 0.7)', // Прочие
              ],
              borderColor: [
                'rgba(13, 110, 253, 1)',
                'rgba(25, 135, 84, 1)',
                'rgba(13, 202, 240, 1)',
                'rgba(245, 158, 11, 1)',
                'rgba(108, 117, 125, 1)',
              ],
              borderWidth: 1,
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 1000, // анимация обновления данных
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.dataset.label}: ${context.raw} кВт⋅ч`
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            y: {
              grid: {
                borderDash: [3, 3],
                drawBorder: false,
              },
              beginAtZero: true,
            },
          },
        },
      })
    },

    updateCharts() {
      // Обновляем данные графиков
      if (this.charts.consumption) {
        this.charts.consumption.data.labels = this.chartData[this.timeRange].labels
        this.charts.consumption.data.datasets[0].data = this.chartData[this.timeRange].consumption
        this.charts.consumption.update()
      }

      // Обновляем график распределения по устройствам
      if (this.charts.device) {
        // Рассчитываем потребление по категориям
        const conditioners = this.deviceStats
          .filter((d) => d.type === 'conditioner')
          .reduce((sum, d) => sum + d.consumption, 0)
          .toFixed(1)

        const lights = this.deviceStats
          .filter((d) => d.type === 'light')
          .reduce((sum, d) => sum + d.consumption, 0)
          .toFixed(1)

        // Другие устройства - разница между общим и суммой кондиционеров и освещения
        const totalDevicesConsumption = parseFloat(conditioners) + parseFloat(lights)
        const others = Math.max(
          0,
          (parseFloat(this.totalConsumption) - totalDevicesConsumption).toFixed(1),
        )

        this.charts.device.data.datasets[0].data = [
          parseFloat(conditioners),
          parseFloat(lights),
          parseFloat(others),
        ]
        this.charts.device.update()
      }

      // Обновляем график сравнения
      if (this.charts.comparison) {
        this.charts.comparison.data.datasets[0].data = this.chartData[this.timeRange].consumption
        this.charts.comparison.data.datasets[1].data = this.chartData[this.timeRange].baseline
        this.charts.comparison.data.labels = this.chartData[this.timeRange].labels

        // Добавляем визуализацию экономии/перерасхода
        this.charts.comparison.data.datasets[0].backgroundColor = this.chartData[
          this.timeRange
        ].consumption.map((val, idx) => {
          const baseline = this.chartData[this.timeRange].baseline[idx]
          // Если фактическое потребление меньше базового - зеленый, иначе - красный
          return val < baseline ? primaryColor : dangerColor
        })

        this.charts.comparison.update()
      }

      // Обновляем график по комнатам
      if (this.charts.room) {
        this.charts.room.data.datasets[0].data = this.roomConsumption.data
        this.charts.room.update()
      }

      console.log('Графики обновлены')
    },
  },
}
</script>

<style scoped>
/* Стили для карточек */
.card {
  background-image: linear-gradient(
    127.09deg,
    rgba(6, 11, 40, 0.94) 19.41%,
    rgba(10, 14, 35, 0.49) 76.65%
  );
  border: 1px solid var(--bs-border-color);
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

/* Анимации для плавного обновления данных */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Стили для форм */
select,
input[type='text'],
input[type='number'] {
  background-color: var(--bs-card-bg);
  border-color: var(--bs-border-color);
  color: var(--bs-body-color);
}

select:focus,
input[type='text']:focus,
input[type='number']:focus {
  border-color: var(--primary);
  outline: none;
}

/* Стили для графиков и линий */
.chart-container {
  background-color: var(--bs-card-bg);
  border-radius: 0.5rem;
  padding: 1rem;
}

.chart-line {
  stroke: var(--primary);
  stroke-width: 2;
  fill: none;
}

.chart-area {
  fill: url(#gradient);
  opacity: 0.1;
}

.chart-dot {
  fill: var(--primary);
}

.chart-grid-line {
  stroke: var(--bs-border-color);
  stroke-width: 1;
  opacity: 0.2;
}

.chart-tooltip {
  background-color: var(--bs-body-bg-2);
  border: 1px solid var(--bs-border-color);
  border-radius: 0.25rem;
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Стили для индикаторов */
.indicator-up {
  color: var(--success);
}

.indicator-down {
  color: var(--danger);
}

.indicator-neutral {
  color: var(--warning);
}
</style>
