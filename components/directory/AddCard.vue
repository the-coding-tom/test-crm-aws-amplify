<template>
  <div>
    <b-form @submit.prevent="updateCard">
      <div class="errorbox">
        <div
          v-for="error in errors"
          :key="error.message"
          class="error">
          {{ error }}
        </div>
      </div>
      <div id="card-tainer">
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
    this.paymentForm = new SqPaymentForm({
      autoBuild: false,
      applicationId: applicationId,
      locationId: locationId,
      inputClass: 'sq-input',
      // Initialize the payment form elements
      // Customize the CSS for SqPaymentForm iframe elements
      inputStyles: [
        {
          backgroundColor: 'transparent',
          color: '#4c4d4f',
          fontSize: '14px',
          fontWeight: '100',
          padding: '10px',
          placeholderColor: 'grey'
        },
        {
          mediaMaxWidth: '800px',
          fontSize: '10px'
        },
        {
          mediaMaxWidth: '800px',
          mediaMinWidth: '600px',
          fontSize: '1px',
          backgroundColor: 'rgba(118,170,233,1)'
        }
      ],
      // Initialize Apple Pay placeholder ID
      applePay: {
        elementId: that.id + '-sq-apple-pay'
      },
      // Initialize Masterpass placeholder ID
      masterpass: {
        elementId: that.id + '-sq-masterpass'
      },
      // Initialize the credit card placeholders
      cardNumber: {
        elementId: that.id + '-sq-card-number',
        placeholder: 'Card Number'
      },
      cvv: {
        elementId: that.id + '-sq-cvv',
        placeholder: 'CVV'
      },
      expirationDate: {
        elementId: that.id + '-sq-expiration-date',
        placeholder: 'MM / YY'
      },
      postalCode: {
        elementId: that.id + '-sq-postal-code',
        placeholder: 'Zip Code'
      },
      // SqPaymentForm callback functions
      callbacks: {
        /*
           * callback function: methodsSupported
           * Triggered when: the page is loaded.
           */
        methodsSupported: function(methods) {
          // Only show the button if Apple Pay for Web is enabled
          // Otherwise, display the wallet not enabled message.
          that.applePay = methods.applePay
          that.masterpass = methods.masterpass
        },
        /*
           * Digital Wallet related functions
           */
        createPaymentRequest: function() {
          var paymentRequestJson
          /* ADD CODE TO SET/CREATE paymentRequestJson */
          return paymentRequestJson
        },
        validateShippingContact: function(contact) {
          var validationErrorObj
          /* ADD CODE TO SET validationErrorObj IF ERRORS ARE FOUND */
          return validationErrorObj
        },
        /*
           * callback function: cardNonceResponseReceived
           * Triggered when: SqPaymentForm completes a card nonce request
           */
        cardNonceResponseReceived: function(errors, nonce, cardData) {
          if (errors) {
            errors.forEach(function(error) {
              that.errors.push(error.message)
            })
            return
          }

          //call function to send to backend
          that.processInvitation(nonce)
        },
        /*
           * callback function: paymentFormLoaded
           * Triggered when: SqPaymentForm is fully loaded
           */
        paymentFormLoaded: function() {
          console.log('paymentFormLoaded')
          /* HANDLE AS DESIRED */
        }
      }
    })

    this.paymentForm.build()
  },
  methods: {
    updateCard() {
      this.paymentForm.requestCardNonce()
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
