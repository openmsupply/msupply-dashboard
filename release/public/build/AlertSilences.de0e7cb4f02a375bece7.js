(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9f6O":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return r}));var n=a("t8hP"),c=a("q1tI"),s=a("Ty5D");function r(){const{search:t}=Object(s.l)();return[Object(c.useMemo)(()=>Object(n.locationSearchToObject)(t||""),[t]),Object(c.useCallback)((t,a)=>e(()=>n.locationService.partial(t,a)),[])]}}).call(this,a("URgk").setImmediate)},GT13:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a("kDLi"),s=a("/MKj"),r=a("Ty5D"),i=a("sbt+"),l=a("vF1F"),o=a("Obii"),d=a("te+q"),j=a("PFX3"),u=a("nKUr");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const m=e=>{let{className:t}=e,a=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["className"]);return Object(u.jsx)(j.a,b({variant:"secondary",size:"xs",className:Object(l.cx)(Object(c.useStyles)(O),t)},a))},O=e=>l.css`
  height: 24px;
  font-size: ${e.typography.size.sm};
`;var h=a("Kwdr"),g=a("P5Cx"),p=a("CBrm"),x=a("Wxkr"),f=a("sIux");const v={[x.a.Active]:"bad",[x.a.Unprocessed]:"neutral",[x.a.Suppressed]:"info"},y=({state:e})=>Object(u.jsx)(f.a,{state:v[e],children:e});var S;const w=({alert:e,className:t})=>{const[a,s]=Object(n.useState)(!0),r=Object(c.useStyles2)(g.a),i=Object(o.toDuration)(Object(o.dateTimeAsMoment)(e.endsAt).diff(e.startsAt)).asSeconds(),l=Object.entries(e.labels).reduce((e,[t,a])=>("alertname"!==t&&"__alert_rule_title__"!==t||(e=a),e),"");return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("tr",{className:t,children:[Object(u.jsx)("td",{children:Object(u.jsx)(d.a,{isCollapsed:a,onToggle:e=>s(e)})}),Object(u.jsx)("td",{children:Object(u.jsx)(y,{state:e.status.state})}),Object(u.jsxs)("td",{children:["for ",i," seconds"]}),Object(u.jsx)("td",{children:l}),Object(u.jsx)("td",{className:r.actionsCell,children:Object(u.jsx)(h.a,{icon:"chart-line",to:e.generatorURL,tooltip:"View in explorer"})})]}),!a&&Object(u.jsxs)("tr",{className:t,children:[S||(S=Object(u.jsx)("td",{})),Object(u.jsx)("td",{colSpan:5,children:Object(u.jsx)(p.a,{labels:e.labels})})]})]})};var N,k,I;const A=e=>({tableMargin:l.css`
    margin-bottom: ${e.spacing(1)};
  `,colState:l.css`
    width: 110px;
  `,colName:l.css`
    width: 65%;
  `});var C=({silencedAlerts:e})=>{const t=Object(c.useStyles2)(g.a),a=Object(c.useStyles2)(A);return e.length?Object(u.jsxs)("table",{className:Object(l.cx)(t.table,a.tableMargin),children:[Object(u.jsxs)("colgroup",{children:[Object(u.jsx)("col",{className:t.colExpand}),Object(u.jsx)("col",{className:a.colState}),N||(N=Object(u.jsx)("col",{})),Object(u.jsx)("col",{className:a.colName}),k||(k=Object(u.jsx)("col",{}))]}),I||(I=Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{}),Object(u.jsx)("th",{children:"State"}),Object(u.jsx)("th",{}),Object(u.jsx)("th",{children:"Alert name"}),Object(u.jsx)("th",{children:"Actions"})]})})),Object(u.jsx)("tbody",{children:e.map((e,a)=>Object(u.jsx)(w,{alert:e,className:a%2==0?t.evenRow:""},e.fingerprint))})]}):null},D=a("4Yfp"),T=a("Jv5Q");const M={[x.c.Active]:"good",[x.c.Expired]:"neutral",[x.c.Pending]:"neutral"},$=({state:e})=>Object(u.jsx)(f.a,{state:M[e],children:e});var B,R,F,q,E,L,Y,_,P,U,V,K,z=a("8qpb"),Z=a("umNM");const H=e=>({matchersCell:l.css`
    & > * + * {
      margin-left: ${e.spacing.xs};
    }
  `,actionsCell:l.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${e.spacing.sm};
    }
  `,alertRulesCell:l.css`
    vertical-align: top;
  `});var G,J=({silence:e,className:t,silencedAlerts:a,alertManagerSourceName:r})=>{const[i,j]=Object(n.useState)(!0),b=Object(s.useDispatch)(),O=Object(c.useStyles)(H),{status:g,matchers:p=[],startsAt:x,endsAt:f,comment:v,createdBy:y}=e,S=o.dateMath.parse(x),w=o.dateMath.parse(f),N=Object(o.intervalToAbbreviatedDurationString)({start:new Date(x),end:new Date(f)}),k=Z.a.isEditor?4:3;return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsxs)("tr",{className:t,children:[Object(u.jsx)("td",{children:Object(u.jsx)(d.a,{isCollapsed:i,onToggle:e=>j(e)})}),Object(u.jsx)("td",{children:Object(u.jsx)($,{state:g.state})}),Object(u.jsx)("td",{className:O.matchersCell,children:Object(u.jsx)(T.a,{matchers:p})}),Object(u.jsx)("td",{children:a.length}),Object(u.jsxs)("td",{children:[null==S?void 0:S.format("YYYY-MM-DD HH:mm")," ","-",B||(B=Object(u.jsx)("br",{})),null==w?void 0:w.format("YYYY-MM-DD HH:mm")]}),Z.a.isEditor&&Object(u.jsxs)("td",{className:O.actionsCell,children:["expired"===g.state?Object(u.jsx)(c.Link,{href:Object(z.e)(`/alerting/silence/${e.id}/edit`,r),children:R||(R=Object(u.jsx)(m,{icon:"sync",children:"Recreate"}))}):Object(u.jsx)(m,{icon:"bell",onClick:()=>{b(Object(D.e)(r,e.id))},children:"Unsilence"}),"expired"!==g.state&&Object(u.jsx)(h.a,{to:Object(z.e)(`/alerting/silence/${e.id}/edit`,r),icon:"pen",tooltip:"edit"})]})]}),!i&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("tr",{className:t,children:[F||(F=Object(u.jsx)("td",{})),q||(q=Object(u.jsx)("td",{children:"Comment"})),Object(u.jsx)("td",{colSpan:k,children:v})]}),Object(u.jsxs)("tr",{className:t,children:[E||(E=Object(u.jsx)("td",{})),L||(L=Object(u.jsx)("td",{children:"Schedule"})),Object(u.jsx)("td",{colSpan:k,children:`${null==S?void 0:S.format("YYYY-MM-DD HH:mm")} - ${null==w?void 0:w.format("YYYY-MM-DD HH:mm")}`})]}),Object(u.jsxs)("tr",{className:t,children:[Y||(Y=Object(u.jsx)("td",{})),_||(_=Object(u.jsx)("td",{children:"Duration"})),Object(u.jsx)("td",{colSpan:k,children:N})]}),Object(u.jsxs)("tr",{className:t,children:[P||(P=Object(u.jsx)("td",{})),U||(U=Object(u.jsx)("td",{children:"Created by"})),Object(u.jsx)("td",{colSpan:k,children:y})]}),!!a.length&&Object(u.jsxs)("tr",{className:Object(l.cx)(t,O.alertRulesCell),children:[V||(V=Object(u.jsx)("td",{})),K||(K=Object(u.jsx)("td",{children:"Affected alerts"})),Object(u.jsx)("td",{colSpan:k,children:Object(u.jsx)(C,{silencedAlerts:a})})]})]})]})},Q=a("QQVG");const X=({alertManagerSourceName:e})=>Z.a.isEditor?Object(u.jsx)(Q.a,{title:"You haven't created any silences yet",buttonIcon:"bell-slash",buttonLink:Object(z.e)("alerting/silence/new",e),buttonTitle:"New silence"}):G||(G=Object(u.jsx)(c.CallToActionCard,{callToActionElement:Object(u.jsx)("div",{}),message:"No silences found."}));var W,ee,te,ae,ne,ce,se,re,ie,le;const oe=e=>({topButtonContainer:l.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,addNewSilence:l.css`
    margin-bottom: ${e.spacing(1)};
  `,colState:l.css`
    width: 110px;
  `,colMatchers:l.css`
    width: 50%;
  `,callout:l.css`
    background-color: ${e.colors.background.secondary};
    border-top: 3px solid ${e.colors.info.border};
    border-radius: 2px;
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${e.spacing(2)};

    & > * {
      margin-left: ${e.spacing(1)};
    }
  `,calloutIcon:l.css`
    color: ${e.colors.info.text};
  `});var de=({silences:e,alertManagerAlerts:t,alertManagerSourceName:a})=>{const n=Object(c.useStyles2)(oe),s=Object(c.useStyles2)(g.a);return Object(u.jsxs)(u.Fragment,{children:[!!e.length&&Object(u.jsxs)(u.Fragment,{children:[Z.a.isEditor&&Object(u.jsx)("div",{className:n.topButtonContainer,children:Object(u.jsx)(c.Link,{href:Object(z.e)("/alerting/silence/new",a),children:Object(u.jsx)(c.Button,{className:n.addNewSilence,icon:"plus",children:"New Silence"})})}),Object(u.jsxs)("table",{className:s.table,children:[Object(u.jsxs)("colgroup",{children:[Object(u.jsx)("col",{className:s.colExpand}),Object(u.jsx)("col",{className:n.colState}),Object(u.jsx)("col",{className:n.colMatchers}),W||(W=Object(u.jsx)("col",{})),ee||(ee=Object(u.jsx)("col",{})),Z.a.isEditor&&(te||(te=Object(u.jsx)("col",{})))]}),Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[ae||(ae=Object(u.jsx)("th",{})),ne||(ne=Object(u.jsx)("th",{children:"State"})),ce||(ce=Object(u.jsx)("th",{children:"Matching labels"})),se||(se=Object(u.jsx)("th",{children:"Alerts"})),re||(re=Object(u.jsx)("th",{children:"Schedule"})),Z.a.isEditor&&(ie||(ie=Object(u.jsx)("th",{children:"Action"})))]})}),Object(u.jsx)("tbody",{children:e.map((e,n)=>{const c=(r=e.id,t.filter(e=>e.status.silencedBy.includes(r)));var r;return Object(u.jsx)(J,{silence:e,className:n%2==0?s.evenRow:void 0,silencedAlerts:c,alertManagerSourceName:a},e.id)})})]}),Object(u.jsxs)("div",{className:n.callout,children:[Object(u.jsx)(c.Icon,{className:n.calloutIcon,name:"info-circle"}),le||(le=Object(u.jsx)("span",{children:"Expired silences are automatically deleted after 5 days."}))]})]}),!e.length&&Object(u.jsx)(X,{alertManagerSourceName:a})]})},je=a("dEXO"),ue=a("w+lj"),be=a("d6cIB"),me=a("fXZ9"),Oe=a("rYwU"),he=a("t8hP"),ge=a("LvDl"),pe=a("NKCw");function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const fe=e=>({wrapper:l.css`
      margin-top: ${e.spacing(2)};
    `,row:l.css`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${e.colors.background.secondary};
      padding: ${e.spacing(1)} ${e.spacing(1)} 0 ${e.spacing(1)};
      & > * + * {
        margin-left: ${e.spacing(2)};
      }
    `,removeButton:l.css`
      margin-left: ${e.spacing(1)};
      margin-top: ${e.spacing(2.5)};
    `,matchers:l.css`
      max-width: 585px;
      margin: ${e.spacing(1)} 0;
      padding-top: ${e.spacing(.5)};
    `});var ve=({className:e})=>{const t=Object(c.useStyles2)(fe),a=Object(pe.h)(),{register:n,formState:{errors:s}}=a,{fields:r=[],append:i,remove:o}=Object(pe.f)({name:"matchers"});return Object(u.jsx)("div",{className:Object(l.cx)(e,t.wrapper),children:Object(u.jsx)(c.Field,{label:"Matching labels",required:!0,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:t.matchers,children:r.map((e,a)=>{var i,l,d,j,b,m,O,h,g,p;return Object(u.jsxs)("div",{className:t.row,children:[Object(u.jsx)(c.Field,{label:"Label",invalid:!(null==s||null===(i=s.matchers)||void 0===i||null===(l=i[a])||void 0===l||!l.name),error:null==s||null===(d=s.matchers)||void 0===d||null===(j=d[a])||void 0===j||null===(b=j.name)||void 0===b?void 0:b.message,children:Object(u.jsx)(c.Input,xe({},n(`matchers.${a}.name`,{required:{value:!0,message:"Required."}}),{defaultValue:e.name,placeholder:"label"}))}),Object(u.jsx)(c.Field,{label:"Value",invalid:!(null==s||null===(m=s.matchers)||void 0===m||null===(O=m[a])||void 0===O||!O.value),error:null==s||null===(h=s.matchers)||void 0===h||null===(g=h[a])||void 0===g||null===(p=g.value)||void 0===p?void 0:p.message,children:Object(u.jsx)(c.Input,xe({},n(`matchers.${a}.value`,{required:{value:!0,message:"Required."}}),{defaultValue:e.value,placeholder:"value"}))}),Object(u.jsx)(c.Field,{label:"Regex",children:Object(u.jsx)(c.Checkbox,xe({},n(`matchers.${a}.isRegex`),{defaultChecked:e.isRegex}))}),Object(u.jsx)(c.Field,{label:"Equal",children:Object(u.jsx)(c.Checkbox,xe({},n(`matchers.${a}.isEqual`),{defaultChecked:e.isEqual}))}),r.length>1&&Object(u.jsx)(c.IconButton,{className:t.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>o(a),children:"Remove"})]},""+e.id)})}),Object(u.jsx)(c.Button,{type:"button",icon:"plus",variant:"secondary",onClick:()=>{i({name:"",value:"",isRegex:!1,isEqual:!0})},children:"Add matcher"})]})})})};const ye=()=>{const{control:e,getValues:t}=Object(pe.h)(),a=Object(c.useStyles)(Se),{field:{onChange:n,value:s},fieldState:{invalid:r}}=Object(pe.e)({name:"startsAt",control:e,rules:{validate:e=>t().endsAt>e}}),{field:{onChange:i,value:l},fieldState:{invalid:d}}=Object(pe.e)({name:"endsAt",control:e,rules:{validate:e=>t().startsAt<e}}),{field:{onChange:j,value:b}}=Object(pe.e)({name:"timeZone",control:e}),m=r||d,O=Object(o.dateTime)(s),h=Object(o.dateTime)(l);return Object(u.jsx)(c.Field,{className:a.timeRange,label:"Silence start and end",error:m?"To is before or the same as from":"",invalid:m,children:Object(u.jsx)(c.TimeRangeInput,{value:{from:O,to:h,raw:{from:O,to:h}},timeZone:b,onChange:e=>{n(Object(o.dateTime)(e.from)),i(Object(o.dateTime)(e.to))},onChangeTimeZone:e=>j(e),hideTimeZone:!1,hideQuickRanges:!0})})},Se=e=>({timeRange:l.css`
    width: 400px;
  `});var we,Ne,ke,Ie,Ae=a("SGmB"),Ce=a("9f6O"),De=a("Sp9v");function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Me=e=>{const t={},{matchers:a,comment:n}=e;if("string"==typeof a){const e=a.split(",").filter(e=>!!e.trim()).map(e=>Object(De.d)(e.trim()));e.length&&(t.matchers=e)}return"string"==typeof n&&(t.comment=n),t},$e=e=>({field:l.css`
    margin: ${e.spacing.sm} 0;
  `,textArea:l.css`
    width: 600px;
  `,createdBy:l.css`
    width: 200px;
  `,flexRow:l.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${e.spacing.sm};
    }
  `});var Be,Re,Fe=({silence:e,alertManagerSourceName:t})=>{var a,r;const[i]=Object(Ce.a)(),d=Object(n.useMemo)(()=>((e,t)=>{const a=new Date;if(t){const e=Date.parse(t.endsAt)<Date.now()?{start:a,end:Object(o.addDurationToDate)(a,{hours:2})}:{start:new Date(t.startsAt),end:new Date(t.endsAt)};return{id:t.id,startsAt:e.start.toISOString(),endsAt:e.end.toISOString(),comment:t.comment,createdBy:t.createdBy,duration:Object(o.intervalToAbbreviatedDurationString)(e),isRegex:!1,matchers:t.matchers||[],matcherName:"",matcherValue:"",timeZone:o.DefaultTimeZone}}{const t=Object(o.addDurationToDate)(a,{hours:2});return Te({id:"",startsAt:a.toISOString(),endsAt:t.toISOString(),comment:"",createdBy:he.config.bootData.user.name,duration:"2h",isRegex:!1,matchers:[{name:"",value:"",isRegex:!1,isEqual:!0}],matcherName:"",matcherValue:"",timeZone:o.DefaultTimeZone},Me(e))}})(i,e),[e,i]),j=Object(pe.g)({defaultValues:d}),b=Object(s.useDispatch)(),m=Object(c.useStyles)($e),{loading:O}=Object(ue.a)(e=>e.updateSilence);Object(Ae.a)(e=>e.unifiedAlerting.updateSilence);const{register:h,handleSubmit:g,formState:p,watch:x,setValue:f,clearErrors:v}=j,y=x("duration"),S=x("startsAt"),w=x("endsAt"),[N,k]=Object(n.useState)(y);return Object(Oe.a)(()=>{if(Object(o.isValidDate)(S)&&Object(o.isValidDate)(w))if(y!==N)f("endsAt",Object(o.dateTime)(Object(o.addDurationToDate)(new Date(S),Object(o.parseDuration)(y))).toISOString()),k(y);else{const e=new Date(S).valueOf();if(new Date(w).valueOf()>e){const e=Object(o.intervalToAbbreviatedDurationString)({start:new Date(S),end:new Date(w)});f("duration",e),k(e)}}},700,[v,y,w,N,f,S]),Object(u.jsx)(pe.c,Te({},j,{children:Object(u.jsxs)("form",{onSubmit:g(e=>{const{id:a,startsAt:n,endsAt:c,comment:s,createdBy:r,matchers:i}=e,l=Object(ge.pickBy)({id:a,startsAt:n,endsAt:c,comment:s,createdBy:r,matchers:i},e=>!!e);b(Object(D.a)({alertManagerSourceName:t,payload:l,exitOnSave:!0,successMessage:"Silence "+(l.id?"updated":"created")}))}),children:[Object(u.jsxs)(c.FieldSet,{label:""+(e?"Recreate silence":"Create silence"),children:[Object(u.jsxs)("div",{className:m.flexRow,children:[we||(we=Object(u.jsx)(ye,{})),Object(u.jsx)(c.Field,{label:"Duration",invalid:!!p.errors.duration,error:p.errors.duration&&("required"===p.errors.duration.type?"Required field":p.errors.duration.message),children:Object(u.jsx)(c.Input,Te({className:m.createdBy},h("duration",{validate:e=>0===Object.keys(Object(o.parseDuration)(e)).length?"Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)":void 0}),{id:"duration"}))})]}),Ne||(Ne=Object(u.jsx)(ve,{})),Object(u.jsx)(c.Field,{className:Object(l.cx)(m.field,m.textArea),label:"Comment",required:!0,error:null===(a=p.errors.comment)||void 0===a?void 0:a.message,invalid:!!p.errors.comment,children:Object(u.jsx)(c.TextArea,Te({},h("comment",{required:{value:!0,message:"Required."}})))}),Object(u.jsx)(c.Field,{className:Object(l.cx)(m.field,m.createdBy),label:"Created by",required:!0,error:null===(r=p.errors.createdBy)||void 0===r?void 0:r.message,invalid:!!p.errors.createdBy,children:Object(u.jsx)(c.Input,Te({},h("createdBy",{required:{value:!0,message:"Required."}})))})]}),Object(u.jsxs)("div",{className:m.flexRow,children:[O&&(ke||(ke=Object(u.jsx)(c.Button,{disabled:!0,icon:"fa fa-spinner",variant:"primary",children:"Saving..."}))),!O&&(Ie||(Ie=Object(u.jsx)(c.Button,{type:"submit",children:"Submit"}))),Object(u.jsx)(c.LinkButton,{href:Object(z.e)("alerting/silences",t),variant:"secondary",fill:"outline",children:"Cancel"})]})]})}))},qe=a("lcDh");t.default=Object(c.withErrorBoundary)(()=>{var e,t;const[a,l]=Object(je.a)(),o=Object(s.useDispatch)(),d=Object(ue.a)(e=>e.silences),j=Object(ue.a)(e=>e.amAlerts),b=a?j[a]||me.c:void 0,m=Object(r.l)().pathname.endsWith("/alerting/silences");Object(n.useEffect)(()=>{function e(){a&&(o(Object(D.q)(a)),o(Object(D.i)(a)))}e();const t=setInterval(()=>e,be.f);return()=>{clearInterval(t)}},[a,o]);const{result:O,loading:h,error:g}=a&&d[a]||me.c,p=Object(n.useCallback)(e=>O&&O.find(t=>t.id===e),[O]);return a?Object(u.jsxs)(i.a,{pageId:"silences",children:[Object(u.jsx)(qe.a,{disabled:!m,current:a,onChange:l}),g&&!h&&Object(u.jsx)(c.Alert,{severity:"error",title:"Error loading silences",children:g.message||"Unknown error."}),(null==b?void 0:b.error)&&!(null!=b&&b.loading)&&Object(u.jsx)(c.Alert,{severity:"error",title:"Error loading alert manager alerts",children:(null===(e=b.error)||void 0===e?void 0:e.message)||"Unknown error."}),h&&(Re||(Re=Object(u.jsx)(c.LoadingPlaceholder,{text:"loading silences..."}))),O&&!g&&Object(u.jsxs)(r.g,{children:[Object(u.jsx)(r.d,{exact:!0,path:"/alerting/silences",children:Object(u.jsx)(de,{silences:O,alertManagerAlerts:null!==(t=null==b?void 0:b.result)&&void 0!==t?t:[],alertManagerSourceName:a})}),Object(u.jsx)(r.d,{exact:!0,path:"/alerting/silence/new",children:Object(u.jsx)(Fe,{alertManagerSourceName:a})}),Object(u.jsx)(r.d,{exact:!0,path:"/alerting/silence/:id/edit",children:({match:e})=>(null==e?void 0:e.params.id)&&Object(u.jsx)(Fe,{silence:p(e.params.id),alertManagerSourceName:a})})]})]}):Be||(Be=Object(u.jsx)(r.c,{to:"/alerting/silences"}))},{style:"page"})},Jv5Q:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),c=a("kDLi"),s=a("vF1F"),r=a("A5n/"),i=a("Sp9v"),l=a("nKUr");const o=({matchers:e,onRemoveLabel:t})=>{const a=Object(c.useStyles)(d),s=Object(n.useCallback)(e=>{t&&t(e)},[t]);return Object(l.jsx)("div",{className:a.wrapper,children:e.map((e,a)=>{const{name:n,value:c}=e;return Object(l.jsx)(r.a,{labelKey:n,value:c,operator:Object(i.c)(e),onRemoveLabel:t?()=>s(a):void 0},`${n}-${c}-${a}`)})})},d=e=>({wrapper:s.css`
    & > * {
      margin-top: ${e.spacing.xs};
      margin-right: ${e.spacing.xs};
    }
    padding-bottom: ${e.spacing.xs};
  `})},Kwdr:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("kDLi"),c=(a("q1tI"),a("vF1F")),s=a("55Ip"),r=a("nKUr");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const l=e=>{var t;let{tooltip:a,icon:l,to:d,target:j,onClick:u,className:b,tooltipPlacement:m="top"}=e,O=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["tooltip","icon","to","target","onClick","className","tooltipPlacement"]);const h=Object(r.jsx)(n.Icon,i({className:Object(c.cx)(Object(n.useStyles)(o),b),onClick:u,name:l},O));return Object(r.jsx)(n.Tooltip,{content:a,placement:m,children:d?t||(t=Object(r.jsx)(s.Link,{to:d,target:j,children:h})):h})},o=()=>c.css`
  cursor: pointer;
`},P5Cx:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("vF1F");const c=e=>({table:n.css`
    width: 100%;
    border-radius: ${e.shape.borderRadius()};
    border: solid 1px ${e.colors.border.weak};
    background-color: ${e.colors.background.secondary};

    th {
      padding: ${e.spacing(1)};
    }

    td {
      padding: 0 ${e.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:n.css`
    background-color: ${e.colors.background.primary};
  `,colExpand:n.css`
    width: 36px;
  `,actionsCell:n.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `})},SGmB:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),c=a("/MKj"),s=a("zVNn");function r(e){const t=Object(c.useDispatch)(),a=Object(n.useRef)(e);a.current=e,Object(n.useEffect)(()=>()=>{t(Object(s.a)({stateSelector:a.current}))},[t])}},URgk:function(e,t,a){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,c=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(c.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new s(c.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},a("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a("yLpj"))},YBdB:function(e,t,a){(function(e,t){!function(e,a){"use strict";if(!e.setImmediate){var n,c,s,r,i,l=1,o={},d=!1,j=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}()?e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){m(e.data)},n=function(e){s.port2.postMessage(e)}):j&&"onreadystatechange"in j.createElement("script")?(c=j.documentElement,n=function(e){var t=j.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,c.removeChild(t),t=null},c.appendChild(t)}):n=function(e){setTimeout(m,0,e)}:(r="setImmediate$"+Math.random()+"$",i=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(r)&&m(+t.data.slice(r.length))},e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),n=function(t){e.postMessage(r+t,"*")}),u.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var c={callback:e,args:t};return o[l]=c,n(l),l++},u.clearImmediate=b}function b(e){delete o[e]}function m(e){if(d)setTimeout(m,0,e);else{var t=o[e];if(t){d=!0;try{!function(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(void 0,a)}}(t)}finally{b(e),d=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,a("yLpj"),a("8oxB"))},dEXO:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("9f6O"),c=a("SMGL"),s=a("q1tI"),r=a("d6cIB"),i=a("Jzaf");function l(e){return e===i.b||!!Object(i.c)().find(t=>t.name===e)}function o(){const[e,t]=Object(n.a)(),a=Object(s.useCallback)(e=>{l(e)&&(e===i.b?(c.a.delete(r.a),t({[r.b]:null})):(c.a.set(r.a,e),t({[r.b]:e})))},[t]),o=e[r.b];if(o&&"string"==typeof o)return l(o)?[o,a]:[void 0,a];const d=c.a.get(r.a);return d&&"string"==typeof d&&l(d)?(a(d),[d,a]):[i.b,a]}},lcDh:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("Jzaf"),c=a("q1tI"),s=a("kDLi"),r=a("pz/R"),i=a("vF1F"),l=a("nKUr");const o=({onChange:e,current:t,disabled:a=!1})=>{const i=Object(s.useStyles2)(d),o=Object(c.useMemo)(()=>[{label:"Grafana",value:n.b,imgUrl:"public/img/grafana_icon.svg",meta:{}},...Object(r.a)().filter(e=>e.type===n.a.Alertmanager).map(e=>({label:e.name.substr(0,37),value:e.name,imgUrl:e.meta.info.logos.small,meta:e.meta}))],[]);return 1===o.length?null:Object(l.jsx)(s.Field,{className:i.field,label:a?"Alert manager":"Choose alert manager",disabled:a,"data-testid":"alertmanager-picker",children:Object(l.jsx)(s.Select,{width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:t=>t.value&&e(t.value),options:o,maxMenuHeight:500,noOptionsMessage:"No datasources found",value:t,getOptionLabel:e=>e.label})})},d=e=>({field:i.css`
    margin-bottom: ${e.spacing(4)};
  `})},"sbt+":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("q1tI");var n=a("ZGyg"),c=a("lzJ5"),s=a("/MKj"),r=a("nKUr");const i=({children:e,pageId:t,isLoading:a})=>{const i=Object(c.a)(Object(s.useSelector)(e=>e.navIndex),t);return Object(r.jsx)(n.a,{navModel:i,children:Object(r.jsx)(n.a.Contents,{isLoading:a,children:e})})}},"te+q":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("q1tI");var n=a("vF1F"),c=a("kDLi"),s=a("nKUr");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const i=e=>{let{isCollapsed:t,onToggle:a,className:i,size:o="xl"}=e,d=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["isCollapsed","onToggle","className","size"]);const j=Object(c.useStyles)(l);return Object(s.jsx)("button",r({className:Object(n.cx)(j.expandButton,i),onClick:()=>a(!t)},d,{children:Object(s.jsx)(c.Icon,{size:o,name:t?"angle-right":"angle-down"})}))},l=()=>({expandButton:n.css`
    background: none;
    border: none;

    outline: none !important;

    svg {
      margin-bottom: 0;
    }
  `})}}]);
//# sourceMappingURL=AlertSilences.de0e7cb4f02a375bece7.js.map