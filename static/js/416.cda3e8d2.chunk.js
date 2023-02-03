"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[416],{4628:function(n,e,t){t.d(e,{Z:function(){return j}});var r=t(885),i=t(5861),l=t(4687),a=t.n(l),o=t(1044),d=t(2791),c=t(5243),p=t(168),s=t(4313),u=t(8629);var f,g,x=t.p+"static/media/currency-bg.79c23c3b7292d14148dba4e0343c8ea9.svg",h=s.ZP.div(f||(f=(0,p.Z)(["\n  height: 174px;\n  position: relative;\n  width: 280px;\n\n  color: #ffffff;\n  border-radius: 30px;\n  overflow: hidden;\n  background: #4a56e2 url(",");\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: contain;\n\n  @media "," {\n    margin: 0 auto;\n    margin-top: 28px;\n  }\n\n  @media "," {\n    height: 182px;\n    width: 336px;\n  }\n\n  @media "," {\n    height: 331px;\n    width: 393px;\n  }\n"])),x,u.U.tabletBefore,u.U.tablet,u.U.desktop),m=s.ZP.table(g||(g=(0,p.Z)(["\n  width: 100%;\n  height: max-content;\n\n  @media "," {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  & thead {\n    font-weight: 700;\n    font-size: 18px;\n    background: rgba(255, 255, 255, 0.2);\n  }\n\n  & th {\n    padding-bottom: 12px;\n    padding-top: 12px;\n\n    @media "," {\n      padding-bottom: 17px;\n      padding-top: 17px;\n    }\n  }\n\n  & td {\n    text-align: center;\n    padding-top: 12px;\n\n    @media "," {\n      padding-bottom: 4px;\n      padding-top: 20px;\n    }\n  }\n\n  & th:first-child,\n  td:first-child {\n    padding-left: 20px;\n    padding-right: 24px;\n\n    @media "," {\n      padding-left: 20px;\n      padding-right: 42px;\n    }\n\n    @media "," {\n      padding-left: 44px;\n      padding-right: 40px;\n      text-align: center;\n    }\n  }\n\n  & th:last-child,\n  td:last-child {\n    padding-right: 17px;\n    padding-left: 38px;\n\n    @media "," {\n      text-align: left;\n      padding-right: 25px;\n      padding-left: 70px;\n    }\n\n    @media "," {\n      padding-right: 44px;\n      padding-left: 70px;\n    }\n  }\n\n  & th,\n  td {\n    @media "," {\n      text-align: left;\n    }\n  }\n"])),u.U.tabletBefore,u.U.desktop,u.U.desktop,u.U.tabletOnly,u.U.desktop,u.U.tabletOnly,u.U.desktop,u.U.tabletBefore),b=t(184);function y(){return(y=(0,i.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.monobank.ua/bank/currency");case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function v(){return JSON.parse(localStorage.getItem("keyCurrency"))}var j=function(){var n=(0,d.useState)([]),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,d.useEffect)((function(){if(v()&&(new Date).getTime()-JSON.parse(localStorage.getItem("keyDate"))<36e5)return i(v());(function(){return y.apply(this,arguments)})().then((function(n){var e,t=n.filter((function(n){return(840===n.currencyCodeA||978===n.currencyCodeA)&&980===n.currencyCodeB}));return e=t,localStorage.removeItem("keyCurrency"),localStorage.removeItem("keyDate"),localStorage.setItem("keyCurrency",JSON.stringify(e)),localStorage.setItem("keyDate",JSON.stringify((new Date).getTime())),i(t)}))}),[i]),(0,b.jsxs)(h,{children:[0===t.length&&(0,b.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"30%",left:"50%",transform:"translateX(-50%)"},children:(0,b.jsx)(c.g4,{height:"80",width:"80",radius:"9",color:"#ffffff",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),(0,b.jsxs)(m,{children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Currency"}),(0,b.jsx)("th",{children:"Purchase"}),(0,b.jsx)("th",{children:"Sale"})]})}),(0,b.jsx)("tbody",{children:t.length>0&&t.map((function(n){return(0,b.jsxs)("tr",{children:[840===n.currencyCodeA?(0,b.jsx)("td",{children:"USD"}):(0,b.jsx)("td",{children:"EUR"}),(0,b.jsx)("td",{children:n.rateBuy.toFixed(2)}),(0,b.jsx)("td",{children:n.rateSell.toFixed(2)})]},n.currencyCodeA)}))})]})]})}},1273:function(n,e,t){t.d(e,{Z:function(){return H}});var r,i,l,a,o,d,c,p=t(885),s=t(2791),u=t(8211),f=t(9434),g=t(4805),x=t(9869),h=t(168),m=t(4313),b=t(8629),y=m.ZP.div(r||(r=(0,h.Z)(["\n  background-color: #ffffff;\n  text-align: center;\n"]))),v=m.ZP.header(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  @media "," {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  @media "," {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  @media "," {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])),b.U.mobileOnly,b.U.mobile,b.U.desktop),j=m.ZP.div(l||(l=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  color: #bdbdbd;\n"]))),C=m.ZP.button(a||(a=(0,h.Z)(["\n  background-color: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  padding: 0;\n  padding-left: 8px;\n\n  ","\n"])),(function(n){return n.tablet&&(0,m.iv)(o||(o=(0,h.Z)(["\n      font-size: 18px;\n      color: #bdbdbd;\n      padding-left: 12px;\n      border-left: 1px solid #bdbdbd;\n    "])))})),w=["title","titleId"];function Z(){return Z=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Z.apply(this,arguments)}function O(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function k(n,e){var t=n.title,r=n.titleId,i=O(n,w);return s.createElement("svg",Z({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?s.createElement("title",{id:r},t):null,d||(d=s.createElement("g",{clipPath:"url(#clip0_7_47)"},s.createElement("path",{d:"M11.2788 13.0708H12.6844V15.8818C12.6844 17.0443 11.7386 17.99 10.5761 17.99H2.10814C0.945786 17.99 0 17.0443 0 15.8818V2.10814C0 0.945786 0.945786 0 2.10814 0H10.5761C11.7386 0 12.6844 0.945786 12.6844 2.10814V4.91913H11.2788V2.10814C11.2788 1.72073 10.9637 1.40543 10.5761 1.40543H2.10814C1.72073 1.40543 1.40543 1.72073 1.40543 2.10814V15.8818C1.40543 16.2692 1.72073 16.5845 2.10814 16.5845H10.5761C10.9637 16.5845 11.2788 16.2692 11.2788 15.8818V13.0708ZM14.6872 5.68213L13.6934 6.67598L15.3096 8.29234H6.21922V9.69777H15.3096L13.6934 11.314L14.6872 12.3078L18 8.99506L14.6872 5.68213Z",fill:"#BDBDBD"}))),c||(c=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_7_47"},s.createElement("rect",{width:18,height:18,fill:"white"})))))}var P=s.forwardRef(k),S=(t.p,t(6657)),U=t(2658),E=t(184),H=function(){var n=(0,f.v9)(x.S4),e=(0,g.useMediaQuery)({maxWidth:767}),t=(0,g.useMediaQuery)({minWidth:768}),r=(0,s.useState)(!1),i=(0,p.Z)(r,2),l=i[0],a=i[1],o=function(){a(!l)};return(0,E.jsx)(y,{children:(0,E.jsxs)(v,{children:[(0,E.jsx)(u.Z,{header:!0}),(0,E.jsxs)(j,{children:[e&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("p",{children:n}),(0,E.jsx)(C,{onClick:o,type:"button",children:(0,E.jsx)(P,{})})]}),t&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("p",{style:{marginRight:"8px"},children:n}),(0,E.jsxs)(C,{onClick:o,tablet:!0,children:[(0,E.jsx)(P,{}),(0,E.jsx)("span",{style:{marginLeft:"8px"},children:"Exit"})]})]})]}),l&&(0,E.jsx)(U.Z,{toggleModal:o,isSignIn:!0,children:(0,E.jsx)(S.Z,{toggleModalCancel:o})})]})})}},6657:function(n,e,t){t.d(e,{Z:function(){return m}});var r,i,l,a=t(7184),o=t(9434),d=t(3387),c=t(168),p=t(4313),s=t(8629),u=p.ZP.p(r||(r=(0,c.Z)(["\n\tfont-size: 17px;\n  font-family: 'Poppins';  \n  line-height: 36px;\n  text-align: center;\n  color: #000000;\n  padding-top: 60px;\n\n  @media "," {\n    font-size: 24px;\n    line-height: 45px;\n  }\n\t\n"])),s.U.tablet),f=p.ZP.div(i||(i=(0,c.Z)(["\n\tmargin-top: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]))),g=p.ZP.div(l||(l=(0,c.Z)(["\n  margin: 0 auto;\n  padding-bottom: 20px;\n  display:flex;\n  flex-direction:column;\n  text-align: center;\n  justify-content:center;\n  @media "," {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  @media "," {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  @media "," {\n    padding-left: 16px;\n    padding-right: 16px;\n    display: flex;\n  }\n"])),s.U.mobileOnly,s.U.mobile,s.U.desktop),x=t(7180),h=t(184),m=function(n){var e=n.toggleModalCancel,t=n.isDeleteIn,r=n.elem,i=(0,o.I0)();return(0,h.jsx)(g,{children:t?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{children:"Are you sure you want to delete transaction?"}),(0,h.jsxs)(f,{children:[(0,h.jsx)(d.zx,{primary:"true",marginBotom:"20px",onClick:function(){i((0,x.Ks)(r)),e()},type:"submit",children:"YES"}),(0,h.jsx)(d.zx,{outlined:"true",onClick:function(){return e()},type:"button",children:"NO"})]})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{children:"Are you sure you want to exit?"}),(0,h.jsxs)(f,{children:[(0,h.jsx)(d.zx,{primary:"true",marginBotom:"20px",onClick:function(){i((0,a.uf)())},type:"submit",children:"YES"}),(0,h.jsx)(d.zx,{outlined:"true",onClick:function(){return e()},type:"button",children:"NO"})]})]})})}},5672:function(n,e,t){t.d(e,{Z:function(){return J}});var r,i=t(4805),l=t(168),a=t(4313),o=t(1087),d=t(8629),c=t(2791),p=["title","titleId"];function s(){return s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},s.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function f(n,e){var t=n.title,i=n.titleId,l=u(n,p);return c.createElement("svg",s({width:44,height:44,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},l),t?c.createElement("title",{id:i},t):null,r||(r=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM18.9333 24.3594V32.5555H12.1V21.6274H8L21.6667 9.33325L35.3333 21.6274H31.2333V32.5555H24.4V24.3594H18.9333Z"})))}var g,x=c.forwardRef(f),h=(t.p,["title","titleId"]);function m(){return m=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},m.apply(this,arguments)}function b(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function y(n,e){var t=n.title,r=n.titleId,i=b(n,h);return c.createElement("svg",m({width:44,height:44,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,g||(g=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM32.5 19.5555C33.7833 19.5555 34.8333 18.4555 34.8333 17.1111C34.8333 15.7666 33.7833 14.6666 32.5 14.6666C31.2166 14.6666 30.1666 15.7666 30.1666 17.1111C30.1666 17.3311 30.19 17.5389 30.2483 17.7344L26.1066 22.0855C25.92 22.0244 25.71 22 25.5 22C25.29 22 25.08 22.0244 24.8933 22.0855L21.9183 18.9689C21.9766 18.7733 22 18.5533 22 18.3333C22 16.9889 20.95 15.8889 19.6666 15.8889C18.3833 15.8889 17.3333 16.9889 17.3333 18.3333C17.3333 18.5533 17.3566 18.7733 17.415 18.9689L12.095 24.53C11.9083 24.4689 11.71 24.4444 11.5 24.4444C10.2166 24.4444 9.16664 25.5444 9.16664 26.8889C9.16664 28.2333 10.2166 29.3333 11.5 29.3333C12.7833 29.3333 13.8333 28.2333 13.8333 26.8889C13.8333 26.6689 13.81 26.4611 13.7516 26.2655L19.06 20.6922C19.2466 20.7533 19.4566 20.7778 19.6666 20.7778C19.8766 20.7778 20.0866 20.7533 20.2733 20.6922L23.2483 23.8089C23.19 24.0044 23.1666 24.2244 23.1666 24.4444C23.1666 25.7889 24.2166 26.8889 25.5 26.8889C26.7833 26.8889 27.8333 25.7889 27.8333 24.4444C27.8333 24.2244 27.81 24.0044 27.7516 23.8089L31.905 19.47C32.0916 19.5311 32.29 19.5555 32.5 19.5555Z"})))}var v,j=c.forwardRef(y),C=(t.p,["title","titleId"]);function w(){return w=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},w.apply(this,arguments)}function Z(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function O(n,e){var t=n.title,r=n.titleId,i=Z(n,C);return c.createElement("svg",w({width:44,height:44,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,v||(v=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3C5.68629 3 3 5.68629 3 9V35C3 38.3137 5.68629 41 9 41H35C38.3137 41 41 38.3137 41 35V9C41 5.68629 38.3137 3 35 3H9ZM18.7523 18.5989C18.7523 19.7809 19.6607 20.5399 22.4852 21.2741C25.3096 22.0082 28.3332 23.2151 28.3332 26.7489C28.3332 29.2996 26.4046 30.7056 23.9783 31.166V33.8412H20.2455V31.1411C17.8565 30.631 15.8159 29.1005 15.6666 26.3756H18.4039C18.5408 27.8438 19.5487 28.9885 22.1119 28.9885C24.8617 28.9885 25.4714 27.6198 25.4714 26.7613C25.4714 25.6041 24.8493 24.5092 21.7386 23.7626C18.2671 22.9289 15.8905 21.498 15.8905 18.6238C15.8905 16.2223 17.8316 14.6546 20.2455 14.132V11.4443H23.9783V14.1693C26.5788 14.8039 27.8853 16.7698 27.9724 18.91H25.2225C25.1479 17.3546 24.3267 16.297 22.1119 16.297C20.0091 16.297 18.7523 17.2426 18.7523 18.5989Z"})))}var k,P,S,U,E,H,I,V,L,B=c.forwardRef(O),M=(t.p,a.ZP.div(k||(k=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n\n  @media "," {\n    margin-top: 0px;\n    flex-direction: column;\n  }\n"])),d.U.tablet)),R=(0,a.ZP)(o.OL)(P||(P=(0,l.Z)(["\n  padding: 0px;\n  background-color: transparent;\n  border: none;\n  height: 44px;\n  font-family: 'Poppins';\n  font-size: 18px;\n  color: #000000;\n\n  &:not(:last-child) {\n    margin-right: 32px;\n  }\n\n  &:hover svg,\n  &:focus svg{\n    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));\n    fill: #4a56e2;\n  }\n\n  @media "," {\n    display: flex;\n    align-items: center;\n    height: auto;\n\n    &:not(:last-child) {\n    margin-right: 0px;\n    margin-bottom: 12px;\n  }\n  }\n"])),d.U.tablet),z=a.ZP.span(S||(S=(0,l.Z)(["\n  ","\n"])),(function(n){return n.current&&(0,a.iv)(U||(U=(0,l.Z)(["\n      font-weight: 700;\n    "])))})),D=(0,a.iv)(E||(E=(0,l.Z)(["\n  fill: #6e78e8;\n  transition: 0.2s ease-in-out;\n\n  ","\n\n    @media "," {\n      width: 24px;\n      height: 24px;\n      margin-right: 20px;\n    }\n"])),(function(n){return n.current&&(0,a.iv)(H||(H=(0,l.Z)(["\n      fill: #4a56e2;\n    "])))}),d.U.tablet),N=(0,a.ZP)(x)(I||(I=(0,l.Z)(["\n  ","\n"])),D),A=(0,a.ZP)(j)(V||(V=(0,l.Z)(["\n  ","\n"])),D),F=(0,a.ZP)(B)(L||(L=(0,l.Z)(["\n  ","\n"])),D),_=t(184),J=function(n){var e=n.current,t=(0,i.useMediaQuery)({minWidth:768});return(0,_.jsxs)(M,{children:[(0,_.jsxs)(R,{type:"button",to:"/home",children:["home"===e?(0,_.jsx)(N,{current:"true"}):(0,_.jsx)(N,{}),t?"home"===e?(0,_.jsx)(z,{current:"true",children:"Home"}):(0,_.jsx)(z,{children:"Home"}):null]}),(0,_.jsxs)(R,{type:"button",to:"/statistics",children:["statistics"===e?(0,_.jsx)(A,{current:"true"}):(0,_.jsx)(A,{}),t?"statistics"===e?(0,_.jsx)(z,{current:"true",children:"Statistics"}):(0,_.jsx)(z,{children:"Statistics"}):null]}),!t&&(0,_.jsx)(R,{type:"button",to:"/currency",children:"currency"===e?(0,_.jsx)(F,{current:"true"}):(0,_.jsx)(F,{})})]})}},6587:function(n,e,t){t.d(e,{Eq:function(){return x},H_:function(){return u},L:function(){return f},kC:function(){return g}});var r,i,l,a,o=t(168),d=t(4313),c=t(8629),p=t(1082),s=t(3995),u=d.ZP.div(r||(r=(0,o.Z)(["\n  min-height: 100vh;\n  background-color: #e7eaf2;\n\n  @media "," {\n    background: top 0% right 0% no-repeat url(","),\n      bottom 0% left 0% no-repeat url(","), #e7eaf2;\n  }\n"])),c.U.tablet,s,p),f=d.ZP.div(i||(i=(0,o.Z)(["\n  min-height: 100vh;\n\n  @media "," {\n    backdrop-filter: blur(25px);\n  }\n"])),c.U.tablet),g=d.ZP.div(l||(l=(0,o.Z)(["\n  display: flex;\n  justify-content: space-around;\n\n  @media "," {\n    padding-top: 32px;\n    padding-bottom: 20px;\n\n    /* & > div {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      margin-right: 32px;\n    } */\n  }\n\n  @media "," {\n    min-height: calc(100vh - 85px);\n    display: block;\n    padding-right: 70px;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    border-right: 2px solid rgba(0, 0, 0, 0.05);\n  }\n"])),c.U.tabletOnly,c.U.desktop),x=d.ZP.div(a||(a=(0,o.Z)(["\n  @media "," {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-right: 32px;\n  }\n"])),c.U.tabletOnly)}}]);
//# sourceMappingURL=416.cda3e8d2.chunk.js.map