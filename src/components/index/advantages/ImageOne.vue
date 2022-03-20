<template>
  <div ref="imageContainer" class="relative">
    <LazyImage
      width="310"
      height="300"
      src="index/advantages/advantages-image-1.svg"
      class="advantages-image-1"
      :class="{ 'advantages-invisible': !isVisible }"
    />
    <LazyImage
      width="205"
      height="97"
      src="index/advantages/advantages-icon-1.svg"
      class="absolute -top-4 left-4 xs:w-40 advantages-icon-1"
      :class="{ 'advantages-invisible': !isVisible }"
    />
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
.advantages-invisible.advantages {
  &-image-1 {
    transform: translateX(-200px);
    opacity: 0;
  }
  &-icon-1 {
    transform: translateX(200px);
    opacity: 0;
  }
}
.advantages{
    &-image-1{
        transition: all .8s cubic-bezier(.17,.67,.19,1.22);
    }
    &-icon-1{
        transition: all .8s cubic-bezier(.17,.67,.19,1.22);
    }
}
</style>