(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{BLAY:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"DataSourceDashboards",function(){return h});var r=n("mrSG"),a=n("q1tI"),o=n.n(a),u=n("0cfB"),i=n("/MKj"),c=n("ZGyg"),s=n("vHOe"),d=n("lzJ5"),l=n("X+V3"),p=n("5BCB"),m=n("jGYO"),f=n("J4KJ"),b=n("frIo"),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onImport=function(t,n){var r=e.props,a=r.dataSource,o=r.importDashboard,u={pluginId:t.pluginId,path:t.path,overwrite:n,inputs:[]};a&&u.inputs.push({name:"*",type:"datasource",pluginId:a.type,value:a.name}),o(u,t.title)},e.onRemove=function(t){e.props.removeDashboard(t.importedUri)},e}return r.c(e,t),e.prototype.componentDidMount=function(){return r.b(this,void 0,void 0,function(){var t,e,n;return r.d(this,function(r){switch(r.label){case 0:return t=this.props,e=t.loadDataSource,n=t.pageId,[4,e(n)];case 1:return r.sent(),this.props.loadPluginDashboards(),[2]}})})},e.prototype.render=function(){var t=this,e=this.props,n=e.dashboards,r=e.navModel,a=e.isLoading;return o.a.createElement(c.a,{navModel:r},o.a.createElement(c.a.Contents,{isLoading:a},o.a.createElement(s.a,{dashboards:n,onImport:function(e,n){return t.onImport(e,n)},onRemove:function(e){return t.onRemove(e)}})))},e}(a.PureComponent);var v={importDashboard:f.i,loadDataSource:p.h,loadPluginDashboards:m.b,removeDashboard:f.k};e.default=Object(u.hot)(t)(Object(i.b)(function(t){var e=Object(l.a)(t.location);return{navModel:Object(d.a)(t.navIndex,"datasource-dashboards-"+e),pageId:e,dashboards:t.plugins.dashboards,dataSource:Object(b.a)(t.dataSources,e),isLoading:t.plugins.isLoadingPluginDashboards}},v)(h))}.call(this,n("3UD+")(t))},"X+V3":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a});var r=function(t){return t.routeParams.id},a=function(t){return t.routeParams.page}},frIo:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u}),n.d(e,"g",function(){return i}),n.d(e,"f",function(){return c}),n.d(e,"e",function(){return s});var r=function(t){var e=new RegExp(t.searchQuery,"i");return t.dataSources.filter(function(t){return e.test(t.name)||e.test(t.database)})},a=function(t){var e=new RegExp(t.dataSourceTypeSearchQuery,"i");return t.dataSourceTypes.filter(function(t){return e.test(t.name)})},o=function(t,e){return t.dataSource.id===parseInt(e,10)?t.dataSource:{}},u=function(t,e){return t.dataSourceMeta.id===e?t.dataSourceMeta:{}},i=function(t){return t.searchQuery},c=function(t){return t.layoutMode},s=function(t){return t.dataSourcesCount}},vHOe:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r);e.a=function(t){var e=t.dashboards,n=t.onImport,r=t.onRemove;return a.a.createElement("table",{className:"filter-table"},a.a.createElement("tbody",null,e.map(function(t,e){return a.a.createElement("tr",{key:t.dashboardId+"-"+e},a.a.createElement("td",{className:"width-1"},a.a.createElement("i",{className:"gicon gicon-dashboard"})),a.a.createElement("td",null,t.imported?a.a.createElement("a",{href:t.importedUrl},t.title):a.a.createElement("span",null,t.title)),a.a.createElement("td",{style:{textAlign:"right"}},t.imported?a.a.createElement("button",{className:"btn btn-secondary btn-small",onClick:function(){return n(t,!0)}},function(t){return t.revision!==t.importedRevision?"Update":"Re-import"}(t)):a.a.createElement("button",{className:"btn btn-secondary btn-small",onClick:function(){return n(t,!1)}},"Import"),t.imported&&a.a.createElement("button",{className:"btn btn-danger btn-small",onClick:function(){return r(t)}},a.a.createElement("i",{className:"fa fa-trash"}))))})))}}}]);
//# sourceMappingURL=DataSourceDashboards.2e73c632986777083d40.js.map