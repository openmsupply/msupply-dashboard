(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"aj+l":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("/MKj"),c=r("ZGyg"),i=r("X+V3"),l=r("kDLi"),u=r("t8hP"),s=r("+umK");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t,r,n,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,a)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){b(o,n,a,c,i,"next",e)}function i(e){b(o,n,a,c,i,"throw",e)}c(void 0)}))}}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e){var t=e.url,r=y(Object(n.useState)([]),2),o=r[0],c=r[1],i=y(Object(n.useState)(),2),f=i[0],p=i[1],b=Object(n.useCallback)(d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getBackendSrv)().get("/api/dashboard/snapshots").then((function(e){var r=window.location.href.replace(t,""),n=e.map((function(e){return m({},e,{url:e.externalUrl||"".concat(r,"/dashboard/snapshot/").concat(e.key)})}));c(n)}));case 2:case"end":return e.stop()}}),e)}))),[]),v=Object(n.useCallback)(function(){var e=d(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(o.filter((function(e){return e.key!==t.key}))),e.next=3,Object(u.getBackendSrv)().delete("/api/snapshots/".concat(t.key)).then(s.a,(function(){c(o.concat(t))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o]);return Object(n.useEffect)((function(){b()}),[]),a.a.createElement("div",{className:"page-container page-body"},a.a.createElement("table",{className:"filter-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement("strong",null,"Name")),a.a.createElement("th",null,a.a.createElement("strong",null,"Snapshot url")),a.a.createElement("th",{style:{width:"70px"}}),a.a.createElement("th",{style:{width:"30px"}}),a.a.createElement("th",{style:{width:"25px"}}))),a.a.createElement("tbody",null,o.map((function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement("td",null,a.a.createElement("a",{href:e.url},e.name)),a.a.createElement("td",null,a.a.createElement("a",{href:e.url},e.url)),a.a.createElement("td",null,e.external&&a.a.createElement("span",{className:"query-keyword"},"External")),a.a.createElement("td",{className:"text-center"},a.a.createElement(l.LinkButton,{href:e.url,variant:"secondary",size:"sm",icon:"eye"},"View")),a.a.createElement("td",{className:"text-right"},a.a.createElement(l.Button,{variant:"destructive",size:"sm",icon:"times",onClick:function(){return p(e)}})))})))),a.a.createElement(l.ConfirmModal,{isOpen:!!f,icon:"trash-alt",title:"Delete",body:"Are you sure you want to delete '".concat(null==f?void 0:f.name,"'?"),confirmText:"Delete",onDismiss:function(){return p(void 0)},onConfirm:function(){v(f),p(void 0)}}))},h=r("lzJ5");function O(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){var t,r=Object(i.e)(e.location),n=Object(h.a)(e.navIndex,"dashboards"),a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},n),o=null===(t=a.main.children)||void 0===t?void 0:t.find((function(e){return e.url===r}));o&&(a.node=o),a.main.children=O(n.main.children);var c=!0,l=!1,u=void 0;try{for(var s,f=a.main.children[Symbol.iterator]();!(c=(s=f.next()).done);c=!0){var m=s.value;m.active=!1,m.url===a.node.url&&(m.active=!0)}}catch(e){l=!0,u=e}finally{try{c||null==f.return||f.return()}finally{if(l)throw u}}return a};r.d(t,"SnapshotListPage",(function(){return E}));var E=function(e){var t=e.navModel,r=e.url;return a.a.createElement(c.a,{navModel:t},a.a.createElement(c.a.Contents,null,a.a.createElement(v,{url:r})))};t.default=Object(o.connect)((function(e){return{navModel:g(e),url:Object(i.e)(e.location)}}))(E)}}]);
//# sourceMappingURL=SnapshotListPage.be7fa34b3aa92fa71cc6.js.map