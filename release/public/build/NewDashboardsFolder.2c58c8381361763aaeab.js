(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"5gaU":function(e,r,t){"use strict";t.d(r,"d",(function(){return p})),t.d(r,"g",(function(){return d})),t.d(r,"c",(function(){return m})),t.d(r,"e",(function(){return v})),t.d(r,"h",(function(){return h})),t.d(r,"f",(function(){return x})),t.d(r,"a",(function(){return y})),t.d(r,"b",(function(){return g}));var n=t("Obii"),a=t("t8hP"),o=t("NXk7"),i=t("3SGO"),u=t("v2PB"),c=t("Xmxp"),s=t("BAXh");function f(e,r,t,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?r(c):Promise.resolve(c).then(n,a)}function l(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){f(o,n,a,i,u,"next",e)}function u(e){f(o,n,a,i,u,"throw",e)}i(void 0)}))}}function p(e){return function(){var r=l(regeneratorRuntime.mark((function r(t){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.b.getFolderByUid(e);case 2:n=r.sent,t(Object(s.b)(n)),t(Object(i.e)(Object(u.a)(n)));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}function d(e){return function(){var r=l(regeneratorRuntime.mark((function r(t){var a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.b.put("/api/folders/".concat(e.uid),{title:e.title,version:e.version});case 2:a=r.sent,c.b.emit(n.AppEvents.alertSuccess,["Folder saved"]),t(Object(i.d)({path:"".concat(a.url,"/settings")}));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}function m(e){return function(){var r=l(regeneratorRuntime.mark((function r(t){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.b.delete("/api/folders/".concat(e));case 2:t(Object(i.d)({path:"dashboards"}));case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}function v(e){return function(){var r=l(regeneratorRuntime.mark((function r(t){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.b.get("/api/folders/".concat(e,"/permissions"));case 2:n=r.sent,t(Object(s.c)(n));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}function b(e){return{userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}}function h(e,r){return function(){var t=l(regeneratorRuntime.mark((function t(n,a){var i,u,c,s,f,l,p,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=a().folder,u=[],c=!0,s=!1,f=void 0,t.prev=5,l=i.permissions[Symbol.iterator]();case 7:if(c=(p=l.next()).done){t.next=17;break}if(!(d=p.value).inherited){t.next=11;break}return t.abrupt("continue",14);case 11:m=b(d),e===d&&(m.permission=r),u.push(m);case 14:c=!0,t.next=7;break;case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(5),s=!0,f=t.t0;case 23:t.prev=23,t.prev=24,c||null==l.return||l.return();case 26:if(t.prev=26,!s){t.next=29;break}throw f;case 29:return t.finish(26);case 30:return t.finish(23);case 31:return t.next=33,o.b.post("/api/folders/".concat(i.uid,"/permissions"),{items:u});case 33:return t.next=35,n(v(i.uid));case 35:case"end":return t.stop()}}),t,null,[[5,19,23,31],[24,,26,30]])})));return function(e,r){return t.apply(this,arguments)}}()}function x(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,i,u,c,s,f,l,p;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=n().folder,i=[],u=!0,c=!1,s=void 0,r.prev=5,f=a.permissions[Symbol.iterator]();case 7:if(u=(l=f.next()).done){r.next=15;break}if(!(p=l.value).inherited&&p!==e){r.next=11;break}return r.abrupt("continue",12);case 11:i.push(b(p));case 12:u=!0,r.next=7;break;case 15:r.next=21;break;case 17:r.prev=17,r.t0=r.catch(5),c=!0,s=r.t0;case 21:r.prev=21,r.prev=22,u||null==f.return||f.return();case 24:if(r.prev=24,!c){r.next=27;break}throw s;case 27:return r.finish(24);case 28:return r.finish(21);case 29:return r.next=31,o.b.post("/api/folders/".concat(a.uid,"/permissions"),{items:i});case 31:return r.next=33,t(v(a.uid));case 33:case"end":return r.stop()}}),r,null,[[5,17,21,29],[22,,24,28]])})));return function(e,t){return r.apply(this,arguments)}}()}function y(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,i,u,c,s,f,l,p;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=n().folder,i=[],u=!0,c=!1,s=void 0,r.prev=5,f=a.permissions[Symbol.iterator]();case 7:if(u=(l=f.next()).done){r.next=15;break}if(!(p=l.value).inherited){r.next=11;break}return r.abrupt("continue",12);case 11:i.push(b(p));case 12:u=!0,r.next=7;break;case 15:r.next=21;break;case 17:r.prev=17,r.t0=r.catch(5),c=!0,s=r.t0;case 21:r.prev=21,r.prev=22,u||null==f.return||f.return();case 24:if(r.prev=24,!c){r.next=27;break}throw s;case 27:return r.finish(24);case 28:return r.finish(21);case 29:return i.push({userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}),r.next=32,o.b.post("/api/folders/".concat(a.uid,"/permissions"),{items:i});case 32:return r.next=34,t(v(a.uid));case 34:case"end":return r.stop()}}),r,null,[[5,17,21,29],[22,,24,28]])})));return function(e,t){return r.apply(this,arguments)}}()}function g(e){return function(){var r=l(regeneratorRuntime.mark((function r(t){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(a.getBackendSrv)().post("/api/folders",{title:e});case 2:o=r.sent,c.b.emit(n.AppEvents.alertSuccess,["Folder Created","OK"]),t(Object(i.d)({path:n.locationUtil.stripBaseFromUrl(o.url)}));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}},tg3w:function(e,r,t){"use strict";t.r(r),t.d(r,"NewDashboardsFolder",(function(){return y}));var n=t("q1tI"),a=t.n(n),o=t("/MKj"),i=t("kDLi"),u=t("ZGyg"),c=t("5gaU"),s=t("lzJ5"),f=t("d4Ek");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,r,t,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?r(c):Promise.resolve(c).then(n,a)}function d(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function m(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,r){return!r||"object"!==l(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,r){return(h=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var x={folderName:""},y=function(e){function r(){var e,t;d(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=v(this,(e=b(r)).call.apply(e,[this].concat(a)))).onSubmit=function(e){t.props.createNewFolder(e.folderName)},t.validateFolderName=function(e){return f.a.validateNewFolderName(e).then((function(){return!0})).catch((function(e){return e.message}))},t}var t,n,o;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&h(e,r)}(r,e),t=r,(n=[{key:"render",value:function(){var e=this;return a.a.createElement(u.a,{navModel:this.props.navModel},a.a.createElement(u.a.Contents,null,a.a.createElement("h3",null,"New Dashboard Folder"),a.a.createElement(i.Form,{defaultValues:x,onSubmit:this.onSubmit},(function(r){var t,n,o=r.register,u=r.errors;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Field,{label:"Folder name",invalid:!!u.folderName,error:u.folderName&&u.folderName.message},a.a.createElement(i.Input,{name:"folderName",ref:o({required:"Folder name is required.",validate:(t=regeneratorRuntime.mark((function r(t){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.validateFolderName(t);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})),n=function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(e){p(o,n,a,i,u,"next",e)}function u(e){p(o,n,a,i,u,"throw",e)}i(void 0)}))},function(e){return n.apply(this,arguments)})})})),a.a.createElement(i.Button,{type:"submit"},"Create"))}))))}}])&&m(t.prototype,n),o&&m(t,o),r}(n.PureComponent),g={createNewFolder:c.b};r.default=Object(o.connect)((function(e){return{navModel:Object(s.a)(e.navIndex,"manage-dashboards")}}),g)(y)},v2PB:function(e,r,t){"use strict";function n(e){return{icon:"folder",id:"manage-folder",subTitle:"Manage folder dashboards & permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"apps",id:"folder-dashboards-".concat(e.uid),text:"Dashboards",url:e.url},{active:!1,icon:"lock",id:"folder-permissions-".concat(e.uid),text:"Permissions",url:"".concat(e.url,"/permissions")},{active:!1,icon:"cog",id:"folder-settings-".concat(e.uid),text:"Settings",url:"".concat(e.url,"/settings")}]}}function a(e){var r=n({id:1,uid:"loading",title:"Loading",url:"url",canSave:!1,canEdit:!1,canAdmin:!1,version:0});return r.children[e].active=!0,{main:r,node:r.children[e]}}t.d(r,"a",(function(){return n})),t.d(r,"b",(function(){return a}))}}]);
//# sourceMappingURL=NewDashboardsFolder.2c58c8381361763aaeab.js.map