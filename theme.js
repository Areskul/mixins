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
      console.log(fg);
      return { meta: [{ name: "theme-color", content: fg }] };
    }
  },
};
