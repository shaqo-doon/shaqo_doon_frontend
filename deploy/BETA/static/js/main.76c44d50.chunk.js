(this.webpackJsonpshaqo_doon_frontend=this.webpackJsonpshaqo_doon_frontend||[]).push([[0],{42:function(A,g,I){},43:function(A,g,I){},44:function(A,g,I){},68:function(A,g,I){},70:function(A,g,I){},71:function(A,g,I){},72:function(A,g,I){},73:function(A,g,I){},74:function(A,g,I){},75:function(A,g,I){},76:function(A,g,I){},77:function(A,g,I){"use strict";I.r(g);var C=I(1),e=I(0),t=I.n(e),n=I(18),c=I.n(n),a=(I(42),I(43),I(3)),o=I(9),s=(I(44),I.p+"static/media/shaqo doon logo.6f562c36.png"),i=(I.p,I.p+"static/media/loading 2.95fc021f.gif"),r=I(12),l=I(10),j=I.n(l),u=I(15),d="TOTAL",p=I(20),b=I.n(p),h=window.location.hostname,m=b.a.create({baseURL:h.includes("shaqodoon")?"https://api.shaqodoon.ro/":"http://zimbor.go.ro/api/bot"}),O=I(13),f=function(A,g,I){var C,e,t,n;g&&"function"===typeof g&&(I&&"function"===typeof I&&window.addEventListener("scroll",(function(c){e||(e=window.pageYOffset),window.clearTimeout(C),C=setTimeout((function(){t=window.pageYOffset,(n=t-e)>0&&g(),n<0&&I(),e=null,t=null,n=null}),A||66)}),!1))},B=function(A,g,I){window.onscroll=function(){document.body.scrollTop>A||document.documentElement.scrollTop>A?g():I()}},x=(I(68),"IS_LOADING"),v=function(A){return function(g){g({type:x,payload:A})}},y=Object(r.b)(null,(function(A){return{setIsLoading:function(g){return A(v(g))}}}))((function(A){var g=A.setIsLoading;return Object(C.jsx)("div",{className:"menu-wrapper",children:Object(C.jsxs)("div",{className:"menu",children:[Object(C.jsx)(O.b,{to:"/locuri-de-munca",jobs:"allJobs",title:"some title",onClick:function(){return g(!0)},children:"Toate Locurile de Munc\u0103"}),Object(C.jsx)(O.b,{to:"/companii",onClick:function(){return g(!0)},children:"Companii"})]})})})),Q=Object(r.b)((function(A){return{total:A.total}}),(function(A){return{getTotal:function(){return A(function(){var A=Object(u.a)(j.a.mark((function A(g){var I;return j.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,m({method:"GET",url:"/total/"});case 3:I=A.sent,g({type:d,payload:I.data.total}),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),console.log("something went wrong");case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(g){return A.apply(this,arguments)}}())}}}))((function(A){var g=A.getTotal,I=A.total,t=Object(e.useState)("150px"),n=Object(o.a)(t,2),c=n[0],a=n[1],r=Object(e.useState)("23px"),l=Object(o.a)(r,2),j=l[0],u=l[1],d=Object(e.useState)("21px"),p=Object(o.a)(d,2),b=p[0],h=p[1],m=function(){a("150px"),u("23px"),h("21px")},f=function(){a("100px"),u("18px"),h("17px")};return Object(e.useEffect)((function(){g(),B(150,f,m)}),[]),Object(C.jsxs)("div",{className:"header-wrapper",children:[Object(C.jsxs)("div",{className:"header",children:[Object(C.jsx)("div",{className:"image",children:Object(C.jsx)(O.b,{to:"/",children:Object(C.jsx)("img",{src:s,alt:"shaqo doon logo",style:{width:c,height:c}})})}),Object(C.jsx)("p",{className:"moto",style:{fontSize:j},children:"Un singur loc pentru toate locurile de munc\u0103"}),Object(C.jsxs)("div",{className:"total",style:{fontSize:b},children:[Object(C.jsxs)("div",{className:"jobs",children:[Object(C.jsxs)("span",{className:"white",children:[I?I.jobs:Object(C.jsx)("img",{src:i,alt:"shaqo doon loading"})," "]})," ",Object(C.jsx)("span",{className:"text",children:"locuri de munc\u0103"})]}),Object(C.jsxs)("div",{className:"t-companies",children:[Object(C.jsxs)("span",{className:"white",children:[I?I.companies:Object(C.jsx)("img",{src:i,alt:"shaqo doon loading"})," "]})," ",Object(C.jsx)("span",{className:"text",children:"companii"})]})]})]}),Object(C.jsx)(y,{})]})})),E=(I(70),function(){return Object(C.jsxs)("div",{className:"welcome",children:[Object(C.jsx)("div",{className:"spacer"}),Object(C.jsxs)("h1",{children:["Bun venit pe ",Object(C.jsx)("strong",{children:"shaqo doon!"})]}),Object(C.jsxs)("div",{className:"message",children:[Object(C.jsx)("h2",{children:"Cau\u021bi un loc de munc\u0103?"}),Object(C.jsxs)("div",{className:"mission",children:[Object(C.jsx)("h3",{children:"E\u0219ti \xeen locul potrivit!"}),Object(C.jsxs)("h3",{children:["Misiunea noastr\u0103 este",Object(C.jsx)("br",{}),"s\u0103 agreg\u0103m toate locurile de munc\u0103 \xeentr-un singur loc",Object(C.jsx)("br",{}),"pentru a te ajuta s\u0103 g\u0103se\u0219ti mai u\u0219or locul de munc\u0103 ideal pentru tine!"]})]})]}),Object(C.jsx)("div",{className:"spacer-2"})]})}),Z=(I(71),"GET_ALL"),G="GET_JOBS_COMPANY",k="GET_COMPANIES",R=function(A){return function(){var g=Object(u.a)(j.a.mark((function g(I){var C;return j.a.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,g.next=3,m({method:"GET",url:"/companies/"});case 3:C=g.sent,I({type:k,payload:C.data.companies}),A(),g.next=10;break;case 8:g.prev=8,g.t0=g.catch(0);case 10:case"end":return g.stop()}}),g,null,[[0,8]])})));return function(A){return g.apply(this,arguments)}}()},S=(I(72),function(A){var g=A.company,I=A.title,e=A.city,t=A.country,n=A.link;return Object(C.jsxs)("div",{className:"job",children:[Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)("div",{className:"title",children:Object(C.jsx)("a",{href:"".concat(n),target:"_blank",rel:"noopener noreferrer",children:Object(C.jsx)("span",{dangerouslySetInnerHTML:{__html:I}})})}),Object(C.jsxs)("div",{className:"company",children:[Object(C.jsx)("img",{src:"data:image/png;base64,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ADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo5MDUyZmE5NS05MTQxLTRhMmYtODgwNy01ZTRjZGFjYzVmNGIiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWU3ZTUyZWYtYWZhMi00NDIyLTk5ZGMtOWJhNWFiMmMwNGVjIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTZhMjc2MjAtYjM2Mi00Yzc3LWI2NDUtYTRlMTAxODk1YTRiIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTYwOTk2MzI1NTIyNzY5OSIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjIyIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8aXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgIDxpcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvblNob3duPgogICA8aXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgIDxpcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpSZWdpc3RyeUlkPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphM2IwYjQ4Yy04ODM0LTRjYzAtYTRiZC0xY2E5OTFhMmNiY2YiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjEtMDEtMDZUMjI6MDA6NTUiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8cGx1czpJbWFnZVN1cHBsaWVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6SW1hZ2VTdXBwbGllcj4KICAgPHBsdXM6SW1hZ2VDcmVhdG9yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6SW1hZ2VDcmVhdG9yPgogICA8cGx1czpDb3B5cmlnaHRPd25lcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkNvcHlyaWdodE93bmVyPgogICA8cGx1czpMaWNlbnNvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkxpY2Vuc29yPgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+oMS/FQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+UBBhQANzHE+F4AAAIDSURBVHja7d3hDYIwEIBRMMQR3cGJ3MER/aMLmJToFe+89wYgoP1SQlpYFgAAAAAAAAAAAAAAAAAAAHhv7Xzx58vtaQiMPe7XtuPk5O8HgYBAQCAgEMih5NMJT59qqvg0bBUHInGLBQIBgYBAQCAgEBAICAQEAggEBAJf2zpcZOctozN1WBdnBgGBgEBAICAQEAgIBAQCAgGBAAIBgYBAQCAgEBAI1LL5CcYiNgZFb9rKeE5mEHH8/DhZz0kgIBBAICAQEAgIBAQCAgGBgEBAICAQQCAgEBAICAQEAgKpLWpbauT21ozn9K/sSS86kAxuMwgIBAQCAgGBgEAAgYBAQCAgEDiepSY7+PyBGYSJAzHyOFnPSSAgEEAgIBAQCAgEBAICAYGAQEAgIBBAICAQEAgIBAQCAqnN5w96sye96EAyuM0gIBAQCAgEBAICAQQCAgGBgEDgeJaa7BD1FnTLQ8wg4kAgIBBAICAQ+JCnWEX5iKcZhIlxRB5HICAQQCAgEBAICAQEAgIBgYBAQCCAxYojFvSZQQCBgEBAICAQEAgIBAQCAgGBAAIBgYBAQCAgEBAICAQEAgIBgQACAYGAQOAQqd/55Bt6PWR+99gqDkTiFgsEAgIBgYBAQCAgEBAICAQQCAgEBAICAYGAQEAgIBAAAAAAAAAAAAAAAAAAAACAxl63YWFoxn24sAAAAABJRU5ErkJggg==",alt:""}),Object(C.jsx)("p",{children:g})]}),Object(C.jsxs)("div",{className:"location",children:[Object(C.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""}),Object(C.jsxs)("p",{children:[" ",Object(C.jsx)("span",{dangerouslySetInnerHTML:{__html:e}}),", ",Object(C.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})," "]})]})]}),Object(C.jsx)("div",{className:"details",children:Object(C.jsx)("a",{href:"".concat(n),target:"_blank",rel:"noopener noreferrer",children:"Detalii"})})]})}),W=Object(r.b)((function(A){var g=A.jobs,I=A.companies,C=A.helpers;return{jobs:g.all,jobsCompany:g.jobsCompany,companies:I.all,isLoading:C.isLoading}}),(function(A){return{getAllJobs:function(g){return A(function(A){return function(){var g=Object(u.a)(j.a.mark((function g(I){var C;return j.a.wrap((function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,g.next=3,m({method:"GET",url:"/jobs/"});case 3:C=g.sent,I({type:Z,payload:C.data.jobs}),A(),g.next=11;break;case 8:g.prev=8,g.t0=g.catch(0),console.log(g.t0);case 11:case"end":return g.stop()}}),g,null,[[0,8]])})));return function(A){return g.apply(this,arguments)}}()}(g))},getJobsCompany:function(g){return A(function(A){var g=A.api,I=A.cb;return function(){var A=Object(u.a)(j.a.mark((function A(C){var e;return j.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,b.a.get(g);case 3:e=A.sent,C({type:G,payload:e.data.jobs}),I(),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),console.log(A.t0);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(g){return A.apply(this,arguments)}}()}(g))},getAllCompanies:function(g){return A(R(g))},setIsLoading:function(g){return A(v(g))}}}))((function(A){var g=A.jobs,I=A.getAllJobs,t=A.companies,n=A.getAllCompanies,c=A.getJobsCompany,s=A.jobsCompany,r=A.isLoading,l=A.setIsLoading,j=Object(e.useState)(!1),u=Object(o.a)(j,2),d=u[0],p=u[1],b=Object(a.f)(),h=Object(a.g)();Object(e.useEffect)((function(){t?p(!0):n((function(){p(!0)}))}),[]),Object(e.useEffect)((function(){var A;d&&(h.company?(t?A=t.filter((function(A){return A.company===h.company||A.company===h.company.replace(/-/g," ")})):console.log("empty"),A.length?c({api:A[0].link,cb:function(){l(!1)}}):b.push("/companii")):g?l(!1):I((function(){l(!1)})))}),[d,r]);var m=function(A){return null===A&&p(!1),A.map((function(A){var g=A.company,I=A.title,e=A.city,t=A.country,n=A.link;return Object(C.jsx)(S,{company:g,title:I,city:e,country:t,link:n},"".concat(n," ").concat(Math.random()))}))};return r?Object(C.jsx)("div",{className:"loading",children:Object(C.jsx)("img",{src:i,alt:"shaqo doon loading"})}):Object(C.jsxs)("div",{className:"jobs",children:[Object(C.jsx)("a",{href:"#top",id:"top-jobs"}),h.company?m(s):m(g)]})})),N=(I(73),I(74),function(A){var g=A.company,I=A.link;return Object(C.jsx)("a",{className:"company-tab",href:I,target:"_blank",rel:"noopener noreferrer",children:Object(C.jsx)("h1",{children:g})})}),F=Object(r.b)((function(A){return{companies:A.companies.all}}),(function(A){return{getAllCompanies:function(g){return A(R(g))}}}))((function(A){var g=A.companies,I=A.getAllCompanies,t=Object(e.useState)(!0),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(e.useEffect)((function(){null===g?I((function(){a(!1)})):a(!1)}),[]),c?Object(C.jsx)("div",{className:"loading",children:Object(C.jsx)("img",{src:i,alt:"shaqo doon loading"})}):Object(C.jsxs)("div",{className:"companies",children:[console.log(g),g?g.map((function(A,g){var I=A.company,e=A.link;return Object(C.jsx)(N,{company:I,link:e},g)})):null]})})),T=(I(75),function(){return Object(C.jsxs)("div",{className:"error404",children:["Error 404",Object(C.jsx)("br",{}),"Pagina nu a fost gasita.",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"Probabil este vina lui Sergiu!"]})}),U=(I(76),function(){var A=Object(e.useState)(1),g=Object(o.a)(A,2),I=g[0],t=g[1],n=Object(e.useState)(0),c=Object(o.a)(n,2),a=c[0],s=c[1];return Object(e.useEffect)((function(){return f(null,(function(){t(1),s(0)}),(function(){t(0),s(50)})),function(){f()}}),[]),Object(C.jsx)("div",{className:"footer-wrapper",style:{opacity:I,transform:"translate(0, ".concat(a,"px)")},children:Object(C.jsxs)("div",{className:"footer",children:[Object(C.jsx)("p",{className:"empty"}),Object(C.jsxs)("p",{children:["Creat de ",Object(C.jsx)("a",{href:"https://info.shaqodoon.ro/",target:"_blank",rel:"noopener noreferrer",children:"shado doon"})," team."]}),Object(C.jsxs)("div",{className:"badges",children:[Object(C.jsx)("a",{href:"https://achecker.ca/checker/index.php?uri=referer&gid=WCAG2-AAA",className:"aaa",children:Object(C.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAgAGYDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABwADBAUGAggB/8QAOhAAAQMDAwIFAQMJCQAAAAAAAQIDBAUGEQAHEiExExQiMkFRCFJiCRUjM0JhcXKBFhdTkaGis8Pi/8QAGgEAAQUBAAAAAAAAAAAAAAAAAAECBAUGA//EADERAAECBQIEAwYHAAAAAAAAAAECEQADBCExYXEFEkFRE4GRFBUiobHBIzJCQ9Hh8P/aAAwDAQACEQMRAD8A9hstMiM2tTTfsBJKR9NCvcHdR+lXGq2rRtKRcVVbQlx1LLJUhoHOOXHt2+ca0O7NSrMKyCi3krdnucEeG0MuKSroeH4vn+mg7tPfZtSpvrllUmm1H9LIKRyWF8eix974Sf8AzqgqeMol1gkEsnBOti3ofnFdO49TcLqkIqpbpULE/lfVr/SNuxufcdJbbdvOwnqc0Rlx1ppXFH8T6k/7tXVW3YthtmAmhwX61MnFHhRWGSlfq646j3Yz07dOpSPVod3Tfly33VE2/b8RxpqUopbjNK9biPlTq/2UfX4/m6a+2hR6jtdvZSI1blx58e4IngIkJawI7v8Ahoz6h6+Kc/tJUnl7fTaS673myKRDBOVd27DvrjSKyirariE9fsx/DfJHyT33OIItb3dsqj7v03a6ZHmGsz0IKZCGUGMytaVqQ2tRVyC1BHQBJ9yevfFncF+UmnXYu06Xb9VuOtsxRLlRaWyyfKtKOEqcW842gFWDhPIqIGcY0Cq5s5upX6Hd14LFKgXTPuFut06nPMJdloMRRTEQmUmQGkfoyoYKD36kZ9JKpdHvK1t1a/fce0ZNZiXdTYBmwYsyMmTTpcdoo8M+K4htbZCuqkrJyOxGCZcaSJ0/d62qTudBtC42INtxZlst11E+sTm4qkOLeLYiqbX0DgAUo4WfaRjpnW6m161YNCbr02tUWNSHAktznpTSI6wr2kOE8Tn466Hsa0K5VPtJQb9rNuNMUr+wiYDhdfae8vOVKK1s4ByohtaxzCeJBIz1xoZ25tJuJA2s2kS5Gmx6paE2ou1GmwpUJcnD7rhadaU/zjKWhJBAV8LOClQyCCPSaarbqqH+fk1KlKpPh+L54Pt+X4fe8TPHH786xtS3MoCL8sa3KK3TK5Bus1ECqQ56FtRjEZDp9oUF8s49yePfr20PqntLXTtU1TqPT6i46xebVyPUitz4pXPaBCnY58uhLDSVK5KCBySCO4zhLW+G2t27sXFZr8GhzLQiMprDdRk+bjF5nxojLbSnQ04eYcU2WlBClHwx1Kc4BBBqF2WQaAbgFzW9+Z0uFo1Dz7PlwsdCnxOXHP7s511UbosunUKNXqhcdAh0iUsIjz35zTcd5RBICHCriokJUcA/sn6aDd02HfFXoe2lSh225b0iz5L7cyjUeRCJUFNhCJEQv82DgpKkpdAUAtXZQ5aiVTaOtrs61qVTqFVZDCNyY1wVKNWJsJbjUQpV46ylkIZSnkSfBb5+4478UkEUv24bkYlbeWnU7UuBDtOl1B8pl0qWFtPcElPvbJCsHmO/Qg6WnfyhgAtK1AOg8+9/xp0tEEHervPoq0N1NNmPpigOJU0gFJJQU/X8X+mgHulb9eF4zn7cs+WqLIQl5KS80gB9Xv8ASV5SlXu/m5fe0SLk3P2cqCkNv3xb6pcceHzWVvtjHfHAgH+IOh7cdT2hq1RMwbhWGglATh633Xz6fxKe1lBwRaqqZ4jmWsvkM9tHxaHzKGh4gjwqwW8+m3ptGl25qFas+j+HE26lvTpCUrly1zGubyvu9/SlOfSken+qlHVFuRWL7vKbQZidvZEOTRpqZLRE5pfP1JVx7/eQnUVup7RoaDf94Ng+kcelvLT/AN2nbZqOyVOrTM2pXtYs1hk80tsUNcdzmk5Srn4qvafw630tdHTS0JkpAYa/zEHh8s061pCfh6YZtG+8F2s3FW4VclwW5JKadK87JJbHqhnwvRnH419e/o0qTV6tVESFzbgXSENQ0zml+E3haXFuFJUFDqhKQgYGCc99Q3N6NlXHHnHLvoa1vt+E8pTSiXEfdUePUdT0P10zK3f2NlJYTJui33hHADIcYKg2B2Ccp6DoO2s+aeZzE81u14imin85V4ji9nPli9v9mLy87olU2owm4Unk3GZTLm+GwVB5ClABHQHh6Q4rJPwNN1ivywqrVIVeVFZp8hDbTEZlpwFotpX4rgXgqSrJA4qHxjVcjezZouPk3hRUqfADyykjxAAQOR4+rpkfPTUZ3dzYl51pbty244uOAhkljkUJHYJ9PQD4xpVyJqiSFfW0LMpahZJC89Lhsjv57jzjX3rOnR/JimVVUeU+CI0VLSD4q8g8nFKzhtKc5xjv3zga5vK5PKRHIMJUqNOcfRHQ+qItSU56qWnphfFIUemfjWYqG7ex1RdbXPum2ZiwClC3kBziB1IyUnHfONOu737NqdbkLvSjOOs58NZBKkAjrxPHIyPp309UqYSpiz74+0dlyJxKyFM7DrbvsdtN4tJV1Pu2LBkNPmPVJbqYa1hkrU04k/pV8MZ6BKlYx8jUKp3hPftelinyCzVXQ4ZOGC4UlkEKSUgEjmviOo6BWoiN59lESPMou6hJe5qX4gaUFclABSs8c5IABPzgaTG8+yjEt2Wxd1CakO/rHUNKC1/xITk9hphkTj+vo397xyVSVKv3OgHX1zk39c2gQfb0ns1Tb6y6jH/VyJTrgH0y2nof3jtpazv2076sa6LQt2LZtbpk7yc51TzMcFIQFozyxgdyD/npalpdg+YsUBQSObMf/9k=",alt:"WCAG 2.0 (Level AAA)",height:"32",width:"102"})}),Object(C.jsx)("a",{href:"https://shaqodoon.ro/humans.txt",className:"humanstxt",target:"_blank",rel:"noopener noreferrer",children:Object(C.jsx)("img",{src:"data:image/gif;base64,R0lGODlhWAAfAOYAAH19faysrFpaWvPz89zc3PKfe8TExGZmZnFxcaGhoefn57i4uImJiZWVlfW3nPrbzfjPvepnLfa/p/CTautvOfrZyvnXyPjKtvGeeehXGPOoh/3w6+6GWeleIfKgfP3u6P738/GbdvnTwvrd0Pa7ou6HWuxzPudREPKgffKif/Ori+18Sux3RO+IXLexrfbCqudTE+ttNuZNCvGZc++PZO6DVO1+TehaG+ppMPGdeOdPDe6CU/GXcP3v6u17Sfzn3uprM/rbzvvm3ehYGfnQv9DQ0OZLB05OTv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAABYAB8AAAf/gEiCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+gjxsgoaWMG0IVKBwUOkZGHqaygxY7OD6DBa+7RiOzph8wrxQQgrq8Rg6/pRfIxshGGMuLAwSJBAOJD85IBRkFEBDeHNOKRQCJAEWJINwqD4QPMY4DRdlI9QqE9daHRf2DCABEci7dukQdeBFyUOCHoBoBjhwxMEhiEYkBEkgUQCCAAIyCAEg8IoCiRAALPh5BkM3jRooXJSI4kkCQAgEqjxw0ZEOhoBwpOpQw5uLAkQAVjxCYSTIBA5JHGmg8Uu/IgSILSCIReTKA0QQKSBrIio5g2QEC1gFAqk4RD58P/yJI8CDBmIWISAVJJCiR4gCQSGba+1dPMBKJNZEYOAKAgNV1/wQVFGTgwAIEIXcecuCzABAjQyJEwFDgBd6kfA8k1bdVJxKvI11LZH0RXQOZFCWXFfS0X9tEIjqTELTCxIUCGk7j21sbdUidWREsKGJ4r2TGghYYPap70IADB/L+RvShcwgkEowYoxExccQjfHdbb33ONVrZ8K+jO7hYgGTMgjhFgAD6AJBbIjfsYswJLMigXjct9BfAbRg1p1d+rTUgEgPUfdRAWBheFB5jBkR0QDVIpEWQAC2hEwAD9yCigYLd+IRED62RtMBTOmF34SBTGcDUWhbNdxNjCah0ADgBBVVm1YEIBDDAbXkhQoQDyiBRwQwTdBlEIQpoFolAkERWzplopqnmmmy26eabcMYp55x01vlLIAA7",alt:"shaqo doon humans txt",style:{height:"32px"}})})]})]})})}),L=function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(Q,{}),Object(C.jsxs)(a.c,{children:[Object(C.jsx)(a.a,{exact:!0,path:"/",render:function(){return Object(C.jsx)(E,{})}}),Object(C.jsx)(a.a,{exact:!0,path:"/locuri-de-munca/",render:function(){return Object(C.jsx)(W,{})}}),Object(C.jsx)(a.a,{exact:!0,path:"/locuri-de-munca/:company",render:function(){return Object(C.jsx)(W,{})}}),Object(C.jsx)(a.a,{exact:!0,path:"/companii",render:function(){return Object(C.jsx)(F,{})}}),Object(C.jsx)(a.a,{path:"*",render:function(){return Object(C.jsx)(T,{})}})]}),Object(C.jsx)(U,{})]})},w=function(A){A&&A instanceof Function&&I.e(3).then(I.bind(null,78)).then((function(g){var I=g.getCLS,C=g.getFID,e=g.getFCP,t=g.getLCP,n=g.getTTFB;I(A),C(A),e(A),t(A),n(A)}))},D=I(14),V=I(36),Y=I(11),P=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{all:null,jobsCompany:null},g=arguments.length>1?arguments[1]:void 0;switch(g.type){case Z:return Object(Y.a)(Object(Y.a)({},A),{},{all:g.payload});case G:return Object(Y.a)(Object(Y.a)({},A),{},{jobsCompany:g.payload});default:return A}},X=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{all:null},g=arguments.length>1?arguments[1]:void 0;switch(g.type){case k:return Object(Y.a)(Object(Y.a)({},A),{},{all:g.payload});default:return A}},M={isLoading:!0},H=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,g=arguments.length>1?arguments[1]:void 0;switch(g.type){case x:return Object(Y.a)(Object(Y.a)({},A),{},{isLoading:g.payload});default:return A}},q=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,g=arguments.length>1?arguments[1]:void 0;switch(g.type){case d:return g.payload;default:return A}},z=Object(D.c)({jobs:P,companies:X,helpers:H,total:q}),K=[V.a],J=Object(D.d)(z,D.a.apply(void 0,K));c.a.render(Object(C.jsx)(t.a.StrictMode,{children:Object(C.jsx)(r.a,{store:J,children:Object(C.jsx)(O.a,{children:Object(C.jsx)(L,{})})})}),document.getElementById("root")),w()}},[[77,1,2]]]);
//# sourceMappingURL=main.76c44d50.chunk.js.map