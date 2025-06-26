import{j as e,s as i,b as v}from"./index-02b2e517.js";import{r as n}from"./vendor-24687402.js";import{e as y}from"./utils-a704afdc.js";import{S as N,s as w}from"./SectionWrapper-61a44c48.js";import{s as S,a as W}from"./sendHover-c56f07c0.js";import{m as E}from"./animations-820da045.js";const _=()=>{const c="service_0qarrc2",d="template_nmfud0v",x="V15d_l2X-KzMzFQUp",p=n.useRef(null),[a,m]=n.useState({name:"",email:"",message:""}),[u,t]=n.useState(!1),[f,r]=n.useState(!1),h=()=>{r(!0)},g=()=>{r(!1)},s=o=>{const{name:l,value:j}=o.target;m({...a,[l]:j})},b=o=>{if(o.preventDefault(),t(!0),a.email==""||a.message==""||a.name==""){alert("Provide All Information"),t(!1);return}y.send(c,d,{from_name:a.name,to_name:"Vincent Jay Bano",from_email:a.email,to_email:"vincentjaybano45@gmail.com",message:a.message},x).then(()=>{t(!1),alert("Thank you. I will get back to you as soon as possible."),m({name:"",email:"",message:""})},l=>{t(!1),console.log(l),alert("Something went wrong. Please try again.")})};return e.jsx("div",{className:`-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-5 overflow-hidden`,children:e.jsxs(E.div,{variants:w("left","tween",.2,1),className:"flex-[100] bg-jet p-8 rounded-2xl",children:[e.jsx("p",{className:i.sectionSubText,children:"Get in touch"}),e.jsx("h3",{className:i.sectionHeadTextLight,children:"Contact."}),e.jsxs("form",{ref:p,onSubmit:b,className:"mt-10 flex flex-col gap-6 font-poppins",children:[e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-timberWolf font-medium mb-4",children:"Your Name"}),e.jsx("input",{type:"text",name:"name",value:a.name,onChange:s,placeholder:"What's your name?",className:`bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium`})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-timberWolf font-medium mb-4",children:"Your Email"}),e.jsx("input",{type:"email",name:"email",value:a.email,onChange:s,placeholder:"What's your email?",className:`bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium`})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-timberWolf font-medium mb-4",children:"Your Message"}),e.jsx("textarea",{rows:7,name:"message",value:a.message,onChange:s,placeholder:"What's your message?",className:`bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none`})]}),e.jsxs("button",{type:"submit",className:`live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out`,onMouseOver:h,onMouseOut:g,children:[u?"Sending":"Send",e.jsx(v.LazyLoadImage,{src:f?S:W,alt:"send",className:`contact-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain`,loading:"lazy"})]})]})]})})},B=N(_,"contact");export{B as default};
