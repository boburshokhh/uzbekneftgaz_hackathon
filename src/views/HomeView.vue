<script>
import DeviceCard from '@/components/ui/DeviceCard.vue'
import DetailCard from '@/components/ui/DetailCard.vue'
import FloorPlanView from '@/components/ui/FloorPlanView.vue'

export default {
  name: 'HomeView',
  components: {
    DeviceCard,
    DetailCard,
    FloorPlanView,
  },
  data() {
    return {
      selectedFloor: 1,
      selectedDevice: null,
      floors: [
        { id: 1, name: 'Первый этаж', deviceCount: 12 },
        { id: 2, name: 'Второй этаж', deviceCount: 3 },
        { id: 3, name: 'Третий этаж', deviceCount: 2 },
      ],
      devices: [
        // =============================================
        // КОНДИЦИОНЕРЫ (только 4 штуки в основных комнатах)
        // =============================================
        {
          id: 1,
          name: 'Кондиционер Приемная',
          type: 'conditioner',
          floor: 1,
          room: 'Приемная',
          status: 'on',
          position: { x: 20, y: 30 },
          parameters: { temperature: 22, mode: 'cool' },
          consumption: { current: 2.8, standby: 0.5, active: 2.8 },
        },
        {
          id: 2,
          name: 'Кондиционер Кабинет директора',
          type: 'conditioner',
          floor: 1,
          room: 'Кабинет директора',
          status: 'on',
          position: { x: 20, y: 30 },
          parameters: { temperature: 23, mode: 'cool' },
          consumption: { current: 2.6, standby: 0.5, active: 2.6 },
        },
        {
          id: 3,
          name: 'Кондиционер Зал совещаний',
          type: 'conditioner',
          floor: 1,
          room: 'Зал совещаний',
          status: 'on',
          position: { x: 40, y: 30 },
          parameters: { temperature: 21, mode: 'cool' },
          consumption: { current: 3.2, standby: 0.4, active: 3.2 },
        },
        {
          id: 4,
          name: 'Кондиционер Общий офис',
          type: 'conditioner',
          floor: 1,
          room: 'Общий офис',
          status: 'on',
          position: { x: 20, y: 30 },
          parameters: { temperature: 23, mode: 'auto' },
          consumption: { current: 4.1, standby: 0.5, active: 4.1 },
        },

        // =============================================
        // СВЕТИЛЬНИКИ во всех помещениях
        // =============================================
        {
          id: 5,
          name: 'Светильник Приемная',
          type: 'light',
          floor: 1,
          room: 'Приемная',
          status: 'on',
          position: { x: 50, y: 20 },
          parameters: { brightness: 80, color: 'white' },
          consumption: { current: 0.6, standby: 0, active: 0.8 },
        },
        {
          id: 6,
          name: 'Светильник Кабинет директора',
          type: 'light',
          floor: 1,
          room: 'Кабинет директора',
          status: 'on',
          position: { x: 50, y: 20 },
          parameters: { brightness: 75, color: 'warm' },
          consumption: { current: 0.6, standby: 0, active: 0.8 },
        },
        {
          id: 7,
          name: 'Светильник Бухгалтерия',
          type: 'light',
          floor: 1,
          room: 'Бухгалтерия',
          status: 'on',
          position: { x: 50, y: 20 },
          parameters: { brightness: 90, color: 'cold' },
          consumption: { current: 0.9, standby: 0, active: 0.9 },
        },
        {
          id: 8,
          name: 'Светильник Зал совещаний',
          type: 'light',
          floor: 1,
          room: 'Зал совещаний',
          status: 'on',
          position: { x: 50, y: 20 },
          parameters: { brightness: 85, color: 'cold' },
          consumption: { current: 1.2, standby: 0, active: 1.2 },
        },
        {
          id: 9,
          name: 'Светильник Общий офис',
          type: 'light',
          floor: 1,
          room: 'Общий офис',
          status: 'on',
          position: { x: 50, y: 20 },
          parameters: { brightness: 80, color: 'cold' },
          consumption: { current: 1.6, standby: 0, active: 1.6 },
        },
        {
          id: 10,
          name: 'Светильник Серверная',
          type: 'light',
          floor: 1,
          room: 'Серверная',
          status: 'on',
          position: { x: 50, y: 20 },
          parameters: { brightness: 70, color: 'cold' },
          consumption: { current: 0.7, standby: 0, active: 0.7 },
        },
        {
          id: 11,
          name: 'Светильник Комната отдыха',
          type: 'light',
          floor: 1,
          room: 'Комната отдыха',
          status: 'on',
          position: { x: 60, y: 40 },
          parameters: { brightness: 60, color: 'warm' },
          consumption: { current: 0.7, standby: 0, active: 0.7 },
        },
        {
          id: 12,
          name: 'Светильник Санузлы',
          type: 'light',
          floor: 1,
          room: 'Санузлы',
          status: 'on',
          position: { x: 50, y: 20 },
          parameters: { brightness: 80, color: 'cold' },
          consumption: { current: 0.4, standby: 0, active: 0.4 },
        },
        {
          id: 13,
          name: 'Светильник Архив',
          type: 'light',
          floor: 1,
          room: 'Архив',
          status: 'on',
          position: { x: 50, y: 20 },
          parameters: { brightness: 75, color: 'cold' },
          consumption: { current: 0.6, standby: 0, active: 0.6 },
        },

        // =============================================
        // ДОПОЛНИТЕЛЬНЫЕ УСТРОЙСТВА
        // =============================================
        {
          id: 14,
          name: 'Телевизор Samsung Зал совещаний',
          type: 'tv',
          floor: 1,
          room: 'Зал совещаний',
          status: 'on',
          position: { x: 80, y: 40 },
          parameters: { channel: 1, volume: 30 },
          consumption: { current: 1.5, standby: 0.3, active: 1.5 },
        },
        {
          id: 15,
          name: 'Датчик температуры Общий офис',
          type: 'temperature_sensor',
          floor: 1,
          room: 'Общий офис',
          status: 'on',
          position: { x: 30, y: 70 },
          parameters: { current: 24, humidity: 45 },
          consumption: { current: 0.05, standby: 0, active: 0.05 },
        },
        {
          id: 16,
          name: 'Датчик присутствия Приемная',
          type: 'presence_sensor',
          floor: 1,
          room: 'Приемная',
          status: 'on',
          position: { x: 70, y: 70 },
          parameters: { detected: true, sensitivity: 'high' },
          consumption: { current: 0.05, standby: 0, active: 0.05 },
        },

        // Устройства на втором этаже (оставляем для будущего использования)
        {
          id: 21,
          name: 'Кондиционер LG',
          type: 'conditioner',
          floor: 2,
          status: 'off',
          position: { x: 40, y: 30 },
          parameters: { temperature: 23, mode: 'auto' },
          consumption: { current: 0, standby: 0.4, active: 2.5 },
        },
        {
          id: 22,
          name: 'Светильник Philips',
          type: 'light',
          floor: 2,
          status: 'off',
          position: { x: 60, y: 40 },
          parameters: { brightness: 70, color: 'warm' },
          consumption: { current: 0, standby: 0, active: 0.7 },
        },
      ],
      activeDeviceCount: 0,
      totalPowerConsumption: 0,
      deviceTypeFilters: ['all'],
      deviceTypes: [
        { id: 'all', name: 'Все типы' },
        { id: 'conditioner', name: 'Кондиционеры' },
        { id: 'light', name: 'Светильники' },
        { id: 'tv', name: 'Телевизоры' },
        { id: 'sensor', name: 'Датчики' },
      ],
    }
  },
  computed: {
    filteredDevices() {
      let devices = this.devices.filter((device) => device.floor === this.selectedFloor)

      if (!this.deviceTypeFilters.includes('all')) {
        devices = devices.filter((device) => {
          if (this.deviceTypeFilters.includes('sensor') && device.type.includes('sensor')) {
            return true
          }
          return this.deviceTypeFilters.includes(device.type)
        })
      }

      return devices
    },
    currentFloor() {
      return this.floors.find((f) => f.id === this.selectedFloor) || {}
    },
  },
  methods: {
    selectFloor(floorId) {
      this.selectedFloor = floorId
      this.selectedDevice = null
    },
    toggleDevice(deviceId) {
      const device = this.devices.find((d) => d.id === deviceId)
      if (device) {
        this.selectedDevice = { ...device }
      }
    },
    setDeviceStatus(deviceId, status) {
      const deviceIndex = this.devices.findIndex((d) => d.id === deviceId)
      if (deviceIndex !== -1) {
        this.devices[deviceIndex].status = status
        this.selectedDevice = { ...this.devices[deviceIndex] }
        this.updateStats()
      }
    },
    updateStats() {
      this.activeDeviceCount = this.devices.filter((d) => d.status === 'on').length
      this.totalPowerConsumption = this.devices.reduce((sum, device) => {
        let consumption = 0
        if (device.status === 'on') {
          consumption = device.consumption.active
        } else if (device.status === 'standby') {
          consumption = device.consumption.standby
        }
        return sum + consumption
      }, 0)
    },
    toggleFilter(type) {
      if (type === 'all') {
        this.deviceTypeFilters = ['all']
        return
      }

      // Удаляем 'all' если он присутствует и добавляем конкретный тип
      const allIndex = this.deviceTypeFilters.indexOf('all')
      if (allIndex > -1) {
        this.deviceTypeFilters.splice(allIndex, 1)
      }

      const typeIndex = this.deviceTypeFilters.indexOf(type)
      if (typeIndex > -1) {
        this.deviceTypeFilters.splice(typeIndex, 1)
        // Если фильтры пусты, добавляем 'all'
        if (this.deviceTypeFilters.length === 0) {
          this.deviceTypeFilters = ['all']
        }
      } else {
        this.deviceTypeFilters.push(type)
      }
    },
    getDeviceIcon(type) {
      switch (type) {
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
        default:
          return 'devices'
      }
    },
    getTypeName(type) {
      switch (type) {
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
        default:
          return 'Устройство'
      }
    },
    getStatusColor(status) {
      switch (status) {
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
    getStatusText(status) {
      switch (status) {
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
    hasStandbyMode(type) {
      return ['tv', 'conditioner'].includes(type)
    },
  },
  mounted() {
    this.updateStats()
  },
}
</script>

<template>
  <div>
    <!-- Основная панель управления -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- Левая колонка с этажами и статистикой -->
      <div class="lg:col-span-1">
        <!-- Выбор этажа -->
        <div class="card mb-6">
          <div class="card-header flex items-center gap-2">
            <span class="material-icons-outlined text-primary text-xl">location_on</span>
            <h2 class="text-lg font-semibold text-text-primary">Этажи</h2>
          </div>

          <div class="space-y-2 mt-2">
            <div
              v-for="floor in floors"
              :key="floor.id"
              @click="selectFloor(floor.id)"
              class="p-3 rounded-lg flex justify-between items-center cursor-pointer transition-all duration-300 shimmer-effect"
              :class="[
                selectedFloor === floor.id
                  ? 'bg-primary bg-opacity-20 border border-primary'
                  : 'bg-surface-dark border border-border-color hover:border-primary',
              ]"
            >
              <div class="flex items-center gap-2">
                <span
                  class="material-icons-outlined"
                  :class="selectedFloor === floor.id ? 'text-primary' : 'text-text-secondary'"
                  >apartment</span
                >
                <span
                  class="font-medium"
                  :class="selectedFloor === floor.id ? 'text-primary' : 'text-text-primary'"
                  >{{ floor.name }}</span
                >
              </div>
              <div class="text-xs px-2 py-1 rounded-full bg-surface text-text-secondary">
                {{ floor.deviceCount }} устр.
              </div>
            </div>
          </div>
        </div>

        <!-- Статистика -->
        <div class="card mb-6">
          <div class="card-header flex items-center gap-2">
            <span class="material-icons-outlined text-primary text-xl">insights</span>
            <h2 class="text-lg font-semibold text-text-primary">Статистика</h2>
          </div>

          <div class="space-y-4 mt-4">
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-full bg-primary bg-opacity-20">
                <span class="material-icons-outlined text-primary">devices</span>
              </div>
              <div>
                <div class="text-sm text-text-secondary">Всего устройств</div>
                <div class="text-xl font-semibold text-text-primary">
                  {{ devices.filter((d) => d.floor === selectedFloor).length }}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="p-3 rounded-full bg-success bg-opacity-20">
                <span class="material-icons-outlined text-success">power</span>
              </div>
              <div>
                <div class="text-sm text-text-secondary">Активные устройства</div>
                <div class="text-xl font-semibold text-text-primary">
                  {{ devices.filter((d) => d.floor === selectedFloor && d.status === 'on').length }}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="p-3 rounded-full bg-info bg-opacity-20">
                <span class="material-icons-outlined text-info">bolt</span>
              </div>
              <div>
                <div class="text-sm text-text-secondary">Текущая потребляемая мощность</div>
                <div class="text-xl font-semibold text-text-primary">
                  {{ totalPowerConsumption.toFixed(1) }} кВт
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Фильтры устройств -->
        <div class="card">
          <div class="card-header flex items-center gap-2">
            <span class="material-icons-outlined text-primary text-xl">filter_list</span>
            <h2 class="text-lg font-semibold text-text-primary">Фильтры</h2>
          </div>

          <div class="flex flex-wrap gap-2 mt-4">
            <button
              v-for="type in deviceTypes"
              :key="type.id"
              @click="toggleFilter(type.id)"
              class="px-3 py-2 text-sm rounded-lg border transition-all duration-200"
              :class="[
                deviceTypeFilters.includes(type.id)
                  ? 'bg-primary bg-opacity-20 border-primary text-primary'
                  : 'bg-surface-dark border-border-color text-text-secondary hover:border-primary',
              ]"
            >
              {{ type.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- Правая колонка с планом этажа и списком устройств -->
      <div class="lg:col-span-3">
        <!-- План этажа -->
        <div class="card mb-6">
          <div class="card-header flex justify-between items-center">
            <div class="flex items-center gap-2">
              <span class="material-icons-outlined text-primary text-xl">map</span>
              <h2 class="text-lg font-semibold text-text-primary">
                {{ currentFloor.name }}
              </h2>
            </div>
            <span class="badge badge-primary">{{ currentFloor.deviceCount }} устройств</span>
          </div>

          <!-- Новый компонент плана этажа -->
          <div class="mt-4 h-[500px]">
            <FloorPlanView
              :devices="filteredDevices"
              :selectedDevice="selectedDevice"
              @select-device="toggleDevice"
            />
          </div>
        </div>

        <!-- Список устройств и детальная информация -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Список доступных устройств -->
          <div class="card">
            <div class="card-header flex items-center gap-2">
              <span class="material-icons-outlined text-primary text-xl">devices</span>
              <h2 class="text-lg font-semibold text-text-primary">Устройства на этаже</h2>
            </div>

            <div class="mt-4 space-y-3 max-h-[350px] overflow-y-auto custom-scrollbar pr-2">
              <DeviceCard
                v-for="device in filteredDevices"
                :key="device.id"
                :name="device.name"
                :type="device.type"
                :status="device.status"
                :isActive="selectedDevice?.id === device.id"
                @click="toggleDevice(device.id)"
              />

              <div v-if="filteredDevices.length === 0" class="text-center py-4 text-text-secondary">
                Нет устройств, соответствующих фильтрам
              </div>
            </div>
          </div>

          <!-- Детали выбранного устройства -->
          <div class="card">
            <div class="card-header flex items-center gap-2">
              <span class="material-icons-outlined text-primary text-xl">settings</span>
              <h2 class="text-lg font-semibold text-text-primary">Управление устройством</h2>
            </div>

            <div
              v-if="selectedDevice"
              class="mt-4 animate-fadeIn max-h-[350px] overflow-y-auto custom-scrollbar pr-2"
            >
              <DetailCard
                :title="selectedDevice.name"
                :subtitle="`ID: ${selectedDevice.id} | ${getTypeName(selectedDevice.type)}`"
                :icon="getDeviceIcon(selectedDevice.type)"
                :status="selectedDevice.status"
              >
                <!-- Кнопки управления -->
                <div class="flex gap-2 mb-4 mt-3">
                  <button
                    @click="setDeviceStatus(selectedDevice.id, 'on')"
                    class="flex-1 py-2 rounded-lg text-white font-medium flex items-center justify-center gap-1 transition-all duration-200 shadow-sm"
                    :class="[
                      selectedDevice.status === 'on'
                        ? 'bg-success'
                        : 'bg-success bg-opacity-70 hover:bg-success',
                    ]"
                  >
                    <span class="material-icons-outlined text-sm">power_settings_new</span>
                    Включить
                  </button>
                  <button
                    v-if="hasStandbyMode(selectedDevice.type)"
                    @click="setDeviceStatus(selectedDevice.id, 'standby')"
                    class="flex-1 py-2 rounded-lg text-white font-medium flex items-center justify-center gap-1 transition-all duration-200 shadow-sm"
                    :class="[
                      selectedDevice.status === 'standby'
                        ? 'bg-warning'
                        : 'bg-warning bg-opacity-70 hover:bg-warning',
                    ]"
                  >
                    <span class="material-icons-outlined text-sm">power</span>
                    Режим ожидания
                  </button>
                  <button
                    @click="setDeviceStatus(selectedDevice.id, 'off')"
                    class="flex-1 py-2 rounded-lg text-white font-medium flex items-center justify-center gap-1 transition-all duration-200 shadow-sm"
                    :class="[
                      selectedDevice.status === 'off'
                        ? 'bg-danger'
                        : 'bg-danger bg-opacity-70 hover:bg-danger',
                    ]"
                  >
                    <span class="material-icons-outlined text-sm">power_off</span>
                    Выключить
                  </button>
                </div>

                <!-- Характеристики устройства -->
                <div class="border border-border-color rounded-lg p-4 bg-surface-dark">
                  <h4 class="font-medium mb-3 text-text-primary">Характеристики</h4>

                  <div class="space-y-3">
                    <!-- Показываем разные характеристики в зависимости от типа устройства -->
                    <template v-if="selectedDevice.type === 'conditioner'">
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Заданная температура</span>
                        <span class="font-medium text-text-primary"
                          >{{ selectedDevice.parameters.temperature }}°C</span
                        >
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Режим работы</span>
                        <span class="font-medium text-text-primary">{{
                          selectedDevice.parameters.mode === 'cool'
                            ? 'Охлаждение'
                            : selectedDevice.parameters.mode === 'heat'
                              ? 'Обогрев'
                              : selectedDevice.parameters.mode === 'fan'
                                ? 'Вентиляция'
                                : 'Авто'
                        }}</span>
                      </div>
                    </template>

                    <template v-else-if="selectedDevice.type === 'light'">
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Яркость</span>
                        <span class="font-medium text-text-primary"
                          >{{ selectedDevice.parameters.brightness }}%</span
                        >
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Цветовая температура</span>
                        <span class="font-medium text-text-primary">{{
                          selectedDevice.parameters.color === 'warm'
                            ? 'Теплый'
                            : selectedDevice.parameters.color === 'cold'
                              ? 'Холодный'
                              : 'Нейтральный'
                        }}</span>
                      </div>
                    </template>

                    <template v-else-if="selectedDevice.type === 'tv'">
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Канал</span>
                        <span class="font-medium text-text-primary">{{
                          selectedDevice.parameters.channel
                        }}</span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Громкость</span>
                        <span class="font-medium text-text-primary"
                          >{{ selectedDevice.parameters.volume }}%</span
                        >
                      </div>
                    </template>

                    <template v-else-if="selectedDevice.type === 'temperature_sensor'">
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Текущая температура</span>
                        <span class="font-medium text-text-primary"
                          >{{ selectedDevice.parameters.current }}°C</span
                        >
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Текущая влажность</span>
                        <span class="font-medium text-text-primary"
                          >{{ selectedDevice.parameters.humidity }}%</span
                        >
                      </div>
                    </template>

                    <template v-else-if="selectedDevice.type === 'presence_sensor'">
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Обнаружение</span>
                        <span class="font-medium text-text-primary">{{
                          selectedDevice.parameters.detected ? 'Да' : 'Нет'
                        }}</span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Чувствительность</span>
                        <span class="font-medium text-text-primary">{{
                          selectedDevice.parameters.sensitivity === 'high'
                            ? 'Высокая'
                            : selectedDevice.parameters.sensitivity === 'medium'
                              ? 'Средняя'
                              : 'Низкая'
                        }}</span>
                      </div>
                    </template>

                    <!-- Энергопотребление для всех устройств -->
                    <div class="pt-2 mt-2 border-t border-border-color">
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Потребление (активное)</span>
                        <span class="font-medium text-text-primary"
                          >{{ selectedDevice.consumption.active }} кВт</span
                        >
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-text-secondary">Потребление (ожидание)</span>
                        <span class="font-medium text-text-primary"
                          >{{ selectedDevice.consumption.standby }} кВт</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </DetailCard>
            </div>

            <div v-else class="flex flex-col items-center justify-center h-64 text-text-secondary">
              <span class="material-icons-outlined text-4xl mb-4">devices</span>
              <p>Выберите устройство для управления</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
