<template>
  <div>
    <h1 class="text-2xl font-bold mb-6 text-text-primary">Симулятор хаба управления</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Панель симуляции датчиков -->
      <BaseCard title="Состояние датчиков" icon="sensors" hover>
        <div class="space-y-6">
          <!-- Датчик температуры -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-medium text-text-primary">Температура в помещении</h3>
              <span class="font-bold text-lg text-text-primary">{{ sensors.temperature }}°C</span>
            </div>
            <div class="relative w-full h-8 mb-2">
              <div class="progress-bar-bg"></div>
              <div
                class="progress-bar-fill bg-gradient-to-r from-primary to-success"
                :style="{ width: ((sensors.temperature - 15) / 20) * 100 + '%' }"
              ></div>
              <input
                type="range"
                min="15"
                max="35"
                step="0.5"
                v-model="sensors.temperature"
                class="custom-range-input"
                @change="processSensorChanges()"
              />
            </div>
            <div class="flex justify-between text-xs text-text-secondary">
              <span>15°C</span>
              <span>25°C</span>
              <span>35°C</span>
            </div>
          </div>

          <!-- Датчик влажности -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-medium text-text-primary">Влажность в помещении</h3>
              <span class="font-bold text-lg text-text-primary">{{ sensors.humidity }}%</span>
            </div>
            <div class="relative w-full h-8 mb-2">
              <div class="progress-bar-bg"></div>
              <div
                class="progress-bar-fill bg-gradient-to-r from-primary to-blue-400"
                :style="{ width: ((sensors.humidity - 20) / 70) * 100 + '%' }"
              ></div>
              <input
                type="range"
                min="20"
                max="90"
                step="1"
                v-model="sensors.humidity"
                class="custom-range-input"
                @change="processSensorChanges()"
              />
            </div>
            <div class="flex justify-between text-xs text-text-secondary">
              <span>20%</span>
              <span>55%</span>
              <span>90%</span>
            </div>
          </div>

          <!-- Датчик наружной температуры -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-medium text-text-primary">Температура на улице</h3>
              <span class="font-bold text-lg text-text-primary"
                >{{ sensors.outdoorTemperature }}°C</span
              >
            </div>
            <div class="relative w-full h-8 mb-2">
              <div class="progress-bar-bg"></div>
              <div
                class="progress-bar-fill"
                :class="[
                  sensors.outdoorTemperature < 0
                    ? 'bg-gradient-to-r from-blue-500 to-primary'
                    : 'bg-gradient-to-r from-primary to-red-400',
                ]"
                :style="{ width: ((sensors.outdoorTemperature + 30) / 70) * 100 + '%' }"
              ></div>
              <input
                type="range"
                min="-30"
                max="40"
                step="1"
                v-model="sensors.outdoorTemperature"
                class="custom-range-input"
                @change="processSensorChanges()"
              />
            </div>
            <div class="flex justify-between text-xs text-text-secondary">
              <span>-30°C</span>
              <span>5°C</span>
              <span>40°C</span>
            </div>
          </div>

          <!-- Датчик присутствия -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-medium text-text-primary">Присутствие в помещении</h3>
              <div class="flex items-center">
                <span
                  class="material-icons-outlined mr-2"
                  :class="sensors.presence ? 'text-success' : 'text-text-secondary'"
                >
                  {{ sensors.presence ? 'person' : 'person_off' }}
                </span>
                <div class="presence-buttons">
                  <button
                    @click="((sensors.presence = true), processSensorChanges())"
                    class="px-3 py-1 rounded-l transition-all relative overflow-hidden"
                    :class="
                      sensors.presence ? 'bg-success text-white presence-active' : 'bg-surface-dark'
                    "
                  >
                    <span class="relative z-10">Да</span>
                    <div v-if="sensors.presence" class="presence-pulse"></div>
                  </button>
                  <button
                    @click="((sensors.presence = false), processSensorChanges())"
                    class="px-3 py-1 rounded-r transition-all relative overflow-hidden"
                    :class="
                      !sensors.presence ? 'bg-danger text-white presence-active' : 'bg-surface-dark'
                    "
                  >
                    <span class="relative z-10">Нет</span>
                    <div v-if="!sensors.presence" class="presence-pulse"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Датчик освещенности -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-medium text-text-primary">Освещенность (люкс)</h3>
              <span class="font-bold text-lg text-text-primary">{{ sensors.lightLevel }}</span>
            </div>
            <div class="relative w-full h-8 mb-2">
              <div class="progress-bar-bg"></div>
              <div
                class="progress-bar-fill bg-gradient-to-r from-amber-300 to-yellow-500"
                :style="{ width: (sensors.lightLevel / 1000) * 100 + '%' }"
              ></div>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                v-model="sensors.lightLevel"
                class="custom-range-input"
                @change="processSensorChanges()"
              />
            </div>
            <div class="flex justify-between text-xs text-text-secondary">
              <span>0</span>
              <span>500</span>
              <span>1000</span>
            </div>
          </div>

          <!-- Время суток (симуляция) -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-medium text-text-primary">Время суток</h3>
              <span class="font-bold text-lg text-text-primary">{{ getTimeOfDay() }}</span>
            </div>
            <div class="relative w-full h-8 mb-2">
              <div class="progress-bar-bg"></div>
              <div
                class="progress-bar-fill bg-gradient-to-r from-indigo-600 via-amber-400 to-indigo-600"
                :style="{ width: (sensors.hour / 23) * 100 + '%' }"
              ></div>
              <input
                type="range"
                min="0"
                max="23"
                step="1"
                v-model="sensors.hour"
                class="custom-range-input"
                @change="processSensorChanges()"
              />
            </div>
            <div class="flex justify-between text-xs text-text-secondary">
              <span>0:00</span>
              <span>12:00</span>
              <span>23:00</span>
            </div>
          </div>

          <!-- Кнопки предустановленных состояний -->
          <div class="grid grid-cols-2 gap-2 mt-4">
            <button @click="applyPreset('morning')" class="preset-button morning-preset">
              <span class="material-icons-outlined preset-icon">wb_sunny</span>
              <span>Утро</span>
            </button>
            <button @click="applyPreset('day')" class="preset-button day-preset">
              <span class="material-icons-outlined preset-icon">light_mode</span>
              <span>День</span>
            </button>
            <button @click="applyPreset('evening')" class="preset-button evening-preset">
              <span class="material-icons-outlined preset-icon">nights_stay</span>
              <span>Вечер</span>
            </button>
            <button @click="applyPreset('night')" class="preset-button night-preset">
              <span class="material-icons-outlined preset-icon">bedtime</span>
              <span>Ночь</span>
            </button>
            <button @click="applyPreset('summer')" class="preset-button summer-preset">
              <span class="material-icons-outlined preset-icon">wb_sunny</span>
              <span>Лето</span>
            </button>
            <button @click="applyPreset('winter')" class="preset-button winter-preset">
              <span class="material-icons-outlined preset-icon">ac_unit</span>
              <span>Зима</span>
            </button>
          </div>
        </div>
      </BaseCard>

      <!-- Визуализация текущего состояния -->
      <BaseCard title="Состояние системы" icon="monitor" className="md:col-span-2" hover>
        <!-- Упрощенная схема помещения -->
        <div
          class="border border-border-color p-4 bg-surface-dark relative h-[450px] mb-4 rounded-lg overflow-hidden"
        >
          <!-- Фон имитирующий комнату с мебелью -->
          <div class="absolute inset-0 opacity-10">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Стены -->
              <rect
                x="10"
                y="10"
                width="780"
                height="430"
                stroke="#808080"
                stroke-width="2"
                fill="none"
              />
              <!-- Окно -->
              <rect
                x="650"
                y="10"
                width="120"
                height="90"
                stroke="#4F6BED"
                stroke-width="2"
                fill="#182140"
                fill-opacity="0.3"
              />
              <line x1="710" y1="10" x2="710" y2="100" stroke="#4F6BED" stroke-width="2" />
              <!-- Дверь -->
              <rect
                x="10"
                y="200"
                width="80"
                height="150"
                stroke="#82735C"
                stroke-width="2"
                fill="#31261D"
                fill-opacity="0.3"
              />
              <!-- Диван -->
              <rect
                x="150"
                y="350"
                width="200"
                height="80"
                rx="5"
                stroke="#82735C"
                stroke-width="2"
                fill="#31261D"
                fill-opacity="0.4"
              />
              <!-- Телевизор -->
              <rect
                x="200"
                y="20"
                width="120"
                height="10"
                rx="2"
                stroke="#444"
                stroke-width="2"
                fill="#222"
              />
              <rect
                x="240"
                y="30"
                width="40"
                height="60"
                rx="2"
                stroke="#444"
                stroke-width="2"
                fill="#222"
              />
              <!-- Стол -->
              <rect
                x="500"
                y="250"
                width="120"
                height="80"
                rx="2"
                stroke="#82735C"
                stroke-width="2"
                fill="#31261D"
                fill-opacity="0.4"
              />
            </svg>
          </div>

          <!-- Схематично показываем комнату -->
          <div
            class="border-2 border-bs-border-color-translucent h-full w-full relative backdrop-blur-sm"
          >
            <!-- Эффект освещения -->
            <div
              class="absolute inset-0 transition-opacity duration-1000"
              :style="{
                background: `radial-gradient(circle at ${sensors.lightLevel / 10}% ${100 - sensors.hour * 3}%, rgba(255, 255, 255, ${sensors.lightLevel / 2000}), transparent 70%)`,
                opacity: sensors.presence ? 1 : 0.2,
              }"
            ></div>

            <!-- Индикатор времени суток -->
            <div
              class="absolute inset-0 transition-all duration-1000"
              :style="{
                background: `linear-gradient(180deg, 
                  ${getTimeColor()} 0%, 
                  rgba(0, 0, 0, 0) 100%)`,
                opacity: 0.15,
              }"
            ></div>

            <!-- Устройства -->
            <div
              v-for="device in devices"
              :key="device.id"
              class="absolute transform transition-all duration-500 hover:z-10"
              :style="{ top: device.position.y + '%', left: device.position.x + '%' }"
            >
              <div class="relative device-container">
                <!-- Область влияния устройства -->
                <div
                  v-if="device.status === 'on'"
                  class="absolute -inset-4 rounded-full transition-all duration-700 z-0"
                  :class="{
                    'device-effect-climate': ['conditioner', 'ventilation'].includes(device.type),
                    'device-effect-light': device.type === 'light',
                    'device-effect-sensor': [
                      'temperature_sensor',
                      'humidity_sensor',
                      'presence_sensor',
                      'light_sensor',
                    ].includes(device.type),
                  }"
                ></div>

                <!-- Статус индикатор с пульсацией -->
                <div
                  class="absolute -top-1 -right-1 w-3 h-3 rounded-full z-20"
                  :class="{
                    'bg-success': device.status === 'on',
                    'bg-danger': device.status === 'off',
                    'bg-warning': device.status === 'standby',
                    'device-pulse': device.status === 'on',
                  }"
                ></div>

                <!-- Основная иконка с тенью и эффектами -->
                <div
                  class="bg-surface p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300 z-10 relative device-icon"
                  :class="{
                    'shadow-success': device.status === 'on',
                    'shadow-danger': device.status === 'off',
                    'device-active': device.status === 'on',
                  }"
                >
                  <img :src="getDeviceIcon(device.type)" alt="Device" class="w-8 h-8" />
                </div>

                <!-- Название устройства -->
                <div
                  class="text-xs text-center mt-1 font-medium bg-surface-dark bg-opacity-70 rounded-md px-1 py-0.5"
                >
                  {{ device.name }}
                </div>

                <!-- Дополнительная информация для датчиков с красивой подсветкой -->
                <div
                  v-if="device.type === 'temperature_sensor'"
                  class="text-xs text-center font-bold mt-1 bg-red-100 bg-opacity-20 text-red-400 rounded-md px-2 py-0.5 sensor-value"
                >
                  {{ sensors.temperature }}°C
                </div>
                <div
                  v-if="device.type === 'humidity_sensor'"
                  class="text-xs text-center font-bold mt-1 bg-blue-100 bg-opacity-20 text-blue-400 rounded-md px-2 py-0.5 sensor-value"
                >
                  {{ sensors.humidity }}%
                </div>
                <div
                  v-if="device.type === 'presence_sensor'"
                  class="text-xs text-center font-bold mt-1 bg-green-100 bg-opacity-20 text-green-400 rounded-md px-2 py-0.5 sensor-value"
                >
                  {{ sensors.presence ? 'Есть' : 'Нет' }}
                </div>
                <div
                  v-if="device.type === 'light_sensor'"
                  class="text-xs text-center font-bold mt-1 bg-yellow-100 bg-opacity-20 text-yellow-400 rounded-md px-2 py-0.5 sensor-value"
                >
                  {{ sensors.lightLevel }} лк
                </div>
              </div>
            </div>

            <!-- Информация о внешних условиях с красивым оформлением -->
            <div class="absolute top-2 right-2 p-3 rounded-lg z-20 weather-card">
              <div class="font-bold text-primary mb-1 flex items-center">
                <span class="material-icons-outlined text-sm mr-1">public</span>
                Внешние условия:
              </div>
              <div class="flex items-center mb-1">
                <span
                  class="material-icons-outlined text-sm mr-1"
                  :class="getTemperatureIconColor()"
                >
                  {{ getTemperatureIcon() }}
                </span>
                <span>{{ sensors.outdoorTemperature }}°C</span>
              </div>
              <div class="flex items-center">
                <span class="material-icons-outlined text-sm mr-1" :class="getTimeIconColor()">
                  {{ getTimeIcon() }}
                </span>
                <span>{{ formatTime() }}</span>
              </div>
            </div>

            <!-- Индикаторы потоков -->
            <div v-if="anyDeviceActive(['conditioner', 'ventilation'])" class="air-flow"></div>
          </div>
        </div>

        <!-- Лог событий -->
        <div>
          <h3 class="font-bold mb-2 flex items-center gap-2">
            <span class="material-icons-outlined text-primary">history</span>
            Лог событий
          </h3>
          <div
            class="border border-bs-border-color rounded-lg h-48 overflow-y-auto p-2 bg-surface text-sm"
          >
            <div
              v-for="(event, index) in eventLog"
              :key="index"
              class="mb-1 pb-1 border-b border-bs-border-color-translucent last:border-0"
            >
              <span class="text-text-secondary mr-2">{{ event.time }}</span>
              <span>{{ event.message }}</span>
            </div>

            <div v-if="eventLog.length === 0" class="text-center text-text-secondary py-4">
              Нет событий
            </div>
          </div>
        </div>
      </BaseCard>
    </div>

    <!-- Панель активных сценариев -->
    <BaseCard title="Активные сценарии" icon="bolt" className="mt-6" hover>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="scenario in activeScenarios"
          :key="scenario.id"
          class="border rounded-lg p-3 bg-surface transition-all duration-300 hover:shadow-md shimmer-effect"
          :class="{
            'border-success': scenario.isTriggered,
            'border-border-color': !scenario.isTriggered,
          }"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold">{{ scenario.name }}</h3>
              <p class="text-xs text-text-secondary mt-1">{{ scenario.description }}</p>
            </div>
            <span
              class="px-2 py-1 rounded text-xs"
              :class="{
                'bg-success bg-opacity-20 text-success': scenario.isTriggered,
                'bg-surface-dark text-text-secondary': !scenario.isTriggered,
              }"
            >
              {{ scenario.isTriggered ? 'Активен' : 'Неактивен' }}
            </span>
          </div>
        </div>

        <div
          v-if="activeScenarios.length === 0"
          class="text-center text-text-secondary py-4 col-span-3"
        >
          Нет активных сценариев
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'

export default {
  name: 'SimulatorView',
  components: {
    BaseCard,
  },
  data() {
    return {
      // Симуляция датчиков
      sensors: {
        temperature: 23,
        humidity: 50,
        outdoorTemperature: 20,
        presence: true,
        lightLevel: 300,
        hour: 12,
      },

      // Виртуальные устройства
      devices: [
        {
          id: 1,
          name: 'Кондиционер',
          type: 'conditioner',
          status: 'off',
          position: { x: 75, y: 20 },
          parameters: { temperature: 22 },
        },
        {
          id: 2,
          name: 'Светильник',
          type: 'light',
          status: 'off',
          position: { x: 40, y: 15 },
          parameters: { brightness: 80 },
        },
        {
          id: 3,
          name: 'Телевизор',
          type: 'tv',
          status: 'off',
          position: { x: 20, y: 75 },
          parameters: {},
        },
        {
          id: 4,
          name: 'Датчик t°C',
          type: 'temperature_sensor',
          status: 'on',
          position: { x: 10, y: 25 },
          parameters: {},
        },
        {
          id: 5,
          name: 'Датчик присутствия',
          type: 'presence_sensor',
          status: 'on',
          position: { x: 60, y: 65 },
          parameters: {},
        },
        {
          id: 6,
          name: 'Датчик влажности',
          type: 'humidity_sensor',
          status: 'on',
          position: { x: 10, y: 45 },
          parameters: {},
        },
        {
          id: 7,
          name: 'Вентиляция',
          type: 'ventilation',
          status: 'off',
          position: { x: 85, y: 50 },
          parameters: {},
        },
        {
          id: 8,
          name: 'Датчик света',
          type: 'light_sensor',
          status: 'on',
          position: { x: 60, y: 25 },
          parameters: {},
        },
      ],

      // Сценарии
      activeScenarios: [
        {
          id: 1,
          name: 'Экономия при отсутствии',
          description: 'Выключает устройства, когда никого нет в помещении',
          isTriggered: false,
          conditions: [{ type: 'presence', value: false }],
          actions: [
            { deviceId: 1, command: 'turnOff' },
            { deviceId: 2, command: 'turnOff' },
            { deviceId: 3, command: 'turnOff' },
            { deviceId: 7, command: 'turnOff' },
          ],
        },
        {
          id: 2,
          name: 'Контроль температуры',
          description: 'Включает кондиционер при повышенной температуре',
          isTriggered: false,
          conditions: [{ type: 'temperature', operator: 'greater', value: 25 }],
          actions: [{ deviceId: 1, command: 'turnOn', parameters: { temperature: 22 } }],
        },
        {
          id: 3,
          name: 'Умное освещение',
          description: 'Включает освещение при недостаточной освещенности и наличии людей',
          isTriggered: false,
          conditions: [
            { type: 'presence', value: true },
            { type: 'lightLevel', operator: 'less', value: 200 },
          ],
          actions: [{ deviceId: 2, command: 'turnOn', parameters: { brightness: 70 } }],
        },
      ],

      // Лог событий
      eventLog: [],
    }
  },
  mounted() {
    // Запускаем симуляцию при загрузке
    this.processSensorChanges()
  },
  methods: {
    // Обработка изменения показаний датчиков
    processSensorChanges() {
      // Проверяем все сценарии
      this.evaluateScenarios()

      // Логируем событие
      this.logEvent(
        `Изменение показаний датчиков: t=${this.sensors.temperature}°C, h=${this.sensors.humidity}%, присутствие=${this.sensors.presence ? 'да' : 'нет'}`,
      )
    },

    // Оценка и выполнение сценариев
    evaluateScenarios() {
      this.activeScenarios.forEach((scenario) => {
        const shouldTrigger = this.evaluateScenarioConditions(scenario)

        // Если состояние сценария изменилось, выполняем действия
        if (shouldTrigger !== scenario.isTriggered) {
          scenario.isTriggered = shouldTrigger

          if (shouldTrigger) {
            this.logEvent(`Активирован сценарий: ${scenario.name}`)
            this.executeScenarioActions(scenario)
          } else {
            this.logEvent(`Деактивирован сценарий: ${scenario.name}`)
          }
        }
      })
    },

    // Проверка условий сценария
    evaluateScenarioConditions(scenario) {
      return scenario.conditions.every((condition) => {
        switch (condition.type) {
          case 'temperature':
            return this.compareValues(
              this.sensors.temperature,
              condition.value,
              condition.operator || 'equal',
            )
          case 'humidity':
            return this.compareValues(
              this.sensors.humidity,
              condition.value,
              condition.operator || 'equal',
            )
          case 'presence':
            return this.sensors.presence === condition.value
          case 'lightLevel':
            return this.compareValues(
              this.sensors.lightLevel,
              condition.value,
              condition.operator || 'equal',
            )
          case 'hour':
            return this.compareValues(
              this.sensors.hour,
              condition.value,
              condition.operator || 'equal',
            )
          case 'outdoorTemperature':
            return this.compareValues(
              this.sensors.outdoorTemperature,
              condition.value,
              condition.operator || 'equal',
            )
          default:
            return false
        }
      })
    },

    // Сравнение значений с учетом оператора
    compareValues(actual, expected, operator) {
      switch (operator) {
        case 'greater':
          return actual > expected
        case 'less':
          return actual < expected
        case 'equal':
          return actual == expected
        case 'not':
          return actual != expected
        default:
          return false
      }
    },

    // Выполнение действий сценария
    executeScenarioActions(scenario) {
      scenario.actions.forEach((action) => {
        const device = this.devices.find((d) => d.id === action.deviceId)
        if (!device) return

        switch (action.command) {
          case 'turnOn':
            device.status = 'on'
            if (action.parameters) {
              device.parameters = { ...device.parameters, ...action.parameters }
            }
            this.logEvent(`Устройство ${device.name} включено`)
            break
          case 'turnOff':
            device.status = 'off'
            this.logEvent(`Устройство ${device.name} выключено`)
            break
          case 'standby':
            device.status = 'standby'
            this.logEvent(`Устройство ${device.name} переведено в режим ожидания`)
            break
        }
      })
    },

    // Применение предустановленных комбинаций датчиков
    applyPreset(preset) {
      switch (preset) {
        case 'morning':
          this.sensors = {
            ...this.sensors,
            hour: 8,
            temperature: 20,
            humidity: 65,
            lightLevel: 400,
            outdoorTemperature: 15,
            presence: true,
          }
          break
        case 'day':
          this.sensors = {
            ...this.sensors,
            hour: 14,
            temperature: 24,
            humidity: 50,
            lightLevel: 800,
            outdoorTemperature: 25,
            presence: true,
          }
          break
        case 'evening':
          this.sensors = {
            ...this.sensors,
            hour: 19,
            temperature: 22,
            humidity: 55,
            lightLevel: 150,
            outdoorTemperature: 18,
            presence: true,
          }
          break
        case 'night':
          this.sensors = {
            ...this.sensors,
            hour: 23,
            temperature: 21,
            humidity: 60,
            lightLevel: 10,
            outdoorTemperature: 12,
            presence: false,
          }
          break
        case 'summer':
          this.sensors = { ...this.sensors, temperature: 28, humidity: 70, outdoorTemperature: 32 }
          break
        case 'winter':
          this.sensors = { ...this.sensors, temperature: 20, humidity: 40, outdoorTemperature: -10 }
          break
      }

      this.logEvent(`Применен пресет: ${preset}`)
      this.processSensorChanges()
    },

    // Добавление события в лог
    logEvent(message) {
      const now = new Date()
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`

      this.eventLog.unshift({
        time: timeStr,
        message: message,
      })

      // Ограничиваем количество событий в логе
      if (this.eventLog.length > 100) {
        this.eventLog.pop()
      }
    },

    // Получение пиктограммы для типа устройства
    getDeviceIcon(type) {
      switch (type) {
        case 'conditioner':
          return '/icons/conditioner.svg'
        case 'light':
          return '/icons/light.svg'
        case 'tv':
          return '/icons/tv.svg'
        case 'temperature_sensor':
          return '/icons/temperature.svg'
        case 'humidity_sensor':
          return '/icons/humidity.svg'
        case 'presence_sensor':
          return '/icons/presence.svg'
        case 'ventilation':
          return '/icons/ventilation.svg'
        case 'light_sensor':
          return '/icons/light-sensor.svg'
        default:
          return '/icons/device.svg'
      }
    },

    // Получение текстового представления времени суток
    getTimeOfDay() {
      const hour = this.sensors.hour
      if (hour >= 5 && hour < 12) return 'Утро'
      if (hour >= 12 && hour < 18) return 'День'
      if (hour >= 18 && hour < 23) return 'Вечер'
      return 'Ночь'
    },

    // Форматирование времени для отображения
    formatTime() {
      return `${this.sensors.hour.toString().padStart(2, '0')}:00`
    },

    // Получение цвета температуры
    getTemperatureIconColor() {
      const temperature = this.sensors.temperature
      if (temperature < 15) return 'text-success'
      if (temperature > 25) return 'text-danger'
      return 'text-primary'
    },

    // Получение иконки температуры
    getTemperatureIcon() {
      const temperature = this.sensors.temperature
      if (temperature < 15) return 'thermometer'
      if (temperature > 25) return 'thermometer'
      return 'thermometer'
    },

    // Получение цвета времени суток
    getTimeColor() {
      const hour = this.sensors.hour
      if (hour >= 5 && hour < 10) return 'rgba(255, 170, 106, 0.5)' // Утро (оранжевый)
      if (hour >= 10 && hour < 18) return 'rgba(255, 255, 200, 0.5)' // День (желтый)
      if (hour >= 18 && hour < 22) return 'rgba(255, 100, 100, 0.5)' // Вечер (красный)
      return 'rgba(30, 50, 100, 0.5)' // Ночь (темно-синий)
    },

    // Получение цвета иконки времени
    getTimeIconColor() {
      const hour = this.sensors.hour
      if (hour >= 5 && hour < 10) return 'text-amber-400' // Утро
      if (hour >= 10 && hour < 18) return 'text-yellow-400' // День
      if (hour >= 18 && hour < 22) return 'text-orange-400' // Вечер
      return 'text-indigo-400' // Ночь
    },

    // Получение иконки времени суток
    getTimeIcon() {
      const hour = this.sensors.hour
      if (hour >= 5 && hour < 12) return 'sunny'
      if (hour >= 12 && hour < 18) return 'sunny'
      if (hour >= 18 && hour < 23) return 'sunny'
      return 'moon'
    },

    // Проверка активного устройства
    anyDeviceActive(types) {
      return this.devices.some((device) => types.includes(device.type) && device.status === 'on')
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

/* Стили для ползунков */
input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  background: transparent;
  border-radius: 4px;
  outline: none;
  margin: 0;
}

.custom-range-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 30;
  cursor: pointer;
  margin: 0;
}

.progress-bar-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 41, 59, 0.3);
  border-radius: 8px;
  overflow: hidden;
}

.progress-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 8px;
  transition: width 0.3s ease-out;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary);
  cursor: pointer;
  position: relative;
  z-index: 30;
}

input[type='range']::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary);
  cursor: pointer;
  border: none;
  position: relative;
  z-index: 30;
}

/* Стили для устройств */
.device {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--surface);
  border: 2px solid var(--border-color);
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 5;
}

.device:hover {
  transform: scale(1.1);
  border-color: var(--primary);
}

.device.active {
  border-color: var(--success);
  background-color: rgba(16, 185, 129, 0.1);
}

.device.inactive {
  border-color: var(--danger);
  opacity: 0.7;
}

/* Новые стили для устройств и эффектов */
.device-container {
  transition: all 0.3s ease;
}

.device-container:hover {
  transform: scale(1.05);
}

.device-icon {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.device-active {
  animation: glow 2s ease-in-out infinite alternate;
}

.shadow-success {
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}

.shadow-danger {
  box-shadow: 0 0 10px rgba(220, 38, 38, 0.2);
}

/* Эффекты устройств */
.device-effect-climate {
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
  animation: pulse-climate 3s infinite ease-in-out;
}

.device-effect-light {
  background: radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%);
  animation: pulse-light 2s infinite ease-in-out;
}

.device-effect-sensor {
  background: radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%);
  animation: pulse-sensor 4s infinite ease-in-out;
}

/* Пульсация устройств */
.device-pulse {
  animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Аналог метрики */
.sensor-value {
  position: relative;
  overflow: hidden;
}

.sensor-value::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  animation: shimmer 3s infinite;
}

/* Карточка погоды */
.weather-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(71, 85, 105, 0.3);
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.weather-card:hover {
  background: rgba(30, 41, 59, 0.8);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Эффект потока воздуха */
.air-flow {
  position: absolute;
  top: 20%;
  left: 75%;
  width: 100px;
  height: 60px;
  background: linear-gradient(
    90deg,
    rgba(148, 163, 184, 0) 0%,
    rgba(148, 163, 184, 0.1) 50%,
    rgba(148, 163, 184, 0) 100%
  );
  transform-origin: left center;
  transform: rotate(45deg);
  opacity: 0;
  animation: air-flow 3s ease-in-out infinite;
  z-index: 1;
  filter: blur(3px);
}

/* Соединительные линии */
.connection {
  position: absolute;
  height: 2px;
  background-color: var(--border-color);
  transform-origin: left center;
  z-index: 1;
}

.connection.active {
  background-color: var(--primary);
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
}

/* Индикатор температуры */
.temperature-indicator {
  position: absolute;
  padding: 4px 8px;
  background-color: var(--surface-dark);
  border-radius: 4px;
  font-size: 12px;
  color: var(--text-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Анимации */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.3);
  }
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  }
  to {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  }
}

@keyframes pulse-climate {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
}

@keyframes pulse-light {
  0% {
    transform: scale(0.9);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.6;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.3;
  }
}

@keyframes pulse-sensor {
  0% {
    transform: scale(0.95);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.4;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.2;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  40% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes air-flow {
  0% {
    transform: rotate(45deg) translateX(0) scale(0.8);
    opacity: 0;
  }
  25% {
    opacity: 0.3;
  }
  50% {
    transform: rotate(45deg) translateX(30px) scale(1);
    opacity: 0.5;
  }
  75% {
    opacity: 0.3;
  }
  100% {
    transform: rotate(45deg) translateX(60px) scale(0.8);
    opacity: 0;
  }
}

/* Стили для кнопок предустановок */
.preset-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 16px;
  text-align: center;
  border-radius: 10px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(30, 41, 59, 0.5);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.preset-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.preset-button:active {
  transform: translateY(1px);
}

.preset-icon {
  font-size: 16px;
}

/* Индивидуальные стили для каждой предустановки */
.morning-preset {
  background: linear-gradient(135deg, #ff8c42, #ffa07a);
  color: #ffffff;
}

.day-preset {
  background: linear-gradient(135deg, #ffce00, #ffad00);
  color: #ffffff;
}

.evening-preset {
  background: linear-gradient(135deg, #fd5e53, #ec6f66);
  color: #ffffff;
}

.night-preset {
  background: linear-gradient(135deg, #2c3e50, #4a6583);
  color: #ffffff;
}

.summer-preset {
  background: linear-gradient(135deg, #43c6ac, #ffd452);
  color: #ffffff;
}

.winter-preset {
  background: linear-gradient(135deg, #7597de, #c1e3ff);
  color: #ffffff;
}

/* Стили для кнопок присутствия */
.presence-buttons {
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  overflow: hidden;
}

.presence-active {
  position: relative;
  font-weight: 500;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

.presence-pulse {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  animation: presence-wave 2s infinite;
  z-index: 1;
}

@keyframes presence-wave {
  0% {
    transform: scale(0.85);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.3;
  }
  100% {
    transform: scale(0.85);
    opacity: 0.7;
  }
}
</style>
