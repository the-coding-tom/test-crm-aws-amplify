(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{322:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},323:function(t,e,n){"use strict";var r={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},340:function(t,e,n){},346:function(t,e,n){"use strict";var r=n(340);n.n(r).a},403:function(t,e,n){"use strict";var r={props:{img:{type:String,default:null},date:{type:String,default:null}}},l=(n(346),n(11)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"activity"},[this._t("default")],2),this._v(" "),e("td",[this._v(this._s(this.date))])])}),[],!1,null,"0ba92db8",null);e.a=component.exports},404:function(t,e,n){"use strict";var r={props:{text:{type:String,default:null}}},l=n(11),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(" "+this._s(this.text?this.text:"No activity recorded on platform"))])])}),[],!1,null,null,null);e.a=component.exports},405:function(t,e,n){"use strict";var r={props:{img:{type:String,default:null},title:{type:String,default:null}}},l=n(11),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("div",{staticClass:"d-flex"},[e("div",[e("img",{attrs:{src:this.img,width:"50",height:"50"}})]),this._v(" "),e("div",{staticClass:"ml-2"},[this._v("\n        "+this._s(this.title)+"\n        "),e("br"),this._v(" "),e("span",[this._t("default")],2)])])])])}),[],!1,null,null,null);e.a=component.exports},411:function(t,e,n){"use strict";var r=n(11),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-n25 sh-activity"},[e("table",{staticClass:"table table-hover table-striped"},[e("tbody",[this._t("default")],2)])])}),[],!1,null,null,null);e.a=component.exports},504:function(t,e,n){"use strict";n.r(e);n(9),n(3),n(7),n(6),n(5),n(8);var r=n(1),l=(n(40),n(12)),c=n(403),o=n(322),v=n(323),f=n(404),d=n(411),h=n(405),m=n(345),_=n.n(m),y=n(44);n(67);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w={layout:"ShackDash",asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$activity,r=t.error,e.next=3,n.getAllActivities().then((function(t){var data=t.data,meta=t.meta;return{data:data,links:t.links,meta:meta}})).catch((function(t){var e=t.response?"".concat(t.response.data.message," ~ ").concat(JSON.stringify(t.response.data.errors)):t.message;r({statusCode:t.statusCode,message:e})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},components:{Activity:c.a,Booking:h.a,FeedTable:d.a,EmptyActivity:f.a,SectionTitle:v.a,MainTitle:o.a},data:function(){return{data:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(y.b)({space:function(t){return t.space.currentSpace}})),methods:{getTimestamp:function(t){return _()(t.created_at).tz(this.space.timezone).fromNow()},next:function(){this.getActivity(this.links.next)},prev:function(){this.getActivity(this.links.prev)},getActivity:function(link){var t=this;this.$axios.$get(link).then((function(e){t.data=e.data,t.meta=e.meta,t.links=e.links})).catch((function(e){var n=e.response?"".concat(e.response.data.message," ~ ").concat(JSON.stringify(e.response.data.errors)):e.message;t.$bvToast.toast(n,{variant:"error"})}))}}},x=n(11),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"card-deck flex-column flex-xl-row"},[n("card",[n("div",{staticClass:"row align-items-center",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"col"},[n("SectionTitle",{attrs:{title:"Activity Feed",subtitle:"Usage Stream on Mobile Platform"}})],1)]),t._v(" "),n("div",{staticClass:"m-n25 sh-activity"},[n("table",{staticClass:"table table-hover table-striped"},[n("tbody",[0==t.data.length?n("EmptyActivity"):t._l(t.data,(function(e){return n("Activity",{key:e.id,attrs:{date:t.getTimestamp(e)}},[t._v("\n                "+t._s(e.description)+"\n              ")])}))],2)])]),t._v(" "),n("div",{staticClass:"text-center",attrs:{slot:"footer"},slot:"footer"},[n("b-button",{staticClass:"mr-r-30",attrs:{variant:"link"},on:{click:t.prev}},[t._v("‹ Previous")]),t._v(" "),n("b-button",{staticClass:"mr-l-30",attrs:{variant:"link"},on:{click:t.next}},[t._v(" Next ›")])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);