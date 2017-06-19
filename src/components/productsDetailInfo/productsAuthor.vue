<template>
<div class="product-info row">
  <div class="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-0" v-if="authorList.length > 0">
    <h4 class="section-title">关于作者</h4>
    <ul class="product-authors">
      <li class="product-author" v-for="author in authorList">
        <figure class="product-media_image product-author-photo">
          <img width="200" height="200" :src=author.authorAvatar>
        </figure>
        <div class="product-author-body">
          <h4 class="product-author-name">
              <a :href=author.authorLink>{{author.authorName}}</a>
            </h4>
          <div class="product-author-bio" v-html=author.authorDescribe>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-0" v-if="translatorList.length > 0">
    <h4 class="section-title">关于译者</h4>
    <ul class="product-authors">
      <li class="product-author" v-for="translator in translatorList">
        <figure class="product-media_image product-author-photo">
          <img width="200" height="200" :src=translator.authorAvatar>
        </figure>
        <div class="product-author-body">
          <h4 class="product-author-name">
              <a :href=translator.authorLink>{{translator.authorName}}</a>
            </h4>
          <div class="product-author-bio" v-html=translator.authorDescribe>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'author-list',
    'translator-list'
  ]
};
</script>

<style>

</style>
