(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rtU1:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"FolderPermissions",function(){return P});var i=t("mrSG"),o=t("q1tI"),s=t.n(o),r=t("0cfB"),a=t("/MKj"),d=t("ZGyg"),l=t("kDLi"),c=t("BVom"),m=t("lzJ5"),p=t("5gaU"),u=t("v2PB"),f=t("3p3q"),h=t("wobk"),g=t("QzbV"),P=function(e){function n(n){var t=e.call(this,n)||this;return t.onOpenAddPermissions=function(){t.setState({isAdding:!0})},t.onRemoveItem=function(e){t.props.removeFolderPermission(e)},t.onPermissionChanged=function(e,n){t.props.updateFolderPermission(e,n)},t.onAddPermission=function(e){return t.props.addFolderPermission(e)},t.onCancelAddPermission=function(){t.setState({isAdding:!1})},t.state={isAdding:!1},t}return i.c(n,e),n.prototype.componentDidMount=function(){this.props.getFolderByUid(this.props.folderUid),this.props.getFolderPermissions(this.props.folderUid)},n.prototype.render=function(){var e=this.props,n=e.navModel,t=e.folder,i=this.state.isAdding;if(0===t.id)return s.a.createElement(d.a,{navModel:n},s.a.createElement(d.a.Contents,{isLoading:!0},s.a.createElement("span",null)));var o={title:t.title,url:t.url,id:t.id};return s.a.createElement(d.a,{navModel:n},s.a.createElement(d.a.Contents,null,s.a.createElement("div",{className:"page-action-bar"},s.a.createElement("h3",{className:"page-sub-heading"},"Folder Permissions"),s.a.createElement(l.Tooltip,{placement:"auto",content:s.a.createElement(g.a,null)},s.a.createElement("div",{className:"page-sub-heading-icon"},s.a.createElement("i",{className:"gicon gicon-question gicon--has-hover"}))),s.a.createElement("div",{className:"page-action-bar__spacer"}),s.a.createElement("button",{className:"btn btn-primary pull-right",onClick:this.onOpenAddPermissions,disabled:i},"Add Permission")),s.a.createElement(c.a,{in:i},s.a.createElement(h.a,{onAddPermission:this.onAddPermission,onCancel:this.onCancelAddPermission})),s.a.createElement(f.a,{items:t.permissions,onRemoveItem:this.onRemoveItem,onPermissionChanged:this.onPermissionChanged,isFetching:!1,folderInfo:o})))},n}(o.PureComponent),v={getFolderByUid:p.d,getFolderPermissions:p.e,updateFolderPermission:p.i,removeFolderPermission:p.f,addFolderPermission:p.b};n.default=Object(r.hot)(e)(Object(a.b)(function(e){var n=e.location.routeParams.uid;return{navModel:Object(m.a)(e.navIndex,"folder-permissions-"+n,Object(u.b)(1)),folderUid:n,folder:e.folder}},v)(P))}.call(this,t("3UD+")(e))}}]);
//# sourceMappingURL=FolderPermissions.2e73c632986777083d40.js.map