# What is this?

This is a small library of generic vue components

# How do I set it up?

Install with `npm install good-vue`
Then in main.js of your vue project include
```js
import Vue from 'vue'

import GoodVue from 'good-vue'
Vue.use(GoodVue)
```

# What are some usage examples?

There's a `<column>`, `<row>`, and `<container>` component.

## Column

#### Space Evenly
![Screen Shot 2019-11-24 at 12 03 49 PM](https://user-images.githubusercontent.com/17692058/69498949-28859780-0eb3-11ea-8384-462c2b1d41b6.png)
```vue
<template>
    <column align-v=space-evenly height=100vh>
        <div class=color-box></div>
        <div class=color-box></div>
        <div class=color-box></div>
    </column>
</template>
```


#### Top
![Screen Shot 2019-11-24 at 12 04 26 PM](https://user-images.githubusercontent.com/17692058/69498963-4b17b080-0eb3-11ea-8f43-612bd57e79f0.png)
```vue
<template>
    <column align-v=top height=100vh>
        <div class=color-box></div>
        <div class=color-box></div>
        <div class=color-box></div>
    </column>
</template>
```

#### Space Between, Left
![Screen Shot 2019-11-24 at 12 13 53 PM](https://user-images.githubusercontent.com/17692058/69499074-16582900-0eb4-11ea-98a8-d3e9580c24e9.png)
```vue
<template>
    <column align-v=space-between align-h=left height=100vh>
        <div class=color-box></div>
        <div class=color-box></div>
        <div class=color-box></div>
    </column>
</template>
```
