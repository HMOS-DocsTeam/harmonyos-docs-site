"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["440307"], {
378452(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_process_page_content_web_pdf_preview_web_pdf_preview_md_013_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-process-page-content-web-pdf-preview-web-pdf-preview-md-013.json
var site_docs_arkweb_web_process_page_content_web_pdf_preview_web_pdf_preview_md_013_namespaceObject = JSON.parse('{"id":"arkweb/web-process-page-content/web-pdf-preview/web-pdf-preview","title":"使用Web组件的PDF文档预览能力","description":"Web组件支持在网页中预览PDF。应用通过WebOptions的src参数和loadUrl()接口加载PDF文档。具体场景包括：网络PDF文档、应用沙箱内PDF文档和本地PDF文档。","source":"@site/docs/arkweb/web-process-page-content/web-pdf-preview/web-pdf-preview.md","sourceDirName":"arkweb/web-process-page-content/web-pdf-preview","slug":"/arkweb/web-process-page-content/web-pdf-preview/","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-pdf-preview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用Web组件的PDF文档预览能力","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-pdf-preview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件保存前端页面为PDF","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-createpdf/"},"next":{"title":"网页中安全区域计算和避让适配","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-safe-area-insets/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-process-page-content/web-pdf-preview/web-pdf-preview.md


const frontMatter = {
	title: '使用Web组件的PDF文档预览能力',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-pdf-preview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件的PDF文档预览能力';

const assets = {

};



const toc = [{
  "value": "通过不同的方式加载PDF文档",
  "id": "通过不同的方式加载pdf文档",
  "level": 2
}, {
  "value": "通过配置PDF文件预览参数，控制打开预览时页面状态",
  "id": "通过配置pdf文件预览参数控制打开预览时页面状态",
  "level": 2
}, {
  "value": "PDF文档预览回调功能",
  "id": "pdf文档预览回调功能",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "使用web组件的pdf文档预览能力",
        children: "使用Web组件的PDF文档预览能力"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
        children: "Web组件"
      }), "支持在网页中预览PDF。应用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#weboptions",
        children: "WebOptions"
      }), "的src参数和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loadurl",
        children: "loadUrl()"
      }), "接口加载PDF文档。具体场景包括：网络PDF文档、应用沙箱内PDF文档和本地PDF文档。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若涉及网络文档获取，需在module.json5中配置网络访问权限。添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
        children: "在配置文件中声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\":[\n  {\n    \"name\" : \"ohos.permission.INTERNET\"\n  }\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过不同的方式加载pdf文档",
      children: "通过不同的方式加载PDF文档"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下面的示例中，Web组件创建时指定默认加载的网络PDF文档", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://www.example.com/test.pdf。使用时需替换为真实的可访问URL"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({\n        src:\n        'https://www.example.com/test.pdf',                     // 方式一 加载网络PDF文档\n          // this.getUIContext().getHostContext()!.filesDir + '/test.pdf', // 方式二 加载本地应用沙箱内PDF文档\n          // 'resource://rawfile/test.pdf',                         // 方式三 本地PDF文档 (格式一)\n          // $rawfile('test.pdf'),                                 // 方式三 本地PDF文档 (格式二)\n          controller: this.controller\n      })\n        .domStorageAccess(true)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PDF预览页面会根据用户操作使用window.localStorage记录侧导航栏的展开状态，因此需要开启文档对象模型存储", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#domstorageaccess",
        children: "domStorageAccess"
      }), "权限:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Web().domStorageAccess(true)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
        children: "Web组件"
      }), "时，指定默认加载的PDF文档。默认PDF文档加载完成后，若需变更Web组件显示的PDF文档，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loadurl",
        children: "loadUrl()"
      }), "接口加载指定的PDF文档。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#weboptions",
        children: "WebOptions"
      }), "的第一个参数变量src不能通过状态变量（例如：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "）动态更改地址，如需更改，请通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loadurl",
        children: "loadUrl()"
      }), "重新加载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含三种PDF文档加载预览场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预览加载网络PDF文档。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Web({\n  src: \"https://www.example.com/test.pdf\",\n  controller: this.controller\n})\n  .domStorageAccess(true)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["预览加载应用沙箱内PDF文档需要开启文件系统的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#fileaccess",
            children: "fileAccess"
          }), "权限。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Web({\n  src: this.getUIContext().getHostContext()!.filesDir + \"/test.pdf\",\n  controller: this.controller\n})\n  .domStorageAccess(true)\n  .fileAccess(true)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预览加载本地PDF文档。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Web({\n  src: \"resource://rawfile/test.pdf\",            // 格式一 加载本地PDF文档\n  // src: $rawfile('test.pdf'),                  // 格式二 加载本地PDF文档\n  controller: this.controller\n})\n  .domStorageAccess(true)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过配置pdf文件预览参数控制打开预览时页面状态",
      children: "通过配置PDF文件预览参数，控制打开预览时页面状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持如下参数:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "语法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nameddest=destination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定PDF文档中的命名目标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "page=pagenum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用整数指定文档中的页码，文档第一页的pagenum值为1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zoom=scale,left,top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用浮点或整数值设置缩放和滚动系数。例如：缩放值100表示缩放值为100%。 向左和向上滚动值位于坐标系中，0,0 表示可见页面的左上角，无论文档如何旋转。scale为必选参数。left,top为非必选参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "toolbar=1 or 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1表示打开顶部工具栏。0表示关闭顶部工具栏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "navpanes=1 or 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1表示打开侧边导航窗格。0表示关闭侧边导航窗格。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pdfbackgroundcolor=color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从HarmonyOS 6.0系统版本开始，支持指定PDF文档背景色，color为标准的六位十六进制RGB（取值范围为000000~ffffff，例如白色为：ffffff）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URL示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https://example.com/test.pdf#nameddest=Chapter6\nhttps://example.com/test.pdf#page=3\nhttps://example.com/test.pdf#zoom=50\nhttps://example.com/test.pdf#page=3&zoom=200,250,100\nhttps://example.com/test.pdf#toolbar=0\nhttps://example.com/test.pdf#navpanes=0\nhttps://example.com/test.pdf#pdfbackgroundcolor=ffffff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pdf文档预览回调功能",
      children: "PDF文档预览回调功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，PDF文档预览支持两种回调功能：加载成功/失败回调和滚动到底部事件回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下面的示例中，Web组件创建时指定默认加载的网络PDF文档", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://www.example.com/test.pdf。使用时需替换为真实的可访问URL"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载成功/失败回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Web({\n  src: 'https://www.example.com/test.pdf',\n  controller: this.controller\n})\n  .onPdfLoadEvent(\n    (eventInfo: OnPdfLoadEvent) => {\n      console.info(`Load event callback called. url: ${eventInfo.url}, result: ${eventInfo.result}.`)\n    }\n  )\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "滚动到底部事件回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Web({\n  src: 'https://www.example.com/test.pdf',\n  controller: this.controller\n})\n  .onPdfScrollAtBottom(\n    (eventInfo: OnPdfScrollEvent) => {\n      console.info(`Scroll at bottom callback called. url: ${eventInfo.url}.`)\n    }\n  )\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/harmonyos_samples/web-pdfviewer",
          children: "Web组件预览PDF文件"
        })
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