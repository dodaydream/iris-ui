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
  outline: none;
  font-size: 1em;
  font-weight: lighter;
  padding: 0.5em;
  border-radius: 2px;
  min-width: 5em;
  border: none;
  background: none;

  a {
    color: inherit;
    text-decoration: none;
  }
}

.ir-btn-default {
  color: @primary-color;
}

.ir-btn-outline {
  border: 1px solid @primary-color;
  color: @primary-color;
}

.ir-btn-emphasis {
  color: #fff;
  background: @primary-color;
  border: 1px solid @primary-color;
}

.ir-btn-warning {

}
</style>
