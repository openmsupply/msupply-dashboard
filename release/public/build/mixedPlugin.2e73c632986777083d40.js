(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{CaV2:function(t,e,a){"use strict";a.r(e);var r=a("mrSG"),n=a("BkRI"),i=a.n(n),u=a("bt/X"),o=a.n(u),c=a("F/XL"),s=a("0/uQ"),d=a("p0ib"),f=a("xMyE"),p=a("Obii"),g=a("kDLi"),b=a("t8hP"),h=a("psW0"),v=a("67Y/"),l=function(t){function e(e){return t.call(this,e)||this}return r.c(e,t),e.prototype.query=function(t){var e=t.targets.filter(function(t){return"-- Mixed --"!==t.datasource});if(!e.length)return Object(c.a)({data:[]});var a=o()(e,"datasource"),n=[],u=0,g=function(e){var o=a[e],d=o[0].datasource,g=Object(s.a)(Object(b.getDataSourceSrv)().get(d)).pipe(Object(h.a)(function(e){var a=i()(t),n=o.slice();if(e.meta.hiddenQueries||(n=n.filter(function(t){return!t.hide})),a.targets=n,a.requestId=""+d+(a.requestId||""),0===a.targets.length)return Object(c.a)({data:[],key:a.requestId});u++;var g=!1;return Object(s.a)(e.query(a)).pipe(Object(f.a)(function(t){g||t.state===p.LoadingState.Streaming||t.state===p.LoadingState.Loading||(u--,g=!0)},function(){g||(g=!0,u--)}),Object(v.a)(function(t){return r.a({},t,{data:t.data||[],state:0===u?p.LoadingState.Done:p.LoadingState.Loading,key:""+d+(t.key||"")})}))}));n.push(g)};for(var l in a)g(l);return d.a.apply(void 0,r.h(n))},e.prototype.testDatasource=function(){return Promise.resolve({})},e}(g.DataSourceApi);a.d(e,"MixedDatasource",function(){return l}),a.d(e,"Datasource",function(){return l})}}]);
//# sourceMappingURL=mixedPlugin.2e73c632986777083d40.js.map