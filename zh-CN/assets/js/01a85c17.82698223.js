"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[408209],{567779:(e,t,a)=>{a.d(t,{A:()=>u});var l=a(296540),r=a(224581),n=a(320053),s=a(175489),i=a(721312);const c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.A)(c.sidebar,"thin-scrollbar"),"aria-label":(0,i.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.A)(c.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.A)(c.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c.sidebarItem},l.createElement(s.A,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var o=a(475600);function b(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(o.GX,{component:b,props:e})}function u(e){let{sidebar:t}=e;const a=(0,r.l)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(m,{sidebar:t}):null}},769158:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(296540),r=a(320053),n=a(721312);const s=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(901003),c=a(117559),m=a(274370),o=a(456133);const b={tag:"tag_Nnez"};function g(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:b.tag},l.createElement(o.A,e))))),l.createElement("hr",null))}function u(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(g,{key:e.letter,letterEntry:e}))))}var d=a(841463);function p(e){let{tags:t,sidebar:a}=e;const n=s();return l.createElement(i.e3,{className:(0,r.A)(c.G.wrapper.blogPages,c.G.page.blogTagsListPage)},l.createElement(i.be,{title:n}),l.createElement(d.A,{tag:"blog_tags_list"}),l.createElement(m.A,{sidebar:a},l.createElement("h1",null,n),l.createElement(u,{tags:t})))}},456133:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(296540),r=a(320053),n=a(175489);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(n.A,{href:t,className:(0,r.A)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}},274370:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(296540),r=a(320053),n=a(237995),s=a(567779);function i(e){const{sidebar:t,toc:a,children:i,pageType:c,...m}=e,o=t&&t.items.length>0,b="blogList"===c;return l.createElement(n.A,m,l.createElement("div",{className:"mb-[4.875rem] container"},l.createElement("div",{className:"lg:row lg:flex"},l.createElement(s.A,{sidebar:t}),l.createElement("main",{className:(0,r.A)({col:!b,"col--7":o&&!b,"col--12":!o&&b,"col--9 col--offset-1":!o&&!b}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}}}]);