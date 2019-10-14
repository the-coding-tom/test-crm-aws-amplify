<template>
  <div>
    <base-header
      class="pb-6"
      type="">
      <div class="d-flex justify-content-between py-4">
        <MainTitle
          title="Dashboard"
          subtitle="This Week"/>
      </div>

      <div class="row">
        <TopWidget
          value="0"
          img="/img/icon-user.png"
          text="Members Checked In" />
        <TopWidget
          value="$ 0"
          img="/img/icon-wallet.png"
          text="Unpaid Invoices" />
        <TopWidget
          value="$ 0"
          img="/img/icon-discount.png"
          text="Bookings Revenue" />
        <TopWidget
          value="0"
          img="/img/icon-help.png"
          text="Issues Raised" />
      </div>
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--6">
      <div class="card-deck flex-column flex-xl-row">
        <card>
          <div
            slot="header"
            class="row align-items-center">
            <div class="col">
              <SectionTitle
                title="Activity Feed"
                subtitle="Usage Stream on Mobile Platform"/>
            </div>
          </div>
          <div class="m-n25 sh-activity">
            <table class="table table-hover table-striped">
              <tbody>
                <EmptyActivity v-if="false" />
                <template v-else>
                  <Activity
                    img="/img/icon-calendar-o.png"
                    date="2h ago">
                    Gerhard Malah booked Restaurant f Nov - 01:00PM (2h)
                  </Activity>
                  <Activity
                    img="/img/icon-user-o.png"
                    alt="9h ago">
                    <a href="/ui/members/view">Jeffery Monoka</a>â€™s membership was confirmed
                  </Activity>
                  <Activity
                    img="/img/icon-notification-o.png"
                    date="22h ago">
                    <a href="/ui/members/view">Jeff Bean</a> changed their payment method to Credit Card
                  </Activity>
                  <Activity
                    img="/img/icon-user-o.png"
                    date="6d ago">
                    <i class="ti-user"/> New member <a href="/ui/members/view">Jeffery Monoka</a>, applied on The Entrepreneur Plan
                  </Activity>
                  <Activity
                    img="/img/icon-discount-o.png"
                    date="7d ago">
                    <a href="javascript:void(0)">Invoice 1145</a> (12.00 USD) created for Jeff Bean
                  </Activity>
                  <Activity
                    img="/img/icon-calendar-o.png"
                    date="7d ago">
                    <a href="/ui/members/view">Michael Dean</a> booked Board Room for 05 Nov - 04:00PM (1h)
                  </Activity>
                  <Activity
                    img="/img/icon-notification-o.png"
                    date="7d ago">
                    You reactivated the membership of <a href="/ui/members/view">Peter Mutch</a>
                  </Activity>
                  <Activity
                    img="/img/icon-calendar-o.png"
                    date="7d ago">
                    <a href="/ui/members/view">Albert Ultrich</a> booked Restaurant for 04 Nov - 01:00PM (1h)
                  </Activity>
                  <Activity
                    img="/img/icon-discount-o.png"
                    date="7d ago">
                    <a href="/ui/members/view">Invoice 1144</a> (15.00 USD) created for Jeff Bean
                  </Activity>
                </template>
              </tbody>
            </table>
          </div>
          <a
            slot="footer"
            href="/ui/dashboard/activity"
            class="mr-t-10">See More</a>
        </card>

        <card header-classes="bg-transparent">
          <div
            slot="header"
            class="row align-items-center">
            <div class="col">
              <SectionTitle
                title="Bookings"
                subtitle="Space, Events, Meals, and Resources"/>
            </div>
          </div>
          <div class="m-n25 sh-activity sh-bookings">
            <table class="table table-hover table-striped">
              <tbody>
                <EmptyActivity v-if="false" />
                <template
                  v-else>
                  <Booking
                    img="/img/placeholder.jpg"
                    title="Monday, 10:00AM - 2:00PM">
                    Board Room â€¢ Meeting with Axios Capital â€¢ Booking by: Albert Ultrich
                  </Booking>
                </template>
              </tbody>
            </table>
          </div>
          <div slot="footer">
            <a
              href="javascript:void(0)"
              class="mr-r-30">See More</a> <a href="javascript:void(0)">View Restaurant Bookings</a>
          </div>
        </card>
      </div>
    </div>

  </div>
</template>
<script>
import TopWidget from '~/components/shack/TopWidget.vue'
import Activity from '~/components/shack/Activity.vue'
import MainTitle from '~/components/shack/MainTitle.vue'
import SectionTitle from '~/components/shack/SectionTitle.vue'
import EmptyActivity from '~/components/shack/EmptyActivity.vue'
import FeedTable from '~/components/shack/FeedTable.vue'
import Booking from '~/components/shack/Booking.vue'

export default {
  layout: 'ShackDash',
  components: {
    Activity,
    TopWidget,
    Booking,
    FeedTable,
    EmptyActivity,
    SectionTitle,
    MainTitle
  }
}
</script>
<style>
</style>
