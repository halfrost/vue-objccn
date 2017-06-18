<template>
<main class="container">
  <div class="article article-container">
    <div class="article-header">
      <div class="article-header-top row">
        <div class="col-xs-6 col-xs-offset-0">
          <router-link class="article-back" to="/issues/" style="color: #337AB7;background-color: transparent;"><span class="glyphicon glyphicon-menu-left"></span> 返回期刊列表</router-link>
        </div>
      </div>
      <div>
        <div class="article-title">{{this.issuesDetail.issue_item_title}}</div>
        <div class="article-meta text-center">
          <div class="article-meta-item"><span class="glyphicon glyphicon-user"></span> <a :href=selectAuthorInfo.authorLink>{{selectAuthorInfo.authorName}}</a></div>
          <div class="article-meta-item"><span class="glyphicon glyphicon-calendar"></span>{{' ' + this.issuesDetail.issue_date}}</div>
        </div>
      </div>
    </div>
    <hr>
    <div class="article-content" v-hljs>
      <vue-markdown :source=this.articleContent></vue-markdown>
    </div>
    <div class="article-author-detail">
      <div class="article-author">
        <div class="article-author-title">
          译者简介
        </div>
        <figure class="artical-media_image artical-author-photo">
          <img width="300" height="300" :src=selectAuthorInfo.authorAvatar>
        </figure>
        <div class="article-author-body">
          <h4 class="article-author-body">
                    <a :href=selectAuthorInfo.authorLink>{{' ' + selectAuthorInfo.authorName + ' '}}</a>
                </h4>
          <div class="article-author-bio" v-html="selectAuthorInfo.authorDescribe">
          </div>
        </div>
      </div>
      <hr>
    </div>
  </div>
</main>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'
import hljs from 'highlight.js'

hljs.initHighlightingOnLoad()

export default {
  data() {
    return {
      authorInfo: {},
      issuesListInfo: [],
      issuesDetail: {
        issue_content_item: '',
        issue_item_title: '',
        issue_date: '',
        authorInfo: {
          authorLink: '',
          authorName: '',
          authorAvatar: '',
          authorDescribe: ''
        }
      },
      chapter: 0,
      section: 0,
      articleContent: ''
    }
  },
  props: [],
  components: {
    VueMarkdown
  },
  computed: {
    selectAuthorInfo() {
      if (this.issuesDetail.authorInfo === undefined) {
        return this.authorInfo
      } else {
        return this.issuesDetail.authorInfo
      }
    }
  },
  methods: {
    reloadData() {
      this.issuesDetail = this.issuesListInfo[this.chapter - 1].issue_content_list[this.section]
    },
    fetchData() {
      axios.post('http://localhost:8080/api/getIssuesListInfo')
        .then((response) => {
          var array = this.$route.params['issuesNum'].split('-')
          this.chapter = array[1]
          this.section = array[2]
          this.getArticleContentURL()
          console.log('@@@@@@@@@', this.chapter, this.section)
          this.issuesListInfo = response.data

          if (this.chapter <= this.issuesListInfo.length && this.section < this.issuesListInfo[this.chapter - 1].issue_content_list.length) {
            this.issuesDetail = this.issuesListInfo[this.chapter - 1].issue_content_list[this.section]
            console.log('****', this.issuesDetail)
          }
        })
        .catch((error) => {
          console.log('issuesDetail 页面出错了', error)
        })
    },
    fetchArticleContent() {
      console.log(this.getArticleContentURL())

      axios.get(this.getArticleContentURL())
        .then((response) => {
          console.log('yyyyyyyyyyyyy', response)
          this.articleContent = response.data
          // item.raw = response.data
          // item.content = md.render(item.raw)
          // this.item = item
        })
        .catch((error) => {
          this.issuesDetail.issue_date = ''
          this.authorInfo.authorName = ''
          this.articleContent = '这篇文章不见了'
          console.log('issuesDetail 请求md出错了', error)
        })
    },
    getArticleContentURL() {
      let array = this.$route.params['issuesNum'].split('-')
      let chapterIndex = array[1]
      return 'https://raw.githubusercontent.com/halfrost/articles/master/publish/issue' + chapterIndex + '/' + this.$route.params['issuesNum'] + '.md'
    }
  },
  created() {
    // created 里面只执行一次，所以这里负责拉去所有文章基本信息
    this.fetchData()
    this.fetchArticleContent()
  },
  watch: {
    $route() {
      if (typeof (this.$route.params['issuesNum']) === 'string') {
        var array = this.$route.params['issuesNum'].split('-')
        this.chapter = array[1]
        this.section = array[2]
        this.reloadData()
        // 由于每篇文章的详细信息都需要重新拉取，所以每次这里都要请求一次
        this.fetchArticleContent()
      }
    }
  }
}
</script>

<style>

</style>
