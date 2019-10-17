<template>
  <div>
    <b-form @submit.prevent="addInventory">
      <base-header 
        class="pb-6" 
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle title="Add New Inventory" />
          <b-button 
            :disabled="loading" 
            class="btn btn-primary text-white" 
            type="submit">
            <i class="fa fa-save" /> Add Inventory
          </b-button>
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <h3 class="mr-b-20">New Inventory</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input
                    v-model="name"
                    class="col-md-12"
                    label="Name"
                    placeholder="Inventory Name"
                  />
                  <div class="form-group col-md-12">
                    <label>Description</label>
                    <textarea
                      v-model="description"
                      placeholder="Inventory description"
                      rows="4"
                      max-rows="6"
                      class="form-control"
                    />
                  </div>
                  <base-input
                    v-model="capacity"
                    class="col-md-6"
                    label="Capacity"
                    type="number"
                    placeholder="0"
                  />
                  <base-input
                    v-model="price"
                    class="col-md-6"
                    label="Price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-l-20">
                  <div class="form-group col-md-12">
                    <label>Eatry Category:</label>
                    <el-select 
                      v-model="eatry_category_id" 
                      placeholder="Select Category">
                      <el-option
                        v-for="category in categories"
                        :key="category.id"
                        :label="category.name"
                        :value="category.id"
                      />
                    </el-select>
                  </div>
                  <div class="form-group col-md-12">
                    <b-form-group label="Eatry Availability">
                      <b-form-checkbox-group v-model="eatry_availability">
                        <b-form-checkbox :value="breakfast">Breakfast</b-form-checkbox>
                        <b-form-checkbox :value="lunch">Lunch</b-form-checkbox>
                        <b-form-checkbox :value="dinner">Dinner</b-form-checkbox>
                        <b-form-checkbox :value="all">All Times</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                  </div>

                  <div class="form-group col-md-12">
                    <b-form-checkbox 
                      v-model="can_order" 
                      value="true">Can members start ordering?</b-form-checkbox>
                  </div>

                  <div class="form-group col-md-12">
                    <b-form-checkbox 
                      v-model="is_special" 
                      value="true">Is eatry special?</b-form-checkbox>
                  </div>
                </div>
              </div>
              <UploadButton
                v-model="banner_url"
                service="eatry"
                label="Upload Inventory Banner (<500KB & size 1125x582)"
              />
            </div>
          </card>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import SectionTitle from '@/components/shack/SectionTitle.vue'
import UploadButton from '@/components/shack/UploadButton.vue'
import { Select, Option } from 'element-ui'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    UploadButton,
    SectionTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ store, $eatry, error }) {
    await $eatry
      .getAllEatryCategories()
      .then(data => {
        store.commit('eatry/setCategories', data)
      })
      .catch(err => {
        error({
          statusCode: err.status || 404,
          message: err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message
        })
      })
  },
  data() {
    return {
      loading: false,
      name: '',
      description: '',
      capacity: 10,
      price: 10,
      eatry_category_id: null,
      can_order: '',
      banner_url: '',
      is_special: '',
      breakfast: {
        from: '06:00',
        to: '11:00',
        weekdays: [1, 6]
      },
      lunch: {
        from: '12:00',
        to: '14:00',
        weekdays: [1, 6]
      },
      dinner: {
        from: '15:00',
        to: '00:00',
        weekdays: [1, 6]
      },
      all: {
        from: '00:00',
        to: '00:00',
        weekdays: [1, 6]
      },
      eatry_availability: []
    }
  },
  computed: {
    ...mapState({
      categories: state => state.eatry.categories.data
    })
  },
  methods: {
    async addInventory() {
      const {
        name,
        description,
        capacity,
        price,
        banner_url,
        eatry_category_id,
        eatry_availability,
        can_order,
        is_special
      } = this

      this.loading = !this.loading

      const payload = {
        name,
        description,
        capacity,
        price,
        banner_url,
        eatry_category_id,
        eatry_availability,
        can_order: Boolean(can_order),
        is_special: Boolean(is_special)
      }

      this.$eatry
        .addOneEatry(payload)
        .then(({ data }) => {
          this.$bvToast.toast(`${name} add successfully`, {
            title: 'Success',
            variant: 'success',
            solid: true
          })

          setTimeout(() => {
            this.$router.push({ name: 'space-eatry-inventory' })
          }, 3000)
        })
        .catch(err => {
          const message = err.response
            ? JSON.stringify(err.response.data.errors)
            : err.message
          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })

          this.loading = !this.loading
        })
    }
  }
}
</script>
