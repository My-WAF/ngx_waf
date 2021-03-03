(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{404:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常见问题与解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题与解答"}},[t._v("#")]),t._v(" 常见问题与解答")]),t._v(" "),s("h2",{attrs:{id:"configure-error-the-ngx-http-waf-module-module-requires-the-uthash-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-error-the-ngx-http-waf-module-module-requires-the-uthash-library"}},[t._v("#")]),t._v(" ./configure: error: the ngx_http_waf_module module requires the uthash library.")]),t._v(" "),s("p",[t._v("本模块需要使用 "),s("code",[t._v("uthash")]),t._v("库，您可以通过包管理器安装 "),s("code",[t._v("uthash")]),t._v(" 相关的库。")]),t._v(" "),s("h3",{attrs:{id:"ubuntu-和-debian"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-和-debian"}},[t._v("#")]),t._v(" Ubuntu 和 Debian")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" uthash-dev\n")])])]),s("h3",{attrs:{id:"centos8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos8"}},[t._v("#")]),t._v(" Centos8")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("dnf --enablerepo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PowerTools "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" uthash-devel\n")])])]),s("h3",{attrs:{id:"alpine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alpine"}},[t._v("#")]),t._v(" Alpine")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("apk update\napk "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --upgrade uthash-dev\n")])])]),s("h3",{attrs:{id:"其它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),s("p",[t._v("参见 "),s("a",{attrs:{href:"https://pkgs.org/download/uthash-devel",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pkgs.org/download/uthash-devel"),s("OutboundLink")],1),t._v(" 和\n"),s("a",{attrs:{href:"https://pkgs.org/download/uthash-dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pkgs.org/download/uthash-dev"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"本模块的性能如何"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本模块的性能如何"}},[t._v("#")]),t._v(" 本模块的性能如何？")]),t._v(" "),s("p",[t._v("IP 检查和 CC 防御花费常数时间，其它的检查花费 O(nm) 的时间，其中 n 是相关规则的条数，m 为执行正则匹配的时间复杂度。")]),t._v(" "),s("h2",{attrs:{id:"post检测失效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post检测失效"}},[t._v("#")]),t._v(" post检测失效")]),t._v(" "),s("p",[t._v("本模块出于性能考虑只会在 Post 请求体在内存中时检查，若不在内存中则跳过检查。\n您可以通过修改配置文件来解决这个问题。")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 Post 请求体缓冲区大小")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("client_body_buffer_size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("M"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 永远将请求体存放在内存中")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("client_body_in_file_only")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_buffer_size",target:"_blank",rel:"noopener noreferrer"}},[t._v("client_body_buffer_size 的说明"),s("OutboundLink")],1),t._v("\n和 "),s("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_file_only",target:"_blank",rel:"noopener noreferrer"}},[t._v("client_body_in_file_only 的说明"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"fork-failed-while-spawning-worker-process-12-cannot-allocate-memory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fork-failed-while-spawning-worker-process-12-cannot-allocate-memory"}},[t._v("#")]),t._v(' fork() failed while spawning "worker process" (12: Cannot allocate memory)')]),t._v(" "),s("p",[t._v("可能是过多地使用 "),s("code",[t._v("nginx -s reload")]),t._v(" 导致的，本模块会在读取配置的时候申请一些内存，但是不知为何 "),s("code",[t._v("nginx -s reload")]),t._v(" 之后这些内存不会立即释放，所以短时间内频繁 "),s("code",[t._v("nginx -s reload")]),t._v(" 就极可能导致这个错误。")])])}),[],!1,null,null,null);a.default=n.exports}}]);