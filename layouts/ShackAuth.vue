<template>
  <div class="wrapper shack-auth">
    <notifications />
    <div class="container-fluid h-100">
      <nuxt />
    </div>
  </div>
</template>

<style lang="scss">
.shack-auth * {
  font-family: 'GothamBook';
}
html,
body,
#__layout,
#__nuxt,
.shack-auth.wrapper {
  height: 100%;
}
.shack-auth h1 {
  font-family: 'BigCaslon';
  font-size: 35px;
}
</style>
