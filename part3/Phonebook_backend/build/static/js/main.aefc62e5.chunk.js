(this.webpackJsonpcourseinfo=this.webpackJsonpcourseinfo||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(15),c=t.n(a),r=t(16),o=t(3),u=t(1),i=t(0),s=function(e){var n=e.addName,t=e.newName,a=e.handleNameChange,c=e.newNum,r=e.handleNumChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:a})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:c,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.persons,t=e.deletePerson;return Object(i.jsx)("ul",{children:n.map((function(e,n){return Object(i.jsxs)("li",{children:[e.name," ",e.number,Object(i.jsx)("button",{id:n,onClick:t,children:"delete"})]})}))})},l=function(e){var n=e.setFilter;return Object(i.jsx)("form",{children:Object(i.jsxs)("div",{children:["filter shown with",Object(i.jsx)("input",{onChange:function(e){var t=e.target;n(t.value),console.log(t.value)}})]})})},j=function(e){var n=e.message,t=e.error;return null===n?null:t?Object(i.jsx)("div",{className:"error",children:n}):Object(i.jsx)("div",{className:"added",children:n})},b=t(4),m=t.n(b),h="/api/persons",f=function(){return m.a.get(h).then((function(e){return e.data}))},O=function(e){return m.a.post(h,e)},v=function(e,n){return m.a.put("".concat(h,"/").concat(e),n)},x=function(e){return m.a.delete("".concat(h,"/").concat(e))},p=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(u.useState)(""),b=Object(o.a)(c,2),m=b[0],h=b[1],p=Object(u.useState)(""),w=Object(o.a)(p,2),g=w[0],N=w[1],C=Object(u.useState)(""),S=Object(o.a)(C,2),y=S[0],k=S[1],T=Object(u.useState)(!1),D=Object(o.a)(T,2),P=D[0],A=D[1],E=Object(u.useState)(null),F=Object(o.a)(E,2),I=F[0],J=F[1],L=Object(u.useState)(!1),B=Object(o.a)(L,2),q=B[0],z=B[1];Object(u.useEffect)((function(){f().then((function(e){a(e),A(!1)}))}),[P]);var G=""===m?t:t.filter((function(e){return e.name.toLowerCase().match(m.toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(j,{message:I,error:q}),Object(i.jsx)("br",{}),Object(i.jsx)(l,{setFilter:h}),Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsx)(s,{addName:function(e){e.preventDefault();var n={name:g,number:y};if(t.find((function(e){return e.name===n.name}))){var c,o=Object(r.a)(t);try{for(o.s();!(c=o.n()).done;){var u=c.value;""===g||""===y?window.alert("missing name and or number"):u.name===n.name&&(u.number===n.number?window.alert("".concat(n.name," and ").concat(n.number," is already added to the phonebook")):window.confirm("".concat(n.name," is already added to the phonebook, replace the old number with a new one?"))&&(v(u.id,n).catch((function(){J("Information of '".concat(n.name,"' had already been removed from the server")),z(!0)})),J("".concat(u.name," has been updated")),A(!0)))}}catch(i){o.e(i)}finally{o.f()}}else O(n).then((function(){a(t.concat(n)),A(!0),J("Added ".concat(n.name)),setTimeout((function(){J(null)}),5e3)})).catch((function(e){z(!0),J("".concat(e.response.data.error)),setTimeout((function(){J(null)}),5e3)}));N(""),k(""),z(!1)},newName:g,handleNameChange:function(e){e.preventDefault(),N(e.target.value)},newNum:y,handleNumChange:function(e){e.preventDefault(),k(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(d,{persons:G,deletePerson:function(e){window.confirm("Delete ".concat(t[e.currentTarget.id].name))&&(x(t[e.currentTarget.id].id),A(!0),J("".concat(t[e.currentTarget.id].name," removed")),setTimeout((function(){J(null)}),5e3))}})]})};t(40);c.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.aefc62e5.chunk.js.map