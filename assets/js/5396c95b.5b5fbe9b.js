"use strict";(self.webpackChunkvloxy_docs=self.webpackChunkvloxy_docs||[]).push([[6132],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2014:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:4},c="Renderer",s={unversionedId:"configuration/renderer",id:"configuration/renderer",title:"Renderer",description:"Renderer Settings are divided in two, Mesh related settings are controlled via the scriptable object but a bulk of it is",source:"@site/docs/configuration/renderer.mdx",sourceDirName:"configuration",slug:"/configuration/renderer",permalink:"/vloxy-docs/docs/configuration/renderer",draft:!1,editUrl:"https://github.com/BLaZeKiLL/vloxy-docs/tree/master/docs/docs/configuration/renderer.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Chunk",permalink:"/vloxy-docs/docs/configuration/chunk"},next:{title:"Scheduler",permalink:"/vloxy-docs/docs/configuration/scheduler"}},u={},p=[{value:"Material",id:"material",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"renderer"},"Renderer"),(0,i.kt)("p",null,"Renderer Settings are divided in two, Mesh related settings are controlled via the scriptable object but a bulk of it is\ncontrolled by the material, tough the material is passed via the scriptable object."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Material")," - Main material to be used by chunk meshes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cast Shadows")," - Enables shadows for chunk meshes")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Shadows can cause some artifacts which can be fixed by fiddling with projects lighting settings.")),(0,i.kt)("h2",{id:"material"},"Material"),(0,i.kt)("p",null,"Vloxy Engine comes with shaders for ",(0,i.kt)("strong",{parentName:"p"},"URP")," and ",(0,i.kt)("strong",{parentName:"p"},"Built-In")," render pipelines."),(0,i.kt)("admonition",{title:"Compatibility",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Shaders for the ",(0,i.kt)("strong",{parentName:"p"},"Built-In")," pipeline require some tweaks to support textures")),(0,i.kt)("p",null,"2 variants of the shaders are provided"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Vertex Color")," - If you want just RGB colored blocks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Textured")," - If you want textured blocks using texture arrays")),(0,i.kt)("p",null,"both shaderss allow you to control the baked ",(0,i.kt)("strong",{parentName:"p"},"Ambient Occlusion")," curve and it's intensity."))}f.isMDXComponent=!0}}]);