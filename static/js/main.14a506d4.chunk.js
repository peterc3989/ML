(this.webpackJsonpImageRecog=this.webpackJsonpImageRecog||[]).push([[0],{53:function(e,n,t){e.exports=t(79)},58:function(e,n,t){},66:function(e,n){},67:function(e,n){},68:function(e,n){},69:function(e,n,t){},74:function(e,n){},75:function(e,n){},76:function(e,n){},79:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(20),o=t.n(i),c=(t(58),t(5)),l=t.n(c),u=t(10),s=t(12),d=t(13),f=(t(78),t(60),t(69),t(102)),m=t(100),p=t(98),g=t(103),x=t(101),b=t(80),h=t(45),v=t.n(h),w=t(46),y=t.n(w),j=t(14);function O(){var e=Object(d.a)(["\n  && {\n    background: black;\n    transition: 0.6s;\n  }\n"]);return O=function(){return e},e}function E(){var e=Object(d.a)(['\n  && {\n    color: white;\n    transition: 0.6s;\n    &:hover {\n      text-decoration: underline;\n    }\n    font-family: "Kalam", cursive;\n    font-size: 2rem;\n    text-transform: uppercase;\n  }\n']);return E=function(){return e},e}function R(){var e=Object(d.a)(["\n  && {\n    margin-left: 3%;\n    color: white;\n    &:hover {\n      animation: "," 0.5s linear;\n    }\n  }\n"]);return R=function(){return e},e}function k(){var e=Object(d.a)(["\n  0% { transform: rotate(0deg); }\n   25% { transform: rotate(9deg); }\n   50% { transform: rotate(0deg); }\n   75% { transform: rotate(-9deg); }\n  100% { transform: rotate(0deg); }\n"]);return k=function(){return e},e}var S=Object(j.b)(k()),I=Object(j.a)(p.a)(R(),S),z=j.a.div(E()),F=Object(j.a)(g.a)(O()),B=Object(m.a)((function(e){return{toolbar:{marginLeft:"10%",marginRight:"8%"},title:{flexGrow:1,fontSize:"2rem",fontFamily:"'Kalam', cursive",textTransform:"uppercase",color:"#FFFFFF"},button:{marginLeft:"3%",fontSize:"2rem",color:"white",textTransform:"none"}}}));function L(){var e=B();return r.a.createElement("div",{className:e.root},r.a.createElement(F,{position:"static"},r.a.createElement(x.a,{color:"secondary",className:e.toolbar},r.a.createElement(b.a,{variant:"h6",className:e.title},r.a.createElement(z,null,"Peter Chen")),r.a.createElement(I,{href:"https://github.com/peterc3989"},r.a.createElement(v.a,null)),r.a.createElement(I,{href:"https://www.linkedin.com/feed/"},r.a.createElement(y.a,null)))))}var M=t(34);function C(){var e=Object(d.a)(["\n  width: 300px;\n  box-sizing: border-box;\n  border: solid 1px white;\n  background: #f50057;\n  color: white;\n  font-size: 24px;\n  margin: auto;\n  padding: 10px;\n"]);return C=function(){return e},e}function U(){var e=Object(d.a)(["\n  width: 300px;\n  box-sizing: border-box;\n  border: solid 1px white;\n  background: black;\n  color: white;\n  font-size: 24px;\n  margin: auto;\n  padding: 10px;\n"]);return U=function(){return e},e}function W(){var e=Object(d.a)(["\n  display: flex;\n  flex-basis: 20%;\n  flex-direction: row;\n  flex-wrap: wrap;\n  text-align: center;\n  align-items: center;\n  padding: 10px;\n  margin: 5px;\n  margin-left:25%;\n  margin-right:25%;\n"]);return W=function(){return e},e}function D(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n  align-items: center;\n  padding: 30px;\n  margin: 30px;\n"]);return D=function(){return e},e}function N(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  padding: 30px;\n"]);return N=function(){return e},e}var P=Object(m.a)({form:{display:"flex",flexDirection:"column",lineHeight:1.5,boxSizing:"border-box",fontSize:"16px",marginLeft:"40%",marginRight:"40%",borderWidth:"1",borderColor:"#e66465",border:"solid",alignItems:"center",justifyContent:"center"},formItem:{display:"flex",flexDirection:"column",marginBottom:2},formInput:{alignSelf:"flex-start",padding:"0.8em",fontSize:"0.9em",fontFamily:'"Source Sans Pro", sans-serif',outline:"none",border:"1px solid #dddddd",borderRadius:"4px",background:"#f9f9f9"},formLabel:{fontWeight:600,padding:"10px 0",alignSelf:"flex-start"},button:{fontSize:"20px",color:"white",textTransform:"none"}}),T={initial:"initial",states:{initial:{on:{next:"loadingModel"}},loadingModel:{on:{next:"modelReady"}},modelReady:{on:{next:"imageReady"}},imageReady:{on:{next:"identifying"},showImage:!0},identifying:{on:{next:"complete"}},complete:{on:{next:"modelReady"},showImage:!0,showResults:!0}}},A=j.a.div(N()),H=j.a.div(D()),J=j.a.div(W()),K=j.a.div(U()),G=j.a.div(C()),$=["Airplane","Automobile","Bird","Cat","Deer","Dog","Frog","Horse","Ship","Truck"];var q=function(){var e=P(),n=Object(a.useState)([]),t=Object(s.a)(n,2),i=t[0],o=t[1],c=Object(a.useState)(null),d=Object(s.a)(c,2),m=d[0],p=d[1],g=Object(a.useState)(null),x=Object(s.a)(g,2),b=x[0],h=x[1],v=Object(a.useRef)(),w=Object(a.useRef)(),y=Object(a.useState)([]),j=Object(s.a)(y,2),O=j[0],E=j[1],R=Object(a.useReducer)((function(e,n){return T.states[e].on[n]||T.initial}),T.initial),k=Object(s.a)(R,2),S=k[0],I=k[1],z=function(){return I("next")},F={initial:{action:function(){var e=Object(u.a)(l.a.mark((function e(){var n,t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(),n=document.getElementById("json-upload"),t=document.getElementById("weights-upload"),e.next=5,M.c(M.b.browserFiles([n.files[0],t.files[0]]));case 5:(a=e.sent).summary(),h(a),z();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),text:"Load Model"},loadingModel:{text:"Loading Model..."},modelReady:{action:function(){return w.current.click()},text:"Upload Image"},imageReady:{action:function(){var e=Object(u.a)(l.a.mark((function e(){var n,t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(),n=M.a.fromPixels(v.current).resizeBilinear([32,32]),e.next=4,b.predictOnBatch(n.reshape([1,32,32,3]));case 4:t=e.sent,a=t.argMax(1),t.argMax(1).print(),o(Array.from(t.dataSync())),E(a.dataSync()[0]),z();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),text:"Identify"},identifying:{text:"Identifying..."},complete:{action:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o([]),z();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),text:"Reset"}},B=T.states[S],C=B.showImage,U=B.showResults,W=r.a.createElement("div",null,r.a.createElement("label",{for:"avatar"},"Upload Model"),r.a.createElement("input",{type:"file",id:"json-upload",name:"json-upload"}),r.a.createElement("label",{for:"avatar"},"Upload Weights"),r.a.createElement("input",{type:"file",id:"weights-upload",name:"weights-upload"}));return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(A,null,r.a.createElement(H,null,W),C&&r.a.createElement("img",{src:m,alt:"upload-preview",ref:v}),r.a.createElement("input",{type:"file",class:"hide",accept:"image/*",capture:"camera",onChange:function(e){if(e.target.files.length>0){var n=URL.createObjectURL(e.target.files[0]);p(n),z()}},ref:w}),U&&r.a.createElement(A,null,r.a.createElement(G,null,"Prediction: "+$[O]),r.a.createElement(J,null,i.map((function(e,n){return r.a.createElement(K,{key:e},"".concat($[n],": ").concat(e.toFixed(2)))})))),r.a.createElement(f.a,{className:e.button,variant:"contained",color:"secondary",onClick:F[S].action||function(){}},F[S].text)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.14a506d4.chunk.js.map