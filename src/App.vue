<template>
<NavbarComp/>
<CardBlock />
  <router-view/>
</template>

<script>
import NavbarComp from './components/NavbarComp/NavbarComp.vue';
import CardBlock from './components/CardBlock/CardBlock.vue';

export default {
  components: {
    NavbarComp, CardBlock,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

::selection {
    color: rgb(255, 152, 0);
    background: rgb(32, 35, 41);
}
</style>
