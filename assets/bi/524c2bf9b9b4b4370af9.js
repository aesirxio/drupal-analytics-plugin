"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[685],{685:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var s=a(17204),n=a(90346),l=a(76963),r=(a(83874),a(20513)),o=a(70069),i=a(23541),c=a(67294),m=a(38585),d=a(68949),g=a(40872),p=a(38994),h=a(91072),u=a(16550),b=a(30381),w=a.n(b),E=c.createContext(),v=({children:e,viewModel:t})=>c.createElement(E.Provider,{value:t},e),x=class{constructor(){(0,i.o)(this,"getFlowDetail",(async(e,t,a,s)=>{try{const n=new g.Q2,l=await n.getFlowDetail(e,t);l?(0,d.z)((()=>{a(l)})):s({message:"Something went wrong from Server response"})}catch(e){(0,d.z)((()=>{e.response?.data.message?s({message:e.response?.data?.message}):s({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}}))}},N=class{constructor(e,t,a){(0,i.o)(this,"flowStore",null),(0,i.o)(this,"behaviorStore",null),(0,i.o)(this,"status",r.r.READY),(0,i.o)(this,"globalStoreViewModel",null),(0,i.o)(this,"data",null),(0,i.o)(this,"relatedVisitorData",null),(0,i.o)(this,"dataFilter",{}),(0,i.o)(this,"getFlowDetail",((e,t)=>{this.status=r.r.LOADING,this.dataFilter={...this.dataFilter,...t},this.flowStore.getFlowDetail(e,t,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler)})),(0,i.o)(this,"setDataFilter",(e=>{this.dataFilter=e})),(0,i.o)(this,"callbackOnErrorHandler",(e=>{this.status=r.r.READY,(0,p.j5)(e.message,"error")})),(0,i.o)(this,"callbackOnDataSuccessHandler",(e=>{if(e)if(this.status=r.r.READY,this.data=e,e?.events){const t=new s.I(e?.events,this.globalStoreViewModel);this.relatedVisitorData=t}else this.status=r.r.ERROR,this.relatedVisitorData=null;else this.status=r.r.ERROR,this.data={}})),(0,d.ky)(this),this.flowStore=e,this.behaviorStore=t,this.globalStoreViewModel=a}},f=class{constructor(e,t,a){(0,i.o)(this,"flowDetailViewModel",null),(0,i.o)(this,"getFlowViewModel",(()=>this.flowDetailViewModel)),t&&(this.flowDetailViewModel=new N(e,t,a))}},y=({data:e=[],loading:t=r.r.LOADING})=>c.createElement("div",{className:"row gx-24 mb-24"},e?.length>0?e.map(((e,a)=>c.createElement("div",{className:e.className,key:a},c.createElement("div",{className:"bg-white p-24 shadow-sm rounded-3 h-100"},c.createElement("div",{className:"d-flex justify-content-between position-relative align-items-center"},t===r.r.LOADING?c.createElement(p.DC,{className:"d-flex justify-content-start align-items-center bg-white",size:"10px"}):c.createElement(c.Fragment,null,c.createElement("div",{className:"overflow-hidden"},c.createElement("p",{className:"m-0 text-gray fs-16"},e.title),c.createElement("h3",{className:"mb-0 fw-semibold fs-24 text-color"},e?.value)),c.createElement("div",{className:"d-flex flex-wrap align-item-center"},c.createElement("div",{className:"icon-card rounded-circle ",style:{background:(0,n.$)(e.iconColor,.15)}},c.createElement("span",{className:"icon arrow d-inline-block align-text-bottom ms-auto",style:{WebkitMaskImage:`url(${e.icon})`,WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center",backgroundColor:(0,n.$)(e.iconColor)}}))))))))):null),k=(0,m.Pi)((e=>{const{t}=(0,h.$G)(),{flowDetailViewModel:{data:a=[],relatedVisitorData:s,getFlowDetail:n,status:r}}=c.useContext(E),{biListViewModel:{activeDomain:i,integrationLink:m}}=(0,o.mQ)(),{uuid:d}=(0,u.UO)(),p=e.integration?m.split("/")[1]:d;(0,c.useEffect)((()=>((async()=>{await n(p,{"with[]":"events"})})(),()=>{})),[i]);const b=(0,c.useMemo)((()=>[{className:"col-3",title:t("txt_domain"),icon:g.OB.PUBLIC_URL+"/assets/images/domain.svg",iconColor:"#1AB394",value:a?.[g.yk.DOMAIN]??""},{className:"col-3",title:t("txt_location"),icon:g.OB.PUBLIC_URL+"/assets/images/location.svg",iconColor:"#1AB394",value:a?.[g.yk.LOCATION]?.country?.name??"unDetected"},{className:"col-3",title:t("txt_duration"),icon:g.OB.PUBLIC_URL+"/assets/images/clock.svg",iconColor:"#1AB394",value:w().utc(w().duration(w()(a?.[g.yk.END]).diff(w()(a?.[g.yk.START]))).asMilliseconds()).format("HH:mm:ss")??0}]),[a]),v=(0,c.useMemo)((()=>[{text:t("txt_date"),value:w()(a?.[g.yk.START]).format("DD/MM/YYYY")??""},{text:t("txt_duration"),value:w().utc(w().duration(w()(a?.[g.yk.END]).diff(w()(a?.[g.yk.START]))).asMilliseconds()).format("HH:mm:ss")??0},{text:t("txt_ip"),value:a?.[g.yk.IP]??""},{text:t("txt_device"),value:a?.[g.yk.DEVICE]??""},{text:t("txt_browser"),value:a?.[g.yk.BROWSER_NAME]??""}]),[a]);return c.createElement("div",{className:"py-4 px-3 h-100 d-flex flex-column"},c.createElement("div",{className:"position-relative"},c.createElement("h2",{className:"text-blue-0 fw-bold mb-8px mb-3"},t("txt_visitor_flow")+" "+p)),c.createElement(y,{loading:r,data:b}),c.createElement("div",{className:"row gx-24 "},c.createElement("div",{className:"col-3"},c.createElement("div",{className:"bg-white p-24 shadow-sm rounded-3 h-100 "},v?.length?v.map(((e,t)=>c.createElement("div",{key:t,className:`d-flex justify-content-between ${v.length-1===t?"":"mb-3"} `},c.createElement("span",null,e.text),c.createElement("span",null,e.value)))):null)),c.createElement("div",{className:"col-9"},s?c.createElement(l.Q,{data:s?.toEventTable(e.integration)}):null)))})),S=(0,m.Pi)(class extends c.Component{constructor(e){super(e),(0,i.o)(this,"flowStore",null),(0,i.o)(this,"flowViewModel",null),(0,i.o)(this,"eventsStore",null);const{viewModel:t}=e;this.viewModel=t||null,this.biListViewModel=this.viewModel?this.viewModel.getBiListViewModel():null,this.flowStore=new x({}),this.eventsStore=new s.i({}),this.flowViewModel=new f(this.flowStore,this.eventsStore,this.biListViewModel)}render(){return c.createElement(v,{viewModel:this.flowViewModel},c.createElement(k,{...this.props}))}}),M=(0,o.NQ)(S)},90346:(e,t,a)=>{a.d(t,{$:()=>o,T:()=>i});var s=a(20513),n=a(67294),l=a(38994),r=a(40872);document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode("/*\n * @copyright   Copyright (C) 2022 AesirX. All rights reserved.\n * @license     GNU General Public License version 3, see LICENSE.\n */\n.icon-card {\n  width: 56px;\n  height: 56px;\n}\n.icon-card .icon {\n  width: 100%;\n  height: 100%;\n  background-color: var(--sidebar-menu-item-color);\n}\n\n.icon-grown {\n  width: 18px;\n  height: 18px;\n}"));function o(e,t){var a=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return t?"rgba("+a+", "+s+", "+n+", "+t+")":"rgb("+a+", "+s+", "+n+")"}var i=({title:e,icon:t,iconColor:a,value:i,isIncrease:c,percent:m,textPercent:d,options:g,defaultValue:p,loading:h})=>{const[u,b]=(0,n.useState)(p??null),[w,E]=(0,n.useState)(i);(0,n.useEffect)((()=>{E(i)}),[i]);return n.createElement("div",{className:"bg-white p-24 shadow-sm rounded-3 h-100"},n.createElement("div",{className:"d-flex justify-content-between align-items-center mb-16"},n.createElement("div",{className:"d-flex align-items-center position-relative"},t&&n.createElement("div",{className:"icon-card rounded-circle me-16 ",style:{background:o(a,.15)}},n.createElement("span",{className:"icon arrow d-inline-block align-text-bottom ms-auto",style:{WebkitMaskImage:`url(${t})`,WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center",backgroundColor:o(a)}})),n.createElement("h6",{className:"mb-0 fw-semibold text-blue-0"},e)),g&&n.createElement(l.nW,{value:u,options:g,className:"fs-sm",isBorder:!0,onChange:e=>{b(e),e?.actualValue&&E(e?.actualValue)},isSearchable:!1})),n.createElement("div",{className:"d-flex justify-content-between position-relative"},h===s.r.LOADING&&n.createElement(l.DC,{className:"d-flex justify-content-start align-items-center bg-white",size:"10px"}),n.createElement("h3",{className:"mb-0 fw-semibold fs-24 text-color"},w),n.createElement("div",{className:"d-flex flex-wrap align-item-center"},m&&n.createElement("div",{className:"d-flex w-100 mb-sm justify-content-end"},n.createElement("span",{className:"icon-grown arrow d-inline-block align-text-bottom ms-auto text-primary "+(c?"bg-green":"bg-red"),style:{WebkitMaskImage:`url(${r.OB.PUBLIC_URL}${c?"/assets/images/grown-up.svg":"/assets/images/grown-down.svg"})`,WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center"}}),n.createElement("span",{className:(c?"text-green":"text-danger")+" fw-semibold"},c?"+":"-",m)),n.createElement("div",{className:"w-100 text-gray fs-sm text-end"},d))))}},76963:(e,t,a)=>{a.d(t,{Q:()=>i});var s=a(83874),n=a(20513),l=a(40872),r=a(38994),o=a(67294),i=(0,a(91072).Zh)()((({data:{header:e=[],data:t=[]},pagination:a,handleFilterTable:i,statusTable:c,t:m,isPaginationAPI:d=!1})=>{const g=o.useMemo((()=>e.map(((t,a)=>({...t,className:`px-3 py-16 fs-sm fw-semibold bg-gray-700 ${a+1===e.length?"rounded-top-end-3":""} ${0===a?"rounded-top-start-3":""}`,width:100})))),[e]),p=o.useMemo((()=>t),[t]);return o.createElement("div",{className:"h-100 ChartWrapper position-relative"},c===n.r.LOADING?o.createElement(r.QI,{className:"d-flex justify-content-center align-items-center bg-white rounded-3 shadow-sm"}):t?o.createElement(s.k,{classNameTable:"mb-0",columns:g,data:p,canSort:!0,pagination:!0,paginationClass:"fs-14 px-4",isPaginationAPI:d,paginationResponse:a,selectPage:async e=>{await i({page:e})},selectPageSize:async e=>{await i({page:1,page_size:e})}}):o.createElement("div",{className:"position-relative ChartWrapper bg-white rounded-3 shadow-sm"},o.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},o.createElement(s.x,{icons:l.OB.PUBLIC_URL+"/assets/images/ic_project.svg",title:m("txt_no_data"),width:"w-50"}))))}))},83874:(e,t,a)=>{a.d(t,{k:()=>p,x:()=>g});var s=a(67294),n=a(91072),l=a(38994),r=a(70982),o=a(73727),i=a(59417),c=a(79521),m=a(40872);document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode("/*\n * @copyright   Copyright (C) 2022 AesirX. All rights reserved.\n * @license     GNU General Public License version 3, see LICENSE.\n */\n.icon-post {\n  background: #cbf8ef;\n}\n\n.icon-project {\n  background: #ffeadc;\n}\n\n.icon-campain {\n  background: #fadae3;\n}"));var d=class extends s.Component{constructor(e){super(e)}render(){const{icons:e,text:t,title:a,link:n,linlText:c,isBtn:m,width:d,className:g,iconColor:p,iconBg:h}=this.props;return s.createElement("div",{className:g||"text-center h-100 d-flex flex-column justify-content-center align-items-center"},s.createElement("p",{style:{width:"48px",height:"55px"},className:`my-2 d-inline-block position-relative rounded-circle ${h}`},s.createElement(l.Ee,{className:`position-absolute top-50 start-50 translate-middle ${p}`,src:e,alt:e})),a&&s.createElement("h5",{className:"mb-2"},a),t&&s.createElement("p",{className:`mb-2 fs-14 text-black-50 w-100 mx-auto ${d}`},t),m&&s.createElement(o.rU,{to:{pathname:n,state:{openModal:!0}},className:"btn btn-success d-inline-block w-fit"},s.createElement("i",{className:"text-white me-2"},s.createElement(r.G,{icon:i.r8p})),c))}},g=(0,n.Zh)()(d);document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode("/*\n * @copyright   Copyright (C) 2022 AesirX. All rights reserved.\n * @license     GNU General Public License version 3, see LICENSE.\n */\n.sort-icon {\n  height: 20px;\n}"));var p=(0,n.Zh)()((({columns:e,data:t,pagination:a,store:n,onSelect:o,dataList:d,classNameTable:p,canSort:h,sortAPI:u,limit:b,paginationClass:w,isPaginationAPI:E,paginationResponse:v,selectPage:x,selectPageSize:N,...f})=>{const{getTableProps:y,getTableBodyProps:k,headerGroups:S,prepareRow:M,rows:C,page:D,pageOptions:_,previousPage:T,canPreviousPage:A,canNextPage:R,pageCount:I,gotoPage:L,setPageSize:P,nextPage:O,state:{pageIndex:V,pageSize:Y}}=(0,c.useTable)({columns:e,data:t,onSelect:o,initialState:{pageSize:(E?v?.page_size:b)??5,pageIndex:0}},c.useSortBy,c.usePagination),B=async e=>{await x(e)},{t:G}=f;let F=E?[...Array(v?.total_pages)]:[...Array(_.length)];return s.createElement(s.Fragment,null,s.createElement("div",{className:"bg-white fs-14 shadow-sm text-color rounded-3 position-relative"},C.length?s.createElement("table",{...y(),className:`w-100 ${p}`},s.createElement("thead",null,S.map(((e,t)=>{let a="";return a=d?e.headers.filter((e=>!d.some((t=>e.id===t)))):e.headers,s.createElement("tr",{key:t,...e.getHeaderGroupProps()},a.map(((e,t)=>{let a=e.sortParams??e.id,l="";return e.rowSpan&&h&&!u&&(l=e.columns[0]),s.createElement("th",{key:t,...!u&&{...e.getHeaderProps(h&&!e.rowSpan?e.getSortByToggleProps():l&&l.getSortByToggleProps())},className:`${e.className} ${u&&"number"!==a&&"selection"!==a?"cursor-pointer":""}`,...u&&"number"!==a&&"selection"!==a&&{onClick:async()=>{n.sortBy.id===a&&n.sortBy.desc?n.sortBy={desc:!0}:n.sortBy.id!==a?n.sortBy={id:a,desc:!1}:n.sortBy={id:a,desc:!n.sortBy.desc},await n.getItems()}},rowSpan:`${e.rowSpan??1}`},e.render("Header"),h&&s.createElement("span",{className:"position-relative align-middle"},u?n?.sortBy?.id===a&&"number"!==a&&"selection"!==a?n?.sortBy?.desc?s.createElement(r.G,{className:"sort-icon sort-icon-down ms-sm",icon:i.u9C}):s.createElement(r.G,{className:"sort-icon sort-icon-up ms-sm mb-n8px",icon:i.foy}):s.createElement(s.Fragment,null):e.rowSpan?l.isSorted&&"number"!==a&&"selection"!==a?l.isSortedDesc?s.createElement(r.G,{className:"sort-icon sort-icon-down ms-sm",icon:i.u9C}):s.createElement(r.G,{className:"sort-icon sort-icon-up ms-sm mb-n8px",icon:i.foy}):"":e.isSorted&&"number"!==a&&"selection"!==a?e.isSortedDesc?s.createElement(r.G,{className:"sort-icon sort-icon-down ms-sm",icon:i.u9C}):s.createElement(r.G,{className:"sort-icon sort-icon-up ms-sm mb-n8px",icon:i.foy}):s.createElement(s.Fragment,null)))})))}))),s.createElement("tbody",{...k()},D.length>0&&D.map((e=>{M(e);let t="";return t=d?e.cells.filter((e=>!d.some((t=>e.column.id===t)))):e.cells,s.createElement("tr",{key:e.getRowProps().key,...e.getRowProps()},t.map(((e,t)=>s.createElement("td",{key:t,...e.getCellProps({style:{width:e.column.width}}),className:"py-2 wb-all"},e.render("Cell")))))})))):null,0===C.length?s.createElement("div",{className:""},s.createElement(g,{icons:m.OB.PUBLIC_URL+"/assets/images/ic_project.svg",title:G("txt_no_data"),width:"w-50"})):null),a&&_.length?s.createElement("div",{className:`d-flex align-items-center justify-content-between ${w}`},s.createElement("div",{className:"d-flex align-items-center"},s.createElement("span",{className:"text-gray-600 me-16"},"Showing"),s.createElement("div",{className:"bg-white"},s.createElement(l.nW,{isClearable:!1,isSearchable:!1,isBorder:!1,isShadow:!1,options:[{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:30,value:30},{label:40,value:40},{label:50,value:50}],getOptionLabel:e=>s.createElement("div",{className:"showing-option d-flex align-items-center"},s.createElement("span",null,e.label," items")),className:"shadow-none select-bg-white",onChange:e=>{E?(async e=>{await N(e)})(Number(e.value)):P(Number(e.value))},defaultValue:{label:E?v?.page_size:Y,value:E?v?.page_size:Y}}))),s.createElement("div",{className:"mt-3 pb-3 text-center pagination d-flex justify-content-end align-items-center"},s.createElement("button",{className:"border-1 border-gray-800 bg-white text-body btn p-0 w-40px h-40px rounded-0 rounded-top-start rounded-bottom-start",onClick:()=>E?B(v?.page-1):T(),disabled:E?1===v?.page:!A},"<")," ",s.createElement("button",{onClick:()=>E?B(1):L(0),className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+((E?1===v?.page:V+1===1)?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},1),(E?v?.page>3:V>3)&&s.createElement("button",{className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px bg-white text-body",style:{width:"38px",height:"38px"}},"..."),F.map(((e,t)=>{let a=E?v?.page===t+1:V+1===t+1;return(E?0!==t&&t!==v?.total_pages-1&&t<v?.page-1+3&&t>v?.page-1-3:0!==t&&t!==_.length-1&&t<V+3&&t>V-3)&&s.createElement("button",{onClick:()=>E?B(t+1):L(t),key:t,className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+(a?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},t+1)})),(E?v?.page<v?.total_pages-3:V<_.length-4)&&s.createElement("button",{className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px bg-white text-body",style:{width:"38px",height:"38px"}},"..."),(E?v?.total_pages>1:_.length>1)&&s.createElement("button",{onClick:()=>E?B(v?.total_pages):L(I-1),className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+((E?v?.page===v?.total_pages:V+1===_.length)?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},E?v?.total_pages:_.length),s.createElement("button",{className:"border-1 border-gray-800 bg-white text-body btn p-0 w-40px h-40px rounded-0 rounded-top-end rounded-bottom-end",onClick:()=>E?B(v?.page+1):O(),disabled:E?v?.page===v?.total_pages:!R},">"))):null)}))},17204:(e,t,a)=>{a.d(t,{I:()=>d,i:()=>m});var s=a(23541),n=a(68949),l=a(40872),r=a(67294),o=a(30381),i=a.n(o),c=a(73727),m=class{constructor(){(0,s.o)(this,"getVisitor",(async(e,t,a,s)=>{try{const r=new l.Q2,o=await r.getVisitor(e,t);o?(0,n.z)((()=>{a(o)})):s({message:"Something went wrong from Server response"})}catch(e){(0,n.z)((()=>{e.response?.data.message?s({message:e.response?.data?.message}):s({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,s.o)(this,"getAttribute",(async(e,t,a,s)=>{try{const r=new l.Q2,o=await r.getAttribute(e,t);o?(0,n.z)((()=>{a(o)})):s({message:"Something went wrong from Server response"})}catch(e){(0,n.z)((()=>{e.response?.data.message?s({message:e.response?.data?.message}):s({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,s.o)(this,"getEvents",(async(e,t,a,s)=>{try{const r=new l.Q2,o=await r.getEvents(e,t);o?(0,n.z)((()=>{a(o)})):s({message:"Something went wrong from Server response"})}catch(e){(0,n.z)((()=>{e.response?.data.message?s({message:e.response?.data?.message}):s({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}}))}},d=class{constructor(e,t){(0,s.o)(this,"data",[]),(0,s.o)(this,"globalViewModel",null),(0,s.o)(this,"toRaw",(()=>this.data)),(0,s.o)(this,"transformResponse",(()=>{let e={};return this.data?.length>0&&this.data?.forEach((t=>{const a=this.data.filter((e=>e[l.Gl.EVENT_NAME]===t[l.Gl.EVENT_NAME]));e={...e,[t[l.Gl.EVENT_NAME]]:a}})),e})),(0,s.o)(this,"transformEventsResponse",(()=>{let e={};return this.data?.length>0&&this.data?.forEach((t=>{const a=this.data.filter((e=>e[l.oZ.EVENT_NAME]===t[l.oZ.EVENT_NAME]));e={...e,[t[l.oZ.EVENT_NAME]]:a}})),e})),(0,s.o)(this,"getFilterName",(()=>{const e=this.transformResponse(),t=Object.keys(e).map((e=>({value:e,label:e})));return t?.unshift({value:"all",label:"All"}),t})),(0,s.o)(this,"getListLine",(()=>{const e=this.transformResponse();return Object.keys(e).map((e=>e))})),(0,s.o)(this,"toAreaChart",(()=>{const e=this.transformEventsResponse(),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=(0,l.F9)(this.globalViewModel.dateFilter.date_start,this.globalViewModel.dateFilter.date_end),s={all:a.map((t=>({name:t&&i()(t,"YYYY-MM-DD").format("MM-DD"),...Object.keys(e).map((a=>{const s=e[a].filter((e=>e[l.oZ.DATE]===t));return{[a]:s?.length?s[0][l.oZ.TOTAL_VISITOR]:0}})).reduce(((e,t)=>({...t,...e})),{})}))),...Object.keys(e).map((t=>({[t]:a.map((a=>{const s=e[t].filter((e=>e[l.oZ.DATE]===a));return{name:a&&i()(a,"YYYY-MM-DD").format("MM-DD"),[t]:s?.length?s[0][l.oZ.TOTAL_VISITOR]:0}}))}))).reduce(((e,t)=>({...t,...e})),{})};return[{all:t.map(((t,a)=>({name:t,...Object.keys(e).map((e=>{const t=this.data?.filter((e=>i()(e[l.oZ.DATE],"YYYY-MM-DD").month()===a))?.reduce(((e,t)=>e+t[l.oZ.TOTAL_VISITOR]),0);return{[e]:t??0}})).reduce(((e,t)=>({...t,...e})),{})}))),...Object.keys(e).map((e=>({[e]:t.map(((t,a)=>{const s=this.data?.filter((e=>i()(e[l.oZ.DATE],"YYYY-MM-DD").month()===a))?.reduce(((e,t)=>e+t[l.oZ.TOTAL_VISITOR]),0);return s?{name:t,[e]:s}:{name:t,[e]:0}}))}))).reduce(((e,t)=>({...t,...e})),{})},s]})),(0,s.o)(this,"toBarChart",(()=>{const e=this.transformEventsResponse();return Object.keys(e).map((t=>({name:t,number:e[t]?.reduce(((e,t)=>e+t[l.oZ.TOTAL_VISITOR]),0)})))})),(0,s.o)(this,"handleChangeLink",((e,t)=>{e.preventDefault(),t&&this.globalViewModel.setIntegrationLink(t)})),(0,s.o)(this,"toEventTable",(e=>{const t=["Name","Type","URL","Referer","Date"],a=[l.Gl.EVENT_NAME,l.Gl.EVENT_TYPE,l.Gl.URL,l.Gl.REFERER,l.Gl.START_DATE];if(this.data.length){const s=a.map(((a,s)=>({Header:t[s],accessor:a,Cell:({cell:t,column:a,row:s})=>{if(a.id===l.Gl.EVENT_NAME&&t?.value)return r.createElement(r.Fragment,null,e?r.createElement("a",{href:"#",onClick:e=>this.handleChangeLink(e,`flow/${s.original?.[l.Gl.FLOW_ID]}`),className:"px-3"},r.createElement("span",null,t?.value)):r.createElement(c.OL,{to:`/flow/${s.original?.[l.Gl.FLOW_ID]}`,className:"px-3"},t?.value));if(a.id!==l.Gl.REFERER&&a.id!==l.Gl.URL||!t?.value)return r.createElement("div",{className:"px-3"},t?.value??null);{const e=new URL(t?.value);return r.createElement("div",{className:"px-3"},""===e?"Unknown":e.pathname+e.search)}}}))),n=this.data.map((e=>({...e,...a.map((t=>t===l.Gl.START_DATE?{[t]:i()(e[t]).format("DD-MM-YYYY HH:mm:ss")}:{[t]:e[t]})).reduce(((e,t)=>({...t,...e})),{})})));return n?.length&&n?.sort(((e,t)=>i()(t.start,"DD-MM-YYYY HH:mm:ss")-i()(e.start,"DD-MM-YYYY HH:mm:ss"))),{header:s,data:n}}return{header:[],data:[]}})),e&&(this.data=e,this.globalViewModel=t)}}}}]);