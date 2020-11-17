<template>
  <qrcode-stream 
    @decode="onDecode"/>
</template>
<script>
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  components: {
    QrcodeStream
  },
  mounted() {
    // exists only on client:
    console.log(QrcodeStream)
  },
  methods: {
    onDecode(data) {
      this.$emit('onDecode', data)
    }
  }
}
</script>
