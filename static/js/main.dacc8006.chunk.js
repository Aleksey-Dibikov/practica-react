(this["webpackJsonppractica-react"]=this["webpackJsonppractica-react"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"label":"red","color":"#F44336"},{"label":"green","color":"#4CAF50"},{"label":"blue","color":"#2196F3"},{"label":"grey","color":"#607D8B"},{"label":"pink","color":"#E91E63"},{"label":"indigo","color":"#3F51B5"}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","text":"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React","completed":true},{"id":"id-2","text":"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 React Router","completed":false},{"id":"id-3","text":"\u041f\u0435\u0440\u0435\u0436\u0438\u0442\u044c Redux","completed":false}]')},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),i=n.n(r),o=(n(15),n(2)),s=n(3),l=n(5),u=n(4),d=(n(16),n(17),n(0)),j=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(d.jsxs)("div",{className:"Counter__controls",children:[Object(d.jsx)("button",{type:"button",onClick:t,children:"\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 1"}),Object(d.jsx)("button",{type:"button",onClick:n,children:"\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 1"})]})},h=(n(19),function(e){var t=e.value;return Object(d.jsx)("span",{className:"Counter__value",children:t})}),b=(n(20),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={value:e.props.initialValue},e.handleIncrement=function(){e.setState((function(e){return{value:e.value+1}}))},e.handleDecrement=function(){e.setState((function(e){return{value:e.value-1}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.value,t=this.handleIncrement,n=this.handleDecrement;return Object(d.jsxs)("div",{className:"Counter",children:[Object(d.jsx)(h,{value:e}),Object(d.jsx)(j,{onIncrement:t,onDecrement:n})]})}}]),n}(a.a.Component));b.defaultProps={initialValue:0};var p=b,O=(n(21),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={visible:!1},e.toggle=function(){e.setState((function(e){return{visible:!e.visible}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.visible,t=this.toggle;return Object(d.jsxs)("div",{className:"Dropdown",children:[Object(d.jsx)("button",{type:"button",className:"Dropdown__toggle",onClick:t,children:e?"\u0421\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"}),e&&Object(d.jsx)("div",{className:"Dropdown__menu",children:"\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0435 \u043c\u0435\u043d\u044e"})]})}}]),n}(c.Component)),m=O,x=(n(22),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={activeOptionIdx:0},e.setActiveIdx=function(t){e.setState({activeOptionIdx:t})},e.makeOptionClassName=function(t){var n=["ColorPicker__option"];return t===e.state.activeOptionIdx&&n.push("ColorPicker__option--active"),n.join(" ")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.activeOptionIdx,t=this.props.options,n=this.makeOptionClassName,c=this.setActiveIdx,a=t[e].label;return Object(d.jsxs)("div",{className:"ColorPicker",children:[Object(d.jsx)("h2",{className:"ColorPicker__title",children:"Color Picker"}),Object(d.jsxs)("p",{children:["Choosed color: ",a]}),Object(d.jsx)("div",{children:t.map((function(e,t){var a=e.label,r=e.color;return Object(d.jsx)("button",{className:n(t),style:{backgroundColor:r},onClick:function(){return c(t)}},a)}))})]})}}]),n}(c.Component)),v=x,f=(n(23),function(e){var t=e.todos,n=e.onDeleteTodo;return Object(d.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,c=e.text;return Object(d.jsxs)("li",{className:"TodoList__item",children:[Object(d.jsx)("p",{className:"TodoList__text",children:c}),Object(d.jsx)("button",{onClick:function(){return n(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t)}))})}),C=n(8),g=n(26),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",surname:"",experience:"junior",licence:!1},e.nameId=Object(g.a)(),e.surnameId=Object(g.a)(),e.handleChange=function(t){var n=t.currentTarget,c=n.name,a=n.value;e.setState(Object(C.a)({},c,a))},e.handleSubmite=function(t){t.preventDefault(),e.setState({name:"",surname:""})},e.handleLicenceChange=function(t){e.setState({licence:t.currentTarget.checked})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.surname,c=e.experience,a=e.licence;return Object(d.jsxs)("form",{onSubmit:this.handleSubmite,children:[Object(d.jsxs)("label",{htmlFor:this.nameId,children:["Name"," ",Object(d.jsx)("input",{type:"text",name:"name",value:t,id:this.nameId,onChange:this.handleChange})]}),Object(d.jsxs)("label",{htmlFor:this.surnameId,children:["Surname",Object(d.jsx)("input",{type:"text",name:"surname",value:n,id:this.surnameId,onChange:this.handleChange})]}),Object(d.jsx)("button",{type:"submite",children:"Send"}),Object(d.jsx)("h2",{children:"You experience"}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:"experience",value:"junior",onChange:this.handleChange,checked:"junior"===c}),"Junior"]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:"experience",value:"middle",onChange:this.handleChange,checked:"middle"===c}),"Middle"]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:"experience",value:"senior",onChange:this.handleChange,checked:"senior"===c}),"Senior"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",name:"licence",checked:a,onChange:this.handleLicenceChange}),"I agree with the condition"]}),Object(d.jsx)("button",{type:"submit",disabled:!this.state.licence,children:"Send"})]})}}]),n}(c.Component),k=y,N=n(9),I=n(10),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:I},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.todos,t=e.length,n=e.reduce((function(e,t){return t.completed?e+1:e}),0);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{initialValue:0}),Object(d.jsx)(m,{}),Object(d.jsx)(v,{options:N}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"TodoList",children:[Object(d.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e: ",t]}),Object(d.jsxs)("p",{children:["\u041a\u043e\u043b-\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445: ",n]})]}),Object(d.jsx)(f,{todos:e,onDeleteTodo:this.deleteTodo})]})]}),Object(d.jsx)(k,{})]})}}]),n}(c.Component),_=S;i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.dacc8006.chunk.js.map