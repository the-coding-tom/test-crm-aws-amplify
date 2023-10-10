(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{322:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},506:function(t,e,n){"use strict";n.r(e);n(9),n(3),n(7),n(6),n(5),n(8),n(40);var r,o=n(12),l=n(1),c=(n(333),n(116),n(334)),d=n.n(c),m=(n(17),n(335),n(336)),f=n.n(m),v=n(117),_=n(322),y=n(44);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w={layout:"ShackDash",components:(r={BaseHeader:v.a,MainTitle:_.a},Object(l.a)(r,f.a.name,f.a),Object(l.a)(r,d.a.name,d.a),r),asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=t.$company,o=t.error,e.next=3,r.getCompanies().then((function(data){n.commit("company/setCompanies",data)})).catch((function(t){o({statusCode:t.status||404,message:t.response?JSON.stringify(t.response.data.errors):t.message})}));case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(y.b)({companies:function(t){return t.company.companies.data},meta:function(t){return t.company.companies.meta},links:function(t){return t.company.companies.links}})),methods:{next:function(){var t=this,e=this.links.next;this.$company.getcompanies(e).then((function(t){var data=t.data;store.commit("company/setCompanies",data)})).catch((function(e){var n=e.response?JSON.stringify(e.response.data.errors):e.message;t.$bvToast.toast(n,{title:"Error",variant:"danger",solid:!0})}))},prev:function(){var t=this,e=this.links.prev;this.$company.getcompanies(e).then((function(t){var data=t.data;store.commit("company/setCompanies",data)})).catch((function(e){var n=e.response?JSON.stringify(e.response.data.errors):e.message;t.$bvToast.toast(n,{title:"Error",variant:"danger",solid:!0})}))},removeCompany:function(t){var e=this;confirm("Are you sure ? ")&&(this.loading=!this.loading,this.$company.removeOneCompany(t).then((function(n){e.$store.commit("company/removeOneCompany",t),e.loading=!e.loading})).catch((function(t){var n=t.response?JSON.stringify(t.response.data.errors):t.message;e.$bvToast.toast(n,{title:"Error",variant:"danger",solid:!0}),e.loading=!e.loading})))}}},O=n(11),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header",{staticClass:"pb-6",attrs:{type:""}},[n("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[n("MainTitle",{attrs:{title:"Corporate",subtitle:"All"}}),t._v(" "),n("b-button",{staticClass:"text-white",attrs:{to:{name:"space-corporates-add"},squared:"",variant:"primary"}},[t._v("Add New Corporate")])],1)]),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"card-deck flex-column flex-xl-row"},[n("div",{staticClass:"card"},[n("el-table",{staticClass:"table-responsive align-items-center table-flush table-striped",attrs:{data:t.companies,"header-row-class-name":"thead-light"}},[n("el-table-column",{attrs:{label:"Name","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("h4",[t._v(t._s(r.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Contact Name",prop:"contact_name","min-width":"180px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.contact_name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Contact Email",prop:"contat_email","min-width":"180px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.contat_email))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Address",prop:"address","min-width":"140px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.address))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"City",prop:"city","min-width":"140px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.city))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"State",prop:"state","min-width":"140px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.state))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Zip Code",prop:"zipcode","min-width":"140px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.zipcode))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Country",prop:"country","min-width":"140px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.country))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Billing Email",prop:"billing_email","min-width":"180px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.billing_email))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("b-button",{staticClass:"text-primary",attrs:{disabled:t.loading,to:{name:"space-corporates-id-edit",params:{id:r.uuid}},variant:"transparent"}},[n("i",{staticClass:"fa fa-pen"}),t._v(" Edit\n              ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("b-button",{staticClass:"text-danger",attrs:{disabled:t.loading,type:"submit",variant:"transparent"},on:{click:function(e){return t.removeCompany(r.uuid)}}},[n("i",{staticClass:"fa fa-times"}),t._v(" Remove\n              ")])]}}])})],1)],1)]),t._v(" "),n("div",[n("base-pagination",{attrs:{total:t.meta.total,"per-page":t.meta.per_page,value:t.meta.current_page,align:"center"},on:{next:t.next,prev:t.prev}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);