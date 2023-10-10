exports.ids = [11];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const countries = [{
  ccode: 'AF',
  cname: 'Afghanistan'
}, {
  ccode: 'AX',
  cname: 'Aland Islands'
}, {
  ccode: 'AL',
  cname: 'Albania'
}, {
  ccode: 'DZ',
  cname: 'Algeria'
}, {
  ccode: 'AS',
  cname: 'American Samoa'
}, {
  ccode: 'AD',
  cname: 'Andorra'
}, {
  ccode: 'AO',
  cname: 'Angola'
}, {
  ccode: 'AI',
  cname: 'Anguilla'
}, {
  ccode: 'AQ',
  cname: 'Antarctica'
}, {
  ccode: 'AG',
  cname: 'Antigua And Barbuda'
}, {
  ccode: 'AR',
  cname: 'Argentina'
}, {
  ccode: 'AM',
  cname: 'Armenia'
}, {
  ccode: 'AW',
  cname: 'Aruba'
}, {
  ccode: 'AU',
  cname: 'Australia'
}, {
  ccode: 'AT',
  cname: 'Austria'
}, {
  ccode: 'AZ',
  cname: 'Azerbaijan'
}, {
  ccode: 'BS',
  cname: 'Bahamas'
}, {
  ccode: 'BH',
  cname: 'Bahrain'
}, {
  ccode: 'BD',
  cname: 'Bangladesh'
}, {
  ccode: 'BB',
  cname: 'Barbados'
}, {
  ccode: 'BY',
  cname: 'Belarus'
}, {
  ccode: 'BE',
  cname: 'Belgium'
}, {
  ccode: 'BZ',
  cname: 'Belize'
}, {
  ccode: 'BJ',
  cname: 'Benin'
}, {
  ccode: 'BM',
  cname: 'Bermuda'
}, {
  ccode: 'BT',
  cname: 'Bhutan'
}, {
  ccode: 'BO',
  cname: 'Bolivia'
}, {
  ccode: 'BA',
  cname: 'Bosnia And Herzegovina'
}, {
  ccode: 'BW',
  cname: 'Botswana'
}, {
  ccode: 'BV',
  cname: 'Bouvet Island'
}, {
  ccode: 'BR',
  cname: 'Brazil'
}, {
  ccode: 'IO',
  cname: 'British Indian Ocean Territory'
}, {
  ccode: 'BN',
  cname: 'Brunei Darussalam'
}, {
  ccode: 'BG',
  cname: 'Bulgaria'
}, {
  ccode: 'BF',
  cname: 'Burkina Faso'
}, {
  ccode: 'BI',
  cname: 'Burundi'
}, {
  ccode: 'KH',
  cname: 'Cambodia'
}, {
  ccode: 'CM',
  cname: 'Cameroon'
}, {
  ccode: 'CA',
  cname: 'Canada'
}, {
  ccode: 'CV',
  cname: 'Cape Verde'
}, {
  ccode: 'KY',
  cname: 'Cayman Islands'
}, {
  ccode: 'CF',
  cname: 'Central African Republic'
}, {
  ccode: 'TD',
  cname: 'Chad'
}, {
  ccode: 'CL',
  cname: 'Chile'
}, {
  ccode: 'CN',
  cname: 'China'
}, {
  ccode: 'CX',
  cname: 'Christmas Island'
}, {
  ccode: 'CC',
  cname: 'Cocos (Keeling) Islands'
}, {
  ccode: 'CO',
  cname: 'Colombia'
}, {
  ccode: 'KM',
  cname: 'Comoros'
}, {
  ccode: 'CG',
  cname: 'Congo'
}, {
  ccode: 'CD',
  cname: 'Congo, Democratic Republic'
}, {
  ccode: 'CK',
  cname: 'Cook Islands'
}, {
  ccode: 'CR',
  cname: 'Costa Rica'
}, {
  ccode: 'CI',
  cname: "Cote D'Ivoire"
}, {
  ccode: 'HR',
  cname: 'Croatia'
}, {
  ccode: 'CU',
  cname: 'Cuba'
}, {
  ccode: 'CY',
  cname: 'Cyprus'
}, {
  ccode: 'CZ',
  cname: 'Czech Republic'
}, {
  ccode: 'DK',
  cname: 'Denmark'
}, {
  ccode: 'DJ',
  cname: 'Djibouti'
}, {
  ccode: 'DM',
  cname: 'Dominica'
}, {
  ccode: 'DO',
  cname: 'Dominican Republic'
}, {
  ccode: 'EC',
  cname: 'Ecuador'
}, {
  ccode: 'EG',
  cname: 'Egypt'
}, {
  ccode: 'SV',
  cname: 'El Salvador'
}, {
  ccode: 'GQ',
  cname: 'Equatorial Guinea'
}, {
  ccode: 'ER',
  cname: 'Eritrea'
}, {
  ccode: 'EE',
  cname: 'Estonia'
}, {
  ccode: 'ET',
  cname: 'Ethiopia'
}, {
  ccode: 'FK',
  cname: 'Falkland Islands (Malvinas)'
}, {
  ccode: 'FO',
  cname: 'Faroe Islands'
}, {
  ccode: 'FJ',
  cname: 'Fiji'
}, {
  ccode: 'FI',
  cname: 'Finland'
}, {
  ccode: 'FR',
  cname: 'France'
}, {
  ccode: 'GF',
  cname: 'French Guiana'
}, {
  ccode: 'PF',
  cname: 'French Polynesia'
}, {
  ccode: 'TF',
  cname: 'French Southern Territories'
}, {
  ccode: 'GA',
  cname: 'Gabon'
}, {
  ccode: 'GM',
  cname: 'Gambia'
}, {
  ccode: 'GE',
  cname: 'Georgia'
}, {
  ccode: 'DE',
  cname: 'Germany'
}, {
  ccode: 'GH',
  cname: 'Ghana'
}, {
  ccode: 'GI',
  cname: 'Gibraltar'
}, {
  ccode: 'GR',
  cname: 'Greece'
}, {
  ccode: 'GL',
  cname: 'Greenland'
}, {
  ccode: 'GD',
  cname: 'Grenada'
}, {
  ccode: 'GP',
  cname: 'Guadeloupe'
}, {
  ccode: 'GU',
  cname: 'Guam'
}, {
  ccode: 'GT',
  cname: 'Guatemala'
}, {
  ccode: 'GG',
  cname: 'Guernsey'
}, {
  ccode: 'GN',
  cname: 'Guinea'
}, {
  ccode: 'GW',
  cname: 'Guinea-Bissau'
}, {
  ccode: 'GY',
  cname: 'Guyana'
}, {
  ccode: 'HT',
  cname: 'Haiti'
}, {
  ccode: 'HM',
  cname: 'Heard Island & Mcdonald Islands'
}, {
  ccode: 'VA',
  cname: 'Holy See (Vatican City State)'
}, {
  ccode: 'HN',
  cname: 'Honduras'
}, {
  ccode: 'HK',
  cname: 'Hong Kong'
}, {
  ccode: 'HU',
  cname: 'Hungary'
}, {
  ccode: 'IS',
  cname: 'Iceland'
}, {
  ccode: 'IN',
  cname: 'India'
}, {
  ccode: 'ID',
  cname: 'Indonesia'
}, {
  ccode: 'IR',
  cname: 'Iran, Islamic Republic Of'
}, {
  ccode: 'IQ',
  cname: 'Iraq'
}, {
  ccode: 'IE',
  cname: 'Ireland'
}, {
  ccode: 'IM',
  cname: 'Isle Of Man'
}, {
  ccode: 'IL',
  cname: 'Israel'
}, {
  ccode: 'IT',
  cname: 'Italy'
}, {
  ccode: 'JM',
  cname: 'Jamaica'
}, {
  ccode: 'JP',
  cname: 'Japan'
}, {
  ccode: 'JE',
  cname: 'Jersey'
}, {
  ccode: 'JO',
  cname: 'Jordan'
}, {
  ccode: 'KZ',
  cname: 'Kazakhstan'
}, {
  ccode: 'KE',
  cname: 'Kenya'
}, {
  ccode: 'KI',
  cname: 'Kiribati'
}, {
  ccode: 'KR',
  cname: 'Korea'
}, {
  ccode: 'KW',
  cname: 'Kuwait'
}, {
  ccode: 'KG',
  cname: 'Kyrgyzstan'
}, {
  ccode: 'LA',
  cname: "Lao People's Democratic Republic"
}, {
  ccode: 'LV',
  cname: 'Latvia'
}, {
  ccode: 'LB',
  cname: 'Lebanon'
}, {
  ccode: 'LS',
  cname: 'Lesotho'
}, {
  ccode: 'LR',
  cname: 'Liberia'
}, {
  ccode: 'LY',
  cname: 'Libyan Arab Jamahiriya'
}, {
  ccode: 'LI',
  cname: 'Liechtenstein'
}, {
  ccode: 'LT',
  cname: 'Lithuania'
}, {
  ccode: 'LU',
  cname: 'Luxembourg'
}, {
  ccode: 'MO',
  cname: 'Macao'
}, {
  ccode: 'MK',
  cname: 'Macedonia'
}, {
  ccode: 'MG',
  cname: 'Madagascar'
}, {
  ccode: 'MW',
  cname: 'Malawi'
}, {
  ccode: 'MY',
  cname: 'Malaysia'
}, {
  ccode: 'MV',
  cname: 'Maldives'
}, {
  ccode: 'ML',
  cname: 'Mali'
}, {
  ccode: 'MT',
  cname: 'Malta'
}, {
  ccode: 'MH',
  cname: 'Marshall Islands'
}, {
  ccode: 'MQ',
  cname: 'Martinique'
}, {
  ccode: 'MR',
  cname: 'Mauritania'
}, {
  ccode: 'MU',
  cname: 'Mauritius'
}, {
  ccode: 'YT',
  cname: 'Mayotte'
}, {
  ccode: 'MX',
  cname: 'Mexico'
}, {
  ccode: 'FM',
  cname: 'Micronesia, Federated States Of'
}, {
  ccode: 'MD',
  cname: 'Moldova'
}, {
  ccode: 'MC',
  cname: 'Monaco'
}, {
  ccode: 'MN',
  cname: 'Mongolia'
}, {
  ccode: 'ME',
  cname: 'Montenegro'
}, {
  ccode: 'MS',
  cname: 'Montserrat'
}, {
  ccode: 'MA',
  cname: 'Morocco'
}, {
  ccode: 'MZ',
  cname: 'Mozambique'
}, {
  ccode: 'MM',
  cname: 'Myanmar'
}, {
  ccode: 'NA',
  cname: 'Namibia'
}, {
  ccode: 'NR',
  cname: 'Nauru'
}, {
  ccode: 'NP',
  cname: 'Nepal'
}, {
  ccode: 'NL',
  cname: 'Netherlands'
}, {
  ccode: 'AN',
  cname: 'Netherlands Antilles'
}, {
  ccode: 'NC',
  cname: 'New Caledonia'
}, {
  ccode: 'NZ',
  cname: 'New Zealand'
}, {
  ccode: 'NI',
  cname: 'Nicaragua'
}, {
  ccode: 'NE',
  cname: 'Niger'
}, {
  ccode: 'NG',
  cname: 'Nigeria'
}, {
  ccode: 'NU',
  cname: 'Niue'
}, {
  ccode: 'NF',
  cname: 'Norfolk Island'
}, {
  ccode: 'MP',
  cname: 'Northern Mariana Islands'
}, {
  ccode: 'NO',
  cname: 'Norway'
}, {
  ccode: 'OM',
  cname: 'Oman'
}, {
  ccode: 'PK',
  cname: 'Pakistan'
}, {
  ccode: 'PW',
  cname: 'Palau'
}, {
  ccode: 'PS',
  cname: 'Palestinian Territory, Occupied'
}, {
  ccode: 'PA',
  cname: 'Panama'
}, {
  ccode: 'PG',
  cname: 'Papua New Guinea'
}, {
  ccode: 'PY',
  cname: 'Paraguay'
}, {
  ccode: 'PE',
  cname: 'Peru'
}, {
  ccode: 'PH',
  cname: 'Philippines'
}, {
  ccode: 'PN',
  cname: 'Pitcairn'
}, {
  ccode: 'PL',
  cname: 'Poland'
}, {
  ccode: 'PT',
  cname: 'Portugal'
}, {
  ccode: 'PR',
  cname: 'Puerto Rico'
}, {
  ccode: 'QA',
  cname: 'Qatar'
}, {
  ccode: 'RE',
  cname: 'Reunion'
}, {
  ccode: 'RO',
  cname: 'Romania'
}, {
  ccode: 'RU',
  cname: 'Russian Federation'
}, {
  ccode: 'RW',
  cname: 'Rwanda'
}, {
  ccode: 'BL',
  cname: 'Saint Barthelemy'
}, {
  ccode: 'SH',
  cname: 'Saint Helena'
}, {
  ccode: 'KN',
  cname: 'Saint Kitts And Nevis'
}, {
  ccode: 'LC',
  cname: 'Saint Lucia'
}, {
  ccode: 'MF',
  cname: 'Saint Martin'
}, {
  ccode: 'PM',
  cname: 'Saint Pierre And Miquelon'
}, {
  ccode: 'VC',
  cname: 'Saint Vincent And Grenadines'
}, {
  ccode: 'WS',
  cname: 'Samoa'
}, {
  ccode: 'SM',
  cname: 'San Marino'
}, {
  ccode: 'ST',
  cname: 'Sao Tome And Principe'
}, {
  ccode: 'SA',
  cname: 'Saudi Arabia'
}, {
  ccode: 'SN',
  cname: 'Senegal'
}, {
  ccode: 'RS',
  cname: 'Serbia'
}, {
  ccode: 'SC',
  cname: 'Seychelles'
}, {
  ccode: 'SL',
  cname: 'Sierra Leone'
}, {
  ccode: 'SG',
  cname: 'Singapore'
}, {
  ccode: 'SK',
  cname: 'Slovakia'
}, {
  ccode: 'SI',
  cname: 'Slovenia'
}, {
  ccode: 'SB',
  cname: 'Solomon Islands'
}, {
  ccode: 'SO',
  cname: 'Somalia'
}, {
  ccode: 'ZA',
  cname: 'South Africa'
}, {
  ccode: 'GS',
  cname: 'South Georgia And Sandwich Isl.'
}, {
  ccode: 'ES',
  cname: 'Spain'
}, {
  ccode: 'LK',
  cname: 'Sri Lanka'
}, {
  ccode: 'SD',
  cname: 'Sudan'
}, {
  ccode: 'SR',
  cname: 'Suriname'
}, {
  ccode: 'SJ',
  cname: 'Svalbard And Jan Mayen'
}, {
  ccode: 'SZ',
  cname: 'Swaziland'
}, {
  ccode: 'SE',
  cname: 'Sweden'
}, {
  ccode: 'CH',
  cname: 'Switzerland'
}, {
  ccode: 'SY',
  cname: 'Syrian Arab Republic'
}, {
  ccode: 'TW',
  cname: 'Taiwan'
}, {
  ccode: 'TJ',
  cname: 'Tajikistan'
}, {
  ccode: 'TZ',
  cname: 'Tanzania'
}, {
  ccode: 'TH',
  cname: 'Thailand'
}, {
  ccode: 'TL',
  cname: 'Timor-Leste'
}, {
  ccode: 'TG',
  cname: 'Togo'
}, {
  ccode: 'TK',
  cname: 'Tokelau'
}, {
  ccode: 'TO',
  cname: 'Tonga'
}, {
  ccode: 'TT',
  cname: 'Trinidad And Tobago'
}, {
  ccode: 'TN',
  cname: 'Tunisia'
}, {
  ccode: 'TR',
  cname: 'Turkey'
}, {
  ccode: 'TM',
  cname: 'Turkmenistan'
}, {
  ccode: 'TC',
  cname: 'Turks And Caicos Islands'
}, {
  ccode: 'TV',
  cname: 'Tuvalu'
}, {
  ccode: 'UG',
  cname: 'Uganda'
}, {
  ccode: 'UA',
  cname: 'Ukraine'
}, {
  ccode: 'AE',
  cname: 'United Arab Emirates'
}, {
  ccode: 'GB',
  cname: 'United Kingdom'
}, {
  ccode: 'US',
  cname: 'United States'
}, {
  ccode: 'UM',
  cname: 'United States Outlying Islands'
}, {
  ccode: 'UY',
  cname: 'Uruguay'
}, {
  ccode: 'UZ',
  cname: 'Uzbekistan'
}, {
  ccode: 'VU',
  cname: 'Vanuatu'
}, {
  ccode: 'VE',
  cname: 'Venezuela'
}, {
  ccode: 'VN',
  cname: 'Viet Nam'
}, {
  ccode: 'VG',
  cname: 'Virgin Islands, British'
}, {
  ccode: 'VI',
  cname: 'Virgin Islands, U.S.'
}, {
  ccode: 'WF',
  cname: 'Wallis And Futuna'
}, {
  ccode: 'EH',
  cname: 'Western Sahara'
}, {
  ccode: 'YE',
  cname: 'Yemen'
}, {
  ccode: 'ZM',
  cname: 'Zambia'
}, {
  ccode: 'ZW',
  cname: 'Zimbabwe'
}];
/* harmony default export */ __webpack_exports__["a"] = (countries);

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/corporates/add.vue?vue&type=template&id=3fee87ef&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.addCompany($event)}}},[_c('base-header',{staticClass:"pb-6",attrs:{"type":""}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center py-4"},[_c('MainTitle',{attrs:{"title":"Setup Corporate"}}),_vm._v(" "),_c('b-button',{staticClass:"btn btn-primary text-white",attrs:{"disabled":_vm.loading,"type":"submit"}},[_c('i',{staticClass:"fa fa-save"}),_vm._v(" Save Corporate\n        ")])],1)]),_vm._v(" "),_c('div',{staticClass:"container-fluid mt--6"},[_c('div',{staticClass:"card-deck flex-column flex-xl-row"},[_c('card',[_c('h3',{staticClass:"mr-b-20"},[_vm._v("Add New Corporate")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Name","placeholder":"John Snow","required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Contact Name","required":"","placeholder":"Director, John Doe"},model:{value:(_vm.contact_name),callback:function ($$v) {_vm.contact_name=$$v},expression:"contact_name"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Contact Email","type":"email","required":"","placeholder":"john@planor.com"},model:{value:(_vm.contact_email),callback:function ($$v) {_vm.contact_email=$$v},expression:"contact_email"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"label":"Address","required":"","placeholder":"12 Maddison Street"},model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v},expression:"address"}})],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"row pd-r-20"},[_c('base-input',{staticClass:"col-md-6",attrs:{"label":"City","placeholder":"Silicon Valley","required":""},model:{value:(_vm.city),callback:function ($$v) {_vm.city=$$v},expression:"city"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"State","required":"","placeholder":"San Francisco"},model:{value:(_vm.state),callback:function ($$v) {_vm.state=$$v},expression:"state"}}),_vm._v(" "),_c('base-input',{staticClass:"col-md-6",attrs:{"label":"Zip Code","required":"","placeholder":"0021"},model:{value:(_vm.zipcode),callback:function ($$v) {_vm.zipcode=$$v},expression:"zipcode"}}),_vm._v(" "),_c('div',{staticClass:"form-group col-md-6"},[_c('label',[_vm._v("Country:")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"Select Country"},model:{value:(_vm.country),callback:function ($$v) {_vm.country=$$v},expression:"country"}},_vm._l((_vm.countries),function(country,index){return _c('el-option',{key:index,attrs:{"label":country.cname,"value":country.ccode}})}),1)],1),_vm._v(" "),_c('base-input',{staticClass:"col-md-12",attrs:{"type":"email","label":"Billing Email","required":"","placeholder":"john@plantor.com"},model:{value:(_vm.billing_email),callback:function ($$v) {_vm.billing_email=$$v},expression:"billing_email"}})],1)])])])],1),_vm._v(" "),_c('b-button',{staticClass:"text-primary mb-2",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_c('i',{staticClass:"ti-angle-left"}),_vm._v(" Back\n      ")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_space/corporates/add.vue?vue&type=template&id=3fee87ef&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/option.css
var theme_chalk_option = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(21);

// EXTERNAL MODULE: external "element-ui/lib/option"
var option_ = __webpack_require__(81);
var lib_option_default = /*#__PURE__*/__webpack_require__.n(option_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/select.css
var theme_chalk_select = __webpack_require__(97);

// EXTERNAL MODULE: external "element-ui/lib/select"
var select_ = __webpack_require__(82);
var lib_select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// EXTERNAL MODULE: ./components/shack/MainTitle.vue + 4 modules
var MainTitle = __webpack_require__(94);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./util/countries.js
var countries = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_space/corporates/add.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Components




/* harmony default export */ var addvue_type_script_lang_js_ = ({
  layout: 'ShackDash',
  components: {
    BaseHeader: BaseHeader["a" /* default */],
    MainTitle: MainTitle["a" /* default */],
    [lib_select_default.a.name]: lib_select_default.a,
    [lib_option_default.a.name]: lib_option_default.a
  },

  data() {
    return {
      name: '',
      contact_name: '',
      contact_email: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
      countries: countries["a" /* default */],
      billing_email: '',
      loading: false
    };
  },

  watch: {
    contact_email(newValue, oldValue) {
      if (!this.billing_email || this.billing_email === oldValue) {
        this.billing_email = newValue;
      }
    }

  },
  methods: {
    addCompany() {
      this.loading = !this.loading;
      const {
        name,
        contact_name,
        contact_email,
        address,
        city,
        state,
        country,
        billing_email,
        zipcode
      } = this;
      const payload = {
        name,
        contact_name,
        contact_email,
        address,
        city,
        state,
        country,
        zipcode,
        billing_email
      };
      this.$company.addCompany(payload).then(res => {
        this.$bvToast.toast('Successfully added corporation', {
          title: 'Success',
          variant: 'success',
          solid: true
        });
        setTimeout(() => {
          this.$router.push({
            name: 'space-corporates'
          });
        }, 3000);
      }).catch(err => {
        const message = err.response ? JSON.stringify(err.response.data.errors) : err.message;
        this.$bvToast.toast(message, {
          title: 'Error',
          variant: 'danger',
          solid: true
        });
        this.loading = !this.loading;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/_space/corporates/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var corporates_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_space/corporates/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  corporates_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dc1c5588"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

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
  "2927529c"
  
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
//# sourceMappingURL=add.js.map