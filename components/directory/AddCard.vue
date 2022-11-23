<template>
  <div>
    <b-form 
      id="payment-form" 
      @submit.prevent="updateCard">
      <div class="errorbox">
        <div 
          v-for="error in errors" 
          :key="error.message" 
          class="error">
          {{ error }}
        </div>
      </div>
      <!-- <div id="card-tainer">
        <div
          :id="id+'-sq-card-number'"
          class="form-group cardfields card-number"/>
        <div
          :id="id+'-sq-expiration-date'"
          class="form-group cardfields expiration-date"/>
        <div
          :id="id+'-sq-cvv'"
          class="form-group cardfields cvv"/>
        <div
          :id="id+'-sq-postal-code'"
          class="form-group cardfields postal-code"/>
      </div> -->
      <!-- <form 
        id="payment-form" 
        @submit.prevent="submitForm"> -->
      <div id="card-container" />
      <!-- </form> -->
      <b-button
        id="card-button"
        :disabled="loading"
        variant="primary"
        type="submit"
        class="float-right"
      >Save Card</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Stripecard',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    toggleLoading: {
      type: Function,
      default: () => {}
    },
    id: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    name: '',
    errors: []
  }),
  created: function() {
    let locationId = process.env.square_location
    let applicationId = process.env.square_app_id
    let that = this

    async function main() {
      const payments = Square.payments(applicationId, locationId)

      const card = await payments.card()

      await card.attach('#card-container')

      async function eventHandler(event) {
        event.preventDefault()

        try {
          const result = await card.tokenize()

          if (result.status === 'OK') {
            that.processInvitation(result.token)
            // console.log(`Payment token is ${result.token}`)
          }
        } catch (e) {
          console.error(e)
        }
      }

      const cardButton = document.getElementById('card-button')

      cardButton.addEventListener('click', eventHandler)
    }

    main()
  },
  methods: {
    updateCard() {
      // this.paymentForm.requestCardNonce()
    },
    processInvitation(nonce) {
      this.toggleLoading()

      try {
        this.$emit('addCard', nonce)
        this.toggleLoading()
      } catch (error) {
        this.toggleLoading()
        this.$bvToast.toast(e.response.data.message, {
          title: 'Error',
          variant: 'danger'
        })
      }
    }
  }
}
</script>

<style>
.ElementsApp,
.ElementsApp .InputElement {
  color: #8898aa;
}

.sq-input {
  font-family: 'GothamBook';
  box-sizing: border-box;
  border: 1px solid #000;
  outline-offset: -2px;
  display: inline-block;
  -webkit-transition: border-color 0.2s ease-in-out, background 0.2s ease-in-out;
  -moz-transition: border-color 0.2s ease-in-out, background 0.2s ease-in-out;
  -ms-transition: border-color 0.2s ease-in-out, background 0.2s ease-in-out;
  transition: border-color 0.2s ease-in-out, background 0.2s ease-in-out;
}
</style>
