<template>
  <div class="xs:flex xs:items-center flex-col xs:bg-light-2 relative z-1">
    <transition name="text-appear">
      <div :key="text.tag">
        <p
          class="text-sm leading-6 text-blue font-medium"
          :class="{ 'xs:text-center': !special }"
        >
          {{ text.tag }}
        </p>
        <p class="mt-2 heading-3" :class="{ 'xs:text-center': !special }">
          {{ text.title }}
        </p>
        <p v-if="!special" class="mt-4 subtext--base xs:text-center">
          {{ text.paragraph }}
        </p>
        <template v-else>
          <p class="text-gray mt-4 leading-5 pl-4 integration__paragraph">
            Отслеживайте движение, размещение рук, действия оператора и объекты,
            используемые в процессе сборки.
          </p>
          <p class="text-gray mt-3 leading-5 pl-4 integration__paragraph">
            Pick-to-Light или отслеживании заказов.
          </p>
          <p class="text-gray mt-3 leading-6 pl-4 integration__paragraph">
            Автоматический сбор данных для документирования и отслеживания.
          </p>
        </template>
      </div>
    </transition>
    <UiButton
      buttonHeight="md"
      class="w-40 mt-8 xs:text-center rounded-12"
      @click.native="$store.commit('setContactModal', true)"
    >
      Попробовать
    </UiButton>
  </div>
</template>

<script>
export default {
  name: "AnimatiedText",
  props: {
    text: {
      type: Object,
      default: () => ({}),
    },
    special: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.text-appear-leave-active {
  transition: all 0s;
}
.text-appear-leave {
  opacity: 0;
  position: absolute;
}
.text-appear-enter {
  opacity: 0;
}
.text-appear-enter-active {
  transition: all 0.9s;
}
</style>