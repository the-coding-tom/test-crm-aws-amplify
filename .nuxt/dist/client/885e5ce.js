(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{322:function(e,t,o){"use strict";var r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},n=o(11),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",{staticClass:"page-title"},[o("span",[e._v(e._s(e.title))]),e._v(" "),o("b",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v("•")]),e._v(" "+e._s(e.subtitle))])}),[],!1,null,null,null);t.a=component.exports},323:function(e,t,o){"use strict";var r={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},n=o(11),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticClass:"page-title"},[o("span",[e._v(e._s(e.title))]),e._v(" "),o("b",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}]},[e._v("•")]),e._v(" "+e._s(e.subtitle))])}),[],!1,null,null,null);t.a=component.exports},324:function(e,t,o){},329:function(e,t,o){"use strict";var r=o(324);o.n(r).a},330:function(e,t,o){"use strict";o(40);var r=o(12),n=o(67),c=o.n(n),l={props:{name:{type:String,default:null},label:{type:String,default:null},service:{type:String,default:"images"},url:{type:String,default:null}},data:function(){return{publicUrl:null}},methods:{onFileChange:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,n,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r=e.target.files[0]){o.next=3;break}return o.abrupt("return");case 3:if(!(r.size>5e5)){o.next=6;break}return t.$bvToast.toast("File size must not be greater than 500kb",{variant:"warning"}),o.abrupt("return");case 6:return n=r.type,t.url=URL.createObjectURL(r),o.next=10,t.getSignedUrl(n);case 10:return c=o.sent,t.publicUrl=c.public_url,t.$bvToast.toast("Uploading image. Please wait..."),o.next=15,t.uploadUrl(c.signed_url,r,n).then((function(e){t.$emit("input",t.publicUrl),t.$bvToast.toast("Image uploaded successfully",{variant:"success",solid:!0})})).catch((function(e){t.$bvToast.toast(e.message,{title:"Error",variant:"danger",solid:!0})}));case 15:o.sent;case 16:case"end":return o.stop()}}),o)})))()},getSignedUrl:function(e){var t=this,o=this.service;return this.$images.getSignedUrl(o,e).then((function(e){return e.data.data})).catch((function(e){var o=e.response;t.$bvToast.toast(JSON.stringify(o.data.errors),{title:"Error",variant:"danger",solid:!0})}))},uploadUrl:function(e,t,o){var r=this;return c.a.put(e,t,{headers:{"Content-Type":o}}).then((function(e){return e})).catch((function(e){var t=e.response;r.$bvToast.toast(JSON.stringify(t.data),{variant:"danger",solid:!0})}))}}},d=(o(329),o(11)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"mr-b-20",attrs:{id:"preview"}},[e.url?o("img",{attrs:{src:e.url}}):e._e()]),e._v(" "),o("div",{staticClass:"bg-lgray pd-10 pd-l-20 upload-btn-wrapper pd-0"},[o("button",{staticClass:"btn"},[o("i",{staticClass:"fa fa-paperclip mr-r-10"}),e._v(" "+e._s(e.label))]),e._v(" "),o("input",{attrs:{name:e.name,type:"file",accept:"image/*"},on:{change:e.onFileChange}})])])}),[],!1,null,null,null);t.a=component.exports},377:function(e,t,o){},399:function(e,t,o){"use strict";(function(e){o(9),o(3),o(7),o(6),o(5),o(8),o(40);var r,n=o(12),c=o(1),l=(o(325),o(116),o(326)),d=o.n(l),m=(o(17),o(327),o(328)),v=o.n(m),_=o(118),f=o(44),h=o(117),y=o(322),k=o(323),x=o(409),C=o(330);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={layout:"ShackDash",components:(r={BaseHeader:h.a,MainTitle:y.a,UploadButton:C.a,SectionTitle:k.a},Object(c.a)(r,v.a.name,v.a),Object(c.a)(r,d.a.name,d.a),Object(c.a)(r,"TagsInput",x.a),r),asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("resources/getAllCategories");case 2:return o=e.route.params.id,t.next=5,e.store.dispatch("resources/getOneRoom",o);case 5:return t.next=7,e.$accesspoint.list();case 7:return r=t.sent,t.next=10,e.$zoomrooms.getRooms().then((function(e){return{zoom_rooms:e,access_points:r}}));case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t)})))()},data:function(){return{searching:!1}},computed:O(O({},Object(f.b)({categories:function(e){return e.resources.categories.data}})),Object(_.b)({name:"resources.addRoom.name",price_per_hour:"resources.addRoom.price_per_hour",color_code:"resources.addRoom.color_code",currency:"resources.addRoom.currency",capacity:"resources.addRoom.capacity",description:"resources.addRoom.description",min_booking_duration:"resources.addRoom.min_booking_duration",max_booking_duration:"resources.addRoom.max_booking_duration",seen_by_admin:"resources.addRoom.seen_by_admin",can_book:"resources.addRoom.can_book",available_booking_time:"resources.addRoom.available_room",photo:"resources.addRoom.photo",category:"resources.addRoom.room_category_id",amenities:"resources.addRoom.amenities",zoom_room_id:"resources.addRoom.zoom_room_id",access_point_id:"resources.addRoom.access_point_id",membership_ids:"resources.addRoom.membership_ids"})),methods:{addNewRoom:function(){this.$store.dispatch("resources/createRoom")},updateRoom:function(){this.$store.dispatch("resources/updateRoom")},searchMembers:function(t){var link="filter[search]=".concat(t,"&filter[status]=accepted");this.searching=!this.searching;var o=this;e.debounce((function(){o.$membership.getAllMemberships(link).then((function(e){var data=e.data;o.searching=!o.searching,o.data=data}))}),350)()}}}}).call(this,o(206))},409:function(e,t,o){"use strict";var r=o(30),n=o(1),c=(o(17),o(377),o(116),o(350)),l=o.n(c),d={name:"TagsInput",components:Object(n.a)({},l.a.name,l.a),model:{prop:"value",event:"change"},props:{value:{type:Array,default:function(){return[]},description:"List of tags"},tagType:{type:String,default:"primary",description:"Tag type (primary|danger etc)"}},data:function(){return{dynamicTags:[],inputVisible:!1,inputValue:""}},created:function(){var e=this;this.$watch("value",(function(t){e.dynamicTags=Object(r.a)(t)}),{immediate:!0})},methods:{handleClose:function(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1),this.$emit("change",this.dynamicTags)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick((function(){e.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var e=this.inputValue;e&&(this.dynamicTags.push(e),this.$emit("change",this.dynamicTags)),this.inputVisible=!1,this.inputValue=""},onInput:function(e){this.$emit("input",e.target.value)}}},m=o(11),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tags-input__wrapper"},[e._l(e.dynamicTags,(function(t,r){return o("el-tag",{key:t+r,attrs:{type:e.tagType,closable:!0,"close-transition":!1,size:"small"},on:{close:function(o){return e.handleClose(t)}}},[e._v("\n    "+e._s(t)+"\n  ")])})),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"saveTagInput",staticClass:"form-control",attrs:{type:"text",placeholder:"Add amenities",size:"mini"},domProps:{value:e.inputValue},on:{input:[function(t){t.target.composing||(e.inputValue=t.target.value)},e.onInput],keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.handleInputConfirm(t))},blur:e.handleInputConfirm}})],2)}),[],!1,null,null,null);t.a=component.exports},568:function(e,t,o){"use strict";o.r(t);var r=o(399).a,n=o(11),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateRoom(t)}}},[o("base-header",{staticClass:"pb-6",attrs:{type:""}},[o("div",{staticClass:"d-flex justify-content-between py-4"},[o("MainTitle",{attrs:{title:"Update Resource"}}),e._v(" "),o("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v(" Save Resource ")])],1)]),e._v(" "),o("div",{staticClass:"container-fluid mt--6"},[o("div",{staticClass:"card-deck flex-column flex-xl-row"},[o("card",[o("h3",{staticClass:"mr-b-20"},[e._v("Resource Details")]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"row pd-r-20"},[o("base-input",{staticClass:"col-md-6",attrs:{id:"name",label:"Name",required:"",placeholder:"Name of Resource"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),o("div",{staticClass:"form-group col-md-6"},[o("label",[e._v("Category")]),e._v(" "),o("el-select",{attrs:{id:"category",required:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},e._l(e.categories,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),o("base-input",{staticClass:"col-md-6",attrs:{id:"pricePerHour",label:"Price per hour",type:"number",step:"0.01",placeholder:"0.00"},model:{value:e.price_per_hour,callback:function(t){e.price_per_hour=t},expression:"price_per_hour"}}),e._v(" "),o("div",{staticClass:"col-md-6"},[o("base-input",{attrs:{id:"capacity",label:"Max Capacity",type:"number",placeholder:"0"},model:{value:e.capacity,callback:function(t){e.capacity=t},expression:"capacity"}}),e._v(" "),o("b-form-text",[e._v("Maximum number of people per room")])],1),e._v(" "),o("div",{staticClass:"form-group col-md-12"},[o("label",[e._v("Description")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{id:"description",placeholder:"Add details about this resource",rows:"4","max-rows":"6"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),e._v(" "),o("base-input",{staticClass:"col-md-6",attrs:{id:"minBookingDuration",label:"Minimum Booking Duration",type:"number",min:"0",step:"30",placeholder:"60"},model:{value:e.min_booking_duration,callback:function(t){e.min_booking_duration=t},expression:"min_booking_duration"}},[o("div",{attrs:{slot:"append"},slot:"append"},[e._v("min")])]),e._v(" "),o("base-input",{staticClass:"col-md-6",attrs:{id:"maxBookingDuration",label:"Maximum Booking Duration",type:"number",step:"30",placeholder:"120"},model:{value:e.max_booking_duration,callback:function(t){e.max_booking_duration=t},expression:"max_booking_duration"}},[o("div",{attrs:{slot:"append"},slot:"append"},[e._v("max")])])],1)]),e._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"row pd-l-20"},[o("base-input",{staticClass:"col-md-12",attrs:{id:"availableBookingTime",label:"Available Booking Time",placeholder:"0"},model:{value:e.available_booking_time,callback:function(t){e.available_booking_time=t},expression:"available_booking_time"}}),e._v(" "),o("b-form-text",{staticClass:"col-md-12"},[e._v("You can enter multiple time frames separated by comma, e.g.\n                e.g. mo-fr 9-17, sa 10-3.")]),e._v(" "),o("div",{staticClass:"col-md-12 form-group"},[o("label",[e._v("Amenities")]),e._v(" "),o("TagsInput",{attrs:{id:"amenities",type:"Text",required:""},model:{value:e.amenities,callback:function(t){e.amenities=t},expression:"amenities"}})],1),e._v(" "),o("b-form-group",{staticClass:"col-md-12",attrs:{label:"Zoom Rooms"}},[o("b-form-select",{attrs:{id:"zoomRoomId",options:e.zoom_rooms,"value-field":"id","text-field":"name"},model:{value:e.zoom_room_id,callback:function(t){e.zoom_room_id=t},expression:"zoom_room_id"}},[o("option",{domProps:{value:null}},[e._v("Choose a zoom room")])])],1),e._v(" "),o("b-form-group",{staticClass:"col-md-12",attrs:{label:"Brivo Access Point"}},[o("b-form-select",{attrs:{id:"accessPointId",options:e.access_points,"value-field":"id","text-field":"name"},model:{value:e.access_point_id,callback:function(t){e.access_point_id=t},expression:"access_point_id"}},[o("option",{domProps:{value:null}},[e._v("\n                      Choose a zoom room\n                  ")])])],1),e._v(" "),o("div",{staticClass:"form-group col-md-12",staticStyle:{"margin-bottom":"16px"}},[o("label",[e._v("Resource Settings")]),e._v(" "),o("b-form-checkbox",{attrs:{id:"canBook",value:!0,"unchecked-value":!1},model:{value:e.can_book,callback:function(t){e.can_book=t},expression:"can_book"}},[e._v("Room is bookable")])],1),e._v(" "),o("div",{staticClass:"form-group col-md-12"},[o("b-form-group",{attrs:{label:"Select Member(s) With Access To "+e.name}},[o("el-select",{attrs:{"remote-method":e.searchMembers,loading:e.searching,required:"",filterable:"",multiple:"true",remote:"","reserve-keyword":"",placeholder:"Choose a member"},model:{value:e.membership_ids,callback:function(t){e.membership_ids=t},expression:"membership_ids"}},e._l(e.data,(function(option){return o("el-option",{key:option.id,attrs:{label:option.first_name+" "+option.last_name,value:option.id}})})),1)],1)],1)],1)])]),e._v(" "),o("UploadButton",{attrs:{url:e.photo,service:"resources",label:"Upload File (<500KB & size 1125x582)"},model:{value:e.photo,callback:function(t){e.photo=t},expression:"photo"}})],1)],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);