<template>
  <ir-menu-item class="ir-menu-item-expand">
    <a class="ir-menu-item" v-text="title" @click="toggle()"></a>
    <div class="ir-menu-container" v-bind:class="{ 'ir-menu-hide': hide }">
      <slot></slot>
    </div>
    <div class="ir-menu-backdrop" v-if="hide === false" @click="toggle()"></div>
  </ir-menu-item>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      hide: true
    }
  },
  methods: {
    toggle () {
      if (this.hide) {
        this.hide = false
      } else {
        this.hide = true
      }
    }
  }
}
</script>

<style lang="less">
.ir-menu-item-expand {
  padding: 0;
  &:hover {
    background-color: transparent;
  }

  & > .ir-menu-container {
    box-shadow: inset 0 0 3px rgba(0,0,0,0.22);
  }
}

.ir-menu-container {
  transition: .25s;
}

.ir-menu-hide {
  opacity: 0;
  display: none;
}

.ir-menu-backdrop {
  position: fixed;
  z-index: 3;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
