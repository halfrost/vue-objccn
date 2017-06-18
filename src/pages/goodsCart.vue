<template>
<div>
  <main class="page">
    <div class="head">
      <div class="guide">
        <div>ObjC 中国</div>
      </div>
    </div>

    <div id=" content ">
      <div class="content-inner ">
        <div class="core-window ">
          <div class="store-product-detail core-clearfix ">
            <div class="store-product-detail-image">
              <img src="https://dxezhqhj7t42i.cloudfront.net/image/f8efab08-3db4-4707-bf47-efce1f744559 " height="394 " width="300 " alt=" " class
            ="img-border "></img>
            </div>
            <h2 class="store-product-detail-title">Swifter - Swift 必备 tips (第三版)</h2>
            <h3 class="store-product-detail-pricing "><span  class='store-product-price'><span  class='store-value-money store-value-money-single'>&#65509;49.00</span></span></h3>
            <div class="store-product-detail-description ">
              <div class="store-product-detail-description-short ">Swift 是 Apple 于 WWDC 2014 提出的一门全新的开发语言。这门语言从其他很多语言中继承和学习了不少优点，语法非常优美，并且具有轻便灵活等特点，一经推出就备受瞩目。活跃在 iOS 开发一线的作者 王巍(onevcat) 参加了 WWDC 14 开发者大会，亲历了这门语言的诞生，并在第一时间进行了大量的学习和研究。在本书中作者通过总结和分享了 Swift 中 100 条十分实用的小技巧和需要特别注意的地方，希望能让大家更好更快地掌握 Swift。
              </div>
            </div>
            <el-input-number v-model="book1" @change="handleChange" :min=0 style="bottom: 15px; right: 10px; position: absolute;"> </el-input-number>
          </div>


          <div class="core-section core-clearfix store-section-offer-program core-js-enabled-block ">
            <h2 class="core-section-header ">另推荐购买</h2>
            <div class="core-section-body ">
              <div class="store-product-list store-product-list-offer ">
                <div class="store-product-detail store-product-list-offer-item ">
                  <div class="store-product-detail-image">
                    <img src="https://dxezhqhj7t42i.cloudfront.net/image/266b3bbf-36e0-4cd2-807e-aeaf7bcf414f " height="400 " width="300 " alt=" " class ="img-border list-item-image"></img>
                  </div>
                  <h2 class="store-product-detail-title ">函数式 Swift</h2>
                  <h3 class="store-product-detail-pricing "><span  class='store-product-price'><span  class='store-value-money store-value-money-single'>&#65509;69.00</span></span></h3>
                  <div class="store-product-list-item-description ">
                    <div class="store-product-list-item-description-short ">
                      <h3>学习 Swift 函数式编程的核心观点，并将其运用到真实世界的开发中去。</h3>

                      <p>Swift 为编程世界打开了一扇新的大门，在本书中我们将带领您遨游这个世界。正如 Swift 的创造者 Chris Lattner 所言：</p>
                      <p>“没有 C 的 Objective-C” 确实是在做减法，但是 Swift 引入了泛型和函数式编程的概念，这极大扩展了语言设计的空间。</p>
                      <p>在 Swift 中引入函数式编程为我们的开发带来了无限的乐趣。在本书中我们将阐述函数式编程的理念，并向您展示如何在 Swift 中将它们运用于程序设计，这可以帮助我们写出更加简洁和明确的代码。</p>
                    </div>
                  </div>
                  <el-input-number v-model="book2" @change="handleChange" :min=0 style="bottom: 20px; right: 10px; position: absolute;"> </el-input-number>

                </div>
                <div class="store-product-detail store-product-list-offer-item ">
                  <div class="store-product-detail-image ">
                    <img src="https://dxezhqhj7t42i.cloudfront.net/image/a165f416-1d8e-4ff4-a067-f00751aaac22 " height="400 " width="300 " alt=" " class ="img-border list-item-image"></img>
                  </div>
                  <h2 class="store-product-detail-title ">Swift 进阶</h2>
                  <h3 class="store-product-detail-pricing "><span  class='store-product-price'><span  class='store-value-money store-value-money-single'>&#65509;69.00</span></span></h3>
                  <div class="store-product-list-item-description ">
                    <div class="store-product-list-item-description-short ">
                      <h3>讨论 Swift 特性中从低层级编程到高阶抽象的各个方面的进阶知识</h3>
                      <p>在本书中，我们涵盖了 Swift 程序设计的一些进阶话题。如果你已经通读 Apple 的 Swift 编程指南，并且想要深入探索关于这门语言的更多内容，那么这本书正适合你！</p>
                      <p>Swift 非常适合用来进行系统编程，而同时它也能被用于书写高层级的代码。我们在书中既会研究像是泛型、协议这样的高层级抽象的内容，也会涉足像是封装 C 代码以及字符串内部实现这样的低层级话题。</p>
                      <p>为了确保正确收到我们的邮件，我们强烈建议您<strong>不要使用</strong> QQ 邮箱。</p>
                    </div>
                  </div>
                  <el-input-number v-model="book3" @change="handleChange" :min=0 style="bottom: 20px; right: 10px; position: absolute;"> </el-input-number>
                </div>

                <div class="store-product-detail store-product-list-offer-item-last ">
                  <div class="store-product-detail-image ">
                    <img src="https://dxezhqhj7t42i.cloudfront.net/image/7a3e21cc-96fd-41ec-b226-bc00be79614d" height="400 " width="300 " alt=" " class
                  ="img-border list-item-image"></img>
                  </div>
                  <h2 class="store-product-detail-title ">Core Data</h2>
                  <h3 class="store-product-detail-pricing "><span  class='store-product-price'><span  class='store-value-money store-value-money-single'>&#65509;69.00</span></span></h3>
                  <div class="store-product-list-item-description ">
                    <div class="store-product-list-item-description-short ">
                      <h3>使用例子为您详解 Core Data 从简单的持久化到多线程及同步等高级应用的最佳实践。</h3>
                      <p>本书将向您介绍使用 Core Data 时需要特别注意的事项，这将帮助您避开使用 Core Data 这个十分灵活且异常强大的框架时的一些陷阱。我们从一个简单的应用例子开始，逐步将其扩展为包含关系，高级数据类型，并发，同步以及其他很多特性的完整例子，并在这个过程中对所有这些主题进行了讲解。</p>
                      <p>在本书后半部本，我们还会超出这个基本应用所需要涉及的范围，将我们的知识点深入扩展到 Core Data 幕后的工作原理上。我们会学习如何获取高性能，不同 Core Data 设置之间的权衡，以及如何对你的 Core Data 代码进行调试和性能测试。</p>
                      <p>本书所有的代码都使用 Swift 书写， 我们也展示了如何将 Swift 的语言特性融入到 Core Data 中，并写出优雅和安全的代码。我们希望您在阅读本书的时候有一定的 Swift 和 iOS 开发基础，不过相信不论是新人还是富有经验的开发者，都能从本书中找到实用的信息和设计模式。</p>
                    </div>
                  </div>
                  <el-input-number v-model="book4" @change="handleChange" :min=0 style="bottom: 0px; right: 10px; position: absolute;"> </el-input-number>
                </div>
              </div>
            </div>
          </div>
          <h2 class="store-product-detail-title">总价：&#65509;{{this.getTotalPrice}}.00</h2>

          <el-button :plain="true" type="success" style="right: 10px; position:absolute;" @click="next">下一步</el-button>
        </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
export default {
  data() {
    return {
      book1: 0,
      book2: 0,
      book3: 0,
      book4: 0,
      disable: true
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    next() {
      this.$confirm('😘 请去Objc官网支持 ❤️ 喵神(@onevcat) ❤️', '无法购买', {
        confirmButtonText: '支持',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '请手动前往 https://objccn.io/products/'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消购买'
        })
      })
    }
  },
  computed: {
    getTotalPrice() {
      return this.book1 * 49 + this.book2 * 69 + this.book3 * 69 + this.book4 * 69
    }
  }
}
</script>

<style scoped>
.img-border {
  border: 1px solid #dadada;
}
.core-window {
  position: relative;
}

.store-product-detail-image {
  float: left;
}

.store-product-detail-pricing {
  display: inline;
}

.store-product-detail-title {
  display: inline;
}

@media(max-width:768px) {
  .list-item-image {
    max-width: 100px;
    height: auto;
  }
}

.store-product-detail-title {
  margin-bottom: 10px;
  margin-right: 1em;
  font-weight: 600;
  line-height: 1.15em;
}

.store-product-detail-description-short {
  margin-top: 1em;
}

.store-product-detail-image img {
  padding: 0;
  margin-right: 1.0em;
}

h2 {
  font-size: 1.5em;
  margin: .75em 0;
}

h3 {
  font-size: 1.2em;
  font-weight: 600;
}

.guide {
  background-color: #9e9e9e;
  border: 1px solid #dadada;
  color: #ffffff;
  font-size: 1.25em;
  font-weight: normal;
  max-width: 730px;
  padding: 10px 15px;
  margin-bottom: 2em;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  -khtml-border-radius: 4px;
}

.page {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  max-width: 740px;
  padding-left: 10px;
  padding-right: 10px;
}

.head {
  clear: both;
  max-width: 740px;
  margin-top: 1em;
}

.content-inner {
  max-width: 730px;
  margin-left: auto;
  margin-right: auto;
  background: inherit;
}

.store-product-detail {
  position: relative;
  line-height: 1.4em;
  padding-bottom: 60px;
}

.store-product-detail {
  display: inline-block;
}

.core-section-header {
  border: 1px solid #dadada;
  padding: 0 0 10px;
  border-radius: 4px 4px 0px 0px;
  -moz-border-radius: 4px 4px 0px 0px;
  -webkit-border-radius: 4px 4px 0px 0px;
  -khtml-border-radius: 4px 4px 0px 0px;
  padding: 10px 15px;
  margin-bottom: 0;
  background-color: #efefef;
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 0;
}

.core-section {
  margin-left: auto;
  margin-right: auto;
  padding-top: 4px;
  margin-top: 1em;
}

.core-section-body {
  border: 1px solid #dadada;
  margin: 0 0 20px;
  padding: 0 0 10px;
  border-radius: 0px 0px 4px 4px;
  -moz-border-radius: 0px 0px 4px 4px;
  -webkit-border-radius: 0px 0px 4px 4px;
  -khtml-border-radius: 0px 0px 4px 4px;
  padding: 15px;
  border-top: none;
}

.store-product-list-offer-item {
  position: relative;
  padding-top: 20px;
  padding-bottom: 50px;
  border-bottom: 1px solid #dadada;
}

.store-product-list-offer-item-last {
  position: relative;
  padding-top: 20px;
  padding-bottom: 40px;
}

.store-product-input {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
