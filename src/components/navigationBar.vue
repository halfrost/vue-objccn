<template>
<div id="navigationbar">
  <nav class="navbar navbar-default">

    <div class="container">

      <div class="navbar-header">
        <!-- <div class="container"> -->
        <button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
        <router-link to="/" class="navbar-brand" role="button" style="color: #777; background-color: transparent;">[@] ObjC 中国</router-link>
      </div>
      <collapse class="navbar-collapse text-align" v-model="showNavbar">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/issues">期刊</router-link>
          </li>
          <li>
            <router-link to="/products">书籍</router-link>
          </li>
          <li>
            <router-link to="/goodscart" v-show="this.$store.state.user.isLogin">购物车</router-link>
          </li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li><a class="iconstyle" style="padding-bottom:10px;color: #777; background-color: transparent;"><iframe frameborder="0" height="20px" scrolling="0" src="https://ghbtns.com/github-btn.html?user=halfrost&amp;repo=Halfrost-Field&amp;type=star&amp;count=true&amp;" width="100px"></iframe></a></li>

          <transition name=fade>
            <li>
              <router-link to="" v-show="this.$store.state.user.isLogin" style="padding-bottom:10px;color: #777; background-color: transparent;">{{this.$store.state.user.email}}</router-link>
            </li>
          </transition>

          <transition name=fade>
            <li><a @click="logout" v-show="this.$store.state.user.isLogin">注销 <span class="glyphicon glyphicon-log-out"></span></a></li>
          </transition>

          <transition name=fade>
            <li>
              <router-link to="/login" v-show="!this.$store.state.user.isLogin"><span class="glyphicon glyphicon-log-in"></span> 登录</router-link>
            </li>
          </transition>
        </ul>
      </collapse>
    </div>
  </nav>
</div>
</template>

<script>

export default {
  props: [],
  data() {
    return {
      showNavbar: false
    }
  },
  methods: {
    logout() {
      this.$store.commit('userLogout')
    },
    getUserLoginState() {
      return this.$store.state.user.isLogin
    }
  },
  created() {
  }
}
</script>

<style >
.iconstyle {
  padding-bottom: 10px;
  margin-right: 0px;
  color: #777;
}

.active-disable>.router-link-active {
  color: #777;
}

.router-link-active {
  color: #555;
  background-color: #e7e7e7;
}

.navbar-default .navbar-nav>li>a:focus,
.navbar-default .navbar-nav>li>a:hover {
  color: #555;
  background-color: #e7e7e7;
}
</style>
