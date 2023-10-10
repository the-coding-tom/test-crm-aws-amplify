(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{322:function(e,t,r){"use strict";var n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},o=r(11),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"page-title"},[r("span",[e._v(e._s(e.title))]),e._v(" "),r("b",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v("•")]),e._v(" "+e._s(e.subtitle))])}),[],!1,null,null,null);t.a=component.exports},323:function(e,t,r){"use strict";var n={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},o=r(11),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{staticClass:"page-title"},[r("span",[e._v(e._s(e.title))]),e._v(" "),r("b",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v("•")]),e._v(" "+e._s(e.subtitle))])}),[],!1,null,null,null);t.a=component.exports},324:function(e,t,r){},329:function(e,t,r){"use strict";var n=r(324);r.n(n).a},330:function(e,t,r){"use strict";r(40);var n=r(12),o=r(67),l=r.n(o),c={props:{name:{type:String,default:null},label:{type:String,default:null},service:{type:String,default:"images"},url:{type:String,default:null}},data:function(){return{publicUrl:null}},methods:{onFileChange:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.target.files[0]){r.next=3;break}return r.abrupt("return");case 3:if(!(n.size>5e5)){r.next=6;break}return t.$bvToast.toast("File size must not be greater than 500kb",{variant:"warning"}),r.abrupt("return");case 6:return o=n.type,t.url=URL.createObjectURL(n),r.next=10,t.getSignedUrl(o);case 10:return l=r.sent,t.publicUrl=l.public_url,t.$bvToast.toast("Uploading image. Please wait..."),r.next=15,t.uploadUrl(l.signed_url,n,o).then((function(e){t.$emit("input",t.publicUrl),t.$bvToast.toast("Image uploaded successfully",{variant:"success",solid:!0})})).catch((function(e){t.$bvToast.toast(e.message,{title:"Error",variant:"danger",solid:!0})}));case 15:r.sent;case 16:case"end":return r.stop()}}),r)})))()},getSignedUrl:function(e){var t=this,r=this.service;return this.$images.getSignedUrl(r,e).then((function(e){return e.data.data})).catch((function(e){var r=e.response;t.$bvToast.toast(JSON.stringify(r.data.errors),{title:"Error",variant:"danger",solid:!0})}))},uploadUrl:function(e,t,r){var n=this;return l.a.put(e,t,{headers:{"Content-Type":r}}).then((function(e){return e})).catch((function(e){var t=e.response;n.$bvToast.toast(JSON.stringify(t.data),{variant:"danger",solid:!0})}))}}},d=(r(329),r(11)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"mr-b-20",attrs:{id:"preview"}},[e.url?r("img",{attrs:{src:e.url}}):e._e()]),e._v(" "),r("div",{staticClass:"bg-lgray pd-10 pd-l-20 upload-btn-wrapper pd-0"},[r("button",{staticClass:"btn"},[r("i",{staticClass:"fa fa-paperclip mr-r-10"}),e._v(" "+e._s(e.label))]),e._v(" "),r("input",{attrs:{name:e.name,type:"file",accept:"image/*"},on:{change:e.onFileChange}})])])}),[],!1,null,null,null);t.a=component.exports},376:function(e,t,r){"use strict";(function(e){r(9),r(3),r(7),r(6),r(5),r(8),r(40);var n,o=r(12),l=r(1),c=(r(325),r(116),r(326)),d=r.n(c),m=(r(17),r(327),r(328)),v=r.n(m),_=r(118),f=r(44),h=r(117),y=r(322),k=r(323),x=r(330),C=r(409);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={layout:"ShackDash",components:(n={BaseHeader:h.a,MainTitle:y.a,UploadButton:x.a,SectionTitle:k.a},Object(l.a)(n,v.a.name,v.a),Object(l.a)(n,d.a.name,d.a),Object(l.a)(n,"TagsInput",C.a),n),asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.$zoomrooms,o=e.$accesspoint,t.next=3,r.dispatch("resources/getAllCategories");case 3:return t.next=5,o.list();case 5:return l=t.sent,t.next=8,n.getRooms().then((function(e){return{zoom_rooms:e,access_points:l}}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})))()},data:function(){return{loading:!1,searching:!1}},computed:O(O({},Object(f.b)({categories:function(e){return e.resources.categories.data}})),Object(_.b)({name:"resources.addRoom.name",price_per_hour:"resources.addRoom.price_per_hour",category:"resources.addRoom.room_category_id",currency:"resources.addRoom.currency",capacity:"resources.addRoom.capacity",description:"resources.addRoom.description",min_booking_duration:"resources.addRoom.min_booking_duration",max_booking_duration:"resources.addRoom.max_booking_duration",can_book:"resources.addRoom.can_book",available_booking_time:"resources.addRoom.available_room",banner_url:"resources.addRoom.photo",amenities:"resources.addRoom.amenities",zoom_room_id:"resources.addRoom.zoom_room_id",access_point_id:"resources.addRoom.access_point_id",membership_ids:"resources.addRoom.membership_ids"})),methods:{addNewRoom:function(){this.$store.dispatch("resources/createRoom")},searchMembers:function(t){var link="filter[search]=".concat(t,"&filter[status]=accepted");this.searching=!this.searching;var r=this;e.debounce((function(){r.$membership.getAllMemberships(link).then((function(e){var data=e.data;r.searching=!r.searching,r.data=data}))}),350)()}}}}).call(this,r(206))},377:function(e,t,r){},409:function(e,t,r){"use strict";var n=r(30),o=r(1),l=(r(17),r(377),r(116),r(350)),c=r.n(l),d={name:"TagsInput",components:Object(o.a)({},c.a.name,c.a),model:{prop:"value",event:"change"},props:{value:{type:Array,default:function(){return[]},description:"List of tags"},tagType:{type:String,default:"primary",description:"Tag type (primary|danger etc)"}},data:function(){return{dynamicTags:[],inputVisible:!1,inputValue:""}},created:function(){var e=this;this.$watch("value",(function(t){e.dynamicTags=Object(n.a)(t)}),{immediate:!0})},methods:{handleClose:function(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1),this.$emit("change",this.dynamicTags)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick((function(){e.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var e=this.inputValue;e&&(this.dynamicTags.push(e),this.$emit("change",this.dynamicTags)),this.inputVisible=!1,this.inputValue=""},onInput:function(e){this.$emit("input",e.target.value)}}},m=r(11),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tags-input__wrapper"},[e._l(e.dynamicTags,(function(t,n){return r("el-tag",{key:t+n,attrs:{type:e.tagType,closable:!0,"close-transition":!1,size:"small"},on:{close:function(r){return e.handleClose(t)}}},[e._v("\n    "+e._s(t)+"\n  ")])})),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"saveTagInput",staticClass:"form-control",attrs:{type:"text",placeholder:"Add amenities",size:"mini"},domProps:{value:e.inputValue},on:{input:[function(t){t.target.composing||(e.inputValue=t.target.value)},e.onInput],keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.handleInputConfirm(t))},blur:e.handleInputConfirm}})],2)}),[],!1,null,null,null);t.a=component.exports},561:function(e,t,r){"use strict";r.r(t);var n=r(376).a,o=r(11),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.addNewRoom(t)}}},[r("base-header",{staticClass:"pb-6",attrs:{type:""}},[r("div",{staticClass:"d-flex justify-content-between py-4"},[r("MainTitle",{attrs:{title:"Add New Resource"}}),e._v(" "),r("b-button",{attrs:{disabled:e.loading,type:"submit",variant:"primary"}},[e._v("\n          Save Resource\n        ")])],1)]),e._v(" "),r("div",{staticClass:"container-fluid mt--6"},[r("div",{staticClass:"card-deck flex-column flex-xl-row"},[r("card",[r("h3",{staticClass:"mr-b-20"},[e._v("Resource Details")]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row pd-r-20"},[r("base-input",{staticClass:"col-md-6",attrs:{id:"name",label:"Name",required:"",placeholder:"Name of Resource"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",[e._v("Category")]),e._v(" "),r("el-select",{attrs:{id:"category",name:"category",required:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},e._l(e.categories,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),r("base-input",{staticClass:"col-md-6",attrs:{id:"pricePerHour",label:"Price per hour",type:"number",step:"0.01",required:"",placeholder:"0.00"},model:{value:e.price_per_hour,callback:function(t){e.price_per_hour=t},expression:"price_per_hour"}}),e._v(" "),r("div",{staticClass:"col-md-6"},[r("base-input",{attrs:{id:"capacity",label:"Number of Units",type:"number",required:"",placeholder:"0"},model:{value:e.capacity,callback:function(t){e.capacity=t},expression:"capacity"}}),e._v(" "),r("b-form-text",[e._v("How many people can book this at the same\n                  time")])],1),e._v(" "),r("div",{staticClass:"form-group col-md-12"},[r("label",[e._v("Description")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{id:"description",placeholder:"Add details about this resource",rows:"4","max-rows":"6",required:""},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),e._v(" "),r("base-input",{staticClass:"col-md-6",attrs:{id:"minBookingDuration",label:"Minimum Booking Duration",type:"number",min:"0",required:"",placeholder:"0"},model:{value:e.min_booking_duration,callback:function(t){e.min_booking_duration=t},expression:"min_booking_duration"}},[r("div",{attrs:{slot:"append"},slot:"append"},[e._v("min")])]),e._v(" "),r("base-input",{staticClass:"col-md-6",attrs:{id:"maxBookingDuration",label:"Maximum Booking Duration",type:"number",required:"",placeholder:"0"},model:{value:e.max_booking_duration,callback:function(t){e.max_booking_duration=t},expression:"max_booking_duration"}},[r("div",{attrs:{slot:"append"},slot:"append"},[e._v("max")])])],1)]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row pd-l-20"},[r("base-input",{staticClass:"col-md-12",attrs:{id:"availableBookingTime",label:"Available Booking Time",required:"",placeholder:"0"},model:{value:e.available_booking_time,callback:function(t){e.available_booking_time=t},expression:"available_booking_time"}}),e._v(" "),r("b-form-text",{staticClass:"col-md-12"},[e._v("You can enter multiple time frames separated by comma, e.g.\n                e.g. mo-fr 9-17, sa 10-3.")]),e._v(" "),r("div",{staticClass:"col-md-12 form-group"},[r("label",[e._v("Amenities")]),e._v(" "),r("TagsInput",{attrs:{id:"amenities",type:"Text",required:""},model:{value:e.amenities,callback:function(t){e.amenities=t},expression:"amenities"}})],1),e._v(" "),r("b-form-group",{staticClass:"col-md-12",attrs:{label:"Zoom Rooms"}},[r("b-form-select",{attrs:{id:"zoomRoomId",options:e.zoom_rooms,"value-field":"id","text-field":"name"},model:{value:e.zoom_room_id,callback:function(t){e.zoom_room_id=t},expression:"zoom_room_id"}},[r("option",{domProps:{value:null}},[e._v("Choose a zoom room")])])],1),e._v(" "),r("b-form-group",{staticClass:"col-md-12",attrs:{label:"Brivo Access Point"}},[r("b-form-select",{attrs:{id:"accessPointId",options:e.access_points,"value-field":"id","text-field":"name"},model:{value:e.access_point_id,callback:function(t){e.access_point_id=t},expression:"access_point_id"}},[r("option",{domProps:{value:null}},[e._v("\n                      Choose a zoom room\n                  ")])])],1),e._v(" "),r("div",{staticClass:"form-group col-md-12",staticStyle:{"margin-bottom":"16px"}},[r("label",[e._v("Resource Settings")]),e._v(" "),r("b-form-checkbox",{attrs:{id:"canBook",value:!0,"unchecked-value":!1},model:{value:e.can_book,callback:function(t){e.can_book=t},expression:"can_book"}},[e._v("Room is bookable")])],1),e._v(" "),e.can_book?e._e():r("div",{staticClass:"form-group col-md-12"},[r("b-form-group",{attrs:{label:"Select Member(s) With Access To "+e.name}},[r("el-select",{attrs:{"remote-method":e.searchMembers,loading:e.searching,required:"",filterable:"",multiple:"true",remote:"","reserve-keyword":"",placeholder:"Choose a member"},model:{value:e.membership_ids,callback:function(t){e.membership_ids=t},expression:"membership_ids"}},e._l(e.data,(function(option){return r("el-option",{key:option.id,attrs:{label:option.first_name+" "+option.last_name,value:option.id}})})),1)],1)],1)],1)])]),e._v(" "),r("UploadButton",{attrs:{service:"resources",label:"Upload File (<500KB & size 1125x582)"},model:{value:e.banner_url,callback:function(t){e.banner_url=t},expression:"banner_url"}})],1)],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);