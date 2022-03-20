<template>
  <div class="main-container pt-40 xs:pt-24">
    <p class="tag--sm text-center">
      Ядро для связи разнородного софта и оборудования
    </p>
    <p style="max-width: 700px" class="mt-4 heading-2 text-center mx-auto">
      Шина данных для связи систем вашего бизнеса
    </p>
    <p style="max-width: 700px" class="mt-6 subtext text-center mx-auto">
      Не обязательно перекладывать все процессы в платформу BPMx. Платформа
      позволяет связать между собой множество разнородных систем и оборудования
      через специальные коннекторы данных.
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
        flex
        justify-between
        bg-light-2
        py-20
        px-24
        smd:px-6
        rounded-32
        items-center
        overflow-hidden
        xs:hidden
      "
    >
      <AnimatedText
        :text="texts[currentCategory]"
        :class="`softcore__text-${currentCategory}`"
      />
      <ImageOne v-if="currentCategory === 0" />
      <ImageTwo v-if="currentCategory === 1" />
    </div>
    <div
      class="-mx-6 bg-light-2 pt-14 pb-16 hidden xs:block mt-12 overflow-hidden"
    >
      <ImageOneXs class="mx-auto" />
      <AnimatedText :text="texts[0]" class="mt-14 px-6" />
      <ImageTwo class="mx-auto mt-24" />
      <AnimatedText :text="texts[1]" class="mt-20 px-6" />
    </div>
  </div>
</template>

<script>
import ImageOne from "@/components/index/softcore/ImageOne";
import ImageOneXs from "@/components/index/softcore/ImageOneXs";
import ImageTwo from "@/components/index/softcore/ImageTwo";

export default {
  name: "SoftCore",
  components: { ImageOne, ImageOneXs, ImageTwo },
  data() {
    return {
      currentCategory: 0,
      categories: [
        "Подключения через API",
        "Интеграции с порпоративными системами",
      ],
      texts: [
        {
          tag: "Коннекторы API",
          title: "Подключайтесь к чему угодно с помощью API",
          paragraph:
            "Подключение через REST или GraphQL API позволяет делать интеграции любой сложности с огромным количеством систем.",
        },
        {
          tag: "Интеграции с корпоративными платформами",
          title:
            "BPMx позволяет интегрироваться с другими корпоративными платформами и стать частью экосистемы компании",
          paragraph:
            "BPMx станет шиной данных через которую соединяются разнородные системы.",
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
.softcore__text {
  &-0 {
    max-width: 370px;
  }
  &-1 {
    max-width: 428px;
  }
}
</style>