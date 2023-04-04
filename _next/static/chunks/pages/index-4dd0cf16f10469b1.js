(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6740:function(t){t.exports=function(){function t(o,s){if(!(this instanceof t))return new t(o,s);var a=Math.pow(10,(s=Object.assign({},n,s)).precision);this.intValue=o=e(o,s),this.value=o/a,s.increment=s.increment||1/a,s.groups=s.useVedic?r:i,this.s=s,this.p=a}function e(e,n){var i=!(2<arguments.length)||void 0===arguments[2]||arguments[2],r=n.decimal,o=n.errorOnInvalid,s=n.fromCents,a=Math.pow(10,n.precision),c=e instanceof t;if(c&&s)return e.intValue;if("number"==typeof e||c)r=c?e.value:e;else if("string"==typeof e)o=RegExp("[^-\\d"+r+"]","g"),r=RegExp("\\"+r,"g"),r=(r=e.replace(/\((.*)\)/,"-$1").replace(o,"").replace(r,"."))||0;else{if(o)throw Error("Invalid Input");r=0}return s||(r=(r*a).toFixed(4)),i?Math.round(r):r}var n={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:function(t,e){var n=e.pattern,i=e.negativePattern,r=e.symbol,o=e.separator,s=e.decimal;e=e.groups;var a=(""+t).replace(/^-/,"").split("."),c=a[0];return a=a[1],(0<=t.value?n:i).replace("!",r).replace("#",c.replace(e,"$1"+o)+(a?s+a:""))},fromCents:!1},i=/(\d)(?=(\d{3})+\b)/g,r=/(\d)(?=(\d\d)+\d\b)/g;return t.prototype={add:function(n){var i=this.s,r=this.p;return t((this.intValue+e(n,i))/(i.fromCents?1:r),i)},subtract:function(n){var i=this.s,r=this.p;return t((this.intValue-e(n,i))/(i.fromCents?1:r),i)},multiply:function(e){var n=this.s;return t(this.intValue*e/(n.fromCents?1:Math.pow(10,n.precision)),n)},divide:function(n){var i=this.s;return t(this.intValue/e(n,i,!1),i)},distribute:function(e){var n=this.intValue,i=this.p,r=this.s,o=[],s=Math[0<=n?"floor":"ceil"](n/e),a=Math.abs(n-s*e);for(i=r.fromCents?1:i;0!==e;e--){var c=t(s/i,r);0<a--&&(c=c[0<=n?"add":"subtract"](1/i)),o.push(c)}return o},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(t){var e=this.s;return"function"==typeof t?t(this,e):e.format(this,Object.assign({},e,t))},toString:function(){var t=this.s,e=t.increment;return(Math.round(this.intValue/this.p/e)*e).toFixed(t.precision)},toJSON:function(){return this.value}},t}()},5557:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9053)}])},9053:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return h},default:function(){return d}});var i=n(5893),r=n(9008),o=n.n(r),s=n(6740),a=n.n(s),c=n(7294),u=function(t){let{cartItems:e,onIncrement:n,onDecrement:r,onDelete:o,onCheckout:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Your cart:"}),e.length>0?(0,i.jsxs)("ul",{children:[e.map(t=>(0,i.jsxs)("li",{children:[t.name," x ",t.quantity," (",a()(t.quantity*t.price.unit_amount,{fromCents:!0}).format(),") ",(0,i.jsx)("button",{onClick:()=>n(t),children:"+"})," ",(0,i.jsx)("button",{onClick:()=>r(t),children:"-"})," ",(0,i.jsx)("button",{onClick:()=>o(t),children:"delete"})]},t.id)),(0,i.jsxs)("li",{children:["Total:"," ",a()(e.reduce((t,e)=>t+e.quantity*e.price.unit_amount,0),{fromCents:!0}).format()," ",(0,i.jsx)("button",{onClick:()=>s(e),children:"Proceed to Checkout"})]})]}):(0,i.jsx)("p",{children:"(cart is empty)"})]})};async function l(t){console.log("https://iyb-store.demo.codes/api/createCheckout"),fetch("https://iyb-store.demo.codes/api/createCheckout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t})}).then(t=>{t.redirected?window.location.href=t.url:console.log(t)}).catch(t=>{console.error(t)})}var h=!0;function d(t){let{allProducts:e}=t,[n,r]=(0,c.useState)([]),s=t=>{!function(t,e,n){let i=e.find(e=>e.id===t.id);n(i?e.map(e=>e.id===t.id?{...e,quantity:e.quantity+1}:e):[...e,{...t,quantity:1}])}(t,n,r)},h=t=>{!function(t,e,n){let i=e.filter(e=>e.id!==t.id);n(i)}(t,n,r)},d=t=>{!function(t,e,n){let i=e.map(e=>e.id===t.id?{...e,quantity:e.quantity+1}:e);n(i)}(t,n,r)},f=t=>{!function(t,e,n){let i=e.map(e=>e.id===t.id?{...e,quantity:e.quantity-1}:e);n(i.filter(t=>t.quantity>0))}(t,n,r)},p=t=>{l(t)};return(0,c.useEffect)(()=>{let t=JSON.parse(localStorage.getItem("cartItems"))||[];r(t)},[]),(0,c.useEffect)(()=>{localStorage.setItem("cartItems",JSON.stringify(n))},[n]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"it's ya continuously integrating boi webstore"}),(0,i.jsx)("meta",{"http-equiv":"Content-Security-Policy",content:"frame-src https://checkout.stripe.com;"})]}),(0,i.jsx)("h1",{children:"It's ya boi!"}),(0,i.jsx)("p",{children:"Doin it right once again"}),(0,i.jsx)("ul",{children:e.map(t=>(0,i.jsxs)("li",{children:[t.name,", ",a()(t.price.unit_amount,{fromCents:!0}).format(),(0,i.jsx)("button",{onClick:()=>s(t),children:"Add to Cart"})]},t.id))}),(0,i.jsx)(u,{cartItems:n,onIncrement:d,onDecrement:f,onDelete:h,onCheckout:p})]})}},9008:function(t,e,n){t.exports=n(2636)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=5557)}),_N_E=t.O()}]);