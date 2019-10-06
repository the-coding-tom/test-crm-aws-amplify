<template>
  <div>
    <form @submit.prevent="submit">
      <input>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$axios.post('/login', {
        email: '',
        password: ''
      })
    }
  }
}
</script>
