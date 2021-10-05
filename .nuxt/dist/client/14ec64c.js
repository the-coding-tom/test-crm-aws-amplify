(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{320:function(t,e,l){"use strict";var n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},r=l(11),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h1",{staticClass:"page-title"},[l("span",[t._v(t._s(t.title))]),t._v(" "),l("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},321:function(t,e,l){"use strict";var n={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},r=l(11),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h3",{staticClass:"page-title"},[l("span",[t._v(t._s(t.title))]),t._v(" "),l("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},399:function(t,e,l){"use strict";(function(t){l(3),l(40);var n=l(12),r=l(116),o=l(320),c=l(321);e.a={layout:"ShackDash",asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function l(){var n,r,o;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return n=e.$wellness,r=e.route,o=e.error,l.next=3,n.getAWellnessSession(r.params.id).then((function(e){var data=e.data;return{slots:t.sortBy(data.data.slots,["day","start"])}})).catch((function(t){o({statusCode:404,message:t.response?JSON.stringify(t.response.data.message):t.message})}));case 3:return l.abrupt("return",l.sent);case 4:case"end":return l.stop()}}),l)})))()},components:{BaseHeader:r.a,MainTitle:o.a,SectionTitle:c.a},data:function(){return{loading:!1,slot:{day:0,start:"08:00",duration:30,capacity:1},selects:[{text:"Sunday",value:0},{text:"Monday",value:1},{text:"Tuesday",value:2},{text:"Wednesday",value:3},{text:"Thursday",value:4},{text:"Friday",value:5},{text:"Saturday",value:6}]}},methods:{toggleLoading:function(){this.loading=!this.loading},updateWellnessSlots:function(){var t=this;this.toggleLoading();var e=this.$route.params.id,l=this.slots;this.$wellness.updateWellnessSlots(e,{slots:l}).then((function(e){t.$bvToast.toast("Wellness slots updated successfully",{title:"Success",variant:"success",solid:!0}),t.$router.go(-1)})).catch((function(e){var l=e.response;t.toggleLoading(),t.$bvToast.toast(JSON.stringify(l.data.errors),{title:"Errors",variant:"danger",solid:!0})}))},addSlot:function(){var slot=this.slot;this.slots.push(slot)},removeSlot:function(i){this.slots.splice(i,1)},translateDay:function(e){var l=this.selects;return t.filter(l,(function(t){return t.value==e}))[0].text},editSlot:function(slot){this.slot=slot}}}}).call(this,l(204))},561:function(t,e,l){"use strict";l.r(e);var n=l(399).a,r=l(11),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateWellnessSlots(e)}}},[l("base-header",{staticClass:"pb-6",attrs:{type:""}},[l("div",{staticClass:"d-flex justify-content-between py-4"},[l("MainTitle",{attrs:{title:"Slots"}}),t._v(" "),l("b-button",{attrs:{disabled:t.loading,type:"submit",variant:"primary"}},[t._v("Update Slots")])],1)]),t._v(" "),l("div",{staticClass:"container-fluid mt--6"},[l("div",{staticClass:"card-deck flex-column flex-xl-row"},[l("card",[l("h3",{staticClass:"mr-b-20"},[t._v("Add a Slot")]),t._v(" "),l("client-only",[l("b-form",{on:{submit:function(e){return e.preventDefault(),t.addSlot(e)}}},[l("div",{staticClass:"row"},[l("b-form-group",{staticClass:"col-md-3",attrs:{label:"Day"}},[l("b-form-select",{attrs:{options:t.selects},model:{value:t.slot.day,callback:function(e){t.$set(t.slot,"day",e)},expression:"slot.day"}})],1),t._v(" "),l("b-form-group",{staticClass:"col-md-2",attrs:{label:"Start time"}},[l("client-only",[l("date-picker",{attrs:{id:"time",width:"100%","input-class":"form-control",lang:"en","value-type":"format",confirm:"",type:"time",format:"HH:mm",placeholder:"00:00"},model:{value:t.slot.start,callback:function(e){t.$set(t.slot,"start",e)},expression:"slot.start"}})],1)],1),t._v(" "),l("b-form-group",{staticClass:"col-md-2",attrs:{label:"Duration"}},[l("b-form-input",{attrs:{type:"number",required:""},model:{value:t.slot.duration,callback:function(e){t.$set(t.slot,"duration",e)},expression:"slot.duration"}})],1),t._v(" "),l("b-form-group",{staticClass:"col-md-2",attrs:{label:"Capacity"}},[l("b-form-input",{attrs:{type:"number",required:""},model:{value:t.slot.capacity,callback:function(e){t.$set(t.slot,"capacity",e)},expression:"slot.capacity"}})],1),t._v(" "),l("b-form-group",[l("template",{slot:"label"},[t._v(" ")]),t._v(" "),l("b-button",{staticClass:"sh-dashbtn",attrs:{type:"submit",outline:"",variant:"primary"}},[t._v("Add This Slot")])],2)],1)])],1),t._v(" "),l("div",{staticClass:"mr-tb-80"},[l("div",{staticClass:"m-n25"},[l("table",{staticClass:"table table-hover table-striped"},[l("thead",[l("tr",[l("th",[t._v("Day")]),t._v(" "),l("th",[t._v("Start Time")]),t._v(" "),l("th",[t._v("Duration (mins)")]),t._v(" "),l("th",[t._v("Capacity")]),t._v(" "),l("th")])]),t._v(" "),l("tbody",t._l(t.slots,(function(slot,i){return l("tr",{key:i},[l("td",[l("a",{attrs:{href:"#"}},[t._v(t._s(t.translateDay(slot.day)))])]),t._v(" "),l("td",[t._v(t._s(slot.start))]),t._v(" "),l("td",[t._v(t._s(slot.duration))]),t._v(" "),l("td",[t._v(t._s(slot.capacity))]),t._v(" "),l("td",[l("b-button",{staticClass:"text-primary",attrs:{variant:"transparent"},on:{click:function(e){return t.editSlot(slot)}}},[l("i",{staticClass:"fa fa-edit"}),t._v(" Edit")]),t._v(" "),l("b-button",{staticClass:"text-danger",attrs:{variant:"transparent"},on:{click:function(e){return t.removeSlot(i)}}},[l("i",{staticClass:"fa fa-times"}),t._v(" Delete")])],1)])})),0)])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12"},[l("div",{staticClass:"sh-alert d-flex align-items-center"},[l("i",{staticClass:"ion-android-bulb fs20"}),t._v(" "),l("span",[t._v("If a slot on this wellness is already booked, you will be unable to modify the slots unless all bookings are refunded")])])])])],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);