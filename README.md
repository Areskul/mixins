# mixins
Vue project
Vue mixins for components shape, color and elevation(shadow).


## Global.js
Import it in your main.js (root file).

This mixin internaly uses the Vuex Store to set the dark/light theme.
It just dispatches (isDark) in the store.

## Style.js
Import it in your components

It enables you to set component background, corner radius, elevation, and (text) color
as simple as :

```javascript
import styleMixins from "@areskul/mixins";
```

Then register the component in your **vue file**

```javascript
mixins: [styleMixins]
```

And use it in your template. Colors name corresponds to variables you may define with
"@areskul/scss" minimalist stylesheets.
Same for elevation levels.

```html
<template>
  <div color="primary" text="success" height="10vh" width="15vh" elevation="6" rounded>
    ...
  </div>
</template>
```
