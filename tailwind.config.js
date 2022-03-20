module.exports = {
  important: true,
  purge: {
    content: ["./src/**/*.vue"],
    options: {
      safelist: [
        /^-left-/,
        /^bg-components-ui-button/,
        /^text-components-ui-button/,
        /^hover:bg-components-ui-button/,
        /^hover:text-components-ui-button/,
        /^active:bg-components-ui-button/,
        /^active:text-components-ui-button/,
        /^active:border-components-ui-button/,
        /^delay-/,
        /^z-/,
      ],
    },
  },
  theme: {
    screens: {
      xs: { max: "768px" },
      md: { min: "769px", max: "1024px" },
      smd: { min: "769px", max: "940px" },
      lg: { min: "1025px", max: "1200px" },
      xl: { min: "1025px" },
    },
    borderRadius: {
      default: "0.25rem",
      none: "0",
      3: "3px",
      5: "5px",
      8: "8px",
      10: "10px",
      12: "12px",
      15: "15px",
      16: "16px",
      32: "32px",
      25: "25px",
      30: "30px",
      45: "45px",
      60: "60px",
      full: "50%",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "3sxl": "2rem",
      "4xl": "2.25rem",
      "5sxl": "2.5rem",
      "5xl": "3rem",
      "6xl": "3.625rem",
      "7xl": "4rem",
    },
    extend: {
      opacity: {
        min: "0.001",
        40: "0.4",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        85: "0.85",
      },
      lineHeight: {
        12: "3rem",
        16: "4rem",
        18: "4.5rem",
      },
      colors: {
        "blue-hover": "#3C82F6",
        "blue-active": "#3172EA",
        blue: "#3478F6",
        "light-2": "#F8FAFF",
        light: "#F5F8FF",
        "light-hover": "#F8FAFF",
        "light-active": "#ECF2FF",
        gray: "#777777",
        "gray-2": "#F2F2F2",
        "gray-3":"#E5E5E5"
      },
      fontFamily: {
        gbold: "Gotham Pro Bold",
      },
      boxShadow: {
        focus: "0 0 0 2px #3478F6",
        error: "0 0 0 1px #FF0000",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
      },
    },
  },
  variants: {
    backgroundColor: ["hover", "active", "focus-within", "responsive"],
    textColor: ["hover", "active"],
    borderColor: ["hover", "active", "focus-within"],
  },
};