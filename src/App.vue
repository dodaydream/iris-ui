<template>
  <div class="ir-demo">
    <ir-navbar class="ir-navbar-fixed">
      <ir-navbar-menu>
        <ir-menu>
          <ir-menu-item>About</ir-menu-item>
          <ir-menu-item>Docs</ir-menu-item>
          <ir-menu-item>Contact</ir-menu-item>
        </ir-menu>
      </ir-navbar-menu>

      <span class="ir-title">Iris UI</span>
    </ir-navbar>

    <div class="container">
      <h1 class="section">Typography</h1>
      <h1>h1. Iris UI Heading</h1>
      <h2>h2. Iris UI Heading</h2>
      <h3>h3. Iris UI Heading</h3>
      <h4>h4. Iris UI Heading</h4>
      <h5>h5. Iris UI Heading</h5>
      <h6>h6. Iris UI Heading</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus interdum iaculis. Donec non justo dapibus, molestie sapien et, congue eros. Sed metus augue, luctus sed maximus finibus, tincidunt vel sapien. Mauris lobortis ipsum sit amet tortor ullamcorper tristique. Ut pretium rutrum vulputate. Duis non eros sollicitudin, ultrices est eu, dignissim massa. Duis varius odio ac felis feugiat, at fermentum libero scelerisque. Donec in gravida metus. Nam pretium elit id ultrices feugiat. Proin eu tincidunt mi.
      </p>

      <h1 class="section">Button</h1>
      <ir-button>Default</ir-button>
      <ir-button color="ir-btn-outline">Outline</ir-button>
    </div>
  </div>
</template>

<style lang="less">
@import "./less/palette.less";
.section {
  padding-bottom: 0.5em;
  border-bottom: 1px solid fadeout(@primary-color, 50%);
}
body {
  @media screen and (max-width: 1024px) {
    padding-top: 56px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 64px;
  }
}
</style>
