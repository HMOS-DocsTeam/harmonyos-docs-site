"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["942717"], {
529253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_reader_kit_guide_reader_content_reader_setting_reader_setting_scaled_density_reader_setting_scaled_density_md_4f6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reader-kit-guide-reader-content-reader-setting-reader-setting-scaled-density-reader-setting-scaled-density-md-4f6.json
var site_docs_reader_kit_guide_reader_content_reader_setting_reader_setting_scaled_density_reader_setting_scaled_density_md_4f6_namespaceObject = JSON.parse('{"id":"reader-kit-guide/reader-content/reader-setting/reader-setting-scaled-density/reader-setting-scaled-density","title":"监听文本缩放因子变化","description":"在智慧多窗等场景时，文本缩放因子Display.scaledDensity属性会发生变化。如果文本缩放因子的值与当前值不符，开发者需要更新ReaderSetting的scaledDensity属性，触发ReaderComponentController组件控制器的setPageConfig接口重新进行页面排版。","source":"@site/docs/reader-kit-guide/reader-content/reader-setting/reader-setting-scaled-density/reader-setting-scaled-density.md","sourceDirName":"reader-kit-guide/reader-content/reader-setting/reader-setting-scaled-density","slug":"/reader-kit-guide/reader-content/reader-setting/reader-setting-scaled-density/","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-setting/reader-setting-scaled-density/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"监听文本缩放因子变化","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-setting-scaled-density","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"适配深、浅色模式","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-setting/reader-setting-color-mode/"},"next":{"title":"手动触发翻页","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-interaction/reader-flip-page/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/reader-kit-guide/reader-content/reader-setting/reader-setting-scaled-density/reader-setting-scaled-density.md


const frontMatter = {
	title: '监听文本缩放因子变化',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-setting-scaled-density',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '监听文本缩放因子变化';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
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
        id: "监听文本缩放因子变化",
        children: "监听文本缩放因子变化"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/multi-window-guide/multi-window-intro",
        children: "智慧多窗"
      }), "等场景时，文本缩放因子", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#display",
        children: "Display.scaledDensity"
      }), "属性会发生变化。如果文本缩放因子的值与当前值不符，开发者需要更新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#readersetting",
        children: "ReaderSetting"
      }), "的scaledDensity属性，触发ReaderComponentController组件控制器的setPageConfig接口重新进行页面排版。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听文本缩放因子变化主要涉及1个接口，具体介绍如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#setpageconfig",
              children: "setPageConfig"
            }), "(pageConfig: ReaderSetting): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置或者修改页面排版属性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在监听文本缩放因子变化之前，请先确保已经'", (0,jsx_runtime.jsx)(_components.a, {
        href: "/reader-kit-guide/reader-content/reader-read-page",
        children: "构建阅读器"
      }), "'。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { display } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displayonaddremovechange",
            children: "display.on"
          }), "接口监听文本缩放因子的变化。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在监听接口中比对系统值与当前值是否一致，如果不一致则通过应用级变量的状态管理", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "将isDensityChange值设为true，并退出阅读页。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Reader {\n  private screenDensityCallBack: Callback<number> | null = null;\n\n  aboutToAppear(): void {\n    this.registerScreenDensityChange();\n    hilog.info(0x0000, 'testTag',\n      'aboutToAppear : current scaledDensity = ' + this.readerSetting.scaledDensity + ', change scaledDensity = ' +\n      display.getDefaultDisplaySync().scaledDensity);\n  }\n\n  /**\n   * 注册缩放文本缩放因子变化监听\n   */\n  registerScreenDensityChange() {\n    this.screenDensityCallBack = (data: number) => {\n      let displaySync = display.getDefaultDisplaySync();\n      let scaledDensity = displaySync.scaledDensity;\n      if (scaledDensity !== this.readerSetting.scaledDensity) {\n        AppStorage.setOrCreate('isDensityChange', true);\n        this.getUIContext().getRouter().back();\n      }\n    }\n    display.on('change', this.screenDensityCallBack);\n  }\n\n  aboutToDisappear(): void {\n    display.off('change', this.screenDensityCallBack);\n  }\n\n  build() {\n    // 需要开发者根据构建阅读器章节自行实现\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在阅读页的上级页面通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
            children: "@StorageLink"
          }), "装饰器监听isDensityChange字段的变化。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当退出阅读页时，会触发上级Index页面的onPageShow生命周期回调。若检测到isDensityChange字段值变更，将执行重新进入阅读页的方法。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/reader-kit-guide/reader-interaction/reader-progress",
            children: "阅读进度通知"
          }), "章节保存阅读进度，在进阅读页时将保存的进度信息传入到阅读页，在阅读页通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#startplay",
            children: "startPlay"
          }), "接口继续阅读。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  /**\n   * 系统字体缩放因子是否发生变化，如果变化需要重启阅读器\n   */\n  @StorageLink('isDensityChange') isDensityChange: boolean = false;\n\n  onPageShow(): void {\n    // 文本缩放因子变化需要重新打开书籍\n    if (this.isDensityChange) {\n      this.jumper();\n      AppStorage.setOrCreate('isDensityChange', false);\n    }\n  }\n\n  private jumper() {\n    this.getUIContext().getRouter().pushUrl({ url: \"pages/Reader\" }).catch(() => {\n      hilog.error(0x0000, 'testTag', 'pushUrl failed');\n    });\n  }\n\n  build() {\n    // 需要开发者根据业务需要自行实现\n  }\n}\n"
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