(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(n,e,t){"use strict";var o=t(0),r=t(150);o.a.use(r.a),o.a.use(r.a,{global:!0})},151:function(n,e,t){"use strict";!function(){var n=document.createElement("script");n.src="https://hm.baidu.com/hm.js?41943f633133ddb8681c86f3d93673b5",n.id="baidu_tj";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s)}(),e.a=function(n){var e=n.app.router;n.store;e.afterEach((function(n,e){!function(){document.getElementById("baidu_tj")&&document.getElementById("baidu_tj").remove();var n=document.createElement("script");n.src="https://hm.baidu.com/hm.js?41943f633133ddb8681c86f3d93673b5",n.id="baidu_tj";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s)}()}))}},197:function(n){n.exports=JSON.parse('{"index":{"type":{"about":"ABOUT","design-with-children":"DESIGN WITH CHILDREN","design":"DESIGN","research":"RESEARCH"},"about":{"about":"Hi, Lanjing Liu is a master student in the College of Design and Innovation at Tongji University. She has a background in industrial design and is currently studying design history and theory; her main research interests are in design education for children and youth, co-design and user research. Currently, she is exploring design education activities and teaching tools for children to promote empathy development and holistic education. ","phd":"I am looking for a Design PhD position starting from 2023 fall!","email":"liulanjing@tongji.edu.cn","cv":"CV / Resume","gallery":"All Projects","pdf":"/cv/CV_LanjingLiu_2022_en.pdf"}}}')},198:function(n){n.exports=JSON.parse('{"index":{"type":{"about":"关于","design-with-children":"青少年设计教育","design":"用户研究与设计","research":"研究项目"},"about":{"about":"嗨，我是刘蓝静，目前是同济大学设计创意学院的一名硕士研究生。我具有工业设计的背景，目前正在设计历史与理论方向学习；我的主要研究兴趣在针对儿童与青少年的设计教育、共同设计以及用户研究。目前，我正在探索儿童的设计教育活动与教学工具以促进儿童的全面发展。","phd":"我正在寻找从2023年秋季入学的Design PhD职位。","email":"liulanjing@tongji.edu.cn","cv":"个人简历","gallery":"全部作品","pdf":"/cv/CV_LanjingLiu_2022_cn.pdf"}}}')},204:function(n,e,t){t(205),n.exports=t(206)},245:function(n,e,t){var content=t(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(93).default)("382a115c",content,!0,{sourceMap:!1})},246:function(n,e,t){var o=t(92)((function(i){return i[1]}));o.push([n.i,'/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t\'Segoe UI\',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t\'Apple Color Emoji\',\n\t\t\'Segoe UI Emoji\';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd \'em\' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t\'Liberation Mono\',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent \'sub\' and \'sup\' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type=\'button\'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional \':invalid\' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out \'fieldset\' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \'inherit\' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user\'s configured `sans` font-family (with Tailwind\'s default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind\'s default "normal" line-height so the user isn\'t forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it\'s border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don\'t inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured \'mono\' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * \'mono\' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that\'s\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.static{\n  position:static;\n}\n\n.fixed{\n  position:fixed;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.inset-0{\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n}\n\n.top-0{\n  top:0px;\n}\n\n.top-1\\/2{\n  top:50%;\n}\n\n.top-2\\/3{\n  top:66.666667%;\n}\n\n.right-6{\n  right:1.5rem;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n.left-0{\n  left:0px;\n}\n\n.left-1\\/2{\n  left:50%;\n}\n\n.z-40{\n  z-index:40;\n}\n\n.z-50{\n  z-index:50;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.mt-9{\n  margin-top:2.25rem;\n}\n\n.mb-3{\n  margin-bottom:0.75rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.mb-6{\n  margin-bottom:1.5rem;\n}\n\n.block{\n  display:block;\n}\n\n.inline-block{\n  display:inline-block;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.grid{\n  display:grid;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-64{\n  height:16rem;\n}\n\n.h-full{\n  height:100%;\n}\n\n.h-screen{\n  height:100vh;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-64{\n  width:16rem;\n}\n\n.w-1\\/2{\n  width:50%;\n}\n\n.w-full{\n  width:100%;\n}\n\n.w-screen{\n  width:100vw;\n}\n\n.max-w-sm{\n  max-width:24rem;\n}\n\n.max-w-screen-lg{\n  max-width:1024px;\n}\n\n.flex-1{\n  flex:1 1 0%;\n}\n\n.flex-grow{\n  flex-grow:1;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-full{\n  --tw-translate-x:-100%;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.cursor-pointer{\n  cursor:pointer;\n}\n\n.grid-cols-1{\n  grid-template-columns:repeat(1, minmax(0, 1fr));\n}\n\n.grid-cols-6{\n  grid-template-columns:repeat(6, minmax(0, 1fr));\n}\n\n.flex-row-reverse{\n  flex-direction:row-reverse;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-end{\n  justify-content:flex-end;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.justify-items-start{\n  justify-items:start;\n}\n\n.justify-items-end{\n  justify-items:end;\n}\n\n.gap-1{\n  gap:0.25rem;\n}\n\n.gap-2{\n  gap:0.5rem;\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.overflow-y-auto{\n  overflow-y:auto;\n}\n\n.border{\n  border-width:1px;\n}\n\n.hover\\:border:hover{\n  border-width:1px;\n}\n\n.border-r{\n  border-right-width:1px;\n}\n\n.border-transparent{\n  border-color:transparent;\n}\n\n.border-gray-900{\n  --tw-border-opacity:1;\n  border-color:rgba(17, 24, 39, var(--tw-border-opacity));\n}\n\n.hover\\:border-gray-900:hover{\n  --tw-border-opacity:1;\n  border-color:rgba(17, 24, 39, var(--tw-border-opacity));\n}\n\n.bg-black{\n  --tw-bg-opacity:1;\n  background-color:rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-50{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-gray-800{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n\n.bg-blue-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.bg-opacity-50{\n  --tw-bg-opacity:0.5;\n}\n\n.fill-current{\n  fill:currentColor;\n}\n\n.p-4{\n  padding:1rem;\n}\n\n.px-1{\n  padding-left:0.25rem;\n  padding-right:0.25rem;\n}\n\n.px-6{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n}\n\n.px-8{\n  padding-left:2rem;\n  padding-right:2rem;\n}\n\n.py-0{\n  padding-top:0px;\n  padding-bottom:0px;\n}\n\n.py-6{\n  padding-top:1.5rem;\n  padding-bottom:1.5rem;\n}\n\n.py-12{\n  padding-top:3rem;\n  padding-bottom:3rem;\n}\n\n.py-0\\.5{\n  padding-top:0.125rem;\n  padding-bottom:0.125rem;\n}\n\n.pt-3{\n  padding-top:0.75rem;\n}\n\n.pt-6{\n  padding-top:1.5rem;\n}\n\n.pt-12{\n  padding-top:3rem;\n}\n\n.pr-16{\n  padding-right:4rem;\n}\n\n.pb-1{\n  padding-bottom:0.25rem;\n}\n\n.pb-2{\n  padding-bottom:0.5rem;\n}\n\n.pb-3{\n  padding-bottom:0.75rem;\n}\n\n.pb-4{\n  padding-bottom:1rem;\n}\n\n.pb-6{\n  padding-bottom:1.5rem;\n}\n\n.pb-10{\n  padding-bottom:2.5rem;\n}\n\n.pb-12{\n  padding-bottom:3rem;\n}\n\n.pb-16{\n  padding-bottom:4rem;\n}\n\n.pb-24{\n  padding-bottom:6rem;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-justify{\n  text-align:justify;\n}\n\n.font-sans{\n  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-base{\n  font-size:1rem;\n  line-height:1.5rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.font-normal{\n  font-weight:400;\n}\n\n.font-medium{\n  font-weight:500;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.leading-4{\n  line-height:1rem;\n}\n\n.leading-5{\n  line-height:1.25rem;\n}\n\n.leading-6{\n  line-height:1.5rem;\n}\n\n.leading-7{\n  line-height:1.75rem;\n}\n\n.leading-8{\n  line-height:2rem;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-200{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity));\n}\n\n.text-gray-300{\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-900{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-900:hover{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.underline{\n  text-decoration:underline;\n}\n\n.hover\\:underline:hover{\n  text-decoration:underline;\n}\n\n.opacity-25{\n  opacity:0.25;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.filter{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.brightness-75{\n  --tw-brightness:brightness(.75);\n}\n\n.brightness-100{\n  --tw-brightness:brightness(1);\n}\n\n.hover\\:brightness-100:hover{\n  --tw-brightness:brightness(1);\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.duration-500{\n  transition-duration:500ms;\n}\n\n.ease-in-out{\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.scrollbar-hide{\n  -ms-overflow-style:none;\n  scrollbar-width:none;\n}\n\n.scrollbar-hide::-webkit-scrollbar{\n  display:none;\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:mt-0{\n    margin-top:0px;\n  }\n\n  .md\\:block{\n    display:block;\n  }\n\n  .md\\:flex{\n    display:flex;\n  }\n\n  .md\\:grid{\n    display:grid;\n  }\n\n  .md\\:hidden{\n    display:none;\n  }\n\n  .group:hover .md\\:group-hover\\:block{\n    display:block;\n  }\n\n  .md\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-8{\n    grid-template-columns:repeat(8, minmax(0, 1fr));\n  }\n\n  .md\\:justify-end{\n    justify-content:flex-end;\n  }\n\n  .md\\:justify-items-end{\n    justify-items:end;\n  }\n\n  .md\\:gap-2{\n    gap:0.5rem;\n  }\n\n  .md\\:gap-4{\n    gap:1rem;\n  }\n\n  .md\\:gap-2\\.5{\n    gap:0.625rem;\n  }\n\n  .md\\:px-16{\n    padding-left:4rem;\n    padding-right:4rem;\n  }\n\n  .md\\:py-12{\n    padding-top:3rem;\n    padding-bottom:3rem;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:w-80{\n    width:20rem;\n  }\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}',""]),o.locals={},n.exports=o}},[[204,18,1,19]]]);