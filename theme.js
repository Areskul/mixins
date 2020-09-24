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
  metaInfo: function() {
    let fg = "";
    const cond = this.isDark | !this.isDark;
    if (cond) {
      fg = window
        .getComputedStyle(this.$root.$el)
        .getPropertyValue("--secondary");
      return {
        // title: "Agence Web Areskul ",
        // titleTemplate: "%s",
        meta: [
          {
            vmid: "theme-color",
            name: "theme-color",
            content: fg,
          },
          {
            vmid: "msapplication-TileColor",
            name: "msapplication-TileColor",
            content: fg,
          },
        ],
      };
    }
  },
};
