(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OQsP:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("lzJ5"),i=n("ZGyg"),c=n("/MKj"),u=n("kDLi"),l=n("t8hP");function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(e){var t=e.orgs,n=e.onDelete,o=s(Object(r.useState)(),2),i=o[0],c=o[1];return a.a.createElement("table",{className:"filter-table form-inline filter-table--hover"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Id"),a.a.createElement("th",null,"Name"),a.a.createElement("th",{style:{width:"1%"}}))),a.a.createElement("tbody",null,t.map((function(e){return a.a.createElement("tr",{key:"".concat(e.id,"-").concat(e.name)},a.a.createElement("td",{className:"link-td"},a.a.createElement("a",{href:"admin/orgs/edit/".concat(e.id)},e.id)),a.a.createElement("td",{className:"link-td"},a.a.createElement("a",{href:"admin/orgs/edit/".concat(e.id)},e.name)),a.a.createElement("td",{className:"text-right"},a.a.createElement(u.Button,{variant:"destructive",size:"sm",icon:"times",onClick:function(){return c(e)}})))}))),i&&a.a.createElement(u.ConfirmModal,{isOpen:!0,icon:"trash-alt",title:"Delete",body:a.a.createElement("div",null,"Are you sure you want to delete '",i.name,"'?",a.a.createElement("br",null)," ",a.a.createElement("small",null,"All dashboards for this organization will be removed!")),confirmText:"Delete",onDismiss:function(){return c(void 0)},onConfirm:function(){n(i.id),c(void 0)}}))},f=n("51gB"),d=n.n(f);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){p(o,r,a,i,c,"next",e)}function c(e){p(o,r,a,i,c,"throw",e)}i(void 0)}))}}n.d(t,"AdminListOrgsPages",(function(){return y}));var h=function(){var e=g(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getBackendSrv)().delete("/api/orgs/"+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.getBackendSrv)().get("/api/orgs");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.useSelector)((function(e){return e.navIndex})),t=Object(o.a)(e,"global-orgs"),n=v(d()(g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),[]),2),l=n[0],s=n[1];return Object(r.useEffect)((function(){s()}),[]),a.a.createElement(i.a,{navModel:t},a.a.createElement(i.a.Contents,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"page-action-bar"},a.a.createElement("div",{className:"page-action-bar__spacer"}),a.a.createElement(u.LinkButton,{icon:"plus",href:"org/new"},"New org")),l.loading&&"Fetching organizations",l.error,l.value&&a.a.createElement(m,{orgs:l.value,onDelete:function(e){h(e).then((function(){return s()}))}}))))};t.default=y}}]);
//# sourceMappingURL=AdminListOrgsPage.2c58c8381361763aaeab.js.map