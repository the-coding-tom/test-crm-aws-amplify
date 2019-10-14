<template>
  <tr>
    <td class="pd-r-0">
      <img
        :src="img"
        height="36"
        alt="">
    </td>
    <td>
      {{ title }} <br>
      <span> <slot/> </span>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
}
</script>
