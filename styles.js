const styles = {
  data: () => ({
    colors: [],
  }),
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
    setColor: function () {
      let color = `var(--${this.color})`;
      this.$el.style.background = color;
    },
    setText: function () {
      if (this.text) {
        let color = `var(--${this.text})`;
        this.$el.style.color = color;
      } else {
        let text = "ternary-lighten2";
        let color = `var(--${text})`;
        this.$el.style.color = color;
      }
    },
    setElevation: function () {
      let elevation = `var(--box${this.elevation})`;
      this.$el.style.boxShadow = elevation;
    },
    setHeight: function () {
      let height = this.height;
      this.$el.style.minHeight = height;
    },
    setWidth: function () {
      let width = this.width;
      this.$el.style.minWidth = width;
    },
    setBorderRadius: function () {
      if (this.rounded) {
        let radius = `var(--border-radius)`;
        this.$el.style.borderRadius = radius;
      }
    },
    setBorderWidth: function () {
      if (this.border) {
        this.$el.style.borderWidth = `var(--border-width)`;
        this.$el.style.borderStyle = "solid";
        this.$el.style.borderColor = `var(--${this.border})`;
      }
    },
  },
};
export default styles;
