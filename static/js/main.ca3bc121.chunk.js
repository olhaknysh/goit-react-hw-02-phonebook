(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),o=n(14),l=n(3),s=n(4),u=n(1),b=Object(s.a)({contact:{display:"flex",justifyContent:"flex-end",marginBottom:5},button:{marginLeft:10}}),m=function(e){var t=e.id,n=e.name,a=e.number,c=e.onDelete,r=b();return Object(u.jsxs)("li",{className:r.contact,children:[Object(u.jsxs)("p",{children:[n," : ",a]}),Object(u.jsx)("button",{className:r.button,type:"button",onClick:function(){return c(t)},children:"X"})]})},j=function(e){var t=e.contacts,n=e.onDelete;return Object(u.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(u.jsx)(m,{id:t,name:a,number:c,onDelete:n},t)}))})},d=n(8),O=n(11),f=n(30),h=Object(s.a)({form:{display:"flex",flexDirection:"column"},label:{marginBottom:10},labelName:{marginRight:8}}),x={name:"",number:""},p=function(e){var t=e.onSubmit,n=e.onCheckNames,c=Object(a.useState)(x),r=Object(l.a)(c,2),i=r[0],o=r[1],s=i.name,b=i.number,m=h(),j=function(e){o((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))};return Object(u.jsxs)("form",{className:m.form,onSubmit:function(e){e.preventDefault();var a={id:Object(f.a)(),name:s,number:b};n(a.name)||(t(a),o(x))},children:[Object(u.jsxs)("label",{className:m.label,children:[Object(u.jsx)("span",{className:m.labelName,children:"Name"}),Object(u.jsx)("input",{value:s,onChange:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(u.jsxs)("label",{className:m.label,children:[Object(u.jsx)("span",{className:m.labelName,children:"Phone"}),Object(u.jsx)("input",{value:b,onChange:j,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(u.jsx)("button",{type:"submit",children:"Add contact"})]})},g=Object(s.a)({filter:{display:"flex",flexDirection:"column"},label:{marginBottom:10}}),v=function(e){var t=e.onFilterChange,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],o=g();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("label",{className:o.filter,children:[Object(u.jsx)("span",{className:o.label,children:"Find contacts by name"}),Object(u.jsx)("input",{value:r,onChange:function(e){var n=e.target.value;i(n),t(n)},type:"text"})]})})},C=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),s=i[0],b=i[1];return Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(p,{onSubmit:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])}))},onCheckNames:function(e){var t=!!n.find((function(t){return t.name===e}));return t&&alert("".concat(e," is already in contacts.")),t}}),Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(v,{onFilterChange:function(e){b(e)}}),Object(u.jsx)(j,{contacts:function(){var e=s.toLowerCase(),t=n.filter((function(t){return t.name.toLowerCase().includes(e)}));return t}(),onDelete:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};n(27);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ca3bc121.chunk.js.map