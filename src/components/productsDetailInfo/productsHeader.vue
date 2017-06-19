<template>
<div class="product-header">
  <div class="product-header-ratio">
    <div class="row page-header">
      <h1 class="product-title col-xs-6">{{productTitle}}</h1>
      <h1 class="product-price col-xs-6">{{productPrice}}</h1>
    </div>
    <p class="product-title-author">
      <ul class="author-list">
        <li v-for="item in authorList"><a rel="author" :href=item.authorLink>{{item.authorName}}</a>&nbsp;</li>
        著
      </ul>
      <ul class="author-list" v-if="translatorList.length > 0">
        <li v-for="item in translatorList"><a rel="author" :href=item.authorLink>{{item.authorName}}</a>&nbsp;</li>
        译
      </ul>
    </p>
  </div>
  <div class="product-header-image">
    <img :src=productIcon></img>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'product-title',
    'product-price',
    'author-list',
    'translator-list'
  ],
  data() {
    return {
      imgMap: {
        '/products/swifter-tips': require('../../assets/swifter-tips-header.png'),
        '/products/functional-swift': require('../../assets/functional-swift-header.png'),
        '/products/core-data': require('../../assets/core-data-header.png'),
        '/products/advanced-swift': require('../../assets/advanced-swift-header.png')
      }
    };
  },
  computed: {
    productIcon() {
      return this.imgMap[this.resolve(this.$route.path)];
    }
  },
  methods: {
    resolve(url) {
      if (url.substr(url.length - 1, 1) === '/') {
        return url.substring(0, url.length - 1);
      } else {
        return url;
      }
    }
  }
};
</script>

<style>

</style>
