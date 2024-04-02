"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[5479],{3569:(e,t)=>{var s="circle-info",a=["info-circle"],i="f05a",l="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";t.mw={prefix:"fas",iconName:s,icon:[512,512,a,i,l]},t.mE=t.mw},5479:(e,t,s)=>{s.r(t),s.d(t,{default:()=>G});var a,i,l,r,n=s(90661),o=s(37932),c=(s(2211),s(14164)),d=s(47917),m=s(51751),p=s(53800),h=s(81252),g=s(96540),u=s(32389),w=s(56347),E=s(27813),b=s(99194),_=s(95093),v=s.n(_),M=s(14630),f=s(44354),N=s(44015),S=s(75056),x=class{constructor(){(0,h.M)(this,"getBrowsers",(async(e,t,s,a)=>{try{const i=new b.L20,l=await i.getBrowsers(e,t);l?(0,E.h5)((()=>{s(l)})):a({message:"Something went wrong from Server response"})}catch(e){(0,E.h5)((()=>{e.response?.data.message?a({message:e.response?.data?.message}):a({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,h.M)(this,"getDevices",(async(e,t,s,a)=>{try{const i=new b.L20,l=await i.getDevices(e,t);l?(0,E.h5)((()=>{s(l)})):a({message:"Something went wrong from Server response"})}catch(e){(0,E.h5)((()=>{e.response?.data.message?a({message:e.response?.data?.message}):a({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,h.M)(this,"getIsps",(async(e,t,s,a)=>{try{const i=new b.L20,l=await i.getIsps(e,t);l?(0,E.h5)((()=>{s(l)})):a({message:"Something went wrong from Server response"})}catch(e){(0,E.h5)((()=>{e.response?.data.message?a({message:e.response?.data?.message}):a({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}}))}},y=class{constructor(e,t){(0,h.M)(this,"data",[]),(0,h.M)(this,"globalViewModel",null),(0,h.M)(this,"toRaw",(()=>this.data)),(0,h.M)(this,"toAreaChart",(()=>{const e=(0,b.jgq)(this.globalViewModel?.dateFilter?.date_start,this.globalViewModel?.dateFilter?.date_end),t=e.map((e=>{const t=this.data.find((t=>v()(t.date).format("YYYY-MM-DD")===e));return{name:e&&v()(e,"YYYY-MM-DD").format("DD MMM"),visits:t?.[b.PF1.VISITS]??0,page_views:t?.[b.PF1.TOTAL_PAGE_VIEWS]??0,unique_visits:t?.unique_visits??0}})),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(((e,t)=>{const s=this.data.filter((e=>v()(e?.date).month()===t));let a=0,i=0,l=0;return s&&(a=s.reduce(((e,t)=>e+t[b.PF1.VISITS]),0),i=s.reduce(((e,t)=>e+t[b.PF1.TOTAL_PAGE_VIEWS]),0),l=s.reduce(((e,t)=>e+t.unique_visits),0)),{name:e,visits:a,page_views:i,unique_visits:l}})),a={};e.forEach((e=>{const t=v()(e).startOf("isoWeek"),s=v()(e).endOf("isoWeek"),i=`${t.format("DD MMM")} - ${s.format("DD MMM")}`;a[i]||(a[i]={visits:0,page_views:0,unique_visits:0});const l=this.data.filter((e=>v()(e?.date).isBetween(t,s,null,"[]")));if(l){const e=l.reduce(((e,t)=>e+t[b.PF1.VISITS]),0),t=l.reduce(((e,t)=>e+t[b.PF1.TOTAL_PAGE_VIEWS]),0),s=l.reduce(((e,t)=>e+t.unique_visits),0);a[i].visits+=e,a[i].page_views+=t,a[i].unique_visits+=s}}));return[{visitors:s},{visitors:t},{visitors:Object.keys(a).map((e=>({name:e,visits:a[e].visits,page_views:a[e].page_views,unique_visits:a[e].unique_visits})))}]})),(0,h.M)(this,"getFilterName",(()=>[{label:"Visitors",value:"visitors"}])),(0,h.M)(this,"toBrowsersTableTop",(()=>{const e=["txt_browser","txt_visitors","%"],t=Math.max(...this.data.map((e=>e[b.CEO.NUMBER_OF_VISITORS]))),s=[b.$yQ.BROWSER_NAME,b.CEO.NUMBER_OF_VISITORS,b.CEO.NUMBER_OF_VISITORS_PERCENT];if(this.data?.length){const a=s.map(((s,a)=>({Header:e[a],accessor:s,allowSort:!0,width:s===b.$yQ.BROWSER_NAME?250:s===b.CEO.NUMBER_OF_UNIQUE_PAGE_VIEWS?220:100,Cell:({cell:e,column:s,row:a})=>{let i="";switch(e?.value){case"Chrome":i="/assets/images/chrome.svg";break;case"Safari":i="/assets/images/safari.svg";break;case"Firefox":i="/assets/images/firefox.svg";break;case"Microsoft Edge":i="/assets/images/microsoft_edge.svg";break;case"Opera":i="/assets/images/opera.svg";break;case"Samsung Internet for Android":i="/assets/images/samsung_browser.svg";break;case"Googlebot":i="/assets/images/google_bot.svg";break;case"Yandex Browser":i="/assets/images/yandex_browser.svg"}return g.createElement(g.Fragment,null,s.id===b.$yQ.BROWSER_NAME?g.createElement("div",{className:"d-flex align-items-center py-sm px-20 position-relative"},g.createElement("div",{className:"position-absolute top-0 start-0 h-100 z-0",style:{backgroundColor:"#E7EFFF",width:`${(a.cells[1]?.value/t*100)?.toString()}%`}}),g.createElement("div",{className:"z-1"},i&&g.createElement(f.A,{className:"me-12px",style:{width:22,height:22},src:b._K2.PUBLIC_URL+i,alt:"icons"}),""===e?.value?"Unknown":e?.value)):s.id===b.CEO.NUMBER_OF_VISITORS_PERCENT?g.createElement("div",{className:"text-end"},b.HP2.numberWithCommas(e?.value)??null):g.createElement("div",{className:"text-end pe-2"},b.HP2.numberWithCommas(e?.value)??null))}}))),i=this.data?.map((e=>(e[b.CEO.NUMBER_OF_VISITORS_PERCENT]=e[b.CEO.NUMBER_OF_VISITORS_PERCENT]/10,{...e,...s.map((t=>({[t]:e[t]}))).reduce(((e,t)=>({...t,...e})),{})}))),l=i?.map((e=>{for(let t in e)s.includes(t)||delete e[t];return e}));return{header:a,data:l}}return{header:[],data:[]}})),(0,h.M)(this,"toDevicesTableTop",(()=>{const e=["txt_device","txt_visitors"],t=[b.JLh.DEVICE,b.CEO.NUMBER_OF_VISITORS];if(this.data?.length){const s=t.map(((t,s)=>({Header:e[s],accessor:t,allowSort:!0,width:t===b.JLh.DEVICE?250:t===b.CEO.NUMBER_OF_UNIQUE_PAGE_VIEWS?220:170,Cell:({cell:e,column:t})=>g.createElement(g.Fragment,null,t.id===b.JLh.DEVICE?g.createElement("div",{className:"text-capitalize"},e?.value):g.createElement("div",{className:" text-end"},b.HP2.numberWithCommas(e?.value)??null))}))),a=this.data?.map((e=>({...e,...t.map((t=>({[t]:e[t]}))).reduce(((e,t)=>({...t,...e})),{})}))),i=a?.map((e=>{for(let s in e)t.includes(s)||delete e[s];return e}));return{header:s,data:i}}return{header:[],data:[]}})),(0,h.M)(this,"toIspsTableTop",(()=>{const e=["ISP","Visitors","Bounce Rate (%)"],t=[b.zg6.ISP,b.CEO.NUMBER_OF_VISITORS,b.zg6.BOUNCE_RATE];if(this.data?.length){const s=t.map(((t,s)=>({Header:e[s],accessor:t,allowSort:!0,width:t===b.zg6.ISP?250:t===b.CEO.NUMBER_OF_UNIQUE_PAGE_VIEWS?220:170,Cell:({cell:e,column:t})=>g.createElement(g.Fragment,null,t.id===b.zg6.ISP?g.createElement("div",null,e?.value):g.createElement("div",{className:" text-end"},e?.value))}))),a=this.data?.map((e=>({...e,...t.map((t=>({[t]:e[t]}))).reduce(((e,t)=>({...t,...e})),{})}))),i=a?.map((e=>{for(let s in e)t.includes(s)||delete e[s];return e}));return{header:s,data:i}}return{header:[],data:[]}})),e&&(this.data=e??[],this.globalViewModel=t)}},P=class{constructor(e,t){(0,h.M)(this,"platformsStore",null),(0,h.M)(this,"status",m.s.READY),(0,h.M)(this,"statusTopPageTable",m.s.READY),(0,h.M)(this,"statusTopBrowser",m.s.READY),(0,h.M)(this,"statusTopSourceTable",m.s.READY),(0,h.M)(this,"pagesTableData",null),(0,h.M)(this,"globalStoreViewModel",null),(0,h.M)(this,"browsersData",null),(0,h.M)(this,"devicesData",null),(0,h.M)(this,"devicesTableData",null),(0,h.M)(this,"ispsData",null),(0,h.M)(this,"ispsTableData",null),(0,h.M)(this,"sortByDevices",{"sort[]":"","sort_direction[]":""}),(0,h.M)(this,"sortByBrowsers",{"sort[]":"","sort_direction[]":""}),(0,h.M)(this,"sortByIsps",{"sort[]":"","sort_direction[]":""}),(0,h.M)(this,"initialize",((e,t)=>{this.getBrowsers(e,t),this.getDevices(e,t),this.getIsps(e,t)})),(0,h.M)(this,"getPages",(async(e,t,s={"sort[]":"number_of_page_views","sort_direction[]":"desc"})=>{this.statusTopPageTable=m.s.LOADING,this.sortByPages=s,this.dataFilterPages={page_size:"8",...this.dataFilterPages,...e,...this.sortByPages};const a={...this.globalStoreViewModel.dateFilter,...t};await this.platformsStore.getPages(this.dataFilterPages,a,this.callbackOnPagesSuccessHandler,this.callbackOnErrorHandler)})),(0,h.M)(this,"callbackOnPagesSuccessHandler",(e=>{if(e){if("canceled"!==e?.message){this.status=m.s.READY,this.statusTopPageTable=m.s.READY;const t=new o.P(e.list,this.globalStoreViewModel);this.pagesTableData={list:t.toPagesTableTopDashboard(),pagination:e.pagination}}}else this.status=m.s.ERROR,this.statusTopPageTable=m.s.ERROR,this.data=[]})),(0,h.M)(this,"callbackOnSummaryDataSuccessHandler",(e=>{e?"canceled"!==e?.message&&(this.status=m.s.READY,this.summaryData=e):(this.status=m.s.ERROR,this.data=[])})),(0,h.M)(this,"getBrowsers",((e,t,s={"sort[]":"number_of_visitors","sort_direction[]":"desc"})=>{this.statusTopBrowser=m.s.LOADING,this.sortByBrowsers=s,this.dataFilterBrowsers={page_size:"8",...this.dataFilterBrowsers,...e,...this.sortByBrowsers};const a={...this.globalStoreViewModel.dateFilter,...t};this.platformsStore.getBrowsers(this.dataFilterBrowsers,a,this.callbackOnBrowsersSuccessHandler,this.callbackOnErrorHandler)})),(0,h.M)(this,"getDevices",((e,t,s={"sort[]":"number_of_visitors","sort_direction[]":"desc"})=>{this.statusTopBrowser=m.s.LOADING,this.sortByDevices=s,this.dataFilterDevices={page_size:"8",...this.dataFilterDevices,...e,...this.sortByDevices};const a={...this.globalStoreViewModel.dateFilter,...t};this.platformsStore.getDevices(this.dataFilterDevices,a,this.callbackOnDevicesSuccessHandler,this.callbackOnErrorHandler)})),(0,h.M)(this,"getIsps",((e,t,s={"sort[]":"number_of_visitors","sort_direction[]":"desc"})=>{this.statusTopBrowser=m.s.LOADING,this.sortByIsps=s,this.dataFilterIsps={page_size:"8",...this.dataFilterIsps,...e,...this.sortByIsps};const a={...this.globalStoreViewModel.dateFilter,...t};this.platformsStore.getIsps(this.dataFilterIsps,a,this.callbackOnIspsSuccessHandler,this.callbackOnErrorHandler)})),(0,h.M)(this,"callbackOnIspsSuccessHandler",(e=>{if(e){if("canceled"!==e?.message){this.ispsData=e?.list;const t=new y(e.list,this.globalStoreViewModel);this.ispsTableData={list:t.toIspsTableTop(),pagination:e.pagination},this.statusTopBrowser=m.s.READY}}else this.statusTopBrowser=m.s.ERROR,this.data=[]})),(0,h.M)(this,"callbackOnDevicesSuccessHandler",(e=>{if(e){if("canceled"!==e?.message){this.devicesData=e?.list;const t=new y(e.list,this.globalStoreViewModel);this.devicesTableData={list:t.toDevicesTableTop(),pagination:e.pagination},this.statusTopBrowser=m.s.READY}}else this.statusTopBrowser=m.s.ERROR,this.data=[]})),(0,h.M)(this,"handleFilterBrowsers",(async e=>{this.statusTopBrowser=m.s.LOADING,this.dataFilterBrowsers={...this.dataFilterBrowsers,...e};const t={...this.globalStoreViewModel.dateFilter};await this.platformsStore.getBrowsers(this.dataFilterBrowsers,t,this.callbackOnBrowsersSuccessHandler,this.callbackOnErrorHandler)})),(0,h.M)(this,"handleFilterIsps",(async e=>{this.statusTopBrowser=m.s.LOADING,this.dataFilterIsps={...this.dataFilterIsps,...e};const t={...this.globalStoreViewModel.dateFilter};await this.platformsStore.getIsps(this.dataFilterIsps,t,this.callbackOnIspsSuccessHandler,this.callbackOnErrorHandler)})),(0,h.M)(this,"callbackOnBrowsersSuccessHandler",(e=>{if(e){if("canceled"!==e?.message){const t=new y(e.list,this.globalStoreViewModel);this.browsersData={list:t.toBrowsersTableTop(),pagination:e.pagination},this.statusTopBrowser=m.s.READY}}else this.statusTopBrowser=m.s.ERROR,this.data=[]})),(0,h.M)(this,"callbackOnErrorHandler",(e=>{this.status=m.s.READY,(0,M.me)(e.message,"error")})),(0,h.M)(this,"handleFilterDateRange",((e,t)=>{this.status=m.s.LOADING;let s={date_start:v()(e).format("YYYY-MM-DD"),date_end:v()(t).endOf("day").format("YYYY-MM-DD")};this.initialize(this.dataFilter,s)})),(0,E.l_)(this),this.platformsStore=e,this.globalStoreViewModel=t}},I=class{constructor(e,t){(0,h.M)(this,"platformsListViewModel",null),(0,h.M)(this,"getPlatformsListViewModel",(()=>this.platformsListViewModel)),e&&(this.platformsListViewModel=new P(e,t))}},R=g.createContext(),O=({children:e,viewModel:t})=>g.createElement(R.Provider,{value:t},e),C=e=>t=>g.createElement(e,{...t,viewModel:g.useContext(R)}),B=(0,N.PA)((a=class extends g.Component{constructor(e){super(e),(0,h.M)(this,"handleSortBrowsers",(async e=>{this.platformsListViewModel.getBrowsers({"filter[domain]":this.context.biListViewModel.activeDomain},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.platformsListViewModel?.sortByBrowsers["sort_direction[]"]?"asc":"desc"})}));const{viewModel:t}=e;this.viewModel=t||null,this.state={loading:!1},this.platformsListViewModel=this.viewModel?this.viewModel.getPlatformsListViewModel():null}render(){const{t:e}=this.props,{statusTopBrowser:t}=this.platformsListViewModel;return g.createElement("div",{className:"position-relative ChartWrapper h-100"},t===m.s.LOADING?g.createElement(M.bg,{className:"d-flex justify-content-center align-items-center bg-white"}):g.createElement(g.Fragment,null,this.platformsListViewModel?.browsersData?.list?.data?.length?g.createElement(g.Fragment,null,g.createElement(S.A.Container,{id:"countries-tab",defaultActiveKey:"browser"},g.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2"},g.createElement("h4",{className:"me-24 mb-0 fw-semibold fs-5"},e("txt_browser"))),g.createElement(S.A.Content,{className:"h-100"},g.createElement(S.A.Pane,{eventKey:"browser"},g.createElement("div",{className:"browser-table"},g.createElement(n.Y,{data:this.platformsListViewModel?.browsersData?.list,pagination:this.platformsListViewModel?.browsersData?.pagination,isPagination:!0,simplePagination:!0,selectPage:async e=>{await this.platformsListViewModel.handleFilterBrowsers({page:e})},selectPageSize:async e=>{await this.platformsListViewModel.handleFilterBrowsers({page:1,page_size:e})},status:this.platformsListViewModel?.statusTopBrowser,sortAPI:!0,handleSort:this.handleSortBrowsers,sortBy:this.platformsListViewModel?.sortByBrowsers,...this.props})))))):g.createElement(g.Fragment,null,g.createElement("div",{className:"d-flex align-items-center justify-content-between mb-2"},g.createElement("h4",{className:"me-24 mb-0 fw-semibold"},e("txt_browser"))),g.createElement(c.J,{icons:b._K2.PUBLIC_URL+"/assets/images/ic_project.svg",title:e("txt_no_data"),width:"w-50"}))))}},(0,h.M)(a,"contextType",p.Dx),a)),A=(0,u.CI)()((0,w.y)(C(B))),D=(0,N.PA)((i=class extends g.Component{constructor(e){super(e),(0,h.M)(this,"handleSortIsps",(async e=>{this.platformsListViewModel.getIsps({"filter[domain]":this.context.biListViewModel.activeDomain},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.platformsListViewModel?.sortByBrowsers["sort_direction[]"]?"asc":"desc"})}));const{viewModel:t}=e;this.viewModel=t||null,this.state={loading:!1},this.platformsListViewModel=this.viewModel?this.viewModel.getPlatformsListViewModel():null}render(){const{t:e}=this.props,{statusTopBrowser:t,ispsTableData:s}=this.platformsListViewModel;return g.createElement("div",{className:"position-relative ChartWrapper h-100"},t===m.s.LOADING?g.createElement(M.bg,{className:"d-flex justify-content-center align-items-center bg-white"}):g.createElement(g.Fragment,null,s?g.createElement(g.Fragment,null,g.createElement(S.A.Container,{id:"countries-tab",defaultActiveKey:"browser"},g.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2"},g.createElement("h4",{className:"me-24 mb-0 fw-semibold fs-5"},"Isps")),g.createElement(S.A.Content,{className:"h-100"},g.createElement(S.A.Pane,{eventKey:"browser"},g.createElement("div",{className:"browser-table"},g.createElement(n.Y,{data:s.list,pagination:s.pagination,isPagination:!0,simplePagination:!0,selectPage:async e=>{await this.platformsListViewModel.handleFilterIsps({page:e})},selectPageSize:async e=>{await this.platformsListViewModel.handleFilterIsps({page:1,page_size:e})},status:this.platformsListViewModel?.statusTopBrowser,sortAPI:!0,handleSort:this.handleSortIsps,sortBy:this.platformsListViewModel?.sortByIsps,...this.props})))))):g.createElement(g.Fragment,null,g.createElement("div",{className:"d-flex align-items-center justify-content-between mb-2"},g.createElement("h4",{className:"me-24 mb-0 fw-semibold"},"Isps")),g.createElement(c.J,{icons:b._K2.PUBLIC_URL+"/assets/images/ic_project.svg",title:e("txt_no_data"),width:"w-50"}))))}},(0,h.M)(i,"contextType",p.Dx),i)),L=(0,u.CI)()((0,w.y)(C(D))),V=(0,N.PA)((l=class extends g.Component{constructor(e){super(e),(0,h.M)(this,"handleSortDevices",(async e=>{this.platformsListViewModel.getDevices({"filter[domain]":this.context.biListViewModel.activeDomain},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.platformsListViewModel?.sortByDevices["sort_direction[]"]?"asc":"desc"})}));const{viewModel:t}=e;this.viewModel=t||null,this.state={loading:!1},this.platformsListViewModel=this.viewModel?this.viewModel.getPlatformsListViewModel():null}render(){const{t:e}=this.props,{statusTopBrowser:t,devicesTableData:s}=this.platformsListViewModel;return g.createElement("div",{className:"position-relative ChartWrapper h-100"},t===m.s.LOADING?g.createElement(M.bg,{className:"d-flex justify-content-center align-items-center bg-white"}):g.createElement(g.Fragment,null,s?.list?.data?.length?g.createElement(g.Fragment,null,g.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2"},g.createElement("h4",{className:"me-24 mb-0 fw-semibold fs-5"},e("txt_devices"))),g.createElement("div",{className:"h-100"},g.createElement("div",{className:"browser-table"},g.createElement(n.Y,{data:s?.list,pagination:s?.pagination,isPagination:!0,simplePagination:!0,selectPage:async e=>{await this.platformsListViewModel.handleFilterPages({page:e})},selectPageSize:async e=>{await this.platformsListViewModel.handleFilterPages({page:1,page_size:e})},status:t,sortAPI:!0,handleSort:this.handleSortDevices,sortBy:this.platformsListViewModel?.sortByDevices,...this.props})))):g.createElement(g.Fragment,null,g.createElement("div",{className:"d-flex align-items-center justify-content-between mb-2"},g.createElement("h4",{className:"me-24 mb-0 fw-semibold"},e("txt_devices"))),g.createElement(c.J,{icons:b._K2.PUBLIC_URL+"/assets/images/ic_project.svg",title:e("txt_no_data"),width:"w-50"}))))}},(0,h.M)(l,"contextType",p.Dx),l)),T=(0,u.CI)()((0,w.y)(C(V))),F=(0,N.PA)((r=class extends g.Component{constructor(e){super(e),(0,h.M)(this,"componentDidMount",(()=>{this.viewModel.platformsListViewModel.initialize({"filter[domain]":this.context.biListViewModel.activeDomain})})),(0,h.M)(this,"componentDidUpdate",(()=>{this.viewModel.platformsListViewModel.initialize({"filter[domain]":this.context.biListViewModel.activeDomain})})),(0,h.M)(this,"handleDateRangeChange",((e,t)=>{this.viewModel.platformsListViewModel.handleFilterDateRange(e??t,t??e)}));const{viewModel:t}=e;this.viewModel=t||null,this.viewModel.platformsListViewModel=this.viewModel?this.viewModel.getPlatformsListViewModel():null}render(){const{t:e}=this.props;return g.createElement("div",{className:"py-4 px-4 h-100 d-flex flex-column"},g.createElement("div",{className:"d-flex align-items-center justify-content-between mb-24 flex-wrap"},g.createElement("div",{className:"position-relative"},g.createElement("h2",{className:"fw-bold mb-8px"},e("txt_menu_platforms"))),g.createElement("div",{className:"position-relative"},g.createElement(d.K,{onChange:this.handleDateRangeChange}))),g.createElement("div",{className:"row justify-content-center align-items-center g-2 mb-2"},g.createElement("div",{className:"col"},g.createElement("div",{className:"bg-white p-3 rounded"},g.createElement(A,null))),g.createElement("div",{className:"col"},g.createElement("div",{className:"bg-white p-3 rounded"},g.createElement(L,null)))),g.createElement("div",{className:"row justify-content-center align-items-center g-2"},g.createElement("div",{className:"col"},g.createElement("div",{className:"bg-white p-3 rounded"},g.createElement(T,null))),g.createElement("div",{className:"col"})))}},(0,h.M)(r,"contextType",p.Dx),r)),k=(0,u.CI)()((0,w.y)(C(F))),U=(0,N.PA)(class extends g.Component{constructor(e){super(e),(0,h.M)(this,"PlatformsStore",null),(0,h.M)(this,"PlatformsViewModel",null);const{viewModel:t}=e;this.viewModel=t||null,this.biListViewModel=this.viewModel?this.viewModel.getBiListViewModel():null,this.PlatformsStore=new x,this.PlatformsViewModel=new I(this.PlatformsStore,this.biListViewModel)}render(){return g.createElement(O,{viewModel:this.PlatformsViewModel},g.createElement(H,{ref:e=>this.componentRef=e}))}}),H=(0,N.PA)(class extends g.Component{constructor(e){super(e)}render(){return g.createElement("div",{className:"aesirxui"},g.createElement(k,{...this.props}))}}),G=(0,u.CI)()((0,w.y)((0,p.cm)(U)))},14164:(e,t,s)=>{s.d(t,{J:()=>d});var a=s(96540),i=s(32389),l=s(14630),r=s(20982),n=s(54625),o=s(66188);document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode("/*\n * @copyright   Copyright (C) 2022 AesirX. All rights reserved.\n * @license     GNU General Public License version 3, see LICENSE.\n */\n.icon-post {\n  background: #cbf8ef;\n}\n\n.icon-project {\n  background: #ffeadc;\n}\n\n.icon-campain {\n  background: #fadae3;\n}"));var c=class extends a.Component{constructor(e){super(e)}render(){const{icons:e,text:t,title:s,link:i,linlText:c,isBtn:d,width:m,className:p,iconColor:h,iconBg:g}=this.props;return a.createElement("div",{className:p||"text-center h-100 d-flex flex-column justify-content-center align-items-center"},a.createElement("p",{style:{width:"48px",height:"55px"},className:`my-2 d-inline-block position-relative rounded-circle ${g}`},a.createElement(l._V,{className:`position-absolute top-50 start-50 translate-middle ${h}`,src:e,alt:e})),s&&a.createElement("h5",{className:"mb-2"},s),t&&a.createElement("p",{className:`mb-2 fs-14 text-black-50 w-100 mx-auto ${m}`},t),d&&a.createElement(n.N_,{to:{pathname:i,state:{openModal:!0}},className:"btn btn-success d-inline-block w-fit"},a.createElement("i",{className:"text-white me-2"},a.createElement(r.g,{icon:o.QLR})),c))}},d=(0,i.CI)()(c)},2211:(e,t,s)=>{s.d(t,{x:()=>g});var a=s(14164),i=s(47917),l=s(51751),r=s(96540),n=s(32885),o=s(32389),c=s(20982),d=s(66188),m=s(99194),p=s(14630);function h({row:e,rowProps:t,visibleColumns:s,data:a,loading:i}){return i?r.createElement("tr",null,r.createElement("td",null),r.createElement("td",{colSpan:s.length-1},"Loading...")):r.createElement(r.Fragment,null,a?.length&&r.createElement(r.Fragment,null,a.map(((s,a)=>r.createElement("tr",{...t,key:`${t.key}-expanded-${a}`,className:"border-bottom row_sub_component"},e.cells.map(((t,i)=>r.createElement("td",{...t.getCellProps(),key:i,className:`py-2 wb-all align-middle sub-cell-${t.column.id} `},t.render("SubCell",{value:t.column.accessor(s,a),row:{...e,original:s}})))))))))}document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode("/*\n * @copyright   Copyright (C) 2022 AesirX. All rights reserved.\n * @license     GNU General Public License version 3, see LICENSE.\n */\n.sort-icon {\n  height: 20px;\n}"));var g=(0,o.CI)()((({columns:e,data:t,pagination:s,onSelect:o,dataList:g,classNameTable:u,canSort:w,sortAPI:E,sortAPIHandle:b,sortBy:_,limit:v,paginationClass:M,isPaginationAPI:f,paginationResponse:N,selectPage:S,selectPageSize:x,simplePagination:y=!1,status:P,hasSubRow:I,idKey:R,...O})=>{const{getTableProps:C,getTableBodyProps:B,headerGroups:A,prepareRow:D,rows:L,visibleColumns:V,page:T,pageOptions:F,previousPage:k,canPreviousPage:U,canNextPage:H,pageCount:G,gotoPage:z,setPageSize:Y,nextPage:$,state:{pageIndex:W,pageSize:j}}=(0,n.useTable)({columns:e,data:t,onSelect:o,initialState:{pageSize:(f?N?.page_size:v)??5,pageIndex:0}},n.useSortBy,n.useExpanded,n.usePagination),q=r.useCallback((({row:e,rowProps:t,visibleColumns:s,subRow:a,idKey:i})=>r.createElement(h,{row:e,rowProps:t,visibleColumns:s,loading:P===l.s.LOADING,data:a,idKey:i})),[P]),K=async e=>{await S(e)},{t:J}=O;let Q=f?[...Array(N?.total_pages)]:[...Array(F.length)];return r.createElement(r.Fragment,null,r.createElement("div",{className:"bg-white fs-14 rounded-3 position-relative text-gray-900"},L.length?r.createElement("table",{...C(),className:`w-100 ${u}`},r.createElement("thead",null,A.map(((e,t)=>{let s="";return s=g?e.headers.filter((e=>!g.some((t=>e.id===t)))):e.headers,r.createElement("tr",{key:t,...e.getHeaderGroupProps()},s.map(((e,t)=>{let s=e.sortParams??e.id,a="";return e.rowSpan&&w&&!E&&(a=e.columns[0]),r.createElement("th",{key:t,...!E&&e?.allowSort&&{...e.getHeaderProps(w&&!e.rowSpan?e.getSortByToggleProps():a&&a.getSortByToggleProps())},className:`${e.className} ${E&&e?.allowSort&&"number"!==s&&"selection"!==s?"cursor-pointer":""}`,...E&&e?.allowSort&&"number"!==s&&"selection"!==s&&{onClick:async()=>{b(e)}},rowSpan:`${e.rowSpan??1}`},e.render("Header"),w&&e?.allowSort&&r.createElement("span",{className:"position-relative align-middle"},E?_&&_["sort[]"]===s&&"number"!==s&&"selection"!==s?"desc"===_["sort_direction[]"]?r.createElement(c.g,{className:"sort-icon sort-icon-down ms-sm mt-n3",icon:d.Ync}):r.createElement(c.g,{className:"sort-icon sort-icon-up ms-sm mb-nsm",icon:d.Dvs}):r.createElement(r.Fragment,null):e.rowSpan?a.isSorted&&"number"!==s&&"selection"!==s?a.isSortedDesc?r.createElement(c.g,{className:"sort-icon sort-icon-down ms-sm mt-n3",icon:d.Ync}):r.createElement(c.g,{className:"sort-icon sort-icon-up ms-sm mb-nsm",icon:d.Dvs}):"":e.isSorted&&"number"!==s&&"selection"!==s?e.isSortedDesc?r.createElement(c.g,{className:"sort-icon sort-icon-down ms-sm mt-n3",icon:d.Ync}):r.createElement(c.g,{className:"sort-icon sort-icon-up ms-sm mb-nsm",icon:d.Dvs}):r.createElement(r.Fragment,null)))})))}))),r.createElement("tbody",{...B()},T.length>0&&T.map((e=>{D(e);const t=e.getRowProps();let s="";s=g?e.cells.filter((e=>!g.some((t=>e.column.id===t)))):e.cells;const a=e.cells.find((e=>e?.column?.id===R))?.value??[];return r.createElement(r.Fragment,{key:e.getRowProps().key},r.createElement("tr",{...e.getRowProps()},s.map(((e,t)=>r.createElement("td",{key:t,...e.getCellProps({style:{width:e.column.width}}),className:"py-2 wb-all align-middle"},e.render("Cell"))))),!1===I?null:e.isExpanded&&q({row:e,rowProps:t,visibleColumns:V,subRow:a,idKey:R}))})))):null,0===L.length?r.createElement("div",{className:""},r.createElement(a.J,{icons:m._K2.PUBLIC_URL+"/assets/images/ic_project.svg",title:J("txt_no_data"),width:"w-50"})):null),s&&F.length?r.createElement("div",{className:`d-flex align-items-center justify-content-between ${M}`},y?r.createElement("div",{className:"text-gray-900 fw-light"},1===N?.page?1:N?.page_size*(N?.page-1),"-",N?.total_elements<=N?.page_size?N?.total_elements:N?.page_size*N?.page," ","to ",N?.total_elements):r.createElement("div",{className:"d-flex align-items-center"},r.createElement("span",{className:"text-gray-600 me-16"},"Showing"),r.createElement("div",{className:"bg-white"},r.createElement(p.J0,{isClearable:!1,isSearchable:!1,isBorder:!1,isShadow:!1,menuPlacement:"top",options:[{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:30,value:30},{label:40,value:40},{label:50,value:50}],getOptionLabel:e=>r.createElement("div",{className:"showing-option d-flex align-items-center"},r.createElement("span",null,e.label," items")),className:"shadow-none select-bg-white",onChange:e=>{f?(async e=>{await x(e)})(Number(e.value)):Y(Number(e.value))},defaultValue:{label:f?N?.page_size:j,value:f?N?.page_size:j}}))),r.createElement("div",{className:"mt-2 pb-2 text-center pagination d-flex justify-content-end align-items-center"},r.createElement("button",{className:(y?"border-0":"border-1 border-gray-800")+" bg-white text-body btn p-0 w-40px h-40px rounded-0 rounded-top-start rounded-bottom-start",onClick:()=>f?K(N?.page-1):k(),disabled:f?1===N?.page:!U},r.createElement(i.I,{url:m._K2.PUBLIC_URL+"/assets/images/chevron_left.svg",color:f?1===N?.page?"#5F5E70":"#1ab394":U?"#1ab394":"#5F5E70"}))," ",!y&&r.createElement(r.Fragment,null,r.createElement("button",{onClick:()=>f?K(1):z(0),className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+((f?1===N?.page:W+1===1)?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},1),(f?N?.page>3:W>3)&&r.createElement("button",{className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px bg-white text-body",style:{width:"38px",height:"38px"}},"..."),Q.map(((e,t)=>{let s=f?N?.page===t+1:W+1===t+1;return(f?0!==t&&t!==N?.total_pages-1&&t<N?.page-1+3&&t>N?.page-1-3:0!==t&&t!==F.length-1&&t<W+3&&t>W-3)&&r.createElement("button",{onClick:()=>f?K(t+1):z(t),key:t,className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+(s?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},t+1)})),(f?N?.page<N?.total_pages-3:W<F.length-4)&&r.createElement("button",{className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px bg-white text-body",style:{width:"38px",height:"38px"}},"..."),(f?N?.total_pages>1:F.length>1)&&r.createElement("button",{onClick:()=>f?K(N?.total_pages):z(G-1),className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+((f?N?.page===N?.total_pages:W+1===F.length)?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},f?N?.total_pages:F.length)),r.createElement("button",{className:` ${y?"border-0":"border-1 border-gray-800"} bg-white text-body btn p-0 w-40px h-40px rounded-0 rounded-top-end rounded-bottom-end`,onClick:()=>f?K(N?.page+1):$(),disabled:f?N?.page===N?.total_pages:!H},r.createElement(i.I,{url:m._K2.PUBLIC_URL+"/assets/images/chevron_right.svg",color:f?N?.page===N?.total_pages?"#5F5E70":"#1ab394":H?"#1ab394":"#5F5E70"})))):null)}))},47917:(e,t,s)=>{s.d(t,{I:()=>n,K:()=>o});var a=s(53800),i=s(96540),l=s(99194),r=s(14630);var n=function({url:e,width:t,height:s,color:a,className:l}){return i.createElement("span",{className:`icon d-inline-block align-text-bottom ms-auto ${l}`,style:{WebkitMaskImage:`url(${e})`,WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center",width:t??"24px",height:s??"24px",backgroundColor:a?`${a}`:"var(--body-color)"}})},o=e=>{const[t,s]=(0,i.useState)(!1),o=(0,i.useRef)(null),{onChange:c}=e,{biListViewModel:{dateFilter:{date_start:d,date_end:m},setDateFilter:p}}=(0,a.jd)(a.Dx);return i.createElement("div",{style:{minHeight:"48px"},ref:o,className:"d-flex align-items-center bg-white rounded-1 shadow-sm daterange-picker-wrapper"},i.createElement(r.n0,{isOpen:t,setIsOpen:s,datePickerRef:o,onChange:c,dateStart:d,dateEnd:m,setDateFilter:p}),i.createElement("div",{className:"calendar-icon position-absolute top-50 translate-middle-y"},i.createElement(n,{url:l._K2.PUBLIC_URL+"/assets/images/calendar.svg",color:"#00B96D"})))}},37932:(e,t,s)=>{s.d(t,{P:()=>c});var a=s(81252),i=s(96540),l=s(99194),r=s(95093),n=s.n(r),o=s(54625),c=class{constructor(e,t){(0,a.M)(this,"data",[]),(0,a.M)(this,"globalViewModel",null),(0,a.M)(this,"toRaw",(()=>this.data)),(0,a.M)(this,"toPagesTableTopDashboard",(()=>{const e=["txt_page","txt_page_views","txt_time_on_page"],t=[l.q_A.URL,l.CEO.NUMBER_OF_PAGE_VIEWS,l.CEO.AVERAGE_SESSION_DURATION],s=Math.max(...this.data.map((e=>e[l.CEO.NUMBER_OF_PAGE_VIEWS])));if(this.data?.length){const a=t.map(((t,a)=>({Header:e[a],accessor:t,allowSort:!0,Cell:({cell:e,column:t,row:a})=>{const r=t.id===l.q_A.URL&&new URL(e?.value);return t.id===l.q_A.URL?i.createElement("a",{href:`${e?.value}`,target:"_blank",rel:"noreferrer",className:"d-block position-relative px-20 py-sm table-link text-gray-900"},i.createElement("div",{className:"position-absolute top-0 start-0 h-100 z-0 table-link-bg",style:{width:`${(a.cells[1]?.value/s*100)?.toString()}%`}}),i.createElement("div",{className:"position-relative z-1 text-ellipsis line-clamp-1 pe-20"},i.createElement("div",{className:"position-relative table-link-text"},""===r?"Unknown":r.pathname+r.search))):t.id===l.CEO.AVERAGE_SESSION_DURATION?i.createElement("div",{className:"text-end"},e?.value?n().utc(1e3*e?.value).format("HH:mm:ss"):"00:00:00"):i.createElement("div",{className:"px-15 text-end"},e?.value??null)}}))),r=this.data?.map((e=>({...e,...t.map((t=>({[t]:e[t]}))).reduce(((e,t)=>({...t,...e})),{})}))),o=r?.map((e=>{for(let s in e)t.includes(s)||delete e[s];return e}));return{header:a,data:o}}return{header:[],data:[]}})),(0,a.M)(this,"toPagesTableTop",(e=>{const t=["txt_page","txt_visitors","txt_unique_page_views","txt_bounce_rate","txt_page_session","txt_time_on_page"],s=[l.q_A.URL,l.CEO.NUMBER_OF_VISITORS,l.CEO.NUMBER_OF_UNIQUE_PAGE_VIEWS,l.CEO.BOUNCE_RATE,l.CEO.NUMBER_OF_PAGES_PER_SESSION,l.CEO.AVERAGE_SESSION_DURATION];if(this.data?.length){const a=s.map(((s,a)=>({Header:t[a],accessor:s,allowSort:!0,width:s===l.q_A.URL?300:s===l.CEO.NUMBER_OF_UNIQUE_PAGE_VIEWS?220:170,tooltip:s===l.CEO.NUMBER_OF_UNIQUE_PAGE_VIEWS?"txt_bounce_rate":"",Cell:({cell:t,column:s})=>{const a=s.id===l.q_A.URL&&new URL(t?.value);return s.id===l.q_A.URL?i.createElement(i.Fragment,null,e?i.createElement("a",{href:"#",onClick:e=>this.handleChangeLink(e,`behavior/detail?url=${t?.value}}`),className:"px-15 d-block text-secondary-50"},i.createElement("span",null,""===a?"Unknown":a.pathname+a.search)):i.createElement(o.k2,{to:`/behavior/detail?url=${t?.value}`,className:"px-15 d-block text-secondary-50"},""===a?"Unknown":a.pathname+a.search)):s.id===l.CEO.BOUNCE_RATE?i.createElement("div",{className:"px-3 text-end"},t?.value+"%"):s.id===l.CEO.AVERAGE_SESSION_DURATION?i.createElement("div",{className:"px-15 text-end"},t?.value?n().utc(1e3*t?.value).format("HH:mm:ss"):"00:00:00"):i.createElement("div",{className:"px-15 text-end"},t?.value??null)}}))),r=this.data?.map((e=>({...e,...s.map((t=>({[t]:e[t]}))).reduce(((e,t)=>({...t,...e})),{})}))),c=r?.map((e=>{for(let t in e)s.includes(t)||delete e[t];return e}));return{header:a,data:c}}return{header:[],data:[]}})),(0,a.M)(this,"transformResponse",(()=>{let e={};return this.data?.length>0&&this.data?.forEach((t=>{const s=this.data.filter((e=>e[l.q_A.URL]===t[l.q_A.URL]));e={...e,[t[l.q_A.URL]]:s}})),e})),(0,a.M)(this,"toBarChart",(()=>{const e=this.transformResponse();return Object.keys(e).map((t=>{const s=t&&new URL(t);return{name:""===s?"Unknown":s.pathname+s.search,number:e[t]?.reduce(((e,t)=>e+t[l.CEO.NUMBER_OF_VISITORS]),0)}}))})),e&&(this.data=e??[],this.globalViewModel=t)}}},90661:(e,t,s)=>{s.d(t,{Y:()=>g});var a=s(2211),i=s(14164),l=s(51751),r=s(96540),n=s(32389),o=s(56347),c=s(14630),d=s(99194),m=s(67008),p=s(20982),h=s(3569),g=(0,n.CI)()((0,o.y)((e=>{const{data:t,isPagination:s=!0,simplePagination:n=!1,pagination:o,selectPage:g,selectPageSize:u,status:w,limit:E,isPaginationAPI:b=!!s,t:_,sortAPI:v,handleSort:M,sortBy:f}=e,N=r.useMemo((()=>t?.header?.map(((e,t)=>{let s="";switch(e?.accessor){case d.CEO.NUMBER_OF_VISITORS:s="txt_tooltip_visitors";break;case d.CEO.NUMBER_OF_PAGE_VIEWS:s="txt_tooltip_page_views";break;case d.CEO.NUMBER_OF_UNIQUE_PAGE_VIEWS:s="txt_tooltip_unique_page_views";break;case d.CEO.BOUNCE_RATE:s="txt_tooltip_bounce_rate";break;case d.CEO.NUMBER_OF_PAGES_PER_SESSION:s="txt_tooltip_page_session";break;case d.CEO.AVERAGE_SESSION_DURATION:s="txt_tooltip_avg_session_duration";break;default:s=""}return{...e,className:`px-15 py-16 fs-sm fw-semibold border-bottom border-gray-800 align-middle ${0!==t?"rounded-top-end-3 text-end":""} ${0===t?"rounded-top-start-3":""}`,width:e.width?e.width:0===t?"auto":170,allowSort:e?.allowSort||!1,Header:r.createElement("span",{className:"align-middle text-gray-900 fw-medium"},_(e.Header),s&&r.createElement(r.Fragment,null,r.createElement(p.g,{"data-tooltip-id":"tooltipTable","data-tooltip-content":_(s),className:"mx-sm fs-12 mb-1",icon:h.mE}),r.createElement(m.m_,{id:"tooltipTable"})))}}))),[t?.header]),S=r.useMemo((()=>t?.data),[t?.data]);return r.createElement(r.Fragment,null,w===l.s.LOADING?r.createElement(c.bg,{className:"d-flex justify-content-center align-items-center bg-white rounded-3 shadow-sm"}):t?r.createElement(a.x,{classNameTable:"mb-0",columns:N,data:S,canSort:!0,pagination:s,paginationClass:"fs-14 border-top mt-2",isPaginationAPI:b,paginationResponse:o,selectPage:g,selectPageSize:u,simplePagination:n,limit:E,sortAPI:v,sortAPIHandle:M,sortBy:f}):r.createElement("div",{className:"position-relative ChartWrapper bg-white rounded-3 shadow-sm"},r.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},r.createElement(i.J,{icons:d._K2.PUBLIC_URL+"/assets/images/ic_project.svg",title:_("txt_no_data"),width:"w-50"}))))})))},44354:(e,t,s)=>{s.d(t,{A:()=>m});var a=s(46942),i=s.n(a),l=s(96540),r=s(5556),n=s.n(r),o=s(36519),c=s(74848);n().string,n().bool,n().bool,n().bool,n().bool;const d=l.forwardRef((({bsPrefix:e,className:t,fluid:s=!1,rounded:a=!1,roundedCircle:l=!1,thumbnail:r=!1,...n},d)=>(e=(0,o.oU)(e,"img"),(0,c.jsx)("img",{ref:d,...n,className:i()(t,s&&`${e}-fluid`,a&&"rounded",l&&"rounded-circle",r&&`${e}-thumbnail`)}))));d.displayName="Image";const m=d}}]);