<template>
  <div class="main-container pt-40 xs:pt-24">
    <p class="tag--sm text-center">
      обмен данными с любым программным обеспечением
    </p>
    <p style="max-width: 700px" class="mt-4 heading-2 text-center mx-auto">
      Интеграция с внешними системами через API
    </p>
    <p style="max-width: 700px" class="mt-6 subtext text-center mx-auto">
      Используйте Webhooks и REST API для обмена данными с внешним программным
      обеспечением и оборудованием.
    </p>
    <ChooseCategories
      :categories="categories"
      :currentCategory="currentCategory"
      class="mt-8 xs:hidden"
      @updateCategory="updateCategory"
    />
    <div
      class="
        mt-16
        px-24
        md:pr-20
        py-20
        md:py-16
        smd:px-6
        bg-light-2
        rounded-32
        flex
        justify-between
        items-center
        overflow-hidden
        xs:hidden
      "
    >
      <AnimatedText
        :text="texts[currentCategory]"
        :class="`datasharing-text-${currentCategory}`"
      />
      <ImageOne v-if="currentCategory === 0" />
      <ImageTwo v-if="currentCategory === 1" />
    </div>
    <div class="mt-12 py-14 -mx-6 hidden xs:block bg-light-2">
      <ImageOne class="mx-auto" />
      <AnimatedText :text="texts[0]" class="px-6 mt-14" />
      <ImageTwo class="mx-auto mt-28" />
      <AnimatedText :text="texts[1]" class="px-6 mt-20" />
    </div>
  </div>
</template>

<script>
import ImageOne from "@/components/index/datasharing/ImageOne";
import ImageTwo from "@/components/index/datasharing/ImageTwo";

export default {
  name: "DataSharing",
  components: { ImageOne, ImageTwo },
  data() {
    return {
      currentCategory: 0,
      categories: ["Простота интеграции", "Отличная документация "],
      texts: [
        {
          tag: "Соединяйте вместе разрозненные корпоративные системы",
          title: "Быстрая интеграция с любыми системами и оборудованием",
          paragraph:
            "Если подключаемые системы имеют API или другие возможности для подключения, то подключение к BPMx займет совсем немного времени.",
        },
        {
          tag: "Хорошо задукоментированное описание процесса",
          title: "Мы подготовили описание процесса, примеры, тесты и песочницу",
          paragraph:
            "Качественная документация - это очень важно для скорости внедрения продукта.",
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
.datasharing-text {
  &-0 {
    max-width: 436px;
  }
  &-1 {
    max-width: 477px;
  }
}
</style>