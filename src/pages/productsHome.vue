<template>
<div class="book-content">
  <div id="__wrapper">
    <main class="container">
      <p class="dim text-center page-header" v-show="!this.$store.state.user.isLogin">已经购买，需要重新下载？点击
        <router-link to="/login/">登录</router-link>
      </p>
      <p class="dim text-center page-header" v-show="this.$store.state.user.isLogin">欢迎您 {{ this.$store.state.user.email}}，您可以下载已购内容或进行新的购买</p>
      <div class="row">
        <book-card v-for="item in bookInfo" :key="item.id" :book-cover-image=item.bookCoverImage :book-price="item.bookPrice" :book-detail-info=item.bookDetailInfo></book-card>
      </div>
    </main>
  </div>
</div>
</template>

<script>
import BookCard from '@/components/bookCard';
export default {
  components: {
    BookCard
  },
  data() {
    return {
      bookInfo: [{
        bookCoverImage: require('../assets/swifter-tips-cover.png'),
        bookPrice: '49.00',
        bookDetailInfo: '/products/swifter-tips'
      },
      {
        bookCoverImage: require('../assets/functional-swift-cover.png'),
        bookPrice: '69.00',
        bookDetailInfo: '/products/functional-swift'
      },
      {
        bookCoverImage: require('../assets/core-data-cover.png'),
        bookPrice: '69.00',
        bookDetailInfo: '/products/core-data'
      },
      {
        bookCoverImage: require('../assets/advanced-swift-cover.png'),
        bookPrice: '69.00',
        bookDetailInfo: '/products/advanced-swift'
      },
      {
        bookCoverImage: require('../assets/optimizing-collections-cover.png'),
        bookPrice: '59.00',
        bookDetailInfo: '/products/optimizing-collections'
      }
      ]
    };
  }
};
</script>

<style scoped>
@import '../style/style.css';
@import '../style/bootstrap-flat.min.css';
</style>
