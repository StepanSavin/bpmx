<template>
  <div
    ref="imageContainer"
    style="max-width: 330px"
    class="flex flex-col items-center"
  >
    <div
      class="
        bg-white
        rounded-16
        flex
        p-4
        gap-2
        relative
        overflow-hidden
        constructor-uibutton-container
      "
      :class="{ 'opacity-0': !isVisible }"
    >
      <UiButton
        v-for="n in 4"
        :key="n"
        buttonHeight="sm"
        :colorType="n === 3 ? 'blue' : 'light'"
        class="w-10 rounded-8 transform constructor-uibutton"
        :class="[`constructor-uibutton-${n}`, { 'translate-x-52': !isVisible }]"
      >
        {{ n + 12 }}
      </UiButton>
      <LazyImage
        width="24"
        height="24"
        src="index/constructor/constructor-arrow.svg"
        class="absolute -bottom-3 -right-14 constructor-arrow"
        :class="{ 'opacity-0': !isVisible }"
      />
    </div>
    <div class="mt-8 gap-4 items-end flex">
      <div
        class="
          bg-white
          p-4
          pr-8
          text-sm
          leading-5
          rounded-t-16 rounded-l-16
          constructor-message
          transform
        "
        :class="{ 'translate-x-52 opacity-0': !isVisible }"
      >
        Вы записаны к стоматологу, <br />
        15 февраля 10:00.
      </div>
      <LazyImage
        width="56"
        height="56"
        src="index/constructor/constructor-people-1.png"
        class="constructor-people-1 transform"
        :class="{ 'translate-x-52 opacity-0': !isVisible }"
      />
    </div>
    <div class="mt-8 flex">
      <LazyImage
        width="56"
        height="56"
        src="index/constructor/constructor-people-2.png"
        class="constructor-people-2 transform"
        :class="{ 'translate-y-52 opacity-0': !isVisible }"
      />
      <LazyImage
        width="56"
        height="56"
        src="index/constructor/constructor-people-3.png"
        class="relative -left-4 constructor-people-3 transform"
        :class="{ 'translate-y-52 opacity-0': !isVisible }"
      />
      <LazyImage
        width="56"
        height="56"
        src="index/constructor/constructor-checkmark.png"
        class="constructor-checkmark transform"
        :class="{ 'translate-y-52 opacity-0': !isVisible }"
      />
    </div>
  </div>
</template>



<script>
export default {
  name: "ImageThree",
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          this.isVisible = true;
          observer.unobserve(this.$refs.imageContainer);
        }
      },
      {
        threshold: 0.7,
      }
    );
    observer.observe(this.$refs.imageContainer);
  },
};
</script>

<style lang="scss">
.constructor-uibutton {
  &-container {
    transition: all 1s;
  }
  transition: all 1s ease;
  &-1 {
    transition-delay: 200ms;
  }
  &-2 {
    transition-delay: 300ms;
  }
  &-3 {
    transition-delay: 400ms;
  }
  &-4 {
    transition-delay: 500ms;
  }
}
.constructor {
  &-message {
    transition: transform 0.4s ease, opacity 1s ease;
    transition-delay: 500ms;
  }
  &-people-1 {
    transition: all 1s ease;
  }
  &-people-2 {
    transition: transform 0.6s cubic-bezier(0, 0.62, 0.39, 1.14);
    transition-delay: 100ms;
  }
  &-people-3 {
    transition: transform 0.6s cubic-bezier(0, 0.62, 0.39, 1.14);
    transition-delay: 200ms;
  }
  &-checkmark {
    transition: transform 0.6s cubic-bezier(0, 0.62, 0.39, 1.14);
    transition-delay: 300ms;
  }
}
</style>