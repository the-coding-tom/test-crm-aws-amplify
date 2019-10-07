<template>
  <tr>
    <td> {{ text ? text : 'No activity recorded on platform' }}</td>
  </tr>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    }
  }
}
</script>
