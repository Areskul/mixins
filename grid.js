export const position = {
  props: {
    left: Boolean,
    right: Boolean,
    center: Boolean,
  },
  mounted() {
    this.setPosition();
  },
  methods: {
    setPosition: function() {
      const origin = this.$parent.$el.getBoundingClientRect();
      const offsetX = 10;
      const offsetY = 10;
      const x = origin.x + offsetX;
      const y = origin.y + offsetY;
      this.$el.style.left = x + "px";
      this.$el.style.top = y + "px";
      console.log(x, y);
    },
  },
};
export const breakpoints = {
  data: () => ({
    isMobile: false,
  }),
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile =
        document.documentElement.clientWidth < this.breakpointValue("tablet");
    },
    breakpointValue(name) {
      const start = 0;
      const end = -2;
      let value = window
        .getComputedStyle(this.$root.$el)
        .getPropertyValue(`--${name}`);
      value = value.slice(start, end);
      value = Number(value);
      return value;
    },
  },
};
