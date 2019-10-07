<template>
  <tr>
    <td>
      <img
        :src="img"
        alt=""> <slot /> </td>
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
