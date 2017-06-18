<template>
<div class="home-page container">
  <main>
    <transition name=el-zoom-in-top>
    <div class="alert alert-warning" role="alert" v-show="(this.$store.state.user.email!== undefined) && (!this.$store.state.user.isLogin)">您已经从本站注销，期待您的再次访问，感谢使用！</div>
   </transition>
  <div class="page-header">
    <h1 class='text-center'>ObjC 中国</h1>
  </div>

    <div class="col-md-10 col-md-offset-1">
      <h3 class='text-center subtitle'>为中国 Apple 开发社区带来最佳实践和先进技术</h3>
    </div>


  <div class="container">
    <div class="row">
      <div class="index-content col-sm-6">
        <div class="boxed-content left-aligned left-boxed-icon">
          <span class="icon glyphicon glyphicon-education"></span>
          <h2 class="boxed-content-title"><router-link to="/issues/">期刊</router-link></h2>
          <p><router-link to="/issues">objc.io 期刊</router-link>自 2013 年中以来，在两年时间内发布了 24 期高质量的 Apple 平台开发相关的文章，内容涉及视图、动画、架构、测试等诸多方面，涵盖了优秀 Apple 开发者需要知道的各项进阶内容。</p>
          <p>ObjC 中国项目与 objc.io 展开合作，我们的<a href="https://github.com/objccn/articles/graphs/contributors">志愿者</a>将这些期刊翻译成了中文，以飨广大中文读者。</p>
        </div>
        <router-link class="btn btn-index btn-lg" to="/issues/">查看期刊专题</router-link></p>
        <p class="dim">您也可以访问我们的 <a href="https://github.com/objccn/articles">GitHub 仓库</a>获取所有开源的期刊译文</p>
      </div>
      <div class="index-content col-sm-6">
        <div class="boxed-content left-aligned left-boxed-icon">
          <span class="icon glyphicon glyphicon-book"></span>
          <h2 class="boxed-content-title"><router-link to="/products/">书籍</router-link></h2>
          <p>objc.io 的 Swift <a href="https://www.objc.io/books/">相关书籍</a>质量极高，是自学提高的优秀读物。我们取得了授权，将这些书籍翻译为中文，并以更符合中国开发者的价格进行出售。</p>
          <p>ObjC 中国致力于最优秀的翻译作品，希望这些图书能将先进的 Swift 开发技术以更易懂的方式介绍给中文社区的开发者们。</p>
        </div>
        <router-link class="btn btn-index btn-lg" to="/products/">访问出版书籍</router-link></p>
      </div>
    </div>
    <blockquote class="acknowledge">
      <h3>致谢</h3>
      <p>在此感谢 <a href="http://objc.io/">objc.io</a> 及其撰稿作者们无私地将他们的知识分享给全世界，感谢本站的<a href="https://github.com/objccn/articles/graphs/contributors">贡献者们</a>为中文 Apple 开发者社区的繁荣和发展做出的不懈努力，也感谢无数开源项目给予我们的帮助和启迪。</p>
      <p>我们爱这个世界，愿程序让这个世界变得更美好！</p>
    </blockquote>
  </div>
</main>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
