(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{gcd9:function(e,t,n){"use strict";n.r(t);var r,a=n("Obii");!function(e){e.RandomWalk="randomWalk",e.LiveMeasurements="measurements"}(r||(r={}));var o,i={refId:"A",queryType:r.RandomWalk};!function(e){e.Dashboard="dashboard",e.Tags="tags"}(o||(o={}));var u=n("t8hP"),l=n("p0ib"),s=n("F/XL"),c=n("67Y/"),f=n("9Z1F");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=100,d=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,v(t).call(this,e))}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(i=[{key:"query",value:function(e){var t=[],n=!0,o=!1,i=void 0;try{for(var c,f=e.targets[Symbol.iterator]();!(n=(c=f.next()).done);n=!0){var p=c.value;if(!p.hide)if(p.queryType===r.LiveMeasurements){var m=p.channel,y=p.measurements;m&&t.push(Object(u.getLiveMeasurementsObserver)({scope:a.LiveChannelScope.Grafana,namespace:"measurements",path:m},"".concat(e.requestId,".").concat(b++),y))}else t.push(g(e))}}catch(e){o=!0,i=e}finally{try{n||null==f.return||f.return()}finally{if(o)throw i}}return 1===t.length?t[0]:t.length>1?l.a.apply(void 0,t):Object(s.a)()}},{key:"metricFindQuery",value:function(e){return Promise.resolve([])}},{key:"annotationQuery",value:function(e){var t,n=Object(u.getTemplateSrv)(),r=e.annotation,a={from:e.range.from.valueOf(),to:e.range.to.valueOf(),limit:r.limit,tags:r.tags,matchAny:r.matchAny};if(r.type===o.Dashboard){if(!e.dashboard.id)return Promise.resolve([]);a.dashboardId=e.dashboard.id,delete a.tags}else{var i=function(){if(!Array.isArray(r.tags)||0===r.tags.length)return{v:Promise.resolve([])};var e=[],t=!0,o=!1,i=void 0;try{for(var u,l=a.tags[Symbol.iterator]();!(t=(u=l.next()).done);t=!0){var s=u.value,c=n.replace(s,{},(function(e){return"string"==typeof e?e:e.join("__delimiter__")})),f=!0,p=!1,m=void 0;try{for(var y,v=c.split("__delimiter__")[Symbol.iterator]();!(f=(y=v.next()).done);f=!0){var h=y.value;e.push(h)}}catch(e){p=!0,m=e}finally{try{f||null==v.return||v.return()}finally{if(p)throw m}}}}catch(e){o=!0,i=e}finally{try{t||null==l.return||l.return()}finally{if(o)throw i}}a.tags=e}();if("object"===p(i))return i.v}return Object(u.getBackendSrv)().get("/api/annotations",a,"grafana-data-source-annotations-".concat(r.name,"-").concat(null===(t=e.dashboard)||void 0===t?void 0:t.id))}},{key:"testDatasource",value:function(){return Promise.resolve()}}])&&m(n.prototype,i),c&&m(n,c),t}(a.DataSourceApi);function g(e){var t=e.intervalMs,n=e.maxDataPoints,r=e.range,a=e.requestId,o={intervalMs:t,maxDataPoints:n,from:r.from.valueOf(),to:r.to.valueOf()};return Object(u.getBackendSrv)().fetch({url:"/api/tsdb/testdata/random-walk",method:"GET",params:o,requestId:a}).pipe(Object(c.a)((function(e){return Object(u.toDataQueryResponse)(e)})),Object(f.a)((function(e){return Object(s.a)(Object(u.toDataQueryResponse)(e))})))}var O=n("la6v"),w=n.n(O),j=n("q1tI"),S=n.n(j),C=n("kDLi");function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){function t(){var e,n;k(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=D(this,(e=M(t)).call.apply(e,[this].concat(o)))).queryTypes=[{label:"Random Walk",value:r.RandomWalk,description:"Random signal within the selected time range"},{label:"Live Measurements",value:r.LiveMeasurements,description:"Stream real-time measurements from Grafana"}],n.onQueryTypeChange=function(e){var t=n.props,r=t.onChange,a=t.query,o=t.onRunQuery;r(T({},a,{queryType:e.value})),o()},n.onChannelChange=function(e){var t=n.props,r=t.onChange,a=t.query,o=t.onRunQuery;r(T({},a,{channel:null==e?void 0:e.value})),o()},n.onMeasurementNameChanged=function(e){var t=n.props,r=t.onChange,a=t.query,o=t.onRunQuery;r(T({},a,{measurements:T({},a.measurements,{name:null==e?void 0:e.value})})),o()},n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),n=t,(o=[{key:"renderMeasurementsQuery",value:function(){var e=this.props.query,t=e.channel,n=e.measurements,r=[],o=r.find((function(e){return e.value===t}));t&&!o&&(o={value:t,label:t,description:"Connected to ".concat(t)},r.push(o)),n||(n={});var i=[{value:"",label:"All measurements",description:"Show every measurement streamed to this channel"}],l=void 0;if(t){var s=!1;if(l=Object(u.getLiveMeasurements)({scope:a.LiveChannelScope.Grafana,namespace:"measurements",path:t})){var c=!0,f=!1,p=void 0;try{for(var m,y=l.getDistinctNames()[Symbol.iterator]();!(c=(m=y.next()).done);c=!0){var v=m.value;i.push({value:v,label:v}),v===n.name&&(s=!0)}}catch(e){f=!0,p=e}finally{try{c||null==y.return||y.return()}finally{if(f)throw p}}}else console.log("NO INFO for",t);n.name&&!s&&i.push({label:n.name,value:n.name,description:"Frames with name ".concat(n.name)})}return S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"gf-form"},S.a.createElement(C.InlineField,{label:"Channel",grow:!0,labelWidth:12},S.a.createElement(C.Select,{options:r,value:o||"",onChange:this.onChannelChange,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"Select measurements channel",isClearable:!0,noOptionsMessage:"Enter channel name",formatCreateLabel:function(e){return"Connect to: ".concat(e)}}))),t&&S.a.createElement("div",{className:"gf-form"},S.a.createElement(C.InlineField,{label:"Measurement",grow:!0,labelWidth:12},S.a.createElement(C.Select,{options:i,value:i.find((function(e){var t;return e.value===(null===(t=n)||void 0===t?void 0:t.name)}))||i[0],onChange:this.onMeasurementNameChanged,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"Filter by name",isClearable:!0,noOptionsMessage:"Filter by name",formatCreateLabel:function(e){return"Show: ".concat(e)},isSearchable:!0}))),S.a.createElement(C.FeatureInfoBox,{title:"Grafana Live - Measurements",featureState:a.FeatureState.alpha},S.a.createElement("p",null,"This supports real-time event streams in Grafana core. This feature is under heavy development. Expect the interfaces and structures to change as this becomes more production ready.")))}},{key:"render",value:function(){var e=w()(this.props.query,i);return S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"gf-form"},S.a.createElement(C.InlineField,{label:"Query type",grow:!0,labelWidth:12},S.a.createElement(C.Select,{options:this.queryTypes,value:this.queryTypes.find((function(t){return t.value===e.queryType}))||this.queryTypes[0],onChange:this.onQueryTypeChange}))),e.queryType===r.LiveMeasurements&&this.renderMeasurementsQuery())}}])&&q(n.prototype,o),l&&q(n,l),t}(j.PureComponent);var Q=[{text:"Dashboard",value:o.Dashboard},{text:"Tags",value:o.Tags}],R=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.types=Q,this.annotation.type=this.annotation.type||o.Tags,this.annotation.limit=this.annotation.limit||100};R.templateUrl="partials/annotations.editor.html",n.d(t,"plugin",(function(){return x}));var x=new a.DataSourcePlugin(d).setQueryEditor(L).setAnnotationQueryCtrl(R)}}]);
//# sourceMappingURL=grafanaPlugin.21c7add3cfafde5bec67.js.map