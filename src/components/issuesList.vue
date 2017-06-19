<template>
<div class="col-md-4 col-sm-6 col-xs-12">
  <div class="issue_item">
    <div class="issue_header">
      <h3 class="issue_content_title">{{issue_content_title}}</h3>
      <p class="issue_header_meta">{{issue_header_meta}}</p>
    </div>

    <ul class="issue_content_list">
      <li class="issue_content_item" v-for="item in issue_content_list">
        <router-link :to="'/issues/'+item.issue_content_item">{{item.issue_item_title}}</router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'issue_content_title',
    'issue_header_meta',
    'issue_content_list'
  ]
};
</script>

<style>

</style>
