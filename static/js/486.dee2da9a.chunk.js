"use strict";(self.webpackChunkveersky_support=self.webpackChunkveersky_support||[]).push([[486],{2431:(e,s,t)=>{t.d(s,{A:()=>i});t(5043);const i=t.p+"static/media/arrow.5bf555d7dc1150a93a0ff08befa46dbb.svg"},8417:(e,s,t)=>{t.d(s,{A:()=>i});t(5043);const i=t.p+"static/media/smiley.b003abd84f35e4dcba9c83778c79d826.svg"},6491:(e,s,t)=>{t.d(s,{A:()=>a});var i=t(1460);const a={getUser:()=>i.A.get("/user/me"),getReportList:(e,s,t)=>{const a={status:e,type:s};return t&&(a.searchTerm=t),i.A.post("/support/reports",a)},fetchDetailsByReportId:e=>{let s="/support/reports/:reportId".replace(":reportId",e.toString());return i.A.get(s)},saveReport:(e,s)=>{const t={action:s.action};return s.comments&&(t.comments=s.comments),i.A.put("/support/reports",{reportId:e,attachments:t})},getCommentsByPostId:e=>i.A.get("/comments",{params:{postId:e}}),getUserById:e=>i.A.get("support/profile",{params:{userId:e}}),getUserList:e=>i.A.post("/user/list",{ids:e})}},9034:(e,s,t)=>{t.d(s,{A:()=>l});var i=t(189),a=t(2505),n=t(579);const l=e=>{const s=e.images.slice(0,5);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"image-gallery",children:s.map(((e,t)=>(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)("img",{src:e.url,alt:"Image ".concat(t),onClick:()=>{i.A.createPreviewPopUp({headerName:"",attachments:s,previewSong:null})},style:{...5===s.length&&t==s.length-1&&{opacity:.5}}}),5===s.length&&t==s.length-1&&(0,n.jsx)("div",{className:"plus-icon",children:(0,n.jsx)(a.A,{})})]},t)))})})}},6031:(e,s,t)=>{t.d(s,{A:()=>l});var i=t(1020),a=t(5043),n=t(579);const l=e=>{let{open:s,anchorEl:t,closePopover:l,configData:r,selectedData:o}=e;const[c,d]=(0,a.useState)([{id:0,text:""}]);(0,a.useEffect)((()=>{d(r)}),[]);return(0,n.jsx)(i.Ay,{id:"id",open:s,anchorEl:t,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},classes:{paper:"popover_content"},children:(0,n.jsx)("div",{className:"moreOptions",children:(0,n.jsx)("ul",{className:"list-Container",children:c.map(((e,s)=>(0,n.jsx)("li",{className:"list-item",onClick:()=>(e=>{o(e),l()})(e),children:e.text},s)))})})})}},7630:(e,s,t)=>{t.d(s,{A:()=>v});var i=t(5865),a=t(1045),n=t(8903),l=t(3845),r=t(5043),o=t(6491),c=t(5346),d=t(2200),h=t(6446),m=t(7121),u=t(579);new c.Vy;const p=[{id:0,value:"Posts"},{text:1,value:"Briefcase"},{text:2,value:"Interests"}],x=[{text:0,value:"Account reported"},{text:1,value:"Account warnings"},{text:2,value:"Reports raised"}],v=e=>{var s;const[t,c]=(0,r.useState)({id:0,email:"",name:"",displayName:"",profilePic:"",briefcaseCount:0,intrests:[],intrestsCount:0,postsCount:0,status:""}),[v,g]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{e.id&&o.A.getUserById(e.id).then((e=>{c(e),g(!1)})).catch((()=>{}))}),[]),(0,u.jsx)(u.Fragment,{children:v?(0,u.jsxs)("div",{children:[(0,u.jsxs)(h.A,{children:[(0,u.jsx)(m.A,{animation:"wave",style:{height:40}}),(0,u.jsxs)("div",{style:{display:"flex",marginTop:30},children:[(0,u.jsx)(m.A,{variant:"circular",width:120,height:120}),(0,u.jsxs)("div",{style:{width:"70%",marginLeft:20,alignContent:"center"},children:[(0,u.jsx)(m.A,{style:{flexGrow:1,height:40}}),(0,u.jsx)(m.A,{style:{flexGrow:1,height:20}})]})]})]}),(0,u.jsx)(h.A,{children:(0,u.jsx)(m.A,{variant:"rectangular",width:"100%",height:300,sx:{marginTop:"5%"}})})]}):(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"header",children:(0,u.jsx)(i.A,{className:"semiBold-22 header-style",children:"User Profile Details"})}),(0,u.jsxs)("div",{className:"user_profile",children:[(0,u.jsxs)("div",{style:{display:"flex"},children:[(0,u.jsx)(a.A,{sx:{width:"120px",height:"120px"},alt:null===t||void 0===t?void 0:t.name,src:null===t||void 0===t?void 0:t.profilePic}),(0,u.jsx)(h.A,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{width:1},children:p.map(((e,s)=>(0,u.jsx)(h.A,{display:"flex",alignItems:"center",justifyContent:"center",gridColumn:"span 1",children:(0,u.jsxs)(h.A,{sx:{width:1,borderRight:s+1===p.length?"unset":"0.5px solid rgba(142, 142, 142, 0.15)"},display:"flex",flexDirection:"column",alignItems:"center",children:[(0,u.jsx)(i.A,{className:"popularity_count",children:0==s?null===t||void 0===t?void 0:t.postsCount:1==s?null===t||void 0===t?void 0:t.briefcaseCount:2==s?null===t||void 0===t?void 0:t.intrestsCount:""}),(0,u.jsx)(i.A,{className:"popularity_text",children:e.value})]})},s)))})]}),(0,u.jsxs)(n.Ay,{container:!0,direction:"column",rowSpacing:1.5,rowGap:.5,children:[(0,u.jsx)(n.Ay,{item:!0,children:(0,u.jsx)(i.A,{className:"regular-22",children:null!==(s=null===t||void 0===t?void 0:t.displayName)&&void 0!==s?s:null===t||void 0===t?void 0:t.name})}),null!==t&&void 0!==t&&t.displayLocationName?(0,u.jsxs)(n.Ay,{alignItems:"center",direction:"row",style:{display:"flex"},children:[(0,u.jsx)(d.A,{className:"pin"}),(0,u.jsx)(i.A,{className:"pin_name",children:null===t||void 0===t?void 0:t.displayLocationName})]}):""]}),(0,u.jsx)(h.A,{sx:{width:"100%"},children:(0,u.jsxs)(n.Ay,{container:!0,direction:"column",rowGap:1.5,children:[(0,u.jsx)(n.Ay,{item:!0,xs:!0,children:(0,u.jsx)(i.A,{className:"pin_name",children:null===t||void 0===t?void 0:t.status})}),(0,u.jsx)(n.Ay,{item:!0,xs:!0,children:null===t||void 0===t?void 0:t.intrests.map(((e,s)=>(0,u.jsx)(l.A,{sx:{marginRight:1.5,width:"fit-content",background:"var(--senary-color)",borderRadius:"5px",boxShadow:"2px 2px 4px 0px #00000033"},className:"chip_text",label:e},s)))})]})})]}),(0,u.jsxs)(n.Ay,{container:!0,direction:"column",sx:{padding:"0 14px"},rowGap:"10px",children:[(0,u.jsx)(n.Ay,{item:!0,children:(0,u.jsx)(i.A,{className:"regular-22",children:"Other Details"})}),(0,u.jsx)(n.Ay,{item:!0,width:"100px",height:"1px",bgcolor:"var(--tertiary-color)"}),(0,u.jsx)(n.Ay,{container:!0,sx:{width:1},display:"grid",direction:"row",gridTemplateColumns:"repeat(3, 1fr)",children:x.map(((e,s)=>{var a,n,l;return(0,u.jsxs)(h.A,{gridColumn:"span 1",children:[(0,u.jsxs)(i.A,{className:"details_text",children:[e.value,":"]}),(0,u.jsx)(i.A,{className:"details_value",children:0==s?"".concat(null===t||void 0===t||null===(a=t.otherDetails)||void 0===a?void 0:a.accountReported," reports"):1==s?"".concat(null===t||void 0===t||null===(n=t.otherDetails)||void 0===n?void 0:n.accountWarnings," warnings"):2==s?"".concat(null===t||void 0===t||null===(l=t.otherDetails)||void 0===l?void 0:l.accountRaised," reports"):0})]})}))})]})]})})}},6226:(e,s,t)=>{t.d(s,{A:()=>a});var i=t(579);const a=function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"button-container button-container",children:(0,i.jsx)("button",{className:"button-submit ".concat(e.isDisabled?"inactive":""," medium-18"),disabled:e.isDisabled,onClick:s=>(s=>{e.click(s)})(s),children:e.children})})})}},697:(e,s,t)=>{t.d(s,{A:()=>h});var i=t(5043);const a=t.p+"static/media/Shape.f320bb928ce9f8611ee274981b708607.svg";var n=t(4802),l=t(579);const r=e=>{let{changeHandler:s}=e;const[t,r]=(0,i.useState)("");(0,i.useEffect)((()=>{const e=setTimeout((()=>{s(t)}),1e3);return()=>clearTimeout(e)}),[t,1e3]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"search",children:[(0,l.jsx)("input",{placeholder:"Search",className:"search-container",value:t,onChange:e=>{r(e.target.value)}}),(0,l.jsx)("img",{className:"lensIcon",src:a}),(0,l.jsx)(n.A,{className:"closeIcon",onClick:function(e){r("")}})]})})};var o=t(6446),c=t(7121),d=t(1045);const h=e=>{let{onCellClick:s,handleSearch:t,userList:a,isLoading:n}=e;const[h,m]=(0,i.useState)(0);return(0,i.useEffect)((()=>{var e,s;m(null!==(e=null===(s=a[0])||void 0===s?void 0:s.id)&&void 0!==e?e:void 0)}),[a]),(0,l.jsx)(l.Fragment,{children:n?(0,l.jsxs)(o.A,{children:[(0,l.jsx)(c.A,{animation:"wave",style:{height:10}}),(0,l.jsx)(c.A,{animation:"wave"}),(0,l.jsx)(c.A,{animation:"wave"}),(0,l.jsx)(c.A,{animation:!1})]}):(0,l.jsxs)("div",{className:"report-list",children:[(0,l.jsx)(r,{changeHandler:e=>{t(e)}}),a.map(((e,t)=>{var i;return(0,l.jsx)("div",{className:"list-cell ".concat(h===e.id?"highlight":""),children:(0,l.jsx)("div",{className:"list-items",onClick:t=>{return i=e.id,s(i),void m(i);var i},children:(0,l.jsxs)("div",{className:"list-content",children:[(0,l.jsx)(d.A,{className:"report-list-profile",src:e.profile_pic}),(0,l.jsxs)("div",{className:"query-container",children:[(0,l.jsx)("label",{className:"regular-18 font-color",children:(null!==(i=e.display_name)&&void 0!==i?i:e.name)+" - #"+e.id}),(0,l.jsx)("label",{className:"regular-14 lite-color",children:e.question})]})]})})},t)}))]})})}},7285:(e,s,t)=>{t.d(s,{n$:()=>i,o7:()=>a,wz:()=>n,y9:()=>l});let i=function(e){return e[e.Active=0]="Active",e[e.Appealed=1]="Appealed",e[e.Completed=2]="Completed",e}({}),a=function(e){return e.image="image",e.video="video",e}({}),n=function(e){return e.social="social",e.repost="repost",e}({}),l=function(e){return e[e.report=1]="report",e[e.order=2]="order",e}({})},6486:(e,s,t)=>{t.r(s),t.d(s,{FlaggedReport:()=>ie,default:()=>ne});var i=t(6226),a=t(5043),n=t(579);const l=e=>{let{onSegmentClick:s,segments:t}=e;return(0,n.jsx)("div",{className:"segment-background",children:t.map(((e,t)=>(0,n.jsx)("button",{className:e.isSelected?"segment-button":"segment-button-inactive",onClick:()=>s(t),children:(0,n.jsx)("div",{className:"".concat(e.isSelected?"segment-label":"segment-label-inactive"," semiBold-18 segment_color"),children:e.name})},t)))})};var r=t(697);const o=t.p+"static/media/likes.ebdbc5b7a57cf7e2fe10949d9aeac151.svg";const c=t.p+"static/media/comments.7831a647e54c88b0095d0dc5bcbf1323.svg";const d=t.p+"static/media/repost.929672a6df48d5c1f197490fa2646282.svg";var h=t(2431),m=t(8417),u=t(3003),p=t(1045),x=t(2110),v=t(8903),g=t(5865),j=t(6446),A=t(3193),N=t(338),f=t(707),y=t(4791),b=t(138),w=t(1189),C=t(7285),_=t(8872),k=t(2167),S=t(3461),L=t(2200),R=t(6011);const P=e=>{const[s,t]=(0,a.useState)(0),[i,l]=(0,a.useState)(0),[r,o]=(0,a.useState)([b.X]),[c,d]=(0,a.useState)(!1),[h,m]=(0,a.useState)(!1);(0,a.useEffect)((()=>{o(e.attachments)}),[e.attachments]);const u=e=>{l(e),t(s+e)},p=()=>{e.click&&(d(!1),m(!1),e.click())};function x(){d((e=>!e)),m(!1)}function v(){m((e=>!e)),d(!1)}return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"image_preview_container",children:null!==r&&void 0!==r&&r.length?r.map(((t,a,l)=>{var r,o,g,j,A,N,f,y;return a===s&&t.url&&(0,n.jsxs)("div",{className:"main",children:[l.length>1&&0!==a&&(0,n.jsx)("div",{className:"left_arrow",onClick:e=>u(-1),children:(0,n.jsx)("img",{className:"arrow_icon",src:w.A,alt:"arrow"})}),(0,n.jsx)("img",{onClick:()=>p(),className:"".concat(1===i?"forward":-1===i?"backward":0," source_container"),src:(null===(r=l.at(s))||void 0===r?void 0:r.type)===C.o7.image?null===(o=l.at(s))||void 0===o?void 0:o.url:null===(g=l.at(s))||void 0===g?void 0:g.thumbnailUrl,alt:"Post image not found"},a),(null===(j=l.at(s))||void 0===j?void 0:j.type)===C.o7.video?(0,n.jsx)("div",{onClick:()=>p(),children:(0,n.jsx)(k.A,{title:"Click to play video",children:(0,n.jsx)(_.A,{className:"play_icon"})})}):"",l.length>1&&a<l.length-1?(0,n.jsx)("div",{className:"right_arrow",onClick:e=>u(1),children:(0,n.jsx)("img",{className:"arrow_icon",src:w.A,alt:"arrow"})}):"",(0,n.jsxs)("div",{className:"actions-main-container",children:[(null===(A=e.post)||void 0===A?void 0:A.taggedPeople)&&(0,n.jsx)("div",{className:"tag-container",onClick:()=>{return s=[206,69,67],d(!1),m(!1),void e.taggedPeopleTap(s);var s},children:(0,n.jsx)(S.A,{})}),(null===(N=e.post)||void 0===N?void 0:N.taggedLocation)&&(0,n.jsx)("div",{className:"location-container",onClick:x,children:(0,n.jsx)(k.A,{PopperProps:{disablePortal:!0},onClose:()=>d(!1),open:c,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:null===(f=e.post)||void 0===f?void 0:f.taggedLocation.mainText,children:(0,n.jsx)(L.A,{})})}),(null===(y=e.post)||void 0===y?void 0:y.previewSong)&&(0,n.jsx)("div",{className:"song-container",onClick:v,children:(0,n.jsx)(k.A,{PopperProps:{disablePortal:!0},onClose:()=>m(!1),open:h,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:e.post.previewSong.name,children:(0,n.jsx)(R.A,{})})})]})]},a)})):""})})};var I=t(7948),T=t(6491),D=t(5346);const q=new D.Vy,F=(e,s)=>{var t,i;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"comment_container",children:[(0,n.jsxs)("div",{style:{marginLeft:"".concat(50*(e.level-1),"px")},className:"info_pic",children:[(0,n.jsx)(p.A,{alt:e.name,src:e.profilePic}),(0,n.jsxs)("div",{className:"info_text_comment",children:[(0,n.jsx)(g.A,{className:"semiBold-16 comment_user_name",children:null!==(t=e.display_name)&&void 0!==t?t:e.name}),(0,n.jsx)(g.A,{className:"regular-16",children:e.content}),(0,n.jsxs)("div",{className:"likes",children:[(0,n.jsx)(p.A,{sx:{width:"13px",height:"13px",marginTop:"-4px"},alt:"likes",src:o}),(0,n.jsx)(g.A,{className:"regular-14 likes_info",children:"0 Likes"})]})]})]}),null===(i=e.children)||void 0===i?void 0:i.map(((e,s)=>(0,n.jsx)("div",{children:F(e,s)},s)))]},s)})},B=e=>{const[s,t]=(0,a.useState)(0),[i,l]=(0,a.useState)([b.F]);(0,a.useEffect)((()=>{var s;s=e.postId,T.A.getCommentsByPostId(s).then((e=>{l(e);const s=r(i);t(s)})).catch((e=>{q.error(e)}))}),[e.postId]);const r=e=>{let s=e.length;return e&&e.length&&(null===e||void 0===e||e.forEach((e=>{e.children&&e.children.length>0&&(s+=r(e.children))}))),s};return(0,n.jsx)(n.Fragment,{children:i.length?i.map(((e,s)=>(0,n.jsx)("div",{children:F(e,s)},s))):""})};var U=t(8082),E=t(7362),$=t(7630),W=t(6031),O=t(189);let z=function(e){return e.object="object",e}({});var G=t(4802);const Q=[{key:"likes",text:"likes",source:o},{key:"comments",text:"comments",source:c},{key:"shares",text:"repost",source:d}],V=e=>{var s;const{post:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(v.Ay,{container:!0,sx:{width:1,height:1},className:"repost_preview",children:[(0,n.jsxs)(v.Ay,{item:!0,className:"header_view",children:[(0,n.jsxs)(j.A,{display:"flex",alignItems:"center",gap:"10px",children:[(0,n.jsx)(j.A,{children:(0,n.jsx)(p.A,{src:t.user.profilePic})}),(0,n.jsxs)(j.A,{children:[(0,n.jsx)(g.A,{className:"medium-18",children:null!==(s=t.user.displayName)&&void 0!==s?s:t.user.name}),(0,n.jsxs)(j.A,{display:"flex",alignItems:"center",gap:"10px",children:[(0,n.jsx)(L.A,{className:"pin"}),(0,n.jsx)(g.A,{className:"location_text",children:t.user.displayLocationName})]})]})]}),(0,n.jsx)(j.A,{onClick:function(){E.A.closePopUp()},children:(0,n.jsx)(G.A,{className:"cross_icon"})})]}),(0,n.jsxs)(v.Ay,{container:!0,className:"attachments",columnSpacing:"10px",columns:12,children:[(0,n.jsx)(v.Ay,{item:!0,xs:6,className:"right_view",children:(0,n.jsxs)(j.A,{sx:{display:"flex",flexDirection:"column",gap:"10px",position:"relative"},children:[(0,n.jsxs)(j.A,{sx:{display:"flex",gap:"10px",paddingTop:"10px",flexDirection:"column",position:"sticky",top:0,background:"var(--quaternary-color)",zIndex:99,paddingBottom:"10px",borderBottom:"solid 1px var(--line-border-color)"},children:[(0,n.jsx)(g.A,{className:"regular-16 font-color",children:t.name}),t?(0,n.jsxs)(j.A,{sx:{display:"flex",gap:1},children:[" ",Q.map(((e,s)=>(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("img",{src:e.source,alt:e.text}),(0,n.jsxs)("p",{className:"regular-16 count",children:["12"," ",e.text]})]},s)))]}):""]}),(0,n.jsx)(j.A,{sx:{display:"flex",flexDirection:"column",gap:"10px"},children:(0,n.jsx)(B,{postId:t.id})})]})}),(0,n.jsx)(v.Ay,{item:!0,xs:6,className:"grid_2",children:(0,n.jsx)(P,{attachments:t.attachments,taggedPeopleTap:e=>{}})})]})]})})};var H=t(9034);const M=[{key:"likes",text:"likes",source:o},{key:"comments",text:"comments",source:c},{key:"shares",text:"repost",source:d}],X=[{id:1,text:"View profile"},{id:2,text:"Chat"}],J=e=>{var s,t,i,l,r,o,c,d,b,w,_,k,S,L,R,T,D,q,F;const[G,Q]=(0,a.useState)(""),[J,K]=(0,a.useState)(""),Y=(0,u.d4)((e=>e.flaggedReport.data)),{user:Z,query:ee,post:se,actionList:te,response:ie,attachments:ae,detail:ne}=Y,[le,re]=(0,a.useState)(null),[oe,ce]=(0,a.useState)(!1);(0,a.useEffect)((()=>{e.isRendered&&(Q(""),e.warningElementChange(""),K(""))}),[e.isRendered]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"reportView",children:[(0,n.jsxs)("div",{className:"postContent",children:[(0,n.jsxs)("div",{className:"profile",children:[(0,n.jsxs)("div",{className:"detail",children:[(0,n.jsx)(p.A,{className:"profileIcon",src:null===Z||void 0===Z?void 0:Z.profilePic,alt:null===Z||void 0===Z?void 0:Z.name}),(0,n.jsx)("p",{className:"name regular-18",children:null===Z||void 0===Z?void 0:Z.name})]}),(0,n.jsx)("div",{onClick:e=>{return s=e,ce(!0),void re(s.currentTarget);var s},children:(0,n.jsx)(U.A,{className:"three_dots"})})]}),(0,n.jsxs)("div",{className:"postCell",children:[(0,n.jsxs)("div",{className:"report_detail_container",children:[(0,n.jsxs)("p",{className:"option regular-18",children:[(0,n.jsx)("span",{className:"primary_text_color",children:"Query: "}),(0,n.jsx)("span",{className:"quinary_text_color",children:null===ee||void 0===ee?void 0:ee.question})]}),ne&&(0,n.jsx)("div",{children:(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{className:"primary_text_color",children:"Description: "}),(0,n.jsx)("span",{className:"quinary_text_color",children:ne})]})}),ae&&(0,n.jsxs)("div",{className:"order_attachment_container",children:[(0,n.jsx)("label",{children:"Attachments:"}),(0,n.jsx)(H.A,{images:ae})]})]}),(0,n.jsxs)("div",{className:"source",children:[se&&(0,n.jsxs)("div",{className:"owner-profile",children:[(0,n.jsx)(p.A,{sx:{width:30,height:30},src:null===(s=se.user)||void 0===s?void 0:s.profilePic,alt:null!==(t=null===(i=se.user)||void 0===i?void 0:i.displayName)&&void 0!==t?t:null===(l=se.user)||void 0===l?void 0:l.name}),(0,n.jsx)("p",{className:"medium-18 font-color",children:null!==(r=null===se||void 0===se||null===(o=se.user)||void 0===o?void 0:o.displayName)&&void 0!==r?r:null===(c=se.user)||void 0===c?void 0:c.name})]}),se&&typeof se===z.object?(0,n.jsxs)("div",{className:"".concat(se.type===C.wz.social?"not_card":"card_height"," post-image"),children:[(0,n.jsxs)(x.A,{variant:"elevation",className:"".concat(se.type===C.wz.social?"not_a_card":"card"),children:[se.type===C.wz.repost?(0,n.jsxs)(v.Ay,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",padding:"15px 15px 10px 25px",children:[(0,n.jsxs)(v.Ay,{item:!0,display:"flex",flexDirection:"row",alignItems:"center",columnGap:"10px",children:[(0,n.jsx)(p.A,{sx:{width:30,height:30},src:null===(d=se.data)||void 0===d||null===(b=d.user)||void 0===b?void 0:b.profilePic}),(0,n.jsx)(g.A,{className:"medium-18",children:null!==(w=null===(_=se.data)||void 0===_||null===(k=_.user)||void 0===k?void 0:k.displayName)&&void 0!==w?w:null===(S=se.data)||void 0===S||null===(L=S.user)||void 0===L?void 0:L.name})]}),(0,n.jsx)(v.Ay,{item:!0,children:(0,n.jsx)("span",{onClick:()=>(e=>{E.A.createPopUp({compoent:(0,n.jsx)(V,{post:e}),width:1020,height:560,header:!1,headerName:"",footer:!1,class:"main_content no_padding",showCloseIcon:!1})})(se.data),children:(0,n.jsx)(g.A,{className:"medium-18 link_text",children:"show post"})})})]}):"",null!==(R=se.attachments)&&void 0!==R&&R.length||null!==(T=se.data)&&void 0!==T&&null!==(D=T.attachments)&&void 0!==D&&D.length?(0,n.jsx)(P,{click:()=>{var e,s,t,i;return((e,s)=>{O.A.createPreviewPopUp({headerName:"",attachments:e,previewSong:s})})(se.attachments.length?se.attachments:null===(e=se.data)||void 0===e?void 0:e.attachments,null!==(s=null!==(t=se.previewSong)&&void 0!==t?t:null===(i=se.data)||void 0===i?void 0:i.previewSong)&&void 0!==s?s:null)},taggedPeopleTap:s=>(s=>{e.taggedPeopleTap(s)})(s),attachments:se.attachments.length?se.attachments:null===(q=se.data)||void 0===q?void 0:q.attachments,post:se}):""]}),(0,n.jsxs)("div",{className:"details",children:[(0,n.jsxs)("div",{className:"sticky_content",children:[(0,n.jsx)("div",{className:"thoughts",children:(0,n.jsx)("p",{className:"regular-18 font-color",children:se.name})}),(0,n.jsx)("div",{className:"post-info",children:null!==(F=se.attachments)&&void 0!==F&&F.length||se.data?M.map(((e,s)=>(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("img",{src:e.source,alt:e.text}),(0,n.jsx)("p",{className:"regular-16 count",children:"".concat(Y[e.key]," ").concat(e.text)})]},s))):""})]}),se.name&&(0,n.jsx)("div",{className:"comments_viewer_flag",children:(0,n.jsx)(B,{postId:se.id})})]})]}):(0,n.jsxs)("div",{className:"error_text",children:[(0,n.jsx)("p",{className:"regular-16 info_text",children:"Post Information not found"}),(0,n.jsx)(I.A,{})]})]})]})]}),(0,n.jsxs)("div",{className:"action",children:[e.currentTab.status!==C.n$.Active?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(j.A,{display:"flex",gap:"10px",alignItems:"center",marginBottom:"15px",children:[(0,n.jsx)(g.A,{className:"medium-16 font-color",children:"Action taken :"}),(0,n.jsx)(g.A,{className:"regular-16 font-color",children:null===ie||void 0===ie?void 0:ie.action})]}),null!==ie&&void 0!==ie&&ie.comments?(0,n.jsxs)(j.A,{display:"flex",gap:"10px",alignItems:"center",children:[(0,n.jsx)(g.A,{className:"medium-16 font-color",children:"Warning:"}),(0,n.jsx)(g.A,{className:"regular-16 font-color",children:null===ie||void 0===ie?void 0:ie.comments})]}):""]}):"",e.currentTab.status!==C.n$.Completed?(0,n.jsx)("p",{className:"label semiBold-18",children:"Take action : "}):"",e.currentTab.status!==C.n$.Completed?(0,n.jsx)("div",{className:"action-option",children:(0,n.jsx)(A.A,{children:(0,n.jsx)(N.A,{"aria-labelledby":"Report actions",name:"radio-buttons-group",value:null===G||void 0===G?void 0:G.toString(),onChange:s=>{Q(s.target.value),e.onChangeOption(te[parseInt(s.target.value)]),K("")},children:null!==te&&void 0!==te&&te.length?te.map(((e,s)=>(0,n.jsx)(f.A,{className:"radio",value:s.toString(),control:(0,n.jsx)(y.A,{}),label:e.question},s))):(0,n.jsx)(g.A,{className:"regular-16",children:null===te||void 0===te?void 0:te.question})})})}):"",(0,n.jsx)("div",{className:"warning-input",children:"1"===G?(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"input-label semiBold-18 font-color",children:"Issue warning to the post owner: "}),(0,n.jsxs)("div",{className:"input-container",children:[(0,n.jsx)("textarea",{placeholder:"Provide valid information...",className:"inputBox",name:"input",value:J,onChange:s=>{var t;e.warningElementChange(null===(t=s.target.value)||void 0===t?void 0:t.trim()),K(s.target.value)}}),(0,n.jsx)("img",{className:"smiley",src:m.A,alt:"smiley"}),(0,n.jsx)("img",{src:h.A,alt:"arrow"})]})]}):""})]})]}),(0,n.jsx)(W.A,{open:oe,anchorEl:le,closePopover:()=>{ce(!1)},configData:X,selectedData:e=>{E.A.createPopUp({compoent:(0,n.jsx)($.A,{id:Z.id}),headerName:"",header:!1,footer:!1,width:580,height:560,class:"main_content",showCloseIcon:!0})}})]})};var K=t(3620),Y=t(3180),Z=t(3855),ee=t(9974);const se=e=>{let{userList:s}=e;return(0,n.jsx)(n.Fragment,{children:null===s||void 0===s?void 0:s.map(((e,s)=>{var t;return(0,n.jsx)("div",{className:"list-items",children:(0,n.jsxs)("div",{className:"list-content",children:[(0,n.jsx)("img",{className:"user-list-profile",src:e.profilePic}),(0,n.jsx)("div",{className:"query-container",children:(0,n.jsx)("label",{className:"regular-18 font-color",children:null!==(t=e.displayName)&&void 0!==t?t:e.displayName})})]})},s)}))})},te=new D.Vy;class ie extends a.Component{constructor(e){super(e),this.commentsText="",this.handleCellClick=async e=>{K.A.showLoader(!0),this.fetchReport(e),this.setState({isRendered:!1})},this.state={segmentData:[{name:"Active requests",status:C.n$.Active,isSelected:!0},{name:"Appealed",status:C.n$.Appealed,isSelected:!1},{name:"Completed",status:C.n$.Completed,isSelected:!1}],userList:[],isLoading:!1,currentTab:{name:"Active requests",status:C.n$.Active,isSelected:!0},isDisabledSubmit:!0,selectedReport:0,selectedQuery:"",isRendered:!1,showReport:!0},this.submitReport=this.submitReport.bind(this),this.handleCellClick=this.handleCellClick.bind(this),this.reportWarningChange=this.reportWarningChange.bind(this),this.callLoader=this.callLoader.bind(this)}callLoader(){this.setState({isLoading:!0}),setTimeout((()=>{this.setState({isLoading:!1})}),500)}componentDidMount(){this.fetchRequestList()}fetchRequestList(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.currentTab.status;K.A.showLoader(!0);const t=C.y9.report;T.A.getReportList(s,t,e).then((e=>{this.setState((s=>{var t;return{...s,userList:e.result,showReport:e&&(null===(t=e.result)||void 0===t?void 0:t.length)}}),(()=>{var s,t;e&&null!==(s=e.result)&&void 0!==s&&s.length&&this.fetchReport(null===(t=e.result[0])||void 0===t?void 0:t.id),K.A.showLoader(!1)}))})).catch((e=>{te.debug(e),K.A.showLoader(!1)}))}fetchReport(e){T.A.fetchDetailsByReportId(e).then((s=>{this.props.reportDetails(s),this.setState({selectedReport:e,isRendered:!0,isDisabledSubmit:!0})})).catch((e=>{te.debug(e)})).finally((()=>{K.A.showLoader(!1)}))}segmentSelected(e){this.setState((s=>({segmentData:s.segmentData.map(((s,t)=>({...s,isSelected:e===t}))),currentTab:s.segmentData[e],isRendered:!1})),(()=>{this.fetchRequestList()}))}onSearch(e){this.fetchRequestList(e)}handleOptionChange(e){this.setState((s=>({isDisabledSubmit:!1,selectedQuery:e.question})),(()=>{})),this.commentsText=""}reportWarningChange(e){this.commentsText=e}saveReport(e,s){K.A.showLoader(!0),T.A.saveReport(e,s).then((()=>{Z.A.showToaster({message:ee.QB.successFully,severity:"success"}),this.setState({isRendered:!1}),this.fetchRequestList()})).catch((e=>{te.error(e)})).finally((()=>{K.A.showLoader(!1)}))}submitReport(e){e.preventDefault(),this.saveReport(this.state.selectedReport,{action:this.state.selectedQuery,comments:this.commentsText})}getUsersWithId(e){K.A.showLoader(!0),T.A.getUserList(e).then((e=>{this.showTagPeoplePopUp(e),K.A.showLoader(!1)})).catch((e=>{K.A.showLoader(!1),te.info(e)}))}showTagPeoplePopUp(e){E.A.createPopUp({headerName:"Tagged in the post",header:!0,footer:!1,width:700,height:560,compoent:(0,n.jsx)(se,{userList:e}),class:"dialouge-content-container",showCloseIcon:!1})}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"report-layout",children:[(0,n.jsxs)("div",{className:"justify-spacebetween",children:[(0,n.jsx)("div",{className:"width-50",children:(0,n.jsx)(l,{segments:this.state.segmentData,onSegmentClick:e=>this.segmentSelected(e)})}),this.state.currentTab.status!=C.n$.Completed&&(0,n.jsx)("div",{className:"width-50 submit_button_container",children:(0,n.jsx)("div",{className:"submit_button",children:(0,n.jsx)(i.A,{click:this.submitReport,isDisabled:this.state.isDisabledSubmit,children:"Submit"})})})]}),(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)(r.A,{handleSearch:e=>this.onSearch(e),userList:this.state.userList,onCellClick:e=>this.handleCellClick(e),isLoading:this.state.isLoading}),this.state.showReport?(0,n.jsx)(J,{isRendered:this.state.isRendered,onChangeOption:e=>this.handleOptionChange(e),warningElementChange:this.reportWarningChange,taggedPeopleTap:e=>this.getUsersWithId(e),currentTab:this.state.currentTab}):""]})]})})}}const ae={reportDetails:Y.Rb},ne=(0,u.Ng)((e=>({reportDetail:e.data})),ae)(ie)}}]);
//# sourceMappingURL=486.dee2da9a.chunk.js.map