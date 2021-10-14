<template>
  <div id="homeBlock">
    <HeaderComponent />
    <HomeComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue';
import HeaderComponent from '@/components/common/HeaderComponent';
import FooterComponent from '@/components/common/FooterComponent';

export default {
  name: 'HomePage',
  components: {
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  },
};
</script>

<style lang="stylus">
#homeBlock
  display flex
  flex-direction column
  min-height 80vh;
</style>
