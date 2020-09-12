# Mixins

Vue mixins for components shape, color and elevation(shadow)...

## Theme

Import it in your main.js
It internally uses vue-meta and Vuex store

```javascript
import { metaTheme, theme } from "mixins/theme";
export default {
  mixins: [metaTheme, theme],
};
```

It just dispatches (isDark) in the store.

## Style

Import it in your components

It enables you to set component background, corner radius, elevation, and (text) color
as simple as :

```javascript
import { color, elevation, border, dimension } from "mixins/style";
export default {
  mixins: [color, elevation, border, dimension],
};
```

Use it in your components!

```html
<template>
  <div
    color="primary"
    text="success"
    height="10vh"
    width="15vh"
    elevation="6"
    rounded
  >
    ...
  </div>
</template>
```

Variable names corresponds to variables you may define with [scss](https://github.com/Areskul/scss#Scss).
