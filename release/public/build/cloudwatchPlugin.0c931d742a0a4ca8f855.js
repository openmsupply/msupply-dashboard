(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{flAG:function(e,t,n){"use strict";n.r(t);var r=n("KHwQ"),a=n.n(r),i=n("txxJ"),s=n("LvDl"),o=n.n(s),u=function(){function e(e,t,n,r,i){e.init=function(){var t=e.target;t.namespace=t.namespace||"",t.metricName=t.metricName||"",t.statistics=t.statistics||["Average"],t.dimensions=t.dimensions||{},t.period=t.period||"",t.region=t.region||"default",t.id=t.id||"",t.expression=t.expression||"",t.highResolution=t.highResolution||!1,e.regionSegment=n.getSegmentForValue(e.target.region,"select region"),e.namespaceSegment=n.getSegmentForValue(e.target.namespace,"select namespace"),e.metricSegment=n.getSegmentForValue(e.target.metricName,"select metric"),e.dimSegments=o.a.reduce(e.target.dimensions,function(e,t,r){return e.push(n.newKey(r)),e.push(n.newOperator("=")),e.push(n.newKeyValue(t)),e},[]),e.statSegments=o.a.map(e.target.statistics,function(e){return n.getSegmentForValue(e)}),e.ensurePlusButton(e.statSegments),e.ensurePlusButton(e.dimSegments),e.removeDimSegment=n.newSegment({fake:!0,value:"-- remove dimension --"}),e.removeStatSegment=n.newSegment({fake:!0,value:"-- remove stat --"}),o.a.isEmpty(e.target.region)&&(e.target.region="default"),e.onChange||(e.onChange=function(){})},e.getStatSegments=function(){return i.when(o.a.flatten([a.a.copy(e.removeStatSegment),o.a.map(e.datasource.standardStatistics,function(e){return n.getSegmentForValue(e)}),n.getSegmentForValue("pNN.NN")]))},e.statSegmentChanged=function(t,n){t.value===e.removeStatSegment.value?e.statSegments.splice(n,1):t.type="value",e.target.statistics=o.a.reduce(e.statSegments,function(e,t){return t.fake||e.push(t.value),e},[]),e.ensurePlusButton(e.statSegments),e.onChange()},e.ensurePlusButton=function(e){var t=e.length,r=e[Math.max(t-1,0)];r&&"plus-button"===r.type||e.push(n.newPlusButton())},e.getDimSegments=function(t,n){if("operator"===t.type)return i.when([]);var r=e.target,s=i.when([]);if("key"===t.type||"plus-button"===t.type)s=e.datasource.getDimensionKeys(e.target.namespace,e.target.region);else if("value"===t.type){var o=e.dimSegments[n-2].value;delete r.dimensions[o],s=e.datasource.getDimensionValues(r.region,r.namespace,r.metricName,o,r.dimensions)}return s.then(e.transformToSegments(!0)).then(function(n){return"key"===t.type&&n.splice(0,0,a.a.copy(e.removeDimSegment)),n})},e.dimSegmentChanged=function(t,r){e.dimSegments[r]=t,t.value===e.removeDimSegment.value?e.dimSegments.splice(r,3):"plus-button"===t.type&&(e.dimSegments.push(n.newOperator("=")),e.dimSegments.push(n.newFake("select dimension value","value","query-segment-value")),t.type="key",t.cssClass="query-segment-key"),e.syncDimSegmentsWithModel(),e.ensurePlusButton(e.dimSegments),e.onChange()},e.syncDimSegmentsWithModel=function(){for(var t={},n=e.dimSegments.length,r=0;r<n-2;r+=3){var a=e.dimSegments[r],i=e.dimSegments[r+2];i.fake||(t[a.value]=i.value)}e.target.dimensions=t},e.getRegions=function(){return e.datasource.metricFindQuery("regions()").then(function(e){return e.unshift({text:"default"}),e}).then(e.transformToSegments(!0))},e.getNamespaces=function(){return e.datasource.metricFindQuery("namespaces()").then(e.transformToSegments(!0))},e.getMetrics=function(){return e.datasource.metricFindQuery("metrics("+e.target.namespace+","+e.target.region+")").then(e.transformToSegments(!0))},e.regionChanged=function(){e.target.region=e.regionSegment.value,e.onChange()},e.namespaceChanged=function(){e.target.namespace=e.namespaceSegment.value,e.onChange()},e.metricChanged=function(){e.target.metricName=e.metricSegment.value,e.onChange()},e.transformToSegments=function(e){return function(r){var a=o.a.map(r,function(e){return n.newSegment({value:e.text,expandable:e.expandable})});return e&&o.a.each(t.variables,function(e){a.unshift(n.newSegment({type:"template",value:"$"+e.name,expandable:!0}))}),a}},e.init()}return e.$inject=["$scope","templateSrv","uiSegmentSrv","datasourceSrv","$q"],e}();i.c.directive("cloudwatchQueryParameter",function(){return{templateUrl:"public/app/plugins/datasource/cloudwatch/partials/query.parameter.html",controller:u,restrict:"E",scope:{target:"=",datasource:"=",onChange:"&"}}});var c=n("mrSG"),m=n("Obii"),l=n("PbtU"),p=function(e){function t(t,n,r,a,i){var s=e.call(this,t)||this;return s.instanceSettings=t,s.$q=n,s.backendSrv=r,s.templateSrv=a,s.timeSrv=i,s.type="cloudwatch",s.proxyUrl=t.url,s.defaultRegion=t.jsonData.defaultRegion,s.instanceSettings=t,s.standardStatistics=["Average","Maximum","Minimum","Sum","SampleCount"],s}return t.$inject=["instanceSettings","$q","backendSrv","templateSrv","timeSrv"],c.c(t,e),t.prototype.query=function(e){var t=this;(e=a.a.copy(e)).targets=this.expandTemplateVariable(e.targets,e.scopedVars,this.templateSrv);var n=o.a.filter(e.targets,function(e){return(""!==e.id||!0!==e.hide)&&(!!e.region&&!!e.namespace&&!!e.metricName&&!o.a.isEmpty(e.statistics)||e.expression.length>0)}).map(function(n){if(n.region=t.templateSrv.replace(t.getActualRegion(n.region),e.scopedVars),n.namespace=t.templateSrv.replace(n.namespace,e.scopedVars),n.metricName=t.templateSrv.replace(n.metricName,e.scopedVars),n.dimensions=t.convertDimensionFormat(n.dimensions,e.scopedVars),n.statistics=n.statistics.map(function(n){return t.templateSrv.replace(n,e.scopedVars)}),n.period=String(t.getPeriod(n,e)),n.id=t.templateSrv.replace(n.id,e.scopedVars),n.expression=t.templateSrv.replace(n.expression,e.scopedVars),n.statistics.some(function(e){if(0===e.indexOf("p")){var t=/^p\d{2}(?:\.\d{1,2})?$/.exec(e);return!t||t[0]!==e}return!1}))throw{message:"Invalid extended statistics"};return o.a.extend({refId:n.refId,intervalMs:e.intervalMs,maxDataPoints:e.maxDataPoints,datasourceId:t.instanceSettings.id,type:"timeSeriesQuery"},n)});if(o.a.isEmpty(n)){var r=this.$q.defer();return r.resolve({data:[]}),r.promise}var i={from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:n};return this.performTimeSeriesQuery(i)},t.prototype.getPeriod=function(e,t,n){var r,a=this.convertToCloudWatchTime(t.range.from,!1),i=this.convertToCloudWatchTime(t.range.to,!0);n=Math.round((n||Date.now())/1e3);var s=i-a,o=60;return e.period?r=/^\d+$/.test(e.period)?parseInt(e.period,10):l.a.interval_to_seconds(this.templateSrv.replace(e.period,t.scopedVars)):o=r=n-a<=1296e3?"AWS/EC2"===e.namespace?300:60:n-a<=5443200?300:3600,r<1&&(r=1),!e.highResolution&&s/r>=1440&&(r=Math.ceil(s/1440/o)*o),r},t.prototype.performTimeSeriesQuery=function(e){return this.awsRequest("/api/tsdb/query",e).then(function(t){var n,r,a,i,s=[];if(t.results)try{for(var o=c.i(e.queries),u=o.next();!u.done;u=o.next()){var m=u.value,l=t.results[m.refId];if(l)try{for(var p=(a=void 0,c.i(l.series)),g=p.next();!g.done;g=p.next()){var d=g.value,h={target:d.name,datapoints:d.points};l.meta.unit&&(h.unit=l.meta.unit),s.push(h)}}catch(e){a={error:e}}finally{try{g&&!g.done&&(i=p.return)&&i.call(p)}finally{if(a)throw a.error}}}}catch(e){n={error:e}}finally{try{u&&!u.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return{data:s}})},t.prototype.transformSuggestDataFromTable=function(e){return o.a.map(e.results.metricFindQuery.tables[0].rows,function(e){return{text:e[0],value:e[1]}})},t.prototype.doMetricQueryRequest=function(e,t){var n=this,r=this.timeSrv.timeRange();return this.awsRequest("/api/tsdb/query",{from:r.from.valueOf().toString(),to:r.to.valueOf().toString(),queries:[o.a.extend({refId:"metricFindQuery",intervalMs:1,maxDataPoints:1,datasourceId:this.instanceSettings.id,type:"metricFindQuery",subtype:e},t)]}).then(function(e){return n.transformSuggestDataFromTable(e)})},t.prototype.getRegions=function(){return this.doMetricQueryRequest("regions",null)},t.prototype.getNamespaces=function(){return this.doMetricQueryRequest("namespaces",null)},t.prototype.getMetrics=function(e,t){return this.doMetricQueryRequest("metrics",{region:this.templateSrv.replace(this.getActualRegion(t)),namespace:this.templateSrv.replace(e)})},t.prototype.getDimensionKeys=function(e,t){return this.doMetricQueryRequest("dimension_keys",{region:this.templateSrv.replace(this.getActualRegion(t)),namespace:this.templateSrv.replace(e)})},t.prototype.getDimensionValues=function(e,t,n,r,a){return this.doMetricQueryRequest("dimension_values",{region:this.templateSrv.replace(this.getActualRegion(e)),namespace:this.templateSrv.replace(t),metricName:this.templateSrv.replace(n),dimensionKey:this.templateSrv.replace(r),dimensions:this.convertDimensionFormat(a,{})})},t.prototype.getEbsVolumeIds=function(e,t){return this.doMetricQueryRequest("ebs_volume_ids",{region:this.templateSrv.replace(this.getActualRegion(e)),instanceId:this.templateSrv.replace(t)})},t.prototype.getEc2InstanceAttribute=function(e,t,n){return this.doMetricQueryRequest("ec2_instance_attribute",{region:this.templateSrv.replace(this.getActualRegion(e)),attributeName:this.templateSrv.replace(t),filters:n})},t.prototype.getResourceARNs=function(e,t,n){return this.doMetricQueryRequest("resource_arns",{region:this.templateSrv.replace(this.getActualRegion(e)),resourceType:this.templateSrv.replace(t),tags:n})},t.prototype.metricFindQuery=function(e){var t,n,r,a;if(e.match(/^regions\(\)/))return this.getRegions();if(e.match(/^namespaces\(\)/))return this.getNamespaces();var i=e.match(/^metrics\(([^\)]+?)(,\s?([^,]+?))?\)/);if(i)return n=i[1],t=i[3],this.getMetrics(n,t);var s=e.match(/^dimension_keys\(([^\)]+?)(,\s?([^,]+?))?\)/);if(s)return n=s[1],t=s[3],this.getDimensionKeys(n,t);var o=e.match(/^dimension_values\(([^,]+?),\s?([^,]+?),\s?([^,]+?),\s?([^,]+?)(,\s?(.+))?\)/);if(o){t=o[1],n=o[2],r=o[3];var u=o[4];return a={},o[6]&&(a=JSON.parse(this.templateSrv.replace(o[6]))),this.getDimensionValues(t,n,r,u,a)}var c=e.match(/^ebs_volume_ids\(([^,]+?),\s?([^,]+?)\)/);if(c){t=c[1];var m=c[2];return this.getEbsVolumeIds(t,m)}var l=e.match(/^ec2_instance_attribute\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/);if(l){t=l[1];var p=l[2];return a=JSON.parse(this.templateSrv.replace(l[3])),this.getEc2InstanceAttribute(t,p,a)}var g=e.match(/^resource_arns\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/);if(g){t=g[1];var d=g[2],h=JSON.parse(this.templateSrv.replace(g[3]));return this.getResourceARNs(t,d,h)}return this.$q.when([])},t.prototype.annotationQuery=function(e){var t=this,n=e.annotation,r=o.a.map(n.statistics,function(e){return t.templateSrv.replace(e)}),a=n.prefixMatching?"":"300",i=n.period||a;i=parseInt(i,10);var s={prefixMatching:n.prefixMatching,region:this.templateSrv.replace(this.getActualRegion(n.region)),namespace:this.templateSrv.replace(n.namespace),metricName:this.templateSrv.replace(n.metricName),dimensions:this.convertDimensionFormat(n.dimensions,{}),statistics:r,period:i,actionPrefix:n.actionPrefix||"",alarmNamePrefix:n.alarmNamePrefix||""};return this.awsRequest("/api/tsdb/query",{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:[o.a.extend({refId:"annotationQuery",intervalMs:1,maxDataPoints:1,datasourceId:this.instanceSettings.id,type:"annotationQuery"},s)]}).then(function(e){return o.a.map(e.results.annotationQuery.tables[0].rows,function(e){return{annotation:n,time:Date.parse(e[0]),title:e[1],tags:[e[2]],text:e[3]}})})},t.prototype.targetContainsTemplate=function(e){var t=this;return this.templateSrv.variableExists(e.region)||this.templateSrv.variableExists(e.namespace)||this.templateSrv.variableExists(e.metricName)||o.a.find(e.dimensions,function(e,n){return t.templateSrv.variableExists(n)||t.templateSrv.variableExists(e)})},t.prototype.testDatasource=function(){var e=this.defaultRegion;return this.getDimensionValues(e,"AWS/Billing","EstimatedCharges","ServiceName",{}).then(function(){return{status:"success",message:"Data source is working"}})},t.prototype.awsRequest=function(e,t){var n={method:"POST",url:e,data:t};return this.backendSrv.datasourceRequest(n).then(function(e){return e.data})},t.prototype.getDefaultRegion=function(){return this.defaultRegion},t.prototype.getActualRegion=function(e){return"default"===e||o.a.isEmpty(e)?this.getDefaultRegion():e},t.prototype.getExpandedVariables=function(e,t,n,r){var i=o.a.find(n.options,{selected:!0,text:"All"}),s=o.a.filter(n.options,function(e){return i?"All"!==e.text:e.selected}),u=o.a.isArray(n.current.value)?n.current.value.map(function(e){return{text:e,value:e}}):[n.current];return(s.some(function(e){return e.value===u[0].value})||"$__all"===u[0].value?s:u).map(function(i){var s=a.a.copy(e),o={};return o[n.name]=i,s.refId=e.refId+"_"+i.value,s.dimensions[t]=r.replace(s.dimensions[t],o),n.multi&&e.id?s.id=e.id+window.btoa(i.value).replace(/=/g,"0"):s.id=e.id,s})},t.prototype.expandTemplateVariable=function(e,t,n){var r=this;return o.a.chain(e).map(function(e){if(e.id&&e.id.length>0&&e.expression&&e.expression.length>0)return[e];var a=o.a.keyBy(n.variables,"name"),i=o.a.findKey(e.dimensions,function(e){var r=n.getVariableName(e);return n.variableExists(e)&&!o.a.has(t,r)&&a[r].multi});if(i){var s=a[n.getVariableName(e.dimensions[i])];return r.getExpandedVariables(e,i,s,n)}return[e]}).flatten().value()},t.prototype.convertToCloudWatchTime=function(e,t){return o.a.isString(e)&&(e=m.dateMath.parse(e,t)),Math.round(e.valueOf()/1e3)},t.prototype.convertDimensionFormat=function(e,t){var n=this,r={};return o.a.each(e,function(e,a){r[n.templateSrv.replace(a,t)]=n.templateSrv.replace(e,t)}),r},t}(n("kDLi").DataSourceApi),g=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.aliasSyntax="{{metric}} {{stat}} {{namespace}} {{region}} {{<dimension name>}}",r}return t.$inject=["$scope","$injector"],c.c(t,e),t.templateUrl="partials/query.editor.html",t}(n("LzXI").QueryCtrl),d=function(){function e(e,t){this.accessKeyExist=!1,this.secretKeyExist=!1,this.authTypes=[{name:"Access & secret key",value:"keys"},{name:"Credentials file",value:"credentials"},{name:"ARN",value:"arn"}],this.indexPatternTypes=[{name:"No pattern",value:void 0},{name:"Hourly",value:"Hourly",example:"[logstash-]YYYY.MM.DD.HH"},{name:"Daily",value:"Daily",example:"[logstash-]YYYY.MM.DD"},{name:"Weekly",value:"Weekly",example:"[logstash-]GGGG.WW"},{name:"Monthly",value:"Monthly",example:"[logstash-]YYYY.MM"},{name:"Yearly",value:"Yearly",example:"[logstash-]YYYY"}],this.regions=["ap-northeast-1","ap-northeast-2","ap-northeast-3","ap-south-1","ap-southeast-1","ap-southeast-2","ca-central-1","cn-north-1","cn-northwest-1","eu-central-1","eu-north-1","eu-west-1","eu-west-2","eu-west-3","me-south-1","sa-east-1","us-east-1","us-east-2","us-gov-east-1","us-gov-west-1","us-iso-east-1","us-isob-east-1","us-west-1","us-west-2"],this.current.jsonData.timeField=this.current.jsonData.timeField||"@timestamp",this.current.jsonData.authType=this.current.jsonData.authType||"credentials",this.accessKeyExist=this.current.secureJsonFields.accessKey,this.secretKeyExist=this.current.secureJsonFields.secretKey,this.datasourceSrv=t,this.getRegions()}return e.$inject=["$scope","datasourceSrv"],e.prototype.resetAccessKey=function(){this.accessKeyExist=!1},e.prototype.resetSecretKey=function(){this.secretKeyExist=!1},e.prototype.getRegions=function(){var e=this;this.datasourceSrv.loadDatasource(this.current.name).then(function(e){return e.getRegions()}).then(function(t){e.regions=o.a.map(t,"value")},function(e){console.error("failed to get latest regions")})},e.templateUrl="partials/config.html",e}();n.d(t,"AnnotationsQueryCtrl",function(){return h}),n.d(t,"Datasource",function(){return p}),n.d(t,"QueryCtrl",function(){return g}),n.d(t,"ConfigCtrl",function(){return d});var h=function(){function e(){}return e.templateUrl="partials/annotations.editor.html",e}()}}]);
//# sourceMappingURL=cloudwatchPlugin.0c931d742a0a4ca8f855.js.map