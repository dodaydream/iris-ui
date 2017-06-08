<template>
  <ir-menu-item class="ir-menu-item-expand">
    <li class="ir-menu-item" v-text="title" @click="toggle()"></li>
    <ul class="ir-menu-container" v-bind:class="{ 'ir-menu-hide': hide }">
      <slot></slot>
    </ul>
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
      this.hide = !this.hide
    }
  }
}
</script>

<style lang="less">
.ir-menu-item-expand:hover ul {
  display: block;
}

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
  display: none;
  padding: 0;
}
</style>
