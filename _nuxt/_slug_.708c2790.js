import{d as l,p as i,_ as d}from"./posts.da0e17ac.js";import{f,u as g,w as y,p as h,c as r,b as x,i as k,k as w,o as e,a as B,F as P,r as C,g as N,h as $}from"./entry.1f35e69d.js";import{u as A}from"./query.29e866b6.js";import"./formatDate.19cb4fd8.js";import"./_commonjsHelpers.de833af9.js";import"./preview.ae6d97e9.js";const F={class:"posts"},Y={__name:"[slug]",async setup(L){let t,a;const s=f().params.slug;g({title:`#${s} - Preetham`});const{data:c}=([t,a]=y(()=>A(`${s}-tag-posts`,()=>l({tags:{$contains:s}}))),t=await t,a(),t),u=h(()=>{const o=c.value;return i(o)});return(o,b)=>{const _=d,p=w;return e(),r("main",null,[x(p,null,{default:k(()=>[B("section",F,[(e(!0),r(P,null,C(N(u),([n,m])=>(e(),$(_,{key:n,year:n,posts:m},null,8,["year","posts"]))),128))])]),_:1})])}}};export{Y as default};
