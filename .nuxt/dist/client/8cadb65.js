(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{320:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},329:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));var r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e.response)return o(e.response.data.message,n),void(e.response.data.errors&&t.each(e.response.data.errors,(function(e,i){return t.each(e,(function(t,e){return o(t,n)}))})));o(e.message,n)},o=function(t,e){console.log("------------------------------------"),console.log(t),console.log("------------------------------------"),e&&e.$bvToast.toast(t,{title:"Error",variant:"danger"})}}).call(this,n(204))},367:function(t,e,n){"use strict";(function(t){n(9),n(3),n(7),n(6),n(5),n(8);var r=n(0),o=(n(40),n(12)),c=n(320),l=n(42),d=n(329);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={layout:"ShackDash",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$checkin,r=t.store,o=r.state.space.currentSpace.subdomain,e.next=4,n.settings("".concat(o,"/checkin-settings")).then((function(t){return{data:t.data}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()},components:{MainTitle:c.a},data:function(){return{loading:!1,fields:[{key:"type",label:"Membership Type"},{key:"option",label:"Number of Guests"},{key:"action",label:""}],setting:{option:"1",type:""}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({options:function(t){return t.memberships.prefix_type},currentSpace:function(t){return t.space.currentSpace}})),methods:{getLabel:function(data){var label="";return t.each(this.options,(function(t,i){t.value===data.value&&(label=t.text)})),label},showErrors:function(t){this.loading=!this.loading,Object(d.a)(t),this.$bvToast.toast("Something went wrong at our end",{variant:"danger",title:"Error"})},editSetting:function(data){this.setting=data.item,this.$bvModal.show("modal-1")},saveSetting:function(){var t=this;this.loading=!this.loading;var e=this.currentSpace.subdomain;this.$checkin.saveSetting(e,this.setting).then((function(e){location.reload(),t.$bvToast.toast("Setting saved successfully",{variant:"success",title:"Success"})})).catch((function(t){}))},deleteSetting:function(data){var t=this,e=this.currentSpace.subdomain;confirm("Are you sure?")&&this.$checkin.deleteSetting(e,data.item.id).then((function(e){t.$bvToast.toast("Setting deleted successfully",{variant:"success",title:"Success"}),location.reload()})).catch((function(e){t.showErrors(e)}))}}}}).call(this,n(204))},550:function(t,e,n){"use strict";n.r(e);var r=n(367).a,o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header",{staticClass:"pb-6",attrs:{type:""}},[n("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[n("MainTitle",{attrs:{title:"Check-in",subtitle:"Settings"}}),t._v(" "),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{id:"add-setting-modal",variant:"primary"}},[t._v("New Setting")])],1)]),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("b-card",{attrs:{"no-body":""}},[n("b-table",{attrs:{items:t.data,fields:t.fields,striped:"",hover:"","show-empty":""},scopedSlots:t._u([{key:"cell(type)",fn:function(data){return[n("span",[t._v(t._s(t.getLabel(data)))])]}},{key:"cell(action)",fn:function(data){return[n("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.editSetting(data)}}},[t._v("Edit")]),t._v(" "),n("b-button",{staticClass:"text-danger",attrs:{variant:"transparent",size:"sm"},on:{click:function(e){return t.deleteSetting(data)}}},[n("i",{staticClass:"ti ti-trash"}),t._v(" Remove")])]}}])})],1)],1)]),t._v(" "),n("b-button",{staticClass:"mb-2 text-primary",attrs:{variant:"transparent"},on:{click:function(e){return t.$router.go(-1)}}},[n("i",{staticClass:"fas fa-chevron-left"}),t._v(" Back")])],1),t._v(" "),n("b-modal",{attrs:{id:"modal-1",static:!0,title:"Settings","hide-footer":""}},[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.saveSetting(e)}}},[n("b-form-group",{attrs:{label:"Membership Type"}},[n("b-form-select",{attrs:{options:t.options,required:!0},scopedSlots:t._u([{key:"first",fn:function(){return[n("option",{attrs:{value:"",disabled:""}},[t._v("-- Choose a membership --")])]},proxy:!0}]),model:{value:t.setting.type,callback:function(e){t.$set(t.setting,"type",e)},expression:"setting.type"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Number of Guests",description:"This is the number of guests the membership type can bring to the space as a general guest"}},[n("b-form-input",{attrs:{required:!0,placeholder:"1",type:"number"},model:{value:t.setting.option,callback:function(e){t.$set(t.setting,"option",e)},expression:"setting.option"}})],1),t._v(" "),n("b-button",{staticClass:"float-right",attrs:{disabled:t.loading,type:"submit",variant:"primary"}},[t._v("Save")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);