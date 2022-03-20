<template>
  <div class="main-container pt-40 xs:pt-24">
    <div class="vision__heading mx-auto">
      <p class="tag--sm text-center">Computer Vision</p>
      <p style="max-width: 950px" class="mt-4 heading-2 text-center mx-auto">
        Интеграция с системами машинного зрения для отслеживания продукции на
        конвейере
      </p>
      <p style="max-width: 900px" class="mt-6 subtext text-center mx-auto">
        Дайте своим приложениям силу видения. Используйте возможности
        компьютерного зрения, чтобы направлять, измерять и улучшать свои
        операции.
      </p>
      <ChooseCategories
        :categories="categories"
        :currentCategory="currentCategory"
        class="mt-8 xs:hidden"
        @updateCategory="updateCategory"
      />
    </div>
    <div
      class="
        mt-16
        md:mt-8
        xs:hidden
        bg-light-2
        rounded-32
        px-24
        smd:px-6
        md:pr-14
        flex
        justify-between
        items-center
        overflow-hidden
        relative
      "
    >
      <AnimatedText
        :text="texts[currentCategory]"
        :special="currentCategory === 1"
        class="py-24"
        :class="`vision__text-${currentCategory}`"
      />
      <ImageOne
        v-if="currentCategory === 0"
        class="absolute -right-16 md:-right-24 smd:-right-48 top-6"
      />
      <ImageTwo v-if="currentCategory === 1" />
    </div>
    <div class="mt-16 hidden xs:block -mx-6 bg-light-2 py-16 overflow-hidden">
      <ImageOne />
      <AnimatedText :text="texts[0]" class="px-6" />
      <ImageTwo class="mt-14" />
      <AnimatedText
        :text="texts[1]"
        class="px-6 mt-16 max-w-2xl mx-auto"
        special
      />
    </div>
  </div>
</template>

<script>
import ImageOne from "@/components/index/computerVision/ImageOne";
import ImageTwo from "@/components/index/computerVision/ImageTwo";

export default {
  name: "ComputerVision",
  components: { ImageOne, ImageTwo },
  data() {
    return {
      currentCategory: 0,
      categories: ["Первый шаг", "Второй шаг"],
      texts: [
        {
          tag: "Шаг первый",
          title: "Повысьте точность и качество операций",
          paragraph:
            "Используйте недорогие стандартные камеры для отслеживания объектов и движений в ваших процессах",
        },
        {
          tag: "Шаг второй",
          title:
            "Получите представление о производстве и отслеживайте продукты",
        },
      ],
    };
  },
  methods: {
    updateCategory(value) {
      this.currentCategory = value;
    },
  },
};
</script>

<style lang="scss">
.vision {
  &__heading {
    max-width: 931px;
    @media (max-width: 1024px) {
      max-width: 800px;
    }
  }
  &__text-0 {
    max-width: 375px;
  }
  &__text-1 {
    max-width: 413px;
  }
}
</style>