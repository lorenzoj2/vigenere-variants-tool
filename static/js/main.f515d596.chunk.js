(this["webpackJsonpvigenere-variants"]=this["webpackJsonpvigenere-variants"]||[]).push([[0],{65:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(10),c=a.n(i),s=(a(65),a(19)),o=a(103),l=a(106),j=a(108),p=a(109),h=a(113),u=a(4),d=Object(o.a)((function(e){return{body:{margin:0,marginBottom:e.spacing(8)},textField:{margin:"20px 20px 0px 20px"},buttons:{marginTop:"20px",textAlign:"center"},buttonMargin:{margin:e.spacing(2)},input:{width:"100%",marginTop:e.spacing(.5),minHeight:"15px",resize:"vertical",fontSize:"1.2em"},alert:{width:"250px",margin:"auto"}}}));var b=function(){var e=d(),t={classes:{input:e.input}},a=Object(r.useState)(""),n=Object(s.a)(a,2),i=n[0],c=n[1],o=Object(r.useState)(""),b=Object(s.a)(o,2),x=b[0],v=b[1],O=Object(r.useState)(""),m=Object(s.a)(O,2),g=m[0],f=m[1],C=Object(r.useState)(!1),N=Object(s.a)(C,2),w=N[0],S=N[1],y=Object(r.useState)(""),A=Object(s.a)(y,2),P=A[0],k=A[1];return Object(u.jsxs)("div",{className:e.body,children:[Object(u.jsxs)("div",{className:e.textField,children:[Object(u.jsx)(l.a,{variant:"h6",children:"Keyword :"}),Object(u.jsx)(j.a,{inputProps:{spellCheck:"false"},InputProps:t,value:i,variant:"outlined",rows:5,className:e.input,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsxs)("div",{className:e.textField,children:[Object(u.jsx)(l.a,{variant:"h6",children:"Ciphertext :"}),Object(u.jsx)(j.a,{InputProps:t,value:x,variant:"outlined",rows:5,className:e.input,onChange:function(e){return v(e.target.value.toUpperCase())}})]}),Object(u.jsxs)("div",{className:e.textField,children:[Object(u.jsx)(l.a,{variant:"h6",children:"Plaintext :"}),Object(u.jsx)(j.a,{InputProps:t,value:g,variant:"outlined",rows:5,className:e.input,onChange:function(e){return f(e.target.value)}})]}),Object(u.jsxs)("div",{className:e.buttons,children:[w?Object(u.jsx)(h.a,{className:e.alert,severity:"error",children:P}):Object(u.jsx)(h.a,{style:{opacity:"0%"}}),Object(u.jsx)(p.a,{onClick:function(e){return function(e){if(!i||!g)return S(!0),void k("Please enter plaintext and a key.");S(!1);for(var t="",a=0;a<i.length;a++)if(" "!==i.charAt(a)){var r=g.toLowerCase().charCodeAt(a)%32+i.toLowerCase().charCodeAt(a)%32-1;0===(r%=26)&&(r+=26),t+=String.fromCharCode(96+r)}else t+=" ";v(t.toUpperCase())}()},className:e.buttonMargin,size:"large",variant:"contained",color:"primary",children:"Encipher"}),Object(u.jsx)(p.a,{onClick:function(){return function(){if(!x||!i)return S(!0),void k("Please enter ciphertext and a key.");S(!1);for(var e="",t=0;t<i.length;t++)if(" "!==i.charAt(t)){var a=x.toLowerCase().charCodeAt(t)-96-(i.toLowerCase().charCodeAt(t)-96);a>=0?a%=26:a+=0===a?1:26,e+=String.fromCharCode(97+a)}else e+=" ";f(e)}()},className:e.buttonMargin,size:"large",variant:"contained",children:"Decipher"})]})]})},x=a(114),v=a(112),O=Object(o.a)((function(e){return{body:{margin:0,marginBottom:e.spacing(8)},keywordSlider:{textAlign:"center",margin:"20px 20px 0px 20px"},slider:{width:"30%"},input:{marginTop:e.spacing(.5),width:"100%",fontFamily:"Courier New",fontWeight:"bold"},textField:{margin:"20px 20px 0px 20px"}}}));var m=function(){var e=O(),t={classes:{input:e.input}},a=Object(r.useState)(""),n=Object(s.a)(a,2),i=n[0],c=n[1],o=Object(r.useState)(""),l=Object(s.a)(o,2),j=l[0],p=l[1],h=Object(r.useState)(""),d=Object(s.a)(h,2),b=d[0],m=d[1],g=Object(r.useState)(0),f=Object(s.a)(g,2),C=f[0],N=f[1];return Object(u.jsxs)("div",{className:e.body,children:[Object(u.jsxs)("div",{className:e.keywordSlider,children:[Object(u.jsx)(x.a,{className:e.slider,step:1,max:j.length-i.trim().length,value:C,onChange:function(e,t){for(var a="",r="",n=0;n<=t-1;n++)a+=" ";for(a+=i.trim(),n=0;n<a.length;n++)if(" "!==a.charAt(n)){var s=j.toLowerCase().charCodeAt(n)-96-(a.toLowerCase().charCodeAt(n)-96);s>=0?s%=26:s+=0===s?1:26,r+=String.fromCharCode(97+s)}else r+=" ";m(r),c(a),N(t)}}),Object(u.jsx)(v.a,{inputProps:{spellCheck:"false"},InputProps:t,placeholder:"Keyword",value:i,variant:"outlined",rows:2,className:e.input,onChange:function(e,t){for(var a="",r=e.target.value,n=0;n<r.length;n++)if(console.log(r.charAt(n))," "!==r.charAt(n)){var i=j.toLowerCase().charCodeAt(n)-96-(r.toLowerCase().charCodeAt(n)-96);i>=0?i%=26:i+=0===i?1:26,a+=String.fromCharCode(97+i)}else a+=" ";c(e.target.value),m(a)}})]}),Object(u.jsx)("div",{className:e.textField,children:Object(u.jsx)(v.a,{inputProps:{maxLength:140,spellCheck:"false"},InputProps:t,placeholder:"Ciphertext",value:j,variant:"outlined",rows:2,className:e.input,onChange:function(e){return p(e.target.value.toUpperCase().replace(/\s/g,""))}})}),Object(u.jsx)("div",{className:e.textField,children:Object(u.jsx)(v.a,{inputProps:{spellCheck:"false"},InputProps:t,placeholder:"Plaintext",value:b,variant:"outlined",rows:2,className:e.input})})]})},g=a(110),f=a(111),C=a(42),N=a(12),w=Object(o.a)((function(e){return{appBarOption:{marginLeft:e.spacing(6),marginTop:e.spacing(1)},a:{textDecoration:"none",color:"white","&:hover":{textDecoration:"underline"}}}}));var S=function(){var e=w();return Object(u.jsxs)(C.a,{children:[Object(u.jsx)(g.a,{position:"sticky",children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)(l.a,{className:e.appBarMain,variant:"h5",color:"inherit",children:"Vigen\xe8re Variants Tool"}),Object(u.jsx)(l.a,{className:e.appBarOption,variant:"h6",color:"inherit",children:Object(u.jsx)(C.b,{className:e.a,to:"/",children:"Encipher / Decipher"})}),Object(u.jsx)(l.a,{className:e.appBarOption,variant:"h6",color:"inherit",children:Object(u.jsx)(C.b,{className:e.a,to:"/solver",children:"Solver"})})]})}),Object(u.jsxs)(N.c,{children:[Object(u.jsx)(N.a,{path:"/solver",component:m}),Object(u.jsx)(N.a,{path:"/",component:b})]})]})},y=Object(o.a)((function(e){return{a:{textDecoration:"none",color:"white","&:hover":{textDecoration:"underline"}},footer:{top:"auto",bottom:0},source:{marginLeft:e.spacing(2.5)}}}));var A=function(){var e=y();return Object(u.jsx)(g.a,{className:e.footer,color:"primary",position:"fixed",children:Object(u.jsxs)(f.a,{variant:"dense",children:[Object(u.jsx)(l.a,{variant:"subtitle1",color:"inherit",children:"Created by John Lorenzo for CSC 483"}),Object(u.jsx)(l.a,{variant:"subtitle1",color:"inherit",className:e.source,children:"\u2503"}),Object(u.jsx)(l.a,{variant:"subtitle1",color:"inherit",className:e.source,children:Object(u.jsx)("a",{className:e.a,color:"inherit",href:"https://github.com/lorenzoj2/vigenere-variants-tool",children:"Source"})})]})})};c.a.render(Object(u.jsxs)(n.a.StrictMode,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(A,{})]}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f515d596.chunk.js.map