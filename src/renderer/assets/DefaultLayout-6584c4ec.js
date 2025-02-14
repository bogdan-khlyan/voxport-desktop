import{m as g,s as l,M as b}from"./Meet-a9e5a1ec.js";import{_ as d,c as S,o as a,a as u,b as r,t as C,u as c,d as p,e as y,f,g as M,F as $,r as x,n as I,h as k,i as L,w as B,j as D}from"./index-d4c0b558.js";import{u as v}from"./user.state-d140eabd.js";import{h as R,u as A}from"./axios.config-e61ffbc8.js";const H={class:"micro-icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z=["d","fill"],U={__name:"MicroIcon",props:{enabled:{type:Boolean,default:!0}},setup(o){const s=o,e=S(()=>s.enabled?"M12 3C10.0118 3 8.40005 4.61177 8.40005 6.6V12C8.40005 13.9882 10.0118 15.6 12 15.6C13.9883 15.6 15.6 13.9882 15.6 12V6.6C15.6 4.61178 13.9883 3 12 3ZM6.60005 10.425C6.97284 10.425 7.27505 10.7272 7.27505 11.1V12C7.27505 14.6095 9.3905 16.725 12 16.725C14.6096 16.725 16.725 14.6095 16.725 12V11.1C16.725 10.7272 17.0273 10.425 17.4 10.425C17.7728 10.425 18.075 10.7272 18.075 11.1V12C18.075 15.127 15.7125 17.7021 12.675 18.0379V19.65H14.7C15.0728 19.65 15.375 19.9522 15.375 20.325C15.375 20.6978 15.0728 21 14.7 21H9.30005C8.92726 21 8.62505 20.6978 8.62505 20.325C8.62505 19.9522 8.92726 19.65 9.30005 19.65H11.325V18.0379C8.28758 17.7021 5.92505 15.127 5.92505 12V11.1C5.92505 10.7272 6.22726 10.425 6.60005 10.425Z":"M3.4228 3.1977C3.1592 3.46131 3.1592 3.88869 3.4228 4.1523L8.4001 9.12959V12C8.4001 13.9882 10.0119 15.6 12.0001 15.6C12.8081 15.6 13.554 15.3338 14.1548 14.8843L14.9565 15.686C14.1471 16.3361 13.119 16.725 12.0001 16.725C9.39055 16.725 7.2751 14.6095 7.2751 12V11.1C7.2751 10.7272 6.97289 10.425 6.6001 10.425C6.22731 10.425 5.9251 10.7272 5.9251 11.1V12C5.9251 15.127 8.28763 17.7021 11.3251 18.0379V19.65H9.3001C8.92731 19.65 8.6251 19.9522 8.6251 20.325C8.6251 20.6978 8.92731 21 9.3001 21H14.7001C15.0729 21 15.3751 20.6978 15.3751 20.325C15.3751 19.9522 15.0729 19.65 14.7001 19.65H12.6751V18.0379C13.9026 17.9022 15.0199 17.4008 15.9156 16.645L19.6228 20.3523C19.8864 20.6159 20.3138 20.6159 20.5774 20.3523C20.841 20.0887 20.841 19.6613 20.5774 19.3977L4.3774 3.1977C4.11379 2.9341 3.6864 2.9341 3.4228 3.1977ZM17.5201 14.5404L16.4814 13.5018C16.6395 13.03 16.7251 12.525 16.7251 12V11.1C16.7251 10.7272 17.0273 10.425 17.4001 10.425C17.7729 10.425 18.0751 10.7272 18.0751 11.1V12C18.0751 12.9069 17.8764 13.7674 17.5201 14.5404ZM8.54962 5.56993L15.5545 12.5748C15.5845 12.3876 15.6001 12.1956 15.6001 12V6.6C15.6001 4.61177 13.9883 3 12.0001 3C10.3698 3 8.99267 4.08365 8.54962 5.56993Z"),t=S(()=>s.enabled?"#D9D9D9":"#EC4444");return(n,_)=>(a(),u("svg",H,[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:e.value,fill:t.value},null,8,Z)]))}},N=d(U,[["__scopeId","data-v-0c3ff0cc"]]);const E={class:"server-profile"},P={class:"server-profile__info"},F={class:"name"},z={__name:"ServerProfile",setup(o){return(s,e)=>{var t;return a(),u("div",E,[e[1]||(e[1]=r("div",{class:"server-profile__avatar"},"Y",-1)),r("div",P,[r("span",F,C((t=c(v).user)==null?void 0:t.username),1),e[0]||(e[0]=r("span",{class:"status"},"В сети",-1))])])}}},Y=d(z,[["__scopeId","data-v-4e8d50ca"]]);const q={class:"meet-actions"},G={__name:"MeetActions",setup(o){function s(){g.api.isAudioMuted().then(e=>{e===g.isAudioMute&&g.api.executeCommand("toggleAudio")})}return(e,t)=>(a(),u("div",q,[r("button",{onClick:s},[p(N,{enabled:!c(g).isAudioMute},null,8,["enabled"])])]))}},J=d(G,[["__scopeId","data-v-9a067996"]]),Q={},T={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"14",viewBox:"0 0 18 14",fill:"none"};function W(o,s){return a(),u("svg",T,s[0]||(s[0]=[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.36655 3.26844L8.83332 0.669539C9.93205 -0.154133 11.5 0.629482 11.5 2.00227V11.9977C11.5 13.3705 9.93205 14.1541 8.83332 13.3305L5.36655 10.7316C5.02042 10.4721 4.59949 10.3318 4.1669 10.3318H2.33332C1.41285 10.3318 0.666656 9.58597 0.666656 8.66591V5.33409C0.666656 4.41403 1.41285 3.66818 2.33332 3.66818H4.1669C4.59949 3.66818 5.02042 3.52792 5.36655 3.26844ZM13.4993 2.30416C13.1611 2.23549 12.8312 2.45405 12.7625 2.79233C12.6938 3.13061 12.9124 3.46051 13.2507 3.52917C14.867 3.85727 16.0833 5.28728 16.0833 6.99998C16.0833 8.71269 14.867 10.1427 13.2507 10.4708C12.9124 10.5395 12.6938 10.8694 12.7625 11.2076C12.8312 11.5459 13.1611 11.7645 13.4993 11.6958C15.6868 11.2518 17.3333 9.31888 17.3333 6.99998C17.3333 4.68109 15.6868 2.74818 13.4993 2.30416ZM13.688 5.01528C13.3892 4.84244 13.0068 4.94455 12.834 5.24333C12.6612 5.54212 12.7633 5.92445 13.0621 6.09729C13.375 6.27834 13.5833 6.61521 13.5833 6.99998C13.5833 7.38476 13.375 7.72162 13.0621 7.90268C12.7633 8.07552 12.6612 8.45785 12.834 8.75663C13.0068 9.05542 13.3892 9.15752 13.688 8.98468C14.3713 8.58939 14.8333 7.84901 14.8333 6.99998C14.8333 6.15096 14.3713 5.41058 13.688 5.01528Z",fill:"#D9D9D9"},null,-1)]))}const X=d(Q,[["render",W]]);const j={class:"base-small-user"},K={class:"base-small-user__avatar"},O={class:"base-small-user__name"},e1={__name:"BaseSmallUser",props:{username:{type:String}},setup(o){return(s,e)=>{var t,n;return a(),u("div",j,[r("div",K,C((n=(t=o.username)==null?void 0:t[0])==null?void 0:n.toUpperCase()),1),r("div",O,[r("span",null,C(o.username),1)])])}}},V=d(e1,[["__scopeId","data-v-5dcf782b"]]);const s1={class:"room"},t1={class:"room__visitors"},o1={__name:"Room",props:{room:{type:Object},serverId:{type:Number,default:null},roomIndex:{type:Number,default:null}},setup(o){const s=o;return y(),v.ws.emit("subscribe",s.room.id),v.ws.on("room_update",e=>{e.roomId===s.room.id&&(s.room.users=e.users.filter(t=>{var n;return t.id!==((n=v.user)==null?void 0:n.id)}))}),v.ws.on("room_user_left",e=>{e.roomId===s.room.id&&(s.room.users=s.room.users.filter(t=>t.id!==e.userId))}),(e,t)=>{var n,_;return a(),u("div",s1,[r("div",{class:"room__name",onClick:t[0]||(t[0]=i=>c(l).currentRoom=o.room)},[p(X),r("span",null,C(o.room.name),1)]),r("div",t1,[o.room.id===((n=c(l).currentRoom)==null?void 0:n.id)?(a(),f(V,{key:0,username:(_=c(v).user)==null?void 0:_.username},null,8,["username"])):M("",!0),(a(!0),u($,null,x(o.room.users,i=>(a(),f(V,{key:i.id,username:i.username},null,8,["username"]))),128))])])}}},r1=d(o1,[["__scopeId","data-v-a3be973d"]]);const n1={class:"server"},_1={class:"server__header"},a1={class:"server__content"},i1={class:"server__footer"},l1={__name:"Server",setup(o){return(s,e)=>{var t,n;return a(),u("div",n1,[r("div",_1,[r("span",null,C((t=c(l).currentServer)==null?void 0:t.name),1)]),r("div",a1,[e[0]||(e[0]=r("h3",null,"Текстовые каналы",-1)),e[1]||(e[1]=r("div",{class:"empty"},[r("span",null,"Когда нибудь...")],-1)),e[2]||(e[2]=r("h3",null,"Голосовые каналы",-1)),(a(!0),u($,null,x((n=c(l).currentServer)==null?void 0:n.rooms,(_,i)=>{var m;return a(),f(r1,{key:_.id,room:_,"server-id":(m=c(l).currentServer)==null?void 0:m.id,"room-index":i},null,8,["room","server-id","room-index"])}),128))]),r("div",i1,[p(J),p(Y)])])}}},u1=d(l1,[["__scopeId","data-v-5e0829fb"]]),c1=""+new URL("../logo.jpg",import.meta.url).href,d1={},m1={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"};function v1(o,s){return a(),u("svg",m1,s[0]||(s[0]=[r("path",{d:"M12 6V18M18 12L6 12",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))}const p1=d(d1,[["render",v1]]);const f1={key:0,class:"servers"},C1=["onClick"],h1={class:"servers__add-btn"},g1={__name:"Servers",emits:["change"],setup(o,{emit:s}){const e=s;return y(),(t,n)=>c(l).servers?(a(),u("div",f1,[n[0]||(n[0]=r("div",{class:"servers__logo"},[r("img",{src:c1,alt:""})],-1)),n[1]||(n[1]=r("hr",null,null,-1)),(a(!0),u($,null,x(c(l).servers,_=>{var i,m,h;return a(),u("div",{class:I(["servers__item",{active:((i=c(l).currentServer)==null?void 0:i.id)===_.id}]),key:_.id,onClick:b1=>e("change",_)},C((h=(m=_.name)==null?void 0:m[0])==null?void 0:h.toUpperCase()),11,C1)}),128)),r("button",h1,[p(p1)])])):M("",!0)}},w1=d(g1,[["__scopeId","data-v-3ab4f7e5"]]);function w(o,s){if(o.meta)return{...o,data:o.data.map(t=>w(t,s))};if(o.attributes){const t={};return s.forEach(n=>{var _;return t[n]=(_=o.attributes)==null?void 0:_[n]}),t}const e={};return s==null||s.forEach(t=>e[t]=o==null?void 0:o[t]),e}const y1={async getServers(){var o,s;try{const e=await R("/api/servers",{params:{"populate[rooms][populate]":"users","pagination[limit]":100}});l.servers=(s=(o=w(e,["id","name","rooms"]))==null?void 0:o.data)==null?void 0:s.map(t=>({...t,rooms:t.rooms.map(n=>{var i;const _=w(n,["id","name","users"]);return{..._,users:(i=_==null?void 0:_.users)==null?void 0:i.filter(m=>{var h;return m.id!==((h=v.user)==null?void 0:h.id)}),serverId:t.id}})}))}catch(e){throw console.log(e),e}}};const $1={class:"default-layout"},x1={class:"default-layout__servers"},S1={class:"default-layout__server"},V1={class:"default-layout__content"},M1={__name:"DefaultLayout",setup(o){const s=y(),e=k();t();async function t(){var n,_,i;if(v.jwt)await A.getMe();else{await e.push("/login");return}await y1.getServers(),l.currentServer=(n=l.servers)==null?void 0:n[0],l.currentRoom=(i=(_=l.currentServer)==null?void 0:_.rooms)==null?void 0:i[0]}return(n,_)=>{const i=L("router-view");return a(),u("div",$1,[r("div",x1,[p(w1)]),r("div",S1,[p(u1)]),r("div",V1,[c(s).name!=="meet"?(a(),f(i,{key:0},{default:B(({Component:m})=>[(a(),f(D(m)))]),_:1})):(a(),f(b,{key:c(l).currentRoom}))])])}}},D1=d(M1,[["__scopeId","data-v-8c3cf31f"]]);export{D1 as default};
