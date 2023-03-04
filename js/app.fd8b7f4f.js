(function(){var e={9838:function(e,t,r){"use strict";var n=r(9963),c=r(6252);function s(e,t,r,n,s,a){const i=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(i)}var a={},i=r(3744);const o=(0,i.Z)(a,[["render",s]]);var u=o;const l={class:"btn"};function d(e,t,r,n,s,a){return(0,c.wg)(),(0,c.iD)("button",l,[(0,c.WI)(e.$slots,"default",{},void 0,!0)])}var h={name:"my-button"};const p=(0,i.Z)(h,[["render",d],["__scopeId","data-v-16b45898"]]);var m=p;const v=e=>((0,c.dD)("data-v-9b0a64dc"),e=e(),(0,c.Cn)(),e),g={class:"burger"},y=v((()=>(0,c._)("span",{class:"burger__line top__line"},null,-1))),C=v((()=>(0,c._)("span",{class:"burger__line mid__line"},null,-1))),_=v((()=>(0,c._)("span",{class:"burger__line bottom__line"},null,-1))),f=[y,C,_];function I(e,t,r,n,s,a){return(0,c.wg)(),(0,c.iD)("button",g,f)}var k={};const b=(0,i.Z)(k,[["render",I],["__scopeId","data-v-9b0a64dc"]]);var x=b;const T={class:"row"},F={class:"column"};function w(e,t,r,n,s,a){return(0,c.wg)(),(0,c.iD)("div",T,[(0,c._)("section",F,[(0,c.WI)(e.$slots,"default",{},void 0,!0)])])}var S={name:"my-main-block"};const D=(0,i.Z)(S,[["render",w],["__scopeId","data-v-22057d90"]]);var V=D,A=r(3577);const B=["checked"],M={class:"circle__checkbox-inner"},E={key:0};function R(e,t,r,n,s,a){return(0,c.wg)(),(0,c.iD)("div",{class:(0,A.C_)(["circle__checkbox",{checked:s.checked}]),onClick:t[0]||(t[0]=(...e)=>a.updateChecked&&a.updateChecked(...e))},[(0,c._)("input",{type:"checkbox",checked:s.checked,hidden:""},null,8,B),(0,c._)("div",M,[s.checked?((0,c.wg)(),(0,c.iD)("span",E,"✓")):(0,c.kq)("",!0)])],2)}r(7658);var U={name:"my-checkbox",props:{label:String,checkedCurrencies:{type:Array,default:[]},currencyValue:String},data(){return{checked:!1}},methods:{updateChecked(){if(this.checked=!this.checked,this.checked)this.checkedCurrencies.push(this.currencyValue);else{const e=this.checkedCurrencies.indexOf(this.currencyValue);-1!==e&&this.checkedCurrencies.splice(e,1)}this.$emit("update:checkedCurrencies",this.checkedCurrencies)}}};const $=(0,i.Z)(U,[["render",R]]);var P=$;const H=["placeholder","value"];function L(e,t,r,n,s,a){return(0,c.wg)(),(0,c.iD)("input",{class:(0,A.C_)(["input",{light:!a.isDarkMode}]),ref:"MyInput",onClick:t[0]||(t[0]=(...e)=>a.selectText&&a.selectText(...e)),placeholder:r.placeholder,style:(0,A.j5)({textAlign:r.align}),value:r.modelValue,onInput:t[1]||(t[1]=(...e)=>a.updateInput&&a.updateInput(...e))},null,46,H)}var O={name:"my-input",inject:["store"],props:{type:[String],placeholder:{type:String,default:"placeholder"},align:{type:String,default:"left"},modelValue:{type:[String,Number],default:""},maxCount:{type:[Number,String],default:1e4}},methods:{selectText(){this.modelValue.length&&this.$refs.MyInput.select()},updateInput(e){this.$emit("update:modelValue",e.target.value)}},watch:{},computed:{isDarkMode(){return this.$store.state.currencies.isDarkMode}}};const N=(0,i.Z)(O,[["render",L],["__scopeId","data-v-64a3a786"]]);var j=N;const Z={class:"tap"},W={class:"tab__header"},q=["onClick"],z={class:"tab__title"};function Y(e,t,r,n,s,a){const i=(0,c.up)("custome-table");return(0,c.wg)(),(0,c.iD)("div",Z,[(0,c._)("div",W,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(r.tabs,((t,n)=>((0,c.wg)(),(0,c.iD)("button",{key:n,class:(0,A.C_)({tab__button:!0,active:r.activeTabIndex===n}),onClick:t=>e.$emit("update:activeTabIndex",n)},[(0,c._)("span",z,(0,A.zw)(t.title),1)],10,q)))),128))]),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(r.tabs,((e,t)=>((0,c.wg)(),(0,c.iD)("div",{class:(0,A.C_)(["tab__content",{tab__pane:!0,active:r.activeTabIndex===t}]),key:t},[r.activeTabIndex===t?((0,c.wg)(),(0,c.j4)(i,{key:0,defaultIcons:r.defaultIcons,selectedCurrencyExchange:r.selectedCurrencyExchange,activeTabIndex:s.currentTabIndex,onChange:a.changeSelectedCurrencies},null,8,["defaultIcons","selectedCurrencyExchange","activeTabIndex","onChange"])):(0,c.kq)("",!0)],2)))),128))])}const Q=["onClick"],K={class:"td__content"},G=["src"],X={class:"currency__name"},J={class:"td__content"},ee={class:"currency__name"};function te(e,t,r,n,s,a){return(0,c.wg)(),(0,c.iD)("table",null,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(r.defaultIcons,((t,n)=>((0,c.wg)(),(0,c.iD)("tr",{class:(0,A.C_)(["",{isActive:r.activeTabIndex?t.to_active:t.from_active}]),key:n,onClick:n=>e.$emit("change",r.activeTabIndex?{...r.selectedCurrencyExchange,to:t.value}:{...r.selectedCurrencyExchange,from:t.value})},[(0,c._)("td",null,[(0,c._)("div",K,[(0,c._)("img",{src:t.path},null,8,G),(0,c._)("span",X,(0,A.zw)(t.value),1)])]),(0,c._)("td",null,[(0,c._)("div",J,[(0,c._)("span",ee,(0,A.zw)(t.rate),1)])])],10,Q)))),128))])}var re={name:"custome-table",props:{defaultIcons:{type:Array,required:!0},activeTabIndex:{type:Number,default:0},selectedCurrencyExchange:{type:Object,required:!0}},data(){return{}}};const ne=(0,i.Z)(re,[["render",te],["__scopeId","data-v-483eb654"]]);var ce=ne,se={name:"my-tabs",components:{CustomeTable:ce},props:{tabs:{type:Array,required:!0},defaultIcons:{type:Array,required:!0},selectedCurrencyExchange:{type:Object,required:!0},activeTabIndex:{type:Number,default:0}},data(){return{currentTabIndex:this.activeTabIndex,currentSelectedCurrencyExchange:this.selectedCurrencyExchange}},methods:{changeSelectedCurrencies(e){this.$emit("change",e)}},watch:{activeTabIndex(e){this.currentTabIndex=e},selectedCurrencyExchange:{handler(e){this.currentSelectedCurrencyExchange=e},deep:!0}}};const ae=(0,i.Z)(se,[["render",Y],["__scopeId","data-v-3c581762"]]);var ie=ae;const oe=e=>((0,c.dD)("data-v-83daa0ca"),e=e(),(0,c.Cn)(),e),ue={class:"currency__convert__view"},le={class:"currency__wrap"},de=oe((()=>(0,c._)("h3",{class:"label"},"From",-1))),he={class:"input__block"},pe=["src"],me={class:"selected__currency"},ve=["type","nowInChanging"],ge={class:"currency__wrap"},ye=oe((()=>(0,c._)("h3",{class:"label"},"To",-1))),Ce={class:"input__block"},_e=["src"],fe={class:"selected__currency"},Ie=["type","nowInChanging"];function ke(e,t,r,s,a,i){return(0,c.wg)(),(0,c.iD)("div",ue,[(0,c._)("div",le,[de,(0,c._)("div",he,[(0,c._)("img",{src:r.selectedIconFrom.path,class:"selected__icon"},null,8,pe),(0,c._)("span",me,(0,A.zw)(r.selectedIconFrom.value)+":",1),(0,c.wy)((0,c._)("input",{class:(0,A.C_)(["input",{light:!i.isDarkMode}]),type:a.type,"onUpdate:modelValue":t[0]||(t[0]=e=>a.inputFrom=e),nowInChanging:a.fromValueInChanging,onInput:t[1]||(t[1]=(...e)=>i.handleInputFrom&&i.handleInputFrom(...e)),onFocus:t[2]||(t[2]=(...e)=>i.handleFocus&&i.handleFocus(...e))},null,42,ve),[[n.YZ,a.inputFrom,void 0,{number:!0}]])])]),(0,c._)("div",ge,[ye,(0,c._)("div",Ce,[(0,c._)("img",{src:r.selectedIconTo.path,class:"selected__icon"},null,8,_e),(0,c._)("span",fe,(0,A.zw)(r.selectedIconTo.value)+":",1),(0,c.wy)((0,c._)("input",{class:(0,A.C_)(["input",{light:!i.isDarkMode}]),type:a.type,"onUpdate:modelValue":t[3]||(t[3]=e=>a.inputTo=e),nowInChanging:a.toValueInChanging,onInput:t[4]||(t[4]=(...e)=>i.handleInputTo&&i.handleInputTo(...e)),onFocus:t[5]||(t[5]=(...e)=>i.handleFocus&&i.handleFocus(...e))},null,42,Ie),[[n.YZ,a.inputTo,void 0,{number:!0}]])])]),(0,c.Uk)(" Max: "+(0,A.zw)(r.maxInputToValue)+" "+(0,A.zw)(r.selectedIconTo.value),1)])}var be={name:"my-currency-convert-view",components:{MyInput:j},inject:["store"],props:{selectedIconFrom:{type:Object,required:!0},selectedIconTo:{type:Object,required:!0},maxInputFromValue:Number,maxInputToValue:Number,currentRate:Number},data(){return{type:"Exchange",inputFrom:0,inputTo:0,fromValueInChanging:!1,toValueInChanging:!1,crypto:["BTC","ETH","BNB"]}},methods:{handleInputFrom(e){e.target.value=e.target.value.replace(/[^.\d]|(?<=\..*)\./g,"").replace(/^0+([1-9])/,"$1");const t=this.currentRate;if(this.inputFrom=parseFloat(this.inputFrom),!this.fromValueInChanging){let r=parseFloat(e.target.value);r>this.maxInputFromValue&&(this.inputFrom=this.maxInputFromValue),this.inputTo=r*t,this.inputTo>this.maxInputToValue&&(this.inputTo=this.maxInputToValue,this.inputFrom=this.maxInputToValue/t)}this.valueToFixed("to")},handleInputTo(e){e.target.value=e.target.value.replace(/[^.\d]|(?<=\..*)\./g,"").replace(/^0+([1-9])/,"$1");const t=this.currentRate;if(this.inputTo=parseFloat(this.inputTo),!this.toValueInChanging){let r=parseFloat(e.target.value);r>this.maxInputToValue&&(this.inputTo=this.maxInputToValue),this.inputFrom=r/t,this.inputFrom>this.maxInputFromValue&&(this.inputFrom=this.maxInputFromValue,this.inputTo=this.maxInputFromValue*t)}this.valueToFixed("from")},handleFocus(e){e.target.select()},clearInputs(){this.inputFrom=0,this.inputTo=0},recalculateInputs(){const e=this.currentRate;this.fromValueInChanging||(this.inputTo=this.inputFrom*e,this.inputTo>this.maxInputToValue&&(this.inputTo=this.maxInputToValue,this.inputFrom=this.inputTo/e)),this.toValueInChanging||(this.inputFrom=this.inputTo/e,this.inputFrom>this.maxInputFromValue&&(this.inputFrom=this.maxInputFromValue,this.inputTo=this.inputFrom*e)),this.valueToFixed()},valueToFixed(e="all"){const t=this.selectedIconFrom.value,r=this.selectedIconTo.value,n=this.crypto;switch(e){case"to":n.includes(r)?this.inputTo=this.inputTo.toFixed(7):this.inputTo=this.inputTo.toFixed(3);break;case"from":n.includes(t)?this.inputFrom=this.inputFrom.toFixed(7):this.inputFrom=this.inputFrom.toFixed(3);break;default:n.includes(t)||n.includes(r)?n.includes(t)&&!n.includes(r)?(this.inputTo=this.inputTo.toFixed(3),this.inputFrom=this.inputFrom.toFixed(7)):!n.includes(t)&&n.includes(r)?(this.inputTo=this.inputTo.toFixed(7),this.inputFrom=this.inputFrom.toFixed(3)):(this.inputTo=this.inputTo.toFixed(7),this.inputFrom=this.inputFrom.toFixed(7)):(this.inputTo=this.inputTo.toFixed(3),this.inputFrom=this.inputFrom.toFixed(3))}this.inputFrom=parseFloat(this.inputFrom.toString().replace(/^0+/,"")),this.inputTo=parseFloat(this.inputTo.toString().replace(/^0+/,""))}},watch:{selectedIconFrom:{handler(e){this.recalculateInputs()},deep:!0},selectedIconTo:{handler(e){this.recalculateInputs()},deep:!0},inputFrom(){isNaN(this.inputFrom)&&this.clearInputs()},inputTo(){isNaN(this.inputTo)&&this.clearInputs()}},computed:{isDarkMode(){return this.$store.state.currencies.isDarkMode}}};const xe=(0,i.Z)(be,[["render",ke],["__scopeId","data-v-83daa0ca"]]);var Te=xe,Fe=r.p+"img/updateCurrencyIcon.c7c5a395.svg";const we={class:"currencies__operations__block tabIndex0"},Se={class:"currencies__operations__block tabIndex1"};function De(e,t,r,n,s,a){return(0,c.wg)(),(0,c.iD)("div",null,[(0,c._)("div",we,[(0,c._)("a",{class:(0,A.C_)(["currencies__operations",{show:!r.activeTabIndex}]),onClick:t[0]||(t[0]=(...e)=>a.showSearchBlock&&a.showSearchBlock(...e))}," Add more currencies ",2)]),(0,c._)("div",Se,[s.disabled?(0,c.kq)("",!0):((0,c.wg)(),(0,c.iD)("img",{key:0,class:(0,A.C_)(["currencies__operations__img",{show:r.activeTabIndex}]),src:Fe},null,2)),s.disabled?((0,c.wg)(),(0,c.iD)("a",{key:2,class:(0,A.C_)(["currencies__operations",{show:r.activeTabIndex}])}," Time left: "+(0,A.zw)(s.timeLeft),3)):((0,c.wg)(),(0,c.iD)("a",{key:1,class:(0,A.C_)(["currencies__operations",{show:r.activeTabIndex}]),onClick:t[1]||(t[1]=(...e)=>a.updateApiRates&&a.updateApiRates(...e))}," Update currencies ",2))])])}var Ve={name:"my-currencies-operations-block",props:{activeTabIndex:{type:Number,default:0},isSearchBlockShown:{type:Boolean,default:!1}},data(){return{disabled:!1,timeLeft:0}},methods:{showSearchBlock(){this.$emit("update:isSearchBlockShown",!0)},updateApiRates(){this.disable||(this.$emit("update"),this.disabled=!0),this.timeLeft=5;const e=setInterval((()=>{0===this.timeLeft?(clearInterval(e),this.disabled=!1):this.timeLeft-=1}),1e3)}}};const Ae=(0,i.Z)(Ve,[["render",De],["__scopeId","data-v-2d27d725"]]);var Be=Ae;const Me={class:"loader-wrapper"},Ee=(0,c.uE)('<div class="overlay"></div><div class="loader"><div class="circle"></div><div class="circle"></div><div class="circle"></div></div>',2),Re=[Ee];function Ue(e,t,r,n,s,a){return(0,c.wg)(),(0,c.iD)("div",Me,Re)}var $e={name:"my-loader"};const Pe=(0,i.Z)($e,[["render",Ue]]);var He=Pe,Le=[m,x,V,P,j,ie,Te,Be,He],Oe=r(3907);r(4702);const Ne={state:()=>({defaultFromSelectArray:["USD","UAH","EUR"],isDarkMode:!0,isFetchLoading:!1}),getters:{getDefaultFromSelectArray:e=>e.defaultFromSelectArray,getIsDarkMode:e=>e.isDarkMode,getIsFetchLoading:e=>e.isFetchLoading},mutations:{setDefaultFromSelectArray(e,t){e.defaultFromSelectArray=t},setIsDarkMode(e,t){e.isDarkMode=t},setIsFetchLoading(e,t){e.isFetchLoading=t}},actions:{setDefaultFromSelectArray({commit:e},t){e("SET_DEFAULT_FROM_SELECT_ARRAY",t)}}};var je=(0,Oe.MT)({modules:{currencies:Ne}}),Ze=r(2201);function We(e,t,r,n,s,a){const i=(0,c.up)("my-loader"),o=(0,c.up)("my-burger-button"),u=(0,c.up)("Header"),l=(0,c.up)("Navbar"),d=(0,c.up)("Main",!0),h=(0,c.up)("my-button");return(0,c.wg)(),(0,c.iD)(c.HY,null,[a.isFetchLoading?((0,c.wg)(),(0,c.j4)(i,{key:0})):(0,c.kq)("",!0),(0,c._)("div",{class:(0,A.C_)(["app",{dark:a.isDarkMode}])},[(0,c.Wm)(u,null,{default:(0,c.w5)((()=>[(0,c.Wm)(o,{class:(0,A.C_)(a.burgerClass),onClick:a.toggleMenu},null,8,["class","onClick"])])),_:1}),(0,c.Wm)(l,{class:(0,A.C_)(a.menuClass),onClick:a.hide},null,8,["class","onClick"]),(0,c.Wm)(d),(0,c.Wm)(h,{class:"btn__changeMode",onClick:a.changeMode},{default:(0,c.w5)((()=>[(0,c.Uk)("Change mode")])),_:1},8,["onClick"])],2)],64)}const qe=e=>((0,c.dD)("data-v-2d7170bc"),e=e(),(0,c.Cn)(),e),ze={class:"header"},Ye=qe((()=>(0,c._)("h1",null,"TEST-CURRENCY-CONVERTER",-1))),Qe=[Ye];function Ke(e,t,r,n,s,a){return(0,c.wg)(),(0,c.iD)("header",ze,[(0,c._)("div",{class:"header__title",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},Qe),(0,c.WI)(e.$slots,"default",{},void 0,!0)])}var Ge={name:"Header"};const Xe=(0,i.Z)(Ge,[["render",Ke],["__scopeId","data-v-2d7170bc"]]);var Je=Xe;const et={class:"menu",id:"main-menu"},tt={class:"menu__dropdown"},rt={id:"menu",class:"nav__menu"};function nt(e,t,r,n,s,a){return(0,c.wg)(),(0,c.iD)("nav",et,[(0,c._)("div",tt,[(0,c._)("ul",rt,[(0,c._)("li",null,[(0,c._)("a",{class:(0,A.C_)([{dark:!a.isDarkMode},""]),onClick:t[0]||(t[0]=t=>e.$router.push("/"))},"Some page1",2)]),(0,c._)("li",null,[(0,c._)("a",{class:(0,A.C_)([{dark:!a.isDarkMode},""]),onClick:t[1]||(t[1]=t=>e.$router.push("/second"))},"Some page2",2)]),(0,c._)("li",null,[(0,c._)("a",{class:(0,A.C_)([{dark:!a.isDarkMode},""]),onClick:t[2]||(t[2]=t=>e.$router.push("/third"))},"Some page3",2)]),(0,c._)("li",null,[(0,c._)("a",{class:(0,A.C_)([{dark:!a.isDarkMode},""]),onClick:t[3]||(t[3]=t=>e.$router.push("/fourth"))},"About",2)])])])])}var ct={name:"Navbar",methods:{},computed:{isDarkMode(){return this.$store.state.currencies.isDarkMode}}};const st=(0,i.Z)(ct,[["render",nt],["__scopeId","data-v-6e84aaaf"]]);var at=st;const it=e=>((0,c.dD)("data-v-3bef8c80"),e=e(),(0,c.Cn)(),e),ot={class:"main"},ut=it((()=>(0,c._)("h2",{class:"subtitle"},"Exchange Rate",-1))),lt={class:"main__content"},dt={class:"currencies__view"};function ht(e,t,r,n,s,a){const i=(0,c.up)("my-main-block"),o=(0,c.up)("my-currency-convert-view"),u=(0,c.up)("my-tabs"),l=(0,c.up)("my-currencies-operations-block"),d=(0,c.up)("SearchCurrencyBlock");return(0,c.wg)(),(0,c.iD)("main",ot,[(0,c.Wm)(i,null,{default:(0,c.w5)((()=>[ut])),_:1}),(0,c._)("div",lt,[(0,c.Wm)(i,null,{default:(0,c.w5)((()=>[(0,c.Wm)(o,{selectedIconFrom:s.selectedIconFrom,selectedIconTo:s.selectedIconTo,maxInputFromValue:s.maxInputFromValue,maxInputToValue:s.maxInputToValue,currentRate:s.currentRate},null,8,["selectedIconFrom","selectedIconTo","maxInputFromValue","maxInputToValue","currentRate"])])),_:1}),(0,c.Wm)(i,null,{default:(0,c.w5)((()=>[(0,c._)("h3",{class:(0,A.C_)(["currencies__label",{light:!a.isDarkMode}])},"Currencies",2),(0,c._)("div",dt,[(0,c.Wm)(u,{tabs:s.tabs,activeTabIndex:s.activeTabIndex,"onUpdate:activeTabIndex":t[0]||(t[0]=e=>s.activeTabIndex=e),defaultIcons:s.defaultIcons,selectedCurrencyExchange:s.selectedCurrencyExchange,onChangeActiveTabChange:a.handleChangeActiveTabChange,onChange:a.handleCurrencyChange},null,8,["tabs","activeTabIndex","defaultIcons","selectedCurrencyExchange","onChangeActiveTabChange","onChange"])]),(0,c.Wm)(l,{isSearchBlockShown:s.isSearchBlockShown,"onUpdate:isSearchBlockShown":t[1]||(t[1]=e=>s.isSearchBlockShown=e),activeTabIndex:s.activeTabIndex,onUpdate:a.fetchCurrencies},null,8,["isSearchBlockShown","activeTabIndex","onUpdate"])])),_:1}),(0,c.Wm)(d,{show:s.isSearchBlockShown,"onUpdate:show":t[2]||(t[2]=e=>s.isSearchBlockShown=e),currencies:s.currentCurrencyViewContent},null,8,["show","currencies"])])])}const pt=(0,c._)("hr",null,null,-1),mt={class:"content"},vt=["onClick"],gt=["src"],yt={class:"currency__name"},Ct={key:1,class:"nothing"};function _t(e,t,r,s,a,i){const o=(0,c.up)("my-input"),u=(0,c.up)("my-checkbox"),l=(0,c.up)("my-button");return(0,c.wg)(),(0,c.iD)("div",{class:(0,A.C_)(["search__currency__wrapper",{show:r.show}]),onClick:t[3]||(t[3]=(...e)=>i.hideSearchBlock&&i.hideSearchBlock(...e))},[(0,c._)("div",{class:(0,A.C_)(["search__currency__block",{show:r.show,light:!i.isDarkMode}]),onClick:t[2]||(t[2]=(0,n.iM)((()=>{}),["stop"]))},[pt,(0,c._)("span",{class:(0,A.C_)(["search__block__title",{light:!i.isDarkMode}])},"Search currency",2),(0,c.Wm)(o,{placeholder:"Введите название валюты",type:a.type,modelValue:a.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=e=>a.searchQuery=e)},null,8,["type","modelValue"]),i.search.length?((0,c.wg)(!0),(0,c.iD)(c.HY,{key:0},(0,c.Ko)(i.search,(e=>((0,c.wg)(),(0,c.iD)("div",{key:e.value},[(0,c._)("div",mt,[(0,c._)("div",{class:"currency",onClick:t=>i.updateCheckedCurrency(e)},[(0,c._)("img",{src:e.path},null,8,gt),(0,c._)("span",yt,(0,A.zw)(e.value),1)],8,vt),(0,c.Wm)(u,{checkedCurrencies:a.checkedCurrencies,"onUpdate:checkedCurrencies":t[1]||(t[1]=e=>a.checkedCurrencies=e),currencyValue:e.value,label:a.label,ref_for:!0,ref:"checkboxes"},null,8,["checkedCurrencies","currencyValue","label"])])])))),128)):((0,c.wg)(),(0,c.iD)("div",Ct,"Its nothing here...")),(0,c.Wm)(l,{onClick:i.addToDefaultFromSelectArray,disabled:i.noCheckedItems},{default:(0,c.w5)((()=>[(0,c.Uk)(" Select ")])),_:1},8,["onClick","disabled"])],2)],2)}var ft={name:"SearchCurrencyBlock",inject:["store"],props:{show:{type:Boolean,default:!1},currencies:{type:Array,required:!0}},data(){return{label:"",type:"query",checked:!1,searchQuery:"",filteredCurrencies:[],checkedCurrencies:[]}},methods:{updateCheckedCurrency(e){const t=this.$refs.checkboxes.find((t=>t.currencyValue===e.value));t&&t.updateChecked()},hideSearchBlockAction(e){"Escape"===e.key&&this.hideSearchBlock()},hideSearchBlock(){this.searchQuery="",this.$emit("update:show",!1)},addToDefaultFromSelectArray(){const e=[...this.defaultFromSelectArray,...this.checkedCurrencies];this.$store.commit("setDefaultFromSelectArray",e),this.hideSearchBlock()}},watch:{show(){this.show?(this.filteredCurrencies=this.currencies.filter((e=>!this.defaultFromSelectArray.includes(e.value))),window.addEventListener("keydown",this.hideSearchBlockAction)):(this.filteredCurrencies=[],window.removeEventListener("keydown",this.hideSearchBlockAction))}},computed:{defaultFromSelectArray(){return this.$store.state.currencies.defaultFromSelectArray},isDarkMode(){return this.$store.state.currencies.isDarkMode},search(){let e=this.filteredCurrencies.filter((e=>e.value.toLowerCase().includes(this.searchQuery.toLowerCase()))).map((e=>({...e,checked:!1})));return e},noCheckedItems(){return 0===this.checkedCurrencies.length}}};const It=(0,i.Z)(ft,[["render",_t]]);var kt=It,bt=r(6154),xt={name:"Main",inject:["store"],components:{SearchCurrencyBlock:kt},data(){return{fetchBaseParams:{fsym:"USD",tsyms:"USD,EUR,UAH,BTC,ETH,BNB,GBP,XRP"},allCurrencyRates:{},selectedCurrencyPair:[],currencyPairs:[],selectedCurrencyExchange:{from:"USD",to:"UAH",rate:""},selectedIconFrom:{},selectedIconTo:{},currenciesFromSelectArray:[],currentCurrencyViewContent:[],defaultIcons:[],tabs:[{title:"Select Currency"},{title:"All Currencies"}],activeTabIndex:0,isSearchBlockShown:!1,maxInputFromValue:0,maxInputToValue:0,currentRate:0}},methods:{createCurrencyPairs(){this.fetchBaseParams.fsym;this.selectedCurrencyPair=[],this.currencyPairs=[];for(let e in this.allCurrencyRates)for(let t in this.allCurrencyRates){let r={from:e,to:t,rate:"BTC"!==t&&"ETH"!==t&&"BNB"!==t?parseFloat((this.allCurrencyRates[t]/this.allCurrencyRates[e]).toFixed(3)):parseFloat((this.allCurrencyRates[t]/this.allCurrencyRates[e]).toFixed(7))};this.currencyPairs.push(r)}this.setSelectedCurrencyPairs()},setSelectedCurrencyPairs(e=this.selectedCurrencyExchange.from){this.selectedCurrencyPair=this.currencyPairs.filter((t=>t.from===e))},setConvertSettings(e=1e4){const t=this.allCurrencyRates[this.selectedIconTo.value],r=this.allCurrencyRates[this.selectedIconFrom.value];"USD"!==this.selectedIconTo?(this.maxInputFromValue=r*e,this.maxInputToValue=t*e,this.currentRate=this.maxInputToValue/this.maxInputFromValue):(this.maxInputFromValue=t*e,this.maxInputToValue=r*e,this.currentRate=this.maxInputFromValue/this.maxInputToValue)},loadData(){this.createCurrencyPairs(),this.setSelectedCurrencyExchange(this.selectedCurrencyPair.find((e=>"UAH"===e.to))),this.loadCurrentCurrencyViewContent(),this.selectDefaultIcons(this.activeTabIndex),this.setCurrenciesFromSelectArray(this.defaultFromSelectArray)},handleChangeActiveTabChange(e){this.activeTabIndex=e},async fetchCurrencies(){try{this.$store.commit("setIsFetchLoading",!0);const e={api:"897c6912669f394c6483dca279e713cd5035cf011387b8a807d7174ebc1fab7c",...this.fetchBaseParams},{data:t}=await bt.Z.get("https://min-api.cryptocompare.com/data/price?",{params:e});this.allCurrencyRates=t,this.loadData()}catch(e){console.log(e)}finally{this.$store.commit("setIsFetchLoading",!1)}},setCurrenciesFromSelectArray(e=["USD","UAH","EUR"]){this.currenciesFromSelectArray=Object.keys(this.allCurrencyRates).filter((t=>e.includes(t)))},changeOption(e){this.selectedIconFrom=this.currentCurrencyViewContent.find((t=>t.value===e.target.value))},loadCurrentCurrencyViewContent(){this.currentCurrencyViewContent=[];const e=r(516);this.selectedCurrencyPair.forEach((t=>{const r=`./${t.to}.svg`,n={path:e(r),value:t.to,rate:t.rate,from_active:!1,to_active:!1};this.currentCurrencyViewContent.push(n)}))},selectDefaultIcons(e){const t=this.currentCurrencyViewContent;let r=[];r=e?t.slice():t.filter((e=>this.defaultFromSelectArray.includes(e.value))),this.defaultIcons=r},setSelectedIconFrom(e="USD"){this.currentCurrencyViewContent=this.currentCurrencyViewContent.map((t=>({...t,from_active:t.value===e}))),this.selectedIconFrom=this.currentCurrencyViewContent.find((t=>t.value===e))},setSelectedIconTo(e="UAH"){this.currentCurrencyViewContent=this.currentCurrencyViewContent.map((t=>({...t,to_active:t.value===e}))),this.selectedIconTo=this.currentCurrencyViewContent.find((t=>t.value===e))},setSelectedCurrencyExchange(e=this.selectedCurrencyExchange){const t=this.selectedCurrencyPair.find((t=>t.from===e.from&&t.to===e.to));this.selectedCurrencyExchange=t,this.loadCurrentCurrencyViewContent(),this.setSelectedIconFrom(),this.setSelectedIconTo()},handleCurrencyChange(e=this.selectedCurrencyExchange){this.setSelectedCurrencyPairs(e.from),this.setSelectedCurrencyExchange(e)}},mounted(){this.fetchCurrencies()},watch:{defaultFromSelectArray(){this.selectDefaultIcons(this.activeTabIndex)},activeTabIndex(){this.selectDefaultIcons(this.activeTabIndex)},selectedCurrencyExchange:{handler(e){this.fetchBaseParams.fsym=e.from,this.setSelectedCurrencyPairs(e.from),this.setSelectedIconFrom(e.from),this.setSelectedIconTo(e.to),this.selectDefaultIcons(this.activeTabIndex),this.setConvertSettings()},deep:!0},fetchBaseParams:{handler(){this.createCurrencyPairs()},deep:!0}},computed:{defaultFromSelectArray(){return this.$store.state.currencies.defaultFromSelectArray},isDarkMode(){return this.$store.state.currencies.isDarkMode},isFetchLoading(){return this.$store.state.currencies.isFetchLoading}}};const Tt=(0,i.Z)(xt,[["render",ht],["__scopeId","data-v-3bef8c80"]]);var Ft=Tt,wt={name:"App",inject:["store"],components:{MyLoader:He,Main:Ft,Navbar:at,Header:Je,MyBurgerButton:x},data(){return{isBurgerActive:!1,isMenuHidden:!0}},methods:{hide(){this.isBurgerActive=!this.isBurgerActive,this.isMenuHidden=!this.isMenuHidden},changeMode(){this.$store.commit("setIsDarkMode",!this.isDarkMode)},toggleMenu(){this.isBurgerActive=!this.isBurgerActive,this.isMenuHidden=!this.isMenuHidden}},computed:{burgerClass(){return this.isBurgerActive?"active":""},menuClass(){return this.isMenuHidden?"":"is-open"},isDarkMode(){return this.$store.state.currencies.isDarkMode},isFetchLoading(){return this.$store.state.currencies.isFetchLoading}}};const St=(0,i.Z)(wt,[["render",We]]);var Dt=St;const Vt=[{path:"/",component:Dt},{path:"/second",component:Dt},{path:"/third",component:Dt},{path:"/fourth",component:Dt}],At=(0,Ze.p7)({routes:Vt,history:(0,Ze.PO)("/converter/")});var Bt=At;const Mt=(0,n.ri)(u);Le.forEach((e=>Mt.component(e.name,e))),Mt.use(je).use(Bt).mount("#app")},516:function(e,t,r){var n={"./BNB.svg":4970,"./BTC.svg":1732,"./ETH.svg":1707,"./EUR.svg":403,"./GBP.svg":3808,"./UAH.svg":9739,"./USD.svg":9983,"./XRP.svg":1231,"./backgroundDark.svg":7428,"./backgroundLight.svg":2150,"./close.svg":7674};function c(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=s,e.exports=c,c.id=516},4970:function(e,t,r){"use strict";e.exports=r.p+"img/BNB.fe8efcab.svg"},1732:function(e,t,r){"use strict";e.exports=r.p+"img/BTC.363b79f9.svg"},1707:function(e,t,r){"use strict";e.exports=r.p+"img/ETH.cbbc20b2.svg"},403:function(e,t,r){"use strict";e.exports=r.p+"img/EUR.15e9f7af.svg"},3808:function(e,t,r){"use strict";e.exports=r.p+"img/GBP.53ae694c.svg"},9739:function(e,t,r){"use strict";e.exports=r.p+"img/UAH.faed68ad.svg"},9983:function(e,t,r){"use strict";e.exports=r.p+"img/USD.33481dd8.svg"},1231:function(e,t,r){"use strict";e.exports=r.p+"img/XRP.e1473b97.svg"},7428:function(e,t,r){"use strict";e.exports=r.p+"img/backgroundDark.eff03f94.svg"},2150:function(e,t,r){"use strict";e.exports=r.p+"img/backgroundLight.fd85e958.svg"},7674:function(e,t,r){"use strict";e.exports=r.p+"img/close.974ff2cf.svg"}},t={};function r(n){var c=t[n];if(void 0!==c)return c.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,c,s){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],c=e[l][1],s=e[l][2];for(var i=!0,o=0;o<n.length;o++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[o])}))?n.splice(o--,1):(i=!1,s<a&&(a=s));if(i){e.splice(l--,1);var u=c();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,c,s]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/converter/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var c,s,a=n[0],i=n[1],o=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(c in i)r.o(i,c)&&(r.m[c]=i[c]);if(o)var l=o(r)}for(t&&t(n);u<a.length;u++)s=a[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},n=self["webpackChunktext_currency_converter"]=self["webpackChunktext_currency_converter"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9838)}));n=r.O(n)})();
//# sourceMappingURL=app.fd8b7f4f.js.map