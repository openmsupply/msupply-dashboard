(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"4qB8":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("QQVG"),o=n("ZGyg"),c=n("t8hP"),l=n("Kwub"),u=n("HJRA"),s=n("/MKj"),f=n("lzJ5"),m=n("kDLi"),d=n("GQ3c");function p(e,t,n,r,a,i,o){try{var c=e[i](o),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){p(i,r,a,o,c,"next",e)}function c(e){p(i,r,a,o,c,"throw",e)}o(void 0)}))}}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e,t,n=(e="channels",t=Object(s.useSelector)((function(e){return e.navIndex})),Object(f.a)(t,e)),p=v(Object(r.useState)([]),2),g=p[0],y=p[1],b=function(){var e=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.getBackendSrv)().get("/api/alert-notifications");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=v(Object(l.a)(b),2),w=E[0],k=E[1];Object(r.useEffect)((function(){k().then((function(e){y(e)}))}),[]);var x=function(){var e=h(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.getBackendSrv)().delete("/api/alert-notifications/".concat(t));case 2:return e.next=4,k();case 4:n=e.sent,y(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(o.a,{navModel:n},a.a.createElement(o.a.Contents,null,w.error&&a.a.createElement("p",null,w.error),!!g.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"page-action-bar"},a.a.createElement("div",{className:"page-action-bar__spacer"}),a.a.createElement(m.LinkButton,{icon:"channel-add",href:"alerting/notification/new"},"New channel")),a.a.createElement("table",{className:"filter-table filter-table--hover"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{style:{minWidth:"200px"}},a.a.createElement("strong",null,"Name")),a.a.createElement("th",{style:{minWidth:"100px"}},"Type"),a.a.createElement("th",{style:{width:"1%"}}))),a.a.createElement("tbody",null,g.map((function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",{className:"link-td"},a.a.createElement("a",{href:"alerting/notification/".concat(e.id,"/edit")},e.name)),a.a.createElement("td",{className:"link-td"},a.a.createElement("a",{href:"alerting/notification/".concat(e.id,"/edit")},e.type)),a.a.createElement("td",{className:"text-right"},a.a.createElement(m.HorizontalGroup,{justify:"flex-end"},e.isDefault&&a.a.createElement(m.Button,{disabled:!0,variant:"secondary",size:"sm"},"default"),a.a.createElement(m.Button,{variant:"destructive",icon:"times",size:"sm",onClick:function(){!function(e){var t;u.a.emit(d.CoreEvents.showConfirmModal,{title:"Delete",text:"Do you want to delete this notification channel?",text2:"Deleting this notification channel will not delete from alerts any references to it",icon:"trash-alt",confirmText:"Delete",yesText:"Delete",onConfirm:(t=h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(e);case 1:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})}(e.id)}}))))}))))),!(g.length||w.loading)&&a.a.createElement(i.a,{title:"There are no notification channels defined yet",buttonIcon:"channel-add",buttonLink:"alerting/notification/new",buttonTitle:"Add channel",proTip:"You can include images in your alert notifications.",proTipLink:"http://docs.grafana.org/alerting/notifications/",proTipLinkTitle:"Learn more",proTipTarget:"_blank"})))}}}]);
//# sourceMappingURL=NotificationsListPage.be7fa34b3aa92fa71cc6.js.map