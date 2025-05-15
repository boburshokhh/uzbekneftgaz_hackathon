<template>
  <div>
    <!-- Хедер страницы -->
    <div class="mb-6 flex flex-col md:flex-row gap-4 md:items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-text-primary">Редактор сценариев</h1>
        <p class="text-text-secondary mt-1">
          Создание и управление автоматическими сценариями работы устройств
        </p>
      </div>

      <div>
        <button class="btn btn-primary flex items-center gap-2 shadow-lg">
          <span class="material-icons-outlined">add</span>
          Создать сценарий
        </button>
      </div>
    </div>

    <!-- Активные сценарии -->
    <div class="card mb-6">
      <div class="card-header flex items-center gap-2">
        <span class="material-icons-outlined text-primary text-xl">bolt</span>
        <h2 class="text-lg font-semibold text-text-primary">Активные сценарии</h2>
      </div>

      <div class="space-y-4">
        <!-- Сценарий 1 -->
        <div class="border border-border-color rounded-lg p-4 bg-surface card-hover scenario-item">
          <div class="flex justify-between">
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-lg bg-primary bg-opacity-10">
                <span class="material-icons-outlined text-primary">thermostat</span>
              </div>
              <div>
                <h3 class="font-medium text-text-primary">Температурный контроль</h3>
                <p class="text-sm text-text-secondary mt-1">
                  Автоматическое управление кондиционером в зависимости от температуры в помещении
                </p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="form-switch inline-block align-middle">
                <input
                  type="checkbox"
                  name="toggle-1"
                  id="toggle-1"
                  class="form-switch-checkbox"
                  checked
                />
                <label class="form-switch-label" for="toggle-1"></label>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div
              class="bg-surface-dark rounded-lg p-3 border border-border-color border-opacity-50"
            >
              <h4 class="text-xs font-medium text-text-secondary mb-2 flex items-center gap-1">
                <span class="material-icons-outlined text-xs">filter_alt</span>
                Условия
              </h4>
              <ul class="text-sm space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Температура > 25°C</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Присутствие в помещении</span>
                </li>
              </ul>
            </div>

            <div
              class="bg-surface-dark rounded-lg p-3 border border-border-color border-opacity-50"
            >
              <h4 class="text-xs font-medium text-text-secondary mb-2 flex items-center gap-1">
                <span class="material-icons-outlined text-xs">play_arrow</span>
                Действия
              </h4>
              <ul class="text-sm space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Включить кондиционер</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Установить температуру 22°C</span>
                </li>
              </ul>
            </div>

            <div
              class="bg-surface-dark rounded-lg p-3 border border-border-color border-opacity-50"
            >
              <h4 class="text-xs font-medium text-text-secondary mb-2 flex items-center gap-1">
                <span class="material-icons-outlined text-xs">schedule</span>
                Расписание
              </h4>
              <ul class="text-sm space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Все дни недели</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>8:00 - 22:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex justify-end gap-2 mt-4">
            <button
              class="p-2 rounded-lg text-text-secondary hover:bg-surface-dark transition-colors"
            >
              <span class="material-icons-outlined">edit</span>
            </button>
            <button
              class="p-2 rounded-lg text-text-secondary hover:bg-surface-dark transition-colors"
            >
              <span class="material-icons-outlined">content_copy</span>
            </button>
            <button
              class="p-2 rounded-lg text-danger hover:bg-danger hover:bg-opacity-10 transition-colors"
            >
              <span class="material-icons-outlined">delete</span>
            </button>
          </div>
        </div>

        <!-- Сценарий 2 -->
        <div class="border border-border-color rounded-lg p-4 bg-surface card-hover scenario-item">
          <div class="flex justify-between">
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-lg bg-warning bg-opacity-10">
                <span class="material-icons-outlined text-warning">lightbulb</span>
              </div>
              <div>
                <h3 class="font-medium text-text-primary">Автоматическое освещение</h3>
                <p class="text-sm text-text-secondary mt-1">
                  Управление светом в зависимости от присутствия и уровня освещенности
                </p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="form-switch inline-block align-middle">
                <input
                  type="checkbox"
                  name="toggle-2"
                  id="toggle-2"
                  class="form-switch-checkbox"
                  checked
                />
                <label class="form-switch-label" for="toggle-2"></label>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div
              class="bg-surface-dark rounded-lg p-3 border border-border-color border-opacity-50"
            >
              <h4 class="text-xs font-medium text-text-secondary mb-2 flex items-center gap-1">
                <span class="material-icons-outlined text-xs">filter_alt</span>
                Условия
              </h4>
              <ul class="text-sm space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Присутствие в помещении</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Освещенность < 200 лк</span>
                </li>
              </ul>
            </div>

            <div
              class="bg-surface-dark rounded-lg p-3 border border-border-color border-opacity-50"
            >
              <h4 class="text-xs font-medium text-text-secondary mb-2 flex items-center gap-1">
                <span class="material-icons-outlined text-xs">play_arrow</span>
                Действия
              </h4>
              <ul class="text-sm space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Включить освещение</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Установить яркость 70%</span>
                </li>
              </ul>
            </div>

            <div
              class="bg-surface-dark rounded-lg p-3 border border-border-color border-opacity-50"
            >
              <h4 class="text-xs font-medium text-text-secondary mb-2 flex items-center gap-1">
                <span class="material-icons-outlined text-xs">schedule</span>
                Расписание
              </h4>
              <ul class="text-sm space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Все дни недели</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Круглосуточно</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex justify-end gap-2 mt-4">
            <button
              class="p-2 rounded-lg text-text-secondary hover:bg-surface-dark transition-colors"
            >
              <span class="material-icons-outlined">edit</span>
            </button>
            <button
              class="p-2 rounded-lg text-text-secondary hover:bg-surface-dark transition-colors"
            >
              <span class="material-icons-outlined">content_copy</span>
            </button>
            <button
              class="p-2 rounded-lg text-danger hover:bg-danger hover:bg-opacity-10 transition-colors"
            >
              <span class="material-icons-outlined">delete</span>
            </button>
          </div>
        </div>

        <!-- Сценарий 3 -->
        <div class="border border-border-color rounded-lg p-4 bg-surface card-hover scenario-item">
          <div class="flex justify-between">
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-lg bg-info bg-opacity-10">
                <span class="material-icons-outlined text-info">nightlight</span>
              </div>
              <div>
                <h3 class="font-medium text-text-primary">Ночной режим</h3>
                <p class="text-sm text-text-secondary mt-1">
                  Отключение неприоритетных устройств в ночное время при отсутствии людей
                </p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="form-switch inline-block align-middle">
                <input
                  type="checkbox"
                  name="toggle-3"
                  id="toggle-3"
                  class="form-switch-checkbox"
                  checked
                />
                <label class="form-switch-label" for="toggle-3"></label>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div class="bg-surface-dark rounded-lg p-3">
              <h4 class="text-xs font-medium text-text-secondary mb-2">Условия</h4>
              <ul class="text-sm space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Время между 23:00 и 6:00</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Отсутствие в помещении</span>
                </li>
              </ul>
            </div>

            <div class="bg-surface-dark rounded-lg p-3">
              <h4 class="text-xs font-medium text-text-secondary mb-2">Действия</h4>
              <ul class="text-sm space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Выключить телевизор</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Выключить свет</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Установить кондиционер на 25°C</span>
                </li>
              </ul>
            </div>

            <div class="bg-surface-dark rounded-lg p-3">
              <h4 class="text-xs font-medium text-text-secondary mb-2">Расписание</h4>
              <ul class="text-sm space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>Все дни недели</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="material-icons-outlined text-xs text-primary mt-0.5"
                    >chevron_right</span
                  >
                  <span>23:00 - 6:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex justify-end gap-2 mt-4">
            <button
              class="p-2 rounded-lg text-text-secondary hover:bg-surface-dark transition-colors"
            >
              <span class="material-icons-outlined">edit</span>
            </button>
            <button
              class="p-2 rounded-lg text-text-secondary hover:bg-surface-dark transition-colors"
            >
              <span class="material-icons-outlined">content_copy</span>
            </button>
            <button
              class="p-2 rounded-lg text-danger hover:bg-danger hover:bg-opacity-10 transition-colors"
            >
              <span class="material-icons-outlined">delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Шаблоны сценариев -->
    <div class="card mb-6">
      <div class="card-header flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="material-icons-outlined text-primary text-xl">library_books</span>
          <h2 class="text-lg font-semibold text-text-primary">Шаблоны сценариев</h2>
        </div>
        <span class="text-text-secondary text-sm">Быстрое создание типовых сценариев</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="border border-border-color rounded-lg p-4 bg-surface card-hover scenario-item">
          <div class="flex items-start gap-3">
            <div class="p-2 rounded-lg bg-success bg-opacity-10">
              <span class="material-icons-outlined text-success">auto_fix_high</span>
            </div>
            <div>
              <h3 class="font-medium text-text-primary">Экономия энергии</h3>
              <p class="text-sm text-text-secondary mt-1">
                Автоматическое отключение устройств при отсутствии людей
              </p>
            </div>
          </div>
          <button
            class="mt-4 w-full py-2 bg-success bg-opacity-10 text-success rounded-lg text-sm hover:bg-success hover:text-white transition-colors"
          >
            Использовать шаблон
          </button>
        </div>

        <div class="border border-border-color rounded-lg p-4 bg-surface card-hover scenario-item">
          <div class="flex items-start gap-3">
            <div class="p-2 rounded-lg bg-primary bg-opacity-10">
              <span class="material-icons-outlined text-primary">schedule</span>
            </div>
            <div>
              <h3 class="font-medium text-text-primary">Рабочее расписание</h3>
              <p class="text-sm text-text-secondary mt-1">
                Управление устройствами по рабочему расписанию офиса
              </p>
            </div>
          </div>
          <button
            class="mt-4 w-full py-2 bg-primary bg-opacity-10 text-primary rounded-lg text-sm hover:bg-primary hover:text-white transition-colors"
          >
            Использовать шаблон
          </button>
        </div>

        <div class="border border-border-color rounded-lg p-4 bg-surface card-hover scenario-item">
          <div class="flex items-start gap-3">
            <div class="p-2 rounded-lg bg-warning bg-opacity-10">
              <span class="material-icons-outlined text-warning">thermostat</span>
            </div>
            <div>
              <h3 class="font-medium text-text-primary">Климат-контроль</h3>
              <p class="text-sm text-text-secondary mt-1">
                Поддержание оптимального микроклимата в помещении
              </p>
            </div>
          </div>
          <button
            class="mt-4 w-full py-2 bg-warning bg-opacity-10 text-warning rounded-lg text-sm hover:bg-warning hover:text-white transition-colors"
          >
            Использовать шаблон
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScenariosView',
}
</script>

<style scoped>
/* Стили для переключателей */
.form-switch {
  position: relative;
}

.form-switch-checkbox {
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
}

.form-switch-label {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  cursor: pointer;
  background-color: var(--bs-disabled-bg);
  border-radius: 20px;
  transition: background-color 0.2s;
}

.form-switch-checkbox:checked + .form-switch-label {
  background-color: var(--primary);
}

.form-switch-label::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.2s;
}

.form-switch-checkbox:checked + .form-switch-label::after {
  transform: translateX(20px);
}

/* Стили для карточек сценариев */
.scenario-item {
  background-image: linear-gradient(
    135deg,
    rgba(11, 17, 54, 0.85) 0%,
    rgba(23, 31, 78, 0.6) 50%,
    rgba(16, 20, 45, 0.7) 100%
  );
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  animation: cardAppear 0.4s ease-out;
}

.scenario-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-color: rgba(59, 130, 246, 0.3);
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
