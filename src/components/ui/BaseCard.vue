<template>
  <div
    class="card"
    :class="[
      hover ? 'card-hover' : '',
      shimmer ? 'shimmer-effect' : '',
      glassEffect ? 'glass' : '',
      className,
    ]"
  >
    <div v-if="title" class="card-header flex items-center gap-2">
      <span v-if="icon" class="material-icons-outlined text-primary text-xl">{{ icon }}</span>
      <h2 class="text-lg font-semibold text-text-primary">{{ title }}</h2>
      <slot name="header-right"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    hover: {
      type: Boolean,
      default: false,
    },
    shimmer: {
      type: Boolean,
      default: false,
    },
    glassEffect: {
      type: Boolean,
      default: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.card {
  animation: cardAppear 0.4s ease-out;
}

@keyframes cardAppear {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
