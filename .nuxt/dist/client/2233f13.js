(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{320:function(o,e,t){"use strict";var n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},r=t(11),component=Object(r.a)(n,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("h1",{staticClass:"page-title"},[t("span",[o._v(o._s(o.title))]),o._v(" "),t("b",{directives:[{name:"show",rawName:"v-show",value:o.subtitle,expression:"subtitle"}]},[o._v("•")]),o._v(" "+o._s(o.subtitle))])}),[],!1,null,null,null);e.a=component.exports},520:function(o,e,t){"use strict";t.r(e);t(9),t(3),t(7),t(6),t(5),t(8);var n,r=t(0),l=(t(323),t(115),t(324)),c=t.n(l),d=(t(17),t(325),t(326)),m=t.n(d),v=t(116),f=t(320),_=t(42);function h(object,o){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(object,o).enumerable}))),e.push.apply(e,t)}return e}var k={layout:"ShackDash",components:(n={BaseHeader:v.a,MainTitle:f.a},Object(r.a)(n,m.a.name,m.a),Object(r.a)(n,c.a.name,c.a),n),data:function(){return{promotion:{name:"",expires_on:"",type:"",amount:0,allowed_usage_areas:[],state:"active"},bookingRooms:!1,orderingFoodAndDrinks:!1,bookingEvents:!1,loading:!1,promotionTypes:[{name:"Free Credit",value:"credit",key:"#1"}]}},computed:function(o){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(o,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(source,e))}))}return o}({},Object(_.b)({space:function(o){return o.space.currentSpace}})),methods:{addPlan:function(){var o=this,e=this.promotion.name;this.promotion.allowed_usage_areas=JSON.stringify(this.promotion.allowed_usage_areas),this.loading=!this.loading,this.$promotion.addPromotion(this.promotion).then((function(t){t.data.data;o.$bvToast.toast("Promotion ~".concat(e,"~ created successfully"),{title:"Success",variant:"success",solid:!0}),o.loading=!o.loading,o.$router.push({name:"space-promotions"})})).catch((function(e){var t=e.response?JSON.stringify(e.response.data.errors):e.message;o.$bvToast.toast(t,{title:"Error",variant:"danger",solid:!0}),o.loading=!o.loading}))},bookingRoomsSelected:function(o){if(o)this.promotion.allowed_usage_areas.push("room_booking");else{var e=this.promotion.allowed_usage_areas.indexOf("room_booking");this.promotion.allowed_usage_areas.splice(e,1)}},orderingFoodAndDrinksSelected:function(o){if(o)this.promotion.allowed_usage_areas.push("food_and_drinks_ordering");else{var e=this.promotion.allowed_usage_areas.indexOf("food_and_drinks_ordering");this.promotion.allowed_usage_areas.splice(e,1)}},bookingEventsSelected:function(o){if(o)this.promotion.allowed_usage_areas.push("event_booking");else{var e=this.promotion.allowed_usage_areas.indexOf("event_booking");this.promotion.allowed_usage_areas.splice(e,1)}}}},y=t(11),component=Object(y.a)(k,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("b-form",{on:{submit:function(e){return e.preventDefault(),o.addPlan(e)}}},[t("base-header",{staticClass:"pb-6",attrs:{type:""}},[t("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[t("MainTitle",{attrs:{title:"Promotion"}}),o._v(" "),t("b-button",{staticClass:"btn btn-primary text-white",attrs:{disabled:o.loading,type:"submit"}},[o._v("Add Promotion")])],1)]),o._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"card-deck flex-column flex-xl-row"},[t("card",[t("h3",{staticClass:"mr-b-20"},[o._v("Promotion Details")]),o._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"row pd-r-20"},[t("base-input",{staticClass:"col-md-12",attrs:{id:"name",label:"Name of Promotion",placeholder:"Entrepreneur",required:""},model:{value:o.promotion.name,callback:function(e){o.$set(o.promotion,"name",e)},expression:"promotion.name"}}),o._v(" "),t("b-form-group",{staticClass:"col-md-12",attrs:{label:"Promotion Is Allowed In:"}},[t("b-row",[t("b-col",{attrs:{md:"10"}},[t("b-form-checkbox",{attrs:{id:"bookingRooms",value:!0,"unchecked-value":!1,name:"bookingRooms"},on:{change:o.bookingRoomsSelected},model:{value:o.bookingRooms,callback:function(e){o.bookingRooms=e},expression:"bookingRooms"}},[o._v("Booking Rooms")])],1),o._v(" "),t("b-col",{attrs:{md:"10"}},[t("b-form-checkbox",{attrs:{id:"orderFoodAndDrinks",value:!0,"unchecked-value":!1,name:"orderFoodAndDrinks"},on:{change:o.orderingFoodAndDrinksSelected},model:{value:o.orderingFoodAndDrinks,callback:function(e){o.orderingFoodAndDrinks=e},expression:"orderingFoodAndDrinks"}},[o._v("Ordering Food & Drinks")])],1),o._v(" "),t("b-col",{attrs:{md:"10"}},[t("b-form-checkbox",{attrs:{id:"bookingEvents",value:!0,"unchecked-value":!1,name:"bookingEvents"},on:{change:o.bookingEventsSelected},model:{value:o.bookingEvents,callback:function(e){o.bookingEvents=e},expression:"bookingEvents"}},[o._v("Booking Events")])],1)],1)],1),o._v(" "),t("b-form-group",{staticClass:"col-md-12",attrs:{label:"Promotion Type:",description:"Only one type of a promotion can exist at any given point in time. eg: there can't be two credit type promotions existing at the same time"}},[t("el-select",{attrs:{placeholder:"Select Promotion Type"},model:{value:o.promotion.type,callback:function(e){o.$set(o.promotion,"type",e)},expression:"promotion.type"}},o._l(o.promotionTypes,(function(o){return t("el-option",{key:o.key,attrs:{label:o.name,value:o.value}})})),1)],1),o._v(" "),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Promotion Amount (USD)",description:"An amount to give for this promotion"}},[t("b-form-input",{attrs:{id:"price_per_cycle",type:"number",placeholder:"0.00",required:""},model:{value:o.promotion.amount,callback:function(e){o.$set(o.promotion,"amount",e)},expression:"promotion.amount"}})],1),o._v(" "),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Expires on",description:"when this promotion expires"}},[t("b-form-input",{attrs:{id:"cycle_duration",type:"date",label:"Charge Cycle",required:""},model:{value:o.promotion.expires_on,callback:function(e){o.$set(o.promotion,"expires_on",e)},expression:"promotion.expires_on"}})],1)],1)]),o._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"row pd-l-20"},[t("b-row",[t("div",{staticClass:"form-group col-md-12"},[t("label",{staticClass:"form-control-label",attrs:{for:"planvisibility"}},[o._v("Active")]),o._v(" "),t("b-row",[t("b-col",{attrs:{md:"10"}},[t("b-form-checkbox",{attrs:{id:"planVisibility",value:"active","unchecked-value":"inactive",name:"planVisibility"},model:{value:o.promotion.state,callback:function(e){o.$set(o.promotion,"state",e)},expression:"promotion.state"}},[o._v("Yes")]),o._v(" "),t("p",{staticClass:"text-left mt-2"},[o._v("\n                          Toggle on and off to activate or deactivate the\n                          promotion.\n                        ")])],1)],1)],1)])],1)])])])],1),o._v(" "),t("b-button",{staticClass:"text-primary mb-2",attrs:{variant:"transparent"},on:{click:function(e){return o.$router.go(-1)}}},[t("i",{staticClass:"ti-angle-left"}),o._v(" Back")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);