"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["998696"], {
834653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_loading_browsing_web_page_loading_with_web_components_web_page_loading_with_web_components_md_e6f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-loading-browsing-web-page-loading-with-web-components-web-page-loading-with-web-components-md-e6f.json
var site_docs_arkweb_web_manage_loading_browsing_web_page_loading_with_web_components_web_page_loading_with_web_components_md_e6f_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-loading-browsing/web-page-loading-with-web-components/web-page-loading-with-web-components","title":"使用Web组件加载页面","description":"页面加载是Web组件的基本功能。根据页面加载数据来源可以分为三种常用场景，包括加载网络页面、加载本地页面、加载HTML格式的富文本数据。","source":"@site/docs/arkweb/web-manage-loading-browsing/web-page-loading-with-web-components/web-page-loading-with-web-components.md","sourceDirName":"arkweb/web-manage-loading-browsing/web-page-loading-with-web-components","slug":"/arkweb/web-manage-loading-browsing/web-page-loading-with-web-components/","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-page-loading-with-web-components/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用Web组件加载页面","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-page-loading-with-web-components","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"坚盾守护模式","permalink":"/harmonyos-docs-site/arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode/"},"next":{"title":"管理页面跳转及浏览记录导航","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-redirection-and-browsing-history-mgmt/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-loading-browsing/web-page-loading-with-web-components/web-page-loading-with-web-components.md


const frontMatter = {
	title: '使用Web组件加载页面',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-page-loading-with-web-components',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件加载页面';

const assets = {

};



const toc = [{
  "value": "加载网络页面",
  "id": "加载网络页面",
  "level": 2
}, {
  "value": "加载本地页面",
  "id": "加载本地页面",
  "level": 2
}, {
  "value": "加载HTML格式的文本数据",
  "id": "加载html格式的文本数据",
  "level": 2
}, {
  "value": "resource协议加载本地资源",
  "id": "resource协议加载本地资源",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用web组件加载页面",
        children: "使用Web组件加载页面"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面加载是Web组件的基本功能。根据页面加载数据来源可以分为三种常用场景，包括加载网络页面、加载本地页面、加载HTML格式的富文本数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面加载过程中，若涉及网络资源获取，请在module.json5中配置网络访问权限，添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
        children: "在配置文件中声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\":[\n    {\n      \"name\" : \"ohos.permission.INTERNET\"\n    }\n  ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "加载网络页面",
      children: "加载网络页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以在Web组件创建时，指定默认加载的网络页面。在默认页面加载完成后，如果需要变更此Web组件显示的网络页面，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loadurl",
        children: "loadUrl()"
      }), "接口加载指定的网页。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
        children: "Web组件"
      }), "的第一个参数变量src不能通过状态变量（例如：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "）动态更改地址，如需更改，请通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loadurl",
        children: "loadUrl()"
      }), "重新加载。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下面的示例中，在Web组件加载完“", (0,jsx_runtime.jsx)(_components.code, {
        children: "www.example.com”页面后，开发者可通过loadUrl接口将此Web组件显示页面变更为“www.example1.com"
      }), "”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('loadUrl')\n        .onClick(() => {\n          try {\n            // 点击按钮时，通过loadUrl，跳转到www.example1.com\n            this.controller.loadUrl('www.example1.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      // 组件创建时，加载www.example.com\n      Web({ src: 'www.example.com', controller: this.controller });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "加载本地页面",
      children: "加载本地页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了在启动、跳转、弱网等场景下减少用户等待感知，同时为动态内容加载争取时间，可以加载本地页面优化用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中展示加载本地页面文件的方法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将本地页面文件放在应用的rawfile目录下，开发者可以在Web组件创建的时候指定默认加载的本地页面，并且加载完成后可通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loadurl",
        children: "loadUrl()"
      }), "接口变更当前Web组件的页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载本地html文件时引用本地css样式文件可以通过以下方法实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<link rel=\"stylesheet\" href=\"resource://rawfile/xxx.css\">\n<link rel=\"stylesheet\" href=\"file:///data/storage/el2/base/haps/entry/cache/xxx.css\">// 加载沙箱路径下的本地css文件。\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将资源文件放置在应用的resources/rawfile目录下。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " 资源文件路径"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(293025)/* ["default"] */.A) + "",
            width: "643",
            height: "526"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('loadUrl')\n        .onClick(() => {\n          try {\n            // 点击按钮时，通过loadUrl，跳转到local1.html\n            this.controller.loadUrl($rawfile('local1.html'));\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      // 组件创建时，通过$rawfile加载本地文件local.html\n      Web({ src: $rawfile('local.html'), controller: this.controller });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "local.html页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- local.html -->\n<!DOCTYPE html>\n<html>\n  <body>\n    <p>Hello World</p>\n  </body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "local1.html页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- local1.html -->\n<!DOCTYPE html>\n<html>\n  <body>\n    <p>This is local1 page</p>\n  </body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载沙箱路径下的本地页面文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过构造的单例对象GlobalContext获取沙箱路径。需要开启应用中文件系统的访问", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#fileaccess",
            children: "fileAccess"
          }), "权限。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export class GlobalContext {\n  private constructor() {}\n  private static instance: GlobalContext;\n  private _objects = new Map<string, Object>();\n\n  public static getContext(): GlobalContext {\n    if (!GlobalContext.instance) {\n      GlobalContext.instance = new GlobalContext();\n    }\n    return GlobalContext.instance;\n  }\n\n  getObject(value: string): Object | undefined {\n    return this._objects.get(value);\n  }\n\n  setObject(key: string, objectClass: Object): void {\n    this._objects.set(key, objectClass);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { GlobalContext } from './GlobalContext';\n\nlet url = 'file://' + GlobalContext.getContext().getObject('filesDir') + '/index.html';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n    // ···\n      // 加载沙箱路径文件。\n      Web({ src: url, controller: this.controller })\n      .fileAccess(true);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改EntryAbility.ets文件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以filesDir为例，获取沙箱路径。若想获取其他路径，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
            children: "应用文件路径"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { webview } from '@kit.ArkWeb';\nimport { GlobalContext } from '../GlobalContext';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    // 通过在GlobalContext对象上绑定filesDir，可以实现UIAbility组件与UI之间的数据同步。\n    GlobalContext.getContext().setObject(\"filesDir\", this.context.filesDir);\n    console.info(\"Sandbox path is \" + GlobalContext.getContext().getObject(\"filesDir\"));\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n    <body>\n        <p>Hello World</p>\n    </body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "加载html格式的文本数据",
      children: "加载HTML格式的文本数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loaddata",
        children: "loadData()"
      }), "接口实现加载HTML格式的文本数据。当开发者不需要加载整个页面，只需要显示一些页面片段时，可通过此功能来快速加载页面，当加载大量html文件时，需设置第四个参数baseUrl为\"data\"。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('loadData')\n        .onClick(() => {\n          try {\n            // 点击按钮时，通过loadData，加载HTML格式的文本数据\n            this.controller.loadData(\n              '<html><body bgcolor=\\'white\\'>Source:<pre>source</pre></body></html>',\n              'text/html',\n              'UTF-8'\n            );\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      // 组件创建时，加载www.example.com\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件可以通过data url方式直接加载HTML字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  htmlStr: string = 'data:text/html, <html><body bgcolor=\\'white\\'>Source:<pre>source</pre></body></html>';\n\n  build() {\n    Column() {\n      // 组件创建时，加载htmlStr\n      Web({ src: this.htmlStr, controller: this.controller });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resource协议加载本地资源",
      children: "resource协议加载本地资源"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resource协议允许访问应用资源目录中的文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct ResourceWebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('LoadResource')\n        .onClick(() => {\n          try {\n            // 通过resource加载resources/rawfile目录下的index1.html文件。\n            this.controller.loadUrl('resource://rawfile/index1.html');\n          } catch (error) {\n            console.error(`ErrorCode: ${error.code}, Message: ${error.message}`);\n          }\n        })\n\n      // 组件创建时直接使用resource协议加载资源。\n      Web({ src: 'resource://rawfile/index.html', controller: this.controller });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“src\\main\\resources\\rawfile”文件夹下创建index.html："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n  <body>\n    <p>Hello World</p>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“src\\main\\resources\\rawfile”文件夹下创建index1.html："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index1.html -->\n<!DOCTYPE html>\n<html>\n  <body>\n    <p>Hello World Again</p>\n  </body>\n</html>\n"
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
293025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438271-200d8779b6b9968a3345e309b33317ca.png");

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