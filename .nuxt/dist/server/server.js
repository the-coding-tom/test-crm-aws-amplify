module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"2":"pages/_space/activities/index","3":"pages/_space/admins/_id/edit","4":"pages/_space/admins/add","5":"pages/_space/admins/index","6":"pages/_space/checkins/history","7":"pages/_space/checkins/index","8":"pages/_space/checkins/settings","9":"pages/_space/community/index","10":"pages/_space/corporates/_id/edit","11":"pages/_space/corporates/add","12":"pages/_space/corporates/index","13":"pages/_space/directory/_id/index","14":"pages/_space/directory/_id/notes","15":"pages/_space/directory/add","16":"pages/_space/directory/index","17":"pages/_space/eatry/categories/add","18":"pages/_space/eatry/categories/index","19":"pages/_space/eatry/inventory/_id/edit","20":"pages/_space/eatry/inventory/_id/index","21":"pages/_space/eatry/inventory/add","22":"pages/_space/eatry/inventory/index","23":"pages/_space/eatry/orders/index","24":"pages/_space/edit","25":"pages/_space/events/_id/attendees","26":"pages/_space/events/_id/edit","27":"pages/_space/events/_id/index","28":"pages/_space/events/add","29":"pages/_space/events/categories/add","30":"pages/_space/events/categories/index","31":"pages/_space/events/drafts/index","32":"pages/_space/events/index","33":"pages/_space/index","34":"pages/_space/invoice/_id/index","35":"pages/_space/invoice/add/_id/index","36":"pages/_space/invoice/index","37":"pages/_space/invoice/preview/_id/index","38":"pages/_space/manage/checkins/index","39":"pages/_space/manage/directory/index","40":"pages/_space/manage/invite/index","41":"pages/_space/manage/invoices/index","42":"pages/_space/members-due/index","43":"pages/_space/members-subscribed/index","44":"pages/_space/memberships/_id/index","45":"pages/_space/memberships/add","46":"pages/_space/memberships/archived/index","47":"pages/_space/memberships/index","48":"pages/_space/memberships/messages/_id/index","49":"pages/_space/memberships/messages/create","50":"pages/_space/memberships/messages/index","51":"pages/_space/memberships/uninvited/index","52":"pages/_space/plans/_id/edit","53":"pages/_space/plans/add","54":"pages/_space/plans/index","55":"pages/_space/promotions/_id/edit","56":"pages/_space/promotions/add","57":"pages/_space/promotions/index","58":"pages/_space/resources/_id/index","59":"pages/_space/resources/add","60":"pages/_space/resources/bookings/index","61":"pages/_space/resources/categories/add","62":"pages/_space/resources/categories/index","63":"pages/_space/resources/index","64":"pages/_space/settings/index","65":"pages/_space/settings/rooms","66":"pages/_space/tags/add","67":"pages/_space/tags/index","68":"pages/_space/wellness/_id/index","69":"pages/_space/wellness/_id/slots","70":"pages/_space/wellness/add","71":"pages/_space/wellness/bookings/_id","72":"pages/_space/wellness/bookings/index","73":"pages/_space/wellness/categories/add","74":"pages/_space/wellness/categories/index","75":"pages/_space/wellness/index","76":"pages/auth/forgot-password","77":"pages/auth/login","78":"pages/auth/reset-password","79":"pages/index","80":"pages/user/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const randomColor = () => {
  let letters = 'ABCDEF0123456789';
  let len = 6;
  let result = '#';

  for (let i = 0; i < len; i++) {
    result += letters[parseInt(Math.random() * letters.length)];
  }

  return result;
};

const notify = {
  error: {
    title: 'Error',
    variant: 'danger',
    solid: true
  },
  sucess: {
    title: 'Success',
    variant: 'success',
    solid: true
  }
};

const parseRoomdate = (data, vm) => {
  const roomAvaila = data.split(',');
  const roomAvailability = [];
  roomAvaila.forEach(data => {
    let weekday = [];
    let timeof = [];
    let lookup = {
      su: 0,
      mo: 1,
      tu: 2,
      we: 3,
      th: 4,
      fr: 5,
      sa: 6
    };
    const timeData = data.replace(/ +/g, '').replace(/[^0-9-](?=[0-9])/g, '$& ').split(' ');

    if (timeData.length === 2) {
      weekday.push(timeData[0]);
      timeof.push(timeData[1]);
    }

    if (timeData.length === 3) {
      weekday.push(timeData[1]);
      timeof.push(timeData[2]);
    }

    const splitWeekday = weekday[0].split('-');
    const splitTimeOf = timeof[0].split('-');
    const AStruc = {
      from: '',
      to: '',
      weekdays: []
    };
    splitWeekday.forEach(week => {
      AStruc.weekdays.push(lookup[week]);
    });
    AStruc.from = vm.$moment(splitTimeOf[0], 'HH').format('HH:mm');
    AStruc.to = vm.$moment(splitTimeOf[1], 'HH').format('HH:mm');
    roomAvailability.push(AStruc);
  });
  return roomAvailability;
};

const undoParse = (data, vm) => {
  let str = '';
  const lookup = {
    0: 'su',
    1: 'mo',
    2: 'tu',
    3: 'we',
    4: 'th',
    5: 'fr',
    6: 'sa'
  };
  data.forEach(item => {
    let available = '';
    item.weekdays.forEach(day => {
      available += `${lookup[day]}-`;
    });
    available = available.slice(0, -1);
    let weekdayfrom = item.from.charAt(0) + item.from.charAt(1);
    let weekdayto = item.to.charAt(0) + item.to.charAt(1);
    available += ` ${weekdayfrom}-${weekdayto}`;
    str += `${available},`;
  });
  str = str.slice(0, -1);
  return str;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  randomColor,
  parseRoomdate,
  notify,
  parseRoomdate,
  undoParse
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue2-transitions");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Navbar/BaseNav.vue?vue&type=template&id=34c25cd6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar",class:_vm.classes},[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.containerClasses))+">","</div>",[_vm._t("brand"),_vm._ssrNode(" "),_vm._t("toggle-button",[(_vm.hasMenu)?_c('button',{staticClass:"navbar-toggler collapsed",attrs:{"type":"button","aria-expanded":"false","aria-label":"Toggle navigation"},on:{"click":_vm.toggleMenu}},[_c('span',{staticClass:"navbar-toggler-bar navbar-kebab"}),_vm._v(" "),_c('span',{staticClass:"navbar-toggler-bar navbar-kebab"}),_vm._v(" "),_c('span',{staticClass:"navbar-toggler-bar navbar-kebab"})]):_vm._e()]),_vm._ssrNode(" <button class=\"navbar-toggler\"><span class=\"navbar-toggler-icon\"></span></button> "),_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeMenu),expression:"closeMenu"},{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"navbar-collapse navbar-custom-collapse collapse show",class:_vm.menuClasses},[_vm._t("default",null,{"closeMenu":_vm.closeMenu})],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Navbar/BaseNav.vue?vue&type=template&id=34c25cd6&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Navbar/BaseNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseNavvue_type_script_lang_js_ = ({
  name: 'BaseNav',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false,
      description: 'Whether navbar menu is shown (valid for viewports < specified by `expand` prop)'
    },
    transparent: {
      type: Boolean,
      default: false,
      description: 'Whether navbar is transparent'
    },
    expand: {
      type: String,
      default: 'lg',
      description: 'Breakpoint where nav should expand'
    },
    menuClasses: {
      type: [String, Object, Array],
      default: '',
      description: 'Navbar menu (items) classes. Can be used to align menu items to the right/left'
    },
    containerClasses: {
      type: [String, Object, Array],
      default: 'container',
      description: 'Container classes. Can be used to control container classes (contains both navbar brand and menu items)'
    },
    type: {
      type: String,
      default: '',

      validator(value) {
        return ['', 'dark', 'success', 'danger', 'warning', 'white', 'primary', 'light', 'info', 'vue'].includes(value);
      },

      description: 'Navbar color type'
    }
  },
  computed: {
    classes() {
      let color = `bg-${this.type}`;
      let classes = [{
        'navbar-transparent': this.transparent
      }, {
        [`navbar-expand-${this.expand}`]: this.expand
      }];

      if (this.position) {
        classes.push(`navbar-${this.position}`);
      }

      if (!this.transparent) {
        classes.push(color);
      }

      return classes;
    },

    hasMenu() {
      return this.$slots.default;
    }

  },
  methods: {
    toggleMenu() {
      this.$emit('change', !this.show);
    },

    closeMenu() {
      this.$emit('change', false);
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/Navbar/BaseNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_BaseNavvue_type_script_lang_js_ = (BaseNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/argon-core/Navbar/BaseNav.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navbar_BaseNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "861e077a"
  
)

/* harmony default export */ var BaseNav = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Modal.vue?vue&type=template&id=28eb620f&
var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SlideYUpTransition',{attrs:{"duration":_vm.animationDuration}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"modal fade",class:[{'show d-block': _vm.show}, {'d-none': !_vm.show}, {'modal-mini': _vm.type === 'mini'}],attrs:{"aria-hidden":!_vm.show,"tabindex":"-1","role":"dialog"},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.closeModal($event)}}},[_c('div',{staticClass:"modal-dialog modal-dialog-centered",class:[( _obj = {'modal-notice': _vm.type === 'notice'}, _obj[("modal-" + _vm.size)] = _vm.size, _obj ), _vm.modalClasses]},[_c('div',{staticClass:"modal-content",class:[_vm.gradient ? ("bg-gradient-" + _vm.gradient) : '',_vm.modalContentClasses]},[(_vm.$slots.header)?_c('div',{staticClass:"modal-header",class:[_vm.headerClasses]},[_vm._t("header"),_vm._v(" "),_vm._t("close-button",[(_vm.showClose)?_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"},on:{"click":_vm.closeModal}},[_c('span',{attrs:{"aria-hidden":!_vm.show}},[_vm._v("×")])]):_vm._e()])],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"modal-body",class:_vm.bodyClasses},[_vm._t("default")],2),_vm._v(" "),(_vm.$slots.footer)?_c('div',{staticClass:"modal-footer",class:_vm.footerClasses},[_vm._t("footer")],2):_vm._e()])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Modal.vue?vue&type=template&id=28eb620f&

// EXTERNAL MODULE: external "vue2-transitions"
var external_vue2_transitions_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Modalvue_type_script_lang_js_ = ({
  name: 'Modal',
  components: {
    SlideYUpTransition: external_vue2_transitions_["SlideYUpTransition"]
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: '',

      validator(value) {
        let acceptedValues = ['', 'notice', 'mini'];
        return acceptedValues.indexOf(value) !== -1;
      },

      description: 'Modal type (notice|mini|"") '
    },
    modalClasses: {
      type: [Object, String],
      description: 'Modal dialog css classes',
      default: null
    },
    size: {
      type: String,
      description: 'Modal size',

      validator(value) {
        let acceptedValues = ['', 'sm', 'lg'];
        return acceptedValues.indexOf(value) !== -1;
      },

      default: null
    },
    modalContentClasses: {
      type: [Object, String],
      description: 'Modal dialog content css classes',
      default: null
    },
    gradient: {
      type: String,
      description: 'Modal gradient type (danger, primary etc)',
      default: null
    },
    headerClasses: {
      type: [Object, String],
      description: 'Modal Header css classes',
      default: null
    },
    bodyClasses: {
      type: [Object, String],
      description: 'Modal Body css classes',
      default: null
    },
    footerClasses: {
      type: [Object, String],
      description: 'Modal Footer css classes',
      default: null
    },
    animationDuration: {
      type: Number,
      default: 500,
      description: 'Modal transition duration'
    }
  },
  watch: {
    show(val) {
      let documentClasses = document.body.classList;

      if (val) {
        documentClasses.add('modal-open');
      } else {
        documentClasses.remove('modal-open');
      }
    }

  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);
      this.$emit('close');
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_core_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/argon-core/Modal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  argon_core_Modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "549cd20d"
  
)

/* harmony default export */ var Modal = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseHeader.vue?vue&type=template&id=fc524c06&
var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header",class:( _obj = {}, _obj[("bg-" + _vm.type)] = _vm.type, _obj )},[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"header-body\">","</div>",[_vm._t("default")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/BaseHeader.vue?vue&type=template&id=fc524c06&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseHeadervue_type_script_lang_js_ = ({
  name: 'BaseHeader',
  props: {
    type: {
      type: String,
      default: 'success',
      description: 'Header background type'
    }
  }
});
// CONCATENATED MODULE: ./components/argon-core/BaseHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_core_BaseHeadervue_type_script_lang_js_ = (BaseHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/argon-core/BaseHeader.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  argon_core_BaseHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2209620e"
  
)

/* harmony default export */ var BaseHeader = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("vuex-map-fields");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Breadcrumb/RouteBreadcrumb.vue?vue&type=template&id=8ca34024&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('no-ssr',[_c('bread-crumb',{attrs:{"list-classes":"breadcrumb-links breadcrumb-dark"}},[_c('BreadCrumbItem',[_c('nuxt-link',{attrs:{"to":"/","aria-label":"Home"}},[_c('i',{staticClass:"fas fa-home"})])],1),_vm._v(" "),_vm._l((_vm.$route.matched.slice()),function(route,index){return _c('BreadCrumbItem',{key:route.name,staticStyle:{"display":"inline-block"},attrs:{"active":index === _vm.$route.matched.length - 1}},[(index < _vm.$route.matched.length - 1)?_c('nuxt-link',{attrs:{"to":{ name: route.name }}},[_vm._v("\n        "+_vm._s(route.name)+"\n      ")]):_c('span',[_vm._v(_vm._s(route.name))])],1)})],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Breadcrumb/RouteBreadcrumb.vue?vue&type=template&id=8ca34024&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Breadcrumb/Breadcrumb.vue?vue&type=template&id=10c20bd3&
var Breadcrumbvue_type_template_id_10c20bd3_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{attrs:{"aria-label":"breadcrumb"}},[_vm._ssrNode("<ol"+(_vm._ssrClass("breadcrumb",[( _obj = {}, _obj[("bg-" + _vm.type)] = _vm.type, _obj ), _vm.listClasses]))+">","</ol>",[_vm._t("default")],2)])}
var Breadcrumbvue_type_template_id_10c20bd3_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Breadcrumb/Breadcrumb.vue?vue&type=template&id=10c20bd3&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Breadcrumb/Breadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  name: 'Breadcrumb',
  props: {
    type: {
      type: String,
      default: '',
      description: 'Breadcrumb background type'
    },
    listClasses: {
      type: [String, Object],
      default: '',
      description: 'Breadcrumb list classes'
    }
  }
});
// CONCATENATED MODULE: ./components/argon-core/Breadcrumb/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/argon-core/Breadcrumb/Breadcrumb.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Breadcrumb_Breadcrumbvue_type_script_lang_js_,
  Breadcrumbvue_type_template_id_10c20bd3_render,
  Breadcrumbvue_type_template_id_10c20bd3_staticRenderFns,
  false,
  injectStyles,
  null,
  "2c61940f"
  
)

/* harmony default export */ var Breadcrumb = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Breadcrumb/BreadcrumbItem.vue?vue&type=template&id=6e014bec&
var BreadcrumbItemvue_type_template_id_6e014bec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"breadcrumb-item",class:{ active: _vm.active }},[_vm._t("default")],2)}
var BreadcrumbItemvue_type_template_id_6e014bec_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Breadcrumb/BreadcrumbItem.vue?vue&type=template&id=6e014bec&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Breadcrumb/BreadcrumbItem.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var BreadcrumbItemvue_type_script_lang_js_ = ({
  name: 'BreadcrumbItem',
  props: {
    active: {
      type: Boolean,
      default: false,
      description: 'Whether breadcrumb item is active'
    }
  }
});
// CONCATENATED MODULE: ./components/argon-core/Breadcrumb/BreadcrumbItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_BreadcrumbItemvue_type_script_lang_js_ = (BreadcrumbItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/Breadcrumb/BreadcrumbItem.vue



function BreadcrumbItem_injectStyles (context) {
  
  
}

/* normalize component */

var BreadcrumbItem_component = Object(componentNormalizer["a" /* default */])(
  Breadcrumb_BreadcrumbItemvue_type_script_lang_js_,
  BreadcrumbItemvue_type_template_id_6e014bec_render,
  BreadcrumbItemvue_type_template_id_6e014bec_staticRenderFns,
  false,
  BreadcrumbItem_injectStyles,
  null,
  "ab0fc37c"
  
)

/* harmony default export */ var BreadcrumbItem = (BreadcrumbItem_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Breadcrumb/RouteBreadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var RouteBreadcrumbvue_type_script_lang_js_ = ({
  name: 'RouteBreadcrumb',
  components: {
    BreadCrumb: Breadcrumb,
    BreadCrumbItem: BreadcrumbItem
  },
  methods: {
    getBreadName(route) {
      return route.name;
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/Breadcrumb/RouteBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Breadcrumb_RouteBreadcrumbvue_type_script_lang_js_ = (RouteBreadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/Breadcrumb/RouteBreadcrumb.vue



function RouteBreadcrumb_injectStyles (context) {
  
  
}

/* normalize component */

var RouteBreadcrumb_component = Object(componentNormalizer["a" /* default */])(
  Breadcrumb_RouteBreadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  RouteBreadcrumb_injectStyles,
  "8ca34024",
  "3942c150"
  
)

/* harmony default export */ var RouteBreadcrumb = __webpack_exports__["a"] = (RouteBreadcrumb_component.exports);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("rollbar");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("perfect-scrollbar");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("vee-validate");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/locale/lang/en");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/locale");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/popover");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tooltip");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("vue2-filters");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShackAuth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShackAuth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShackAuth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShackAuth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShackAuth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShackAuth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strict", function() { return strict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var vuex_map_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var vuex_map_fields__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex_map_fields__WEBPACK_IMPORTED_MODULE_0__);
 // make strict mode false

const strict = false;
const getters = {
  getField: vuex_map_fields__WEBPACK_IMPORTED_MODULE_0__["getField"]
};
const mutations = {
  updateField: vuex_map_fields__WEBPACK_IMPORTED_MODULE_0__["updateField"]
};
const actions = {
  nuxtServerInit({
    commit,
    state
  }, {
    req,
    route,
    env,
    redirect
  }) {
    if (state.auth.user) {
      const spaces = state.auth.user.admin_of;

      if (!state.space.currentSpace) {
        spaces.map(space => {
          if (space.subdomain === route.params.space) {
            commit('space/setSpace', space);
          }
        });

        if (!state.space.currentSpace) {
          redirect('/');
        }
      }
    }
  }

};

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  summary: {},
  activities: {},
  bookings: {}
});
const mutations = {
  setSummary(state, summary) {
    state.summary = summary;
  },

  setActivities(state, activities) {
    state.activities = activities;
  },

  setActivityBookings(state, bookings) {
    state.bookings = bookings;
  }

};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  admins: {
    data: [],
    meta: {
      total: 0,
      per_page: 1,
      current_page: 1
    },
    links: {
      prev: null,
      next: null
    }
  }
});
const mutations = {
  setAdmins: (state, admins) => {
    state.admins = admins;
  },
  removeAdmin: (state, adminId) => {
    const index = state.admins.data.findIndex(el => {
      return el.id === adminId;
    });
    if (index !== -1) state.admins.data.splice(index, 1);
  }
};

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  feeds: [],
  addFeed: {
    feed_text: null,
    attachment_type: null,
    attachment_id: null,
    attachment_url: null,
    attachment_text: null,
    start_time: null,
    end_time: null,
    category: null,
    recipientTypeCode: 0
  },
  isLoading: false,
  postMessage: {
    type: null,
    icon: null,
    show: false,
    text: null
  }
});
const mutations = {
  setFeeds(state, feeds) {
    state.feeds = feeds;
  },

  resetForms(state, recordState) {
    Object.keys(state[recordState]).forEach(key => {
      state[recordState][key] = null;
    });
  },

  setIsLoading(state) {
    state.isLoading = !state.isLoading;
  },

  setPostMessage(state, message) {
    state.postMessage = message;
  },

  setAttachment(state, data) {
    if (data.type == 'image') {
      state.addFeed.attachment_type = data.type;
      state.addFeed.attachment_url = data.banner_url;
    }

    if (data.type == 'event') {
      state.addFeed.attachment_type = data.type;
      state.addFeed.attachment_id = data.attachInfo.id;
      state.addFeed.attachment_url = data.attachInfo.banner_url;
      state.addFeed.attachment_text = data.attachInfo.name;
      state.addFeed.start_time = data.attachInfo.start_time;
      state.addFeed.end_time = data.attachInfo.end_time;
      state.addFeed.category = data.attachInfo.event_category.name;
    }

    if (data.type == 'wellness') {
      state.addFeed.attachment_type = data.type;
      state.addFeed.attachment_id = data.attachInfo.id;
      state.addFeed.attachment_url = data.attachInfo.banner_url;
      state.addFeed.attachment_text = data.attachInfo.name;
      state.addFeed.start_time = data.attachInfo.start_date;
      state.addFeed.end_time = data.attachInfo.end_date;
      state.addFeed.category = data.attachInfo.wellness_category.name;
    }
  },

  resetAttachment(state) {
    state.addFeed.attachment_url = null;
    state.addFeed.attachment_id = null;
    state.addFeed.attachment_text = null;
    state.addFeed.attachment_type = null;
  }

};
const actions = {
  async getAllFeeds({
    commit
  }) {
    try {
      const {
        data
      } = await this.$community.getAllFeeds();
      commit('setFeeds', data);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async createFeed({
    commit,
    state,
    dispatch
  }) {
    try {
      const payload = state.addFeed;
      await this.$community.createFeed(payload);
      const postMessage = {
        type: 'success',
        icon: 'fa fa-check-circle',
        show: true,
        text: 'Your post to was published successfully'
      };
      commit('setPostMessage', postMessage);
      commit('resetForms', 'addFeed');
      commit('setIsLoading');
      dispatch('getAllFeeds');
    } catch (error) {
      commit('setIsLoading');
      const errorMessage = {
        type: 'danger',
        icon: 'fa fa-times-circle',
        show: true,
        text: `${error.response ? JSON.stringify(error.response.data.errors) : error.message}`
      };
      commit('setPostMessage', errorMessage);
    }
  },

  async deleteFeed({
    dispatch
  }, payload) {
    try {
      await this.$community.deleteFeed(payload);

      this._vm.$bvToast.toast(`Feed deleted successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      dispatch('getAllFeeds');
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  }

};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  companies: {
    data: [],
    links: {},
    meta: {}
  }
});
const mutations = {
  setCompanies(state, companies) {
    state.companies = companies;
  },

  removeOneCompany(state, companyId) {
    const index = state.companies.data.findIndex(company => {
      return company.uuid === companyId;
    });
    if (index !== -1) state.companies.data.splice(index, 1);
  }

};

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  categories: {},
  eatries: {},
  orderedEatries: {}
});
const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },

  removeOneCategory(state, categoryId) {
    const index = state.categories.data.findIndex(category => {
      return category.id === categoryId;
    });
    if (index !== -1) state.categories.data.splice(index, 1);
  },

  updateOneCategory(state, category) {
    const index = state.categories.data.findIndex(el => {
      return el.id === category.id;
    });
    if (index !== -1) state.categories.data[index] = category;
  },

  setEatries(state, eatries) {
    state.eatries = eatries;
  },

  removeOneEatry(state, eatryId) {
    const index = state.eatries.data.findIndex(eatry => {
      return eatry.id === eatryId;
    });
    if (index !== eatryId) state.eatries.data.splice(index, 1);
  },

  setOrderedEatries(state, orderedEatries) {
    state.orderedEatries = orderedEatries;
  }

};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  events: [],
  calendarEvents: [],
  categories: [],
  currentEvent: {},
  rooms: [],
  attendees: [],
  memberships: []
});
const mutations = {
  setEvents(state, events) {
    state.events = events; // full calendar has its attibute props it takes
    // map the events according to its attributes

    let calendarEvents = events.map(event => {
      return {
        title: event.name,
        start: event.start_time,
        end: event.end_time,
        description: event.description,
        eventId: event.id,
        backgroundColor: event.event_category && `${event.event_category.color}3A`,
        borderColor: event.event_category && `${event.event_category.color}3A`,
        id: event.id,
        extendedProps: event
      };
    });
    state.calendarEvents = calendarEvents;
  },

  setCategories(state, categories) {
    state.categories = categories;
  },

  addCategory(state, category) {
    state.categories.push(category);
  },

  setEvent(state, event) {
    state.currentEvent = event;
  },

  setRooms(state, rooms) {
    state.rooms = rooms.data;
  },

  setAttendees(state, attendees) {
    state.attendees = attendees;
  },

  addAttendee(state, attendee) {
    state.attendees.data.push(attendee);
  },

  setMemberships(state, members) {
    state.memberships = members;
  },

  removeAttendee(state, index) {
    state.attendees.data.splice(index, 1);
  },

  removeEvent(state, eventId) {
    const index = state.calendarEvents.findIndex(event => {
      return event.id === eventId;
    });
    if (index !== -1) state.calendarEvents.splice(index, 1);
  },

  removeCategory(state, categoryId) {
    const index = state.categories.findIndex(category => {
      return category.id === categoryId;
    });
    if (index !== -1) state.categories.splice(index, 1);
  }

};

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  invoices: [],
  isLoading: false,
  addInvoice: {
    company_id: null
  },
  invoiceTable: [],
  oneInvoice: null
});
const mutations = {
  setInvoices(state, invoice) {
    state.invoices = invoice;
  },

  setTableInvoices(state, invoice) {
    state.invoiceTable = invoice;
  },

  initiateInvoice(state, data) {
    state.addInvoice.company_id = data.company_id;
    this.$router.push({
      path: `/${data.space}/invoice/add/${data.company_id}`
    });
  },

  setIsLoading(state) {
    state.isLoading = !true;
  },

  setOneInvoice(state, invoice) {
    state.oneInvoice = invoice;
  }

};
const actions = {
  async getAllInvoices({
    commit
  }) {
    try {
      const {
        data
      } = await this.$invoice.getAllInvoice();
      let emptyIn = [];
      data.data.map(item => {
        let invObj = {
          company: item.company.name,
          date: this.$moment(item.created_at).format('LL'),
          contact_person: item.company.contact_name,
          id: item.id,
          invoice_number: item.inv_number,
          paid: item.paid,
          finalize: item.finalize,
          sent: item.sent,
          amount: item.total_amount,
          void: item.void,
          written_off: item.written_off,
          invProps: item
        };
        emptyIn.push(invObj);
      });
      commit('setTableInvoices', emptyIn);
      commit('setInvoices', data);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async createInvoice({
    dispatch,
    commit
  }, payload) {
    commit('setIsLoading');

    try {
      await this.$invoice.createInvoice(payload);
      dispatch('getAllInvoices');
      this.$router.go(-1);

      this._vm.$bvToast.toast(`Invoice created successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      commit('setIsLoading');
    } catch (error) {
      commit('setIsLoading');

      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async getOneInvoice({
    commit
  }, payload) {
    try {
      const {
        data
      } = await this.$invoice.getOneInvoice(payload);
      commit('setOneInvoice', data);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async updateInvoice({
    state,
    dispatch
  }, payload) {
    try {
      await this.$invoice.updateInvoice(payload.id, payload);
      dispatch('getAllInvoices');

      this._vm.$bvToast.toast(`Invoice updated successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async updateInvoiceItem({
    commit,
    dispatch,
    state
  }, payload) {
    try {
      await this.$invoice.updateInvoiceItem(state.oneInvoice.data.id, payload);
      dispatch('getOneInvoice', state.oneInvoice.data.id);

      this._vm.$bvToast.toast(`Invoice item updated successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async addItemToInvoice({
    state,
    dispatch
  }, payload) {
    try {
      await this.$invoice.addItemToInvoice(state.oneInvoice.data.id, payload);

      this._vm.$bvToast.toast(`Invoice item added successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      dispatch('getOneInvoice', state.oneInvoice.data.id);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async finalizeInv({
    dispatch
  }, payload) {
    try {
      await this.$invoice.finalizeInvoice(payload.id, payload);

      this._vm.$bvToast.toast(`Invoice finalized successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      dispatch('getAllInvoices');
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async writeOffInv({
    dispatch
  }, payload) {
    try {
      await this.$invoice.writeOffInvoice(payload);

      this._vm.$bvToast.toast(`Invoice written off successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      dispatch('getAllInvoices');
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async sendInv({
    dispatch
  }, payload) {
    try {
      await this.$invoice.sendInvoice(payload);

      this._vm.$bvToast.toast(`Invoice was sent successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      dispatch('getAllInvoices');
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async filterInvoice({
    commit
  }, payload) {
    try {
      const {
        data
      } = await this.$invoice.filterUnpaid(payload);
      let emptyIn = [];
      data.data.map(item => {
        let invObj = {
          company: item.company.name,
          date: this.$moment(item.created_at).format('LL'),
          contact_person: item.company.contact_name,
          id: item.id,
          invoice_number: item.inv_number,
          paid: item.paid,
          finalize: item.finalize,
          sent: item.sent,
          amount: item.total_amount,
          void: item.void,
          written_off: item.written_off,
          invProps: item
        };
        emptyIn.push(invObj);
      });
      commit('setTableInvoices', emptyIn);
      commit('setInvoices', data);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async deleteInvoiceItem({
    state,
    dispatch
  }, payload) {
    try {
      await this.$invoice.deleteInvoiceItem(state.oneInvoice.data.id, payload);

      this._vm.$bvToast.toast(`Invoice item deleted successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      dispatch('getOneInvoice', state.oneInvoice.data.id);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  }

};

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
const state = () => ({
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
  }],
  prefix_locality: [{
    text: 'Bay Area',
    value: 'A'
  }, {
    text: 'US outside of the Bay',
    value: 'B'
  }, {
    text: 'EMEA',
    value: 'C'
  }, {
    text: 'APAC',
    value: 'D'
  }]
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  plans: {
    data: [],
    meta: {
      total: 1,
      per_page: 1,
      current_page: 1
    },
    links: {}
  },
  currentPlan: {}
});
const mutations = {
  setPlans(state, plans) {
    state.plans = plans;
  },

  setOnePlan(state, plan) {
    state.currentPlan = plan;
  },

  removePlan(state, planId) {
    const index = state.plans.data.findIndex(plan => {
      return plan.id == planId;
    });
    if (index !== -1) state.plans.data.splice(index, 1);
  }

};

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  promotions: [],
  currentPromotion: {}
});
const mutations = {
  setPromotions(state, promotions) {
    state.promotions = promotions;
  },

  setOnePromotion(state, promotion) {
    state.currentPromotion = promotion;
  },

  removePromotion(state, planId) {
    const index = state.promotions.data.findIndex(plan => {
      return plan.id == planId;
    });
    if (index !== -1) state.promotions.data.splice(index, 1);
  }

};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  rooms: {
    data: [],
    meta: {
      current_page: 1,
      per_page: 15,
      total: 1
    },
    links: {}
  },
  oneroom: '',
  categories: [],
  activateButton: true,
  addCategory: {
    id: '',
    name: '',
    color: _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].randomColor()
  },
  bookings: [],
  bookingsForDate: [],
  addBooking: {
    id: null,
    from: null,
    to: null,
    title: null
  },
  addRoom: {
    id: null,
    name: null,
    description: null,
    currency: null,
    capacity: null,
    min_booking_duration: null,
    max_booking_duration: null,
    price_per_hour: null,
    can_book: true,
    photo: null,
    category: null,
    room_category_id: null,
    amenities: [],
    room_availability: null,
    available_room: null,
    zoom_room_id: null,
    access_point_id: null,
    membership_ids: []
  }
});
const mutations = {
  setRooms(state, rooms) {
    state.rooms = rooms;
  },

  setOneRoom(state, room) {
    state.addRoom.id = room.id;
    state.addRoom.name = room.name;
    state.addRoom.description = room.description;
    state.addRoom.capacity = room.capacity;
    state.addRoom.min_booking_duration = room.min_booking_duration;
    state.addRoom.max_booking_duration = room.max_booking_duration;
    state.addRoom.price_per_hour = room.price_per_hour;
    state.addRoom.can_book = room.can_book;
    state.addRoom.photo = room.photo;
    state.addRoom.category = room.category.id;
    state.addRoom.room_category_id = room.category.id;
    state.addRoom.amenities = room.amenities;
    state.addRoom.room_availability = room.room_availability;
    state.addRoom.zoom_room_id = room.zoom_room_id;
    state.addRoom.access_point_id = room.access_point_id;
    state.addRoom.membership_ids = JSON.parse(room.room_access_users);
  },

  setCategories(state, categories) {
    state.categories = categories;
  },

  updateCategory(state, category) {
    state.addCategory.name = category.name;
    state.addCategory.color = category.color;
    state.addCategory.id = category.id;
    state.activateButton = false;
  },

  setBookings(state, booking) {
    state.bookings = booking;
  },

  setBookingsForDate(state, booking) {
    state.bookingsForDate = booking;
  },

  setRoomAvailabilty(state, available) {
    state.addRoom.room_availability = available;
  },

  setSingleCat(state, category_id) {
    state.addRoom.room_category_id = category_id;
  },

  setAvailability(state, date) {
    state.addRoom.available_room = date;
  },

  editBooking(state, record) {
    state.addBooking.id = record.id;
    state.addBooking.from = record.from;
    state.addBooking.to = record.to;
    state.addBooking.title = record.title;
  },

  resetForms(state, recordState) {
    Object.keys(state[recordState]).forEach(key => {
      if (key == 'amenities') {
        state[recordState][key] = [];
      } else {
        state[recordState][key] = null;
      }
    });
  }

};
const actions = {
  async getAllRooms({
    commit
  }, link) {
    try {
      const {
        data
      } = await this.$resource.getAllRooms(link);
      commit('setRooms', data);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async createRoom({
    state,
    commit
  }) {
    try {
      const data = state.addRoom.available_room;
      const roomAvailability = _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].parseRoomdate(data, this);
      commit('setRoomAvailabilty', roomAvailability);
      const roomDetails = { ...state.addRoom
      };
      roomDetails.room_access_users = JSON.stringify(roomDetails.membership_ids);
      roomDetails.can_book = !!roomDetails.can_book;
      await this.$resource.createRoom(roomDetails);

      this._vm.$bvToast.toast(`Room created successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      commit('resetForms', 'addRoom');
      this.$router.go(-1);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async updateRoom({
    state,
    commit
  }) {
    const payload = state.addRoom;
    const roomAvailability = _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].parseRoomdate(payload.available_room, this);
    commit('setRoomAvailabilty', roomAvailability);
    const roomDetails = { ...state.addRoom
    };
    roomDetails.room_access_users = JSON.stringify(roomDetails.membership_ids);
    roomDetails.can_book = !!roomDetails.can_book;

    try {
      await this.$resource.updateRoom(payload.id, roomDetails);

      this._vm.$bvToast.toast(`Room updated successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      commit('resetForms', 'addRoom');
      this.$router.go(-1);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async getOneRoom({
    commit
  }, payload) {
    try {
      const {
        data
      } = await this.$resource.getARoom(payload);
      commit('setOneRoom', data.data);
      commit('setAvailability', _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].undoParse(data.data.room_availability));
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async deleteRoom({
    dispatch
  }, payload) {
    try {
      await this.$resource.deleteRoom(payload);

      this._vm.$bvToast.toast(`Room deleted successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      dispatch('getAllRooms');
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async getAllCategories({
    commit
  }) {
    try {
      const {
        data
      } = await this.$resource.getAllCategories();
      commit('setCategories', data);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async createCategory({
    state,
    dispatch,
    commit
  }) {
    const payload = state.addCategory;

    try {
      await this.$resource.createCategory(payload);

      this._vm.$bvToast.toast(`Category created successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      dispatch('getAllCategories');
      commit('resetForms', 'addCategory');
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async updateCategory({
    state,
    commit,
    dispatch
  }) {
    const payload = state.addCategory;

    try {
      await this.$resource.updateCategory(payload.id, payload);

      this._vm.$bvToast.toast(`Category updated successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      dispatch('getAllCategories');
      commit('resetForms', 'addCategory');
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async deleteCategory({
    state,
    dispatch,
    commit
  }) {
    const payload = state.addCategory.id;

    try {
      await this.$resource.deleteCategory(payload);

      this._vm.$bvToast.toast(`Category deleted successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);

      dispatch('getAllCategories');
      commit('resetForms', 'addCategory');
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async bookingsForARoom(context, payload) {
    try {
      const {
        data
      } = await this.$resource.getBookingForARoom(payload);
      context.commit('setBookings', data);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async getAllBookings({
    commit
  }) {
    try {
      const {
        data
      } = await this.$resource.getAllBookings();

      const calendarBookings = _.map(data.data, o => {
        return {
          // title: `${o.room.name} // ${o.membership.first_name} ${
          //   o.membership.last_name
          // } (${o.room.capacity} People)`,
          title: o.title,
          start: o.start_timestamp,
          end: o.end_timestamp,
          resourceId: o.resourceId,
          backgroundColor: o.room && `${o.room.category.color}2A`,
          borderColor: o.room && `${o.room.category.color}2A`,
          extendProps: o
        };
      });

      commit('setBookings', calendarBookings);
    } catch (error) {
      this._vm.$bvToast.toast({
        statusCode: error.statusCode,
        message: error.response ? JSON.stringify(error.response.data.errors) : error.message
      });
    }
  },

  async getAllBookingsByDate({
    commit
  }, payload) {
    try {
      const {
        data
      } = await this.$resource.getBookingByDate(payload);

      const calendarBookings = _.map(data.data, o => {
        return {
          // title: `${o.room.name} // ${o.membership.first_name} ${
          //   o.membership.last_name
          // } (${o.room.capacity} People)`,
          title: o.title,
          start: o.start_timestamp,
          end: o.end_timestamp,
          resourceId: o.resourceId,
          backgroundColor: o.room && `${o.room.category.color}2A`,
          borderColor: o.room && `${o.room.category.color}2A`,
          extendProps: o,
          id: o.id,
          membership: o.membership
        };
      });

      commit('setBookings', calendarBookings);
    } catch (error) {
      this._vm.$bvToast.toast({
        statusCode: error.statusCode,
        message: error.response ? JSON.stringify(error.response.data.errors) : error.message
      });
    }
  },

  async getBookingsByDate({
    commit
  }, payload) {
    try {
      const {
        data
      } = await this.$resource.getBookingByDate(payload);

      const cleanData = _.filter(data.data, data => {
        return data.membership != null;
      });

      const calendarBookings = _.map(cleanData, o => {
        return {
          // title: `${o.room.name} // ${o.membership.first_name} ${
          //   o.membership.last_name
          // } (${o.room.capacity} People)`,
          title: o.title,
          start: o.start_timestamp,
          end: o.end_timestamp,
          resourceId: o.resourceId,
          backgroundColor: o.room && `${o.room.category.color}2A`,
          borderColor: o.room && `${o.room.category.color}2A`,
          extendProps: o,
          id: o.id,
          membership: o.membership
        };
      }); //clean up the list -> remove bookings with null memberships


      console.log(calendarBookings);
      commit('setBookingsForDate', calendarBookings);
    } catch (error) {
      console.log(error);

      this._vm.$bvToast.toast({
        statusCode: error.statusCode,
        message: error.response ? JSON.stringify(error.response.data.errors) : error.message
      });
    }
  },

  async createBooking({}, payload) {
    try {
      await this.$resource.bookRoomForMember(payload.room_id, payload);

      this._vm.$bvToast.toast(`Booking created successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  },

  async updateRoomBooking({
    dispatch
  }, payload) {
    try {
      await this.$resource.updateRoomBooking(payload.booking_id, payload);
      dispatch('getAllBookings');

      this._vm.$bvToast.toast(`Booking updated successfully`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.sucess);
    } catch (error) {
      this._vm.$bvToast.toast(`${error.response ? JSON.stringify(error.response.data.errors) : error.message}`, _util_helper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].notify.error);
    }
  }

};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  currentSpace: null
});
const mutations = {
  setSpace(state, spaceDetails) {
    state.currentSpace = spaceDetails;
  }

};

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  tags: {
    links: {},
    meta: {},
    data: []
  }
});
const mutations = {
  setTags(state, tags) {
    state.tags = tags;
  },

  removeTag(state, tag) {
    const index = state.tags.data.findIndex(el => {
      return el.name === tag.name && el.type === tag.type;
    });
    if (index !== -1) state.tags.data.splice(index, 1);
  },

  updateTag(state, payload) {
    const index = state.tags.data.findIndex(el => {
      return el.name === payload.old_tag;
    });
    if (index !== -1) state.tags.data[index] = payload.data;
  }

};

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  sessions: [],
  categories: []
});
const mutations = {
  setSessions(state, sessions) {
    state.sessions = sessions;
  },

  setCategories(state, categories) {
    state.categories = categories;
  }

};
const actions = {
  persistData: () => {}
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("es6-promise/auto");

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_id_34ce6b5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_id_34ce6b5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_id_34ce6b5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_id_34ce6b5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_id_34ce6b5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_id_34ce6b5e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDropdown_vue_vue_type_style_index_0_id_0c22c762_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDropdown_vue_vue_type_style_index_0_id_0c22c762_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDropdown_vue_vue_type_style_index_0_id_0c22c762_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDropdown_vue_vue_type_style_index_0_id_0c22c762_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDropdown_vue_vue_type_style_index_0_id_0c22c762_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDropdown_vue_vue_type_style_index_0_id_0c22c762_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(29);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(30);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {
        "publishable_key": "pk_test_EldDf62abr3QSC1ju7jhfdAs",
        "secret_key": "sk_test_On1uFFOK31r2vCBDSH1ofldL",
        "base_url": "https://api.shack15.com/api/v1",
        "staging_base_url": "http://staging.bdgic76uiy.us-east-1.elasticbeanstalk.com/api/v1",
        "square_app_id": "sq0idp-vX9ROmcOKd8kjXRXOuxbbg",
        "square_location": "1883YH8CHHJM4",
        "NVM_INC": "/Users/tom/.nvm/versions/node/v12.16.1/include/node",
        "LDFLAGS": "-L/usr/local/opt/ruby/lib",
        "npm_package_devDependencies_prettier": "1.14.3",
        "npm_package_devDependencies_identity_obj_proxy": "^3.0.0",
        "npm_package_dependencies_moment_timezone": "^0.5.27",
        "TERM_PROGRAM": "vscode",
        "npm_package_dependencies_vue2_filters": "^0.8.0-beta.1",
        "NODE": "/Users/tom/.nvm/versions/node/v12.16.1/bin/node",
        "INIT_CWD": "/Users/tom/Projects/test-crm-aws-amplify",
        "NVM_CD_FLAGS": "-q",
        "npm_config_version_git_tag": "true",
        "SHELL": "/bin/zsh",
        "TERM": "xterm-256color",
        "npm_package_devDependencies_jest": "^26.1.0",
        "npm_package_dependencies__fullcalendar_resource_timeline": "4.4.0",
        "npm_package_dependencies_vue_quill_editor": "^3.0.6",
        "CPPFLAGS": "-I/usr/local/opt/ruby/include",
        "TMPDIR": "/var/folders/sn/bbg46m4s7d54lf_mmykqs70h0000gn/T/",
        "CONDA_SHLVL": "1",
        "npm_package_dependencies_node_html_markdown": "^0.1.5",
        "npm_package_dependencies__nuxtjs_axios": "^5.6.0",
        "npm_package_scripts_lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
        "npm_config_init_license": "MIT",
        "CONDA_PROMPT_MODIFIER": "(base) ",
        "TERM_PROGRAM_VERSION": "1.83.0",
        "npm_package_devDependencies_babel_core": "^7.0.0-bridge.0",
        "npm_package_dependencies_vue_stripe_elements_plus": "^0.3.2",
        "npm_package_scripts_dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server",
        "MallocNanoZone": "0",
        "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined",
        "ZDOTDIR": "/Users/tom",
        "npm_package_devDependencies_sass_loader": "^7.1.0",
        "npm_package_dependencies_vue2_editor": "^2.10.2",
        "npm_package_scripts_heroku_postbuild": "yarn build",
        "npm_package_dependencies_showdown": "^1.9.1",
        "npm_package_private": "true",
        "npm_config_registry": "https://registry.yarnpkg.com",
        "npm_package_scripts_generate": "nuxt generate",
        "npm_package_readmeFilename": "README.md",
        "npm_package_dependencies_vue2_datepicker": "^2.12.0",
        "npm_package_dependencies__fullcalendar_vue": "^4.2.2",
        "USER": "tom",
        "NVM_DIR": "/Users/tom/.nvm",
        "npm_package_description": "My stunning Nuxt.js project",
        "COMMAND_MODE": "unix2003",
        "npm_package_devDependencies_eslint_loader": "^2.0.0",
        "npm_package_dependencies_perfect_scrollbar": "^1.4.0",
        "npm_package_dependencies__nuxtjs_pwa": "^3.0.0-beta.19",
        "npm_package_dependencies__nuxtjs_dotenv": "^1.4.1",
        "npm_package_scripts_deploy": "yarn build && yarn start",
        "CONDA_EXE": "/Users/tom/opt/anaconda3/bin/conda",
        "npm_package_devDependencies_babel_jest": "^26.1.0",
        "npm_package_devDependencies__babel_core": "^7.4.5",
        "npm_package_dependencies__fullcalendar_core": "^4.2.0",
        "SSH_AUTH_SOCK": "/private/tmp/com.apple.launchd.5e3Y8E87UW/Listeners",
        "npm_package_dependencies_lodash": "^4.17.15",
        "__CF_USER_TEXT_ENCODING": "0x1F5:0x0:0x0",
        "npm_package_devDependencies_flush_promises": "^1.0.2",
        "npm_package_devDependencies_eslint": "^5.0.1",
        "npm_execpath": "/Users/tom/.nvm/versions/node/v10.16.3/lib/node_modules/yarn/bin/yarn.js",
        "npm_package_author_name": "Edwin Tsatsu",
        "_CE_CONDA": "",
        "npm_package_devDependencies_eslint_plugin_prettier": "2.6.2",
        "npm_package_devDependencies_jest_serializer_vue": "^2.0.2",
        "npm_package_dependencies_bootstrap_vue": "^2.0.0-beta",
        "PATH": "/var/folders/sn/bbg46m4s7d54lf_mmykqs70h0000gn/T/yarn--1696942460961-0.9323922906584103:/Users/tom/Projects/test-crm-aws-amplify/node_modules/.bin:/Users/tom/.config/yarn/link/node_modules/.bin:/Users/tom/.nvm/versions/node/v12.16.1/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/tom/.nvm/versions/node/v12.16.1/lib/node_modules/npm/bin/node-gyp-bin:/Users/tom/.nvm/versions/node/v12.16.1/bin/node_modules/npm/bin/node-gyp-bin:/Users/tom/.nvm/versions/node/v12.16.1/bin:/Users/tom/.nvm/versions/node/v10.16.3/bin:/usr/local/opt/php@7.3/sbin:/usr/local/opt/php@7.3/bin:/usr/local/sbin:/usr/local/opt/ruby/bin:/Users/tom/.bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/Users/tom/opt/anaconda3/bin:/Users/tom/opt/anaconda3/condabin:/Users/tom/.nvm/versions/node/v10.16.3/bin:/usr/local/opt/php@7.3/sbin:/usr/local/opt/php@7.3/bin:/usr/local/sbin:/usr/local/opt/ruby/bin:/Users/tom/.bin:/Users/tom/Developer/flutter/bin:/Users/tom/Developer/flutter/bin",
        "npm_config_argv": "{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"build\"]}",
        "_": "/Users/tom/Projects/test-crm-aws-amplify/node_modules/.bin/nuxt",
        "__CFBundleIdentifier": "com.microsoft.VSCode",
        "CONDA_PREFIX": "/Users/tom/opt/anaconda3",
        "USER_ZDOTDIR": "/Users/tom",
        "PWD": "/Users/tom/Projects/test-crm-aws-amplify",
        "npm_package_dependencies_bootstrap": "4.3.1",
        "npm_lifecycle_event": "build",
        "npm_package_dependencies_date_fns": "^2.4.1",
        "npm_package_dependencies_cross_env": "^5.2.0",
        "LANG": "en_US.UTF-8",
        "npm_package_name": "shack15new",
        "npm_package_devDependencies__babel_preset_env": "^7.10.4",
        "npm_package_dependencies__toast_ui_vue_editor": "^2.2.0",
        "npm_package_devDependencies__vue_test_utils": "^1.0.3",
        "npm_package_dependencies__fullcalendar_daygrid": "^4.1.0",
        "npm_package_scripts_start": "cross-env NODE_ENV=production node server/index.js",
        "npm_package_scripts_build": "nuxt build",
        "npm_config_version_commit_hooks": "true",
        "XPC_FLAGS": "0x0",
        "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node",
        "npm_package_dependencies__nuxtjs_auth": "^4.8.4",
        "npm_package_dependencies__fullcalendar_timegrid": "^4.1.0",
        "npm_package_dependencies_vee_validate": "^3.0.10",
        "npm_config_bin_links": "true",
        "npm_package_engines_node": "x.x",
        "npm_package_devDependencies_eslint_config_prettier": "^3.1.0",
        "npm_package_dependencies_nuxt_rollbar_module": "^1.1.0",
        "XPC_SERVICE_NAME": "0",
        "_CE_M": "",
        "npm_package_scripts_aws_eb_prod": "node -e \"console.log('aws-eb:prod');\"",
        "npm_package_version": "2.0.5",
        "VSCODE_INJECTION": "1",
        "HOME": "/Users/tom",
        "SHLVL": "2",
        "VSCODE_GIT_ASKPASS_MAIN": "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",
        "npm_package_devDependencies_eslint_plugin_vue": "^4.0.0",
        "npm_package_scripts_test": "jest",
        "npm_package_dependencies_es6_promise": "^4.2.8",
        "npm_config_save_prefix": "^",
        "npm_config_strict_ssl": "true",
        "npm_package_devDependencies_babel_eslint": "^8.2.1",
        "npm_config_version_git_message": "v%s",
        "npm_package_devDependencies_vue_jest": "^3.0.5",
        "npm_package_dependencies__fullcalendar_timeline": "4.4.3",
        "npm_package_dependencies__fullcalendar_moment_timezone": "^4.4.0",
        "LOGNAME": "tom",
        "CONDA_PYTHON_EXE": "/Users/tom/opt/anaconda3/bin/python",
        "YARN_WRAP_OUTPUT": "false",
        "npm_package_scripts_test_coverage": "jest --no-cache --coverage",
        "npm_lifecycle_script": "nuxt build",
        "npm_package_dependencies_element_ui": "^2.12.0",
        "npm_package_dependencies__fullcalendar_moment": "^4.4.0",
        "VSCODE_GIT_IPC_HANDLE": "/var/folders/sn/bbg46m4s7d54lf_mmykqs70h0000gn/T/vscode-git-12d060c662.sock",
        "npm_package_dependencies_vuex_map_fields": "^1.3.5",
        "NVM_BIN": "/Users/tom/.nvm/versions/node/v12.16.1/bin",
        "CONDA_DEFAULT_ENV": "base",
        "npm_package_dependencies__fullcalendar_list": "^4.3.0",
        "npm_package_dependencies__fullcalendar_interaction": "^4.1.0",
        "npm_config_version_git_sign": "",
        "npm_config_ignore_scripts": "",
        "npm_config_user_agent": "yarn/1.22.19 npm/? node/v12.16.1 darwin x64",
        "GIT_ASKPASS": "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",
        "VSCODE_GIT_ASKPASS_NODE": "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",
        "npm_package_dependencies__nuxtjs_moment": "^1.3.0",
        "npm_package_dependencies_nuxt": "2.14.7",
        "npm_package_dependencies_express": "^4.16.3",
        "npm_package_engines_yarn": "1.x",
        "npm_config_init_version": "1.0.0",
        "npm_config_ignore_optional": "",
        "npm_package_devDependencies_node_sass": "^4.14.1",
        "npm_package_devDependencies_nodemon": "^1.11.0",
        "npm_package_devDependencies_babel_plugin_component": "^1.1.0",
        "npm_package_dependencies_vue2_transitions": "^0.3.0",
        "npm_package_dependencies_vue_qrcode_reader": "^2.3.14",
        "npm_package_scripts_precommit": "yarn lint --fix",
        "npm_config_unsafe_perm": "true",
        "COLORTERM": "truecolor",
        "npm_node_execpath": "/Users/tom/.nvm/versions/node/v12.16.1/bin/node",
        "npm_config_version_tag_prefix": "v",
        "NODE_ENV": "production",
        "_applied": "true"
      }
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(31);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(25);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(20);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(9);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _403fcae4 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/index */ 80).then(__webpack_require__.bind(null, 243)));

const _c23452c4 = () => interopDefault(__webpack_require__.e(/* import() | pages/auth/forgot-password */ 76).then(__webpack_require__.bind(null, 244)));

const _f898817c = () => interopDefault(__webpack_require__.e(/* import() | pages/auth/login */ 77).then(__webpack_require__.bind(null, 245)));

const _3d851260 = () => interopDefault(__webpack_require__.e(/* import() | pages/auth/reset-password */ 78).then(__webpack_require__.bind(null, 246)));

const _2c5e9802 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 79).then(__webpack_require__.bind(null, 247)));

const _6bcca46c = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/index */ 33).then(__webpack_require__.bind(null, 238)));

const _402c7768 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/activities/index */ 2).then(__webpack_require__.bind(null, 248)));

const _88f97c82 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/admins/index */ 5).then(__webpack_require__.bind(null, 249)));

const _166e93be = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/checkins/index */ 7).then(__webpack_require__.bind(null, 294)));

const _2de3db24 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/community/index */ 9).then(__webpack_require__.bind(null, 237)));

const _4e59fa2e = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/corporates/index */ 12).then(__webpack_require__.bind(null, 250)));

const _685974a8 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/directory/index */ 16).then(__webpack_require__.bind(null, 295)));

const _2db09442 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/edit */ 24).then(__webpack_require__.bind(null, 251)));

const _5b02e594 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/events/index */ 32).then(__webpack_require__.bind(null, 252)));

const _41d60168 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/invoice/index */ 36).then(__webpack_require__.bind(null, 296)));

const _7dbde1bb = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/members-due/index */ 42).then(__webpack_require__.bind(null, 297)));

const _61a1bbc9 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/members-subscribed/index */ 43).then(__webpack_require__.bind(null, 298)));

const _32740598 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/memberships/index */ 47).then(__webpack_require__.bind(null, 299)));

const _85446f36 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/plans/index */ 54).then(__webpack_require__.bind(null, 239)));

const _24ab9beb = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/promotions/index */ 57).then(__webpack_require__.bind(null, 240)));

const _33ebce60 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/resources/index */ 63).then(__webpack_require__.bind(null, 253)));

const _29ff541e = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/settings/index */ 64).then(__webpack_require__.bind(null, 254)));

const _7171bed8 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/tags/index */ 67).then(__webpack_require__.bind(null, 255)));

const _782bdcc0 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/wellness/index */ 75).then(__webpack_require__.bind(null, 241)));

const _392e3964 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/admins/add */ 4).then(__webpack_require__.bind(null, 300)));

const _2d60a1ba = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/checkins/history */ 6).then(__webpack_require__.bind(null, 301)));

const _4fd93bb8 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/checkins/settings */ 8).then(__webpack_require__.bind(null, 302)));

const _692ae6f8 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/corporates/add */ 11).then(__webpack_require__.bind(null, 256)));

const _6a5e8712 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/directory/add */ 15).then(__webpack_require__.bind(null, 303)));

const _60841747 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/eatry/categories/index */ 18).then(__webpack_require__.bind(null, 257)));

const _52938332 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/eatry/inventory/index */ 22).then(__webpack_require__.bind(null, 258)));

const _7c5294d0 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/eatry/orders/index */ 23).then(__webpack_require__.bind(null, 259)));

const _d68d0f3a = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/events/add */ 28).then(__webpack_require__.bind(null, 260)));

const _fd088e66 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/events/categories/index */ 30).then(__webpack_require__.bind(null, 261)));

const _948755ba = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/events/drafts/index */ 31).then(__webpack_require__.bind(null, 262)));

const _5e0fec6a = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/manage/checkins/index */ 38).then(__webpack_require__.bind(null, 263)));

const _1214963e = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/manage/directory/index */ 39).then(__webpack_require__.bind(null, 264)));

const _ad0684a4 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/manage/invite/index */ 40).then(__webpack_require__.bind(null, 265)));

const _3d6a926a = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/manage/invoices/index */ 41).then(__webpack_require__.bind(null, 266)));

const _073ac967 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/memberships/add */ 45).then(__webpack_require__.bind(null, 304)));

const _5fb805e2 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/memberships/archived/index */ 46).then(__webpack_require__.bind(null, 242)));

const _d69eec0e = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/memberships/messages/index */ 50).then(__webpack_require__.bind(null, 267)));

const _6655d7ea = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/memberships/uninvited/index */ 51).then(__webpack_require__.bind(null, 268)));

const _0360db74 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/plans/add */ 53).then(__webpack_require__.bind(null, 269)));

const _6cf9d87a = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/promotions/add */ 56).then(__webpack_require__.bind(null, 270)));

const _97c3b7a2 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/resources/add */ 59).then(__webpack_require__.bind(null, 305)));

const _f407dac2 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/resources/bookings/index */ 60).then(__webpack_require__.bind(null, 306)));

const _b1fccefe = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/resources/categories/index */ 62).then(__webpack_require__.bind(null, 271)));

const _1b8d4344 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/settings/rooms */ 65).then(__webpack_require__.bind(null, 272)));

const _2ad07363 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/tags/add */ 66).then(__webpack_require__.bind(null, 273)));

const _8d579122 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/wellness/add */ 70).then(__webpack_require__.bind(null, 307)));

const _5eb5775f = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/wellness/bookings/index */ 72).then(__webpack_require__.bind(null, 308)));

const _36f4cd41 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/wellness/categories/index */ 74).then(__webpack_require__.bind(null, 274)));

const _cf9d0a54 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/eatry/categories/add */ 17).then(__webpack_require__.bind(null, 275)));

const _05fa2c14 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/eatry/inventory/add */ 21).then(__webpack_require__.bind(null, 276)));

const _178fc5dc = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/events/categories/add */ 29).then(__webpack_require__.bind(null, 277)));

const _2914ffe5 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/memberships/messages/create */ 49).then(__webpack_require__.bind(null, 309)));

const _069bfae0 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/resources/categories/add */ 61).then(__webpack_require__.bind(null, 278)));

const _55293160 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/wellness/categories/add */ 73).then(__webpack_require__.bind(null, 279)));

const _71ebcdd2 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/eatry/inventory/_id/index */ 20).then(__webpack_require__.bind(null, 280)));

const _1a114865 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/invoice/add/_id/index */ 35).then(__webpack_require__.bind(null, 281)));

const _2229f44c = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/invoice/preview/_id/index */ 37).then(__webpack_require__.bind(null, 282)));

const _685bff38 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/memberships/messages/_id/index */ 48).then(__webpack_require__.bind(null, 283)));

const _0cb074f2 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/wellness/bookings/_id */ 71).then(__webpack_require__.bind(null, 284)));

const _2296533a = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/eatry/inventory/_id/edit */ 19).then(__webpack_require__.bind(null, 285)));

const _7697fb93 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/directory/_id/index */ 13).then(__webpack_require__.bind(null, 310)));

const _2407167f = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/events/_id/index */ 27).then(__webpack_require__.bind(null, 286)));

const _1cffaf5a = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/invoice/_id/index */ 34).then(__webpack_require__.bind(null, 287)));

const _c3bed6fa = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/memberships/_id/index */ 44).then(__webpack_require__.bind(null, 311)));

const _1976b94b = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/resources/_id/index */ 58).then(__webpack_require__.bind(null, 312)));

const _2e215c8b = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/wellness/_id/index */ 68).then(__webpack_require__.bind(null, 288)));

const _1fa31e3c = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/admins/_id/edit */ 3).then(__webpack_require__.bind(null, 313)));

const _1763b110 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/corporates/_id/edit */ 10).then(__webpack_require__.bind(null, 289)));

const _11ec9202 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/directory/_id/notes */ 14).then(__webpack_require__.bind(null, 290)));

const _e2038ab4 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/events/_id/attendees */ 25).then(__webpack_require__.bind(null, 314)));

const _126e7e26 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/events/_id/edit */ 26).then(__webpack_require__.bind(null, 291)));

const _b56cbf08 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/plans/_id/edit */ 52).then(__webpack_require__.bind(null, 292)));

const _3f03d736 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/promotions/_id/edit */ 55).then(__webpack_require__.bind(null, 293)));

const _ef7bbf24 = () => interopDefault(__webpack_require__.e(/* import() | pages/_space/wellness/_id/slots */ 69).then(__webpack_require__.bind(null, 315))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/user",
    component: _403fcae4,
    name: "user"
  }, {
    path: "/auth/forgot-password",
    component: _c23452c4,
    name: "auth-forgot-password"
  }, {
    path: "/auth/login",
    component: _f898817c,
    name: "auth-login"
  }, {
    path: "/auth/reset-password",
    component: _3d851260,
    name: "auth-reset-password"
  }, {
    path: "/",
    component: _2c5e9802,
    name: "index"
  }, {
    path: "/:space",
    component: _6bcca46c,
    name: "space"
  }, {
    path: "/:space/activities",
    component: _402c7768,
    name: "space-activities"
  }, {
    path: "/:space/admins",
    component: _88f97c82,
    name: "space-admins"
  }, {
    path: "/:space/checkins",
    component: _166e93be,
    name: "space-checkins"
  }, {
    path: "/:space/community",
    component: _2de3db24,
    name: "space-community"
  }, {
    path: "/:space/corporates",
    component: _4e59fa2e,
    name: "space-corporates"
  }, {
    path: "/:space/directory",
    component: _685974a8,
    name: "space-directory"
  }, {
    path: "/:space/edit",
    component: _2db09442,
    name: "space-edit"
  }, {
    path: "/:space/events",
    component: _5b02e594,
    name: "space-events"
  }, {
    path: "/:space/invoice",
    component: _41d60168,
    name: "space-invoice"
  }, {
    path: "/:space/members-due",
    component: _7dbde1bb,
    name: "space-members-due"
  }, {
    path: "/:space/members-subscribed",
    component: _61a1bbc9,
    name: "space-members-subscribed"
  }, {
    path: "/:space/memberships",
    component: _32740598,
    name: "space-memberships"
  }, {
    path: "/:space/plans",
    component: _85446f36,
    name: "space-plans"
  }, {
    path: "/:space/promotions",
    component: _24ab9beb,
    name: "space-promotions"
  }, {
    path: "/:space/resources",
    component: _33ebce60,
    name: "space-resources"
  }, {
    path: "/:space/settings",
    component: _29ff541e,
    name: "space-settings"
  }, {
    path: "/:space/tags",
    component: _7171bed8,
    name: "space-tags"
  }, {
    path: "/:space/wellness",
    component: _782bdcc0,
    name: "space-wellness"
  }, {
    path: "/:space/admins/add",
    component: _392e3964,
    name: "space-admins-add"
  }, {
    path: "/:space/checkins/history",
    component: _2d60a1ba,
    name: "space-checkins-history"
  }, {
    path: "/:space/checkins/settings",
    component: _4fd93bb8,
    name: "space-checkins-settings"
  }, {
    path: "/:space/corporates/add",
    component: _692ae6f8,
    name: "space-corporates-add"
  }, {
    path: "/:space/directory/add",
    component: _6a5e8712,
    name: "space-directory-add"
  }, {
    path: "/:space/eatry/categories",
    component: _60841747,
    name: "space-eatry-categories"
  }, {
    path: "/:space/eatry/inventory",
    component: _52938332,
    name: "space-eatry-inventory"
  }, {
    path: "/:space/eatry/orders",
    component: _7c5294d0,
    name: "space-eatry-orders"
  }, {
    path: "/:space/events/add",
    component: _d68d0f3a,
    name: "space-events-add"
  }, {
    path: "/:space/events/categories",
    component: _fd088e66,
    name: "space-events-categories"
  }, {
    path: "/:space/events/drafts",
    component: _948755ba,
    name: "space-events-drafts"
  }, {
    path: "/:space/manage/checkins",
    component: _5e0fec6a,
    name: "space-manage-checkins"
  }, {
    path: "/:space/manage/directory",
    component: _1214963e,
    name: "space-manage-directory"
  }, {
    path: "/:space/manage/invite",
    component: _ad0684a4,
    name: "space-manage-invite"
  }, {
    path: "/:space/manage/invoices",
    component: _3d6a926a,
    name: "space-manage-invoices"
  }, {
    path: "/:space/memberships/add",
    component: _073ac967,
    name: "space-memberships-add"
  }, {
    path: "/:space/memberships/archived",
    component: _5fb805e2,
    name: "space-memberships-archived"
  }, {
    path: "/:space/memberships/messages",
    component: _d69eec0e,
    name: "space-memberships-messages"
  }, {
    path: "/:space/memberships/uninvited",
    component: _6655d7ea,
    name: "space-memberships-uninvited"
  }, {
    path: "/:space/plans/add",
    component: _0360db74,
    name: "space-plans-add"
  }, {
    path: "/:space/promotions/add",
    component: _6cf9d87a,
    name: "space-promotions-add"
  }, {
    path: "/:space/resources/add",
    component: _97c3b7a2,
    name: "space-resources-add"
  }, {
    path: "/:space/resources/bookings",
    component: _f407dac2,
    name: "space-resources-bookings"
  }, {
    path: "/:space/resources/categories",
    component: _b1fccefe,
    name: "space-resources-categories"
  }, {
    path: "/:space/settings/rooms",
    component: _1b8d4344,
    name: "space-settings-rooms"
  }, {
    path: "/:space/tags/add",
    component: _2ad07363,
    name: "space-tags-add"
  }, {
    path: "/:space/wellness/add",
    component: _8d579122,
    name: "space-wellness-add"
  }, {
    path: "/:space/wellness/bookings",
    component: _5eb5775f,
    name: "space-wellness-bookings"
  }, {
    path: "/:space/wellness/categories",
    component: _36f4cd41,
    name: "space-wellness-categories"
  }, {
    path: "/:space/eatry/categories/add",
    component: _cf9d0a54,
    name: "space-eatry-categories-add"
  }, {
    path: "/:space/eatry/inventory/add",
    component: _05fa2c14,
    name: "space-eatry-inventory-add"
  }, {
    path: "/:space/events/categories/add",
    component: _178fc5dc,
    name: "space-events-categories-add"
  }, {
    path: "/:space/memberships/messages/create",
    component: _2914ffe5,
    name: "space-memberships-messages-create"
  }, {
    path: "/:space/resources/categories/add",
    component: _069bfae0,
    name: "space-resources-categories-add"
  }, {
    path: "/:space/wellness/categories/add",
    component: _55293160,
    name: "space-wellness-categories-add"
  }, {
    path: "/:space/eatry/inventory/:id",
    component: _71ebcdd2,
    name: "space-eatry-inventory-id"
  }, {
    path: "/:space/invoice/add/:id",
    component: _1a114865,
    name: "space-invoice-add-id"
  }, {
    path: "/:space/invoice/preview/:id",
    component: _2229f44c,
    name: "space-invoice-preview-id"
  }, {
    path: "/:space/memberships/messages/:id",
    component: _685bff38,
    name: "space-memberships-messages-id"
  }, {
    path: "/:space/wellness/bookings/:id",
    component: _0cb074f2,
    name: "space-wellness-bookings-id"
  }, {
    path: "/:space/eatry/inventory/:id/edit",
    component: _2296533a,
    name: "space-eatry-inventory-id-edit"
  }, {
    path: "/:space/directory/:id",
    component: _7697fb93,
    name: "space-directory-id"
  }, {
    path: "/:space/events/:id",
    component: _2407167f,
    name: "space-events-id"
  }, {
    path: "/:space/invoice/:id",
    component: _1cffaf5a,
    name: "space-invoice-id"
  }, {
    path: "/:space/memberships/:id",
    component: _c3bed6fa,
    name: "space-memberships-id"
  }, {
    path: "/:space/resources/:id",
    component: _1976b94b,
    name: "space-resources-id"
  }, {
    path: "/:space/wellness/:id",
    component: _2e215c8b,
    name: "space-wellness-id"
  }, {
    path: "/:space/admins/:id/edit",
    component: _1fa31e3c,
    name: "space-admins-id-edit"
  }, {
    path: "/:space/corporates/:id/edit",
    component: _1763b110,
    name: "space-corporates-id-edit"
  }, {
    path: "/:space/directory/:id/notes",
    component: _11ec9202,
    name: "space-directory-id-notes"
  }, {
    path: "/:space/events/:id/attendees",
    component: _e2038ab4,
    name: "space-events-id-attendees"
  }, {
    path: "/:space/events/:id/edit",
    component: _126e7e26,
    name: "space-events-id-edit"
  }, {
    path: "/:space/plans/:id/edit",
    component: _b56cbf08,
    name: "space-plans-id-edit"
  }, {
    path: "/:space/promotions/:id/edit",
    component: _3f03d736,
    name: "space-promotions-id-edit"
  }, {
    path: "/:space/wellness/:id/slots",
    component: _ef7bbf24,
    name: "space-wellness-id-slots"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "80934f10"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "21d917ac"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(46);

// EXTERNAL MODULE: ./assets/css/nucleo/css/nucleo.css
var nucleo = __webpack_require__(47);

// EXTERNAL MODULE: ./assets/css/themify-icons/themify-icons.css
var themify_icons = __webpack_require__(48);

// EXTERNAL MODULE: ./assets/css/ionicons/css/ionicons.css
var ionicons = __webpack_require__(49);

// EXTERNAL MODULE: ./assets/sass/argon.scss
var argon = __webpack_require__(50);

// EXTERNAL MODULE: ./assets/css/helpers.css
var helpers = __webpack_require__(51);

// EXTERNAL MODULE: ./assets/css/custom.css
var custom = __webpack_require__(52);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=8272d34e&
var defaultvue_type_template_id_8272d34e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nuxt')],1)}
var defaultvue_type_template_id_8272d34e_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=8272d34e&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_8272d34e_render,
  defaultvue_type_template_id_8272d34e_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "2629d2ba"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/ShackAuth.vue?vue&type=template&id=27c36924&
var ShackAuthvue_type_template_id_27c36924_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper shack-auth"},[_c('notifications'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid h-100\">","</div>",[_c('nuxt')],1)],2)}
var ShackAuthvue_type_template_id_27c36924_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/ShackAuth.vue?vue&type=template&id=27c36924&

// CONCATENATED MODULE: ./layouts/ShackAuth.vue

var ShackAuth_script = {}
function ShackAuth_injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ShackAuth_component = Object(componentNormalizer["a" /* default */])(
  ShackAuth_script,
  ShackAuthvue_type_template_id_27c36924_render,
  ShackAuthvue_type_template_id_27c36924_staticRenderFns,
  false,
  ShackAuth_injectStyles,
  null,
  "1d1b6f16"
  
)

/* harmony default export */ var ShackAuth = (ShackAuth_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/ShackDash.vue?vue&type=template&id=647c9f65&
var ShackDashvue_type_template_id_647c9f65_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c('notifications'),_vm._ssrNode(" "),_c('side-bar',{scopedSlots:_vm._u([{key:"links",fn:function(props){return [_c('sidebar-item',{attrs:{"link":{
          name: 'Dashboard',
          icon: 'ni ni-archive-2',
          path: ("/" + _vm.subdomain),
        }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Memberships', icon: 'fa fa-tasks' }}},[_c('sidebar-item',{attrs:{"link":{ name: 'Directory', path: ("/" + _vm.subdomain + "/directory") }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Onboarding' }}},[_c('sidebar-item',{attrs:{"link":{
              name: 'Invited',
              path: ("/" + _vm.subdomain + "/memberships"),
            }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{
              name: 'Pending',
              path: ("/" + _vm.subdomain + "/memberships/uninvited"),
            }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{
              name: 'Archived / Bin',
              path: ("/" + _vm.subdomain + "/memberships/archived"),
            }}})],1),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Members Due', path: ("/" + _vm.subdomain + "/members-due") }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{
            name: 'Community',
            icon: 'fa fa-users',
            path: ("/" + _vm.subdomain + "/community"),
          }}})],1),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Checkins', icon: 'fa fa-user-check' }}},[_c('sidebar-item',{attrs:{"link":{
            name: 'Current Checkins',
            path: ("/" + _vm.subdomain + "/checkins"),
          }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{
            name: 'Past Checkins',
            path: ("/" + _vm.subdomain + "/checkins/history"),
          }}})],1),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Bookings', icon: 'ni ni-shop' }}},[_c('sidebar-item',{attrs:{"link":{
            name: 'Bookings',
            path: ("/" + _vm.subdomain + "/resources/bookings"),
          }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Resources', path: ("/" + _vm.subdomain + "/resources") }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Categories' }}},[_c('sidebar-item',{attrs:{"link":{
              name: 'All Categories',
              path: ("/" + _vm.subdomain + "/resources/categories"),
            }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{
              name: 'Add Categories',
              path: ("/" + _vm.subdomain + "/resources/categories/add"),
            }}})],1)],1),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Events', icon: 'fa fa-calendar-alt' }}},[_c('sidebar-item',{attrs:{"link":{ name: 'Calendar', path: ("/" + _vm.subdomain + "/events") }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Drafts', path: ("/" + _vm.subdomain + "/events/drafts") }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Categories' }}},[_c('sidebar-item',{attrs:{"link":{
              name: 'All Categories',
              path: ("/" + _vm.subdomain + "/events/categories"),
            }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{
              name: 'Add Categories',
              path: ("/" + _vm.subdomain + "/events/categories/add"),
            }}})],1)],1),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Setup', icon: 'fa fa-cog' }}},[_c('sidebar-item',{attrs:{"link":{ name: 'Plans', path: ("/" + _vm.subdomain + "/plans") }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Promotions', path: ("/" + _vm.subdomain + "/promotions") }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Tags', path: ("/" + _vm.subdomain + "/tags") }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Adminstrators', path: ("/" + _vm.subdomain + "/admins") }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Space', path: ("/" + _vm.subdomain + "/edit") }}}),_vm._v(" "),_c('sidebar-item',{attrs:{"link":{ name: 'Rooms', path: ("/" + _vm.subdomain + "/settings/rooms") }}})],1)]}}])}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-content\">","</div>",[_c('dashboard-navbar',{attrs:{"type":_vm.$route.name === 'alternative' ? 'light' : 'default'}}),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('nuxt')],1),_vm._ssrNode(" "),(!_vm.$route.meta.hideFooter)?_c('content-footer'):_vm._e()],2)],2)}
var ShackDashvue_type_template_id_647c9f65_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/ShackDash.vue?vue&type=template&id=647c9f65&

// EXTERNAL MODULE: external "perfect-scrollbar"
var external_perfect_scrollbar_ = __webpack_require__(32);
var external_perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_perfect_scrollbar_);

// EXTERNAL MODULE: ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css
var perfect_scrollbar = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/argon/DashboardNavbar.vue?vue&type=template&id=78338056&
var DashboardNavbarvue_type_template_id_78338056_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-nav',{staticClass:"navbar-top border-bottom navbar-expand",class:{'navbar-dark': _vm.type === 'default'},attrs:{"container-classes":"container-fluid"}},[_c('ul',{staticClass:"navbar-nav align-items-center mr-md-auto"},[_c('li',{staticClass:"nav-item d-xl-none"},[_c('div',{staticClass:"pr-3 sidenav-toggler",class:{active: _vm.$sidebar.showSidebar, 'sidenav-toggler-light': _vm.type === 'default', 'sidenav-toggler-light': _vm.type === 'light'},on:{"click":_vm.toggleSidebar}},[_c('div',{staticClass:"sidenav-toggler-inner"},[_c('i',{staticClass:"sidenav-toggler-line"}),_vm._v(" "),_c('i',{staticClass:"sidenav-toggler-line"}),_vm._v(" "),_c('i',{staticClass:"sidenav-toggler-line"})])])]),_vm._v(" "),_c('li',{staticClass:"nav-item d-sm-none"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#","data-action":"search-show","data-target":"#navbar-search-main"}},[_c('i',{staticClass:"ni ni-zoom-split-in"})])])]),_vm._v(" "),_c('ul',{staticClass:"navbar-nav align-items-center ml-auto ml-md-0"},[_c('base-dropdown',{staticClass:"nav-item",attrs:{"menu-on-right":"","tag":"li","title-tag":"a","title-classes":"nav-link pr-0"}},[_c('a',{staticClass:"nav-link pr-0",attrs:{"slot":"title-container","href":"#"},on:{"click":function($event){$event.preventDefault();}},slot:"title-container"},[_c('div',{staticClass:"media align-items-center"},[_c('span',{staticClass:"avatar avatar-sm rounded-circle"},[_c('img',{attrs:{"src":_vm.picture ? _vm.picture : "/img/placeholder.jpg","alt":"Image placeholder"}})]),_vm._v(" "),_c('div',{staticClass:"media-body ml-2 d-none d-lg-block"},[_c('span',{staticClass:"mb-0 text-sm"},[_vm._v(_vm._s(_vm.user.name))])])])]),_vm._v(" "),[_c('div',{staticClass:"dropdown-header noti-title"},[_c('h6',{staticClass:"text-overflow m-0"},[_vm._v("Welcome!")])]),_vm._v(" "),_c('nuxt-link',{staticClass:"dropdown-item",attrs:{"to":{name: 'space-settings'}}},[_c('i',{staticClass:"ni ni-settings-gear-65"}),_vm._v(" "),_c('span',[_vm._v("Settings")])]),_vm._v(" "),_c('div',{staticClass:"dropdown-divider"}),_vm._v(" "),_c('a',{staticClass:"dropdown-item",on:{"click":_vm.logOut}},[_c('i',{staticClass:"ni ni-user-run"}),_vm._v(" "),_c('span',[_vm._v("Logout")])])]],2)],1)])}
var DashboardNavbarvue_type_template_id_78338056_staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/argon/DashboardNavbar.vue?vue&type=template&id=78338056&

// EXTERNAL MODULE: external "vue2-transitions"
var external_vue2_transitions_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/argon-core/Navbar/BaseNav.vue + 4 modules
var BaseNav = __webpack_require__(7);

// EXTERNAL MODULE: ./components/argon-core/Modal.vue + 4 modules
var Modal = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/argon/DashboardNavbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var DashboardNavbarvue_type_script_lang_js_ = ({
  components: {
    CollapseTransition: external_vue2_transitions_["CollapseTransition"],
    BaseNav: BaseNav["a" /* default */],
    Modal: Modal["a" /* default */]
  },
  props: {
    type: {
      type: String,
      default: 'default',
      // default|light
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    }
  },

  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: '',
      picture: null
    };
  },

  computed: {
    routeName() {
      const {
        name
      } = this.$route;
      return this.capitalizeFirstLetter(name);
    },

    ...Object(external_vuex_["mapState"])({
      user: state => state.auth.user
    })
  },

  mounted() {
    this.$axios.$get('/user/profile').then(res => {
      this.picture = res.data.picture;
    });
  },

  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },

    closeDropDown() {
      this.activeNotifications = false;
    },

    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },

    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },

    logOut() {
      this.$auth.logout('local');
    }

  }
});
// CONCATENATED MODULE: ./components/layouts/argon/DashboardNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_DashboardNavbarvue_type_script_lang_js_ = (DashboardNavbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/layouts/argon/DashboardNavbar.vue





/* normalize component */

var DashboardNavbar_component = Object(componentNormalizer["a" /* default */])(
  argon_DashboardNavbarvue_type_script_lang_js_,
  DashboardNavbarvue_type_template_id_78338056_render,
  DashboardNavbarvue_type_template_id_78338056_staticRenderFns,
  false,
  null,
  null,
  "c5d78bc8"
  
)

/* harmony default export */ var DashboardNavbar = (DashboardNavbar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/argon/ContentFooter.vue?vue&type=template&id=4e86ee9e&
var ContentFootervue_type_template_id_4e86ee9e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer px-4 mx-2"},[_vm._ssrNode("<div class=\"row align-items-center justify-content-lg-between\"><div class=\"col-lg-12\"><div class=\"copyright text-center text-lg-right text-muted\">"+_vm._ssrEscape("\n        © "+_vm._s(_vm.year)+" SHACK15\n      ")+"</div></div></div>")])}
var ContentFootervue_type_template_id_4e86ee9e_staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/argon/ContentFooter.vue?vue&type=template&id=4e86ee9e&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/argon/ContentFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ContentFootervue_type_script_lang_js_ = ({
  data() {
    return {
      year: new Date().getFullYear()
    };
  }

});
// CONCATENATED MODULE: ./components/layouts/argon/ContentFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_ContentFootervue_type_script_lang_js_ = (ContentFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/layouts/argon/ContentFooter.vue



function ContentFooter_injectStyles (context) {
  
  
}

/* normalize component */

var ContentFooter_component = Object(componentNormalizer["a" /* default */])(
  argon_ContentFootervue_type_script_lang_js_,
  ContentFootervue_type_template_id_4e86ee9e_render,
  ContentFootervue_type_template_id_4e86ee9e_staticRenderFns,
  false,
  ContentFooter_injectStyles,
  null,
  "cd151468"
  
)

/* harmony default export */ var ContentFooter = (ContentFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/argon/Content.vue?vue&type=template&id=24a1abd2&
var Contentvue_type_template_id_24a1abd2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('FadeTransition',{attrs:{"duration":200,"mode":"out-in"}},[_c('router-view')],1)],1)}
var Contentvue_type_template_id_24a1abd2_staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/argon/Content.vue?vue&type=template&id=24a1abd2&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/argon/Content.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Contentvue_type_script_lang_js_ = ({
  components: {
    FadeTransition: external_vue2_transitions_["FadeTransition"]
  }
});
// CONCATENATED MODULE: ./components/layouts/argon/Content.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_Contentvue_type_script_lang_js_ = (Contentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/layouts/argon/Content.vue



function Content_injectStyles (context) {
  
  
}

/* normalize component */

var Content_component = Object(componentNormalizer["a" /* default */])(
  argon_Contentvue_type_script_lang_js_,
  Contentvue_type_template_id_24a1abd2_render,
  Contentvue_type_template_id_24a1abd2_staticRenderFns,
  false,
  Content_injectStyles,
  null,
  "80c3cf5e"
  
)

/* harmony default export */ var Content = (Content_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/ShackDash.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable no-new */



function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new external_perfect_scrollbar_default.a(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}





/* harmony default export */ var ShackDashvue_type_script_lang_js_ = ({
  components: {
    DashboardNavbar: DashboardNavbar,
    ContentFooter: ContentFooter,
    DashboardContent: Content
  },
  computed: { ...Object(external_vuex_["mapState"])({
      subdomain: state => state.space.currentSpace.subdomain
    })
  },

  mounted() {
    this.initScrollbar();
  },

  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith('Win');

      if (isWindows) {
        initScrollbar('scrollbar-inner');
      }
    }

  }
});
// CONCATENATED MODULE: ./layouts/ShackDash.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_ShackDashvue_type_script_lang_js_ = (ShackDashvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/ShackDash.vue



function ShackDash_injectStyles (context) {
  
  
}

/* normalize component */

var ShackDash_component = Object(componentNormalizer["a" /* default */])(
  layouts_ShackDashvue_type_script_lang_js_,
  ShackDashvue_type_template_id_647c9f65_render,
  ShackDashvue_type_template_id_647c9f65_staticRenderFns,
  false,
  ShackDash_injectStyles,
  null,
  "0564555f"
  
)

/* harmony default export */ var ShackDash = (ShackDash_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js















const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_ShackAuth": sanitizeComponent(ShackAuth),
  "_ShackDash": sanitizeComponent(ShackDash)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(57), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(58), 'activity.js');
  resolveStoreModules(__webpack_require__(59), 'admin.js');
  resolveStoreModules(__webpack_require__(60), 'community.js');
  resolveStoreModules(__webpack_require__(61), 'company.js');
  resolveStoreModules(__webpack_require__(62), 'eatry.js');
  resolveStoreModules(__webpack_require__(63), 'events.js');
  resolveStoreModules(__webpack_require__(64), 'invoice.js');
  resolveStoreModules(__webpack_require__(65), 'memberships.js');
  resolveStoreModules(__webpack_require__(66), 'plans.js');
  resolveStoreModules(__webpack_require__(67), 'promotions.js');
  resolveStoreModules(__webpack_require__(68), 'resources.js');
  resolveStoreModules(__webpack_require__(69), 'space.js');
  resolveStoreModules(__webpack_require__(70), 'tags.js');
  resolveStoreModules(__webpack_require__(71), 'wellness.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(33);

// CONCATENATED MODULE: ./.nuxt/bootstrap-vue.js


external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"], {});
// EXTERNAL MODULE: external "rollbar"
var external_rollbar_ = __webpack_require__(26);
var external_rollbar_default = /*#__PURE__*/__webpack_require__.n(external_rollbar_);

// CONCATENATED MODULE: ./.nuxt/rollbar-client.js



const createRollbarInstance = function (accessToken) {
  const config = {};
  config.accessToken = accessToken;
  return new external_rollbar_default.a(config);
};

const serverRollbar = createRollbarInstance('f6992963cbab499890c235f6e446d353');
const clientRollbar = createRollbarInstance('e25d4776e2cb4dd385dbe74ffd47cb43');

const noop = function () {};

const stubRollbar = Object.create(null);
Object.defineProperties(stubRollbar, Object.getOwnPropertyNames(external_rollbar_default.a.prototype).reduce(function (acc, key) {
  acc[key] = {
    value: noop
  };
  return acc;
}, {}));
const RollbarAdapter = Object.create(null);
Object.defineProperty(RollbarAdapter, 'instance', {
  get() {
    if (true) {
      return serverRollbar;
    }

    if (false) {}

    return stubRollbar;
  }

});
/* harmony default export */ var rollbar_client = (function (ctx, inject) {
  // Inject Rollbar to the context as $rollbar
  ctx.$rollbar = RollbarAdapter.instance;
  inject('rollbar', RollbarAdapter.instance);
  external_vue_default.a.rollbar = RollbarAdapter.instance;
});
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(5);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./.nuxt/moment.js

/* harmony default export */ var moment = ((ctx, inject) => {
  ctx.$moment = external_moment_default.a;
  inject('moment', external_moment_default.a);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(34);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (let scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (let method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (let key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'https://api.shack15.com/api/v1'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "es6-promise/auto"
var auto_ = __webpack_require__(72);

// CONCATENATED MODULE: ./polyfills.js
/* eslint-disable */

/* harmony default export */ var polyfills = ((function initPollyFills() {
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function (predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

        var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


        var thisArg = arguments[1]; // 5. Let k be 0.

        var k = 0; // 6. Repeat, while k < len

        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];

          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          } // e. Increase k by 1.


          k++;
        } // 7. Return undefined.


        return undefined;
      }
    });
  }

  if (typeof Object.assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) {
        // .length of function is 2
        'use strict';

        if (target == null) {
          // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }

        return to;
      },
      writable: true,
      configurable: true
    });
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
      return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    };
  }

  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict';

      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }
})());
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/NotificationPlugin/Notifications.vue?vue&type=template&id=69acb045&
var Notificationsvue_type_template_id_69acb045_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notifications"},[_c('slide-y-up-transition',{attrs:{"duration":_vm.transitionDuration,"group":"","mode":"out-in"}},_vm._l((_vm.notifications),function(notification){return _c('notification',_vm._b({key:notification.timestamp.getTime(),attrs:{"click-handler":notification.onClick},on:{"close":_vm.removeNotification}},'notification',notification,false))}),1)],1)}
var Notificationsvue_type_template_id_69acb045_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/NotificationPlugin/Notifications.vue?vue&type=template&id=69acb045&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/NotificationPlugin/Notification.vue?vue&type=template&id=4d6f9db2&
var Notificationvue_type_template_id_4d6f9db2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert alert-notify alert-dismissible",class:[
    { 'alert-with-icon': _vm.icon },
    _vm.verticalAlign,
    _vm.horizontalAlign,
    _vm.alertType
  ],style:(_vm.customPosition),attrs:{"data-notify":"container","role":"alert","data-notify-position":"top-center"},on:{"click":_vm.tryClose}},[(_vm.icon || _vm.$slots.icon)?[_vm._t("icon",[_c('span',{staticClass:"alert-icon",attrs:{"data-notify":"icon"}},[_c('i',{class:_vm.icon})])])]:_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<span class=\"alert-text\">","</span>",[_vm._ssrNode(((_vm.title)?("<span class=\"title\"><b>"+_vm._ssrEscape(_vm._s(_vm.title))+"<br></b></span>"):"<!---->")+" "+((_vm.message)?("<span>"+(_vm._s(_vm.message))+"</span>"):"<!---->")+" "),(!_vm.message && _vm.component)?_c('content-render',{attrs:{"component":_vm.component}}):_vm._e()],2),_vm._ssrNode(" "),_vm._t("dismiss-icon",[_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"alert","aria-label":"Close"},on:{"click":_vm.close}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])])],2)}
var Notificationvue_type_template_id_4d6f9db2_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/NotificationPlugin/Notification.vue?vue&type=template&id=4d6f9db2&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/NotificationPlugin/Notification.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  name: 'Notification',
  components: {
    contentRender: {
      props: ['component'],
      render: h => h(undefined.component)
    }
  },
  props: {
    message: {
      type: String,
      default: null
    },
    title: {
      type: String,
      description: 'Notification title',
      default: null
    },
    icon: {
      type: String,
      description: 'Notification icon',
      default: null
    },
    verticalAlign: {
      type: String,
      default: 'top',
      validator: value => {
        let acceptedValues = ['top', 'bottom'];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: 'Vertical alignment of notification (top|bottom)'
    },
    horizontalAlign: {
      type: String,
      default: 'right',
      validator: value => {
        let acceptedValues = ['left', 'center', 'right'];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: 'Horizontal alignment of notification (left|center|right)'
    },
    type: {
      type: String,
      default: 'info',
      validator: value => {
        let acceptedValues = ['default', 'info', 'primary', 'danger', 'warning', 'success'];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: 'Notification type of notification (default|info|primary|danger|warning|success)'
    },
    timeout: {
      type: Number,
      default: 5000,
      validator: value => {
        return value >= 0;
      },
      description: 'Notification timeout (closes after X milliseconds). Default is 5000 (5s)'
    },
    timestamp: {
      type: Date,
      default: () => new Date(),
      description: 'Notification timestamp (used internally to handle notification removal correctly)'
    },
    component: {
      type: [Object, Function],
      description: 'Custom content component. Cane be a `.vue` component or render function',
      default: null
    },
    showClose: {
      type: Boolean,
      default: true,
      description: 'Whether to show close button'
    },
    closeOnClick: {
      type: Boolean,
      default: true,
      description: "Whether to close notification when clicking it' body"
    },
    clickHandler: {
      type: Function,
      description: 'Custom notification click handler',
      default: null
    }
  },

  data() {
    return {
      elmHeight: 0
    };
  },

  computed: {
    hasIcon() {
      return this.icon && this.icon.length > 0;
    },

    alertType() {
      return `alert-${this.type}`;
    },

    customPosition() {
      let initialMargin = 20;
      let alertHeight = this.elmHeight + 10;
      let sameAlertsCount = this.$notifications.state.filter(alert => {
        return alert.horizontalAlign === this.horizontalAlign && alert.verticalAlign === this.verticalAlign && alert.timestamp <= this.timestamp;
      }).length;

      if (this.$notifications.settings.overlap) {
        sameAlertsCount = 1;
      }

      let pixels = (sameAlertsCount - 1) * alertHeight + initialMargin;
      let styles = {};

      if (this.verticalAlign === 'top') {
        styles.top = `${pixels}px`;
      } else {
        styles.bottom = `${pixels}px`;
      }

      return styles;
    }

  },

  mounted() {
    this.elmHeight = this.$el.clientHeight;

    if (this.timeout) {
      setTimeout(this.close, this.timeout);
    }
  },

  methods: {
    close() {
      this.$emit('close', this.timestamp);
    },

    tryClose(evt) {
      if (this.clickHandler) {
        this.clickHandler(evt, this);
      }

      if (this.closeOnClick) {
        this.close();
      }
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/NotificationPlugin/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var NotificationPlugin_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/NotificationPlugin/Notification.vue



function Notification_injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Notification_component = Object(componentNormalizer["a" /* default */])(
  NotificationPlugin_Notificationvue_type_script_lang_js_,
  Notificationvue_type_template_id_4d6f9db2_render,
  Notificationvue_type_template_id_4d6f9db2_staticRenderFns,
  false,
  Notification_injectStyles,
  null,
  "a955fd48"
  
)

/* harmony default export */ var Notification = (Notification_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/NotificationPlugin/Notifications.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Notificationsvue_type_script_lang_js_ = ({
  components: {
    SlideYUpTransition: external_vue2_transitions_["SlideYUpTransition"],
    Notification: Notification
  },
  props: {
    transitionDuration: {
      type: Number,
      default: 200
    },
    overlap: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      notifications: this.$notifications.state
    };
  },

  watch: {
    overlap: function (newVal) {
      this.$notifications.settings.overlap = newVal;
    }
  },

  created() {
    this.$notifications.settings.overlap = this.overlap;
  },

  methods: {
    removeNotification(timestamp) {
      this.$notifications.removeNotification(timestamp);
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/NotificationPlugin/Notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var NotificationPlugin_Notificationsvue_type_script_lang_js_ = (Notificationsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/NotificationPlugin/Notifications.vue





/* normalize component */

var Notifications_component = Object(componentNormalizer["a" /* default */])(
  NotificationPlugin_Notificationsvue_type_script_lang_js_,
  Notificationsvue_type_template_id_69acb045_render,
  Notificationsvue_type_template_id_69acb045_staticRenderFns,
  false,
  null,
  null,
  "7a126972"
  
)

/* harmony default export */ var Notifications = (Notifications_component.exports);
// CONCATENATED MODULE: ./components/argon-core/NotificationPlugin/index.js

const NotificationStore = {
  state: [],
  // here the notifications will be added
  settings: {
    overlap: false,
    verticalAlign: 'top',
    horizontalAlign: 'right',
    type: 'info',
    timeout: 5000,
    closeOnClick: true,
    showClose: true
  },

  setOptions(options) {
    this.settings = Object.assign(this.settings, options);
  },

  removeNotification(timestamp) {
    const indexToDelete = this.state.findIndex(n => n.timestamp === timestamp);

    if (indexToDelete !== -1) {
      this.state.splice(indexToDelete, 1);
    }
  },

  addNotification(notification) {
    if (typeof notification === 'string' || notification instanceof String) {
      notification = {
        message: notification
      };
    }

    notification.timestamp = new Date();
    notification.timestamp.setMilliseconds(notification.timestamp.getMilliseconds() + this.state.length);
    notification = Object.assign({}, this.settings, notification);
    this.state.push(notification);
  },

  notify(notification) {
    if (Array.isArray(notification)) {
      notification.forEach(notificationInstance => {
        this.addNotification(notificationInstance);
      });
    } else {
      this.addNotification(notification);
    }
  }

};
const NotificationsPlugin = {
  install(Vue, options) {
    let app = new Vue({
      data: {
        notificationStore: NotificationStore
      },
      methods: {
        notify(notification) {
          this.notificationStore.notify(notification);
        }

      }
    });
    Vue.prototype.$notify = app.notify;
    Vue.prototype.$notifications = app.notificationStore;
    Vue.component('Notifications', Notifications);

    if (options) {
      NotificationStore.setOptions(options);
    }
  }

};
/* harmony default export */ var NotificationPlugin = (NotificationsPlugin);
// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/SidebarPlugin/SideBar.vue?vue&type=template&id=7bd34136&
var SideBarvue_type_template_id_7bd34136_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white",attrs:{"data":_vm.backgroundColor},on:{"mouseenter":function($event){return _vm.$sidebar.onMouseEnter()},"mouseleave":function($event){return _vm.$sidebar.onMouseLeave()}}},[_vm._ssrNode("<div class=\"scrollbar-inner\">","</div>",[_vm._ssrNode("<div class=\"sidenav-header d-flex align-items-center\"><a href=\"#\" class=\"navbar-brand\"><img"+(_vm._ssrAttr("src",_vm.logo))+" alt=\"Sidebar logo\" class=\"navbar-brand-img\"></a> <div class=\"ml-auto\"><div"+(_vm._ssrClass("sidenav-toggler d-none d-xl-block",{'active': !_vm.$sidebar.isMinimized }))+"><div class=\"sidenav-toggler-inner\"><i class=\"sidenav-toggler-line\"></i> <i class=\"sidenav-toggler-line\"></i> <i class=\"sidenav-toggler-line\"></i></div></div></div></div> "),_vm._t("default"),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"navbar-inner\">","</div>",[_vm._ssrNode("<ul class=\"navbar-nav\">","</ul>",[_vm._t("links",_vm._l((_vm.sidebarLinks),function(link,index){return _c('sidebar-item',{key:link.name + index,attrs:{"link":link}},_vm._l((link.children),function(subLink,index){return _c('sidebar-item',{key:subLink.name + index,attrs:{"link":subLink}})}),1)}))],2),_vm._ssrNode(" "),_vm._t("links-after")],2)],2)])}
var SideBarvue_type_template_id_7bd34136_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/SidebarPlugin/SideBar.vue?vue&type=template&id=7bd34136&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/SidebarPlugin/SideBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SideBarvue_type_script_lang_js_ = ({
  name: 'Sidebar',
  props: {
    title: {
      type: String,
      default: 'Creative Tim',
      description: 'Sidebar title'
    },
    shortTitle: {
      type: String,
      default: 'CT',
      description: 'Sidebar short title'
    },
    logo: {
      type: String,
      default: '/img/logo.png',
      description: 'Sidebar app logo'
    },
    backgroundColor: {
      type: String,
      default: 'vue',
      validator: value => {
        let acceptedValues = ['', 'vue', 'blue', 'green', 'orange', 'red', 'primary'];
        return acceptedValues.indexOf(value) !== -1;
      },
      description: 'Sidebar background color (vue|blue|green|orange|red|primary)'
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
      description: "List of sidebar links as an array if you don't want to use components for these."
    },
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },

  provide() {
    return {
      autoClose: this.autoClose
    };
  },

  mounted() {
    this.$sidebar.isMinimized = this.$sidebar.breakpoint < window.innerWidth;
    this.minimizeSidebar();
  },

  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },

  methods: {
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/SidebarPlugin/SideBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SidebarPlugin_SideBarvue_type_script_lang_js_ = (SideBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/SidebarPlugin/SideBar.vue





/* normalize component */

var SideBar_component = Object(componentNormalizer["a" /* default */])(
  SidebarPlugin_SideBarvue_type_script_lang_js_,
  SideBarvue_type_template_id_7bd34136_render,
  SideBarvue_type_template_id_7bd34136_staticRenderFns,
  false,
  null,
  null,
  "0b9c629c"
  
)

/* harmony default export */ var SideBar = (SideBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/SidebarPlugin/SidebarItem.vue?vue&type=template&id=51397f8e&
var SidebarItemvue_type_template_id_51397f8e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.baseComponent,{tag:"component",staticClass:"nav-item",class:{ active: _vm.isActive },attrs:{"to":_vm.link.path ? _vm.link.path : '/',"tag":"li"}},[(_vm.isMenu)?_c('a',{staticClass:"sidebar-menu-item nav-link",class:{ active: _vm.isActive },attrs:{"aria-expanded":!_vm.collapsed,"data-toggle":"collapse"},on:{"click":function($event){$event.preventDefault();return _vm.collapseMenu($event)}}},[(_vm.addLink)?[_c('span',{staticClass:"nav-link-text"},[_vm._v("\n        "+_vm._s(_vm.link.name)+" "),_c('b',{staticClass:"caret"})])]:[_c('i',{class:_vm.link.icon}),_vm._v(" "),_c('span',{staticClass:"nav-link-text"},[_vm._v(_vm._s(_vm.link.name)+" "),_c('b',{staticClass:"caret"})])]],2):_vm._e(),_vm._v(" "),_c('collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.collapsed),expression:"!collapsed"}],staticClass:"collapse show"},[_c('ul',{staticClass:"nav nav-sm flex-column"},[_vm._t("default")],2)])]),_vm._v(" "),(_vm.children.length === 0 && !_vm.$slots.default && _vm.link.path)?_vm._t("title",[_c(_vm.elementType(_vm.link, false),{tag:"component",staticClass:"nav-link",class:{ active: _vm.link.active },attrs:{"to":_vm.link.path,"target":_vm.link.target,"href":_vm.link.path},nativeOn:{"click":function($event){return _vm.linkClick($event)}}},[(_vm.addLink)?[_c('span',{staticClass:"nav-link-text"},[_vm._v(_vm._s(_vm.link.name))])]:[_c('i',{class:_vm.link.icon}),_vm._v(" "),_c('span',{staticClass:"nav-link-text"},[_vm._v(_vm._s(_vm.link.name))])]],2)]):_vm._e()],2)}
var SidebarItemvue_type_template_id_51397f8e_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/SidebarPlugin/SidebarItem.vue?vue&type=template&id=51397f8e&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/SidebarPlugin/SidebarItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SidebarItemvue_type_script_lang_js_ = ({
  name: 'SidebarItem',
  components: {
    CollapseTransition: external_vue2_transitions_["CollapseTransition"]
  },
  props: {
    menu: {
      type: Boolean,
      default: false,
      description: "Whether the item is a menu. Most of the item it's not used and should be used only if you want to override the default behavior."
    },
    link: {
      type: Object,
      default: () => {
        return {
          name: '',
          path: '',
          children: []
        };
      },
      description: 'Sidebar link. Can contain name, path, icon and other attributes. See examples for more info'
    }
  },

  provide() {
    return {
      addLink: this.addChild,
      removeLink: this.removeChild
    };
  },

  inject: {
    addLink: {
      default: null
    },
    removeLink: {
      default: null
    },
    autoClose: {
      default: true
    }
  },

  data() {
    return {
      children: [],
      collapsed: true
    };
  },

  computed: {
    baseComponent() {
      return this.isMenu || this.link.isRoute ? 'li' : 'router-link';
    },

    isMenu() {
      if (!this.$slots.default) {
        return false;
      }

      return this.$slots.default.some(item => item.tag.endsWith('SidebarItem'));
    },

    isActive() {
      if (this.$route && this.$route.path) {
        let matchingRoute = this.children.find(c => this.$route.path.startsWith(c.link.path));

        if (matchingRoute !== undefined) {
          return true;
        }
      }

      return false;
    }

  },

  mounted() {
    if (this.addLink) {
      this.addLink(this);
    }

    if (this.link.collapsed !== undefined) {
      this.collapsed = this.link.collapsed;
    }

    if (this.isActive && this.isMenu) {
      this.collapsed = false;
    }
  },

  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    if (this.removeLink) {
      this.removeLink(this);
    }
  },

  methods: {
    addChild(item) {
      const index = this.$slots.default.indexOf(item.$vnode);
      this.children.splice(index, 0, item);
    },

    removeChild(item) {
      const tabs = this.children;
      const index = tabs.indexOf(item);
      tabs.splice(index, 1);
    },

    elementType(link, isParent = true) {
      if (link.isRoute === false) {
        return isParent ? 'li' : 'a';
      } else {
        return 'router-link';
      }
    },

    linkClick() {
      if (this.autoClose && this.$sidebar && this.$sidebar.showSidebar === true) {
        this.$sidebar.displaySidebar(false);
      }
    },

    collapseMenu() {
      this.collapsed = !this.collapsed;
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/SidebarPlugin/SidebarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var SidebarPlugin_SidebarItemvue_type_script_lang_js_ = (SidebarItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/SidebarPlugin/SidebarItem.vue



function SidebarItem_injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SidebarItem_component = Object(componentNormalizer["a" /* default */])(
  SidebarPlugin_SidebarItemvue_type_script_lang_js_,
  SidebarItemvue_type_template_id_51397f8e_render,
  SidebarItemvue_type_template_id_51397f8e_staticRenderFns,
  false,
  SidebarItem_injectStyles,
  null,
  "57f5366f"
  
)

/* harmony default export */ var SidebarItem = (SidebarItem_component.exports);
// CONCATENATED MODULE: ./components/argon-core/SidebarPlugin/index.js


const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  isMinimized: false,
  breakpoint: 1200,
  hovered: false,

  displaySidebar(value) {
    if (window.innerWidth > this.breakpoint) {
      return;
    }

    this.showSidebar = value;
    let docClasses = document.body.classList;

    if (value) {
      docClasses.add('g-sidenav-pinned');
      docClasses.add('g-sidenav-show');
      docClasses.remove('g-sidenav-hidden');
    } else {
      docClasses.add('g-sidenav-hidden');
      docClasses.remove('g-sidenav-pinned');
      docClasses.remove('g-sidenav-show');
    }
  },

  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
    let docClasses = document.body.classList;

    if (this.isMinimized) {
      docClasses.add('g-sidenav-hidden');
      docClasses.remove('g-sidenav-pinned');
      docClasses.remove('g-sidenav-show');
    } else {
      docClasses.add('g-sidenav-pinned');
      docClasses.add('g-sidenav-show');
      docClasses.remove('g-sidenav-hidden');
    }

    if (this.hovered) {
      docClasses.add('g-sidenav-show');
    }
  },

  onMouseEnter() {
    this.hovered = true;

    if (this.isMinimized) {
      document.body.classList.add('g-sidenav-show');
      document.body.classList.remove('g-sidenav-hidden');
    }
  },

  onMouseLeave() {
    this.hovered = false;

    if (this.isMinimized) {
      let docClasses = document.body.classList;
      docClasses.remove('g-sidenav-show');
      docClasses.add('g-sidenav-hide');
      setTimeout(() => {
        docClasses.remove('g-sidenav-hide');
        docClasses.add('g-sidenav-hidden');
      }, 300);
    }
  }

};
const SidebarPlugin = {
  install(Vue, options) {
    if (options && options.sidebarLinks) {
      SidebarStore.sidebarLinks = options.sidebarLinks;
    }

    let app = new Vue({
      data: {
        sidebarStore: SidebarStore
      }
    });
    Vue.prototype.$sidebar = app.sidebarStore;
    Vue.component('side-bar', SideBar);
    Vue.component('sidebar-item', SidebarItem);
  }

};
/* harmony default export */ var argon_core_SidebarPlugin = (SidebarPlugin);
// EXTERNAL MODULE: external "element-ui/lib/locale/lang/en"
var en_ = __webpack_require__(36);
var en_default = /*#__PURE__*/__webpack_require__.n(en_);

// EXTERNAL MODULE: external "element-ui/lib/locale"
var locale_ = __webpack_require__(37);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// CONCATENATED MODULE: ./plugins/dashboard/directives/click-outside.js
/* harmony default export */ var click_outside = ({
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };

    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});
// CONCATENATED MODULE: ./plugins/dashboard/globalDirectives.js


/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

external_vue_default.a.directive('click-outside', click_outside);
// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/popover.css
var popover = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/base.css
var base = __webpack_require__(21);

// EXTERNAL MODULE: external "element-ui/lib/popover"
var popover_ = __webpack_require__(38);
var lib_popover_default = /*#__PURE__*/__webpack_require__.n(popover_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/tooltip.css
var tooltip = __webpack_require__(76);

// EXTERNAL MODULE: external "element-ui/lib/tooltip"
var tooltip_ = __webpack_require__(39);
var lib_tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/input.css
var input = __webpack_require__(77);

// EXTERNAL MODULE: external "element-ui/lib/input"
var input_ = __webpack_require__(27);
var lib_input_default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Badge.vue?vue&type=template&id=74581914&
var Badgevue_type_template_id_74581914_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"badge",class:[("badge-" + _vm.type),
     _vm.rounded ? "badge-pill" : '',
     _vm.circle && 'badge-circle',
     ( _obj = {}, _obj[("badge-" + _vm.size)] = _vm.size, _obj ) ]},[_vm._t("default",[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e()])],2)}
var Badgevue_type_template_id_74581914_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Badge.vue?vue&type=template&id=74581914&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Badge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Badgevue_type_script_lang_js_ = ({
  name: 'Badge',
  props: {
    tag: {
      type: String,
      default: 'span',
      description: 'Html tag to use for the badge.'
    },
    rounded: {
      type: Boolean,
      default: false,
      description: 'Whether badge is of pill type'
    },
    circle: {
      type: Boolean,
      default: false,
      description: 'Whether badge is circle'
    },
    icon: {
      type: String,
      default: '',
      description: 'Icon name. Will be overwritten by slot if slot is used'
    },
    type: {
      type: String,
      default: 'default',
      description: 'Badge type (primary|info|danger|default|warning|success)'
    },
    size: {
      type: String,
      description: 'Badge size (md, lg)',
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/argon-core/Badge.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_core_Badgevue_type_script_lang_js_ = (Badgevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/Badge.vue



function Badge_injectStyles (context) {
  
  
}

/* normalize component */

var Badge_component = Object(componentNormalizer["a" /* default */])(
  argon_core_Badgevue_type_script_lang_js_,
  Badgevue_type_template_id_74581914_render,
  Badgevue_type_template_id_74581914_staticRenderFns,
  false,
  Badge_injectStyles,
  null,
  "51360803"
  
)

/* harmony default export */ var Badge = (Badge_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseAlert.vue?vue&type=template&id=3996ec3e&
var BaseAlertvue_type_template_id_3996ec3e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fade-transition',[(_vm.visible)?_c('div',{staticClass:"alert",class:[
      ("alert-" + _vm.type),
      { 'alert-dismissible': _vm.dismissible }
    ],attrs:{"role":"alert"}},[(!_vm.dismissible)?_vm._t("default"):[(_vm.icon || _vm.$slots.icon)?[_vm._t("icon",[_c('span',{staticClass:"alert-icon",attrs:{"data-notify":"icon"}},[_c('i',{class:_vm.icon})])])]:_vm._e(),_vm._v(" "),_c('span',{staticClass:"alert-text"},[_vm._t("default")],2),_vm._v(" "),_vm._t("dismiss-icon",[_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"alert","aria-label":"Close"},on:{"click":_vm.dismissAlert}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])])]],2):_vm._e()])}
var BaseAlertvue_type_template_id_3996ec3e_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/BaseAlert.vue?vue&type=template&id=3996ec3e&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseAlert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BaseAlertvue_type_script_lang_js_ = ({
  name: 'BaseAlert',
  components: {
    FadeTransition: external_vue2_transitions_["FadeTransition"]
  },
  props: {
    type: {
      type: String,
      default: 'default',
      description: 'Alert type'
    },
    dismissible: {
      type: Boolean,
      default: false,
      description: 'Whether alert is dismissible (closeable)'
    },
    icon: {
      type: String,
      default: '',
      description: 'Alert icon to display'
    }
  },

  data() {
    return {
      visible: true
    };
  },

  methods: {
    dismissAlert() {
      this.visible = false;
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/BaseAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_core_BaseAlertvue_type_script_lang_js_ = (BaseAlertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/BaseAlert.vue





/* normalize component */

var BaseAlert_component = Object(componentNormalizer["a" /* default */])(
  argon_core_BaseAlertvue_type_script_lang_js_,
  BaseAlertvue_type_template_id_3996ec3e_render,
  BaseAlertvue_type_template_id_3996ec3e_staticRenderFns,
  false,
  null,
  null,
  "614a7d2a"
  
)

/* harmony default export */ var BaseAlert = (BaseAlert_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseButton.vue?vue&type=template&id=34ce6b5e&scoped=true&
var BaseButtonvue_type_template_id_34ce6b5e_scoped_true_render = function () {
var _obj, _obj$1, _obj$2;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"btn",class:[
    { 'rounded-circle': _vm.round },
    { 'btn-block': _vm.block },
    { 'btn-wd': _vm.wide },
    { 'btn-icon btn-fab': _vm.icon },
    ( _obj = {}, _obj[("btn-" + _vm.type)] = _vm.type && !_vm.outline, _obj ),
    ( _obj$1 = {}, _obj$1[("btn-" + _vm.size)] = _vm.size, _obj$1 ),
    ( _obj$2 = {}, _obj$2[("btn-outline-" + _vm.type)] = _vm.outline && _vm.type, _obj$2 ),
    { 'btn-link': _vm.link },
    { disabled: _vm.disabled && _vm.tag !== 'button' }
  ],attrs:{"type":_vm.tag === 'button' ? _vm.nativeType : '',"disabled":_vm.disabled || _vm.loading},on:{"click":_vm.handleClick}},[_vm._t("loading",[(_vm.loading)?_c('i',{staticClass:"fas fa-spinner fa-spin"}):_vm._e()]),_vm._v(" "),_vm._t("default")],2)}
var BaseButtonvue_type_template_id_34ce6b5e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/BaseButton.vue?vue&type=template&id=34ce6b5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseButtonvue_type_script_lang_js_ = ({
  name: 'BaseButton',
  props: {
    tag: {
      type: String,
      default: 'button',
      description: 'Button html tag'
    },
    round: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Boolean,
      default: true
    },
    block: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: true
    },
    wide: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default',
      description: 'Button type (primary|secondary|danger etc)',
      default: null
    },
    nativeType: {
      type: String,
      default: 'button',
      description: 'Button native type (e.g button, input etc)',
      default: null
    },
    size: {
      type: String,
      default: '',
      description: 'Button size (sm|lg)'
    },
    outline: {
      type: Boolean,
      description: 'Whether button is outlined (only border has color)',
      default: false
    },
    link: {
      type: Boolean,
      description: 'Whether button is a link (no borders or background)',
      default: false
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/BaseButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_core_BaseButtonvue_type_script_lang_js_ = (BaseButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/BaseButton.vue



function BaseButton_injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BaseButton_component = Object(componentNormalizer["a" /* default */])(
  argon_core_BaseButtonvue_type_script_lang_js_,
  BaseButtonvue_type_template_id_34ce6b5e_scoped_true_render,
  BaseButtonvue_type_template_id_34ce6b5e_scoped_true_staticRenderFns,
  false,
  BaseButton_injectStyles,
  "34ce6b5e",
  "7cec679a"
  
)

/* harmony default export */ var BaseButton = (BaseButton_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Inputs/BaseCheckbox.vue?vue&type=template&id=528662e4&
var BaseCheckboxvue_type_template_id_528662e4_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-control custom-checkbox",class:[
    {disabled: _vm.disabled},
    ( _obj = {}, _obj[("custom-checkbox-" + _vm.type)] = _vm.type, _obj ),_vm.inlineClass]},[_vm._ssrNode("<input"+(_vm._ssrAttr("id",_vm.cbId))+(_vm._ssrAttr("aria-label",_vm.ariaLabel))+(_vm._ssrAttr("disabled",_vm.disabled))+" type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:(_vm.model)))+(_vm._ssrClass("custom-control-input",_vm.inputClasses))+"> "),_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.cbId))+" class=\"custom-control-label\">","</label>",[_vm._t("default",[(_vm.inline)?_c('span',[_vm._v(" ")]):_vm._e()])],2)],2)}
var BaseCheckboxvue_type_template_id_528662e4_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Inputs/BaseCheckbox.vue?vue&type=template&id=528662e4&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Inputs/BaseCheckbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseCheckboxvue_type_script_lang_js_ = ({
  name: 'BaseCheckbox',
  model: {
    prop: 'checked'
  },
  props: {
    checked: {
      type: [Array, Boolean],
      description: 'Whether checkbox is checked',
      default: null
    },
    disabled: {
      type: Boolean,
      description: 'Whether checkbox is disabled',
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    },
    inline: {
      type: Boolean,
      description: 'Whether checkbox is inline',
      default: null
    },
    inputClasses: {
      type: [String, Object, Array],
      description: 'Checkbox input classes',
      default: null
    },
    type: {
      type: String,
      description: 'Checkbox type (e.g info, danger etc)',
      default: null
    }
  },

  data() {
    return {
      cbId: '',
      touched: false
    };
  },

  computed: {
    model: {
      get() {
        return this.checked;
      },

      set(check) {
        if (!this.touched) {
          this.touched = true;
        }

        this.$emit('input', check);
      }

    },

    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
    }

  },

  created() {
    this.cbId = Math.random().toString(16).slice(2);
  }

});
// CONCATENATED MODULE: ./components/argon-core/Inputs/BaseCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inputs_BaseCheckboxvue_type_script_lang_js_ = (BaseCheckboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/Inputs/BaseCheckbox.vue





/* normalize component */

var BaseCheckbox_component = Object(componentNormalizer["a" /* default */])(
  Inputs_BaseCheckboxvue_type_script_lang_js_,
  BaseCheckboxvue_type_template_id_528662e4_render,
  BaseCheckboxvue_type_template_id_528662e4_staticRenderFns,
  false,
  null,
  null,
  "e9ffd1cc"
  
)

/* harmony default export */ var BaseCheckbox = (BaseCheckbox_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseDropdown.vue?vue&type=template&id=0c22c762&scoped=true&
var BaseDropdownvue_type_template_id_0c22c762_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeDropDown),expression:"closeDropDown"}],tag:"component",class:[{ show: _vm.isOpen }, ("drop" + _vm.direction)],on:{"click":_vm.toggleDropDown}},[_vm._t("title-container",[_c(_vm.titleTag,{tag:"component",staticClass:"btn-rotate",class:[{'dropdown-toggle': _vm.hasToggle}, _vm.titleClasses],attrs:{"aria-expanded":_vm.isOpen,"data-toggle":"dropdown"}},[_vm._t("title",[_c('i',{class:_vm.icon}),_vm._v(" "+_vm._s(_vm.title)+"\n      ")],{"isOpen":_vm.isOpen})],2)],{"isOpen":_vm.isOpen}),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu",class:[
      { show: _vm.isOpen },
      { 'dropdown-menu-right': _vm.menuOnRight },
      _vm.menuClasses
    ]},[_vm._t("default")],2)],2)}
var BaseDropdownvue_type_template_id_0c22c762_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/BaseDropdown.vue?vue&type=template&id=0c22c762&scoped=true&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseDropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseDropdownvue_type_script_lang_js_ = ({
  name: 'BaseDropdown',
  props: {
    tag: {
      type: String,
      default: 'div',
      description: 'Dropdown html tag (e.g div, ul etc)'
    },
    titleTag: {
      type: String,
      default: 'button',
      description: 'Dropdown title (toggle) html tag'
    },
    title: {
      type: String,
      description: 'Dropdown title',
      default: null
    },
    direction: {
      type: String,
      default: 'down',
      // up | down
      description: 'Dropdown menu direction (up|down)'
    },
    icon: {
      type: String,
      description: 'Dropdown icon',
      default: null
    },
    titleClasses: {
      type: [String, Object, Array],
      description: 'Title css classes',
      default: null
    },
    menuClasses: {
      type: [String, Object],
      description: 'Menu css classes',
      default: null
    },
    menuOnRight: {
      type: Boolean,
      description: 'Whether menu should appear on the right',
      default: null
    },
    hasToggle: {
      type: Boolean,
      description: 'Whether dropdown has arrow icon shown',
      default: true
    }
  },

  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
      this.$emit('change', this.isOpen);
    },

    closeDropDown() {
      this.isOpen = false;
      this.$emit('change', false);
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/BaseDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_core_BaseDropdownvue_type_script_lang_js_ = (BaseDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/BaseDropdown.vue



function BaseDropdown_injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BaseDropdown_component = Object(componentNormalizer["a" /* default */])(
  argon_core_BaseDropdownvue_type_script_lang_js_,
  BaseDropdownvue_type_template_id_0c22c762_scoped_true_render,
  BaseDropdownvue_type_template_id_0c22c762_scoped_true_staticRenderFns,
  false,
  BaseDropdown_injectStyles,
  "0c22c762",
  "0a93a95c"
  
)

/* harmony default export */ var BaseDropdown = (BaseDropdown_component.exports);
// EXTERNAL MODULE: ./components/argon-core/BaseHeader.vue + 4 modules
var BaseHeader = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Inputs/BaseInput.vue?vue&type=template&id=60dfe8e8&
var BaseInputvue_type_template_id_60dfe8e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_vm._t("label",[(_vm.label)?_c('label',{class:_vm.labelClasses},[_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")]):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,[
      {'input-group': _vm.hasIcon},
      {'focused': _vm.focused},
      {'input-group-alternative': _vm.alternative},
      {'has-label': _vm.label || _vm.$slots.label},
      _vm.inputGroupClasses
  ]))+">","</div>",[(_vm.prependIcon || _vm.$slots.prepend)?_vm._ssrNode("<div class=\"input-group-prepend\">","</div>",[_vm._ssrNode("<span class=\"input-group-text\">","</span>",[_vm._t("prepend",[_c('i',{class:_vm.prependIcon})])],2)]):_vm._e(),_vm._ssrNode(" "),_vm._t("default",[_c('input',_vm._g(_vm._b({staticClass:"form-control",class:[{'is-valid': _vm.valid === true}, {'is-invalid': _vm.error}, _vm.inputClasses],attrs:{"type":_vm.type,"valid":!_vm.error,"required":_vm.required},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners))],null,_vm.slotData),_vm._ssrNode(" "),(_vm.appendIcon || _vm.$slots.append)?_vm._ssrNode("<div class=\"input-group-append\">","</div>",[_vm._ssrNode("<span class=\"input-group-text\">","</span>",[_vm._t("append",[_c('i',{class:_vm.appendIcon})])],2)]):_vm._e(),_vm._ssrNode(" "),_vm._t("infoBlock"),_vm._ssrNode(" "),_vm._t("error",[(_vm.error)?_c('div',{staticClass:"invalid-feedback",staticStyle:{"display":"block"}},[_vm._v("\n        "+_vm._s(_vm.error)+"\n      ")]):_vm._e()]),_vm._ssrNode(" "),_vm._t("success",[(!_vm.error && _vm.valid)?_c('div',{staticClass:"valid-feedback"},[_vm._v("\n        "+_vm._s(_vm.successMessage)+"\n      ")]):_vm._e()])],2)],2)}
var BaseInputvue_type_template_id_60dfe8e8_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Inputs/BaseInput.vue?vue&type=template&id=60dfe8e8&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Inputs/BaseInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseInputvue_type_script_lang_js_ = ({
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    required: {
      type: Boolean,
      description: 'Whether input is required (adds an asterix *)',
      default: true
    },
    group: {
      type: Boolean,
      description: 'Whether input is an input group (manual override in special cases)',
      default: null
    },
    valid: {
      type: Boolean,
      description: 'Whether is valid',
      default: undefined
    },
    alternative: {
      type: Boolean,
      description: 'Whether input is of alternative layout',
      default: false
    },
    label: {
      type: String,
      description: 'Input label (text before input)',
      default: null
    },
    error: {
      type: String,
      description: 'Input error (below input)',
      default: null
    },
    successMessage: {
      type: String,
      description: 'Input success message',
      default: 'Looks good!'
    },
    labelClasses: {
      type: String,
      description: 'Input label css classes',
      default: 'form-control-label'
    },
    inputClasses: {
      type: String,
      description: 'Input css classes',
      default: null
    },
    inputGroupClasses: {
      type: String,
      description: 'Input group css classes',
      default: null
    },
    value: {
      type: [String, Number],
      description: 'Input value',
      default: null
    },
    type: {
      type: String,
      description: 'Input type',
      default: 'text'
    },
    appendIcon: {
      type: String,
      description: 'Append icon (right)',
      default: null
    },
    prependIcon: {
      type: String,
      description: 'Prepend icon (left)',
      default: null
    }
  },

  data() {
    return {
      focused: false
    };
  },

  computed: {
    listeners() {
      return { ...this.$listeners,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur
      };
    },

    slotData() {
      return {
        focused: this.focused,
        error: this.error,
        ...this.listeners
      };
    },

    hasIcon() {
      const {
        append,
        prepend
      } = this.$slots;
      return append !== undefined || prepend !== undefined || this.appendIcon !== undefined || this.prependIcon !== undefined || this.group;
    }

  },
  methods: {
    updateValue(evt) {
      let value = evt.target.value;
      this.$emit('input', value);
    },

    onFocus(evt) {
      this.focused = true;
      this.$emit('focus', evt);
    },

    onBlur(evt) {
      this.focused = false;
      this.$emit('blur', evt);
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/Inputs/BaseInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inputs_BaseInputvue_type_script_lang_js_ = (BaseInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/Inputs/BaseInput.vue





/* normalize component */

var BaseInput_component = Object(componentNormalizer["a" /* default */])(
  Inputs_BaseInputvue_type_script_lang_js_,
  BaseInputvue_type_template_id_60dfe8e8_render,
  BaseInputvue_type_template_id_60dfe8e8_staticRenderFns,
  false,
  null,
  null,
  "459f7383"
  
)

/* harmony default export */ var BaseInput = (BaseInput_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BasePagination.vue?vue&type=template&id=7ad0f4e1&
var BasePaginationvue_type_template_id_7ad0f4e1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"pagination",class:[_vm.size && ("pagination-" + _vm.size), _vm.align && ("justify-content-" + _vm.align)]},[_vm._ssrNode("<li"+(_vm._ssrClass("page-item prev-page",{disabled: _vm.value === 1}))+"><a aria-label=\"Previous\" class=\"page-link\"><span aria-hidden=\"true\"><i aria-hidden=\"true\" class=\"fa fa-angle-left\"></i></span></a></li> "+(_vm._ssrList((_vm.range(_vm.minPage, _vm.maxPage)),function(item){return ("<li"+(_vm._ssrClass("page-item",{active: _vm.value === item}))+"><a class=\"page-link\">"+_vm._ssrEscape(_vm._s(item))+"</a></li>")}))+" <li"+(_vm._ssrClass("page-item next-page",{disabled: _vm.value === _vm.totalPages}))+"><a aria-label=\"Next\" class=\"page-link\"><span aria-hidden=\"true\"><i aria-hidden=\"true\" class=\"fa fa-angle-right\"></i></span></a></li>")])}
var BasePaginationvue_type_template_id_7ad0f4e1_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/BasePagination.vue?vue&type=template&id=7ad0f4e1&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BasePagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasePaginationvue_type_script_lang_js_ = ({
  name: 'BasePagination',
  props: {
    pageCount: {
      type: Number,
      default: 0,
      description: 'Pagination page count. This should be specified in combination with perPage'
    },
    perPage: {
      type: Number,
      default: 10,
      description: 'Pagination per page. Should be specified with total or pageCount'
    },
    total: {
      type: Number,
      default: 0,
      description: 'Can be specified instead of pageCount. The page count in this case will be total/perPage'
    },
    value: {
      type: Number,
      default: 1,
      description: 'Pagination value'
    },
    size: {
      type: String,
      default: '',
      description: 'Pagination size'
    },
    align: {
      type: String,
      default: '',
      description: 'Pagination alignment (e.g center|start|end)'
    }
  },

  data() {
    return {
      defaultPagesToDisplay: 5
    };
  },

  computed: {
    totalPages() {
      if (this.pageCount > 0) return this.pageCount;

      if (this.total > 0) {
        return Math.ceil(this.total / this.perPage);
      }

      return 1;
    },

    pagesToDisplay() {
      if (this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay) {
        return this.totalPages;
      }

      return this.defaultPagesToDisplay;
    },

    minPage() {
      if (this.value >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        const newMaxPage = pagesToAdd + this.value;

        if (newMaxPage > this.totalPages) {
          return this.totalPages - this.pagesToDisplay + 1;
        }

        return this.value - pagesToAdd;
      } else {
        return 1;
      }
    },

    maxPage() {
      if (this.value >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        const newMaxPage = pagesToAdd + this.value;

        if (newMaxPage < this.totalPages) {
          return newMaxPage;
        } else {
          return this.totalPages;
        }
      } else {
        return this.pagesToDisplay;
      }
    }

  },
  watch: {
    perPage() {
      this.$emit('input', 1);
    },

    total() {
      this.$emit('input', 1);
    }

  },
  methods: {
    range(min, max) {
      let arr = [];

      for (let i = min; i <= max; i++) {
        arr.push(i);
      }

      return arr;
    },

    changePage(item) {
      this.$emit('input', item);
    },

    nextPage() {
      if (this.value < this.totalPages) {
        // this.$emit('input', this.value + 1)
        this.$emit('next', true);
      }
    },

    prevPage() {
      if (this.value > 1) {
        // this.$emit('input', this.value - 1)
        this.$emit('prev', true);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/BasePagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_core_BasePaginationvue_type_script_lang_js_ = (BasePaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/BasePagination.vue





/* normalize component */

var BasePagination_component = Object(componentNormalizer["a" /* default */])(
  argon_core_BasePaginationvue_type_script_lang_js_,
  BasePaginationvue_type_template_id_7ad0f4e1_render,
  BasePaginationvue_type_template_id_7ad0f4e1_staticRenderFns,
  false,
  null,
  null,
  "33148c1b"
  
)

/* harmony default export */ var BasePagination = (BasePagination_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseProgress.vue?vue&type=template&id=d91cf86e&
var BaseProgressvue_type_template_id_d91cf86e_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[(_vm.showLabel)?_vm._ssrNode("<div"+(_vm._ssrClass(null,("progress-" + _vm.type)))+">","</div>",[_vm._ssrNode("<div class=\"progress-label\">","</div>",[_vm._t("label",[_c('span',[_vm._v(_vm._s(_vm.label))])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"progress-percentage\">","</div>",[_vm._t("default",[_c('span',[_vm._v(_vm._s(_vm.value)+"%")])])],2)],2):_vm._e(),_vm._ssrNode(" <div"+(_vm._ssrClass("progress",[( _obj = {}, _obj[("progress-" + _vm.size)] = _vm.size, _obj ), _vm.progressClasses]))+(_vm._ssrStyle(null,("height: " + _vm.height + "px"), null))+"><div"+(_vm._ssrAttr("aria-valuenow",_vm.value))+" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\""+(_vm._ssrClass("progress-bar",_vm.computedClasses))+(_vm._ssrStyle(null,("width: " + _vm.value + "%;"), null))+"></div></div>")],2)}
var BaseProgressvue_type_template_id_d91cf86e_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/BaseProgress.vue?vue&type=template&id=d91cf86e&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseProgress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseProgressvue_type_script_lang_js_ = ({
  name: 'BaseProgress',
  props: {
    striped: {
      type: Boolean,
      description: 'Whether progress is striped',
      default: false
    },
    animated: {
      type: Boolean,
      description: 'Whether progress is animated (works only with `striped` prop together)',
      default: false
    },
    label: {
      type: String,
      description: 'Progress label (shown on the left above progress)',
      default: null
    },
    height: {
      type: Number,
      default: 3,
      description: 'Progress line height'
    },
    type: {
      type: String,
      default: 'default',
      description: 'Progress type (e.g danger, primary etc)'
    },
    showLabel: {
      type: Boolean,
      default: false
    },
    progressClasses: {
      type: [Array, String],
      default: '',
      description: 'Progress css classes'
    },
    size: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0,
      validator: value => {
        return value >= 0 && value <= 100;
      },
      description: 'Progress value'
    }
  },
  computed: {
    computedClasses() {
      return [{
        'progress-bar-striped': this.striped
      }, {
        'progress-bar-animated': this.animated
      }, {
        [`bg-${this.type}`]: this.type
      }];
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/BaseProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_core_BaseProgressvue_type_script_lang_js_ = (BaseProgressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/BaseProgress.vue



function BaseProgress_injectStyles (context) {
  
  
}

/* normalize component */

var BaseProgress_component = Object(componentNormalizer["a" /* default */])(
  argon_core_BaseProgressvue_type_script_lang_js_,
  BaseProgressvue_type_template_id_d91cf86e_render,
  BaseProgressvue_type_template_id_d91cf86e_staticRenderFns,
  false,
  BaseProgress_injectStyles,
  null,
  "91318924"
  
)

/* harmony default export */ var BaseProgress = (BaseProgress_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Inputs/BaseRadio.vue?vue&type=template&id=3ba0e49d&
var BaseRadiovue_type_template_id_3ba0e49d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-control custom-radio",class:[_vm.inlineClass, { disabled: _vm.disabled }]},[_vm._ssrNode("<input"+(_vm._ssrAttr("id",_vm.cbId))+(_vm._ssrAttr("disabled",_vm.disabled))+" type=\"radio\""+(_vm._ssrAttr("value",_vm.name))+(_vm._ssrAttr("checked",_vm._q(_vm.model,_vm.name)))+" class=\"custom-control-input\"> "),_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.cbId))+" class=\"custom-control-label\">","</label>",[_vm._t("default",[(_vm.inline)?_c('span',[_vm._v(" ")]):_vm._e()])],2)],2)}
var BaseRadiovue_type_template_id_3ba0e49d_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Inputs/BaseRadio.vue?vue&type=template&id=3ba0e49d&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Inputs/BaseRadio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseRadiovue_type_script_lang_js_ = ({
  name: 'BaseRadio',
  props: {
    name: {
      type: [String, Number],
      description: 'Radio label',
      default: null
    },
    disabled: {
      type: Boolean,
      description: 'Whether radio is disabled',
      default: false
    },
    value: {
      type: [String, Boolean],
      description: 'Radio value',
      default: null
    },
    inline: {
      type: Boolean,
      description: 'Whether radio is inline',
      default: null
    }
  },

  data() {
    return {
      cbId: ''
    };
  },

  computed: {
    model: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit('input', value);
      }

    },

    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }

      return '';
    }

  },

  created() {
    this.cbId = Math.random().toString(16).slice(2);
  }

});
// CONCATENATED MODULE: ./components/argon-core/Inputs/BaseRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inputs_BaseRadiovue_type_script_lang_js_ = (BaseRadiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/Inputs/BaseRadio.vue





/* normalize component */

var BaseRadio_component = Object(componentNormalizer["a" /* default */])(
  Inputs_BaseRadiovue_type_script_lang_js_,
  BaseRadiovue_type_template_id_3ba0e49d_render,
  BaseRadiovue_type_template_id_3ba0e49d_staticRenderFns,
  false,
  null,
  null,
  "b3e6a198"
  
)

/* harmony default export */ var BaseRadio = (BaseRadio_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseSwitch.vue?vue&type=template&id=ceb50382&
var BaseSwitchvue_type_template_id_ceb50382_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"custom-toggle",class:_vm.switchClass},[_vm._ssrNode("<input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:(_vm.model)))+"> <span"+(_vm._ssrAttr("data-label-off",_vm.offText))+(_vm._ssrAttr("data-label-on",_vm.onText))+" class=\"custom-toggle-slider rounded-circle\"></span>")])}
var BaseSwitchvue_type_template_id_ceb50382_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/BaseSwitch.vue?vue&type=template&id=ceb50382&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/BaseSwitch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseSwitchvue_type_script_lang_js_ = ({
  name: 'BaseSwitch',
  props: {
    value: {
      type: [Array, Boolean],
      default: null
    },
    type: {
      type: String,
      default: null
    },
    onText: {
      type: String,
      default: 'Yes'
    },
    offText: {
      type: String,
      default: 'No'
    }
  },
  computed: {
    switchClass() {
      let baseClass = 'custom-toggle-';

      if (this.type) {
        return baseClass + this.type;
      }

      return '';
    },

    model: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit('input', value);
      }

    }
  },
  methods: {
    triggerToggle() {
      this.model = !this.model;
    }

  }
});
// CONCATENATED MODULE: ./components/argon-core/BaseSwitch.vue?vue&type=script&lang=js&
 /* harmony default export */ var argon_core_BaseSwitchvue_type_script_lang_js_ = (BaseSwitchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/BaseSwitch.vue



function BaseSwitch_injectStyles (context) {
  
  
}

/* normalize component */

var BaseSwitch_component = Object(componentNormalizer["a" /* default */])(
  argon_core_BaseSwitchvue_type_script_lang_js_,
  BaseSwitchvue_type_template_id_ceb50382_render,
  BaseSwitchvue_type_template_id_ceb50382_staticRenderFns,
  false,
  BaseSwitch_injectStyles,
  null,
  "d110e996"
  
)

/* harmony default export */ var BaseSwitch = (BaseSwitch_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Cards/Card.vue?vue&type=template&id=a2e2c860&
var Cardvue_type_template_id_a2e2c860_render = function () {
var _obj, _obj$1, _obj$2;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",class:[
    {'card-lift--hover': _vm.hover},
    {'shadow': _vm.shadow},
    ( _obj = {}, _obj[("shadow-" + _vm.shadowSize)] = _vm.shadowSize, _obj ),
    ( _obj$1 = {}, _obj$1[("bg-gradient-" + _vm.gradient)] = _vm.gradient, _obj$1 ),
    ( _obj$2 = {}, _obj$2[("bg-" + _vm.type)] = _vm.type, _obj$2 )
  ]},[_vm._t("image"),_vm._ssrNode(" "),(_vm.$slots.header)?_vm._ssrNode("<div"+(_vm._ssrClass("card-header",_vm.headerClasses))+">","</div>",[_vm._t("header")],2):_vm._e(),_vm._ssrNode(" "),(!_vm.noBody)?_vm._ssrNode("<div"+(_vm._ssrClass("card-body",_vm.bodyClasses))+">","</div>",[_vm._t("default")],2):_vm._e(),_vm._ssrNode(" "),(_vm.noBody)?_vm._t("default"):_vm._e(),_vm._ssrNode(" "),(_vm.$slots.footer)?_vm._ssrNode("<div"+(_vm._ssrClass("card-footer",_vm.footerClasses))+">","</div>",[_vm._t("footer")],2):_vm._e()],2)}
var Cardvue_type_template_id_a2e2c860_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Cards/Card.vue?vue&type=template&id=a2e2c860&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Cards/Card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  name: 'Card',
  props: {
    type: {
      type: String,
      description: 'Card type',
      default: null
    },
    gradient: {
      type: String,
      description: 'Card background gradient type (warning,danger etc)',
      default: null
    },
    hover: {
      type: Boolean,
      description: 'Whether card should move on hover',
      default: null
    },
    shadow: {
      type: Boolean,
      description: 'Whether card has shadow',
      default: null
    },
    shadowSize: {
      type: String,
      description: 'Card shadow size',
      default: null
    },
    noBody: {
      type: Boolean,
      default: false,
      description: 'Whether card should have wrapper body class'
    },
    bodyClasses: {
      type: [String, Object, Array],
      description: 'Card body css classes',
      default: null
    },
    headerClasses: {
      type: [String, Object, Array],
      description: 'Card header css classes',
      default: null
    },
    footerClasses: {
      type: [String, Object, Array],
      description: 'Card footer css classes',
      default: null
    }
  }
});
// CONCATENATED MODULE: ./components/argon-core/Cards/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/Cards/Card.vue



function Card_injectStyles (context) {
  
  
}

/* normalize component */

var Card_component = Object(componentNormalizer["a" /* default */])(
  Cards_Cardvue_type_script_lang_js_,
  Cardvue_type_template_id_a2e2c860_render,
  Cardvue_type_template_id_a2e2c860_staticRenderFns,
  false,
  Card_injectStyles,
  null,
  "738b2cac"
  
)

/* harmony default export */ var Card = (Card_component.exports);
// EXTERNAL MODULE: ./components/argon-core/Breadcrumb/RouteBreadcrumb.vue + 14 modules
var RouteBreadcrumb = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Cards/StatsCard.vue?vue&type=template&id=426d3786&
var StatsCardvue_type_template_id_426d3786_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('card',{staticClass:"card-stats",attrs:{"show-footer-line":true}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col"},[_vm._t("default",[(_vm.title)?_c('h5',{staticClass:"card-title text-uppercase text-muted mb-0"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "),(_vm.subTitle)?_c('span',{staticClass:"h2 font-weight-bold mb-0"},[_vm._v(_vm._s(_vm.subTitle))]):_vm._e()])],2),_vm._v(" "),(_vm.$slots.icon || _vm.icon)?_c('div',{staticClass:"col-auto"},[_vm._t("icon",[_c('div',{staticClass:"icon icon-shape text-white rounded-circle shadow",class:[("bg-" + _vm.type), _vm.iconClasses]},[_c('i',{class:_vm.icon})])])],2):_vm._e()]),_vm._v(" "),_c('p',{staticClass:"mt-3 mb-0 text-sm"},[_vm._t("footer")],2)])}
var StatsCardvue_type_template_id_426d3786_staticRenderFns = []


// CONCATENATED MODULE: ./components/argon-core/Cards/StatsCard.vue?vue&type=template&id=426d3786&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/argon-core/Cards/StatsCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var StatsCardvue_type_script_lang_js_ = ({
  name: 'StatsCard',
  components: {
    Card: Card
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    subTitle: {
      type: String,
      default: null
    },
    iconClasses: {
      type: [String, Array],
      default: null
    }
  }
});
// CONCATENATED MODULE: ./components/argon-core/Cards/StatsCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_StatsCardvue_type_script_lang_js_ = (StatsCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/argon-core/Cards/StatsCard.vue



function StatsCard_injectStyles (context) {
  
  
}

/* normalize component */

var StatsCard_component = Object(componentNormalizer["a" /* default */])(
  Cards_StatsCardvue_type_script_lang_js_,
  StatsCardvue_type_template_id_426d3786_render,
  StatsCardvue_type_template_id_426d3786_staticRenderFns,
  false,
  StatsCard_injectStyles,
  null,
  "6038fae3"
  
)

/* harmony default export */ var StatsCard = (StatsCard_component.exports);
// CONCATENATED MODULE: ./plugins/dashboard/globalComponents.js


























/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

external_vue_default.a.component(Badge.name, Badge);
external_vue_default.a.component(BaseAlert.name, BaseAlert);
external_vue_default.a.component(BaseButton.name, BaseButton);
external_vue_default.a.component(BaseCheckbox.name, BaseCheckbox);
external_vue_default.a.component(BaseHeader["a" /* default */].name, BaseHeader["a" /* default */]);
external_vue_default.a.component(BaseInput.name, BaseInput);
external_vue_default.a.component(BaseDropdown.name, BaseDropdown);
external_vue_default.a.component(BaseNav["a" /* default */].name, BaseNav["a" /* default */]);
external_vue_default.a.component(BasePagination.name, BasePagination);
external_vue_default.a.component(BaseProgress.name, BaseProgress);
external_vue_default.a.component(BaseRadio.name, BaseRadio);
external_vue_default.a.component(BaseSwitch.name, BaseSwitch);
external_vue_default.a.component(Card.name, Card);
external_vue_default.a.component(Modal["a" /* default */].name, Modal["a" /* default */]);
external_vue_default.a.component(StatsCard.name, StatsCard);
external_vue_default.a.component(RouteBreadcrumb["a" /* default */].name, RouteBreadcrumb["a" /* default */]);
external_vue_default.a.component(lib_input_default.a.name, lib_input_default.a);
external_vue_default.a.use(lib_tooltip_default.a);
external_vue_default.a.use(lib_popover_default.a);
// CONCATENATED MODULE: ./plugins/dashboard/dashboard-plugin.js
// Polyfills for js features used in the Dashboard but not supported in some browsers (mainly IE)
 // Notifications plugin. Used on Notifications page

 // Validation plugin used to validate forms

 // Sidebar on the right. Used as a local plugin in DashboardLayout.vue


 // element ui language configuration





locale_default.a.use(en_default.a);
external_vue_default.a.use(argon_core_SidebarPlugin);
external_vue_default.a.use(NotificationPlugin);
external_vue_default.a.use(external_vee_validate_, {
  fieldsBagName: 'veeFields',
  classes: true,
  validity: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(10);

// CONCATENATED MODULE: ./plugins/services/auth.js
/* harmony default export */ var auth = (function (ctx, inject) {
  const AuthLocal = {
    forgotPassword: email => {
      return ctx.$axios.post('/password/forgot', {
        email
      }).then(res => {
        return res;
      });
    },
    resetPassword: (token, password) => {
      return ctx.$axios.post('/password/reset', {
        token,
        password
      }).then(res => {
        return res;
      });
    }
  };
  ctx.$authLocal = AuthLocal;
  inject('authLocal', AuthLocal);
});
// CONCATENATED MODULE: ./plugins/services/activity.js
/* harmony default export */ var activity = (function (ctx, inject) {
  const subdomain = () => ctx.route.params.space;

  const Activity = {
    getSummary(query) {
      return ctx.$axios.$get(`${subdomain()}/summary${query}`);
    },

    getAllActivities() {
      return ctx.$axios.$get(`${subdomain()}/activities?sort=-created_at`);
    },

    getAllBookings: () => {
      return ctx.$axios.get(`${subdomain()}/rooms/bookings/admin`);
    }
  };
  ctx.$activity = Activity, inject('activity', Activity);
});
// CONCATENATED MODULE: ./plugins/services/wellness.js
/* harmony default export */ var wellness = (function (ctx, inject) {
  let baseUrl = () => {
    return `${ctx.route.params.space}/wellness`;
  };

  const Wellness = {
    getAllWellnessSessions: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`/${baseUrl()}`);
      }

      return ctx.$axios.get(link);
    },
    addWellnessSession: payload => {
      return ctx.$axios.post(`${baseUrl()}`, payload);
    },
    createWellnessSession: payload => {
      return ctx.$axios.post(`/${baseUrl()}-categories`, payload);
    },
    getAWellnessSession: id => {
      return ctx.$axios.get(`/${baseUrl()}/${id}`);
    },
    updateWellnessSession: (id, payload) => {
      return ctx.$axios.patch(`/${baseUrl()}/${id}`, payload);
    },
    deleteWellnessSession: id => {
      return ctx.$axios.delete(`/${baseUrl()}/${id}`);
    },
    getAllWellnessBookings: id => {
      return ctx.$axios.get(`${baseUrl()}/${id}/bookings`);
    },
    cancelWellnessBooking: id => {
      return ctx.$axios.delete(`${baseUrl()}/${id}/bookings`);
    },
    getWellnessCategories: (link = null) => {
      if (link) {
        return ctx.$axios.get(link);
      }

      return ctx.$axios.get(`${baseUrl()}-categories`);
    },
    getAWellnessCategory: id => {
      return ctx.$axios.get(`${baseUrl()}-categories/${id}`);
    },
    updateWellnessCategory: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl()}-categories/${id}`, payload);
    },
    deleteWellnessCategory: id => {
      return ctx.$axios.delete(`${baseUrl()}-categories/${id}`);
    },
    updateWellnessSlots: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl()}/${id}/slots`, payload);
    },
    getWellnessByDate: date => {
      return ctx.$axios.get(`${baseUrl()}?filter[start_date]=${date}`);
    },
    getWellnessByName: name => {
      return ctx.$axios.get(`${baseUrl()}?filter[search]=${name}`);
    },
    getAllBookings: (id, link = null) => {
      if (link) {
        return ctx.$axios.get(link);
      }

      return ctx.$axios.get(`${baseUrl()}/${id}/bookings`);
    },
    cancelABooking: (wellnessId, bookingId) => {
      return ctx.$axios.delete(`${baseUrl()}/${wellnessId}/bookings/${bookingId}`);
    }
  };
  ctx.$wellness = Wellness, inject('wellness', Wellness);
});
// CONCATENATED MODULE: ./plugins/services/event.js
/* harmony default export */ var services_event = (function (ctx, inject) {
  // const subdomain() = ctx.route.params.space
  const subdomain = () => {
    return ctx.route.params.space;
  };

  const Event = {
    addEvent: payload => {
      return ctx.$axios.$post(`/${subdomain()}/events`, payload);
    },
    deleteEvent: eventId => {
      return ctx.$axios.$delete(`/${subdomain()}/events/${eventId}`);
    },
    updateEvent: (id, payload) => {
      return ctx.$axios.put(`/${subdomain()}/events/${id}`, payload);
    },
    getEvent: eventId => {
      return ctx.$axios.$get(`/${subdomain()}/events/${eventId}`);
    },

    getEvents() {
      return ctx.$axios.$get(`/${subdomain()}/events`);
    },

    addCategory(payload) {
      return ctx.$axios.$post(`/${subdomain()}/event-categories`, payload);
    },

    updateCategory(eventId, payload) {
      return ctx.$axios.$patch(`/${subdomain()}/event-categories/${eventId}`, payload);
    },

    getEventCategories() {
      return ctx.$axios.$get(`/${subdomain()}/event-categories`);
    },

    deleteCategory(eventId) {
      return ctx.$axios.delete(`/${subdomain()}/event-categories/${eventId}`);
    },

    getRooms() {
      return ctx.$axios.get(`/${subdomain()}/admin/rooms`);
    },

    getAttendees(eventId = null, link = null) {
      if (!eventId) {
        return ctx.$axios.get(link);
      }

      return ctx.$axios.get(`/${subdomain()}/events/${eventId}/attendees`);
    },

    exportAttendees: eventId => {
      return ctx.$axios.$get(`/${subdomain()}/events/${eventId}/attendee-export-csv`);
    },

    purchaseTicketByAdmin(eventId, payload) {
      return ctx.$axios.post(`/${subdomain()}/events/${eventId}/purchase-ticket`, payload);
    },

    cancelTicket(eventId, payload) {
      return ctx.$axios.delete(`/${subdomain()}/events/${eventId}/cancel-ticket`, payload);
    },

    getMemberships() {
      return ctx.$axios.get(`/${subdomain()}/memberships`);
    },

    getEventsByDate(startDate, endDate) {
      return ctx.$axios.get(`/${subdomain()}/events?filter[starts_on_and_from]=${startDate}`);
    },

    getEventsByName(name) {
      return ctx.$axios.get(`/${subdomain()}/events?filter[search]=${name}`);
    },

    searchAttendees(eventId, term) {
      return ctx.$axios.$get(`/${subdomain()}/events/${eventId}/attendees?filter[search]=${term}`);
    },

    sendAppreciation(eventId, payload) {
      return ctx.$axios.$put(`/${subdomain()}/events/${eventId}/post-event-notify`, payload);
    }

  };
  ctx.$event = Event, inject('event', Event);
});
// CONCATENATED MODULE: ./plugins/services/images.js
/* harmony default export */ var services_images = (function (ctx, inject) {
  const subdomain = ctx.route.params.space;
  const baseUrl = `/upload`;
  const Image = {
    getSignedUrl: (service, mime_type) => {
      return ctx.$axios.post(baseUrl, {
        service,
        mime_type
      });
    }
  };
  ctx.$images = Image, inject('images', Image);
});
// CONCATENATED MODULE: ./plugins/services/plans.js
/* harmony default export */ var plans = (function (ctx, inject) {
  const subdomain = () => ctx.route.params.space;

  const Plan = {
    getAllPlans: () => {
      return ctx.$axios.$get(`/${subdomain()}/plans`);
    },

    getAllPlan(link = null) {
      if (link) {
        return ctx.$axios.get(link);
      }

      return ctx.$axios.get(`/${subdomain()}/plans`);
    },

    addPlan(payload) {
      return ctx.$axios.post(`/${subdomain()}/plans`, payload);
    },

    getPlan(planId) {
      console.log(planId + '---');
      return ctx.$axios.get(`/${subdomain()}/plans/${planId}`);
    },

    removePlan(planId) {
      return ctx.$axios.delete(`/${subdomain()}/plans/${planId}`);
    },

    updatePlan(planId, payload) {
      return ctx.$axios.patch(`/${subdomain()}/plans/${planId}`, payload);
    }

  };
  ctx.$plan = Plan, inject('plan', Plan);
});
// CONCATENATED MODULE: ./plugins/services/promotions.js
/* harmony default export */ var promotions = (function (ctx, inject) {
  const subdomain = () => ctx.route.params.space;

  const Promotion = {
    getAllPromotions: () => {
      return ctx.$axios.$get(`/${subdomain()}/promotions`);
    },

    // getAllPlan(link = null) {
    //   if (link) {
    //     return ctx.$axios.get(link)
    //   }
    //   return ctx.$axios.get(`/${subdomain()}/plans`)
    // },
    addPromotion(payload) {
      return ctx.$axios.post(`/${subdomain()}/promotions`, payload);
    },

    getPromotion(planId) {
      return ctx.$axios.get(`/${subdomain()}/promotions/${planId}`);
    },

    deletePromotion(planId) {
      return ctx.$axios.delete(`/${subdomain()}/promotions/${planId}`);
    },

    updatePromotion(planId, payload) {
      return ctx.$axios.patch(`/${subdomain()}/promotions/${planId}`, payload);
    }

  };
  ctx.$promotion = Promotion, inject('promotion', Promotion);
});
// CONCATENATED MODULE: ./plugins/services/resource.js
/* harmony default export */ var resource = (function (ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space;
  };

  const baseUrl = () => {
    return `/${subdomain()}/admin/rooms`;
  };

  const Resource = {
    getAllRooms: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`${baseUrl()}`);
      }

      return ctx.$axios.get(`${baseUrl()}${link}`); // return ctx.$axios.get(`${link}`)
    },
    getRoomResources: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`${baseUrl()}`);
      } // return ctx.$axios.


      return ctx.$axios.get(`${link}`);
    },
    getARoom: id => {
      return ctx.$axios.get(`${baseUrl()}/${id}`);
    },
    createRoom: payload => {
      return ctx.$axios.post(`${baseUrl()}`, payload);
    },
    updateRoom: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl()}/${id}`, payload);
    },
    deleteRoom: id => {
      return ctx.$axios.delete(`${baseUrl()}/${id}`);
    },
    getAllCategories: () => {
      return ctx.$axios.get(`${subdomain()}/room-categories`);
    },
    createCategory: payload => {
      return ctx.$axios.post(`${subdomain()}/room-categories`, payload);
    },
    getOneCategory: id => {
      return ctx.$axios.get(`${subdomain()}/room-categories/${id}`);
    },
    updateCategory: (id, payload) => {
      return ctx.$axios.patch(`${subdomain()}/room-categories/${id}`, payload);
    },
    deleteCategory: id => {
      return ctx.$axios.delete(`${subdomain()}/room-categories/${id}`);
    },
    getBookingForARoom: id => {
      return ctx.$axios.get(`${baseUrl()}/${id}/bookings`);
    },
    updateRoomBooking: (id, payload) => {
      return ctx.$axios.patch(`${subdomain()}/rooms/bookings/${id}/update`, payload);
    },
    cancelRoomBooking: id => {
      return ctx.$axios.delete(`${subdomain()}/rooms/bookings/${id}`);
    },
    bookRoomForMember: (id, payload) => {
      payload.payment_method = payload.payment_method || 'credit';
      return ctx.$axios.post(`${subdomain()}/rooms/${id}/book/behalf`, payload);
    },
    getAllBookings: () => {
      return ctx.$axios.get(`${subdomain()}/rooms/bookings/admin`);
    },
    getAllBookableResources: () => {
      return ctx.$axios.get(`${subdomain()}/resources`);
    },
    getBookingByDate: ({
      from,
      to
    }) => {
      return ctx.$axios.get(`${subdomain()}/rooms/bookings/admin?from=${from}&to=${to}`);
    }
  };
  ctx.$resource = Resource, inject('resource', Resource);
});
// CONCATENATED MODULE: ./plugins/services/membership.js
/* harmony default export */ var membership = (function (ctx, inject) {
  let subdomain = () => {
    return ctx.route.params.space;
  };

  const getError = e => {
    const message = e.response ? JSON.stringify(e.response.data.errors) : e.message; // ctx.$bvToast.toast(message, {
    //   title: 'Error',
    //   variant: 'error'
    // })

    return message;
  };

  const Membership = {
    getAllMemberships: (filter, link = null) => {
      if (!link) {
        return ctx.$axios.$get(`/${subdomain()}/memberships?${filter}`).catch(e => {
          getError(e);
        });
      }

      return ctx.$axios.$get(link).catch(e => {
        getError(e);
      });
    },
    getSubscriptionHistory: link => {
      return ctx.$axios.$get(`/${subdomain()}/memberships/${link}`).catch(e => {
        getError(e);
      });
    },
    getAllMembers: (filter, link = null) => {
      if (!link) {
        return ctx.$axios.$get(`/${subdomain()}/all-members`).catch(e => {
          getError(e);
        });
      }

      return ctx.$axios.$get(link).catch(e => {
        getError(e);
      });
    },
    getMemberships: link => {
      return ctx.$axios.$get(link);
    },
    getAMembership: id => {
      return ctx.$axios.$get(`/${subdomain()}/memberships/${id}?include=profile,primaryPlan,plans,subscriptions,eventsAttended,checkin`).catch(e => {
        getError(e);
      });
    },
    getPaymentMethods: id => {
      return ctx.$axios.$get(`/${subdomain()}/memberships/${id}/retrievepaymentmethods`).catch(e => {
        getError(e);
      });
    },
    addPaymentMethod: (id, payload) => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/${id}/addcard`, payload).catch(e => {
        getError(e);
      });
    },
    addFreeMonths: payload => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/addfreemonths`, payload).catch(e => {
        getError(e);
      });
    },
    getCustomCharges: payload => {
      return ctx.$axios.$post(`/${subdomain()}/membership/customcharges/get-all`, payload).catch(e => {
        getError(e);
      });
    },
    addCustomCharge: payload => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/customcharges`, payload).catch(e => {
        getError(e);
      });
    },
    editCustomCharge: payload => {
      return ctx.$axios.$patch(`/${subdomain()}/memberships/customcharges`, payload).catch(e => {
        console.log(e);
        getError(e);
      });
    },
    billCustomCharge: payload => {
      return ctx.$axios.$post(`/${subdomain()}/membership/customcharge/settle`, payload).catch(e => {
        console.log(e);
        getError(e);
      });
    },
    addCredit: payload => {
      return ctx.$axios.$post(`/${subdomain()}/deposits`, payload).catch(e => {
        getError(e);
      });
    },
    addCreditAll: payload => {
      return ctx.$axios.$post(`/${subdomain()}/deposits/all-users`, payload).catch(e => {
        getError(e);
      });
    },
    editCredit: payload => {
      return ctx.$axios.$put(`/${subdomain()}/deposits/edit`, payload).catch(e => {
        getError(e);
      });
    },
    deletePaymentMethod: (id, payload) => {
      return ctx.$axios.$delete(`/${subdomain()}/memberships/${id}/removepaymentmethod`, {
        data: payload
      }); // .catch(e => {
      //   getError(e)
      // })
    },
    addMembership: payload => {
      return ctx.$axios.$post(`/${subdomain()}/memberships`, payload);
    },
    inviteMember: id => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/${id}/invitation`);
    },
    inviteAllPendingMembers: () => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/pending/invite-all`);
    },
    deleteMembership: id => {
      return ctx.$axios.$delete(`/${subdomain()}/memberships/${id}`); // .catch(e => {
      //   getError(e)
      // })
    },
    deleteArchivedInvite: id => {
      return ctx.$axios.$delete(`/${subdomain()}/archives/${id}`); // .catch(e => {
      //   getError(e)
      // })
    },
    getSubscriptions: id => {
      return ctx.$axios.$get(`/${subdomain()}/memberships/${id}/get-subscriptions`).catch(e => {
        getError(e);
      });
    },
    getArchivedInvites: filter => {
      return ctx.$axios.$get(`/${subdomain()}/invitations/archived?${filter}`).catch(e => {
        getError(e);
      });
    },
    cancelScheduledPlanChange: (id, payload) => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/${id}/cancel-scheduled-plan-change`, payload).catch(e => {
        getError(e);
      });
    },
    changeSubscriptionRenewalState: (id, payload) => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/${id}/change-subscription-renewal-state`, payload).catch(e => {
        getError(e);
      });
    },
    changeFreeRenewalState: (id, payload) => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/${id}/change-free-renewal-state`, payload).catch(e => {
        getError(e);
      });
    },
    cancelSubscription: (id, plan) => {
      return ctx.$axios.$delete(`/${subdomain()}/memberships/${id}/cancelplan`, {
        data: plan
      });
    },
    addPlan: (id, payload) => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/${id}/addplan`, payload);
    },
    changePlan: (id, payload) => {
      return ctx.$axios.$patch(`/${subdomain()}/memberships/${id}/changeplan`, payload);
    },
    changePlanBulk: payload => {
      return ctx.$axios.$patch(`/${subdomain()}/memberships/changeplan-bulk`, payload);
    },
    editGuests: (id, payload) => {
      return ctx.$axios.$patch(`/${subdomain()}/memberships/${id}/guests`, payload).catch(e => {
        getError(e);
      });
    },
    getAllNotes: (id, link = null) => {
      if (link) {
        return ctx.$axios.$get(link).catch(e => getError(e));
      }

      return ctx.$axios.$get(`/${subdomain()}/memberships/${id}/notes`).catch(e => getError(e));
    },
    getANote: (id, noteId) => {
      return ctx.$axios.$get(`/${subdomain()}/memberships/${id}/notes/${noteId}`).catch(e => getError(e));
    },
    updateNote: (id, noteId, payload) => {
      return ctx.$axios.$patch(`/${subdomain()}/memberships/${id}/notes/${noteId}`, payload).catch(e => getError(e));
    },
    addNote: (id, payload) => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/${id}/notes`, payload).catch(e => getError(e));
    },
    deleteNote: (id, noteId) => {
      return ctx.$axios.$delete(`/${subdomain()}/memberships/${id}/notes/${noteId}`).catch(e => getError(e));
    },
    updateMembership: (id, payload) => {
      return ctx.$axios.$patch(`/${subdomain()}/memberships/${id}`, payload);
    },
    updateProfile: payload => {
      return ctx.$axios.$post(`/onboarding/update-profile`, payload).catch(e => {
        ctx.error({
          statusCode: e.statusCode,
          message: e.response.data.message
        });
      });
    },
    getPaidFor: id => {
      return ctx.$axios.$get(`/${subdomain()}/memberships/${id}/paid-for`);
    },
    expiringSubscriptions: day => {
      return ctx.$axios.$get(`/${subdomain()}/expiring-subscriptions/${day}`);
    },
    subscribedToPlan: plan_id => {
      return ctx.$axios.$get(`/${subdomain()}/expiring-subscriptions/0?plan=${plan_id}`);
    },
    renewSubscription: (id, data) => {
      return ctx.$axios.$post(`/${subdomain()}/memberships/${id}/renew-subscription`, data);
    },
    onboardBrivo: id => {
      return ctx.$axios.$put(`/${subdomain()}/memberships/${id}/onboard-brivo`);
    },
    export: () => {
      return ctx.$axios.$get(`/${subdomain()}/file-export-invited`);
    },
    exportDirectory: () => {
      return ctx.$axios.$get(`/${subdomain()}/file-export-directory`);
    },
    makePlanPrimary: (id, data) => {
      return ctx.$axios.$put(`/${subdomain()}/memberships/${id}/make-plan-primary`, data);
    }
  };
  ctx.$membership = Membership, inject('membership', Membership);
});
// CONCATENATED MODULE: ./plugins/services/community.js

/* harmony default export */ var community = (function (ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space;
  };

  const baseUrl = () => {
    return `/${subdomain()}/community/feeds`;
  };

  const Community = {
    getAllFeeds: () => {
      return ctx.$axios.get(`${baseUrl()}`);
    },
    createFeed: payload => {
      const checkinFilter = `?filter[status]=checkin&filter[checkin_timestamp]=${external_moment_default()().format('YYYY-MM-DD')},${external_moment_default()().add(1, 'days').format('YYYY-MM-DD')}&sort=-id`;
      console.log(checkinFilter);
      return ctx.$axios.post(`${baseUrl()}${checkinFilter}`, payload);
    },
    updateFeed: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl()}/${id}`, payload);
    },
    deleteFeed: id => {
      return ctx.$axios.delete(`${baseUrl()}/${id}`);
    }
  };
  ctx.$community = Community, inject('community', Community);
});
// CONCATENATED MODULE: ./plugins/services/emails.js
/* harmony default export */ var emails = (function (ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space;
  };

  const baseUrl = `/${subdomain()}/emails`;

  const getError = e => {
    ctx.error({
      statusCode: e.statusCode,
      message: e.response ? JSON.stringify(e.response.data) : e.message
    });
  };

  const Email = {
    getAllEmails: () => {
      return ctx.$axios.$get(baseUrl).catch(e => {
        getError(e);
      });
    },
    getSingleEmail: id => {
      return ctx.$axios.$get(`${baseUrl}/${id}`).catch(e => {
        getError(e);
      });
    },
    createEmail: payload => {
      return ctx.$axios.$post(baseUrl, payload);
    }
  };
  ctx.$email = Email;
  inject('email', Email);
});
// CONCATENATED MODULE: ./plugins/services/tags.js
/* harmony default export */ var tags = (function (ctx, inject) {
  const subdomain = () => ctx.route.params.space;

  const Tag = {
    getAllTags(page = null) {
      if (page) {
        return ctx.$axios.get(`/tags?page=${page}`);
      }

      return ctx.$axios.get(`/tags`);
    },

    removeTag(tagType, payload) {
      return ctx.$axios.delete(`/tags/${tagType}`, payload);
    },

    updateTag(tagType, payload) {
      return ctx.$axios.patch(`/tags/${tagType}`, payload);
    },

    addTag(payload) {
      return ctx.$axios.post('/tags', payload);
    }

  };
  ctx.$tag = Tag, inject('tag', Tag);
});
// CONCATENATED MODULE: ./plugins/services/table.js
/* harmony default export */ var table = (function (ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space;
  };

  const baseUrl = () => {
    return `/${subdomain()}/reservations`;
  };

  const Table = {
    getAllTables: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`${baseUrl()}`);
      }

      return ctx.$axios.get(link);
    },
    createTable: payload => {
      return ctx.$axios.post(baseUrl(), payload);
    },
    getOneTable: id => {
      return ctx.$axios.get(`${baseUrl()}/${id}`);
    },
    updateTable: (id, payload) => {
      return ctx.$axios.put(`${baseUrl()}/${id}/update`, payload);
    },
    deleteTable: id => {
      return ctx.$axios.delete(`${baseUrl()}/${id}/delete`);
    },
    getOneTableBookings: id => {
      return ctx.$axios.post(`${subdomain()}/${id}/bookings`);
    },
    updateTableBookings: (id, payload) => {
      return ctx.$axios.put(`${subdomain()}/booking-reservations/${id}/update`, payload);
    },
    bookTableForMember: (id, payload) => {
      return ctx.$axios.post(`${subdomain()}/reservations/${id}/behalf`, payload);
    },
    getTableBookingByDate: ({
      from,
      to
    }) => {
      return ctx.$axios.get(`${subdomain()}/booking-reservations/all?from=${from}&to=${to}`);
    }
  };
  ctx.$table = Table, inject('table', Table);
});
// CONCATENATED MODULE: ./plugins/services/admin.js
/* harmony default export */ var admin = (function (ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space;
  };

  const baseUrl = `/${subdomain()}/admins`;

  const getError = e => {
    return e.response ? JSON.stringify(e.response.data) : e.message;
  };

  const Admin = {
    getAllAdmins: (link = null) => {
      if (link) {
        return ctx.$axios.$get(link);
      }

      return ctx.$axios.$get(`${subdomain()}/admins`);
    },
    getAnAdmin: id => {
      return ctx.$axios.$get(`${baseUrl}/${id}`);
    },
    updateAnAdmin: (id, payload) => {
      return ctx.$axios.$patch(`${baseUrl}/${id}`, payload);
    },
    deleteAnAdmin: id => {
      return ctx.$axios.$delete(`${baseUrl}/${id}`);
    },
    addAnAdmin: payload => {
      return ctx.$axios.$post(baseUrl, payload);
    }
  };
  ctx.$admin = Admin, inject('admin', Admin);
});
// CONCATENATED MODULE: ./plugins/services/checkin.js
/* harmony default export */ var checkin = (function (ctx, inject) {
  const subdomain = `${ctx.route.params.space}/checkins`;
  const Checkin = {
    checkins: filter => {
      return ctx.$axios.$get(`${subdomain}${filter}`);
    },
    checkin: payload => {
      return ctx.$axios.$post(subdomain, payload);
    },
    checkout: (id, payload) => {
      return ctx.$axios.$patch(`${subdomain}/${id}`, payload);
    },
    exportCheckins: filter => {
      return ctx.$axios.$get(`/${ctx.route.params.space}/file-export-checkin-history${filter}`);
    },
    settings: link => {
      return ctx.$axios.$get(link);
    },
    saveSetting: (subdomain, payload) => {
      return ctx.$axios.$post(`${subdomain}/checkin-settings`, payload);
    },
    deleteSetting: (subdomain, id) => {
      return ctx.$axios.$delete(`${subdomain}/checkin-settings/${id}`);
    }
  };
  ctx.$checkin = Checkin;
  inject('checkin', Checkin);
});
// CONCATENATED MODULE: ./plugins/services/company.js
/* harmony default export */ var company = (function (ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space;
  };

  const Company = {
    addCompany(payload) {
      return ctx.$axios.$post(`/${subdomain()}/companies`, payload);
    },

    getCompanies(link = null) {
      if (link) return ctx.$axios.$get(link);
      return ctx.$axios.$get(`/${subdomain()}/companies`);
    },

    getCompanyByName(name) {
      return ctx.$axios.$get(`/${subdomain()}/companies/?filter[search]=${name}`);
    },

    removeOneCompany(companyId) {
      return ctx.$axios.$delete(`/${subdomain()}/companies/${companyId}`);
    },

    getOneCompany(companyId) {
      return ctx.$axios.$get(`/${subdomain()}/companies/${companyId}`);
    },

    updateOneCompany(companyId, payload) {
      return ctx.$axios.put(`/${subdomain()}/companies/${companyId}`, payload);
    }

  };
  ctx.$company = Company, inject('company', Company);
});
// CONCATENATED MODULE: ./plugins/services/invoice.js
/* harmony default export */ var invoice = (function (ctx, inject) {
  const subdomain = () => {
    return ctx.route.params.space;
  };

  const baseUrl = () => {
    return `/${subdomain()}/invoices`;
  };

  const Invoice = {
    getAllInvoice: (link = null) => {
      if (!link) {
        return ctx.$axios.get(`${baseUrl()}`);
      }

      return ctx.$axios.get(link);
    },
    getOneInvoice: id => {
      return ctx.$axios.get(`${baseUrl()}/${id}`);
    },
    createInvoice: payload => {
      return ctx.$axios.post(`${baseUrl()}`, payload);
    },
    updateInvoice: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl()}/${id}`, payload);
    },
    finalizeInvoice: (id, payload) => {
      return ctx.$axios.post(`${baseUrl()}/${id}/finalize`, payload);
    },
    addItemToInvoice: (id, payload) => {
      return ctx.$axios.post(`${baseUrl()}/${id}/add-item`, payload);
    },
    updateInvoiceItem: (id, payload) => {
      return ctx.$axios.patch(`${baseUrl()}/${id}/update-item`, payload);
    },
    deleteInvoiceItem: (id, payload) => {
      return ctx.$axios.delete(`${baseUrl()}/${id}/delete-item`, {
        data: payload
      });
    },
    writeOffInvoice: id => {
      return ctx.$axios.post(`${baseUrl()}/${id}/writeoff`);
    },
    filterUnpaid: month => {
      return ctx.$axios.get(`${baseUrl()}?filter[created_at]=${month}`);
    },
    sendInvoice: id => {
      return ctx.$axios.post(`${baseUrl()}/${id}/send-invoice`);
    },
    searchInvoice: name => {
      return ctx.$axios.get(`${baseUrl()}?filter[search]=${name}`);
    }
  };
  ctx.$invoice = Invoice, inject('invoice', Invoice);
});
// CONCATENATED MODULE: ./plugins/services/eatry.js
/* harmony default export */ var eatry = (function (ctx, inject) {
  const subdomain = () => ctx.route.params.space;

  const Eatry = {
    getAllEatryCategories(link) {
      if (link) return ctx.$axios.$get(link);
      return ctx.$axios.$get(`/${subdomain()}/eatry-categories`);
    },

    addOneCategory(payload) {
      return ctx.$axios.$post(`/${subdomain()}/eatry-categories`, payload);
    },

    removeOneCategory(categoryId) {
      return ctx.$axios.$delete(`/${subdomain()}/eatry-categories/${categoryId}`);
    },

    updateOneCategory(categoryId, payload) {
      return ctx.$axios.$patch(`/${subdomain()}/eatry-categories/${categoryId}`, payload);
    },

    addOneEatry(payload) {
      return ctx.$axios.$post(`/${subdomain()}/eatries/create`, payload);
    },

    getOneEatry(eatryId) {
      return ctx.$axios.$get(`/${subdomain()}/eatries/${eatryId}`);
    },

    getAllEatries(link) {
      if (link) return ctx.$axios.$get(link);
      return ctx.$axios.$get(`/${subdomain()}/eatries`);
    },

    updateOneEatry(eatryId, payload) {
      return ctx.$axios.$put(`/${subdomain()}/eatries/${eatryId}/update`, payload);
    },

    deleteOneEatry(eatryId) {
      return ctx.$axios.$delete(`/${subdomain()}/eatries/${eatryId}/delete`);
    },

    getAllOrderedEatries() {
      return ctx.$axios.$get(`/${subdomain()}/eatry-orders`);
    }

  };
  ctx.$eatry = Eatry, inject('eatry', Eatry);
});
// CONCATENATED MODULE: ./plugins/services/space.js
/* harmony default export */ var space = (function (ctx, inject) {
  const Space = {
    updateOneSpace: (spaceId, payload) => {
      return ctx.$axios.$patch(`/spaces/${spaceId}`, payload);
    }
  };
  ctx.$space = Space, inject('space', Space);
});
// CONCATENATED MODULE: ./plugins/services/settings.js
/* harmony default export */ var settings = (function (ctx, inject) {
  const Settings = {
    changePassword: payload => {
      return ctx.$axios.$patch(`/user/change-password`, payload);
    }
  };
  ctx.$settings = Settings;
  inject('settings', Settings);
});
// CONCATENATED MODULE: ./plugins/services/zoomrooms.js
/* harmony default export */ var zoomrooms = (function (ctx, inject) {
  const subdomain = () => ctx.route.params.space;

  const ZoomRooms = {
    getRooms() {
      return ctx.$axios.$get(`/zoom-rooms`);
    }

  };
  ctx.$zoomrooms = ZoomRooms, inject('zoomrooms', ZoomRooms);
});
// CONCATENATED MODULE: ./plugins/services/accesspoint.js
/* harmony default export */ var accesspoint = (function (ctx, inject) {
  const subdomain = () => ctx.route.params.space;

  const accesspoint = {
    list() {
      return ctx.$axios.$get(`/access-points`);
    }

  };
  ctx.$accesspoint = accesspoint, inject('accesspoint', accesspoint);
});
// EXTERNAL MODULE: external "vue2-filters"
var external_vue2_filters_ = __webpack_require__(40);
var external_vue2_filters_default = /*#__PURE__*/__webpack_require__.n(external_vue2_filters_);

// CONCATENATED MODULE: ./plugins/vue2-filters.js


external_vue_default.a.use(external_vue2_filters_default.a);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(28);

// CONCATENATED MODULE: ./.nuxt/auth/utilities.js
const isUnset = o => typeof o === 'undefined' || o === null;
const isSet = o => !isUnset(o);
const isSameURL = (a, b) => a.split('?')[0].replace(/\/+$/, '') === b.split('?')[0].replace(/\/+$/, '');
const isRelativeURL = u => u && u.length && /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u);
const parseQuery = queryString => {
  const query = {};
  const pairs = queryString.split('&');

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query;
};
const encodeQuery = queryObject => {
  return Object.entries(queryObject).filter(([key, value]) => typeof value !== 'undefined').map(([key, value]) => encodeURIComponent(key) + (value != null ? '=' + encodeURIComponent(value) : '')).join('&');
};
const routeOption = (route, key, value) => {
  return route.matched.some(m => {
    if (false) {} else {
      // SSR
      return Object.values(m.components).some(component => Object.values(component._Ctor).some(ctor => ctor.options && ctor.options[key] === value));
    }
  });
};
const utilities_getMatchedComponents = (route, matches = false) => {
  return [].concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).map(function (key) {
      matches && matches.push(index);
      return m.components[key];
    });
  }));
};
function normalizePath(path = '') {
  // Remove query string
  let result = path.split('?')[0]; // Remove redundant / from the end of path

  if (result.charAt(result.length - 1) === '/') {
    result = result.slice(0, -1);
  }

  return result;
}
function encodeValue(val) {
  if (typeof val === 'string') {
    return val;
  }

  return JSON.stringify(val);
}
function decodeValue(val) {
  // Try to parse as json
  if (typeof val === 'string') {
    try {
      return JSON.parse(val);
    } catch (_) {}
  } // Return as is


  return val;
}
/**
 * Get property defined by dot notation in string.
 * Based on  https://github.com/dy/dotprop (MIT)
 *
 * @param  {Object} holder   Target object where to look property up
 * @param  {string} propName Dot notation, like 'this.a.b.c'
 * @return {*}          A property value
 */

function getProp(holder, propName) {
  if (!propName || !holder) {
    return holder;
  }

  if (propName in holder) {
    return holder[propName];
  }

  const propParts = Array.isArray(propName) ? propName : (propName + '').split('.');
  let result = holder;

  while (propParts.length && result) {
    result = result[propParts.shift()];
  }

  return result;
}
// CONCATENATED MODULE: ./.nuxt/auth/storage.js



class storage_Storage {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;

    this._initState();
  } // ------------------------------------
  // Universal
  // ------------------------------------


  setUniversal(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeUniversal(key);
    } // Local state


    this.setState(key, value); // Cookies

    this.setCookie(key, value); // Local Storage

    this.setLocalStorage(key, value);
    return value;
  }

  getUniversal(key) {
    // Local state
    let value = this.getState(key); // Cookies

    if (isUnset(value)) {
      value = this.getCookie(key);
    } // Local Storage


    if (isUnset(value)) {
      value = this.getLocalStorage(key);
    }

    return value;
  }

  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);

    if (isUnset(value) && isSet(defaultValue)) {
      value = defaultValue;
    }

    if (isSet(value)) {
      this.setUniversal(key, value);
    }

    return value;
  }

  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  } // ------------------------------------
  // Local state (reactive)
  // ------------------------------------


  _initState() {
    // Private state is suitable to keep information not being exposed to Vuex store
    // This helps prevent stealing token from SSR response HTML
    external_vue_default.a.set(this, '_state', {}); // Use vuex for local state's if possible

    this._useVuex = this.options.vuex && this.ctx.store;

    if (this._useVuex) {
      const storeModule = {
        namespaced: true,
        state: () => this.options.initialState,
        mutations: {
          SET(state, payload) {
            external_vue_default.a.set(state, payload.key, payload.value);
          }

        }
      };
      this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
      });
      this.state = this.ctx.store.state[this.options.vuex.namespace];
    } else {
      external_vue_default.a.set(this, 'state', {});
    }
  }

  setState(key, value) {
    if (key[0] === '_') {
      external_vue_default.a.set(this._state, key, value);
    } else {
      if (this._useVuex) {
        this.ctx.store.commit(this.options.vuex.namespace + '/SET', {
          key,
          value
        });
      } else {
        external_vue_default.a.set(this.state, key, value);
      }
    }

    return value;
  }

  getState(key) {
    if (key[0] !== '_') {
      return this.state[key];
    } else {
      return this._state[key];
    }
  }

  watchState(key, fn) {
    if (this._useVuex) {
      return this.ctx.store.watch(state => getProp(state[this.options.vuex.namespace], key), fn);
    }
  }

  removeState(key) {
    this.setState(key, undefined);
  } // ------------------------------------
  // Local storage
  // ------------------------------------


  setLocalStorage(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }

    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }

    return value;
  }

  getLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    const value = localStorage.getItem(_key);
    return decodeValue(value);
  }

  removeLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    localStorage.removeItem(_key);
  } // ------------------------------------
  // Cookies
  // ------------------------------------


  getCookies() {
    const cookieStr =  false ? undefined : this.ctx.req.headers.cookie;
    return Object(external_cookie_["parse"])(cookieStr || '') || {};
  }

  setCookie(key, value, options = {}) {
    if (!this.options.cookie ||  true && !this.ctx.res) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const _options = Object.assign({}, this.options.cookie.options, options);

    const _value = encodeValue(value); // Unset null, undefined


    if (isUnset(value)) {
      _options.maxAge = -1;
    } // Accept expires as a number for js-cookie compatiblity


    if (typeof _options.expires === 'number') {
      _options.expires = new Date(new Date() * 1 + _options.expires * 864e+5);
    }

    const serializedCookie = Object(external_cookie_["serialize"])(_key, _value, _options);

    if (false) {} else if ( true && this.ctx.res) {
      // Send Set-Cookie header from server side
      const prevCookies = this.ctx.res.getHeader('Set-Cookie');
      this.ctx.res.setHeader('Set-Cookie', [].concat(prevCookies, serializedCookie).filter(v => v));
    }

    return value;
  }

  getCookie(key) {
    if (!this.options.cookie ||  true && !this.ctx.req) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const cookies = this.getCookies();
    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : undefined;
    return decodeValue(value);
  }

  removeCookie(key, options) {
    this.setCookie(key, undefined, options);
  }

}
// CONCATENATED MODULE: ./.nuxt/auth/auth.js


class auth_Auth {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options; // Strategies

    this.strategies = {}; // Error listeners

    this._errorListeners = []; // Redirect listeners

    this._redirectListeners = []; // Storage & State

    options.initialState = {
      user: null,
      loggedIn: false
    };
    const storage = new storage_Storage(ctx, options);
    this.$storage = storage;
    this.$state = storage.state;
  }

  async init() {
    // Reset on error
    if (this.options.resetOnError) {
      this.onError((...args) => {
        if (typeof this.options.resetOnError !== 'function' || this.options.resetOnError(...args)) {
          this.reset();
        }
      });
    } // Restore strategy


    this.$storage.syncUniversal('strategy', this.options.defaultStrategy); // Set default strategy if current one is invalid

    if (!this.strategy) {
      this.$storage.setUniversal('strategy', this.options.defaultStrategy); // Give up if still invalid

      if (!this.strategy) {
        return Promise.resolve();
      }
    }

    try {
      // Call mounted for active strategy on initial load
      await this.mounted();
    } catch (error) {
      this.callOnError(error);
    } finally {
      // Watch for loggedIn changes only in client side
      if (false) {}
    }
  } // Backward compatibility


  get state() {
    if (!this._state_warn_shown) {
      this._state_warn_shown = true; // eslint-disable-next-line no-console

      console.warn('[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn');
    }

    return this.$state;
  }

  getState(key) {
    if (!this._get_state_warn_shown) {
      this._get_state_warn_shown = true; // eslint-disable-next-line no-console

      console.warn('[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn');
    }

    return this.$storage.getState(key);
  } // ---------------------------------------------------------------
  // Strategy and Scheme
  // ---------------------------------------------------------------


  get strategy() {
    return this.strategies[this.$state.strategy];
  }

  registerStrategy(name, strategy) {
    this.strategies[name] = strategy;
  }

  setStrategy(name) {
    if (name === this.$storage.getUniversal('strategy')) {
      return Promise.resolve();
    } // Set strategy


    this.$storage.setUniversal('strategy', name); // Call mounted hook on active strategy

    return this.mounted();
  }

  mounted() {
    if (!this.strategy.mounted) {
      return this.fetchUserOnce();
    }

    return Promise.resolve(this.strategy.mounted(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'mounted'
      });
      return Promise.reject(error);
    });
  }

  loginWith(name, ...args) {
    return this.setStrategy(name).then(() => this.login(...args));
  }

  login() {
    if (!this.strategy.login) {
      return Promise.resolve();
    }

    return this.wrapLogin(this.strategy.login(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'login'
      });
      return Promise.reject(error);
    });
  }

  fetchUser() {
    if (!this.strategy.fetchUser) {
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.fetchUser(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'fetchUser'
      });
      return Promise.reject(error);
    });
  }

  logout() {
    if (!this.strategy.logout) {
      this.reset();
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.logout(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'logout'
      });
      return Promise.reject(error);
    });
  }

  setUserToken(token) {
    if (!this.strategy.setUserToken) {
      this.setToken(this.strategy.name, token);
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.setUserToken(token)).catch(error => {
      this.callOnError(error, {
        method: 'setUserToken'
      });
      return Promise.reject(error);
    });
  }

  reset() {
    if (!this.strategy.reset) {
      this.setUser(false);
      this.setToken(this.$state.strategy, false);
      this.setRefreshToken(this.$state.strategy, false);
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.reset(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'reset'
      });
      return Promise.reject(error);
    });
  } // ---------------------------------------------------------------
  // Token helpers
  // ---------------------------------------------------------------


  getToken(strategy) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.getUniversal(_key);
  }

  setToken(strategy, token) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.setUniversal(_key, token);
  }

  syncToken(strategy) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.syncUniversal(_key);
  } // ---------------------------------------------------------------
  // Refresh token helpers
  // ---------------------------------------------------------------


  getRefreshToken(strategy) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.getUniversal(_key);
  }

  setRefreshToken(strategy, refreshToken) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.setUniversal(_key, refreshToken);
  }

  syncRefreshToken(strategy) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.syncUniversal(_key);
  } // ---------------------------------------------------------------
  // User helpers
  // ---------------------------------------------------------------


  get user() {
    return this.$state.user;
  }

  get loggedIn() {
    return this.$state.loggedIn;
  }

  fetchUserOnce() {
    if (!this.$state.user) {
      return this.fetchUser(...arguments);
    }

    return Promise.resolve();
  }

  setUser(user) {
    this.$storage.setState('user', user);
    this.$storage.setState('loggedIn', Boolean(user));
  } // ---------------------------------------------------------------
  // Utils
  // ---------------------------------------------------------------


  get busy() {
    return this.$storage.getState('busy');
  }

  request(endpoint, defaults, withResponse) {
    const _endpoint = typeof defaults === 'object' ? Object.assign({}, defaults, endpoint) : endpoint;

    if (!this.ctx.app.$axios) {
      // eslint-disable-next-line no-console
      console.error('[AUTH] add the @nuxtjs/axios module to nuxt.config file');
      return;
    }

    return this.ctx.app.$axios.request(_endpoint).then(response => {
      const result = _endpoint.propertyName ? getProp(response.data, _endpoint.propertyName) : response.data;

      if (withResponse) {
        return {
          response,
          result
        };
      } else {
        return result;
      }
    }).catch(error => {
      // Call all error handlers
      this.callOnError(error, {
        method: 'request'
      }); // Throw error

      return Promise.reject(error);
    });
  }

  requestWith(strategy, endpoint, defaults, withResponse) {
    const token = this.getToken(strategy);

    const _endpoint = Object.assign({}, defaults, endpoint);

    const tokenName = this.strategies[strategy].options.tokenName || 'Authorization';

    if (!_endpoint.headers) {
      _endpoint.headers = {};
    }

    if (!_endpoint.headers[tokenName] && isSet(token) && token) {
      _endpoint.headers[tokenName] = token;
    }

    return this.request(_endpoint, false, withResponse);
  }

  wrapLogin(promise) {
    this.$storage.setState('busy', true);
    this.error = null;
    return Promise.resolve(promise).then(response => {
      this.$storage.setState('busy', false);
      return response;
    }).catch(error => {
      this.$storage.setState('busy', false);
      return Promise.reject(error);
    });
  }

  onError(listener) {
    this._errorListeners.push(listener);
  }

  callOnError(error, payload = {}) {
    this.error = error;

    for (const fn of this._errorListeners) {
      fn(error, payload);
    }
  }

  redirect(name, noRouter = false) {
    if (!this.options.redirect) {
      return;
    }

    const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
    let to = this.options.redirect[name];

    if (!to) {
      return;
    } // Apply rewrites


    if (this.options.rewriteRedirects) {
      if (name === 'login' && isRelativeURL(from) && !isSameURL(to, from)) {
        this.$storage.setUniversal('redirect', from);
      }

      if (name === 'home') {
        const redirect = this.$storage.getUniversal('redirect');
        this.$storage.setUniversal('redirect', null);

        if (isRelativeURL(redirect)) {
          to = redirect;
        }
      }
    } // Call onRedirect hook


    to = this.callOnRedirect(to, from) || to; // Prevent infinity redirects

    if (isSameURL(to, from)) {
      return;
    }

    if (false) {} else {
      this.ctx.redirect(to, this.ctx.query);
    }
  }

  onRedirect(listener) {
    this._redirectListeners.push(listener);
  }

  callOnRedirect(to, from) {
    for (const fn of this._redirectListeners) {
      to = fn(to, from) || to;
    }

    return to;
  }

  hasScope(scope) {
    const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);

    if (!userScopes) {
      return false;
    }

    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }

    return Boolean(getProp(userScopes, scope));
  }

}
// CONCATENATED MODULE: ./.nuxt/auth/middleware.js



_nuxt_middleware.auth = function (ctx) {
  // Disable middleware if options: { auth: false } is set on the route
  if (routeOption(ctx.route, 'auth', false)) {
    return;
  } // Disable middleware if no route was matched to allow 404/error page


  const matches = [];
  const Components = utilities_getMatchedComponents(ctx.route, matches);

  if (!Components.length) {
    return;
  }

  const {
    login,
    callback
  } = ctx.$auth.options.redirect;
  const pageIsInGuestMode = routeOption(ctx.route, 'auth', 'guest');

  const insidePage = page => normalizePath(ctx.route.path) === normalizePath(page);

  if (ctx.$auth.$state.loggedIn) {
    // -- Authorized --
    if (!login || insidePage(login) || pageIsInGuestMode) {
      ctx.$auth.redirect('home');
    }
  } else {
    // -- Guest --
    // (Those passing `callback` at runtime need to mark their callback component
    // with `auth: false` to avoid an unnecessary redirect from callback to login)
    if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
      ctx.$auth.redirect('login');
    }
  }
};
// CONCATENATED MODULE: ./.nuxt/auth/schemes/local.js
class LocalScheme {
  constructor(auth, options) {
    this.$auth = auth;
    this.name = options._name;
    this.options = Object.assign({}, DEFAULTS, options);
  }

  _setToken(token) {
    if (this.options.globalToken) {
      // Set Authorization token for all axios requests
      this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, token);
    }
  }

  _clearToken() {
    if (this.options.globalToken) {
      // Clear Authorization token for all axios requests
      this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, false);
    }
  }

  mounted() {
    if (this.options.tokenRequired) {
      const token = this.$auth.syncToken(this.name);

      this._setToken(token);
    }

    return this.$auth.fetchUserOnce();
  }

  async login(endpoint) {
    if (!this.options.endpoints.login) {
      return;
    } // Ditch any leftover local tokens before attempting to log in


    await this.$auth.reset();
    const {
      response,
      result
    } = await this.$auth.request(endpoint, this.options.endpoints.login, true);

    if (this.options.tokenRequired) {
      const token = this.options.tokenType ? this.options.tokenType + ' ' + result : result;
      this.$auth.setToken(this.name, token);

      this._setToken(token);
    }

    if (this.options.autoFetchUser) {
      await this.fetchUser();
    }

    return response;
  }

  async setUserToken(tokenValue) {
    const token = this.options.tokenType ? this.options.tokenType + ' ' + tokenValue : tokenValue;
    this.$auth.setToken(this.name, token);

    this._setToken(token);

    return this.fetchUser();
  }

  async fetchUser(endpoint) {
    // Token is required but not available
    if (this.options.tokenRequired && !this.$auth.getToken(this.name)) {
      return;
    } // User endpoint is disabled.


    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return;
    } // Try to fetch user and then set


    const user = await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user);
    this.$auth.setUser(user);
  }

  async logout(endpoint) {
    // Only connect to logout endpoint if it's configured
    if (this.options.endpoints.logout) {
      await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.logout).catch(() => {});
    } // But reset regardless


    return this.$auth.reset();
  }

  async reset() {
    if (this.options.tokenRequired) {
      this._clearToken();
    }

    this.$auth.setUser(false);
    this.$auth.setToken(this.name, false);
    this.$auth.setRefreshToken(this.name, false);
    return Promise.resolve();
  }

}
const DEFAULTS = {
  tokenRequired: true,
  tokenType: 'Bearer',
  globalToken: true,
  tokenName: 'Authorization',
  autoFetchUser: true
};
// CONCATENATED MODULE: ./.nuxt/auth/plugin.js

 // Active schemes


/* harmony default export */ var auth_plugin = (function (ctx, inject) {
  // Options
  const options = {
    "resetOnError": false,
    "scopeKey": "scope",
    "rewriteRedirects": true,
    "fullPathRedirect": false,
    "watchLoggedIn": true,
    "redirect": {
      "login": "/auth/login",
      "logout": "/auth/login",
      "home": "/",
      "callback": "/auth/login"
    },
    "vuex": {
      "namespace": "auth"
    },
    "cookie": {
      "prefix": "auth.",
      "options": {
        "path": "/"
      }
    },
    "localStorage": {
      "prefix": "auth."
    },
    "token": {
      "prefix": "_token."
    },
    "refresh_token": {
      "prefix": "_refresh_token."
    },
    "defaultStrategy": "local"
  }; // Create a new Auth instance

  const $auth = new auth_Auth(ctx, options); // Register strategies
  // local

  $auth.registerStrategy('local', new LocalScheme($auth, {
    "endpoints": {
      "login": {
        "url": "/login",
        "method": "post",
        "propertyName": "data.access_token"
      },
      "logout": {
        "url": "/logout",
        "method": "get"
      },
      "user": {
        "url": "/user",
        "method": "get",
        "propertyName": "data"
      }
    },
    "tokenRequired": true,
    "tokenType": "Bearer",
    "_name": "local"
  })); // Inject it to nuxt context as $auth

  inject('auth', $auth);
  ctx.$auth = $auth; // Initialize auth

  return $auth.init().catch(error => {
    if (false) {}
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./bootstrap-vue.js (mode: 'all')

 // Source: ./rollbar-client.js (mode: 'all')

 // Source: ./moment.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ../plugins/dashboard/dashboard-plugin (mode: 'all')

 // Source: ../plugins/dashboard/full-calendar (mode: 'client')

 // Source: ../plugins/vue-quill (mode: 'client')

 // Source: ../plugins/services/auth (mode: 'all')

 // Source: ../plugins/services/activity (mode: 'all')

 // Source: ../plugins/services/wellness (mode: 'all')

 // Source: ../plugins/services/event (mode: 'all')

 // Source: ../plugins/services/images (mode: 'all')

 // Source: ../plugins/services/plans (mode: 'all')

 // Source: ../plugins/services/promotions (mode: 'all')

 // Source: ../plugins/services/resource (mode: 'all')

 // Source: ../plugins/services/membership (mode: 'all')

 // Source: ../plugins/services/community (mode: 'all')

 // Source: ../plugins/services/emails (mode: 'all')

 // Source: ../plugins/services/tags (mode: 'all')

 // Source: ../plugins/services/table (mode: 'all')

 // Source: ../plugins/services/admin (mode: 'all')

 // Source: ../plugins/services/checkin (mode: 'all')

 // Source: ../plugins/services/company (mode: 'all')

 // Source: ../plugins/services/invoice (mode: 'all')

 // Source: ../plugins/services/eatry (mode: 'all')

 // Source: ../plugins/services/space (mode: 'all')

 // Source: ../plugins/services/settings (mode: 'all')

 // Source: ../plugins/services/zoomrooms (mode: 'all')

 // Source: ../plugins/services/accesspoint (mode: 'all')

 // Source: ../plugins/vue2-datepicker (mode: 'client')

 // Source: ../plugins/vue2-filters (mode: 'all')

 // Source: ../plugins/tui-editor (mode: 'client')

 // Source: ./auth/plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "SHACK15 CRM",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "SHACK15 is a new kind of social space dedicated to entrepreneurship, community, and big ideas"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.6.3\u002Fcss\u002Fall.css",
        "integrity": "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s\u002F",
        "crossorigin": "anonymous"
      }],
      "script": [{
        "src": "https:\u002F\u002Fweb.squarecdn.com\u002Fv1\u002Fsquare.js",
        "body": true
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof rollbar_client === 'function') {
    await rollbar_client(app.context, inject);
  }

  if (typeof moment === 'function') {
    await moment(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/dashboard/dashboard-plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/dashboard/dashboard-plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (typeof auth === 'function') {
    await auth(app.context, inject);
  }

  if (typeof activity === 'function') {
    await activity(app.context, inject);
  }

  if (typeof wellness === 'function') {
    await wellness(app.context, inject);
  }

  if (typeof services_event === 'function') {
    await services_event(app.context, inject);
  }

  if (typeof services_images === 'function') {
    await services_images(app.context, inject);
  }

  if (typeof plans === 'function') {
    await plans(app.context, inject);
  }

  if (typeof promotions === 'function') {
    await promotions(app.context, inject);
  }

  if (typeof resource === 'function') {
    await resource(app.context, inject);
  }

  if (typeof membership === 'function') {
    await membership(app.context, inject);
  }

  if (typeof community === 'function') {
    await community(app.context, inject);
  }

  if (typeof emails === 'function') {
    await emails(app.context, inject);
  }

  if (typeof tags === 'function') {
    await tags(app.context, inject);
  }

  if (typeof table === 'function') {
    await table(app.context, inject);
  }

  if (typeof admin === 'function') {
    await admin(app.context, inject);
  }

  if (typeof checkin === 'function') {
    await checkin(app.context, inject);
  }

  if (typeof company === 'function') {
    await company(app.context, inject);
  }

  if (typeof invoice === 'function') {
    await invoice(app.context, inject);
  }

  if (typeof eatry === 'function') {
    await eatry(app.context, inject);
  }

  if (typeof space === 'function') {
    await space(app.context, inject);
  }

  if (typeof settings === 'function') {
    await settings(app.context, inject);
  }

  if (typeof zoomrooms === 'function') {
    await zoomrooms(app.context, inject);
  }

  if (typeof accesspoint === 'function') {
    await accesspoint(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue2-filters.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue2-filters.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof auth_plugin === 'function') {
    await auth_plugin(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = ["auth"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/option");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/select");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/table-column");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/table");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dropdown-menu");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dropdown-item");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/dropdown");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tag");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/drawer");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("vue-qrcode-reader");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map