"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[5995],{3569:(e,t)=>{var a="circle-info",n=["info-circle"],s="f05a",l="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";t.mw={prefix:"fas",iconName:a,icon:[512,512,n,s,l]},t.mE=t.mw},5995:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n,s=a(59847),l=a(31864),i=a(59283),o=(a(13899),a(51751)),r=a(53800),c=a(55688),d=a(96540),m=a(32389),p=a(44015),g=a(56347),u=a(418),h=a(44011),b=a(99194),w=a(67008),E=a(20982),x=a(3569),y=(0,m.CI)()((0,g.y)((e=>{const{data:t,isPagination:a=!0,simplePagination:n=!1,pagination:s,selectPage:r,selectPageSize:c,status:m,limit:p,isPaginationAPI:g=!!a,t:u,sortAPI:y,handleSort:_,sortBy:v}=e,N=d.useMemo((()=>t?.header?.map(((e,a)=>{let n="";switch(e?.accessor){case b.CEO.NUMBER_OF_VISITORS:n="txt_tooltip_outlink";break;case b.CEO.NUMBER_OF_PAGE_VIEWS:n="txt_tooltip_page_views";break;case b.CEO.NUMBER_OF_UNIQUE_PAGE_VIEWS:n="txt_tooltip_unique_page_views";break;case b.CEO.BOUNCE_RATE:n="txt_tooltip_bounce_rate";break;case b.CEO.NUMBER_OF_PAGES_PER_SESSION:n="txt_tooltip_page_session";break;case b.CEO.AVERAGE_SESSION_DURATION:n="txt_tooltip_avg_session_duration";break;default:n=""}return{...e,className:`px-15 py-16 fs-sm fw-semibold border-bottom border-gray-800 align-middle ${1!==a?"rounded-top-end-3 text-end":""} ${1===a?"rounded-top-start-3":""}`,width:e.width?e.width:0===a?"auto":170,allowSort:e?.allowSort||!1,subRows:e?.subRows??[],Header:d.createElement("span",{className:"align-middle text-gray-900 fw-medium"},u(e.Header),n&&d.createElement(d.Fragment,null,d.createElement(E.g,{"data-tooltip-id":"tooltipTable","data-tooltip-content":u(n),className:"mx-sm fs-12 mb-1","data-tooltip-place":""+(a===t?.header?.length-1?"top-end":"top"),icon:x.mE}),d.createElement(w.m_,{id:"tooltipTable"})))}}))),[t?.header]),C=d.useMemo((()=>t?.data),[t?.data]);return d.createElement(d.Fragment,null,m===o.s.LOADING?d.createElement(h.bg,{className:"d-flex justify-content-center align-items-center bg-white rounded-3 shadow-sm"}):t?d.createElement(l.x,{classNameTable:"mb-0",columns:N,data:C,canSort:!0,pagination:a,paginationClass:"fs-14 border-top mt-2",isPaginationAPI:g,paginationResponse:s,selectPage:r,selectPageSize:c,simplePagination:n,limit:p,sortAPI:y,sortAPIHandle:_,sortBy:v,listViewModel:e.listViewModel,hasSubRow:!0,status:m,idKey:"urls"}):d.createElement("div",{className:"position-relative ChartWrapper bg-white rounded-3 shadow-sm"},d.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},d.createElement(i.J,{icons:b._K2.PUBLIC_URL+"/assets/images/ic_project.svg",title:u("txt_no_data"),width:"w-50"}))))}))),_=(0,p.PA)(class extends d.Component{constructor(e){super(e);const{listViewModel:t}=e;this.listViewModel=t||null,this.state={loading:!1}}render(){const{statusTopTable:e}=this.listViewModel;return d.createElement("div",{className:"position-relative h-100"},d.createElement("div",{className:"bg-white rounded-3 shadow-sm h-100 position-relative ChartWrapper"},d.createElement(y,{data:this.listViewModel?.outlinkTableData?.list?.toOutlinkTableTop(this.props.integration),pagination:this.listViewModel?.outlinkTableData?.pagination,selectPage:async e=>{await this.listViewModel.handleFilterOutlink({page:e})},selectPageSize:async e=>{await this.listViewModel.handleFilterOutlink({page:1,page_size:e})},status:e,sortAPI:!0,handleSort:this.props.handleSort,sortBy:this.listViewModel?.sortBy,...this.props})))}}),v=(0,m.CI)()((0,g.y)(_)),N=(0,p.PA)((n=class extends d.Component{constructor(e){super(e),(0,c.Mu)(this,"componentDidMount",(()=>{this.outlinkListViewModel.initialize({"filter[domain]":this.context.biListViewModel.activeDomain},{},{...this.params?.pagination&&{page:this.params?.pagination}})})),(0,c.Mu)(this,"componentDidUpdate",(e=>{this.props.location===e.location&&this.props.activeDomain===e.activeDomain||this.outlinkListViewModel.initialize({"filter[domain]":this.context.biListViewModel.activeDomain},{},{...this.params?.pagination&&{page:this.params?.pagination}})})),(0,c.Mu)(this,"handleDateRangeChange",((e,t)=>{this.outlinkListViewModel.handleFilterDateRange(e??t,t??e)})),(0,c.Mu)(this,"handleSort",(async e=>{this.outlinkListViewModel.getOutlink({"filter[domain]":this.context.biListViewModel.activeDomain},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.outlinkListViewModel?.sortBy["sort_direction[]"]?"asc":"desc"})})),(0,c.Mu)(this,"handleSearch",(async e=>{this.outlinkListViewModel.getPages({"filter[domain]":this.context.biListViewModel.activeDomain},{},{},{"filter[url]":e})}));const{viewModel:t}=e;this.viewModel=t||null,this.outlinkListViewModel=this.viewModel?this.viewModel.getOutlinkListViewModel():null,this.params=u.A.parse(e.location.search)}render(){const{t:e}=this.props;return d.createElement("div",{className:"py-4 px-4"},d.createElement("div",{className:"d-flex align-items-center justify-content-between mb-24"},d.createElement("div",null,d.createElement("h2",{className:"fw-bold mb-3 mt-3"},e("txt_outlinks"))),d.createElement("div",{className:"position-relative"},d.createElement(i.K,{onChange:this.handleDateRangeChange}))),d.createElement(v,{listViewModel:this.outlinkListViewModel,handleSort:this.handleSort,handleSearch:this.handleSearch,...this.props}))}},(0,c.Mu)(n,"contextType",r.Dx),n)),C=(0,m.CI)()((0,g.y)((0,s.X)(N)))},13899:(e,t,a)=>{a.d(t,{I:()=>s});var n=a(96540);var s=function({url:e,width:t,height:a,color:s,className:l}){return n.createElement("span",{className:`icon d-inline-block align-text-bottom ms-auto ${l}`,style:{WebkitMaskImage:`url(${e})`,WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center",width:t??"24px",height:a??"24px",backgroundColor:s?`${s}`:"var(--body-color)"}})}},31864:(e,t,a)=>{a.d(t,{x:()=>u});var n=a(59283),s=a(13899),l=a(51751),i=a(96540),o=a(32885),r=a(32389),c=a(20982),d=a(66188),m=a(99194),p=a(44011);function g({row:e,rowProps:t,visibleColumns:a,data:n,loading:s}){return s?i.createElement("tr",null,i.createElement("td",null),i.createElement("td",{colSpan:a.length-1},"Loading...")):i.createElement(i.Fragment,null,n?.length&&i.createElement(i.Fragment,null,n.map(((a,n)=>i.createElement("tr",{...t,key:`${t.key}-expanded-${n}`,className:"row_sub_component"},e.cells.map(((t,s)=>i.createElement("td",{...t.getCellProps(),key:s,className:`py-2 wb-all align-middle sub-cell-${t.column.id} `,style:{backgroundColor:0===s?"#fff":"#F0F3FB"}},t.render("SubCell",{value:t.column.accessor(a,n),row:{...e,original:a}})))))))))}document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode("/*\n * @copyright   Copyright (C) 2022 AesirX. All rights reserved.\n * @license     GNU General Public License version 3, see LICENSE.\n */\n.sort-icon {\n  height: 20px;\n}"));var u=(0,r.CI)()((({columns:e,data:t,pagination:a,onSelect:r,dataList:u,classNameTable:h,canSort:b,sortAPI:w,sortAPIHandle:E,sortBy:x,limit:y,paginationClass:_,isPaginationAPI:v,paginationResponse:N,selectPage:C,selectPageSize:P,simplePagination:k=!1,status:S,hasSubRow:f,idKey:M,tdClass:I,...L})=>{const{getTableProps:R,getTableBodyProps:V,headerGroups:A,prepareRow:D,rows:F,visibleColumns:O,page:B,pageOptions:T,previousPage:U,canPreviousPage:z,canNextPage:$,pageCount:G,gotoPage:K,setPageSize:j,nextPage:H,state:{pageIndex:W,pageSize:J}}=(0,o.useTable)({columns:e,data:t,onSelect:r,initialState:{pageSize:(v?N?.page_size:y)??5,pageIndex:0}},o.useSortBy,o.useExpanded,o.usePagination),X=i.useCallback((({row:e,rowProps:t,visibleColumns:a,subRow:n,idKey:s})=>i.createElement(g,{row:e,rowProps:t,visibleColumns:a,loading:S===l.s.LOADING,data:n,idKey:s})),[S]),Y=async e=>{await C(e)},{t:Q}=L;let q=v?[...Array(N?.total_pages)]:[...Array(T.length)];return i.createElement(i.Fragment,null,i.createElement("div",{className:"bg-white fs-14 rounded-3 position-relative text-gray-900"},F.length?i.createElement("table",{...R(),className:`w-100 ${h}`},i.createElement("thead",null,A.map(((e,t)=>{let a="";return a=u?e.headers.filter((e=>!u.some((t=>e.id===t)))):e.headers,i.createElement("tr",{key:t,...e.getHeaderGroupProps()},a.map(((e,t)=>{let a=e.sortParams??e.id,n="";return e.rowSpan&&b&&!w&&(n=e.columns[0]),i.createElement("th",{key:t,...!w&&e?.allowSort&&{...e.getHeaderProps(b&&!e.rowSpan?e.getSortByToggleProps():n&&n.getSortByToggleProps())},className:`${e.className} ${w&&e?.allowSort&&"number"!==a&&"selection"!==a?"cursor-pointer":""}`,...w&&e?.allowSort&&"number"!==a&&"selection"!==a&&{onClick:async()=>{E(e)}},rowSpan:`${e.rowSpan??1}`},e.render("Header"),b&&e?.allowSort&&i.createElement("span",{className:"position-relative align-middle"},w?x&&x["sort[]"]===a&&"number"!==a&&"selection"!==a?"desc"===x["sort_direction[]"]?i.createElement(c.g,{className:"sort-icon sort-icon-down ms-sm mt-n3",icon:d.Ync}):i.createElement(c.g,{className:"sort-icon sort-icon-up ms-sm mb-nsm",icon:d.Dvs}):i.createElement(i.Fragment,null):e.rowSpan?n.isSorted&&"number"!==a&&"selection"!==a?n.isSortedDesc?i.createElement(c.g,{className:"sort-icon sort-icon-down ms-sm mt-n3",icon:d.Ync}):i.createElement(c.g,{className:"sort-icon sort-icon-up ms-sm mb-nsm",icon:d.Dvs}):"":e.isSorted&&"number"!==a&&"selection"!==a?e.isSortedDesc?i.createElement(c.g,{className:"sort-icon sort-icon-down ms-sm mt-n3",icon:d.Ync}):i.createElement(c.g,{className:"sort-icon sort-icon-up ms-sm mb-nsm",icon:d.Dvs}):i.createElement(i.Fragment,null)))})))}))),i.createElement("tbody",{...V()},B.length>0&&B.map((e=>{D(e);const t=e.getRowProps();let a="";a=u?e.cells.filter((e=>!u.some((t=>e.column.id===t)))):e.cells;const n=e.cells.find((e=>e?.column?.id===M))?.value??[];return i.createElement(i.Fragment,{key:e.getRowProps().key},i.createElement("tr",{...e.getRowProps()},a.map(((e,t)=>i.createElement("td",{key:t,...e.getCellProps({style:{width:e.column.width}}),className:`py-2 wb-all ${I||"align-middle"}`},e.render("Cell"))))),!1===f?null:e.isExpanded&&X({row:e,rowProps:t,visibleColumns:O,subRow:n,idKey:M}))})))):null,0===F.length?i.createElement("div",{className:"ChartWrapper d-flex align-items-center justify-content-center"},i.createElement(n.J,{icons:m._K2.PUBLIC_URL+"/assets/images/ic_project.svg",title:Q("txt_no_data"),width:"w-50"})):null),a&&T.length?i.createElement("div",{className:`d-flex align-items-center justify-content-between ${_}`},k?i.createElement("div",{className:"text-gray-900 fw-light"},1===N?.page?1:N?.page_size*(N?.page-1),"-",N?.total_elements<=N?.page_size?N?.total_elements:N?.page_size*N?.page," ","to ",N?.total_elements):i.createElement("div",{className:"d-flex align-items-center"},i.createElement("span",{className:"text-gray-600 me-16"},"Showing"),i.createElement("div",{className:"bg-white"},i.createElement(p.J0,{isClearable:!1,isSearchable:!1,isBorder:!1,isShadow:!1,menuPlacement:"top",options:[{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:30,value:30},{label:40,value:40},{label:50,value:50}],getOptionLabel:e=>i.createElement("div",{className:"showing-option d-flex align-items-center"},i.createElement("span",null,e.label," items")),className:"shadow-none select-bg-white",onChange:e=>{v?(async e=>{await P(e)})(Number(e.value)):j(Number(e.value))},defaultValue:{label:v?N?.page_size:J,value:v?N?.page_size:J}}))),i.createElement("div",{className:"mt-2 pb-2 text-center pagination d-flex justify-content-end align-items-center"},i.createElement("button",{className:(k?"border-0":"border-1 border-gray-800")+" bg-white text-body btn p-0 w-40px h-40px rounded-0 rounded-top-start rounded-bottom-start",onClick:()=>v?Y(N?.page-1):U(),disabled:v?1===N?.page:!z},i.createElement(s.I,{url:m._K2.PUBLIC_URL+"/assets/images/chevron_left.svg",color:v?1===N?.page?"#5F5E70":"#1ab394":z?"#1ab394":"#5F5E70"}))," ",!k&&i.createElement(i.Fragment,null,i.createElement("button",{onClick:()=>v?Y(1):K(0),className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+((v?1===N?.page:W+1===1)?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},1),(v?N?.page>3:W>3)&&i.createElement("button",{className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px bg-white text-body",style:{width:"38px",height:"38px"}},"..."),q.map(((e,t)=>{let a=v?N?.page===t+1:W+1===t+1;return(v?0!==t&&t!==N?.total_pages-1&&t<N?.page-1+3&&t>N?.page-1-3:0!==t&&t!==T.length-1&&t<W+3&&t>W-3)&&i.createElement("button",{onClick:()=>v?Y(t+1):K(t),key:t,className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+(a?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},t+1)})),(v?N?.page<N?.total_pages-3:W<T.length-4)&&i.createElement("button",{className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px bg-white text-body",style:{width:"38px",height:"38px"}},"..."),(v?N?.total_pages>1:T.length>1)&&i.createElement("button",{onClick:()=>v?Y(N?.total_pages):K(G-1),className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+((v?N?.page===N?.total_pages:W+1===T.length)?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},v?N?.total_pages:T.length)),i.createElement("button",{className:` ${k?"border-0":"border-1 border-gray-800"} bg-white text-body btn p-0 w-40px h-40px rounded-0 rounded-top-end rounded-bottom-end`,onClick:()=>v?Y(N?.page+1):H(),disabled:v?N?.page===N?.total_pages:!$},i.createElement(s.I,{url:m._K2.PUBLIC_URL+"/assets/images/chevron_right.svg",color:v?N?.page===N?.total_pages?"#5F5E70":"#1ab394":$?"#1ab394":"#5F5E70"})))):null)}))},59283:(e,t,a)=>{a.d(t,{J:()=>g,K:()=>u});var n=a(13899),s=a(53800),l=a(96540),i=a(32389),o=a(44011),r=a(20982),c=a(54625),d=a(66188),m=a(99194);document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode("/*\n * @copyright   Copyright (C) 2022 AesirX. All rights reserved.\n * @license     GNU General Public License version 3, see LICENSE.\n */\n.icon-post {\n  background: #cbf8ef;\n}\n\n.icon-project {\n  background: #ffeadc;\n}\n\n.icon-campain {\n  background: #fadae3;\n}"));var p=class extends l.Component{constructor(e){super(e)}render(){const{icons:e,text:t,title:a,link:n,linlText:s,isBtn:i,width:m,className:p,iconColor:g,iconBg:u}=this.props;return l.createElement("div",{className:p||"text-center h-100 d-flex flex-column justify-content-center align-items-center"},l.createElement("p",{style:{width:"48px",height:"55px"},className:`my-2 d-inline-block position-relative rounded-circle ${u}`},l.createElement(o._V,{className:`position-absolute top-50 start-50 translate-middle ${g}`,src:e,alt:e})),a&&l.createElement("h5",{className:"mb-2"},a),t&&l.createElement("p",{className:`mb-2 fs-14 text-black-50 w-100 mx-auto ${m}`},t),i&&l.createElement(c.N_,{to:{pathname:n,state:{openModal:!0}},className:"btn btn-success d-inline-block w-fit"},l.createElement("i",{className:"text-white me-2"},l.createElement(r.g,{icon:d.QLR})),s))}},g=(0,i.CI)()(p),u=e=>{const[t,a]=(0,l.useState)(!1),i=(0,l.useRef)(null),{onChange:r}=e,{biListViewModel:{dateFilter:{date_start:c,date_end:d},setDateFilter:p}}=(0,s.jd)(s.Dx);return l.createElement("div",{style:{minHeight:"48px"},ref:i,className:"d-flex align-items-center bg-white rounded-1 shadow-sm daterange-picker-wrapper"},l.createElement(o.n0,{isOpen:t,setIsOpen:a,datePickerRef:i,onChange:r,dateStart:c,dateEnd:d,setDateFilter:p}),l.createElement("div",{className:"calendar-icon position-absolute top-50 translate-middle-y"},l.createElement(n.I,{url:m._K2.PUBLIC_URL+"/assets/images/calendar.svg",color:"#00B96D"})))}}}]);