(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Xzuj:function(t,e,n){"use strict";n.r(e);var o,r,a,i=n("q1tI"),s=n("Obii"),p=n("i8i4"),l=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){var e,n,o,r={};if("html"===t)o=document.createElement("div");else{if("svg"!==t)throw new Error('Invalid element type "'+t+'" for createPortalNode: must be "html" or "svg".');o=document.createElementNS("http://www.w3.org/2000/svg","g")}var a={element:o,elementType:t,setPortalProps:function(t){r=t},getInitialPortalProps:function(){return r},mount:function(o,r){if(r!==n){if(a.unmount(),o!==e&&!function(t,e){if("html"===e)return t instanceof HTMLElement;if("svg"===e)return t instanceof SVGElement;throw new Error('Unrecognized element type "'+e+'" for validateElementType.')}(o,t))throw new Error('Invalid element type for portal: "'+t+'" portalNodes must be used with '+t+" elements, but OutPortal is within <"+o.tagName+">.");o.replaceChild(a.element,r),e=o,n=r}},unmount:function(t){t&&t!==n||e&&n&&(e.replaceChild(n,a.element),e=void 0,n=void 0)}};return a},u=function(t){function e(e){var n=t.call(this,e)||this;return n.addPropsChannel=function(){Object.assign(n.props.node,{setPortalProps:function(t){n.setState({nodeProps:t})}})},n.state={nodeProps:n.props.node.getInitialPortalProps()},n}return l(e,t),e.prototype.componentDidMount=function(){this.addPropsChannel()},e.prototype.componentDidUpdate=function(){this.addPropsChannel()},e.prototype.render=function(){var t=this,e=this.props,n=e.children,o=e.node;return p.createPortal(i.Children.map(n,(function(e){return i.isValidElement(e)?i.cloneElement(e,t.state.nodeProps):e})),o.element)},e}(i.PureComponent),d=function(t){function e(e){var n=t.call(this,e)||this;return n.placeholderNode=i.createRef(),n.passPropsThroughPortal(),n}return l(e,t),e.prototype.passPropsThroughPortal=function(){var t=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(t)},e.prototype.componentDidMount=function(){var t=this.props.node;this.currentPortalNode=t;var e=this.placeholderNode.current,n=e.parentNode;t.mount(n,e),this.passPropsThroughPortal()},e.prototype.componentDidUpdate=function(){var t=this.props.node;this.currentPortalNode&&t!==this.currentPortalNode&&(this.currentPortalNode.unmount(this.placeholderNode.current),this.currentPortalNode=t);var e=this.placeholderNode.current,n=e.parentNode;t.mount(n,e),this.passPropsThroughPortal()},e.prototype.componentWillUnmount=function(){this.props.node.unmount(this.placeholderNode.current)},e.prototype.render=function(){return i.createElement("div",{ref:this.placeholderNode})},e}(i.PureComponent),h=c.bind(null,"html"),m=(c.bind(null,"svg"),n("ZGyg")),f=n("okuo"),g=n("Vw/f"),P=n("lJbD"),v=n("HJRA"),b=n("QcpB"),j=n("nKUr");function y(t){return t?t.type!==s.PluginType.app?"Plugin must be an app":t.enabled?null:"Application Not Enabled":"Unknown Plugin"}n.d(e,"getAppPluginPageError",(function(){return y}));class N extends i.Component{constructor(t){super(t),this.onNavChanged=t=>{this.setState({nav:t})},this.state={loading:!0,portalNode:h()}}shouldComponentUpdate(t){return t.location.pathname.startsWith("/a/")}async loadPluginSettings(){const{params:t}=this.props.match;try{const e=await Object(f.a)(t.pluginId).then(t=>{const e=y(t);return e?(v.a.emit(s.AppEvents.alertError,[e]),this.setState({nav:Object(P.b)(e)}),null):Object(g.a)(t)});this.setState({plugin:e,loading:!1,nav:void 0})}catch(t){this.setState({plugin:null,loading:!1,nav:Object(P.a)()})}}componentDidMount(){this.loadPluginSettings()}componentDidUpdate(t){const{params:e}=this.props.match;t.match.params.pluginId!==e.pluginId&&(this.setState({loading:!0}),this.loadPluginSettings())}render(){const{loading:t,plugin:e,nav:n,portalNode:o}=this.state;return e&&!e.root?r||(r=Object(j.jsx)("div",{children:"No Root App"})):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{node:o,children:e&&e.root&&Object(j.jsx)(e.root,{meta:e.meta,basename:this.props.match.url,onNavChanged:this.onNavChanged,query:this.props.queryParams,path:this.props.location.pathname})}),n?Object(j.jsx)(m.a,{navModel:n,children:Object(j.jsx)(m.a.Contents,{isLoading:t,children:Object(j.jsx)(d,{node:o})})}):Object(j.jsxs)(m.a,{children:[Object(j.jsx)(d,{node:o}),t&&(a||(a=Object(j.jsx)(b.a,{})))]})]})}}e.default=N}}]);
//# sourceMappingURL=AppRootPage.17511e2bf08b06f121f8.js.map