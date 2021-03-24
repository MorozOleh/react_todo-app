(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(8),l=n.n(c),r=(n(14),n(15),n(16),n(2)),i=n(6),u=n(1);function d(e){return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"))}function s(e){var t=e.onAddTodo,n=Object(o.useState)(""),c=Object(u.a)(n,2),l=c[0],r=c[1];return a.a.createElement("form",null,a.a.createElement("input",{type:"text",value:l,onChange:function(e){return r(e.target.value)},onKeyPress:function(e){if("Enter"===e.key&&l.trim()){var n={id:"".concat(+new Date),title:l,completed:!1};t(n),r("")}},className:"new-todo",placeholder:"What needs to be done?"}))}var m=n(3),f=n.n(m);function b(e){var t=e.todo,n=e.onAddChecked,c=e.onRemoveTodo,l=e.onEditTitle,i=t.title,d=t.completed,s=t.id,m=Object(o.useState)(!1),b=Object(u.a)(m,2),p=b[0],E=b[1],v=Object(o.useState)(t.title),O=Object(u.a)(v,2),g=O[0],j=O[1];return a.a.createElement("li",{className:f()({completed:d,editing:p})},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",checked:d,onChange:function(){n(Object(r.a)(Object(r.a)({},t),{},{completed:!d}))},className:"toggle"}),a.a.createElement("label",{onDoubleClick:function(){return E(!0)}},i),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return c(s)}})),a.a.createElement("input",{type:"text",className:"edit",value:g,onChange:function(e){j(e.target.value)},onBlur:function(){if(!g)return j(i),void E(!1);var e=Object(r.a)(Object(r.a)({},t),{},{title:g});l(e),E(!1)},onKeyPress:function(e){"Enter"===e.key&&E(!1)},onKeyDown:function(e){"Escape"===e.key&&(j(i),E(!1))},ref:function(e){return e&&e.focus()}}))}function p(e){var t=e.todos,n=e.onAddChecked,o=e.onRemoveTodo,c=e.onEditTitle;return a.a.createElement("ul",{className:"todo-list"},t.map((function(e){return a.a.createElement(b,{key:e.id,todo:e,onAddChecked:n,onRemoveTodo:o,onEditTitle:c})})))}function E(e){var t=e.onToggleTodos,n=e.activeTodos,c=Object(o.useState)(!1),l=Object(u.a)(c,2),r=l[0],i=l[1],d=!n;Object(o.useEffect)((function(){i(d)}),[d]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"checkbox",onChange:function(){i(!r),t(!r)},checked:r,id:"toggle-all",className:"toggle-all"}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))}function v(e){var t=e.todos,n=e.onAddChecked,o=e.activeTodos,c=e.onToggleTodos,l=e.onRemoveTodo,r=e.onEditTitle;return a.a.createElement("section",{className:"main"},t.length>0&&a.a.createElement(E,{activeTodos:o,onToggleTodos:c}),t.length>0&&a.a.createElement(p,{todos:t,onAddChecked:n,onRemoveTodo:l,onEditTitle:r}))}function O(e){var t=e.activeTodos,n=e.onFilterTodos,c=e.onRemoveCompleted,l=e.todos,r=Object(o.useState)("all"),i=Object(u.a)(r,2),d=i[0],s=i[1],m=l.some((function(e){return e.completed})),b=function(e){s(e),n(e)};return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},"".concat(t," items left")),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:f()({selected:"all"===d}),onClick:function(){return b("all")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:f()({selected:"active"===d}),onClick:function(){return b("active")}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:f()({selected:"completed"===d}),onClick:function(){return b("completed")}},"Completed"))),m&&a.a.createElement("button",{type:"button",className:"clear-completed",onClick:c},"Clear completed"))}p.defaultProps={todos:[]},v.defaultProps={todos:[]};function g(){var e=function(e,t){var n=Object(o.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),a=Object(u.a)(n,2),c=a[0],l=a[1];return Object(o.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[c,e]),[c,l]}("todos",[]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(o.useState)([]),m=Object(u.a)(l,2),f=m[0],b=m[1];Object(o.useEffect)((function(){b(n)}),[n]);var p=Object(o.useCallback)((function(e){return c([].concat(Object(i.a)(n),[e]))}),[n]),E=Object(o.useCallback)((function(e){var t=n.map((function(t){return t.id===e.id?e:t}));c(t)}),[n]),g=n.filter((function(e){return!e.completed})).length,j=Object(o.useCallback)((function(e){c(n.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{completed:e})})))}),[n]),k=Object(o.useCallback)((function(e){switch(e){case"active":b(n.filter((function(e){return!e.completed})));break;case"completed":b(n.filter((function(e){return e.completed})));break;default:b(Object(i.a)(n))}}),[n]),h=Object(o.useCallback)((function(e){c(n.filter((function(t){return t.id!==e})))}),[n]),T=Object(o.useCallback)((function(){c(n.filter((function(e){return!e.completed})))}),[n]),C=Object(o.useCallback)((function(e){c(n.map((function(t){return t.id===e.id?e:t})))}),[n]);return a.a.createElement("section",{className:"todoapp"},a.a.createElement(d,null),a.a.createElement(s,{onAddTodo:p}),a.a.createElement(v,{todos:f,onAddChecked:E,onRemoveTodo:h,pendingToDo:g,activeTodos:g,onToggleTodos:j,onEditTitle:C}),n.length>0&&a.a.createElement(O,{activeTodos:g,onFilterTodos:k,onRemoveCompleted:T,todos:n}))}l.a.render(a.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.6a55c54f.chunk.js.map