(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{322:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},323:function(t,e,n){"use strict";var r={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},340:function(t,e,n){},346:function(t,e,n){"use strict";var r=n(340);n.n(r).a},403:function(t,e,n){"use strict";var r={props:{img:{type:String,default:null},date:{type:String,default:null}}},l=(n(346),n(11)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"activity"},[this._t("default")],2),this._v(" "),e("td",[this._v(this._s(this.date))])])}),[],!1,null,"0ba92db8",null);e.a=component.exports},404:function(t,e,n){"use strict";var r={props:{text:{type:String,default:null}}},l=n(11),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(" "+this._s(this.text?this.text:"No activity recorded on platform"))])])}),[],!1,null,null,null);e.a=component.exports},405:function(t,e,n){"use strict";var r={props:{img:{type:String,default:null},title:{type:String,default:null}}},l=n(11),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("div",{staticClass:"d-flex"},[e("div",[e("img",{attrs:{src:this.img,width:"50",height:"50"}})]),this._v(" "),e("div",{staticClass:"ml-2"},[this._v("\n        "+this._s(this.title)+"\n        "),e("br"),this._v(" "),e("span",[this._t("default")],2)])])])])}),[],!1,null,null,null);e.a=component.exports},411:function(t,e,n){"use strict";var r=n(11),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-n25 sh-activity"},[e("table",{staticClass:"table table-hover table-striped"},[e("tbody",[this._t("default")],2)])])}),[],!1,null,null,null);e.a=component.exports},494:function(t,e,n){"use strict";n.r(e);n(9),n(3),n(7),n(6),n(8);var r=n(1),l=(n(22),n(23),n(5),n(40),n(12)),o={props:{value:{type:String,default:null},text:{type:String,default:null},img:{type:String,default:null},destinationLink:{type:String,default:"space"}}},c=n(11),v=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-3 sh-widget"},[n("div",{staticClass:"card"},[n("nuxt-link",{attrs:{to:{name:t.destinationLink}}},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"d-flex justify-content-between"},[n("h2",[t._v(t._s(t.value))]),t._v(" "),n("img",{attrs:{src:t.img}})]),t._v(" "),n("p",{staticClass:"card-text"},[t._v(t._s(t.text))])])])],1)])}),[],!1,null,null,null).exports,d=n(403),m=n(322),f=n(323),h=n(404),y=n(411),_=n(405),k=n(44),x=n(345),O=n.n(x);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w={layout:"ShackDash",components:{Activity:d.a,TopWidget:v,Booking:_.a,FeedTable:y.a,EmptyActivity:h.a,SectionTitle:f.a,MainTitle:m.a},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,o,c,v,d,m,f,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.error,r=t.$activity,l=t.$resource,o=t.store,t.$moment,e.prev=1,e.next=4,r.getAllActivities();case 4:return c=e.sent,o.commit("activity/setActivities",c),v={from:O()().startOf("day").tz("America/Los_Angeles").format("YYYY-MM-DD"),to:O()().endOf("day").tz("America/Los_Angeles").format("YYYY-MM-DD")},e.next=9,l.getBookingByDate(v);case 9:return d=e.sent,o.commit("activity/setActivityBookings",d.data),m="?from=".concat(O()().tz("America/Los_Angeles").format("YYYY-MM-DD"),"&to=").concat(O()().add(1,"days").tz("America/Los_Angeles").format("YYYY-MM-DD")),e.next=14,r.getSummary(m);case 14:f=e.sent,console.log("in async process"),console.log(m),console.log(f),data={checkins:f["check-ins"].toString(),events:f.events.toString(),bookings:f.bookings.toString(),unpaidInvoices:f["unpaid-invoices"].toString()},o.commit("activity/setSummary",data),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),n({statusCode:e.t0.status||404,message:e.t0.response?JSON.stringify(e.t0.response.data.errors):e.t0.message});case 25:case"end":return e.stop()}}),e,null,[[1,22]])})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(k.b)({space:function(t){return t.space.currentSpace},summary:function(t){return t.activity.summary},activities:function(t){return t.activity.activities.data},bookings:function(t){return t.activity.bookings.data}})),methods:{getTimestamp:function(t){return O()(t.created_at).tz(this.space.timezone).fromNow()}}},C=Object(c.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header",{staticClass:"pb-6",attrs:{type:""}},[n("div",{staticClass:"d-flex justify-content-between py-4"},[n("MainTitle",{attrs:{title:"Dashboard",subtitle:"This Month"}})],1),t._v(" "),n("div",{staticClass:"row"},[n("TopWidget",{attrs:{value:t.summary.checkins,img:"/img/icon-user.png","destination-link":"space-checkins",text:"Members Checked In"}}),t._v(" "),n("TopWidget",{attrs:{value:t.summary.unpaidInvoices,img:"/img/icon-wallet.png","destination-link":"space-invoice",text:"Unpaid Invoices"}}),t._v(" "),n("TopWidget",{attrs:{value:t.summary.bookings,text:"Bookings Revenue ("+t.space.currency+")",img:"/img/icon-discount.png","destination-link":"space-resources"}}),t._v(" "),n("TopWidget",{attrs:{value:t.summary.events,img:"/img/icon-help.png","destination-link":"space-events",text:"Events"}})],1)]),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"card-deck flex-column flex-xl-row"},[n("card",[n("div",{staticClass:"row align-items-center",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"col"},[n("SectionTitle",{attrs:{title:"Activity Feed",subtitle:"Usage Stream on Mobile Platform"}})],1)]),t._v(" "),n("div",{staticClass:"m-n25 sh-activity"},[n("table",{staticClass:"table table-hover table-striped"},[n("tbody",[0===t.activities.length?n("EmptyActivity"):t._l(t.activities,(function(e){return n("Activity",{key:e.id,attrs:{date:t.getTimestamp(e)}},[n("span",[t._v(t._s(e.description))])])}))],2)])]),t._v(" "),n("nuxt-link",{staticClass:"mr-t-10",attrs:{slot:"footer",to:{name:"space-activities"}},slot:"footer"},[t._v("See More")])],1),t._v(" "),n("card",{attrs:{"header-classes":"bg-transparent"}},[n("div",{staticClass:"row align-items-center",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"col"},[n("SectionTitle",{attrs:{title:"Bookings",subtitle:"Space, Events, Meals, and Resources"}})],1)]),t._v(" "),n("div",{staticClass:"m-n25 sh-activity sh-bookings"},[n("table",{staticClass:"table table-hover table-striped"},[n("tbody",[0===t.bookings.length?n("EmptyActivity"):t._l(t.bookings,(function(e,r){return n("Booking",{key:r,attrs:{title:e.title+" "+t.$moment(e.start_timestamp).format("dddd MMM Do")+" "+e.from+" - "+e.to,img:e.room.photo}},[t._v("Room: "+t._s(e.room.name))])}))],2)])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"})])],1)])],1)}),[],!1,null,null,null);e.default=C.exports}}]);