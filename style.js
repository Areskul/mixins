export const dimension = {
  props: {
    height: String,
    width: String,
  },
  mounted() {
    this.setHeight();
    this.setWidth();
  },
  methods: {
    setHeight: function() {
      const height = this.height;
      this.$el.style.minHeight = height;
      this.$el.style.maxHeight = height;
    },
    setWidth: function() {
      const width = this.width;
      this.$el.style.minWidth = width;
      this.$el.style.maxWidth = width;
    },
  },
};
