<template>
<div id="__wrapper">

  <navigation-bar>
  </navigation-bar>

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
import navigationBar from './navigationBar';
import bookCard from './bookCard';
import footerView from './footerView';

export default {
  components: {
    navigationBar,
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
