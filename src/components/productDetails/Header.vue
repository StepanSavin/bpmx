<template>
  <div class="xl:px-16 md:px-16 main-container pt-14 xs:pt-8">
    <div class="flex items-center xs:flex-col gap-20 md:gap-14 xs:gap-8">
      <LazyImage
        width="424"
        height="390"
        alt="first detail"
        src="productDetails/details-first.svg"
      />
      <div class="flex-1">
        <h2 class="font-bold font-gbold text-3sxl leading-10">
          Проблемы бизнеса
        </h2>
        <p class="text-lg leading-5 mt-8 mb-8 md:mb-6 xs:mb-5">
          Ваши разработчики постоянно дорабатывают внутренний продукт, 
          который устаревает быстрее, чем у бизнеса появляются новые задачи.
        </p>
        <p
          v-for="detail in details"
          :key="detail"
          class="text-lg leading-5 mt-4 pl-6 details__problem"
        >
          {{ detail }}
        </p>
      </div>
    </div>
    <div
      class="
        flex
        items-center
        xs:flex-col
        gap-24
        md:gap-14
        xs:gap-8
        mt-24
        md:mt-20
        xs:mt-16
      "
    >
      <LazyImage
        width="424"
        height="390"
        alt="second detail"
        src="productDetails/details-second.svg"
        class="xl:order-1 md:order-1"
      />
      <div class="flex-1">
        <h2 class="font-bold font-gbold text-3sxl leading-10">
          Проблемы бизнеса
        </h2>
        <p class="text-lg leading-5 mt-6">
          Вы заказываете внешнюю разработку системы. 
          Вам объявляют срок разработки и бюджет (например, 6 мес и 1 млн рублей). 
          К окончанию разработки оказывается что вы не учли всего при написании ТЗ. 
          В итоге сроки и стоимость сильно вырастают. Далее оказывается, 
          что нет технологической документации на случай, если потребуется заменить разработчиков. 
          Вы заплатили деньги и дальше разработчику уже не очень интересно работать с вами. 
          Нужно договариваться на примерно такие же деньги, которые уже потрачены, чтобы продукт жил и развивался. 
        </p>
      </div>
    </div>
    <div
      class="
        flex
        items-center
        xs:flex-col
        gap-20
        md:gap-14
        xs:gap-8
        mt-24
        md:mt-20
        xs:mt-16
      "
    >
      <LazyImage
        width="424"
        height="390"
        alt="third detail"
        src="productDetails/details-third.svg"
      />
      <div class="flex-1">
        <h2 class="font-bold font-gbold text-3sxl leading-10">
          Проблемы бизнеса
        </h2>
        <p class="text-lg leading-5 mt-8">
          Вы хотите протестировать какие-то гипотезы - быстро сконструировать карточки 
          товаров новых типов или добавить в CRM WorkFlow - почти никогда это не получается быстро. 
          Нужно долго обсуждать с инженерами, менеджерами и т.д.
        </p>
        <p class="text-lg leading-5 mt-8 md:mt-6 xs:mt-5">
          И таких примеров можно приводить огромное количество.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      details: [
        "Бюджет разработки постоянно растёт.",
        "Бизнес в заложниках у отдела разработки.",
        "Если уходит разработчик - это ЧП. Если не осталось документации - это крах.",
      ],
    };
  },
};
</script>

<style lang="scss">
.details {
  &__problem {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      top: 8px;
      left: 6px;
      width: 6px;
      height: 6px;
      background: black;
      border-radius: 50%;
    }
  }
}
</style>
