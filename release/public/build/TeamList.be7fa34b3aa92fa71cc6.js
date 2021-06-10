(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"+nK6":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"TeamList",(function(){return j}));var r=n("q1tI"),a=n.n(r),i=n("0cfB"),c=n("ZGyg"),o=n("kDLi"),u=n("QQVG"),s=n("GQ3c"),m=n("gxTa"),f=n("8uRs"),l=n("lzJ5"),d=n("EKT6"),p=n("ZFWI"),h=n("umNM"),v=n("hBny"),g=n("BPIC");function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r,a,i,c){try{var o=e[i](c),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,a)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){var e,n;w(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=E(this,(e=O(t)).call.apply(e,[this].concat(a)))).deleteTeam=function(e){n.props.deleteTeam(e.id)},n.onSearchQueryChange=function(e){n.props.setSearchQuery(e)},n}var n,r,i,m,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.fetchTeams()}},{key:"fetchTeams",value:(m=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loadTeams();case 2:case"end":return e.stop()}}),e,this)})),l=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=m.apply(e,t);function i(e){y(a,n,r,i,c,"next",e)}function c(e){y(a,n,r,i,c,"throw",e)}i(void 0)}))},function(){return l.apply(this,arguments)})},{key:"renderTeam",value:function(e){var t=this,n=this.props,r=n.editorsCanAdmin,i=n.signedInUser,c=e.permission,u="org/teams/edit/".concat(e.id),s=Object(f.h)({permission:c,editorsCanAdmin:r,signedInUser:i});return a.a.createElement("tr",{key:e.id},a.a.createElement("td",{className:"width-4 text-center link-td"},a.a.createElement("a",{href:u},a.a.createElement("img",{className:"filter-table__avatar",src:e.avatarUrl}))),a.a.createElement("td",{className:"link-td"},a.a.createElement("a",{href:u},e.name)),a.a.createElement("td",{className:"link-td"},a.a.createElement("a",{href:u},e.email)),a.a.createElement("td",{className:"link-td"},a.a.createElement("a",{href:u},e.memberCount)),a.a.createElement("td",{className:"text-right"},a.a.createElement(o.DeleteButton,{size:"sm",disabled:!s,onConfirm:function(){return t.deleteTeam(e)}})))}},{key:"renderEmptyList",value:function(){return a.a.createElement(u.a,{title:"You haven't created any teams yet.",buttonIcon:"users-alt",buttonLink:"org/teams/new",buttonTitle:" New team",proTip:"Assign folder and dashboard permissions to teams instead of users to ease administration.",proTipLink:"",proTipLinkTitle:"",proTipTarget:"_blank"})}},{key:"renderTeamList",value:function(){var e=this,t=this.props,n=t.teams,r=t.searchQuery,i=t.editorsCanAdmin,c=t.signedInUser,u=i&&c.orgRole===s.OrgRole.Viewer,m=u?" disabled":"",f=u?"#":"org/teams/new";return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"page-action-bar"},a.a.createElement("div",{className:"gf-form gf-form--grow"},a.a.createElement(d.a,{labelClassName:"gf-form--has-input-icon gf-form--grow",inputClassName:"gf-form-input",placeholder:"Search teams",value:r,onChange:this.onSearchQueryChange})),a.a.createElement("div",{className:"page-action-bar__spacer"}),a.a.createElement(o.LinkButton,{className:m,href:f},"New Team")),a.a.createElement("div",{className:"admin-list-table"},a.a.createElement("table",{className:"filter-table filter-table--hover form-inline"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Email"),a.a.createElement("th",null,"Members"),a.a.createElement("th",{style:{width:"1%"}}))),a.a.createElement("tbody",null,n.map((function(t){return e.renderTeam(t)}))))))}},{key:"renderList",value:function(){var e=this.props,t=e.teamsCount;return e.hasFetched?t>0?this.renderTeamList():this.renderEmptyList():null}},{key:"render",value:function(){var e=this.props,t=e.hasFetched,n=e.navModel;return a.a.createElement(c.a,{navModel:n},a.a.createElement(c.a.Contents,{isLoading:!t},this.renderList()))}}])&&k(n.prototype,r),i&&k(n,i),t}(r.PureComponent);var R={loadTeams:m.g,deleteTeam:m.c,setSearchQuery:g.c};t.default=Object(i.hot)(e)(Object(v.a)((function(e){return{navModel:Object(l.a)(e.navIndex,"teams"),teams:Object(f.f)(e.teams),searchQuery:Object(f.b)(e.teams),teamsCount:Object(f.g)(e.teams),hasFetched:e.teams.hasFetched,editorsCanAdmin:p.a.editorsCanAdmin,signedInUser:h.a.user}}),R,(function(e){return e.teams}))(j))}.call(this,n("3UD+")(e))},"8uRs":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return m})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return l}));var r=n("GQ3c"),a=function(e){return e.searchQuery},i=function(e){return e.searchMemberQuery},c=function(e){return e.groups},o=function(e){return e.teams.length},u=function(e,t){return e.team.id===parseInt(t,10)?e.team:null},s=function(e){var t=RegExp(e.searchQuery,"i");return e.teams.filter((function(e){return t.test(e.name)}))},m=function(e){var t=RegExp(e.searchMemberQuery,"i");return e.members.filter((function(e){return t.test(e.login)||t.test(e.email)||t.test(e.name)}))},f=function(e){var t=e.members,n=e.signedInUser,a=e.editorsCanAdmin,i=t.find((function(e){return e.userId===n.id})),c=i?i.permission:r.TeamPermissionLevel.Member;return l({permission:c,signedInUser:n,editorsCanAdmin:a})},l=function(e){var t=e.permission,n=e.signedInUser,a=e.editorsCanAdmin,i=n.isGrafanaAdmin||n.orgRole===r.OrgRole.Admin,c=t===r.TeamPermissionLevel.Admin;return i||c||!a}},gxTa:function(e,t,n){"use strict";n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return m})),n.d(t,"f",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return v})),n.d(t,"h",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"k",(function(){return y}));var r=n("t8hP"),a=n("3SGO"),i=n("zsYB"),c=n("BPIC");function o(e,t,n,r,a,i,c){try{var o=e[i](c),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function c(e){o(i,r,a,c,u,"next",e)}function u(e){o(i,r,a,c,u,"throw",e)}c(void 0)}))}}function s(){return function(){var e=u(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.getBackendSrv)().get("/api/teams/search",{perpage:1e3,page:1});case 2:n=e.sent,t(Object(c.g)(n.teams));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function m(e){return function(){var t=u(regeneratorRuntime.mark((function t(n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.getBackendSrv)().get("/api/teams/".concat(e));case 2:o=t.sent,n(Object(c.e)(o)),n(Object(a.e)(Object(i.a)(o)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function f(){return function(){var e=u(regeneratorRuntime.mark((function e(t,n){var a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().team.team,e.next=3,Object(r.getBackendSrv)().get("/api/teams/".concat(a.id,"/members"));case 3:i=e.sent,t(Object(c.f)(i));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function l(e){return function(){var t=u(regeneratorRuntime.mark((function t(n,a){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a().team.team,t.next=3,Object(r.getBackendSrv)().post("/api/teams/".concat(i.id,"/members"),{userId:e});case 3:n(f());case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function d(e){return function(){var t=u(regeneratorRuntime.mark((function t(n,a){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a().team.team,t.next=3,Object(r.getBackendSrv)().delete("/api/teams/".concat(i.id,"/members/").concat(e));case 3:n(f());case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function p(e,t){return function(){var n=u(regeneratorRuntime.mark((function n(a,i){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=i().team.team,n.next=3,Object(r.getBackendSrv)().put("/api/teams/".concat(c.id),{name:e,email:t});case 3:a(m(c.id));case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}function h(){return function(){var e=u(regeneratorRuntime.mark((function e(t,n){var a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().team.team,e.next=3,Object(r.getBackendSrv)().get("/api/teams/".concat(a.id,"/groups"));case 3:i=e.sent,t(Object(c.d)(i));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function v(e){return function(){var t=u(regeneratorRuntime.mark((function t(n,a){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a().team.team,t.next=3,Object(r.getBackendSrv)().post("/api/teams/".concat(i.id,"/groups"),{groupId:e});case 3:n(h());case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function g(e){return function(){var t=u(regeneratorRuntime.mark((function t(n,a){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a().team.team,t.next=3,Object(r.getBackendSrv)().delete("/api/teams/".concat(i.id,"/groups/").concat(encodeURIComponent(e)));case 3:n(h());case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function b(e){return function(){var t=u(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.getBackendSrv)().delete("/api/teams/".concat(e));case 2:n(s());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function y(e){return function(){var t=u(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.getBackendSrv)().put("/api/teams/".concat(e.teamId,"/members/").concat(e.userId),{permission:e.permission});case 2:n(f());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},hBny:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("/MKj"),a=n("zVNn"),i=n("q1tI"),c=n.n(i),o=n("2mql"),u=n.n(o),s=function(e,t,n){return function(o){var s=Object(r.connect)(e,t)(o),m=function(e){var t=Object(r.useDispatch)();return Object(i.useEffect)((function(){return function(){t(Object(a.a)({stateSelector:n}))}}),[]),c.a.createElement(s,e)};return m.displayName="ConnectWithCleanUp(".concat(s.displayName,")"),u()(m,o),m}}},zsYB:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n("GQ3c"),a=n("ZFWI");function i(e){var t={img:e.avatarUrl,id:"team-"+e.id,subTitle:"Manage members & settings",url:"",text:e.name,breadcrumbs:[{title:"Teams",url:"org/teams"}],children:[{active:!1,icon:"users-alt",id:"team-members-".concat(e.id),text:"Members",url:"org/teams/edit/".concat(e.id,"/members")},{active:!1,icon:"sliders-v-alt",id:"team-settings-".concat(e.id),text:"Settings",url:"org/teams/edit/".concat(e.id,"/settings")}]};return a.b.licenseInfo.hasLicense&&t.children.push({active:!1,icon:"sync",id:"team-groupsync-".concat(e.id),text:"External group sync",url:"org/teams/edit/".concat(e.id,"/groupsync")}),t}function c(e){var t,n=i({avatarUrl:"public/img/user_profile.png",id:1,name:"Loading",email:"loading",memberCount:0,permission:r.TeamPermissionLevel.Member}),a=!0,c=!1,o=void 0;try{for(var u,s=n.children[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var m=u.value;if(m.id.indexOf(e)>0){m.active=!0,t=m;break}}}catch(e){c=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(c)throw o}}return{main:n,node:t}}}}]);
//# sourceMappingURL=TeamList.be7fa34b3aa92fa71cc6.js.map