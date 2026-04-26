"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["681164"], {
933066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_loading_browsing_web_redirection_and_browsing_history_mgmt_web_redirection_and_browsing_history_mgmt_md_b28_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-loading-browsing-web-redirection-and-browsing-history-mgmt-web-redirection-and-browsing-history-mgmt-md-b28.json
var site_docs_arkweb_web_manage_loading_browsing_web_redirection_and_browsing_history_mgmt_web_redirection_and_browsing_history_mgmt_md_b28_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-loading-browsing/web-redirection-and-browsing-history-mgmt/web-redirection-and-browsing-history-mgmt","title":"管理页面跳转及浏览记录导航","description":"为了提高页面访问速度，浏览记录导航允许用户通过“前进”和“后退”按钮在历史记录的页面之间切换。Web组件支持用户跳转到应用内其他页面或者进行跨应用跳转。","source":"@site/docs/arkweb/web-manage-loading-browsing/web-redirection-and-browsing-history-mgmt/web-redirection-and-browsing-history-mgmt.md","sourceDirName":"arkweb/web-manage-loading-browsing/web-redirection-and-browsing-history-mgmt","slug":"/arkweb/web-manage-loading-browsing/web-redirection-and-browsing-history-mgmt/","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-redirection-and-browsing-history-mgmt/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"管理页面跳转及浏览记录导航","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-redirection-and-browsing-history-mgmt","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件加载页面","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-page-loading-with-web-components/"},"next":{"title":"拦截Web组件发起的网络请求","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-scheme-handler/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-loading-browsing/web-redirection-and-browsing-history-mgmt/web-redirection-and-browsing-history-mgmt.md


const frontMatter = {
	title: '管理页面跳转及浏览记录导航',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-redirection-and-browsing-history-mgmt',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '管理页面跳转及浏览记录导航';

const assets = {

};



const toc = [{
  "value": "历史记录导航",
  "id": "历史记录导航",
  "level": 2
}, {
  "value": "页面跳转",
  "id": "页面跳转",
  "level": 2
}, {
  "value": "跨应用跳转",
  "id": "跨应用跳转",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "管理页面跳转及浏览记录导航",
        children: "管理页面跳转及浏览记录导航"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了提高页面访问速度，浏览记录导航允许用户通过“前进”和“后退”按钮在历史记录的页面之间切换。Web组件支持用户跳转到应用内其他页面或者进行跨应用跳转。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "历史记录导航",
      children: "历史记录导航"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在前端页面点击网页中的链接时，Web组件默认会自动打开并加载目标网址。当前端页面替换为新的加载链接时，会自动记录已经访问的网页地址。可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#forward",
        children: "forward()"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#backward",
        children: "backward()"
      }), "接口向前/向后浏览上一个/下一个历史记录。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面加载涉及网络资源时，需在module.json5中配置网络访问权限，添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
        children: "在配置文件中声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\":[\n    {\n      \"name\" : \"ohos.permission.INTERNET\"\n    }\n  ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例中，通过点击应用按钮来触发前端页面的后退操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct WebComponent {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('loadData')\n        .onClick(() => {\n          if (this.webviewController.accessBackward()) {\n            this.webviewController.backward();\n          }\n        })\n      Web({ src: 'https://www.example.com/cn/', controller: this.webviewController });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果存在历史记录，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#accessbackward",
        children: "accessBackward()"
      }), "接口将返回true。同样，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#accessforward",
        children: "accessForward()"
      }), "接口检查是否存在前进的历史记录。如果未执行检查，当用户浏览到历史记录的末尾时，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#forward",
        children: "forward()"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#backward",
        children: "backward()"
      }), "接口将不会执行任何操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面跳转",
      children: "页面跳转"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当点击页面中的链接需要跳转到应用内其他页面时，可以通过使用Web组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onloadintercept10",
        children: "onLoadIntercept()"
      }), "接口来实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，应用首页Index.ets加载前端页面route.html，在route.html页面点击“个人中心”超链接，可跳转到应用的ProfilePage.ets页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用首页Index.ets页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { router } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct WebComponent {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      // 资源文件route.html存放路径src/main/resources/rawfile\n      Web({ src: $rawfile('route.html'), controller: this.webviewController })\n        .onLoadIntercept((event) => {\n          if (event) {\n            let url: string = event.data.getRequestUrl();\n            if (url.indexOf('native://') === 0) {\n              // 跳转其他界面\n              this.getUIContext().getRouter().pushUrl({ url: url.substring(9) });\n              return true;\n            }\n          }\n          return false;\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "route.html前端页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- route.html -->\n<!DOCTYPE html>\n<html>\n<body>\n  <div>\n      <a href=\"native://pages/ProfilePage\">个人中心</a>\n   </div>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "跳转页面ProfilePage.ets代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct ProfilePage {\n  @State message: string = 'Hello World';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(20)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨应用跳转",
      children: "跨应用跳转"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件可以实现点击前端页面超链接跳转到其他应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例代码中，点击call.html前端页面中的超链接，可以跳转到电话应用的拨号界面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { call } from '@kit.TelephonyKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('call.html'), controller: this.webviewController })\n        .onLoadIntercept((event) => {\n          if (event) {\n            let url: string = event.data.getRequestUrl();\n            // 判断链接是否为拨号链接\n            if (url.indexOf('tel://') === 0) {\n              // 跳转拨号界面\n              call.makeCall(url.substring(6), (err) => {\n                if (!err) {\n                  console.info('make call succeeded.');\n                } else {\n                  console.info('make call fail, err is:' + JSON.stringify(err));\n                }\n              });\n              return true;\n            }\n          }\n          return false;\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面call.html代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- call.html -->\n<!DOCTYPE html>\n<html>\n<body>\n  <div>\n    <a href=\"tel://***********\">拨打电话</a>\n  </div>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(122642)/* ["default"] */.A) + "",
        width: "450",
        height: "800"
      })
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
122642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958226-cd88858e66ee0a93f0e2ce0064d49189.gif");

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