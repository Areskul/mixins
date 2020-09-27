export const border = {
  props: {
    border: String,
    rounded: Boolean,
  },
  mounted() {
    this.setBorderRadius();
    this.setBorderWidth();
  },
  methods: {
    setBorderRadius: function() {
      if (this.rounded) {
        const radius = `var(--border-radius)`;
        this.$el.style.borderRadius = radius;
      } else {
        return;
      }
    },
    setBorderWidth: function() {
      if (this.border) {
        this.$el.style.borderWidth = `var(--border-width)`;
        this.$el.style.borderStyle = "solid";
        this.$el.style.borderColor = `var(--${this.border})`;
      }
    },
  },
};
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
