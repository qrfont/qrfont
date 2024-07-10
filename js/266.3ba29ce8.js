"use strict";(self["webpackChunkvue_project1"]=self["webpackChunkvue_project1"]||[]).push([[266],{6266:function(e,t,o){o.r(t),o.d(t,{default:function(){return I}});var n=o(6768),r=o(5130),s=o(4232);const u=e=>((0,n.Qi)("data-v-4cfb7e84"),e=e(),(0,n.jt)(),e),l={class:"lotto-generator"},a=["disabled"],i={class:"box-border"},d={class:"pattern-0"},c={class:"inputs"},b=["onUpdate:modelValue","onInput","disabled"],h=["disabled"],m=u((()=>(0,n.Lk)("p",null,"Enter Your Favorite Numbers (Optional)",-1))),p={key:0},v={key:1,class:"numbers"},f={class:"record-header"},k=u((()=>(0,n.Lk)("h3",null,"1st Prize Winners",-1))),L={class:"record-date"},N={class:"record-numbers"},g={class:"number bonus-number"},w={class:"record-buttons"};function R(e,t,o,u,R,y){return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>y.generateLottoNumbers&&y.generateLottoNumbers(...e)),disabled:!y.isInputValid||R.lottoRecords.length>=30,class:"generate-button"},"(AUTO) Generator",8,a),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>y.resetLottoNumbers&&y.resetLottoNumbers(...e)),class:"reset-button"},"Clear"),(0,n.Lk)("div",i,[(0,n.Lk)("div",d,[(0,n.Lk)("div",c,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(R.userNumbers,((e,t)=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("input",{key:t,type:"number","onUpdate:modelValue":e=>R.userNumbers[t]=e,onInput:e=>y.validateInput(t),disabled:R.lottoRecords.length>=100,placeholder:"1-49"},null,40,b)),[[r.Jo,R.userNumbers[t],void 0,{number:!0}]]))),128)),(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>R.bonusNumber=e),onInput:t[3]||(t[3]=(...e)=>y.validateBonusInput&&y.validateBonusInput(...e)),disabled:R.lottoRecords.length>=100,placeholder:"Bonus (1-49)"},null,40,h),[[r.Jo,R.bonusNumber,void 0,{number:!0}]])]),m])]),R.lottoRecords.length>=100?((0,n.uX)(),(0,n.CE)("p",p,"You can enter up to 100 numbers.")):(0,n.Q3)("",!0),R.lottoRecords.length>0?((0,n.uX)(),(0,n.CE)("div",v,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(R.lottoRecords,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:(0,s.C4)(["record","pattern-"+(t%5+1)])},[(0,n.Lk)("div",f,[k,(0,n.Lk)("p",L,(0,s.v_)(e.date),1)]),(0,n.Lk)("div",N,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.numbers,((e,t)=>((0,n.uX)(),(0,n.CE)("span",{key:t,class:"number"},(0,s.v_)(e),1)))),128)),(0,n.Lk)("span",g,(0,s.v_)(e.bonusNumber),1)])],2)))),128)),(0,n.Lk)("div",w,[(0,n.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>y.printLottoRecords&&y.printLottoRecords(...e)),class:"print-button"},"Print"),(0,n.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>y.downloadLottoRecords&&y.downloadLottoRecords(...e)),class:"download-button"},"Download")])])):(0,n.Q3)("",!0)])}o(4114),o(3375),o(9225),o(3972),o(9209),o(5714),o(7561),o(6197),o(4603),o(7566),o(8721);var y={data(){return{userNumbers:Array(6).fill(null),bonusNumber:null,lottoRecords:[]}},computed:{isInputValid(){const e=new Set(this.userNumbers.filter((e=>null!==e)));return e.size===this.userNumbers.filter((e=>null!==e)).length&&this.userNumbers.every((e=>null===e||e>=1&&e<=49))&&(null===this.bonusNumber||this.bonusNumber>=1&&this.bonusNumber<=49)}},methods:{validateInput(e){const t=this.userNumbers[e];(t<1||t>49||this.userNumbers.filter((e=>e===t)).length>1)&&(this.userNumbers[e]=null)},validateBonusInput(){(this.bonusNumber<1||this.bonusNumber>49)&&(this.bonusNumber=null)},generateLottoNumbers(){if(this.lottoRecords.length<100&&this.isInputValid){const e=this.userNumbers.filter((e=>null!==e)),t=[...e];while(t.length<6){const e=Math.floor(49*Math.random())+1;t.includes(e)||t.push(e)}const o=this.bonusNumber||Math.floor(49*Math.random())+1,n=(new Date).toLocaleString("en-US");this.lottoRecords.unshift({date:n,numbers:t.sort(((e,t)=>e-t)),bonusNumber:o})}},resetLottoNumbers(){this.lottoRecords=[],this.userNumbers=Array(6).fill(null),this.bonusNumber=null},printLottoRecords(){const e=this.lottoRecords.map((e=>`${e.date}: ${e.numbers.join(", ")} Bonus: ${e.bonusNumber}`)).join("\n"),t=window.open("","","height=400,width=600");t.document.write("<pre>"+e+"</pre>"),t.document.close(),t.print()},downloadLottoRecords(){const e=new Blob([this.lottoRecords.map((e=>`${e.date}: ${e.numbers.join(", ")} Bonus: ${e.bonusNumber}`)).join("\n")],{type:"text/plain;charset=utf-8"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="lotto-records.txt",t.click(),URL.revokeObjectURL(t.href)}}},C=o(1241);const E=(0,C.A)(y,[["render",R],["__scopeId","data-v-4cfb7e84"]]);var I=E},655:function(e,t,o){var n=o(6955),r=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return r(e)}},2812:function(e){var t=TypeError;e.exports=function(e,o){if(e<o)throw new t("Not enough arguments");return e}},4603:function(e,t,o){var n=o(6840),r=o(9504),s=o(655),u=o(2812),l=URLSearchParams,a=l.prototype,i=r(a.append),d=r(a["delete"]),c=r(a.forEach),b=r([].push),h=new l("a=1&a=2&b=3");h["delete"]("a",1),h["delete"]("b",void 0),h+""!=="a=2"&&n(a,"delete",(function(e){var t=arguments.length,o=t<2?void 0:arguments[1];if(t&&void 0===o)return d(this,e);var n=[];c(this,(function(e,t){b(n,{key:t,value:e})})),u(t,1);var r,l=s(e),a=s(o),h=0,m=0,p=!1,v=n.length;while(h<v)r=n[h++],p||r.key===l?(p=!0,d(this,r.key)):m++;while(m<v)r=n[m++],r.key===l&&r.value===a||i(this,r.key,r.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,o){var n=o(6840),r=o(9504),s=o(655),u=o(2812),l=URLSearchParams,a=l.prototype,i=r(a.getAll),d=r(a.has),c=new l("a=1");!c.has("a",2)&&c.has("a",void 0)||n(a,"has",(function(e){var t=arguments.length,o=t<2?void 0:arguments[1];if(t&&void 0===o)return d(this,e);var n=i(this,e);u(t,1);var r=s(o),l=0;while(l<n.length)if(n[l++]===r)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,o){var n=o(3724),r=o(9504),s=o(2106),u=URLSearchParams.prototype,l=r(u.forEach);n&&!("size"in u)&&s(u,"size",{get:function(){var e=0;return l(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=266.3ba29ce8.js.map