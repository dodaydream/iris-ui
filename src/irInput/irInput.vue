<template>
  <input class="ir-input" type="text" placeholder="{this.placeholder}"></input>
</template>

<style lang="less">
@import "../less/palette.less";
.ir-input {
  height: 2em;
  border: 1px solid #ccc;
  border-radius: 1px;
  transition: .25s;
  &:focus, &:hover {
    border-color: @primary-color;
  }
}
</style>

<script>
export default {
  props: ['placeholder']
}
</script>
