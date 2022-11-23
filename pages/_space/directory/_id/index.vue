<template>
  <div>
    <base-header 
      class="pb-6" 
      type="">
      <div class="row py-4">
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <MainTitle 
              title="Directory" 
              subtitle="Profile" />
            <div class="d-flex align-items-center">
              <b-form-checkbox
                v-model="checkin.status"
                switch
                value="checkin"
                unchecked-value="checkout"
                size="lg"
                variant="success"
                @change="checkinToggle"
              >
                <span 
                  v-if="checkin.status == 'checkin'" 
                  class="text-success"
                >Checked in</span
                >
                <span 
                  v-else 
                  class="text-muted">Checked Out</span>
              </b-form-checkbox>
            </div>
          </div>
        </div>
        <div class="col-md-6 mr-l-child-10 text-right">
          <b-button
            :to="{ name: 'space-memberships-id', params: { id: data.id } }"
            variant="transparent"
            class="text-primary"
          >
            <i class="fas fa-edit" /> Edit Membership
          </b-button>
          <b-button
            variant="transparent"
            class="text-primary"
            @click="drawer = true"
          >
            <i class="fa fa-sticky-note" /> View Notes
          </b-button>
          <b-button
            id="deleteMember"
            variant="transparent"
            class="text-danger"
            @click="deleteMember"
          >
            <i class="fa fa-trash" /> Delete Member
          </b-button>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <ProfileHead
              :status="data.prefix_type"
              :img="data.user_profile ? data.user_profile.picture : null"
              :name="
                data.user_profile
                  ? data.user_profile.full_name
                  : `${data.first_name} ${data.last_name}`
              "
              :company="data.user_profile ? data.user_profile.company : null"
              :address="data.user_profile ? data.user_profile.addresses : null"
              :date="data.user_profile ? data.user_profile.date_of_birth : null"
              :user-profile="data.user_profile"
              :user-id="data.user_id"
              :referral="data.subscriptions[0].ends_at"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <i class="fa fa-envelope" /> {{ data.email }}
                </div>
                <div 
                  class="col-md-6" 
                  style="color: red">
                  <b-badge
                    v-if="!data.covid_declaration_completed"
                    href="#"
                    variant="danger"
                    @click="toggleCovidCardStatus(true)"
                  >
                    <i
                      class="fa fa-square"
                      style="color: white; margin-right: 4px"
                    />
                    Covid vaccination ID not verfied</b-badge
                    >
                  <b-badge
                    v-else
                    href="#"
                    variant="success"
                    @click="toggleCovidCardStatus(false)"
                  >
                    <i class="fa fa-check" /> Covid vaccination ID
                    verfied</b-badge
                    >
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <i class="fa fa-phone" />
                  {{ data.user_profile && data.user_profile.phone }}
                </div>
                <div class="col-md-6">
                  <i class="fa fa-globe" />
                  {{ data.user_profile && data.user_profile.nationality }}
                </div>
              </div>
              <div class="row mt-2">
                <!-- <div class="col-md-6">
                  <i class="fa fa-user" />
                  {{ data.user_profile && data.user_profile.ethnicity }}
                </div> -->
                <div class="col-md-6">
                  <i class="fa fa-venus-mars" />
                  {{ data.user_profile && data.user_profile.gender }}
                </div>
              </div>
              <div class="mt-4">
                <!-- <div class="text-muted">Bio</div>
                <p>
                  {{ data.user_profile && data.user_profile.bio }}
                </p> -->
                <div v-if="data.user_profile">
                  <div class="text-muted">Company</div>
                  <p class="mr-1 mb-2">{{ data.user_profile.company }}</p>
                  <div class="text-muted">Position</div>
                  <p class="mr-1 mb-2">{{ data.user_profile.profession }}</p>
                  <!-- <div class="text-muted mt-2">Offers</div>
                  <badge
                    v-for="(offer, i) in data.user_profile.offers"
                    :key="`${offer}-${i}`"
                    class="mr-1"
                  >{{ offer }}</badge
                  > -->
                  <div class="text-muted mt-2">Skills</div>
                  <badge
                    v-for="(skill, i) in data.user_profile.skills"
                    :key="`${skill}-${i}`"
                    class="mr-1"
                  >{{ skill }}</badge
                  >
                </div>
                <div class="text-muted mt-3">Bio</div>
                <p>
                  {{ data.user_profile && data.user_profile.bio }}
                </p>
              </div>
              <div class="mt-4">
                <p>
                  <i class="ti-id-badge" /> {{ data && data.membership_id }}
                </p>
                <p>
                  <i class="ti-twitter-alt" />
                  {{ data.user_profile && data.user_profile.twitter }}
                </p>
                <p>
                  <i class="ti-linkedin" />
                  {{ data.user_profile && data.user_profile.linkedin }}
                </p>
                <p>
                  <i class="ti-world" />
                  {{ data.user_profile && data.user_profile.website }}
                </p>
              </div>
              <div class="sh-dls">
                <span> Joined on:</span>
                {{ $moment(data.created_at).format('MMMM DD, YYYY') }}
              </div>

              <div class="sh-dls">
                <span>Renewal due by:</span> {{ getSubscription }}
              </div>
              <div class="sh-dls">
                <span>Last Checkin Timestamp:</span>
                {{
                  data.last_checkin[0] &&
                    $moment(data.last_checkin[0].checkin_timestamp).format(
                      'MMMM DD, YYYY HH:mm:ss'
                    )
                }}
              </div>

              <hr 
                class="w-25 bg-dark3 text-default" 
                align="left" >

              <span v-html="getExtras(data.extras)" />

              <div class="sh-dls">
                <span> Paid by:</span>
                <nuxt-link
                  :to="{
                    name: 'space-memberships-id',
                    params: { id: data.paid_by },
                  }"
                >{{ data.payee_name }}</nuxt-link
                >
              </div>
              <div class="sh-dls">
                <span> Paying for:</span>
                <span 
                  v-for="paid in paid_for" 
                  :key="paid.id"
                ><nuxt-link
                  v-if="paid_for.length > 0"
                  :to="{
                    name: 'space-memberships-id',
                    params: { id: paid.id },
                  }"
                >{{ paid.first_name }} {{ paid.last_name }}</nuxt-link
                >,
                </span>
              </div>
            </div>
          </div>
          <check-in />
        </div>

        <div class="col-md-6">
          <card header-classes="bg-transparent">
            <div
              slot="header"
              class="d-flex justify-content-between align-items-center"
            >
              <div class="txt-upper">Card Details</div>
              <template>
                <b-button
                  variant="transparent"
                  class="text-primary"
                  @click="toggleModal('add-card')"
                >
                  <i class="fa fa-credit-card" /> Add New Card
                </b-button>
              </template>
            </div>
            <template v-if="cards.length == 0">
              <div class="text-center">
                <div class="text-muted">No card added for member</div>
              </div>
            </template>
            <template v-else>
              <div class="m-n25">
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr 
                      v-for="(card, i) in cards" 
                      :key="card.id">
                      <td>
                        {{ card.card_brand }}
                        {{ 'xxxx-xxxx-xxxx-' + card.last_4 }}
                      </td>
                      <td>
                        {{ $moment(card.exp_month, 'M').format('MMM') }}
                        {{ card.exp_year }}
                      </td>
                      <td>
                        <b-button
                          :disabled="loading"
                          size="
                          sm"
                          variant="transparent"
                          class="text-danger"
                          @click="removeMemberSource(i)"
                        ><i 
                          class="fa fa-trash"
                        /></b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </card>
          <card>
            <div
              slot="header"
              class="d-flex justify-content-between align-items-center"
            >
              <div class="txt-upper">SHACK15 CREDIT</div>
              <b-button
                id="addPlanBtn"
                variant="transparent"
                class="text-primary"
                @click="toggleModal('add-credit')"
              >
                <i class="fa fa-plus" /> Add Credit
              </b-button>
            </div>
            <div class="m-n25">
              <table class="table table-hover table-striped">
                <tbody>
                  <tr>
                    <div style="display: flex">
                      <td id="balance">
                        <div
                          style="display: inline-block"
                          @click="
                            booking_edit_disabled =
                              data.room_booking_credit_expiration_date != null
                                ? false
                                : true
                          "
                          @change="booking_edit_disabled = true"
                        >
                          <input
                            v-model="data.room_booking_credit_amount"
                            :disabled="
                              booking_edit_disabled ? 'disabled' : none
                            "
                            type="number"
                          >
                        </div>
                        <!-- <b-popover
                          target="balance"
                          placement="top"
                          content="Click on the amount to edit"
                          triggers="hover focus"
                        /> -->
                      </td>
                      <td
                        style="flex-grow: 1; flex-basis: 80px; text-align: left"
                      >
                        expires on:
                        {{
                          getExpDetails(
                            data.room_booking_credit_expiration_date
                          )
                        }}
                      </td>
                      <td>
                        <b-badge 
                          href="#" 
                          variant="primary"> Rooms</b-badge>
                          <!-- <b-button
                          v-if="
                            data.room_booking_credit_amount !==
                              previousRoomCreditBalance
                          "
                          id="save-credit"
                          size="sm"
                          variant="transparent"
                          class="text-primary"
                          @click="saveChanges('room-booking')"
                        ><i 
                          class="fa fa-save"
                        /></b-button>
                        <b-popover
                          v-if="
                            data.room_booking_credit_amount !==
                              previousRoomCreditBalance
                          "
                          target="save-credit"
                          placement="top"
                          content="Save changes"
                          triggers="hover focus"
                        />
                        <b-button
                          v-if="
                            data.room_booking_credit_amount ===
                              previousRoomCreditBalance
                          "
                          id="edit-credit"
                          size="sm"
                          variant="transparent"
                          class="text-danger"
                          @click="disabled = false"
                        ><i 
                          class="fa fa-edit"
                        /></b-button>
                        <b-popover
                          v-if="
                            data.room_booking_credit_amount ===
                              previousRoomCreditBalance
                          "
                          target="edit-credit"
                          placement="top"
                          content="Edit credit"
                          triggers="hover focus"
                        /> -->
                      </td>
                    </div>
                  </tr>
                  <tr>
                    <div style="display: flex">
                      <td id="balance">
                        <div
                          style="display: inline-block"
                          @click="
                            event_edit_disabled =
                              data.event_booking_credit_expiration_date != null
                                ? false
                                : true
                          "
                          @change="event_edit_disabled = true"
                        >
                          <input
                            v-model="data.event_booking_credit_amount"
                            :disabled="event_edit_disabled ? 'disabled' : none"
                            type="number"
                          >
                        </div>
                        <!-- <b-popover
                          target="balance"
                          placement="top"
                          content="Click on the amount to edit"
                          triggers="hover focus"
                        /> -->
                      </td>
                      <td
                        style="flex-grow: 1; flex-basis: 80px; text-align: left"
                      >
                        expires on:
                        {{
                          getExpDetails(
                            data.event_booking_credit_expiration_date
                          )
                        }}
                      </td>
                      <td>
                        <b-badge 
                          href="#" 
                          variant="primary"> Events</b-badge>
                          <!-- <b-button
                          v-if="
                            data.event_booking_credit_amount !==
                              previousEventCreditBalance
                          "
                          id="save-credit"
                          size="sm"
                          variant="transparent"
                          class="text-primary"
                          @click="saveChanges('event-booking')"
                        ><i 
                          class="fa fa-save"
                        /></b-button>
                        <b-popover
                          v-if="
                            data.event_booking_credit_amount !==
                              previousEventCreditBalance
                          "
                          target="save-credit"
                          placement="top"
                          content="Save changes"
                          triggers="hover focus"
                        />
                        <b-button
                          v-if="
                            data.event_booking_credit_amount ===
                              previousEventCreditBalance
                          "
                          id="edit-credit"
                          size="sm"
                          variant="transparent"
                          class="text-danger"
                          @click="disabled = false"
                        ><i 
                          class="fa fa-edit"
                        /></b-button>
                        <b-popover
                          v-if="
                            data.event_booking_credit_amount ===
                              previousEventCreditBalance
                          "
                          target="edit-credit"
                          placement="top"
                          content="Edit credit"
                          triggers="hover focus"
                        /> -->
                      </td>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>
          <!-- Allowed number of guests view -->
          <card>
            <div
              slot="header"
              class="d-flex justify-content-between align-items-center"
            >
              <div class="txt-upper">NUMBER OF GUESTS ALLOWED</div>
            </div>
            <div class="m-n25">
              <table class="table table-hover table-striped">
                <tbody>
                  <tr>
                    <div>
                      <td id="member_guests">
                        <div
                          style="display: inline-block"
                          @click="guestsDisabled = false"
                          @change="guestsDisabled = true"
                        >
                          <input
                            v-model="member_guests"
                            :disabled="guestsDisabled ? 'disabled' : none"
                            type="number"
                          >
                        </div>
                        <b-popover
                          target="member_guests"
                          placement="top"
                          triggers="hover focus"
                        />
                      </td>
                      <td>
                        <b-button
                          id="edit-guests"
                          size="sm"
                          variant="transparent"
                          class="text-danger"
                          @click="guestsDisabled = false"
                        ><i class="fa fa-edit" />
                        </b-button>
                        <b-button
                          id="save-member_guests"
                          size="sm"
                          variant="transparent"
                          class="text-primary"
                          @click="saveMemberGuests"
                        ><i class="fa fa-save" />
                        </b-button>
                        <b-popover
                          target="edit-guests"
                          placement="top"
                          content="Edit guests"
                          triggers="hover focus"
                        />
                      </td>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>

          <card>
            <div
              slot="header"
              class="d-flex justify-content-between align-items-center"
            >
              <div class="txt-upper">
                <span>MEMBERSHIP PLAN </span>
                <div style="display: inline-flex; flex-direction: column">
                  <badge
                    v-if="scheduledSubscription.length > 0"
                    style="margin-left: 20px; margin-bottom: 2px"
                  >change to
                    {{ scheduledSubscription[0]['subscription_name'] }}
                    /
                    {{
                      $moment(
                        scheduledSubscription[0]['subscription_start_date']
                      ).format('MMM Do YYYY')
                    }}</badge
                    >
                  <b-badge
                    v-if="
                      data.subscriptions[0].state === 'paused' &&
                        data.subscriptions[0].resume_on == null
                    "
                    pill
                    style="margin-left: 20px"
                    variant="danger"
                  >{{ 'Paused on: '
                  }}<span style="color: black">{{
                    $moment(data.subscriptions[0].paused_at).format(
                      'MMM Do YYYY'
                    )
                  }}</span></b-badge
                  >
                  <b-badge
                    v-if="
                      data.subscriptions[0].resume_on != null &&
                        data.subscriptions[0].state === 'paused'
                    "
                    pill
                    style="margin-left: 20px"
                    variant="primary"
                  >{{ 'Auto-resume on: '
                  }}<span style="color: black">{{
                    $moment(data.subscriptions[0].resume_on).format(
                      'MMM Do YYYY'
                    )
                  }}</span></b-badge
                  >
                  <b-badge
                    v-if="
                      data.subscriptions[0].paused_at != null &&
                        data.subscriptions[0].state != 'paused'
                    "
                    pill
                    style="margin-left: 20px"
                    variant="danger"
                  >{{ 'Auto-pause on: '
                  }}<span style="color: black">{{
                    $moment(data.subscriptions[0].paused_at).format(
                      'MMM Do YYYY'
                    )
                  }}</span></b-badge
                  >
                </div>
              </div>
              <b-button
                id="addPlanBtn"
                variant="transparent"
                class="text-primary"
                style="visibility: hidden"
                @click="toggleModal('add-plan')"
              >
                <i class="fa fa-plus" /> Add New Plan
              </b-button>
            </div>
            <div class="m-n25">
              <table class="table table-hover table-striped">
                <tbody>
                  <tr
                    v-for="subscription in data.subscriptions"
                    :key="subscription.id"
                  >
                    <div v-if="!subscription.canceled_at">
                      <td>{{ getSubName(subscription)['name'] }}</td>
                      <td style="width: 100%">
                        Exp. {{ getSubDetails(subscription) }}
                      </td>
                      <td>
                        <!-- <b-button
                          v-if="subscription.state != 'paused'"
                          size="sm"
                          variant="transparent"
                          class="text-primary"
                          @click="autoRenewSubscriptionToggle('paused')"
                        ><i 
                          class="fa fa-pause"
                        /></b-button>
                        <b-button
                          v-else
                          id="resume-membership"
                          size="sm"
                          variant="transparent"
                          class="text-primary"
                          @click="autoRenewSubscriptionToggle('active')"
                        ><i 
                          class="fa fa-play"
                        /></b-button>
                        <b-button
                          size="sm"
                          variant="transparent"
                          class="text-primary"
                          @click="changePlan(subscription)"
                        ><i 
                          class="fa fa-exchange-alt"
                        /></b-button>
                        <b-button
                          id="popover-1-top"
                          size="sm"
                          variant="transparent"
                          class="text-primary"
                          @click="makePlanPrimary(subscription)"
                        >
                          <i class="fas fa-user-shield" />
                        </b-button> -->
                        <!-- <b-popover
                          placement="top"
                          target="popover-1-top"
                          content="Make plan primary"
                          triggers="hover focus"
                        /> -->
                        <!-- <b-button
                          size="sm"
                          variant="transparent"
                          class="text-danger"
                          @click="cancelPlan(subscription)"
                        ><i 
                          class="fa fa-trash"
                        /></b-button> -->
                        <!-- <div
                          style="display: inline-flex; flex-direction: column"
                        >
                          <div>
                            <div style="display: inline-block">Auto Renew</div>
                            <div style="display: inline-block">
                              <b-form-checkbox
                                v-model="subscription.state"
                                switch
                                value="active"
                                unchecked-value="manual-active"
                                size="lg"
                                variant="success"
                                @change="autoRenewSubscriptionToggle"
                              >
                                <span
                                  v-if="subscription.state == 'active'"
                                  style="visibility: hidden"
                                  class="text-success"
                                  >A</span
                                >
                                <span
                                  v-else
                                  style="visibility: hidden"
                                  class="text-muted"
                                  >M</span
                                >
                              </b-form-checkbox>
                            </div>
                          </div>
                          
                        </div> -->
                        <b-dropdown
                          right
                          no-caret="true"
                          style="padding: 0px"
                          variant="transparent"
                        >
                          <template #button-content>
                            <i class="fas fa-ellipsis-v" />
                          </template>
                          <b-dropdown-item
                            v-if="scheduledSubscription.length > 0"
                            href="#"
                            @click="cancelScheduledPlanChange()"
                          >Cancel Auto-change Plan</b-dropdown-item
                          >
                          <b-dropdown-item
                            v-else-if="
                              subscription.state != 'paused' &&
                                subscription.paused_at == null
                            "
                            href="#"
                            @click="pauseMembership()"
                          >Pause Subscription</b-dropdown-item
                          >
                          <b-dropdown-item
                            v-else-if="
                              subscription.state != 'paused' &&
                                subscription.paused_at != null
                            "
                            href="#"
                            @click="resumeMembership()"
                          >Cancel Auto-Pause</b-dropdown-item
                          >
                          <b-dropdown-item
                            v-else
                            href="#"
                            @click="resumeMembership()"
                          >Resume Subscription</b-dropdown-item
                          >
                          <b-dropdown-divider />
                          <b-dropdown-item
                            href="#"
                            @click="changePlan(subscription)"
                          >Change Plan</b-dropdown-item
                          >
                          <b-dropdown-item
                            href="#"
                            @click="makePlanPrimary(subscription)"
                          >Make This Plan Primary</b-dropdown-item
                          >
                          <b-dropdown-item
                            href="#"
                            @click="cancelPlan(subscription)"
                          >Cancel Plan</b-dropdown-item
                          >
                          <div class="dropdown-item">
                            <div style="display: inline-block">Auto Renew</div>
                            <div style="display: inline-block">
                              <b-form-checkbox
                                v-model="subscription.state"
                                switch
                                value="active"
                                unchecked-value="manual-active"
                                size="lg"
                                variant="success"
                                @change="autoRenewSubscriptionToggle"
                              >
                                <span
                                  v-if="subscription.state == 'active'"
                                  style="visibility: hidden"
                                  class="text-success"
                                >A</span
                                >
                                <span
                                  v-else
                                  style="visibility: hidden"
                                  class="text-muted"
                                >M</span
                                >
                              </b-form-checkbox>
                            </div>
                          </div>
                          <div class="dropdown-item">
                            <div style="display: inline-block">
                              Free Membership
                            </div>
                            <div style="display: inline-block">
                              <b-form-checkbox
                                v-model="data.renew_for_free"
                                switch
                                value="true"
                                unchecked-value="false"
                                size="lg"
                                variant="success"
                                @change="freeSubscriptionToggle"
                              >
                                <span
                                  v-if="data.renew_for_free"
                                  style="visibility: hidden"
                                  class="text-success"
                                >A</span
                                >
                                <span
                                  v-else
                                  style="visibility: hidden"
                                  class="text-muted"
                                >M</span
                                >
                              </b-form-checkbox>
                            </div>
                          </div>
                        </b-dropdown>
                      </td>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>
          <!-- Subscription Change History -->
          <subscription-history />
          <!-- <card>
            <div
              slot="header"
              class="d-flex justify-content-between align-items-center"
            >
              <div class="txt-upper">CUSTOM CHARGES</div>
              <b-button
                id="addPlanBtn"
                variant="transparent"
                class="text-primary"
                @click="toggleModal('add-custom-charge')"
              >
                <i class="fa fa-plus" /> Add New Charge
              </b-button>
            </div>
            <template>
              <div class="m-n25">
                <div class="overflow-auto">
                  <b-table
                    id="my-table"
                    :items="customChargesList"
                    striped
                    hover
                    show-empty
                    responsive="sm"
                    @row-clicked="rowClicked"
                  >
                    <template #cell(description)="data">
                      <div
                        style="
                          text-overflow: ellipsis;
                          max-width: 170px;
                          overflow: hidden;
                        "
                      >
                        {{ data.value }}
                      </div>
                    </template>
                    <template #cell(customItem)="data" />
                    <template #cell(current_status)="data">
                      <b-badge
                        v-if="data.value.toUpperCase() == 'SETTLED'"
                        pill
                        variant="success"
                      >{{ 'PAID' }}</b-badge
                      >
                      <b-badge
                        v-if="data.value.toUpperCase() == 'UNSETTLED'"
                        pill
                        variant="danger"
                      >{{ 'NOT PAID' }}</b-badge
                      >
                      <b-badge
                        v-if="data.value.toUpperCase() == 'UNSETTLED'"
                        pill
                        variant="warning"
                      >{{ 'PENDING' }}</b-badge
                      >
                    </template>
                  </b-table>
                </div>
              </div>
              <div 
                slot="footer" 
                class="" 
                style="visibility: hidden">
                <b-pagination
                  :per-page="perPage"
                  v-model="currentPage"
                  :total-rows="rows"
                  align="center"
                  aria-controls="my-table"
                />
              </div>
            </template>
          </card> -->
          <card>
            <div 
              slot="header" 
              class="d-flex justify-content-between">
              <div class="txt-upper">Events</div>
            </div>
            <template>
              <div class="m-n25">
                <div class="overflow-auto">
                  <b-table
                    id="my-table"
                    :items="events"
                    :per-page="perPage"
                    :current-page="currentPage"
                    striped
                    hover
                    show-empty
                    thead-class="hidden_header"
                  />
                </div>
              </div>
              <div 
                slot="footer" 
                class="">
                <b-pagination
                  :per-page="perPage"
                  v-model="currentPage"
                  :total-rows="rows"
                  align="center"
                  aria-controls="my-table"
                />
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <b-modal 
      id="change-plan" 
      title="Change Current Plan" 
      hide-footer
    ><ChangePlan 
      :plan_id="plan_id"
    /></b-modal>
    <b-modal 
      id="pause-membership" 
      title="Pause Membership" 
      hide-footer
    ><PauseMembership 
      :plan_id="plan_id" 
      :data="data"
    /></b-modal>
    <b-modal 
      id="add-plan" 
      :static="true" 
      title="Add New Plan" 
      hide-footer
    ><AddPlan 
      :cards="cards"
    /></b-modal>
    <b-modal 
      id="add-credit" 
      :static="true" 
      title="Add Credit" 
      hide-footer
    ><AddCredit 
      :data="data"
    /></b-modal>
    <b-modal 
      id="add-card" 
      title="Add New Card" 
      hide-footer
    ><AddCard
      :toggle-loading="toggleLoading"
      :loading="loading"
      @addCard="addCard"
    /></b-modal>
    <b-modal 
      id="add-custom-charge" 
      title="Add Custom Charge" 
      hide-footer>
      <AddCustomCharge 
        :data="data"
    /></b-modal>
    <b-modal 
      id="edit-custom-charge" 
      title="Edit Charge" 
      hide-footer
    ><EditCustomCharge 
      :data="selctedItemData"
    /></b-modal>
    <el-drawer 
      :visible.sync="drawer" 
      :direction="direction" 
      title="Notes">
      <MembershipNotes :membership_id="data.id" />
    </el-drawer>
  </div>
</template>
<script>
import MainTitle from '~/components/shack/MainTitle.vue'
import ProfileHead from '~/components/shack/ProfileHead.vue'
import MembershipNotes from '~/components/shack/MembershipNotes.vue'
import ChangePlan from '~/components/directory/ChangePlan'
import PauseMembership from '~/components/directory/PauseSubscription'
import AddPlan from '~/components/directory/AddPlan'
import AddCredit from '~/components/directory/AddCredit'
import AddCard from '~/components/directory/AddCard'
import AddCustomCharge from '~/components/directory/AddCustomCharge'
import EditCustomCharge from '~/components/directory/EditCustomCharge'
import CheckIn from '~/components/shack/CheckIn'
import SubscriptionHistory from '~/components/shack/SubscriptionHistory'
import { mapState } from 'vuex'
import { Drawer } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'DirectoryProfile',
  layout: 'ShackDash',
  components: {
    SubscriptionHistory,
    MainTitle,
    ProfileHead,
    ChangePlan,
    PauseMembership,
    AddCredit,
    AddPlan,
    AddCustomCharge,
    EditCustomCharge,
    AddCard,
    [Drawer.name]: Drawer,
    MembershipNotes,
    CheckIn
  },
  async asyncData({ store, params, $membership, error, $moment }) {
    try {
      const cards = await $membership
        .getPaymentMethods(params.id)
        .then(({ data }) => {
          return data
        })

      const subscriptions = await $membership
        .getSubscriptions(params.id)
        .then(({ data }) => {
          return data
        })

      const paid_for = await $membership.getPaidFor(params.id).then(res => {
        return res.data
      })

      const filter = `${
        params.id
      }/subscription/history?filter[scheduled_subscription]=true`

      const scheduledSubscription = await $membership
        .getSubscriptionHistory(filter)
        .then(res => {
          return res.data
        })

      return await $membership
        .getAMembership(params.id)
        .then(async ({ data }) => {
          const member_guests = data.guests_allowed
          const customCharges = await $membership
            .getCustomCharges({ spaceId: 1, user_id: data.user_id })
            .then(data => {
              return data
            })

          const customChargesList = customCharges.returnedData.map(
            customCharge => {
              return {
                description: customCharge.description,
                charge: customCharge.amount,
                due_date: customCharge.due_date.split(' ')[0],
                current_status: customCharge.state
              }
              return customCharge
            }
          )

          //Filter for deleted events [ !temporary fix till it's fixed from the backend ]

          const events = _.map(data.events_attended, o => {
            return {
              name: o.event ? o.event.name : '(event deleted)', // fix was applied here
              ticket: o.number_of_tickets + ' tickets',
              price:
                store.state.space.currentSpace.currency_symbol + o.total_amount,
              start: o.event
                ? $moment(o.event.start_time).format('MMM DD, YY')
                : '(event deleted)'
            }
          })

          // console.log(JSON.stringify(data))

          return {
            checkin: data.checkin.length > 0 ? data.checkin[0] : {},
            data,
            previousRoomCreditBalance: data.room_booking_credit_amount,
            previousFoodCreditBalance: data.food_ordering_credit_amount,
            previousEventCreditBalance: data.event_booking_credit_amount,
            cards,
            events,
            subscriptions,
            scheduledSubscription,
            customCharges: customCharges.returnedData,
            customChargesList,
            paid_for,
            member_guests
          }
        })
    } catch (e) {
      error({
        statusCode: e.statusCode,
        message: e.response ? e.response.data.message : e.message
      })
    }
  },
  data() {
    return {
      plan_id: '',
      loading: false,
      checked: false,
      cards: [],
      scheduledSubscription: [],
      member_guests: 3,
      autoRenewStatus: false,
      currentPage: 1,
      profilePic: '',
      selctedItemData: {},
      customChargesList: [],
      perPage: 5,
      fields: ['description', 'charge', 'due_date', 'current_status', '_'],
      items: [
        {
          description: 'Requested for 40 chairs',
          charge: '500',
          due_date: '2020-02-22',
          current_status: 'Settled',
          _: ''
        },
        {
          description: 'Requested for extra chairs',
          charge: '500',
          due_date: '2020-02-22',
          current_status: 'Unsettled',
          _: ''
        }
      ],
      drawer: false,
      direction: 'rtl',
      previousCreditBalance: 500.0,
      booking_edit_disabled: true,
      event_edit_disabled: true,
      food_edit_disabled: true,
      disabled: true,
      guestsDisabled: true,
      customCharges: [],
      credit: {
        amount: null,
        description: null,
        membership_id: null
      }
    }
  },
  computed: {
    ...mapState({
      space: state => state.space.currentSpace
    }),
    getSubscription() {
      let renewal = null
      _.each(this.data.plans, v => {
        _.each(this.data.subscriptions, o => {
          if (o.plan_id == v.id && o.canceled_at == null) {
            renewal = o.ends_at ? o.ends_at : o.trial_ends_at
          }
        })
      })
      return this.$moment(renewal).format('MMMM DD, YYYY')
    },
    rows() {
      return this.data.events_attended.length
    }
  },
  methods: {
    imageUploaded(url) {
      this.data.user_profile.picture = url
      this.$membership
        .updateProfile({
          user_id: this.data.user_id,
          ...this.data.user_profile
        })
        .then(res => {
          this.loading = !this.loading
          this.$bvToast.toast('Photo updated succesfully', {
            title: 'Success',
            variant: 'success'
          })
          //this.$router.go(-1)
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message
          this.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
        })
    },
    rowClicked(item, index, event) {
      // open modal here
      this.selctedItemData = this.customCharges[index]
      this.$bvModal.show('edit-custom-charge')
    },
    saveChanges(purpose) {
      if (purpose == 'event-booking') {
        this.credit.purpose = purpose
        this.credit.amount = this.data.event_booking_credit_amount
      } else if (purpose == 'room-booking') {
        this.credit.purpose = purpose
        this.credit.amount = this.data.room_booking_credit_amount
      } else if (purpose == 'food-ordering') {
        this.credit.purpose = purpose
        this.credit.amount = this.data.food_ordering_credit_amount
      }

      this.loading = !this.loading

      this.credit.description = 'Credit bonus for member'
      this.credit.membership_id = this.data.id

      this.$membership
        .editCredit(this.credit)
        .then(res => {
          this.$bvToast.toast('Credit assigned to member successfully', {
            title: 'Success',
            variant: 'success'
          })
          if (purpose == 'event-booking') {
            this.previousEventCreditBalance = this.data.event_booking_credit_amount
          } else if (purpose == 'room-booking') {
            this.previousRoomCreditBalance = this.data.room_booking_credit_amount
          } else if (purpose == 'food-ordering') {
            this.previousFoodCreditBalance = this.data.food_ordering_credit_amount
          }
          location.reload()
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response
            ? `${e.response.data.message} ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message

          this.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
        })
    },

    saveMemberGuests() {
      this.loading = !this.loading

      this.$membership
        .editGuests(this.data.id, {
          member_guests: this.member_guests,
          space_id: this.data.space.id
        })
        .then(res => {
          this.$bvToast.toast('Number of guests updated successfully', {
            title: 'Success',
            variant: 'success'
          })
          // location.reload()
        })
        .catch(e => {
          this.loading = !this.loading
          const message = e.response
            ? `${e.response.data.message} ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message

          this.$bvToast.toast(message, { title: 'Error', variant: 'danger' })
        })
    },

    toggleModal(type, data) {
      this.selctedItemData = data
      this.$bvModal.show(type)
    },
    getSubName(subscription) {
      let name, price
      _.each(this.data.plans, function(o) {
        if (o.id == subscription.plan_id) {
          name = o.name
          price = o.price
        }
      })

      return { name, price }
    },
    autoRenewSubscriptionToggle(state) {
      //
      this.$membership
        .changeSubscriptionRenewalState(this.$route.params.id, {
          id: this.data.id,
          spaceId: this.data.space_id,
          subscriptionState: state
        })
        .then(({ data }) => {
          this.$bvToast.toast('State updated successfully', {
            title: 'Success',
            variant: 'success'
          })
          location.reload()
        })
        .catch(e => {
          this.$bvToast.toast('State update failed', {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    freeSubscriptionToggle(state) {
      //
      this.$membership
        .changeFreeRenewalState(this.$route.params.id, {
          id: this.data.id,
          spaceId: this.data.space_id,
          renew_for_free: state
        })
        .then(({ data }) => {
          this.$bvToast.toast('State updated successfully', {
            title: 'Success',
            variant: 'success'
          })
          location.reload()
        })
        .catch(e => {
          this.$bvToast.toast('State update failed', {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    checkinToggle(e) {
      if (e == 'checkin') {
        this.$checkin
          .checkin({
            type: 'member',
            membership_id: this.data.id
          })
          .then(({ data }) => {
            this.$bvToast.toast('Member checked in successfully', {
              title: 'Success',
              variant: 'success'
            })

            this.checkin = data
          })
          .catch(e => {
            this.$bvToast.toast('Member checkin failed', {
              title: 'Error',
              variant: 'danger'
            })
          })
      } else {
        this.$checkin
          .checkout(this.checkin.id)
          .then(({ data }) => {
            this.$bvToast.toast('Member checked out successfully', {
              title: 'Success',
              variant: 'success'
            })
            //location.reload()
          })
          .catch(e => {
            this.$bvToast.toast('Member check out failed', {
              title: 'Error',
              variant: 'danger'
            })
          })
      }
    },
    getExtras(extras) {
      let html = ''
      _.each(extras, (o, i) => {
        html += `<div class="sh-dls"><span>${_.upperFirst(o.type)}:</span> ${
          o.comment ? o.comment : ''
        }</div>`
      })

      return html
    },
    toggleLoading() {
      this.loading = !this.loading
    },
    removeMemberSource(i) {
      this.loading = !this.loading

      this.$membership
        .deletePaymentMethod(this.$route.params.id, {
          card_nonce: this.cards[i].id
        })
        .then(res => {
          this.cards.splice(i, 1)

          this.toggleLoading()

          this.$bvToast.toast('Card source removed successfully', {
            title: 'Success',
            variant: 'success'
          })
        })
        .catch(e => {
          const message = e.response ? e.response.data.message : e.message
          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(',', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    getSubDetails(subscription) {
      const ends_at = subscription.ends_at
        ? subscription.ends_at
        : subscription.trial_ends_at

      return this.$moment(ends_at).format('DD MMM, YYYY')
    },
    getExpDetails(date) {
      if (!date) {
        return 'Not set'
      }
      return this.$moment(date).format('DD MMM, YYYY')
    },
    addCard(paymentMethod) {
      this.$membership
        .addPaymentMethod(this.$route.params.id, { card_nonce: paymentMethod })
        .then(({ data }) => {
          this.$bvToast.toast('Card added successfully', {
            title: 'Success',
            variant: 'success'
          })
          location.reload()
        })
    },
    deleteMember() {
      if (!confirm('Are you sure?')) return

      this.loading = !this.loading
      const { id } = this.$route.params
      this.$membership
        .deleteMembership(id)
        .then(({ data }) => {
          this.$bvToast.toast('Member deleted successfully', {
            title: 'Success',
            variant: 'success'
          })

          this.$router.go(-1)
        })
        .catch(e => {
          this.loading = !this.loading

          const message = e.response ? e.response.data.message : e.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    changePlan(subscription) {
      let plan = null

      const _self = this

      _.each(this.data.plans, function(o) {
        if (o.id == subscription.plan_id) {
          _self.plan_id = subscription.id
        }
      })
      this.toggleModal('change-plan')
    },
    pauseMembership(subscription) {
      // let plan = null

      // const _self = this

      // _.each(this.data.plans, function(o) {
      //   if (o.id == subscription.plan_id) {
      //     _self.plan_id = subscription.id
      //   }
      // })
      this.toggleModal('pause-membership')
    },
    resumeMembership() {
      //
      this.$membership
        .changeSubscriptionRenewalState(this.$route.params.id, {
          id: this.data.id,
          spaceId: this.data.space_id,
          subscriptionState: 'active'
        })
        .then(({ data }) => {
          this.$bvToast.toast('State updated successfully', {
            title: 'Success',
            variant: 'success'
          })
          location.reload()
        })
        .catch(e => {
          this.$bvToast.toast('State update failed', {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    cancelScheduledPlanChange() {
      //
      this.$membership
        .cancelScheduledPlanChange(this.$route.params.id, {
          id: this.data.id,
          spaceId: this.data.space_id,
          state: 'inactive'
        })
        .then(({ data }) => {
          this.$bvToast.toast('Cancelled successfully', {
            title: 'Success',
            variant: 'success'
          })
          location.reload()
        })
        .catch(e => {
          this.$bvToast.toast('Cancel failed', {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    cancelPlan(subscription) {
      if (!confirm('Are you sure?')) return

      this.loading = !this.loading

      this.$membership
        .cancelSubscription(this.$route.params.id, {
          plan_id: subscription.plan_id,
          slug: subscription.slug,
          immediate: true
        })
        .then(res => {
          this.$bvToast.toast('Plan canceled succesfully', {
            title: 'Success',
            variant: 'success'
          })

          location.reload()
        })
        .catch(e => {
          this.loading = !this.loading

          const message = e.response
            ? `${e.response.data.message} ~ ${JSON.stringify(
                e.response.data.errors
              )}`
            : e.message

          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger'
          })
        })
    },
    makePlanPrimary(subscription) {
      this.loading = !this.loading

      this.$membership
        .makePlanPrimary(this.$route.params.id, {
          plan_id: subscription.plan_id
        })
        .then(res => {
          this.loading = !this.loading

          this.$bvToast.toast('Plan made primary', {
            title: 'Success',
            variant: 'success'
          })
        })
        .catch(e => {
          this.loading = !this.loading
          displayError(e, this)
        })
    },
    toggleCovidCardStatus(state) {
      console.log(state)
      this.data.covid_declaration_completed = state
      // this.loading = !this.loading

      // this.$membership
      //   .makePlanPrimary(this.$route.params.id, {
      //     plan_id: state.plan_id
      //   })
      //   .then(res => {
      //     this.loading = !this.loading

      //     this.$bvToast.toast('Plan made primary', {
      //       title: 'Success',
      //       variant: 'success'
      //     })
      //   })
      //   .catch(e => {
      //     this.loading = !this.loading
      //     displayError(e, this)
      //   })
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
.hidden_header {
  display: none;
}
.card-footer .b-pagination {
  margin-bottom: 0;
}
tr td button.btn {
  margin-top: -15px;
  margin-bottom: -15px;
}
</style>
<style >
</style>
