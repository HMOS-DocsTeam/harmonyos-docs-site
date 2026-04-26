"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["545593"], {
592142(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_process_page_content_web_data_detector_web_data_detector_md_daf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-process-page-content-web-data-detector-web-data-detector-md-daf.json
var site_docs_arkweb_web_process_page_content_web_data_detector_web_data_detector_md_daf_namespaceObject = JSON.parse('{"id":"arkweb/web-process-page-content/web-data-detector/web-data-detector","title":"使用Web组件的智能分词能力","description":"从API version 20开始，ArkWeb提供了H5页面内的文本分词识别功能，支持文本分词高亮、分词长按预览及文本选择菜单扩展等。这些功能需将enableDataDetector设置为true，默认为false。","source":"@site/docs/arkweb/web-process-page-content/web-data-detector/web-data-detector.md","sourceDirName":"arkweb/web-process-page-content/web-data-detector","slug":"/arkweb/web-process-page-content/web-data-detector/","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-data-detector/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"使用Web组件的智能分词能力","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-data-detector","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件与系统剪贴板交互处理网页内容","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-clipboard/"},"next":{"title":"同层渲染","permalink":"/harmonyos-docs-site/arkweb/web-same-layer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-process-page-content/web-data-detector/web-data-detector.md


const frontMatter = {
	title: '使用Web组件的智能分词能力',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-data-detector',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件的智能分词能力';

const assets = {

};



const toc = [{
  "value": "文本分词高亮",
  "id": "文本分词高亮",
  "level": 2
}, {
  "value": "分词长按预览",
  "id": "分词长按预览",
  "level": 2
}, {
  "value": "文本选择菜单扩展",
  "id": "文本选择菜单扩展",
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
    span: "span",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用web组件的智能分词能力",
        children: "使用Web组件的智能分词能力"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，ArkWeb提供了H5页面内的文本分词识别功能，支持文本分词高亮、分词长按预览及文本选择菜单扩展等。这些功能需将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#enabledatadetector20",
        children: "enableDataDetector"
      }), "设置为true，默认为false。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此功能主要用于单页H5页面内容的实体识别，能够自动识别页面中的电话号码、网址等信息，并提供便捷的交互操作。启用此功能后，用户可以直接在页面中与识别的实体交互，如点击电话号码进行呼叫，点击地址在地图中查看，从而提升用户体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可识别的实体类型包括电话、链接、邮箱、地址和时间，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textdatadetectortype11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "TextDataDetectorType"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本分词高亮",
      children: "文本分词高亮"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件内的H5页面加载完成后，自动识别并高亮标注页面内的特殊实体。页面变化后新出现的实体不会被高亮标注。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "特殊实体的高亮过滤规则如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不处理输入框内、可编辑区域内的文本实体。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不处理", (0,jsx_runtime.jsx)(_components.a, {}), "标签内的文本实体。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不处理跨域iframe内、两层及以上嵌套iframe内的文本实体。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["跨节点的实体不会被高亮，如", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["星", (0,jsx_runtime.jsx)(_components.span, {
            children: "期六"
          })]
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面中文本实体高亮后，将转变为超链接形式。触摸点击或鼠标左键点击实体，会根据实体类型弹出操作菜单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  webController: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Row() {\n        Button('Refresh')\n          .onClick(() => {\n            this.webController.refresh();\n          })\n      }\n\n      Web({\n        src: $rawfile('index.html'),\n        controller: this.webController\n      })\n        .enableDataDetector(true)\n        .dataDetectorConfig({\n          types: []  // 实体识别类型，为空则识别所有类型\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Test</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n    <p>电话：400-123-4567</p>\n    <p>邮箱：test@example.com</p>\n    <p>网址：https://www.example.com/</p>\n    <p>日期：2025.06.01</p>\n    <p>地址：北京市海淀区中关村</p>\n    <p>不会高亮的星<span>期六</span>与会高亮的星期六</p>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击实体文本，弹出对应的操作菜单，如下图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854561)/* ["default"] */.A) + "",
        width: "381",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鼠标右键点击、鼠标拖拽将触发超链接的默认行为。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#datadetectorconfig20",
        children: "dataDetectorConfig"
      }), "未被使用，或其参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textdatadetectorconfig11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "TextDataDetectorConfig"
      }), "的enablePreviewMenu设置为false时，长按、拖拽将触发超链接的默认行为，如下图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(886155)/* ["default"] */.A) + "",
        width: "381",
        height: "304"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面文本元素的计算样式存在user-select:none时，实体菜单中“选择文本”的选项无效，但在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#copyoptions11",
        children: "copyOptions"
      }), "不为CopyOptions.None时，仍可以复制实体文本。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分词长按预览",
      children: "分词长按预览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用分词长按预览功能时，需要额外配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#datadetectorconfig20",
        children: "dataDetectorConfig"
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Web({\nsrc: $rawfile('index.html'),\ncontroller: this.webController\n})\n.enableDataDetector(true)\n.dataDetectorConfig({\n  enablePreviewMenu: true,  // 配置分词长按预览功能\n  types: []\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#copyoptions11",
        children: "copyOptions"
      }), "不为CopyOptions.None时，长按被高亮的实体文本，会弹出预览菜单，如下图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(990146)/* ["default"] */.A) + "",
        width: "381",
        height: "304"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#bindselectionmenu13",
        children: "bindSelectionMenu"
      }), "绑定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-process-page-content/web-menu#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8F%9C%E5%8D%95",
        children: "自定义菜单"
      }), "与分词长按预览菜单互不影响。长按被高亮的分词超链接不会弹出自定义超链接菜单，长按普通超链接也不会弹出分词预览菜单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本选择菜单扩展",
      children: "文本选择菜单扩展"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#enableselecteddatadetector22",
        children: "enableSelectedDataDetector"
      }), "单独配置文本选择AI菜单的启用情况。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在非编辑区域中，选中的文本满足以下条件时，文本选择菜单将显示相应的AI菜单项："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选中文本经过UTF-8编码转换后，其字节长度不超过255字节。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["选中文本中仅包含一个匹配识别类型的实体（可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#datadetectorconfig20",
          children: "dataDetectorConfig"
        }), "配置支持的识别类型）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不处于“全选”操作状态下的文本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(561856)/* ["default"] */.A) + "",
        width: "381",
        height: "304"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI菜单项的出现与是否选中高亮的实体文本无关，只要满足上述条件，AI菜单项就会显示。"
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
561856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958242-971f66ab6fcf52f333ac353d39baec71.gif");

},
990146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438287-eef85e42e90625a5561bb0b7fc658b0f.gif");

},
886155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798592-99361a531c6d2babefc6cbb453667011.gif");

},
854561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478241-06d5accba9dae8483b81071994ea2c71.gif");

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