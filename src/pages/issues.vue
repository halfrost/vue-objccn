<template>
<div class="book-issues">

  <div id="__wrapper">
    <main class="container">
      <p class="dim text-center page-header">为中国 Apple 开发社区带来最佳实践和先进技术</p>

      <div class="row">
        <issues-list v-for="issuesItem in issuesListInfo" :key="issuesItem.id" :issue_content_title=issuesItem.issue_content_title :issue_header_meta=issuesItem.issue_header_meta :issue_content_list=issuesItem.issue_content_list></issues-list>
      </div>
    </main>

  </div>
</div>
</template>

<script>
import IssuesList from '@/components/issuesList';
import axios from 'axios';

export default {
  created() {
    axios.post('http://localhost:8080/api/getIssuesListInfo')
      .then((response) => {
        this.issuesListInfo = response.data;
      })
      .catch((error) => {
        console.log('issues 页面出错了', error);
      });
  },
  components: {
    IssuesList
  },
  data() {
    return {
      issuesListInfo: []
    };
  }
};
</script>

<style>

</style>
