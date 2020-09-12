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
    xs: false,
    sm: false,
    md: false,
    lg: false,
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
      this.xs =
        document.documentElement.clientWidth <= this.breakpointValue("xs");
      this.sm =
        document.documentElement.clientWidth <= this.breakpointValue("sm");
      this.md =
        document.documentElement.clientWidth <= this.breakpointValue("md");
      this.lg =
        document.documentElement.clientWidth <= this.breakpointValue("lg");
    },
    breakpointValue(name) {
      let value = window
        .getComputedStyle(this.$root.$el)
        .getPropertyValue(`--${name}`);
      value = Number(value);
      return value;
    },
  },
};
