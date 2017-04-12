<template>
  <div class="ir-demo">
    <ir-navbar class="ir-navbar-fixed">
      <ir-navbar-menu>
        <ir-menu>
          <ir-menu-item>About</ir-menu-item>
          <ir-menu-item>Docs</ir-menu-item>
          <ir-menu-item>GitHub</ir-menu-item>
        </ir-menu>
      </ir-navbar-menu>

      <span class="ir-title">Iris UI</span>
    </ir-navbar>

    <ir-jumbotron>
      <h1 align="center">Iris UI</h1>
      <h3 align="center">Redefined Web UI Library</h3>
      <h5 align="center">
        <ir-button type="outline">Document</ir-button>
        <ir-button type="outline"><a href="https://github.com/dodaydream/iris-ui">View on GitHub</a></ir-button>
      </h5>
    </ir-jumbotron>

    <div class="container-fluid">
      <section>
        <h1 class="section">Navbar</h1>
        <ir-navbar>
          <ir-navbar-menu>
            <ir-menu>
              <ir-menu-item>About</ir-menu-item>
              <ir-menu-item>Docs</ir-menu-item>
              <ir-menu-item>GitHub</ir-menu-item>
            </ir-menu>
          </ir-navbar-menu>

          <span class="ir-title">Navbar default</span>
        </ir-navbar>

        <ir-navbar class="ir-navbar-coloured">
          <ir-navbar-menu>
            <ir-menu>
              <ir-menu-item>About</ir-menu-item>
              <ir-menu-item>Docs</ir-menu-item>
              <ir-menu-item>GitHub</ir-menu-item>
            </ir-menu>
          </ir-navbar-menu>

          <span class="ir-title">Coloured Navbar</span>
        </ir-navbar>
      </section>
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
      <ir-button type="outline">Outline</ir-button>
      <ir-button type="emphasis">Emphasis</ir-button>
    </div>

    <ir-footer prod-name="Iris UI">
    </ir-footer>
  </div>
</template>

<style lang="less">
.section {
  padding-bottom: 0.5em;
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
