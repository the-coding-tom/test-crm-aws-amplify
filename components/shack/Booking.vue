<template>
  <tr>
    <td>
      <div class="d-flex">
        <div>
          <img
            :src="img"
            width="50"
            height="50" >
        </div>
        <div class="ml-2">
          {{ title }}
          <br >
          <span>
            <slot />
          </span>
        </div>
      </div>
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
