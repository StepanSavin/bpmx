<template>
  <span>{{ formattedNumber }}</span>
</template>

<script>
export default {
  name: 'AnimatedNumber',
  props: {
    number: {
      type: Number,
      default: 0,
    },
    numberType: {
      type: String,
      default: '',
    },
    animationTime: {
      type: String,
      default: '3',
    },
  },
  data() {
    return {
      displayNumber: 0,
      interval: false,
      counter: 0,
      animationInterval: 10,
    };
  },
  methods: {
    howManyOperations(value) {
      let change = 0;
      for (; value < this.number; value = value + change) {
        change = (this.number - value) / 30;
        change = change >= 0 ? Math.ceil(change) : Math.floor(change);
        this.counter++;
      }
    },
    defineAnimationInterval() {
      this.animationInterval = (this.animationTime * 1000) / this.counter;
    },
  },
  mounted() {
    this.displayNumber = this.number ? this.number : 0;
  },
  watch: {
    number() {
      clearInterval(this.interval);
      if (this.number === this.displayNumber) {
        return;
      }
      this.howManyOperations(this.displayNumber);
      this.defineAnimationInterval();
      this.interval = window.setInterval(() => {
        if (this.displayNumber !== this.number) {
          let change = (this.number - this.displayNumber) / 30; // step of number's changing
          change = change >= 0 ? Math.ceil(change) : Math.floor(change);
          this.displayNumber = this.displayNumber + change;
        } else {
          clearInterval(this.interval);
          this.counter = 0;
        }
      }, this.animationInterval);
    },
  },
  computed: {
    formattedNumber() {
      if (this.$props.numberType === 'thousand') return new Intl.NumberFormat('en-IN').format(this.displayNumber) + '+';
      if (this.$props.numberType === 'percent')
        return this.displayNumber.toString().slice(0, -1) + '.' + this.displayNumber.toString().slice(-1) + '%';
      return this.displayNumber;
    },
  },
};
</script>