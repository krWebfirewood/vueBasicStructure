<template>
  <div id="footerBlock">
    <div class="footerItem">푸터1</div>
    <div class="footerItem">푸터2</div>
    <div class="footerItem">푸터3</div>
    <div class="footerItem">푸터4</div>
    <div class="footerItem">푸터5</div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style lang="stylus">
#footerBlock
  margin-top: auto;
  display flex
  width 100%
  height 40px
  bottom: 0
  position fixed
  background-color gold

  .footerItem
    width 100%
    height 50px
    border solid 1px red
</style>
