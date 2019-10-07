<template>
  <div class="col-md-3 sh-thumb">
    <card>
      <span class="label label-default">
        <template v-if="status">
          <i class="fa fa-lock"/> Private
        </template>
        <template v-else>
          <i class="fa fa-unlock"/> Public
        </template>
      </span>
      <div class="d-flex mr-tb-10">
        <img 
          :src="img ? img : '/img/placeholder.jpg'" 
          class="mr-r-10 rounded-circle avatar">
        <div>
          <h3><a :href="link">{{ name }}</a></h3>
          {{ company }}
        </div>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  props: ['name', 'company', 'status', 'thumbCol', 'link']
}
</script>
