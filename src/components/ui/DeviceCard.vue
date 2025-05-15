<template>
  <div class="device-card" :class="{ 'device-card-active': isActive }" @click="$emit('click')">
    <div
      class="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
      :class="`bg-${statusColor} bg-opacity-20`"
    >
      <span class="material-icons-outlined" :class="`text-${statusColor}`">{{ icon }}</span>
    </div>

    <div class="flex-grow">
      <div class="font-medium text-text-primary">{{ name }}</div>
      <div class="text-xs text-text-secondary">{{ typeName }}</div>
    </div>

    <div class="flex items-center gap-2">
      <span class="status-indicator" :class="`status-${status}`"></span>
      <span
        class="text-xs px-2 py-1 rounded-full"
        :class="{
          'bg-success bg-opacity-20 text-success': status === 'on',
          'bg-danger bg-opacity-20 text-danger': status === 'off',
          'bg-warning bg-opacity-20 text-warning': status === 'standby',
        }"
      >
        {{ statusText }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeviceCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'off',
      validator: (value) => ['on', 'off', 'standby'].includes(value),
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    icon() {
      switch (this.type) {
        case 'conditioner':
          return 'ac_unit'
        case 'light':
          return 'lightbulb'
        case 'tv':
          return 'tv'
        case 'temperature_sensor':
          return 'thermostat'
        case 'presence_sensor':
          return 'person'
        case 'humidity_sensor':
          return 'water_drop'
        case 'light_sensor':
          return 'wb_sunny'
        default:
          return 'devices'
      }
    },
    typeName() {
      switch (this.type) {
        case 'conditioner':
          return 'Кондиционер'
        case 'light':
          return 'Светильник'
        case 'tv':
          return 'Телевизор'
        case 'temperature_sensor':
          return 'Датчик температуры'
        case 'presence_sensor':
          return 'Датчик присутствия'
        case 'humidity_sensor':
          return 'Датчик влажности'
        case 'light_sensor':
          return 'Датчик освещенности'
        default:
          return 'Устройство'
      }
    },
    statusText() {
      switch (this.status) {
        case 'on':
          return 'Включено'
        case 'off':
          return 'Выключено'
        case 'standby':
          return 'Ожидание'
        default:
          return 'Неизвестно'
      }
    },
    statusColor() {
      switch (this.status) {
        case 'on':
          return 'success'
        case 'off':
          return 'danger'
        case 'standby':
          return 'warning'
        default:
          return 'secondary'
      }
    },
  },
}
</script>

<style scoped>
.device-card {
  min-height: 74px;
}
</style>
