<template>
  <div class="ir-notification" v-bind:class="{'ir-notification-hide': hide}">
    <div class="message">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      message: '',
      hide: 'true'
    }
  },
  methods: {
    toggle () {
      this.hide = !this.hide
    }
  }
}
</script>

<style lang="less">
.ir-notification-hide {
  display: none;
}
</style>
