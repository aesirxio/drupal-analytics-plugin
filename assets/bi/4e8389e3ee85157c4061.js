"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[2301],{3569:(e,t)=>{var i="circle-info",s=["info-circle"],a="f05a",n="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";t.mw={prefix:"fas",iconName:i,icon:[512,512,s,a,n]},t.mE=t.mw},92301:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var s,a=i(6193),n=(i(9783),i(67941),i(2211)),o=i(14164),l=i(47917),r=i(42715),c=i(51751),d=i(53800),h=i(81252),m=i(96540),p=i(44479),g=i(61105),E=i(32389),u=i(44015),w=i(99194),_=i(56347),M=i(95093),b=i.n(M),V=i(418),v=i(14630),S=i(67008),N=i(20982),C=i(3569),x=(0,E.CI)()((0,_.y)((e=>{const{data:t,isPagination:i=!0,simplePagination:s=!1,pagination:a,selectPage:l,selectPageSize:r,status:d,limit:h,isPaginationAPI:p=!!i,t:g,sortAPI:E,handleSort:u,sortBy:_}=e,M=m.useMemo((()=>t?.header?.map(((e,t)=>{let i="";switch(e?.accessor){case w.CEO.NUMBER_OF_VISITORS:i="txt_tooltip_searchEngine";break;case w.CEO.NUMBER_OF_PAGE_VIEWS:i="txt_tooltip_page_views";break;case w.CEO.NUMBER_OF_UNIQUE_PAGE_VIEWS:i="txt_tooltip_unique_page_views";break;case w.CEO.BOUNCE_RATE:i="txt_tooltip_bounce_rate";break;case w.CEO.NUMBER_OF_PAGES_PER_SESSION:i="txt_tooltip_page_session";break;case w.CEO.AVERAGE_SESSION_DURATION:i="txt_tooltip_avg_session_duration";break;default:i=""}return{...e,className:`px-15 py-16 fs-sm fw-semibold border-bottom border-gray-800 align-middle ${1!==t?"rounded-top-end-3 text-end":""} ${1===t?"rounded-top-start-3":""}`,width:e.width?e.width:0===t?"auto":170,allowSort:e?.allowSort||!1,subRows:e?.subRows??[],Header:m.createElement("span",{className:"align-middle text-gray-900 fw-medium"},g(e.Header),i&&m.createElement(m.Fragment,null,m.createElement(N.g,{"data-tooltip-id":"tooltipTable","data-tooltip-content":g(i),className:"mx-sm fs-12 mb-1",icon:C.mE}),m.createElement(S.m_,{id:"tooltipTable"})))}}))),[t?.header]),b=m.useMemo((()=>t?.data),[t?.data]);return m.createElement(m.Fragment,null,d===c.s.LOADING?m.createElement(v.bg,{className:"d-flex justify-content-center align-items-center bg-white rounded-3 shadow-sm"}):t?m.createElement(n.x,{classNameTable:"mb-0",columns:M,data:b,canSort:!0,pagination:i,paginationClass:"fs-14 border-top mt-2",isPaginationAPI:p,paginationResponse:a,selectPage:l,selectPageSize:r,simplePagination:s,limit:h,sortAPI:E,sortAPIHandle:u,sortBy:_,listViewModel:e.listViewModel,hasSubRow:!0,status:d,idKey:"urls"}):m.createElement("div",{className:"position-relative ChartWrapper bg-white rounded-3 shadow-sm"},m.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},m.createElement(o.J,{icons:w._K2.PUBLIC_URL+"/assets/images/ic_project.svg",title:g("txt_no_data"),width:"w-50"}))))}))),O=(0,u.PA)(class extends m.Component{constructor(e){super(e);const{listViewModel:t}=e;this.listViewModel=t||null,this.state={loading:!1}}render(){const{statusTopTable:e}=this.listViewModel;return m.createElement("div",{className:"position-relative h-100"},m.createElement("div",{className:"bg-white rounded-3 shadow-sm h-100 position-relative ChartWrapper"},m.createElement(x,{data:this.listViewModel?.outlinkTableData?.list?.toOutlinkTableTop(this.props.integration),pagination:this.listViewModel?.outlinkTableData?.pagination,selectPage:async e=>{await this.listViewModel.handleFilterOutlink({page:e})},selectPageSize:async e=>{await this.listViewModel.handleFilterOutlink({page:1,page_size:e})},status:e,sortAPI:!0,handleSort:this.props.handleSort,sortBy:this.listViewModel?.sortBy,...this.props})))}}),f=(0,E.CI)()((0,_.y)(O)),A=(0,u.PA)((s=class extends m.Component{constructor(e){super(e),(0,h.M)(this,"componentDidMount",(()=>{this.searchEngineListViewModel.initialize({"filter[domain]":this.context.biListViewModel.activeDomain,"filter[acquisition]":!0},{},{...this.params?.pagination&&{page:this.params?.pagination}})})),(0,h.M)(this,"componentDidUpdate",(e=>{this.props.location===e.location&&this.props.activeDomain===e.activeDomain||this.searchEngineListViewModel.initialize({"filter[domain]":this.context.biListViewModel.activeDomain,"filter[acquisition]":!0},{},{...this.params?.pagination&&{page:this.params?.pagination}})})),(0,h.M)(this,"handleDateRangeChange",((e,t)=>{this.searchEngineListViewModel.handleFilterDateRange(e??t,t??e)})),(0,h.M)(this,"generateCard",(()=>{const{t:e}=this.props;return[{className:"col-3 mb-24",title:e("txt_visitors"),value:w.HP2.numberWithCommas(this.searchEngineListViewModel.metricsData?.[w.CEO.TOTAL_NUMBER_OF_VISITORS]),isIncrease:!1,loading:this.searchEngineListViewModel.statusMetrics},{className:"col-3 mb-24",title:e("txt_page_session"),value:w.HP2.numberWithCommas(this.searchEngineListViewModel?.metricsData?.[w.CEO.NUMBER_OF_PAGES_PER_SESSION]),isIncrease:!1,loading:this.searchEngineListViewModel?.statusMetrics},{className:"col-3 mb-24",title:e("txt_bounce_rate"),value:w.HP2.numberWithCommas(this.searchEngineListViewModel?.metricsData?.[w.CEO.BOUNCE_RATE])+"%",isIncrease:!1,loading:this.searchEngineListViewModel?.statusMetrics},{className:"col-3 mb-24",title:e("txt_acg_session_duration"),value:(this.searchEngineListViewModel?.metricsData?.[w.CEO.AVERAGE_SESSION_DURATION]?b().utc(1e3*this.searchEngineListViewModel?.metricsData?.[w.CEO.AVERAGE_SESSION_DURATION]).format("HH:mm:ss"):"00:00:00")+"s",isIncrease:!1,loading:this.searchEngineListViewModel.statusMetrics}]})),(0,h.M)(this,"handleSort",(async e=>{this.searchEngineListViewModel.getPages({"filter[domain]":this.context.biListViewModel.activeDomain},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.searchEngineListViewModel?.sortBy["sort_direction[]"]?"asc":"desc"})})),(0,h.M)(this,"handleSearch",(async e=>{this.searchEngineListViewModel.getPages({"filter[domain]":this.context.biListViewModel.activeDomain},{},{},{"filter[url]":e})}));const{viewModel:t}=e;this.viewModel=t||null,this.searchEngineListViewModel=this.viewModel?this.viewModel.getSearchEngineListViewModel():null,this.params=V.A.parse(e.location.search)}render(){const{t:e}=this.props;return m.createElement("div",{className:"py-4 px-4"},m.createElement("div",{className:"d-flex align-items-center justify-content-between mb-24"},m.createElement("div",null,m.createElement("h2",{className:"fw-bold mb-8px"},e("txt_search_engines")),m.createElement("p",{className:"mb-0"},e("txt_analytic_details"))),m.createElement("div",{className:"position-relative"},m.createElement(l.K,{onChange:this.handleDateRangeChange}))),m.createElement(p.A,{className:"mb-24 ChartWrapper"},m.createElement(g.A,{lg:12},m.createElement(a.q,{bars:["visits"],barColors:["#0066FF"],isSelection:!1,listViewModel:this.searchEngineListViewModel,status:this.searchEngineListViewModel?.statusOverview,data:this.searchEngineListViewModel?.visitsData?.toAreaChart(),filterData:this.searchEngineListViewModel?.visitsData?.getFilterName()}))),m.createElement(f,{listViewModel:this.searchEngineListViewModel,handleSort:this.handleSort,handleSearch:this.handleSearch,...this.props}))}},(0,h.M)(s,"contextType",d.Dx),s)),L=(0,E.CI)()((0,_.y)((0,r.L)(A)))},6193:(e,t,i)=>{i.d(t,{q:()=>c});var s=i(9783),a=i(96540),n=i(32389),o=i(44015),l=i(56347),r=(0,o.PA)(class extends a.Component{constructor(e){super(e);const{listViewModel:t}=e;this.listViewModel=t||null,this.state={loading:!1}}render(){const{t:e,status:t,bars:i,barColors:n,data:o,filterData:l}=this.props;return a.createElement("div",{className:"position-relative h-100"},a.createElement(s.n,{height:500,data:o,colors:["#1AB394"],layout:"horizontal",barColors:n,bars:i,hiddenGrid:{vertical:!1},XAxisOptions:{axisLine:!0,padding:{left:50,right:50}},defaultValue:{label:"Visitors",value:"visitors"},options:[{label:"Visitors",value:"visitors"}],loading:t,tooltipComponent:{header:e("txt_in_total"),value:1===i?.length&&i[0]+":"},status:t,filterData:l,isSelection:!1,isLegend:!0,filterButtons:["days","months","weeks"]}))}}),c=(0,n.CI)()((0,l.y)(r))}}]);