(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9f6O":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var a=n("t8hP"),r=n("q1tI"),l=n("Ty5D");function i(){const{search:t}=Object(l.l)();return[Object(r.useMemo)(()=>Object(a.locationSearchToObject)(t||""),[t]),Object(r.useCallback)((t,n)=>e(()=>a.locationService.partial(t,n)),[])]}}).call(this,n("URgk").setImmediate)},"Ev/k":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n("vF1F"),l=n("kDLi"),i=n("/MKj"),o=n("Ty5D"),s=n("SGmB"),c=n("sbt+"),u=n("lcDh"),d=n("G1gI"),p=n("Sp9v");function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const b=["",d.b[0].value],g=(e,t)=>Object.entries(null!=e?e:{}).reduce((e,[n,a])=>[...e,{name:n,value:a,isRegex:t,isEqual:!0}],[]),m=e=>{if(!e)return b;const[t,n]=e?Object(d.a)(e):[void 0,void 0],a=d.b.find(e=>e.value===n);return t&&a?[String(t),a.value]:b},v=e=>e.value,h={name:"",value:"",isRegex:!1,isEqual:!0},f={id:"",matchers:[h],groupBy:[],routes:[],continue:!1,receiver:"",groupWaitValue:"",groupWaitValueType:d.b[0].value,groupIntervalValue:"",groupIntervalValueType:d.b[0].value,repeatIntervalValue:"",repeatIntervalValueType:d.b[0].value},O=e=>{var t,n,a,r,l,i;if(!e||0===Object.keys(e).length)return[f,{}];const[o,s]=m(e.group_wait),[c,u]=m(e.group_interval),[d,j]=m(e.repeat_interval),b=String(Math.random()),v={[b]:e},h=[];return null===(t=e.routes)||void 0===t||t.forEach(e=>{const[t,n]=O(e);h.push(t),Object.assign(v,n)}),[{id:b,matchers:[...null!==(n=null===(a=e.matchers)||void 0===a?void 0:a.map(p.d))&&void 0!==n?n:[],...g(e.match,!1),...g(e.match_re,!0)],continue:null!==(r=e.continue)&&void 0!==r&&r,receiver:null!==(l=e.receiver)&&void 0!==l?l:"",groupBy:null!==(i=e.group_by)&&void 0!==i?i:[],groupWaitValue:o,groupWaitValueType:s,groupIntervalValue:c,groupIntervalValueType:u,repeatIntervalValue:d,repeatIntervalValueType:j,routes:h},v]},x=(e,t)=>{const n=t[e.id],a=j({},null!=n?n:{},{continue:e.continue,group_by:e.groupBy,matchers:e.matchers.length?e.matchers.map(p.e):void 0,match:void 0,match_re:void 0,group_wait:e.groupWaitValue?`${e.groupWaitValue}${e.groupWaitValueType}`:void 0,group_interval:e.groupIntervalValue?`${e.groupIntervalValue}${e.groupIntervalValueType}`:void 0,repeat_interval:e.repeatIntervalValue?`${e.repeatIntervalValue}${e.repeatIntervalValueType}`:void 0,routes:e.routes.map(e=>x(e,t))});return e.receiver&&(a.receiver=e.receiver),a},y=e=>({label:e,value:e}),C=e=>(null!=e?e:[]).map(y),I=e=>{var t;return e&&null!==(t=v(e))&&void 0!==t?t:""},w=e=>{return e?(null!=(t=e)?t:[]).map(v):[];var t},$=e=>{if(e)return/^\d+$/.test(e)?void 0:"Must be a positive integer."};var N=n("8qpb");const S=e=>({container:r.css`
      align-items: center;
      display: flex;
      flex-flow: row nowrap;

      & > * + * {
        margin-left: ${e.spacing(1)};
      }
    `,input:r.css`
      flex: 1;
    `,timingContainer:r.css`
      max-width: ${e.spacing(33)};
    `,smallInput:r.css`
      width: ${e.spacing(6.5)};
    `});var V,k,E=n("nKUr");function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}const F=({alertManagerSourceName:e,onCancel:t,onSave:n,receivers:i,routes:o})=>{var s;const c=Object(l.useStyles2)(S),[u,p]=Object(a.useState)(!1),[j,b]=Object(a.useState)(C(o.groupBy));return Object(E.jsx)(l.Form,{defaultValues:o,onSubmit:n,children:({control:n,errors:a,setValue:o})=>{var g,m,v;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(l.Field,{label:"Default contact point",children:Object(E.jsxs)("div",{className:c.container,children:[Object(E.jsx)(l.InputControl,{render:e=>{let{field:{onChange:t}}=e,n=B(e.field,["onChange","ref"]);return Object(E.jsx)(l.Select,T({},n,{className:c.input,onChange:e=>t(I(e)),options:i}))},control:n,name:"receiver"}),V||(V=Object(E.jsx)("span",{children:"or"})),Object(E.jsx)(l.Link,{href:Object(N.e)("/alerting/notifications/receivers/new",e),children:"Create a contact point"})]})}),Object(E.jsx)(l.Field,{label:"Group by",description:"Group alerts when you receive a notification based on labels.",children:Object(E.jsx)(l.InputControl,{render:e=>{let{field:{onChange:t}}=e,n=B(e.field,["onChange","ref"]);return Object(E.jsx)(l.MultiSelect,T({},n,{allowCustomValue:!0,className:c.input,onCreateOption:e=>{b(t=>[...t,y(e)]),o("groupBy",[...n.value,e])},onChange:e=>t(w(e)),options:j}))},control:n,name:"groupBy"})}),Object(E.jsxs)(l.Collapse,{collapsible:!0,isOpen:u,label:"Timing options",onToggle:p,children:[Object(E.jsx)(l.Field,{label:"Group wait",description:"The waiting time until the initial notification is sent for a new group created by an incoming alert.",invalid:!!a.groupWaitValue,error:null===(g=a.groupWaitValue)||void 0===g?void 0:g.message,children:Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:Object(r.cx)(c.container,c.timingContainer),children:[Object(E.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:t}})=>Object(E.jsx)(l.Input,T({},e,{className:c.smallInput,invalid:t})),control:n,name:"groupWaitValue",rules:{validate:$}}),Object(E.jsx)(l.InputControl,{render:e=>{let{field:{onChange:t}}=e,n=B(e.field,["onChange","ref"]);return Object(E.jsx)(l.Select,T({},n,{className:c.input,onChange:e=>t(I(e)),options:d.b}))},control:n,name:"groupWaitValueType"})]})})}),Object(E.jsx)(l.Field,{label:"Group interval",description:"The waiting time to send a batch of new alerts for that group after the first notification was sent.",invalid:!!a.groupIntervalValue,error:null===(m=a.groupIntervalValue)||void 0===m?void 0:m.message,children:Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:Object(r.cx)(c.container,c.timingContainer),children:[Object(E.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:t}})=>Object(E.jsx)(l.Input,T({},e,{className:c.smallInput,invalid:t})),control:n,name:"groupIntervalValue",rules:{validate:$}}),Object(E.jsx)(l.InputControl,{render:e=>{let{field:{onChange:t}}=e,n=B(e.field,["onChange","ref"]);return Object(E.jsx)(l.Select,T({},n,{className:c.input,onChange:e=>t(I(e)),options:d.b}))},control:n,name:"groupIntervalValueType"})]})})}),Object(E.jsx)(l.Field,{label:"Repeat interval",description:"The waiting time to resend an alert after they have successfully been sent.",invalid:!!a.repeatIntervalValue,error:null===(v=a.repeatIntervalValue)||void 0===v?void 0:v.message,children:Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:Object(r.cx)(c.container,c.timingContainer),children:[Object(E.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:t}})=>Object(E.jsx)(l.Input,T({},e,{className:c.smallInput,invalid:t})),control:n,name:"repeatIntervalValue",rules:{validate:$}}),Object(E.jsx)(l.InputControl,{render:e=>{let{field:{onChange:t}}=e,n=B(e.field,["onChange","ref"]);return Object(E.jsx)(l.Select,T({},n,{className:c.input,menuPlacement:"top",onChange:e=>t(I(e)),options:d.b}))},control:n,name:"repeatIntervalValueType"})]})})})]}),Object(E.jsxs)("div",{className:c.container,children:[k||(k=Object(E.jsx)(l.Button,{type:"submit",children:"Save"})),s||(s=Object(E.jsx)(l.Button,{onClick:t,type:"reset",variant:"secondary",fill:"outline",children:"Cancel"}))]})]})}})},M=e=>({container:r.css`
      display: grid;
      font-style: ${e.typography.fontSize};
      grid-template-columns: ${e.spacing(15.5)} auto;

      ${e.breakpoints.down("md")} {
        grid-template-columns: 100%;
      }
    `,titleCell:r.css`
      color: ${e.colors.text.primary};
    `,valueCell:r.css`
      color: ${e.colors.text.secondary};
      margin-bottom: ${e.spacing(1)};
    `}),R=({routes:e})=>{const t=Object(l.useStyles2)(M),n=e.receiver||"-",a=e.groupBy.join(", ")||"-",r=e.groupWaitValue?`${e.groupWaitValue}${e.groupWaitValueType}`:"-",i=e.groupIntervalValue?`${e.groupIntervalValue}${e.groupIntervalValueType}`:"-",o=e.repeatIntervalValue?`${e.repeatIntervalValue}${e.repeatIntervalValueType}`:"-";return Object(E.jsxs)("div",{className:t.container,children:[Object(E.jsx)("div",{className:t.titleCell,children:"Contact point"}),Object(E.jsx)("div",{className:t.valueCell,"data-testid":"am-routes-root-receiver",children:n}),Object(E.jsx)("div",{className:t.titleCell,children:"Group by"}),Object(E.jsx)("div",{className:t.valueCell,"data-testid":"am-routes-root-group-by",children:a}),Object(E.jsx)("div",{className:t.titleCell,children:"Timings"}),Object(E.jsxs)("div",{className:t.valueCell,"data-testid":"am-routes-root-timings",children:["Group wait: ",r," | Group interval: ",i," | Repeat interval: ",o]})]})};var _,G;const W=({isEditMode:e,onSave:t,onEnterEditMode:n,onExitEditMode:a,receivers:r,routes:i,alertManagerSourceName:o})=>{const s=Object(l.useStyles2)(z);return Object(E.jsxs)("div",{className:s.container,children:[Object(E.jsxs)("div",{className:s.titleContainer,children:[Object(E.jsxs)("h5",{className:s.title,children:["Root policy - ",_||(_=Object(E.jsx)("i",{children:"default for all alerts"}))]}),!e&&Object(E.jsx)(l.Button,{icon:"pen",onClick:n,size:"sm",type:"button",variant:"secondary",children:"Edit"})]}),G||(G=Object(E.jsx)("p",{children:"All alerts will go to the default contact point, unless you set additional matchers in the specific routing area."})),e?Object(E.jsx)(F,{alertManagerSourceName:o,onCancel:a,onSave:t,receivers:r,routes:i}):Object(E.jsx)(R,{routes:i})]})},z=e=>({container:r.css`
      background-color: ${e.colors.background.secondary};
      color: ${e.colors.text.secondary};
      padding: ${e.spacing(2)};
    `,titleContainer:r.css`
      color: ${e.colors.text.primary};
      display: flex;
      flex-flow: row nowrap;
    `,title:r.css`
      flex: 100%;
    `}),A=({buttonIcon:e,buttonLabel:t,buttonSize:n="lg",buttonVariant:a="primary",onButtonClick:r,text:i})=>{const o=Object(l.useStyles)(L);return Object(E.jsxs)("div",{className:o.container,children:[Object(E.jsx)("p",{className:o.text,children:i}),Object(E.jsx)(l.Button,{className:o.button,icon:e,onClick:r,size:n,type:"button",variant:a,children:t})]})},L=e=>({container:r.css`
      background-color: ${e.colors.bg2};
      color: ${e.colors.textSemiWeak};
      padding: ${e.spacing.xl};
      text-align: center;
    `,text:r.css`
      margin-bottom: ${e.spacing.md};
    `,button:r.css`
      margin: ${e.spacing.md} 0 ${e.spacing.sm};
    `});function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const P=(e,t)=>e.map(e=>e.id!==t?e:q({},e,{isExpanded:!1})),D=(e,t)=>e.map(e=>e.id!==t?e:q({},e,{isExpanded:!0}));var U=n("lSEo");const K=({cols:e,items:t,isExpandable:n=!1,onCollapse:a,onExpand:i,renderExpandedContent:o,testIdGenerator:s})=>{const c=Object(l.useStyles2)(J(e,n)),u=Object(l.useTheme2)(),d=Object(U.a)(`(${u.breakpoints.down("sm")})`);return Object(E.jsxs)("div",{className:c.container,children:[Object(E.jsxs)("div",{className:c.row,children:[n&&Object(E.jsx)("div",{className:c.cell}),e.map(e=>Object(E.jsx)("div",{className:c.cell,children:e.label},e.id))]}),t.map((t,u)=>Object(E.jsxs)("div",{className:c.row,"data-testid":null==s?void 0:s(t),children:[n&&Object(E.jsx)("div",{className:Object(r.cx)(c.cell,c.expandCell),children:Object(E.jsx)(l.IconButton,{size:d?"xl":"md",className:c.expandButton,name:t.isExpanded?"angle-down":"angle-right",onClick:()=>t.isExpanded?null==a?void 0:a(t):null==i?void 0:i(t),type:"button"})}),e.map(e=>{var n;return Object(E.jsx)("div",{className:Object(r.cx)(c.cell,c.bodyCell),"data-column":e.label,children:null===(n=e.renderCell)||void 0===n?void 0:n.call(e,t,u)},`${t.id}-${e.id}`)}),t.isExpanded&&Object(E.jsx)("div",{className:c.expandedContentRow,children:t.renderExpandedContent?t.renderExpandedContent():null==o?void 0:o(t,u)})]},t.id))]})},J=(e,t)=>{const n=e.map(e=>e.size?"number"==typeof e.size?e.size+"fr":e.size:"auto");return t&&n.unshift("calc(1em + 16px)"),e=>({container:r.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:r.css`
      display: grid;
      grid-template-columns: ${n.join(" ")};
      grid-template-rows: 1fr auto;

      &:nth-child(2n + 1) {
        background-color: ${e.colors.background.secondary};
      }

      &:nth-child(2n) {
        background-color: ${e.colors.background.primary};
      }

      ${e.breakpoints.down("sm")} {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'left right';
        padding: 0 ${e.spacing(.5)};

        &:first-child {
          display: none;
        }
      }
    `,cell:r.css`
      align-items: center;
      display: grid;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:r.css`
      ${e.breakpoints.down("sm")} {
        grid-column-end: right;
        grid-column-start: right;

        &::before {
          content: attr(data-column);
        }
      }
    `,expandCell:r.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:r.css`
      grid-column-end: ${n.length+1};
      grid-column-start: 2;
      grid-row: 2;
      padding: 0 ${e.spacing(3)} 0 ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        border-top: 1px solid ${e.colors.border.strong};
        grid-row: auto;
        padding: ${e.spacing(1)} 0 0 0;
      }
    `,expandButton:r.css`
      margin-right: 0;
    `})};var Y,H;function X(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const Z=({onCancel:e,onSave:t,receivers:n,routes:i})=>{var o;const s=Object(l.useStyles2)(ee),c=Object(l.useStyles2)(S),[u,p]=Object(a.useState)(i.groupBy.length>0),[j,b]=Object(a.useState)(!!i.groupWaitValue||!!i.groupIntervalValue||!!i.repeatIntervalValue),[g,m]=Object(a.useState)(C(i.groupBy));return Object(E.jsx)(l.Form,{defaultValues:i,onSubmit:t,children:({control:t,register:a,errors:i,setValue:v})=>{var f,O,x;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("input",Q({type:"hidden"},a("id"))),Object(E.jsx)(l.FieldArray,{name:"matchers",control:t,children:({fields:e,append:t,remove:n})=>Object(E.jsxs)(E.Fragment,{children:[Y||(Y=Object(E.jsx)("div",{children:"Matching labels"})),Object(E.jsx)("div",{className:s.matchersContainer,children:e.map((e,t)=>{var r,o,c,u,d,p,j,b,g,m;const v=`matchers[${t}]`;return Object(E.jsxs)(l.HorizontalGroup,{align:"flex-start",children:[Object(E.jsx)(l.Field,{label:"Label",invalid:!(null===(r=i.matchers)||void 0===r||null===(o=r[t])||void 0===o||!o.name),error:null===(c=i.matchers)||void 0===c||null===(u=c[t])||void 0===u||null===(d=u.name)||void 0===d?void 0:d.message,children:Object(E.jsx)(l.Input,Q({},a(v+".name",{required:"Field is required"}),{defaultValue:e.name,placeholder:"label"}))}),Object(E.jsx)(l.Field,{label:"Value",invalid:!(null===(p=i.matchers)||void 0===p||null===(j=p[t])||void 0===j||!j.value),error:null===(b=i.matchers)||void 0===b||null===(g=b[t])||void 0===g||null===(m=g.value)||void 0===m?void 0:m.message,children:Object(E.jsx)(l.Input,Q({},a(v+".value",{required:"Field is required"}),{defaultValue:e.value,placeholder:"value"}))}),Object(E.jsx)(l.Field,{className:s.matcherRegexField,label:"Regex",children:Object(E.jsx)(l.Checkbox,Q({},a(v+".isRegex"),{defaultChecked:e.isRegex}))}),Object(E.jsx)(l.Field,{className:s.matcherRegexField,label:"Equal",children:Object(E.jsx)(l.Checkbox,Q({},a(v+".isEqual"),{defaultChecked:e.isEqual}))}),Object(E.jsx)(l.IconButton,{className:s.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>n(t),children:"Remove"})]},e.id)})}),Object(E.jsx)(l.Button,{className:s.addMatcherBtn,icon:"plus",onClick:()=>t(h),variant:"secondary",type:"button",children:"Add matcher"})]})}),Object(E.jsx)(l.Field,{label:"Contact point",children:Object(E.jsx)(l.InputControl,{render:e=>{let{field:{onChange:t}}=e,a=X(e.field,["onChange","ref"]);return Object(E.jsx)(l.Select,Q({},a,{className:c.input,onChange:e=>t(I(e)),options:n}))},control:t,name:"receiver"})}),Object(E.jsx)(l.Field,{label:"Continue matching subsequent sibling nodes",children:Object(E.jsx)(l.Switch,Q({},a("continue")))}),Object(E.jsx)(l.Field,{label:"Override grouping",children:Object(E.jsx)(l.Switch,{value:u,onChange:()=>p(e=>!e)})}),u&&Object(E.jsx)(l.Field,{label:"Group by",description:"Group alerts when you receive a notification based on labels.",children:Object(E.jsx)(l.InputControl,{render:e=>{let{field:{onChange:t}}=e,n=X(e.field,["onChange","ref"]);return Object(E.jsx)(l.MultiSelect,Q({},n,{allowCustomValue:!0,className:c.input,onCreateOption:e=>{m(t=>[...t,y(e)]),v("groupBy",[...n.value,e])},onChange:e=>t(w(e)),options:g}))},control:t,name:"groupBy"})}),Object(E.jsx)(l.Field,{label:"Override general timings",children:Object(E.jsx)(l.Switch,{value:j,onChange:()=>b(e=>!e)})}),j&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(l.Field,{label:"Group wait",description:"The waiting time until the initial notification is sent for a new group created by an incoming alert.",invalid:!!i.groupWaitValue,error:null===(f=i.groupWaitValue)||void 0===f?void 0:f.message,children:Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:Object(r.cx)(c.container,c.timingContainer),children:[Object(E.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:t}})=>Object(E.jsx)(l.Input,Q({},e,{className:c.smallInput,invalid:t})),control:t,name:"groupWaitValue",rules:{validate:$}}),Object(E.jsx)(l.InputControl,{render:e=>{let{field:{onChange:t}}=e,n=X(e.field,["onChange","ref"]);return Object(E.jsx)(l.Select,Q({},n,{className:c.input,onChange:e=>t(I(e)),options:d.b}))},control:t,name:"groupWaitValueType"})]})})}),Object(E.jsx)(l.Field,{label:"Group interval",description:"The waiting time to send a batch of new alerts for that group after the first notification was sent.",invalid:!!i.groupIntervalValue,error:null===(O=i.groupIntervalValue)||void 0===O?void 0:O.message,children:Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:Object(r.cx)(c.container,c.timingContainer),children:[Object(E.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:t}})=>Object(E.jsx)(l.Input,Q({},e,{className:c.smallInput,invalid:t})),control:t,name:"groupIntervalValue",rules:{validate:$}}),Object(E.jsx)(l.InputControl,{render:e=>{let{field:{onChange:t}}=e,n=X(e.field,["onChange","ref"]);return Object(E.jsx)(l.Select,Q({},n,{className:c.input,onChange:e=>t(I(e)),options:d.b}))},control:t,name:"groupIntervalValueType"})]})})}),Object(E.jsx)(l.Field,{label:"Repeat interval",description:"The waiting time to resend an alert after they have successfully been sent.",invalid:!!i.repeatIntervalValue,error:null===(x=i.repeatIntervalValue)||void 0===x?void 0:x.message,children:Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:Object(r.cx)(c.container,c.timingContainer),children:[Object(E.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:t}})=>Object(E.jsx)(l.Input,Q({},e,{className:c.smallInput,invalid:t})),control:t,name:"repeatIntervalValue",rules:{validate:$}}),Object(E.jsx)(l.InputControl,{render:e=>{let{field:{onChange:t}}=e,n=X(e.field,["onChange","ref"]);return Object(E.jsx)(l.Select,Q({},n,{className:c.input,menuPlacement:"top",onChange:e=>t(I(e)),options:d.b}))},control:t,name:"repeatIntervalValueType"})]})})})]}),Object(E.jsxs)("div",{className:s.buttonGroup,children:[H||(H=Object(E.jsx)(l.Button,{type:"submit",children:"Save policy"})),o||(o=Object(E.jsx)(l.Button,{onClick:e,fill:"outline",type:"button",variant:"secondary",children:"Cancel"}))]})]})}})},ee=e=>{const t=e.spacing(3.5);return{addMatcherBtn:r.css`
      margin-bottom: ${t};
    `,matchersContainer:r.css`
      background-color: ${e.colors.background.secondary};
      margin: ${e.spacing(1,0)};
      padding: ${e.spacing(1,4.6,1,1.5)};
      width: fit-content;
    `,matcherRegexField:r.css`
      margin-left: ${e.spacing(6)};
    `,nestedPolicies:r.css`
      margin-top: ${t};
    `,removeButton:r.css`
      margin-left: ${e.spacing(1)};
      margin-top: ${e.spacing(2.5)};
    `,buttonGroup:r.css`
      margin: ${e.spacing(6)} 0 ${t};

      & > * + * {
        margin-left: ${e.spacing(1.5)};
      }
    `}};var te;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const ae=({onChange:e,receivers:t,routes:n})=>{const r=Object(l.useStyles2)(re),i=Object(l.useStyles2)(M),o=n.groupWaitValue?`${n.groupWaitValue}${n.groupWaitValueType}`:"-",s=n.groupIntervalValue?`${n.groupIntervalValue}${n.groupIntervalValueType}`:"-",c=n.repeatIntervalValue?`${n.repeatIntervalValue}${n.repeatIntervalValueType}`:"-",[u,d]=Object(a.useState)(n.routes),[p,j]=Object(a.useState)(!1);return Object(E.jsxs)("div",{className:i.container,children:[Object(E.jsx)("div",{className:i.titleCell,children:"Group wait"}),Object(E.jsx)("div",{className:i.valueCell,children:o}),Object(E.jsx)("div",{className:i.titleCell,children:"Group interval"}),Object(E.jsx)("div",{className:i.valueCell,children:s}),Object(E.jsx)("div",{className:i.titleCell,children:"Repeat interval"}),Object(E.jsx)("div",{className:i.valueCell,children:c}),Object(E.jsx)("div",{className:i.titleCell,children:"Nested policies"}),Object(E.jsxs)("div",{className:i.valueCell,children:[u.length?Object(E.jsx)(oe,{isAddMode:p,onCancelAdd:()=>{j(!1),d(e=>{const t=[...e];return t.pop(),t})},onChange:t=>{e(ne({},n,{routes:t})),p&&j(!1)},receivers:t,routes:u}):te||(te=Object(E.jsx)("p",{children:"No nested policies configured."})),!p&&Object(E.jsx)(l.Button,{className:r.addNestedRoutingBtn,icon:"plus",onClick:()=>{d(e=>[...e,f]),j(!0)},variant:"secondary",type:"button",children:"Add nested policy"})]})]})},re=e=>({addNestedRoutingBtn:r.css`
      margin-top: ${e.spacing(2)};
    `});var le=n("Jv5Q");function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const oe=({isAddMode:e,onCancelAdd:t,onChange:n,receivers:r,routes:i})=>{const[o,s]=Object(a.useState)([]),c=Object(a.useCallback)((a,l)=>()=>Object(E.jsx)(Z,{onCancel:()=>{s(e=>{let t=P(e,a.id);return t=((e,t)=>e.map(e=>e.id!==t?e:q({},e,{renderExpandedContent:void 0})))(t,a.id),t}),e&&t()},onSave:e=>{const t=[...i];t[l]=ie({},t[l],e),s(e=>P(e,a.id)),n(t)},receivers:r,routes:a.data}),[e,t,n,r,i]),u=[{id:"matchingCriteria",label:"Matching labels",renderCell:e=>Object(E.jsx)(le.a,{matchers:e.data.matchers}),size:10},{id:"groupBy",label:"Group by",renderCell:e=>e.data.groupBy.join(", ")||"-",size:5},{id:"receiverChannel",label:"Contact point",renderCell:e=>e.data.receiver||"-",size:5},{id:"actions",label:"Actions",renderCell:(e,t)=>{if(e.renderExpandedContent)return null;return Object(E.jsxs)(l.HorizontalGroup,{children:[Object(E.jsx)(l.Button,{icon:"pen",onClick:()=>s(n=>{let a=D(n,e.id);return a=((e,t,n)=>e.map(e=>e.id!==t?e:q({},e,{renderExpandedContent:n})))(a,e.id,c(e,t)),a}),size:"sm",type:"button",variant:"secondary",children:"Edit"}),Object(E.jsx)(l.IconButton,{name:"trash-alt",onClick:()=>{const e=[...i];e.splice(t,1),n(e)},type:"button"})]})},size:"100px"}];return Object(a.useEffect)(()=>{const t=((e,t)=>e.map((e,n)=>{var a;return{id:null!==(a=null==t?void 0:t(e))&&void 0!==a?a:n,data:e}}))(i).map((t,n,a)=>e&&n===a.length-1?ie({},t,{isExpanded:!0,renderExpandedContent:c(t,n)}):ie({},t,{isExpanded:!1,renderExpandedContent:void 0}));s(t)},[i,c,e]),Object(E.jsx)(K,{cols:u,isExpandable:!0,items:o,onCollapse:e=>s(t=>P(t,e.id)),onExpand:e=>s(t=>D(t,e.id)),testIdGenerator:()=>"am-routes-row",renderExpandedContent:(e,t)=>Object(E.jsx)(ae,{onChange:a=>{const r=[...i];r[t]=ie({},e.data,a),n(r)},receivers:r,routes:e.data})})};var se,ce;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const de=({onChange:e,onRootRouteEdit:t,receivers:n,routes:r})=>{const[i,o]=Object(a.useState)(r.routes),[s,c]=Object(a.useState)(!1),u=Object(l.useStyles2)(pe),d=()=>{c(!0),o(e=>[...e,f])};return Object(E.jsxs)("div",{className:u.container,children:[se||(se=Object(E.jsx)("h5",{children:"Specific routing"})),ce||(ce=Object(E.jsx)("p",{children:"Send specific alerts to chosen contact points, based on matching criteria"})),r.receiver?i.length>0?Object(E.jsxs)(E.Fragment,{children:[!s&&Object(E.jsx)(l.Button,{className:u.addMatcherBtn,icon:"plus",onClick:d,type:"button",children:"New policy"}),Object(E.jsx)(oe,{isAddMode:s,onCancelAdd:()=>{c(!1),o(e=>{const t=[...e];return t.pop(),t})},onChange:t=>{e(ue({},r,{routes:t})),s&&c(!1)},receivers:n,routes:i})]}):Object(E.jsx)(A,{buttonIcon:"plus",buttonLabel:"New specific policy",onButtonClick:d,text:"You haven't created any specific policies yet."}):Object(E.jsx)(A,{buttonIcon:"rocket",buttonLabel:"Set a default contact point",onButtonClick:t,text:"You haven't set a default contact point for the root route yet."})]})},pe=e=>({container:r.css`
      display: flex;
      flex-flow: column nowrap;
    `,addMatcherBtn:r.css`
      align-self: flex-end;
      margin-bottom: ${e.spacing(3.5)};
    `});var je,be,ge=n("dEXO"),me=n("w+lj"),ve=n("4Yfp"),he=n("fXZ9");function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.default=Object(l.withErrorBoundary)(()=>{var e;const t=Object(i.useDispatch)(),n=Object(l.useStyles2)(Oe),[r,d]=Object(a.useState)(!1),[p,j]=Object(ge.a)(),b=Object(me.a)(e=>e.amConfigs),g=Object(a.useCallback)(()=>{p&&t(Object(ve.f)(p))},[p,t]);Object(a.useEffect)(()=>{g()},[g]);const{result:m,loading:v,error:h}=p&&b[p]||he.c,f=null==m?void 0:m.alertmanager_config,[y,I]=Object(a.useMemo)(()=>O(null==f?void 0:f.route),[null==f?void 0:f.route]),w=C((null!==(e=null==f?void 0:f.receivers)&&void 0!==e?e:[]).map(e=>e.name)),$=()=>{d(!0)},N=()=>{d(!1)};Object(s.a)(e=>e.unifiedAlerting.saveAMConfig);const{loading:S,error:V,dispatched:k}=Object(me.a)(e=>e.saveAMConfig),T=e=>{const n=x(fe({},y,e),I);r&&N(),t(Object(ve.s)({newConfig:fe({},m,{alertmanager_config:fe({},m.alertmanager_config,{route:n})}),oldConfig:m,alertManagerSourceName:p,successMessage:"Saved"}))};return Object(a.useEffect)(()=>{!k||S||V||g()},[g,k,S,V]),p?Object(E.jsxs)(c.a,{pageId:"am-routes",children:[Object(E.jsx)(u.a,{current:p,onChange:j}),h&&!v&&Object(E.jsx)(l.Alert,{severity:"error",title:"Error loading alert manager config",children:h.message||"Unknown error."}),v&&(be||(be=Object(E.jsx)(l.LoadingPlaceholder,{text:"Loading alert manager config..."}))),m&&!v&&!h&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(W,{alertManagerSourceName:p,isEditMode:r,onSave:T,onEnterEditMode:$,onExitEditMode:N,receivers:w,routes:y}),Object(E.jsx)("div",{className:n.break}),Object(E.jsx)(de,{onChange:T,onRootRouteEdit:$,receivers:w,routes:y})]})]}):je||(je=Object(E.jsx)(o.c,{to:"/alerting/routes"}))},{style:"page"});const Oe=e=>({break:r.css`
    width: 100%;
    height: 0;
    margin-bottom: ${e.spacing(2)};
    border-bottom: solid 1px ${e.colors.border.medium};
  `})},Jv5Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n("kDLi"),l=n("vF1F"),i=n("A5n/"),o=n("Sp9v"),s=n("nKUr");const c=({matchers:e,onRemoveLabel:t})=>{const n=Object(r.useStyles)(u),l=Object(a.useCallback)(e=>{t&&t(e)},[t]);return Object(s.jsx)("div",{className:n.wrapper,children:e.map((e,n)=>{const{name:a,value:r}=e;return Object(s.jsx)(i.a,{labelKey:a,value:r,operator:Object(o.c)(e),onRemoveLabel:t?()=>l(n):void 0},`${a}-${r}-${n}`)})})},u=e=>({wrapper:l.css`
    & > * {
      margin-top: ${e.spacing.xs};
      margin-right: ${e.spacing.xs};
    }
    padding-bottom: ${e.spacing.xs};
  `})},SGmB:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n("/MKj"),l=n("zVNn");function i(e){const t=Object(r.useDispatch)(),n=Object(a.useRef)(e);n.current=e,Object(a.useEffect)(()=>()=>{t(Object(l.a)({stateSelector:n.current}))},[t])}},URgk:function(e,t,n){(function(e){var a=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function l(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new l(r.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new l(r.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},l.prototype.unref=l.prototype.ref=function(){},l.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var a,r,l,i,o,s=1,c={},u=!1,d=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?a=function(e){t.nextTick((function(){b(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((l=new MessageChannel).port1.onmessage=function(e){b(e.data)},a=function(e){l.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,a=function(e){var t=d.createElement("script");t.onreadystatechange=function(){b(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):a=function(e){setTimeout(b,0,e)}:(i="setImmediate$"+Math.random()+"$",o=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&b(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",o,!1):e.attachEvent("onmessage",o),a=function(t){e.postMessage(i+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return c[s]=r,a(s),s++},p.clearImmediate=j}function j(e){delete c[e]}function b(e){if(u)setTimeout(b,0,e);else{var t=c[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{j(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},dEXO:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("9f6O"),r=n("SMGL"),l=n("q1tI"),i=n("d6cIB"),o=n("Jzaf");function s(e){return e===o.b||!!Object(o.c)().find(t=>t.name===e)}function c(){const[e,t]=Object(a.a)(),n=Object(l.useCallback)(e=>{s(e)&&(e===o.b?(r.a.delete(i.a),t({[i.b]:null})):(r.a.set(i.a,e),t({[i.b]:e})))},[t]),c=e[i.b];if(c&&"string"==typeof c)return s(c)?[c,n]:[void 0,n];const u=r.a.get(i.a);return u&&"string"==typeof u&&s(u)?(n(u),[u,n]):[o.b,n]}},lcDh:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("Jzaf"),r=n("q1tI"),l=n("kDLi"),i=n("pz/R"),o=n("vF1F"),s=n("nKUr");const c=({onChange:e,current:t,disabled:n=!1})=>{const o=Object(l.useStyles2)(u),c=Object(r.useMemo)(()=>[{label:"Grafana",value:a.b,imgUrl:"public/img/grafana_icon.svg",meta:{}},...Object(i.a)().filter(e=>e.type===a.a.Alertmanager).map(e=>({label:e.name.substr(0,37),value:e.name,imgUrl:e.meta.info.logos.small,meta:e.meta}))],[]);return 1===c.length?null:Object(s.jsx)(l.Field,{className:o.field,label:n?"Alert manager":"Choose alert manager",disabled:n,"data-testid":"alertmanager-picker",children:Object(s.jsx)(l.Select,{width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:t=>t.value&&e(t.value),options:c,maxMenuHeight:500,noOptionsMessage:"No datasources found",value:t,getOptionLabel:e=>e.label})})},u=e=>({field:o.css`
    margin-bottom: ${e.spacing(4)};
  `})},"sbt+":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("q1tI");var a=n("ZGyg"),r=n("lzJ5"),l=n("/MKj"),i=n("nKUr");const o=({children:e,pageId:t,isLoading:n})=>{const o=Object(r.a)(Object(l.useSelector)(e=>e.navIndex),t);return Object(i.jsx)(a.a,{navModel:o,children:Object(i.jsx)(a.a.Contents,{isLoading:n,children:e})})}}}]);
//# sourceMappingURL=AlertAmRoutes.17511e2bf08b06f121f8.js.map