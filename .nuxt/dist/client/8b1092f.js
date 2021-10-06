(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{320:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},504:function(t,e,n){"use strict";n.r(e);n(9),n(3),n(7),n(6),n(5),n(8),n(40);var r,o=n(12),l=n(0),c=(n(331),n(115),n(332)),d=n.n(c),v=(n(17),n(333),n(334)),f=n.n(v),m=n(116),h=n(320),y=n(42);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w={layout:"ShackDash",components:(r={BaseHeader:m.a,MainTitle:h.a},Object(l.a)(r,f.a.name,f.a),Object(l.a)(r,d.a.name,d.a),r),asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=t.$tag,o=t.error,e.next=3,r.getAllTags().then((function(t){var data=t.data;n.commit("tags/setTags",data)})).catch((function(t){var e=t.response?JSON.stringify(t.response.data.errors):t.message;o({statusCode:t.status,message:e})}));case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1,name:"",type:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(y.b)({tags:function(t){return t.tags.tags.data},meta:function(t){return t.tags.tags.meta},space:function(t){return t.space.currentSpace}})),methods:{next:function(){var t=this,e=this.meta,n=e.current_page,r=e.last_page===n?1:n+1;this.$tag.getAllTags(r).then((function(e){var data=e.data;t.$store.commit("tags/setTags",data)})).catch((function(e){var n=e.response?JSON.stringify(e.response.data.errors):e.message;t.$bvToast.toast(n,{title:"Error",variant:"danger",solid:!0})}))},prev:function(){var t=this,e=this.meta.current_page,n=1===e?1:e-1;this.$tag.getAllTags(n).then((function(e){var data=e.data;t.$store.commit("tags/setTags",data)})).catch((function(e){var n=e.response?JSON.stringify(e.response.data.errors):e.message;t.$bvToast.toast(n,{title:"Error",variant:"danger",solid:!0})}))},removeTag:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.type,o={data:{name:t.name}},e.loading=!e.loading,n.next=5,e.$tag.removeTag(r,o).then((function(n){e.$bvToast.toast("Tag removed successfully",{title:"Success",variant:"success",solid:!0}),e.$store.commit("tags/removeTag",t),e.loading=!e.loading})).catch((function(t){var n=t.response?JSON.stringify(t.response.data.errors):t.message;e.$bvToast.toast(n,{title:"Error",variant:"danger",solid:!0}),e.loading=!e.loading}));case 5:case"end":return n.stop()}}),n)})))()},showEditModal:function(data){this.$bvModal.show("edit-modal"),this.name=data.name,this.type=data.type,this.old_tag=data.name},editTag:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.name,r=t.type,o=t.old_tag,l={old_tag:o,new_tag:n},t.loading=!t.loading,t.$tag.updateTag(r,l).then((function(e){var data=e.data.data;t.$bvToast.toast("Tag ~".concat(n,"~ updated successfully"),{title:"Success",variant:"success",solid:!0}),t.$store.commit("tags/updateTag",{data:data,old_tag:o}),t.loading=!t.loading,t.$bvModal.hide("edit-modal")})).catch((function(e){var n=e.response?JSON.stringify(e.response.data.errors):e.message;t.$bvToast.toast(n,{title:"Error",variant:"danger",solid:!0}),t.loading=!t.loading}));case 4:case"end":return e.stop()}}),e)})))()}}},T=n(11),component=Object(T.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header",{staticClass:"pb-6",attrs:{type:""}},[n("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[n("MainTitle",{attrs:{title:"Tags",subtitle:"All"}}),t._v(" "),n("b-button",{staticClass:"text-white",attrs:{to:{name:"space-tags-add"},squared:"",variant:"primary"}},[t._v("Add Tag")])],1)]),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"card-deck flex-column flex-xl-row"},[n("div",{staticClass:"card"},[n("el-table",{staticClass:"table-responsive align-items-center table-flush table-striped",attrs:{data:t.tags,"header-row-class-name":"thead-light"}},[n("el-table-column",{attrs:{label:"Tag","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("h4",[t._v(t._s(r.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Type",prop:"type","min-width":"140px"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.type))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("b-button",{staticClass:"text-primary",attrs:{disabled:t.loading,variant:"transparent"},on:{click:function(e){return t.showEditModal(r)}}},[n("i",{staticClass:"fa fa-pen"}),t._v(" Edit\n              ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("b-button",{staticClass:"text-danger",attrs:{disabled:t.loading,type:"submit",variant:"transparent"},on:{click:function(e){return t.removeTag(r)}}},[n("i",{staticClass:"fa fa-times"}),t._v(" Remove\n              ")])]}}])})],1)],1)])]),t._v(" "),n("div",[n("base-pagination",{attrs:{total:t.meta.total,"per-page":t.meta.per_page,value:t.meta.current_page,align:"center"},on:{next:t.next,prev:t.prev}})],1),t._v(" "),n("div",[n("b-modal",{attrs:{id:"edit-modal",static:!0,"hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("Edit Tag")]},proxy:!0}])},[t._v(" "),n("b-form",{on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"row"},[n("base-input",{staticClass:"col-md-12",attrs:{label:"Name of Tag",placeholder:"cities, ui, ux",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("base-input",{staticClass:"col-md-12",attrs:{label:"Tag Type",disabled:"",required:"",placeholder:"profile_interest"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),t._v(" "),n("b-button",{staticClass:"text-white float-right",attrs:{disabled:t.loading,squared:"",variant:"primary"},on:{click:t.editTag}},[t._v("\n          Update\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);