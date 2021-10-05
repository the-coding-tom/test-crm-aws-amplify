(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{320:function(t,e,r){"use strict";var n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"page-title"},[r("span",[t._v(t._s(t.title))]),t._v(" "),r("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},321:function(t,e,r){"use strict";var n={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"page-title"},[r("span",[t._v(t._s(t.title))]),t._v(" "),r("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},322:function(t,e,r){},327:function(t,e,r){"use strict";var n=r(322);r.n(n).a},328:function(t,e,r){"use strict";r(40);var n=r(12),o=r(66),l=r.n(o),c={props:{name:{type:String,default:null},label:{type:String,default:null},service:{type:String,default:"images"},url:{type:String,default:null}},data:function(){return{publicUrl:null}},methods:{onFileChange:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.target.files[0]){r.next=3;break}return r.abrupt("return");case 3:if(!(n.size>5e5)){r.next=6;break}return e.$bvToast.toast("File size must not be greater than 500kb",{variant:"warning"}),r.abrupt("return");case 6:return o=n.type,e.url=URL.createObjectURL(n),r.next=10,e.getSignedUrl(o);case 10:return l=r.sent,e.publicUrl=l.public_url,e.$bvToast.toast("Uploading image. Please wait..."),r.next=15,e.uploadUrl(l.signed_url,n,o).then((function(t){e.$emit("input",e.publicUrl),e.$bvToast.toast("Image uploaded successfully",{variant:"success",solid:!0})})).catch((function(t){e.$bvToast.toast(t.message,{title:"Error",variant:"danger",solid:!0})}));case 15:r.sent;case 16:case"end":return r.stop()}}),r)})))()},getSignedUrl:function(t){var e=this,r=this.service;return this.$images.getSignedUrl(r,t).then((function(t){return t.data.data})).catch((function(t){var r=t.response;e.$bvToast.toast(JSON.stringify(r.data.errors),{title:"Error",variant:"danger",solid:!0})}))},uploadUrl:function(t,e,r){var n=this;return l.a.put(t,e,{headers:{"Content-Type":r}}).then((function(t){return t})).catch((function(t){var e=t.response;n.$bvToast.toast(JSON.stringify(e.data),{variant:"danger",solid:!0})}))}}},d=(r(327),r(11)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mr-b-20",attrs:{id:"preview"}},[t.url?r("img",{attrs:{src:t.url}}):t._e()]),t._v(" "),r("div",{staticClass:"bg-lgray pd-10 pd-l-20 upload-btn-wrapper pd-0"},[r("button",{staticClass:"btn"},[r("i",{staticClass:"fa fa-paperclip mr-r-10"}),t._v(" "+t._s(t.label))]),t._v(" "),r("input",{attrs:{name:t.name,type:"file",accept:"image/*"},on:{change:t.onFileChange}})])])}),[],!1,null,null,null);e.a=component.exports},535:function(t,e,r){"use strict";r.r(e);r(9),r(3),r(7),r(6),r(5),r(8),r(40);var n,o=r(12),l=r(0),c=(r(323),r(115),r(324)),d=r.n(c),v=(r(17),r(325),r(326)),f=r.n(v),m=r(116),y=r(320),_=r(321),h=r(328),w=r(42);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={layout:"ShackDash",components:(n={BaseHeader:m.a,MainTitle:y.a,UploadButton:h.a,SectionTitle:_.a},Object(l.a)(n,f.a.name,f.a),Object(l.a)(n,d.a.name,d.a),n),asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.$eatry,o=t.error,l=t.params,c=l.id,e.next=4,n.getAllEatryCategories().then((function(data){r.commit("eatry/setCategories",data)})).catch((function(t){o({statusCode:o.status||404,message:t.response?JSON.stringify(t.response.data.errors):t.message})}));case 4:return e.next=6,n.getOneEatry(c).then((function(t){var data=t.data;return C(C({},data),{},{eatry_category_id:data.eatry_category.id,id:c,eatry_availability:[]})})).catch((function(t){o({statusCode:t.status||404,message:t.response?JSON.stringify(t.response.data.errors):t.message})}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1,is_special:"",breakfast:{from:"06:00",to:"11:00",weekdays:[1,6]},lunch:{from:"12:00",to:"14:00",weekdays:[1,6]},dinner:{from:"15:00",to:"00:00",weekdays:[1,6]},all:{from:"00:00",to:"00:00",weekdays:[1,6]}}},computed:C({},Object(w.b)({categories:function(t){return t.eatry.categories.data}})),methods:{editInventory:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,d,v,f,m,y,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.name,n=t.description,o=t.capacity,l=t.price,c=t.banner_url,d=t.eatry_category_id,v=t.eatry_availability,f=t.can_order,m=t.is_special,y=t.id,t.loading=!t.loading,_={name:r,description:n,capacity:o,price:l,banner_url:c,eatry_category_id:d,eatry_availability:v,can_order:Boolean(f),is_special:Boolean(m)},t.$eatry.updateOneEatry(y,_).then((function(e){e.data;t.$bvToast.toast("Eatry updated successfully",{title:"Success",variant:"success",solid:!0}),setTimeout((function(){t.$router.push({name:"space-eatry-inventory"})}),3e3),t.loading=!t.loading})).catch((function(e){var r=e.response?JSON.stringify(e.response.data.errors):e.message;t.$bvToast.toast(r,{title:"Error",variant:"danger",solid:!0}),t.loading=!t.loading}));case 4:case"end":return e.stop()}}),e)})))()}}},k=r(11),component=Object(k.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.editInventory(e)}}},[r("base-header",{staticClass:"pb-6",attrs:{type:""}},[r("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[r("MainTitle",{attrs:{title:"Edit Inventory"}}),t._v(" "),r("b-button",{staticClass:"btn btn-primary text-white",attrs:{disabled:t.loading,type:"submit"}},[r("i",{staticClass:"fa fa-save"}),t._v(" Update Inventory\n        ")])],1)]),t._v(" "),r("div",{staticClass:"container-fluid mt--6"},[r("div",{staticClass:"card-deck flex-column flex-xl-row"},[r("card",[r("h3",{staticClass:"mr-b-20"},[t._v("Update Inventory")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row pd-r-20"},[r("base-input",{staticClass:"col-md-12",attrs:{label:"Name",placeholder:"Inventory Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("label",[t._v("Description")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{placeholder:"Inventory description",rows:"4","max-rows":"6"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),r("base-input",{staticClass:"col-md-6",attrs:{label:"Capacity",type:"number",placeholder:"0"},model:{value:t.capacity,callback:function(e){t.capacity=e},expression:"capacity"}}),t._v(" "),r("base-input",{staticClass:"col-md-6",attrs:{label:"Price",type:"number",step:"0.01",placeholder:"0.00"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row pd-l-20"},[r("div",{staticClass:"form-group col-md-12"},[r("label",[t._v("Eatry Category:")]),t._v(" "),r("el-select",{attrs:{placeholder:"Select Category"},model:{value:t.eatry_category_id,callback:function(e){t.eatry_category_id=e},expression:"eatry_category_id"}},t._l(t.categories,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("b-form-group",{attrs:{label:"Eatry Availability"}},[r("b-form-checkbox-group",{model:{value:t.eatry_availability,callback:function(e){t.eatry_availability=e},expression:"eatry_availability"}},[r("b-form-checkbox",{attrs:{value:t.breakfast}},[t._v("Breakfast")]),t._v(" "),r("b-form-checkbox",{attrs:{value:t.lunch}},[t._v("Lunch")]),t._v(" "),r("b-form-checkbox",{attrs:{value:t.dinner}},[t._v("Dinner")]),t._v(" "),r("b-form-checkbox",{attrs:{value:t.all}},[t._v("All Times")])],1)],1)],1),t._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("b-form-checkbox",{attrs:{value:"true"},model:{value:t.can_order,callback:function(e){t.can_order=e},expression:"can_order"}},[t._v("Can members start ordering?")])],1),t._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("b-form-checkbox",{attrs:{value:"true"},model:{value:t.is_special,callback:function(e){t.is_special=e},expression:"is_special"}},[t._v("Is eatry special?")])],1)])]),t._v(" "),r("UploadButton",{attrs:{service:"eatry",label:"Upload Inventory Banner (<500KB & size 1125x582)"},model:{value:t.banner_url,callback:function(e){t.banner_url=e},expression:"banner_url"}})],1)])],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);