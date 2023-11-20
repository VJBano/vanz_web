import{r as m,g as q,j as d}from"./index-340b0fa4.js";import{s as Y}from"./styles-c7b4a50b.js";import{e as H}from"./index-c30c7a3f.js";import{S as _,t as z}from"./SectionWrapper-d1e7fb35.js";import{m as $}from"./motion-16ba633d.js";const ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAETklEQVR4nO2dS4gdRRSGS8HXSnTjI64Ft2p8bEQFE4yZRMWFC9GN6E5RfCIhCtlmqxu3KoJkFVBwpzirC5Op/3Sd6smEiWYzoohCGJPx0XLmTsgQ753pnn5Vbv8fnM3Qt05Xfbe7uutW1ThHCCGEEEIIIYQQQghpndFodB0Q9onENy28D0/Y39j0PQDooyK6LBKLrQHE01mWP0IpHSISHxeJ61fK2CLlogmjlA5YWlq6AYg/TpOxRcqKHUspLZNl8fBOMi5L0TkKaRlAPyorRCQepZD2hRyvcIUcpxAKGRbgFZIWoJC0AIWkBSgkLUAhaQEKSQtQSFqAQtICFJIWoJC0AIWkBSgkLUAhaQEKSQtQSFqAQtICFJIWoJC0AIWkBSgkLUAhaQEKSQtQSFqAQjpb53EQ0A9F4jHv4wuj0Zmb2xJiZVsOy2U5LTfXlWwSQnho0joPkfgbkL/YtBCR8JKVPWVdyYNuyABxr4iu7dCw7zYlxMra/jO65r3e54ZIURTXiuhiuYaN79QVYmWU+5yeKoriGjfMW1XpZQUFoG/vVoh9tlquuNcNDRF9tUojyUaE96sKEYlvVM0DxJfd0BDRV6oLidZYZ9s4dvBC7IlmN40lHcQgb1mbnfqpvhtf/n+bWxhkp254r/eXeOwtugtdCyHc64aM7cQA6J99y8DG2vZwsO/2SIK+pWC80cBsLKFuanF+lsUnAb3QQ59xwXI3UYfeNipYXFy6SyR+IhJXL917Af267nYWWZYf6FLKWEZ+oIFtPr7ZcoWviujHCwv5HtfVGzYQf51SwX9F4nt1yvc+f6oLKZbDctU5V0A/2KzzpPJ/aX2wUkRuFdGfd6qsbX9RJw82huLjxZQ7cO/zZ0rkWvXe3+LawraqKFdpXaybC9C5NqQ01YEDESVzHnFtIRLny1ZcVe+sn08PNSllXJYeaqgPLZv3B9cWFceRGhl+yLJ4uAkpVkbdW+klRPIHKuQ920TOKSei58qeiPfh4abyZvWfvtazLD7d1PlY3crn1nNu1oTUfPpatw7YNQiFbAKEZ7fb2m/Ct/NvIH/eNQyF7EpKOzIMCrkCEX1uBynrdoxrCQqZAKCPieiZCVfGcts7klLIFETkekD324yScYR9XUx4o5DEoJDESEaITbcs/4Y6u7++ATpX4U39dJsn8n2Fb8ay9/raeLrP7ASgr09+mJgmRL9rTYiIflFj+GKQAcTPE5ttOOxAm7Mgvfe3AfpP35WUqyTGbSW3uzYR0RN9V1SunvjKtU0I4e5qA3yDjb+A/B6X4H8oGGocdV1hc18B/TKBShdphp6wucuuS+bnf7rJHun6r3xMKoD42crKyo2uD8ZXysZSsfN9N4T0H+cBfSuJmfM2w8RmMgL6RwINU3Qb+rvNVAwh3OFS4/JwuHX6+qmIngT021kKET1pdRuvb9f9Vue+250QQgghhBBCCCGEEEIIIW47/gN/nclRh6/LjAAAAABJRU5ErkJggg==",te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEG0lEQVR4nO2dS4gdRRSGawRfK9GNxun6/+phEJylo9FsRAUNGWcSIy5ciG4k7hTF+EDECG6z1Y1blUDIKqDgTtGtCS5nxEg2iiIKITrxMXJMDwx6b+7t213dJ9P/B2cz9O3TdT66q29NVd0QhBBCCCGEEEIIIYQQ2VleXr42pfQIyZcsYowP299U+h4g+QDJDZJb/4n1lNL9ktIhAB4CcGmEjH8DwKYJk5QOWFxcvB7Ad+Nk7JDyrR0rKZlJKR2aJGM7YoxrEpIZkm9PKwTAWxKSGQDHawg5LiESMiygO8QXkBBfQEJ8AQnxBSTEF5AQX0BCfAEJ8QUkxBeQEF9AQnwBCfEFJMQXkBBfQEJ8AQnxBSTEF5AQX0BCfAEJ8QUkxBeQEF9AQnwBCcmPrekAsEryGIB3ADy1sLBwUy4hdm7LYbmqnKtaV1JB8r4x6zx+jjE+3baQlNIzdu4x60ruDUOmKIp7SF6cUNRX2xJi55rwmYsAlsNAuQbA2SkL+0pTIXaOKT9zJoQwFwb6qJqqsLxcqKOzCrHP1slld24YGiml5+oUiZfj9bpCSL5YNw+AZ8PQAHBkBiFbAM7lOHbwQuyNZpZisYMY5COr6tTP9F18/v/u+GqQnboRY7x70msvuw177b0rDBnbiQHAb33LALBp39j7rocL+pYCYHPXLKFua3E+yQMAfu9BhuU80EYbetuoYH5+vgDwHoDvdzx7P266nQXJlS6lVLlWWtjm45PtO9xqAuDdoijmQ4ffsH8a08i/Sb7W5PwAHu1CiuWwXA1r8UbV5lE5fsw+WFkUxS0AfpjUWNv+okkeAKvVBjJuO3CSh6fIY3fLzSEXtlXFlA0+2zRXjHEth5S2OnCSX0+Z782QCwBfTtvwGOPtTfPFGA+2KaWScbCNPrRG3i9CLuqMDbU1/JBSOtSGFDtH00fpNmVZ7q2R91zIBcnzNYqwr8W8K006+mqzs8davJ59NfKfbyuvGyFN3r4qGYdDi0hIBcnHr7S134j4k+SToWUkZDYpWWRU16BH1k4APDFhE8xLdkzIhISMgOSDJL8ZIWQj946kEjKGpaWl61JK+21GiYWNGncx4U1CnCEhzvAkZL3G+/+u/e9bjHGthpD1bBdC8vMaF7IB4Hmb7rObIsb4wpiXiXHxWTYhAD6adfhiqAHgQ2+zDQcdyDkLsizLW0n+1XcjefWE1eq2kBMApxw0dOsqiZMhN2VZ3lFzgG+o8QfJO4O3XygYaqDjX2aYI3mi70bTadhj3eYudynEZqDcaK90fTeezgLAByRvCD0xVy0Vu9B3Idh/XADwsouZ8zbDpJrJ+OsA74hfbKYigD3BG9vD4VWn/z7J0yQ/3WVxumrbMWurtbnvugshhBBCCCGEEEIIIYQQIlyJfwAaengNkrLaVwAAAABJRU5ErkJggg==",ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvUlEQVR4nO2dy0sVURzHjwnWqiyISHehLSzCRVC00B4WRO1koH+gFla6rE3ULjDJVq6K1qHZAyqDzJa1CMxemxZlYY9N2mOj0CcOjnGFdF73en/nnN8HZuc932E+zj0zv/O7M8YoiqIoiqIojgBsANqByNOtHVhvpANsBW4Cc/jPHDAENBuJAIeAH4THDNBhBJ4ZIcooldJkpAAM/9u1cBk0gibwEOaMJGZFTPTAvsRdDYd2CUI6q30UBNEpQYi9LlfmiartQ4UEIuQX8By4F2/vcQPvhDwDjgJrlpirppCNV0LOAasSslqAaeTijZCLGTP3AC+RhxdC3gJ1OXI3Ap+RhRdCugpk9yAL54X8sf/pBbI3xWNIwXkh78qQ/wE5OC/kURnynyIH54XcKkP+HeTgvJDRMuSPIgfnhXwDagrmTyEH54VYdhXI3oksnBfyHWgskN0orJTivJCxMuQ/yZF7La6L1S4z7mbgZMbmDeeFTJYh/2PGzKsZxz+Y4ebTeSGWAwWyO3LkteTIeROSkJ95mgOYb+e0n83K2hxZD0MSYhnIkTuQMytTlyGwGvgampDfWa62mL+6sp/JwwRQnzKnBricYWxvhFjuprlJjA+S/dsifAIuAMeW6XDvyXEF55UQS2+KvF7k4p2QVynyJC7dLqBChOGdkPEUeePIxTshZ1LknUUu3gixpYn+5WpLJXm1wBVk4rwQK+J+nhI8sBt4kLPJYRI4n3DZ2w08DknICNBahvzWDKUNywtgXcqx7T1Pn+9C5or0Yi0FcCrlL7kyFTNtE5/vpZPjFdyXEynytbhYwnClZCwA3E4QouX3ErabCgPsSBByPeN49ucR+PiVNbGC+zSRJAXYlrCE2wCczrjm4pSQEIiq7UOFLEaFCEOFCEOFCEOFCEOFCEOFCEOFCEOFCMM5IfZReF22s9wIh0C63w8bx8Dj7vfEniup+Nr9PmIcBU+737/keaZJtfG9+72v6K9uV5JQut/H4s7ySPjWo93v7uPkGeIzUbV9qJDFqBBhqBBhqBBhOClkNO4sj4Rv3SF0v19y8Mawz1chrpZO6nwtnWhxUZiQ18ZR8LT8bjliHAOPu9+Jl0PtsmiDEQ7a/e4Fzp0hvhNV24cKWYwKEYYKEYYKEYYIIfpiSWEvltxbskOh0yZBSH38Yt7QmRXxcmILMFTtoyGAG0YKQHPc2R4q08AWI4n4sd8zgcrYbyQCNAGDgcwps/ZrStyZ8T/s5GavOASsi0cV2trSPh1bURRFURRFMQL4C6b7/Ri1ZZoBAAAAAElFTkSuQmCC";var I={},D={exports:{}},re="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ie=re,oe=ie;function L(){}function U(){}U.resetWarningCache=L;var ae=function(){function e(o,t,i,c,a,s){if(s!==oe){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:U,resetWarningCache:L};return r.PropTypes=r,r};D.exports=ae();var P=D.exports,M={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var o=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var c=typeof i;if(c==="string"||c==="number")o.push(i);else if(Array.isArray(i)){if(i.length){var a=r.apply(null,i);a&&o.push(a)}}else if(c==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){o.push(i.toString());continue}for(var s in i)n.call(i,s)&&i[s]&&o.push(s)}}}return o.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(M);var K=M.exports;I.__esModule=!0;I.default=void 0;var se=V(m),A=V(P),le=V(K);function V(e){return e&&e.__esModule?e:{default:e}}const G=({animate:e=!0,className:n="",layout:r="2-columns",lineColor:o="#FFF",children:t})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",o),se.default.createElement("div",{className:(0,le.default)(n,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},t));G.propTypes={children:A.default.oneOfType([A.default.arrayOf(A.default.node),A.default.node]).isRequired,className:A.default.string,animate:A.default.bool,layout:A.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:A.default.string};var ce=G;I.default=ce;var S={};function B(){return B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},B.apply(this,arguments)}function ue(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,Q(e,n)}function Q(e,n){return Q=Object.setPrototypeOf||function(o,t){return o.__proto__=t,o},Q(e,n)}function de(e,n){if(e==null)return{};var r={},o=Object.keys(e),t,i;for(i=0;i<o.length;i++)t=o[i],!(n.indexOf(t)>=0)&&(r[t]=e[t]);return r}var N=new Map,E=new WeakMap,W=0,Z=void 0;function fe(e){Z=e}function pe(e){return e?(E.has(e)||(W+=1,E.set(e,W.toString())),E.get(e)):"0"}function he(e){return Object.keys(e).sort().filter(function(n){return e[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?pe(e.root):e[n])}).toString()}function me(e){var n=he(e),r=N.get(n);if(!r){var o=new Map,t,i=new IntersectionObserver(function(c){c.forEach(function(a){var s,u=a.isIntersecting&&t.some(function(f){return a.intersectionRatio>=f});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=o.get(a.target))==null||s.forEach(function(f){f(u,a)})})},e);t=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:i,elements:o},N.set(n,r)}return r}function T(e,n,r,o){if(r===void 0&&(r={}),o===void 0&&(o=Z),typeof window.IntersectionObserver>"u"&&o!==void 0){var t=e.getBoundingClientRect();return n(o,{isIntersecting:o,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),function(){}}var i=me(r),c=i.id,a=i.observer,s=i.elements,u=s.get(e)||[];return s.has(e)||s.set(e,u),u.push(n),a.observe(e),function(){u.splice(u.indexOf(n),1),u.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),N.delete(c))}}var Ae=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function J(e){return typeof e.children!="function"}var C=function(e){ue(n,e);function n(o){var t;return t=e.call(this,o)||this,t.node=null,t._unobserveCb=null,t.handleNode=function(i){t.node&&(t.unobserve(),!i&&!t.props.triggerOnce&&!t.props.skip&&t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=i||null,t.observeNode()},t.handleChange=function(i,c){i&&t.props.triggerOnce&&t.unobserve(),J(t.props)||t.setState({inView:i,entry:c}),t.props.onChange&&t.props.onChange(i,c)},t.state={inView:!!o.initialInView,entry:void 0},t}var r=n.prototype;return r.componentDidUpdate=function(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var t=this.props,i=t.threshold,c=t.root,a=t.rootMargin,s=t.trackVisibility,u=t.delay,f=t.fallbackInView;this._unobserveCb=T(this.node,this.handleChange,{threshold:i,root:c,rootMargin:a,trackVisibility:s,delay:u},f)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!J(this.props)){var t=this.state,i=t.inView,c=t.entry;return this.props.children({inView:i,entry:c,ref:this.handleNode})}var a=this.props,s=a.children,u=a.as,f=de(a,Ae);return m.createElement(u||"div",B({ref:this.handleNode},f),s)},n}(m.Component);C.displayName="InView";C.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function ve(e){var n=e===void 0?{}:e,r=n.threshold,o=n.delay,t=n.trackVisibility,i=n.rootMargin,c=n.root,a=n.triggerOnce,s=n.skip,u=n.initialInView,f=n.fallbackInView,h=m.useRef(),y=m.useState({inView:!!u}),b=y[0],x=y[1],O=m.useCallback(function(g){h.current!==void 0&&(h.current(),h.current=void 0),!s&&g&&(h.current=T(g,function(k,j){x({inView:k,entry:j}),j.isIntersecting&&a&&h.current&&(h.current(),h.current=void 0)},{root:c,rootMargin:i,threshold:r,trackVisibility:t,delay:o},f))},[Array.isArray(r)?r.toString():r,c,i,a,s,t,f,o]);m.useEffect(function(){!h.current&&b.entry&&!a&&!s&&x({inView:!!u})});var p=[O,b.inView,b.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const ge=Object.freeze(Object.defineProperty({__proto__:null,InView:C,default:C,defaultFallbackInView:fe,observe:T,useInView:ve},Symbol.toStringTag,{value:"Module"})),ye=q(ge);S.__esModule=!0;S.default=void 0;var v=F(m),l=F(P),w=F(K),be=ye;function F(e){return e&&e.__esModule?e:{default:e}}const X=({children:e="",className:n="",contentArrowStyle:r=null,contentStyle:o=null,date:t="",dateClassName:i="",icon:c=null,iconClassName:a="",iconOnClick:s=null,onTimelineElementClick:u=null,iconStyle:f=null,id:h="",position:y="",style:b=null,textClassName:x="",intersectionObserverProps:O={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:p=!1})=>v.default.createElement(be.InView,O,({inView:g,ref:k})=>v.default.createElement("div",{ref:k,id:h,className:(0,w.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":y==="left","vertical-timeline-element--right":y==="right","vertical-timeline-element--no-children":e===""}),style:b},v.default.createElement(v.default.Fragment,null,v.default.createElement("span",{style:f,onClick:s,className:(0,w.default)(a,"vertical-timeline-element-icon",{"bounce-in":g||p,"is-hidden":!(g||p)})},c),v.default.createElement("div",{style:o,onClick:u,className:(0,w.default)(x,"vertical-timeline-element-content",{"bounce-in":g||p,"is-hidden":!(g||p)})},v.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,v.default.createElement("span",{className:(0,w.default)(i,"vertical-timeline-element-date")},t)))));X.propTypes={children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]),className:l.default.string,contentArrowStyle:l.default.shape({}),contentStyle:l.default.shape({}),date:l.default.node,dateClassName:l.default.string,icon:l.default.element,iconClassName:l.default.string,iconStyle:l.default.shape({}),iconOnClick:l.default.func,onTimelineElementClick:l.default.func,id:l.default.string,position:l.default.string,style:l.default.shape({}),textClassName:l.default.string,visible:l.default.bool,intersectionObserverProps:l.default.shape({root:l.default.object,rootMargin:l.default.string,threshold:l.default.number,triggerOnce:l.default.bool})};var xe=X;S.default=xe;var R={VerticalTimeline:I.default,VerticalTimelineElement:S.default};const Ee="/vanz_web/assets/resume-updated-2023-92a1abbb.pdf",we=({experience:e})=>d.jsx(R.VerticalTimelineElement,{contentStyle:{background:"#eaeaec",color:"#292929",boxShadow:"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:e.date.toString(),iconStyle:{background:e.iconBg},icon:d.jsx("div",{className:"flex justify-center items-center w-full h-full",children:d.jsx("img",{src:e.icon,alt:e.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:d.jsxs("div",{children:[d.jsx("h3",{className:"text-jetLight text-[24px] font-bold font-beckman tracking-[2px]",children:e.title}),d.jsx("p",{className:"text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]",style:{margin:0},children:e.company_name})]})}),Ce=()=>{const[e,n]=m.useState(!1),r=()=>{n(!0)},o=()=>{n(!1)},t=()=>{const i=document.createElement("a");i.href=Ee,i.download="resume-updated-2023.pdf",i.click()};return d.jsxs(d.Fragment,{children:[d.jsxs($.div,{variants:z(.5),children:[d.jsx("p",{className:`${Y.sectionSubText} sm:pl-16 pl-[2rem]`,children:"What I've done so far"}),d.jsx("h2",{className:`${Y.sectionHeadText} sm:pl-16 pl-[2rem]`,children:"Work Experience."})]}),d.jsx("div",{className:"mt-20 flex flex-col",children:d.jsxs(R.VerticalTimeline,{className:"vertical-timeline-custom-line",children:[H.map((i,c)=>d.jsx(we,{experience:i},c)),d.jsx(R.VerticalTimelineElement,{contentStyle:{background:"#eaeaec",color:"#292929",boxShadow:"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",display:"flex",justifyContent:"center",alignItems:"center"},contentArrowStyle:{borderRight:"7px solid  #232631"},iconStyle:{background:"#333333"},icon:d.jsx("div",{className:"flex justify-center items-center w-full h-full",children:d.jsx("img",{src:ne,alt:"resume",className:"w-[45%] h-[45%] object-contain"})}),children:d.jsxs("button",{className:`live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out`,onClick:()=>t(),onMouseOver:r,onMouseOut:o,children:["MY RESUME",d.jsx("img",{src:e?ee:te,alt:"download",className:`download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain`})]})})]})})]})},Qe=_(Ce,"work");export{Qe as default};