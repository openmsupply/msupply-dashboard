(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6jYb":function(e,t,a){"use strict";var n=a("mrSG"),r=a("q1tI"),i=a.n(r),c=a("Wu7z"),u=a("EKT6"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.c(t,e),t.prototype.render=function(){var e=this.props,t=e.searchQuery,a=e.layoutMode,r=e.onSetLayoutMode,s=e.linkButton,o=e.setSearchQuery,l=e.target,m={href:s.href};return l&&(m.target=l),i.a.createElement("div",{className:"page-action-bar"},i.a.createElement("div",{className:"gf-form gf-form--grow"},i.a.createElement(u.a,{labelClassName:"gf-form--has-input-icon",inputClassName:"gf-form-input width-20",value:t,onChange:o,placeholder:"Filter by name or type"}),i.a.createElement(c.b,{mode:a,onLayoutModeChanged:function(e){return r(e)}})),i.a.createElement("div",{className:"page-action-bar__spacer"}),i.a.createElement("a",n.a({className:"btn btn-primary"},m),s.title))},t}(r.PureComponent);t.a=s},KFLF:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),c=a.n(i),u=function(e){var t=e.plugin;return r.a.createElement("li",{className:"card-item-wrapper"},r.a.createElement("a",{className:"card-item",href:"plugins/"+t.id+"/"},r.a.createElement("div",{className:"card-item-header"},r.a.createElement("div",{className:"card-item-type"},t.type),t.hasUpdate&&r.a.createElement("div",{className:"card-item-notice"},r.a.createElement("span",{"bs-tooltip":"plugin.latestVersion"},"Update available!"))),r.a.createElement("div",{className:"card-item-body"},r.a.createElement("figure",{className:"card-item-figure"},r.a.createElement("img",{src:t.info.logos.small})),r.a.createElement("div",{className:"card-item-details"},r.a.createElement("div",{className:"card-item-name"},t.name),r.a.createElement("div",{className:"card-item-sub-name"},"By "+t.info.author.name)))))},s=a("Wu7z");t.a=function(e){var t=e.plugins,a=e.layoutMode,n=c()({"card-section":!0,"card-list-layout-grid":a===s.a.Grid,"card-list-layout-list":a===s.a.List});return r.a.createElement("section",{className:n},r.a.createElement("ol",{className:"card-list"},t.map(function(e,t){return r.a.createElement(u,{plugin:e,key:e.name+"-"+t})})))}},mGjS:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"PluginListPage",function(){return f});var n=a("mrSG"),r=a("q1tI"),i=a.n(r),c=a("0cfB"),u=a("/MKj"),s=a("ZGyg"),o=a("6jYb"),l=a("KFLF"),m=a("jGYO"),d=a("lzJ5"),p=a("y6t6"),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.c(t,e),t.prototype.componentDidMount=function(){this.fetchPlugins()},t.prototype.fetchPlugins=function(){return n.b(this,void 0,void 0,function(){return n.d(this,function(e){switch(e.label){case 0:return[4,this.props.loadPlugins()];case 1:return e.sent(),[2]}})})},t.prototype.render=function(){var e=this.props,t=e.hasFetched,a=e.navModel,n=e.plugins,r=e.layoutMode,c=e.setPluginsLayoutMode,u=e.setPluginsSearchQuery,m=e.searchQuery;return i.a.createElement(s.a,{navModel:a},i.a.createElement(s.a.Contents,{isLoading:!t},i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{searchQuery:m,layoutMode:r,onSetLayoutMode:function(e){return c(e)},setSearchQuery:function(e){return u(e)},linkButton:{href:"https://grafana.com/plugins?utm_source=grafana_plugin_list",title:"Find more plugins on Grafana.com"}}),t&&n&&n&&i.a.createElement(l.a,{plugins:n,layoutMode:r}))))},t}(r.PureComponent);var g={loadPlugins:m.c,setPluginsLayoutMode:m.d,setPluginsSearchQuery:m.e};t.default=Object(c.hot)(e)(Object(u.b)(function(e){return{navModel:Object(d.a)(e.navIndex,"plugins"),plugins:Object(p.b)(e.plugins),layoutMode:Object(p.a)(e.plugins),searchQuery:Object(p.c)(e.plugins),hasFetched:e.plugins.hasFetched}},g)(f))}.call(this,a("3UD+")(e))},y6t6:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return i});var n=function(e){var t=new RegExp(e.searchQuery,"i");return e.plugins.filter(function(e){return t.test(e.name)||t.test(e.info.author.name)||t.test(e.info.description)})},r=function(e){return e.searchQuery},i=function(e){return e.layoutMode}}}]);
//# sourceMappingURL=PluginListPage.2e73c632986777083d40.js.map