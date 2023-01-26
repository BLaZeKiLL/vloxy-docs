"use strict";(self.webpackChunkvloxy_docs=self.webpackChunkvloxy_docs||[]).push([[9533],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Getting Started",c={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"Currently Tested with Unity 2021.3 LTS and URP. Collections package recently had some breaking changes so older versions of unity might not work",source:"@site/docs/getting_started.mdx",sourceDirName:".",slug:"/getting_started",permalink:"/vloxy-docs/docs/getting_started",draft:!1,editUrl:"https://github.com/BLaZeKiLL/vloxy-docs/tree/master/docs/docs/getting_started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/vloxy-docs/docs/introduction"},next:{title:"World",permalink:"/vloxy-docs/docs/world"}},u={},p=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{title:"Compatibility",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Currently Tested with Unity 2021.3 LTS and URP. Collections package recently had some breaking changes so older versions of unity might not work")),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get started by installing ",(0,a.kt)("strong",{parentName:"li"},"Vloxy Engine")," using one of the following methods",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Unity Package latest can be found ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/BLaZeKiLL/VloxyEngine/releases"},"here"))),(0,a.kt)("li",{parentName:"ul"},"OpenUPM, more info can be found ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://openupm.com/packages/io.codeblaze.vloxyengine/"},"here")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="OpenUPM Install Command"',title:'"OpenUPM',Install:!0,'Command"':!0},"openupm add io.codeblaze.vloxyengine\n")),(0,a.kt)("admonition",{title:"Choosing Installation Method",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"While UPM is supported via OpenUPM, it is still recommended to add ",(0,a.kt)("strong",{parentName:"p"},"Vloxy Engine")," directly too the project as a package.\nWith source access you would get the maximum control and freedom to tune the engine to you'r use case.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make sure the following dependencies are installed, they should be installed ",(0,a.kt)("strong",{parentName:"p"},"automatically")," regardless of the way you install ",(0,a.kt)("strong",{parentName:"p"},"Vloxy Engine")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.mathematics@1.2/manual/index.html"},"Unity Maths")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.burst@1.7/manual/index.html"},"Unity Burst")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.collections@1.2/manual/index.html"},"Unity Collections")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"After the package is imported you can open up one of the sample scene or import one of the world pre-fabe into your current scene.\nin case you go the pre-fabe route make sure to set the focus parameter on the world object around which the world would be generated."))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Looking at samples is a great place to start, They demonstrate how different parts of the engine can be configured to achive the desired results."),(0,a.kt)("li",{parentName:"ul"},"For basic use-cases you could even use the samples out of the box just by tweaking some settings but the real power of voxel engine lies in it's extensibility.")))}m.isMDXComponent=!0}}]);