(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{320:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},321:function(t,e,n){"use strict";var r={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},379:function(t,e,n){"use strict";(function(t){n(9),n(3),n(7),n(6),n(5),n(8),n(17),n(15);var r=n(0),l=n(116),o=n(320),c=n(321),d=n(42);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={layout:"ShackDash",components:{BaseHeader:l.a,MainTitle:o.a,SectionTitle:c.a},data:function(){return{sessions:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)({space:function(t){return t.space.currentSpace}})),methods:{dateChange:function(e){var n=this,r=e.startDate,l=(e.endData,this.$moment(r).format("YYYY-MM-DD")),o=this.$moment(r).day(),c=[];this.$wellness.getWellnessByDate(l).then((function(e){var data=e.data;t.map(data.data,(function(e){return console.log(data.data),t.each(e.slots,(function(t){t.day==o&&c.push({title:e.name,start:n.$moment("".concat(l," ").concat(t.start,":00")).format("YYYY-MM-DD HH:mm:ss"),end:n.$moment("".concat(l," ").concat(t.start,":00")).add(t.duration,"minutes").format("YYYY-MM-DD HH:mm:ss"),backgroundColor:e.wellness_category.color,extendedProps:e})}))})),n.sessions=c})).catch((function(t){var e=t.response;n.$bvToast.toast(JSON.stringify(e.data.errors),{variant:"dange"})}))},eventClick:function(t){this.$router.push({name:"space-wellness-bookings-id",params:{id:t.extendedProps.id}})}}}}).call(this,n(204))},556:function(t,e,n){"use strict";n.r(e);var r=n(379).a,l=n(11),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("base-header",{staticClass:"pb-6",attrs:{type:""}},[e("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[e("MainTitle",{attrs:{title:"Wellness Bookings"}})],1)]),this._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"card-deck flex-column flex-xl-row"},[e("card",[e("client-only",[e("full-calendar",{attrs:{events:this.sessions,right:null,views:this.views,"default-view":"list"},on:{eventClick:this.eventClick,dateChange:this.dateChange}})],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);