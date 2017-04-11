<template>
  <button class="ir-button" v-bind:class="this.color">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'ir-btn-default'
    }
  }
}
</script>

<style lang="less">
@import "../less/palette.less";

.ir-button {
  outline: none;
  font-size: 1em;
  font-weight: lighter;
  padding: 0.5em;
  border-radius: 2px;
  min-width: 5em;
}

.ir-btn-default {
  background: none;
  border: none;
  color: @primary-color;
}

.ir-btn-outline {
  background: none;
  border: 1px solid @primary-color;
  color: @primary-color;
}
</style>
