(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{322:function(t,e,r){"use strict";var n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},l=r(11),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"page-title"},[r("span",[t._v(t._s(t.title))]),t._v(" "),r("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},324:function(t,e,r){},329:function(t,e,r){"use strict";var n=r(324);r.n(n).a},330:function(t,e,r){"use strict";r(40);var n=r(12),l=r(67),o=r.n(l),c={props:{name:{type:String,default:null},label:{type:String,default:null},service:{type:String,default:"images"},url:{type:String,default:null}},data:function(){return{publicUrl:null}},methods:{onFileChange:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.target.files[0]){r.next=3;break}return r.abrupt("return");case 3:if(!(n.size>5e5)){r.next=6;break}return e.$bvToast.toast("File size must not be greater than 500kb",{variant:"warning"}),r.abrupt("return");case 6:return l=n.type,e.url=URL.createObjectURL(n),r.next=10,e.getSignedUrl(l);case 10:return o=r.sent,e.publicUrl=o.public_url,e.$bvToast.toast("Uploading image. Please wait..."),r.next=15,e.uploadUrl(o.signed_url,n,l).then((function(t){e.$emit("input",e.publicUrl),e.$bvToast.toast("Image uploaded successfully",{variant:"success",solid:!0})})).catch((function(t){e.$bvToast.toast(t.message,{title:"Error",variant:"danger",solid:!0})}));case 15:r.sent;case 16:case"end":return r.stop()}}),r)})))()},getSignedUrl:function(t){var e=this,r=this.service;return this.$images.getSignedUrl(r,t).then((function(t){return t.data.data})).catch((function(t){var r=t.response;e.$bvToast.toast(JSON.stringify(r.data.errors),{title:"Error",variant:"danger",solid:!0})}))},uploadUrl:function(t,e,r){var n=this;return o.a.put(t,e,{headers:{"Content-Type":r}}).then((function(t){return t})).catch((function(t){var e=t.response;n.$bvToast.toast(JSON.stringify(e.data),{variant:"danger",solid:!0})}))}}},d=(r(329),r(11)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mr-b-20",attrs:{id:"preview"}},[t.url?r("img",{attrs:{src:t.url}}):t._e()]),t._v(" "),r("div",{staticClass:"bg-lgray pd-10 pd-l-20 upload-btn-wrapper pd-0"},[r("button",{staticClass:"btn"},[r("i",{staticClass:"fa fa-paperclip mr-r-10"}),t._v(" "+t._s(t.label))]),t._v(" "),r("input",{attrs:{name:t.name,type:"file",accept:"image/*"},on:{change:t.onFileChange}})])])}),[],!1,null,null,null);e.a=component.exports},547:function(t,e,r){"use strict";r.r(e);r(40);var n=r(12),l=r(322),o=r(330),c=r(67),d=r.n(c),f={layout:"ShackDash",components:{MainTitle:l.a,UploadButton:o.a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$admin,n=t.error,l=t.params,o=l.id,e.next=4,r.getAnAdmin(o).then((function(t){var data=t.data;return{id:o,first_name:data.profile&&data.profile.first_name,last_name:data.profile&&data.profile.last_name,url:data.profile&&data.profile.picture}})).catch((function(t){n({statusCode:t.status||404,message:t})}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{url:null,loading:!1,first_name:"",last_name:"",picture:"",email:"",password:"",service:"images"}},methods:{onFileChange:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.target.files[0]){r.next=3;break}return r.abrupt("return");case 3:if(!(n.size>5e5)){r.next=6;break}return e.$bvToast.toast("File size must not be greater than 500kb",{variant:"warning"}),r.abrupt("return");case 6:return l=n.type,e.url=URL.createObjectURL(n),r.next=10,e.getSignedUrl(l);case 10:return o=r.sent,e.picture=o.public_url,e.$bvToast.toast("Uploading image. Please wait..."),r.next=15,e.uploadUrl(o.signed_url,n,l).then((function(t){e.$emit("input",e.publicUrl),e.$bvToast.toast("Image uploaded successfully",{variant:"success",solid:!0})})).catch((function(t){e.$bvToast.toast(t.message,{title:"Error",variant:"danger",solid:!0})}));case 15:r.sent;case 16:case"end":return r.stop()}}),r)})))()},getSignedUrl:function(t){var e=this,r=this.service;return this.$images.getSignedUrl(r,t).then((function(t){return t.data.data})).catch((function(t){var r=t.response;e.$bvToast.toast(JSON.stringify(r.data.errors),{title:"Error",variant:"danger",solid:!0})}))},uploadUrl:function(t,e,r){var n=this;return d.a.put(t,e,{headers:{"Content-Type":r}}).then((function(t){return t})).catch((function(t){var e=t.response;n.$bvToast.toast(JSON.stringify(e.data),{variant:"danger",solid:!0})}))},updateAdmin:function(){var t=this,e=this.id,r=this.first_name,n=this.last_name,picture=this.picture;this.loading=!this.loading,this.$admin.updateAnAdmin(e,{first_name:r,last_name:n,picture:picture}).then((function(e){t.loading=!t.loading,t.$bvToast.toast("Profile updated successfully",{title:"Success",variant:"success",solid:!0}),t.$router.push({name:"space-admins"})})).catch((function(e){var r=e.response?"".concat(e.response.data.message," ~ ").concat(JSON.stringify(e.response.data.errors)):e.message;t.$bvToast.toast(r,{title:"Error",variant:"danger",solid:!0}),t.loading=!t.loading}))}}},m=r(11),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateAdmin(e)}}},[r("base-header",{staticClass:"pb-6",attrs:{type:""}},[r("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[r("MainTitle",{attrs:{title:"Adminstrators",subtitle:"Update Admin"}}),t._v(" "),r("b-button",{staticClass:"btn btn-primary text-white",attrs:{disabled:t.loading,type:"submit"}},[t._v("Update Adminstrator")])],1)]),t._v(" "),r("div",{staticClass:"container-fluid mt--6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("card",[r("div",{staticClass:"d-flex align-items-center mr-b-20"},[r("img",{staticClass:"mr-r-20 rounded-circle avatar-xl",attrs:{src:t.url?t.url:"/img/placeholder.jpg"}}),t._v(" "),r("div",[r("div",{staticClass:"upload-btn-wrapper"},[r("button",{staticClass:"btn btn-outline-primary sh-btn-outline"},[t._v(" UPLOAD PHOTO ")]),t._v(" "),r("input",{attrs:{type:"file"},on:{change:t.onFileChange}})])])]),t._v(" "),r("div",{staticClass:"row"},[r("base-input",{staticClass:"col-md-6",attrs:{id:"firstName",label:"First Name",placeholder:"First Name"},model:{value:t.first_name,callback:function(e){t.first_name=e},expression:"first_name"}}),t._v(" "),r("base-input",{staticClass:"col-md-6",attrs:{id:"lastName",required:!1,label:"Last Name",placeholder:"Last Name"},model:{value:t.last_name,callback:function(e){t.last_name=e},expression:"last_name"}}),t._v(" "),r("base-input",{staticClass:"col-md-6",attrs:{id:"#password",type:"password",label:"Password",placeholder:"********"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])],1)])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);