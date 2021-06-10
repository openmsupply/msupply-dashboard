(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"2Wqq":function(e,t,a){"use strict";a.r(t);var r=a("LvDl"),n=a.n(r),i=a("F/XL"),s=a("67Y/"),u=a("t8hP");function o(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,r;return t=e,(a=[{key:"processQueryResult",value:function(e){var t=[];if(!e.data.results)return{data:t};for(var a in e.data.results){var r=e.data.results[a];if(r.series){var n=!0,i=!1,s=void 0;try{for(var u,o=r.series[Symbol.iterator]();!(n=(u=o.next()).done);n=!0){var l=u.value;t.push({target:l.name,datapoints:l.points,refId:r.refId,meta:r.meta})}}catch(e){i=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw s}}}if(r.tables){var c=!0,m=!1,h=void 0;try{for(var p,d=r.tables[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){var f=p.value;f.type="table",f.refId=r.refId,f.meta=r.meta,t.push(f)}}catch(e){m=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(m)throw h}}}}return{data:t}}},{key:"parseMetricFindQueryResult",value:function(e,t){if(!t||0===t.data.length||0===t.data.results[e].meta.rowCount)return[];var a=t.data.results[e].tables[0].columns,r=t.data.results[e].tables[0].rows,n=this.findColIndex(a,"__text"),i=this.findColIndex(a,"__value");return 2===a.length&&-1!==n&&-1!==i?this.transformToKeyValueList(r,n,i):this.transformToSimpleList(r)}},{key:"transformToKeyValueList",value:function(e,t,a){for(var r=[],n=0;n<e.length;n++)this.containsKey(r,e[n][t])||r.push({text:e[n][t],value:e[n][a]});return r}},{key:"transformToSimpleList",value:function(e){for(var t=[],a=0;a<e.length;a++)for(var r=0;r<e[a].length;r++)t.push(e[a][r]);var i=Array.from(new Set(t));return n.a.map(i,(function(e){return{text:e}}))}},{key:"findColIndex",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a].text===t)return a;return-1}},{key:"containsKey",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a].text===t)return!0;return!1}},{key:"transformAnnotationResponse",value:function(e,t){for(var a=t.data.results[e.annotation.name].tables[0],r=-1,n=-1,i=-1,s=-1,u=0;u<a.columns.length;u++)"time"===a.columns[u].text?r=u:"timeend"===a.columns[u].text?n=u:"text"===a.columns[u].text?i=u:"tags"===a.columns[u].text&&(s=u);if(-1===r)return Promise.reject({message:"Missing mandatory time column in annotation query."});for(var o=[],l=0;l<a.rows.length;l++){var c=a.rows[l],m=-1!==n&&c[n]?Math.floor(c[n]):void 0;o.push({annotation:e.annotation,time:Math.floor(c[r]),timeEnd:m,title:c[-1],text:c[i],tags:c[s]?c[s].trim().split(/\s*,\s*/):[]})}return o}}])&&o(t.prototype,a),r&&o(t,r),e}();function c(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,a,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.target=t,this.templateSrv=a,this.scopedVars=r,t.format=t.format||"time_series",t.timeColumn=t.timeColumn||"time",t.metricColumn=t.metricColumn||"none",t.group=t.group||[],t.where=t.where||[{type:"macro",name:"$__timeFilter",params:[]}],t.select=t.select||[[{type:"column",params:["value"]}]],"rawQuery"in this.target||(t.rawQuery="rawSql"in t),this.interpolateQueryStr=this.interpolateQueryStr.bind(this)}var t,a,r;return e.$inject=["target","templateSrv","scopedVars"],t=e,(a=[{key:"unquoteIdentifier",value:function(e){return'"'===e[0]&&'"'===e[e.length-1]?e.substring(1,e.length-1).replace(/""/g,'"'):e}},{key:"quoteIdentifier",value:function(e){return'"'+String(e).replace(/"/g,'""')+'"'}},{key:"quoteLiteral",value:function(e){return"'"+String(e).replace(/'/g,"''")+"'"}},{key:"escapeLiteral",value:function(e){return String(e).replace(/'/g,"''")}},{key:"hasTimeGroup",value:function(){return n.a.find(this.target.group,(function(e){return"time"===e.type}))}},{key:"hasMetricColumn",value:function(){return"none"!==this.target.metricColumn}},{key:"interpolateQueryStr",value:function(e,t,a){return t.multi||t.includeAll?"string"==typeof e?this.quoteLiteral(e):n.a.map(e,this.quoteLiteral).join(","):this.escapeLiteral(e)}},{key:"render",value:function(e){var t=this.target;return this.target.rawQuery||"table"in this.target?(t.rawQuery||(t.rawSql=this.buildQuery()),e?this.templateSrv.replace(t.rawSql,this.scopedVars,this.interpolateQueryStr):t.rawSql):""}},{key:"hasUnixEpochTimecolumn",value:function(){return["int4","int8","float4","float8","numeric"].indexOf(this.target.timeColumnType)>-1}},{key:"buildTimeColumn",value:function(){var e,t,a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=this.hasTimeGroup(),n="$__timeGroup";return r?(t=r.params.length>1&&"none"!==r.params[1]?r.params.join(","):r.params[0],this.hasUnixEpochTimecolumn()&&(n="$__unixEpochGroup"),a&&(n+="Alias"),e=n+"("+this.target.timeColumn+","+t+")"):(e=this.target.timeColumn,a&&(e+=' AS "time"')),e}},{key:"buildMetricColumn",value:function(){return this.hasMetricColumn()?this.target.metricColumn+" AS metric":""}},{key:"buildValueColumns",value:function(){var e="",t=!0,a=!1,r=void 0;try{for(var n,i=this.target.select[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var s=n.value;e+=",\n  "+this.buildValueColumn(s)}}catch(e){a=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(a)throw r}}return e}},{key:"buildValueColumn",value:function(e){var t="";t=n.a.find(e,(function(e){return"column"===e.type})).params[0];var a=n.a.find(e,(function(e){return"aggregate"===e.type||"percentile"===e.type})),r=n.a.find(e,(function(e){return"window"===e.type||"moving_window"===e.type}));if(a){var i=a.params[0];switch(a.type){case"aggregate":t="first"===i||"last"===i?i+"("+t+","+this.target.timeColumn+")":i+"("+t+")";break;case"percentile":t=i+"("+a.params[1]+") WITHIN GROUP (ORDER BY "+t+")"}}if(r){var s=[];this.hasMetricColumn()&&s.push("PARTITION BY "+this.target.metricColumn),s.push("ORDER BY "+this.buildTimeColumn(!1));var u,o,l=s.join(" ");switch(r.type){case"window":switch(r.params[0]){case"delta":t=(u=t)+" - "+(o="lag("+u+") OVER ("+l+")");break;case"increase":t="(CASE WHEN "+(u=t)+" >= "+(o="lag("+u+") OVER ("+l+")")+" THEN "+u+" - "+o,t+=" WHEN "+o+" IS NULL THEN NULL ELSE "+u+" END)";break;case"rate":var c=this.target.timeColumn;a&&(c="min("+c+")"),t="(CASE WHEN "+(u=t)+" >= "+(o="lag("+u+") OVER ("+l+")")+" THEN "+u+" - "+o,t+=" WHEN "+o+" IS NULL THEN NULL ELSE "+u+" END)",t+="/extract(epoch from "+c+" - lag("+c+") OVER ("+l+"))";break;default:t=r.params[0]+"("+t+") OVER ("+l+")"}break;case"moving_window":t=r.params[0]+"("+t+") OVER ("+l+" ROWS "+r.params[1]+" PRECEDING)"}}var m=n.a.find(e,(function(e){return"alias"===e.type}));return m&&(t+=" AS "+this.quoteIdentifier(m.params[0])),t}},{key:"buildWhereClause",value:function(){var e=this,t="",a=n.a.map(this.target.where,(function(t,a){switch(t.type){case"macro":return t.name+"("+e.target.timeColumn+")";case"expression":return t.params.join(" ")}}));return a.length>0&&(t="\nWHERE\n  "+a.join(" AND\n  ")),t}},{key:"buildGroupClause",value:function(){for(var e="",t="",a=0;a<this.target.group.length;a++){var r=this.target.group[a];a>0&&(t+=", "),"time"===r.type?t+="1":t+=r.params[0]}return t.length&&(e="\nGROUP BY "+t,this.hasMetricColumn()&&(e+=",2")),e}},{key:"buildQuery",value:function(){var e="SELECT";return e+="\n  "+this.buildTimeColumn(),this.hasMetricColumn()&&(e+=",\n  "+this.buildMetricColumn()),e+=this.buildValueColumns(),e+="\nFROM "+this.target.table,e+=this.buildWhereClause(),e+=this.buildGroupClause(),e+="\nORDER BY 1",this.hasMetricColumn()&&(e+=",2"),e}}])&&c(t.prototype,a),r&&c(t,r),e}(),h=a("5kRJ"),p=a("NPB1"),d=a("+JjO");function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){var a=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(h.a)(),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object(p.a)();y(this,e),this.templateSrv=r,this.timeSrv=i,this.interpolateVariable=function(e,t){return"string"==typeof e?t.multi||t.includeAll?a.queryModel.quoteLiteral(e):e:"number"==typeof e?e:n.a.map(e,(function(e){return a.queryModel.quoteLiteral(e)})).join(",")},this.name=t.name,this.id=t.id,this.jsonData=t.jsonData,this.responseParser=new l,this.queryModel=new m({}),this.interval=(t.jsonData||{}).timeInterval||"1m"}var t,a,r;return t=e,(a=[{key:"interpolateVariablesInQueries",value:function(e,t){var a=this,r=e;return e&&e.length>0&&(r=e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{datasource:a.name,rawSql:a.templateSrv.replace(e.rawSql,t,a.interpolateVariable),rawQuery:!0})}))),r}},{key:"query",value:function(e){var t=this,a=n.a.filter(e.targets,(function(e){return!0!==e.hide})).map((function(a){var r=new m(a,t.templateSrv,e.scopedVars);return{refId:a.refId,intervalMs:e.intervalMs,maxDataPoints:e.maxDataPoints,datasourceId:t.id,rawSql:r.render(t.interpolateVariable),format:a.format}}));return 0===a.length?Object(i.a)({data:[]}):Object(u.getBackendSrv)().fetch({url:"/api/tsdb/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:a}}).pipe(Object(s.a)(this.responseParser.processQueryResult))}},{key:"annotationQuery",value:function(e){var t=this;if(!e.annotation.rawQuery)return Promise.reject({message:"Query missing in annotation definition"});var a={refId:e.annotation.name,datasourceId:this.id,rawSql:this.templateSrv.replace(e.annotation.rawQuery,e.scopedVars,this.interpolateVariable),format:"table"};return Object(u.getBackendSrv)().fetch({url:"/api/tsdb/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:[a]}}).pipe(Object(s.a)((function(a){return t.responseParser.transformAnnotationResponse(e,a)}))).toPromise()}},{key:"metricFindQuery",value:function(e,t){var a=this,r="tempvar";t&&t.variable&&t.variable.name&&(r=t.variable.name);var n=this.templateSrv.replace(e,Object(d.e)({query:e,wildcardChar:"%",options:t}),this.interpolateVariable),i={refId:r,datasourceId:this.id,rawSql:n,format:"table"},o=this.timeSrv.timeRange(),l={queries:[i],from:o.from.valueOf().toString(),to:o.to.valueOf().toString()};return Object(u.getBackendSrv)().fetch({url:"/api/tsdb/query",method:"POST",data:l}).pipe(Object(s.a)((function(e){return a.responseParser.parseMetricFindQueryResult(r,e)}))).toPromise()}},{key:"getVersion",value:function(){return this.metricFindQuery("SELECT current_setting('server_version_num')::int/100",{})}},{key:"getTimescaleDBVersion",value:function(){return this.metricFindQuery("SELECT extversion FROM pg_extension WHERE extname = 'timescaledb'",{})}},{key:"testDatasource",value:function(){return this.metricFindQuery("SELECT 1",{}).then((function(e){return{status:"success",message:"Database Connection OK"}})).catch((function(e){return console.error(e),e.data&&e.data.message?{status:"error",message:e.data.message}:{status:"error",message:e.status}}))}},{key:"targetContainsTemplate",value:function(e){var t="";return t=(t=e.rawQuery?e.rawSql:new m(e).buildQuery()).replace("$__",""),this.templateSrv.variableExists(t)}}])&&g(t.prototype,a),r&&g(t,r),e}(),S=a("Xmxp");function w(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.target=t,this.queryModel=a}var t,a,r;return t=e,(a=[{key:"getOperators",value:function(e){switch(e){case"float4":case"float8":return["=","!=","<","<=",">",">="];case"text":case"varchar":case"char":return["=","!=","<","<=",">",">=","IN","NOT IN","LIKE","NOT LIKE","~","~*","!~","!~*"];default:return["=","!=","<","<=",">",">=","IN","NOT IN"]}}},{key:"quoteIdentAsLiteral",value:function(e){return this.queryModel.quoteLiteral(this.queryModel.unquoteIdentifier(e))}},{key:"findMetricTable",value:function(){var e="\nSELECT\n\tquote_ident(table_name) as table_name,\n\t( SELECT\n\t    quote_ident(column_name) as column_name\n\t  FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name IN ('timestamptz','timestamp')\n    ORDER BY ordinal_position LIMIT 1\n  ) AS time_column,\n  ( SELECT\n      quote_ident(column_name) AS column_name\n    FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name='float8'\n    ORDER BY ordinal_position LIMIT 1\n  ) AS value_column\nFROM information_schema.tables t\nWHERE ";return e+=this.buildSchemaConstraint(),e+=" AND\n  EXISTS\n  ( SELECT 1\n    FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name IN ('timestamptz','timestamp')\n  ) AND\n  EXISTS\n  ( SELECT 1\n    FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name='float8'\n  )\nLIMIT 1\n;"}},{key:"buildSchemaConstraint",value:function(){return"\ntable_schema IN (\n  SELECT\n    CASE WHEN trim(s[i]) = '\"$user\"' THEN user ELSE trim(s[i]) END\n  FROM\n    generate_series(\n      array_lower(string_to_array(current_setting('search_path'),','),1),\n      array_upper(string_to_array(current_setting('search_path'),','),1)\n    ) as i,\n    string_to_array(current_setting('search_path'),',') s\n)"}},{key:"buildTableConstraint",value:function(e){var t="";if(e.includes(".")){var a=e.split(".");return t="table_schema = "+this.quoteIdentAsLiteral(a[0]),t+=" AND table_name = "+this.quoteIdentAsLiteral(a[1])}return t=this.buildSchemaConstraint(),t+=" AND table_name = "+this.quoteIdentAsLiteral(e)}},{key:"buildTableQuery",value:function(){var e="SELECT quote_ident(table_name) FROM information_schema.tables WHERE ";return e+=this.buildSchemaConstraint(),e+=" ORDER BY table_name"}},{key:"buildColumnQuery",value:function(e){var t="SELECT quote_ident(column_name) FROM information_schema.columns WHERE ";switch(t+=this.buildTableConstraint(this.target.table),e){case"time":t+=" AND data_type IN ('timestamp without time zone','timestamp with time zone','bigint','integer','double precision','real')";break;case"metric":t+=" AND data_type IN ('text','character','character varying')";break;case"value":t+=" AND data_type IN ('bigint','integer','double precision','real')",t+=" AND column_name <> "+this.quoteIdentAsLiteral(this.target.timeColumn);break;case"group":t+=" AND data_type IN ('text','character','character varying')"}return t+=" ORDER BY column_name"}},{key:"buildValueQuery",value:function(e){var t="SELECT DISTINCT quote_literal("+e+")";return t+=" FROM "+this.target.table,t+=" WHERE $__timeFilter("+this.target.timeColumn+")",t+=" AND "+e+" IS NOT NULL",t+=" ORDER BY 1 LIMIT 100"}},{key:"buildDatatypeQuery",value:function(e){var t="SELECT udt_name FROM information_schema.columns WHERE ";return t+=this.buildTableConstraint(this.target.table),t+=" AND column_name = "+this.quoteIdentAsLiteral(e)}},{key:"buildAggregateQuery",value:function(){return"SELECT DISTINCT proname FROM pg_aggregate INNER JOIN pg_proc ON pg_aggregate.aggfnoid = pg_proc.oid INNER JOIN pg_type ON pg_type.oid=pg_proc.prorettype WHERE pronargs=1 AND typname IN ('float8') AND aggkind='n' ORDER BY 1"}}])&&w(t.prototype,a),r&&w(t,r),e}(),_=a("LzXI"),C=a("XXK+"),P=[];function k(e){P[e.type]=new C.b(e)}k({type:"column",style:"label",params:[{type:"column",dynamicLookup:!0}],defaultParams:["value"]}),k({type:"expression",style:"expression",label:"Expr:",params:[{name:"left",type:"string",dynamicLookup:!0},{name:"op",type:"string",dynamicLookup:!0},{name:"right",type:"string",dynamicLookup:!0}],defaultParams:["value","=","value"]}),k({type:"macro",style:"label",label:"Macro:",params:[],defaultParams:[]}),k({type:"aggregate",style:"label",params:[{name:"name",type:"string",options:["avg","count","min","max","sum","stddev","variance"]}],defaultParams:["avg"]}),k({type:"percentile",label:"Aggregate:",style:"label",params:[{name:"name",type:"string",options:["percentile_cont","percentile_disc"]},{name:"fraction",type:"number",options:["0.5","0.75","0.9","0.95","0.99"]}],defaultParams:["percentile_cont","0.95"]}),k({type:"alias",style:"label",params:[{name:"name",type:"string",quote:"double"}],defaultParams:["alias"]}),k({type:"time",style:"function",label:"time",params:[{name:"interval",type:"interval",options:["$__interval","1s","10s","1m","5m","10m","15m","1h"]},{name:"fill",type:"string",options:["none","NULL","previous","0"]}],defaultParams:["$__interval","none"]}),k({type:"window",style:"label",params:[{name:"function",type:"string",options:["delta","increase","rate","sum"]}],defaultParams:["increase"]}),k({type:"moving_window",style:"label",label:"Moving Window:",params:[{name:"function",type:"string",options:["avg"]},{name:"window_size",type:"number",options:["3","5","7","10","20"]}],defaultParams:["avg","5"]});var O={create:function(e){var t=P[e.type];return t?new C.a(e,t):null}},x=a("GQ3c"),R=a("Obii");function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(e,a,r,n){var i,s,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s=this,u=Q(t).call(this,e,a),(i=!u||"object"!==T(u)&&"function"!=typeof u?A(s):u).templateSrv=r,i.uiSegmentSrv=n,i.target=i.target,i.queryModel=new m(i.target,r,i.panel.scopedVars),i.metaBuilder=new E(i.target,i.queryModel),i.updateProjection(),i.formats=[{text:"Time series",value:"time_series"},{text:"Table",value:"table"}],i.target.rawSql||("table"===i.panelCtrl.panel.type?(i.target.format="table",i.target.rawSql="SELECT 1",i.target.rawQuery=!0):(i.target.rawSql="SELECT\n  $__time(time_column),\n  value1\nFROM\n  metric_table\nWHERE\n  $__timeFilter(time_column)\n",i.datasource.metricFindQuery(i.metaBuilder.findMetricTable()).then((function(e){if(e.length>0){i.target.table=e[0].text;var t=i.uiSegmentSrv.newSegment(i.target.table);i.tableSegment.html=t.html,i.tableSegment.value=t.value,i.target.timeColumn=e[1].text,t=i.uiSegmentSrv.newSegment(i.target.timeColumn),i.timeColumnSegment.html=t.html,i.timeColumnSegment.value=t.value,i.target.timeColumnType="timestamp",i.target.select=[[{type:"column",params:[e[2].text]}]],i.updateProjection(),i.updateRawSqlAndRefresh()}})))),i.target.table?i.tableSegment=n.newSegment(i.target.table):i.tableSegment=n.newSegment({value:"select table",fake:!0}),i.timeColumnSegment=n.newSegment(i.target.timeColumn),i.metricColumnSegment=n.newSegment(i.target.metricColumn),i.buildSelectMenu(),i.whereAdd=i.uiSegmentSrv.newPlusButton(),i.groupAdd=i.uiSegmentSrv.newPlusButton(),i.panelCtrl.events.on(R.PanelEvents.dataReceived,i.onDataReceived.bind(A(i)),e),i.panelCtrl.events.on(R.PanelEvents.dataError,i.onDataError.bind(A(i)),e),i}var a,r,i;return t.$inject=["$scope","$injector","templateSrv","uiSegmentSrv"],function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),a=t,(r=[{key:"updateRawSqlAndRefresh",value:function(){this.target.rawQuery||(this.target.rawSql=this.queryModel.buildQuery()),this.panelCtrl.refresh()}},{key:"updateProjection",value:function(){this.selectParts=n.a.map(this.target.select,(function(e){return n.a.map(e,O.create).filter((function(e){return e}))})),this.whereParts=n.a.map(this.target.where,O.create).filter((function(e){return e})),this.groupParts=n.a.map(this.target.group,O.create).filter((function(e){return e}))}},{key:"updatePersistedParts",value:function(){this.target.select=n.a.map(this.selectParts,(function(e){return n.a.map(e,(function(e){return{type:e.def.type,datatype:e.datatype,params:e.params}}))})),this.target.where=n.a.map(this.whereParts,(function(e){return{type:e.def.type,datatype:e.datatype,name:e.name,params:e.params}})),this.target.group=n.a.map(this.groupParts,(function(e){return{type:e.def.type,datatype:e.datatype,params:e.params}}))}},{key:"buildSelectMenu",value:function(){this.selectMenu=[];var e={text:"Aggregate Functions",value:"aggregate",submenu:[{text:"Average",value:"avg"},{text:"Count",value:"count"},{text:"Maximum",value:"max"},{text:"Minimum",value:"min"},{text:"Sum",value:"sum"},{text:"Standard deviation",value:"stddev"},{text:"Variance",value:"variance"}]};!0===this.datasource.jsonData.timescaledb&&(e.submenu.push({text:"First",value:"first"}),e.submenu.push({text:"Last",value:"last"})),this.selectMenu.push(e),this.datasource.jsonData.postgresVersion>=904&&this.selectMenu.push({text:"Ordered-Set Aggregate Functions",value:"percentile",submenu:[{text:"Percentile (continuous)",value:"percentile_cont"},{text:"Percentile (discrete)",value:"percentile_disc"}]}),this.selectMenu.push({text:"Window Functions",value:"window",submenu:[{text:"Delta",value:"delta"},{text:"Increase",value:"increase"},{text:"Rate",value:"rate"},{text:"Sum",value:"sum"},{text:"Moving Average",value:"avg",type:"moving_window"}]}),this.selectMenu.push({text:"Alias",value:"alias"}),this.selectMenu.push({text:"Column",value:"column"})}},{key:"toggleEditorMode",value:function(){var e=this;this.target.rawQuery?S.b.emit(x.CoreEvents.showConfirmModal,{title:"Warning",text2:"Switching to query builder may overwrite your raw SQL.",icon:"exclamation-triangle",yesText:"Switch",onConfirm:function(){e.target.rawQuery=!e.target.rawQuery}}):this.target.rawQuery=!this.target.rawQuery}},{key:"resetPlusButton",value:function(e){var t=this.uiSegmentSrv.newPlusButton();e.html=t.html,e.value=t.value,e.type=t.type,e.fake=t.fake}},{key:"getTableSegments",value:function(){return this.datasource.metricFindQuery(this.metaBuilder.buildTableQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}},{key:"tableChanged",value:function(){var e=this;this.target.table=this.tableSegment.value,this.target.where=[],this.target.group=[],this.updateProjection();var t=this.uiSegmentSrv.newSegment("none");this.metricColumnSegment.html=t.html,this.metricColumnSegment.value=t.value,this.target.metricColumn="none";var a=this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("time")).then((function(t){if(t.length>0&&!n.a.find(t,(function(t){return t.text===e.target.timeColumn}))){var a=e.uiSegmentSrv.newSegment(t[0].text);e.timeColumnSegment.html=a.html,e.timeColumnSegment.value=a.value}return e.timeColumnChanged(!1)})),r=this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("value")).then((function(t){t.length>0&&(e.target.select=[[{type:"column",params:[t[0].text]}]],e.updateProjection())}));Promise.all([a,r]).then((function(){e.updateRawSqlAndRefresh()}))}},{key:"getTimeColumnSegments",value:function(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("time")).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}},{key:"timeColumnChanged",value:function(e){var t=this;return this.target.timeColumn=this.timeColumnSegment.value,this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(this.target.timeColumn)).then((function(a){var r;1===a.length&&(t.target.timeColumnType!==a[0].text&&(t.target.timeColumnType=a[0].text),r=t.queryModel.hasUnixEpochTimecolumn()?O.create({type:"macro",name:"$__unixEpochFilter",params:[]}):O.create({type:"macro",name:"$__timeFilter",params:[]}),t.whereParts.length>=1&&"macro"===t.whereParts[0].def.type?t.whereParts[0]=r:t.whereParts.splice(0,0,r)),t.updatePersistedParts(),!1!==e&&t.updateRawSqlAndRefresh()}))}},{key:"getMetricColumnSegments",value:function(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("metric")).then(this.transformToSegments({addNone:!0})).catch(this.handleQueryError.bind(this))}},{key:"metricColumnChanged",value:function(){this.target.metricColumn=this.metricColumnSegment.value,this.updateRawSqlAndRefresh()}},{key:"onDataReceived",value:function(e){var t;this.lastQueryError=void 0,this.lastQueryMeta=null===(t=e[0])||void 0===t?void 0:t.meta}},{key:"onDataError",value:function(e){if(e.data&&e.data.results){var t=e.data.results[this.target.refId];t&&(this.lastQueryError=t.error)}}},{key:"transformToSegments",value:function(e){var t=this;return function(a){var r=n.a.map(a,(function(e){return t.uiSegmentSrv.newSegment({value:e.text,expandable:e.expandable})}));if(e.addTemplateVars){var i=!0,s=!1,u=void 0;try{for(var o,l=t.templateSrv.getVariables()[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var c=o.value,m=void 0;m="$"+c.name,e.templateQuoter&&!1===c.multi&&(m=e.templateQuoter(m)),r.unshift(t.uiSegmentSrv.newSegment({type:"template",value:m,expandable:!0}))}}catch(e){s=!0,u=e}finally{try{i||null==l.return||l.return()}finally{if(s)throw u}}}return e.addNone&&r.unshift(t.uiSegmentSrv.newSegment({type:"template",value:"none",expandable:!0})),r}}},{key:"findAggregateIndex",value:function(e){return n.a.findIndex(e,(function(e){return"aggregate"===e.def.type||"percentile"===e.def.type}))}},{key:"findWindowIndex",value:function(e){return n.a.findIndex(e,(function(e){return"window"===e.def.type||"moving_window"===e.def.type}))}},{key:"addSelectPart",value:function(e,t,a){var r=t.value;a&&a.type&&(r=a.type);var i=O.create({type:r});a&&(i.params[0]=a.value);var s=!1;switch(r){case"column":var u=n.a.map(e,(function(e){return O.create({type:e.def.type,params:n.a.clone(e.params)})}));this.selectParts.push(u);break;case"percentile":case"aggregate":0===this.target.group.length&&this.addGroup("time","$__interval");var o=this.findAggregateIndex(e);-1!==o?e[o]=i:e.splice(1,0,i),n.a.find(e,(function(e){return"alias"===e.def.type}))||(s=!0);break;case"moving_window":case"window":var l=this.findWindowIndex(e);if(-1!==l)e[l]=i;else{var c=this.findAggregateIndex(e);-1!==c?e.splice(c+1,0,i):e.splice(1,0,i)}n.a.find(e,(function(e){return"alias"===e.def.type}))||(s=!0);break;case"alias":s=!0}s&&(i=O.create({type:"alias",params:[e[0].params[0].replace(/"/g,"")]}),"alias"===e[e.length-1].def.type?e[e.length-1]=i:e.push(i)),this.updatePersistedParts(),this.updateRawSqlAndRefresh()}},{key:"removeSelectPart",value:function(e,t){if("column"===t.def.type){if(this.selectParts.length>1){var a=n.a.indexOf(this.selectParts,e);this.selectParts.splice(a,1)}}else{var r=n.a.indexOf(e,t);e.splice(r,1)}this.updatePersistedParts()}},{key:"handleSelectPartEvent",value:function(e,t,a){switch(a.name){case"get-param-options":switch(t.def.type){case"aggregate":return this.datasource.metricFindQuery(this.metaBuilder.buildAggregateQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"column":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("value")).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}case"part-param-changed":this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"action":this.removeSelectPart(e,t),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}}},{key:"handleGroupPartEvent",value:function(e,t,a){switch(a.name){case"get-param-options":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"part-param-changed":this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"action":this.removeGroup(e,t),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}}},{key:"addGroup",value:function(e,t){var a=[t];"time"===e&&(a=["$__interval","none"]);var r=O.create({type:e,params:a});"time"===e?this.groupParts.splice(0,0,r):this.groupParts.push(r);var n=!0,i=!1,s=void 0;try{for(var u,o=this.selectParts[Symbol.iterator]();!(n=(u=o.next()).done);n=!0){var l=u.value;if(!l.some((function(e){return"aggregate"===e.def.type}))){var c=O.create({type:"aggregate",params:["avg"]});if(l.splice(1,0,c),!l.some((function(e){return"alias"===e.def.type}))){var m=O.create({type:"alias",params:[l[0].part.params[0]]});l.push(m)}}}}catch(e){i=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw s}}this.updatePersistedParts()}},{key:"removeGroup",value:function(e,t){"time"===e.def.type&&(this.selectParts=n.a.map(this.selectParts,(function(e){return n.a.filter(e,(function(e){return"aggregate"!==e.def.type&&"percentile"!==e.def.type}))}))),this.groupParts.splice(t,1),this.updatePersistedParts()}},{key:"handleWherePartEvent",value:function(e,t,a,r){var n=this;switch(a.name){case"get-param-options":switch(a.param.name){case"left":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"right":return["int4","int8","float4","float8","timestamp","timestamptz"].indexOf(t.datatype)>-1?Promise.resolve([]):this.datasource.metricFindQuery(this.metaBuilder.buildValueQuery(t.params[0])).then(this.transformToSegments({addTemplateVars:!0,templateQuoter:function(e){return n.queryModel.quoteLiteral(e)}})).catch(this.handleQueryError.bind(this));case"op":return Promise.resolve(this.uiSegmentSrv.newOperators(this.metaBuilder.getOperators(t.datatype)));default:return Promise.resolve([])}case"part-param-changed":this.updatePersistedParts(),this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(t.params[0])).then((function(e){1===e.length&&(t.datatype=e[0].text)})),this.updateRawSqlAndRefresh();break;case"action":e.splice(r,1),this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}}},{key:"getWhereOptions",value:function(){var e=[];return this.queryModel.hasUnixEpochTimecolumn()?e.push(this.uiSegmentSrv.newSegment({type:"macro",value:"$__unixEpochFilter"})):e.push(this.uiSegmentSrv.newSegment({type:"macro",value:"$__timeFilter"})),e.push(this.uiSegmentSrv.newSegment({type:"expression",value:"Expression"})),Promise.resolve(e)}},{key:"addWhereAction",value:function(e,t){switch(this.whereAdd.type){case"macro":var a=O.create({type:"macro",name:this.whereAdd.value,params:[]});this.whereParts.length>=1&&"macro"===this.whereParts[0].def.type?this.whereParts[0]=a:this.whereParts.splice(0,0,a);break;default:this.whereParts.push(O.create({type:"expression",params:["value","=","value"]}))}this.updatePersistedParts(),this.resetPlusButton(this.whereAdd),this.updateRawSqlAndRefresh()}},{key:"getGroupOptions",value:function(){var e=this;return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("group")).then((function(t){var a=[];e.queryModel.hasTimeGroup()||a.push(e.uiSegmentSrv.newSegment({type:"time",value:"time($__interval,none)"}));var r=!0,n=!1,i=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var o=s.value;a.push(e.uiSegmentSrv.newSegment({type:"column",value:o.text}))}}catch(e){n=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(n)throw i}}return a})).catch(this.handleQueryError.bind(this))}},{key:"addGroupAction",value:function(){this.groupAdd.value,this.addGroup(this.groupAdd.type,this.groupAdd.value),this.resetPlusButton(this.groupAdd),this.updateRawSqlAndRefresh()}},{key:"handleQueryError",value:function(e){return this.error=e.message||"Failed to issue metric query",[]}}])&&D(a.prototype,r),i&&D(a,i),t}(_.QueryCtrl);j.templateUrl="partials/query.editor.html";var I=a("QjE0");function N(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.postgresVersions=[{name:"9.3",value:903},{name:"9.4",value:904},{name:"9.5",value:905},{name:"9.6",value:906},{name:"10",value:1e3},{name:"11",value:1100},{name:"12",value:1200}],this.datasourceSrv=a,this.current.jsonData.sslmode=this.current.jsonData.sslmode||"verify-full",this.current.jsonData.tlsConfigurationMethod=this.current.jsonData.tlsConfigurationMethod||"file-path",this.current.jsonData.postgresVersion=this.current.jsonData.postgresVersion||903,this.showTimescaleDBHelp=!1,this.autoDetectFeatures(),this.onPasswordReset=Object(I.c)(this,I.a.Password),this.onPasswordChange=Object(I.b)(this,I.a.Password),this.tlsModeMapping()}var t,a,r;return e.$inject=["$scope","datasourceSrv"],t=e,(a=[{key:"autoDetectFeatures",value:function(){var e=this;this.current.id&&this.datasourceSrv.loadDatasource(this.current.name).then((function(t){return t.getVersion().then((function(a){(a=Number(a[0].text))>=906&&t.getTimescaleDBVersion().then((function(t){1===t.length&&(e.current.jsonData.timescaledb=!0)}));var r=Math.trunc(a/100),i=a%100,s=String(r);a<1e3&&(s=String(r)+"."+String(i)),n.a.find(e.postgresVersions,(function(e){return e.value===a}))||e.postgresVersions.push({name:s,value:a}),e.current.jsonData.postgresVersion=a}))}))}},{key:"toggleTimescaleDBHelp",value:function(){this.showTimescaleDBHelp=!this.showTimescaleDBHelp}},{key:"tlsModeMapping",value:function(){"disable"===this.current.jsonData.sslmode?(this.current.jsonData.tlsAuth=!1,this.current.jsonData.tlsAuthWithCACert=!1,this.current.jsonData.tlsSkipVerify=!0):(this.current.jsonData.tlsAuth=!0,this.current.jsonData.tlsAuthWithCACert=!0,this.current.jsonData.tlsSkipVerify=!1)}}])&&N(t.prototype,a),r&&N(t,r),e}();M.templateUrl="partials/config.html",a.d(t,"AnnotationsQueryCtrl",(function(){return L})),a.d(t,"PostgresDatasource",(function(){return b})),a.d(t,"Datasource",(function(){return b})),a.d(t,"QueryCtrl",(function(){return j})),a.d(t,"ConfigCtrl",(function(){return M}));var L=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.annotation.rawQuery=this.annotation.rawQuery||"SELECT\n  extract(epoch from time_column) AS time,\n  text_column as text,\n  tags_column as tags\nFROM\n  metric_table\nWHERE\n  $__timeFilter(time_column)\n"};L.templateUrl="partials/annotations.editor.html"},QjE0:function(e,t,a){"use strict";var r;a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return i})),function(e){e.Password="password",e.BasicAuthPassword="basicAuthPassword"}(r||(r={}));var n=function(e,t){return function(a){a.preventDefault(),e.current[t]=void 0,e.current.secureJsonFields[t]=!1,e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=""}},i=function(e,t){return function(a){e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=a.currentTarget.value}}},"XXK+":function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return o}));var r=a("LvDl"),n=a.n(r);function i(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function e(t){s(this,e),this.type=t.type,t.label?this.label=t.label:this.label=this.type[0].toUpperCase()+this.type.substring(1)+":",this.style=t.style,"function"===this.style?(this.wrapOpen="(",this.wrapClose=")",this.separator=", "):(this.wrapOpen=" ",this.wrapClose=" ",this.separator=" "),this.params=t.params,this.defaultParams=t.defaultParams},o=function(){function e(t,a){if(s(this,e),this.part=t,this.def=a,!this.def)throw{message:"Could not find sql part "+t.type};this.datatype=t.datatype,t.name?(this.name=t.name,this.label=a.label+" "+t.name):(this.name="",this.label=a.label),t.params=t.params||n.a.clone(this.def.defaultParams),this.params=t.params}var t,a,r;return t=e,(a=[{key:"updateParam",value:function(e,t){""===e&&this.def.params[t].optional?this.params.splice(t,1):this.params[t]=e,this.part.params=this.params}}])&&i(t.prototype,a),r&&i(t,r),e}()}}]);
//# sourceMappingURL=postgresPlugin.21c7add3cfafde5bec67.js.map