/*! For license information please see app.83790fee5bb31130106c.js.LICENSE.txt */
(self.webpackChunkspeech_to_text=self.webpackChunkspeech_to_text||[]).push([[0],{855:(n,t,e)=>{"use strict";var o=e(219),c=e(1042),i=e(859),r=e(2);const s="btnWrap",a="btn";var u=e(0);const l=function(n){var t=n.handleChange,e=n.status,o=n.loading;return(0,u.jsx)("div",{className:s,children:(0,u.jsx)("button",{onClick:function(){t(!e)},className:a,disabled:o,children:function(){if(o)return"设备加载中……";var n="语音转文";return e?"结束".concat(n):"开始".concat(n)}()})})};var d=e(1047),v=e(10);const h=function(){var n=function(){var n=(0,r.useState)([]),t=(0,c.Z)(n,2),e=t[0],o=t[1],i=(0,r.useState)(!1),s=(0,c.Z)(i,2),a=s[0],u=s[1],l=(0,r.useState)(!1),h=(0,c.Z)(l,2),f=h[0],p=h[1],g=(0,r.useRef)(a);return(0,r.useInsertionEffect)((function(){g.current=a}),[a]),(0,r.useEffect)((function(){var n,t=window.SpeechRecognition||window.webkitSpeechRecognition;return a&&function e(){t?((n=new t).lang="zh",n.start(),n.onaudiostart=function(n){v.log("onaudiostart",n),p(!1)},n.onaudioend=function(t){v.log("onaudioend",t),n.stop(),p(!1),g.current&&e()},n.onspeechstart=function(n){v.log("onspeechstart",n)},n.onspeechend=function(n){v.log("onspeechend",n)},n.onnomatch=function(n){v.log("onnomatch",n),o((function(n){var t=(0,d.Z)(n);return t.push("语音识别失败"),(0,d.Z)(t)}))},n.onresult=function(n){v.log("onresult",n),o((function(t){var e,o,c,i,r=(0,d.Z)(t);return r.push(null!==(e=null===(o=n.results)||void 0===o||null===(c=o[0])||void 0===c||null===(i=c[0])||void 0===i?void 0:i.transcript)&&void 0!==e?e:""),(0,d.Z)(r)}))},n.onerror=function(n){v.log("onerror",n)},n.onend=function(n){v.log("onend",n),p(!1)}):alert("当前浏览器不支持")}(),function(){var t;null===(t=n)||void 0===t||t.stop()}}),[a]),[e,a,u,f,p]}(),t=(0,c.Z)(n,5),e=t[0],o=t[1],i=t[2],s=t[3],a=t[4];return(0,u.jsxs)("div",{children:[(0,u.jsx)(l,{handleChange:function(n){i(n),n&&a(!0)},status:o,loading:s}),(0,u.jsx)("div",{children:e.map((function(n,t){return(0,u.jsx)("div",{style:{marginTop:"15px",textAlign:"center"},children:n},t)}))})]})};var f=[{content:"SpeechRecognition —— 原生",children:h},{content:"讯飞 —— 第三方",children:function(){return(0,u.jsxs)("div",{children:["我是讯飞的api",(0,u.jsx)(l,{handleChange:function(n){},status:!1,loading:!1}),(0,u.jsx)("div",{})]})}},{content:"火山引擎 —— 第三方",children:h},{content:"百度 —— 第三方",children:h}];const p={navList:"navList",navItem:"navItem",navActive:"navActive"};const g=function(){var n=(0,r.useState)(0),t=(0,c.Z)(n,2),e=t[0],o=t[1],s=f[e].children;return(0,u.jsxs)(i.lg,{children:[(0,u.jsx)("div",{className:p.navList,children:f.map((function(n,t){return(0,u.jsx)("div",{className:"".concat(p.navItem).concat(e===t?" ".concat(p.navActive):""),onClick:function(){o(t)},children:n.content},t)}))}),(0,u.jsx)("div",{className:p.main,children:(0,u.jsx)(s,{})})]})};var x;(0,o.s)(null!==(x=document.getElementById("root"))&&void 0!==x?x:document.body).render((0,u.jsx)(g,{}))},875:()=>{},870:()=>{},869:()=>{},872:()=>{},871:()=>{}},n=>{var t=t=>n(n.s=t);n.O(0,[2],(()=>(t(1040),t(855))));n.O()}]);