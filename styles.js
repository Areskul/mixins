const styles = {
  props: {
    color: String,
    elevation: String,
    height: String,
    width: String,
    rounded: Boolean,
    border: String,
    text: String,
  },
  mounted() {
    this.setColor();
    this.setText();
    this.setElevation();
    this.setHeight();
    this.setWidth();
    this.setBorderRadius();
    this.setBorderWidth();
  },
  methods: {
    setColor: function() {
      const color = `var(--${this.color})`;
      this.$el.style.background = color;
    },
    setText: function() {
      if (this.text) {
        const color = `var(--${this.text})`;
        this.$el.style.color = color;
      } else {
        const text = "ternary-lighten2";
        const color = `var(--${text})`;
        this.$el.style.color = color;
      }
    },
    setElevation: function() {
      const elevation = `var(--box${this.elevation})`;
      this.$el.style.boxShadow = elevation;
    },
    setHeight: function() {
      const height = this.height;
      this.$el.style.minHeight = height;
    },
    setWidth: function() {
      const width = this.width;
      this.$el.style.minWidth = width;
    },
    setBorderRadius: function() {
      if (this.rounded) {
        const radius = `var(--border-radius)`;
        this.$el.style.borderRadius = radius;
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
export default styles;
