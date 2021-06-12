(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{730:function(t,e,n){"use strict";n(7);var r={name:"SelectTemplates",props:{byUser:{default:!1,type:Boolean}},data:function(t){return{loading:!1,text:"",isOpen:!1,tasks:[],headers:[{text:t.$t("hrTask.newHire"),value:"new_hire.first_name"},{text:t.$t("hrTask.toDo"),value:"title"},{text:t.$t("hrTask.assignedTo"),value:"assigned_to.first_name"},{text:t.$t("hrTask.due"),value:"date"},{text:t.$t("hrTask.priority"),value:"priority"}],defaultText:t.$t("selectTemplate.pick")}},mounted:function(){this.getItems()},methods:{returnItem:function(t){this.$emit("clickedItem",t)},getItems:function(){var t=this;this.byUser?this.$hrtasks.getDoneTasks().then((function(e){t.tasks=e})).finally((function(e){t.loading=!1})):this.$hrtasks.getDoneByUserTasks().then((function(e){t.tasks=e})).finally((function(e){t.loading=!1}))},goToPage:function(t,e){this.$router.push({name:"admin-hrtasks-id",params:{id:t.id}})}}},o=n(23),l=n(24),c=n.n(l),d=n(140),m=n(208),f=n(43),_=n(656),v=n(646),h=n(649),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:!0,"max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({},r),[t._v("\n      Completed\n    ")])]}}]),model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._v(" "),n("v-card",{staticClass:"pt-4"},[n("v-card-text",[[n("v-data-table",{staticClass:"elevation-1 mt-4",attrs:{headers:t.headers,items:t.tasks,loading:t.loading,"footer-props":{"items-per-page-options":[50,100,-1]}},on:{"click:row":t.goToPage},scopedSlots:t._u([{key:"no-data",fn:function(){return[t._v("\n            There aren't any to do items (yet).\n          ")]},proxy:!0},{key:"item.new_hire.first_name",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(n.new_hire.first_name)+" "+t._s(n.new_hire.last_name)+"\n          ")]}},{key:"item.assigned_to.first_name",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(n.assigned_to.first_name)+" "+t._s(n.assigned_to.last_name)+"\n          ")]}},{key:"item.date",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(t._f("timeAgo")(n.date))+"\n          ")]}},{key:"item.priority",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(t._f("prio")(n.priority))+"\n          ")]}}])})]],2),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.isOpen=!1}}},[t._v("\n        "+t._s(t.$t("buttons.close"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VDataTable:_.a,VDialog:v.a,VSpacer:h.a})},740:function(t,e,n){var content=n(790);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("b7a00f50",content,!0,{sourceMap:!1})},789:function(t,e,n){"use strict";n(740)},790:function(t,e,n){var r=n(16)(!1);r.push([t.i,".border-bottom[data-v-32e1bcab]{border-bottom:1px solid #e4e4e4}",""]),t.exports=r},894:function(t,e,n){"use strict";n.r(e);n(10),n(7);var r={layout:"admin",components:{CompletedTasksDialog:n(730).a},data:function(t){return{loading:!1,tasks:[],admin:{},allTasks:[],headers:[{text:t.$t("hrTask.newHire"),value:"new_hire.first_name"},{text:t.$t("hrTask.toDo"),value:"name"},{text:t.$t("hrTask.due"),value:"date"},{text:t.$t("hrTask.priority"),value:"priority"}]}},mounted:function(){var t=this;this.loading=!0,this.$hrtasks.getAll().then((function(e){t.allTasks=e,t.tasks=e.filter((function(a){return null!==a.assigned_to&&a.assigned_to.id===t.$store.state.admin.id&&!a.completed}))})).finally((function(e){t.loading=!1}))},methods:{goToPage:function(t,e){this.$router.push({name:"admin-hrtasks-id",params:{id:t.id}})}}},o=(n(789),n(23)),l=n(24),c=n.n(l),d=n(140),m=n(208),f=n(644),_=n(656),v=n(648),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{sm:"12",mb:"6","offset-mb":"3",md:"8","offset-md":"2"}},[n("v-row",{staticClass:"mb-4"},[n("v-col",{attrs:{sm:"6"}},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"5px"}},[t._v("\n        "+t._s(t.$t("hrTask.yourTasks"))+"\n      ")])]),t._v(" "),n("v-col",{staticClass:"text-right",staticStyle:{"margin-top":"12px"},attrs:{sm:"6"}},[n("CompletedTasksDialog",{attrs:{"by-user":""}}),t._v(" "),n("v-btn",{staticStyle:{"margin-right":"0px"},attrs:{color:"success"},on:{click:function(e){return t.$router.push({name:"admin-hrtasks-add"})}}},[t._v("\n        "+t._s(t.$t("hrTask.addTask"))+"\n      ")])],1)],1),t._v(" "),n("v-card",{staticClass:"mb-4"},[[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tasks,loading:t.loading,"footer-props":{"items-per-page-options":[50,100,-1]}},on:{"click:row":t.goToPage},scopedSlots:t._u([{key:"no-data",fn:function(){return[t._v("\n          There are no to do items for you (yet).\n        ")]},proxy:!0},{key:"item.new_hire.first_name",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(n.new_hire.first_name)+" "+t._s(n.new_hire.last_name)+"\n        ")]}},{key:"item.date",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t._f("timeAgo")(n.date))+"\n        ")]}},{key:"item.priority",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t._f("prio")(n.priority))+"\n        ")]}}])})]],2)],1)}),[],!1,null,"32e1bcab",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCol:f.a,VDataTable:_.a,VRow:v.a})}}]);