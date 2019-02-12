<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col align-self-center">
                    <h1>Formula vue </h1>
                </div>
                <div class="col">
                    <div class="mt-5 mb-5">
                        <img width="80" src="./assets/logo.png">
                        <img width="160" src="./assets/f1-logo.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col">
                    <b-navbar toggleable="md" type="dark" variant="info">
                        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                        <b-collapse is-nav id="nav_collapse">
                            <b-navbar-nav>
                                <b-nav-item to="/">Home</b-nav-item>
                                <b-nav-item to="/drivers">Drivers</b-nav-item>
                                <b-nav-item to="/contact">Contact val fornt</b-nav-item>
                                <b-nav-item to="/contactAlt">Contact val back</b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
                </div>
            </div>
        </div>
    <router-view/>
    </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
