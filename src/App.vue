<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("./assets/language-selection-bg.svg");
  height: 100%;
  min-height: 100vh;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  box-sizing: content-box;
  overflow-x: hidden;
      /* min-width: 100vw; */
}

/* media query */
@media only screen and (max-width: 576px){
  #app{
    position: fixed;
    /* position: relative; */
    display: block;
    overflow-x: hidden;
    min-width: 100vw
  }
}

</style>
