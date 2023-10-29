import{r as l,j as e}from"./index-1d5072ab.js";import{S as v,t as w,f as d,a as N}from"./SectionWrapper-29adad87.js";import{s as o}from"./styles-c7b4a50b.js";import{p as y}from"./index-5924ee6a.js";import{m as n}from"./motion-d589c258.js";const k="/vanz_web/assets/github-3b4e1609.png",C="/vanz_web/assets/pineapple-21fd8460.png",S="/vanz_web/assets/pineappleHover-2f13f8ae.png",z=({id:t,name:s,description:a,image:i,repo:f,demo:h,index:u,active:r,handleClick:c})=>{const[j,p]=l.useState(!1),[x,m]=l.useState(0),g=()=>{p(!0)},b=()=>{p(!1)};return e.jsxs(n.div,{variants:d("right","spring",u*.5,.75),className:`relative  ${r===t?"lg:flex-[3.5] flex-[10]":"lg:flex-[0.5] flex-[2]"} flex items-center justify-center min-w-[170px] 
    h-[420px] cursor-pointer card-shadow`,onClick:()=>{m(x+1),x>=2?(c("project-1"),m(1)):c(t)},children:[e.jsx("div",{className:`absolute top-0 left-0 z-10 bg-jetLight 
    h-full w-full opacity-[0.5] rounded-[24px]`}),e.jsx("img",{src:i,alt:s,className:"absolute w-full h-full object-cover rounded-[24px]"}),r!==t?e.jsx("div",{className:"flex items-center justify-start pr-[4.5rem]",children:e.jsx("h3",{className:`font-extrabold font-beckman uppercase w-[200px] h-[30px] 
      whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
      absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
      leading-none `,children:s})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:`absolute bottom-0 p-8 justify-start w-full 
          flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20`,children:[e.jsx("div",{className:"absolute inset-0 flex justify-end m-3",children:e.jsx("div",{onClick:()=>window.open(f,"_blank"),className:`bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                flex justify-center items-center cursor-pointer
                sm:opacity-[0.9] opacity-[0.8]`,children:e.jsx("img",{src:k,alt:"source code",className:"w-4/5 h-4/5 object-contain"})})}),e.jsx("h2",{className:`font-bold sm:text-[32px] text-[24px] 
            text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]`,children:s}),e.jsx("p",{className:`text-silver sm:text-[14px] text-[12px] 
            max-w-3xl sm:leading-[24px] leading-[18px]
            font-poppins tracking-[1px]`,children:a}),e.jsxs("button",{className:`live-demo flex justify-between 
            sm:text-[16px] text-[14px] text-timberWolf 
            font-bold font-beckman items-center py-5 pl-2 pr-3 
            whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
            w-[125px] h-[46px] rounded-[10px] glassmorphism 
            sm:mt-[22px] mt-[16px] hover:bg-battleGray 
            hover:text-eerieBlack transition duration-[0.2s] 
            ease-in-out`,onClick:()=>window.open(h,"_blank"),onMouseOver:g,onMouseOut:b,children:[e.jsx("img",{src:j?S:C,alt:"pineapple",className:`btn-icon sm:w-[34px] sm:h-[34px] 
                w-[30px] h-[30px] object-contain`}),"LIVE DEMO"]})]})})]})},H=()=>{const[t,s]=l.useState("project-1");return e.jsxs("div",{className:"-mt-[6rem]",children:[e.jsxs(n.div,{variants:w(.1),children:[e.jsx("p",{className:`${o.sectionSubText} `,children:"Case Studies"}),e.jsx("h2",{className:`${o.sectionHeadTextLight}`,children:"Projects."})]}),e.jsx("div",{className:"w-full flex",children:e.jsx(n.p,{variants:d("","",.1,1),className:"mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]",children:"These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects."})}),e.jsx(n.div,{variants:N(.1,.2),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:`${o.innerWidth} mx-auto flex flex-col`,children:e.jsx("div",{className:"mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5",children:y.map((a,i)=>e.jsx(z,{index:i,...a,active:t,handleClick:s},a.id))})})]})},E=v(H,"projects");export{E as default};
