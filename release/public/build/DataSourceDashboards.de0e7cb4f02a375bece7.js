(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"5BCB":function(a,e,t){"use strict";var n=t("Obii"),i=t("t8hP"),r=t("3SGO"),o=t("NXk7"),s=t("WnbS"),c=t("Vw/f"),d=t("okuo"),u=t("ZFWI");function l(a){const e=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"tracing",title:"Distributed tracing",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"iot",title:"Industrial & IoT",plugins:[]},{id:"other",title:"Others",plugins:[]}].filter(a=>a),t={},i={},r=[g({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize and explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),g({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize and explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),g({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize and explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),g({id:"grafana-servicenow-datasource",description:"ServiceNow integration and data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),g({id:"grafana-datadog-datasource",description:"DataDog integration and data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),g({id:"grafana-newrelic-datasource",description:"New Relic integration and data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"}),g({id:"grafana-mongodb-datasource",description:"MongoDB integration and data source",name:"MongoDB",imgUrl:"public/img/plugins/mongodb.svg"}),g({id:"grafana-snowflake-datasource",description:"Snowflake integration and data source",name:"Snowflake",imgUrl:"public/img/plugins/snowflake.svg"}),g({id:"grafana-wavefront-datasource",description:"Wavefront integration and data source",name:"Wavefront",imgUrl:"public/img/plugins/wavefront.svg"}),g({id:"dlopes7-appdynamics-datasource",description:"AppDynamics integration and data source",name:"AppDynamics",imgUrl:"public/img/plugins/appdynamics.svg"}),g({id:"grafana-saphana-datasource",description:"SAP HANA® integration and data source",name:"SAP HANA®",imgUrl:"public/img/plugins/sap_hana.png"})];for(const a of e)t[a.id]=a;const{edition:o,hasValidLicense:s}=u.a.licenseInfo;for(const n of a){const a=r.find(a=>a.id===n.id);var c;if(n.enterprise||a)n.category="enterprise",n.unlicensed="Open Source"!==o&&!s,n.info.links=(null==a||null===(c=a.info)||void 0===c?void 0:c.links)||n.info.links;if(n.info.links)for(const a of n.info.links)a.name="Learn more";(e.find(a=>a.id===n.category)||t.other).plugins.push(n),i[n.id]=n}for(const a of e){if("cloud"===a.id&&a.plugins.push({id:"gcloud",name:"Grafana Cloud",type:n.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus, and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),"enterprise"===a.id)for(const e of r)i[e.id]||a.plugins.push(e);p(a.plugins)}return e.filter(a=>a.plugins.length>0)}function p(a){const e={prometheus:100,graphite:95,loki:90,mysql:80,jaeger:100,postgres:79,gcloud:-1};a.sort((a,t)=>{const n=e[a.id]||0,i=e[t.id]||0;return n>i?-1:n<i?1:a.name>t.name?-1:1})}function g(a){return{id:a.id,name:a.name,type:n.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:a.description,logos:{small:a.imgUrl,large:a.imgUrl},author:{name:"Grafana Labs"},links:[{url:u.a.pluginCatalogURL+a.id,name:"Install now"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var f=t("HUMP"),m=t("FFN/"),h=t("frIo");function b(){return(b=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a}).apply(this,arguments)}t.d(e,"c",(function(){return v})),t.d(e,"g",(function(){return w})),t.d(e,"f",(function(){return y})),t.d(e,"d",(function(){return S})),t.d(e,"a",(function(){return D})),t.d(e,"e",(function(){return O})),t.d(e,"h",(function(){return j})),t.d(e,"b",(function(){return k}));const v=(a,e={loadDataSource:S,getDataSource:h.a,getDataSourceMeta:h.b,importDataSourcePlugin:c.b})=>async(t,n)=>{if(a)try{if(await t(e.loadDataSource(a)),n().dataSourceSettings.plugin)return;const i=e.getDataSource(n().dataSources,a),r=e.getDataSourceMeta(n().dataSources,i.type),o=await e.importDataSourcePlugin(r);t(Object(m.h)(o))}catch(a){console.error("Failed to import plugin module",a),t(Object(m.g)(a))}else t(Object(m.g)(new Error("Invalid ID")))},w=(a,e={getDatasourceSrv:s.a,getBackendSrv:o.c})=>async(t,n)=>{const i=await e.getDatasourceSrv().get(a);i.testDatasource&&(t(Object(m.o)()),e.getBackendSrv().withNoBackendCache(async()=>{try{const a=await i.testDatasource();t(Object(m.p)(a))}catch(a){const{statusText:e,message:n,details:i}=a,r=e?"HTTP error "+e:n;t(Object(m.n)({message:r,details:i}))}}))};function y(){return async a=>{const e=await Object(o.c)().get("/api/datasources");a(Object(m.e)(e))}}function S(a){return async e=>{const t=await async function(a){try{const e=await Object(o.c)().fetch({method:"GET",url:"/api/datasources/uid/"+a,showErrorAlert:!1}).toPromise();if(e.ok)return e.data}catch(a){console.log("Failed to lookup data source by uid",a)}const e=parseInt(a,10);if(!Number.isNaN(e)){const t=await Object(o.c)().fetch({method:"GET",url:"/api/datasources/"+e,showErrorAlert:!1}).toPromise();if(t.ok&&t.data.id.toString()===a)return window.location.href=n.locationUtil.assureBaseUrl("/datasources/edit/"+t.data.uid),{}}throw Error("Could not find data source")}(a),s=await Object(d.a)(t.type),u=await Object(c.b)(s),l=b({},s,{isBackend:u.DataSourceClass.prototype instanceof i.DataSourceWithBackend});e(Object(m.a)(t)),e(Object(m.b)(l)),u.meta=l,e(Object(r.d)(Object(f.a)(t,u)))}}function D(a){return async(e,t)=>{await e(y());const n=t().dataSources.dataSources,r={name:a.name,type:a.id,access:"proxy",isDefault:0===n.length};I(n,r.name)&&(r.name=function(a,e){for(;I(a,e);)P(e)?e=`${x(e)}${t=L(e),isNaN(t)?1:t+1}`:e+="-1";var t;return e}(n,r.name));const s=await Object(o.c)().post("/api/datasources",r);i.locationService.push("/datasources/edit/"+s.datasource.uid)}}function O(){return async a=>{a(Object(m.c)());const e=await Object(o.c)().get("/api/plugins",{enabled:1,type:"datasource"}),t=l(e);a(Object(m.d)({plugins:e,categories:t}))}}function j(a){return async e=>(await Object(o.c)().put("/api/datasources/"+a.id,a),await U(),e(S(a.uid)))}function k(){return async(a,e)=>{const t=e().dataSources.dataSource;await Object(o.c)().delete("/api/datasources/"+t.id),await U(),i.locationService.push("/datasources")}}function I(a,e){return a.filter(a=>a.name.toLowerCase()===e.toLowerCase()).length>0}function U(){return Object(o.c)().get("/api/frontend/settings").then(a=>{u.b.datasources=a.datasources,u.b.defaultDatasource=a.defaultDatasource,Object(s.a)().init(u.b.datasources,a.defaultDatasource)})}function P(a){return a.endsWith("-",a.length-1)}function L(a){return parseInt(a.slice(-1),10)}function x(a){return a.slice(0,a.length-1)}},BLAY:function(a,e,t){"use strict";t.r(e),t.d(e,"DataSourceDashboards",(function(){return m}));var n=t("q1tI"),i=t("/MKj"),r=t("ZGyg"),o=t("vHOe"),s=t("lzJ5"),c=t("5BCB"),d=t("jGYO"),u=t("J4KJ"),l=t("frIo"),p=t("nKUr");const g={importDashboard:u.e,loadDataSource:c.d,loadPluginDashboards:d.b,removeDashboard:u.g},f=Object(i.connect)((function(a,e){const t=e.match.params.uid;return{navModel:Object(s.a)(a.navIndex,"datasource-dashboards-"+t),dashboards:a.plugins.dashboards,dataSource:Object(l.a)(a.dataSources,t),isLoading:a.plugins.isLoadingPluginDashboards,dataSourceId:t}}),g);class m extends n.PureComponent{constructor(...a){super(...a),this.onImport=(a,e)=>{const{dataSource:t,importDashboard:n}=this.props,i={pluginId:a.pluginId,path:a.path,overwrite:e,inputs:[]};t&&i.inputs.push({name:"*",type:"datasource",pluginId:t.type,value:t.name}),n(i,a.title)},this.onRemove=a=>{this.props.removeDashboard(a.importedUri)}}async componentDidMount(){const{loadDataSource:a,dataSourceId:e}=this.props;await a(e),this.props.loadPluginDashboards()}render(){const{dashboards:a,navModel:e,isLoading:t}=this.props;return Object(p.jsx)(r.a,{navModel:e,children:Object(p.jsx)(r.a.Contents,{isLoading:t,children:Object(p.jsx)(o.a,{dashboards:a,onImport:(a,e)=>this.onImport(a,e),onRemove:a=>this.onRemove(a)})})})}}e.default=f(m)},HUMP:function(a,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"b",(function(){return s}));var n=t("Obii"),i=t("ZFWI");function r(a,e){const t=e.meta,n={img:t.info.logos.large,id:"datasource-"+a.uid,subTitle:"Type: "+t.name,url:"",text:a.name,breadcrumbs:[{title:"Data Sources",url:"datasources"}],children:[{active:!1,icon:"sliders-v-alt",id:"datasource-settings-"+a.uid,text:"Settings",url:`datasources/edit/${a.uid}/`}]};if(e.configPages)for(const t of e.configPages)n.children.push({active:!1,text:t.title,icon:t.icon,url:`datasources/edit/${a.uid}/?page=${t.id}`,id:"datasource-page-"+t.id});return t.includes&&void 0!==t.includes.find(a=>"dashboard"===a.type)&&n.children.push({active:!1,icon:"apps",id:"datasource-dashboards-"+a.uid,text:"Dashboards",url:`datasources/edit/${a.uid}/dashboards`}),i.b.licenseInfo.hasLicense&&(n.children.push({active:!1,icon:"lock",id:"datasource-permissions-"+a.id,text:"Permissions",url:`datasources/edit/${a.id}/permissions`}),n.children.push({active:!1,icon:"info-circle",id:"datasource-insights-"+a.id,text:"Insights",url:`datasources/edit/${a.id}/insights`}),n.children.push({active:!1,icon:"database",id:"datasource-cache-"+a.id,text:"Cache",url:`datasources/edit/${a.id}/cache`,hideFromTabs:!t.isBackend||!i.b.caching.enabled})),n}function o(a,e){let t;for(const n of a.children)if(n.id.indexOf(e)>0){n.active=!0,t=n;break}return{main:a,node:t}}function s(a){return o(r({access:"",basicAuth:!1,basicAuthUser:"",basicAuthPassword:"",withCredentials:!1,database:"",id:1,uid:"x",isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,password:"",readOnly:!1,type:"Loading",typeName:"Loading",typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:"",secureJsonFields:{}},{meta:{id:"1",type:n.PluginType.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}}),a)}},frIo:function(a,e,t){"use strict";t.d(e,"d",(function(){return n})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"g",(function(){return s})),t.d(e,"f",(function(){return c})),t.d(e,"e",(function(){return d}));const n=a=>{const e=new RegExp(a.searchQuery,"i");return a.dataSources.filter(a=>e.test(a.name)||e.test(a.database)||e.test(a.type))},i=a=>{const e=new RegExp(a.dataSourceTypeSearchQuery,"i");return a.plugins.filter(a=>e.test(a.name))},r=(a,e)=>a.dataSource.uid===e?a.dataSource:{},o=(a,e)=>a.dataSourceMeta.id===e?a.dataSourceMeta:{},s=a=>a.searchQuery,c=a=>a.layoutMode,d=a=>a.dataSourcesCount}}]);
//# sourceMappingURL=DataSourceDashboards.de0e7cb4f02a375bece7.js.map