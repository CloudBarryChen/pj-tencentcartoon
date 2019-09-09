<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

  @import './assets/font-awesome-4.7.0/css/font-awesome.min.css';

  html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img, figure, figcaption, fieldset {
    margin: 0;
    padding: 0;
  }

  body, html {
    font-size: .12rem;
  }

  a {
    text-decoration: none;
    color: #6d6d6d;
  }

  i, em {
    font-style: normal;
  }

  li {
    list-style: none;
  }

  input {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, strong, b {
    font-weight: normal;
  }

  .clearfix {
    *zoom: 1;
  }

  .clearfix:after {
    content: "";
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
