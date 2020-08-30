/* 
Must use this mixin on Vue first instance
to get all colors generated from scss
available in js as constantes. 
*/

const global = {
  data: () => ({
    colors: {},
  }),
  async mounted() {
    await this.setTheme();
    //Musn't call a plugin (store) in mixins
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
