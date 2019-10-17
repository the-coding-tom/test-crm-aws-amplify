<template>
  <div>
    <b-form @submit.prevent="updateCard">
      <div
        :class="{ complete }"
        class="row credit-card-inputs">
        <b-form-group
          class="col-md-12"
          label="Name on card">
          <b-form-input
            v-model="name"
            placeholder="John Doe"
            required/>
        </b-form-group>
        <div class="form-group col-md-12">
          <label>Card Number</label>
          <card-number
            ref="cardNumber"
            :stripe="stripe"
            :options="options"
            class="form-control stripe-element card-number"
            @change="number = $event.complete"
          />
        </div>
        <div class="form-group col-md-6">
          <label>Expires</label>
          <card-expiry
            ref="cardExpiry"
            :stripe="stripe"
            :options="options"
            class="form-control stripe-element card-expiry"
            @change="expiry = $event.complete"
          />
        </div>
        <div class="form-group col-md-6">
          <label>CVV</label>
          <card-cvc
            ref="cardCvc"
            :stripe="stripe"
            :options="options"
            class="form-control stripe-element card-cvc"
            @change="cvc = $event.complete"
          />
        </div>
      </div>
      <b-button
        :disabled="loading"
        variant="primary"
        type="submit"
        class="float-right">Save Card</b-button>
    </b-form>
  </div>
</template>

<script>
import {
  CardNumber,
  CardExpiry,
  CardCvc,
  createPaymentMethod
} from 'vue-stripe-elements-plus'

const { publishable_key } = process.env

export default {
  name: 'Stripecard',
  components: {
    CardNumber,
    CardExpiry,
    CardCvc
  },
  props: {
    stripe: {
      type: String,
      default: publishable_key
    },
    loading: {
      type: Boolean,
      default: false
    },
    toggleLoading: {
      type: Function,
      default: () => {}
    }
  },
  data: () => ({
    name: '',
    complete: false,
    number: false,
    expiry: false,
    cvc: false,
    options: {
      style: {
        base: {
          color: '#555'
        }
      }
    }
  }),
  watch: {
    number() {
      this.update()
    },
    expiry() {
      this.update()
    },
    cvc() {
      this.update()
    }
  },
  methods: {
    update() {
      this.complete = this.number && this.expiry && this.cvc

      // field completed, find field to focus next
      if (this.number) {
        if (!this.expiry) {
          this.$refs.cardExpiry.focus()
        } else if (!this.cvc) {
          this.$refs.cardCvc.focus()
        }
      } else if (this.expiry) {
        if (!this.cvc) {
          this.$refs.cardCvc.focus()
        } else if (!this.number) {
          this.$refs.cardNumber.focus()
        }
      }
      // no focus magic for the CVC field as it gets complete with three
      // numbers, but can also have four
    },
    updateCard() {
      this.toggleLoading()

      const { name } = this

      createPaymentMethod('card', {
        billing_details: {
          name
        }
      })
        .then(({ paymentMethod }) => {
          this.$emit('addCard', paymentMethod.id)
        })
        .catch(e => {
          this.toggleLoading()
          this.$bvToast.toast(e, {
            title: 'Error',
            variant: 'danger'
          })
        })
    }
  }
}
</script>

<style>
.ElementsApp,
.ElementsApp .InputElement {
  color: #8898aa;
}

.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style>
