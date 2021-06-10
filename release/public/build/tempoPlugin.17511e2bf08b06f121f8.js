(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{Dljr:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r,n=a("vF1F"),s=a("Obii"),i=a("t8hP"),o=a("kDLi"),c=(a("q1tI"),a("nKUr"));function d({options:e,onOptionsChange:t}){var a,d;const u=Object(o.useStyles)(l);return Object(c.jsxs)("div",{className:Object(n.css)({width:"100%"}),children:[r||(r=Object(c.jsx)("h3",{className:"page-heading",children:"Trace to logs"})),Object(c.jsx)("div",{className:u.infoText,children:"Trace to logs let's you navigate from a trace span to the selected data source's log."}),Object(c.jsx)(o.InlineFieldRow,{children:Object(c.jsx)(o.InlineField,{tooltip:"The data source the trace is going to navigate to",label:"Data source",labelWidth:26,children:Object(c.jsx)(i.DataSourcePicker,{pluginId:"loki",current:null===(a=e.jsonData.tracesToLogs)||void 0===a?void 0:a.datasourceUid,noDefault:!0,width:40,onChange:a=>{var r;return Object(s.updateDatasourcePluginJsonDataOption)({onOptionsChange:t,options:e},"tracesToLogs",{datasourceUid:a.uid,tags:null===(r=e.jsonData.tracesToLogs)||void 0===r?void 0:r.tags})}})})}),Object(c.jsx)(o.InlineFieldRow,{children:Object(c.jsx)(o.InlineField,{tooltip:"Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",label:"Tags",labelWidth:26,children:Object(c.jsx)(o.TagsInput,{tags:null===(d=e.jsonData.tracesToLogs)||void 0===d?void 0:d.tags,width:40,onChange:a=>{var r;return Object(s.updateDatasourcePluginJsonDataOption)({onOptionsChange:t,options:e},"tracesToLogs",{datasourceUid:null===(r=e.jsonData.tracesToLogs)||void 0===r?void 0:r.datasourceUid,tags:a})}})})})]})}const l=e=>({infoText:n.css`
    padding-bottom: ${e.spacing.md};
    color: ${e.colors.textSemiWeak};
  `})},SjO4:function(e,t,a){"use strict";a.r(t);var r,n=a("Obii"),s=a("q1tI"),i=a.n(s),o=a("nKUr");var c=a("kDLi"),d=a("Dljr");var l=a("t8hP"),u=a("WnbS"),p=a("0/uQ"),h=a("XlPw"),m=a("p0ib"),g=a("psW0"),f=a("67Y/"),y=a("knph");function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function b(e){const{nodes:t,edges:a}=function(e){const t=[],a=[],r=new n.DataFrameView(e),s=function(e){let t=0,a=1/0;for(let r=0;r<e.length;r++){const n=e.get(r);n.startTime<a&&(a=n.startTime),n.startTime+n.duration>t&&(t=n.startTime+n.duration)}return t-a}(r),i=Object(y.d)(t=>{if(t>=e.length)return;const a=r.get(t);return{span:j({},a),id:a.spanID,parentIds:a.parentSpanID?[a.parentSpanID]:[]}});for(let e=0;e<r.length;e++){var o;const c=r.get(e),d=i[c.spanID].children.map(e=>{const t=i[e].span;return[t.startTime,t.startTime+t.duration]}),l=Object(y.a)(d),u=c.duration-l,p=Object(y.b)(c.duration,s,u);t.push({[n.NodeGraphDataFrameFieldNames.id]:c.spanID,[n.NodeGraphDataFrameFieldNames.title]:null!==(o=c.serviceName)&&void 0!==o?o:"",[n.NodeGraphDataFrameFieldNames.subTitle]:c.operationName,[n.NodeGraphDataFrameFieldNames.mainStat]:p.main,[n.NodeGraphDataFrameFieldNames.secondaryStat]:p.secondary,[n.NodeGraphDataFrameFieldNames.color]:u/s}),c.parentSpanID&&i[c.parentSpanID].span&&a.push({[n.NodeGraphDataFrameFieldNames.id]:c.parentSpanID+"--"+c.spanID,[n.NodeGraphDataFrameFieldNames.target]:c.spanID,[n.NodeGraphDataFrameFieldNames.source]:c.parentSpanID})}return{nodes:t,edges:a}}(e),[r,s]=Object(y.c)();for(const e of t)r.add(e);for(const e of a)s.add(e);return[r,s]}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function F(e,t,a,r){return e.data.forEach((s,i)=>{const o=function(e,t,a,r){const s=new n.MutableDataFrame({fields:[{name:"Time",type:n.FieldType.time,config:{custom:{width:150}}},{name:"traceID",type:n.FieldType.string,config:{displayNameFromDS:"Trace ID",custom:{width:300},links:[{title:"Click to open trace ${__value.raw}",url:"",internal:{datasourceUid:t,datasourceName:a,query:{query:"${__value.raw}"}}}]}},{name:"Message",type:n.FieldType.string}],meta:{preferredVisualisationType:"table"}});if(!e||0===r.length)return s;const i=e.fields.find(e=>e.type===n.FieldType.time);for(let t of e.fields){let e=!1;if(t.type===n.FieldType.string){const a=t.values.toArray();for(let t=0;t<a.length;t++){const n=a[t];if(n)for(let a of r){const r=n.match(a);if(r){const a=r[1],o=i?i.values.get(t):null;s.fields[0].values.add(o),s.fields[1].values.add(a),s.fields[2].values.add(n),e=!0}}}}if(e)break}return s}(s,t,a,r);e.data[i]=o}),e}function T(e){const t=e.data[0];return t?(function(e){for(const t of["serviceTags","logs","tags"]){const a=e.fields.find(e=>e.name===t);if(a){const t=e.fields.indexOf(a),r=new n.ArrayVector,s=v({},a,{values:r,type:n.FieldType.other});for(let e=0;e<a.values.length;e++){const t=a.values.get(e);r.set(e,""===t?void 0:JSON.parse(t))}e.fields[t]=s}}}(t),v({},e,{data:[...e.data,...b(t)]})):O}const O={data:[new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:[]}],meta:{preferredVisualisationType:"trace"}})]};function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}class N extends l.DataSourceWithBackend{constructor(e){super(e),this.tracesToLogs=void 0,this.tracesToLogs=e.jsonData.tracesToLogs}query(e){var t;const a=[],r=e.targets.filter(e=>!e.hide),n=r.filter(e=>"search"===e.queryType),s=r.filter(e=>"traceId"===e.queryType||void 0===e.queryType);if(null!==(t=this.tracesToLogs)&&void 0!==t&&t.datasourceUid&&n.length>0){const t=Object(u.a)();a.push(Object(p.a)(t.get(this.tracesToLogs.datasourceUid)).pipe(Object(g.b)(t=>{var a;const r=D({},e,{targets:n.map(e=>e.linkedQuery)}),s=(null===(a=t.instanceSettings.jsonData.derivedFields)||void 0===a?void 0:a.filter(e=>e.datasourceUid===this.uid&&e.matcherRegex).map(e=>e.matcherRegex))||[];return s&&0!==s.length?t.query(r).pipe(Object(f.a)(e=>e.error?e:F(e,this.uid,this.name,s))):Object(h.a)("No Loki datasource configured for search. Set up Derived Fields for traces in a Loki datasource settings and link it to this Tempo datasource.")})))}if(s.length>0){const t=D({},e,{targets:s});a.push(super.query(t).pipe(Object(f.a)(e=>e.error?e:T(e))))}return Object(m.a)(...a)}async testDatasource(){var e;const t=null===(e=(await super.query({targets:[{query:"0"}]}).toPromise()).error)||void 0===e?void 0:e.message;return t&&t.startsWith("failed to get trace")&&t.endsWith("trace not found in Tempo")?{status:"success",message:"Data source is working"}:{status:"error",message:"Data source is not working"+(t?": "+t:"")}}getQueryDisplayText(e){return e.query}}var x,w=a("Csm0"),k=a("csYu");function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}class S extends i.a.PureComponent{constructor(e){super(e),this.state={linkedDatasource:void 0},this.onChangeLinkedQuery=e=>{const{query:t,onChange:a}=this.props;a(I({},t,{linkedQuery:I({},e,{refId:"linked"})}))},this.onRunLinkedQuery=()=>{this.props.onRunQuery()}}async componentDidMount(){const{datasource:e}=this.props,t=(e.tracesToLogs||{}).datasourceUid;if(t){const e=Object(l.getDataSourceSrv)(),a=await e.get(t);this.setState({linkedDatasource:a})}}render(){var e;const{query:t,onChange:a}=this.props,{linkedDatasource:r}=this.state;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(c.InlineFieldRow,{children:Object(o.jsx)(c.InlineField,{label:"Query type",children:Object(o.jsx)(c.RadioButtonGroup,{options:[{value:"search",label:"Search"},{value:"traceId",label:"TraceID"}],value:t.queryType||"traceId",onChange:e=>a(I({},t,{queryType:e})),size:"md"})})}),"search"===t.queryType&&r&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(c.InlineLabel,{children:["Tempo uses ",r.name," to find traces."]}),Object(o.jsx)(k.a,{datasource:r,onChange:this.onChangeLinkedQuery,onRunQuery:this.onRunLinkedQuery,query:null!==(e=this.props.query.linkedQuery)&&void 0!==e?e:{refId:"linked"},history:[]})]}),"search"===t.queryType&&!r&&(x||(x=Object(o.jsx)("div",{className:"text-warning",children:"Please set up a Traces-to-logs datasource in the datasource settings."}))),"search"!==t.queryType&&Object(o.jsx)(c.LegacyForms.FormField,{label:"Trace ID",labelWidth:4,inputEl:Object(o.jsx)("div",{className:"slate-query-field__wrapper",children:Object(o.jsx)("div",{className:"slate-query-field","aria-label":w.selectors.components.QueryField.container,children:Object(o.jsx)("input",{style:{width:"100%"},value:t.query||"",onChange:e=>a(I({},t,{query:e.currentTarget.value,queryType:"traceId",linkedQuery:void 0}))})})})})]})}}a.d(t,"plugin",(function(){return q}));const q=new n.DataSourcePlugin(N).setConfigEditor(({options:e,onOptionsChange:t})=>Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(c.DataSourceHttpSettings,{defaultUrl:"http://tempo",dataSourceConfig:e,showAccessOptions:!1,onChange:t}),Object(o.jsx)(d.a,{options:e,onOptionsChange:t})]})).setQueryEditorHelp((function(){return r||(r=Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{id:"tempo-cheat-sheet",children:"Tempo Cheat Sheet"}),Object(o.jsx)("p",{children:"Tempo is a trace id lookup store. Enter a trace id in the above field and hit “Run Query” to retrieve your trace. Tempo is generally paired with other datasources such as Loki or Prometheus to find traces."}),Object(o.jsxs)("p",{children:["Here are some"," ",Object(o.jsx)("a",{href:"https://grafana.com/docs/tempo/latest/guides/instrumentation/",target:"blank",children:"instrumentation examples"})," ","to get you started with trace discovery through logs and metrics (exemplars)."]})]}))})).setExploreQueryField(S)},knph:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c}));var r=a("Obii");function n(e){e.sort((e,t)=>e[0]-t[0]);return e.reduce((e,t)=>{if(!e.length)return[t];const a=e.slice(-1)[0],[r,n]=a,[s,i]=t;return i<n?e:s>n?[...e,t]:[...e.slice(0,-1),[r,i]]},[]).reduce((e,t)=>e+(t[1]-t[0]),0)}function s(e){const t={};let a;for(let r=0;a=e(r),a;r++){t[a.id]?t[a.id].span=a.span:t[a.id]={span:a.span,children:[]};for(const e of a.parentIds)e&&(t[e]?t[e].children.push(a.id):t[e]={span:void 0,children:[a.id]})}return t}function i(e,t,a){return{main:`${o(e)}ms (${o(e/t*100)}%)`,secondary:`${o(a)}ms (${o(a/e*100)}%)`}}function o(e){return parseFloat(e.toFixed(2))}function c(){return[new r.MutableDataFrame({fields:[{name:r.NodeGraphDataFrameFieldNames.id,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.title,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.subTitle,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.mainStat,type:r.FieldType.string,config:{displayName:"Total time (% of trace)"}},{name:r.NodeGraphDataFrameFieldNames.secondaryStat,type:r.FieldType.string,config:{displayName:"Self time (% of total)"}},{name:r.NodeGraphDataFrameFieldNames.color,type:r.FieldType.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),new r.MutableDataFrame({fields:[{name:r.NodeGraphDataFrameFieldNames.id,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.target,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.source,type:r.FieldType.string}],meta:{preferredVisualisationType:"nodeGraph"}})]}}}]);
//# sourceMappingURL=tempoPlugin.17511e2bf08b06f121f8.js.map