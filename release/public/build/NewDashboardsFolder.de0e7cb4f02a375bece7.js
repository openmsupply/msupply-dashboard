(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"5gaU":function(e,t,r){"use strict";r.d(t,"d",(function(){return u})),r.d(t,"g",(function(){return l})),r.d(t,"c",(function(){return p})),r.d(t,"e",(function(){return f})),r.d(t,"h",(function(){return m})),r.d(t,"f",(function(){return h})),r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return j}));var n=r("Obii"),i=r("t8hP"),s=r("NXk7"),o=r("3SGO"),a=r("v2PB"),d=r("Xmxp"),c=r("BAXh");function u(e){return async t=>{const r=await s.b.getFolderByUid(e);t(Object(c.b)(r)),t(Object(o.d)(Object(a.a)(r)))}}function l(e){return async t=>{const r=await s.b.put("/api/folders/"+e.uid,{title:e.title,version:e.version});d.b.emit(n.AppEvents.alertSuccess,["Folder saved"]),i.locationService.push(r.url+"/settings")}}function p(e){return async t=>{await s.b.delete("/api/folders/"+e),i.locationService.push("/dashboards")}}function f(e){return async t=>{const r=await s.b.get(`/api/folders/${e}/permissions`);t(Object(c.c)(r))}}function b(e){return{userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}}function m(e,t){return async(r,n)=>{const i=n().folder,o=[];for(const r of i.permissions){if(r.inherited)continue;const n=b(r);e===r&&(n.permission=t),o.push(n)}await s.b.post(`/api/folders/${i.uid}/permissions`,{items:o}),await r(f(i.uid))}}function h(e){return async(t,r)=>{const n=r().folder,i=[];for(const t of n.permissions)t.inherited||t===e||i.push(b(t));await s.b.post(`/api/folders/${n.uid}/permissions`,{items:i}),await t(f(n.uid))}}function v(e){return async(t,r)=>{const n=r().folder,i=[];for(const e of n.permissions)e.inherited||i.push(b(e));i.push({userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}),await s.b.post(`/api/folders/${n.uid}/permissions`,{items:i}),await t(f(n.uid))}}function j(e){return async()=>{const t=await Object(i.getBackendSrv)().post("/api/folders",{title:e});d.b.emit(n.AppEvents.alertSuccess,["Folder Created","OK"]),i.locationService.push(n.locationUtil.stripBaseFromUrl(t.url))}}},tg3w:function(e,t,r){"use strict";r.r(t),r.d(t,"NewDashboardsFolder",(function(){return m}));var n,i,s=r("q1tI"),o=r("/MKj"),a=r("kDLi"),d=r("ZGyg"),c=r("5gaU"),u=r("lzJ5"),l=r("d4Ek"),p=r("nKUr");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const b={folderName:""};class m extends s.PureComponent{constructor(...e){super(...e),this.onSubmit=e=>{this.props.createNewFolder(e.folderName)},this.validateFolderName=e=>l.a.validateNewFolderName(e).then(()=>!0).catch(e=>e.message)}render(){return Object(p.jsx)(d.a,{navModel:this.props.navModel,children:Object(p.jsxs)(d.a.Contents,{children:[n||(n=Object(p.jsx)("h3",{children:"New dashboard folder"})),Object(p.jsx)(a.Form,{defaultValues:b,onSubmit:this.onSubmit,children:({register:e,errors:t})=>Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(a.Field,{label:"Folder name",invalid:!!t.folderName,error:t.folderName&&t.folderName.message,children:Object(p.jsx)(a.Input,f({},e("folderName",{required:"Folder name is required.",validate:async e=>await this.validateFolderName(e)})))}),i||(i=Object(p.jsx)(a.Button,{type:"submit",children:"Create"}))]})})]})})}}const h={createNewFolder:c.b};t.default=Object(o.connect)(e=>({navModel:Object(u.a)(e.navIndex,"manage-dashboards")}),h)(m)},v2PB:function(e,t,r){"use strict";function n(e){const t={icon:"folder",id:"manage-folder",subTitle:"Manage folder dashboards and permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"apps",id:"folder-dashboards-"+e.uid,text:"Dashboards",url:e.url}]};return t.children.push({active:!1,icon:"library-panel",id:"folder-library-panels-"+e.uid,text:"Panels",url:e.url+"/library-panels"}),e.canAdmin&&t.children.push({active:!1,icon:"lock",id:"folder-permissions-"+e.uid,text:"Permissions",url:e.url+"/permissions"}),e.canSave&&t.children.push({active:!1,icon:"cog",id:"folder-settings-"+e.uid,text:"Settings",url:e.url+"/settings"}),t}function i(e){const t=n({id:1,uid:"loading",title:"Loading",url:"url",canSave:!0,canEdit:!0,canAdmin:!0,version:0});return t.children[e].active=!0,{main:t,node:t.children[e]}}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}))}}]);
//# sourceMappingURL=NewDashboardsFolder.de0e7cb4f02a375bece7.js.map