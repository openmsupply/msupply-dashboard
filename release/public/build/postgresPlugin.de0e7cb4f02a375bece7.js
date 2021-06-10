(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"2Wqq":function(e,t,a){"use strict";a.r(t);var r=a("LvDl"),s=a("67Y/"),i=a("t8hP"),n=a("Obii");class l{transformMetricFindResponse(e){const t=Object(i.toDataQueryResponse)(e).data;if(!t||!t.length)return[];const a=t[0],r=[],s=a.fields.find(e=>"__text"===e.name),l=a.fields.find(e=>"__value"===e.name);if(s&&l)for(let e=0;e<s.values.length;e++)r.push({text:""+s.values.get(e),value:""+l.values.get(e)});else{const e=a.fields.filter(e=>e.type===n.FieldType.string);e&&r.push(...e.flatMap(e=>e.values.toArray()).map(e=>({text:""+e})))}return Array.from(new Set(r.map(e=>e.text))).map(e=>{var t;return{text:e,value:null===(t=r.find(t=>t.text===e))||void 0===t?void 0:t.value}})}transformToKeyValueList(e,t,a){const r=[];for(let s=0;s<e.length;s++)this.containsKey(r,e[s][t])||r.push({text:e[s][t],value:e[s][a]});return r}transformToSimpleList(e){const t=[];for(let a=0;a<e.length;a++)for(let r=0;r<e[a].length;r++)t.push(e[a][r]);const a=Array.from(new Set(t));return Object(r.map)(a,e=>({text:e}))}findColIndex(e,t){for(let a=0;a<e.length;a++)if(e[a].text===t)return a;return-1}containsKey(e,t){for(let a=0;a<e.length;a++)if(e[a].text===t)return!0;return!1}async transformAnnotationResponse(e,t){const a=Object(i.toDataQueryResponse)({data:t}).data[0],r=a.fields.find(e=>"time"===e.name);if(!r)throw new Error("Missing mandatory time column (with time column alias) in annotation query");const s=a.fields.find(e=>"timeend"===e.name),n=a.fields.find(e=>"text"===e.name),l=a.fields.find(e=>"tags"===e.name),o=[];for(let t=0;t<a.length;t++){const a=s&&s.values.get(t)?Math.floor(s.values.get(t)):void 0;o.push({annotation:e.annotation,time:Math.floor(r.values.get(t)),timeEnd:a,text:n&&n.values.get(t)?n.values.get(t):"",tags:l&&l.values.get(t)?l.values.get(t).trim().split(/\s*,\s*/):[]})}return o}}class o{constructor(e,t,a){this.target=void 0,this.templateSrv=void 0,this.scopedVars=void 0,this.target=e,this.templateSrv=t,this.scopedVars=a,e.format=e.format||"time_series",e.timeColumn=e.timeColumn||"time",e.metricColumn=e.metricColumn||"none",e.group=e.group||[],e.where=e.where||[{type:"macro",name:"$__timeFilter",params:[]}],e.select=e.select||[[{type:"column",params:["value"]}]],"rawQuery"in this.target||(e.rawQuery="rawSql"in e),this.interpolateQueryStr=this.interpolateQueryStr.bind(this)}unquoteIdentifier(e){return'"'===e[0]&&'"'===e[e.length-1]?e.substring(1,e.length-1).replace(/""/g,'"'):e}quoteIdentifier(e){return'"'+String(e).replace(/"/g,'""')+'"'}quoteLiteral(e){return"'"+String(e).replace(/'/g,"''")+"'"}escapeLiteral(e){return String(e).replace(/'/g,"''")}hasTimeGroup(){return Object(r.find)(this.target.group,e=>"time"===e.type)}hasMetricColumn(){return"none"!==this.target.metricColumn}interpolateQueryStr(e,t,a){if(!t.multi&&!t.includeAll)return this.escapeLiteral(e);if("string"==typeof e)return this.quoteLiteral(e);return Object(r.map)(e,this.quoteLiteral).join(",")}render(e){const t=this.target;return this.target.rawQuery||"table"in this.target?(t.rawQuery||(t.rawSql=this.buildQuery()),e?this.templateSrv.replace(t.rawSql,this.scopedVars,this.interpolateQueryStr):t.rawSql):""}hasUnixEpochTimecolumn(){return["int4","int8","float4","float8","numeric"].indexOf(this.target.timeColumnType)>-1}buildTimeColumn(e=!0){const t=this.hasTimeGroup();let a,r="$__timeGroup";if(t){let s;s=t.params.length>1&&"none"!==t.params[1]?t.params.join(","):t.params[0],this.hasUnixEpochTimecolumn()&&(r="$__unixEpochGroup"),e&&(r+="Alias"),a=r+"("+this.target.timeColumn+","+s+")"}else a=this.target.timeColumn,e&&(a+=' AS "time"');return a}buildMetricColumn(){return this.hasMetricColumn()?this.target.metricColumn+" AS metric":""}buildValueColumns(){let e="";for(const t of this.target.select)e+=",\n  "+this.buildValueColumn(t);return e}buildValueColumn(e){let t="";t=Object(r.find)(e,e=>"column"===e.type).params[0];const a=Object(r.find)(e,e=>"aggregate"===e.type||"percentile"===e.type),s=Object(r.find)(e,e=>"window"===e.type||"moving_window"===e.type);if(a){const e=a.params[0];switch(a.type){case"aggregate":t="first"===e||"last"===e?e+"("+t+","+this.target.timeColumn+")":e+"("+t+")";break;case"percentile":t=e+"("+a.params[1]+") WITHIN GROUP (ORDER BY "+t+")"}}if(s){const e=[];this.hasMetricColumn()&&e.push("PARTITION BY "+this.target.metricColumn),e.push("ORDER BY "+this.buildTimeColumn(!1));const r=e.join(" ");let i,n;switch(s.type){case"window":switch(s.params[0]){case"delta":i=t,n="lag("+i+") OVER ("+r+")",t=i+" - "+n;break;case"increase":i=t,n="lag("+i+") OVER ("+r+")",t="(CASE WHEN "+i+" >= "+n+" THEN "+i+" - "+n,t+=" WHEN "+n+" IS NULL THEN NULL ELSE "+i+" END)";break;case"rate":let e=this.target.timeColumn;a&&(e="min("+e+")"),i=t,n="lag("+i+") OVER ("+r+")",t="(CASE WHEN "+i+" >= "+n+" THEN "+i+" - "+n,t+=" WHEN "+n+" IS NULL THEN NULL ELSE "+i+" END)",t+="/extract(epoch from "+e+" - lag("+e+") OVER ("+r+"))";break;default:t=s.params[0]+"("+t+") OVER ("+r+")"}break;case"moving_window":t=s.params[0]+"("+t+") OVER ("+r+" ROWS "+s.params[1]+" PRECEDING)"}}const i=Object(r.find)(e,e=>"alias"===e.type);return i&&(t+=" AS "+this.quoteIdentifier(i.params[0])),t}buildWhereClause(){let e="";const t=Object(r.map)(this.target.where,(e,t)=>{switch(e.type){case"macro":return e.name+"("+this.target.timeColumn+")";case"expression":return e.params.join(" ")}});return t.length>0&&(e="\nWHERE\n  "+t.join(" AND\n  ")),e}buildGroupClause(){let e="",t="";for(let e=0;e<this.target.group.length;e++){const a=this.target.group[e];e>0&&(t+=", "),"time"===a.type?t+="1":t+=a.params[0]}return t.length&&(e="\nGROUP BY "+t,this.hasMetricColumn()&&(e+=",2")),e}buildQuery(){let e="SELECT";return e+="\n  "+this.buildTimeColumn(),this.hasMetricColumn()&&(e+=",\n  "+this.buildMetricColumn()),e+=this.buildValueColumns(),e+="\nFROM "+this.target.table,e+=this.buildWhereClause(),e+=this.buildGroupClause(),e+="\nORDER BY 1",this.hasMetricColumn()&&(e+=",2"),e}}o.$inject=["target","templateSrv","scopedVars"];var u=a("5kRJ"),m=a("NPB1"),h=a("+JjO");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}class p extends i.DataSourceWithBackend{constructor(e,t=Object(u.a)(),a=Object(m.a)()){super(e),this.id=void 0,this.name=void 0,this.jsonData=void 0,this.responseParser=void 0,this.queryModel=void 0,this.interval=void 0,this.interpolateVariable=(e,t)=>{if("string"==typeof e)return t.multi||t.includeAll?this.queryModel.quoteLiteral(e):e;if("number"==typeof e)return e;return Object(r.map)(e,e=>this.queryModel.quoteLiteral(e)).join(",")},this.templateSrv=t,this.timeSrv=a,this.name=e.name,this.id=e.id,this.jsonData=e.jsonData,this.responseParser=new l,this.queryModel=new o({});const s=e.jsonData||{};this.interval=s.timeInterval||"1m"}interpolateVariablesInQueries(e,t){let a=e;return e&&e.length>0&&(a=e.map(e=>c({},e,{datasource:this.name,rawSql:this.templateSrv.replace(e.rawSql,t,this.interpolateVariable),rawQuery:!0}))),a}filterQuery(e){return!e.hide}applyTemplateVariables(e,t){const a=new o(e,this.templateSrv,t);return{refId:e.refId,datasourceId:this.id,rawSql:a.render(this.interpolateVariable),format:e.format}}async annotationQuery(e){if(!e.annotation.rawQuery)return Promise.reject({message:"Query missing in annotation definition"});const t={refId:e.annotation.name,datasourceId:this.id,rawSql:this.templateSrv.replace(e.annotation.rawQuery,e.scopedVars,this.interpolateVariable),format:"table"};return Object(i.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:[t]},requestId:e.annotation.name}).pipe(Object(s.a)(async t=>await this.responseParser.transformAnnotationResponse(e,t.data))).toPromise()}metricFindQuery(e,t){let a="tempvar";t&&t.variable&&t.variable.name&&(a=t.variable.name);const r=this.templateSrv.replace(e,Object(h.g)({query:e,wildcardChar:"%",options:t}),this.interpolateVariable),n={refId:a,datasourceId:this.id,rawSql:r,format:"table"},l=this.timeSrv.timeRange();return Object(i.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:l.from.valueOf().toString(),to:l.to.valueOf().toString(),queries:[n]},requestId:a}).pipe(Object(s.a)(e=>this.responseParser.transformMetricFindResponse(e))).toPromise()}getVersion(){return this.metricFindQuery("SELECT current_setting('server_version_num')::int/100",{})}getTimescaleDBVersion(){return this.metricFindQuery("SELECT extversion FROM pg_extension WHERE extname = 'timescaledb'",{})}testDatasource(){return this.metricFindQuery("SELECT 1",{}).then(()=>({status:"success",message:"Database Connection OK"})).catch(e=>(console.error(e),e.data&&e.data.message?{status:"error",message:e.data.message}:{status:"error",message:e.status}))}targetContainsTemplate(e){let t="";if(e.rawQuery)t=e.rawSql;else{t=new o(e).buildQuery()}return t=t.replace("$__",""),this.templateSrv.variableExists(t)}}var d=a("Xmxp");class g{constructor(e,t){this.target=e,this.queryModel=t}getOperators(e){switch(e){case"float4":case"float8":return["=","!=","<","<=",">",">="];case"text":case"varchar":case"char":return["=","!=","<","<=",">",">=","IN","NOT IN","LIKE","NOT LIKE","~","~*","!~","!~*"];default:return["=","!=","<","<=",">",">=","IN","NOT IN"]}}quoteIdentAsLiteral(e){return this.queryModel.quoteLiteral(this.queryModel.unquoteIdentifier(e))}findMetricTable(){let e="\nSELECT\n\tquote_ident(table_name) as table_name,\n\t( SELECT\n\t    quote_ident(column_name) as column_name\n\t  FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name IN ('timestamptz','timestamp')\n    ORDER BY ordinal_position LIMIT 1\n  ) AS time_column,\n  ( SELECT\n      quote_ident(column_name) AS column_name\n    FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name='float8'\n    ORDER BY ordinal_position LIMIT 1\n  ) AS value_column\nFROM information_schema.tables t\nWHERE ";return e+=this.buildSchemaConstraint(),e+=" AND\n  EXISTS\n  ( SELECT 1\n    FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name IN ('timestamptz','timestamp')\n  ) AND\n  EXISTS\n  ( SELECT 1\n    FROM information_schema.columns c\n    WHERE\n      c.table_schema = t.table_schema AND\n      c.table_name = t.table_name AND\n      udt_name='float8'\n  )\nLIMIT 1\n;",e}buildSchemaConstraint(){return"\ntable_schema IN (\n  SELECT\n    CASE WHEN trim(s[i]) = '\"$user\"' THEN user ELSE trim(s[i]) END\n  FROM\n    generate_series(\n      array_lower(string_to_array(current_setting('search_path'),','),1),\n      array_upper(string_to_array(current_setting('search_path'),','),1)\n    ) as i,\n    string_to_array(current_setting('search_path'),',') s\n)"}buildTableConstraint(e){let t="";if(e.includes(".")){const a=e.split(".");return t="table_schema = "+this.quoteIdentAsLiteral(a[0]),t+=" AND table_name = "+this.quoteIdentAsLiteral(a[1]),t}return t=this.buildSchemaConstraint(),t+=" AND table_name = "+this.quoteIdentAsLiteral(e),t}buildTableQuery(){let e="SELECT quote_ident(table_name) FROM information_schema.tables WHERE ";return e+=this.buildSchemaConstraint(),e+=" ORDER BY table_name",e}buildColumnQuery(e){let t="SELECT quote_ident(column_name) FROM information_schema.columns WHERE ";switch(t+=this.buildTableConstraint(this.target.table),e){case"time":t+=" AND data_type IN ('timestamp without time zone','timestamp with time zone','bigint','integer','double precision','real')";break;case"metric":t+=" AND data_type IN ('text','character','character varying')";break;case"value":t+=" AND data_type IN ('bigint','integer','double precision','real')",t+=" AND column_name <> "+this.quoteIdentAsLiteral(this.target.timeColumn);break;case"group":t+=" AND data_type IN ('text','character','character varying')"}return t+=" ORDER BY column_name",t}buildValueQuery(e){let t="SELECT DISTINCT quote_literal("+e+")";return t+=" FROM "+this.target.table,t+=" WHERE $__timeFilter("+this.target.timeColumn+")",t+=" AND "+e+" IS NOT NULL",t+=" ORDER BY 1 LIMIT 100",t}buildDatatypeQuery(e){let t="SELECT udt_name FROM information_schema.columns WHERE ";return t+=this.buildTableConstraint(this.target.table),t+=" AND column_name = "+this.quoteIdentAsLiteral(e),t}buildAggregateQuery(){let e="SELECT DISTINCT proname FROM pg_aggregate ";return e+="INNER JOIN pg_proc ON pg_aggregate.aggfnoid = pg_proc.oid ",e+="INNER JOIN pg_type ON pg_type.oid=pg_proc.prorettype ",e+="WHERE pronargs=1 AND typname IN ('float8') AND aggkind='n' ORDER BY 1","SELECT DISTINCT proname FROM pg_aggregate INNER JOIN pg_proc ON pg_aggregate.aggfnoid = pg_proc.oid INNER JOIN pg_type ON pg_type.oid=pg_proc.prorettype WHERE pronargs=1 AND typname IN ('float8') AND aggkind='n' ORDER BY 1"}}var y=a("LzXI"),v=a("XXK+");const f=[];function b(e){f[e.type]=new v.b(e)}b({type:"column",style:"label",params:[{type:"column",dynamicLookup:!0}],defaultParams:["value"]}),b({type:"expression",style:"expression",label:"Expr:",params:[{name:"left",type:"string",dynamicLookup:!0},{name:"op",type:"string",dynamicLookup:!0},{name:"right",type:"string",dynamicLookup:!0}],defaultParams:["value","=","value"]}),b({type:"macro",style:"label",label:"Macro:",params:[],defaultParams:[]}),b({type:"aggregate",style:"label",params:[{name:"name",type:"string",options:["avg","count","min","max","sum","stddev","variance"]}],defaultParams:["avg"]}),b({type:"percentile",label:"Aggregate:",style:"label",params:[{name:"name",type:"string",options:["percentile_cont","percentile_disc"]},{name:"fraction",type:"number",options:["0.5","0.75","0.9","0.95","0.99"]}],defaultParams:["percentile_cont","0.95"]}),b({type:"alias",style:"label",params:[{name:"name",type:"string",quote:"double"}],defaultParams:["alias"]}),b({type:"time",style:"function",label:"time",params:[{name:"interval",type:"interval",options:["$__interval","1s","10s","1m","5m","10m","15m","1h"]},{name:"fill",type:"string",options:["none","NULL","previous","0"]}],defaultParams:["$__interval","none"]}),b({type:"window",style:"label",params:[{name:"function",type:"string",options:["delta","increase","rate","sum"]}],defaultParams:["increase"]}),b({type:"moving_window",style:"label",label:"Moving Window:",params:[{name:"function",type:"string",options:["avg"]},{name:"window_size",type:"number",options:["3","5","7","10","20"]}],defaultParams:["avg","5"]});var S={create:function(e){const t=f[e.type];return t?new v.a(e,t):null}},w=a("xAj+");class E extends y.QueryCtrl{constructor(e,t,a,r){super(e,t),this.formats=void 0,this.queryModel=void 0,this.metaBuilder=void 0,this.lastQueryMeta=void 0,this.lastQueryError=void 0,this.showHelp=!1,this.tableSegment=void 0,this.whereAdd=void 0,this.timeColumnSegment=void 0,this.metricColumnSegment=void 0,this.selectMenu=[],this.selectParts=[[]],this.groupParts=[],this.whereParts=[],this.groupAdd=void 0,this.templateSrv=a,this.uiSegmentSrv=r,this.target=this.target,this.queryModel=new o(this.target,a,this.panel.scopedVars),this.metaBuilder=new g(this.target,this.queryModel),this.updateProjection(),this.formats=[{text:"Time series",value:"time_series"},{text:"Table",value:"table"}],this.target.rawSql||("table"===this.panelCtrl.panel.type?(this.target.format="table",this.target.rawSql="SELECT 1",this.target.rawQuery=!0):(this.target.rawSql="SELECT\n  $__time(time_column),\n  value1\nFROM\n  metric_table\nWHERE\n  $__timeFilter(time_column)\n",this.datasource.metricFindQuery(this.metaBuilder.findMetricTable()).then(e=>{if(e.length>0){this.target.table=e[0].text;let t=this.uiSegmentSrv.newSegment(this.target.table);this.tableSegment.html=t.html,this.tableSegment.value=t.value,this.target.timeColumn=e[1].text,t=this.uiSegmentSrv.newSegment(this.target.timeColumn),this.timeColumnSegment.html=t.html,this.timeColumnSegment.value=t.value,this.target.timeColumnType="timestamp",this.target.select=[[{type:"column",params:[e[2].text]}]],this.updateProjection(),this.updateRawSqlAndRefresh()}}))),this.target.table?this.tableSegment=r.newSegment(this.target.table):this.tableSegment=r.newSegment({value:"select table",fake:!0}),this.timeColumnSegment=r.newSegment(this.target.timeColumn),this.metricColumnSegment=r.newSegment(this.target.metricColumn),this.buildSelectMenu(),this.whereAdd=this.uiSegmentSrv.newPlusButton(),this.groupAdd=this.uiSegmentSrv.newPlusButton(),this.panelCtrl.events.on(n.PanelEvents.dataReceived,this.onDataReceived.bind(this),e),this.panelCtrl.events.on(n.PanelEvents.dataError,this.onDataError.bind(this),e)}updateRawSqlAndRefresh(){this.target.rawQuery||(this.target.rawSql=this.queryModel.buildQuery()),this.panelCtrl.refresh()}updateProjection(){this.selectParts=Object(r.map)(this.target.select,e=>Object(r.map)(e,S.create).filter(e=>e)),this.whereParts=Object(r.map)(this.target.where,S.create).filter(e=>e),this.groupParts=Object(r.map)(this.target.group,S.create).filter(e=>e)}updatePersistedParts(){this.target.select=Object(r.map)(this.selectParts,e=>Object(r.map)(e,e=>({type:e.def.type,datatype:e.datatype,params:e.params}))),this.target.where=Object(r.map)(this.whereParts,e=>({type:e.def.type,datatype:e.datatype,name:e.name,params:e.params})),this.target.group=Object(r.map)(this.groupParts,e=>({type:e.def.type,datatype:e.datatype,params:e.params}))}buildSelectMenu(){this.selectMenu=[];const e={text:"Aggregate Functions",value:"aggregate",submenu:[{text:"Average",value:"avg"},{text:"Count",value:"count"},{text:"Maximum",value:"max"},{text:"Minimum",value:"min"},{text:"Sum",value:"sum"},{text:"Standard deviation",value:"stddev"},{text:"Variance",value:"variance"}]};if(!0===this.datasource.jsonData.timescaledb&&(e.submenu.push({text:"First",value:"first"}),e.submenu.push({text:"Last",value:"last"})),this.selectMenu.push(e),this.datasource.jsonData.postgresVersion>=904){const e={text:"Ordered-Set Aggregate Functions",value:"percentile",submenu:[{text:"Percentile (continuous)",value:"percentile_cont"},{text:"Percentile (discrete)",value:"percentile_disc"}]};this.selectMenu.push(e)}this.selectMenu.push({text:"Window Functions",value:"window",submenu:[{text:"Delta",value:"delta"},{text:"Increase",value:"increase"},{text:"Rate",value:"rate"},{text:"Sum",value:"sum"},{text:"Moving Average",value:"avg",type:"moving_window"}]}),this.selectMenu.push({text:"Alias",value:"alias"}),this.selectMenu.push({text:"Column",value:"column"})}toggleEditorMode(){this.target.rawQuery?d.b.publish(new w.ShowConfirmModalEvent({title:"Warning",text2:"Switching to query builder may overwrite your raw SQL.",icon:"exclamation-triangle",yesText:"Switch",onConfirm:()=>{this.target.rawQuery=!this.target.rawQuery}})):this.target.rawQuery=!this.target.rawQuery}resetPlusButton(e){const t=this.uiSegmentSrv.newPlusButton();e.html=t.html,e.value=t.value,e.type=t.type,e.fake=t.fake}getTableSegments(){return this.datasource.metricFindQuery(this.metaBuilder.buildTableQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}tableChanged(){this.target.table=this.tableSegment.value,this.target.where=[],this.target.group=[],this.updateProjection();const e=this.uiSegmentSrv.newSegment("none");this.metricColumnSegment.html=e.html,this.metricColumnSegment.value=e.value,this.target.metricColumn="none";const t=this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("time")).then(e=>{if(e.length>0&&!Object(r.find)(e,e=>e.text===this.target.timeColumn)){const t=this.uiSegmentSrv.newSegment(e[0].text);this.timeColumnSegment.html=t.html,this.timeColumnSegment.value=t.value}return this.timeColumnChanged(!1)}),a=this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("value")).then(e=>{e.length>0&&(this.target.select=[[{type:"column",params:[e[0].text]}]],this.updateProjection())});Promise.all([t,a]).then(()=>{this.updateRawSqlAndRefresh()})}getTimeColumnSegments(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("time")).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}timeColumnChanged(e){return this.target.timeColumn=this.timeColumnSegment.value,this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(this.target.timeColumn)).then(t=>{if(1===t.length){let e;this.target.timeColumnType!==t[0].text&&(this.target.timeColumnType=t[0].text),e=this.queryModel.hasUnixEpochTimecolumn()?S.create({type:"macro",name:"$__unixEpochFilter",params:[]}):S.create({type:"macro",name:"$__timeFilter",params:[]}),this.whereParts.length>=1&&"macro"===this.whereParts[0].def.type?this.whereParts[0]=e:this.whereParts.splice(0,0,e)}this.updatePersistedParts(),!1!==e&&this.updateRawSqlAndRefresh()})}getMetricColumnSegments(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("metric")).then(this.transformToSegments({addNone:!0})).catch(this.handleQueryError.bind(this))}metricColumnChanged(){this.target.metricColumn=this.metricColumnSegment.value,this.updateRawSqlAndRefresh()}onDataReceived(e){var t;this.lastQueryError=void 0,this.lastQueryMeta=null===(t=e[0])||void 0===t?void 0:t.meta}onDataError(e){if(e.data&&e.data.results){const t=e.data.results[this.target.refId];t&&(this.lastQueryError=t.error)}}transformToSegments(e){return t=>{const a=Object(r.map)(t,e=>this.uiSegmentSrv.newSegment({value:e.text,expandable:e.expandable}));if(e.addTemplateVars)for(const t of this.templateSrv.getVariables()){let r;r="$"+t.name,e.templateQuoter&&!1===t.multi&&(r=e.templateQuoter(r)),a.unshift(this.uiSegmentSrv.newSegment({type:"template",value:r,expandable:!0}))}return e.addNone&&a.unshift(this.uiSegmentSrv.newSegment({type:"template",value:"none",expandable:!0})),a}}findAggregateIndex(e){return Object(r.findIndex)(e,e=>"aggregate"===e.def.type||"percentile"===e.def.type)}findWindowIndex(e){return Object(r.findIndex)(e,e=>"window"===e.def.type||"moving_window"===e.def.type)}addSelectPart(e,t,a){let s=t.value;a&&a.type&&(s=a.type);let i=S.create({type:s});a&&(i.params[0]=a.value);let n=!1;switch(s){case"column":const t=Object(r.map)(e,e=>S.create({type:e.def.type,params:Object(r.clone)(e.params)}));this.selectParts.push(t);break;case"percentile":case"aggregate":0===this.target.group.length&&this.addGroup("time","$__interval");const a=this.findAggregateIndex(e);-1!==a?e[a]=i:e.splice(1,0,i),Object(r.find)(e,e=>"alias"===e.def.type)||(n=!0);break;case"moving_window":case"window":const s=this.findWindowIndex(e);if(-1!==s)e[s]=i;else{const t=this.findAggregateIndex(e);-1!==t?e.splice(t+1,0,i):e.splice(1,0,i)}Object(r.find)(e,e=>"alias"===e.def.type)||(n=!0);break;case"alias":n=!0}n&&(i=S.create({type:"alias",params:[e[0].params[0].replace(/"/g,"")]}),"alias"===e[e.length-1].def.type?e[e.length-1]=i:e.push(i)),this.updatePersistedParts(),this.updateRawSqlAndRefresh()}removeSelectPart(e,t){if("column"===t.def.type){if(this.selectParts.length>1){const t=Object(r.indexOf)(this.selectParts,e);this.selectParts.splice(t,1)}}else{const a=Object(r.indexOf)(e,t);e.splice(a,1)}this.updatePersistedParts()}handleSelectPartEvent(e,t,a){switch(a.name){case"get-param-options":switch(t.def.type){case"aggregate":return this.datasource.metricFindQuery(this.metaBuilder.buildAggregateQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"column":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("value")).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}case"part-param-changed":this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"action":this.removeSelectPart(e,t),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}}handleGroupPartEvent(e,t,a){switch(a.name){case"get-param-options":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"part-param-changed":this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"action":this.removeGroup(e,t),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}}addGroup(e,t){let a=[t];"time"===e&&(a=["$__interval","none"]);const r=S.create({type:e,params:a});"time"===e?this.groupParts.splice(0,0,r):this.groupParts.push(r);for(const e of this.selectParts)if(!e.some(e=>"aggregate"===e.def.type)){const t=S.create({type:"aggregate",params:["avg"]});if(e.splice(1,0,t),!e.some(e=>"alias"===e.def.type)){const t=S.create({type:"alias",params:[e[0].part.params[0]]});e.push(t)}}this.updatePersistedParts()}removeGroup(e,t){"time"===e.def.type&&(this.selectParts=Object(r.map)(this.selectParts,e=>Object(r.filter)(e,e=>"aggregate"!==e.def.type&&"percentile"!==e.def.type))),this.groupParts.splice(t,1),this.updatePersistedParts()}handleWherePartEvent(e,t,a,r){switch(a.name){case"get-param-options":switch(a.param.name){case"left":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"right":return["int4","int8","float4","float8","timestamp","timestamptz"].indexOf(t.datatype)>-1?Promise.resolve([]):this.datasource.metricFindQuery(this.metaBuilder.buildValueQuery(t.params[0])).then(this.transformToSegments({addTemplateVars:!0,templateQuoter:e=>this.queryModel.quoteLiteral(e)})).catch(this.handleQueryError.bind(this));case"op":return Promise.resolve(this.uiSegmentSrv.newOperators(this.metaBuilder.getOperators(t.datatype)));default:return Promise.resolve([])}case"part-param-changed":this.updatePersistedParts(),this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(t.params[0])).then(e=>{1===e.length&&(t.datatype=e[0].text)}),this.updateRawSqlAndRefresh();break;case"action":e.splice(r,1),this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}}getWhereOptions(){const e=[];return this.queryModel.hasUnixEpochTimecolumn()?e.push(this.uiSegmentSrv.newSegment({type:"macro",value:"$__unixEpochFilter"})):e.push(this.uiSegmentSrv.newSegment({type:"macro",value:"$__timeFilter"})),e.push(this.uiSegmentSrv.newSegment({type:"expression",value:"Expression"})),Promise.resolve(e)}addWhereAction(e,t){switch(this.whereAdd.type){case"macro":{const e=S.create({type:"macro",name:this.whereAdd.value,params:[]});this.whereParts.length>=1&&"macro"===this.whereParts[0].def.type?this.whereParts[0]=e:this.whereParts.splice(0,0,e);break}default:this.whereParts.push(S.create({type:"expression",params:["value","=","value"]}))}this.updatePersistedParts(),this.resetPlusButton(this.whereAdd),this.updateRawSqlAndRefresh()}getGroupOptions(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("group")).then(e=>{const t=[];this.queryModel.hasTimeGroup()||t.push(this.uiSegmentSrv.newSegment({type:"time",value:"time($__interval,none)"}));for(const a of e)t.push(this.uiSegmentSrv.newSegment({type:"column",value:a.text}));return t}).catch(this.handleQueryError.bind(this))}addGroupAction(){this.groupAdd.value,this.addGroup(this.groupAdd.type,this.groupAdd.value),this.resetPlusButton(this.groupAdd),this.updateRawSqlAndRefresh()}handleQueryError(e){return this.error=e.message||"Failed to issue metric query",[]}}E.$inject=["$scope","$injector","templateSrv","uiSegmentSrv"],E.templateUrl="partials/query.editor.html";var _=a("QjE0");class C{constructor(e,t){this.datasourceSrv=void 0,this.showTimescaleDBHelp=void 0,this.onPasswordReset=void 0,this.onPasswordChange=void 0,this.postgresVersions=[{name:"9.3",value:903},{name:"9.4",value:904},{name:"9.5",value:905},{name:"9.6",value:906},{name:"10",value:1e3},{name:"11",value:1100},{name:"12",value:1200}],this.current=e.ctrl.current,this.datasourceSrv=t,this.current.jsonData.sslmode=this.current.jsonData.sslmode||"verify-full",this.current.jsonData.tlsConfigurationMethod=this.current.jsonData.tlsConfigurationMethod||"file-path",this.current.jsonData.postgresVersion=this.current.jsonData.postgresVersion||903,this.showTimescaleDBHelp=!1,this.autoDetectFeatures(),this.onPasswordReset=Object(_.c)(this,_.a.Password),this.onPasswordChange=Object(_.b)(this,_.a.Password),this.tlsModeMapping()}autoDetectFeatures(){this.current.id&&this.datasourceSrv.loadDatasource(this.current.name).then(e=>e.getVersion().then(t=>{(t=Number(t[0].text))>=906&&e.getTimescaleDBVersion().then(e=>{1===e.length&&(this.current.jsonData.timescaledb=!0)});const a=Math.trunc(t/100),s=t%100;let i=String(a);t<1e3&&(i=String(a)+"."+String(s)),Object(r.find)(this.postgresVersions,e=>e.value===t)||this.postgresVersions.push({name:i,value:t}),this.current.jsonData.postgresVersion=t}))}toggleTimescaleDBHelp(){this.showTimescaleDBHelp=!this.showTimescaleDBHelp}tlsModeMapping(){"disable"===this.current.jsonData.sslmode?(this.current.jsonData.tlsAuth=!1,this.current.jsonData.tlsAuthWithCACert=!1,this.current.jsonData.tlsSkipVerify=!0):(this.current.jsonData.tlsAuth=!0,this.current.jsonData.tlsAuthWithCACert=!0,this.current.jsonData.tlsSkipVerify=!1)}}C.$inject=["$scope","datasourceSrv"],C.templateUrl="partials/config.html",a.d(t,"plugin",(function(){return O}));class P{constructor(e){this.annotation=e.ctrl.annotation,this.annotation.rawQuery=this.annotation.rawQuery||"SELECT\n  extract(epoch from time_column) AS time,\n  text_column as text,\n  tags_column as tags\nFROM\n  metric_table\nWHERE\n  $__timeFilter(time_column)\n"}}P.$inject=["$scope"],P.templateUrl="partials/annotations.editor.html";const O=new n.DataSourcePlugin(p).setQueryCtrl(E).setConfigCtrl(C).setAnnotationQueryCtrl(P)},QjE0:function(e,t,a){"use strict";let r;a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return i})),function(e){e.Password="password",e.BasicAuthPassword="basicAuthPassword"}(r||(r={}));const s=(e,t)=>a=>{a.preventDefault(),e.current[t]=void 0,e.current.secureJsonFields[t]=!1,e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=""},i=(e,t)=>a=>{e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=a.currentTarget.value}},"XXK+":function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i}));var r=a("LvDl");class s{constructor(e){this.type=void 0,this.style=void 0,this.label=void 0,this.params=void 0,this.defaultParams=void 0,this.wrapOpen=void 0,this.wrapClose=void 0,this.separator=void 0,this.type=e.type,e.label?this.label=e.label:this.label=this.type[0].toUpperCase()+this.type.substring(1)+":",this.style=e.style,"function"===this.style?(this.wrapOpen="(",this.wrapClose=")",this.separator=", "):(this.wrapOpen=" ",this.wrapClose=" ",this.separator=" "),this.params=e.params,this.defaultParams=e.defaultParams}}class i{constructor(e,t){if(this.part=void 0,this.def=void 0,this.params=void 0,this.label=void 0,this.name=void 0,this.datatype=void 0,this.part=e,this.def=t,!this.def)throw{message:"Could not find sql part "+e.type};this.datatype=e.datatype,e.name?(this.name=e.name,this.label=t.label+" "+e.name):(this.name="",this.label=t.label),e.params=e.params||Object(r.clone)(this.def.defaultParams),this.params=e.params}updateParam(e,t){""===e&&this.def.params[t].optional?this.params.splice(t,1):this.params[t]=e,this.part.params=this.params}}}}]);
//# sourceMappingURL=postgresPlugin.de0e7cb4f02a375bece7.js.map