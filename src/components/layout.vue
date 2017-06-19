<template>
<div id="__wrapper">

  <navgation-bar>
  </navgation-bar>

  <div class="app-content">
    <keep-alive>
      <transition name="drop">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>

  <footerView>
  </footerView>

</div>
</template>

<script>
import navgationBar from './navigationBar';
import bookCard from './bookCard';
import footerView from './footerView';

export default {
  components: {
    navgationBar,
    bookCard,
    footerView
  },
  created() {
    this.$store.dispatch('loadUser');
  }
};
</script>

<style>
@import '../style/style.css';
@import '../style/bootstrap-flat.min.css';
</style>
