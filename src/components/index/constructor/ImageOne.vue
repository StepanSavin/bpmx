<template>
  <div ref="imageContainer" class="grid grid-cols-2 gap-4">
    <div
      v-for="n in 4"
      :key="n"
      class="
        w-32
        h-32
        bg-white
        rounded-32
        transform
        flex
        justify-center
        items-center
        constructor-icon
      "
      :class="[
        `constructor-icon-${n}`,
        { 'translate-y-48 opacity-0': !isVisible },
        { 'justify-self-end': n === 1 || n === 3 },
      ]"
    >
      <LazyImage
        width="64"
        height="64"
        :src="`index/constructor/constructor-${n}.svg`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageOne",
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
.constructor-icon {
  transition: all 0.6s cubic-bezier(0, 0.31, 0, 1.22);
  &-1 {
    transition-delay: 80ms !important;
  }
  &-2 {
    transition-delay: 160ms !important;
  }
  &-3 {
    transition-delay: 240ms !important;
  }
  &-4 {
    transition-delay: 320ms !important;
  }
}
</style>