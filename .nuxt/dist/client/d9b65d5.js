(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{322:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},324:function(t,e,n){},329:function(t,e,n){"use strict";var r=n(324);n.n(r).a},330:function(t,e,n){"use strict";n(40);var r=n(12),l=n(67),o=n.n(l),c={props:{name:{type:String,default:null},label:{type:String,default:null},service:{type:String,default:"images"},url:{type:String,default:null}},data:function(){return{publicUrl:null}},methods:{onFileChange:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.target.files[0]){n.next=3;break}return n.abrupt("return");case 3:if(!(r.size>5e5)){n.next=6;break}return e.$bvToast.toast("File size must not be greater than 500kb",{variant:"warning"}),n.abrupt("return");case 6:return l=r.type,e.url=URL.createObjectURL(r),n.next=10,e.getSignedUrl(l);case 10:return o=n.sent,e.publicUrl=o.public_url,e.$bvToast.toast("Uploading image. Please wait..."),n.next=15,e.uploadUrl(o.signed_url,r,l).then((function(t){e.$emit("input",e.publicUrl),e.$bvToast.toast("Image uploaded successfully",{variant:"success",solid:!0})})).catch((function(t){e.$bvToast.toast(t.message,{title:"Error",variant:"danger",solid:!0})}));case 15:n.sent;case 16:case"end":return n.stop()}}),n)})))()},getSignedUrl:function(t){var e=this,n=this.service;return this.$images.getSignedUrl(n,t).then((function(t){return t.data.data})).catch((function(t){var n=t.response;e.$bvToast.toast(JSON.stringify(n.data.errors),{title:"Error",variant:"danger",solid:!0})}))},uploadUrl:function(t,e,n){var r=this;return o.a.put(t,e,{headers:{"Content-Type":n}}).then((function(t){return t})).catch((function(t){var e=t.response;r.$bvToast.toast(JSON.stringify(e.data),{variant:"danger",solid:!0})}))}}},d=(n(329),n(11)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mr-b-20",attrs:{id:"preview"}},[t.url?n("img",{attrs:{src:t.url}}):t._e()]),t._v(" "),n("div",{staticClass:"bg-lgray pd-10 pd-l-20 upload-btn-wrapper pd-0"},[n("button",{staticClass:"btn"},[n("i",{staticClass:"fa fa-paperclip mr-r-10"}),t._v(" "+t._s(t.label))]),t._v(" "),n("input",{attrs:{name:t.name,type:"file",accept:"image/*"},on:{change:t.onFileChange}})])])}),[],!1,null,null,null);e.a=component.exports},513:function(t,e,n){"use strict";n.r(e);n(40);var r=n(12),l=n(322),o=n(330),c=n(67),d=n.n(c),m={layout:"ShackDash",components:{MainTitle:l.a,UploadButton:o.a},data:function(){return{url:null,loading:!1,first_name:"",last_name:"",picture:"#",email:"",password:"",service:"images"}},methods:{onFileChange:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,l,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.target.files[0]){n.next=3;break}return n.abrupt("return");case 3:if(!(r.size>5e5)){n.next=6;break}return e.$bvToast.toast("File size must not be greater than 500kb",{variant:"warning"}),n.abrupt("return");case 6:return l=r.type,e.url=URL.createObjectURL(r),n.next=10,e.getSignedUrl(l);case 10:return o=n.sent,e.picture=o.public_url,e.$bvToast.toast("Uploading image. Please wait..."),n.next=15,e.uploadUrl(o.signed_url,r,l).then((function(t){e.$emit("input",e.publicUrl),e.$bvToast.toast("Image uploaded successfully",{variant:"success",solid:!0})})).catch((function(t){e.$bvToast.toast(t.message,{title:"Error",variant:"danger",solid:!0})}));case 15:n.sent;case 16:case"end":return n.stop()}}),n)})))()},getSignedUrl:function(t){var e=this,n=this.service;return this.$images.getSignedUrl(n,t).then((function(t){return t.data.data})).catch((function(t){var n=t.response;e.$bvToast.toast(JSON.stringify(n.data.errors),{title:"Error",variant:"danger",solid:!0})}))},uploadUrl:function(t,e,n){var r=this;return d.a.put(t,e,{headers:{"Content-Type":n}}).then((function(t){return t})).catch((function(t){var e=t.response;r.$bvToast.toast(JSON.stringify(e.data),{variant:"danger",solid:!0})}))},addAdmin:function(){var t=this,picture=this.picture,e=this.first_name,n=this.last_name,r=this.email,l=this.password;this.loading=!this.loading,this.$admin.addAnAdmin({picture:picture,first_name:e,last_name:n,email:r,password:l}).then((function(r){r.data;t.loading=!t.loading,t.$bvToast.toast("".concat(e," ").concat(n," added successfully"),{title:"Success",variant:"success",solid:!0}),t.$router.push({name:"space-admins"})})).catch((function(e){var n=e.response?"".concat(e.response.data.message," ").concat(JSON.stringify(e.response.data.errors)):e.message;t.$bvToast.toast(n,{title:"Error",variant:"danger",solid:!0}),t.loading=!t.loading}))}}},v=n(11),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.addAdmin(e)}}},[n("base-header",{staticClass:"pb-6",attrs:{type:""}},[n("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[n("MainTitle",{attrs:{title:"Adminstrators",subtitle:"Add Admin"}}),t._v(" "),n("b-button",{staticClass:"btn btn-primary text-white",attrs:{disabled:t.loading,type:"submit"}},[t._v("Add Adminstrator")])],1)]),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("card",[n("div",{staticClass:"d-flex align-items-center mr-b-20"},[n("img",{staticClass:"mr-r-20 rounded-circle avatar-xl",attrs:{src:t.url?t.url:"/img/placeholder.jpg"}}),t._v(" "),n("div",[n("div",{staticClass:"upload-btn-wrapper"},[n("button",{staticClass:"btn btn-outline-primary sh-btn-outline"},[t._v("\n                    UPLOAD PHOTO\n                  ")]),t._v(" "),n("input",{attrs:{type:"file"},on:{change:t.onFileChange}})])])]),t._v(" "),n("div",{staticClass:"row"},[n("base-input",{staticClass:"col-md-6",attrs:{id:"firstName",label:"First Name",placeholder:"First Name"},model:{value:t.first_name,callback:function(e){t.first_name=e},expression:"first_name"}}),t._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{id:"lastName",label:"Last Name",placeholder:"Last Name"},model:{value:t.last_name,callback:function(e){t.last_name=e},expression:"last_name"}}),t._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{id:"email",label:"Email",placeholder:"Email",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("base-input",{staticClass:"col-md-6",attrs:{id:"password",type:"password",label:"Password",placeholder:"********"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])],1)])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);