<template>
  <nav class="ir-navbar" v-bind:class="{ 'ir-shadow': irShadow }">
    <div class="ir-navbar-container">
      <slot></slot>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    scrollDist: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      scrolled: 0
    }
  },
  computed: {
    irShadow () {
      if (this.scrolled > this.scrollDist) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY
    }
  }
}
</script>

<style lang="less">
@import '../less/palette.less';
.ir-shadow {
  box-shadow:  0 3px 3px rgba(0,0,0,0.22);
}

.ir-navbar-fixed {
  position: fixed;
  top: 0px;
  z-index: 2;
  width: 100%;
}

.ir-navbar-container {
  width: 100%;
  display: flex;
  align-items: center;
  align-self: flex-start;
}

.ir-navbar {
  color: @primary-color;
  background-color: @background-color;

  .ir-title {
    font-size: 1.5em;
    padding-left: 0.5em;
    flex: 1;
  }

  @media screen and (max-width: 768px) { //phone
    .ir-navbar-container{
      height: 56px;
    }
  }

  @media screen and (min-width: 768px) {
    .ir-navbar-container{
      height: 64px;
    }

    .ir-menu-toggle {
      display: none;
    }

    .ir-title {
      order: -1;
    }

  }
}
</style>
