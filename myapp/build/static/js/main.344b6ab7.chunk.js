(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{171:function(n,t,e){},172:function(n,t,e){"use strict";e.r(t);var o=e(9),a=e.n(o),i=e(64),s=e.n(i),r=(e(77),e(17)),c=e.n(r),u=e(67),p=e(32),d=e(68),l=e(34),m=e(10),f=e(66),h="\n  mutation CreateTodo(\n    $input: CreateTodoInput!\n    $condition: ModelTodoConditionInput\n  ) {\n    createTodo(input: $input, condition: $condition) {\n      id\n      name\n      description\n    }\n  }\n",_="\n  query ListTodos(\n    $filter: ModelTodoFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        name\n        description\n      }\n      nextToken\n    }\n  }\n",w={aws_project_region:"us-east-1",aws_cognito_identity_pool_id:"us-east-1:ce30d3a2-f6c6-441a-b434-50c147f92e82",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_a8IvzYEes",aws_user_pools_web_client_id:"3qtmaah8hlnqhfhusn6u3jmka",oauth:{},aws_appsync_graphqlEndpoint:"https://p2rt5j4ahraifpiwpihocfcgme.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-j2wh5qzkbvdebizwwvoy3oaqxq",aws_content_delivery_bucket:"myapp-20200216164951-hostingbucket-test",aws_content_delivery_bucket_region:"us-east-1",aws_content_delivery_url:"http://myapp-20200216164951-hostingbucket-test.s3-website-us-east-1.amazonaws.com"};e(171);m.a.configure(w),f.a.configure(w);var b={todos:[]},y=function(n,t){switch(t.type){case"QUERY":return Object(l.a)({},n,{todos:t.todos});case"SUBSCRIPTION":return Object(l.a)({},n,{todos:[].concat(Object(d.a)(n.todos),[t.todo])});default:return n}};function g(){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={name:"Use AWS AppSync",description:"RealTime and Offline"},n.next=3,m.a.graphql(Object(m.b)(h,{input:t}));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var T=function(){var n=Object(o.useReducer)(y,b),t=Object(u.a)(n,2),e=t[0],i=t[1];return Object(o.useEffect)((function(){function n(){return(n=Object(p.a)(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.graphql(Object(m.b)(_));case 2:t=n.sent,i({type:"QUERY",todos:t.data.listTodos.items});case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}();var t=m.a.graphql(Object(m.b)("\n  subscription OnCreateTodo {\n    onCreateTodo {\n      id\n      name\n      description\n    }\n  }\n")).subscribe({next:function(n){var t=n.value.data.onCreateTodo;i({type:"SUBSCRIPTION",todo:t})}});return function(){return t.unsubscribe()}}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("button",{onClick:g},"Add Todo"),a.a.createElement("div",null,e.todos.length>0?e.todos.map((function(n){return a.a.createElement("p",{key:n.id},n.name," : ",n.description)})):a.a.createElement("p",null,"Add some todos!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},31:function(n,t){},72:function(n,t,e){n.exports=e(172)},77:function(n,t,e){}},[[72,1,2]]]);
//# sourceMappingURL=main.344b6ab7.chunk.js.map