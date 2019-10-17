<template>
  <div>
    <base-header 
      class="pb-6" 
      type>
      <div class="d-flex justify-content-between align-items-center py-4">
        <MainTitle 
          title="Eatry" 
          subtitle="View" />
        <b-button 
          :to="{name: 'space-eatry-inventory-id-edit', params: {id}}" 
          variant="primary">
          <i class="ti-pencil" /> Edit Eatry
        </b-button>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-md-4">
          <card class="sh-eventpv">
            <div class="m-n25 img-wrap">
              <img 
                :src="banner_url" 
                class="img-fluid" 
                alt >
            </div>
            <div class="pv-content">
              <h3>{{ name }}</h3>
              <p class="text-muted">{{ description }}</p>
              <badge type="info">{{ eatry_category.name }}</badge>
            </div>
            <div class="pv-footer">
              <p>
                Price: {{ space.currency_symbol }} {{ price }} /
                <span class="text-muted">ticket</span>
              </p>
              <p>Capacity: {{ capacity }}</p>
            </div>
          </card>
        </div>
      </div>
      <b-button 
        class="text-primary mb-2" 
        variant="transparent" 
        @click="$router.go(-1)">
        <i class="ti-angle-left" /> Back
      </b-button>
    </div>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import SectionTitle from '@/components/shack/SectionTitle.vue'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    SectionTitle
  },
  async asyncData({ store, error, params, $eatry }) {
    const { id } = params

    return await $eatry
      .getOneEatry(id)
      .then(({ data }) => {
        return {
          ...data
        }
      })
      .catch(e => {
        error({
          statusCode: e.statusCode,
          message: e.response
            ? JSON.stringify(e.response.data.errors)
            : e.message
        })
      })
  }
}
</script>

<style lang="scss" scoped>
.sh-eventpv {
  .img-wrap {
    height: 180px;
    overflow: hidden;
  }
  .badge {
    text-transform: unset;
    font-size: 13px;
    font-weight: normal;
    padding: 6px 19px 4px;
    border-radius: 15px;
  }
  .pv-content {
    margin-top: 50px;
  }
  .pv-footer {
    margin-top: 30px;
    p {
      margin-bottom: 5px;
    }
  }
  h3 {
    margin-bottom: 20px;
  }
  img {
    object-fit: cover;
    vertical-align: middle;
    height: 100%;
    width: 100%;
  }
}
</style>
