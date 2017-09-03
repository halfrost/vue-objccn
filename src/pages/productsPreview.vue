<template>
<div>
  <main class="container">
    <div class="article article-container">
      <div class="article-header">
        <div class="article-header-top row">
          <div class="col-xs-3 col-xs-offset-0">
            <a class="article-back" @click="goback">返回</span></a>
          </div>
          <div class="article-header-top-title col-xs-4 col-xs-offset-1">
            在线试读
          </div>
        </div>
        <div>
          <div class="article-title page-header">{{this.previewHeaderInfo[this.resolve(this.$route.path)].productTitle}}</div>
          <div class="product-article-author">{{this.previewHeaderInfo[this.resolve(this.$route.path)].authorList}}</div>
          <div class="product-article-author">{{this.previewHeaderInfo[this.resolve(this.$route.path)].translatorList}}</div>
        </div>
        <div class="buy-button-group row">
          <router-link class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4 btn btn-success btn-lg" to="/goodscart"><span class="glyphicon glyphicon-ok"></span> {{ '购买 ('+this.previewHeaderInfo[this.resolve(this.$route.path)].productPrice +')'}}</router-link>
        </div>
      </div>

      <div v-html="this.articleContent" v-hljs>
      </div>

      <div class="buy-button-group row">
        <router-link class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4 btn btn-success btn-lg" to="/goodscart"><span class="glyphicon glyphicon-ok"></span> {{ '购买 ('+this.previewHeaderInfo[this.resolve(this.$route.path)].productPrice +')'}}</router-link>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import hljs from 'highlight.js';

hljs.initHighlightingOnLoad();

export default {
  created() {
    this.fetchArticleContent();
  },
  methods: {
    goback() {
      router.go(-1);
    },
    resolve(url) {
      if (url.substr(url.length - 1, 1) === '/') {
        return url.substring(0, url.length - 1);
      } else {
        return url;
      }
    },
    fetchArticleContent() {
      axios.get(this.getArticleContentURL())
        .then((response) => {
          this.articleContent = response.data;
        })
        .catch((error) => {
          this.articleContent = '这篇文章不见了';
          console.log('productsPreview 请求md出错了', error);
        });
    },
    getArticleContentURL() {
      let array = this.$route.path.split('/');
      return 'https://raw.githubusercontent.com/halfrost/articles/master/' + array[2] + '-summary' + '.md';
    }
  },
  data() {
    return {
      articleContent: '',
      previewHeaderInfo: {
        '/products/swifter-tips/preview': {
          'productTitle': 'Swifter - Swift 开发者必备 Tips',
          'productPrice': '¥49.00',
          'authorList': '王巍 著',
          'translatorList': ''
        },
        '/products/functional-swift/preview': {
          'productTitle': '函数式 Swift',
          'productPrice': '¥69.00',
          'authorList': 'Chris Eidhof，Florian Kugler，Wouter Swierstra 著',
          'translatorList': '陈聿菡，杜欣，王巍 译'
        },
        '/products/core-data/preview': {
          'productTitle': 'Core Data',
          'productPrice': '¥69.00',
          'authorList': 'Florian Kugler，Daniel Eggert 著',
          'translatorList': '徐涛，钱世家，王巍 译'
        },
        '/products/advanced-swift/preview': {
          'productTitle': 'Swift 进阶',
          'productPrice': '¥69.00',
          'authorList': 'Chris Eidhof，Airspeed Velocity 著',
          'translatorList': '王巍 译'
        },
        '/products/optimizing-collections/preview': {
          'productTitle': '集合类型优化',
          'productPrice': '¥59.00',
          'authorList': 'Károly Lőrentey 著',
          'translatorList': '王巍 陈聿菡 译'
        }
      }
    };
  }
};
</script>

<style>

</style>
