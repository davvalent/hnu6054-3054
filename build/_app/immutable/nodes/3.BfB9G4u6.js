import{s as L,n as C}from"../chunks/scheduler.s29Zrdcm.js";import{S as T,i as w,e as d,s as v,c as $,g as x,b as g,j as m,d as u,o as H,n as S,t as U,H as z,a as E,l as N,f as O,k as W,m as G,p as q,q as y,r as k,u as M,v as D,w as A}from"../chunks/index.b6q4gap6.js";import{e as B}from"../chunks/each.6w4Ej4nR.js";function I(r){let l,a="Plan",e,t,n="Plan pour une bibliographie détaillée :",i,o,c="<li>Fondements</li> <li>Dans les humanités numériques</li> <li>Ressources pédagogiques</li> <li>Pour aller plus loin</li>",f,p,P="Ancien plan",b,h,j="<li>Pour aller plus loin</li> <li>Bibliographie (à répartir)</li> <li>Articles</li> <li>Cours en ligne</li> <li>Tutoriaux choisis</li> <li>Outils</li> <li>WTF</li>";return{c(){l=d("h2"),l.textContent=a,e=v(),t=d("p"),t.textContent=n,i=v(),o=d("ul"),o.innerHTML=c,f=v(),p=d("h2"),p.textContent=P,b=v(),h=d("ul"),h.innerHTML=j},l(s){l=$(s,"H2",{"data-svelte-h":!0}),x(l)!=="svelte-8f5a01"&&(l.textContent=a),e=g(s),t=$(s,"P",{"data-svelte-h":!0}),x(t)!=="svelte-1jz5pll"&&(t.textContent=n),i=g(s),o=$(s,"UL",{"data-svelte-h":!0}),x(o)!=="svelte-1gnqjwp"&&(o.innerHTML=c),f=g(s),p=$(s,"H2",{"data-svelte-h":!0}),x(p)!=="svelte-11cjmvf"&&(p.textContent=P),b=g(s),h=$(s,"UL",{"data-svelte-h":!0}),x(h)!=="svelte-b92jcv"&&(h.innerHTML=j)},m(s,_){m(s,l,_),m(s,e,_),m(s,t,_),m(s,i,_),m(s,o,_),m(s,f,_),m(s,p,_),m(s,b,_),m(s,h,_)},p:C,i:C,o:C,d(s){s&&(u(l),u(e),u(t),u(i),u(o),u(f),u(p),u(b),u(h))}}}class J extends T{constructor(l){super(),w(this,l,null,I,L,{})}}function F(r,l,a){const e=r.slice();return e[1]=l[a],e}function R(r){let l,a=r[1].data.name+"",e,t,n,i=r[1].formattedData+"",o;return{c(){l=d("h2"),e=U(a),t=v(),n=new z(!1),o=H(),this.h()},l(c){l=$(c,"H2",{});var f=E(l);e=N(f,a),f.forEach(u),t=g(c),n=O(c,!1),o=H(),this.h()},h(){n.a=o},m(c,f){m(c,l,f),W(l,e),m(c,t,f),n.m(i,c,f),m(c,o,f)},p(c,f){f&1&&a!==(a=c[1].data.name+"")&&G(e,a),f&1&&i!==(i=c[1].formattedData+"")&&n.p(i)},d(c){c&&(u(l),u(t),u(o),n.d())}}}function K(r){let l,a=B(r[0].collections),e=[];for(let t=0;t<a.length;t+=1)e[t]=R(F(r,a,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=H()},l(t){for(let n=0;n<e.length;n+=1)e[n].l(t);l=H()},m(t,n){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,n);m(t,l,n)},p(t,[n]){if(n&1){a=B(t[0].collections);let i;for(i=0;i<a.length;i+=1){const o=F(t,a,i);e[i]?e[i].p(o,n):(e[i]=R(o),e[i].c(),e[i].m(l.parentNode,l))}for(;i<e.length;i+=1)e[i].d(1);e.length=a.length}},i:C,o:C,d(t){t&&u(l),S(e,t)}}}function Q(r,l,a){let{collections:e}=l;return r.$$set=t=>{"collections"in t&&a(0,e=t.collections)},[e]}class V extends T{constructor(l){super(),w(this,l,Q,K,L,{collections:0})}}function X(r){let l,a,e,t;return l=new J({}),e=new V({props:{collections:r[0]}}),{c(){q(l.$$.fragment),a=v(),q(e.$$.fragment)},l(n){y(l.$$.fragment,n),a=g(n),y(e.$$.fragment,n)},m(n,i){k(l,n,i),m(n,a,i),k(e,n,i),t=!0},p(n,[i]){const o={};i&1&&(o.collections=n[0]),e.$set(o)},i(n){t||(M(l.$$.fragment,n),M(e.$$.fragment,n),t=!0)},o(n){D(l.$$.fragment,n),D(e.$$.fragment,n),t=!1},d(n){n&&u(a),A(l,n),A(e,n)}}}function Y(r,l,a){let{data:e}=l;return r.$$set=t=>{"data"in t&&a(0,e=t.data)},[e]}class le extends T{constructor(l){super(),w(this,l,Y,X,L,{data:0})}}export{le as component};
