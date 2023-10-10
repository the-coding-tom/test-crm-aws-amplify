(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{322:function(t,e,n){"use strict";var c={props:{title:{type:String,default:""},subtitle:{type:String,default:""},info:{type:String,default:""}}},o=n(11),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},323:function(t,e,n){"use strict";var c={props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},o=n(11),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"page-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),n("b",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}]},[t._v("•")]),t._v(" "+t._s(t.subtitle))])}),[],!1,null,null,null);e.a=component.exports},386:function(t,e,n){},458:function(t,e,n){"use strict";var c=n(386);n.n(c).a},540:function(t,e,n){"use strict";n.r(e);n(9),n(3),n(7),n(6),n(5),n(8),n(40);var c,o=n(12),r=n(1),l=(n(325),n(116),n(326)),v=n.n(l),d=(n(17),n(327),n(328)),m=n.n(d),_=n(117),h=n(322),f=n(323),I=n(44);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w={layout:"ShackDash",components:(c={BaseHeader:_.a,SectionTitle:f.a,MainTitle:h.a},Object(r.a)(c,m.a.name,m.a),Object(r.a)(c,v.a.name,v.a),c),asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route.params.id,e.next=3,t.store.dispatch("invoice/getOneInvoice",n);case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{invoiceItem:{description:null,amount:null,itemIndex:null,item_id:null},addInvoice:{description:null,company_id:null,days_until_due:0,items:[],footer:null,notes:null},modals:{classic:!1},text:"For employees of a startup that do not pay. This membership will run for 10 days and will cover a total value of $100."}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(I.b)({invoice:function(t){return t.invoice.oneInvoice.data},currency_symbol:function(t){return t.space.currentSpace.currency_symbol},currency:function(t){return t.space.currentSpace.currency},tax_rate:function(t){return t.space.currentSpace.tax_rate}})),methods:{addInvoiceItem:function(){if(null!=this.invoiceItem.itemIndex){var data=this.addInvoice.items[this.invoiceItem.itemIndex];data.description=this.invoiceItem.description,data.amount=this.invoiceItem.amount,this.modals.classic=!1,this.invoiceItem.description=null,this.invoiceItem.amount=null}else{var t=this.invoiceItem,e={description:t.description,amount:t.amount};this.addInvoice.items.push(e),this.invoiceItem.description=null,this.invoiceItem.amount=null,this.modals.classic=!1}},removeItems:function(t){this.addInvoice.items.splice(t,1)},editInvoiceItem:function(t,e){this.invoiceItem.description=t.description,this.invoiceItem.amount=t.amount,this.invoiceItem.item_id=t.id,this.modals.classic=!0},openModal:function(){this.invoiceItem.description=null,this.invoiceItem.amount=null,this.invoiceItem.itemIndex=null,this.invoiceItem.item_id=null,this.modals.classic=!0},sendInvoice:function(){this.$store.dispatch("invoice/createInvoice",this.addInvoice)},updateInvoiceItem:function(){var t={items:[]};t.items.push(this.invoiceItem),this.invoiceItem.item_id?(this.$store.dispatch("invoice/updateInvoiceItem",this.invoiceItem),this.modals.classic=!1):(this.$store.dispatch("invoice/addItemToInvoice",t),this.modals.classic=!1)},deleteInvoiceItem:function(t){var data={item_id:t};confirm("Are you sure?")&&this.$store.dispatch("invoice/deleteInvoiceItem",data)},downloadPdf:function(){var t=document.getElementById("invoice-container").innerHTML,e=document.body.innerHTML;document.body.innerHTML=t,window.print(),document.body.innerHTML=e}}},C=(n(458),n(11)),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header",{staticClass:"pb-6",attrs:{type:""}},[n("div",{staticClass:"d-flex justify-content-between py-4"},[n("MainTitle",{attrs:{title:"Invoice Preview"}}),t._v(" "),n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.downloadPdf}},[t._v("\n        Download Pdf\n      ")])],1)]),t._v(" "),n("div",{staticClass:"container-fluid mt--6 mr-b-30",attrs:{id:"invoice-container"}},[n("div",{staticClass:"card-deck flex-column flex-xl-row"},[n("card",[t._v("\n        Invoice "+t._s(t.invoice.inv_number)+"\n        "),n("hr"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7"},[n("h3",[t._v(t._s(t.invoice.company.contact_name))]),t._v(" "),n("div",{staticClass:"text-muted"},[t._v("\n              "+t._s(t.invoice.company.address)+"\n            ")])]),t._v(" "),n("div",{staticClass:"col-md-5 text-right"},[n("h3",[t._v(t._s(t.$store.state.space.currentSpace.name))]),t._v(" "),n("div",{staticClass:"text-muted"},[t._v("\n              "+t._s(t.$store.state.space.currentSpace.address)+"\n            ")])])]),t._v(" "),n("div",{staticClass:"row mr-t-30"},[n("div",{staticClass:"col-md-7"}),t._v(" "),n("div",{staticClass:"col-md-5 text-right"},[t._v("\n            Issue Date: "+t._s(t.$moment(t.invoice.created_at).format("ll"))+" "),n("br"),t._v("\n            Pay By: "+t._s(t.$moment(t.invoice.created_at).add(t.invoice.day_until_due,"d").format("ll"))+"\n          ")])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7"},[n("div",{staticClass:"sh_prev_bf"},[n("div",{staticClass:"col-md-12"},[n("h3",{staticClass:"mr-b-20"},[n("b",[t._v("Invoice Item(s)")])]),t._v(" "),t._l(t.invoice.invoice_items,(function(e){return n("div",{key:e.id,staticClass:"row sh-inv_item"},[n("div",{staticClass:"col-md-7"},[t._v(t._s(e.description))]),t._v(" "),n("div",{staticClass:"col-md-5 text-right"},[n("div",{staticClass:"d-flex justify-content-between"},[t.invoice.finalize?t._e():n("a",{staticClass:"text-primary",attrs:{href:"javascript:void(0)"},on:{click:function(n){return t.editInvoiceItem(e,t.index)}}},[n("i",{staticClass:"fa fa-pen"}),t._v(" Edit\n                      ")]),t._v(" "),t.invoice.finalize?t._e():n("a",{staticClass:"text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(n){return t.deleteInvoiceItem(e.id)}}},[n("i",{staticClass:"fa fa-trash"}),t._v(" Delete\n                      ")])]),t._v(" "),n("div",[t._v(t._s(t.currency_symbol)+t._s(e.amount))]),t._v(" "),n("div",{staticClass:"text-muted"})])])})),t._v(" "),n("modal",{attrs:{show:t.modals.classic},on:{"update:show":function(e){return t.$set(t.modals,"classic",e)}}},[n("SectionTitle",{staticClass:"mr-tb-20",attrs:{slot:"header",subtitle:t.invoice.company.name,title:"Add New Item"},slot:"header"}),t._v(" "),n("base-input",{attrs:{label:"Description",placeholder:"Add a description about item"},model:{value:t.invoiceItem.description,callback:function(e){t.$set(t.invoiceItem,"description",e)},expression:"invoiceItem.description"}}),t._v(" "),n("div",{staticClass:"row"},[n("base-input",{staticClass:"col-md-12",attrs:{label:"Amount",type:"number",placeholder:"0"},model:{value:t.invoiceItem.amount,callback:function(e){t.$set(t.invoiceItem,"amount",e)},expression:"invoiceItem.amount"}},[n("div",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.currency))])])],1),t._v(" "),n("div",{staticClass:"d-flex justify-content-between mr-t-20"},[n("h3",[t._v("Total Amount")]),t._v(" "),n("h3",[t._v(t._s(t.currency_symbol)+" "+t._s(t.invoiceItem.amount))])]),t._v(" "),n("hr",{staticClass:"mb-0"}),t._v(" "),n("template",{slot:"footer"},[n("b-button",{staticClass:"ml-auto",attrs:{type:"button"},on:{click:t.updateInvoiceItem}},[t._v("Save")])],1)],2),t._v(" "),t.invoice.finalize?t._e():n("b-button",{staticClass:"sh-dashbtn",attrs:{outline:"",type:"button",block:""},on:{click:t.openModal}},[t._v("Add New Item")])],2)])]),t._v(" "),n("div",{staticClass:"col-md-5 text-right"},[n("h3",[t._v("\n              Total Amount: "+t._s(t.currency_symbol)+" "+t._s(t.invoice.total_amount)+"\n            ")]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v("\n              Tax: "+t._s(t.invoice.tax_rate)+"\n            ")]),t._v(" "),n("h3",{staticClass:"bdr-b inline-block"},[t._v("\n              PAYABLE AMOUNT: "+t._s(t.currency_symbol)+" "+t._s(t.invoice.total_amount)+"\n            ")])])])])],1),t._v(" "),n("a",{staticClass:"mr-b-30",attrs:{href:"/"+t.$store.state.space.currentSpace.subdomain+"/invoice"}},[n("i",{staticClass:"fa fa-angle-left mr-r-10"}),t._v(" Back\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);