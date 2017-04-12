<template>
  <div class="jumbotron">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import '../less/palette.less';
  .jumbotron {
    min-height: 5em;
    width: 100%;
    font-size: 150%;
    & > h1,h2 {
      color: @primary-color;
    }
  }
</style>
