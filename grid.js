// export const position = {
export const breakpoints = {
  data: () => ({
    xsOnly: false,
    smOnly: false,
    mdOnly: false,
    lgOnly: false,
    xlOnly: false,
  }),
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, {
        passive: true,
      });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  computed: {
    xl: function() {
      return this.xlOnly ? true : false;
    },
    lg: function() {
      return this.xlOnly || this.lgOnly ? true : false;
    },
    md: function() {
      return this.xlOnly || this.lgOnly || this.mdOnly ? true : false;
    },
    sm: function() {
      return this.xlOnly || this.lgOnly || this.mdOnly || this.smOnly
        ? true
        : false;
    },
    xs: function() {
      return this.xlOnly ||
        this.lgOnly ||
        this.mdOnly ||
        this.smOnly ||
        this.xsOnly
        ? true
        : false;
    },
  },
  methods: {
    onResize() {
      const width = document.documentElement.clientWidth;
      this.xsOnly =
        width >= this.breakpointValue("xs") &&
        width < this.breakpointValue("sm");

      this.smOnly =
        width >= this.breakpointValue("sm") &&
        width <= this.breakpointValue("md");

      this.mdOnly =
        width >= this.breakpointValue("md") &&
        width < this.breakpointValue("lg");
      this.lgOnly =
        width >= this.breakpointValue("lg") &&
        width < this.breakpointValue("xl");
      this.xlOnly = width >= this.breakpointValue("xl");
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
