<template>
  <footer>
    <div
      class="py-24 main-container flex flex-col items-center xs:items-stretch"
    >
      <p class="tag--sm text-center">Обратная связь</p>
      <p
        class="
          mt-4
          text-5sxl
          leading-12
          font-bold font-gbold
          xs:text-3xl xs:leading-8
          text-center
        "
      >
        Оставьте заявку, <br class="xl:hidden" />мы перезвоним
      </p>
      <div
        class="
          hidden
          xl:flex
          items-end
          rounded-32
          border border-gray-2
          p-8
          mt-12
          gap-4
          w-11/12
          footer__send-form
        "
      >
        <div class="flex-1 grid grid-cols-3 gap-4 footer__input-block">
          <div>
            <p class="text-sm leading-6 font-gbold">Ваше имя</p>
            <UiInput
              :isError="nameError"
              placeholder="Имя"
              class="mt-2"
              v-model="name"
              @focus="nameError = false"
            >
              <LazyImage width="24" height="24" src="footer/footer-person.svg"
            /></UiInput>
          </div>
          <div>
            <p class="text-sm leading-6 font-gbold">Ваш телефон</p>
            <UiInput
              :isError="phoneError"
              placeholder="Телефон"
              class="mt-2"
              v-model="phone"
              @focus="phoneError = false"
            >
              <LazyImage width="24" height="24" src="footer/footer-phone.svg"
            /></UiInput>
          </div>
          <div>
            <p class="text-sm leading-6 font-gbold">Ваша почта</p>
            <UiInput
              :isError="emailError"
              placeholder="Электронная почта"
              class="mt-2"
              v-model="email"
              @focus="emailError = false"
            >
              <LazyImage width="24" height="24" src="footer/footer-email.svg"
            /></UiInput>
          </div>
        </div>
        <UiButton
          buttonHeight="lg"
          class="w-44 rounded-16 relative"
          @click.native="send"
        >
          <template v-if="!isLoading">
            <LazyImage
              width="24"
              height="24"
              alt="send"
              src="footer/footer-send.svg"
            />
            <span>Отправить</span>
          </template>
          <template v-else>
            <LoadingSpinner color="white" size="md" />
          </template>
        </UiButton>
      </div>
      <div class="mt-8 xs:mt-16 flex justify-center xl:hidden">
        <UiButton
          buttonHeight="lg"
          class="rounded-16 w-56"
          @click.native="$store.commit('setContactModal', true)"
        >
          <LazyImage
            width="24"
            height="24"
            alt="send"
            src="footer/footer-mail.svg"
          />
          <span>Оставить заявку</span>
        </UiButton>
      </div>
    </div>
    <div class="border-t border-gray-2 md:h-24 xl:h-24 flex items-center">
      <div class="main-container flex w-full justify-between xs:flex-col">
        <div
          class="flex items-center xs:flex-col xs:items-start xs:py-8 xs:gap-8"
        >
          <LazyImage
            width="152"
            height="36"
            alt="logotype"
            src="logotype.svg"
          />
          <p class="text-sm leading-6 text-gray ml-20 xs:ml-0">
            © ООО "ДИДЖИТАЛ ТВИН". Все права защищены
          </p>
        </div>
        <div
          class="
            flex
            gap-3
            xs:h-24 xs:items-center xs:bg-light xs:-mx-6 xs:px-6
          "
        >
          <UiButton
            v-for="social in socials"
            :key="social.img"
            buttonHeight="md"
            colorType="light"
            class="w-12 rounded-full"
          >
            <LazyImage
              :width="social.width"
              :height="social.height"
              :alt="social.img"
              :src="`footer/footer-${social.img}.svg`"
            />
          </UiButton>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import UiInput from "@/components/ui/Input";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

import httpClient from "@/api/index.js";

export default {
  name: "Footer",
  components: { UiInput, LoadingSpinner },
  data() {
    return {
      isLoading: false,
      email: "",
      name: "",
      phone: "",
      emailError: false,
      nameError: false,
      phoneError: false,
      socials: [
        {
          img: "youtube",
          width: "28",
          height: "20",
        },
        {
          img: "telegram",
          width: "24",
          height: "20",
        },
        {
          img: "twitter",
          width: "24",
          height: "20",
        },
        {
          img: "facebook",
          width: "24",
          height: "24",
        },
      ],
    };
  },
  methods: {
    async send() {
      this.validate();
      if (this.emailError || this.nameError || this.phoneError) return;
      this.isLoading = true;
      try {
        await httpClient.post("/v2/leads/", {
          data: {
            first_name: this.name,
            last_name: this.name,
            email: this.email,
            phone: this.phone,
            tags: ["bpmx_site_reg"],
          },
        });
        this.email = "";
        this.phone = "";
        this.name = "";
        this.$store.commit("setResultModal", true);
      } catch (e) {
        console.log("Request Error " + e);
      } finally {
        this.isLoading = false;
      }
    },
    validate() {
      if (!this.email || !/^\S+@\S+\.\S+$/.test(this.email))
        this.emailError = true;
      if (!this.name) this.nameError = true;
      if (!this.phone) this.phoneError = true;
    },
  },
};
</script>

<style lang="scss">
.footer {
  &__send-form {
    box-shadow: 0px 32px 96px 0px #0000000d;
  }
}
</style>
