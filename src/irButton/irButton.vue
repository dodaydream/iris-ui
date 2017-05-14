<template>
  <button class="ir-button" v-bind:class="'ir-btn-' + this.type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="less">
@import "../less/palette.less";

.ir-button {
  color: #fff;
  outline: none;
  font-size: 1em;
  padding: 0.5em;
  border-radius: 2px;
  min-width: 5em;
  border: none;
  background: none;
  a {
    color: inherit;
  }
}

.ir-btn-default {
  color: @primary-color;
  border: 1px solid @background-color;
}

.ir-btn-outline {
  background: @background-color;
  border: 1px solid @primary-color;
  color: @primary-color;
}

.ir-btn-emphasis {
  background: @primary-color;
  border: 1px solid @primary-color;
}

.ir-btn-success {
  background: @success-color;
  border: 1px solid @success-color;
}

.ir-btn-warning {
  background: @warning-color;
  border: 1px solid @warning-color;
}
</style>
