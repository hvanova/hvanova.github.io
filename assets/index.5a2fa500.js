import{S as D,i as z,s as E,e as m,a as h,b as n,c as $,d as r,n as p,f as k,g as B,t as H,h as j,j as M,m as T,k as A,l as I,o as N}from"./vendor.c470c155.js";const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}};te();const ne="Hannah VanWingen-Eckertova",ae="Data Visualization Engineer & Frontend Developer",ie="Hi! I design and build interactive visual tools for the web.",F={paragraphs:[`From research and design to development and testing, I'm committed to empowering individuals by crafting narratives and experiences that inform nuanced understanding and growth through accessible engagement with data.
    Over the past 5 years, I have worked in the data visualization engineering field, including design and storytelling, data cleaning and preparation, statistical techniques for data exploration, cross-team communications, product development, and frontend engineering.
    My interest in social and accessible design drives my work forward in a way that necessitates research, a part of my work that I will always value and prioritize.`,`My main focus these days, besides the re-design and development of my personal website, is an investigation into the data on mobility in Detroit and Chicago's
        densest neighborhoods. When I'm not at my keyboard, I enjoy fiber-related arts, volunteering with young learners, working in my community gardens, and going on long 
        walks with my dog.`]},q={linkedin:"https://www.linkedin.com/in/hannah-vanwingen-eckertova-248976115/",github:"https://github.com/hvanova",observable:"https://observablehq.com/user/@hannahvanova",email:"mailto:hannahvanova@gmail.com"};function se(d){let e,t,a,i,l,o;return{c(){e=m("div"),t=m("p"),t.textContent=`${ne}`,a=h(),i=m("p"),i.textContent=`${ae}`,l=h(),o=m("p"),o.textContent=`${ie}`,n(t,"class","text-4xl mt-3 font-bold text-white tracking-widest"),n(i,"class","text-xl text-white mt-4 tracking-wider"),n(o,"class","text-m text-secondaryText mt-4 tracking-wider"),n(e,"id","header"),n(e,"class","text-left")},m(s,g){$(s,e,g),r(e,t),r(e,a),r(e,i),r(e,l),r(e,o)},p,i:p,o:p,d(s){s&&k(e)}}}class le extends D{constructor(e){super();z(this,e,null,se,E,{})}}function G(d,e,t){const a=d.slice();return a[0]=e[t],a}function W(d){let e,t=d[0]+"";return{c(){e=m("p"),n(e,"class","item svelte-1tzzhrt")},m(a,i){$(a,e,i),e.innerHTML=t},p,d(a){a&&k(e)}}}function re(d){let e,t,a,i,l=F.paragraphs,o=[];for(let s=0;s<l.length;s+=1)o[s]=W(G(d,l,s));return{c(){e=m("div"),t=m("p"),t.textContent="ABOUT",a=h(),i=m("div");for(let s=0;s<o.length;s+=1)o[s].c();n(t,"class","text-white tracking-widest text-m mb-6"),n(i,"class","px-20"),n(e,"id","about"),n(e,"class","text-left text-m text-secondaryText pt-24")},m(s,g){$(s,e,g),r(e,t),r(e,a),r(e,i);for(let c=0;c<o.length;c+=1)o[c].m(i,null)},p(s,[g]){if(g&0){l=F.paragraphs;let c;for(c=0;c<l.length;c+=1){const f=G(s,l,c);o[c]?o[c].p(f,g):(o[c]=W(f),o[c].c(),o[c].m(i,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=l.length}},i:p,o:p,d(s){s&&k(e),B(o,s)}}}class oe extends D{constructor(e){super();z(this,e,null,re,E,{})}}var Y=[{title:"Software Engineer II, Data Engineering and Visualization",company:"Lark Health Technologies",range:"JUNE \u2013\u2013 DEC 2023",description:`Designed and implemented data parsing, transformation, and quality assurance pipelines. 
        Initiated data tracking using the Soda data quality platform to enhance observability and bolster data reliability.
        Optimized complex data processing workflows, ensuring timely delivery while minimizing resource utilization.`,link:"https://www.lark.com/",skills:["Javascript","Typescript","D3.js","React","Next.js","Scala","Spark","SQL"]},{title:"Software Engineer I, Data Engineering and Visualization",company:"Lark Health Technologies",range:"JAN 2022 \u2013\u2013 JUNE 2023",description:`Led the development of a configurable and automated data reporting service in React.
        Collaborated with cross-functional teams to design and implement data visualizations using D3.js.
        Demonstrated commitment to ensuring reliable data systems performance by participating in on-call responsibilities using Opsgenie. 
        Documented product requirements and metric calculation details and to maintain data integrity and capture best practices for further development and addressing common issues.
        Collaborated on data transformation components for a fully automated backend and frontend data reporting service.`,link:"https://www.lark.com/",skills:["Javascript","Typescript","D3.js","React","Next.js","Scala","Spark","SQL"]},{title:"Research Scientist, Data Visualization",company:"Michigan Aerospace Corporation",range:"JULY 2019 \u2013\u2013 JUNE 2020",description:`Designed and implemented a Python graphical model detecting fluid motion vector fields. Led the development of a highly interactive and configurable D3.js data visualization library that enables users to explore complex datasets for time series, confusion matrices, stacked bar graphs, 2D Gaussian distributions, and networks.
        Developed the D3.js data visualizations, unit testing, and the data ingestion workflow for a commercial web app aggregating invasive species with neural network analysis of drone imagery.       
        Wrote a grant proposal to the US Department of Energy for a data sharing platform that automates the processing of raw data files by detecting data types and displaying an optimal visualization to showcase trends, correlations, distributions, and anomalies.
        Collaborated on data analytics and led visualization efforts for the ARGOS.ai project, a holistic automated platform that utilizes machine learning and drones to monitor and assess invasive plant species. Learned DroneDeploy API integration and gained environmental field research experience.`,link:"https://www.michiganaerospace.com/",skills:["Python","Javascript","D3.js","Vue.js","React"]},{title:"Data Visualization Intern",company:"University of Michigan Digital Projects Studio",range:"SEPT 2018 \u2013\u2013 MAY 2019",description:`Collaborated in designing and implementing a unique and interactive multidimensional data visualization for text citations using D3.js.
        Created an interactive tutorial for network-based data modeling and statistical analysis in Python using Jupyter Notebooks, providing an accessible platform to learn and apply cutting-edge statistics.`,link:"https://clarkdatalabs.github.io/",skills:["Python","Javascript","D3.js","Visualization Design"]}];function Q(d,e,t){const a=d.slice();return a[0]=e[t],a}function K(d,e,t){const a=d.slice();return a[3]=e[t],a}function X(d){let e,t=d[3]+"",a,i;return{c(){e=m("div"),a=H(t),i=h(),n(e,"class","skill mr-2 mt-2 text-xs svelte-1mfjf21")},m(l,o){$(l,e,o),r(e,a),r(e,i)},p,d(l){l&&k(e)}}}function ee(d){let e,t,a,i=d[0].range+"",l,o,s,g,c=d[0].title+"",f,C,v,_=d[0].company+"",u,S,L,O=d[0].description+"",P,x,V,U,J=d[0].skills,b=[];for(let w=0;w<J.length;w+=1)b[w]=X(K(d,J,w));return{c(){e=m("div"),t=m("div"),a=m("div"),l=H(i),o=h(),s=m("div"),g=m("p"),f=H(c),C=h(),v=m("p"),u=H(_),S=h(),L=m("div"),P=H(O),x=h(),V=m("div");for(let w=0;w<b.length;w+=1)b[w].c();U=h(),n(a,"class","col text-greyText text-xs"),n(g,"class","text-l text-white"),n(v,"class","text-m text-secondaryText link"),n(s,"class","ml-10"),n(t,"class","flex flex-row"),n(L,"class","text-greyText text-s mt-4"),n(V,"class","text-highlightText flex flex-row pt-2 flex-wrap"),n(e,"class","role mb-12 p-4 svelte-1mfjf21")},m(w,R){$(w,e,R),r(e,t),r(t,a),r(a,l),r(t,o),r(t,s),r(s,g),r(g,f),r(s,C),r(s,v),r(v,u),r(e,S),r(e,L),r(L,P),r(e,x),r(e,V);for(let y=0;y<b.length;y+=1)b[y].m(V,null);r(e,U)},p(w,R){if(R&0){J=w[0].skills;let y;for(y=0;y<J.length;y+=1){const Z=K(w,J,y);b[y]?b[y].p(Z,R):(b[y]=X(Z),b[y].c(),b[y].m(V,null))}for(;y<b.length;y+=1)b[y].d(1);b.length=J.length}},d(w){w&&k(e),B(b,w)}}}function ce(d){let e,t,a,i,l=Y,o=[];for(let s=0;s<l.length;s+=1)o[s]=ee(Q(d,l,s));return{c(){e=m("div"),t=m("p"),t.textContent="EXPERIENCE",a=h(),i=m("div");for(let s=0;s<o.length;s+=1)o[s].c();n(t,"class","text-white tracking-widest text-m mb-6"),n(i,"class","px-20"),n(e,"id","experience"),n(e,"class","text-left pb-16 pt-20")},m(s,g){$(s,e,g),r(e,t),r(e,a),r(e,i);for(let c=0;c<o.length;c+=1)o[c].m(i,null)},p(s,[g]){if(g&0){l=Y;let c;for(c=0;c<l.length;c+=1){const f=Q(s,l,c);o[c]?o[c].p(f,g):(o[c]=ee(f),o[c].c(),o[c].m(i,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=l.length}},i:p,o:p,d(s){s&&k(e),B(o,s)}}}class de extends D{constructor(e){super();z(this,e,null,ce,E,{})}}function me(d){let e;return{c(){e=m("div"),e.innerHTML=`<p class="text-white tracking-widest text-m mb-6">PROJECTS</p> 
    <div class="px-20 text-secondaryText">~ Development in progress - come back soon! ~</div>`,n(e,"id","projects"),n(e,"class","text-left pb-16 pt-10")},m(t,a){$(t,e,a)},p,i:p,o:p,d(t){t&&k(e)}}}class ge extends D{constructor(e){super();z(this,e,null,me,E,{})}}function pe(d){let e,t;return{c(){e=j("svg"),t=j("path"),n(t,"d","M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","100%"),n(e,"height","100%"),n(e,"viewBox","0 0 24 24"),n(e,"fill","currentColor")},m(a,i){$(a,e,i),r(e,t)},p,i:p,o:p,d(a){a&&k(e)}}}class ue extends D{constructor(e){super();z(this,e,null,pe,E,{})}}function fe(d){let e,t;return{c(){e=j("svg"),t=j("path"),n(t,"d","M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","100%"),n(e,"height","100%"),n(e,"viewBox","0 0 24 24"),n(e,"fill","currentColor")},m(a,i){$(a,e,i),r(e,t)},p,i:p,o:p,d(a){a&&k(e)}}}class he extends D{constructor(e){super();z(this,e,null,fe,E,{})}}function ve(d){let e,t;return{c(){e=j("svg"),t=j("path"),n(t,"d","M128,221.867008 C116.180992,221.867008 105.940992,219.292672 97.28,214.146048 C88.6498304,209.01888 81.7499136,201.755648 77.3653504,193.181696 C72.7036928,184.260608 69.2912128,174.826496 67.2106496,165.108736 C65.0031104,154.569728 63.9277056,143.854592 64,133.12 C64,124.619776 64.5547008,116.494336 65.6746496,108.724224 C66.7840512,100.964352 68.8427008,93.075456 71.8400512,85.0685952 C74.8372992,77.061632 78.6987008,70.1197312 83.4026496,64.2328576 C88.2999296,58.2019072 94.6320384,53.2928512 101.909299,49.8854912 C109.546496,46.2073856 118.228992,44.3732992 128,44.3732992 C139.819008,44.3732992 150.059008,46.9470208 158.72,52.0942592 C167.350272,57.22112 174.249984,64.4846592 178.634752,73.0582016 C183.264256,81.8835456 186.645504,91.241472 188.78976,101.131264 C190.922752,111.01184 192,121.68192 192,133.12 C192,141.620224 191.444992,149.745664 190.32576,157.515776 C189.131776,165.582848 187.022336,173.512704 184.032256,181.1712 C180.938752,189.177856 177.098752,196.120576 172.469248,202.007552 C167.839744,207.893504 161.717248,212.676608 154.090496,216.354816 C146.463744,220.033024 137.771008,221.867008 128,221.867008 Z M150.592512,156.61568 C156.71296,150.470656 160.11776,141.96736 160,133.12 C160,123.978752 156.93824,116.1472 150.827008,109.62432 C144.704512,103.10144 137.09824,99.84 128,99.84 C118.90176,99.84 111.296512,103.10144 105.172992,109.62432 C99.1776768,115.837952 95.8666752,124.31872 96,133.12 C96,142.261248 99.0613504,150.0928 105.172992,156.61568 C111.296512,163.13856 118.90176,166.4 128,166.4 C137.09824,166.4 144.62976,163.13856 150.592512,156.61568 Z M128,266.24 C198.687744,266.24 256,206.635008 256,133.12 C256,59.60448 198.687744,0 128,0 C57.3119488,0 0,59.60448 0,133.12 C0,206.635008 57.3119488,266.24 128,266.24 Z"),n(e,"width","100%"),n(e,"height","100%"),n(e,"viewBox","0 0 256 267"),n(e,"version","1.1"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"preserveAspectRatio","xMidYMid"),n(e,"fill","currentColor")},m(a,i){$(a,e,i),r(e,t)},p,i:p,o:p,d(a){a&&k(e)}}}class xe extends D{constructor(e){super();z(this,e,null,ve,E,{})}}function we(d){let e,t,a,i;return{c(){e=j("svg"),t=j("title"),a=j("g"),i=j("path"),n(i,"d","M29,6H3L2.92,6a.78.78,0,0,0-.21,0l-.17.07a.65.65,0,0,0-.15.1.67.67,0,0,0-.15.14l-.06.06a.36.36,0,0,0,0,.09,1.08,1.08,0,0,0-.08.19A1.29,1.29,0,0,0,2,6.9S2,7,2,7V25a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7A1,1,0,0,0,29,6ZM16,14.81,6.2,8H27.09ZM4,24V8.91l11.43,7.91,0,0a1.51,1.51,0,0,0,.18.09l.08,0A1.09,1.09,0,0,0,16,17h0a1,1,0,0,0,.41-.1l.07,0,0,0L28,9.79V24Z"),n(a,"id","mail"),n(e,"width","100%"),n(e,"height","100%"),n(e,"viewBox","0 0 32 32"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"fill","currentColor")},m(l,o){$(l,e,o),r(e,t),r(e,a),r(a,i)},p,i:p,o:p,d(l){l&&k(e)}}}class ye extends D{constructor(e){super();z(this,e,null,we,E,{})}}function be(d){let e,t,a,i,l,o,s,g,c,f,C,v,_,u,S,L,O,P;return l=new he({}),c=new ue({}),_=new xe({}),O=new ye({}),{c(){e=m("div"),t=m("div"),a=m("div"),i=m("a"),M(l.$$.fragment),o=h(),s=m("div"),g=m("a"),M(c.$$.fragment),f=h(),C=m("div"),v=m("a"),M(_.$$.fragment),u=h(),S=m("div"),L=m("a"),M(O.$$.fragment),n(i,"href",q.github),n(a,"class","link svelte-t6m091"),n(g,"href",q.linkedin),n(s,"class","link svelte-t6m091"),n(v,"href",q.observable),n(C,"class","link svelte-t6m091"),n(L,"href",q.email),n(S,"class","link svelte-t6m091"),n(t,"class","links w-full svelte-t6m091"),n(e,"id","nav"),n(e,"class","text-left text-xs mt-10 font-bold text-secondaryText tracking-widest navBar svelte-t6m091")},m(x,V){$(x,e,V),r(e,t),r(t,a),r(a,i),T(l,i,null),r(t,o),r(t,s),r(s,g),T(c,g,null),r(t,f),r(t,C),r(C,v),T(_,v,null),r(t,u),r(t,S),r(S,L),T(O,L,null),P=!0},p,i(x){P||(A(l.$$.fragment,x),A(c.$$.fragment,x),A(_.$$.fragment,x),A(O.$$.fragment,x),P=!0)},o(x){I(l.$$.fragment,x),I(c.$$.fragment,x),I(_.$$.fragment,x),I(O.$$.fragment,x),P=!1},d(x){x&&k(e),N(l),N(c),N(_),N(O)}}}function _e(d){return[]}class $e extends D{constructor(e){super();z(this,e,_e,be,E,{})}}function ke(d){let e,t,a,i,l,o,s,g,c,f,C,v,_;return a=new le({}),l=new $e({}),g=new oe({}),f=new de({}),v=new ge({}),{c(){e=m("main"),t=m("div"),M(a.$$.fragment),i=h(),M(l.$$.fragment),o=h(),s=m("div"),M(g.$$.fragment),c=h(),M(f.$$.fragment),C=h(),M(v.$$.fragment),n(t,"class","mt-20"),n(e,"class","main bg-main font-inter svelte-ma9ohb")},m(u,S){$(u,e,S),r(e,t),T(a,t,null),r(t,i),T(l,t,null),r(t,o),r(t,s),T(g,s,null),r(s,c),T(f,s,null),r(s,C),T(v,s,null),_=!0},p,i(u){_||(A(a.$$.fragment,u),A(l.$$.fragment,u),A(g.$$.fragment,u),A(f.$$.fragment,u),A(v.$$.fragment,u),_=!0)},o(u){I(a.$$.fragment,u),I(l.$$.fragment,u),I(g.$$.fragment,u),I(f.$$.fragment,u),I(v.$$.fragment,u),_=!1},d(u){u&&k(e),N(a),N(l),N(g),N(f),N(v)}}}class Ce extends D{constructor(e){super();z(this,e,null,ke,E,{})}}new Ce({target:document.getElementById("app")});
