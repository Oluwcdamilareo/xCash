(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},19:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),i=a.n(l),s=(a(16),a(2)),o=a(3),c=a(5),m=a(4),u=a(6),d=a(50),h=a(49),E=a(48),p=(a(26),a(11)),f=a(10),b=(a(28),function(e){var t=e.formErrors;return r.a.createElement("div",{className:"form-errors"},Object.keys(t).map(function(e,a){return t[e].length>0?r.a.createElement("p",{key:a,className:"form-error"},"The ".concat(e," you entered ").concat(t[e])):""}))}),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(f.a)({},t,n),a.validateField(t,n))},a.state={name:"",suggestion:"",suggestionValid:!1,nameValid:!1,formErrors:{name:"",suggestion:""},formValid:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.nameValid,n=this.state.suggestionValid,r=this.state.formErrors;switch(e){case"name":a=t.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/),r.name=a?"":"is invalid";break;case"suggestion":n=t.length>=5,r.suggestion=n?"":"needs to be at least 10 characters"}this.setState({nameValid:a,suggestionValid:n,formErrors:r},this.validateForm(a,n))}},{key:"validateForm",value:function(e,t){this.setState({formValid:e&&t})}},{key:"render",value:function(){var e=this.props.close;return r.a.createElement("div",{className:"suggest-feature"},r.a.createElement(b,{formErrors:this.state.formErrors}),r.a.createElement("h1",null,"Your feedback is important to us."),r.a.createElement("p",null,"We are committed to building a better product for you. Help us."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("input",{name:"name",placeholder:"Name",className:"suggest-input",value:this.state.name,onChange:this.handleInput})),r.a.createElement("li",null,r.a.createElement("input",{name:"suggestion",autoComplete:"off",className:"suggestion suggest-input ",value:this.state.suggestion,onChange:this.handleInput,placeholder:"Suggestion"})),r.a.createElement("li",{className:"suggestion-buttons"},r.a.createElement("button",{onClick:e,className:"close-suggestion"},"Close"),r.a.createElement("button",{onClick:e,className:"submit-suggestion",disabled:Boolean(!this.state.formValid)},"Submit"))))}}]),t}(r.a.Component),g=a(12),O=(a(30),function(e){e.open;var t=Object(g.a)(e,["open"]);return r.a.createElement("button",Object.assign({name:"feature",id:"submit-a-feature"},t),"Suggest a feature")}),j={width:"60%",borderRadius:"5px",border:"none",background:"rgb(223,232,243)"},y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{modal:!0,closeOnDocumentClick:!1,contentStyle:j,overlayStyle:{background:"rgb(98,106,130)"},trigger:function(e){return r.a.createElement(O,{open:e})}},function(e){return r.a.createElement(v,{close:e})})}}]),t}(n.Component),k=(a(32),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"home-content"},r.a.createElement("div",{id:"hero-message-home"},r.a.createElement("h1",null,"It's your money, you shouldn't have to line up for it"),r.a.createElement("p",null,"No more ATM lines in the hot sun.")),r.a.createElement("div",{className:"home-buttons"},r.a.createElement(d.a,{to:"/order"},"Order Cash"),r.a.createElement(y,null)))}}]),t}(r.a.Component)),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(f.a)({},t,n),function(){a.validateField(t,n)})},a.handleSubmit=function(e){e.preventDefault()},a.state={email:"",password:"",emailValid:!1,formErrors:{email:""},passwordValid:!1,formValid:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.emailValid,n=this.state.passwordValid,r=this.state.formErrors;switch(e){case"email":a=t.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),r.email=a?"":"is invalid";break;case"password":n=t.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/)}this.setState({emailValid:a,passwordValid:n,formErrors:r},this.validateForm(a,n))}},{key:"validateForm",value:function(e,t){this.setState({formValid:e&&t})}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-error-container"},r.a.createElement(b,{formErrors:this.state.formErrors})),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{onChange:this.handleInput,name:"email",placeholder:"Email Address",value:t}))),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"password",onChange:this.handleInput,name:"password",placeholder:"Password",value:a}))),r.a.createElement("div",null,r.a.createElement("button",{disabled:Boolean(!this.state.formValid),onClick:this.handleSubmit,className:"submit-button form-button"},"Sign In")),r.a.createElement("div",{className:"form-link"},r.a.createElement(d.a,{to:"/sign-up"},"Don't have an account? Sign up"))))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"login-container",className:"form"},r.a.createElement("div",null,r.a.createElement("h1",{className:"form-header"},"Sign in to xCash"),r.a.createElement("p",{className:"form-subheading"},"Avoid stressful lines and unreliable ATM machines forever")),r.a.createElement("div",null,r.a.createElement(N,null)))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(f.a)({},t,n),function(){a.validateField(t,n)})},a.handleSubmit=function(e){e.preventDefault()},a.state={email:"",password:"",fullname:"",confirmation:"",formValid:!1,emailValid:!1,passwordValid:!1,ConfirmationValid:"",fullNameValid:!1,formErrors:{Email:"",Password:"",Name:"",Confirmation:""}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.emailValid,n=this.state.passwordValid,r=this.state.formErrors,l=this.state.fullNameValid,i=this.state.ConfirmationValid,s=this.state.password;switch(e){case"email":a=t.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),r.email=a?"":"is invalid";break;case"fullname":l=t.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/),r.Name=l?"":"is invalid";break;case"password":n=t.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/),r.password=n?"":"needs to include: 1 Lowercase and Uppercase character, one number and be atleast 6 characters long";break;case"confirmation":i=!!Boolean(t===s),r.Confirmation=!!i||"needs to be the same as your password"}this.setState({emailValid:a,passwordValid:n,formErrors:r,fullNameValid:l,ConfirmationValid:i,formValid:n&&l&&i&&a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-error-container"},r.a.createElement(b,{formErrors:this.state.formErrors})),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("input",{name:"fullname",placeholder:"Full Name",onChange:this.handleInput,value:this.state.fullname})),r.a.createElement("div",null,r.a.createElement("input",{name:"email",placeholder:"Email Address",onChange:this.handleInput,value:this.state.email})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",name:"password",autoComplete:"off",placeholder:"Password",onChange:this.handleInput,value:this.state.password})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",name:"confirmation",autoComplete:"off",placeholder:"Password Confirmation",onChange:this.handleInput,value:this.state.confirmation})),r.a.createElement("div",null,r.a.createElement("button",{disabled:Boolean(!this.state.formValid),className:"submit-button form-button"},"Sign up")),r.a.createElement("div",{className:"form-link"},r.a.createElement(d.a,{to:"/sign-in"},"Already have an account? Sign in"))))}}]),t}(r.a.Component),V=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement("h1",{className:"form-header"},"Sign up to xCash"),r.a.createElement("p",{className:"form-subheading"},"Forget about ATM stops. Order money and get it wherever you're going"),r.a.createElement(C,null))}}]),t}(r.a.Component),S=(a(37),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(f.a)({},t,n),a.validateField(t,n))},a.state={formValid:!1,nameValid:!1,addressValid:!1,amountValid:!1,formErrors:{name:"",address:"",amount:""}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.nameValid,n=this.state.addressValid,r=this.state.amountValid,l=this.state.formErrors;switch(e){case"name":a=t.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/),l.name=a?"":"is invalid";break;case"address":n=t.length>10,l.address=n?"":"needs to be at least 10 characters";break;case"amount":r=Number(t)>=Number(1e3)&&Number(t)<Number(5e4),l.amount=r?"":"needs to between 1000 and 50000"}this.setState({nameValid:a,amountValid:r,addressValid:n,formErrors:l}),this.validateForm(a,r,n)}},{key:"validateForm",value:function(e,t,a){this.setState({formValid:e&&t&&a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement(b,{formErrors:this.state.formErrors}),r.a.createElement("div",null,r.a.createElement("input",{name:"name",placeholder:"Full name",onChange:this.handleInput,value:this.state.name})),r.a.createElement("div",null,r.a.createElement("input",{name:"address",placeholder:"Address",onChange:this.handleInput,value:this.state.address})),r.a.createElement("div",null,r.a.createElement("input",{name:"amount",placeholder:"Amount",onChange:this.handleInput,value:this.state.amount})),r.a.createElement("div",null,r.a.createElement("button",{disabled:Boolean(!this.state.formValid),className:"form-button"},"Order")),r.a.createElement("div",{id:"suggestion-order-form"},r.a.createElement(y,null))))}}]),t}(r.a.Component)),A=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"order-form"},r.a.createElement("div",{id:"order-left"},r.a.createElement("h1",{className:"form-header"},"No more ATM Lines"),r.a.createElement("p",{className:"order-subheading"},"Quick cash, whether you want it. You'll never stress again"),r.a.createElement("div",{id:"suggestion-order"},r.a.createElement(y,null))),r.a.createElement("div",{id:"order-right"},r.a.createElement(S,null)))}}]),t}(r.a.Component),I=(a(39),function(e){var t=e.close;return r.a.createElement("div",null,r.a.createElement("div",{className:"pricing-header"},r.a.createElement("h3",null,"Pricing and fees")),r.a.createElement("div",{className:"pricing-content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"\u20a6"),"1000-3000 (",r.a.createElement("span",null,"\u20a6"),"100)"),r.a.createElement("hr",{style:{width:"40px"}}),r.a.createElement("li",null,"4000-9000 (",r.a.createElement("span",null,"\u20a6"),"200)"),r.a.createElement("hr",{style:{width:"40px"}}),r.a.createElement("li",null,r.a.createElement("span",null,"\u20a6"),"10000-15000 (",r.a.createElement("span",null,"\u20a6"),"400)"),r.a.createElement("hr",{style:{width:"40px"}}),r.a.createElement("li",null,r.a.createElement("span",null,"\u20a6"),"15000-20000 (",r.a.createElement("span",null,"\u20a6"),"500)"),r.a.createElement("hr",{style:{width:"40px"}}),r.a.createElement("li",null,r.a.createElement("span",null,"\u20a6"),"20000+ (",r.a.createElement("span",null,"\u20a6"),"700)"))),r.a.createElement("div",{className:"pricing-footer"},r.a.createElement("label",null,"Please note that pricing is subject to change",r.a.createElement("button",{onClick:t,className:"pricing-footer-button"},"close"))))}),F=(a(41),function(e){e.open;var t=Object(g.a)(e,["open"]);return r.a.createElement("button",Object.assign({className:"pricing-button"},t),"Pricing")}),x={background:"rgb(4, 105, 182)",border:"none",borderRadius:"5px",width:"70%"},z=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{modal:!0,trigger:function(e){return r.a.createElement(F,{open:e})},contentStyle:x,overlayStyle:{background:"rgba(255,255,255,.9"}},function(e){return r.a.createElement(I,{close:e})})}}]),t}(n.Component),Z=function(){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement(d.a,{to:"/order"},"Order"),r.a.createElement(z,null),r.a.createElement(d.a,{to:"/sign-in"},"Sign in"),r.a.createElement(d.a,{to:"/sign-up",id:"sign-up"},"Sign up"))},P=(a(43),function(e){var t=e.close;return r.a.createElement("div",{className:"menu"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:t},r.a.createElement(d.a,{exact:!0,to:"/"},"Home")),r.a.createElement("li",{onClick:t},r.a.createElement(d.a,{to:"/order"},"Order")),r.a.createElement("li",{id:"pricing-button-mobile"},r.a.createElement(z,null)),r.a.createElement("li",{onClick:t},r.a.createElement(d.a,{to:"/sign-in"},"Sign In")),r.a.createElement("li",{onClick:t},r.a.createElement(d.a,{to:"/sign-up"},"Sign up"))))}),$=(a(45),function(e){var t=e.open,a=Object(g.a)(e,["open"]);return r.a.createElement("div",Object.assign({className:t?"burger-menu open":"burger-menu"},a),r.a.createElement("div",{className:"bar1",key:"b1"}),r.a.createElement("div",{className:"bar2",key:"b2"}),r.a.createElement("div",{className:"bar3",key:"b3"}))}),B={width:"80%",height:"70%",border:"none",textAlign:"center",color:"white",borderRadius:"10px",background:"none"},D=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(d.a,{exact:!0,to:"/"},r.a.createElement("img",{src:"",alt:"xCashng",id:"logo-header"})),r.a.createElement(p.a,{modal:!0,closeOnDocumentClick:!0,className:"popup",contentStyle:B,overlayStyle:{background:"rgba(255,255,255,.9"},trigger:function(e){return r.a.createElement($,{open:e})}},function(e){return r.a.createElement(P,{close:e})}),r.a.createElement(Z,null))},T=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{id:"app-container"},r.a.createElement(D,null),r.a.createElement("div",{className:"content"},r.a.createElement(E.a,{exact:!0,path:"/",component:k}),r.a.createElement(E.a,{path:"/sign-in",component:w}),r.a.createElement(E.a,{path:"/sign-up",component:V}),r.a.createElement(E.a,{path:"/order",component:A})),r.a.createElement("div",{id:"footer"},"xCash 2018")))}}]),t}(r.a.Component),M=document.getElementById("root");i.a.render(r.a.createElement(T,null),M)}},[[19,2,1]]]);
//# sourceMappingURL=main.61d4c0ed.chunk.js.map