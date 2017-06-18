<template>
<div class="buy-button-group row">
  <router-link class="col-sm-3 col-sm-offset-2 col-xs-10 col-xs-offset-1 btn btn-success btn-lg" to="/goodscart"><span class="glyphicon glyphicon-ok"></span>  购买电子书</router-link>
  <router-link class="col-sm-3 col-sm-offset-2 col-xs-10 col-xs-offset-1 btn btn-default btn-lg" :to="previewUrl + '/preview'"><span class="glyphicon glyphicon-book"></span>  在线试读</router-link>
</div>
</template>

<script>
export default {
  props: [
    'preview-url'
  ],
  methods: {
  }
}
</script>

<style>

</style>
