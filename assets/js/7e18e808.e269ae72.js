"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["905060"], {
108600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_vision_kit_guide_vision_documentscanner_vision_documentscanner_md_7e1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vision-kit-guide-vision-documentscanner-vision-documentscanner-md-7e1.json
var site_docs_vision_kit_guide_vision_documentscanner_vision_documentscanner_md_7e1_namespaceObject = JSON.parse('{"id":"vision-kit-guide/vision-documentscanner/vision-documentscanner","title":"文档扫描","description":"场景介绍","source":"@site/docs/vision-kit-guide/vision-documentscanner/vision-documentscanner.md","sourceDirName":"vision-kit-guide/vision-documentscanner","slug":"/vision-kit-guide/vision-documentscanner/","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-documentscanner/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"文档扫描","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-documentscanner","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"卡证识别","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-cardrecognition/"},"next":{"title":"AI识图","permalink":"/harmonyos-docs-site/vision-kit-guide/vision-imageanalyzer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/vision-kit-guide/vision-documentscanner/vision-documentscanner.md


const frontMatter = {
	title: '文档扫描',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-documentscanner',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '文档扫描';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发实例",
  "id": "开发实例",
  "level": 2
}, {
  "value": "Index.ets",
  "id": "indexets",
  "level": 3
}, {
  "value": "DocDemoPage.ets",
  "id": "docdemopageets",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "文档扫描",
        children: "文档扫描"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文档扫描控件提供拍摄文档并转换为高清扫描件的服务。仅需拍摄文档，即可自动裁剪和优化，并支持图片、PDF格式保存和分享；同时支持拍摄或从图库选择图片识别表格，生成表格文档。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可广泛用于教育办公场景，扫描文档、票据、课堂PPT和书籍等输出图片/PDF供用户完成发送、存档等操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 文档扫描示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(444473)/* ["default"] */.A) + "",
        width: "269",
        height: "559"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持的语种类型：简体中文、英文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文档扫描暂时只支持phone、tablet设备。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不允许被其他组件或窗口遮挡。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下仅列出demo中调用的部分主要接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/vision-api/vision-component/vision-document-scanner/vision-document-scanner",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vision-api/vision-component/vision-document-scanner/vision-document-scanner#documentscanner",
              children: "DocumentScanner"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文档扫描控件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/vision-api/vision-component/vision-document-scanner/vision-document-scanner#documentscannerresultcallback",
              children: "DocumentScannerResultCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文档扫描结果"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将文档扫描控件相关的类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { DocType, DocumentScanner, DocumentScannerConfig, SaveOption, FilterId, ShootingMode } from \"@kit.VisionKit\";\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置布局，根据业务场景配置文档扫描控件的相关属性，获取返回的文档图片uri列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const TAG = 'DocumentScanner'\n\n@Entry\n@Component\nstruct Index {\n  private docScanConfig = new DocumentScannerConfig()\n\n  aboutToAppear() {\n    this.docScanConfig.supportType = [DocType.DOC, DocType.SHEET]\n    this.docScanConfig.isGallerySupported = true\n    this.docScanConfig.editTabs = []\n    this.docScanConfig.maxShotCount = 3\n    this.docScanConfig.defaultFilterId = FilterId.ORIGINAL\n    this.docScanConfig.defaultShootingMode = ShootingMode.MANUAL\n    this.docScanConfig.isShareable = true\n    this.docScanConfig.originalUris = []\n  }\n\n  build() {\n    Column() {\n      DocumentScanner({\n        scannerConfig: this.docScanConfig,\n        onResult: (code: number, saveType: SaveOption, uris: string[]) => {\n          hilog.info(0x0001, TAG, `result code: ${code}, save: ${saveType}`)\n          uris.forEach(uriString => {\n            hilog.info(0x0001, TAG, `uri: ${uriString}`)\n          })\n        }\n      }).size({ width: '100%', height: '100%' })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "indexets",
      children: "Index.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开发实例分两页实现，一页为文档扫描入口页，一页为文档扫描实现页\n// 文档扫描入口页，需引入文档扫描实现页，以下文实例为例，实现页文件名为DocDemoPage\nimport { DocDemoPage } from './DocDemoPage'\n\n@Entry\n@Component\nstruct MainPage {\n  @Provide('pathStack') pathStack: NavPathStack = new NavPathStack()\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'documentScanner') {\n      DocDemoPage()\n    }\n  }\n\n  // 文档扫描入口按钮，可替换为业务入口\n  build() {\n    Navigation(this.pathStack) {\n      Button('DocumentScanner', { stateEffect: true, type: ButtonType.Capsule })\n        .width('50%')\n        .height(40)\n        .onClick(() => {\n          this.pathStack.pushPath({ name: 'documentScanner' })\n        })\n    }.title('文档扫描控件demo').navDestination(this.PageMap)\n    .mode(NavigationMode.Stack)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docdemopageets",
      children: "DocDemoPage.ets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 文档扫描实现页，文件名为DocDemoPage，需被引入至入口页\nimport {\n  DocType,\n  DocumentScanner,\n  DocumentScannerConfig,\n  SaveOption,\n  FilterId,\n  ShootingMode\n} from \"@kit.VisionKit\"\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'DocDemoPage'\n\n// 文档扫描页，用于加载UIExtensionAbility\n@Component\nexport struct DocDemoPage {\n  @State docImageUris: string[] = []\n  @Consume('pathStack') pathStack: NavPathStack\n  private docScanConfig = new DocumentScannerConfig()\n\n  aboutToAppear() {\n    this.docScanConfig.supportType = [DocType.DOC, DocType.SHEET]\n    this.docScanConfig.isGallerySupported = true\n    this.docScanConfig.editTabs = []\n    this.docScanConfig.maxShotCount = 3\n    this.docScanConfig.defaultFilterId = FilterId.ORIGINAL\n    this.docScanConfig.defaultShootingMode = ShootingMode.MANUAL\n    this.docScanConfig.isShareable = true\n    this.docScanConfig.originalUris = []\n  }\n\n  build() {\n    NavDestination() {\n      Stack({ alignContent: Alignment.Top }) {\n      // 展示文档扫描结果\n        List() {\n          ForEach(this.docImageUris, (uri: string) => {\n            ListItem() {\n              Image(uri)\n                .objectFit(ImageFit.Contain)\n                .width(100)\n                .height(100)\n            }\n          })\n        }\n        .listDirection(Axis.Vertical)\n        .alignListItem(ListItemAlign.Center)\n        .margin({\n          top: 50\n        })\n        .width('80%')\n        .height('80%')\n        \n        // 文档扫描\n        DocumentScanner({\n          scannerConfig: this.docScanConfig,\n          onResult: (code: number, saveType: SaveOption, uris: string[]) => {\n            hilog.info(0x0001, TAG, `result code: ${code}, save: ${saveType}`)\n            if (code === -1) {\n              this.pathStack.pop()\n            }\n            uris.forEach(uriString => {\n              hilog.info(0x0001, TAG, `uri: ${uriString}`)\n            })\n            this.docImageUris = uris\n          }\n        })\n          .size({ width: '100%', height: '100%' })\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .width('100%')\n    .height('100%')\n    .hideTitleBar(true)\n  }\n}\n"
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
444473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799704-ab58b991aa77dac5624f98872a50f41f.png");

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