<template>
  <div class="product-faq">
    <h4 class="section-title">常见问题</h4>
    <div class="product-faq-list">
      <ul>
        <li v-for="item in problemList">
          <h4 v-html="item.question"></h4>
          <p v-html="item.answer"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'problem-list'
  ]
}
</script>

<style>

</style>
