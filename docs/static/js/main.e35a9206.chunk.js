(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{136:function(e,t){t.BANNERIMGS={home:"jcfx.jpg",learn:"xxbj.jpg",aboutMe:"grjl.jpg",tools:"sygj.jpg"}},148:function(e,t,a){e.exports=a(269)},153:function(e,t,a){},157:function(e,t,a){},166:function(e,t,a){},245:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),l=(a(153),a(38)),i=a(44),s=(a(154),a(67)),u=(a(109),a(58)),m=(a(157),a(158),a(145)),p=(a(86),a(4)),h=(a(162),a(140)),d=(a(271),a(59)),g=a(24),f=a(25),b=a(27),v=a(26),E=a(28),y=a(136),j=(a(166),u.a.Header),O=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).state={current:"home"},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state.current,a=r.a.createElement(d.a,{mode:"horizontal",defaultSelectedKeys:[t],onSelect:function(t){var a=t.key;e.setState({current:a})}},r.a.createElement(d.a.Item,{key:"home"},r.a.createElement(l.b,{to:"/"},"\u6559\u7a0b\u5206\u4eab")),r.a.createElement(d.a.Item,{key:"learn"},r.a.createElement(l.b,{to:"/learn"},"\u5b66\u4e60\u7b14\u8bb0")),r.a.createElement(d.a.Item,{key:"aboutMe"},r.a.createElement(l.b,{to:"/aboutMe"},"\u4e2a\u4eba\u7b80\u5386")),r.a.createElement(d.a.Item,{key:"tools"},r.a.createElement(l.b,{to:"/tools"},"\u5b9e\u7528\u5de5\u5177")));return r.a.createElement("div",{className:"commonHeader"},r.a.createElement(j,{id:"headNav",style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement("div",{className:"nav-logo-wrap"},r.a.createElement(h.a,{size:40,src:"".concat("","avatar.jpg")})),r.a.createElement("div",{className:"nav-list-wrap"},a),r.a.createElement(m.a,{overlay:a,trigger:["click"]},r.a.createElement(p.a,{type:"menu"}))),r.a.createElement("img",{alt:"",src:""+y.BANNERIMGS[t]}))}}]),t}(n.Component),w=a(55),k=a(82),C=a(141);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var x=a.n(C).a.create({baseURL:w.baseUrl,timeout:5e4});x.interceptors.request.use((function(e){return e}),(function(e){console.error("error:",e),Promise.reject(e)})),x.interceptors.response.use((function(e){return e}),(function(e){return console.error("error:".concat(e)),Promise.reject(e)}));var z=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){Object(k.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},x),_=(a(270),a(83)),D=(a(245),function(e){var t=e.type,a=e.text;return r.a.createElement("span",null,r.a.createElement(p.a,{type:t,style:{marginRight:8}}),a)});D.defaultProps={text:0};var N=function(e){var t=e.listData,a=e.pageSize;return r.a.createElement(_.a,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:a},dataSource:t,renderItem:function(e){return r.a.createElement(_.a.Item,{key:e.id,actions:[r.a.createElement(D,{type:"star-o",text:e.favorite_sum,key:"list-vertical-star-o"}),r.a.createElement(D,{type:"like-o",text:e.like_sum,key:"list-vertical-like-o"}),r.a.createElement(D,{type:"message",text:e.comment_sum,key:"list-vertical-message"})],extra:r.a.createElement("img",{alt:"logo",src:"".concat("","testImg.jpg")})},r.a.createElement(_.a.Item.Meta,{title:r.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer"},e.title),description:e.description}))}})};N.defaultProps={listData:[],pageSize:10};var P=N,I=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).state={listData:[]},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.getDateList()}},{key:"getDateList",value:function(){var e=this;z.post(w.postGetList).then((function(t){200===t.status&&t.data&&t.data.length&&e.setState({listData:t.data.map((function(e){return{id:e.id,href:"http://www.baidu.com",title:e.title,image:e.image,description:e.desc,content:e.content,favorite_sum:e.favorite_sum,like_sum:e.like_sum,comment_sum:e.comment_sum}}))})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.listData;return r.a.createElement("div",null,r.a.createElement(P,{listData:e,pageSize:6}))}}]),t}(n.Component),L=function(e){function t(){return Object(g.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"\u5b66\u4e60\u7b14\u8bb0")}}]),t}(n.Component),M=function(e){function t(){return Object(g.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"\u4e2a\u4eba\u7b80\u5386")}}]),t}(n.Component),B=function(e){function t(){return Object(g.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"\u5b9e\u7528\u5de5\u5177")}}]),t}(n.Component),A=u.a.Content,G=u.a.Footer,R=function(e){var t=e.match;return r.a.createElement(u.a,{id:"defaultLayout"},r.a.createElement(O,null),r.a.createElement(A,null,r.a.createElement("div",{className:"mainCon"},r.a.createElement(i.a,{path:t.url,component:I,exact:!0}),r.a.createElement(i.a,{path:"".concat(t.url,"learn"),component:L}),r.a.createElement(i.a,{path:"".concat(t.url,"aboutMe"),component:M}),r.a.createElement(i.a,{path:"".concat(t.url,"tools"),component:B}))),r.a.createElement(G,{style:{textAlign:"center"}},r.a.createElement("div",null,r.a.createElement("a",{href:"https://tongxuelu.zhupengliang.cn/",target:"_blank",rel:"noopener noreferrer"},"Classmates"),r.a.createElement(s.a,{type:"vertical"}),r.a.createElement("a",{href:"https://www.w3school.com.cn/",target:"_blank",rel:"noopener noreferrer"},"w3school"),r.a.createElement(s.a,{type:"vertical"}),r.a.createElement("a",{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer"},"ant.design"),r.a.createElement(s.a,{type:"vertical"}),r.a.createElement("a",{href:"https://docs.nestjs.com",target:"_blank",rel:"noopener noreferrer"},"NestJS Documentation"),r.a.createElement(s.a,{type:"vertical"}),r.a.createElement(l.b,{to:"/login"},"manager")),"zpl \xa92019 Created by Ant Design"))},F=(a(258),a(144)),J=(a(68),a(20)),U=(a(260),a(107)),H=(a(262),a(60)),W=a(57),$=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).state={email:"",password:""},a.login=a.login.bind(Object(W.a)(a)),a.handleOk=a.handleOk.bind(Object(W.a)(a)),a.handleChange=a.handleChange.bind(Object(W.a)(a)),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"login",value:function(e){var t=this,a=e.email,n=e.password,r=this.props,o=r.handleCancel,c=r.loginSuccess,l=r.loginFailure;z.post(w.postLogin,{email:a,password:n},{withCredentials:!0}).then((function(e){if(200===e.status&&0===e.data.code){c(e.data);var a={_id:e.data.data.id,name:e.data.data.name,avatar:e.data.data.avatar};window.sessionStorage.userInfo=JSON.stringify(a),H.a.success(e.data.message,1),o(),t.setState({email:"",password:""})}else l(e.data.message),H.a.error(e.data.message,1)})).catch((function(e){console.log(e)}))}},{key:"handleOk",value:function(){var e=this.state,t=e.email,a=e.password,n=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");t?n.test(t)?a?this.login(this.state):H.a.warn("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"):H.a.warn("\u8bf7\u8f93\u5165\u683c\u5f0f\u6b63\u786e\u7684\u90ae\u7bb1\uff01"):H.a.warn("\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01")}},{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.handleCancel,o=this.state,c=o.email,l=o.password;return r.a.createElement(F.a,{title:"\u767b\u5f55",style:{top:"25%"},visible:a,onCancel:n,width:400,footer:null},r.a.createElement("div",{className:"login-input"},r.a.createElement(U.a,{style:{marginBottom:20},prefix:r.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),name:"email",placeholder:"email",value:c,onChange:this.handleChange}),r.a.createElement(U.a,{style:{marginBottom:40},prefix:r.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",name:"password",placeholder:"Password",value:l,onChange:this.handleChange})),r.a.createElement("div",{className:"login-submit"},r.a.createElement(J.a,{style:{width:"100%",marginBottom:"20px"},type:"primary",onClick:function(){e.handleOk()}},"\u767b\u5f55")))}}]),t}(n.Component);$.defaultProps={visible:!1,handleCancel:function(){},loginSuccess:function(){},loginFailure:function(){}};var q=function(){return r.a.createElement($,{visible:!0,handleCancel:function(){window.location.href="/"},loginSuccess:function(){},loginFailure:function(){}})};var K=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/login",component:q}),r.a.createElement(i.a,{path:"/",component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,a){t.baseUrl="/api",t.postLogin="/login",t.postGetList="/getList",t.postGetContent="/getContent"}},[[148,1,2]]]);
//# sourceMappingURL=main.e35a9206.chunk.js.map