webpackJsonp([2],{1126:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(111),o=t(60),i=t(242),u=t.n(i),a=t(153),c=(t.n(a),t(240)),s=t.n(c),f=t(152),l=t(1132),p=t(241),d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  query GetUser($user: ID!) {\n    getUser(id: $user) {\n      id\n      username\n      createdAt\n      modifiedAt\n      lastLogin\n    }\n    getRole(id: $user) {\n      id\n      name\n      createdAt\n    }\n  }\n"],["\n  query GetUser($user: ID!) {\n    getUser(id: $user) {\n      id\n      username\n      createdAt\n      modifiedAt\n      lastLogin\n    }\n    getRole(id: $user) {\n      id\n      name\n      createdAt\n    }\n  }\n"]),v=function(e){return{currentView:e.views.currentView,userAuth:e.userAuth}},h=function(e){return Object(o.bindActionCreators)(d({},f),e)},y=u()(b),m={options:function(e){var n=e.userAuth;return{variables:{user:n.id?n.id:""}}},skip:function(e){return!e.isAuthenticated},name:"getCurrentUser",props:function(e){var n=(e.ownProps,e.getCurrentUser),t=n.loading,r=n.getUser,o=n.getRole,i=n.refetch;return{userLoading:t,user:d({},o,r),refetchUser:i}}};n.default=s()(Object(p.a)(),Object(r.connect)(v,h),Object(a.graphql)(y,m))(l.a)},1132:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var u=t(0),a=(t.n(u),t(52),t(246)),c=t(61),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,u=arguments.length-3;if(t||0===u||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===u)t.children=o;else if(u>1){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+3];t.children=c}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),l=s("div",{},"homeView",s(a.a,{},void 0,s("h1",{},void 0,"Full ES2015 ReactJS + Redux + graphQL + Apollo + Bootstrap"),s("h2",{},void 0,"with Hot Reload!!!"),s("h2",{},void 0,"with React Router (Server Side rendered SPA)"),s("h1",{},void 0,"Starter"),s("p",{},void 0,s(c.Link,{className:"btn btn-success btn-lg",to:"/about"},void 0,s("i",{className:"fa fa-info"}),"  go to about")))),p=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),f(n,[{key:"componentDidMount",value:function(){(0,this.props.enterHome)()}},{key:"componentWillUnmount",value:function(){(0,this.props.leaveHome)()}},{key:"render",value:function(){return l}}]),n}(u.PureComponent);n.a=p}});