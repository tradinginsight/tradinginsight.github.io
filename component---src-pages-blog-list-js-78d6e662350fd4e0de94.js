(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+T6m":function(e,n,t){"use strict";var a=t("zLVn"),o=t("q1tI"),i=t.n(o),s=t("vOnD"),r=s.d.button.withConfig({displayName:"btnstyle__ButtonStyle",componentId:"sc-1n14gjh-0"})([" \n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center; \n    font-family: inherit; \n    font-size: 16px;\n    text-decoration: none;\n    text-transform: capitalize; \n    border: 0; \n    min-width: 170px;\n    padding: 14px;\n    border-radius: 3px;\n    -webkit-transition: 450ms all;\n    transition: 450ms all;\n    position: relative;\n    color: ",";\n    background-color: ",";\n    z-index: 999;\n    &:hover,\n    &:focus {\n        outline: none;\n        background: ",";\n        color: ",";\n    }\n    .icon-left{\n        margin-right: 8px;\n    }\n    .icon-right{\n        margin-left: 8px;\n    }\n\n    ","\n    ","\n"],(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryLightColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.white}),(function(e){return e.primary&&Object(s.c)(["\n        color: ",";\n        background: ",";\n\n        &:hover{\n            color: ",";\n            background: ","; \n        }\n    "],e.theme.primaryLightColor,e.theme.primaryColor,e.theme.primaryColor,e.theme.primaryLightColor)}),(function(e){return e.secondary&&Object(s.c)(["\n        color: ",";\n        background: ",";\n\n        &:hover{\n            color: ",";\n            background: ","; \n        }\n    "],e.theme.secondaryColor,e.theme.secondaryLightColor,e.theme.secondaryLightColor,e.theme.secondaryColor)}));r.displayName="ButtonStyle";var l=r,c=["className","children"];n.a=function(e){var n=e.className,t=e.children,o=Object(a.a)(e,c),s=["appion__btn"];return n&&s.push(n),i.a.createElement(l,Object.assign({className:s.join(" ")},o),t)}},OoWJ:function(e,n,t){e.exports=t.p+"static/blog-post-2-29954d427dbca6dc5b587603313507b4.png"},kmpI:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),i=t("vOnD"),s=t("Bl7J"),r=t("vrFN"),l=t("tqO2"),c=t("Wbzz"),p=t("IdFE"),m=t("xFQ1"),d=t("YP3a"),u=t("xP64"),g=t("OoWJ"),x=t.n(g),M=t("uwrc"),h=t.n(M),L=i.d.div.withConfig({displayName:"blogListstyle__BlogPageWrapper",componentId:"sc-q1v5pd-0"})(["\n    .blog-page-wrapper{\n        padding-bottom: 50px;\n    }\n    .post-block{\n        &.list{\n                margin-bottom: 70px;\n                border-radius: 6px;\n                &:hover{\n                .post-thumb-block{\n                    img{\n                        transform: scale3d(1.1,1.1,1);\n                    }\n                }\n                .readmore-btn{\n                    color: ",";\n                }\n            } \n        }\n        &.text-only{\n            margin-bottom: 80px;\n            border: 1px solid #ededed;\n            padding: 45px 55px 35px;\n        }\n        &.qutoe-post{\n            padding: 100px 65px 70px;\n            text-align: center;\n            position: relative;\n            background: ",";\n            z-index: 1;\n            margin-bottom: 80px;\n            &:before{\n                content: url(",");\n                position: absolute;\n                left: 50%;\n                top: 30px;\n                transform: translateX(-50%);\n                z-index: -1;\n                opacity: 1;\n                transition: all 1s ease-in-out;\n            }\n            .post-title{\n                a{\n                    color: ",";\n                    font-size: 30px;\n                    letter-spacing: 1px;\n                }\n            }\n        }\n    }\n    \n    .post-thumb-block{\n        overflow: hidden;\n        margin-bottom: 30px;\n        position: relative;\n        border-radius:  6px;\n        .post-meta{\n            padding: 15px 23px;\n            border-radius: 6px;\n            font-size: 15px;\n            line-height: 20px;\n            text-align: center;\n            color: ",";\n            width: 100px;\n            background: rgba(255,255,255,0.15);\n            position: absolute;\n            top: 10px;\n            right: 10px;\n            em{\n                font-weight: 600;\n                font-size: 28px;\n                line-height: 35px;\n                display: block;\n                font-style: normal;\n            }\n        }\n        img{\n            width: 100%;\n            transition: all 0.6s ease-in;\n            border-radius: 6px;\n        }\n    }\n    .post-content-block{\n        border-radius: 0 0 3px 3px;\n        box-shadow: 0px 2px 4px 0px rgba(12, 0, 46, 0.06);\n        padding: 25px 35px;\n        position: relative;\n    }\n    .post-entry{\n        font-size: 15px;\n        font-weight: 300; \n        line-height: 28px; \n        margin-bottom: 25px;\n    }\n    .post-title{\n        a{ \n            font-size: 24px;\n            font-weight: 600;\n            line-height: 40px;\n            letter-spacing: 1.5px;\n            margin-bottom: 25px;\n            display: block;\n            -webkit-transition: 450ms all;\n            transition: 450ms all;\n            &:hover{\n                color: ",";\n            }\n        }\n    }\n    .readmore-btn {\n       color: rgba(0,0,0,0.35);\n       display: flex;\n       align-items: center;\n       transition: all 0.3s linear;\n       svg{\n           margin-left: 0px;\n           font-size: 27px;\n           transition: all 0.3s linear;\n       }\n       &:hover{\n           svg{\n               margin-left: 3px;\n                transform: scale(1.2);\n           }\n       }\n    } \n    @media only screen and (max-width: 912px) {\n        .blog-page-wrapper{\n             padding-bottom: 80px;\n        }\n    }\n    @media only screen and (max-width: 568px) {\n        .post-block{\n            .post-title {\n                a{\n                    font-size: 20px;\n                    line-height: 33px;  \n                }\n            }\n            &.qutoe-post{\n                .post-title {\n                    a{\n                        font-size: 20px;\n                        line-height: 33px;  \n                    }\n                }\n            }\n        }\n    }\n    @media only screen and (max-width: 480px) {\n        .post-block{\n            &.text-only{\n                padding: 25px 30px 30px;\n            }\n            &.qutoe-post{\n                padding: 80px 25px 40px;\n            }\n        }\n    }\n    @media only screen and (max-width: 375px) {\n        .post-block{\n            .post-title {\n                a{\n                    font-size: 17px;\n                    line-height: 30px;  \n                }\n            }\n            &.qutoe-post{\n                .post-title {\n                    a{\n                        font-size: 17px;\n                        line-height: 30px;  \n                    }\n                }\n            }\n        }\n    }\n"],(function(e){return e.theme.secondaryColor?e.theme.secondaryColor:"#FFEBEC"}),(function(e){return e.theme.primaryColor?e.theme.primaryColor:"#8A57DE"}),h.a,(function(e){return e.theme.white?e.theme.white:"#ffffff"}),(function(e){return e.theme.white?e.theme.white:"#ffffff"}),(function(e){return e.theme.secondaryColor?e.theme.secondaryColor:"#FB7B81"})),y=function(){return o.a.createElement(L,null,o.a.createElement(d.a,{title:"Blog List"}),o.a.createElement("div",{className:"blog-list-wrapper"},o.a.createElement(m.b,null,o.a.createElement(m.c,null,o.a.createElement(m.a,{sm:12,md:8},o.a.createElement(m.c,null,o.a.createElement(m.a,{xs:12},o.a.createElement("div",{className:"post-block list"},o.a.createElement("div",{className:"post-thumb-block"},o.a.createElement("img",{src:x.a,alt:"prime blog page"}),o.a.createElement("div",{className:"post-meta"},o.a.createElement("span",null,o.a.createElement("em",null," 15 ")," SEP"))),o.a.createElement("h2",{className:"post-title"},o.a.createElement(c.Link,{to:"#"},"It is a long established fact that")),o.a.createElement("p",{className:"post-entry"},"Readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use"),o.a.createElement(c.Link,{to:"#",className:"readmore-btn"},"see more ",o.a.createElement(p.d,null)))),o.a.createElement(m.a,{xs:12},o.a.createElement("div",{className:"post-block list text-only"},o.a.createElement("h2",{className:"post-title"},o.a.createElement(c.Link,{to:"#"},"Friendship contrasted solicitude insipidity in introduced literature it.")),o.a.createElement("p",{className:"post-entry"},"Readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use"),o.a.createElement(c.Link,{to:"#",className:"readmore-btn"},"see more ",o.a.createElement(p.d,null)))),o.a.createElement(m.a,{xs:12},o.a.createElement("div",{className:"post-block list qutoe-post"},o.a.createElement("h2",{className:"post-title"},o.a.createElement(c.Link,{to:"#"},"Friendship contrasted solicitude insipidity in introduced literature it. He seemed denote except as oppose do spring my.")))),o.a.createElement(m.a,{xs:12},o.a.createElement("div",{className:"post-block list"},o.a.createElement("div",{className:"post-thumb-block"},o.a.createElement("img",{src:x.a,alt:"prime blog page"}),o.a.createElement("div",{className:"post-meta"},o.a.createElement("span",null,o.a.createElement("em",null," 15 ")," SEP"))),o.a.createElement("h2",{className:"post-title"},o.a.createElement(c.Link,{to:"#"},"It is a long established fact that")),o.a.createElement("p",{className:"post-entry"},"Readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use"),o.a.createElement(c.Link,{to:"#",className:"readmore-btn"},"see more ",o.a.createElement(p.d,null)))))),o.a.createElement(m.a,{sm:12,md:4},o.a.createElement(u.a,null))))))},w=t("pPah"),E=t("DZth"),b=t("xG3l");n.default=function(){return o.a.createElement(i.a,{theme:b.a},o.a.createElement(s.a,null,o.a.createElement(E.a,null),o.a.createElement(r.a,{title:"Appion Gatsby Home"}),o.a.createElement(l.a,null),o.a.createElement(y,null),o.a.createElement(w.a,null)))}},uwrc:function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTEiIGhlaWdodD0iOTIiIHZpZXdCb3g9IjAgMCAxMTEgOTIiPg0KICA8ZGVmcz4NCiAgICA8c3R5bGU+DQogICAgICAuY2xzLTEgew0KICAgICAgICBvcGFjaXR5OiAwLjEyOw0KICAgICAgfQ0KDQogICAgICAuY2xzLTIgew0KICAgICAgICBmaWxsOiAjZmZmOw0KICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7DQogICAgICB9DQogICAgPC9zdHlsZT4NCiAgPC9kZWZzPg0KICA8ZyBpZD0iZmxhdGljb24xNTQ0MTkxMjc5LXN2ZyIgY2xhc3M9ImNscy0xIj4NCiAgICA8cGF0aCBpZD0iUGF0aCIgY2xhc3M9ImNscy0yIiBkPSJNNjQ3LjYzMSwyOTU1LjhhMjUuMDI5LDI1LjAyOSwwLDAsMSwyLjM5MiwxOS40N0EyNi4xMjMsMjYuMTIzLDAsMCwxLDYyNC44ODksMjk5NGgtMC4xMTZjLTkuNDQ2LS4zNi0xNi43ODctMy45OC0yMS44MTktMTAuNzYtOC45OTItMTIuMTItNy45MjEtMzEuMzctNC4yNzEtNDQuMTcsNi4yMTktMjEuODMsMjAuOTU2LTM3LjA3LDM1LjgzNy0zNy4wN2EyMS40LDIxLjQsMCwwLDEsMi43NzIuMTgsMi45NjksMi45NjksMCwwLDEsMi4wNiwxLjI4LDIuODM5LDIuODM5LDAsMCwxLC4zNzUsMi4zNmwtMi43MSw5LjUxYTIuOTEzLDIuOTEzLDAsMCwxLTIuNCwyLjA4Yy0xMi40LDEuODEtMTguNjIxLDE3Ljg3LTIxLjIxMSwyNy4xOGEyNi4yNjIsMjYuMjYyLDAsMCwxLDEwLjMwNi0yLjA3LDMwLjMsMzAuMywwLDAsMSw4LjIxOSwxLjE3QTI2LjE0MiwyNi4xNDIsMCwwLDEsNjQ3LjYzMSwyOTU1LjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTk2IC0yOTAyKSIvPg0KICAgIDxwYXRoIGlkPSJQYXRoLTIiIGRhdGEtbmFtZT0iUGF0aCIgY2xhc3M9ImNscy0yIiBkPSJNNzA2LjAyNSwyOTc1LjI3QTI2LjEyNCwyNi4xMjQsMCwwLDEsNjgwLjg5LDI5OTRoLTAuMTE2Yy05LjQ0Ni0uMzYtMTYuNzg4LTMuOTgtMjEuODE4LTEwLjc2LTguOTkzLTEyLjEyLTcuOTIzLTMxLjM3LTQuMjc0LTQ0LjE3LDYuMjItMjEuODMsMjAuOTU3LTM3LjA3LDM1LjgzOC0zNy4wN2EyMS4zNjQsMjEuMzY0LDAsMCwxLDIuNzcyLjE4LDIuOTY0LDIuOTY0LDAsMCwxLDIuMDYxLDEuMjgsMi44MzksMi44MzksMCwwLDEsLjM3NSwyLjM2bC0yLjcxLDkuNTFhMi45MTQsMi45MTQsMCwwLDEtMi40LDIuMDhjLTEyLjQsMS44MS0xOC42MjIsMTcuODctMjEuMjEzLDI3LjE4YTI2LjI2NywyNi4yNjcsMCwwLDEsMTAuMzA3LTIuMDcsMzAuMjkxLDMwLjI5MSwwLDAsMSw4LjIxOCwxLjE3LDI2LjEzNywyNi4xMzcsMCwwLDEsMTUuNywxMi4xMUEyNS4wNDcsMjUuMDQ3LDAsMCwxLDcwNi4wMjUsMjk3NS4yN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OTYgLTI5MDIpIi8+DQogIDwvZz4NCjwvc3ZnPg0K"}}]);
//# sourceMappingURL=component---src-pages-blog-list-js-78d6e662350fd4e0de94.js.map