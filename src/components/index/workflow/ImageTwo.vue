<template>
  <div
    ref="imageContainer"
    style="max-width: 330px"
    class="flex flex-col items-start"
  >
    <div class="flex gap-4 relative pl-8">
      <LazyImage
        v-for="n in 3"
        :key="n"
        width="56"
        height="56"
        :src="`index/workflow/workflow-icon-${n}.png`"
        class="relative z-1"
        :class="[
          { 'workflow-icon-invisible': !isVisible },
          `workflow-icon-${n}`,
        ]"
      />
      <div
        class="
          absolute
          transform
          h-1
          left-8
          right-0
          bg-white
          top-0
          bottom-0
          my-auto
          workflow-line
          origin-left
        "
        :class="{ 'scale-x-0': !isVisible }"
      ></div>
    </div>
    <div class="mt-8 flex gap-4 items-end">
      <div
        class="
          bg-white
          p-4
          pr-8
          text-sm
          leading-5
          rounded-t-16 rounded-l16
          transform
          workflow-message
        "
        :class="{ 'translate-x-52 opacity-0': !isVisible }"
      >
        Ваш заказ доставлен в пункт<br />
        выдачи. ул. Грибоедова 12.
      </div>
      <LazyImage
        width="56"
        height="56"
        src="index/workflow/workflow-icon-4.png"
        class="workflow-icon-4 transform"
        :class="{ 'translate-x-52 opacity-0': !isVisible }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageTwo",
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
.workflow {
  &-message {
    transition: transform 0.4s ease, opacity 1s ease;
    transition-delay: 500ms;
  }
  &-icon-4 {
    transition: all 1s cubic-bezier(0.17, 0.67, 0.21, 1.27);
  }
  &-icon-invisible {
    transform: translateY(-200px);
    opacity: 0;
  }
  &-icon-1,
  &-icon-2,
  &-icon-3 {
    transition: all 0.7s cubic-bezier(.16,.77,.18,1.38);
  }
  &-icon-2 {
    transition-delay: 150ms;
  }
  &-icon-3 {
    transition-delay: 300ms;
  }
  &-line {
    transition: all 1s;
    transition-delay: 1s;
  }
}
</style>