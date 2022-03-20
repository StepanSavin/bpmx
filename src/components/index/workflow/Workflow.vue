<template>
  <div class="main-container pt-40 xs:pt-32">
    <p class="tag--sm text-center">Workflow Рабочие процессы</p>
    <p style="max-width: 850px" class="mt-4 heading-2 text-center mx-auto">
      WorkFlow - важнейший элемент платформы
    </p>
    <p  style="max-width: 750px" class="mt-6 subtext text-center mx-auto">
      WorkFlow позволяет оживить данные и создать триггеры которые будут
      запускаться при изменениях как внутри системы так и во внешних системах.
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
        smd:px-6
        md:pr-20
        py-20
        md:py-16
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
        :class="`workflow__text-${currentCategory}`"
      />
      <ImageOne v-if="currentCategory === 0" />
      <ImageTwo v-if="currentCategory === 1" />
    </div>
  </div>
</template>

<script>
import ImageOne from "@/components/index/workflow/ImageOne";
import ImageTwo from "@/components/index/workflow/ImageTwo";

export default {
  name: "Workflow",
  components: { ImageOne, ImageTwo },
  data() {
    return {
      currentCategory: 0,
      categories: [
        "Создайте Рабочий процесс",
        "Формализуйте коммуникации в вашем бизнесе",
      ],
      texts: [
        {
          tag: "Создайте Рабочий процесс",
          title:
            "WorkFlow позволяют формализовать и запереть в рамки правил действия сотрудников и систем ",
          paragraph:
            "Это позволяет минимизировать ошибки и сделать все процессы формальнее прозрачней и понятней.",
        },
        {
          tag: "Точность исполнения",
          title: "Наслаждайтесь точностью результата",
          paragraph:
            "Чётко описанные процессы позволяют избежать неоднозначных и спорных ситуаций.",
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
.workflow__text {
  &-0 {
    width: 342px;
  }
  &-1 {
    width: 337px;
  }
}
</style>"