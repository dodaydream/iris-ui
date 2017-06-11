<template>
  <div class="ir-notification" v-bind:class="{ 'ir-notification-show': show}">
    <button class="ir-notify-close" @click="toggle ()"><i class="md-icon">clear</i></button>
    <div class="ir-message" v-text="message">
    </div>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="less">
@import '../less/palette.less';
.ir-notify-close {
  display: none;
  background-color: inherit;
  position: relative;
  top: -30px;
  left: -10px;
  border-radius: 50%;
  border: 1px solid #fff;
  height: 25px;
  padding: 0px;
  width: 25px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.22), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: @primary-color;
}
.ir-notification:hover .ir-notify-close {
  display: block;
  margin-right: -25px;
}

.ir-message {
  margin: 1em 0 1em 1em;
}

.ir-notification {
  position: fixed;
  height: 72px;
  background-color: white;
  transition: .2s;
  z-index: 999;
  display: flex;
  align-items: center;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    top: -68px;
    left: 0;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    border-radius: 3px;
    top: 64px;
    right: -330px;
    width: 320px;
  }
}

.ir-notification-show {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.22), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (max-width: 768px) {
    transform: translateY(64px);
  }

  @media screen and (min-width: 768px) {
    transform: translateX(-336px);
  }
}
</style>
