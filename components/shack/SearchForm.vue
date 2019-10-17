<template>
  <base-input 
    input-group-classes="input-group-merge sh-search" 
    group 
    class="mb-0">
    <template slot="prepend"><i class="fa fa-search"/></template>
    <input 
      v-model="searchParam" 
      type="text"
      class="form-control" 
      placeholder="Looking for ..."
      aria-label="Recipient's username" 
      aria-describedby="button-addon2" 
      @change="runSearch">
    <div class="input-group-append">
      <button 
        id="button-addon2" 
        class="btn btn-default" 
        type="button">Search</button>
    </div>
  </base-input>
</template>
<script>
export default {
  data() {
    return {
      searchParam: null
    }
  },
  methods: {
    async runSearch() {
      try {
        if (this.searchParam.length > 2) {
          const { data } = await this.$event.getEventsbyName(this.searchParam)
          console.log(data)
          this.$emit('searchResult', data)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
