<template>
<div class="product-content">
  <h4 class="section-title">本书内容</h4>
  <div class="product-content-list">
    <ul>
      <li v-for="item in contentInfo">
        <h4>{{item.title}}</h4>
        <p>{{item.subtitle}}</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'content-info'
  ]
};
</script>

<style>

</style>
