(this["webpackJsonppractica-react"]=this["webpackJsonppractica-react"]||[]).push([[0],[,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"label":"red","color":"#F44336"},{"label":"green","color":"#4CAF50"},{"label":"blue","color":"#2196F3"},{"label":"grey","color":"#607D8B"},{"label":"pink","color":"#E91E63"},{"label":"indigo","color":"#3F51B5"}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","text":"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React","completed":true},{"id":"id-2","text":"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 React Router","completed":false},{"id":"id-3","text":"\u041f\u0435\u0440\u0435\u0436\u0438\u0442\u044c Redux","completed":false}]')},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(8),a=n.n(r),o=n(17),i=n(9),s=(n(28),n(3)),l=n(4),u=n(6),d=n(5),j=(n(29),n(30),n(1)),b=function(e){var t=e.step,n=e.onIncrement,c=e.onDecrement;return Object(j.jsxs)("div",{className:"Counter__controls",children:[Object(j.jsxs)("button",{type:"button",onClick:n,children:["\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 ",t]}),Object(j.jsxs)("button",{type:"button",onClick:c,children:["\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 ",t]})]})},h=(n(32),function(e){var t=e.value;return Object(j.jsx)("span",{className:"Counter__value",children:t})}),p="counter/Increment",O="counter/Decrement";n(33);var m=Object(i.b)((function(e){return{value:e.counter.counterValue,step:e.counter.step}}),(function(e){return{onIncrement:function(){return e({type:p,payload:1})},onDecrement:function(){return e({type:O,payload:1})}}}))((function(e){var t=e.value,n=e.step,c=e.onIncrement,r=e.onDecrement;return Object(j.jsxs)("div",{className:"Counter",children:[Object(j.jsx)(h,{value:t}),Object(j.jsx)(b,{step:n,onIncrement:c,onDecrement:r})]})})),x=(n(34),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e.toggle=function(){e.setState((function(e){return{visible:!e.visible}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.visible,t=this.toggle;return Object(j.jsxs)("div",{className:"Dropdown",children:[Object(j.jsx)("button",{type:"button",className:"Dropdown__toggle",onClick:t,children:e?"\u0421\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"}),e&&Object(j.jsx)("div",{className:"Dropdown__menu",children:"\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0435 \u043c\u0435\u043d\u044e"})]})}}]),n}(c.Component)),v=x,f=(n(35),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={activeOptionIdx:0},e.setActiveIdx=function(t){e.setState({activeOptionIdx:t})},e.makeOptionClassName=function(t){var n=["ColorPicker__option"];return t===e.state.activeOptionIdx&&n.push("ColorPicker__option--active"),n.join(" ")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.activeOptionIdx,t=this.props.options,n=this.makeOptionClassName,c=this.setActiveIdx,r=t[e].label;return Object(j.jsxs)("div",{className:"ColorPicker",children:[Object(j.jsx)("h2",{className:"ColorPicker__title",children:"Color Picker"}),Object(j.jsxs)("p",{children:["Choosed color: ",r]}),Object(j.jsx)("div",{children:t.map((function(e,t){var r=e.label,a=e.color;return Object(j.jsx)("button",{className:n(t),style:{backgroundColor:a},onClick:function(){return c(t)}},r)}))})]})}}]),n}(c.Component)),g=f,C=(n(36),function(e){var t=e.todos,n=e.onDeleteTodo;return Object(j.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,c=e.text;return Object(j.jsxs)("li",{className:"TodoList__item",children:[Object(j.jsx)("p",{className:"TodoList__text",children:c}),Object(j.jsx)("button",{onClick:function(){return n(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t)}))})}),y=n(13),k=n(39),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={name:"",surname:"",experience:"junior",licence:!1},e.nameId=Object(k.a)(),e.surnameId=Object(k.a)(),e.handleChange=function(t){var n=t.currentTarget,c=n.name,r=n.value;e.setState(Object(y.a)({},c,r))},e.handleSubmite=function(t){t.preventDefault(),e.setState({name:"",surname:""})},e.handleLicenceChange=function(t){e.setState({licence:t.currentTarget.checked})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.surname,c=e.experience,r=e.licence;return Object(j.jsxs)("form",{onSubmit:this.handleSubmite,children:[Object(j.jsxs)("label",{htmlFor:this.nameId,children:["Name"," ",Object(j.jsx)("input",{type:"text",name:"name",value:t,id:this.nameId,onChange:this.handleChange})]}),Object(j.jsxs)("label",{htmlFor:this.surnameId,children:["Surname",Object(j.jsx)("input",{type:"text",name:"surname",value:n,id:this.surnameId,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submite",children:"Send"}),Object(j.jsx)("h2",{children:"You experience"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"experience",value:"junior",onChange:this.handleChange,checked:"junior"===c}),"Junior"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"experience",value:"middle",onChange:this.handleChange,checked:"middle"===c}),"Middle"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"experience",value:"senior",onChange:this.handleChange,checked:"senior"===c}),"Senior"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",name:"licence",checked:r,onChange:this.handleLicenceChange}),"I agree with the condition"]}),Object(j.jsx)("button",{type:"submit",disabled:!this.state.licence,children:"Send"})]})}}]),n}(c.Component),N=I,_=n(14),S=n(15),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={todos:S},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.todos,t=e.length,n=e.reduce((function(e,t){return t.completed?e+1:e}),0);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{initialValue:0}),Object(j.jsx)(v,{}),Object(j.jsx)(g,{options:_}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"TodoList",children:[Object(j.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e: ",t]}),Object(j.jsxs)("p",{children:["\u041a\u043e\u043b-\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445: ",n]})]}),Object(j.jsx)(C,{todos:e,onDeleteTodo:this.deleteTodo})]})]}),Object(j.jsx)(N,{})]})}}]),n}(c.Component),w=D,T=n(7),A=n(16),F=Object(T.combineReducers)({counterValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case p:return e+c;case O:return e-c;default:return e}},step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e}}),L=Object(T.combineReducers)({counter:F}),R=Object(T.createStore)(L,Object(A.composeWithDevTools)());a.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(i.a,{store:R,children:Object(j.jsx)(w,{})})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.1d3d15cc.chunk.js.map