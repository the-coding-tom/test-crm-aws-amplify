<template>
  <div>
    <base-button
      type="primary"
      class="mb-0 btn-purple"
      @click="modals.classic = true"
    >Confirm / Reject</base-button>
    <modal :show.sync="modals.classic">
      <h6 
        slot="header" 
        class="modal-title" />
      <h4 class="txt-red">Confirm Membership</h4>
      <p class="mb-4">Select membership plan, this will send an invitation email to the Member.</p>

      <template slot="footer">
        <base-button type="success">Confirm Membership</base-button>
        <base-button 
          type="danger" 
          class="ml-auto">Reject Membership</base-button>
      </template>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'EventModal',
  components: {},
  data() {
    return {
      modals: {
        classic: true,
        notice: false,
        form: false
      },
      text:
        'For employees of a startup that do not pay. This membership will run for 10 days and will cover a total value of $100.'
    }
  }
}
</script>
