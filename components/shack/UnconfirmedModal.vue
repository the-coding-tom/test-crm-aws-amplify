<template>
  <div>
    <b-button
      variant="primary"
      class="btn-purple"
      @click="modals.classic = true">Confirm / Reject</b-button>
      <!-- <modal :show.sync="modals.classic">
      <h6
        slot="header"
        class="modal-title"/>
      <h4 class="txt-red">Confirm Membership</h4>
      <p class="mb-4">Select membership plan, this will send an invitation email to the Member.</p>

      <MembershipPlans />

      <template slot="footer">
        <base-button type="success">Confirm Membership</base-button>
        <base-button
          type="danger"
          class="ml-auto">Reject Membership</base-button>
      </template>

    </modal> -->
  </div>
</template>

<script>
import MembershipPlans from '~/components/shack/MembershipPlans.vue'
export default {
  components: {
    MembershipPlans
  },
  data() {
    return {
      modals: {
        classic: false,
        notice: false,
        form: false
      },
      text:
        'For employees of a startup that do not pay. This membership will run for 10 days and will cover a total value of $100.'
    }
  }
}
</script>
