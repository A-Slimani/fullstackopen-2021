(this.webpackJsonpcourseinfo=this.webpackJsonpcourseinfo||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(15),c=t.n(a),r=t(16),o=t(3),u=t(1),i=t(0),s=function(e){var n=e.addName,t=e.newName,a=e.handleNameChange,c=e.newNum,r=e.handleNumChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:a})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:c,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.persons,t=e.deletePerson;return Object(i.jsx)("ul",{children:n.map((function(e,n){return Object(i.jsxs)("li",{children:[e.name," ",e.number,Object(i.jsx)("button",{id:n,onClick:t,children:"delete"})]})}))})},l=function(e){var n=e.setFilter;return Object(i.jsx)("form",{children:Object(i.jsxs)("div",{children:["filter shown with",Object(i.jsx)("input",{onChange:function(e){var t=e.target;n(t.value),console.log(t.value)}})]})})},j=function(e){var n=e.message,t=e.error;return null===n?null:t?Object(i.jsx)("div",{className:"error",children:n}):Object(i.jsx)("div",{className:"added",children:n})},b=t(4),h=t.n(b),m="/api",f=function(){return h.a.get(m).then((function(e){return e.data}))},O=function(e){return h.a.post(m,e)},v=function(e,n){return h.a.put("".concat(m,"/").concat(e),n)},x=function(e){return h.a.delete("".concat(m,"/").concat(e))},p=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(u.useState)(""),b=Object(o.a)(c,2),h=b[0],m=b[1],p=Object(u.useState)(""),g=Object(o.a)(p,2),w=g[0],N=g[1],C=Object(u.useState)(""),S=Object(o.a)(C,2),y=S[0],k=S[1],D=Object(u.useState)(!1),P=Object(o.a)(D,2),T=P[0],A=P[1],E=Object(u.useState)(null),F=Object(o.a)(E,2),I=F[0],J=F[1],L=Object(u.useState)(!1),B=Object(o.a)(L,2),q=B[0],z=B[1];Object(u.useEffect)((function(){f().then((function(e){a(e.data),A(!1)}))}),[T]);var G=""===h?t:t.filter((function(e){return e.name.toLowerCase().match(h.toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(j,{message:I,error:q}),Object(i.jsx)("br",{}),Object(i.jsx)(l,{setFilter:m}),Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsx)(s,{addName:function(e){e.preventDefault();var n={name:w,number:y};if(t.find((function(e){return e.name===n.name}))){var c,o=Object(r.a)(t);try{for(o.s();!(c=o.n()).done;){var u=c.value;""===w||""===y?window.alert("missing name and or number"):u.name===n.name&&(u.number===n.number?window.alert("".concat(n.name," and ").concat(n.number," is already added to the phonebook")):window.confirm("".concat(n.name," is already added to the phonebook, replace the old number with a new one?"))&&(v(u.id,n).catch((function(){J("Information of '".concat(n.name,"' had already been removed from the server")),z(!0)})),A(!0)))}}catch(i){o.e(i)}finally{o.f()}}else O(n).then((function(){a(t.concat(n)),A(!0),J("Added ".concat(n.name)),setTimeout((function(){J(null)}),5e3)}));N(""),k("")},newName:w,handleNameChange:function(e){e.preventDefault(),N(e.target.value)},newNum:y,handleNumChange:function(e){e.preventDefault(),k(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(d,{persons:G,deletePerson:function(e){window.confirm("Delete ".concat(t[e.currentTarget.id].name))&&(x(t[e.currentTarget.id].id),A(!0))}})]})},g=(t(40),h.a.get("http://localhost:3001/persons").then((function(e){var n=e.data;console.log(n)})));console.log(g),c.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.5e0fa44c.chunk.js.map