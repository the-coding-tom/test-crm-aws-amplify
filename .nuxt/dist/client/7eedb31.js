(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{320:function(t,e,r){"use strict";var n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"page-title"},[r("span",[t._v(t._s(t.title))]),t._v(" "),r("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},321:function(t,e,r){"use strict";var n={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"page-title"},[r("span",[t._v(t._s(t.title))]),t._v(" "),r("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},330:function(t,e,r){"use strict";var n={props:{loading:{type:Boolean,default:!1},required:{type:Boolean,default:!0}},data:function(){return{searchTerm:""}},methods:{search:function(){this.$emit("input",this.searchTerm),this.$emit("search",this.searchTerm)}}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[r("base-input",{staticClass:"mb-0",attrs:{"input-group-classes":"input-group-merge sh-search",group:""}},[r("template",{slot:"prepend"},[r("i",{staticClass:"fa fa-search"})]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",attrs:{required:t.required,type:"text",placeholder:"Looking for ...","aria-describedby":"button-addon2"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-default",attrs:{id:"button-addon2",disabled:t.loading,type:"submit"}},[t.loading?r("i",{staticClass:"fa fa-spinner fa-spin"}):r("span",[t._v("\n            Search")])])])],2)],1)}),[],!1,null,null,null);e.a=component.exports},338:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(142);var n=function(t){return r(343).parse(t).search}},340:function(t,e,r){"use strict";(function(t){r(9),r(3),r(7),r(6),r(5),r(8),r(14);var n,o=r(0),l=(r(331),r(115),r(332)),c=r.n(l),m=(r(17),r(333),r(334)),d=r.n(m),f=r(42);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={components:(n={},Object(o.a)(n,d.a.name,d.a),Object(o.a)(n,c.a.name,c.a),n),props:{members:{type:Array,default:null},itemLimit:{type:Number,default:9},showModal:{type:Boolean,default:!1},viewMore:{type:Boolean,default:!0}},data:function(){return{loading:!1,modals:{classic:!1,notice:!1,form:!1},img:"/img/placeholder.jpg"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)({space:function(t){return t.space.currentSpace}})),methods:{upperFirst:function(e){return t.upperFirst(e)},checkStatus:function(t){return t.member_since?"Connected":"Not Connected"},toggleLoading:function(){this.loading=!this.loading},resendInvitation:function(t){var e=this;this.toggleLoading();var r=t.id,n=t.email;this.$membership.inviteMember(r).then((function(t){e.toggleLoading(),e.$bvToast.toast("Membership invitation sent to "+n,{variant:"success"})})).catch((function(t){e.toggleLoading(),e.$bvToast.toast(t.response?JSON.stringify(t.response.data.errors):t.message,{title:"Error",variant:"danger"})}))}}}}).call(this,r(204))},406:function(t,e,r){"use strict";var n=r(340).a,o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("el-table",{staticClass:"table table-hover table-striped",attrs:{data:t.members,"header-row-class-name":"thead-light"}},[r("el-table-column",{attrs:{label:"Name  /  Company",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("div",{staticClass:"sh-vflex"},[r("div",[r("img",{staticClass:"mr-r-20 rounded-circle",attrs:{src:n.user_profile&&n.user_profile.picture?n.user_profile.picture:t.img,alt:"Image placeholder",height:"40px",width:"40px"}})]),t._v(" "),r("b-link",[r("b-link",{attrs:{to:{name:"space-memberships-id",params:{id:n.id}}}},[t._v(t._s(n.first_name)+" "+t._s(n.last_name))]),t._v(" "),r("br"),t._v(" "),r("span",{staticStyle:{color:"grey"}},[t._v(t._s(n.user_profile?n.user_profile.company:null))])],1)],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"Plan  /  Price",prop:"amount",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[n.primary_plan.length>0?r("div",{staticClass:"float-left"},[t._v(t._s(n.primary_plan.length>0&&n.primary_plan[0].name))]):t._e(),t._v(" "),r("div",{staticClass:"float-right text-muted"},[t._v("\n          "+t._s(t._f("currency")(n.primary_plan[0]&&n.primary_plan[0].price,t.space.currency_symbol))+"\n        ")])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"Payment Method",prop:"method",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[n.member_since?r("span",[t._v("Credit Card - **** "+t._s(n.card_last_four)+")")]):r("span",[t._v("n/a")])]}}])}),t._v(" "),t.showModal?r("el-table-column",{attrs:{label:"Status",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[t._t("action",null,null,r)]}}],null,!0)}):r("el-table-column",{attrs:{label:"Status",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v("\n        "+t._s(t.checkStatus(n))+"\n        "),"Connected"!==t.checkStatus(n)?r("b-button",{staticClass:"text-primary",attrs:{disabled:t.loading,variant:"transparent"},on:{click:function(e){return t.resendInvitation(n)}}},[r("i",{staticClass:"fa fa-paper-plane"}),t._v(" Re-send Invitation\n        ")]):t._e()]}}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports},518:function(t,e,r){"use strict";r.r(e);r(40);var n=r(12),o=r(118),l=r(406),c=r(320),m=r(321),d=r(330),f=r(338),v={layout:"ShackDash",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,filter;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$membership,t.$plan,n=t.error,o=t.route,filter="filter[status]=uninvited&include=profile,primaryPlan&page=".concat(o.query.page),e.next=4,r.getAllMemberships(filter).then((function(t){return{members:t.data,links:t.links,meta:t.meta}})).catch((function(t){n({statusCode:t.statusCode,message:t.response?JSON.stringify(t.response.data.errors):t.messge})}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()},components:{MainTitle:c.a,SearchForm:d.a,SectionTitle:m.a,MembersTable:l.a,RouteBreadCrumb:o.a},data:function(){return{searchTerm:"",loading:!1}},methods:{next:function(){var t=this.links.next,e=Object(f.a)(t);this.$router.push(e),location.href=location.origin+this.$route.path+e},prev:function(){var t=this.links.prev,e=Object(f.a)(t);this.$router.push(e),location.href=location.origin+this.$route.path+e},changePage:function(t){var e="?page=".concat(t);this.$router.push(e),location.href=location.origin+this.$route.path+e},confirmMember:function(t){var e=this;this.$membership.inviteMember(t.id).then((function(t){e.$bvToast.toast("Member invited successfully",{variant:"success"}),setTimeout((function(){location.reload()}),5e3)})).catch((function(t){e.$bvToast.toast(t.response?JSON.stringify(t.response.data.errors):t.message,{title:"Error",variant:"danger"})}))},inviteAllPendingMembers:function(){var t=this;this.$membership.inviteAllPendingMembers().then((function(e){t.$bvToast.toast("Members invited successfully",{variant:"success"}),setTimeout((function(){location.reload()}),5e3)})).catch((function(e){t.$bvToast.toast(e.response?JSON.stringify(e.response.data.errors):e.message,{title:"Error",variant:"danger"})})),console.log("invite all")},cancelMember:function(t){var e=this;confirm("Are you sure")&&this.$membership.deleteMembership(t.id).then((function(t){e.$bvToast.toast("Member deleted successfully",{variant:"success"}),setTimeout((function(){location.reload()}),5e3)})).catch((function(t){e.$bvToast.toast(t.response?JSON.stringify(t.response.data.errors):t.message,{title:"Error",variant:"danger"})}))},search:function(t){var e=this;this.loading=!this.loading;var link="filter[status]=uninvited&include=primaryPlan,profile&filter[search]=".concat(t);this.$membership.getAllMemberships(link).then((function(t){var data=t.data,r=t.links;t.meta;e.members=data,e.links=r,e.loading=!1})).catch((function(t){e.loading=!e.loading,e.$bvToast.toast(t.response?JSON.stringify(t.response.data.errors):t.message,{title:"Error",variant:"danger"})}))}}},h=r(11),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("base-header",{staticClass:"pb-6",attrs:{type:""}},[r("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[r("MainTitle",{attrs:{title:"Members",subtitle:"Pending"}}),t._v(" "),r("SearchForm",{attrs:{loading:t.loading},on:{search:t.search}}),t._v(" "),r("div",[r("b-button",{attrs:{variant:"primary"},on:{click:t.inviteAllPendingMembers}},[t._v("Invite All")])],1)],1)]),t._v(" "),r("div",{staticClass:"container-fluid mt--6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("MembersTable",{attrs:{members:t.members,"view-more":!1,"show-modal":""},scopedSlots:t._u([{key:"action",fn:function(e){return[r("b-row",[r("b-button",{staticClass:"btn-purple",staticStyle:{"margin-top":"0px","margin-bottom":"0px"},attrs:{variant:"primary"},on:{click:function(r){return t.confirmMember(e)}}},[t._v("Send Invitation")]),t._v(" "),r("b-button",{staticClass:"ml-2 text-danger",staticStyle:{"margin-top":"0px","margin-bottom":"0px"},attrs:{variant:"transparent"},on:{click:function(r){return t.cancelMember(e)}}},[r("i",{staticClass:"fa fa-times"}),t._v(" Cancel Membership")])],1)]}}])})],1)]),t._v(" "),r("div",[r("base-pagination",{attrs:{total:t.meta.total,"per-page":t.meta.per_page,value:t.meta.current_page,align:"center"},on:{next:t.next,prev:t.prev,input:t.changePage}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);