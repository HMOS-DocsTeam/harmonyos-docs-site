"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["336720"], {
902671(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_cyber_security_privacy_web_adsblock_web_adsblock_md_e40_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-cyber-security-privacy-web-adsblock-web-adsblock-md-e40.json
var site_docs_arkweb_web_manage_cyber_security_privacy_web_adsblock_web_adsblock_md_e40_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-cyber-security-privacy/web-adsblock/web-adsblock","title":"使用Web组件的广告过滤功能","description":"ArkWeb为应用提供广告过滤功能，支持通过云端推送默认的easylist规则，或允许应用通过接口设定自定义规则文件。它在网络层拦截广告资源的下载，或在网页中注入CSS规则以隐藏特定的广告元素。","source":"@site/docs/arkweb/web-manage-cyber-security-privacy/web-adsblock/web-adsblock.md","sourceDirName":"arkweb/web-manage-cyber-security-privacy/web-adsblock","slug":"/arkweb/web-manage-cyber-security-privacy/web-adsblock/","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-adsblock/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用Web组件的广告过滤功能","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-adsblock","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用智能防跟踪功能","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-intelligent-tracking-prevention/"},"next":{"title":"坚盾守护模式","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-cyber-security-privacy/web-adsblock/web-adsblock.md


const frontMatter = {
	title: '使用Web组件的广告过滤功能',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-adsblock',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件的广告过滤功能';

const assets = {

};



const toc = [{
  "value": "常用easylist语法规则",
  "id": "常用easylist语法规则",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "开启广告过滤",
  "id": "开启广告过滤",
  "level": 3
}, {
  "value": "关闭特定域名页面的广告过滤",
  "id": "关闭特定域名页面的广告过滤",
  "level": 3
}, {
  "value": "收集广告过滤的信息",
  "id": "收集广告过滤的信息",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用web组件的广告过滤功能",
        children: "使用Web组件的广告过滤功能"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb为应用提供广告过滤功能，支持通过云端推送默认的easylist规则，或允许应用通过接口设定自定义规则文件。它在网络层拦截广告资源的下载，或在网页中注入CSS规则以隐藏特定的广告元素。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前配置文件格式为", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://easylist-downloads.adblockplus.org/easylist.txt",
        children: "easylist规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常用easylist语法规则",
      children: "常用easylist语法规则"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "规则类别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URL拦截规则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拦截所有网站中url能匹配\"example.com/js/*_tv.js\"的子资源请求。用于定义域名过滤规则，匹配特定的域名及其所有子域名。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URL拦截规则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拦截非alimama.com、非taobao.com域名网站中的url匹配\"alimama.cn\"的第三方资源。$third_party是一种options语法，表示匹配第三方资源；域名前使用'~'表示不包括该域名。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "例外规则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭example.com网页内的广告过滤。@@是例外规则的语法关键字，表示不过滤。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@@"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "例外规则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在域名为litv.tv的网页中，不过滤能匹配上\".adserver.\"的子资源。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@@.adserver.$domain=litv.tv"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "元素隐藏规则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "隐藏myabandonware.com和myware.com域名中所有class=\"i528\"的元素。##用于表示元素隐藏。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "myabandonware.com, myware.com##.i528"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "元素隐藏例外规则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不隐藏sdf-event.sakura.ne.jp网站中id=\"ad_1\"的元素。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sdf-event.sakura.ne.jp#@##ad_1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例外规则，通常是与普通规则配合使用的，在某些特定场景下使普通规则不适用，单独应用例外规则是没有意义的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如先配置了一条过滤所有网站的拦截规则：||abc.com/js/123.js，如果某些网站出现误拦截或不能拦截的情况，可以针对这些网站配置新的例外规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller",
          children: "WebviewController"
        }), "类中，增加开启/关闭广告过滤特性的接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#enableadsblock12",
          children: "enableAdsBlock()"
        }), "，支持Web实例级的特性开关。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["新增", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager",
          children: "AdsBlockManager"
        }), "全局单例类，提供自定义广告过滤配置、控制网站级特性开关的能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Web实例上提供了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#onadsblocked12",
          children: "onAdsBlocked()"
        }), "回调通知方法，支持将拦截信息通知到上层应用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager",
          children: "AdsBlockManager"
        }), "接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#setadsblockrules12",
          children: "setAdsBlockRules()"
        }), "接口仅能设置一份自定义配置，此配置会持久化，应用冷启动无需重新配置，可避免每次冷启动配置规则都触发广告过滤配置的编译解析。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager",
          children: "AdsBlockManager"
        }), "接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#addadsblockdisallowedlist12",
          children: "addAdsBlockDisallowedList()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#removeadsblockdisallowedlist12",
          children: "removeAdsBlockDisallowedList()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#clearadsblockdisallowedlist12",
          children: "clearAdsBlockDisallowedList()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#addadsblockallowedlist12",
          children: "addAdsBlockAllowedList()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#removeadsblockallowedlist12",
          children: "removeAdsBlockAllowedList()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#clearadsblockallowedlist12",
          children: "clearAdsBlockAllowedList()"
        }), "操作的数据不会持久化，应用冷启动需要重新设置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果1个Web实例启用了广告过滤特性，但未调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager",
          children: "AdsBlockManager"
        }), "接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#addadsblockdisallowedlist12",
          children: "addAdsBlockDisallowedList()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#removeadsblockdisallowedlist12",
          children: "removeAdsBlockDisallowedList()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#clearadsblockdisallowedlist12",
          children: "clearAdsBlockDisallowedList()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#addadsblockallowedlist12",
          children: "addAdsBlockAllowedList()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#removeadsblockallowedlist12",
          children: "removeAdsBlockAllowedList()"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#clearadsblockallowedlist12",
          children: "clearAdsBlockAllowedList()"
        }), "配置disallowedlist和allowedlist数据，则默认所有网站均启用广告过滤。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "allowedlist和disallowedlist数据共同使用时，allowedlist的优先级高于disallowedlist，即先使用allowedlist匹配，如果匹配成功就不再使用disallowedlist匹配，该网站会启用广告过滤特性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用未启用广告过滤特性，那么Web组件不会向服务器请求默认的内置easylist规则。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "disallowedlist和allowedlist数据采用后缀匹配，例如应用的设置的域名\"xxyy.com\"，可以匹配上url为\"wwsstt.xxyy.com\"的网站。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启广告过滤",
      children: "开启广告过滤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过AdsBlockManager提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#setadsblockrules12",
        children: "setAdsBlockRules()"
      }), "接口设置自定义的easylist过滤规则，并通过Web组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#enableadsblock12",
        children: "enableAdsBlock()"
      }), "接口使能广告过滤特性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，演示了一个应用通过文件选择器选择easylist规则文件，并开启广告过滤功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { picker, fileUri } from '@kit.CoreFileKit';\n\n// 演示点击按钮，通过filepicker打开一个easylist规则文件并设置到Web组件中\n@Entry\n@Component\nstruct WebComponent {\n  main_url: string = 'https://www.example.com';\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  @State input_text: string = 'https://www.example.com';\n\n  build() {\n    Column() {\n      Row() {\n        Flex() {\n          Button({type: ButtonType.Capsule}) {\n            Text('setAdsBlockRules')\n          }\n          .onClick(() => {\n            try {\n              let documentSelectionOptions: ESObject = new picker.DocumentSelectOptions();\n              let documentPicker: ESObject = new picker.DocumentViewPicker();\n              documentPicker.select(documentSelectionOptions).then((documentSelectResult: ESObject) => {\n                if (documentSelectResult && documentSelectResult.length > 0) {\n                  let fileRealPath = new fileUri.FileUri(documentSelectResult[0]);\n                  console.info('DocumentViewPicker.select successfully, uri: ' + fileRealPath);\n                  webview.AdsBlockManager.setAdsBlockRules(fileRealPath.path, true);\n                }\n              })\n            } catch (err) {\n              console.error('DocumentViewPicker.select failed with err:' + err);\n            }\n          })\n        }\n      }\n      Web({ src: this.main_url, controller: this.controller })\n        .onControllerAttached(()=>{\n          this.controller.enableAdsBlock(true);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果存在内置的easylist规则文件，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#setadsblockrules12",
        children: "setAdsBlockRules()"
      }), "接口的replace参数可用于设置规则文件的使用策略，replace为true表示不使用内置的easylist规则文件，replace为false表示自定义规则和内置的规则将会同时工作，如果发现内置规则与自定义规则冲突，可使用replace=true禁用内置规则效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置的自定义规则文件在应用进程内对所有的Web组件生效，是一个应用级全局配置文件，并将持久化，应用重启后可继续工作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关闭特定域名页面的广告过滤",
      children: "关闭特定域名页面的广告过滤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Web组件的广告过滤开关开启后，应用有时候会期望关闭一些特定页面的广告过滤功能，除了可以使用自定义的easylist规则，AdsBlockManager还提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#addadsblockdisallowedlist12",
        children: "addAdsBlockDisallowedList()"
      }), "接口完成此功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n// 演示通过一个按钮的点击向Web组件设置广告过滤的域名策略\n@Entry\n@Component\nstruct WebComponent {\n  main_url: string = 'https://www.example.com';\n  text_input_controller: TextInputController = new TextInputController();\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  @State input_text: string = 'https://www.example.com';\n\n  build() {\n    Column() {\n      Row() {\n        Flex() {\n          TextInput({ text: this.input_text, placeholder: this.main_url, controller: this.text_input_controller})\n            .id('input_url')\n            .height(40)\n            .margin(5)\n            .borderColor(Color.Blue)\n            .onChange((value: string) => {\n              this.input_text = value;\n            })\n\n          Button({type: ButtonType.Capsule}) { Text('Go') }\n          .onClick(() => {\n            this.controller.loadUrl(this.input_text);\n          })\n\n          Button({type: ButtonType.Capsule}) { Text('addAdsBlockDisallowedList') }\n          .onClick(() => {\n            let arrDomainSuffixes = new Array<string>();\n            arrDomainSuffixes.push('example.com');\n            arrDomainSuffixes.push('abcdefg.cn');\n            webview.AdsBlockManager.addAdsBlockDisallowedList(arrDomainSuffixes);\n          })\n        }\n      }\n      Web({ src: this.main_url, controller: this.controller })\n        .onControllerAttached(()=>{\n          this.controller.enableAdsBlock(true);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#addadsblockdisallowedlist12",
        children: "addAdsBlockDisallowedList()"
      }), "接口将域名设置到AdsBlockManager的DisallowedList中，下次页面加载时会使用网页url和DisallowedList中的域名进行后缀匹配，匹配成功则不会对此页面进行广告过滤。此外，还提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#addadsblockallowedlist12",
        children: "addAdsBlockAllowedList()"
      }), "接口配合DisallowedList进行域名设置，控制是否开启广告过滤。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AdsBlockManager中缓存有2组域名列表，分别为DisallowedList和AllowedList，其中DisallowedList用于禁用网页的广告过滤，而AllowedList用于重新开启被DisallowedList关闭的广告过滤开关，其中AllowedList优先级更高。页面加载时会先使用网页url和AllowedList进行匹配，匹配成功的网页广告过滤将保持开启，否则将会继续使用DisallowedList进行匹配，匹配成功将关闭网页的广告过滤。如果访问的网页不在AllowedList和DisallowedList中，那么默认网页的广告过滤会保持开启状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，应用想要开启域名为'news.example.com'和'sport.example.com'的广告过滤，但需要关闭'example.com'的其他域名下网页的广告过滤，就可以先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#addadsblockdisallowedlist12",
        children: "addAdsBlockDisallowedList()"
      }), "接口添加'example.com'域名到DisallowedList，再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-adsblockmanager/arkts-apis-webview-adsblockmanager#addadsblockallowedlist12",
        children: "addAdsBlockAllowedList()"
      }), "接口添加'news.example.com'和'sport.example.com'域名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n// 演示addAdsBlockAllowedList和addAdsBlockDisallowedList配套使用，设置网页级的广告过滤开关。\n@Entry\n@Component\nstruct WebComponent {\n  main_url: string = 'https://www.example.com';\n  text_input_controller: TextInputController = new TextInputController();\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  @State input_text: string = 'https://www.example.com';\n\n  build() {\n    Column() {\n      Row() {\n        Flex() {\n          TextInput({ text: this.input_text, placeholder: this.main_url, controller: this.text_input_controller})\n            .id('input_url')\n            .height(40)\n            .margin(5)\n            .borderColor(Color.Blue)\n            .onChange((value: string) => {\n              this.input_text = value;\n            })\n\n          Button({type: ButtonType.Capsule}) { Text('Go') }\n          .onClick(() => {\n            this.controller.loadUrl(this.input_text);\n          })\n\n          Button({type: ButtonType.Capsule}) { Text('addAdsBlockAllowedList') }\n          .onClick(() => {\n            let arrDisallowDomainSuffixes = new Array<string>();\n            arrDisallowDomainSuffixes.push('example.com');\n            webview.AdsBlockManager.addAdsBlockDisallowedList(arrDisallowDomainSuffixes);\n\n            let arrAllowedDomainSuffixes = new Array<string>();\n            arrAllowedDomainSuffixes.push('news.example.com');\n            arrAllowedDomainSuffixes.push('sport.example.com');\n            webview.AdsBlockManager.addAdsBlockAllowedList(arrAllowedDomainSuffixes);\n          })\n        }\n      }\n      Web({ src: this.main_url, controller: this.controller })\n        .onControllerAttached(()=>{\n          this.controller.enableAdsBlock(true);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，AdsBlockManager的DisallowedList和AllowedList列表不会持久化，因此重启应用后会重置为空。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果Web组件未通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#enableadsblock12",
        children: "enableAdsBlock()"
      }), "接口开启广告过滤功能，上述接口设置在此Web组件中将不起作用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "收集广告过滤的信息",
      children: "收集广告过滤的信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Web组件的广告过滤开关开启后，访问的网页如果发生了广告过滤，会通过Web组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#onadsblocked12",
        children: "onAdsBlocked()"
      }), "回调接口通知到应用，应用可根据需要进行过滤信息的收集和统计。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  @State totalAdsBlockCounts: number = 0;\n\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'https://www.example.com', controller: this.controller })\n        .onAdsBlocked((details: AdsBlockedDetails) => {\n          if (details) {\n            console.info(' Blocked ' + details.adsBlocked.length + ' in ' + details.url);\n            let adList: Array<string> = Array.from(new Set(details.adsBlocked));\n            this.totalAdsBlockCounts += adList.length;\n            console.info('Total blocked counts :' + this.totalAdsBlockCounts);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于页面可能随时发生变化并不断产生网络请求，为了减少通知频次、降低对页面加载过程的影响，仅在页面加载完成时进行首次通知，此后发生的过滤将间隔1秒钟上报，无广告过滤则无通知。"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);