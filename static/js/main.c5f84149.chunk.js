(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{20:function(t,n,e){},21:function(t,n,e){},31:function(t,n,e){},32:function(t,n,e){},33:function(t,n,e){},34:function(t,n,e){},35:function(t,n,e){"use strict";e.r(n);var c=e(1),a=e.n(c),i=e(13),o=e.n(i),r=(e(20),e(8)),s=e(6),u=e(5),j=e(2),d=(e(21),e(0));var l=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"rainbow-text",children:"Homepage of the one and only shop for youuu!"}),Object(d.jsx)("p",{className:"rainbow-text",children:"with annoying text that wont stop moving"}),Object(d.jsx)(u.b,{className:"link",to:"/shop",children:Object(d.jsx)("h2",{children:"START SHOPPING NOW!"})})]})};e(31);var b=function(t){return Object(d.jsx)("div",{className:"nav",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{className:"link",to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{className:"link",to:"/shop",children:"Shop"})}),Object(d.jsxs)("li",{children:[Object(d.jsx)(u.b,{className:"link",to:"/cart",children:"Shopping Cart"})," ",t.count]})]})})};e(32),e(33);var h=function(t){var n=Object(c.useState)(1),e=Object(s.a)(n,2),a=e[0],i=e[1];return Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("h5",{children:t.data.name}),Object(d.jsx)("img",{src:t.data.img,alt:t.data.name}),Object(d.jsxs)("p",{children:["Price: ",t.data.price,"$"]}),Object(d.jsxs)("div",{id:"amount",children:[Object(d.jsx)("button",{id:"subtract",onClick:function(){var t=a;a>1&&t--,i(t)},children:"-"}),Object(d.jsx)("input",{type:"number",min:"1",value:a,onChange:function(t){i(t.target.value)}}),Object(d.jsx)("button",{id:"add",onClick:function(){var t=a;t++,i(t)},children:"+"})]}),Object(d.jsx)("button",{onClick:function(n){t.addItem(t.data,a)},children:"Add to cart"})]})};var m=function(t){var n=Object(c.useState)(t.currentItems),e=Object(s.a)(n,2),a=e[0],i=e[1];function o(t,n){!function(t,n){if(""===t)return!1;var e=a;e=a.filter((function(n){return n.name===t})).length>0?a.map((function(e){return e.name===t&&(e.count=parseInt(e.count),e.count+=parseInt(n)),e})):a.concat({name:t,count:n});i(e)}(t.name,n)}function r(){t.count(a.length)}return Object(c.useEffect)((function(){!function(t){t.addItems(a),r()}(t)}),[a]),Object(d.jsxs)("div",{className:"shop",children:[Object(d.jsx)("h1",{children:"Banana Shop"}),Object(d.jsx)("div",{className:"products",children:[{name:"Teen Banana",img:"https://media.istockphoto.com/photos/green-plantain-picture-id138001887?k=20&m=138001887&s=612x612&w=0&h=UGD5rUs37gxxPlNnFliHm001nyf4QNCjmo7nuOAlY0o=",price:1,count:0},{name:"Banana",img:"https://static.turbosquid.com/Preview/2014/07/03__18_47_33/banana_03.jpgbde52cae-2ae2-483f-bf01-645136084da8Larger.jpg",price:200,count:0},{name:"Dead Banana",img:"https://media.istockphoto.com/photos/rotten-banana-picture-id519714894?s=612x612",price:1e6,count:0}].map((function(t){return Object(d.jsx)(h,{data:t,addItem:o},t.name)}))})]})};e(34);var O=function(t){function n(n){a(t.items.filter((function(t){if(t.name!==n.target.id)return t})))}function e(n){a(t.items.map((function(t){return t.name===n.target.id&&t.count++,t})))}function c(n){a(t.items.map((function(t){return t.name===n.target.id&&t.count--,t})))}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.length;t.changeItems(n),i(e)}function i(n){t.count(n)}return Object(d.jsxs)("div",{className:"shopping-cart",children:[Object(d.jsx)("h1",{children:"Shopping Cart"}),t.items.map((function(t){return Object(d.jsxs)("div",{className:"cart-product",children:[Object(d.jsx)("h3",{children:t.name}),Object(d.jsx)("h4",{children:t.count}),Object(d.jsx)("button",{id:t.name,onClick:c,children:"-"}),Object(d.jsx)("button",{id:t.name,onClick:e,children:"+"}),Object(d.jsx)("button",{id:t.name,onClick:n,children:"del"})]},t.name)})),Object(d.jsx)("button",{id:"checkout",onClick:function(){alert("you cant checkout")},children:"CHECKOUT!!!"}),Object(d.jsx)("button",{id:"clear",onClick:function(){a([])},children:"CLEAR CART"})]})};var p=function(){var t=Object(c.useState)([]),n=Object(s.a)(t,2),e=n[0],a=n[1],i=Object(c.useState)(0),o=Object(s.a)(i,2),h=o[0],p=o[1];function x(t){a(t)}function f(t){p(t)}return Object(c.useEffect)((function(){p(e.length)}),[h]),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(b,{count:h}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",component:l}),Object(d.jsx)(j.a,{exact:!0,path:"/shop",render:function(t){return Object(d.jsx)(m,Object(r.a)(Object(r.a)({},t),{},{addItems:x,count:f,currentItems:e}))}}),Object(d.jsx)(j.a,{exact:!0,path:"/cart",render:function(t){return Object(d.jsx)(O,Object(r.a)(Object(r.a)({},t),{},{items:e,changeItems:x,count:f}))}})]})]})};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c5f84149.chunk.js.map