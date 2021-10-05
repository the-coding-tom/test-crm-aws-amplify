exports.ids = [13];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return displayError; });
const displayError = function (e, vm = null) {
  if (e.response) {
    processError(e.response.data.message, vm);

    if (e.response.data.errors) {
      _.each(e.response.data.errors, (o, i) => {
        return _.each(o, (v, k) => processError(v, vm));
      });
    }

    return;
  }

  processError(e.message, vm);
};

const processError = function (message, vm) {
  console.log('------------------------------------');
  console.log(message);
  console.log('------------------------------------');
  vm && vm.$bvToast.toast(message, {
    title: 'Error',
    variant: 'danger'
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Inputs/HtmlEditor.vue?vue&type=template&id=277b231e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('client-only',[_c('editor',{ref:"toastuiEditor",attrs:{"initial-value":_vm.editorText,"options":_vm.editorOptions,"initial-edit-type":"wysiwyg","preview-style":"tab"},on:{"change":_vm.onEditorChange},model:{value:(_vm.text),callback:function ($$v) {_vm.text=$$v},expression:"text"}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Inputs/HtmlEditor.vue?vue&type=template&id=277b231e&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Inputs/HtmlEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HtmlEditorvue_type_script_lang_js_ = ({
  props: {
    value: {
      type: String,
      default: ''
    },
    editorText: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      editorOptions: {
        useDefaultHTMLSanitizer: false,
        usageStatistics: false,
        hideModeSwitch: true,
        toolbarItems: ['heading', 'bold', 'italic', 'strike', 'divider', 'hr', 'quote', 'divider', 'ul', 'ol', 'task', 'indent', 'outdent', 'divider', //'table',
        'image', 'link', 'divider', 'code', 'codeblock']
      },
      text: this.value
    };
  },

  watch: {
    text() {
      this.$emit('input', this.text);
    }

  },
  methods: {
    onEditorChange() {
      let html = this.$refs.toastuiEditor.invoke('getHtml');
      let desc = this.$refs.toastuiEditor.invoke('getValue');
      let markdown = this.$refs.toastuiEditor.invoke('getMarkdown');
      this.text = markdown;
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/Inputs/HtmlEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inputs_HtmlEditorvue_type_script_lang_js_ = (HtmlEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/argon-core/Inputs/HtmlEditor.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Inputs_HtmlEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c8eb076"
  
)

/* harmony default export */ var HtmlEditor = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var element_ui_lib_theme_chalk_drawer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var element_ui_lib_theme_chalk_drawer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_drawer_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var element_ui_lib_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony import */ var element_ui_lib_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94);
/* harmony import */ var _components_shack_ProfileHead_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(227);
/* harmony import */ var _components_shack_MembershipNotes_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(228);
/* harmony import */ var _components_directory_ChangePlan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(216);
/* harmony import */ var _components_directory_AddPlan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(217);
/* harmony import */ var _components_directory_AddCredit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(218);
/* harmony import */ var _components_directory_AddCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(219);
/* harmony import */ var _components_directory_AddCustomCharge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(220);
/* harmony import */ var _components_directory_EditCustomCharge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(221);
/* harmony import */ var _components_shack_CheckIn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(222);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(207);
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_14__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'DirectoryProfile',
  layout: 'ShackDash',
  components: {
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    ProfileHead: _components_shack_ProfileHead_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    ChangePlan: _components_directory_ChangePlan__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    AddCredit: _components_directory_AddCredit__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    AddPlan: _components_directory_AddPlan__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    AddCustomCharge: _components_directory_AddCustomCharge__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
    EditCustomCharge: _components_directory_EditCustomCharge__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    AddCard: _components_directory_AddCard__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
    [element_ui_lib_drawer__WEBPACK_IMPORTED_MODULE_2___default.a.name]: element_ui_lib_drawer__WEBPACK_IMPORTED_MODULE_2___default.a,
    MembershipNotes: _components_shack_MembershipNotes_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    CheckIn: _components_shack_CheckIn__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]
  },

  async asyncData({
    store,
    params,
    $membership,
    error,
    $moment
  }) {
    try {
      const cards = await $membership.getPaymentMethods(params.id).then(({
        data
      }) => {
        return data;
      });
      const subscriptions = await $membership.getSubscriptions(params.id).then(({
        data
      }) => {
        return data;
      });
      const paid_for = await $membership.getPaidFor(params.id).then(res => {
        return res.data;
      });
      return await $membership.getAMembership(params.id).then(async ({
        data
      }) => {
        const member_guests = data.guests_allowed;
        const customCharges = await $membership.getCustomCharges({
          spaceId: 1,
          user_id: data.user_id
        }).then(data => {
          return data;
        });
        const customChargesList = customCharges.returnedData.map(customCharge => {
          return {
            description: customCharge.description,
            charge: customCharge.amount,
            due_date: customCharge.due_date.split(' ')[0],
            current_status: customCharge.state
          };
          return customCharge;
        }); //Filter for deleted events [ !temporary fix till it's fixed from the backend ]

        const events = _.map(data.events_attended, o => {
          return {
            name: o.event ? o.event.name : '(event deleted)',
            // fix was applied here
            ticket: o.number_of_tickets + ' tickets',
            price: store.state.space.currentSpace.currency_symbol + o.total_amount,
            start: o.event ? $moment(o.event.start_time).format('MMM DD, YY') : '(event deleted)'
          };
        }); // console.log(JSON.stringify(data))


        return {
          checkin: data.checkin.length > 0 ? data.checkin[0] : {},
          data,
          previousRoomCreditBalance: data.room_booking_credit_amount,
          previousFoodCreditBalance: data.food_ordering_credit_amount,
          previousEventCreditBalance: data.event_booking_credit_amount,
          cards,
          events,
          subscriptions,
          customCharges: customCharges.returnedData,
          customChargesList,
          paid_for,
          member_guests
        };
      });
    } catch (e) {
      error({
        statusCode: e.statusCode,
        message: e.response ? e.response.data.message : e.message
      });
    }
  },

  data() {
    return {
      plan_id: '',
      loading: false,
      checked: false,
      cards: [],
      member_guests: 3,
      autoRenewStatus: false,
      currentPage: 1,
      profilePic: '',
      selctedItemData: {},
      customChargesList: [],
      perPage: 5,
      fields: ['description', 'charge', 'due_date', 'current_status', '_'],
      items: [{
        description: 'Requested for 40 chairs',
        charge: '500',
        due_date: '2020-02-22',
        current_status: 'Settled',
        _: ''
      }, {
        description: 'Requested for extra chairs',
        charge: '500',
        due_date: '2020-02-22',
        current_status: 'Unsettled',
        _: ''
      }],
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
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_13__["mapState"])({
      space: state => state.space.currentSpace
    }),

    getSubscription() {
      let renewal = null;

      _.each(this.data.plans, v => {
        _.each(this.data.subscriptions, o => {
          if (o.plan_id == v.id && o.canceled_at == null) {
            renewal = o.ends_at ? o.ends_at : o.trial_ends_at;
          }
        });
      });

      return this.$moment(renewal).format('MMMM DD, YYYY');
    },

    rows() {
      return this.data.events_attended.length;
    }

  },
  methods: {
    imageUploaded(url) {
      this.data.user_profile.picture = url;
      this.$membership.updateProfile({
        user_id: this.data.user_id,
        ...this.data.user_profile
      }).then(res => {
        this.loading = !this.loading;
        this.$bvToast.toast('Photo updated succesfully', {
          title: 'Success',
          variant: 'success'
        }); //this.$router.go(-1)
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    rowClicked(item, index, event) {
      // open modal here
      this.selctedItemData = this.customCharges[index];
      this.$bvModal.show('edit-custom-charge');
    },

    saveChanges(purpose) {
      if (purpose == 'event-booking') {
        this.credit.purpose = purpose;
        this.credit.amount = this.data.event_booking_credit_amount;
      } else if (purpose == 'room-booking') {
        this.credit.purpose = purpose;
        this.credit.amount = this.data.room_booking_credit_amount;
      } else if (purpose == 'food-ordering') {
        this.credit.purpose = purpose;
        this.credit.amount = this.data.food_ordering_credit_amount;
      }

      this.loading = !this.loading;
      this.credit.description = 'Credit bonus for member';
      this.credit.membership_id = this.data.id;
      this.$membership.editCredit(this.credit).then(res => {
        this.$bvToast.toast('Credit assigned to member successfully', {
          title: 'Success',
          variant: 'success'
        });

        if (purpose == 'event-booking') {
          this.previousEventCreditBalance = this.data.event_booking_credit_amount;
        } else if (purpose == 'room-booking') {
          this.previousRoomCreditBalance = this.data.room_booking_credit_amount;
        } else if (purpose == 'food-ordering') {
          this.previousFoodCreditBalance = this.data.food_ordering_credit_amount;
        }

        location.reload();
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    saveMemberGuests() {
      this.loading = !this.loading;
      this.$membership.editGuests(this.data.id, {
        member_guests: this.member_guests,
        space_id: this.data.space.id
      }).then(res => {
        this.$bvToast.toast('Number of guests updated successfully', {
          title: 'Success',
          variant: 'success'
        }); // location.reload()
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    toggleModal(type, data) {
      this.selctedItemData = data;
      this.$bvModal.show(type);
    },

    getSubName(subscription) {
      let name, price;

      _.each(this.data.plans, function (o) {
        if (o.id == subscription.plan_id) {
          name = o.name;
          price = o.price;
        }
      });

      return {
        name,
        price
      };
    },

    autoRenewSubscriptionToggle(state) {
      //
      this.$membership.changeSubscriptionRenewalState(this.$route.params.id, {
        id: this.data.id,
        spaceId: this.data.space_id,
        subscriptionState: state
      }).then(({
        data
      }) => {
        this.$bvToast.toast('State updated successfully', {
          title: 'Success',
          variant: 'success'
        }); //location.reload()
      }).catch(e => {
        this.$bvToast.toast('State update failed', {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    checkinToggle(e) {
      if (e == 'checkin') {
        this.$checkin.checkin({
          type: 'member',
          membership_id: this.data.id
        }).then(({
          data
        }) => {
          this.$bvToast.toast('Member checked in successfully', {
            title: 'Success',
            variant: 'success'
          });
          this.checkin = data;
        }).catch(e => {
          this.$bvToast.toast('Member checkin failed', {
            title: 'Error',
            variant: 'danger'
          });
        });
      } else {
        this.$checkin.checkout(this.checkin.id).then(({
          data
        }) => {
          this.$bvToast.toast('Member checked out successfully', {
            title: 'Success',
            variant: 'success'
          }); //location.reload()
        }).catch(e => {
          this.$bvToast.toast('Member check out failed', {
            title: 'Error',
            variant: 'danger'
          });
        });
      }
    },

    getExtras(extras) {
      let html = '';

      _.each(extras, (o, i) => {
        html += `<div class="sh-dls"><span>${_.upperFirst(o.type)}:</span> ${o.comment ? o.comment : ''}</div>`;
      });

      return html;
    },

    toggleLoading() {
      this.loading = !this.loading;
    },

    removeMemberSource(i) {
      this.loading = !this.loading;
      this.$membership.deletePaymentMethod(this.$route.params.id, {
        card_nonce: this.cards[i].id
      }).then(res => {
        this.cards.splice(i, 1);
        this.toggleLoading();
        this.$bvToast.toast('Card source removed successfully', {
          title: 'Success',
          variant: 'success'
        });
      }).catch(e => {
        const message = e.response ? e.response.data.message : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(',', '.');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    getSubDetails(subscription) {
      const ends_at = subscription.ends_at ? subscription.ends_at : subscription.trial_ends_at;
      return this.$moment(ends_at).format('DD MMM, YYYY');
    },

    getExpDetails(date) {
      if (!date) {
        return 'Not set';
      }

      return this.$moment(date).format('DD MMM, YYYY');
    },

    addCard(paymentMethod) {
      this.$membership.addPaymentMethod(this.$route.params.id, {
        card_nonce: paymentMethod
      }).then(({
        data
      }) => {
        this.$bvToast.toast('Card added successfully', {
          title: 'Success',
          variant: 'success'
        });
        location.reload();
      });
    },

    deleteMember() {
      if (!confirm('Are you sure?')) return;
      this.loading = !this.loading;
      const {
        id
      } = this.$route.params;
      this.$membership.deleteMembership(id).then(({
        data
      }) => {
        this.$bvToast.toast('Member deleted successfully', {
          title: 'Success',
          variant: 'success'
        });
        this.$router.go(-1);
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? e.response.data.message : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    changePlan(subscription) {
      let plan = null;

      const _self = this;

      _.each(this.data.plans, function (o) {
        if (o.id == subscription.plan_id) {
          _self.plan_id = subscription.id;
        }
      });

      this.toggleModal('change-plan');
    },

    cancelPlan(subscription) {
      if (!confirm('Are you sure?')) return;
      this.loading = !this.loading;
      this.$membership.cancelSubscription(this.$route.params.id, {
        plan_id: subscription.plan_id,
        slug: subscription.slug,
        immediate: true
      }).then(res => {
        this.$bvToast.toast('Plan canceled succesfully', {
          title: 'Success',
          variant: 'success'
        });
        location.reload();
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    makePlanPrimary(subscription) {
      this.loading = !this.loading;
      this.$membership.makePlanPrimary(this.$route.params.id, {
        plan_id: subscription.plan_id
      }).then(res => {
        this.loading = !this.loading;
        this.$bvToast.toast('Plan made primary', {
          title: 'Success',
          variant: 'success'
        });
      }).catch(e => {
        this.loading = !this.loading;
        displayError(e, this);
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var _components_shack_ProfilePhotoUploadButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    UploadButton: _components_shack_ProfilePhotoUploadButton_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  props: {
    name: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    },
    company: {
      type: String,
      default: null
    },
    address: {
      type: Array,
      default: null
    },
    userProfile: {
      type: Object,
      default: null
    },
    userId: {
      type: Number,
      default: null
    },
    date: {
      type: String,
      default: null
    },
    extras: {
      type: Array,
      default: () => []
    },
    referral: {
      type: String,
      default: null
    }
  },
  data: () => ({
    loading: false,
    prefix_type: [{
      text: 'Founding Member',
      value: '0'
    }, {
      text: 'Fast Track',
      value: '1'
    }, {
      text: 'Early Invite',
      value: '2'
    }, {
      text: 'General Member',
      value: '3'
    }]
  }),
  computed: {
    getMembershipType() {
      let type = null;

      _.each(this.prefix_type, o => {
        if (o.value == this.status) {
          type = o.text;
        }
      });

      return type;
    },

    isLoading() {
      return this.loading;
    }

  },
  methods: {
    getCities(address) {
      return _.join(_.map(address, o => {
        return _.upperFirst(o);
      }), ', ');
    },

    imageUploaded(url) {
      this.loading = true;
      this.userProfile.picture = url;
      this.$membership.updateProfile({
        user_id: this.userId,
        ...this.userProfile
      }).then(res => {
        this.loading = !this.loading;
        this.$bvToast.toast('Photo updated succesfully', {
          title: 'Success',
          variant: 'success'
        }); //this.$router.go(-1)
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    onUploadStarted(loading) {
      this.loading = loading;
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    service: {
      type: String,
      default: 'images'
    },
    url: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      publicUrl: null
    };
  },

  methods: {
    async onFileChange(e) {
      //this.$emit('onLoad', true)
      const file = e.target.files[0];

      if (!file) {
        this.$emit('onLoad', false);
        return;
      }

      if (file.size > 500000) {
        this.$bvToast.toast('File size must not be greater than 500kb', {
          variant: 'warning'
        });
        this.$emit('onLoad', false);
        return;
      }

      let mime = file.type;
      this.url = URL.createObjectURL(file);
      let upload = await this.getSignedUrl(mime);
      this.publicUrl = upload.public_url;
      this.$bvToast.toast('Uploading image. Please wait...'); //upload image here

      let uploadUrl = await this.uploadUrl(upload.signed_url, file, mime).then(res => {
        this.$emit('input', this.publicUrl);
        this.$bvToast.toast('Image uploaded successfully', {
          variant: 'success',
          solid: true
        });
      }).catch(e => {
        this.$bvToast.toast(e.message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
        this.$emit('onLoad', false);
      });
    },

    getSignedUrl(mime) {
      const {
        service
      } = this;
      return this.$images.getSignedUrl(service, mime).then(({
        data
      }) => {
        return data.data;
      }).catch(({
        response
      }) => {
        this.$bvToast.toast(JSON.stringify(response.data.errors), {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
      });
    },

    uploadUrl(url, file, mime) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(url, file, {
        headers: {
          'Content-Type': mime
        }
      }).then(res => {
        return res;
      }).catch(({
        response
      }) => {
        this.$bvToast.toast(JSON.stringify(response.data), {
          variant: 'danger',
          solid: true
        });
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(83)["URL"]))

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var _components_argon_core_BaseHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _components_argon_core_Inputs_HtmlEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(107);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: _components_argon_core_BaseHeader__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    MainTitle: _components_shack_MainTitle_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    HtmlEditor: _components_argon_core_Inputs_HtmlEditor__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  props: {
    membership_id: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    loading: false,
    body: '',
    sticky_note: false,
    notes: []
  }),
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
      user: state => state.auth.user.id
    })
  },

  mounted() {
    this.getNotes();
  },

  methods: {
    getNotes() {
      this.$membership.getAllNotes(this.$route.params.id).then(({
        data
      }) => {
        this.notes = _.sortBy(_.sortBy(data, ['updated_by']), [function (o) {
          return o.sticky_note !== true;
        }]);
      }).catch(e => {
        console.log(e.response.data.message);
      });
    },

    addNote() {
      const {
        body,
        sticky_note
      } = this;
      const {
        id
      } = this.$route.params;
      this.loading = !this.loading;
      this.$membership.addNote(id, {
        body,
        sticky_note
      }).then(({
        data
      }) => {
        this.body = '';
        this.loading = !this.loading;
        this.$bvToast.toast('Note added successfully', {
          title: 'Success',
          variant: 'success'
        });
        this.notes.push(data);
        this.notes = _.sortBy(_.sortBy(this.notes, ['updated_by']), [function (o) {
          return o.sticky_note !== true;
        }]);
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? e.response.data.message : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    deleteNote(i) {
      if (!confirm('Are you sure?')) return;
      this.loading = !this.loading;
      const {
        id
      } = this.$route.params;
      const noteId = this.notes[i].id;
      this.$membership.deleteNote(id, noteId).then(res => {
        this.loading = !this.loading;
        this.$bvToast.toast('Note added successfully', {
          title: 'Success',
          variant: 'success'
        });
        this.notes.splice(i, 1);
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? e.response.data.message : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    updateNote(note) {
      this.loading = !this.loading;
      this.sticky_note = !note.sticky_note;
      const {
        sticky_note
      } = this;
      this.$membership.updateNote(this.membership_id, note.id, {
        sticky_note
      }).then(res => {
        this.loading = !this.loading;
        this.getNotes();
        this.$bvToast.toast('Note added successfully', {
          title: 'Success',
          variant: 'success'
        });
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? e.response.data.message : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 160:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 202:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePhotoUploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePhotoUploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePhotoUploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePhotoUploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePhotoUploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePhotoUploadButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHead_vue_vue_type_style_index_0_id_bc4c8d8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHead_vue_vue_type_style_index_0_id_bc4c8d8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHead_vue_vue_type_style_index_0_id_bc4c8d8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHead_vue_vue_type_style_index_0_id_bc4c8d8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHead_vue_vue_type_style_index_0_id_bc4c8d8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHead_vue_vue_type_style_index_0_id_bc4c8d8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipNotes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipNotes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipNotes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipNotes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipNotes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipNotes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/ChangePlan.vue?vue&type=template&id=bd9d74b2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.changePlan($event)}}},[_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"label":"New Plan","description":""}},[_c('el-select',{attrs:{"remote-method":_vm.getPlans,"loading":_vm.loading,"filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose New Plan"},model:{value:(_vm.new_plan_id),callback:function ($$v) {_vm.new_plan_id=$$v},expression:"new_plan_id"}},_vm._l((_vm.plans),function(plan){return _c('el-option',{key:plan.id,attrs:{"label":plan.name,"value":plan.id}})}),1)],1)],1),_vm._v(" "),_c('b-button',{staticClass:"float-right",attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Update Plan")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/directory/ChangePlan.vue?vue&type=template&id=bd9d74b2&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/option.css
var theme_chalk_option = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(20);

// EXTERNAL MODULE: external "element-ui/lib/option"
var option_ = __webpack_require__(81);
var lib_option_default = /*#__PURE__*/__webpack_require__.n(option_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/select.css
var theme_chalk_select = __webpack_require__(97);

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(82);
var lib_select_default = /*#__PURE__*/__webpack_require__.n(select_);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/ChangePlan.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ChangePlanvue_type_script_lang_js_ = ({
  name: 'ChangePlan',
  components: {
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a
  },
  props: {
    plan_id: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    loading: false,
    search: '',
    plans: [],
    new_plan_id: ''
  }),

  mounted() {
    this.loading = !this.loading;
    this.$plan.getAllPlan().then(({
      data
    }) => {
      this.loading = !this.loading;
      this.plans = data.data;
    }).catch(e => {
      this.loading = !this.loading;
      this.$bvToast.toast('Failed to retrieve plans. Try again', {
        title: 'Error',
        variant: 'danger'
      });
    });
  },

  methods: {
    getPlans(q) {
      this.loading = !this.loading;
      const link = `${this.$route.params.space}/plans?filter[name]=${q}`;
      this.$plan.getAllPlan(link).then(({
        data
      }) => {
        this.loading = !this.loading;
        this.plans = data.data;
      }).catch(e => {
        this.loading = !this.loading;
        this.$bvToast.toast('Failed to retrieve plans. Try again', {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    changePlan() {
      this.loading = !this.loading;
      const {
        id
      } = this.$route.params;
      const {
        new_plan_id,
        plan_id
      } = this;
      this.$membership.changePlan(id, {
        subscription_id: plan_id,
        new_plan_id
      }).then(({
        data
      }) => {
        this.$bvToast.toast('Plan changed successfully', {
          title: 'Success',
          variant: 'success'
        });
        location.reload();
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ~ ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./components/directory/ChangePlan.vue?vue&type=script&lang=js&
 /* harmony default export */ var directory_ChangePlanvue_type_script_lang_js_ = (ChangePlanvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/directory/ChangePlan.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  directory_ChangePlanvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "328b8d6b"
  
)

/* harmony default export */ var ChangePlan = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/AddPlan.vue?vue&type=template&id=d96f8172&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addPlan($event)}}},[_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"selectPlan","label":"Plan","description":""}},[_c('el-select',{attrs:{"remote-method":_vm.getPlans,"loading":_vm.loading,"filterable":"","remote":"","reserve-keyword":"","placeholder":"Choose New Plan"},model:{value:(_vm.plan.plan_id),callback:function ($$v) {_vm.$set(_vm.plan, "plan_id", $$v)},expression:"plan.plan_id"}},_vm._l((_vm.plans),function(plan){return _c('el-option',{key:plan.id,attrs:{"label":plan.name,"value":plan.id}})}),1)],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"memberCard","label":"Payment Source","description":""}},[_c('el-select',{attrs:{"reserve-keyword":"","placeholder":"Choose Card"},model:{value:(_vm.plan.card_nonce),callback:function ($$v) {_vm.$set(_vm.plan, "card_nonce", $$v)},expression:"plan.card_nonce"}},_vm._l((_vm.cards),function(card){return _c('el-option',{key:card.id,attrs:{"label":((card.card_brand) + " ~ **** " + (card.last_4)),"value":card.id}})}),1)],1)],1),_vm._v(" "),_c('b-row',[_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Trial"}},[_c('b-form-checkbox',{attrs:{"id":"checkbox-1","value":true,"unchecked-value":false,"name":"checkbox-1"},model:{value:(_vm.plan.trial),callback:function ($$v) {_vm.$set(_vm.plan, "trial", $$v)},expression:"plan.trial"}},[_vm._v("\n          Yes\n        ")])],1),_vm._v(" "),(_vm.plan.trial)?_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Trial Days"}},[_c('b-form-input',{attrs:{"type":"number","required":""},model:{value:(_vm.plan.trial_days),callback:function ($$v) {_vm.$set(_vm.plan, "trial_days", $$v)},expression:"plan.trial_days"}})],1):_vm._e()],1),_vm._v(" "),_c('b-button',{staticClass:"float-right",attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Add Plan")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/directory/AddPlan.vue?vue&type=template&id=d96f8172&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/option.css
var theme_chalk_option = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(20);

// EXTERNAL MODULE: external "element-ui/lib/option"
var option_ = __webpack_require__(81);
var lib_option_default = /*#__PURE__*/__webpack_require__.n(option_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/select.css
var theme_chalk_select = __webpack_require__(97);

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(82);
var lib_select_default = /*#__PURE__*/__webpack_require__.n(select_);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/AddPlan.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AddPlanvue_type_script_lang_js_ = ({
  name: 'AddPlan',
  components: {
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a
  },
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    loading: false,
    search: '',
    plans: [],
    plan: {
      plan_id: '',
      trial: false,
      trial_days: '0',
      card_nonce: ''
    }
  }),

  mounted() {
    this.loading = !this.loading;
    this.plan.end_time = this.$moment().format('YYYY-MM-DD HH:mm:ss');
    this.$plan.getAllPlan().then(({
      data
    }) => {
      this.loading = !this.loading;
      this.plans = data.data;
    }).catch(e => {
      this.loading = !this.loading;
      this.$bvToast.toast('Failed to retrieve plans. Try again', {
        title: 'Error',
        variant: 'danger'
      });
    });
  },

  methods: {
    getPlans(q) {
      this.loading = !this.loading;
      const link = `${this.$route.params.space}/plans?filter[name]=${q}`;
      this.$plan.getAllPlan(link).then(({
        data
      }) => {
        this.loading = !this.loading;
        this.plans = data.data;
      }).catch(e => {
        this.loading = !this.loading;
        this.$bvToast.toast('Failed to retrieve plans. Try again', {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    addPlan() {
      this.loading = !this.loading;
      const {
        id
      } = this.$route.params;
      const {
        plan
      } = this;
      this.$membership.addPlan(id, plan).then(res => {
        this.$bvToast.toast('Plan assigned to member successfully', {
          title: 'Success',
          variant: 'success'
        });
        location.reload();
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./components/directory/AddPlan.vue?vue&type=script&lang=js&
 /* harmony default export */ var directory_AddPlanvue_type_script_lang_js_ = (AddPlanvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/directory/AddPlan.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  directory_AddPlanvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7bf7d6e8"
  
)

/* harmony default export */ var AddPlan = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/AddCredit.vue?vue&type=template&id=82dd1a6e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addCredit($event)}}},[_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"selectPlan","label":"Enter the amount","description":""}},[_c('el-input',{attrs:{"loading":_vm.loading,"type":"number","filterable":"","remote":"","reserve-keyword":"","placeholder":"$0.00","required":""},model:{value:(_vm.credit.amount),callback:function ($$v) {_vm.$set(_vm.credit, "amount", $$v)},expression:"credit.amount"}})],1)],1),_vm._v(" "),_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"selectPlan","label":"Expiration date","description":""}},[_c('el-input',{attrs:{"loading":_vm.loading,"type":"date","filterable":"","required":"","remote":"","reserve-keyword":""},model:{value:(_vm.credit.expirationDate),callback:function ($$v) {_vm.$set(_vm.credit, "expirationDate", $$v)},expression:"credit.expirationDate"}})],1)],1),_vm._v(" "),_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"selectPlan","label":"Purpose","description":""}},[_c('b-form-radio',{attrs:{"aria-describedby":_vm.ariaDescribedby,"name":"some-radios","value":"room-booking"},model:{value:(_vm.credit.purpose),callback:function ($$v) {_vm.$set(_vm.credit, "purpose", $$v)},expression:"credit.purpose"}},[_vm._v("Room Booking")]),_vm._v(" "),_c('b-form-radio',{attrs:{"aria-describedby":_vm.ariaDescribedby,"name":"some-radios","value":"event-booking"},model:{value:(_vm.credit.purpose),callback:function ($$v) {_vm.$set(_vm.credit, "purpose", $$v)},expression:"credit.purpose"}},[_vm._v("Event Tickets")]),_vm._v(" "),_c('b-form-radio',{attrs:{"aria-describedby":_vm.ariaDescribedby,"name":"some-radios","value":"food-ordering"},model:{value:(_vm.credit.purpose),callback:function ($$v) {_vm.$set(_vm.credit, "purpose", $$v)},expression:"credit.purpose"}},[_vm._v("Food & Drinks")])],1)],1),_vm._v(" "),_c('b-button',{staticClass:"float-right",attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Add Credit")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/directory/AddCredit.vue?vue&type=template&id=82dd1a6e&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/option.css
var theme_chalk_option = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(20);

// EXTERNAL MODULE: external "element-ui/lib/option"
var option_ = __webpack_require__(81);
var lib_option_default = /*#__PURE__*/__webpack_require__.n(option_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/select.css
var theme_chalk_select = __webpack_require__(97);

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(82);
var lib_select_default = /*#__PURE__*/__webpack_require__.n(select_);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/AddCredit.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AddCreditvue_type_script_lang_js_ = ({
  name: 'AddCredit',
  components: {
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    loading: false,
    search: '',
    plans: [],
    credit: {
      amount: null,
      description: null,
      membership_id: null,
      purpose: 'room-booking',
      expirationDate: null
    }
  }),

  mounted() {},

  methods: {
    addCredit() {
      this.loading = !this.loading;
      this.credit.description = 'Credit bonus for member';
      this.credit.membership_id = this.data.id;
      this.$membership.addCredit(this.credit).then(res => {
        this.$bvToast.toast('Credit assigned to member successfully', {
          title: 'Success',
          variant: 'success'
        });
        location.reload();
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./components/directory/AddCredit.vue?vue&type=script&lang=js&
 /* harmony default export */ var directory_AddCreditvue_type_script_lang_js_ = (AddCreditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/directory/AddCredit.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  directory_AddCreditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6235c0f8"
  
)

/* harmony default export */ var AddCredit = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/AddCard.vue?vue&type=template&id=4a08ce24&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.updateCard($event)}}},[_c('div',{staticClass:"errorbox"},_vm._l((_vm.errors),function(error){return _c('div',{key:error.message,staticClass:"error"},[_vm._v("\n        "+_vm._s(error)+"\n      ")])}),0),_vm._v(" "),_c('div',{attrs:{"id":"card-tainer"}},[_c('div',{staticClass:"form-group cardfields card-number",attrs:{"id":_vm.id+'-sq-card-number'}}),_vm._v(" "),_c('div',{staticClass:"form-group cardfields expiration-date",attrs:{"id":_vm.id+'-sq-expiration-date'}}),_vm._v(" "),_c('div',{staticClass:"form-group cardfields cvv",attrs:{"id":_vm.id+'-sq-cvv'}}),_vm._v(" "),_c('div',{staticClass:"form-group cardfields postal-code",attrs:{"id":_vm.id+'-sq-postal-code'}})]),_vm._v(" "),_c('b-button',{staticClass:"float-right",attrs:{"disabled":_vm.loading,"variant":"primary","type":"submit"}},[_vm._v("Save Card")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/directory/AddCard.vue?vue&type=template&id=4a08ce24&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/AddCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AddCardvue_type_script_lang_js_ = ({
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
  created: function () {
    let locationId = "1883YH8CHHJM4";
    let applicationId = "sq0idp-vX9ROmcOKd8kjXRXOuxbbg";
    let that = this;
    this.paymentForm = new SqPaymentForm({
      autoBuild: false,
      applicationId: applicationId,
      locationId: locationId,
      inputClass: 'sq-input',
      // Initialize the payment form elements
      // Customize the CSS for SqPaymentForm iframe elements
      inputStyles: [{
        backgroundColor: 'transparent',
        color: '#4c4d4f',
        fontSize: '14px',
        fontWeight: '100',
        padding: '10px',
        placeholderColor: 'grey'
      }, {
        mediaMaxWidth: '800px',
        fontSize: '10px'
      }, {
        mediaMaxWidth: '800px',
        mediaMinWidth: '600px',
        fontSize: '1px',
        backgroundColor: 'rgba(118,170,233,1)'
      }],
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
        methodsSupported: function (methods) {
          // Only show the button if Apple Pay for Web is enabled
          // Otherwise, display the wallet not enabled message.
          that.applePay = methods.applePay;
          that.masterpass = methods.masterpass;
        },

        /*
           * Digital Wallet related functions
           */
        createPaymentRequest: function () {
          var paymentRequestJson;
          /* ADD CODE TO SET/CREATE paymentRequestJson */

          return paymentRequestJson;
        },
        validateShippingContact: function (contact) {
          var validationErrorObj;
          /* ADD CODE TO SET validationErrorObj IF ERRORS ARE FOUND */

          return validationErrorObj;
        },

        /*
           * callback function: cardNonceResponseReceived
           * Triggered when: SqPaymentForm completes a card nonce request
           */
        cardNonceResponseReceived: function (errors, nonce, cardData) {
          if (errors) {
            errors.forEach(function (error) {
              that.errors.push(error.message);
            });
            return;
          } //call function to send to backend


          that.processInvitation(nonce);
        },

        /*
           * callback function: paymentFormLoaded
           * Triggered when: SqPaymentForm is fully loaded
           */
        paymentFormLoaded: function () {
          console.log('paymentFormLoaded');
          /* HANDLE AS DESIRED */
        }
      }
    });
    this.paymentForm.build();
  },
  methods: {
    updateCard() {
      this.paymentForm.requestCardNonce();
    },

    processInvitation(nonce) {
      this.toggleLoading();

      try {
        this.$emit('addCard', nonce);
        this.toggleLoading();
      } catch (error) {
        this.toggleLoading();
        this.$bvToast.toast(e.response.data.message, {
          title: 'Error',
          variant: 'danger'
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/directory/AddCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var directory_AddCardvue_type_script_lang_js_ = (AddCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/directory/AddCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(206)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  directory_AddCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0c197b4f"
  
)

/* harmony default export */ var AddCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/AddCustomCharge.vue?vue&type=template&id=42777743&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addCredit($event)}}},[_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"selectPlan","label":"Charge Details","description":""}},[_c('el-input',{attrs:{"remote-method":_vm.getPlans,"loading":_vm.loading,"type":"number","filterable":"","remote":"","reserve-keyword":"","required":"","placeholder":"amount $"},model:{value:(_vm.charge.amount),callback:function ($$v) {_vm.$set(_vm.charge, "amount", $$v)},expression:"charge.amount"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"selectPlan","label":"","description":""}},[_c('el-input',{attrs:{"remote-method":_vm.getPlans,"loading":_vm.loading,"type":"text","filterable":"","remote":"","reserve-keyword":"","required":"","placeholder":"Description"},model:{value:(_vm.charge.description),callback:function ($$v) {_vm.$set(_vm.charge, "description", $$v)},expression:"charge.description"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-6",attrs:{"label":"Charge instantly"}},[_c('b-form-checkbox',{attrs:{"value":true,"unchecked-value":false},model:{value:(_vm.charge.chargeInstantly),callback:function ($$v) {_vm.$set(_vm.charge, "chargeInstantly", $$v)},expression:"charge.chargeInstantly"}},[_vm._v("Yes")])],1),_vm._v(" "),(!_vm.charge.chargeInstantly)?_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"selectPlan","label":"Charge on","description":""}},[_c('el-input',{attrs:{"remote-method":_vm.getPlans,"loading":_vm.loading,"type":"date","filterable":"","remote":"","reserve-keyword":"","required":"","placeholder":"Due Date"},model:{value:(_vm.charge.dueDate),callback:function ($$v) {_vm.$set(_vm.charge, "dueDate", $$v)},expression:"charge.dueDate"}})],1):_vm._e()],1),_vm._v(" "),_c('b-button',{staticClass:"float-right",attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Add")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/directory/AddCustomCharge.vue?vue&type=template&id=42777743&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/option.css
var theme_chalk_option = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(20);

// EXTERNAL MODULE: external "element-ui/lib/option"
var option_ = __webpack_require__(81);
var lib_option_default = /*#__PURE__*/__webpack_require__.n(option_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/select.css
var theme_chalk_select = __webpack_require__(97);

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(82);
var lib_select_default = /*#__PURE__*/__webpack_require__.n(select_);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/AddCustomCharge.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AddCustomChargevue_type_script_lang_js_ = ({
  name: 'AddCustomCharge',
  components: {
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    loading: false,
    search: '',
    plans: [],
    charge: {
      description: null,
      amount: null,
      dueDate: null,
      chargeInstantly: true
    }
  }),

  mounted() {},

  methods: {
    addCredit() {
      this.loading = !this.loading; // add other charge details to this.data.currentCharge before sending

      this.charge.space_id = this.data.space_id;
      this.charge.user_id = this.data.user_id;
      this.$membership.addCustomCharge(this.charge).then(res => {
        this.$bvToast.toast('Custom charge billed to member successfully', {
          title: 'Success',
          variant: 'success'
        });
        location.reload();
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./components/directory/AddCustomCharge.vue?vue&type=script&lang=js&
 /* harmony default export */ var directory_AddCustomChargevue_type_script_lang_js_ = (AddCustomChargevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/directory/AddCustomCharge.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  directory_AddCustomChargevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "98f2af78"
  
)

/* harmony default export */ var AddCustomCharge = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/EditCustomCharge.vue?vue&type=template&id=ee9c025c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit($event)}}},[_c('b-row',[_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"selectPlan","label":"Charge Details","description":""}},[_c('el-input',{attrs:{"remote-method":_vm.getPlans,"loading":_vm.loading,"disabled":_vm.data.state === 'settled'?true:false,"type":"number","filterable":"","remote":"","reserve-keyword":"","required":"","placeholder":"amount $"},model:{value:(_vm.data.amount),callback:function ($$v) {_vm.$set(_vm.data, "amount", $$v)},expression:"data.amount"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"selectPlan","label":"","description":""}},[_c('el-input',{attrs:{"remote-method":_vm.getPlans,"loading":_vm.loading,"disabled":_vm.data.state === 'settled'?true:false,"type":"text","filterable":"","remote":"","reserve-keyword":"","required":"","placeholder":"Description"},model:{value:(_vm.data.description),callback:function ($$v) {_vm.$set(_vm.data, "description", $$v)},expression:"data.description"}})],1),_vm._v(" "),_c('b-form-group',{staticClass:"col-md-12",attrs:{"id":"selectPlan","label":"","description":""}},[_c('client-only',[_c('date-picker',{attrs:{"id":"time","disabled":_vm.data.state === 'settled'?true:false,"width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD","value-type":"format","confirm":"","type":"date","placeholder":"Start Date"},model:{value:(_vm.data.due_date),callback:function ($$v) {_vm.$set(_vm.data, "due_date", $$v)},expression:"data.due_date"}})],1)],1)],1),_vm._v(" "),(_vm.data.state === 'unsettled')?[_c('b-button',{staticClass:"float-left",attrs:{"disabled":_vm.loading,"type":"submit","variant":"outline-primary"},on:{"click":function($event){_vm.billMember = true}}},[_vm._v("Charge Now")]),_vm._v(" "),_c('b-button',{staticClass:"float-right",attrs:{"disabled":_vm.loading,"type":"submit","variant":"primary"}},[_vm._v("Save")])]:_vm._e()],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/directory/EditCustomCharge.vue?vue&type=template&id=ee9c025c&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/option.css
var theme_chalk_option = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(20);

// EXTERNAL MODULE: external "element-ui/lib/option"
var option_ = __webpack_require__(81);
var lib_option_default = /*#__PURE__*/__webpack_require__.n(option_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/select.css
var theme_chalk_select = __webpack_require__(97);

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(82);
var lib_select_default = /*#__PURE__*/__webpack_require__.n(select_);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/directory/EditCustomCharge.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EditCustomChargevue_type_script_lang_js_ = ({
  name: 'AddFreeMonths',
  components: {
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    loading: false,
    search: '',
    plans: [],
    billMember: false,
    freeMonths: {
      numberOfMonths: null
    }
  }),

  mounted() {},

  methods: {
    onSubmit(data) {
      if (this.billMember) {
        this.billNow();
      } else {
        this.addCredit();
      }
    },

    addCredit() {
      this.loading = !this.loading; // add other charge details to this.data.currentCharge before sending

      this.data.spaceId = this.data.space_id;
      this.data.chargeId = this.data.id;
      this.$membership.editCustomCharge(this.data).then(res => {
        this.$bvToast.toast('Charge updated successfully', {
          title: 'Success',
          variant: 'success'
        });
        location.reload();
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    },

    billNow() {
      this.loading = !this.loading; // add other charge details to this.data.currentCharge before sending

      this.data.spaceId = this.data.space_id;
      this.data.chargeId = this.data.id;
      this.$membership.billCustomCharge(this.data).then(res => {
        this.$bvToast.toast('Member billed successfully', {
          title: 'Success',
          variant: 'success'
        });
        location.reload();
      }).catch(e => {
        this.loading = !this.loading;
        const message = e.response ? `${e.response.data.message} ${JSON.stringify(e.response.data.errors)}` : e.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger'
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./components/directory/EditCustomCharge.vue?vue&type=script&lang=js&
 /* harmony default export */ var directory_EditCustomChargevue_type_script_lang_js_ = (EditCustomChargevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/directory/EditCustomCharge.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  directory_EditCustomChargevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9cef3ebe"
  
)

/* harmony default export */ var EditCustomCharge = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/CheckIn.vue?vue&type=template&id=444b4846&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('card',[_c('div',{staticClass:"d-flex align-items-center justify-content-between",attrs:{"slot":"header"},slot:"header"},[_c('div',{staticClass:"txt-upper"},[_vm._v("\n      CheckIn\n    ")]),_vm._v(" "),_c('div',{staticStyle:{"width":"200px"}},[_c('no-ssr',[_c('date-picker',{attrs:{"id":"time","width":"100%","input-class":"form-control","lang":"en","format":"YYYY-MM-DD","value-type":"format","confirm":"","range":"","type":"date","placeholder":"Start Date"},on:{"change":_vm.getCheckInData},model:{value:(_vm.date),callback:function ($$v) {_vm.date=$$v},expression:"date"}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"m-n25 overflow-auto"},[_c('b-table',{attrs:{"items":_vm.data,"fields":_vm.fields,"show-empty":"","striped":"","responsive":"sm","hover":""}})],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('base-pagination',{attrs:{"total":_vm.meta.total,"per-page":_vm.meta.per_page,"value":_vm.meta.current_page,"align":"center"},on:{"next":_vm.next,"prev":_vm.prev}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/CheckIn.vue?vue&type=template&id=444b4846&

// EXTERNAL MODULE: ./util/errors.js
var errors = __webpack_require__(104);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/CheckIn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CheckInvue_type_script_lang_js_ = ({
  data: () => ({
    date: [],
    data: [],
    fields: ['full_name', 'type', 'company', 'checkin_timestamp', 'checkout_timestamp'],
    meta: {},
    links: {}
  }),

  mounted() {
    this.date = [this.$moment().subtract(30, 'days').format('YYYY-MM-DD'), this.$moment().add(1, 'days').format('YYYY-MM-DD')];
    this.getCheckInData();
  },

  methods: {
    getCheckInData() {
      const filter = `?filter[by_member]=${this.$route.params.id}&filter[created_at]=${this.date[0]},${this.date[1]}`;
      this.$checkin.checkins(filter).then(res => {
        this.data = res.data;
        this.meta = res.meta;
        this.links = res.links;
      }).catch(e => {
        Object(errors["a" /* displayError */])(e, this);
      });
    },

    processRequest(link) {
      this.$axios.$get(link).then(res => {
        this.data = res.data;
        this.meta = res.meta;
        this.links = res.links;
      }).catch(e => {
        Object(errors["a" /* displayError */])(e, this);
      });
    },

    next() {
      const filter = `&filter[by_member]=${this.$route.params.id}&filter[created_at]=${this.date[0]},${this.date[1]}`;
      const link = this.links.next + filter;
      this.processRequest(link);
    },

    prev() {
      const filter = `&filter[by_member]=${this.$route.params.id}&filter[created_at]=${this.date[0]},${this.date[1]}`;
      const link = this.links.prev + filter;
      this.processRequest(link);
    }

  }
});
// CONCATENATED MODULE: ./components/shack/CheckIn.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_CheckInvue_type_script_lang_js_ = (CheckInvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/CheckIn.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_CheckInvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "561a891c"
  
)

/* harmony default export */ var CheckIn = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/ProfileHead.vue?vue&type=template&id=bc4c8d8c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sh-p-header"},[_vm._ssrNode("<span class=\"label label-default sh-label\""+(_vm._ssrStyle({"right":"130px"},null, { display: (_vm.getMembershipType) ? '' : 'none' }))+" data-v-bc4c8d8c><i class=\"fa fa-star\""+(_vm._ssrStyle(null,null, { display: (_vm.getMembershipType == 'Founding Member') ? '' : 'none' }))+" data-v-bc4c8d8c></i>"+_vm._ssrEscape("\n      "+_vm._s(_vm.getMembershipType)+"\n    ")+"</span> <span class=\"label label-default sh-label\" data-v-bc4c8d8c>"+((_vm.$moment('2022-04-15 00:00:00').isSame(_vm.referral))?("<i class=\"fa fa-user\" data-v-bc4c8d8c></i>\n      returning member /&gt;"):("<i class=\"fa fa-user\" data-v-bc4c8d8c></i>\n      Invited member\n    "))+"</span> "),_vm._ssrNode("<div class=\"d-flex align-items-center pd-20 mr-5 mr-tb-20\" data-v-bc4c8d8c>","</div>",[_vm._ssrNode("<div id=\"profile-upload-icon-container\" class=\"rounded-circle avatar-xxl\" style=\"position: relative\" data-v-bc4c8d8c>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.img ? _vm.img : '/img/placeholder.jpg'))+" class=\"mr-r-20 rounded-circle avatar-xxl\" data-v-bc4c8d8c> "+((_vm.isLoading)?("<div class=\"default-profile-loading rounded-circle avatar-xxl\" data-v-bc4c8d8c><img src=\"/img/loading.gif\" style=\"width: auto; height: 30px\" data-v-bc4c8d8c></div>"):"<!---->")+" "),(!_vm.isLoading)?_vm._ssrNode("<div class=\"default-profile-upload-state rounded-circle avatar-xxl\" data-v-bc4c8d8c>","</div>",[_c('UploadButton',{attrs:{"service":"event","label":"Upload Event Image (<500KB & size 1125x582)"},on:{"input":_vm.imageUploaded,"onLoad":_vm.onUploadStarted},model:{value:(_vm.profilePic),callback:function ($$v) {_vm.profilePic=$$v},expression:"profilePic"}})],1):_vm._e()],2),_vm._ssrNode(" <div style=\"margin-left: 10px\" data-v-bc4c8d8c><h1 data-v-bc4c8d8c>"+_vm._ssrEscape(_vm._s(_vm.name))+"</h1> <h3 class=\"mr-b-10\" data-v-bc4c8d8c>"+_vm._ssrEscape(_vm._s(_vm.company))+"</h3> <i class=\"ti-location-pin\" data-v-bc4c8d8c></i>"+_vm._ssrEscape("\n      "+_vm._s(_vm.getCities(_vm.address))+"\n      ")+"<br data-v-bc4c8d8c> <i class=\"ti-calendar\" data-v-bc4c8d8c></i>"+_vm._ssrEscape("\n      "+_vm._s(_vm.date)+"\n    ")+"</div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/ProfileHead.vue?vue&type=template&id=bc4c8d8c&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/ProfileHead.vue?vue&type=script&lang=js&
var ProfileHeadvue_type_script_lang_js_ = __webpack_require__(154);

// CONCATENATED MODULE: ./components/shack/ProfileHead.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_ProfileHeadvue_type_script_lang_js_ = (ProfileHeadvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/ProfileHead.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(204)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_ProfileHeadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bc4c8d8c",
  "15baa1ce"
  
)

/* harmony default export */ var ProfileHead = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/MembershipNotes.vue?vue&type=template&id=fce46cae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"add-note mr-lr-20 mr-b-20\">","</div>",[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addNote($event)}}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.body),expression:"body"}],staticClass:"form-control dashed",attrs:{"placeholder":"Notes on member goes here","rows":"3","max-rows":"6","description":"description","required":""},domProps:{"value":(_vm.body)},on:{"input":function($event){if($event.target.composing){ return; }_vm.body=$event.target.value}}}),_vm._v(" "),_c('b-form-checkbox',{staticClass:"mt-2",attrs:{"value":true,"unchecked-value":false},model:{value:(_vm.sticky_note),callback:function ($$v) {_vm.sticky_note=$$v},expression:"sticky_note"}},[_vm._v("Sticky Note")]),_vm._v(" "),_c('b-button',{staticClass:"mr-t-20 dashed",attrs:{"type":"submit","variant":"outline-default","block":""}},[_vm._v("Add New Note")])],1)],1),_vm._ssrNode(" "),_vm._l((_vm.notes),function(note,i){return _vm._ssrNode("<div class=\"note-card pd-20\">","</div>",[_vm._ssrNode("<div class=\"d-flex justify-content-between\">","</div>",[_vm._ssrNode("<h3><i class=\"ti-pin-alt mr-r-10\""+(_vm._ssrStyle(null,null, { display: (note.sticky_note) ? '' : 'none' }))+"></i></h3> "),_c('b-dropdown',{staticClass:"drop-0",attrs:{"no-caret":""},scopedSlots:_vm._u([{key:"button-content",fn:function(){return [_c('i',{staticClass:"fa fa-ellipsis-v"})]},proxy:true}],null,true)},[_vm._v(" "),_c('b-button',{staticClass:"dropdown-item",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.updateNote(note)}}},[_c('i',{staticClass:"ti-pin-alt"}),_vm._v(" "),(!note.sticky_note)?_c('span',[_vm._v("Pin this")]):_c('span',[_vm._v("Unpin this")])]),_vm._v(" "),_c('b-button',{staticClass:"dropdown-item text-danger",attrs:{"variant":"transparent","size":"sm"},on:{"click":function($event){return _vm.deleteNote(i)}}},[_c('i',{staticClass:"ti ti-trash"}),_vm._v(" Delete Post")])],1)],2),_vm._ssrNode(" <p>"+_vm._ssrEscape(_vm._s(note.body))+"</p> <p class=\"text-muted m-0\">"+_vm._ssrEscape(_vm._s(note.user.name)+"  •  "+_vm._s(_vm.$moment(note.updated_at).format('MMM DD, YYYY HH:mm:ss')))+"</p>")],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/MembershipNotes.vue?vue&type=template&id=fce46cae&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/MembershipNotes.vue?vue&type=script&lang=js&
var MembershipNotesvue_type_script_lang_js_ = __webpack_require__(158);

// CONCATENATED MODULE: ./components/shack/MembershipNotes.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_MembershipNotesvue_type_script_lang_js_ = (MembershipNotesvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/MembershipNotes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(205)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_MembershipNotesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a830e0a0"
  
)

/* harmony default export */ var MembershipNotes = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/ProfilePhotoUploadButton.vue?vue&type=template&id=17ab960c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pd-10 upload-btn-wrapper pd-0\" style=\"cursor: pointer\"><button class=\"btn\" style=\"margin-right: 0px\"><i class=\"fa fa-camera\" style=\"font-size: 24px; color: white\"></i></button> <input"+(_vm._ssrAttr("name",_vm.name))+" type=\"file\" accept=\"image/*\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/ProfilePhotoUploadButton.vue?vue&type=template&id=17ab960c&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/ProfilePhotoUploadButton.vue?vue&type=script&lang=js&
var ProfilePhotoUploadButtonvue_type_script_lang_js_ = __webpack_require__(155);

// CONCATENATED MODULE: ./components/shack/ProfilePhotoUploadButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_ProfilePhotoUploadButtonvue_type_script_lang_js_ = (ProfilePhotoUploadButtonvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/ProfilePhotoUploadButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_ProfilePhotoUploadButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "46983667"
  
)

/* harmony default export */ var ProfilePhotoUploadButton = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/directory/_id/index.vue?vue&type=template&id=07ae9eea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"row py-4"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"d-flex justify-content-between"},[_c('MainTitle',{attrs:{"title":"Directory","subtitle":"Profile"}}),_vm._v(" "),_c('div',{staticClass:"d-flex align-items-center"},[_c('b-form-checkbox',{attrs:{"switch":"","value":"checkin","unchecked-value":"checkout","size":"lg","variant":"success"},on:{"change":_vm.checkinToggle},model:{value:(_vm.checkin.status),callback:function ($$v) {_vm.$set(_vm.checkin, "status", $$v)},expression:"checkin.status"}},[(_vm.checkin.status == 'checkin')?_c('span',{staticClass:"text-success"},[_vm._v("Checked in")]):_c('span',{staticClass:"text-muted"},[_vm._v("Checked Out")])])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-6 mr-l-child-10 text-right"},[_c('b-button',{staticClass:"text-primary",attrs:{"to":{ name: 'space-memberships-id', params: { id: _vm.data.id } },"variant":"transparent"}},[_c('i',{staticClass:"fas fa-edit"}),_vm._v(" Edit Membership\n        ")]),_vm._v(" "),_c('b-button',{staticClass:"text-primary",attrs:{"variant":"transparent"},on:{"click":function($event){_vm.drawer = true}}},[_c('i',{staticClass:"fa fa-sticky-note"}),_vm._v(" View Notes\n        ")]),_vm._v(" "),_c('b-button',{staticClass:"text-danger",attrs:{"id":"deleteMember","variant":"transparent"},on:{"click":_vm.deleteMember}},[_c('i',{staticClass:"fa fa-trash"}),_vm._v(" Delete Member\n        ")])],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_c('ProfileHead',{attrs:{"status":_vm.data.prefix_type,"img":_vm.data.user_profile ? _vm.data.user_profile.picture : null,"name":_vm.data.user_profile
                ? _vm.data.user_profile.full_name
                : ((_vm.data.first_name) + " " + (_vm.data.last_name)),"company":_vm.data.user_profile ? _vm.data.user_profile.company : null,"address":_vm.data.user_profile ? _vm.data.user_profile.addresses : null,"date":_vm.data.user_profile ? _vm.data.user_profile.date_of_birth : null,"user-profile":_vm.data.user_profile,"user-id":_vm.data.user_id,"referral":_vm.data.subscriptions[0].ends_at}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\"><i class=\"fa fa-envelope\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.data.email)+"\n              ")+"</div> "),_vm._ssrNode("<div class=\"col-md-6\" style=\"color: red\">","</div>",[(!_vm.data.covid_declaration_completed)?_c('b-badge',{attrs:{"href":"#","variant":"danger"}},[_c('i',{staticClass:"fa fa-exclamation-triangle"}),_vm._v(" Covid vaccination\n                  ID not uploaded")]):_c('b-badge',{attrs:{"href":"#","variant":"success"}},[_c('i',{staticClass:"fa fa-check"}),_vm._v(" Covid vaccination ID\n                  uploaded")])],1)],2),_vm._ssrNode(" <div class=\"row mt-2\"><div class=\"col-md-6\"><i class=\"fa fa-venus-mars\"></i>"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.user_profile && _vm.data.user_profile.gender)+"\n              ")+"</div> <div class=\"col-md-6\"><i class=\"fa fa-globe\"></i>"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.user_profile && _vm.data.user_profile.nationality)+"\n              ")+"</div></div> <div class=\"row mt-2\"><div class=\"col-md-6\"><i class=\"fa fa-user\"></i>"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.user_profile && _vm.data.user_profile.ethnicity)+"\n              ")+"</div> <div class=\"col-md-6\"><i class=\"fa fa-phone\"></i>"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.user_profile && _vm.data.user_profile.phone)+"\n              ")+"</div></div> "),_vm._ssrNode("<div class=\"mt-4\">","</div>",[_vm._ssrNode("<div class=\"text-muted\">Profile</div> <p>"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.user_profile && _vm.data.user_profile.bio)+"\n              ")+"</p> "),(_vm.data.user_profile)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"text-muted\">Cities</div> "),_vm._l((_vm.data.user_profile.cities),function(city,i){return _c('badge',{key:(city + "-" + i),staticClass:"mr-1"},[_vm._v(_vm._s(city))])}),_vm._ssrNode(" <div class=\"text-muted\">Interests</div> "),_vm._l((_vm.data.user_profile.interests),function(interest,i){return _c('badge',{key:(interest + "-" + i),staticClass:"mr-1"},[_vm._v(_vm._s(interest))])}),_vm._ssrNode(" <div class=\"text-muted mt-2\">Offers</div> "),_vm._l((_vm.data.user_profile.offers),function(offer,i){return _c('badge',{key:(offer + "-" + i),staticClass:"mr-1"},[_vm._v(_vm._s(offer))])}),_vm._ssrNode(" <div class=\"text-muted mt-2\">Skills</div> "),_vm._l((_vm.data.user_profile.skills),function(skill,i){return _c('badge',{key:(skill + "-" + i),staticClass:"mr-1"},[_vm._v(_vm._s(skill))])})],2):_vm._e()],2),_vm._ssrNode(" <div class=\"mt-4\"><p><i class=\"ti-id-badge\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.data && _vm.data.membership_id)+"\n              ")+"</p> <p><i class=\"ti-twitter-alt\"></i>"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.user_profile && _vm.data.user_profile.twitter)+"\n              ")+"</p> <p><i class=\"ti-linkedin\"></i>"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.user_profile && _vm.data.user_profile.linkedin)+"\n              ")+"</p> <p><i class=\"ti-world\"></i>"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.user_profile && _vm.data.user_profile.website)+"\n              ")+"</p></div> <div class=\"sh-dls\"><span> Joined on:</span>"+_vm._ssrEscape("\n              "+_vm._s(_vm.$moment(_vm.data.created_at).format('MMMM DD, YYYY'))+"\n            ")+"</div> <div class=\"sh-dls\"><span>Renewal due by:</span>"+_vm._ssrEscape(" "+_vm._s(_vm.getSubscription)+"\n            ")+"</div> <div class=\"sh-dls\"><span>Last Checkin Timestamp:</span>"+_vm._ssrEscape("\n              "+_vm._s(_vm.data.last_checkin[0] &&
                  _vm.$moment(_vm.data.last_checkin[0].checkin_timestamp).format(
                    'MMMM DD, YYYY HH:mm:ss'
                  ))+"\n            ")+"</div> <hr align=\"left\" class=\"w-25 bg-dark3 text-default\"> <span>"+(_vm._s(_vm.getExtras(_vm.data.extras)))+"</span> "),_vm._ssrNode("<div class=\"sh-dls\">","</div>",[_vm._ssrNode("<span> Paid by:</span> "),_c('nuxt-link',{attrs:{"to":{
                  name: 'space-memberships-id',
                  params: { id: _vm.data.paid_by },
                }}},[_vm._v(_vm._s(_vm.data.payee_name))])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sh-dls\">","</div>",[_vm._ssrNode("<span> Paying for:</span> "),_vm._l((_vm.paid_for),function(paid){return _vm._ssrNode("<span>","</span>",[(_vm.paid_for.length > 0)?_c('nuxt-link',{attrs:{"to":{
                  name: 'space-memberships-id',
                  params: { id: paid.id },
                }}},[_vm._v(_vm._s(paid.first_name)+" "+_vm._s(paid.last_name))]):_vm._e(),_vm._ssrNode(",\n              ")],2)})],2)],2)],2),_vm._ssrNode(" "),_c('check-in')],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_c('card',{attrs:{"header-classes":"bg-transparent"}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center",attrs:{"slot":"header"},slot:"header"},[_c('div',{staticClass:"txt-upper"},[_vm._v("Card Details")]),_vm._v(" "),[_c('b-button',{staticClass:"text-primary",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.toggleModal('add-card')}}},[_c('i',{staticClass:"fa fa-credit-card"}),_vm._v(" Add New Card\n              ")])]],2),_vm._v(" "),(_vm.cards.length == 0)?[_c('div',{staticClass:"text-center"},[_c('div',{staticClass:"text-muted"},[_vm._v("No card added for member")])])]:[_c('div',{staticClass:"m-n25"},[_c('table',{staticClass:"table table-hover table-striped"},[_c('tbody',_vm._l((_vm.cards),function(card,i){return _c('tr',{key:card.id},[_c('td',[_vm._v("\n                      "+_vm._s(card.card_brand)+"\n                    ")]),_vm._v(" "),_c('td',[_vm._v("\n                      "+_vm._s(_vm.$moment(card.exp_month, 'M').format('MMM'))+"\n                      "+_vm._s(card.exp_year)+"\n                    ")]),_vm._v(" "),_c('td',[_c('b-button',{staticClass:"text-danger",attrs:{"disabled":_vm.loading,"size":"\n                        sm","variant":"transparent"},on:{"click":function($event){return _vm.removeMemberSource(i)}}},[_c('i',{staticClass:"fa fa-trash"})])],1)])}),0)])])]],2),_vm._ssrNode(" "),_c('card',[_c('div',{staticClass:"d-flex justify-content-between align-items-center",attrs:{"slot":"header"},slot:"header"},[_c('div',{staticClass:"txt-upper"},[_vm._v("SHACK15 CREDIT")]),_vm._v(" "),_c('b-button',{staticClass:"text-primary",attrs:{"id":"addPlanBtn","variant":"transparent"},on:{"click":function($event){return _vm.toggleModal('add-credit')}}},[_c('i',{staticClass:"fa fa-plus"}),_vm._v(" Add Credit\n            ")])],1),_vm._v(" "),_c('div',{staticClass:"m-n25"},[_c('table',{staticClass:"table table-hover table-striped"},[_c('tbody',[_c('tr',[_c('div',{staticStyle:{"display":"flex"}},[_c('td',{attrs:{"id":"balance"}},[_c('div',{staticStyle:{"display":"inline-block"},on:{"click":function($event){_vm.booking_edit_disabled =
                            _vm.data.room_booking_credit_expiration_date != null
                              ? false
                              : true},"change":function($event){_vm.booking_edit_disabled = true}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.room_booking_credit_amount),expression:"data.room_booking_credit_amount"}],attrs:{"disabled":_vm.booking_edit_disabled ? 'disabled' : _vm.none,"type":"number"},domProps:{"value":(_vm.data.room_booking_credit_amount)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "room_booking_credit_amount", $event.target.value)}}})])]),_vm._v(" "),_c('td',{staticStyle:{"flex-grow":"1","flex-basis":"80px","text-align":"left"}},[_vm._v("\n                      Expiration date:\n                      "+_vm._s(_vm.getExpDetails(
                          _vm.data.room_booking_credit_expiration_date
                        ))+"\n                    ")]),_vm._v(" "),_c('td',[_c('b-badge',{attrs:{"href":"#","variant":"primary"}},[_vm._v(" Rooms")])],1)])]),_vm._v(" "),_c('tr',[_c('div',{staticStyle:{"display":"flex"}},[_c('td',{attrs:{"id":"balance"}},[_c('div',{staticStyle:{"display":"inline-block"},on:{"click":function($event){_vm.food_edit_disabled =
                            _vm.data.food_ordering_credit_expiration_date != null
                              ? false
                              : true},"change":function($event){_vm.food_edit_disabled = true}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.food_ordering_credit_amount),expression:"data.food_ordering_credit_amount"}],attrs:{"disabled":_vm.food_edit_disabled ? 'disabled' : _vm.none,"type":"number"},domProps:{"value":(_vm.data.food_ordering_credit_amount)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "food_ordering_credit_amount", $event.target.value)}}})])]),_vm._v(" "),_c('td',{staticStyle:{"flex-grow":"1","flex-basis":"80px","text-align":"left"}},[_vm._v("\n                      Expiration date:\n                      "+_vm._s(_vm.getExpDetails(
                          _vm.data.food_ordering_credit_expiration_date
                        ))+"\n                    ")]),_vm._v(" "),_c('td',[_c('b-badge',{attrs:{"href":"#","variant":"primary"}},[_vm._v("\n                        Food & Drinks")])],1)])]),_vm._v(" "),_c('tr',[_c('div',{staticStyle:{"display":"flex"}},[_c('td',{attrs:{"id":"balance"}},[_c('div',{staticStyle:{"display":"inline-block"},on:{"click":function($event){_vm.event_edit_disabled =
                            _vm.data.event_booking_credit_expiration_date != null
                              ? false
                              : true},"change":function($event){_vm.event_edit_disabled = true}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.event_booking_credit_amount),expression:"data.event_booking_credit_amount"}],attrs:{"disabled":_vm.event_edit_disabled ? 'disabled' : _vm.none,"type":"number"},domProps:{"value":(_vm.data.event_booking_credit_amount)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "event_booking_credit_amount", $event.target.value)}}})])]),_vm._v(" "),_c('td',{staticStyle:{"flex-grow":"1","flex-basis":"80px","text-align":"left"}},[_vm._v("\n                      Expiration date:\n                      "+_vm._s(_vm.getExpDetails(
                          _vm.data.event_booking_credit_expiration_date
                        ))+"\n                    ")]),_vm._v(" "),_c('td',[_c('b-badge',{attrs:{"href":"#","variant":"primary"}},[_vm._v(" Events")])],1)])])])])])]),_vm._ssrNode(" "),_c('card',[_c('div',{staticClass:"d-flex justify-content-between align-items-center",attrs:{"slot":"header"},slot:"header"},[_c('div',{staticClass:"txt-upper"},[_vm._v("NUMBER OF GUESTS ALLOWED")])]),_vm._v(" "),_c('div',{staticClass:"m-n25"},[_c('table',{staticClass:"table table-hover table-striped"},[_c('tbody',[_c('tr',[_c('div',[_c('td',{attrs:{"id":"member_guests"}},[_c('div',{staticStyle:{"display":"inline-block"},on:{"click":function($event){_vm.guestsDisabled = false},"change":function($event){_vm.guestsDisabled = true}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.member_guests),expression:"member_guests"}],attrs:{"disabled":_vm.guestsDisabled ? 'disabled' : _vm.none,"type":"number"},domProps:{"value":(_vm.member_guests)},on:{"input":function($event){if($event.target.composing){ return; }_vm.member_guests=$event.target.value}}})]),_vm._v(" "),_c('b-popover',{attrs:{"target":"member_guests","placement":"top","triggers":"hover focus"}})],1),_vm._v(" "),_c('td',[_c('b-button',{staticClass:"text-danger",attrs:{"id":"edit-guests","size":"sm","variant":"transparent"},on:{"click":function($event){_vm.guestsDisabled = false}}},[_c('i',{staticClass:"fa fa-edit"})]),_vm._v(" "),_c('b-button',{staticClass:"text-primary",attrs:{"id":"save-member_guests","size":"sm","variant":"transparent"},on:{"click":_vm.saveMemberGuests}},[_c('i',{staticClass:"fa fa-save"})]),_vm._v(" "),_c('b-popover',{attrs:{"target":"edit-guests","placement":"top","content":"Edit guests","triggers":"hover focus"}})],1)])])])])])]),_vm._ssrNode(" "),_c('card',[_c('div',{staticClass:"d-flex justify-content-between align-items-center",attrs:{"slot":"header"},slot:"header"},[_c('div',{staticClass:"txt-upper"},[_c('span',[_vm._v("MEMBERSHIP PLAN")]),_vm._v(" "),(_vm.data.subscriptions[0].state === 'paused')?_c('b-badge',{staticStyle:{"margin-left":"20px"},attrs:{"pill":"","variant":"danger"}},[_vm._v(_vm._s('Paused'))]):_vm._e()],1),_vm._v(" "),_c('b-button',{staticClass:"text-primary",attrs:{"id":"addPlanBtn","variant":"transparent"},on:{"click":function($event){return _vm.toggleModal('add-plan')}}},[_c('i',{staticClass:"fa fa-plus"}),_vm._v(" Add New Plan\n            ")])],1),_vm._v(" "),_c('div',{staticClass:"m-n25"},[_c('table',{staticClass:"table table-hover table-striped"},[_c('tbody',_vm._l((_vm.data.subscriptions),function(subscription){return _c('tr',{key:subscription.id},[(!subscription.canceled_at)?_c('div',[_c('td',[_vm._v(_vm._s(_vm.getSubName(subscription)['name']))]),_vm._v(" "),_c('td',[_vm._v("Until "+_vm._s(_vm.getSubDetails(subscription)))]),_vm._v(" "),_c('td',[_c('div',{staticStyle:{"display":"inline-block"}},[_vm._v("Auto Renew")]),_vm._v(" "),_c('div',{staticStyle:{"display":"inline-block"}},[_c('b-form-checkbox',{attrs:{"switch":"","value":"active","unchecked-value":"manual-active","size":"lg","variant":"success"},on:{"change":_vm.autoRenewSubscriptionToggle},model:{value:(subscription.state),callback:function ($$v) {_vm.$set(subscription, "state", $$v)},expression:"subscription.state"}},[(subscription.state == 'active')?_c('span',{staticClass:"text-success",staticStyle:{"visibility":"hidden"}},[_vm._v("A")]):_c('span',{staticClass:"text-muted",staticStyle:{"visibility":"hidden"}},[_vm._v("M")])])],1),_vm._v(" "),_c('b-dropdown',{staticStyle:{"padding":"0px"},attrs:{"right":"","no-caret":"true","variant":"transparent"},scopedSlots:_vm._u([{key:"button-content",fn:function(){return [_c('i',{staticClass:"fas fa-ellipsis-v"})]},proxy:true}],null,true)},[_vm._v(" "),(subscription.state != 'paused')?_c('b-dropdown-item',{attrs:{"href":"#"},on:{"click":function($event){return _vm.autoRenewSubscriptionToggle('paused')}}},[_vm._v("Pause Subscription")]):_c('b-dropdown-item',{attrs:{"href":"#"},on:{"click":function($event){return _vm.autoRenewSubscriptionToggle('active')}}},[_vm._v("Resume Subscription")]),_vm._v(" "),_c('b-dropdown-divider'),_vm._v(" "),_c('b-dropdown-item',{attrs:{"href":"#"},on:{"click":function($event){return _vm.changePlan(subscription)}}},[_vm._v("Change Plan")]),_vm._v(" "),_c('b-dropdown-item',{attrs:{"href":"#"},on:{"click":function($event){return _vm.makePlanPrimary(subscription)}}},[_vm._v("Make This Plan Primary")]),_vm._v(" "),_c('b-dropdown-item',{attrs:{"href":"#"},on:{"click":function($event){return _vm.cancelPlan(subscription)}}},[_vm._v("Cancel Plan")])],1)],1)]):_vm._e()])}),0)])])]),_vm._ssrNode(" "),_c('card',[_c('div',{staticClass:"d-flex justify-content-between align-items-center",attrs:{"slot":"header"},slot:"header"},[_c('div',{staticClass:"txt-upper"},[_vm._v("CUSTOM CHARGES")]),_vm._v(" "),_c('b-button',{staticClass:"text-primary",attrs:{"id":"addPlanBtn","variant":"transparent"},on:{"click":function($event){return _vm.toggleModal('add-custom-charge')}}},[_c('i',{staticClass:"fa fa-plus"}),_vm._v(" Add New Charge\n            ")])],1),_vm._v(" "),[_c('div',{staticClass:"m-n25"},[_c('div',{staticClass:"overflow-auto"},[_c('b-table',{attrs:{"id":"my-table","items":_vm.customChargesList,"striped":"","hover":"","show-empty":"","responsive":"sm"},on:{"row-clicked":_vm.rowClicked},scopedSlots:_vm._u([{key:"cell(description)",fn:function(data){return [_c('div',{staticStyle:{"text-overflow":"ellipsis","max-width":"170px","overflow":"hidden"}},[_vm._v("\n                      "+_vm._s(data.value)+"\n                    ")])]}},{key:"cell(customItem)",fn:function(data){return undefined}},{key:"cell(current_status)",fn:function(data){return [(data.value.toUpperCase() == 'SETTLED')?_c('b-badge',{attrs:{"pill":"","variant":"success"}},[_vm._v(_vm._s('PAID'))]):_vm._e(),_vm._v(" "),(data.value.toUpperCase() == 'UNSETTLED')?_c('b-badge',{attrs:{"pill":"","variant":"danger"}},[_vm._v(_vm._s('NOT PAID'))]):_vm._e(),_vm._v(" "),(data.value.toUpperCase() == 'UNSETTLED')?_c('b-badge',{attrs:{"pill":"","variant":"warning"}},[_vm._v(_vm._s('PENDING'))]):_vm._e()]}}])})],1)]),_vm._v(" "),_c('div',{staticStyle:{"visibility":"hidden"},attrs:{"slot":"footer"},slot:"footer"},[_c('b-pagination',{attrs:{"per-page":_vm.perPage,"total-rows":_vm.rows,"align":"center","aria-controls":"my-table"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}})],1)]],2),_vm._ssrNode(" "),_c('card',[_c('div',{staticClass:"d-flex justify-content-between",attrs:{"slot":"header"},slot:"header"},[_c('div',{staticClass:"txt-upper"},[_vm._v("Events")])]),_vm._v(" "),[_c('div',{staticClass:"m-n25"},[_c('div',{staticClass:"overflow-auto"},[_c('b-table',{attrs:{"id":"my-table","items":_vm.events,"per-page":_vm.perPage,"current-page":_vm.currentPage,"striped":"","hover":"","show-empty":"","thead-class":"hidden_header"}})],1)]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('b-pagination',{attrs:{"per-page":_vm.perPage,"total-rows":_vm.rows,"align":"center","aria-controls":"my-table"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}})],1)]],2)],2)],2)]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"change-plan","title":"Change Current Plan","hide-footer":""}},[_c('ChangePlan',{attrs:{"plan_id":_vm.plan_id}})],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"add-plan","static":true,"title":"Add New Plan","hide-footer":""}},[_c('AddPlan',{attrs:{"cards":_vm.cards}})],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"add-credit","static":true,"title":"Add Credit","hide-footer":""}},[_c('AddCredit',{attrs:{"data":_vm.data}})],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"add-card","title":"Add New Card","hide-footer":""}},[_c('AddCard',{attrs:{"toggle-loading":_vm.toggleLoading,"loading":_vm.loading},on:{"addCard":_vm.addCard}})],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"add-custom-charge","title":"Add Custom Charge","hide-footer":""}},[_c('AddCustomCharge',{attrs:{"data":_vm.data}})],1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"edit-custom-charge","title":"Edit Charge","hide-footer":""}},[_c('EditCustomCharge',{attrs:{"data":_vm.selctedItemData}})],1),_vm._ssrNode(" "),_c('el-drawer',{attrs:{"visible":_vm.drawer,"direction":_vm.direction,"title":"Notes"},on:{"update:visible":function($event){_vm.drawer=$event}}},[_c('MembershipNotes',{attrs:{"membership_id":_vm.data.id}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/directory/_id/index.vue?vue&type=template&id=07ae9eea&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/directory/_id/index.vue?vue&type=script&lang=js&
var _idvue_type_script_lang_js_ = __webpack_require__(153);

// CONCATENATED MODULE: ./pages/_space/directory/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var directory_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/directory/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(208)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  directory_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "dc7fd392"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/MainTitle.vue?vue&type=template&id=eb42120a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{staticClass:"page-title"},[_vm._ssrNode("<span>"+_vm._ssrEscape(_vm._s(_vm.title))+"</span> <b"+(_vm._ssrStyle(null,null, { display: (_vm.subtitle) ? '' : 'none' }))+">•</b>"+_vm._ssrEscape(" "+_vm._s(_vm.subtitle)))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shack/MainTitle.vue?vue&type=template&id=eb42120a&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shack/MainTitle.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var MainTitlevue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    info: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/shack/MainTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var shack_MainTitlevue_type_script_lang_js_ = (MainTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shack/MainTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shack_MainTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bd5e01f8"
  
)

/* harmony default export */ var MainTitle = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=index.js.map