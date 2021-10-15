<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ $route.params }}</h2>
  </div>
</template>

<script>
export default {
  name: 'DetailComponent',
};
</script>

<style scoped></style>
