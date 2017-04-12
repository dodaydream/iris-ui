<template>
  <li class="ir-menu-item"><slot></slot></li>
</template>

<style lang="less">
@import '../less/palette.less';
.ir-menu-item {
  display: block;
  font-size: 1em;
  padding: 1em;
  &:hover {
    background-color: fadeout(@primary-color, 90%);
    transition: 1s;
  }
}
</style>
