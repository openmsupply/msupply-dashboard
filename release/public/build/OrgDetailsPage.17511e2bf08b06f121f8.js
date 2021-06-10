(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"4kIt":function(e,t,a){"use strict";a("q1tI");var n,o=a("kDLi"),i=a("nKUr");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}t.a=({onSubmit:e,orgName:t})=>Object(i.jsx)(o.Form,{defaultValues:{orgName:t},onSubmit:({orgName:t})=>e(t),children:({register:e})=>Object(i.jsxs)(o.FieldSet,{label:"Organization profile",children:[Object(i.jsx)(o.Field,{label:"Organization name",children:Object(i.jsx)(o.Input,r({type:"text"},e("orgName",{required:!0})))}),n||(n=Object(i.jsx)(o.Button,{type:"submit",children:"Update organization name"}))]})})},e5mm:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"OrgDetailsPage",(function(){return g}));var n,o=a("q1tI"),i=a("0cfB"),r=a("/MKj"),s=a("ZGyg"),d=a("4kIt"),c=a("mHLn"),l=a("vl1P"),h=a("lzJ5"),b=a("fZn8"),u=a("kDLi"),m=a("nKUr");class g extends o.PureComponent{constructor(...e){super(...e),this.onUpdateOrganization=e=>{this.props.setOrganizationName(e),this.props.updateOrganization()}}async componentDidMount(){await this.props.loadOrganization()}render(){const{navModel:e,organization:t}=this.props,a=0===Object.keys(t).length;return Object(m.jsx)(s.a,{navModel:e,children:Object(m.jsx)(s.a.Contents,{isLoading:a,children:!a&&Object(m.jsxs)(u.VerticalGroup,{spacing:"lg",children:[Object(m.jsx)(d.a,{onSubmit:this.onUpdateOrganization,orgName:t.name}),n||(n=Object(m.jsx)(c.b,{resourceUri:"org"}))]})})})}}const j={loadOrganization:l.a,setOrganizationName:b.c,updateOrganization:l.b};t.default=Object(i.hot)(e)(Object(r.connect)((function(e){return{navModel:Object(h.a)(e.navIndex,"org-settings"),organization:e.organization.organization}}),j)(g))}.call(this,a("3UD+")(e))},mHLn:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n,o,i=a("q1tI"),r=a("vF1F"),s=a("kDLi"),d=a("Csm0"),c=a("NXk7"),l=a("oeIY"),h=a("nKUr");const b=[{value:"",label:"Default"},{value:"dark",label:"Dark"},{value:"light",label:"Light"}];class u extends i.PureComponent{constructor(e){super(e),this.service=void 0,this.onSubmitForm=async()=>{const{homeDashboardId:e,theme:t,timezone:a}=this.state;this.service.update({homeDashboardId:e,theme:t,timezone:a}),window.location.reload()},this.onThemeChanged=e=>{this.setState({theme:e})},this.onTimeZoneChanged=e=>{e&&this.setState({timezone:e})},this.onHomeDashboardChanged=e=>{this.setState({homeDashboardId:e})},this.getFullDashName=e=>void 0===e.folderTitle||""===e.folderTitle?e.title:e.folderTitle+" / "+e.title,this.service=new l.a(e.resourceUri),this.state={homeDashboardId:0,theme:"",timezone:"",dashboards:[]}}async componentDidMount(){const e=await this.service.load(),t=await c.b.search({starred:!0});if(e.homeDashboardId>0&&!t.find(t=>t.id===e.homeDashboardId)){const a=await c.b.search({dashboardIds:[e.homeDashboardId]});a&&a.length>0&&t.push(a[0])}this.setState({homeDashboardId:e.homeDashboardId,theme:e.theme,timezone:e.timezone,dashboards:[{id:0,title:"Default",tags:[],type:"",uid:"",uri:"",url:"",folderId:0,folderTitle:"",folderUid:"",folderUrl:"",isStarred:!1,slug:"",items:[]},...t]})}render(){const{theme:e,timezone:t,homeDashboardId:a,dashboards:i}=this.state,r=m();return Object(h.jsx)(s.Form,{onSubmit:this.onSubmitForm,children:()=>{var c;return Object(h.jsxs)(s.FieldSet,{label:"Preferences",children:[Object(h.jsx)(s.Field,{label:"UI Theme",children:Object(h.jsx)(s.RadioButtonGroup,{options:b,value:null===(c=b.find(t=>t.value===e))||void 0===c?void 0:c.value,onChange:this.onThemeChanged})}),Object(h.jsx)(s.Field,{label:Object(h.jsxs)(s.Label,{children:[Object(h.jsx)("span",{className:r.labelText,children:"Home Dashboard"}),n||(n=Object(h.jsx)(s.Tooltip,{content:"Not finding dashboard you want? Star it first, then it should appear in this select box.",children:Object(h.jsx)(s.Icon,{name:"info-circle"})}))]}),"aria-label":"User preferences home dashboard drop down",children:Object(h.jsx)(s.Select,{value:i.find(e=>e.id===a),getOptionValue:e=>e.id,getOptionLabel:this.getFullDashName,onChange:e=>this.onHomeDashboardChanged(e.id),options:i,placeholder:"Choose default dashboard"})}),Object(h.jsx)(s.Field,{label:"Timezone","aria-label":d.selectors.components.TimeZonePicker.container,children:Object(h.jsx)(s.TimeZonePicker,{includeInternal:!0,value:t,onChange:this.onTimeZoneChanged})}),o||(o=Object(h.jsx)("div",{className:"gf-form-button-row",children:Object(h.jsx)(s.Button,{variant:"primary","aria-label":"User preferences save button",children:"Save"})}))]})}})}}t.b=u;const m=Object(s.stylesFactory)(()=>({labelText:r.css`
      margin-right: 6px;
    `}))},vl1P:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var n=a("t8hP"),o=a("fZn8"),i=a("3SGO");function r(e={getBackendSrv:n.getBackendSrv}){return async t=>{const a=await e.getBackendSrv().get("/api/org");return t(Object(o.b)(a)),a}}function s(e={getBackendSrv:n.getBackendSrv}){return async(t,a)=>{const n=a().organization.organization;await e.getBackendSrv().put("/api/org",{name:n.name}),t(Object(i.c)(n.name)),t(r(e))}}}}]);
//# sourceMappingURL=OrgDetailsPage.17511e2bf08b06f121f8.js.map