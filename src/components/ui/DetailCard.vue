<template>
  <div class="detail-card">
    <div v-if="title" class="mb-4 pb-2 border-b border-border-color">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div 
            class="p-3 rounded-lg"
            :class="{
              'bg-success bg-opacity-10 text-success': status === 'on',
              'bg-danger bg-opacity-10 text-danger': status === 'off',
              'bg-warning bg-opacity-10 text-warning': status === 'standby'
            }"
          >
            <span class="material-icons-outlined">{{ icon }}</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-text-primary">{{ title }}</h3>
            <p v-if="subtitle" class="text-sm text-text-secondary">{{ subtitle }}</p>
          </div>
        </div>

        <div 
          v-if="status" 
          class="px-3 py-1 rounded-lg text-sm font-medium"
          :class="{
            'bg-success bg-opacity-10 text-success': status === 'on',
            'bg-danger bg-opacity-10 text-danger': status === 'off',
            'bg-warning bg-opacity-10 text-warning': status === 'standby'
          }"
        >
          {{ statusText }}
        </div>
      </div>
    </div>

    <div>
      <slot />
    </div>

    <div v-if="$slots.footer" class="mt-4 pt-4 border-t border-border-color">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: '',
      validator: value => ['', 'on', 'off', 'standby'].includes(value)
    }
  },
  computed: {
    statusText() {
      switch (this.status) {
        case 'on': return 'Включено'
        case 'off': return 'Выключено'
        case 'standby': return 'Ожидание'
        default: return ''
      }
    }
  }
}
</script>

<style scoped>
/* Дополнительные стили */
</style> 