(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"9i9D":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"CreateTeam",(function(){return u}));var a,c,r=n("q1tI"),i=n("ZGyg"),s=n("0cfB"),o=n("kDLi"),l=n("t8hP"),d=n("/MKj"),j=n("lzJ5"),b=n("nKUr");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}class u extends r.PureComponent{constructor(...e){super(...e),this.create=async e=>{const t=await Object(l.getBackendSrv)().post("/api/teams",e);t.teamId&&l.locationService.push("/org/teams/edit/"+t.teamId)}}render(){const{navModel:e}=this.props;return Object(b.jsx)(i.a,{navModel:e,children:Object(b.jsx)(i.a.Contents,{children:Object(b.jsx)(o.Form,{onSubmit:this.create,children:({register:e})=>Object(b.jsxs)(o.FieldSet,{label:"New Team",children:[Object(b.jsx)(o.Field,{label:"Name",children:Object(b.jsx)(o.Input,p({},e("name",{required:!0}),{width:60}))}),Object(b.jsx)(o.Field,{label:Object(b.jsxs)(o.Label,{children:[a||(a=Object(b.jsx)("span",{children:"Email"})),Object(b.jsx)(o.Tooltip,{content:"This is optional and is primarily used for allowing custom team avatars.",children:Object(b.jsx)(o.Icon,{name:"info-circle",style:{marginLeft:6}})})]}),children:Object(b.jsx)(o.Input,p({},e("email"),{type:"email",placeholder:"email@test.com",width:60}))}),c||(c=Object(b.jsx)("div",{className:"gf-form-button-row",children:Object(b.jsx)(o.Button,{type:"submit",variant:"primary",children:"Create"})}))]})})})})}}t.default=Object(s.hot)(e)(Object(d.connect)((function(e){return{navModel:Object(j.a)(e.navIndex,"teams")}}))(u))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=CreateTeam.de0e7cb4f02a375bece7.js.map