(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{322:function(t,e,n){"use strict";var o={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},c=n(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},323:function(t,e,n){"use strict";var o={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},c=n(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},385:function(t,e,n){},457:function(t,e,n){"use strict";var o=n(385);n.n(o).a},539:function(t,e,n){"use strict";n.r(e);n(9),n(3),n(7),n(6),n(5),n(8),n(40);var o,c=n(12),r=n(1),l=(n(325),n(116),n(326)),d=n.n(l),v=(n(17),n(327),n(328)),m=n.n(v),f=n(117),_=n(322),h=n(323),y=n(44);function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w={layout:"ShackDash",components:(o={BaseHeader:f.a,SectionTitle:h.a,MainTitle:_.a},Object(r.a)(o,m.a.name,m.a),Object(r.a)(o,d.a.name,d.a),o),asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.route.params.id)||t.rout.go(-1),e.next=4,t.$company.getOneCompany(n);case 4:o=e.sent,data=o.data,t.store.commit("company/setCompanies",data);case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{invoiceItem:{description:null,amount:null,itemIndex:null},addInvoice:{description:"",company_id:"",days_until_due:0,items:[],footer:"",notes:""},modals:{classic:!1},text:"For employees of a startup that do not pay. This membership will run for 10 days and will cover a total value of $100."}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(y.b)({company:function(t){return t.company.companies},currency_symbol:function(t){return t.space.currentSpace.currency_symbol},currency:function(t){return t.space.currentSpace.currency},tax_rate:function(t){return t.space.currentSpace.tax_rate}})),created:function(){this.addInvoice.company_id=this.$route.params.id},methods:{addInvoiceItem:function(){if(null!=this.invoiceItem.itemIndex){var data=this.addInvoice.items[this.invoiceItem.itemIndex];data.description=this.invoiceItem.description,data.amount=this.invoiceItem.amount,this.modals.classic=!1,this.invoiceItem.description=null,this.invoiceItem.amount=null}else{var t=this.invoiceItem,e={description:t.description,amount:t.amount};this.addInvoice.items.push(e),this.invoiceItem.description=null,this.invoiceItem.amount=null,this.modals.classic=!1}},removeItems:function(t){this.addInvoice.items.splice(t,1)},editInvoiceItem:function(t,e){this.invoiceItem.description=t.description,this.invoiceItem.amount=t.amount,this.invoiceItem.itemIndex=e,this.modals.classic=!0},openModal:function(){this.invoiceItem.description=null,this.invoiceItem.amount=null,this.invoiceItem.itemIndex=null,this.modals.classic=!0},sendInvoice:function(){this.$store.dispatch("invoice/createInvoice",this.addInvoice)}}},C=(n(457),n(11)),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-form",{attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.sendInvoice(e)}}},[n("base-header",{staticClass:"pb-6",attrs:{type:""}},[n("div",{staticClass:"d-flex justify-content-between align-items-center py-4"},[n("MainTitle",{attrs:{title:"Add New Invoice"}}),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{disabled:t.$store.state.invoice.isLoading,type:"submit"}},[n("span",{staticClass:"fa fa-plus"}),t._v(" Create Invoice\n        ")])],1)]),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"card-deck flex-column flex-xl-row"},[n("card",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7"},[n("div",{staticClass:"row pd-r-40"},[n("div",{staticClass:"col-md-12"},[n("h3",{staticClass:"mr-b-20"},[t._v("Recipients’ Details")]),t._v(" "),n("div",{staticClass:"row pd-r-40"},[n("base-input",{staticClass:"col-md-12",attrs:{value:t.company.contact_name,label:"Name",readonly:"",placeholder:"Full Name"}}),t._v(" "),n("base-input",{staticClass:"col-md-12",attrs:{label:"No. days before due",type:"number",placeholder:"0"},model:{value:t.addInvoice.days_until_due,callback:function(e){t.$set(t.addInvoice,"days_until_due",e)},expression:"addInvoice.days_until_due"}}),t._v(" "),n("base-input",{staticClass:"col-md-12",attrs:{value:t.company.name,label:"Company",readonly:"",placeholder:"Awesome Co"}}),t._v(" "),n("base-input",{staticClass:"col-md-12",attrs:{value:t.company.billing_email,label:"Billing Email",readonly:"",placeholder:"Awesome Co"}}),t._v(" "),n("div",{staticClass:"form-group col-md-12"},[n("label",[t._v("Address")]),t._v(" "),n("textarea",{staticClass:"form-control",attrs:{placeholder:"Add Address",rows:"4",readonly:"","max-rows":"6"},domProps:{value:t.company.address}})]),t._v(" "),n("div",{staticClass:"form-group col-md-12"},[n("label",[t._v("Invoice Description")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addInvoice.description,expression:"addInvoice.description"}],staticClass:"form-control",attrs:{placeholder:"Add details you want on invoice",rows:"4","max-rows":"6"},domProps:{value:t.addInvoice.description},on:{input:function(e){e.target.composing||t.$set(t.addInvoice,"description",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group col-md-12"},[n("label",[t._v("Invoice Footer")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addInvoice.footer,expression:"addInvoice.footer"}],staticClass:"form-control",attrs:{placeholder:"Add invoice footer",rows:"4","max-rows":"6"},domProps:{value:t.addInvoice.footer},on:{input:function(e){e.target.composing||t.$set(t.addInvoice,"footer",e.target.value)}}})])],1)])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Notes (only visible to Admins)")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addInvoice.notes,expression:"addInvoice.notes"}],staticClass:"form-control",attrs:{placeholder:"Add notes you want to keep for this invoice",rows:"4","max-rows":"6"},domProps:{value:t.addInvoice.notes},on:{input:function(e){e.target.composing||t.$set(t.addInvoice,"notes",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-md-5"},[n("h3",{staticClass:"mr-b-20"},[t._v("Add Invoice Item(s)")]),t._v(" "),t._l(t.addInvoice.items,(function(e,o){return n("div",{key:o,staticClass:"row sh-inv_item"},[n("div",{staticClass:"col-md-7"},[t._v(t._s(e.description))]),t._v(" "),n("div",{staticClass:"col-md-5 text-right"},[n("div",{staticClass:"d-flex justify-content-between"},[n("a",{staticClass:"text-primary",attrs:{href:"javascript:void(0)"},on:{click:function(n){return t.editInvoiceItem(e,o)}}},[n("i",{staticClass:"fa fa-pen"}),t._v(" Edit\n                    ")]),t._v(" "),n("a",{staticClass:"text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.removeItems(o)}}},[n("i",{staticClass:"fa fa-trash"}),t._v(" Delete\n                    ")])]),t._v(" "),n("div",[t._v(t._s(t.currency_symbol)+t._s(e.amount))]),t._v(" "),n("div",{staticClass:"text-muted"},[n("br"),t._v("\n                    Net Amount: "+t._s(t.currency_symbol)+t._s(e.amount)+"\n                  ")])])])})),t._v(" "),n("modal",{attrs:{show:t.modals.classic},on:{"update:show":function(e){return t.$set(t.modals,"classic",e)}}},[n("SectionTitle",{staticClass:"mr-tb-20",attrs:{slot:"header",subtitle:t.company.name,title:"Add New Item"},slot:"header"}),t._v(" "),n("base-input",{attrs:{label:"Description",placeholder:"Add a description about item"},model:{value:t.invoiceItem.description,callback:function(e){t.$set(t.invoiceItem,"description",e)},expression:"invoiceItem.description"}}),t._v(" "),n("div",{staticClass:"row"},[n("base-input",{staticClass:"col-md-12",attrs:{label:"Amount",type:"number",placeholder:"0"},model:{value:t.invoiceItem.amount,callback:function(e){t.$set(t.invoiceItem,"amount",e)},expression:"invoiceItem.amount"}},[n("div",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.currency))])])],1),t._v(" "),n("div",{staticClass:"d-flex justify-content-between mr-t-20"},[n("h3",[t._v("Total Amount")]),t._v(" "),n("h3",[t._v(t._s(t.currency_symbol)+" "+t._s(t.invoiceItem.amount))])]),t._v(" "),n("hr",{staticClass:"mb-0"}),t._v(" "),n("template",{slot:"footer"},[n("b-button",{staticClass:"ml-auto",attrs:{type:"button"},on:{click:t.addInvoiceItem}},[t._v("Save")])],1)],2),t._v(" "),n("b-button",{staticClass:"sh-dashbtn",attrs:{outline:"",type:"button",block:""},on:{click:t.openModal}},[t._v("Add New Item")])],2)])])],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);