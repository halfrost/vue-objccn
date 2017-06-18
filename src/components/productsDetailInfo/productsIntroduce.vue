<template>
<div>
  <h3 class="product-subtitle">{{productSubtitle}}</h3>
  <div class="product-text">
    <p v-html="productText"></p>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'product-subtitle',
    'product-text'
  ]
}
</script>

<style>

</style>
