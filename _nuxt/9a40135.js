(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{289:function(t,e,l){"use strict";l.r(e);l(20),l(64),l(88),l(63);var r={props:{article:{type:Object},highlight:{type:String}},computed:{tags:function(){var t=String(this.article.tags).split(",");return t.join(", ")}},methods:{subTitle:function(title){return title.replace(" | 刘蓝静","").replace(" | LANJING LIU","")}}},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("NuxtLink",{staticClass:"group relative",attrs:{to:("en"==t.$i18n.locale?"":"/cn")+t.article.path}},[l("img",{staticClass:"lg:w-80",attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),l("div",{class:"absolute w-full h-full top-0 text-center bg-black bg-opacity-50 block md:group-hover:block "+(t.highlight==t.article.alt?"":"md:hidden"),on:{mouseover:function(e){return t.$emit("toGallery",t.article.alt)},mouseleave:function(e){return t.$emit("toGallery","")}}},[l("div",{staticClass:"absolute w-full top-1/2",staticStyle:{transform:"translate(0, -50%)"}},[l("p",{staticClass:"pb-1 text-base leading-6 font-semibold text-white"},[t._v(t._s(t.subTitle(t.article.title)))]),t._v(" "),l("p",{staticClass:"text-xs leading-4 font-normal text-gray-200"},[t._v(t._s(t.tags))])]),t._v(" "),l("div",{class:"absolute left-1/2 top-2/3 "+(t.article.key?"":"hidden"),staticStyle:{transform:"translate(-50%, 0)"}},[l("p",{staticClass:"text-sm font-normal text-gray-900 bg-gray-50 py-0.5 px-1 mt-2 mx-auto"},[t._v(t._s(t.article.key))])])])])}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,l){"use strict";l.r(e);var r={props:{articles:{type:Array},highlight:{type:String}},methods:{toSideBar:function(data){this.$emit("toSideBar",data)}}},n=l(62),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h1",{staticClass:"pb-12 text-base leading-6 font-semibold text-gray-900 text-center"},[t._v(t._s(t.$t("index.type.design-with-children")))]),t._v(" "),l("div",{staticClass:"pb-10 grid flex-wrap justify-between grid-cols-1 gap-2 md:grid-cols-2 md:gap-4"},t._l(t.articles,(function(article){return l("Card",{directives:[{name:"show",rawName:"v-show",value:"design with children"==article.type,expression:"article.type == 'design with children'"}],key:article.slug,staticClass:"mb-3",attrs:{article:article,highlight:t.highlight},on:{toGallery:t.toSideBar}})})),1),t._v(" "),l("h1",{staticClass:"pb-12 text-base leading-6 font-semibold text-gray-900 text-center"},[t._v(t._s(t.$t("index.type.design")))]),t._v(" "),l("div",{staticClass:"pb-10 grid flex-wrap justify-between grid-cols-1 gap-2 md:grid-cols-2 md:gap-4"},t._l(t.articles,(function(article){return l("Card",{directives:[{name:"show",rawName:"v-show",value:"design"==article.type,expression:"article.type == 'design'"}],key:article.slug,staticClass:"mb-6",attrs:{article:article,highlight:t.highlight},on:{toGallery:t.toSideBar}})})),1),t._v(" "),l("h1",{staticClass:"pb-12 text-base leading-6 font-semibold text-gray-900 text-center"},[t._v(t._s(t.$t("index.type.research")))]),t._v(" "),l("div",{staticClass:"pb-10 grid flex-wrap justify-between grid-cols-1 gap-2 md:grid-cols-2 md:gap-4"},t._l(t.articles,(function(article){return l("Card",{directives:[{name:"show",rawName:"v-show",value:"research"==article.type,expression:"article.type == 'research'"}],key:article.slug,staticClass:"mb-6",attrs:{article:article,highlight:t.highlight},on:{toGallery:t.toSideBar}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:l(289).default})}}]);