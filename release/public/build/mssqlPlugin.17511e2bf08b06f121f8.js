(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{QjE0:function(t,e,a){"use strict";let r;a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return s})),function(t){t.Password="password",t.BasicAuthPassword="basicAuthPassword"}(r||(r={}));const n=(t,e)=>a=>{a.preventDefault(),t.current[e]=void 0,t.current.secureJsonFields[e]=!1,t.current.secureJsonData=t.current.secureJsonData||{},t.current.secureJsonData[e]=""},s=(t,e)=>a=>{t.current.secureJsonData=t.current.secureJsonData||{},t.current.secureJsonData[e]=a.currentTarget.value}},R57O:function(t,e,a){"use strict";a.r(e);var r=a("LvDl"),n=a("F/XL"),s=a("67Y/"),i=a("aGNc"),o=a("9Z1F"),l=a("t8hP"),u=a("Obii");class c{transformMetricFindResponse(t){const e=Object(l.toDataQueryResponse)(t).data;if(!e||!e.length)return[];const a=e[0],r=[],n=a.fields.find(t=>"__text"===t.name),s=a.fields.find(t=>"__value"===t.name);if(n&&s)for(let t=0;t<n.values.length;t++)r.push({text:""+n.values.get(t),value:""+s.values.get(t)});else{const t=a.fields.filter(t=>t.type===u.FieldType.string);t&&r.push(...t.flatMap(t=>t.values.toArray()).map(t=>({text:""+t})))}return Array.from(new Set(r.map(t=>t.text))).map(t=>{var e;return{text:t,value:null===(e=r.find(e=>e.text===t))||void 0===e?void 0:e.value}})}transformToKeyValueList(t,e,a){const r=[];for(let n=0;n<t.length;n++)this.containsKey(r,t[n][e])||r.push({text:t[n][e],value:t[n][a]});return r}transformToSimpleList(t){const e=[];for(let a=0;a<t.length;a++)for(let r=0;r<t[a].length;r++)e.push(t[a][r]);const a=Array.from(new Set(e));return Object(r.map)(a,t=>({text:t}))}findColIndex(t,e){for(let a=0;a<t.length;a++)if(t[a].text===e)return a;return-1}containsKey(t,e){for(let a=0;a<t.length;a++)if(t[a].text===e)return!0;return!1}async transformAnnotationResponse(t,e){const a=Object(l.toDataQueryResponse)({data:e}).data[0],r=a.fields.find(t=>"time"===t.name);if(!r)return Promise.reject({message:"Missing mandatory time column (with time column alias) in annotation query."});const n=a.fields.find(t=>"timeend"===t.name),s=a.fields.find(t=>"text"===t.name),i=a.fields.find(t=>"tags"===t.name),o=[];for(let e=0;e<a.length;e++){const a=n&&n.values.get(e)?Math.floor(n.values.get(e)):void 0;o.push({annotation:t.annotation,time:Math.floor(r.values.get(e)),timeEnd:a,text:s&&s.values.get(e)?s.values.get(e):"",tags:i&&i.values.get(e)?i.values.get(e).trim().split(/\s*,\s*/):[]})}return o}}var d=a("5kRJ"),h=a("NPB1");function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}class p extends l.DataSourceWithBackend{constructor(t,e=Object(d.a)(),a=Object(h.a)()){super(t),this.id=void 0,this.name=void 0,this.responseParser=void 0,this.interval=void 0,this.templateSrv=e,this.timeSrv=a,this.name=t.name,this.id=t.id,this.responseParser=new c;const r=t.jsonData||{};this.interval=r.timeInterval||"1m"}interpolateVariable(t,e){if("string"==typeof t)return e.multi||e.includeAll?"'"+t.replace(/'/g,"''")+"'":t;if("number"==typeof t)return t;return Object(r.map)(t,e=>"number"==typeof t?t:"'"+e.replace(/'/g,"''")+"'").join(",")}interpolateVariablesInQueries(t,e){let a=t;return t&&t.length>0&&(a=t.map(t=>m({},t,{datasource:this.name,rawSql:this.templateSrv.replace(t.rawSql,e,this.interpolateVariable),rawQuery:!0}))),a}applyTemplateVariables(t,e){return{refId:t.refId,datasourceId:this.id,rawSql:this.templateSrv.replace(t.rawSql,e,this.interpolateVariable),format:t.format}}async annotationQuery(t){if(!t.annotation.rawQuery)return Promise.reject({message:"Query missing in annotation definition"});const e={refId:t.annotation.name,datasourceId:this.id,rawSql:this.templateSrv.replace(t.annotation.rawQuery,t.scopedVars,this.interpolateVariable),format:"table"};return Object(l.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:t.range.from.valueOf().toString(),to:t.range.to.valueOf().toString(),queries:[e]},requestId:t.annotation.name}).pipe(Object(s.a)(async e=>await this.responseParser.transformAnnotationResponse(t,e.data))).toPromise()}metricFindQuery(t,e){let a="tempvar";e&&e.variable&&e.variable.name&&(a=e.variable.name);const r=this.timeSrv.timeRange(),n={refId:a,datasourceId:this.id,rawSql:this.templateSrv.replace(t,{},this.interpolateVariable),format:"table"};return Object(l.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:r.from.valueOf().toString(),to:r.to.valueOf().toString(),queries:[n]},requestId:a}).pipe(Object(s.a)(t=>this.responseParser.transformMetricFindResponse(t))).toPromise()}testDatasource(){return Object(l.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:"5m",to:"now",queries:[{refId:"A",intervalMs:1,maxDataPoints:1,datasourceId:this.id,rawSql:"SELECT 1",format:"table"}]}}).pipe(Object(i.a)({status:"success",message:"Database Connection OK"}),Object(o.a)(t=>(console.error(t),t.data&&t.data.message?Object(n.a)({status:"error",message:t.data.message}):Object(n.a)({status:"error",message:t.status})))).toPromise()}targetContainsTemplate(t){const e=t.rawSql.replace("$__","");return this.templateSrv.variableExists(e)}}var f=a("LzXI");class v extends f.QueryCtrl{constructor(t,e){super(t,e),this.formats=void 0,this.lastQueryMeta=void 0,this.lastQueryError=void 0,this.showHelp=!1,this.target.format=this.target.format||"time_series",this.target.alias="",this.formats=[{text:"Time series",value:"time_series"},{text:"Table",value:"table"}],this.target.rawSql||("table"===this.panelCtrl.panel.type?(this.target.format="table",this.target.rawSql="SELECT 1"):this.target.rawSql="SELECT\n  $__timeEpoch(<time_column>),\n  <value column> as value,\n  <series name column> as metric\nFROM\n  <table name>\nWHERE\n  $__timeFilter(time_column)\nORDER BY\n  <time_column> ASC"),this.panelCtrl.events.on(u.PanelEvents.dataReceived,this.onDataReceived.bind(this),t),this.panelCtrl.events.on(u.PanelEvents.dataError,this.onDataError.bind(this),t)}onDataReceived(t){var e;this.lastQueryError=void 0,this.lastQueryMeta=null===(e=t[0])||void 0===e?void 0:e.meta}onDataError(t){if(t.data&&t.data.results){const e=t.data.results[this.target.refId];e&&(this.lastQueryError=e.error)}}}v.$inject=["$scope","$injector"],v.templateUrl="partials/query.editor.html";var g=a("QjE0");class y{constructor(t){this.onPasswordReset=void 0,this.onPasswordChange=void 0,this.showUserCredentials=void 0,this.current=t.ctrl.current,this.current.jsonData.encrypt=this.current.jsonData.encrypt||"false",this.current.jsonData.authenticationType=this.current.jsonData.authenticationType||"SQL Server Authentication",this.onPasswordReset=Object(g.c)(this,g.a.Password),this.onPasswordChange=Object(g.b)(this,g.a.Password),this.showUserCredentials="Windows Authentication"!==this.current.jsonData.authenticationType}onAuthenticationTypeChange(){"Windows Authentication"===this.current.jsonData.authenticationType&&(this.current.user="",this.current.password=""),this.showUserCredentials="Windows Authentication"!==this.current.jsonData.authenticationType}}y.$inject=["$scope"],y.templateUrl="partials/config.html",a.d(e,"plugin",(function(){return w}));class b{constructor(t){this.annotation=t.ctrl.annotation,this.annotation.rawQuery=this.annotation.rawQuery||"SELECT\n    <time_column> as time,\n    <text_column> as text,\n    <tags_column> as tags\n  FROM\n    <table name>\n  WHERE\n    $__timeFilter(time_column)\n  ORDER BY\n    <time_column> ASC"}}b.$inject=["$scope"],b.templateUrl="partials/annotations.editor.html";const w=new u.DataSourcePlugin(p).setQueryCtrl(v).setConfigCtrl(y).setAnnotationQueryCtrl(b)}}]);
//# sourceMappingURL=mssqlPlugin.17511e2bf08b06f121f8.js.map