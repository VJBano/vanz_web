import{j as n}from"./vendor-b25593db.js";import{s as r}from"./styles-c7b4a50b.js";import{m as i}from"./motion-f5dfb658.js";const y=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),u=(t,a,s,e)=>({hidden:{x:t==="left"?100:t==="right"?-100:0,y:t==="up"?100:t==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:a,delay:s,duration:e,ease:"easeOut"}}}),m=(t,a,s,e)=>({hidden:{x:t==="left"?"-100%":t==="right"?"100%":0,y:t==="up"||t==="down"?"100%":0},show:{x:0,y:0,transition:{type:a,delay:s,duration:e,ease:"easeOut"}}}),o=(t,a)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:a||0}}}),p=(t,a)=>{function s(){return n.jsxs(i.section,{variants:o(.1,.2),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:`${r.padding} max-w-7xl mx-auto relative z-0`,children:[n.jsx("span",{className:"hash-span",id:a,children:" "}),n.jsx(t,{})]})}return s},x=p;export{x as S,o as a,u as f,m as s,y as t};
