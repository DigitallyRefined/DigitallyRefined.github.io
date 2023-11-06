"use strict";(self.webpackChunkdigitally_refined=self.webpackChunkdigitally_refined||[]).push([[927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(3743);const i={tableOfContentsInline:"tableOfContentsInline_prmo"};function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return a.createElement("div",{className:i.tableOfContentsInline},a.createElement(r.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),i=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function u(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),n=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),s=u(o,{anchorTopOffset:n.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?r.createElement("ul",{className:i?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=r.memo(d);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:c,maxHeadingLevel:d,...h}=e;const f=(0,i.L)(),g=c??f.tableOfContents.minHeadingLevel,v=d??f.tableOfContents.maxHeadingLevel,k=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>o({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:g,maxHeadingLevel:v});return m((0,r.useMemo)((()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:g,maxHeadingLevel:v}}),[s,u,g,v])),r.createElement(p,(0,a.Z)({toc:k,className:n,linkClassName:s},h))}},7757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(3901);const l={sidebar_position:1},o="IKEA VINDSTYRKA",s={unversionedId:"guides/IKEA-VINDSTYRKA",id:"guides/IKEA-VINDSTYRKA",title:"IKEA VINDSTYRKA",description:"The IKEA VINDSTYRKA an relatively inexpensive air quality monitor $49/\xa335 that was released in April 2023.",source:"@site/docs/guides/IKEA-VINDSTYRKA.md",sourceDirName:"guides",slug:"/guides/IKEA-VINDSTYRKA",permalink:"/guides/IKEA-VINDSTYRKA",draft:!1,editUrl:"https://github.com/DigitallyRefined/DigitallyRefined.github.io/tree/main/docs/guides/IKEA-VINDSTYRKA.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tailscale & Headscale",permalink:"/guides/Tailscale-Headscale-setup"}},u={},c=[{value:"Video",id:"video",level:2},{value:"Features",id:"features",level:2},{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"Home Assistant ZHA integration",id:"home-assistant-zha-integration",level:2},{value:"Applying the patch manually",id:"applying-the-patch-manually",level:3},{value:"Uninstalling the patch",id:"uninstalling-the-patch",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ikea-vindstyrka"},"IKEA VINDSTYRKA"),(0,r.kt)("p",null,"The IKEA VINDSTYRKA an relatively inexpensive air quality monitor $49/\xa335 that was released in April 2023."),(0,r.kt)(i.Z,{toc:c,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"video"},"Video"),(0,r.kt)("div",{className:"remark-oembed-inline remark-oembed-you-tube","data-oembed":""},(0,r.kt)("a",{parentName:"div",href:"https://youtu.be/EvjTHlPT9zM",className:"remark-oembed-anchor","data-oembed":"",rel:"noopener noreferrer nofollow",target:"_blank"},(0,r.kt)("img",{parentName:"a",src:"https://i.ytimg.com/vi/EvjTHlPT9zM/hqdefault.jpg",title:"IKEA VINDSTYRKA Review & Pairing to Home Assistant",width:200,height:113,className:"remark-oembed-photo","data-oembed":""})),(0,r.kt)("template",{parentName:"div","data-oembed-template":""})),(0,r.kt)("a",{href:"https://youtu.be/EvjTHlPT9zM"},"Watch on YouTube"),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PM2.5"),(0,r.kt)("li",{parentName:"ul"},"tVOC"),(0,r.kt)("li",{parentName:"ul"},"Temperature"),(0,r.kt)("li",{parentName:"ul"},"Humidity"),(0,r.kt)("li",{parentName:"ul"},"Air quality icons"),(0,r.kt)("li",{parentName:"ul"},"Zigbee radio"),(0,r.kt)("li",{parentName:"ul"},"USB-C")),(0,r.kt)("h2",{id:"pros"},"Pros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Relatively inexpensive way to add air quality, temperature & humidity data to your smart home"),(0,r.kt)("li",{parentName:"ul"},"Can perform automatons based on data, such as turning on/off air purifiers, air conditioning and dehumidifiers or even humidifiers"),(0,r.kt)("li",{parentName:"ul"},"Configurable backlight brightness & always on or auto off"),(0,r.kt)("li",{parentName:"ul"},"Works with Home Assistant via Zigbee"),(0,r.kt)("li",{parentName:"ul"},"USB-C powered")),(0,r.kt)("h2",{id:"cons"},"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No time or date on display (LCD limitation)"),(0,r.kt)("li",{parentName:"ul"},"Fan does make small amount of noise"),(0,r.kt)("li",{parentName:"ul"},"Temperature lacks decimal places (precision)"),(0,r.kt)("li",{parentName:"ul"},"Getting the tVOC value via ZHA requires a bit more setup"),(0,r.kt)("li",{parentName:"ul"},"Only available in white"),(0,r.kt)("li",{parentName:"ul"},"No battery")),(0,r.kt)("h2",{id:"home-assistant-zha-integration"},"Home Assistant ZHA integration"),(0,r.kt)("p",null,"Currently if you're using the default ",(0,r.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/zha/"},"ZHA integration")," for your Zigbee coordinator, the tVOC sensor wont be available in Home Assistant. However, tVOC is available via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zigbee2mqtt/hassio-zigbee2mqtt#installation"},"Zigbee2MQTT plug-in")," (so if you're using Zigbee2MQTT there's no need to apply the patch below)."),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/RWzzNe5gm5s"},"differences between ZHA and Zigbee2MQTT"),"."),(0,r.kt)("p",null,"There are currently 2 GitHub pull requests to enable it, however at the time of publishing they weren't merged:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zigpy/zha-device-handlers/pull/2315"},"Add support for IKEA VINDSTYRKA Air quality Sensor #2315")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/home-assistant/core/pull/90616"},'Add support for "VOC Index" sensor entity in ZHA #90616'))),(0,r.kt)("h3",{id:"applying-the-patch-manually"},"Applying the patch manually"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"config/configuration.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"zha:\n custom_quirks_path: /share/zhaquirks/\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"share/ikea-vindstyrka/patch-zha-sensor.sh")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\nSCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )\nCONFIG_DIR=$(realpath $SCRIPT_DIR/../../config)\nZHA_DIR=$CONFIG_DIR/custom_components/zha\nZHAQUIRKS_DIR=$(realpath $SCRIPT_DIR/../zhaquirks)\n\nmkdir -p $CONFIG_DIR/custom_components\n\nrm -fR $ZHA_DIR\ndocker cp homeassistant:/usr/src/homeassistant/homeassistant/components/zha $ZHA_DIR\ndocker cp homeassistant:/usr/local/lib/python3.10/site-packages/zhaquirks $ZHAQUIRKS_DIR\n\napk add patch\n\npatch -u -b $ZHA_DIR/sensor.py -i $SCRIPT_DIR/sensor.patch\npatch -u -b $ZHA_DIR/manifest.json -i $SCRIPT_DIR/version.patch\nwget https://raw.githubusercontent.com/zigpy/zha-device-handlers/8e568464caedab3bd7c7fedb2544da99987d05d0/zhaquirks/ikea/vindstyrka.py -P $ZHAQUIRKS_DIR/ikea\n\ndocker restart homeassistant\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chmod +x share/ikea-vindstyrka/patch-zha-sensor.sh")),(0,r.kt)("p",null,"Patches are based off the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/home-assistant/core/pull/90616.patch"},'"VOC Index" pull request')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"share/ikea-vindstyrka/sensor.patch")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'--- sensor.py.orig  2023-05-04 09:39:47.277383955 +0100\n+++ sensor.py   2023-05-04 09:48:06.726541317 +0100\n@@ -700,6 +700,18 @@\n     _attr_native_unit_of_measurement = CONCENTRATION_PARTS_PER_BILLION\n \n \n+@MULTI_MATCH(cluster_handler_names="voc_index", stop_on_match_group="voc_index")\n+class VOCIndex(Sensor):\n+    """VOC Index sensor."""\n+\n+    SENSOR_ATTR = "measured_value"\n+    _attr_device_class: SensorDeviceClass = SensorDeviceClass.VOLATILE_ORGANIC_COMPOUNDS\n+    _attr_state_class: SensorStateClass = SensorStateClass.MEASUREMENT\n+    _attr_name: str = "VOC index"\n+    _decimals = 0\n+    _multiplier = 1\n+\n+\n @MULTI_MATCH(cluster_handler_names="pm25")\n class PM25(Sensor):\n     """Particulate Matter 2.5 microns or less sensor."""\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"share/ikea-vindstyrka/version.patch")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'--- manifest.json   2023-04-09 04:43:34.000000000 +0100\n+++ "manifest copy.json"    2023-04-09 08:55:44.655664588 +0100\n@@ -1,6 +1,7 @@\n {\n   "domain": "zha",\n   "name": "Zigbee Home Automation",\n+  "version": "0.0.1-ikea-vindstyrka",\n   "after_dependencies": ["onboarding", "usb"],\n   "codeowners": ["@dmulcahey", "@adminiuga", "@puddly"],\n   "config_flow": true,\n')),(0,r.kt)("p",null,"Once the files have been copied over to your Home Assistant, run the patch script via:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/share/ikea-vindstyrka/patch-zha-sensor.sh")),(0,r.kt)("p",null,"Note: each time Home Assistant updates you will need to rerun the script."),(0,r.kt)("h3",{id:"uninstalling-the-patch"},"Uninstalling the patch"),(0,r.kt)("p",null,"Delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"zha.custom_quirks_path")," in your configuration and remove following directories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config/custom_components/zha")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"share/ikea-vindstyrka")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"share/zhaquirks"))),(0,r.kt)("script",{async:!0,defer:!0},"\n    const isDocumentReady = () => {\n      if (document.readyState !== 'complete') {\n        document.addEventListener('readystatechange', isDocumentReady);\n        return false;\n      }\n\n      requestAnimationFrame(() => {\n        \n    document.querySelectorAll('div[data-oembed]').forEach((el) => {\n      const template = el.querySelector('[data-oembed-template]').content.cloneNode(true);\n      el.innerHTML = '';\n      el.attachShadow({ mode: 'closed' }).appendChild(template);\n    });\n\n    document.querySelectorAll('img[data-oembed][data-src]').forEach((img) => {\n      img.setAttribute('src', img.getAttribute('data-src'));\n      img.removeAttribute('data-src');\n    });\n\n    document.querySelectorAll('[data-oembed]').forEach((el) => {\n      el.removeAttribute('data-oembed');\n    });\n  ;\n      });\n\n      return true;\n    };\n\n    if (!isDocumentReady()) {\n      document.addEventListener('readystatechange', isDocumentReady);\n    }\n  "))}p.isMDXComponent=!0}}]);