"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["399705"], {
125148(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_cyber_security_privacy_web_intelligent_tracking_prevention_web_intelligent_tracking_prevention_md_390_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-cyber-security-privacy-web-intelligent-tracking-prevention-web-intelligent-tracking-prevention-md-390.json
var site_docs_arkweb_web_manage_cyber_security_privacy_web_intelligent_tracking_prevention_web_intelligent_tracking_prevention_md_390_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-cyber-security-privacy/web-intelligent-tracking-prevention/web-intelligent-tracking-prevention","title":"使用智能防跟踪功能","description":"Web组件支持智能防跟踪功能，即当跟踪型网站作为第三方插入到其他网页时，其发送的网络请求将禁止携带cookie。","source":"@site/docs/arkweb/web-manage-cyber-security-privacy/web-intelligent-tracking-prevention/web-intelligent-tracking-prevention.md","sourceDirName":"arkweb/web-manage-cyber-security-privacy/web-intelligent-tracking-prevention","slug":"/arkweb/web-manage-cyber-security-privacy/web-intelligent-tracking-prevention/","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-intelligent-tracking-prevention/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用智能防跟踪功能","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-intelligent-tracking-prevention","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"解决Web组件本地资源跨域问题","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-cross-origin/"},"next":{"title":"使用Web组件的广告过滤功能","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-adsblock/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-cyber-security-privacy/web-intelligent-tracking-prevention/web-intelligent-tracking-prevention.md


const frontMatter = {
	title: '使用智能防跟踪功能',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-intelligent-tracking-prevention',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用智能防跟踪功能';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用智能防跟踪功能",
        children: "使用智能防跟踪功能"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件支持智能防跟踪功能，即当跟踪型网站作为第三方插入到其他网页时，其发送的网络请求将禁止携带cookie。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#enableintelligenttrackingprevention12",
            children: "enableIntelligentTrackingPrevention"
          }), "接口启用或关闭Web组件的智能防跟踪功能。默认情况下，该功能未启用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('enableIntelligentTrackingPrevention')\n        .onClick(() => {\n          try {\n            this.controller.enableIntelligentTrackingPrevention(true);\n            console.info('enableIntelligentTrackingPrevention: true');\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#isintelligenttrackingpreventionenabled12",
            children: "isIntelligentTrackingPreventionEnabled"
          }), "接口，判断Web组件是否开启了智能防跟踪功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('isIntelligentTrackingPreventionEnabled')\n        .onClick(() => {\n          try {\n            let result = this.controller.isIntelligentTrackingPreventionEnabled();\n            console.info('result: ' + result);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onintelligenttrackingpreventionresult12",
            children: "onIntelligentTrackingPreventionResult"
          }), "接口将被拦截的跟踪型域名及其触发网站的域名回调给应用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      // 需要打开智能防跟踪功能，才会触发onIntelligentTrackingPreventionResult回调\n      Button('enableIntelligentTrackingPrevention')\n        .onClick(() => {\n          try {\n            this.controller.enableIntelligentTrackingPrevention(true);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code}, Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onIntelligentTrackingPreventionResult((details) => {\n          console.info('onIntelligentTrackingPreventionResult: [websiteHost]= ' + details.host +\n            ', [trackerHost]=' + details.trackerHost);\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "智能防跟踪功能提供了一组接口，用于设置绕过该功能的域名列表。这些接口设置的域名列表适用于整个应用，而非特定的Web组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#addintelligenttrackingpreventionbypassinglist12",
            children: "addIntelligentTrackingPreventionBypassingList"
          }), "接口设置绕过域名列表。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('addIntelligentTrackingPreventionBypassingList')\n        .onClick(() => {\n          try {\n            let hostList = ['www.test1.com', 'www.test2.com', 'www.test3.com'];\n            webview.WebviewController.addIntelligentTrackingPreventionBypassingList(hostList);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#removeintelligenttrackingpreventionbypassinglist12",
            children: "removeIntelligentTrackingPreventionBypassingList"
          }), "接口删除部分绕过域名列表。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('removeIntelligentTrackingPreventionBypassingList')\n        .onClick(() => {\n          try {\n            let hostList = [ 'www.test1.com', 'www.test2.com' ];\n            webview.WebviewController.removeIntelligentTrackingPreventionBypassingList(hostList);\n          } catch (error) {\n            console.error(\n              `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#clearintelligenttrackingpreventionbypassinglist12",
            children: "clearIntelligentTrackingPreventionBypassingList"
          }), "接口清除所有绕过域名列表。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('clearIntelligentTrackingPreventionBypassingList')\n        .onClick(() => {\n          webview.WebviewController.clearIntelligentTrackingPreventionBypassingList();\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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