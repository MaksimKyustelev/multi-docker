(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(17),c=n.n(s),i=(n(28),n.p+"static/media/logo.6ce24c58.svg"),u=(n(29),n(57)),o=n(56),l=n(58),h=n(1),d=function(){return Object(h.jsxs)("div",{children:["Im some other page!",Object(h.jsx)(o.a,{to:"/",children:"Go back home"})]})},j=n(6),p=n.n(j),x=n(8),v=n(18),b=n(19),f=n(22),O=n(21),m=n(9),g=n.n(m),y=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={seenIndexes:[],values:{},index:""},e.handleSubmit=function(){var t=Object(x.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,g.a.post("/api/values",{index:e.state.index});case 3:e.setState({index:""});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.fetchValues(),this.fetchIndexes()}},{key:"fetchValues",value:function(){var e=Object(x.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/values/current");case 2:t=e.sent,this.setState({values:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchIndexes",value:function(){var e=Object(x.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/values/all");case 2:t=e.sent,this.setState({seenIndexes:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderSeenIndex",value:function(){return this.state.seenIndexes.map((function(e){return e.number})).join(", ")}},{key:"renderValues",value:function(){var e=[];for(var t in this.state.values)e.push(Object(h.jsxs)("div",{children:["For index ",t," I calculated ",this.state.values[t]]},t));return e}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{children:"Enter your index"}),Object(h.jsx)("input",{value:this.state.index,onChange:function(t){return e.setState({index:t.target.value})}}),Object(h.jsx)("button",{children:"Submit"})]}),Object(h.jsx)("h3",{children:"Indexes I have seen:"}),this.renderSeenIndex(),Object(h.jsx)("h3",{children:"Calculated values:"}),this.renderValues()]})}}]),n}(a.Component),I=y;var k=function(){return Object(h.jsx)(u.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(h.jsx)(o.a,{to:"/",children:"Home"}),Object(h.jsx)(o.a,{to:"/otherpage",children:"Other Page"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:I}),Object(h.jsx)(l.a,{path:"/otherpage",component:d})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),S()}},[[54,1,2]]]);
//# sourceMappingURL=main.fa177059.chunk.js.map