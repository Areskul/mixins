const theme = {
  data: () => ({}),
  computed: {
    isDark: {
      set: function (bool) {
        this.$store.dispatch("theme/setDark", bool);
      },
      get: function () {
        return this.$store.state.theme.isDark;
      },
    },
  },
};
export default theme;
