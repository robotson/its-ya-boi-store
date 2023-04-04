(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6740:function(t){t.exports=function(){function t(o,s){if(!(this instanceof t))return new t(o,s);var a=Math.pow(10,(s=Object.assign({},e,s)).precision);this.intValue=o=n(o,s),this.value=o/a,s.increment=s.increment||1/a,s.groups=s.useVedic?r:i,this.s=s,this.p=a}function n(n,e){var i=!(2<arguments.length)||void 0===arguments[2]||arguments[2],r=e.decimal,o=e.errorOnInvalid,s=e.fromCents,a=Math.pow(10,e.precision),u=n instanceof t;if(u&&s)return n.intValue;if("number"==typeof n||u)r=u?n.value:n;else if("string"==typeof n)o=RegExp("[^-\\d"+r+"]","g"),r=RegExp("\\"+r,"g"),r=(r=n.replace(/\((.*)\)/,"-$1").replace(o,"").replace(r,"."))||0;else{if(o)throw Error("Invalid Input");r=0}return s||(r=(r*a).toFixed(4)),i?Math.round(r):r}var e={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:function(t,n){var e=n.pattern,i=n.negativePattern,r=n.symbol,o=n.separator,s=n.decimal;n=n.groups;var a=(""+t).replace(/^-/,"").split("."),u=a[0];return a=a[1],(0<=t.value?e:i).replace("!",r).replace("#",u.replace(n,"$1"+o)+(a?s+a:""))},fromCents:!1},i=/(\d)(?=(\d{3})+\b)/g,r=/(\d)(?=(\d\d)+\d\b)/g;return t.prototype={add:function(e){var i=this.s,r=this.p;return t((this.intValue+n(e,i))/(i.fromCents?1:r),i)},subtract:function(e){var i=this.s,r=this.p;return t((this.intValue-n(e,i))/(i.fromCents?1:r),i)},multiply:function(n){var e=this.s;return t(this.intValue*n/(e.fromCents?1:Math.pow(10,e.precision)),e)},divide:function(e){var i=this.s;return t(this.intValue/n(e,i,!1),i)},distribute:function(n){var e=this.intValue,i=this.p,r=this.s,o=[],s=Math[0<=e?"floor":"ceil"](e/n),a=Math.abs(e-s*n);for(i=r.fromCents?1:i;0!==n;n--){var u=t(s/i,r);0<a--&&(u=u[0<=e?"add":"subtract"](1/i)),o.push(u)}return o},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(t){var n=this.s;return"function"==typeof t?t(this,n):n.format(this,Object.assign({},n,t))},toString:function(){var t=this.s,n=t.increment;return(Math.round(this.intValue/this.p/n)*n).toFixed(t.precision)},toJSON:function(){return this.value}},t}()},5557:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(9053)}])},9053:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return h},default:function(){return d}});var i=e(5893),r=e(9008),o=e.n(r),s=e(6740),a=e.n(s),u=e(7294),c=function(t){let{cartItems:n,onIncrement:e,onDecrement:r,onDelete:o,onCheckout:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Your cart:"}),n.length>0?(0,i.jsxs)("ul",{children:[n.map(t=>(0,i.jsxs)("li",{children:[t.name," x ",t.quantity," (",a()(t.quantity*t.price.unit_amount,{fromCents:!0}).format(),") ",(0,i.jsx)("button",{onClick:()=>e(t),children:"+"})," ",(0,i.jsx)("button",{onClick:()=>r(t),children:"-"})," ",(0,i.jsx)("button",{onClick:()=>o(t),children:"delete"})]},t.id)),(0,i.jsxs)("li",{children:["Total:"," ",a()(n.reduce((t,n)=>t+n.quantity*n.price.unit_amount,0),{fromCents:!0}).format()," ",(0,i.jsx)("button",{onClick:()=>s(n),children:"Proceed to Checkout"})]})]}):(0,i.jsx)("p",{children:"(cart is empty)"})]})};async function l(t){console.log("https://iyb-create-checkout.robotson.workers.dev"),fetch("https://iyb-create-checkout.robotson.workers.dev",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t})}).then(t=>{console.log(t)}).catch(t=>{console.error(t)})}var h=!0;function d(t){let{allProducts:n}=t,[e,r]=(0,u.useState)([]),s=t=>{!function(t,n,e){let i=n.find(n=>n.id===t.id);e(i?n.map(n=>n.id===t.id?{...n,quantity:n.quantity+1}:n):[...n,{...t,quantity:1}])}(t,e,r)},h=t=>{!function(t,n,e){let i=n.filter(n=>n.id!==t.id);e(i)}(t,e,r)},d=t=>{!function(t,n,e){let i=n.map(n=>n.id===t.id?{...n,quantity:n.quantity+1}:n);e(i)}(t,e,r)},f=t=>{!function(t,n,e){let i=n.map(n=>n.id===t.id?{...n,quantity:n.quantity-1}:n);e(i.filter(t=>t.quantity>0))}(t,e,r)},p=t=>{l(t)};return(0,u.useEffect)(()=>{let t=JSON.parse(localStorage.getItem("cartItems"))||[];r(t)},[]),(0,u.useEffect)(()=>{localStorage.setItem("cartItems",JSON.stringify(e))},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{children:(0,i.jsx)("title",{children:"it's ya continuously integrating boi webstore"})}),(0,i.jsx)("h1",{children:"It's ya boi!"}),(0,i.jsx)("p",{children:"Doin it right once again"}),(0,i.jsx)("ul",{children:n.map(t=>(0,i.jsxs)("li",{children:[t.name,", ",a()(t.price.unit_amount,{fromCents:!0}).format(),(0,i.jsx)("button",{onClick:()=>s(t),children:"Add to Cart"})]},t.id))}),(0,i.jsx)(c,{cartItems:e,onIncrement:d,onDecrement:f,onDelete:h,onCheckout:p})]})}},9008:function(t,n,e){t.exports=e(2636)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=5557)}),_N_E=t.O()}]);