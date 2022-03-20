<template>
  <button
    class="text-sm leading-6 font-medium flex gap-2 justify-center items-center tracking-wider"
    :class="[classList, heightClass]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "UiButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    colorType: {
      type: String,
      default: "blue",
    },
    buttonHeight: {
      type: String,
      default: "sm",
    },
  },
  data() {
    return {
      heightClasses: {
        sm: "h-10",
        md: "h-12",
        lg: "h-14",
      },
    };
  },
  computed: {
    classList() {
      if (this.$props.colorType === "blue")
        return "bg-blue hover:bg-blue-hover active:bg-blue-active text-white";
      if (this.$props.colorType === "light")
        return "bg-light hover:bg-light-hover active:bg-light-active text-blue";
    },
    heightClass() {
      return this.heightClasses[this.buttonHeight];
    },
  },
};
</script>
