webpackJsonp([0x8a5908603a7b],{47:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){_.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var s=a(11),r=i(s),n=a(16),u=i(n),o=a(15),c=i(o),d=a(61),f=i(d),p=a(60),m=i(p),h=a(1),g=i(h),v=a(2),y=i(v),b=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},E={},w=function(e){var t=b(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!E[a]||(E[a]=!0,!1)},S=void 0,_=[],L=function(e,t){l().observe(e),_.push([e,t])},j=null,N=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",n=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1",o=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+r+n+t+a+s+l+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+o+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},M=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,m.default)({},i,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};M.propTypes={style:y.default.object,onLoad:y.default.func};var O=function(e){function t(a){(0,r.default)(this,t);var i=(0,u.default)(this,e.call(this,a)),l=!0,s=!0,n=!1,o=w(a);return!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=!1,s=!1,n=!0),"undefined"==typeof window&&(l=!1,s=!1),i.state={isVisible:l,imgLoaded:s,IOSupported:n},i.handleRef=i.handleRef.bind(i),i}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&L(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),a=t.title,i=t.alt,l=t.className,s=t.outerWrapperClassName,r=t.style,n=void 0===r?{}:r,u=t.imgStyle,o=void 0===u?{}:u,c=t.placeholderStyle,d=void 0===c?{}:c,f=t.sizes,p=t.resolutions,h=t.backgroundColor,v=t.Tag,y=void 0;y="boolean"==typeof h?"lightgray":h;var E=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},o,d),w=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},o);if(f){var S=f;return S.srcWebp&&S.srcSetWebp&&N()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),g.default.createElement(v,{className:(s?s:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===n.position?"initial":"relative"}},g.default.createElement(v,{className:(l?l:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef},g.default.createElement(v,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&g.default.createElement(M,{alt:i,title:a,src:S.base64,style:E}),S.tracedSVG&&g.default.createElement(M,{alt:i,title:a,src:S.tracedSVG,style:E}),y&&g.default.createElement(v,{title:a,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(M,{alt:i,title:a,srcSet:S.srcSet,src:S.src,sizes:S.sizes,style:w,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,m.default)({alt:i,title:a},S))}})))}if(p){var _=p,L=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},n);return"inherit"===n.display&&delete L.display,_.srcWebp&&_.srcSetWebp&&N()&&(_.src=_.srcWebp,_.srcSet=_.srcSetWebp),g.default.createElement(v,{className:(s?s:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===n.position?"initial":"relative"}},g.default.createElement(v,{className:(l?l:"")+" gatsby-image-wrapper",style:L,ref:this.handleRef},_.base64&&g.default.createElement(M,{alt:i,title:a,src:_.base64,style:E}),_.tracedSVG&&g.default.createElement(M,{alt:i,title:a,src:_.tracedSVG,style:E}),y&&g.default.createElement(v,{title:a,style:{backgroundColor:y,width:_.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:_.height}}),this.state.isVisible&&g.default.createElement(M,{alt:i,title:a,width:_.width,height:_.height,srcSet:_.srcSet,src:_.src,style:w,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,m.default)({alt:i,title:a,width:_.width,height:_.height},_))}})))}return null},t}(g.default.Component);O.defaultProps={fadeIn:!0,alt:"",Tag:"div"},O.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,imgStyle:y.default.object,placeholderStyle:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool]),onLoad:y.default.func,Tag:y.default.string},t.default=O},87:function(e,t){"use strict";function a(e,t,d){if("string"!=typeof t){if(c){var f=o(t);f&&f!==c&&a(e,f,d)}var p=r(t);n&&(p=p.concat(n(t)));for(var m=0;m<p.length;++m){var h=p[m];if(!(i[h]||l[h]||d&&d[h])){var g=u(t,h);try{s(e,h,g)}catch(e){}}}return e}return e}var i={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s=Object.defineProperty,r=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,c=o&&o(Object);e.exports=a},54:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=i(l),r=function(e){var t=e.children;return s.default.createElement("section",{className:"features"},t)};t.default=r,e.exports=t.default},141:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=i(l),r=function(e){var t=e.children;return s.default.createElement("header",null,s.default.createElement("div",{className:"inner"},t))};t.default=r,e.exports=t.default},143:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=i(l),r=function(e){var t=e.children;return s.default.createElement("section",{id:"wrapper"},t)};t.default=r,e.exports=t.default},59:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=i(l),r=a(9),n=i(r),u=function(e){var t=e.children,a=e.to;return s.default.createElement(n.default,{to:a||"/",className:"special"},t)};t.default=u,e.exports=t.default},36:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=i(l),r=function(e){var t=e.className,a=e.children;return s.default.createElement("section",{className:"wrapper "+(t||"")},s.default.createElement("div",{className:"inner"},a))};t.default=r,e.exports=t.default},148:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),s=i(l),r=a(9),n=(i(r),a(47)),u=i(n),o=a(141),c=i(o),d=a(143),f=i(d),p=a(36),m=i(p),h=a(54),g=i(h),v=a(59),y=i(v),b=function(e){var t=e.data;return s.default.createElement(f.default,null,s.default.createElement(c.default,null,s.default.createElement("h2",null,"Generic"),s.default.createElement("p",null,"Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.")),s.default.createElement(m.default,null,s.default.createElement("h3",{className:"major"},"Lorem ipsum dolor"),s.default.createElement("p",null,"Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien."),s.default.createElement("p",null,"Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius."),s.default.createElement("h3",{className:"major"},"Vitae phasellus"),s.default.createElement("p",null,"Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet."),s.default.createElement(g.default,null,s.default.createElement("article",null,s.default.createElement("a",{href:"#",className:"image"},s.default.createElement(u.default,{sizes:t.pic04.childImageSharp.sizes})),s.default.createElement("h3",{className:"major"},"Sed feugiat lorem"),s.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices."),s.default.createElement(y.default,null,"Learn more")),s.default.createElement("article",null,s.default.createElement("a",{href:"#",className:"image"},s.default.createElement(u.default,{sizes:t.pic05.childImageSharp.sizes})),s.default.createElement("h3",{className:"major"},"Nisl placerat"),s.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices."),s.default.createElement(y.default,null,"Learn more")))))};t.default=b,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-generic-js-4f90b83f98a3089983f5.js.map