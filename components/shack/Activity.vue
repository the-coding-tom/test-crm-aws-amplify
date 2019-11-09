<template>
  <tr>
    <td class="activity">
      <slot />
    </td>
    <td>{{ date }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: null
    },
    date: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="css" scoped>
.activity {
  width: '100%';
}
</style>
