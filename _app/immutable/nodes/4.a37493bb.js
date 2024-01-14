import{s as me,f as C,a as P,l as le,g as E,h as I,c as M,d as h,m as ae,j as k,i as q,I as p,p as de,K as he,n as Z,e as se,W as _e}from"../chunks/scheduler.b3c879a1.js";import{S as ue,i as pe,b as D,d as V,m as y,a as _,t as w,e as L,g as re,c as ne}from"../chunks/index.50170cf9.js";import{e as J,U as W,u as ve,o as we}from"../chunks/UIcon.32c9a790.js";import{c as xe,d as oe,g as O,e as be}from"../chunks/params.9662cfe3.js";import{C as ke}from"../chunks/Card.1544fbb7.js";import{C as Ce}from"../chunks/CardLogo.c1ccdcd2.js";import{C as Ee,a as G}from"../chunks/ChipIcon.b026d731.js";import{b as Q}from"../chunks/paths.09f57a29.js";import{S as Ie}from"../chunks/SearchPage.9bed7ba2.js";import{i as De}from"../chunks/index.97b3c5e0.js";function ie(s,t,r){const e=s.slice();return e[5]=t[r],e}function Ve(s){let t,r;return t=new W({props:{icon:"i-carbon-building"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ye(s){let t,r;return t=new W({props:{icon:"i-carbon-location"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Le(s){let t,r;return t=new W({props:{icon:"i-carbon-hourglass"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ce(s){let t,r;return t=new G({props:{logo:O(s[5].logo),name:s[5].name,href:`${Q}/skills/${s[5].slug}`}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,n){const o={};n&1&&(o.logo=O(e[5].logo)),n&1&&(o.name=e[5].name),n&1&&(o.href=`${Q}/skills/${e[5].slug}`),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Se(s){let t,r,e,n,o,c,$,a,l,f,d,B,g,b,S,F,ee,R,A=s[0].description+"",X,te,N,H;r=new Ce({props:{src:O(s[0].logo),alt:s[0].company,size:75}}),c=new Ee({props:{title:s[0].name}}),l=new G({props:{name:`Company: ${s[0].company}`,$$slots:{default:[Ve]},$$scope:{ctx:s}}}),d=new G({props:{name:`Location: ${s[0].location}`,$$slots:{default:[ye]},$$scope:{ctx:s}}}),g=new G({props:{name:`Contract: ${s[0].contract}`,$$slots:{default:[Le]},$$scope:{ctx:s}}});let U=J(s[0].skills),u=[];for(let i=0;i<U.length;i+=1)u[i]=ce(ie(s,U,i));const ge=i=>w(u[i],1,1,()=>{u[i]=null});return{c(){t=C("div"),D(r.$$.fragment),e=P(),n=C("div"),o=C("h3"),D(c.$$.fragment),$=P(),a=C("div"),D(l.$$.fragment),f=P(),D(d.$$.fragment),B=P(),D(g.$$.fragment),b=P(),S=C("div"),F=le(s[1]),ee=P(),R=C("div"),X=le(A),te=P(),N=C("div");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){t=E(i,"DIV",{class:!0});var m=I(t);V(r.$$.fragment,m),e=M(m),n=E(m,"DIV",{class:!0});var v=I(n);o=E(v,"H3",{class:!0});var K=I(o);V(c.$$.fragment,K),K.forEach(h),$=M(v),a=E(v,"DIV",{class:!0});var j=I(a);V(l.$$.fragment,j),f=M(j),V(d.$$.fragment,j),B=M(j),V(g.$$.fragment,j),j.forEach(h),b=M(v),S=E(v,"DIV",{class:!0});var T=I(S);F=ae(T,s[1]),T.forEach(h),ee=M(v),R=E(v,"DIV",{class:!0});var Y=I(R);X=ae(Y,A),Y.forEach(h),te=M(v),N=E(v,"DIV",{class:!0});var x=I(N);for(let z=0;z<u.length;z+=1)u[z].l(x);x.forEach(h),v.forEach(h),m.forEach(h),this.h()},h(){k(o,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(a,"class","row flex-wrap m-b-2 gap-1 text-0.9em font-300"),k(S,"class","text-[var(--accent-text)] text-[0.9em] font-200"),k(R,"class","experience-description"),k(N,"class","flex flex-row flex-wrap mt-5"),k(n,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(i,m){q(i,t,m),y(r,t,null),p(t,e),p(t,n),p(n,o),y(c,o,null),p(n,$),p(n,a),y(l,a,null),p(a,f),y(d,a,null),p(a,B),y(g,a,null),p(n,b),p(n,S),p(S,F),p(n,ee),p(n,R),p(R,X),p(n,te),p(n,N);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(N,null);H=!0},p(i,m){const v={};m&1&&(v.src=O(i[0].logo)),m&1&&(v.alt=i[0].company),r.$set(v);const K={};m&1&&(K.title=i[0].name),c.$set(K);const j={};m&1&&(j.name=`Company: ${i[0].company}`),m&256&&(j.$$scope={dirty:m,ctx:i}),l.$set(j);const T={};m&1&&(T.name=`Location: ${i[0].location}`),m&256&&(T.$$scope={dirty:m,ctx:i}),d.$set(T);const Y={};if(m&1&&(Y.name=`Contract: ${i[0].contract}`),m&256&&(Y.$$scope={dirty:m,ctx:i}),g.$set(Y),(!H||m&1)&&A!==(A=i[0].description+"")&&de(X,A),m&1){U=J(i[0].skills);let x;for(x=0;x<U.length;x+=1){const z=ie(i,U,x);u[x]?(u[x].p(z,m),_(u[x],1)):(u[x]=ce(z),u[x].c(),_(u[x],1),u[x].m(N,null))}for(re(),x=U.length;x<u.length;x+=1)ge(x);ne()}},i(i){if(!H){_(r.$$.fragment,i),_(c.$$.fragment,i),_(l.$$.fragment,i),_(d.$$.fragment,i),_(g.$$.fragment,i);for(let m=0;m<U.length;m+=1)_(u[m]);H=!0}},o(i){w(r.$$.fragment,i),w(c.$$.fragment,i),w(l.$$.fragment,i),w(d.$$.fragment,i),w(g.$$.fragment,i),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)w(u[m]);H=!1},d(i){i&&h(t),L(r),L(c),L(l),L(d),L(g),he(u,i)}}}function Pe(s){let t,r;return t=new ke({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${Q}/experience/${s[0].slug}`,$$slots:{default:[Se]},$$scope:{ctx:s}}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const o={};n&1&&(o.href=`${Q}/experience/${e[0].slug}`),n&257&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Me(s,t,r){let{experience:e}=t;const n=xe(e.period.from,e.period.to),o=`${oe(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,c=e.period.to?`${oe(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",$=`${o} - ${c} · ${n}`;return s.$$set=a=>{"experience"in a&&r(0,e=a.experience)},[e,$]}class je extends ue{constructor(t){super(),pe(this,t,Me,Pe,me,{experience:0})}}function fe(s,t,r){const e=s.slice();return e[4]=t[r],e[6]=r,e}function Be(s){let t,r,e=[],n=new Map,o,c,$=J(s[0]);const a=l=>l[4].slug;for(let l=0;l<$.length;l+=1){let f=fe(s,$,l),d=a(f);n.set(d,e[l]=$e(d,f))}return{c(){t=C("div"),r=P();for(let l=0;l<e.length;l+=1)e[l].c();o=se(),this.h()},l(l){t=E(l,"DIV",{class:!0}),I(t).forEach(h),r=M(l);for(let f=0;f<e.length;f+=1)e[f].l(l);o=se(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(l,f){q(l,t,f),q(l,r,f);for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(l,f);q(l,o,f),c=!0},p(l,f){f&1&&($=J(l[0]),re(),e=ve(e,f,a,1,l,$,n,o.parentNode,we,$e,o,fe),ne())},i(l){if(!c){for(let f=0;f<$.length;f+=1)_(e[f]);c=!0}},o(l){for(let f=0;f<e.length;f+=1)w(e[f]);c=!1},d(l){l&&(h(t),h(r),h(o));for(let f=0;f<e.length;f+=1)e[f].d(l)}}}function Ne(s){let t,r,e,n,o="Could not find anything...",c;return r=new W({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),D(r.$$.fragment),e=P(),n=C("p"),n.textContent=o,this.h()},l($){t=E($,"DIV",{class:!0});var a=I(t);V(r.$$.fragment,a),e=M(a),n=E(a,"P",{class:!0,["data-svelte-h"]:!0}),_e(n)!=="svelte-1jyyf6v"&&(n.textContent=o),a.forEach(h),this.h()},h(){k(n,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m($,a){q($,t,a),y(r,t,null),p(t,e),p(t,n),c=!0},p:Z,i($){c||(_(r.$$.fragment,$),c=!0)},o($){w(r.$$.fragment,$),c=!1},d($){$&&h(t),L(r)}}}function $e(s,t){let r,e,n,o,c,$,a,l,f,d,B;return c=new W({props:{icon:"i-carbon-condition-point",classes:""}}),l=new je({props:{experience:t[4]}}),{key:s,first:null,c(){r=C("div"),e=C("div"),n=P(),o=C("div"),D(c.$$.fragment),$=P(),a=C("div"),D(l.$$.fragment),f=P(),this.h()},l(g){r=E(g,"DIV",{class:!0});var b=I(r);e=E(b,"DIV",{class:!0}),I(e).forEach(h),n=M(b),o=E(b,"DIV",{class:!0});var S=I(o);V(c.$$.fragment,S),S.forEach(h),$=M(b),a=E(b,"DIV",{class:!0});var F=I(a);V(l.$$.fragment,F),F.forEach(h),f=M(b),b.forEach(h),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(o,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(a,"class","flex-1 col items-stretch"),k(r,"class",d=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(g,b){q(g,r,b),p(r,e),p(r,n),p(r,o),y(c,o,null),p(r,$),p(r,a),y(l,a,null),p(r,f),B=!0},p(g,b){t=g;const S={};b&1&&(S.experience=t[4]),l.$set(S),(!B||b&1&&d!==(d=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",d)},i(g){B||(_(c.$$.fragment,g),_(l.$$.fragment,g),B=!0)},o(g){w(c.$$.fragment,g),w(l.$$.fragment,g),B=!1},d(g){g&&h(r),L(c),L(l)}}}function Ue(s){let t,r,e,n;const o=[Ne,Be],c=[];function $(a,l){return a[0].length===0?0:1}return r=$(s),e=c[r]=o[r](s),{c(){t=C("div"),e.c(),this.h()},l(a){t=E(a,"DIV",{class:!0});var l=I(t);e.l(l),l.forEach(h),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(a,l){q(a,t,l),c[r].m(t,null),n=!0},p(a,l){let f=r;r=$(a),r===f?c[r].p(a,l):(re(),w(c[f],1,1,()=>{c[f]=null}),ne(),e=c[r],e?e.p(a,l):(e=c[r]=o[r](a),e.c()),_(e,1),e.m(t,null))},i(a){n||(_(e),n=!0)},o(a){w(e),n=!1},d(a){a&&h(t),c[r].d()}}}function qe(s){let t,r;return t=new Ie({props:{title:s[1],$$slots:{default:[Ue]},$$scope:{ctx:s}}}),t.$on("search",s[2]),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const o={};n&129&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Fe(s,t,r){const{items:e,title:n}=be;let o=[...e];return[o,n,$=>{const a=$.detail.search;if(De(a)){r(0,o=e);return}r(0,o=e.filter(l=>l.name.toLowerCase().includes(a)||l.company.toLowerCase().includes(a)||l.description.toLowerCase().includes(a)))}]}class Je extends ue{constructor(t){super(),pe(this,t,Fe,qe,me,{})}}export{Je as component};
