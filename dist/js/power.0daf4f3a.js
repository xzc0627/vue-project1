(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["power"],{"068a":function(e,t,r){},"08fc":function(e,t,r){var a=r("e1de"),o=r("329d"),n=r("5f2a"),i=!n((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:i},{from:o})},"0e42":function(e,t,r){},"1b18":function(e,t,r){"use strict";var a=r("e1de"),o=r("0484"),n=r("749e"),i=r("5555"),s=r("ef03"),l=r("e4b3").f,c=r("a941"),u=n.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(m,u);var f=m.prototype=u.prototype;f.constructor=m;var p=f.toString,b="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e);if(i(d,e))return"";var r=b?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}},"2da4":function(e,t,r){"use strict";r("0e42")},"2ed3":function(e,t,r){"use strict";r("4677")},3024:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"roles_container"},[r("bread",{attrs:{first:"权限管理",second:"角色列表"}}),r("el-card",{staticClass:"box-card"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisibleAdd=!0}}},[e._v("添加角色")]),[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{type:"expand",label:"展开项",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(a,o){return r("el-row",{key:o,staticClass:"firstRows"},[r("el-col",{attrs:{span:4}},[r("el-tag",{attrs:{effect:"dark",type:"primary",closable:""},on:{close:function(r){return e.deleteTag(a,t.row)}}},[e._v(" "+e._s(a.authName)+" ")]),r("i",{staticClass:"el-icon-caret-right",staticStyle:{"margin-left":"10px"}})],1),r("el-col",{attrs:{span:20}},e._l(a.children,(function(a,o){return r("el-row",{key:o,staticClass:"secondRows"},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{effect:"dark",type:"success",closable:""},on:{close:function(r){return e.deleteTag(a,t.row)}}},[e._v(" "+e._s(a.authName)+" ")]),r("i",{staticClass:"el-icon-caret-right",staticStyle:{"margin-left":"10px"}})],1),r("el-col",{staticClass:"sanji",attrs:{span:18}},e._l(a.children,(function(a,o){return r("el-tag",{key:o,staticClass:"sanjiBtn",attrs:{effect:"dark",type:"warning",closable:""},on:{close:function(r){return e.deleteTag(a,t.row)}}},[e._v(" "+e._s(a.authName)+"===="+e._s(a.id)+" ")])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{label:"#",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.$index+1))])]}}])}),r("el-table-column",{attrs:{label:"角色姓名",prop:"roleName"}}),r("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.editBtn(t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-delete"},on:{click:function(r){return e.deleteRole(t.row)}}},[e._v("删除")]),r("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-setting"},on:{click:function(r){return e.editLeavel(t.row)}}},[e._v("分配权限")])]}}])})],1)]],2),r("el-dialog",{attrs:{title:"分配权限",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-tree",{ref:"tree",attrs:{data:e.treeData,"show-checkbox":"","node-key":"id","default-expand-all":"","default-expanded-keys":[2,3],"default-checked-keys":e.defaultKeys,props:e.defaultProps}}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editRoles}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"添加角色",visible:e.dialogFormVisibleAdd},on:{"update:visible":function(t){e.dialogFormVisibleAdd=t}}},[r("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":e.formLabelWidth,rules:e.rules}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.addForm.roleName,callback:function(t){e.$set(e.addForm,"roleName","string"===typeof t?t.trim():t)},expression:"addForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述","label-width":e.formLabelWidth,prop:"roleDesc"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.addForm.roleDesc,callback:function(t){e.$set(e.addForm,"roleDesc","string"===typeof t?t.trim():t)},expression:"addForm.roleDesc"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisibleAdd=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改角色",visible:e.dialogFormVisibleEdit},on:{"update:visible":function(t){e.dialogFormVisibleEdit=t}}},[r("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":e.formLabelWidth,rules:e.rules}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.editForm.roleName,callback:function(t){e.$set(e.editForm,"roleName","string"===typeof t?t.trim():t)},expression:"editForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述","label-width":e.formLabelWidth,prop:"roleDesc"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.editForm.roleDesc,callback:function(t){e.$set(e.editForm,"roleDesc","string"===typeof t?t.trim():t)},expression:"editForm.roleDesc"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisibleEdit=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editRole}},[e._v("确 定")])],1)],1)],1)},o=[],n=r("e7e7"),i=r("4833"),s=(r("dd8d"),r("a573"),r("5cb1"),r("6a61"),{data:function(){return{tableData:[],treeData:[],defaultKeys:[],rolesId:"",defaultProps:{children:"children",label:"authName"},dialogFormVisible:!1,dialogFormVisibleAdd:!1,formLabelWidth:"80px",addForm:{roleName:"",roleDesc:""},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:8,message:"长度在 2 到 8 个字符",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"},{min:2,max:39,message:"长度在 2 到 39 个字符",trigger:"blur"}]},editForm:{roleName:"",roleDesc:""},dialogFormVisibleEdit:!1}},created:function(){this.getRoles()},methods:{getRoles:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios("/roles");case 2:r=t.sent,e.tableData=r.data.data;case 4:case"end":return t.stop()}}),t)})))()},editLeavel:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.defaultKeys=[],t.rolesId=e.id,r.next=4,t.axios("/rights/tree ");case 4:a=r.sent,t.treeData=a.data.data,t.dialogFormVisible=!0,t.recursion(e,t.defaultKeys);case 8:case"end":return r.stop()}}),r)})))()},recursion:function(e,t){var r=this;if(!e.children)return t.push(e.id),!1;e.children.forEach((function(e){r.recursion(e,t)}))},editRoles:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[].concat(Object(n["a"])(e.$refs.tree.getCheckedKeys()),Object(n["a"])(e.$refs.tree.getHalfCheckedKeys())),a=r.join(","),t.next=4,e.axios.post("/roles/".concat(e.rolesId,"/rights"),{rids:a});case 4:o=t.sent,200===o.data.meta.status&&e.$message({message:o.data.meta.msg,type:"success"}),e.dialogFormVisible=!1,e.getRoles();case 8:case"end":return t.stop()}}),t)})))()},addRole:function(){var e=this;this.$refs.addForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,e.axios.post("/roles",e.addForm);case 3:a=t.sent,201===a.data.meta.status&&(e.$message({message:a.data.meta.msg,type:"success"}),e.dialogFormVisibleAdd=!1,e.getRoles());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},editBtn:function(e){this.editForm.roleName=e.roleName,this.editForm.roleDesc=e.roleDesc,this.editForm.id=e.id,this.dialogFormVisibleEdit=!0},editRole:function(){var e=this;this.$refs.editForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,e.axios.put("/roles/".concat(e.editForm.id),e.editForm);case 3:a=t.sent,200===a.data.meta.status&&(e.$message({message:a.data.meta.msg,type:"success"}),e.dialogFormVisibleEdit=!1,e.getRoles());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},deleteRole:function(e){var t=this,r=e.id;this.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.delete("/roles/".concat(r));case 2:a=e.sent,200===a.data.meta.status&&(t.$message({type:"success",message:"删除成功!"}),t.getRoles());case 4:case"end":return e.stop()}}),e)})))).catch((function(){}))},deleteTag:function(e,t){var r=this;this.$confirm("是否删除该权限？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r.axios.delete("/roles/".concat(t.id,"/rights/").concat(e.id));case 2:o=a.sent,200===o.data.meta.status&&(r.$message({type:"success",message:"删除成功!"}),t.children=o.data.data);case 4:case"end":return a.stop()}}),a)})))).catch()}}}),l=s,c=(r("d2ee"),r("4ac2")),u=Object(c["a"])(l,a,o,!1,null,"34060f7d",null);t["default"]=u.exports},"329d":function(e,t,r){"use strict";var a=r("8b6d"),o=r("67fe"),n=r("fb7a"),i=r("c79f"),s=r("512c"),l=r("ea64"),c=r("44cc");e.exports=function(e){var t,r,u,d,m,f,p=o(e),b="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,v=void 0!==h,w=c(p),y=0;if(v&&(h=a(h,g>2?arguments[2]:void 0,2)),void 0==w||b==Array&&i(w))for(t=s(p.length),r=new b(t);t>y;y++)f=v?h(p[y],y):p[y],l(r,y,f);else for(d=w.call(p),m=d.next,r=new b;!(u=m.call(d)).done;y++)f=v?n(d,h,[u.value,y],!0):u.value,l(r,y,f);return r.length=y,r}},"43c5":function(e,t,r){var a=r("ec76");a("iterator")},4677:function(e,t,r){},"5cb1":function(e,t,r){"use strict";var a=r("e1de"),o=r("03a8"),n=r("25b6"),i=r("1790"),s=[].join,l=o!=Object,c=i("join",",");a({target:"Array",proto:!0,forced:l||!c},{join:function(e){return s.call(n(this),void 0===e?",":e)}})},9113:function(e,t,r){var a=r("0484"),o=r("e4b3").f,n=Function.prototype,i=n.toString,s=/^\s*function ([^ (]*)/,l="name";a&&!(l in n)&&o(n,l,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},"9e79":function(e,t,r){"use strict";var a=r("e1de"),o=r("ef03"),n=r("29ba"),i=r("b0cd"),s=r("512c"),l=r("25b6"),c=r("ea64"),u=r("655b"),d=r("7415"),m=d("slice"),f=u("species"),p=[].slice,b=Math.max;a({target:"Array",proto:!0,forced:!m},{slice:function(e,t){var r,a,u,d=l(this),m=s(d.length),g=i(e,m),h=i(void 0===t?m:t,m);if(n(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?o(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(d,g,h);for(a=new(void 0===r?Array:r)(b(h-g,0)),u=0;g<h;g++,u++)g in d&&c(a,u,d[g]);return a.length=u,a}})},a573:function(e,t,r){"use strict";var a=r("e1de"),o=r("a299"),n=r("29ba"),i=r("ef03"),s=r("67fe"),l=r("512c"),c=r("ea64"),u=r("eacf"),d=r("7415"),m=r("655b"),f=r("c1ad"),p=m("isConcatSpreadable"),b=9007199254740991,g="Maximum allowed index exceeded",h=f>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),v=d("concat"),w=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:n(e)},y=!h||!v;a({target:"Array",proto:!0,forced:y},{concat:function(e){var t,r,a,o,n,i=s(this),d=u(i,0),m=0;for(t=-1,a=arguments.length;t<a;t++)if(n=-1===t?i:arguments[t],w(n)){if(o=l(n.length),m+o>b)throw TypeError(g);for(r=0;r<o;r++,m++)r in n&&c(d,m,n[r])}else{if(m>=b)throw TypeError(g);c(d,m++,n)}return d.length=m,d}})},a766:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rights_container"},[r("bread",{attrs:{first:"权限管理",second:"权限列表"}}),r("el-card",{staticClass:"box-card"},[[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"authName",label:"权限名称"}}),r("el-table-column",{attrs:{prop:"path",label:"路径"}}),r("el-table-column",{attrs:{prop:"level",label:"权限等级"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[0==t.row.level?r("el-tag",[e._v("一级")]):1==t.row.level?r("el-tag",{attrs:{type:"success"}},[e._v("二级")]):r("el-tag",{attrs:{type:"warning"}},[e._v("三级")])],1)]}}])})],1)]],2)],1)},o=[],n=r("4833"),i=(r("6a61"),{data:function(){return{tableData:[]}},created:function(){this.getRights()},methods:{getRights:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios("/rights/list ");case 2:r=t.sent,e.tableData=r.data.data;case 4:case"end":return t.stop()}}),t)})))()}}}),s=i,l=(r("2da4"),r("4ac2")),c=Object(l["a"])(s,a,o,!1,null,"a784d88c",null);t["default"]=c.exports},c0b4:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user_container"},[r("bread",{attrs:{first:"用户管理",second:"用户列表"}}),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"search"},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:e.params.query,callback:function(t){e.$set(e.params,"query",t)},expression:"params.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getData},slot:"append"})],1),r("el-button",{staticClass:"addBtn",attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加用户")])],1),[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{label:"#",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.$index+1))])]}}])}),r("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.username))])]}}])}),r("el-table-column",{attrs:{label:"邮箱",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.email))])]}}])}),r("el-table-column",{attrs:{label:"电话",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.mobile))])]}}])}),r("el-table-column",{attrs:{label:"角色",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.role_name))])]}}])}),r("el-table-column",{attrs:{label:"状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#409EFF","inactive-color":"#DCDFE6"},on:{change:function(r){return e.swichChange(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.editUser(t.row)}}}),r("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-delete"},on:{click:function(r){return e.delUser(t.row)}}}),r("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-setting"},on:{click:function(r){return e.allot(t.row)}}})]}}])})],1)],r("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[2,5,10,50],"page-size":e.params.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],2),r("el-dialog",{attrs:{title:"添加用户",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"用户名","label-width":e.formLabelWidth,prop:"username"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),r("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth,prop:"password"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("el-form-item",{attrs:{label:"邮箱","label-width":e.formLabelWidth,prop:"email"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{label:"电话","label-width":e.formLabelWidth,prop:"mobile"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.ruleForm.mobile,callback:function(t){e.$set(e.ruleForm,"mobile",t)},expression:"ruleForm.mobile"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeAdd}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"编辑用户：",visible:e.dialogFormVisibleEdit},on:{"update:visible":function(t){e.dialogFormVisibleEdit=t}}},[r("el-form",{ref:"editRuleForm",attrs:{model:e.editRuleForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"用户名","label-width":e.formLabelWidth}},[r("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.editRuleForm.username,callback:function(t){e.$set(e.editRuleForm,"username",t)},expression:"editRuleForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱","label-width":e.formLabelWidth,prop:"email"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.editRuleForm.email,callback:function(t){e.$set(e.editRuleForm,"email",t)},expression:"editRuleForm.email"}})],1),r("el-form-item",{attrs:{label:"电话","label-width":e.formLabelWidth,prop:"mobile"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.editRuleForm.mobile,callback:function(t){e.$set(e.editRuleForm,"mobile",t)},expression:"editRuleForm.mobile"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisibleEdit=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUserBtn}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配角色：",visible:e.dialogFormVisibleAllot},on:{"update:visible":function(t){e.dialogFormVisibleAllot=t}}},[r("el-form",{attrs:{model:e.userinfo}},[r("el-form-item",{attrs:{label:"当前的用户：","label-width":"100px"}},[e._v(e._s(e.userinfo.username))]),r("el-form-item",{attrs:{label:"当前的角色：","label-width":"100px"}},[e._v(" "+e._s(e.userinfo.role_name)+" ")]),r("el-form-item",{attrs:{label:"分配新角色：","label-width":"100px"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.rid,callback:function(t){e.rid=t},expression:"rid"}},e._l(e.roleTable,(function(e,t){return r("el-option",{key:t,attrs:{label:e.roleName,value:e.id}})})),1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisibleAllot=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.changeAllot}},[e._v("确 定")])],1)],1)],1)},o=[],n=r("4833"),i=(r("a573"),r("6a61"),{data:function(){var e=function(e,t,r){var a=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;a.test(t)?r():r(new Error("密码至少包含 数字和英文，长度6-20"))},t=function(e,t,r){var a=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;a.test(t)?r():r(new Error("邮箱不合规"))},r=function(e,t,r){var a=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57]|19[0-9])[0-9]{8}$/;a.test(t)?r():r(new Error("请输入正确的手机号!"))};return{tableData:[],total:0,params:{query:"",pagenum:1,pagesize:2},currentPage4:1,dialogFormVisible:!1,dialogFormVisibleEdit:!1,formLabelWidth:"80px",ruleForm:{username:"",password:"",email:"",mobile:""},editRuleForm:{id:"",username:"",email:"",mobile:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:6,message:"长度在 2 到 6 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:e,trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:t,trigger:"blur"}],mobile:[{required:!0,message:"请输入电话",trigger:"blur"},{validator:r,trigger:"blur"}]},dialogFormVisibleAllot:!1,roleTable:[],userinfo:{},rid:""}},created:function(){this.getData()},methods:{getData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("/users",{params:e.params});case 2:r=t.sent,e.total=r.data.data.total,e.tableData=r.data.data.users;case 5:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.params.pagesize=e,this.getData()},handleCurrentChange:function(e){this.params.pagenum=e,this.getData()},addUser:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}return t.next=3,e.axios.post("/users",e.ruleForm);case 3:a=t.sent,201===a.data.meta.status?(e.$message({message:a.data.meta.msg,type:"success"}),e.$refs.ruleForm.resetFields(),e.dialogFormVisible=!1,e.getData()):e.$message({showClose:!0,message:a.data.meta.msg,type:"error"}),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},closeAdd:function(){this.dialogFormVisible=!1,this.$refs.ruleForm.resetFields()},swichChange:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.axios.put("/users/".concat(e.id,"/state/").concat(e.mg_state));case 2:a=r.sent,200===a.data.meta.status?t.$message({message:a.data.meta.msg,type:"success"}):t.$message({showClose:!0,message:a.data.meta.msg,type:"error"});case 4:case"end":return r.stop()}}),r)})))()},delUser:function(e){var t=this,r=e.id;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.delete("/users/".concat(r));case 2:a=e.sent,200===a.data.meta.status?(t.$message({message:a.data.meta.msg,type:"success"}),t.getData()):t.$message({showClose:!0,message:a.data.meta.msg,type:"error"});case 4:case"end":return e.stop()}}),e)})))).catch((function(){}))},editUser:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.id,t.dialogFormVisibleEdit=!0,r.next=4,t.axios("users/".concat(a));case 4:o=r.sent,t.editRuleForm.username=o.data.data.username,t.editRuleForm.email=o.data.data.email,t.editRuleForm.mobile=o.data.data.mobile,t.editRuleForm.id=o.data.data.id;case 9:case"end":return r.stop()}}),r)})))()},editUserBtn:function(){var e=this;this.$refs.editRuleForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}return t.next=3,e.axios.put("/users/".concat(e.editRuleForm.id),e.editRuleForm);case 3:a=t.sent,200===a.data.meta.status?(e.$message({message:a.data.meta.msg,type:"success"}),e.getData(),e.dialogFormVisibleEdit=!1):e.$message({showClose:!0,message:a.data.meta.msg,type:"error"}),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},allot:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.userinfo={},r.next=3,t.axios("/roles");case 3:a=r.sent,t.roleTable=a.data.data,t.userinfo=e,t.dialogFormVisibleAllot=!0;case 7:case"end":return r.stop()}}),r)})))()},changeAllot:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.put("/users/".concat(e.userinfo.id,"/role"),{rid:e.rid});case 2:r=t.sent,200===r.data.meta.status&&e.$message({message:r.data.meta.msg,type:"success"}),e.getData(),e.dialogFormVisibleAllot=!1;case 6:case"end":return t.stop()}}),t)})))()}}}),s=i,l=(r("2ed3"),r("4ac2")),c=Object(l["a"])(s,a,o,!1,null,"46e7ed9d",null);t["default"]=c.exports},d2ee:function(e,t,r){"use strict";r("068a")},e7e7:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function o(e){if(Array.isArray(e))return a(e)}r.d(t,"a",(function(){return l}));r("7869"),r("1b18"),r("1e1b"),r("43c5"),r("9ee9"),r("5611"),r("08fc");function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("9e79"),r("9113");function i(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return o(e)||n(e)||i(e)||s()}},fb7a:function(e,t,r){var a=r("719e"),o=r("5a9e");e.exports=function(e,t,r,n){try{return n?t(a(r)[0],r[1]):t(r)}catch(i){throw o(e),i}}}}]);
//# sourceMappingURL=power.0daf4f3a.js.map