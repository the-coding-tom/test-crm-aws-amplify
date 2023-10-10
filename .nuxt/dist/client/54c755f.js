(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{322:function(e,t,n){"use strict";var l={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},o=n(11),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"page-title"},[n("span",[e._v(e._s(e.title))]),e._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v("•")]),e._v(" "+e._s(e.subtitle))])}),[],!1,null,null,null);t.a=component.exports},323:function(e,t,n){"use strict";var l={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},o=n(11),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{staticClass:"page-title"},[n("span",[e._v(e._s(e.title))]),e._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v("•")]),e._v(" "+e._s(e.subtitle))])}),[],!1,null,null,null);t.a=component.exports},507:function(e,t,n){"use strict";n.r(t);n(9),n(3),n(7),n(6),n(5),n(8),n(17);var l=n(1),o=(n(40),n(12)),r=n(117),c=n(322),d=n(323),m=n(44);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={layout:"ShackDash",components:{BaseHeader:r.a,MainTitle:c.a,SectionTitle:d.a},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,l=n.state.space.currentSpace,t.abrupt("return",f({},l));case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{loading:!1}},computed:f({},Object(m.b)({space:function(e){return e.space.currentSpace}})),methods:{updateSpace:function(){var e=this,t=this.name,n=this.description,l=this.unit,o=this.currency,r=this.currency_symbol,c=this.tax_rate,d=this.payment_instructions,m=this.timezone,v=this.timezone_name,f=this.wifi_name,h=this.wifi_password,_=this.capacity,y=this.in_eu,address=this.address,w=this.city,C=this.zipcode,x=this.country,k=this.neighborhood,O=this.latitude,S=this.longitude,j=this.id,z={name:t,description:n,unit:l,currency:o,currency_symbol:r,tax_rate:c,payment_instructions:d,timezone:m,timezone_name:v,wifi_name:f,wifi_password:h,capacity:_,in_eu:Boolean(y),address:address,city:w,zipcode:C,country:x,neighborhood:k};O&&(z[O]=O),S&&(z[S]=S),this.loading=!this.loading,this.$space.updateOneSpace(j,z).then((function(n){var data=n.data;e.$store.commit("space/setSpace",data),e.$bvToast.toast("Updated ".concat(t," successfully"),{title:"Success",variant:"success",solid:!0}),e.loading=!e.loading,setTimeout((function(){e.$router.push({name:"space"})}),3e3)})).catch((function(t){var n=t.response?JSON.stringify(t.response.data.errors):t.message;e.$bvToast.toast(n,{title:"Error",variant:"danger",solid:!0}),e.loading=!e.loading}))}}},_=n(11),component=Object(_.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateSpace(t)}}},[n("base-header",{staticClass:"pb-6",attrs:{type:""}},[n("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[n("MainTitle",{attrs:{title:"Update Space"}}),e._v(" "),n("b-button",{staticClass:"btn btn-primary text-white",attrs:{disabled:e.loading,type:"submit"}},[e._v("Update")])],1)]),e._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"card-deck flex-column flex-xl-row"},[n("card",[n("h3",{staticClass:"mr-b-20"},[e._v("Update Space Details")]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"row pd-r-20"},[n("base-input",{staticClass:"col-md-6",attrs:{required:"",label:"Name",placeholder:"SHACK15"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Unit",placeholder:"Suite 201"},model:{value:e.unit,callback:function(t){e.unit=t},expression:"unit"}}),e._v(" "),n("div",{staticClass:"form-group col-md-12"},[n("label",[e._v("Description")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{placeholder:"Details about the space",rows:"4","max-rows":"6",description:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Currency",placeholder:"USD"},model:{value:e.currency,callback:function(t){e.currency=t},expression:"currency"}}),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Currency Symbol",placeholder:"$"},model:{value:e.currency_symbol,callback:function(t){e.currency_symbol=t},expression:"currency_symbol"}}),e._v(" "),n("base-input",{staticClass:"col-md-12",attrs:{label:"Tax Rate",placeholder:"20",type:"number"},model:{value:e.tax_rate,callback:function(t){e.tax_rate=t},expression:"tax_rate"}}),e._v(" "),n("div",{staticClass:"form-group col-md-12"},[n("label",[e._v("Payment Instruction")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.payment_instructions,expression:"payment_instructions"}],staticClass:"form-control",attrs:{placeholder:"Extra instructions for members when making payment",rows:"4","max-rows":"6",description:"payment_instructions"},domProps:{value:e.payment_instructions},on:{input:function(t){t.target.composing||(e.payment_instructions=t.target.value)}}})]),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Timezone",placeholder:"America/Los_Angeles"},model:{value:e.timezone,callback:function(t){e.timezone=t},expression:"timezone"}}),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Timezone Name",placeholder:"Pacific Daylight Time"},model:{value:e.timezone_name,callback:function(t){e.timezone_name=t},expression:"timezone_name"}})],1)]),e._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"row pd-l-20"},[n("base-input",{staticClass:"col-md-6",attrs:{label:"Wifi Name",placeholder:"SHACK15 WIFI"},model:{value:e.wifi_name,callback:function(t){e.wifi_name=t},expression:"wifi_name"}}),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Wifi Password",placeholder:"password"},model:{value:e.wifi_password,callback:function(t){e.wifi_password=t},expression:"wifi_password"}}),e._v(" "),n("div",{staticClass:"form-group col-md-12"},[n("b-form-checkbox",{attrs:{value:"true","unchecked-value":"false"},model:{value:e.in_eu,callback:function(t){e.in_eu=t},expression:"in_eu"}},[e._v("Is space in the European Union ?")])],1),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Address",placeholder:"19 Ella Street"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"City",placeholder:"Palo Alto"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Zip Code",placeholder:"94306"},model:{value:e.zipcode,callback:function(t){e.zipcode=t},expression:"zipcode"}}),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Country",placeholder:"Country"},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}}),e._v(" "),n("base-input",{staticClass:"col-md-12",attrs:{label:"Neighborhood",placeholder:"The Palo"},model:{value:e.neighborhood,callback:function(t){e.neighborhood=t},expression:"neighborhood"}}),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Latitude",placeholder:"40.6892° N"},model:{value:e.latitude,callback:function(t){e.latitude=t},expression:"latitude"}}),e._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{label:"Longitude",placeholder:"74.0445° W"},model:{value:e.longitude,callback:function(t){e.longitude=t},expression:"longitude"}}),e._v(" "),n("base-input",{staticClass:"col-md-3",attrs:{label:"Capacity",placeholder:"100",type:"number"},model:{value:e.capacity,callback:function(t){e.capacity=t},expression:"capacity"}})],1)])])])],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);