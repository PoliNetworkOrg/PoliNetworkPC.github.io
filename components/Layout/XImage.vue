<template>
    <div>
        <img :src="require(imageUrl)" :class="classParam">
    </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    classParam: {
      type: String,
      default: ''
    }
  }
}
</script>
