"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),g=p,d=f["".concat(l,".").concat(g)]||f[g]||c[g]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function g(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99995:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}const o={sidebar_label:"PDFOptions.pageRanges"},i="PDFOptions.pageRanges property",l={unversionedId:"api/puppeteer.pdfoptions.pageranges",id:"version-19.7.2/api/puppeteer.pdfoptions.pageranges",title:"PDFOptions.pageRanges property",description:"Paper ranges to print, e.g. 1-5, 8, 11-13.",source:"@site/versioned_docs/version-19.7.2/api/puppeteer.pdfoptions.pageranges.md",sourceDirName:"api",slug:"/api/puppeteer.pdfoptions.pageranges",permalink:"/api/puppeteer.pdfoptions.pageranges",draft:!1,tags:[],version:"19.7.2",frontMatter:{sidebar_label:"PDFOptions.pageRanges"},sidebar:"api",previous:{title:"PDFOptions.omitBackground",permalink:"/api/puppeteer.pdfoptions.omitbackground"},next:{title:"PDFOptions.path",permalink:"/api/puppeteer.pdfoptions.path"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Default value:",id:"default-value",level:4}],c={toc:u};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",p({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"pdfoptionspageranges-property"}),"PDFOptions.pageRanges property"),(0,n.kt)("p",null,"Paper ranges to print, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"1-5, 8, 11-13"),"."),(0,n.kt)("h4",p({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-typescript"}),"interface PDFOptions {\n  pageRanges?: string;\n}\n")),(0,n.kt)("h4",p({},{id:"default-value"}),"Default value:"),(0,n.kt)("p",null,"The empty string, which means all pages are printed."))}f.isMDXComponent=!0}}]);