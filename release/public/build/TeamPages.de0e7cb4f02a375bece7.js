(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"8uRs":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"i",(function(){return m})),n.d(t,"h",(function(){return h}));var s=n("GQ3c");const r=e=>e.searchQuery,a=e=>e.searchMemberQuery,i=e=>e.groups,c=e=>e.teams.length,o=(e,t)=>e.team.id===parseInt(t,10)?e.team:null,d=e=>{const t=RegExp(e.searchQuery,"i");return e.teams.filter(e=>t.test(e.name))},l=e=>{const t=RegExp(e.searchMemberQuery,"i");return e.members.filter(e=>t.test(e.login)||t.test(e.email)||t.test(e.name))},m=e=>{const{members:t,signedInUser:n,editorsCanAdmin:r}=e,a=t.find(e=>e.userId===n.id),i=a?a.permission:s.TeamPermissionLevel.Member;return h({permission:i,signedInUser:n,editorsCanAdmin:r})},h=e=>{const{permission:t,signedInUser:n,editorsCanAdmin:r}=e,a=n.isGrafanaAdmin||n.orgRole===s.OrgRole.Admin,i=t===s.TeamPermissionLevel.Admin;return a||i||!r}},gxTa:function(e,t,n){"use strict";n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return h})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return b})),n.d(t,"h",(function(){return j})),n.d(t,"c",(function(){return p})),n.d(t,"k",(function(){return g}));var s=n("t8hP"),r=n("3SGO"),a=n("zsYB"),i=n("BPIC");function c(){return async e=>{const t=await Object(s.getBackendSrv)().get("/api/teams/search",{perpage:1e3,page:1});e(Object(i.g)(t.teams))}}function o(e){return async t=>{const n=await Object(s.getBackendSrv)().get("/api/teams/"+e);t(Object(i.e)(n)),t(Object(r.d)(Object(a.a)(n)))}}function d(){return async(e,t)=>{const n=t().team.team,r=await Object(s.getBackendSrv)().get(`/api/teams/${n.id}/members`);e(Object(i.f)(r))}}function l(e){return async(t,n)=>{const r=n().team.team;await Object(s.getBackendSrv)().post(`/api/teams/${r.id}/members`,{userId:e}),t(d())}}function m(e){return async(t,n)=>{const r=n().team.team;await Object(s.getBackendSrv)().delete(`/api/teams/${r.id}/members/${e}`),t(d())}}function h(e,t){return async(n,r)=>{const a=r().team.team;await Object(s.getBackendSrv)().put("/api/teams/"+a.id,{name:e,email:t}),n(o(a.id))}}function u(){return async(e,t)=>{const n=t().team.team,r=await Object(s.getBackendSrv)().get(`/api/teams/${n.id}/groups`);e(Object(i.d)(r))}}function b(e){return async(t,n)=>{const r=n().team.team;await Object(s.getBackendSrv)().post(`/api/teams/${r.id}/groups`,{groupId:e}),t(u())}}function j(e){return async(t,n)=>{const r=n().team.team;await Object(s.getBackendSrv)().delete(`/api/teams/${r.id}/groups/${encodeURIComponent(e)}`),t(u())}}function p(e){return async t=>{await Object(s.getBackendSrv)().delete("/api/teams/"+e),t(c())}}function g(e){return async t=>{await Object(s.getBackendSrv)().put(`/api/teams/${e.teamId}/members/${e.userId}`,{permission:e.permission}),t(d())}}},mHLn:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s,r,a=n("q1tI"),i=n("vF1F"),c=n("kDLi"),o=n("Csm0"),d=n("NXk7"),l=n("oeIY"),m=n("nKUr");const h=[{value:"",label:"Default"},{value:"dark",label:"Dark"},{value:"light",label:"Light"}];class u extends a.PureComponent{constructor(e){super(e),this.service=void 0,this.onSubmitForm=async()=>{const{homeDashboardId:e,theme:t,timezone:n}=this.state;this.service.update({homeDashboardId:e,theme:t,timezone:n}),window.location.reload()},this.onThemeChanged=e=>{this.setState({theme:e})},this.onTimeZoneChanged=e=>{e&&this.setState({timezone:e})},this.onHomeDashboardChanged=e=>{this.setState({homeDashboardId:e})},this.getFullDashName=e=>void 0===e.folderTitle||""===e.folderTitle?e.title:e.folderTitle+" / "+e.title,this.service=new l.a(e.resourceUri),this.state={homeDashboardId:0,theme:"",timezone:"",dashboards:[]}}async componentDidMount(){const e=await this.service.load(),t=await d.b.search({starred:!0});if(e.homeDashboardId>0&&!t.find(t=>t.id===e.homeDashboardId)){const n=await d.b.search({dashboardIds:[e.homeDashboardId]});n&&n.length>0&&t.push(n[0])}this.setState({homeDashboardId:e.homeDashboardId,theme:e.theme,timezone:e.timezone,dashboards:[{id:0,title:"Default",tags:[],type:"",uid:"",uri:"",url:"",folderId:0,folderTitle:"",folderUid:"",folderUrl:"",isStarred:!1,slug:"",items:[]},...t]})}render(){const{theme:e,timezone:t,homeDashboardId:n,dashboards:a}=this.state,i=b();return Object(m.jsx)(c.Form,{onSubmit:this.onSubmitForm,children:()=>{var d;return Object(m.jsxs)(c.FieldSet,{label:"Preferences",children:[Object(m.jsx)(c.Field,{label:"UI Theme",children:Object(m.jsx)(c.RadioButtonGroup,{options:h,value:null===(d=h.find(t=>t.value===e))||void 0===d?void 0:d.value,onChange:this.onThemeChanged})}),Object(m.jsx)(c.Field,{label:Object(m.jsxs)(c.Label,{children:[Object(m.jsx)("span",{className:i.labelText,children:"Home Dashboard"}),s||(s=Object(m.jsx)(c.Tooltip,{content:"Not finding dashboard you want? Star it first, then it should appear in this select box.",children:Object(m.jsx)(c.Icon,{name:"info-circle"})}))]}),"aria-label":"User preferences home dashboard drop down",children:Object(m.jsx)(c.Select,{value:a.find(e=>e.id===n),getOptionValue:e=>e.id,getOptionLabel:this.getFullDashName,onChange:e=>this.onHomeDashboardChanged(e.id),options:a,placeholder:"Choose default dashboard"})}),Object(m.jsx)(c.Field,{label:"Timezone","aria-label":o.selectors.components.TimeZonePicker.container,children:Object(m.jsx)(c.TimeZonePicker,{includeInternal:!0,value:t,onChange:this.onTimeZoneChanged})}),r||(r=Object(m.jsx)("div",{className:"gf-form-button-row",children:Object(m.jsx)(c.Button,{variant:"primary","aria-label":"User preferences save button",children:"Save"})}))]})}})}}t.b=u;const b=Object(c.stylesFactory)(()=>({labelText:i.css`
      margin-right: 6px;
    `}))},"p+xb":function(e,t,n){"use strict";n.r(t);var s=n("q1tI"),r=n("/MKj"),a=n("LvDl"),i=n("ZFWI"),c=n("ZGyg"),o=n("BVom"),d=n("+dgx"),l=n("rCnR"),m=n("gxTa"),h=n("8uRs"),u=n("EKT6"),b=n("nKUr");const j=({featureToggle:e,children:t})=>!0===e?Object(b.jsx)(b.Fragment,{children:t}):null;var p,g=n("umNM"),O=n("kDLi"),x=n("GQ3c");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const{Select:v}=O.LegacyForms;class T extends s.PureComponent{constructor(e){super(e),this.onPermissionChange=(e,t)=>{const n=f({},t,{permission:e.value});this.props.updateTeamMember(n)},this.renderLabels=this.renderLabels.bind(this),this.renderPermissions=this.renderPermissions.bind(this)}onRemoveMember(e){this.props.removeTeamMember(e.userId)}renderPermissions(e){const{editorsCanAdmin:t,signedInUserIsTeamAdmin:n}=this.props,s=x.teamsPermissionLevels.find(t=>t.value===e.permission);return Object(b.jsx)(j,{featureToggle:t,children:Object(b.jsx)("td",{className:"width-5 team-permissions",children:Object(b.jsxs)("div",{className:"gf-form",children:[n&&Object(b.jsx)(v,{isSearchable:!1,options:x.teamsPermissionLevels,onChange:t=>this.onPermissionChange(t,e),className:"gf-form-select-box__control--menu-right",value:s}),!n&&Object(b.jsx)("span",{children:s.label})]})})})}renderLabels(e){return e?Object(b.jsx)("td",{children:e.map(e=>Object(b.jsx)(l.a,{label:e,removeIcon:!1,count:0,onClick:()=>{}},e))}):p||(p=Object(b.jsx)("td",{}))}render(){const{member:e,syncEnabled:t,signedInUserIsTeamAdmin:n}=this.props;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"width-4 text-center",children:Object(b.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl})}),Object(b.jsx)("td",{children:e.login}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.name}),this.renderPermissions(e),t&&this.renderLabels(e.labels),Object(b.jsx)("td",{className:"text-right",children:Object(b.jsx)(O.DeleteButton,{size:"sm",disabled:!n,onConfirm:()=>this.onRemoveMember(e)})})]},e.userId)}}const I={removeTeamMember:m.i,updateTeamMember:m.k};var y,w,C,S,A,N,G,L,k=Object(r.connect)((function(e){return{}}),I)(T),M=n("BPIC"),P=n("1Ra3");class U extends s.PureComponent{constructor(e){super(e),this.onSearchQueryChange=e=>{this.props.setSearchMemberQuery(e)},this.onToggleAdding=()=>{this.setState({isAdding:!this.state.isAdding})},this.onUserSelected=e=>{this.setState({newTeamMember:e})},this.onAddUserToTeam=async()=>{this.props.addTeamMember(this.state.newTeamMember.id),this.setState({newTeamMember:null})},this.state={isAdding:!1,newTeamMember:null}}renderLabels(e){return e?Object(b.jsx)("td",{children:e.map(e=>Object(b.jsx)(l.a,{label:e,removeIcon:!1,count:0,onClick:()=>{}},e))}):y||(y=Object(b.jsx)("td",{}))}render(){const{isAdding:e}=this.state,{searchMemberQuery:t,members:n,syncEnabled:s,editorsCanAdmin:r,signedInUser:a}=this.props,i=Object(h.i)({members:n,editorsCanAdmin:r,signedInUser:a});return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"page-action-bar",children:[Object(b.jsx)("div",{className:"gf-form gf-form--grow",children:Object(b.jsx)(u.a,{placeholder:"Search members",value:t,onChange:this.onSearchQueryChange})}),Object(b.jsx)(O.Button,{className:"pull-right",onClick:this.onToggleAdding,disabled:e||!i,children:"Add member"})]}),Object(b.jsx)(o.a,{in:e,children:Object(b.jsxs)("div",{className:"cta-form",children:[Object(b.jsx)(P.a,{onClick:this.onToggleAdding}),w||(w=Object(b.jsx)("h5",{children:"Add team member"})),Object(b.jsxs)("div",{className:"gf-form-inline",children:[Object(b.jsx)(d.a,{onSelected:this.onUserSelected,className:"min-width-30"}),this.state.newTeamMember&&Object(b.jsx)(O.Button,{type:"submit",onClick:this.onAddUserToTeam,children:"Add to team"})]})]})}),Object(b.jsx)("div",{className:"admin-list-table",children:Object(b.jsxs)("table",{className:"filter-table filter-table--hover form-inline",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[C||(C=Object(b.jsx)("th",{})),S||(S=Object(b.jsx)("th",{children:"Login"})),A||(A=Object(b.jsx)("th",{children:"Email"})),N||(N=Object(b.jsx)("th",{children:"Name"})),Object(b.jsx)(j,{featureToggle:r,children:G||(G=Object(b.jsx)("th",{children:"Permission"}))}),s&&(L||(L=Object(b.jsx)("th",{}))),Object(b.jsx)("th",{style:{width:"1%"}})]})}),Object(b.jsx)("tbody",{children:n&&n.map(e=>Object(b.jsx)(k,{member:e,syncEnabled:s,editorsCanAdmin:r,signedInUserIsTeamAdmin:i},e.userId))})]})})]})}}const D={addTeamMember:m.b,setSearchMemberQuery:M.b};var B,F=Object(r.connect)((function(e){return{searchMemberQuery:Object(h.a)(e.team),editorsCanAdmin:i.a.editorsCanAdmin,signedInUser:g.a.user}}),D)(U),E=n("mHLn");function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const $={updateTeam:m.j};var z,R,_,V,Z,q,H,K=Object(r.connect)(null,$)(({team:e,updateTeam:t})=>Object(b.jsxs)(O.VerticalGroup,{children:[Object(b.jsx)(O.FieldSet,{label:"Team settings",children:Object(b.jsx)(O.Form,{defaultValues:Q({},e),onSubmit:e=>{t(e.name,e.email)},children:({register:e})=>Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.Field,{label:"Name",children:Object(b.jsx)(O.Input,Q({},e("name",{required:!0})))}),Object(b.jsx)(O.Field,{label:"Email",description:"This is optional and is primarily used to set the team profile avatar (via gravatar service).",children:Object(b.jsx)(O.Input,Q({},e("email"),{placeholder:"team@email.com",type:"email"}))}),B||(B=Object(b.jsx)(O.Button,{type:"submit",children:"Update"}))]})})}),Object(b.jsx)(E.a,{resourceUri:"teams/"+e.id})]})),Y=n("QQVG");const{Input:J}=O.LegacyForms;function W(e){return{groups:Object(h.d)(e.team)}}const X={loadTeamGroups:m.e,addTeamGroup:m.a,removeTeamGroup:m.h},ee=(Object(r.connect)(W,X),"Sync LDAP or OAuth groups with your Grafana teams.");class te extends s.PureComponent{constructor(e){super(e),this.onToggleAdding=()=>{this.setState({isAdding:!this.state.isAdding})},this.onNewGroupIdChanged=e=>{this.setState({newGroupId:e.target.value})},this.onAddGroup=e=>{e.preventDefault(),this.props.addTeamGroup(this.state.newGroupId),this.setState({isAdding:!1,newGroupId:""})},this.onRemoveGroup=e=>{this.props.removeTeamGroup(e.groupId)},this.state={isAdding:!1,newGroupId:""}}componentDidMount(){this.fetchTeamGroups()}async fetchTeamGroups(){await this.props.loadTeamGroups()}isNewGroupValid(){return this.state.newGroupId.length>1}renderGroup(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.groupId}),Object(b.jsx)("td",{style:{width:"1%"},children:Object(b.jsx)(O.Button,{size:"sm",variant:"destructive",onClick:()=>this.onRemoveGroup(e),children:z||(z=Object(b.jsx)(O.Icon,{name:"times"}))})})]},e.groupId)}render(){const{isAdding:e,newGroupId:t}=this.state,n=this.props.groups;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"page-action-bar",children:[R||(R=Object(b.jsx)("h3",{className:"page-sub-heading",children:"External group sync"})),_||(_=Object(b.jsx)(O.Tooltip,{placement:"auto",content:ee,children:Object(b.jsx)(O.Icon,{className:"icon--has-hover page-sub-heading-icon",name:"question-circle"})})),V||(V=Object(b.jsx)("div",{className:"page-action-bar__spacer"})),n.length>0&&Object(b.jsxs)(O.Button,{className:"pull-right",onClick:this.onToggleAdding,children:[Z||(Z=Object(b.jsx)(O.Icon,{name:"plus"}))," Add group"]})]}),Object(b.jsx)(o.a,{in:e,children:Object(b.jsxs)("div",{className:"cta-form",children:[Object(b.jsx)(P.a,{onClick:this.onToggleAdding}),q||(q=Object(b.jsx)("h5",{children:"Add External Group"})),Object(b.jsxs)("form",{className:"gf-form-inline",onSubmit:this.onAddGroup,children:[Object(b.jsx)("div",{className:"gf-form",children:Object(b.jsx)(J,{type:"text",className:"gf-form-input width-30",value:t,onChange:this.onNewGroupIdChanged,placeholder:"cn=ops,ou=groups,dc=grafana,dc=org"})}),Object(b.jsx)("div",{className:"gf-form",children:Object(b.jsx)(O.Button,{type:"submit",disabled:!this.isNewGroupValid(),children:"Add group"})})]})]})}),0===n.length&&!e&&Object(b.jsx)(Y.a,{onClick:this.onToggleAdding,buttonIcon:"users-alt",title:"There are no external groups to sync with",buttonTitle:"Add Group",proTip:ee,proTipLinkTitle:"Learn more",proTipLink:"http://docs.grafana.org/auth/enhanced_ldap/",proTipTarget:"_blank"}),n.length>0&&Object(b.jsx)("div",{className:"admin-list-table",children:Object(b.jsxs)("table",{className:"filter-table filter-table--hover form-inline",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[H||(H=Object(b.jsx)("th",{children:"External Group ID"})),Object(b.jsx)("th",{style:{width:"1%"}})]})}),Object(b.jsx)("tbody",{children:n.map(e=>this.renderGroup(e))})]})})]})}}var ne,se,re=Object(r.connect)(W,X)(te),ae=n("zsYB"),ie=n("lzJ5");n.d(t,"TeamPages",(function(){return de})),function(e){e.Members="members",e.Settings="settings",e.GroupSync="groupsync"}(se||(se={}));const ce={loadTeam:m.d,loadTeamMembers:m.f},oe=Object(r.connect)((function(e,t){var n;const s=parseInt(t.match.params.id,10),r=null!==(n=t.match.params.page)&&void 0!==n?n:"members",a=Object(ae.b)(r);return{navModel:Object(ie.a)(e.navIndex,`team-${r}-${s}`,a),teamId:s,pageName:r,team:Object(h.c)(e.team,s),members:Object(h.e)(e.team),editorsCanAdmin:i.b.editorsCanAdmin,signedInUser:g.a.user}}),ce);class de extends s.PureComponent{constructor(e){super(e),this.textsAreEqual=(e,t)=>!e&&!t||!(!e||!t)&&e.toLocaleLowerCase()===t.toLocaleLowerCase(),this.hideTabsFromNonTeamAdmin=(e,t)=>(!t&&e.main&&e.main.children&&e.main.children.filter(e=>!this.textsAreEqual(e.text,se.Members)).map(e=>{e.hideFromTabs=!0}),e),this.state={isLoading:!1,isSyncEnabled:i.b.licenseInfo.hasLicense}}async componentDidMount(){await this.fetchTeam()}async fetchTeam(){const{loadTeam:e,teamId:t}=this.props;this.setState({isLoading:!0});const n=await e(t);return await this.props.loadTeamMembers(),this.setState({isLoading:!1}),n}getCurrentPage(){const e=["members","settings","groupsync"],t=this.props.pageName;return Object(a.includes)(e,t)?t:e[0]}renderPage(e){const{isSyncEnabled:t}=this.state,{members:n,team:s}=this.props;switch(this.getCurrentPage()){case se.Members:return Object(b.jsx)(F,{syncEnabled:t,members:n});case se.Settings:return e&&Object(b.jsx)(K,{team:s});case se.GroupSync:return e&&t&&(ne||(ne=Object(b.jsx)(re,{})))}return null}render(){const{team:e,navModel:t,members:n,editorsCanAdmin:s,signedInUser:r}=this.props,a=Object(h.i)({members:n,editorsCanAdmin:s,signedInUser:r});return Object(b.jsx)(c.a,{navModel:this.hideTabsFromNonTeamAdmin(t,a),children:Object(b.jsx)(c.a.Contents,{isLoading:this.state.isLoading,children:e&&0!==Object.keys(e).length&&this.renderPage(a)})})}}t.default=oe(de)},zsYB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var s=n("GQ3c"),r=n("ZFWI");function a(e){const t={img:e.avatarUrl,id:"team-"+e.id,subTitle:"Manage members and settings",url:"",text:e.name,breadcrumbs:[{title:"Teams",url:"org/teams"}],children:[{active:!1,icon:"users-alt",id:"team-members-"+e.id,text:"Members",url:`org/teams/edit/${e.id}/members`},{active:!1,icon:"sliders-v-alt",id:"team-settings-"+e.id,text:"Settings",url:`org/teams/edit/${e.id}/settings`}]};return r.b.licenseInfo.hasLicense&&t.children.push({active:!1,icon:"sync",id:"team-groupsync-"+e.id,text:"External group sync",url:`org/teams/edit/${e.id}/groupsync`}),t}function i(e){const t=a({avatarUrl:"public/img/user_profile.png",id:1,name:"Loading",email:"loading",memberCount:0,permission:s.TeamPermissionLevel.Member});let n;for(const s of t.children)if(s.id.indexOf(e)>0){s.active=!0,n=s;break}return{main:t,node:n}}}}]);
//# sourceMappingURL=TeamPages.de0e7cb4f02a375bece7.js.map