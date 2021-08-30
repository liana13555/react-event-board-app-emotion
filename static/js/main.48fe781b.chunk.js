(this["webpackJsonpreact-event-board-app"]=this["webpackJsonpreact-event-board-app"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"name":"Protecting the outer rim","location":"Corvus, Jangala","speaker":"Jacob Mercer","type":"free","time":{"start":"2022-02-17T14:30:00","end":"2022-02-17T16:30:00"}},{"name":"The art of spying","location":"Barad sector, Asharu","speaker":"Artemis Tau","type":"free","time":{"start":"2022-04-12T18:00:00","end":"2022-04-12T19:00:00"}},{"name":"A smugglers tale","location":"Atzlan, Nachiketa","speaker":"Kai Takeda","type":"paid","time":{"start":"2022-06-23T17:00:00","end":"2022-06-23T17:30:00"}},{"name":"Dealing with the Diktat","location":"Duzhank, Sindria","speaker":"Solomon Fokes","type":"vip","time":{"start":"2022-09-03T12:30:00","end":"2022-09-03T18:30:00"}},{"name":"Inside the Ludd\'s Hammer","location":"Hybrasil, Culann","speaker":"Adrian Cross","type":"free","time":{"start":"2023-03-07T15:00:00","end":"2023-03-07T17:30:00"}},{"name":"Beyond the core worlds","location":"Magec, Achaman","speaker":"Apollo Pillai","type":"vip","time":{"start":"2023-05-21T12:00:00","end":"2023-05-21T14:00:00"}},{"name":"Mining for profit","location":"Yma, Qaras","speaker":"Archibald Yurzi","type":"paid","time":{"start":"2023-08-26T19:00:00","end":"2023-08-26T19:45:00"}},{"name":"Deep space horrors","location":"Samarra, Eventide","speaker":"Luke Xamarin","type":"free","time":{"start":"2023-11-02T18:30:00","end":"2023-11-02T20:00:00"}}]')},23:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r,a,i,o,s,c,p,d=n(1),l=n.n(d),m=n(15),u=n.n(m),x=n(30),b=(n(23),n(4)),j=n(5),h=j.a.h1(r||(r=Object(b.a)(["\n  margin-top: 0;\n  text-align: center;\n  text-transform: uppercase;\n\n"]))),f=n(3),g=function(e){var t=e.text;return Object(f.jsx)(h,{children:t})},O=n(11),y=n(29),k=n(31),T=Object.freeze({sm:16}),v=Object.freeze({colors:{white:"#ffffff",black:"#010101",green:"#4caf50",red:"#f44336",blue:"#2196f3",primaryText:"#212121",secondaryText:"#757575"},spacing:8}),z=j.a.div(a||(a=Object(b.a)(["\n  position: relative;\n  border: ",";\n  padding: ","px;\n  border-radius: 4px;\n"])),(function(e){return"2px dashed ".concat(e.theme.colors.black)}),(function(e){return e.theme.spacing})),w=j.a.h2(i||(i=Object(b.a)(["\n  margin-top: 0;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n"]))),A=j.a.p(o||(o=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 0;\n  margin-bottom: 8px;\n  color:  ",";\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  letter-spacing: 0.25px;\n\n  svg {\n  display: block;\n  margin-right: 8px;\n  color: ",";\n  }\n\n"])),(function(e){return e.theme.colors.primaryText}),(function(e){return e.theme.colors.secondaryText})),M=j.a.span(s||(s=Object(b.a)(["\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n  background-color: #000;\n  color: ",";\n\n  background-color: ","\n"])),(function(e){return e.theme.colors.white}),(function(e){var t=e.eventType,n=e.theme;switch(t){case"free":return n.colors.green;case"paid":return n.colors.blue;case"vip":return n.colors.red;default:return n.colors.black}})),D=function(e){var t=e.name,n=e.location,r=e.speaker,a=e.type,i=e.start,o=e.end,s=function(e){return Object(y.a)(Date.parse(e),"dd MMMM yyyy, HH:mm")}(i),c=function(e,t){return Object(k.a)(Date.parse(e),Date.parse(t))}(i,o);return Object(f.jsxs)(z,{children:[Object(f.jsx)(w,{children:t}),Object(f.jsxs)(A,{children:[Object(f.jsx)(O.c,{size:T.sm}),n]}),Object(f.jsxs)(A,{children:[Object(f.jsx)(O.d,{size:T.sm}),r]}),Object(f.jsxs)(A,{children:[Object(f.jsx)(O.a,{size:T.sm}),s]}),Object(f.jsxs)(A,{children:[Object(f.jsx)(O.b,{size:T.sm}),c]}),Object(f.jsx)(M,{eventType:a,children:a})]})},C=j.a.div(c||(c=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, auto));\n  gap: 24px;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),J=function(e){var t=e.events;return console.log(t),Object(f.jsx)(C,{children:t.map((function(e){var t=e.name,n=e.location,r=e.speaker,a=e.type,i=e.time;return Object(f.jsx)(D,{name:t,location:n,speaker:r,type:a,start:i.start,end:i.end},t)}))})},S=n(17),H=j.a.div(p||(p=Object(b.a)(["\n  padding : 24ox;\n"]))),B=function(){return Object(f.jsxs)(H,{children:[Object(f.jsx)(g,{text:"24th Core Worlds Coalition Conference"}),Object(f.jsx)(J,{events:S})]})};u.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(x.b,{theme:v,children:Object(f.jsx)(B,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.48fe781b.chunk.js.map