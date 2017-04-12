<template>
  <div class="ir-navbar-menu">
    <button class="menu-button" @click="toggleMenu">
      <i class="md-icon">menu</i>
    </button>

    <div class="ir-navbar-menu-container" v-bind:class="{ 'ir-navbar-menu-container-show' : menuVisible}">
      <slot></slot>
    </div>

    <div class="ir-navbar-menu-backdrop" @click="closeMenu" v-bind:class="{'ir-navbar-menu-backdrop-active': menuVisible }"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuVisible: false
    }
  },
  methods: {
    openMenu () {
      this.menuVisible = true
      this.$el.focus()
      this.$emit('open')
    },
    closeMenu () {
      this.menuVisible = false
      this.$el.blur()
      this.$emit('close')
    },
    toggleMenu () {
      if (this.menuVisible) {
        this.closeMenu()
      } else {
        this.openMenu()
      }
    }
  }
}
</script>
<style lang="less">
@import '../less/palette.less';

.ir-navbar-menu{
  @media screen and (max-width: 768px) { //phone
    & > .menu-button {
      height: 56px;
      color: inherit;
      margin-left: 1em;
      line-height: 50%;
      outline: none;
      font-size: 1em;
      font-weight: lighter;
      background: none;
      border: none;
      padding: 0;
    }

    .ir-navbar-menu-container {
      position: fixed;
      z-index: 4;
      height: 100%;
      width: 256px;
      top: 0;
      left: -256px;
      background-color: @background-color;
      transition: .25s;
      transition-timing-function: ease-in-out;
    }

    .ir-navbar-menu-container-show {
      transform: translateX(256px);
    }

    .ir-navbar-menu-backdrop {
      transition: .5s;
    }

    .ir-navbar-menu-backdrop-active {
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: 3;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }


  @media screen and (min-width: 768px) {
    padding-right: 1em;

    & > .menu-button{
      display: none;
    }

    .ir-navbar-menu-container {
      * {
        display: inline;
      }

      .ir-menu-item{
        display: inline;
        font-size: 1.25em;
        padding: 1em 0.5em 1em 0.5em;
      }
    }
  }
}
</style>
