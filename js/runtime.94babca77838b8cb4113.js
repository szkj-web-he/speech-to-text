/*! For license information please see runtime.94babca77838b8cb4113.js.LICENSE.txt */
(()=>{"use strict";var e,a,c,f,d,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=b,e=[],r.O=(a,c,f,d)=>{if(!c){var b=1/0;for(i=0;i<e.length;i++){for(var[c,f,d]=e[i],t=!0,o=0;o<c.length;o++)(!1&d||b>=d)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[c,f,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};a=a||[null,c({}),c([]),c(c)];for(var t=2&f&&e;"object"==typeof t&&!~a.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(d,b),d},r.d=(e,a)=>{for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,c)=>(r.f[c](e,a),a)),[])),r.u=e=>"js/"+e+"."+{3:"1b2998f5c1c6054eb80e",4:"9c061c9a400f329678c9",5:"259cec3aa6a2fe2a56df",6:"498b0292dbb6b44e8d15",7:"663fffe884f4afe22c14",8:"1f1847bf8ed9ba6a8584",9:"34fcc52b6e949115009d",10:"75f98f1b54d82671716a",11:"984c25b381002e6972bb",12:"156c3be0574bba004d11",13:"13f455994a0a4e12d7c9",14:"6bade073cf5bdc21c244",15:"7ea02a4095396cb9aceb",16:"49cf274c9961d5b0268b",17:"022bb538bc44dd374d84",18:"f439bfbea0e73d06a280",19:"52332b2f958e66fc5ec3",20:"fa713905bf073131309e",21:"069b265e41bbcf766a6d",22:"11797e193dfc390d1027",23:"ed4363a28e54a2f670e1",24:"1b4e0f4871f4676ddf08",25:"04002a1eac428ec50eaa",26:"b040539e26a3393f2680",27:"545dfd5f83b86fd06bcd",28:"e68ee6093e1d100cb1f5",29:"69cf24279ce4e9309a83",30:"8ac31bb7882d60fb295f",31:"44bcbf07580d63196d7d",32:"6989f21cdb6b1211d832",33:"1d189dc5997125fec315",34:"0b5005bc1282c85c1845",35:"770eb4e9630ffbac4dd1",36:"b58d9fad1c7152903554",37:"aa12bba4acd618281413",38:"55f78703af6ab0596dae",39:"ddfc572d7e7cf0398c32",40:"36612b6c8f52bc80e8db",41:"230d5f7f927da28dad73",42:"72a3ce5552dfb70b7c14",43:"c0b5de697dbc923fef48",44:"508f9792186bc129c0eb",45:"92c7d0664cc5ae4a68ad",46:"4236490baba83508a42f",47:"c52e4379893e8700a0e8",48:"415b9aa03c8aa95d6db1",49:"8cd776e769e0d1e83a07",50:"5833c571500364f3b20b",51:"ee4fcbc54a52fa893bd0",52:"b8b1d2e132c6aadcc4f6",53:"37c39ab2d0f00d7c2fef",54:"499f0852db3460a7bb49",55:"fd6d0cb34fb4c06c9410",56:"36f78c1c5e83d829fb00",57:"d0de21733fca05ceb9e5",58:"2ed17dbc10c316c4a8ad",59:"e85864431c618d53c2b3",60:"5ccb5beb3bc4912a17cf",61:"8db6ce4f3bdd73f6dce8",62:"d3826cf3bc1d17f73406",63:"b093bdc8bd39c70030b8",64:"169b02e6fca54bf76d7b",65:"1c88daf90ff4aa556af5",66:"1a99a3da3e064a6429e0",67:"9dc3c0e777524b104581",68:"341c35a0336bdc45b032",69:"08a480f03ea23a843242",70:"50f40877416f43398987",71:"066de9c9ef949fd3c2ca",72:"a5fe1c011dc9f43288f1",73:"98bc0eca52bdc9ae2d63",74:"bcc9bf8eb0e71fa45ca6",75:"096f41dc33e5e6fa5903",76:"c036610854ae7e6e38d9",77:"f02540f94a2df2579203",78:"200ad0b6a95fe5133c15",79:"3d3234f850d218bec5e7",80:"3d38eb3d9819b8a58916",81:"853ed210eed5123b3d83",82:"6d228714571cbab6d703",83:"e1e6068a1e424edcf5a0",84:"5d6c412153ae2a256169",85:"68f09cbe4a76b11838fb",86:"3a7aaf29cc7baf656b3e",87:"834031546553f3afb772",88:"f908b9b6ce202538f539",89:"9a98a5f5465117f3ead8",90:"a75e0354d51318279fb3",91:"79551a8d5096243c7574",92:"d3d673cb101b00da8dca",93:"a0f94b50439756bdd147",94:"42511e4fd66c84320599",95:"8aafec931ad32ba4ac07",96:"8b308fb0e07b1235d601",97:"371aff38b7345f5c1ef6",98:"1d166eb74f3d46ad6776",99:"b939fd5f74f583d2b6a3",100:"adbe744679594cf76256",101:"d7a2db843cdcef887026",102:"0d506517cd7c9bdb1f9d",103:"b05dd92cca374f5d4fd4",104:"b71c7dcd0938ada05d20",105:"99d2611fc9af119cf202",106:"ab705d868774a048c9e2",107:"92b6cb0f24710cadc57c",108:"81173e83ad4d67514134",109:"303a6c541745d0f5da51",110:"bb5327f16983583bb486",111:"ae4c71f7e7b81c89134c",112:"3733f7eb66d899391c74",113:"9437e649be23e709eaa2",114:"c8b2290ff7ecf5b082ad",115:"2c1ff890df2b39b94b26",116:"a21af6f4be26bd4c043d",117:"f4eddef9c3b147f7e5c6",118:"2255ae6bd53d346ba7db",119:"c42aa1774146c6891cac",120:"fe9dc37e3e00be7e573f",121:"789ae0938c5c3552fe3a",122:"678c5fc6c81e9a3c3174",123:"9c7e5cefa149b8fa2184",124:"bea4e33a03fa4548d3e5",125:"e766bdf3020b7572fb35",126:"90ce599404d2e1619c2f",127:"8b72414e15e2a8a8f22d",128:"b121154060e3f4c9933b",129:"2aef3a66b700fabe9b82",130:"99108413a16acd983c21",131:"6bd8c0864fccb3b08d9c",132:"6b97ceb77782349444ac",133:"00c820118155ff872874",134:"deaa6fada3401d260401",135:"336e2b2ea58846a37ce4",136:"02ca36e58d36963e2cda",137:"2a1571e224159da543c9",138:"621b9489c53fb4350982",139:"c10158b51d8981c64e2c",140:"39195cf1f201c7e142d7",141:"6ba56d8d2d752a68e2cb",142:"065c6347d9ff3b6dd5e3",143:"4cdc0e446b2b90dcb11e",144:"d42c642a296ebcf86ebc",145:"622009155fb497b72504",146:"e7d57985323c75bc5962",147:"411282d3e3d987ddf69c",148:"1bedb659474b46bb2667",149:"2baa2c8012cb92d58acd",150:"f2db7f5b5c92ac390164",151:"ae8ad6bf4551d01dabc1",152:"719bbcc7f5bba3b3a913",153:"0f6a81a05fe7754051e4",154:"780252974ca44efc2012",155:"57b22538630ec9538a1f"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},d="speech-to-text:",r.l=(e,a,c,b)=>{if(f[e])f[e].push(a);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==d+c){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+c),t.src=e),f[e]=[a];var u=(a,c)=>{t.onerror=t.onload=null,clearTimeout(s);var d=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/speech-to-text",(()=>{var e={1:0};r.f.j=(a,c)=>{var f=r.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(1!=a){var d=new Promise(((c,d)=>f=e[a]=[c,d]));c.push(f[2]=d);var b=r.p+r.u(a),t=new Error;r.l(b,(c=>{if(r.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var d=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,f[1](t)}}),"chunk-"+a,a)}else e[a]=0},r.O.j=a=>0===e[a];var a=(a,c)=>{var f,d,[b,t,o]=c,n=0;if(b.some((a=>0!==e[a]))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(o)var i=o(r)}for(a&&a(c);n<b.length;n++)d=b[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},c=self.webpackChunkspeech_to_text=self.webpackChunkspeech_to_text||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();