import x from"./ContentRenderer.4b54a764.js";import{u as w,e as C,f as $,w as v,n as S,c as h,g as s,h as f,i as g,j as B,a,k as D,o as l,t as c,l as m,b as T,F as M,r as N,m as j}from"./entry.fc505427.js";import{u as A,q as R}from"./query.15653de8.js";import{f as V}from"./formatDate.19cb4fd8.js";import"./ContentRendererMarkdown.vue.aaed1fe0.js";import"./preview.667995fb.js";import"./_commonjsHelpers.de833af9.js";function G(_,o){const{title:i,titleTemplate:n,...p}=_;return w({title:i,titleTemplate:n,_flatMeta:p},{...o,transform(t){const e=C({...t._flatMeta});return delete t._flatMeta,{...t,meta:e}}})}const I=a("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css",integrity:"sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG",crossorigin:"anonymous"},null,-1),F={class:"article-title"},L={class:"article-date"},P=a("hr",null,null,-1),U=a("p",{class:"article-footer"},[m(" Written by "),a("a",{href:"https://www.twitter.com/preethamrn"},"@preethamrn"),m(": Software developer at Uber with a degree in CS. Go, Storage, Distributed Systems, Bouldering, Rubik's Cubes. "),a("a",{href:"https://www.github.com/preethamrn"},"Github")],-1),Y={__name:"[slug]",async setup(_){let o,i;const n=$(),p=`post-${n.path}`.replace(/\/$/,""),{data:t}=([o,i]=v(()=>A(p,()=>R("/posts").where({link:n.params.slug}).findOne(),"$8aXH2AyeMX")),o=await o,i(),o);(!t||!t.value)&&S(`/404?post=${n.params.slug}`,{redirectCode:404});const e=t.value,d="https://www.preethamrn.com";if(e){const r=e.thumbnail?`${d}/posts/${e.thumbnail}`:`${d}${e._path}/thumbnail.png`;G({title:e.title,ogTitle:e.title,twitterTitle:e.title,description:e.description,ogDescription:e.description,twitterDescription:e.description,twitterCard:"summary",ogImage:r,twitterImage:r,ogUrl:`preethamrn.com/posts/${e.link}`}),w({script:[{async:!0,src:"https://platform.twitter.com/widgets.js"}]})}return(r,q)=>{const y=x,k=j,b=D;return l(),h("main",null,[I,s(t)?(l(),f(b,{key:0,class:"article prose"},{default:g(()=>[a("h1",F,c(s(t).title),1),a("p",L,[m(c(("formatDate"in r?r.formatDate:s(V))(s(t).date))+" · ",1),a("i",null,c(s(t).timeToRead)+" min read",1)]),T(y,{value:s(t)},null,8,["value"]),P,(l(!0),h(M,null,N(s(t).tags,u=>(l(),f(k,{class:"article-tag",to:`/posts/tag/${u}`,key:u},{default:g(()=>[m(" #"+c(u),1)]),_:2},1032,["to"]))),128)),U]),_:1})):B("",!0)])}}};export{Y as default};