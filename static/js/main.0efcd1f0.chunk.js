(this["webpackJsonpgameapi-react"]=this["webpackJsonpgameapi-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(25),a(5));var s=function(){var e={color:"#fff"};return r.a.createElement("nav",null,r.a.createElement(l.b,{style:e,to:"/"},r.a.createElement("h3",null,"Logo")),r.a.createElement("ul",{className:"Nav-links"},r.a.createElement(l.b,{style:e,to:"/shop"},r.a.createElement("li",null,"Shop")),r.a.createElement(l.b,{style:e,to:"/about"},r.a.createElement("li",null,"About"))))};var i=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"HomePage"))},u=a(8),m=a.n(u),p=a(10),h=a(11);var f=function(){var e={color:"gainsboro",borderRadius:"15px"};Object(n.useEffect)((function(){s()}),[]);var t=Object(n.useState)([]),a=Object(h.a)(t,2),c=a[0],o=a[1],s=function(){var e=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a.results),o(a.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"game"},c.map((function(t){return r.a.createElement("h1",{className:"gameText",key:t.id},r.a.createElement("div",null,r.a.createElement("img",{src:t.background_image,style:e,width:"560",height:"400",alt:""})),r.a.createElement(l.b,{style:e,to:"/shop/".concat(t.id)},t.name))})))};var d=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"))};var E=function(e){var t=e.match,a={color:"gainsboro",borderRadius:"15px"};Object(n.useEffect)((function(){i(),console.log(t)}),[]);var c=Object(n.useState)({developers:{},clip:{},clips:{}}),o=Object(h.a)(c,2),l=o[0],s=o[1],i=function(){var e=Object(p.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.rawg.io/api/games/".concat(t.params.id));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,s(n),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",{style:a},l.name),r.a.createElement("video",{style:a,src:l.clip.clip,controls:!0,autoPlay:!0,width:"760",alt:""}),r.a.createElement("h2",{style:a},l.website))},v=a(6);a(32);var g=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:i}),r.a.createElement(v.a,{path:"/about",component:d}),r.a.createElement(v.a,{exact:!0,path:"/shop",component:f}),r.a.createElement(v.a,{path:"/shop/:id",component:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.0efcd1f0.chunk.js.map