(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"5gaU":function(e,n,t){"use strict";t.d(n,"d",(function(){return p})),t.d(n,"g",(function(){return f})),t.d(n,"c",(function(){return m})),t.d(n,"e",(function(){return v})),t.d(n,"h",(function(){return b})),t.d(n,"f",(function(){return g})),t.d(n,"a",(function(){return y})),t.d(n,"b",(function(){return x}));var r=t("Obii"),i=t("t8hP"),o=t("NXk7"),a=t("3SGO"),s=t("v2PB"),c=t("Xmxp"),u=t("BAXh");function d(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,i)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){d(o,r,i,a,s,"next",e)}function s(e){d(o,r,i,a,s,"throw",e)}a(void 0)}))}}function p(e){return function(){var n=l(regeneratorRuntime.mark((function n(t){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b.getFolderByUid(e);case 2:r=n.sent,t(Object(u.b)(r)),t(Object(a.e)(Object(s.a)(r)));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}function f(e){return function(){var n=l(regeneratorRuntime.mark((function n(t){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b.put("/api/folders/".concat(e.uid),{title:e.title,version:e.version});case 2:i=n.sent,c.b.emit(r.AppEvents.alertSuccess,["Folder saved"]),t(Object(a.d)({path:"".concat(i.url,"/settings")}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}function m(e){return function(){var n=l(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b.delete("/api/folders/".concat(e));case 2:t(Object(a.d)({path:"dashboards"}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}function v(e){return function(){var n=l(regeneratorRuntime.mark((function n(t){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b.get("/api/folders/".concat(e,"/permissions"));case 2:r=n.sent,t(Object(u.c)(r));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}function h(e){return{userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}}function b(e,n){return function(){var t=l(regeneratorRuntime.mark((function t(r,i){var a,s,c,u,d,l,p,f,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=i().folder,s=[],c=!0,u=!1,d=void 0,t.prev=5,l=a.permissions[Symbol.iterator]();case 7:if(c=(p=l.next()).done){t.next=17;break}if(!(f=p.value).inherited){t.next=11;break}return t.abrupt("continue",14);case 11:m=h(f),e===f&&(m.permission=n),s.push(m);case 14:c=!0,t.next=7;break;case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(5),u=!0,d=t.t0;case 23:t.prev=23,t.prev=24,c||null==l.return||l.return();case 26:if(t.prev=26,!u){t.next=29;break}throw d;case 29:return t.finish(26);case 30:return t.finish(23);case 31:return t.next=33,o.b.post("/api/folders/".concat(a.uid,"/permissions"),{items:s});case 33:return t.next=35,r(v(a.uid));case 35:case"end":return t.stop()}}),t,null,[[5,19,23,31],[24,,26,30]])})));return function(e,n){return t.apply(this,arguments)}}()}function g(e){return function(){var n=l(regeneratorRuntime.mark((function n(t,r){var i,a,s,c,u,d,l,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=r().folder,a=[],s=!0,c=!1,u=void 0,n.prev=5,d=i.permissions[Symbol.iterator]();case 7:if(s=(l=d.next()).done){n.next=15;break}if(!(p=l.value).inherited&&p!==e){n.next=11;break}return n.abrupt("continue",12);case 11:a.push(h(p));case 12:s=!0,n.next=7;break;case 15:n.next=21;break;case 17:n.prev=17,n.t0=n.catch(5),c=!0,u=n.t0;case 21:n.prev=21,n.prev=22,s||null==d.return||d.return();case 24:if(n.prev=24,!c){n.next=27;break}throw u;case 27:return n.finish(24);case 28:return n.finish(21);case 29:return n.next=31,o.b.post("/api/folders/".concat(i.uid,"/permissions"),{items:a});case 31:return n.next=33,t(v(i.uid));case 33:case"end":return n.stop()}}),n,null,[[5,17,21,29],[22,,24,28]])})));return function(e,t){return n.apply(this,arguments)}}()}function y(e){return function(){var n=l(regeneratorRuntime.mark((function n(t,r){var i,a,s,c,u,d,l,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=r().folder,a=[],s=!0,c=!1,u=void 0,n.prev=5,d=i.permissions[Symbol.iterator]();case 7:if(s=(l=d.next()).done){n.next=15;break}if(!(p=l.value).inherited){n.next=11;break}return n.abrupt("continue",12);case 11:a.push(h(p));case 12:s=!0,n.next=7;break;case 15:n.next=21;break;case 17:n.prev=17,n.t0=n.catch(5),c=!0,u=n.t0;case 21:n.prev=21,n.prev=22,s||null==d.return||d.return();case 24:if(n.prev=24,!c){n.next=27;break}throw u;case 27:return n.finish(24);case 28:return n.finish(21);case 29:return a.push({userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}),n.next=32,o.b.post("/api/folders/".concat(i.uid,"/permissions"),{items:a});case 32:return n.next=34,t(v(i.uid));case 34:case"end":return n.stop()}}),n,null,[[5,17,21,29],[22,,24,28]])})));return function(e,t){return n.apply(this,arguments)}}()}function x(e){return function(){var n=l(regeneratorRuntime.mark((function n(t){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.getBackendSrv)().post("/api/folders",{title:e});case 2:o=n.sent,c.b.emit(r.AppEvents.alertSuccess,["Folder Created","OK"]),t(Object(a.d)({path:r.locationUtil.stripBaseFromUrl(o.url)}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},rtU1:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"FolderPermissions",(function(){return w}));var r=t("q1tI"),i=t.n(r),o=t("0cfB"),a=t("/MKj"),s=t("ZGyg"),c=t("kDLi"),u=t("BVom"),d=t("lzJ5"),l=t("5gaU"),p=t("v2PB"),f=t("3p3q"),m=t("wobk"),v=t("QzbV");function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,n){return!n||"object"!==h(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,n){return(x=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var w=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=g(this,y(n).call(this,e))).onOpenAddPermissions=function(){t.setState({isAdding:!0})},t.onRemoveItem=function(e){t.props.removeFolderPermission(e)},t.onPermissionChanged=function(e,n){t.props.updateFolderPermission(e,n)},t.onAddPermission=function(e){return t.props.addFolderPermission(e)},t.onCancelAddPermission=function(){t.setState({isAdding:!1})},t.state={isAdding:!1},t}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&x(e,n)}(n,e),t=n,(r=[{key:"componentDidMount",value:function(){this.props.getFolderByUid(this.props.folderUid),this.props.getFolderPermissions(this.props.folderUid)}},{key:"render",value:function(){var e=this.props,n=e.navModel,t=e.folder,r=this.state.isAdding;if(0===t.id)return i.a.createElement(s.a,{navModel:n},i.a.createElement(s.a.Contents,{isLoading:!0},i.a.createElement("span",null)));var o={title:t.title,url:t.url,id:t.id};return i.a.createElement(s.a,{navModel:n},i.a.createElement(s.a.Contents,null,i.a.createElement("div",{className:"page-action-bar"},i.a.createElement("h3",{className:"page-sub-heading"},"Folder Permissions"),i.a.createElement(c.Tooltip,{placement:"auto",content:i.a.createElement(v.a,null)},i.a.createElement(c.Icon,{className:"icon--has-hover page-sub-heading-icon",name:"question-circle"})),i.a.createElement("div",{className:"page-action-bar__spacer"}),i.a.createElement("button",{className:"btn btn-primary pull-right",onClick:this.onOpenAddPermissions,disabled:r},"Add Permission")),i.a.createElement(u.a,{in:r},i.a.createElement(m.a,{onAddPermission:this.onAddPermission,onCancel:this.onCancelAddPermission})),i.a.createElement(f.a,{items:t.permissions,onRemoveItem:this.onRemoveItem,onPermissionChanged:this.onPermissionChanged,isFetching:!1,folderInfo:o})))}}])&&b(t.prototype,r),o&&b(t,o),n}(r.PureComponent),P={getFolderByUid:l.d,getFolderPermissions:l.e,updateFolderPermission:l.h,removeFolderPermission:l.f,addFolderPermission:l.a};n.default=Object(o.hot)(e)(Object(a.connect)((function(e){var n=e.location.routeParams.uid;return{navModel:Object(d.a)(e.navIndex,"folder-permissions-".concat(n),Object(p.b)(1)),folderUid:n,folder:e.folder}}),P)(w))}.call(this,t("3UD+")(e))},v2PB:function(e,n,t){"use strict";function r(e){var n={icon:"folder",id:"manage-folder",subTitle:"Manage folder dashboards & permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"apps",id:"folder-dashboards-".concat(e.uid),text:"Dashboards",url:e.url}]};return e.canAdmin&&n.children.push({active:!1,icon:"lock",id:"folder-permissions-".concat(e.uid),text:"Permissions",url:"".concat(e.url,"/permissions")}),e.canSave&&n.children.push({active:!1,icon:"cog",id:"folder-settings-".concat(e.uid),text:"Settings",url:"".concat(e.url,"/settings")}),n}function i(e){var n=r({id:1,uid:"loading",title:"Loading",url:"url",canSave:!0,canEdit:!0,canAdmin:!0,version:0});return n.children[e].active=!0,{main:n,node:n.children[e]}}t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}))}}]);
//# sourceMappingURL=FolderPermissions.21c7add3cfafde5bec67.js.map