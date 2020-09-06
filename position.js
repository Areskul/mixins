export const position = {
  props: {
    left: Boolean,
    right: Boolean,
    center: Boolean,
  },
  mounted() {
    this.setPosition();
  },
  methods: {
    setPosition: function() {
      const origin = this.$parent.$el.getBoundingClientRect();
      const offsetX = 10;
      const offsetY = 10;
      const x = origin.x + offsetX;
      const y = origin.y + offsetY;
      this.$el.style.left = x + "px";
      this.$el.style.top = y + "px";
      console.log(x, y);
    },
  },
};
