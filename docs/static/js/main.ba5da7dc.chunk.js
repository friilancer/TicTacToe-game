(this["webpackJsonptic-tac-toe-app"]=this["webpackJsonptic-tac-toe-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(9),n(1)),s=(n(10),function(e){return a.createElement("button",{className:"square",onClick:e.onClick},e.value)}),u=function(e){var t=function(t){return a.createElement(s,{value:e.squares[t],onClick:function(){return e.onClick(t)},className:""==e.winner?"":e.winner.every((function(e){return e==t}))?"bold":""})};return a.createElement("div",null,a.createElement("div",{className:"status"},e.status),a.createElement("div",{className:"board-row"},t(0),t(1),t(2)),a.createElement("div",{className:"board-row"},t(3),t(4),t(5)),a.createElement("div",{className:"board-row"},t(6),t(7),t(8)))},i=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(l.a)(t[n],3),r=a[0],c=a[1],o=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[o])return{winner:e[r],collection:[r,c,o]}}return null},m=function(){var e=a.useState([{squares:Array(9).fill(null)}]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=a.useState(!0),o=Object(l.a)(c,2),s=o[0],m=o[1],f=a.useState(0),v=Object(l.a)(f,2),w=v[0],d=v[1],E=["col:1, row:1","col:2, row:1","col:3, row:1","col:1, row:2","col:2, row:2","col:3, row:2","col:1, row:3","col:2, row:3","col:3, row:3"],b=n[w],p=i(b.squares),q=n.map((function(e,t){var r;n[t].squares.map((function(e,a){0!=t&&n[t-1].squares[a]!=e&&(r=a)}));var c=t?"Go to move #".concat(t," at ").concat(E[r]):"Go to game start";return a.createElement("li",{key:t},a.createElement("button",{className:t==w?"bold":"",onClick:function(){return function(e){d(e),m(e%2===0)}(t)}},c))}));return a.createElement("div",{className:"game"},a.createElement("div",{className:"game-board"},a.createElement(u,{squares:b.squares,onClick:function(e){!function(e){var t=n.slice(0,w+1),a=t[t.length-1],c=a.squares.slice();i(a.squares)||c[e]||(c[e]=s?"X":"O",r(t.concat([{squares:c}])),m(!s),d(t.length))}(e)},status:function(e,t){var n=t.every((function(e){return null!=e}));return e||n?e?"Winner ".concat(e.winner):"Draw":"Next player: ".concat(s?"X":"O")}(p,b.squares),winner:p?p.collection:""})),a.createElement("div",{className:"game-info"},a.createElement("ol",null,q)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.ba5da7dc.chunk.js.map