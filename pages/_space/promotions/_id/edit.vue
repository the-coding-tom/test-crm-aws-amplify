<template>
  <div>
    <b-form @submit.prevent="editPlan">
      <base-header 
        class="pb-6" 
        type>
        <div class="d-flex justify-content-between align-items-center py-4">
          <MainTitle title="Update Promotion" />
          <b-button
            :disabled="loading"
            class="btn btn-primary text-white"
            type="submit"
          >Update Promotion</b-button
          >
        </div>
      </base-header>

      <div class="container-fluid mt--6">
        <div class="card-deck flex-column flex-xl-row">
          <card>
            <div class="row">
              <div class="col-md-6">
                <div class="row pd-r-20">
                  <base-input
                    id="name"
                    v-model="promotion.name"
                    class="col-md-12"
                    label="Name of Promotion"
                    placeholder="Entrepreneur"
                    required
                  />
                  <b-form-group
                    class="col-md-12"
                    label="Promotion Is Allowed In:"
                  >
                    <b-row>
                      <b-col md="10">
                        <b-form-checkbox
                          id="bookingRooms"
                          v-model="bookingRooms"
                          :value="true"
                          :unchecked-value="false"
                          name="bookingRooms"
                          @change="bookingRoomsSelected"
                        >Booking Rooms</b-form-checkbox
                        >
                      </b-col>
                      <b-col md="10">
                        <b-form-checkbox
                          id="orderFoodAndDrinks"
                          v-model="orderingFoodAndDrinks"
                          :value="true"
                          :unchecked-value="false"
                          name="orderFoodAndDrinks"
                          @change="orderingFoodAndDrinksSelected"
                        >Ordering Food & Drinks</b-form-checkbox
                        >
                      </b-col>
                      <b-col md="10">
                        <b-form-checkbox
                          id="bookingEvents"
                          v-model="bookingEvents"
                          :value="true"
                          :unchecked-value="false"
                          name="bookingEvents"
                          @change="bookingEventsSelected"
                        >Booking Events</b-form-checkbox
                        >
                      </b-col>
                    </b-row>
                  </b-form-group>
                  <b-form-group
                    class="col-md-12"
                    label="Promotion Type:"
                    description="Only one type of a promotion can exist at any given point in time. eg: there can't be two credit type promotions existing at the same time"
                  >
                    <el-select
                      v-model="promotion.type"
                      placeholder="Select Promotion Type"
                    >
                      <el-option
                        v-for="n in promotionTypes"
                        :key="n.key"
                        :label="n.name"
                        :value="n.value"
                      />
                    </el-select>
                  </b-form-group>
                  <b-form-group
                    label="Promotion Amount (USD)"
                    description="An amount to give for this promotion"
                    class="col-md-6"
                  >
                    <b-form-input
                      id="price_per_cycle"
                      v-model="promotion.amount"
                      type="number"
                      placeholder="0.00"
                      required
                    />
                  </b-form-group>
                  <b-form-group
                    label="Expires on"
                    description="when this promotion expires"
                    class="col-md-6"
                  >
                    <client-only>
                      <date-picker
                        id="time"
                        v-model="promotion.expires_on"
                        width="100%"
                        input-class="form-control"
                        lang="en"
                        format="YYYY-MM-DD"
                        value-type="format"
                        confirm
                        type="date"
                        placeholder="Expire Date"
                      />
                    </client-only>
                  </b-form-group>
                </div>
              </div>

              <div class="col-md-6">
                <div class="row pd-l-20">
                  <b-row>
                    <div class="form-group col-md-12">
                      <label 
                        for="planvisibility" 
                        class="form-control-label"
                      >Active</label
                      >
                      <b-row>
                        <b-col md="10">
                          <b-form-checkbox
                            id="planVisibility"
                            v-model="promotion.state"
                            value="active"
                            unchecked-value="inactive"
                            name="planVisibility"
                          >Yes</b-form-checkbox
                          >
                          <p class="text-left mt-2">
                            Toggle on and off to activate or deactivate the
                            promotion.
                          </p>
                        </b-col>
                      </b-row>
                    </div>
                  </b-row>
                </div>
              </div>
            </div>
          </card>
        </div>
        <b-button
          class="text-primary mb-2"
          variant="transparent"
          @click="$router.go(-1)"
        ><i class="ti-angle-left" /> Back</b-button
        >
      </div>
    </b-form>
  </div>
</template>
<script>
// Components
import BaseHeader from '@/components/argon-core/BaseHeader'
import MainTitle from '@/components/shack/MainTitle.vue'
import { Select, Option } from 'element-ui'

import { mapState } from 'vuex'

export default {
  layout: 'ShackDash',
  components: {
    BaseHeader,
    MainTitle,
    [Select.name]: Select,
    [Option.name]: Option
  },
  async asyncData({ store, $promotion, params, error }) {
    const { id } = params

    return await $promotion
      .getPromotion(id)
      .then(({ data }) => {
        console.log('------------------------------------')
        console.log(data)
        console.log('------------------------------------')
        data.allowed_usage_areas = JSON.parse(data.allowed_usage_areas)

        return {
          promotion: data,
          id,
          bookingRooms: data.allowed_usage_areas.includes('room_booking'),
          orderingFoodAndDrinks: data.allowed_usage_areas.includes(
            'food_ordering'
          ),
          bookingEvents: data.allowed_usage_areas.includes('event_booking')
        }
      })
      .catch(err => {
        error({
          statusCode: err.statusCode,
          message: err.response
            ? JSON.stringify(err.response.data.message)
            : err.message
        })
      })
  },
  data() {
    return {
      loading: false,
      promotion: {
        name: '',
        expires_on: '',
        type: '',
        amount: 0,
        allowed_usage_areas: [],
        state: 'active'
      },
      bookingRooms: false,
      orderingFoodAndDrinks: false,
      bookingEvents: false,
      promotionTypes: [{ name: 'Free Credit', value: 'credit', key: '#1' }]
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    })
  },
  methods: {
    editPlan() {
      const { id, space, promotion } = this

      this.promotion.allowed_usage_areas = JSON.stringify(
        this.promotion.allowed_usage_areas
      )

      this.loading = !this.loading

      this.$promotion
        .updatePromotion(id, this.promotion)
        .then(({ data: { data } }) => {
          this.$bvToast.toast(
            `Promotion ~${this.promotion.name}~ updated successfully`,
            {
              title: 'Success',
              variant: 'success',
              solid: true
            }
          )
          this.loading = !this.loading
          this.$router.push({
            name: 'space-promotions'
          })
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
    },
    bookingRoomsSelected(value) {
      if (value) {
        this.promotion.allowed_usage_areas.push('room_booking')
      } else {
        const index = this.promotion.allowed_usage_areas.indexOf('room_booking')
        this.promotion.allowed_usage_areas.splice(index, 1)
      }
    },
    orderingFoodAndDrinksSelected(value) {
      if (value) {
        this.promotion.allowed_usage_areas.push('food_ordering')
      } else {
        const index = this.promotion.allowed_usage_areas.indexOf(
          'food_ordering'
        )
        this.promotion.allowed_usage_areas.splice(index, 1)
      }
    },
    bookingEventsSelected(value) {
      if (value) {
        this.promotion.allowed_usage_areas.push('event_booking')
      } else {
        const index = this.promotion.allowed_usage_areas.indexOf(
          'event_booking'
        )
        this.promotion.allowed_usage_areas.splice(index, 1)
      }
    }
  }
}
</script>
