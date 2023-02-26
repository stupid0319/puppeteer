"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=s(r),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"HTTPRequest.redirectChain"},p="HTTPRequest.redirectChain() method",c={unversionedId:"api/puppeteer.httprequest.redirectchain",id:"api/puppeteer.httprequest.redirectchain",title:"HTTPRequest.redirectChain() method",description:"A redirectChain is a chain of requests initiated to fetch a resource.",source:"@site/../docs/api/puppeteer.httprequest.redirectchain.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.redirectchain",permalink:"/next/api/puppeteer.httprequest.redirectchain",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPRequest.redirectChain"},sidebar:"api",previous:{title:"HTTPRequest.postData",permalink:"/next/api/puppeteer.httprequest.postdata"},next:{title:"HTTPRequest.resourceType",permalink:"/next/api/puppeteer.httprequest.resourcetype"}},s={},l=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}],u={toc:l};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"httprequestredirectchain-method"}),"HTTPRequest.redirectChain() method"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectChain")," is a chain of requests initiated to fetch a resource."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class HTTPRequest {\n  redirectChain(): HTTPRequest[];\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.httprequest"}),"HTTPRequest"),"[","]"),(0,n.kt)("p",null,"the chain of requests - if a server responds with at least a single redirect, this chain will contain all requests that were redirected."),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"redirectChain")," is shared between all the requests of the same chain."),(0,n.kt)("p",null,"For example, if the website ",(0,n.kt)("inlineCode",{parentName:"p"},"http://example.com")," has a single redirect to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com"),", then the chain will contain one request:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const response = await page.goto('http://example.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 1\nconsole.log(chain[0].url()); // 'http://example.com'\n")),(0,n.kt)("p",null,"If the website ",(0,n.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects, then the chain will be empty:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const response = await page.goto('https://google.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 0\n")))}h.isMDXComponent=!0}}]);