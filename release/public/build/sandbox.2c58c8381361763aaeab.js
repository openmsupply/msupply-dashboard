(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"5wcm":function(e,t,r){"use strict";r.r(t),r.d(t,"TestStuffPage",(function(){return b})),r.d(t,"getDefaultState",(function(){return m}));var n=r("Obii"),a=r("kDLi"),o=r("ZFWI"),i=r("q1tI"),u=r.n(i),c=r("GLxE"),s=r("9tWQ"),l=r("ZMoe");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(){var e=p(Object(i.useState)(m()),2),t=e[0],r=e[1],o=t.queryOptions,l=t.queryRunner,b=Object(i.useMemo)((function(){return l.getData({withFieldConfig:!0,withTransforms:!0})}),[]),y=Object(c.a)(b);return u.a.createElement("div",{style:{padding:"30px 50px"},className:"page-scrollbar-wrapper"},u.a.createElement("h3",null,"New page"),u.a.createElement("div",null,u.a.createElement(s.a,{options:o,queryRunner:l,onRunQueries:function(){var e,t={from:"now-1h",to:"now"};l.run({queries:o.queries,datasource:o.dataSource.name,timezone:"browser",timeRange:{from:n.dateMath.parse(t.from),to:n.dateMath.parse(t.to),raw:t},maxDataPoints:null!==(e=o.maxDataPoints)&&void 0!==e?e:100,minInterval:o.minInterval})},onOptionsChange:function(e){r(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{queryOptions:e}))}})),y&&u.a.createElement("div",{style:{padding:"16px"}},u.a.createElement(a.GraphNG,{width:1200,height:300,data:y.series,legend:{displayMode:a.LegendDisplayMode.List,placement:"bottom",calcs:[]},timeRange:y.timeRange,timeZone:"browser"}),u.a.createElement("hr",null),u.a.createElement(a.Table,{data:y.series[0],width:1200,height:300})))};function m(){var e={fieldConfig:{defaults:{color:{mode:n.FieldColorModeId.PaletteClassic}},overrides:[]},replaceVariables:function(e){return e},theme:o.a.theme},t={getTransformations:function(){return[]},getFieldOverrideOptions:function(){return e}};return{queryRunner:new l.a(t),queryOptions:{queries:[],dataSource:{name:"gdev-testdata"},maxDataPoints:100}}}t.default=b},GLxE:function(e,t,r){"use strict";var n=r("q1tI"),a="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;t.a=function(e,t){var r=Object(n.useState)(t),o=r[0],i=r[1];return a((function(){var t=e.subscribe(i);return function(){return t.unsubscribe()}}),[e]),o}}}]);
//# sourceMappingURL=sandbox.2c58c8381361763aaeab.js.map