<template>
  <div class="pt-24 xs:pt-20">
    <div class="header__gradient flex justify-center px-6 pb-28 hidden xs:flex">
      <div class="relative overflow-visible">
        <LazyImage
          width="327"
          height="356"
          alt="background xs"
          src="index/header/header-background-xs.svg"
          class="header__background"
        />
        <div
          class="
            h-32
            bg-blue
            py-7
            px-8
            -bottom-16
            right-0
            left-0
            rounded-32
            absolute
            overflow-hidden
            header__animated-icon
            z-1
          "
          :class="{ 'header__upper-icon opacity-0': !isXsVisible }"
        >
          <p class="text-xs uppercase leading-6 text-white">Заказы</p>
          <p class="font-bold font-gbold text-5sxl leading-12 text-white">
            <AnimatedNumber :number="isXsVisible ? 150 : 0" />+
          </p>
          <HeaderLine class="absolute -bottom-2 right-0" />
        </div>
        <div
          style="width: 108px; height: 108px"
          class="
            bg-blue
            rounded-32
            absolute
            flex
            justify-center
            items-center
            transform
            header__animated-icon
            z-1
            right-5
            -top-8
          "
          :class="{ 'translate-y-28 opacity-0': !isXsVisible }"
        >
          <HeaderChart
            style="width: calc(100% - 28px)"
            class="absolute left-0 right-0 top-0 bottom-0 m-auto"
          />
          <p class="text-white font-gbold font-bold text-xs leading-8">
            <AnimatedNumber :number="isXsVisible ? 25 : 0" />%
          </p>
        </div>
        <HeaderButton
          style="width: 78%; top: 38%"
          class="absolute right-0 left-0 mx-auto"
        />
      </div>
    </div>
    <div class="px-6 xs:mt-16">
      <p class="tag text-center xs:text-left">BPMX 4.0</p>
      <p
        style="max-width: 1160px"
        class="heading-1 text-center xs:text-left mt-4 mx-auto"
      >
        BPMx - платформа для создания корпоративных приложений
      </p>
      <p
        style="max-width: 900px"
        class="subtext mt-8 text-center xs:text-left mx-auto"
      >
        Это продукт для Индустрии 4.0 - LowCode платформа для глубокой
        автоматизации бизнес-процессов и интеграции с производственным
        оборудованием.
      </p>
      <div class="flex justify-center gap-6 mt-12 xs:flex-col">
        <UiButton
          buttonHeight="lg"
          class="w-56 xs:w-full rounded-16"
          @click.native="$store.commit('setContactModal', true)"
        >
          <LazyImage
            width="24"
            height="24"
            alt="mail"
            src="index/header/header-mail.svg"
          />
          <span>Оставить заявку</span>
        </UiButton>
        <UiButton
          buttonHeight="lg"
          colorType="light"
          class="w-56 xs:w-full rounded-16"
        >
          <LazyImage
            width="24"
            height="24"
            alt="play"
            src="index/header/header-play.svg"
          />
          <span>Как это работает?</span>
        </UiButton>
      </div>
    </div>
    <div class="header__gradient mt-28 md:mt-32 xs:hidden">
      <div
        ref="backgroundContainer"
        class="main-container lg:px-6 relative md:px-14"
      >
        <LazyImage
          width="1060"
          height="356"
          src="index/header/header-background.svg"
          class="header__background"
        />
        <div
          style="width: 208px; height: 208px"
          class="
            bg-blue
            rounded-32
            absolute
            -right-20
            lg:right-6
            md:right-6
            -top-20
            md:-top-24
            flex
            justify-center
            items-center
            transform
            header__animated-icon
            z-1
          "
          :class="{ 'translate-y-28 opacity-0': !isVisible }"
        >
          <HeaderChart class="absolute left-0 right-0 top-0 bottom-0 m-auto" />
          <p class="text-white font-gbold font-bold text-2xl leading-8">
            <AnimatedNumber :number="isVisible ? 25 : 0" />%
          </p>
        </div>
        <div
          style="width: 332px"
          class="
            h-32
            bg-blue
            py-7
            px-8
            rounded-32
            absolute
            -left-20
            lg:left-6
            md:left-6
            top-24
            md:top-16
            overflow-hidden
            header__animated-icon
            z-1
            smd:bottom-auto smd:top-0 smd:w-60
          "
          :class="{ 'header__upper-icon opacity-0': !isVisible }"
        >
          <p class="text-xs uppercase leading-6 text-white">Заказы</p>
          <p class="font-bold font-gbold text-5sxl leading-12 text-white">
            <AnimatedNumber :number="isVisible ? 150 : 0" />+
          </p>
          <HeaderLine class="absolute -bottom-2 right-0" />
        </div>
        <HeaderButton
          style="bottom: 3%"
          class="absolute md:w-1/4 xl:bottom-8 left-0 right-0 mx-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderChart from "@/components/index/header/HeaderChart";
import HeaderLine from "@/components/index/header/HeaderLine";
import HeaderButton from "@/components/index/header/HeaderButton";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default {
  name: "Header",
  components: { HeaderChart, AnimatedNumber, HeaderLine, HeaderButton },
  data() {
    return {
      isVisible: false,
      isXsVisible: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isXsVisible = true;
    }, 1);
    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          this.isVisible = true;
          observer.unobserve(this.$refs.backgroundContainer);
        }
      },
      {
        threshold: 0.6,
      }
    );
    observer.observe(this.$refs.backgroundContainer);
  },
};
</script>

<style lang="scss">
.header {
  &__gradient {
    background: linear-gradient(
      180deg,
      rgba(242, 242, 242, 0) 0%,
      #f5f8ff 100%
    );
  }
  &__background {
    box-shadow: 0px 32px 96px 0px #0000000d;
  }
  &__animated-icon {
    transition: all 1s cubic-bezier(0.17, 0.67, 0.2, 1.39);
  }
  &__upper-icon {
    transform: translateY(-132px);
  }
}
</style>