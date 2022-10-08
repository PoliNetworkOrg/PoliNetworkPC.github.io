<template>
  <div>
    <ListePCSingolo :data-lista="items" language="it" />
  </div>
</template>

<script>

import Math from "./../../static/json/mat.json"
export default {
  data() {
    return {
      items: Math,
    };
  },
};
</script>
