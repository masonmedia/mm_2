(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),l=a("TSYQ"),i=a.n(l),s=a("q1tI"),o=a.n(s),c=a("vUet"),d=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.noGutters,u=e.as,f=void 0===u?"div":u,m=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(c.a)(a,"row"),b=p+"-cols",g=[];return d.forEach((function(e){var t,a=m[e];delete m[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&g.push(""+b+r+"-"+t)})),o.a.createElement(f,Object(r.a)({ref:t},m,{className:i.a.apply(void 0,[l,p,s&&"no-gutters"].concat(g))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},"7oih":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),i=a("wx14"),s=a("zLVn"),o=a("TSYQ"),c=a.n(o);a("E9XD"),a("QLaP");function d(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e,t){return Object.keys(t).reduce((function(a,n){var l,o=a,c=o[d(n)],f=o[n],m=Object(s.a)(o,[d(n),n].map(u)),p=t[n],b=function(e,t,a){var n=Object(r.useRef)(void 0!==e),l=Object(r.useState)(t),i=l[0],s=l[1],o=void 0!==e,c=n.current;return n.current=o,!o&&c&&i!==t&&s(t),[o?e:i,Object(r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];a&&a.apply(void 0,[e].concat(r)),s(e)}),[a])]}(f,c,e[p]),g=b[0],v=b[1];return Object(i.a)({},m,((l={})[n]=g,l[p]=v,l))}),e)}a("dI71"),a("94VI");var m=a("YdCC"),p=a("vUet"),b=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.as,o=Object(s.a)(e,["bsPrefix","className","as"]);a=Object(p.a)(a,"navbar-brand");var d=l||(o.href?"a":"span");return n.a.createElement(d,Object(i.a)({},o,{ref:t,className:c()(r,a)}))}));b.displayName="NavbarBrand";var g,v=b,h=a("7j6X"),E=a("YECM"),y=a("dRu9"),x=a("Qg85"),w=a("z+q/"),O={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function j(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],r=O[e];return a+parseInt(Object(h.a)(t,r[0]),10)+parseInt(Object(h.a)(t,r[1]),10)}var N=((g={})[y.c]="collapse",g[y.d]="collapsing",g[y.b]="collapsing",g[y.a]="collapse show",g),S={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:j},C=n.a.forwardRef((function(e,t){var a=e.onEnter,l=e.onEntering,o=e.onEntered,d=e.onExit,u=e.onExiting,f=e.className,m=e.children,p=e.dimension,b=void 0===p?"height":p,g=e.getDimensionValue,v=void 0===g?j:g,h=Object(s.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),O="function"==typeof b?b():b,S=Object(r.useMemo)((function(){return Object(x.a)((function(e){e.style[O]="0"}),a)}),[O,a]),C=Object(r.useMemo)((function(){return Object(x.a)((function(e){var t="scroll"+O[0].toUpperCase()+O.slice(1);e.style[O]=e[t]+"px"}),l)}),[O,l]),k=Object(r.useMemo)((function(){return Object(x.a)((function(e){e.style[O]=null}),o)}),[O,o]),R=Object(r.useMemo)((function(){return Object(x.a)((function(e){e.style[O]=v(O,e)+"px",Object(w.a)(e)}),d)}),[d,v,O]),P=Object(r.useMemo)((function(){return Object(x.a)((function(e){e.style[O]=null}),u)}),[O,u]);return n.a.createElement(y.e,Object(i.a)({ref:t,addEndListener:E.a},h,{"aria-expanded":h.role?h.in:null,onEnter:S,onEntering:C,onEntered:k,onExit:R,onExiting:P}),(function(e,t){return n.a.cloneElement(m,Object(i.a)({},t,{className:c()(f,m.props.className,N[e],"width"===O&&"width")}))}))}));C.defaultProps=S;var k=C,R=n.a.createContext(null);R.displayName="NavbarContext";var P=R,I=n.a.forwardRef((function(e,t){var a=e.children,r=e.bsPrefix,l=Object(s.a)(e,["children","bsPrefix"]);return r=Object(p.a)(r,"navbar-collapse"),n.a.createElement(P.Consumer,null,(function(e){return n.a.createElement(k,Object(i.a)({in:!(!e||!e.expanded)},l),n.a.createElement("div",{ref:t,className:r},a))}))}));I.displayName="NavbarCollapse";var L=I,V=a("ZCiN"),z=n.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.children,d=e.label,u=e.as,f=void 0===u?"button":u,m=e.onClick,b=Object(s.a)(e,["bsPrefix","className","children","label","as","onClick"]);a=Object(p.a)(a,"navbar-toggler");var g=Object(r.useContext)(P)||{},v=g.onToggle,h=g.expanded,E=Object(V.a)((function(e){m&&m(e),v&&v()}));return"button"===f&&(b.type="button"),n.a.createElement(f,Object(i.a)({},b,{ref:t,onClick:E,"aria-label":d,className:c()(l,a,!h&&"collapsed")}),o||n.a.createElement("span",{className:a+"-icon"}))}));z.displayName="NavbarToggle",z.defaultProps={label:"Toggle navigation"};var T=z,M=n.a.createContext(null),q=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},H=M,W=Object(m.a)("navbar-text",{Component:"span"}),K=n.a.forwardRef((function(e,t){var a=f(e,{expanded:"onToggle"}),l=a.bsPrefix,o=a.expand,d=a.variant,u=a.bg,m=a.fixed,b=a.sticky,g=a.className,v=a.children,h=a.as,E=void 0===h?"nav":h,y=a.expanded,x=a.onToggle,w=a.onSelect,O=a.collapseOnSelect,j=Object(s.a)(a,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),N=Object(p.a)(l,"navbar"),S=Object(r.useCallback)((function(){w&&w.apply(void 0,arguments),O&&y&&x&&x(!1)}),[w,O,y,x]);void 0===j.role&&"nav"!==E&&(j.role="navigation");var C=N+"-expand";"string"==typeof o&&(C=C+"-"+o);var k=Object(r.useMemo)((function(){return{onToggle:function(){return x&&x(!y)},bsPrefix:N,expanded:!!y}}),[N,y,x]);return n.a.createElement(P.Provider,{value:k},n.a.createElement(H.Provider,{value:S},n.a.createElement(E,Object(i.a)({ref:t},j,{className:c()(g,N,o&&C,d&&N+"-"+d,u&&"bg-"+u,b&&"sticky-"+b,m&&"fixed-"+m)}),v)))}));K.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},K.displayName="Navbar",K.Brand=v,K.Toggle=T,K.Collapse=L,K.Text=W;var _=K,A=(a("K9S6"),a("Wzyw")),D=a("Zeqi");var B=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var G=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var a=B(e),r=B(t);return function(e){a&&a(e),r&&r(e)}}(e,t)}),[e,t])},U=n.a.createContext(null);U.displayName="NavContext";var F=U,J=n.a.createContext(null),Y=function(){},Z=n.a.forwardRef((function(e,t){var a,l,o=e.as,c=void 0===o?"ul":o,d=e.onSelect,u=e.activeKey,f=e.role,m=e.onKeyDown,p=Object(s.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),b=Object(r.useReducer)((function(e){return!e}),!1)[1],g=Object(r.useRef)(!1),v=Object(r.useContext)(H),h=Object(r.useContext)(J);h&&(f=f||"tablist",u=h.activeKey,a=h.getControlledId,l=h.getControllerId);var E=Object(r.useRef)(null),y=function(e){var t=E.current;if(!t)return null;var a=Object(D.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var n=a.indexOf(r);if(-1===n)return null;var l=n+e;return l>=a.length&&(l=0),l<0&&(l=a.length-1),a[l]},x=function(e,t){null!=e&&(d&&d(e,t),v&&v(e,t))};Object(r.useEffect)((function(){if(E.current&&g.current){var e=E.current.querySelector("[data-rb-event-key].active");e&&e.focus()}g.current=!1}));var w=G(t,E);return n.a.createElement(H.Provider,{value:x},n.a.createElement(F.Provider,{value:{role:f,activeKey:q(u),getControlledId:a||Y,getControllerId:l||Y}},n.a.createElement(c,Object(i.a)({},p,{onKeyDown:function(e){var t;switch(m&&m(e),e.key){case"ArrowLeft":case"ArrowUp":t=y(-1);break;case"ArrowRight":case"ArrowDown":t=y(1);break;default:return}t&&(e.preventDefault(),x(t.dataset.rbEventKey,e),g.current=!0,b())},ref:w,role:f}))))})),Q=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.children,o=e.as,d=void 0===o?"div":o,u=Object(s.a)(e,["bsPrefix","className","children","as"]);return a=Object(p.a)(a,"nav-item"),n.a.createElement(d,Object(i.a)({},u,{ref:t,className:c()(r,a)}),l)}));Q.displayName="NavItem";var X=Q,$=a("dbZe"),ee=(a("2W6z"),n.a.forwardRef((function(e,t){var a=e.active,l=e.className,o=e.eventKey,d=e.onSelect,u=e.onClick,f=e.as,m=Object(s.a)(e,["active","className","eventKey","onSelect","onClick","as"]),p=q(o,m.href),b=Object(r.useContext)(H),g=Object(r.useContext)(F),v=a;if(g){m.role||"tablist"!==g.role||(m.role="tab");var h=g.getControllerId(p),E=g.getControlledId(p);m["data-rb-event-key"]=p,m.id=h||m.id,m["aria-controls"]=E||m["aria-controls"],v=null==a&&null!=p?g.activeKey===p:a}"tab"===m.role&&(m.tabIndex=v?m.tabIndex:-1,m["aria-selected"]=v);var y=Object(V.a)((function(e){u&&u(e),null!=p&&(d&&d(p,e),b&&b(p,e))}));return n.a.createElement(f,Object(i.a)({},m,{ref:t,onClick:y,className:c()(l,v&&"active")}))})));ee.defaultProps={disabled:!1};var te=ee,ae={disabled:!1,as:$.a},re=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.disabled,l=e.className,o=e.href,d=e.eventKey,u=e.onSelect,f=e.as,m=Object(s.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(p.a)(a,"nav-link"),n.a.createElement(te,Object(i.a)({},m,{href:o,ref:t,eventKey:d,as:f,disabled:r,onSelect:u,className:c()(l,a,r&&"disabled")}))}));re.displayName="NavLink",re.defaultProps=ae;var ne=re,le=n.a.forwardRef((function(e,t){var a,l,o,d=f(e,{activeKey:"onSelect"}),u=d.as,m=void 0===u?"div":u,b=d.bsPrefix,g=d.variant,v=d.fill,h=d.justify,E=d.navbar,y=d.className,x=d.children,w=d.activeKey,O=Object(s.a)(d,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),j=Object(p.a)(b,"nav"),N=!1,S=Object(r.useContext)(P),C=Object(r.useContext)(A.a);return S?(l=S.bsPrefix,N=null==E||E):C&&(o=C.cardHeaderBsPrefix),n.a.createElement(Z,Object(i.a)({as:m,ref:t,activeKey:w,className:c()(y,(a={},a[j]=!N,a[l+"-nav"]=N,a[o+"-"+g]=!!o,a[j+"-"+g]=!!g,a[j+"-fill"]=v,a[j+"-justified"]=h,a))},O),x)}));le.displayName="Nav",le.defaultProps={justify:!1,fill:!1},le.Item=X,le.Link=ne;var ie=le,se=a("cWnB"),oe=function(){return n.a.createElement(_,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",className:"shadow"},n.a.createElement(l.a,{className:"navbar-brand",to:"/",activeClassName:"active"},"mason",n.a.createElement("span",{className:"font-weight-bold"},"media")),n.a.createElement(_.Toggle,{className:"border-0 outline-0","aria-controls":"responsive-navbar-nav"},n.a.createElement("span",{class:"icon-bar top-bar"}),n.a.createElement("span",{class:"icon-bar middle-bar"}),n.a.createElement("span",{class:"icon-bar bottom-bar"})),n.a.createElement(_.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(ie,{className:"ml-auto d-flex"},n.a.createElement(l.a,{className:"nav-link",to:"/about"},"about"),n.a.createElement(l.a,{className:"nav-link",to:"/projects"},"projects"),n.a.createElement(l.a,{className:"nav-link",to:"/design"},"design"),n.a.createElement("a",{className:"nav-link",href:"mailto:andrewmasonmedia@gmail.com"},n.a.createElement(se.a,{variant:"dark"},"Contact")))))},ce=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.fluid,l=e.as,o=void 0===l?"div":l,d=e.className,u=Object(s.a)(e,["bsPrefix","fluid","as","className"]),f=Object(p.a)(a,"container"),m="string"==typeof r?"-"+r:"-fluid";return n.a.createElement(o,Object(i.a)({ref:t},u,{className:c()(d,r?""+f+m:f)}))}));ce.displayName="Container",ce.defaultProps={fluid:!1};var de=ce,ue=a("3Z9Z"),fe=a("JI6e");function me(){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"currentColor",className:"bi bi-box-arrow-in-down-left mb-3",viewBox:"0 0 16 16"},n.a.createElement("path",{fillRule:"evenodd",d:"M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z"}))}function pe(){return n.a.createElement("footer",null,n.a.createElement(de,{fluid:!0,className:"p-0 relative"},n.a.createElement(ue.a,{className:"bg-black text-light p-0"},n.a.createElement(fe.a,{xl:3,md:6,className:"align-left-top px-5 pt-5 font-weight-bold"},n.a.createElement(me,null),n.a.createElement("h3",{className:"mb-0"},"Menu."),n.a.createElement("div",{className:"h2 m-0 p-0"},"--"),n.a.createElement("ul",{className:"list-unstyled blockquote"},n.a.createElement(l.a,{to:"/"},n.a.createElement("li",null,"Home")),n.a.createElement(l.a,{to:"/about"},n.a.createElement("li",null,"About")),n.a.createElement(l.a,{to:"projects/"},n.a.createElement("li",null,"Projects")),n.a.createElement(l.a,{to:"/design"},n.a.createElement("li",null,"Design")))),n.a.createElement(fe.a,{xl:3,md:6,className:"align-left-top px-5 pt-5 font-weight-bold"},n.a.createElement(me,null),n.a.createElement("h3",{className:"mb-0"},"Work."),n.a.createElement("div",{className:"h3 m-0"},"--"),n.a.createElement("ul",{className:"list-unstyled blockquote"},n.a.createElement(l.a,{to:"/projects/wy"},n.a.createElement("li",null,"Warren Yen")),n.a.createElement(l.a,{to:"/projects/jaxx"},n.a.createElement("li",null,"Jaxx Liberty")),n.a.createElement(l.a,{to:"/projects/nw"},n.a.createElement("li",null,"Neil Whitford")),n.a.createElement(l.a,{to:"/projects/bhs"},n.a.createElement("li",null,"Big Horn Sheep")))),n.a.createElement(fe.a,{xl:3,md:6,className:"align-left-top px-5 pt-5 font-weight-bold"},n.a.createElement(me,null),n.a.createElement("h3",{className:"mb-0"},"More."),n.a.createElement("div",{className:"h3 m-0"},"--"),n.a.createElement("ul",{className:"list-unstyled blockquote"},n.a.createElement("a",{href:"https://github.com/masonmedia",target:"_blank",rel:"noreferrer"},n.a.createElement("li",null,"Github")),n.a.createElement("a",{href:"https://www.behance.net/andrewmasonmedia",target:"_blank",rel:"noreferrer"},n.a.createElement("li",null,"Behance")),n.a.createElement("a",{href:"http://copy.andrewmasonmedia.com/",target:"_blank",rel:"noreferrer"},n.a.createElement("li",null,"Writing")),n.a.createElement("a",{href:"https://soundcloud.com/big-horn-sheep",target:"_blank",rel:"noreferrer"},n.a.createElement("li",null,"Music")))),n.a.createElement(fe.a,{xl:3,md:6,className:"align-left-top px-5 pt-5 font-weight-bold"},n.a.createElement(me,null),n.a.createElement("h3",{className:"mb-0"},"Connect."),n.a.createElement("div",{className:"h3 m-0"},"--"),n.a.createElement("ul",{className:"list-unstyled blockquote"},n.a.createElement("a",{href:"https://www.linkedin.com/in/andrewmasonmedia/",target:"_blank",rel:"noreferrer"},n.a.createElement("li",null,"Linkedin")),n.a.createElement("a",{href:"https://www.facebook.com/andrewmasonmedia/",target:"blank"},n.a.createElement("li",null,"Facebook")),n.a.createElement("a",{href:"https://twitter.com/C_AndrewMason",target:"_blank",rel:"noreferrer"},n.a.createElement("li",null,"Twitter")),n.a.createElement("a",{href:"mailto:andrewmasonmedia@gmail.com"},n.a.createElement("li",null,"Email")))),n.a.createElement(fe.a,{sm:12,className:"flex-center font-weight-bold pt-4 pb-5"},n.a.createElement("p",{id:"copyright",className:"mb-0"},"Mason Media | © ",(new Date).getFullYear())))))}t.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(oe,null),n.a.createElement(de,{fluid:!0,className:e.containerClass+" p-0",style:e.containerStyle},e.children),n.a.createElement(pe,null))}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,l=r(a("PJYZ")),i=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(h&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(h&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},b=Object.create({}),g=function(e){var t=u(e),a=m(t);return b[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,E=h&&window.IntersectionObserver,y=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:l}),a&&c.default.createElement("source",{media:n,srcSet:a,sizes:l}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(l?'sizes="'+l+'" ':"")+"/>"}var S=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+c+i+s+a+r+t+l+n+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,l=e.spreadProps,i=e.ariaHidden,s=c.default.createElement(R,(0,o.default)({ref:t,src:a},l,{ariaHidden:i}));return r.length>1?c.default.createElement("picture",null,n(r),s):s})),R=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,l=e.style,i=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:i,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))}));R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var P=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)(a)),a.handleRef=a.handleRef.bind((0,l.default)(a)),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:h}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=S(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(b[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,l=void 0===n?{}:n,i=e.imgStyle,s=void 0===i?{}:i,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,b=e.fluid,g=e.fixed,v=e.backgroundColor,h=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,N=e.draggable,S=b||g;if(!S)return null;var P=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,o.default)({opacity:P?1:0,transition:I?"opacity "+h+"ms":"none"},s),V="boolean"==typeof v?"lightgray":v,z={transitionDelay:h+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&z,s,f),M={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:y},q=this.state.isHydrated?p(S):S[0];if(b)return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),V&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&z)}),q.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:M,imageVariants:S,generateSources:j}),q.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:M,imageVariants:S,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,x(S),c.default.createElement(R,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:w},q,{imageVariants:S}))}}));if(g){var H=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},l);return"inherit"===l.display&&delete H.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},V&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},I&&z)}),q.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:M,imageVariants:S,generateSources:j}),q.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:M,imageVariants:S,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,x(S),c.default.createElement(R,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:w},q,{imageVariants:S}))}}))}return null},t}(c.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function V(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}P.propTypes={resolutions:I,sizes:L,fixed:V(d.default.oneOfType([I,d.default.arrayOf(I)])),fluid:V(d.default.oneOfType([L,d.default.arrayOf(L)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var z=P;t.default=z},JI6e:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),l=a("TSYQ"),i=a.n(l),s=a("q1tI"),o=a.n(s),c=a("vUet"),d=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.as,u=void 0===s?"div":s,f=Object(n.a)(e,["bsPrefix","className","as"]),m=Object(c.a)(a,"col"),p=[],b=[];return d.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"==typeof n&&null!=n){var l=n.span;t=void 0===l||l,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+m+i:""+m+i+"-"+t),null!=r&&b.push("order"+i+"-"+r),null!=a&&b.push("offset"+i+"-"+a)})),p.length||p.push(m),o.a.createElement(u,Object(r.a)({},f,{ref:t,className:i.a.apply(void 0,[l].concat(p,b))}))}));u.displayName="Col",t.a=u},K9S6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function r(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];var n=null;return t.forEach((function(e){if(null==n){var t=e.apply(void 0,a);null!=t&&(n=t)}})),n}return(0,l.default)(r)};var r,n=a("pvIh"),l=(r=n)&&r.__esModule?r:{default:r};e.exports=t.default},Wzyw:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r).a.createContext(null);n.displayName="CardContext",t.a=n},pvIh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,r,n,l,i){var s=n||"<<anonymous>>",o=i||r;if(null==a[r])return t?new Error("Required "+l+" `"+o+"` was not specified in `"+s+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),u=6;u<c;u++)d[u-6]=arguments[u];return e.apply(void 0,[a,r,s,l,o].concat(d))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default}}]);
//# sourceMappingURL=5984fbde84a3a2a26276caa1f3b680cab55b7064-3881c27363c4f376a4b4.js.map