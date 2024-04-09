"use strict";(self.webpackChunkveersky_support=self.webpackChunkveersky_support||[]).push([[970],{6491:(e,s,a)=>{a.d(s,{A:()=>i});var t=a(1460);const i={getUser:()=>t.A.get("/user/me"),getReportList:(e,s,a)=>{const i={status:e,type:s};return a&&(i.searchTerm=a),t.A.post("/support/reports",i)},fetchDetailsByReportId:e=>{let s="/support/reports/:reportId".replace(":reportId",e.toString());return t.A.get(s)},saveReport:(e,s)=>{const a={action:s.action};return s.comments&&(a.comments=s.comments),t.A.put("/support/reports",{reportId:e,attachments:a})},getCommentsByPostId:e=>t.A.get("/comments",{params:{postId:e}}),getUserById:e=>t.A.get("support/profile",{params:{userId:e}}),getUserList:e=>t.A.post("/user/list",{ids:e})}},9034:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(189),i=a(2505),l=a(579);const r=e=>{const s=e.images.slice(0,5);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"image-gallery",children:s.map(((e,a)=>(0,l.jsxs)("div",{style:{position:"relative"},children:[(0,l.jsx)("img",{src:e.url,alt:"Image ".concat(a),onClick:()=>{t.A.createPreviewPopUp({headerName:"",attachments:s,previewSong:null})},style:{...5===s.length&&a==s.length-1&&{opacity:.5}}}),5===s.length&&a==s.length-1&&(0,l.jsx)("div",{className:"plus-icon",children:(0,l.jsx)(i.A,{})})]},a)))})})}},6031:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(1020),i=a(5043),l=a(579);const r=e=>{let{open:s,anchorEl:a,closePopover:r,configData:n,selectedData:c}=e;const[o,d]=(0,i.useState)([{value:0,displayName:""}]);(0,i.useEffect)((()=>{d(n)}),[]);return(0,l.jsx)(t.Ay,{id:"id",open:s,anchorEl:a,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},classes:{paper:"popover_content"},children:(0,l.jsx)("div",{className:"moreOptions",children:(0,l.jsx)("ul",{className:"list-Container",children:o.map(((e,s)=>(0,l.jsx)("li",{className:"list-item",onClick:()=>(e=>{c(e),r()})(e),children:e.displayName},s)))})})})}},7630:(e,s,a)=>{a.d(s,{A:()=>x});var t=a(5865),i=a(1045),l=a(8903),r=a(3845),n=a(5043),c=a(6491),o=a(5346),d=a(2200),m=a(6446),u=a(7121),h=a(579);new o.Vy;const p=[{id:0,value:"Posts"},{text:1,value:"Briefcase"},{text:2,value:"Interests"}],v=[{text:0,value:"Account reported"},{text:1,value:"Account warnings"},{text:2,value:"Reports raised"}],x=e=>{var s;const[a,o]=(0,n.useState)({id:0,email:"",name:"",displayName:"",profilePic:"",briefcaseCount:0,interests:[],interestsCount:0,postsCount:0,status:""}),[x,j]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{e.id&&c.A.getUserById(e.id).then((e=>{o(e),j(!1)})).catch((()=>{}))}),[]),(0,h.jsx)(h.Fragment,{children:x?(0,h.jsxs)("div",{children:[(0,h.jsxs)(m.A,{children:[(0,h.jsx)(u.A,{animation:"wave",style:{height:40}}),(0,h.jsxs)("div",{style:{display:"flex",marginTop:30},children:[(0,h.jsx)(u.A,{variant:"circular",width:120,height:120}),(0,h.jsxs)("div",{style:{width:"70%",marginLeft:20,alignContent:"center"},children:[(0,h.jsx)(u.A,{style:{flexGrow:1,height:40}}),(0,h.jsx)(u.A,{style:{flexGrow:1,height:20}})]})]})]}),(0,h.jsx)(m.A,{children:(0,h.jsx)(u.A,{variant:"rectangular",width:"100%",height:300,sx:{marginTop:"5%"}})})]}):(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"header",children:(0,h.jsx)(t.A,{className:"semiBold-22 header-style",children:"User Profile Details"})}),(0,h.jsxs)("div",{className:"user_profile",children:[(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)(i.A,{sx:{width:"120px",height:"120px"},alt:null===a||void 0===a?void 0:a.name,src:null===a||void 0===a?void 0:a.profilePic}),(0,h.jsx)(m.A,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{width:1},children:p.map(((e,s)=>(0,h.jsx)(m.A,{display:"flex",alignItems:"center",justifyContent:"center",gridColumn:"span 1",children:(0,h.jsxs)(m.A,{sx:{width:1,borderRight:s+1===p.length?"unset":"0.5px solid rgba(142, 142, 142, 0.15)"},display:"flex",flexDirection:"column",alignItems:"center",children:[(0,h.jsx)(t.A,{className:"popularity_count",children:0==s?null===a||void 0===a?void 0:a.postsCount:1==s?null===a||void 0===a?void 0:a.briefcaseCount:2==s?null===a||void 0===a?void 0:a.interestsCount:""}),(0,h.jsx)(t.A,{className:"popularity_text",children:e.value})]})},s)))})]}),(0,h.jsxs)(l.Ay,{container:!0,direction:"column",rowSpacing:1.5,rowGap:.5,children:[(0,h.jsx)(l.Ay,{item:!0,children:(0,h.jsx)(t.A,{className:"regular-22",children:null!==(s=null===a||void 0===a?void 0:a.displayName)&&void 0!==s?s:null===a||void 0===a?void 0:a.name})}),null!==a&&void 0!==a&&a.displayLocationName?(0,h.jsxs)(l.Ay,{alignItems:"center",direction:"row",style:{display:"flex"},children:[(0,h.jsx)(d.A,{className:"pin"}),(0,h.jsx)(t.A,{className:"pin_name",children:null===a||void 0===a?void 0:a.displayLocationName})]}):""]}),(0,h.jsx)(m.A,{sx:{width:"100%"},children:(0,h.jsxs)(l.Ay,{container:!0,direction:"column",rowGap:1.5,children:[(0,h.jsx)(l.Ay,{item:!0,xs:!0,children:(0,h.jsx)(t.A,{className:"pin_name",children:null===a||void 0===a?void 0:a.status})}),(0,h.jsx)(l.Ay,{item:!0,xs:!0,children:null===a||void 0===a?void 0:a.interests.map(((e,s)=>(0,h.jsx)(r.A,{sx:{marginRight:1.5,width:"fit-content",background:"var(--senary-color)",borderRadius:"5px",boxShadow:"2px 2px 4px 0px #00000033"},className:"chip_text",label:e},s)))})]})})]}),(0,h.jsxs)(l.Ay,{container:!0,direction:"column",sx:{padding:"0 14px"},rowGap:"10px",children:[(0,h.jsx)(l.Ay,{item:!0,children:(0,h.jsx)(t.A,{className:"regular-22",children:"Other Details"})}),(0,h.jsx)(l.Ay,{item:!0,width:"100px",height:"1px",bgcolor:"var(--tertiary-color)"}),(0,h.jsx)(l.Ay,{container:!0,sx:{width:1},display:"grid",direction:"row",gridTemplateColumns:"repeat(3, 1fr)",children:v.map(((e,s)=>{var i,l,r;return(0,h.jsxs)(m.A,{gridColumn:"span 1",children:[(0,h.jsxs)(t.A,{className:"details_text",children:[e.value,":"]}),(0,h.jsx)(t.A,{className:"details_value",children:0==s?"".concat(null===a||void 0===a||null===(i=a.otherDetails)||void 0===i?void 0:i.accountReported," reports"):1==s?"".concat(null===a||void 0===a||null===(l=a.otherDetails)||void 0===l?void 0:l.accountWarnings," warnings"):2==s?"".concat(null===a||void 0===a||null===(r=a.otherDetails)||void 0===r?void 0:r.accountRaised," reports"):0})]})}))})]})]})})}},6226:(e,s,a)=>{a.d(s,{A:()=>i});var t=a(579);const i=function(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"button-container button-container",children:(0,t.jsx)("button",{className:"button-submit ".concat(e.isDisabled?"inactive":""," medium-18"),disabled:e.isDisabled,onClick:s=>(s=>{e.click(s)})(s),children:e.children})})})}},697:(e,s,a)=>{a.d(s,{A:()=>m});var t=a(5043);const i=a.p+"static/media/Shape.f320bb928ce9f8611ee274981b708607.svg";var l=a(4802),r=a(579);const n=e=>{let{changeHandler:s}=e;const[a,n]=(0,t.useState)("");(0,t.useEffect)((()=>{const e=setTimeout((()=>{s(a)}),1e3);return()=>clearTimeout(e)}),[a,1e3]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"search",children:[(0,r.jsx)("input",{placeholder:"Search",className:"search-container",value:a,onChange:e=>{n(e.target.value)}}),(0,r.jsx)("img",{className:"lensIcon",src:i}),(0,r.jsx)(l.A,{className:"closeIcon",onClick:function(e){n("")}})]})})};var c=a(6446),o=a(7121),d=a(1045);const m=e=>{let{onCellClick:s,handleSearch:a,userList:i,isLoading:l}=e;const[m,u]=(0,t.useState)(0);return(0,t.useEffect)((()=>{var e,s;u(null!==(e=null===(s=i[0])||void 0===s?void 0:s.id)&&void 0!==e?e:void 0)}),[i]),(0,r.jsx)(r.Fragment,{children:l?(0,r.jsxs)(c.A,{children:[(0,r.jsx)(o.A,{animation:"wave",style:{height:10}}),(0,r.jsx)(o.A,{animation:"wave"}),(0,r.jsx)(o.A,{animation:"wave"}),(0,r.jsx)(o.A,{animation:!1})]}):(0,r.jsxs)("div",{className:"report-list",children:[(0,r.jsx)(n,{changeHandler:e=>{a(e)}}),i.map(((e,a)=>{var t;return(0,r.jsx)("div",{className:"list-cell ".concat(m===e.id?"highlight":""),children:(0,r.jsx)("div",{className:"list-items",onClick:a=>{return t=e.id,s(t),void u(t);var t},children:(0,r.jsxs)("div",{className:"list-content",children:[(0,r.jsx)(d.A,{className:"report-list-profile",src:e.profile_pic}),(0,r.jsxs)("div",{className:"query-container",children:[(0,r.jsx)("label",{className:"regular-18 font-color",children:(null!==(t=e.display_name)&&void 0!==t?t:e.name)+" - #"+e.id}),(0,r.jsx)("label",{className:"regular-14 lite-color",children:e.question})]})]})})},a)}))]})})}},7285:(e,s,a)=>{a.d(s,{n$:()=>t,o7:()=>i,wz:()=>l,y9:()=>r});let t=function(e){return e[e.Active=0]="Active",e[e.Appealed=1]="Appealed",e[e.Completed=2]="Completed",e}({}),i=function(e){return e.image="image",e.video="video",e}({}),l=function(e){return e.social="social",e.repost="repost",e}({}),r=function(e){return e[e.report=1]="report",e[e.order=2]="order",e}({})},5970:(e,s,a)=>{a.r(s),a.d(s,{ShipmentSupport:()=>K,default:()=>Y});var t=a(5043),i=a(697),l=a(1045),r=a(8082),n=a(3003),c=a(6031),o=a(7362),d=a(7630),m=a(5865);var u=a(1460);const h={getOrderDetailsById:e=>u.A.get("".concat("/support/order/").concat(e)),trackPackage:e=>u.A.get("/shipengine/track",{params:{itemId:e}}),getOrderReportList:(e,s,a)=>{const t={status:e,type:s};return a&&(t.searchTerm=a),u.A.post("/support/reports",t)},initiateRefund:e=>u.A.put("/orders/transfer_amount",e)};var p=a(5346),v=a(6446),x=a(7121),j=a(9974),g=a(9034);let A=function(e){return e.itemName="Item name",e.itemCondition="Item condition",e.itemCost="Cost",e.seller="seller",e.paymentMethod="Payment",e.carrier="carrier",e.shipmentMethod="Shipment method",e}({}),_=function(e){return e.pickUp="Pickup",e.delivery="Delivery",e.eta="ETA",e.status="Status",e.trackId="Track ID",e}({});var y=a(579);const N=()=>{const e=(0,t.useCallback)((e=>{const s="mailto:".concat(e);window.open(s)}),[]),[s,a]=(0,t.useState)(null);(0,t.useEffect)((()=>{i()}),[]);const i=()=>{h.getOrderDetailsById(7678).then((e=>{const s=e.map((e=>({...e,productDetails:l(e)})));a(s)})).catch((e=>{p.vF.error(e),a(null)}))};function l(e){return j.Zm.map((s=>({name:s,value:e[s]})))}return(0,y.jsx)(y.Fragment,{children:s?s.map(((s,a)=>(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:"product_detail_header_container",children:[(0,y.jsxs)("label",{className:"product_detail_secondary_header",children:["Product ",a+1]}),s.email&&(0,y.jsx)("button",{className:"send_mail_button",onClick:()=>{var a;(a=s.email)&&e(a)},children:"Send Mail"})]}),(0,y.jsxs)("div",{className:"prodct_detail_body",children:[(0,y.jsx)("div",{className:"product_grid_container",children:s.productDetails&&s.productDetails.map(((e,s)=>{var a;return(0,y.jsxs)("div",{className:"product_grid_item",children:[(0,y.jsxs)("label",{className:"product_details_name",children:[A[e.name]||e.name,":"]}),(0,y.jsx)("br",{}),(0,y.jsx)("div",{className:"p-t-5 ",children:(0,y.jsx)("label",{className:"prduct_detail_value",children:null!==(a=e.value)&&void 0!==a?a:"--"})})]},s)}))}),s.sellerAckData&&(0,y.jsxs)("div",{className:"seller_note",children:[(0,y.jsx)("label",{className:"product_details_name",children:"Seller's Note:"}),(0,y.jsx)("p",{className:"note_description",children:s.sellerAckData.notes}),(0,y.jsx)("div",{children:(0,y.jsx)(g.A,{images:s.sellerAckData.attachment})})]},a)]})]},s.itemId))):(0,y.jsx)("div",{children:(0,y.jsxs)(v.A,{children:[(0,y.jsx)(x.A,{animation:"wave",style:{height:50}}),(0,y.jsx)(x.A,{animation:"wave",style:{height:248}}),(0,y.jsx)(x.A,{animation:"wave",style:{height:50}}),(0,y.jsx)(x.A,{animation:"wave",style:{height:248}})]})})})},f=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"header",children:(0,y.jsx)(m.A,{className:"semiBold-22 header-style",children:"Order Details"})}),(0,y.jsx)("div",{children:(0,y.jsx)(N,{})})]});var w=a(701),b=a(8988),C=a(8293);const D=e=>{const[s,a]=(0,t.useState)([]);return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(v.A,{sx:{flexGrow:1,backgroundColor:"var(--secondary-color)",borderRadius:4},children:(0,y.jsxs)(w.A,{multiple:e.multiple,className:"select",classes:{root:"roots",outlined:"outline"},value:s,onChange:s=>{const{target:{value:t}}=s;var i;(t&&a(t),Array.isArray(t))?e.onSelect(null!==t&&void 0!==t?t:null):e.onSelect(null!==(i=parseInt(t,10))&&void 0!==i?i:null)},IconComponent:C.A,renderValue:s=>(s=>{return Array.isArray(s)&&0==s.length?"Select":Array.isArray(s)?e.options.filter((e=>s.includes(e.value))).map((e=>e.displayName)).join(", "):"number"==typeof s&&"number"==typeof s&&null!==(a=null===(t=e.options.find((e=>e.value===s)))||void 0===t?void 0:t.displayName)&&void 0!==a?a:"";var a,t})(s),displayEmpty:!0,variant:"outlined",children:[(0,y.jsx)(b.A,{disabled:!0,value:"",children:(0,y.jsx)("em",{children:"Select"})}),e.options.map(((e,s)=>(0,y.jsx)(b.A,{value:e.value,children:e.displayName},s)))]})})})};var S=a(6226),k=a(3855);const B=e=>{const s=(0,n.d4)((e=>e.order.productDetails)),[a,i]=(0,t.useState)([]),[l,r]=(0,t.useState)(null);(0,t.useEffect)((()=>{const e=s.flatMap((e=>{var s,a;return{value:null!==(s=e.fulfilmentId)&&void 0!==s?s:0,displayName:null!==(a=e.itemName)&&void 0!==a?a:""}}));Array.isArray(e)&&i(e)}),[s]);const c=e=>{s&&r(s.find((s=>s.fulfilmentId==e)))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"header",children:(0,y.jsx)(m.A,{className:"semiBold-22 header-style",children:"Track Shipment"})}),(0,y.jsx)("p",{className:"input-label semiBold-18 font-color",children:"Select the product for tracking: "}),(0,y.jsx)("div",{className:"input-container",children:(0,y.jsx)(D,{options:a,onSelect:()=>c})}),(0,y.jsx)("div",{className:"button-container",children:(0,y.jsx)(S.A,{click:()=>{l?(o.A.closePopUp(),l&&e.trackClick(l)):k.A.showToaster({message:"Select product for tracking",severity:"warning"})},children:"Track"})})]})},I=()=>{const e=(0,n.d4)((e=>e.order.productDetails)),[s,a]=(0,t.useState)([]);var i,l;const r=[{value:1,displayName:"Seller"},{value:2,displayName:"Buyer"}];(0,t.useEffect)((()=>{const s=e.map((e=>{var s,a;return{value:null!==(s=e.fulfilmentId)&&void 0!==s?s:0,displayName:null!==(a=e.itemName)&&void 0!==a?a:""}}));Array.isArray(s)&&a(s)}),[e]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"header",children:(0,y.jsx)(m.A,{className:"semiBold-22 header-style",children:"Initiate Refund"})}),(0,y.jsx)("p",{className:"input-label semiBold-18 font-color",children:"Select the product for refund: "}),(0,y.jsx)("div",{className:"input-container",children:(0,y.jsx)(D,{options:s,onSelect:s=>{if(Array.isArray(s))e&&(i=e.filter((e=>s.includes(e.fulfilmentId))).map((e=>e.itemId)));else if(s){var a,t;e&&(i=null!==(a=null===(t=e.find((e=>e.fulfilmentId==s)))||void 0===t?void 0:t.itemId)&&void 0!==a?a:null)}},multiple:!0})}),(0,y.jsx)("p",{className:"input-label semiBold-18 font-color",children:"Select user: "}),(0,y.jsx)("div",{className:"input-container",children:(0,y.jsx)(D,{options:r,onSelect:e=>(e=>{var s;l=null!==(s=r.find((s=>s.value==e)))&&void 0!==s?s:null})(e)})}),(0,y.jsx)("div",{className:"button-container",children:(0,y.jsx)("button",{className:"initiate_button",onClick:()=>{var e,s,a={itemId:i};if(Array.isArray(i)){var t;if(0==i.length||null===(t=l)||void 0===t||!t.value)return void k.A.showToaster({message:"To Initiate refund you need to select product and user type",severity:"warning"});a.itemId=i}else{var r;if(!i||null===(r=l)||void 0===r||!r.value)return void k.A.showToaster({message:"To Initiate refund you need to select product and user type",severity:"warning"})}1==(null===(e=l)||void 0===e?void 0:e.value)?a.toSeller=!0:2==(null===(s=l)||void 0===s?void 0:s.value)&&(a.toBuyer=!0),h.initiateRefund(a).then((e=>{var s;k.A.showToaster({message:null!==(s=e.successFully)&&void 0!==s?s:"",severity:"success"})})).catch((e=>{p.vF.error(e)}))},children:"Initiate"})})]})},E=JSON.parse('[{"R1":{"notes":"Product successfully delivered.","attachment":[{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/282/69A18816-2765-4BA7-BE72-968A23E4D1CF.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/2301/43B82C49-D254-4A47-B929-4E8563D450F0.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/2301/8366D3F3-28F9-481A-A39B-AB5AB44AEEB8.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/282/E068EAA8-E568-4C77-AD3B-40C9CBD888A1.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/282/69A18816-2765-4BA7-BE72-968A23E4D1CF.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/282/69A18816-2765-4BA7-BE72-968A23E4D1CF.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/282/E068EAA8-E568-4C77-AD3B-40C9CBD888A1.jpg","type":"image"}]},"xU":{"notes":"Product successfully delivered.","attachment":[{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/282/69A18816-2765-4BA7-BE72-968A23E4D1CF.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/2301/43B82C49-D254-4A47-B929-4E8563D450F0.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/2301/8366D3F3-28F9-481A-A39B-AB5AB44AEEB8.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/282/E068EAA8-E568-4C77-AD3B-40C9CBD888A1.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/282/69A18816-2765-4BA7-BE72-968A23E4D1CF.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/282/69A18816-2765-4BA7-BE72-968A23E4D1CF.jpg","type":"image"},{"url":"https://s3.us-east-2.amazonaws.com/images.media.vsdev/public/282/E068EAA8-E568-4C77-AD3B-40C9CBD888A1.jpg","type":"image"}]}}]'),F=e=>{var s,a;const i=(0,n.d4)((e=>e.flaggedReport.data)),{user:m}=i,[u,h]=(0,t.useState)(!1),[p,v]=(0,t.useState)(null),x=(0,n.d4)((e=>e.order.data)),j=()=>{e.initiateRefundClick()};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"orderView",children:[(0,y.jsxs)("div",{className:"order_content",children:[(0,y.jsxs)("div",{className:"profile",children:[(0,y.jsxs)("div",{className:"detail",children:[(0,y.jsx)(l.A,{className:"profileIcon",src:null!==(s=null===x||void 0===x?void 0:x.profile_pic)&&void 0!==s?s:"",alt:null===x||void 0===x?void 0:x.name}),(0,y.jsx)("p",{className:"name regular-18",children:null!==(a=null===x||void 0===x?void 0:x.display_name)&&void 0!==a?a:null===x||void 0===x?void 0:x.name})]}),(0,y.jsx)("div",{onClick:e=>{return s=e,h(!0),void v(s.currentTarget);var s},children:(0,y.jsx)(r.A,{className:"three_dots"})})]}),(0,y.jsx)("div",{className:"order_cell",children:(0,y.jsxs)("div",{className:"order_detail_container",children:[(0,y.jsxs)("p",{className:"option regular-18",children:[(0,y.jsx)("span",{className:"primary_text_color",children:"Query: "}),(0,y.jsx)("span",{className:"quinary_text_color",children:null===x||void 0===x?void 0:x.question})]}),!(null!==x&&void 0!==x&&x.attachment)&&(0,y.jsxs)("div",{className:"order_attachment_container",children:[(0,y.jsx)("label",{children:"Attachments:"}),(0,y.jsx)(g.A,{images:E[0].R1.attachment})]})]})})]}),(0,y.jsx)("div",{className:"order_action_container",children:(0,y.jsxs)("div",{className:"order_action_grid",children:[(0,y.jsx)("div",{className:"button-wrapper",children:(0,y.jsx)(S.A,{click:()=>{o.A.createPopUp({compoent:(0,y.jsx)(B,{trackClick:s=>e.trackShipmentClick(!0,s)}),headerName:"",header:!1,footer:!1,width:738,height:350,class:"main_content",showCloseIcon:!0})},children:"Track Shipment"})}),(0,y.jsx)("div",{className:"button-wrapper",children:(0,y.jsx)(S.A,{click:()=>{o.A.createPopUp({compoent:(0,y.jsx)(I,{}),headerName:"",header:!1,footer:!1,width:738,height:418,class:"main_content",showCloseIcon:!0},j)},children:"Initiate Payment"})}),(0,y.jsx)("div",{className:"button-wrapper",children:(0,y.jsx)(S.A,{click:()=>{},children:"Initiate Insurance"})})]})})]}),(0,y.jsx)(c.A,{open:u,anchorEl:p,closePopover:()=>{h(!1)},configData:[{value:1,displayName:"View profile"},{value:2,displayName:"Show Order Details"}],selectedData:e=>{switch(e.value){case 1:o.A.createPopUp({compoent:(0,y.jsx)(d.A,{id:m.id}),headerName:"",header:!1,footer:!1,width:580,height:560,class:"main_content",showCloseIcon:!0});break;case 2:o.A.createPopUp({compoent:(0,y.jsx)(f,{}),headerName:"",header:!1,footer:!1,width:820,height:760,class:"main_content",showCloseIcon:!0})}}})]})};var P=a(8903),T=a(7450),R=a(7734),L=a(5078),O=a(2299),U=a(4992);const z=e=>{var s,a,t;return(0,y.jsx)("div",{className:"stepper_container",children:(0,y.jsx)(T.A,{classes:{root:"stepper_root"},activeStep:null===e||void 0===e||null===(s=e.trackingData)||void 0===s?void 0:s.fill,orientation:"vertical",connector:(0,y.jsx)(R.A,{classes:{lineVertical:"lineVertical",completed:"completed_line",root:"root_connector"}}),children:null===e||void 0===e||null===(a=e.trackingData)||void 0===a||null===(t=a.trackInfo)||void 0===t?void 0:t.map(((e,s)=>{return(0,y.jsx)(L.A,{classes:{root:"step_root"},children:(0,y.jsx)(O.A,{icon:(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:"stepperIcon",children:[(0,y.jsx)(U.A,{classes:{root:"icon_root"}}),(0,y.jsx)("div",{className:"outer_circle"})]})}),classes:{vertical:"vertical_label",labelContainer:"label_container",iconContainer:"stepper_icon"},children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m.A,{className:"regular-18 font-color",children:e.status_description}),(0,y.jsx)(m.A,{className:"regular-18 subText_color",children:e.carrier_status_description}),(0,y.jsxs)(m.A,{className:"regular-18 subText_color",children:[e.city_locality?"".concat(e.city_locality,", "):"",e.state_province?"".concat(e.state_province,", "):"",e.country_code?"".concat(e.country_code):"",e.postal_code?" - ".concat(e.postal_code):"."]}),(0,y.jsx)(m.A,{className:"regular-18 subText_color date_view",children:(a=e.occurred_at,new Date(a).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0}))})]})})},s);var a}))})})};const q=a.p+"static/media/image_placeholder.cdaa872c22e0d1f8ad96a3c4c1ee6c01.svg";function V(e,s){var a="";return e&&(a+=e),s&&(a+=s),a}function G(e){const s=new Date(e),a={year:"numeric",month:"short",day:"2-digit",timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone};return s.toLocaleDateString("en-US",a)}const M=e=>{var s,a,i,l,r,n;const[c,o]=(0,t.useState)(null);function d(e){return j.Zm.map((s=>({name:s,value:e[s]})))}function m(e){if(e){return j.ir.map((s=>{var a;return{name:s,value:"pickUp"!=s?e[s]:G(null!==(a=e[s])&&void 0!==a?a:"")}}))}return null}return(0,t.useEffect)((()=>{e.product&&function(e){const s={...e,productDetails:d(e),customPackageDetails:m(e.packageDetails)};o(s)}(e.product)}),[e]),(0,y.jsx)("div",{className:"shipment_details_container",children:(0,y.jsxs)("div",{className:"shipment_grid_c_container",children:[(0,y.jsxs)(P.Ay,{container:!0,columnSpacing:3,children:[(0,y.jsx)(P.Ay,{item:!0,md:12,lg:5,xl:5,children:(null===c||void 0===c?void 0:c.shipFrom)&&(0,y.jsxs)("div",{className:"ship_from_content",children:[(0,y.jsx)("label",{className:"ship_from_user_name",children:"Ship From"}),(0,y.jsx)("img",{src:null!==c&&void 0!==c&&c.shipFrom.image?null===c||void 0===c?void 0:c.shipFrom.image:q,className:"shipment_profile_content"}),(0,y.jsx)("label",{className:"ship_user_name_c",children:c.shipFrom.name}),(0,y.jsx)("p",{className:"address_text_c",children:V(c.shipFrom.addressLine1,c.shipFrom.addressLine2)})]})}),(0,y.jsx)(P.Ay,{item:!0,md:0,lg:2,xl:2,children:(0,y.jsx)("div",{className:"seperator_container",children:(0,y.jsx)("div",{className:"shipment_seperator"})})}),(0,y.jsx)(P.Ay,{item:!0,md:12,lg:5,xl:5,children:(null===c||void 0===c?void 0:c.shipTo)&&(0,y.jsxs)("div",{className:"ship_to_content",children:[(0,y.jsx)("label",{className:"ship_to_user_name",children:"Ship To"}),(0,y.jsx)("img",{src:null!==c&&void 0!==c&&c.shipTo.image?null===c||void 0===c?void 0:c.shipTo.image:q,className:"shipment_profile_content"}),(0,y.jsx)("label",{className:"ship_user_name_c",children:c.shipTo.name}),(0,y.jsx)("p",{className:"address_text_c",children:V(c.shipTo.addressLine1,c.shipTo.addressLine2)})]})})]}),(0,y.jsx)("div",{children:(null===c||void 0===c?void 0:c.productDetails)&&(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"product_detail_header_container",children:(0,y.jsx)("label",{className:"product_detail_secondary_header",children:"Order Details"})}),(0,y.jsx)("div",{className:"prodct_detail_body",children:(0,y.jsx)("div",{className:"product_grid_container",children:c.productDetails&&c.productDetails.map(((e,s)=>(0,y.jsxs)("div",{className:"product_grid_item",children:[(0,y.jsxs)("label",{className:"product_details_name",children:[A[e.name]||e.name,":"]}),(0,y.jsx)("br",{}),(0,y.jsx)("div",{className:"p-t-5",children:(0,y.jsx)("label",{className:"prduct_detail_value",children:e.value})})]},s)))})})]})}),(0,y.jsx)("div",{children:(null===c||void 0===c?void 0:c.customPackageDetails)&&(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"product_detail_header_container",children:(0,y.jsx)("label",{className:"product_detail_secondary_header",children:"Package Details"})}),(0,y.jsx)("div",{className:"prodct_detail_body",children:(0,y.jsx)("div",{className:"product_grid_container",children:c.customPackageDetails&&c.customPackageDetails.map(((e,s)=>{var a;return(0,y.jsxs)("div",{className:"product_grid_item",children:[(0,y.jsxs)("label",{className:"product_details_name",children:[_[e.name]||e.name,":"]}),(0,y.jsx)("br",{}),(0,y.jsx)("div",{className:"p-t-5",children:(0,y.jsx)("label",{className:"prduct_detail_value",children:null!==(a=e.value)&&void 0!==a?a:"--"})})]},s)}))})})]})}),(E[0].R1||E[0].xU)&&(0,y.jsxs)("div",{className:"shipment_note",children:[(0,y.jsx)("div",{className:"product_detail_header_container",children:(0,y.jsx)("label",{className:"product_detail_secondary_header",children:"Documents"})}),(0,y.jsx)("div",{className:"prodct_detail_body",children:(0,y.jsxs)(P.Ay,{container:!0,columnSpacing:2,children:[(0,y.jsxs)(P.Ay,{item:!0,md:12,lg:6,xl:6,children:[(0,y.jsx)("label",{className:"product_details_name",children:"Seller's Note:"}),(0,y.jsx)("p",{className:"note_description",children:null===(s=E[0].R1)||void 0===s?void 0:s.notes}),(null===(a=E[0].R1)||void 0===a?void 0:a.attachment)&&(0,y.jsx)(g.A,{images:null===(i=E[0].R1)||void 0===i?void 0:i.attachment})]}),(0,y.jsxs)(P.Ay,{item:!0,md:12,lg:6,xl:6,children:[(0,y.jsx)("label",{className:"product_details_name",children:"Buyer's Note:"}),(0,y.jsx)("p",{className:"note_description",children:null===(l=E[0].xU)||void 0===l?void 0:l.notes}),(null===(r=E[0].xU)||void 0===r?void 0:r.attachment)&&(0,y.jsx)(g.A,{images:null===(n=E[0].xU)||void 0===n?void 0:n.attachment})]})]})})]})]})})};var Z=a(9120);const H=new p.Vy,J=e=>{const[s,a]=(0,t.useState)({});(0,n.d4)((e=>e.order.productDetails));(0,t.useEffect)((()=>{var s;s=e.fulfilment,h.trackPackage(s).then((e=>{a(e)})).catch((e=>{H.error(null===e||void 0===e?void 0:e.message)}))}),[]);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(P.Ay,{container:!0,columnSpacing:2,height:1,children:[(0,y.jsxs)(P.Ay,{item:!0,md:7,lg:8,xl:8,className:"shipment_container",children:[(0,y.jsxs)(v.A,{sx:{display:"flex"},gap:"20px",children:[(0,y.jsxs)("div",{className:"back_navigation",onClick:()=>{e.navigateToBack(!1)},children:[(0,y.jsx)(Z.A,{style:{marginBottom:"5px"}}),(0,y.jsx)(m.A,{style:{fontStyle:"italic"},className:"page-header",children:"Back"})]}),(0,y.jsx)(m.A,{className:"page-header",children:"Shipment Overview"})]}),(0,y.jsx)(P.Ay,{container:!0,className:"shipment_overview_content",children:(0,y.jsx)(M,{product:e.producDetails})})]}),(0,y.jsxs)(P.Ay,{item:!0,md:5,lg:4,xl:4,className:"tracking_overview",children:[(0,y.jsx)(v.A,{children:(0,y.jsx)(m.A,{style:{fontStyle:"italic"},className:"page-header",children:"Routing Information"})}),(0,y.jsx)(P.Ay,{container:!0,className:"tracking_main",children:(0,y.jsx)(z,{trackingData:s})}),(0,y.jsx)("div",{className:"fade_effect"})]})]})})};var Q=a(3620),W=a(7285),$=a(9119);class K extends t.Component{constructor(e){super(e),this.state={isLoading:!1,isShipmentPreview:!1,orderList:[],showReport:!0,productDetails:null},this.showShipmentPreview=this.showShipmentPreview.bind(this)}componentDidMount(){this.fetchRequestList()}onSearch(e){this.props.saveOrder(null),this.fetchRequestList(e)}handleCellClick(e){}initiateRefund(){}showShipmentPreview(e,s){s&&this.setState({isShipmentPreview:e,productDetails:s}),this.setState({isShipmentPreview:e})}fetchRequestList(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Q.A.showLoader(!0);const a=W.y9.order;h.getOrderReportList(s,a,e).then((e=>{e.result.length&&this.saveOrderToRedux(e.result[0]),this.setState((s=>{var a;return{...s,orderList:e.result,showOrder:e&&(null===(a=e.result)||void 0===a?void 0:a.length)}}),(()=>{Q.A.showLoader(!1)}))})).catch((e=>{p.vF.debug(e),Q.A.showLoader(!1)}))}saveOrderToRedux(e){this.props.saveOrder&&this.props.saveOrder(e),this.getOrderDetails(7678)}getOrderDetails(e){h.getOrderDetailsById(e).then((e=>{this.props.saveProduct(e)})).catch((e=>{p.vF.error(e)}))}render(){return(0,y.jsx)(y.Fragment,{children:this.state.isShipmentPreview?(0,y.jsx)(J,{navigateToBack:e=>this.showShipmentPreview(e),fulfilment:1207,producDetails:this.state.productDetails}):(0,y.jsxs)("div",{className:"order_container",children:[(0,y.jsx)(i.A,{handleSearch:e=>this.onSearch(e),userList:this.state.orderList,onCellClick:e=>this.handleCellClick(e),isLoading:this.state.isLoading}),(0,y.jsx)(F,{trackShipmentClick:(e,s)=>this.showShipmentPreview(e,s),initiateRefundClick:this.initiateRefund})]})})}}const X={saveOrder:$.EB,saveProduct:$.Tu},Y=(0,n.Ng)((e=>({reportDetail:e.data})),X)(K)}}]);
//# sourceMappingURL=970.e878440b.chunk.js.map