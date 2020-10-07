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
  mounted() {
    this.setMeta();
  },
  methods: {
    getColor: function() {
      return window
        .getComputedStyle(this.$root.$el)
        .getPropertyValue("--secondary");
    },
    makeMeta: function(metaTags) {
      metaTags
        .map((tagDef) => {
          const tag = document.createElement("meta");
          Object.keys(tagDef).forEach((key) => {
            tag.setAttribute(key, tagDef[key]);
            tag.setAttribute("data-vue-mixins-controlled", "");
          });
          return tag;
        })
        .forEach((tag) => document.head.appendChild(tag));
    },
    setMeta: function() {
      const fg = this.getColor();
      const metaTags = [
        {
          name: "theme-color",
          content: fg,
        },
        {
          name: "msapplication-TileColor",
          content: fg,
        },
      ];
      this.makeMeta(metaTags);
    },
    changeMeta: function() {
      Array.from(document.querySelectorAll("[data-vue-mixins-controlled]")).map(
        (el) => {
          console.log("Change meta -> removed old tags");
          el.parentNode.removeChild(el);
        }
      );
      this.setMeta();
    },
  },
};
