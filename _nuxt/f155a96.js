(window.webpackJsonp=window.webpackJsonp||[]).push([[16,2,4,5,6,9,12,13],{284:function(t,e,l){"use strict";l.r(e);var r={props:{articles:{type:Array},highlight:{type:String}},methods:{toGallery:function(data){this.$emit("toGallery",data)}}},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("aside",{staticClass:"static overflow-y-auto scrollbar-hide pr-16"},[l("div",{staticClass:"py-12 hidden md:block"},[l("NuxtLink",{staticClass:"text-2xl leading-8 font-semibold text-gray-900",attrs:{to:"en"==t.$i18n.locale?"/":"/cn"}},[t._v("LANJING LIU")])],1),t._v(" "),l("button",{staticClass:"md:hidden pb-3 absolute right-6"},[l("div",{on:{click:function(e){return t.$emit("toggleMenu")}}},[l("svg",{staticClass:"h-6 w-6 text-gray-900 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),l("div",{staticClass:"mt-9 md:mt-0"},[l("div",[l("p",{staticClass:"pb-3 text-sm leading-5 font-semibold text-gray-900"},[t._v(t._s(t.$t("index.type.about")))]),t._v(" "),l("SideList",{attrs:{articles:t.articles,highlight:t.highlight,type:"about"},on:{toSideBar:t.toGallery}})],1),t._v(" "),l("div",{staticClass:"pt-6"},[l("p",{staticClass:"pb-3 text-sm leading-5 font-semibold text-gray-900"},[t._v(t._s(t.$t("index.type.design-with-children")))]),t._v(" "),l("SideList",{attrs:{articles:t.articles,highlight:t.highlight,type:"design with children"},on:{toSideBar:t.toGallery}})],1),t._v(" "),l("div",{staticClass:"pt-6"},[l("p",{staticClass:"pb-3 text-sm leading-5 font-semibold text-gray-900"},[t._v(t._s(t.$t("index.type.design")))]),t._v(" "),l("SideList",{attrs:{articles:t.articles,highlight:t.highlight,type:"design"},on:{toSideBar:t.toGallery}})],1),t._v(" "),l("div",{staticClass:"pt-6 pb-12"},[l("p",{staticClass:"pb-3 text-sm leading-5 font-semibold text-gray-900"},[t._v(t._s(t.$t("index.type.research")))]),t._v(" "),l("SideList",{attrs:{articles:t.articles,highlight:t.highlight,type:"research"},on:{toSideBar:t.toGallery}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SideList:l(285).default})},285:function(t,e,l){"use strict";l.r(e);l(20),l(63);var r={props:{articles:{type:Array},type:{type:String},highlight:{type:String}},methods:{subTitle:function(title){return title.replace(" | 刘蓝静","").replace(" | LANJING LIU","")}}},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",t._l(t.articles,(function(article){return l("li",{directives:[{name:"show",rawName:"v-show",value:article.type==t.type,expression:"article.type == type"}],key:article.slug,staticClass:"pb-3 text-xs leading-4 font-medium text-gray-600"},[l("NuxtLink",{attrs:{to:("en"==t.$i18n.locale?"":"/cn")+article.path}},[l("p",{class:"inline-block hover:underline hover:text-gray-900 "+(t.highlight==article.alt||"Gallery"==t.subTitle(article.title)&&"/gallery"==t.$route.path?"underline text-gray-900":""),on:{mouseover:function(e){return t.$emit("toSideBar",article.alt)},mouseleave:function(e){return t.$emit("toSideBar","")}}},[t._v(t._s(t.subTitle(article.title)))])])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,l){"use strict";l.r(e);var r={},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"flex justify-between md:grid md:justify-items-end md:justify-end"},[l("div",{staticClass:"pt-12 pb-3 md:py-12 md:hidden"},[l("NuxtLink",{staticClass:"text-2xl leading-8 font-semibold text-gray-900",attrs:{to:"en"==t.$i18n.locale?"/":"/cn"}},[t._v("CHAO ZHANG")])],1),t._v(" "),l("div",{staticClass:"pt-12 pb-3 md:py-12 bg-white"},[l("div",{staticClass:"text-lg leading-7 font-normal text-gray-300 inline-block"},["en"==t.$i18n.locale?l("span",{staticClass:"underline text-gray-900"},[t._v("EN")]):t._e(),t._v(" "),"en"!==t.$i18n.locale?l("NuxtLink",{attrs:{to:t.switchLocalePath("en")}},[t._v("EN")]):t._e(),t._v(" /\n      "),"cn"==t.$i18n.locale?l("span",{staticClass:"underline text-gray-900"},[t._v("中")]):t._e(),t._v(" "),"cn"!==t.$i18n.locale?l("NuxtLink",{attrs:{to:t.switchLocalePath("cn")}},[t._v("中")]):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:l(286).default})},287:function(t,e,l){"use strict";l.r(e);var r={},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"relative"},[l("p",{staticClass:"absolute bottom-0 left-0 pb-4 text-xs leading-4 font-normal text-gray-900"},[t._v("Copyright © 2022 LIU LANJING. All rights reserved.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(287).default})},288:function(t,e,l){"use strict";l.r(e);var r={props:{articles:{type:Array},highlight:{type:String}},methods:{toggleMenu:function(){this.$refs.sideBar.classList.toggle("-translate-x-full"),this.$refs.backdrop.classList.toggle("hidden")}}},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"relative"},[l("button",{staticClass:"grid justify-items-start"},[l("div",{on:{click:t.toggleMenu}},[l("svg",{staticClass:"block h-6 w-6 text-gray-900 fill-current",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[l("title",[t._v("Mobile menu")]),t._v(" "),l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),t._v(" "),l("div",{ref:"sideBar",staticClass:"fixed top-0 left-0 bottom-0 w-1/2 max-w-sm z-50 transition duration-500 ease-in-out transform -translate-x-full"},[l("SideBar",{staticClass:"fixed top-0 left-0 bottom-0 w-full max-w-sm py-6 px-6 bg-white border-r overflow-y-auto",attrs:{articles:t.articles,highlight:t.highlight},on:{toggleMenu:t.toggleMenu}})],1),t._v(" "),l("div",{ref:"backdrop",staticClass:"fixed top-0 left-0 bottom-0 w-screen z-40 bg-gray-800 opacity-25 hidden",on:{click:t.toggleMenu}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SideBar:l(284).default})},289:function(t,e,l){"use strict";l.r(e);l(20),l(64),l(88),l(63);var r={props:{article:{type:Object},highlight:{type:String}},computed:{tags:function(){var t=String(this.article.tags).split(",");return t.join(", ")}},methods:{subTitle:function(title){return title.replace(" | 刘蓝静","").replace(" | LANJING LIU","")}}},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("NuxtLink",{staticClass:"group relative",attrs:{to:("en"==t.$i18n.locale?"":"/cn")+t.article.path}},[l("img",{staticClass:"lg:w-80",attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),l("div",{class:"absolute w-full h-full top-0 text-center bg-black bg-opacity-50 block md:group-hover:block "+(t.highlight==t.article.alt?"":"md:hidden"),on:{mouseover:function(e){return t.$emit("toGallery",t.article.alt)},mouseleave:function(e){return t.$emit("toGallery","")}}},[l("div",{staticClass:"absolute w-full top-1/2",staticStyle:{transform:"translate(0, -50%)"}},[l("p",{staticClass:"pb-1 text-base leading-6 font-semibold text-white"},[t._v(t._s(t.subTitle(t.article.title)))]),t._v(" "),l("p",{staticClass:"text-xs leading-4 font-normal text-gray-200"},[t._v(t._s(t.tags))])]),t._v(" "),l("div",{class:"absolute left-1/2 top-2/3 "+(t.article.key?"":"hidden"),staticStyle:{transform:"translate(-50%, 0)"}},[l("p",{staticClass:"text-sm font-normal text-gray-900 bg-gray-50 py-0.5 px-1 mt-2 mx-auto"},[t._v(t._s(t.article.key))])])])])}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,l){"use strict";l.r(e);var r={props:{articles:{type:Array},highlight:{type:String}},methods:{toSideBar:function(data){this.$emit("toSideBar",data)}}},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h1",{staticClass:"pb-12 text-base leading-6 font-semibold text-gray-900 text-center"},[t._v(t._s(t.$t("index.type.design-with-children")))]),t._v(" "),l("div",{staticClass:"pb-10 grid flex-wrap justify-between grid-cols-1 gap-2 md:grid-cols-2 md:gap-4"},t._l(t.articles,(function(article){return l("Card",{directives:[{name:"show",rawName:"v-show",value:"design with children"==article.type,expression:"article.type == 'design with children'"}],key:article.slug,staticClass:"mb-3",attrs:{article:article,highlight:t.highlight},on:{toGallery:t.toSideBar}})})),1),t._v(" "),l("h1",{staticClass:"pb-12 text-base leading-6 font-semibold text-gray-900 text-center"},[t._v(t._s(t.$t("index.type.design")))]),t._v(" "),l("div",{staticClass:"pb-10 grid flex-wrap justify-between grid-cols-1 gap-2 md:grid-cols-2 md:gap-4"},t._l(t.articles,(function(article){return l("Card",{directives:[{name:"show",rawName:"v-show",value:"design"==article.type,expression:"article.type == 'design'"}],key:article.slug,staticClass:"mb-6",attrs:{article:article,highlight:t.highlight},on:{toGallery:t.toSideBar}})})),1),t._v(" "),l("h1",{staticClass:"pb-12 text-base leading-6 font-semibold text-gray-900 text-center"},[t._v(t._s(t.$t("index.type.research")))]),t._v(" "),l("div",{staticClass:"pb-10 grid flex-wrap justify-between grid-cols-1 gap-2 md:grid-cols-2 md:gap-4"},t._l(t.articles,(function(article){return l("Card",{directives:[{name:"show",rawName:"v-show",value:"research"==article.type,expression:"article.type == 'research'"}],key:article.slug,staticClass:"mb-6",attrs:{article:article,highlight:t.highlight},on:{toGallery:t.toSideBar}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:l(289).default})},311:function(t,e,l){"use strict";l.r(e);l(35),l(25),l(38),l(13),l(48),l(34),l(49);var r=l(18),n=l(7);l(41),l(37),l(20),l(63);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{highlight:""}},methods:{highlightSideItem:function(data){this.highlight=data},highlightGalleryItem:function(data){this.highlight=data}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var l,r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,r=t.app,n=r.i18n.locale,e.next=4,l("".concat(n)).sortBy("index").fetch();case 4:return o=e.sent,e.abrupt("return",{articles:o.map((function(article){return c(c({},article),{},{path:article.path.replace("/".concat(n),"")})}))});case 6:case"end":return e.stop()}}),e)})))()}},h=l(62),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"max-w-screen-lg mx-auto flex flex-col h-screen"},[l("div",{staticClass:"flex flex-1 overflow-hidden px-8 md:px-16"},[l("div",{staticClass:"w-64 hidden md:flex"},[l("SideBar",{attrs:{articles:t.articles,highlight:t.highlight},on:{toGallery:t.highlightGalleryItem}})],1),t._v(" "),l("div",{staticClass:"flex flex-1 flex-col"},[l("Header",{staticClass:"flex"}),t._v(" "),l("Menu",{staticClass:"pb-3 md:hidden grid justify-items-end justify-end",attrs:{articles:t.articles,highlight:t.highlight}}),t._v(" "),l("div",{staticClass:"flex flex-1 overflow-y-auto scrollbar-hide"},[l("div",{staticClass:"flex-grow"},[l("Gallery",{staticClass:"w-full",attrs:{articles:t.articles,highlight:t.highlight},on:{toSideBar:t.highlightSideItem}}),t._v(" "),l("Footer",{staticClass:"grid justify-items-start"})],1)])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SideBar:l(284).default,Header:l(286).default,Menu:l(288).default,Gallery:l(292).default,Footer:l(287).default})}}]);