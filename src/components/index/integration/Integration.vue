<template>
  <div class="bg-blue relative pt-32 pb-28 xs:pt-24 xs:pb-20">
    <LazyImage
      src="index/integration/integration-background-1.svg"
      class="absolute top-0 left-0 xs:hidden"
    />
    <LazyImage
      src="index/integration/integration-background-2.svg"
      class="absolute bottom-0 right-0 xs:hidden"
    />
    <div class="main-container">
      <div class="xs:-mx-6 xs:px-8">
        <p
          class="
            text-center text-sm
            leading-6
            uppercase
            font-gbold font-bold
            text-white
            tracking-wider
            xs:text-left
          "
        >
          Интеграция с датчиками и производственным оборудованием
        </p>
        <p
         style="max-width: 1000px"
          class="
            mt-4
            text-5sxl
            leading-12
            xs:text-2xl xs:leading-8
            text-white
            font-gbold font-bold
            text-center
            xs:text-left
            mx-auto
          "
        >
          Подключите BPMx существующей инфраструктуре, включая системы и машины
        </p>
        <p  style="max-width: 650px" class="text-white mt-6 text-center xs:text-left mx-auto">
          Уменьшите сложность ИТ-инфраструктуры вашего производства и сэкономьте
          на обслуживании оборудования.
        </p>
      </div>
      <div
        class="
          mt-16
          bg-light-2
          rounded-32
          overflow-hidden
          relative
          pl-24
          flex
          xs:block
          items-center
          integration__white-card
          smd:px-6
          xs:pl-6 xs:-mx-6
        "
      >
        <div style="width: 443px" class="xs:hidden">
          <p class="text-sm leading-6 text-blue font-gbold">
            iiot - промышленный интернет вещей
          </p>
          <p class="mt-2 text-2xl leading-8 font-bold font-gbold">
            IIOT мост - часть платформы BPMx
          </p>
          <p class="text-gray mt-4 leading-5 pl-4 integration__paragraph">
            Cобирайте данные от датчиков и оборудования
          </p>
          <p class="text-gray mt-3 leading-5 pl-4 integration__paragraph">
            Интерпретируйте их с помощью BPMx
          </p>
          <p class="text-gray mt-3 leading-6 pl-4 integration__paragraph">
            Создавайте приложения для операторов, которые считывают и записывают
            данные из систем и программного обеспечения, которые вы уже
            используете.
          </p>
          <UiButton
            buttonHeight="md"
            class="px-8 rounded-12 mt-8"
            @click.native="$store.commit('setContactModal', true)"
            >Попробовать
          </UiButton>
        </div>
        <LazyImage
          width="484"
          height="598"
          src="index/integration/integration-image.svg"
          class="
            absolute
            -right-16
            md:-right-36
            smd:-right-52
            -top-8
            xs:-top-12 xs:right-0 xs:relative
            integration__white-image
          "
        />
      </div>
      <div class="hidden xs:block mt-20 pr-4">
        <p class="text-sm text-white leading-6 font-medium">
          iiot - промышленный интернет вещей
        </p>
        <p class="mt-2 font-gbold font-bold text-2xl leading-8 text-white">
          IIOT мост - часть платформы BPMx
        </p>
        <p
          class="
            text-white
            mt-4
            leading-5
            pl-4
            integration__paragraph integration__paragraph_white
          "
        >
          Cобирайте данные от датчиков и оборудования
        </p>
        <p
          class="
            text-white
            mt-3
            leading-5
            pl-4
            integration__paragraph integration__paragraph_white
          "
        >
          Интерпретируйте их с помощью BPMx
        </p>
        <p
          class="
            text-white
            mt-3
            leading-6
            pl-4
            integration__paragraph integration__paragraph_white
          "
        >
          Создавайте приложения для операторов, которые считывают и записывают
          данные из систем и программного обеспечения, которые вы уже
          используете.
        </p>
        <UiButton
          buttonHeight="md"
          colorType="light"
          class="px-8 mt-8 rounded-12"
          @click.native="$store.commit('setContactModal', true)"
          >Попробовать</UiButton
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Integration",
};
</script>

<style lang="scss">
.integration {
  &__white-card {
    height: 520px;
    @media (max-width: 768px) {
      height: 575px;
      border-radius: 0 !important;
    }
  }
  &__white-image {
    width: 484px !important;
    @media (max-width: 768px) {
      width: 500px !important;
      max-width: unset !important;
      margin: auto !important;
    }
  }
  &__paragraph {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 4px;
      height: 4px;
      background: #777777;
      border-radius: 10px;
      top: 8px;
      left: 2px;
    }
    &_white {
      &::before {
        background: white;
      }
    }
  }
}
</style>