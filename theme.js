export const theme = {
  data: () => ({}),
  computed: {
    isDark: {
      set: function(bool) {
        this.$store.dispatch("theme/setDark", bool);
      },
      get: function() {
        return this.$store.state.theme.isDark;
      },
    },
  },
};
export const metaTheme = {
  metaInfo() {
    let fg = "";
    const cond = this.isDark | !this.isDark;
    if (cond) {
      fg = window
        .getComputedStyle(this.$root.$el)
        .getPropertyValue("--secondary");
      return { meta: [{ name: "theme-color", content: fg }] };
    }
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
