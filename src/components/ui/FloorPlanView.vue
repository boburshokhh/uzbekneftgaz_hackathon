<template>
  <div
    class="plan-container relative h-full w-full rounded-lg overflow-hidden border border-border-color"
  >
    <!-- Основа плана этажа -->
    <svg width="100%" height="100%" viewBox="0 0 1024 1024" preserveAspectRatio="xMidYMid meet">
      <!-- Фон административного офиса -->
      <rect
        x="100"
        y="100"
        width="824"
        height="824"
        fill="#070c29"
        stroke="rgba(59, 130, 246, 0.4)"
        stroke-width="3"
      />

      <!-- Внешние стены -->
      <rect
        x="100"
        y="100"
        width="824"
        height="824"
        fill="none"
        stroke="#3b82f6"
        stroke-width="4"
      />

      <!-- Приемная -->
      <rect
        x="100"
        y="100"
        width="250"
        height="200"
        fill="#181f4a"
        stroke="#3b82f6"
        stroke-width="2"
      />
      <text x="170" y="160" font-family="Arial" font-size="16" fill="#e6ecf0" text-anchor="middle">
        ПРИЕМНАЯ
      </text>

      <!-- Офис директора -->
      <rect
        x="100"
        y="300"
        width="250"
        height="250"
        fill="#181f4a"
        stroke="#3b82f6"
        stroke-width="2"
      />
      <text x="170" y="380" font-family="Arial" font-size="16" fill="#e6ecf0" text-anchor="middle">
        КАБИНЕТ
      </text>
      <text x="170" y="400" font-family="Arial" font-size="16" fill="#e6ecf0" text-anchor="middle">
        ДИРЕКТОРА
      </text>

      <!-- Бухгалтерия -->
      <rect
        x="100"
        y="550"
        width="250"
        height="374"
        fill="#181f4a"
        stroke="#3b82f6"
        stroke-width="2"
      />
      <text x="170" y="700" font-family="Arial" font-size="16" fill="#e6ecf0" text-anchor="middle">
        БУХГАЛТЕРИЯ
      </text>

      <!-- Зал совещаний -->
      <rect
        x="350"
        y="100"
        width="324"
        height="300"
        fill="#181f4a"
        stroke="#3b82f6"
        stroke-width="2"
      />
      <text x="500" y="200" font-family="Arial" font-size="16" fill="#e6ecf0" text-anchor="middle">
        ЗАЛ СОВЕЩАНИЙ
      </text>

      <!-- Общий офис -->
      <rect
        x="350"
        y="400"
        width="324"
        height="524"
        fill="#181f4a"
        stroke="#3b82f6"
        stroke-width="2"
      />
      <text x="500" y="600" font-family="Arial" font-size="16" fill="#e6ecf0" text-anchor="middle">
        ОБЩИЙ ОФИС
      </text>

      <!-- Подсобные помещения -->
      <rect
        x="674"
        y="100"
        width="250"
        height="200"
        fill="#181f4a"
        stroke="#3b82f6"
        stroke-width="2"
      />
      <text x="800" y="160" font-family="Arial" font-size="14" fill="#e6ecf0" text-anchor="middle">
        СЕРВЕРНАЯ
      </text>

      <!-- Кухня/отдых -->
      <rect
        x="674"
        y="300"
        width="250"
        height="250"
        fill="#181f4a"
        stroke="#3b82f6"
        stroke-width="2"
      />
      <text x="800" y="380" font-family="Arial" font-size="16" fill="#e6ecf0" text-anchor="middle">
        КОМНАТА
      </text>
      <text x="800" y="400" font-family="Arial" font-size="16" fill="#e6ecf0" text-anchor="middle">
        ОТДЫХА
      </text>

      <!-- Санузлы -->
      <rect
        x="674"
        y="550"
        width="250"
        height="150"
        fill="#181f4a"
        stroke="#3b82f6"
        stroke-width="2"
      />
      <text x="800" y="620" font-family="Arial" font-size="16" fill="#e6ecf0" text-anchor="middle">
        САНУЗЛЫ
      </text>

      <!-- Архив -->
      <rect
        x="674"
        y="700"
        width="250"
        height="224"
        fill="#181f4a"
        stroke="#3b82f6"
        stroke-width="2"
      />
      <text x="800" y="790" font-family="Arial" font-size="16" fill="#e6ecf0" text-anchor="middle">
        АРХИВ
      </text>

      <!-- Двери -->
      <!-- Приемная -->
      <line x1="220" y1="100" x2="230" y2="100" stroke="#3b82f6" stroke-width="3" />
      <!-- Кабинет директора -->
      <line x1="220" y1="300" x2="220" y2="310" stroke="#3b82f6" stroke-width="3" />
      <!-- Бухгалтерия -->
      <line x1="180" y1="550" x2="190" y2="550" stroke="#3b82f6" stroke-width="3" />
      <!-- Зал совещаний -->
      <line x1="350" y1="150" x2="350" y2="160" stroke="#3b82f6" stroke-width="3" />
      <!-- Общий офис -->
      <line x1="450" y1="400" x2="460" y2="400" stroke="#3b82f6" stroke-width="3" />
      <!-- Серверная -->
      <line x1="674" y1="150" x2="674" y2="160" stroke="#3b82f6" stroke-width="3" />
      <!-- Комната отдыха -->
      <line x1="750" y1="300" x2="760" y2="300" stroke="#3b82f6" stroke-width="3" />
      <!-- Санузлы -->
      <line x1="800" y1="550" x2="800" y2="560" stroke="#3b82f6" stroke-width="3" />
      <!-- Архив -->
      <line x1="700" y1="700" x2="710" y2="700" stroke="#3b82f6" stroke-width="3" />

      <!-- Офисная мебель (схематично) -->
      <!-- Стол в кабинете директора -->
      <rect
        x="150"
        y="400"
        width="150"
        height="60"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />

      <!-- Стол для совещаний -->
      <rect
        x="400"
        y="150"
        width="220"
        height="100"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />

      <!-- Столы в общем офисе -->
      <rect
        x="380"
        y="450"
        width="80"
        height="50"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />
      <rect
        x="380"
        y="550"
        width="80"
        height="50"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />
      <rect
        x="380"
        y="650"
        width="80"
        height="50"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />
      <rect
        x="380"
        y="750"
        width="80"
        height="50"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />

      <rect
        x="520"
        y="450"
        width="80"
        height="50"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />
      <rect
        x="520"
        y="550"
        width="80"
        height="50"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />
      <rect
        x="520"
        y="650"
        width="80"
        height="50"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />
      <rect
        x="520"
        y="750"
        width="80"
        height="50"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />

      <!-- Стойка ресепшн -->
      <path
        d="M250,200 Q180,200 180,150 Q180,130 200,130 L300,130"
        fill="none"
        stroke="#6B7280"
        stroke-width="2"
      />

      <!-- Кухонная мебель -->
      <rect
        x="700"
        y="450"
        width="200"
        height="30"
        fill="#29346f"
        stroke="#4B5563"
        stroke-width="1"
      />

      <!-- Условные обозначения устройств и систем (как в AutoCAD) -->
      <circle cx="180" cy="200" r="4" fill="#10b981" stroke="#10b981" stroke-width="1" />
      <circle cx="320" cy="350" r="4" fill="#10b981" stroke="#10b981" stroke-width="1" />
      <circle cx="500" cy="250" r="4" fill="#10b981" stroke="#10b981" stroke-width="1" />
      <circle cx="740" cy="200" r="4" fill="#10b981" stroke="#10b981" stroke-width="1" />
      <circle cx="800" cy="350" r="4" fill="#10b981" stroke="#10b981" stroke-width="1" />
      <circle cx="420" cy="600" r="4" fill="#10b981" stroke="#10b981" stroke-width="1" />
      <circle cx="560" cy="600" r="4" fill="#10b981" stroke="#10b981" stroke-width="1" />

      <!-- Линии вентиляции (пунктирные) -->
      <line
        x1="180"
        y1="200"
        x2="320"
        y2="350"
        stroke="#3b82f6"
        stroke-width="1"
        stroke-dasharray="5,5"
      />
      <line
        x1="500"
        y1="250"
        x2="740"
        y2="200"
        stroke="#3b82f6"
        stroke-width="1"
        stroke-dasharray="5,5"
      />
      <line
        x1="800"
        y1="350"
        x2="800"
        y2="450"
        stroke="#3b82f6"
        stroke-width="1"
        stroke-dasharray="5,5"
      />
      <line
        x1="420"
        y1="600"
        x2="560"
        y2="600"
        stroke="#3b82f6"
        stroke-width="1"
        stroke-dasharray="5,5"
      />

      <!-- Масштабная линейка -->
      <line x1="850" y1="900" x2="950" y2="900" stroke="#e6ecf0" stroke-width="2" />
      <line x1="850" y1="895" x2="850" y2="905" stroke="#e6ecf0" stroke-width="2" />
      <line x1="950" y1="895" x2="950" y2="905" stroke="#e6ecf0" stroke-width="2" />
      <text x="900" y="890" font-size="12" fill="#e6ecf0" text-anchor="middle">10 м</text>
    </svg>

    <!-- Добавляем заголовок этажа -->
    <div class="absolute top-4 left-4 z-30 flex items-center">
      <div
        class="text-xl font-bold text-white bg-[#29346f] px-4 py-2 rounded-lg shadow-lg flex items-center"
      >
        <span class="material-icons-outlined mr-2">apartment</span>
        Первый этаж
        <span class="ml-4 text-sm px-2 py-1 bg-[#3b82f6] rounded-full"
          >{{ devices.length }} устройств</span
        >
      </div>
    </div>

    <!-- Условные обозначения -->
    <div
      class="absolute bottom-4 right-4 z-30 bg-[#070c29] bg-opacity-80 p-3 rounded-lg border border-[rgba(255,255,255,0.15)] shadow-lg"
    >
      <div class="text-sm text-white font-medium mb-2">Условные обозначения:</div>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-success"></span>
          <span class="text-xs text-[#e6ecf0]">Включено</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-danger"></span>
          <span class="text-xs text-[#e6ecf0]">Выключено</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-warning"></span>
          <span class="text-xs text-[#e6ecf0]">Ожидание</span>
        </div>
      </div>
    </div>

    <!-- Устройства на плане -->
    <div
      v-for="device in devices"
      :key="device.id"
      class="device-icon absolute transform hover:scale-110 cursor-pointer"
      :class="{
        active: selectedDevice?.id === device.id,
        [`device-icon-${device.type}`]: true,
      }"
      :style="{
        top: `${getDevicePosition(device).y}%`,
        left: `${getDevicePosition(device).x}%`,
        transform: 'translate(-50%, -50%)',
      }"
      @click="$emit('select-device', device.id)"
    >
      <div class="relative">
        <!-- Индикатор статуса -->
        <div
          class="absolute -top-4 -right-4 w-6 h-6 rounded-full status-indicator"
          :class="{
            'status-on': device.status === 'on',
            'status-off': device.status === 'off',
            'status-standby': device.status === 'standby',
          }"
        ></div>

        <!-- Фон для иконки -->
        <div
          class="p-2 rounded-full device-icon-bg"
          :class="{
            'active-device': selectedDevice?.id === device.id,
            'inactive-device': selectedDevice?.id !== device.id,
          }"
        >
          <component
            :is="getDeviceIcon(device.type)"
            class="w-6 h-6"
            :class="{
              'text-success': device.status === 'on',
              'text-danger': device.status === 'off',
              'text-warning': device.status === 'standby',
            }"
          />
        </div>

        <!-- Название устройства -->
        <div class="device-tooltip">
          {{ device.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from 'vue'

export default {
  name: 'FloorPlanView',
  props: {
    devices: {
      type: Array,
      required: true,
    },
    selectedDevice: {
      type: Object,
      default: null,
    },
  },
  methods: {
    getDeviceIcon(type) {
      switch (type) {
        case 'conditioner':
          return {
            render: function () {
              return h(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 32 32',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                },
                [
                  h('rect', { x: '4', y: '6', width: '24', height: '10', rx: '2' }),
                  h('path', { d: 'M16 16 L16 26' }),
                  h('path', { d: 'M12 26 L20 26' }),
                  h('path', { d: 'M8 10 L24 10' }),
                  h('path', { d: 'M8 14 L24 14' }),
                ],
              )
            },
          }
        case 'tv':
          return {
            render: function () {
              return h(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 32 32',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                },
                [
                  h('rect', { x: '3', y: '8', width: '26', height: '18', rx: '2' }),
                  h('polyline', { points: '11 4 16 8 21 4' }),
                ],
              )
            },
          }
        case 'light':
          return {
            render: function () {
              return h(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 32 32',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                },
                [
                  h('circle', { cx: '16', cy: '16', r: '6' }),
                  h('path', { d: 'M16 6 L16 8' }),
                  h('path', { d: 'M16 24 L16 26' }),
                  h('path', { d: 'M6 16 L8 16' }),
                  h('path', { d: 'M24 16 L26 16' }),
                  h('path', { d: 'M8.9 8.9 L10.3 10.3' }),
                  h('path', { d: 'M21.7 21.7 L23.1 23.1' }),
                  h('path', { d: 'M8.9 23.1 L10.3 21.7' }),
                  h('path', { d: 'M21.7 10.3 L23.1 8.9' }),
                ],
              )
            },
          }
        case 'temperature_sensor':
          return {
            render: function () {
              return h(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 32 32',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                },
                [
                  h('path', { d: 'M16 4 L16 22' }),
                  h('circle', { cx: '16', cy: '26', r: '4' }),
                  h('path', { d: 'M12 10 L20 10' }),
                  h('path', { d: 'M12 16 L20 16' }),
                ],
              )
            },
          }
        case 'presence_sensor':
          return {
            render: function () {
              return h(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 32 32',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                },
                [
                  h('circle', { cx: '16', cy: '10', r: '6' }),
                  h('path', { d: 'M16 16 L16 28' }),
                  h('path', { d: 'M10 20 L16 24 22 20' }),
                ],
              )
            },
          }
        default:
          return null
      }
    },
    getDevicePosition(device) {
      // Обновлённые позиции устройств - размещаем еще ближе к центрам комнат
      switch (device.id) {
        // =============================================
        // КОНДИЦИОНЕРЫ (ближе к центру комнат)
        // =============================================
        case 1: // Кондиционер в приемной
          return { x: 34, y: 18 } // Ещё ближе к центру приемной
        case 2: // Кондиционер в кабинете директора
          return { x: 34, y: 42 } // Ещё ближе к центру кабинета директора
        case 3: // Кондиционер в зале совещаний
          return { x: 48, y: 23 } // Ещё ближе к центру зала совещаний
        case 4: // Кондиционер в общем офисе
          return { x: 48, y: 66 } // Ещё ближе к центру общего офиса

        // =============================================
        // СВЕТИЛЬНИКИ (точно по центру комнат)
        // =============================================
        case 5: // Светильник в приемной
          return { x: 32, y: 20 } // Точно в центр приемной
        case 6: // Светильник в кабинете директора
          return { x: 32, y: 44 } // Точно в центр кабинета директора
        case 7: // Светильник в бухгалтерии
          return { x: 32, y: 75 } // Точно в центр бухгалтерии
        case 8: // Светильник в зале совещаний
          return { x: 54, y: 27 } // Точно в центр зала совещаний
        case 9: // Светильник в общем офисе
          return { x: 54, y: 68 } // Точно в центр общего офиса
        case 10: // Светильник в серверной
          return { x: 65, y: 20 } // Еще ближе к центру серверной
        case 11: // Светильник в комнате отдыха
          return { x: 65, y: 44 } // Еще ближе к центру комнаты отдыха
        case 12: // Светильник в санузлах
          return { x: 65, y: 65 } // Еще ближе к центру санузлов
        case 13: // Светильник в архиве
          return { x: 65, y: 85 } // Еще ближе к центру архива

        // =============================================
        // ДОПОЛНИТЕЛЬНЫЕ УСТРОЙСТВА
        // =============================================
        case 14: // Телевизор в зале совещаний
          return { x: 62, y: 23 } // Ближе к центру зала совещаний, но у стены
        case 15: // Датчик температуры в общем офисе
          return { x: 53, y: 72 } // Ближе к центру общего офиса
        case 16: // Датчик присутствия в приемной
          return { x: 30, y: 16 } // Ближе к центру приемной

        default:
          return { x: device.position.x, y: device.position.y }
      }
    },
  },
}
</script>

<style scoped>
.plan-container {
  min-height: 500px;
  background: #070c29;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.plan-container:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, rgba(7, 12, 41, 0) 70%);
  pointer-events: none;
}

.device-icon {
  z-index: 40;
  transition: all 0.3s ease;
}

.device-icon:hover {
  z-index: 48 !important;
  transform: scale(1.15) translate(-50%, -50%) !important;
}

.device-icon.active {
  z-index: 50 !important;
  transform: scale(1.25) translate(-50%, -50%) !important;
}

.device-icon-bg {
  background: #070c29;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.active-device {
  background: rgba(59, 130, 246, 0.3) !important;
  border: 2px solid rgba(59, 130, 246, 0.8) !important;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
  animation: device-pulse 2s infinite ease-in-out;
}

.inactive-device {
  border-width: 2px;
}

.inactive-device:hover {
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
}

.device-tooltip {
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  background: #181f4a;
  color: #e6ecf0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  opacity: 0;
  z-index: 60;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  transition: all 0.2s ease;
}

/* Разные цвета для разных типов устройств */
.device-icon-conditioner .device-icon-bg {
  background: rgba(13, 110, 253, 0.3);
  border-color: rgba(13, 110, 253, 0.6);
}

.device-icon-light .device-icon-bg {
  background: rgba(25, 135, 84, 0.3);
  border-color: rgba(25, 135, 84, 0.6);
}

.device-icon-tv .device-icon-bg {
  background: rgba(245, 158, 11, 0.3);
  border-color: rgba(245, 158, 11, 0.6);
}

.device-icon-temperature_sensor .device-icon-bg,
.device-icon-presence_sensor .device-icon-bg {
  background: rgba(13, 202, 240, 0.3);
  border-color: rgba(13, 202, 240, 0.6);
}

.device-icon:hover .device-tooltip,
.device-icon.active .device-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.status-indicator {
  transition: all 0.2s ease;
  width: 12px;
  height: 12px;
  top: -4px;
  right: -4px;
  border: 2px solid #070c29;
  z-index: 45;
}

.status-on {
  background-color: #10b981;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
  animation: pulse-success 2s infinite;
}

.status-off {
  background-color: #ef4444;
  box-shadow: 0 0 6px rgba(239, 68, 68, 0.7);
}

.status-standby {
  background-color: #f59e0b;
  animation: pulse-warning 3s infinite;
  box-shadow: 0 0 7px rgba(245, 158, 11, 0.7);
}

@keyframes pulse-success {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);
  }
}

@keyframes pulse-warning {
  0%,
  100% {
    opacity: 0.9;
    box-shadow: 0 0 6px rgba(245, 158, 11, 0.8);
  }
  50% {
    opacity: 0.7;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
  }
}

.device-icon:hover {
  transform: scale(1.15) !important;
  z-index: 48 !important;
}

.device-icon.active {
  z-index: 50 !important;
  transform: scale(1.25) translate(-50%, -50%) !important;
}

@keyframes device-pulse {
  0%,
  100% {
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.7);
    transform: scale(1.05);
  }
}
</style>
