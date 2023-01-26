"use strict";(self.webpackChunkvloxy_docs=self.webpackChunkvloxy_docs||[]).push([[16],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3465:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(3117),o=r(102),l=(r(7294),r(3905)),a=["components"],i={sidebar_position:3},s="World",c={unversionedId:"world",id:"world",title:"World",description:"VloxyWorld behaviour defines the entry-point to voxel engine. It is responsible for initializing and updating the engine state.",source:"@site/docs/world.mdx",sourceDirName:".",slug:"/world",permalink:"/vloxy-docs/docs/world",draft:!1,editUrl:"https://github.com/BLaZeKiLL/vloxy-docs/tree/master/docs/docs/world.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/vloxy-docs/docs/getting_started"},next:{title:"Configuration",permalink:"/vloxy-docs/docs/category/configuration"}},u={},p=[{value:"Members",id:"members",level:2},{value:"Overrides",id:"overrides",level:2},{value:"Lifecycle Overrides",id:"lifecycle-overrides",level:3}],d={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"world"},"World"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"VloxyWorld")," behaviour defines the entry-point to voxel engine. It is responsible for initializing and updating the engine state."),(0,l.kt)("p",null,"Extending the ",(0,l.kt)("strong",{parentName:"p"},"VloxyWorld")," class is the first thing you will need to do in order to customize the behaviour of the engine."),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"VloxyWorld")," exposes the following protected members."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected VloxySettings Settings;\n")),(0,l.kt)("p",null,"Reference to the VloxySettings scriptable object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected int3 FocusChunkCoord;\n")),(0,l.kt)("p",null,"Current chunk coordinates corresponding to the focus coordinates."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected NoiseProfile NoiseProfile;\n")),(0,l.kt)("p",null,"Noise Profile is used to generate chunk data depending on the noise configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected ChunkManager ChunkManager;\n")),(0,l.kt)("p",null,"Chunk Manager stores currently loaded chunks and decides what chunks to be streamed and meshed."),(0,l.kt)("h2",{id:"overrides"},"Overrides"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"VloxyWorld")," exposes the following virtual methods."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected virtual VloxyProvider Provider() => new();\n")),(0,l.kt)("p",null,"The provider is pretty integral to the engine, we'll go over its details later but on a high level :-"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Overriding this method would allow you to switch out the provider with your custom implementation of the ",(0,l.kt)("strong",{parentName:"li"},"VloxyProvider"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"VloxyProvider")," follows the inversion of control pattern, loosely like dependency injection.\nIt is the one place where all dependencies and components of the engine are configured."),(0,l.kt)("li",{parentName:"ul"},"Custom ",(0,l.kt)("strong",{parentName:"li"},"VloxyProvider")," allow you to change components of the engine with your own implementation controlling the high level behaviour."),(0,l.kt)("li",{parentName:"ul"},"Custom ",(0,l.kt)("strong",{parentName:"li"},"VloxyProvider")," also allows you to define burst function overrides controlling the low level behaviour.")),(0,l.kt)("h3",{id:"lifecycle-overrides"},"Lifecycle Overrides"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected virtual void WorldConfigure() { }\n")),(0,l.kt)("p",null,"WorldConfigure is called right after runtime settings are computed. This lifecycle hook can be used change settings at runtime."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected virtual void WorldInitialize() { }\n")),(0,l.kt)("p",null,"WorldInitialize is called right after the provider is initialized."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected virtual void WorldAwake() { }\n")),(0,l.kt)("p",null,"WorldAwake is equivalent to Unity Awake."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected virtual void WorldStart() { }\n")),(0,l.kt)("p",null,"WorldStart is equivalent to Unity Start."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected virtual void WorldUpdate() { }\n")),(0,l.kt)("p",null,"WorldUpdate is equivalent to Unity Update."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"protected virtual void WorldRegionUpdate() { }\n")),(0,l.kt)("p",null,"WorldRegionUpdate is called every time FocusChunkCoord is updated."),(0,l.kt)("p",null,"Next we'll look into more ways to configure the engine on a granular level."))}g.isMDXComponent=!0}}]);