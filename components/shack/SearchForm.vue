<template>
  <b-form @submit.prevent="search">
    <base-input
      input-group-classes="input-group-merge sh-search"
      group
      class="mb-0"
    >
      <template slot="prepend"><i class="fa fa-search" /></template>
      <input
        v-model="searchTerm"
        :required="required"
        type="text"
        class="form-control"
        placeholder="Looking for ..."
        aria-describedby="button-addon2"
      >
      <div class="input-group-append">
        <button
          id="button-addon2"
          :disabled="loading"
          class="btn btn-default"
          type="submit"
        >
          <i 
            v-if="loading" 
            class="fa fa-spinner fa-spin" /><span v-else>
              Search</span
              >
        </button>
      </div>
    </base-input>
  </b-form>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    searchTerm: ''
  }),
  methods: {
    search() {
      this.$emit('input', this.searchTerm)

      this.$emit('search', this.searchTerm)
    }
  }
}
</script>
