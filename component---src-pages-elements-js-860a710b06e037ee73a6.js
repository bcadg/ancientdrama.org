webpackJsonp([65868693374900],{27:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function u(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){w.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var n=l(9),i=a(n),r=l(13),s=a(r),c=l(12),d=a(c),m=l(41),o=a(m),f=l(40),E=a(f),p=l(1),h=a(p),g=l(2),v=a(g),b=function(e){var t=(0,E.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},y={},N=function(e){var t=b(e),l=t.sizes?t.sizes.src:t.resolutions.src;return!!y[l]||(y[l]=!0,!1)},S=void 0,w=[],I=function(e,t){u().observe(e),w.push([e,t])},q=null,z=function(){if(null!==q)return q;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return q=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',l=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.sizes?'sizes="'+e.sizes+'" ':"",u=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+i+r+t+l+n+u+a+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},x=function(e){var t=e.style,l=e.onLoad,a=(0,o.default)(e,["style","onLoad"]);return h.default.createElement("img",(0,E.default)({},a,{onLoad:l,style:(0,E.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};x.propTypes={style:v.default.object,onLoad:v.default.func};var F=function(e){function t(l){(0,i.default)(this,t);var a=(0,s.default)(this,e.call(this,l)),u=!0,n=!0,r=!1,c=N(l);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(u=!1,n=!1,r=!0),"undefined"==typeof window&&(u=!1,n=!1),a.state={isVisible:u,imgLoaded:n,IOSupported:r},a.handleRef=a.handleRef.bind(a),a}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&I(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),l=t.title,a=t.alt,u=t.className,n=t.outerWrapperClassName,i=t.style,r=void 0===i?{}:i,s=t.imgStyle,c=void 0===s?{}:s,d=t.placeholderStyle,m=void 0===d?{}:d,o=t.sizes,f=t.resolutions,p=t.backgroundColor,g=t.Tag,v=void 0;v="boolean"==typeof p?"lightgray":p;var y=(0,E.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c,m),N=(0,E.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(o){var S=o;return S.srcWebp&&S.srcSetWebp&&z()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),h.default.createElement(g,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},h.default.createElement(g,{className:(u?u:"")+" gatsby-image-wrapper",style:(0,E.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},h.default.createElement(g,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&h.default.createElement(x,{alt:a,title:l,src:S.base64,style:y}),S.tracedSVG&&h.default.createElement(x,{alt:a,title:l,src:S.tracedSVG,style:y}),v&&h.default.createElement(g,{title:l,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&h.default.createElement(x,{alt:a,title:l,srcSet:S.srcSet,src:S.src,sizes:S.sizes,style:N,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,E.default)({alt:a,title:l},S))}})))}if(f){var w=f,I=(0,E.default)({position:"relative",overflow:"hidden",display:"inline-block",width:w.width,height:w.height},r);return"inherit"===r.display&&delete I.display,w.srcWebp&&w.srcSetWebp&&z()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),h.default.createElement(g,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},h.default.createElement(g,{className:(u?u:"")+" gatsby-image-wrapper",style:I,ref:this.handleRef},w.base64&&h.default.createElement(x,{alt:a,title:l,src:w.base64,style:y}),w.tracedSVG&&h.default.createElement(x,{alt:a,title:l,src:w.tracedSVG,style:y}),v&&h.default.createElement(g,{title:l,style:{backgroundColor:v,width:w.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:w.height}}),this.state.isVisible&&h.default.createElement(x,{alt:a,title:l,width:w.width,height:w.height,srcSet:w.srcSet,src:w.src,style:N,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,E.default)({alt:a,title:l,width:w.width,height:w.height},w))}})))}return null},t}(h.default.Component);F.defaultProps={fadeIn:!0,alt:"",Tag:"div"},F.propTypes={responsiveResolution:v.default.object,responsiveSizes:v.default.object,resolutions:v.default.object,sizes:v.default.object,fadeIn:v.default.bool,title:v.default.string,alt:v.default.string,className:v.default.oneOfType([v.default.string,v.default.object]),outerWrapperClassName:v.default.oneOfType([v.default.string,v.default.object]),style:v.default.object,imgStyle:v.default.object,placeholderStyle:v.default.object,position:v.default.string,backgroundColor:v.default.oneOfType([v.default.string,v.default.bool]),onLoad:v.default.func,Tag:v.default.string},t.default=F},141:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}function n(e){return Object.keys(e).filter(function(t){return e[t]===!0}).join(" ")}t.__esModule=!0;var i=l(1),r=a(i),s=l(2),c=a(s),d=l(6),m=a(d),o=function(e){var t=e.to,l=e.className,a=e.onClick,i=e.children,s=u(e,["to","className","onClick","children"]);return t?r.default.createElement(m.default,{to:t,className:(l||"")+" button "+n(s)},i):r.default.createElement("button",{onClick:a,className:(l||"")+" button "+n(s)},i)};o.propTypes={primary:c.default.bool,large:c.default.bool,small:c.default.bool,fit:c.default.bool,disabled:c.default.bool,to:c.default.string,className:c.default.string},t.default=o,e.exports=t.default},29:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(1),n=a(u),i=function(e){var t=e.children;return n.default.createElement("section",{className:"features"},t)};t.default=i,e.exports=t.default},59:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(1),n=a(u),i=function(e){var t=e.children;return n.default.createElement("header",null,n.default.createElement("div",{className:"inner"},t))};t.default=i,e.exports=t.default},62:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(1),n=a(u),i=function(e){var t=e.children;return n.default.createElement("section",{id:"wrapper"},t)};t.default=i,e.exports=t.default},30:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(1),n=a(u),i=l(6),r=a(i),s=function(e){var t=e.children,l=e.to;return n.default.createElement(r.default,{to:l||"/",className:"special"},t)};t.default=s,e.exports=t.default},17:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(1),n=a(u),i=function(e){var t=e.className,l=e.children;return n.default.createElement("section",{className:"wrapper "+(t||"")},n.default.createElement("div",{className:"inner"},l))};t.default=i,e.exports=t.default},148:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(1),n=a(u),i=l(6),r=(a(i),l(27)),s=a(r),c=l(59),d=a(c),m=l(62),o=a(m),f=l(17),E=a(f),p=l(29),h=(a(p),l(30)),g=(a(h),l(141)),v=a(g),b=function(e){var t=e.data;return n.default.createElement(o.default,null,n.default.createElement(d.default,null,n.default.createElement("h2",null,"Elements"),n.default.createElement("p",null,"Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.")),n.default.createElement(E.default,null,n.default.createElement("section",null,n.default.createElement("h3",{className:"major"},"Text"),n.default.createElement("p",null,"This is ",n.default.createElement("b",null,"bold")," and this is ",n.default.createElement("strong",null,"strong"),". This is"," ",n.default.createElement("i",null,"italic")," and this is ",n.default.createElement("em",null,"emphasized"),". This is"," ",n.default.createElement("sup",null,"superscript")," text and this is ",n.default.createElement("sub",null,"subscript")," text. This is ",n.default.createElement("u",null,"underlined")," and this is code:"," ",n.default.createElement("code",null,"for (;;) ","{ ... }"),". Finally,"," ",n.default.createElement("a",{href:"#"},"this is a link"),"."),n.default.createElement("h4",null,"Blockquote"),n.default.createElement("blockquote",null,"Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis."),n.default.createElement("h4",null,"Preformatted"),n.default.createElement("pre",null,n.default.createElement("code",null,"i = 0;","\nwhile (!deck.isInOrder()) {\n  print 'Iteration ' + i;\n  deck.shuffle();\n  i++;\n}\n","print 'It took ' + i + ' iterations to sort the deck.';"))),n.default.createElement("section",null,n.default.createElement("h3",{className:"major"},"Lists"),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-6 col-12-medium"},n.default.createElement("h4",null,"Unordered"),n.default.createElement("ul",null,n.default.createElement("li",null,"Dolor pulvinar etiam."),n.default.createElement("li",null,"Sagittis adipiscing."),n.default.createElement("li",null,"Felis enim feugiat.")),n.default.createElement("h4",null,"Alternate"),n.default.createElement("ul",{className:"alt"},n.default.createElement("li",null,"Dolor pulvinar etiam."),n.default.createElement("li",null,"Sagittis adipiscing."),n.default.createElement("li",null,"Felis enim feugiat."))),n.default.createElement("div",{className:"col-6 col-12-medium"},n.default.createElement("h4",null,"Ordered"),n.default.createElement("ol",null,n.default.createElement("li",null,"Dolor pulvinar etiam."),n.default.createElement("li",null,"Etiam vel felis viverra."),n.default.createElement("li",null,"Felis enim feugiat."),n.default.createElement("li",null,"Dolor pulvinar etiam."),n.default.createElement("li",null,"Etiam vel felis lorem."),n.default.createElement("li",null,"Felis enim et feugiat.")),n.default.createElement("h4",null,"Icons"),n.default.createElement("ul",{className:"icons"},n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"icon fa-twitter"},n.default.createElement("span",{className:"label"},"Twitter"))),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"icon fa-facebook"},n.default.createElement("span",{className:"label"},"Facebook"))),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"icon fa-instagram"},n.default.createElement("span",{className:"label"},"Instagram"))),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"icon fa-github"},n.default.createElement("span",{className:"label"},"Github")))))),n.default.createElement("h4",null,"Actions"),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-6 col-12-medium"},n.default.createElement("ul",{className:"actions"},n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0},"Default")),n.default.createElement("li",null,n.default.createElement(v.default,null,"Default"))),n.default.createElement("ul",{className:"actions small"},n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0,small:!0},"Small")),n.default.createElement("li",null,n.default.createElement(v.default,{small:!0},"Small"))),n.default.createElement("ul",{className:"actions stacked"},n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0},"Default")),n.default.createElement("li",null,n.default.createElement(v.default,null,"Default"))),n.default.createElement("ul",{className:"actions stacked small"},n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0,small:!0},"Small")),n.default.createElement("li",null,n.default.createElement(v.default,{small:!0},"Small")))),n.default.createElement("div",{className:"col-6 col-12-medium"},n.default.createElement("ul",{className:"actions stacked"},n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0,fit:!0},"Default")),n.default.createElement("li",null,n.default.createElement(v.default,{fit:!0},"Default"))),n.default.createElement("ul",{className:"actions stacked small"},n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0,small:!0,fit:!0},"Small")),n.default.createElement("li",null,n.default.createElement(v.default,{small:!0,fit:!0},"Small"))))),n.default.createElement("h4",null,"Pagination"),n.default.createElement("ul",{className:"pagination"},n.default.createElement("li",null,n.default.createElement(v.default,{small:!0,disabled:!0},"Prev")),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"page active"},"1")),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"page"},"2")),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"page"},"3")),n.default.createElement("li",null,n.default.createElement("span",null,"…")),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"page"},"8")),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"page"},"9")),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"page"},"10")),n.default.createElement("li",null,n.default.createElement(v.default,{small:!0},"Next")))),n.default.createElement("section",null,n.default.createElement("h3",{className:"major"},"Table"),n.default.createElement("h4",null,"Default"),n.default.createElement("div",{className:"table-wrapper"},n.default.createElement("table",null,n.default.createElement("thead",null,n.default.createElement("tr",null,n.default.createElement("th",null,"Name"),n.default.createElement("th",null,"Description"),n.default.createElement("th",null,"Price"))),n.default.createElement("tbody",null,n.default.createElement("tr",null,n.default.createElement("td",null,"Item One"),n.default.createElement("td",null,"Ante turpis integer aliquet porttitor."),n.default.createElement("td",null,"29.99")),n.default.createElement("tr",null,n.default.createElement("td",null,"Item Two"),n.default.createElement("td",null,"Vis ac commodo adipiscing arcu aliquet."),n.default.createElement("td",null,"19.99")),n.default.createElement("tr",null,n.default.createElement("td",null,"Item Three"),n.default.createElement("td",null," Morbi faucibus arcu accumsan lorem."),n.default.createElement("td",null,"29.99")),n.default.createElement("tr",null,n.default.createElement("td",null,"Item Four"),n.default.createElement("td",null,"Vitae integer tempus condimentum."),n.default.createElement("td",null,"19.99")),n.default.createElement("tr",null,n.default.createElement("td",null,"Item Five"),n.default.createElement("td",null,"Ante turpis integer aliquet porttitor."),n.default.createElement("td",null,"29.99"))),n.default.createElement("tfoot",null,n.default.createElement("tr",null,n.default.createElement("td",{colSpan:"2"}),n.default.createElement("td",null,"100.00"))))),n.default.createElement("h4",null,"Alternate"),n.default.createElement("div",{className:"table-wrapper"},n.default.createElement("table",{className:"alt"},n.default.createElement("thead",null,n.default.createElement("tr",null,n.default.createElement("th",null,"Name"),n.default.createElement("th",null,"Description"),n.default.createElement("th",null,"Price"))),n.default.createElement("tbody",null,n.default.createElement("tr",null,n.default.createElement("td",null,"Item One"),n.default.createElement("td",null,"Ante turpis integer aliquet porttitor."),n.default.createElement("td",null,"29.99")),n.default.createElement("tr",null,n.default.createElement("td",null,"Item Two"),n.default.createElement("td",null,"Vis ac commodo adipiscing arcu aliquet."),n.default.createElement("td",null,"19.99")),n.default.createElement("tr",null,n.default.createElement("td",null,"Item Three"),n.default.createElement("td",null," Morbi faucibus arcu accumsan lorem."),n.default.createElement("td",null,"29.99")),n.default.createElement("tr",null,n.default.createElement("td",null,"Item Four"),n.default.createElement("td",null,"Vitae integer tempus condimentum."),n.default.createElement("td",null,"19.99")),n.default.createElement("tr",null,n.default.createElement("td",null,"Item Five"),n.default.createElement("td",null,"Ante turpis integer aliquet porttitor."),n.default.createElement("td",null,"29.99"))),n.default.createElement("tfoot",null,n.default.createElement("tr",null,n.default.createElement("td",{colSpan:"2"}),n.default.createElement("td",null,"100.00")))))),n.default.createElement("section",null,n.default.createElement("h3",{className:"major"},"Buttons"),n.default.createElement("ul",{className:"actions"},n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0},"Primary")),n.default.createElement("li",null,n.default.createElement(v.default,null,"Default"))),n.default.createElement("ul",{className:"actions"},n.default.createElement("li",null,n.default.createElement(v.default,{large:!0},"Large")),n.default.createElement("li",null,n.default.createElement(v.default,{small:!0},"Small"))),n.default.createElement("ul",{className:"actions fit"},n.default.createElement("li",null,n.default.createElement(v.default,{fit:!0},"Fit")),n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0,fit:!0},"Fit")),n.default.createElement("li",null,n.default.createElement(v.default,{fit:!0},"Fit"))),n.default.createElement("ul",{className:"actions fit small"},n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0,fit:!0,small:!0},"Fit + Small")),n.default.createElement("li",null,n.default.createElement(v.default,{fit:!0,small:!0},"Fit + Small")),n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0,fit:!0,small:!0},"Fit + Small"))),n.default.createElement("ul",{className:"actions"},n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0,className:"icon fa-download"},"Icon")),n.default.createElement("li",null,n.default.createElement(v.default,{className:"icon fa-download"},"Icon"))),n.default.createElement("ul",{className:"actions"},n.default.createElement("li",null,n.default.createElement(v.default,{primary:!0,disabled:!0},"Disabled")),n.default.createElement("li",null,n.default.createElement(v.default,{disabled:!0},"Disabled")))),n.default.createElement("section",null,n.default.createElement("h3",{className:"major"},"Form"),n.default.createElement("form",{method:"post",action:"#"},n.default.createElement("div",{className:"row gtr-uniform"},n.default.createElement("div",{className:"col-6 col-12-xsmall"},n.default.createElement("label",{htmlFor:"demo-name"},"Name"),n.default.createElement("input",{type:"text",name:"demo-name",id:"demo-name",value:""})),n.default.createElement("div",{className:"col-6 col-12-xsmall"},n.default.createElement("label",{htmlFor:"demo-email"},"Email"),n.default.createElement("input",{type:"email",name:"demo-email",id:"demo-email",value:""})),n.default.createElement("div",{className:"col-12"},n.default.createElement("label",{htmlFor:"demo-category"},"Category"),n.default.createElement("select",{name:"demo-category",id:"demo-category"},n.default.createElement("option",{value:""},"-"),n.default.createElement("option",{value:"1"},"Manufacturing"),n.default.createElement("option",{value:"1"},"Shipping"),n.default.createElement("option",{value:"1"},"Administration"),n.default.createElement("option",{value:"1"},"Human Resources"))),n.default.createElement("div",{className:"col-4 col-12-small"},n.default.createElement("input",{type:"radio",id:"demo-priority-low",name:"demo-priority",defaultChecked:!0}),n.default.createElement("label",{htmlFor:"demo-priority-low"},"Low Priority")),n.default.createElement("div",{className:"col-4 col-12-small"},n.default.createElement("input",{type:"radio",id:"demo-priority-normal",name:"demo-priority"}),n.default.createElement("label",{htmlFor:"demo-priority-normal"},"Normal Priority")),n.default.createElement("div",{className:"col-4 col-12-small"},n.default.createElement("input",{type:"radio",id:"demo-priority-high",name:"demo-priority"}),n.default.createElement("label",{htmlFor:"demo-priority-high"},"High Priority")),n.default.createElement("div",{className:"col-6 col-12-small"},n.default.createElement("input",{type:"checkbox",id:"demo-copy",name:"demo-copy"}),n.default.createElement("label",{htmlFor:"demo-copy"},"Email me a copy")),n.default.createElement("div",{className:"col-6 col-12-small"},n.default.createElement("input",{type:"checkbox",id:"demo-human",name:"demo-human",defaultChecked:!0}),n.default.createElement("label",{htmlFor:"demo-human"},"Not a robot")),n.default.createElement("div",{className:"col-12"},n.default.createElement("label",{htmlFor:"demo-message"},"Message"),n.default.createElement("textarea",{name:"demo-message",id:"demo-message",rows:"6"})),n.default.createElement("div",{className:"col-12"},n.default.createElement("ul",{className:"actions"},n.default.createElement("li",null,n.default.createElement("input",{type:"submit",value:"Send Message",className:"primary"})),n.default.createElement("li",null,n.default.createElement("input",{type:"reset",value:"Reset"}))))))),n.default.createElement("section",null,n.default.createElement("h3",{className:"major"},"Image"),n.default.createElement("h4",null,"Fit"),n.default.createElement("div",{className:"box alt"},n.default.createElement("div",{className:"row gtr-uniform"},n.default.createElement("div",{className:"col-12"},n.default.createElement("span",{className:"image fit"},n.default.createElement(s.default,{sizes:t.bg.childImageSharp.sizes}))),n.default.createElement("div",{className:"col-4"},n.default.createElement("span",{className:"image fit"},n.default.createElement(s.default,{sizes:t.pic05.childImageSharp.sizes}))),n.default.createElement("div",{className:"col-4"},n.default.createElement("span",{className:"image fit"},n.default.createElement(s.default,{sizes:t.pic06.childImageSharp.sizes}))),n.default.createElement("div",{className:"col-4"},n.default.createElement("span",{className:"image fit"},n.default.createElement(s.default,{sizes:t.pic07.childImageSharp.sizes}))),n.default.createElement("div",{className:"col-4"},n.default.createElement("span",{className:"image fit"},n.default.createElement(s.default,{sizes:t.pic07.childImageSharp.sizes}))),n.default.createElement("div",{className:"col-4"},n.default.createElement("span",{className:"image fit"},n.default.createElement(s.default,{sizes:t.pic05.childImageSharp.sizes}))),n.default.createElement("div",{className:"col-4"},n.default.createElement("span",{className:"image fit"},n.default.createElement(s.default,{sizes:t.pic06.childImageSharp.sizes}))),n.default.createElement("div",{className:"col-4"},n.default.createElement("span",{className:"image fit"},n.default.createElement(s.default,{sizes:t.pic06.childImageSharp.sizes}))),n.default.createElement("div",{className:"col-4"},n.default.createElement("span",{className:"image fit"},n.default.createElement(s.default,{sizes:t.pic07.childImageSharp.sizes}))),n.default.createElement("div",{className:"col-4"},n.default.createElement("span",{className:"image fit"},n.default.createElement(s.default,{sizes:t.pic05.childImageSharp.sizes}))))),n.default.createElement("h4",null,"Left & Right"),n.default.createElement("p",null,n.default.createElement(s.default,{Tag:"span",className:"image left",imgStyle:{position:"relative"},placeholderStyle:{position:"absolute"},sizes:t.pic01.childImageSharp.sizes}),"Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien. Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien."),n.default.createElement("p",null,n.default.createElement(s.default,{Tag:"span",className:"image right",imgStyle:{position:"relative"},placeholderStyle:{position:"absolute"},sizes:t.pic02.childImageSharp.sizes}),"Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius. Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat. Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui."))))};t.default=b,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-elements-js-860a710b06e037ee73a6.js.map