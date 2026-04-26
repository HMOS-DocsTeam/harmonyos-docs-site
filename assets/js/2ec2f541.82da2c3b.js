"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["490838"], {
302279(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_reader_kit_guide_reader_content_reader_read_page_reader_read_page_md_2ec_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reader-kit-guide-reader-content-reader-read-page-reader-read-page-md-2ec.json
var site_docs_reader_kit_guide_reader_content_reader_read_page_reader_read_page_md_2ec_namespaceObject = JSON.parse('{"id":"reader-kit-guide/reader-content/reader-read-page/reader-read-page","title":"构建阅读器","description":"Reader Kit提供的阅读页组件ReadPageComponent，支持对标准的txt和富文本内容（html+css）按仿真和横滑方式进行分页排版的能力、支持翻页阅读过程中所需要的进度和行为感知能力。利用ReadPageComponent，开发者可快速实现书籍阅读的能力。","source":"@site/docs/reader-kit-guide/reader-content/reader-read-page/reader-read-page.md","sourceDirName":"reader-kit-guide/reader-content/reader-read-page","slug":"/reader-kit-guide/reader-content/reader-read-page/","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-read-page/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"构建阅读器","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-read-page","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取目录列表","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-parser/reader-catalog-list/"},"next":{"title":"自定义字体","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-setting/reader-setting-font/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/reader-kit-guide/reader-content/reader-read-page/reader-read-page.md


const frontMatter = {
	title: '构建阅读器',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-read-page',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '构建阅读器';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "构建阅读器",
        children: "构建阅读器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reader Kit提供的阅读页组件ReadPageComponent，支持对标准的txt和富文本内容（html+css）按仿真和横滑方式进行分页排版的能力、支持翻页阅读过程中所需要的进度和行为感知能力。利用ReadPageComponent，开发者可快速实现书籍阅读的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(620306)/* ["default"] */.A) + "",
        width: "800",
        height: "590"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建书籍阅读能力共涉及5个接口，具体介绍如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser#getdefaulthandler",
              children: "getDefaultHandler"
            }), "(path: string): Promise<BookParserHandler>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取书籍默认解析器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#init",
              children: "init"
            }), "(context: common.UIAbilityContext): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化ReadPageComponent控制器。  初始化接口需要优先于ReaderComponentController的其他接口之前执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#setpageconfig",
              children: "setPageConfig"
            }), "(pageConfig: ReaderSetting): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置或者修改页面排版属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#registerbookparser",
              children: "registerBookParser"
            }), "(bookParserHandler: bookParser.BookParserHandler): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册书籍解析器。  需要在startPlay接口调用之前执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#startplay",
              children: "startPlay"
            }), "(spineIndex: number, domPos: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以指定阅读进度打开书籍，使用Promise异步回调。  需要在registerBookParser接口调用之后执行。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入解析能力、页面组件和阅读器控制类\nimport { bookParser, ReadPageComponent, readerCore } from '@kit.ReaderKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { display } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化组件控制器、默认设置项，以及定义书籍解析器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 组件控制器，用于调用排版相关能力。\nprivate readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();\n// 默认设置项，用于初始化阅读器页面的默认属性。\nprivate readerSetting: readerCore.ReaderSetting = {\n  fontName: '系统字体',\n  fontPath: '',\n  fontSize: 18,\n  fontColor: '#000000',\n  fontWeight: 400,\n  lineHeight: 1.9,\n  nightMode: false,\n  themeColor: 'rgba(248, 249, 250, 1)',\n  themeBgImg: '',\n  flipMode: '0',\n  scaledDensity: display.getDefaultDisplaySync().scaledDensity > 0 ? display.getDefaultDisplaySync().scaledDensity :\n    1,\n  viewPortWidth: 1260, // 视口宽度，需要根据设备实际情况获取，否则会导致阅读界面异常\n  viewPortHeight: 2720, // 视口高度，需要根据设备实际情况获取，否则会导致阅读界面异常\n};\n// 书籍解析器，用于注册给组件控制器，供排版引擎调用。\nprivate bookParserHandler: bookParser.BookParserHandler | null = null;\n// 是否正在加载页面（需要等待页面渲染完成再隐藏，避免进入页面会先显示黑屏的问题）\n@State isLoading: boolean = true;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建ReadPageComponent组件，用于显示阅读内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "build() {\n  Stack() {\n    ReadPageComponent({\n      controller: this.readerComponentController,\n      readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {\n        this.readerComponentController = data;\n      }\n    })\n\n    Row() {\n      Text('加载中...')\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n    .backgroundColor(Color.White)\n    .visibility(this.isLoading ? Visibility.Visible : Visibility.None)\n  }.width('100%').height('100%')\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过提前导入到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-sandbox-directory",
            children: "应用沙箱目录"
          }), "中的书籍文件，初始化书籍解析器。调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#startplay",
            children: "startPlay"
          }), "接口，以指定进度渲染阅读器页面。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToAppear(): void {\n  // 初始化阅读器\n  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  let filePath: string = `${context.filesDir}/abc.epub`;\n  let spineIndex: number = 0;\n  let domPos: string = '';\n  this.registerListener();\n  this.startPlay(filePath, spineIndex, domPos);\n}\n\nprivate registerListener(): void {\n  this.readerComponentController.on('pageShow', (data: readerCore.PageDataInfo): void => {\n    hilog.info(0x0000, 'testTag', 'pageshow: data is: ' + JSON.stringify(data));\n    if (data.state === readerCore.PageState.PAGE_ON_SHOW) {\n      this.isLoading = false;\n    }\n  });\n}\n\nprivate async startPlay(filePath: string, spineIndex: number, domPos: string) {\n  try {\n    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    // 组件控制器初始化，用于控制ReadPageComponent调用排版引擎\n    let initPromise = this.readerComponentController.init(context);\n    // 初始化书籍解析器\n    let bookParserHandler = bookParser.getDefaultHandler(filePath);\n    let result: [bookParser.BookParserHandler, void] = await Promise.all([bookParserHandler, initPromise]);\n    this.bookParserHandler = result[0];\n    // 设置默认页面属性，用于排版的默认样式\n    this.readerComponentController.setPageConfig(this.readerSetting);\n    // 注册解析能力到控制器中，用于排版引擎的调用。\n    this.readerComponentController.registerBookParser(this.bookParserHandler);\n    // 调用打开书籍接口，跳章至对应进度\n    this.readerComponentController.startPlay(spineIndex|| 0, domPos);\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', 'startPlay: err: ' + JSON.stringify(err));\n  }\n}\n\naboutToDisappear(): void {\n  this.readerComponentController.off('pageShow');\n  // 退出需要释放阅读器实例\n  this.readerComponentController.releaseBook();\n}\n"
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
620306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799494-4256abb6e912c940720b283dabde67f2.png");

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