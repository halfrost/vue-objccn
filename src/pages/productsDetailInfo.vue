<template>
<main class="container">
  <div class="product">

    <products-header :product-title=selectDetailInfo.productTitle :product-price=selectDetailInfo.productPrice :author-list=selectDetailInfo.authorList :translator-list=selectDetailInfo.translatorList>
    </products-header>

    <!-- 暂时先隐藏下载的工具条 -->
    <!-- <products-download-tool>
    </products-download-tool> -->

    <products-preview-tool :preview-url=this.resolve(this.$route.path)>
    </products-preview-tool>

    <div class="product-description">
      <products-introduce :product-subtitle=selectDetailInfo.productSubtitle :product-text=selectDetailInfo.productText>
      </products-introduce>

      <products-content :content-info=selectDetailInfo.contentInfo>
      </products-content>

      <hr>

      <products-author :author-list=selectDetailInfo.authorList :translator-list=selectDetailInfo.translatorList>
      </products-author>

      <hr>

      <products-problem :problem-list=selectDetailInfo.problemList>
      </products-problem>

      <hr>

      <!-- 暂时先隐藏下载的工具条 -->
      <!-- <products-download-tool>
      </products-download-tool> -->

      <products-preview-tool :preview-url=this.resolve(this.$route.path)>
      </products-preview-tool>

    </div>
  </div>

</main>
</template>

<script>
import ProductsHeader from '@/components/productsDetailInfo/productsHeader';
import ProductsDownloadTool from '@/components/productsDetailInfo/ProductsDownloadTool';
import ProductsIntroduce from '@/components/productsDetailInfo/productsIntroduce';
import ProductsContent from '@/components/productsDetailInfo/productsContent';
import ProductsAuthor from '@/components/productsDetailInfo/productsAuthor';
import ProductsProblem from '@/components/productsDetailInfo/productsProblem';
import ProductsPreviewTool from '@/components/productsDetailInfo/productsPreviewTool';
import axios from 'axios';

export default {
  created() {
    axios.post('http://localhost:8080/api/getProductsDetailInfoList')
      .then((response) => {
        this.productsDetailInfoList = response.data;
        this.selectDetailInfo = this.productsDetailInfoList[this.resolve(this.$route.path)];
      })
      .catch((error) => {
        console.log('出错啦~', error);
      });
  },
  computed: {
    selectDetailInfo() {
      let url = this.resolve(this.$route.path);
      if (this.productsDetailInfoList[url] === undefined) {
        return this.defaultDetailInfo;
      } else {
        return this.productsDetailInfoList[url];
      }
    }
  },
  components: {
    ProductsHeader,
    ProductsDownloadTool,
    ProductsPreviewTool,
    ProductsIntroduce,
    ProductsContent,
    ProductsAuthor,
    ProductsProblem
  },
  methods: {
    resolve(url) {
      if (url.substr(url.length - 1, 1) === '/') {
        return url.substring(0, url.length - 1);
      } else {
        return url;
      }
    }
  },
  data() {
    return {
      productsDetailInfoList: {},
      defaultDetailInfo: {
        productTitle: '',
        productPrice: '',
        authorList: [],
        translatorList: [],
        productSubtitle: '',
        productText: '',
        contentInfo: [],
        problemList: []
      }
    };
  }
};
</script>

<style>

</style>
