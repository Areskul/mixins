const global = {
  data: () => ({}),
  async mounted() {
    await this.setTheme();
    //Musn't use a plugin (store) in mixins
    this.$store.dispatch("theme/setDark", false);
  },
  methods: {
    setTheme: async function () {
      if (this.$store.state.theme.isDark) {
        await import("@/scss/colors/dark.scss");
      } else {
        await import("@/scss/colors/light.scss");
      }
    },
  },
};
export default global;
