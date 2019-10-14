<template>
  <div>
    <base-header 
      class="pb-6" 
      type="">
      <div class="row py-4">
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <MainTitle 
              title="Community Directory" 
              subtitle="342 Profiles" />
            <div class="d-flex align-items-center">
              <b-form-checkbox
                v-model="checked"
                switch
                size="lg"
                variant="success"
              >
                <span 
                  v-if="checked" 
                  class="text-success">Check in</span>
                <span 
                  v-else 
                  class="text-muted">Check Out</span>
              </b-form-checkbox>
            </div>
          </div>
        </div>
        <div class="col-md-6 mr-l-child-10 text-right">
          <a 
            href="#" 
            class="text-primary">
            <i class="fa fa-user" /> Make Admin
          </a>
          <a 
            href="#" 
            class="text-primary">
            <i class="fa fa-sticky-note" /> View Notes
          </a>
          <a 
            href="#" 
            class="text-primary">
            <i class="fa fa-pen" /> Edit Profile
          </a>
          <a 
            href="#" 
            class="text-danger">
            <i class="fa fa-trash" /> Delete Member
          </a>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <ProfileHead
              :status="true"
              img="/img/placeholder.jpg"
              name="Dami Famuyibo"
              company="Outside Insight"
              address="Shoreditch, UK, Something Here, Another Thing"
              date="August 18"
            />
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <i class="fa fa-envelope" /> dami@outsideinsight.com
                </div>
                <div class="col">
                  <i class="fa fa-phone" /> +1 (705) 8823 6123
                </div>
              </div>
              <div class="mt-4">
                <div class="text-muted">
                  Profile
                </div>
                <p>
                  I am currently a Sales Executive Manager at a leading News
                  Intelligence firm which largely focuses revealing breadcrumbs
                  left on the web and unveiling new trends within consumer
                  businesses.
                </p>
                <badge>News</badge>
                <badge>AI</badge>
                <badge>Outside Insight</badge>
                <badge>Consumer Brands</badge>
                <badge>External Data</badge>
              </div>
              <div class="mt-4">
                <p><i class="ti-twitter-alt" /> @damifam</p>
                <p><i class="ti-linkedin" /> /damifamuyibo</p>
                <p><i class="ti-world" /> outsideinsight.com</p>
              </div>
              <div class="sh-dls">
                <span> Joined on:</span> October 18, 2019
              </div>
              <div class="sh-dls">
                <span>Renewal due by:</span> December 20, 2020
              </div>

              <hr 
                class="w-25 bg-dark3 text-default" 
                align="left" >

              <div class="sh-dls">
                <span>First Reference:</span> Samuel Jervier - sam@shack15.com
              </div>
              <div class="sh-dls">
                <span>Second Reference:</span> Detrich Peterson -
                detrich@ff41.co.uk
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <card header-classes="bg-transparent">
            <div 
              slot="header" 
              class="d-flex justify-content-between">
              <div class="txt-upper">
                Card Details
              </div>
              <template v-if="!cardempty">
                <a 
                  href="#" 
                  class="text-primary">
                  <i class="fa fa-credit-card" /> Add New Card
                </a>
              </template>
            </div>
            <template v-if="cardempty">
              <div class="text-center">
                <div class="text-muted">
                  No card added for member
                </div>
                <a href="#">Add New Card</a>
              </div>
            </template>
            <template v-else>
              <div class="d-flex justify-content-between">
                <h3>Alessandro Mascellino</h3>
                <div class="mr-l-child-15">
                  <span> <i class="fa fa-credit-card" /> **** 5161 </span>
                  <span> Sept, 2020 </span>
                  <badge type="success">
                    Active
                  </badge>
                  <a 
                    href="#" 
                    class="text-primary">
                    <i class="fa fa-pen" />
                  </a>
                  <a 
                    href="#" 
                    class="text-danger">
                    <i class="fa fa-trash" />
                  </a>
                </div>
              </div>
            </template>
          </card>
          <card>
            <div 
              slot="header" 
              class="d-flex justify-content-between">
              <div class="txt-upper">
                MEMBERSHIP PLAN
              </div>
              <a 
                href="#" 
                class="text-primary">
                <i class="fa fa-plus" /> Add New Plan
              </a>
            </div>
            <div class="m-n25">
              <table class="table table-hover table-striped">
                <tbody>
                  <tr>
                    <td>Annual Membership</td>
                    <td class="d-flex justify-content-between">
                      <span>$ 1,560.00</span>
                      <span>Until 15 Dec, 2020</span>
                    </td>
                    <td class="mr-l-child-15">
                      <a 
                        href="#" 
                        class="text-primary">
                        <i class="fa fa-pen" />
                      </a>
                      <a 
                        href="#" 
                        class="text-danger">
                        <i class="fa fa-trash" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Monthly Desk Membership</td>
                    <td class="d-flex justify-content-between">
                      <span>$ 200.00</span>
                      <span>Until 07 Nov, 2019</span>
                    </td>
                    <td class="mr-l-child-15">
                      <a 
                        href="#" 
                        class="text-primary">
                        <i class="fa fa-pen" />
                      </a>
                      <a 
                        href="#" 
                        class="text-danger">
                        <i class="fa fa-trash" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>

          <card>
            <div 
              slot="header" 
              class="d-flex justify-content-between">
              <div class="txt-upper">
                Events
              </div>
              <a 
                href="#" 
                class="text-primary">
                <i class="fa fa-calendar" /> Add Event Booking
              </a>
            </div>
            <template v-if="bookingsempty">
              <div class="text-center">
                <div class="text-muted">
                  No Events Booked by Member
                </div>
                <a href="#">Add New Booking</a>
              </div>
            </template>
            <template v-else>
              <div class="m-n25">
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr>
                      <td>San Francisco Startup Socials</td>
                      <td class="d-flex justify-content-between">
                        <span>1 ticket</span>
                        <span>$52.00</span>
                      </td>
                      <td>
                        Today - 4pm,
                        <el-tooltip 
                          content="Open Lounge" 
                          placement="bottom">
                          <i class="fa fa-info-circle" />
                        </el-tooltip>
                      </td>
                      <td>
                        <a 
                          href="#" 
                          class="text-danger">
                          <i class="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                    <tr 
                      v-for="n in 4" 
                      :key="n">
                      <td>Creating Successful B2B Bus...</td>
                      <td class="d-flex justify-content-between">
                        <span>3 tickets</span>
                        <span>$15.00</span>
                      </td>
                      <td>
                        Tues - 11am,
                        <el-tooltip
                          content="Conference Room"
                          placement="bottom"
                        >
                          <i class="fa fa-info-circle" />
                        </el-tooltip>
                      </td>
                      <td>
                        <a 
                          href="#" 
                          class="text-danger">
                          <i class="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div 
                slot="footer" 
                class="sh-pagination">
                <a href="#">Prev</a>
                <a 
                  href="#" 
                  class="btn btn-primary btn-sm">1</a>
                <a 
                  v-for="n in 10" 
                  :key="n" 
                  href="#"> {{ n + 1 }}</a>
                <a href="#">Next</a>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import ProfileHead from '~/components/shack/ProfileHead.vue'

export default {
  layout: 'ShackDash',
  components: {
    MainTitle,
    ProfileHead
  },
  data() {
    return {
      checked: false
    }
  }
}
</script>
<style lang="scss">
.sh-dls {
  span {
    color: #8898aa;
  }
}
.custom-switch.b-custom-control-lg .custom-control-label {
  font-size: 15px;
  vertical-align: middle;
  &::before {
    top: 1px;
  }
  &::after {
    top: 3px;
  }
}
.custom-control-input:checked ~ .custom-control-label::before,
.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
  background: #2dce89;
  border-color: #2dce89;
}
.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #dee2e6;
}
.sh-pagination {
  .btn {
    margin-top: -3px;
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
  a {
    border-radius: 0.25rem;
    margin-right: 5px;
    text-decoration: unset;
    &:first-child,
    &:last-child,
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
