(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{320:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},543:function(t,e,n){"use strict";n.r(e);n(9),n(3),n(7),n(6),n(5),n(8),n(17);var r=n(0),l=(n(40),n(12)),o=n(116),c=n(320),d=n(42);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={layout:"ShackDash",components:{BaseHeader:o.a,MainTitle:c.a},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store,n=t.$plan,r=t.params,l=t.error,o=r.id,e.next=4,n.getPlan(o).then((function(t){var data=t.data;return console.log("------------------------------------"),console.log(data),console.log("------------------------------------"),{plan:data,id:o}})).catch((function(t){l({statusCode:t.statusCode,message:t.response?JSON.stringify(t.response.data.message):t.message})}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)({space:function(t){return t.space.currentSpace}})),methods:{editPlan:function(){var t=this,e=this.id,n=(this.space,this.plan);this.loading=!this.loading,this.$plan.updatePlan(e,n).then((function(e){e.data.data;t.$bvToast.toast("Plan ~".concat(n.name,"~ updated successfully"),{title:"Success",variant:"success",solid:!0}),t.loading=!t.loading,t.$router.push({name:"space-plans"})})).catch((function(e){var n=e.response?JSON.stringify(e.response.data.errors):e.message;t.$bvToast.toast(n,{title:"Error",variant:"danger",solid:!0}),t.loading=!t.loading}))}}},m=n(11),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.editPlan(e)}}},[n("base-header",{staticClass:"pb-6",attrs:{type:""}},[n("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[n("MainTitle",{attrs:{title:"Update Plan"}}),t._v(" "),n("b-button",{staticClass:"btn btn-primary text-white",attrs:{disabled:t.loading,type:"submit"}},[t._v("Update Plan")])],1)]),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"card-deck flex-column flex-xl-row"},[n("card",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"row pd-r-20"},[n("base-input",{staticClass:"col-md-12",attrs:{value:t.plan.name,readonly:"",label:"Name of Plan",required:"",placeholder:"Entrepreneur"}}),t._v(" "),n("b-form-group",{staticClass:"col-md-12",attrs:{label:"Plan Description",description:"Description should not exceed 22 characters"}},[n("b-form-input",{attrs:{maxlength:"22",placeholder:"Add details about the plan",required:""},model:{value:t.plan.description,callback:function(e){t.$set(t.plan,"description",e)},expression:"plan.description"}})],1),t._v(" "),n("b-form-group",{staticClass:"col-md-6",attrs:{label:"Price per cycle"}},[n("b-form-input",{attrs:{type:"number",placeholder:"0.00",required:""},model:{value:t.plan.price,callback:function(e){t.$set(t.plan,"price",e)},expression:"plan.price"}})],1),t._v(" "),n("b-form-group",{staticClass:"col-md-6",attrs:{label:"Charge Cycle",description:"Charge cycle denotes the number of months before charging"}},[n("b-form-input",{attrs:{type:"number",label:"Charge Cycle",required:""},model:{value:t.plan.invoice_period,callback:function(e){t.$set(t.plan,"invoice_period",e)},expression:"plan.invoice_period"}})],1)],1)]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"row pd-l-20"},[n("b-row",[n("div",{staticClass:"form-group col-md-12"},[n("label",{staticClass:"form-control-label",attrs:{for:"planvisibility"}},[t._v("Plan Status")]),t._v(" "),n("b-row",[n("b-col",{attrs:{md:"10"}},[n("b-form-checkbox",{attrs:{value:!0,"unchecked-value":!1,name:"planVisibility"},model:{value:t.plan.is_active,callback:function(e){t.$set(t.plan,"is_active",e)},expression:"plan.is_active"}},[t._v("Active")]),t._v(" "),n("p",{staticClass:"text-left mt-2"},[t._v("\n                          Will be displayed in plans when inviting a new\n                          member and all applicants can see this Membership\n                          Plan.\n                        ")])],1)],1)],1)])],1)])])])],1),t._v(" "),n("b-button",{staticClass:"text-primary mb-2",attrs:{variant:"transparent"},on:{click:function(e){return t.$router.go(-1)}}},[n("i",{staticClass:"ti-angle-left"}),t._v(" Back")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);