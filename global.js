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
        await import("@/scss/bulmaConf/bulmaDark.scss");
      } else {
        await import("@/scss/bulmaConf/bulmaLight.scss");
      }
    },
  },
};
export default global;
