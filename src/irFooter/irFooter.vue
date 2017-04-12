<template>
  <footer>
    <div class="ir-footer-menu">
      <slot></slot>
    </div>
    <div class="ir-footer-copyright">© {{copyright}}</div>
  </footer>
</template>

<script>
export default {
  props: ['prodName'],
  computed: {
    copyright () {
      return new Date().getFullYear() + ' ' + this.prodName
    }
  }
}
</script>

<style lang="less">
@import '../less/palette.less';
  .ir-footer-menu {
    background-color: @primary-color;
    width: 100%;
    min-height: 6em;
  }
  .ir-footer-copyright {
    height: 2em;
    background-color: darken(@primary-color, 10%);
    line-height: 2em;
    color: #fff;
    padding-left: 1em;
    font-size: 80%;
    font-weight: lighter;
  }
</style>
