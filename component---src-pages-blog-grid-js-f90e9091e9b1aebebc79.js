(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+T6m":function(e,n,a){"use strict";var t=a("zLVn"),r=a("q1tI"),l=a.n(r),o=a("vOnD"),s=o.d.button.withConfig({displayName:"btnstyle__ButtonStyle",componentId:"sc-1n14gjh-0"})([" \n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center; \n    font-family: inherit; \n    font-size: 16px;\n    text-decoration: none;\n    text-transform: capitalize; \n    border: 0; \n    min-width: 170px;\n    padding: 14px;\n    border-radius: 3px;\n    -webkit-transition: 450ms all;\n    transition: 450ms all;\n    position: relative;\n    color: ",";\n    background-color: ",";\n    z-index: 999;\n    &:hover,\n    &:focus {\n        outline: none;\n        background: ",";\n        color: ",";\n    }\n    .icon-left{\n        margin-right: 8px;\n    }\n    .icon-right{\n        margin-left: 8px;\n    }\n\n    ","\n    ","\n"],(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryLightColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.white}),(function(e){return e.primary&&Object(o.c)(["\n        color: ",";\n        background: ",";\n\n        &:hover{\n            color: ",";\n            background: ","; \n        }\n    "],e.theme.primaryLightColor,e.theme.primaryColor,e.theme.primaryColor,e.theme.primaryLightColor)}),(function(e){return e.secondary&&Object(o.c)(["\n        color: ",";\n        background: ",";\n\n        &:hover{\n            color: ",";\n            background: ","; \n        }\n    "],e.theme.secondaryColor,e.theme.secondaryLightColor,e.theme.secondaryLightColor,e.theme.secondaryColor)}));s.displayName="ButtonStyle";var c=s,m=["className","children"];n.a=function(e){var n=e.className,a=e.children,r=Object(t.a)(e,m),o=["appion__btn"];return n&&o.push(n),l.a.createElement(c,Object.assign({className:o.join(" ")},r),a)}},"3b7h":function(e,n,a){e.exports=a.p+"static/blog-post-1-29954d427dbca6dc5b587603313507b4.png"},OoWJ:function(e,n,a){e.exports=a.p+"static/blog-post-2-29954d427dbca6dc5b587603313507b4.png"},T8PD:function(e,n,a){e.exports=a.p+"static/blog-post-6-29954d427dbca6dc5b587603313507b4.png"},YP3a:function(e,n,a){"use strict";var t=a("q1tI"),r=a.n(t),l=a("u9Uq"),o=a("vOnD").d.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"sc-hr8klu-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            padding: 200px 0px 100px;\n            position: relative;\n            z-index: 99;\n            h1{\n                font-size: 36px;\n                line-height: 48px;\n            }\n\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-top: 30px;  \n            a {\n                color: inherit;\n\n                &:hover{\n                    opacity: .8;\n                }\n            } \n            a+a {\n                margin: 0 15px 0px 7px;\n            }\n            h4 {\n                margin:0 7px;\n                opacity: .7;\n            }\n            &.page {\n                a {\n                   font-weight: 600;\n                }\n                span {\n                    margin: 0 7px;\n                }\n                span+span{\n                    margin-left: 0;\n                }\n            }\n\n\n        } \n    }\n    @media only screen and (max-width: 480px) {\n       .page-header{\n            padding: 160px 0px 100px;\n            h1{\n                font-size: 30px;\n                line-height: 44px;\n            }\n       }\n    }\n"]);n.a=function(e){var n=e.categories,a=e.title,t=e.author;return r.a.createElement(o,null,r.a.createElement(l.a,null),r.a.createElement("div",{className:"page-header"},r.a.createElement("h1",null,a),n&&r.a.createElement("div",{className:"breadcrumbs post"},r.a.createElement("h4",null,"In:"),n.map((function(e,n){return r.a.createElement("span",{key:n}," ",e," ")})),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"By:")," ",r.a.createElement("span",null,t.name))),!n&&a&&r.a.createElement("div",{className:"breadcrumbs page"},r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null," Home ")," ",r.a.createElement("span",null," > ")," ",a))))}},f2Hk:function(e,n,a){e.exports=a.p+"static/blog-post-3-29954d427dbca6dc5b587603313507b4.png"},iT6v:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),l=a("vOnD"),o=a("Bl7J"),s=a("vrFN"),c=a("tqO2"),m=a("Wbzz"),i=a("IdFE"),p=a("xFQ1"),d=a("YP3a"),u=a("xP64"),h=a("3b7h"),g=a.n(h),E=a("OoWJ"),b=a.n(E),x=a("f2Hk"),N=a.n(x),f=a("wQDY"),y=a.n(f),k=a("rA2P"),v=a.n(k),w=a("T8PD"),L=a.n(w),C=l.d.div.withConfig({displayName:"blogGridstyle__BlogPageWrapper",componentId:"sc-mlviyj-0"})(["\n\n    .blog-list-wrapper{\n        padding: 50px 0;\n    }\n    .blog-grid-wrapper{\n        padding-bottom: 60px;\n    }\n    .post-block{\n        margin-bottom: 30px;\n        border-radius: 3px;\n        &:hover{\n            .post-thumb-block{\n                img{\n                    transform: scale3d(1.1,1.1,1);\n                }\n            }\n            .readmore-btn{\n                color: ",";\n            }\n        } \n    }\n    .post-thumb-block{\n        overflow: hidden;\n        border-radius: 3px 3px 0 0;\n        img{\n            width: 100%;\n            transition: all 0.6s ease-in;\n            border-radius: 3px 3px 0 0;\n        }\n    }\n    .post-content-block{\n        border-radius: 0 0 3px 3px;\n        box-shadow: 0px 2px 4px 0px rgba(12, 0, 46, 0.06);\n        padding: 25px 35px;\n        position: relative;\n    }\n    .post-entry{\n        font-size: 14px;\n        font-weight: 300; \n        line-height: 25px; \n    }\n    \n    .post-meta-block{\n        margin-bottom: 10px;\n        .anchor{\n            margin-right: 10px;\n            -webkit-transition: 450ms all;\n             transition: 450ms all;\n            &:hover{\n                color: ",";;\n            }\n        }\n        .anchor,span{\n            color: ",";;\n            font-size: 14px;\n            font-weight: 300;\n        }\n        span+span{\n            margin-left: 10px;\n        }\n        .divider{\n            font-size: 11px;\n        }\n    }\n    .post-title{\n        .anchor{ \n            font-size: 21px;\n            font-weight: 500;\n            line-height: 30px;\n            margin-bottom: 17px;\n            display: block;\n            -webkit-transition: 450ms all;\n            transition: 450ms all;\n            &:hover{\n                color: ",";;\n            }\n        }\n    }\n    .readmore-btn {\n       color: rgba(0,0,0,0.35);\n       display: flex;\n       align-items: center;\n       transition: all 0.3s linear;\n       svg{\n           margin-left: 0px;\n           font-size: 27px;\n           transition: all 0.3s linear;\n       }\n       &:hover{\n           svg{\n               margin-left: 3px;\n                transform: scale(1.2);\n           }\n       }\n    } \n\n    .pagination-wrapper{\n        display: flex; \n        margin: 30px 0 60px 0;\n\n            ul, .pagination{\n                margin: 0;\n                padding: 0;\n                list-style: none;\n\n                li {\n                    display: inline-block;\n\n                    &.active{\n                        .anchor{\n                            opacity: 1;\n                        }\n                    }\n\n                    .anchor {\n                        display: block;\n                        padding: 12px 20px;\n                        margin-right: 10px;\n                        border-radius: 5px;\n                        opacity: .6;\n                    }\n                }\n            }\n        }\n        @media only screen and (max-width: 912px) {\n            .blog-page-wrapper{\n                padding-bottom: 80px;\n            }\n        }\n"],(function(e){return e.theme.secondaryColor?e.theme.secondaryColor:"#FFEBEC"}),(function(e){return e.theme.secondaryColor?e.theme.secondaryColor:"#FFEBEC"}),(function(e){return e.theme.textColor?e.theme.textColor:"#7A848E"}),(function(e){return e.theme.secondaryColor?e.theme.secondaryColor:"#FFEBEC"})),P=function(){return r.a.createElement(C,null,r.a.createElement(d.a,{title:"Blog Grid",author:{name:"Alexa",profile:"#"}}),r.a.createElement("div",{className:"blog-page-wrapper"},r.a.createElement(p.b,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{xs:12,lg:8},r.a.createElement("div",{className:"blog-grid-wrapper"},r.a.createElement(p.c,null,r.a.createElement(p.a,{xs:12,sm:6},r.a.createElement("div",{className:"post-block"},r.a.createElement("div",{className:"post-thumb-block"},r.a.createElement(m.Link,{className:"anchor",to:"#"},r.a.createElement("img",{src:g.a,alt:"img"}))),r.a.createElement("div",{className:"post-content-block"},r.a.createElement("div",{className:"post-meta-block"},r.a.createElement("span",null,"In: "),r.a.createElement(m.Link,{className:"anchor",to:"#"},"Discussion"),r.a.createElement("span",{className:"divider"},"/"),r.a.createElement("span",null,"15 Sep 2021")),r.a.createElement("h2",{className:"post-title"},r.a.createElement(m.Link,{className:"anchor",to:"#"},"Now led tedious shy.")),r.a.createElement("p",{className:"post-entry"},"Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering."),r.a.createElement(m.Link,{className:"readmore-btn",to:"#"},"see more ",r.a.createElement(i.d,null))))),r.a.createElement(p.a,{xs:12,sm:6},r.a.createElement("div",{className:"post-block"},r.a.createElement("div",{className:"post-thumb-block"},r.a.createElement(m.Link,{className:"anchor",to:"#"},r.a.createElement("img",{src:b.a,alt:"img"}))),r.a.createElement("div",{className:"post-content-block"},r.a.createElement("div",{className:"post-meta-block"},r.a.createElement("span",null,"In: "),r.a.createElement(m.Link,{className:"anchor",to:"#"},"Discussion"),r.a.createElement("span",{className:"divider"},"/"),r.a.createElement("span",null,"15 Sep, 2021")),r.a.createElement("h2",{className:"post-title"},r.a.createElement(m.Link,{className:"anchor",to:"#"},"Now led tedious shy.")),r.a.createElement("p",{className:"post-entry"},"Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering."),r.a.createElement(m.Link,{className:"readmore-btn",to:"#"},"see more ",r.a.createElement(i.d,null))))),r.a.createElement(p.a,{xs:12,sm:6},r.a.createElement("div",{className:"post-block"},r.a.createElement("div",{className:"post-thumb-block"},r.a.createElement(m.Link,{className:"anchor",to:"#"},r.a.createElement("img",{src:N.a,alt:"img"}))),r.a.createElement("div",{className:"post-content-block"},r.a.createElement("div",{className:"post-meta-block"},r.a.createElement("span",null,"In: "),r.a.createElement(m.Link,{className:"anchor",to:"#"},"Discussion"),r.a.createElement("span",{className:"divider"},"/"),r.a.createElement("span",null,"15 Sep, 2021")),r.a.createElement("h2",{className:"post-title"},r.a.createElement(m.Link,{className:"anchor",to:"#"},"Now led tedious shy.")),r.a.createElement("p",{className:"post-entry"},"Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering."),r.a.createElement(m.Link,{className:"readmore-btn",to:"#"},"see more ",r.a.createElement(i.d,null))))),r.a.createElement(p.a,{xs:12,sm:6},r.a.createElement("div",{className:"post-block"},r.a.createElement("div",{className:"post-thumb-block"},r.a.createElement(m.Link,{className:"anchor",to:"#"},r.a.createElement("img",{src:y.a,alt:"img"}))),r.a.createElement("div",{className:"post-content-block"},r.a.createElement("div",{className:"post-meta-block"},r.a.createElement("span",null,"In: "),r.a.createElement(m.Link,{className:"anchor",to:"#"},"Discussion"),r.a.createElement("span",{className:"divider"},"/"),r.a.createElement("span",null,"15 Sep, 2021")),r.a.createElement("h2",{className:"post-title"},r.a.createElement(m.Link,{className:"anchor",to:"#"},"Now led tedious shy.")),r.a.createElement("p",{className:"post-entry"},"Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering."),r.a.createElement(m.Link,{className:"readmore-btn",to:"#"},"see more ",r.a.createElement(i.d,null))))),r.a.createElement(p.a,{xs:12,sm:6},r.a.createElement("div",{className:"post-block"},r.a.createElement("div",{className:"post-thumb-block"},r.a.createElement(m.Link,{className:"anchor",to:"#"},r.a.createElement("img",{src:v.a,alt:"img"}))),r.a.createElement("div",{className:"post-content-block"},r.a.createElement("div",{className:"post-meta-block"},r.a.createElement("span",null,"In: "),r.a.createElement(m.Link,{className:"anchor",to:"#"},"Discussion"),r.a.createElement("span",{className:"divider"},"/"),r.a.createElement("span",null,"15 Sep, 2021")),r.a.createElement("h2",{className:"post-title"},r.a.createElement(m.Link,{className:"anchor",to:"#"},"Now led tedious shy.")),r.a.createElement("p",{className:"post-entry"},"Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering."),r.a.createElement(m.Link,{className:"readmore-btn",to:"#"},"see more ",r.a.createElement(i.d,null))))),r.a.createElement(p.a,{xs:12,sm:6},r.a.createElement("div",{className:"post-block"},r.a.createElement("div",{className:"post-thumb-block"},r.a.createElement(m.Link,{className:"anchor",to:"#"},r.a.createElement("img",{src:L.a,alt:"img"}))),r.a.createElement("div",{className:"post-content-block"},r.a.createElement("div",{className:"post-meta-block"},r.a.createElement("span",null,"In: "),r.a.createElement(m.Link,{className:"anchor",to:"#"},"Discussion"),r.a.createElement("span",{className:"divider"},"/"),r.a.createElement("span",null,"15 Sep, 2021")),r.a.createElement("h2",{className:"post-title"},r.a.createElement(m.Link,{className:"anchor",to:"#"},"Now led tedious shy.")),r.a.createElement("p",{className:"post-entry"},"Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering."),r.a.createElement(m.Link,{className:"readmore-btn",to:"#"},"see more ",r.a.createElement(i.d,null)))))))),r.a.createElement(p.a,{xs:12,lg:4},r.a.createElement(u.a,null))))))},z=a("pPah"),D=a("DZth"),I=a("xG3l");n.default=function(){return r.a.createElement(l.a,{theme:I.a},r.a.createElement(o.a,null,r.a.createElement(D.a,null),r.a.createElement(s.a,{title:"Appion Gatsby Home"}),r.a.createElement(c.a,null),r.a.createElement(P,null),r.a.createElement(z.a,null)))}},rA2P:function(e,n,a){e.exports=a.p+"static/blog-post-5-29954d427dbca6dc5b587603313507b4.png"},wQDY:function(e,n,a){e.exports=a.p+"static/blog-post-4-29954d427dbca6dc5b587603313507b4.png"}}]);
//# sourceMappingURL=component---src-pages-blog-grid-js-f90e9091e9b1aebebc79.js.map