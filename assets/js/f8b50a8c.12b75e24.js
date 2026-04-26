"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["951301"], {
613797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_reader_kit_guide_reader_content_reader_setting_reader_setting_color_mode_reader_setting_color_mode_md_f8b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reader-kit-guide-reader-content-reader-setting-reader-setting-color-mode-reader-setting-color-mode-md-f8b.json
var site_docs_reader_kit_guide_reader_content_reader_setting_reader_setting_color_mode_reader_setting_color_mode_md_f8b_namespaceObject = JSON.parse('{"id":"reader-kit-guide/reader-content/reader-setting/reader-setting-color-mode/reader-setting-color-mode","title":"适配深、浅色模式","description":"当应用需要根据设备的深、浅色模式变化动态切换主题时，开发者可通过UIAbility的onConfigurationUpdate回调判断模式的变化，然后设置模式对应的字体颜色及背景色。","source":"@site/docs/reader-kit-guide/reader-content/reader-setting/reader-setting-color-mode/reader-setting-color-mode.md","sourceDirName":"reader-kit-guide/reader-content/reader-setting/reader-setting-color-mode","slug":"/reader-kit-guide/reader-content/reader-setting/reader-setting-color-mode/","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-setting/reader-setting-color-mode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"适配深、浅色模式","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-setting-color-mode","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"修改翻页方式、字体大小及行间距","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-setting/reader-setting-other/"},"next":{"title":"监听文本缩放因子变化","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-setting/reader-setting-scaled-density/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/reader-kit-guide/reader-content/reader-setting/reader-setting-color-mode/reader-setting-color-mode.md


const frontMatter = {
	title: '适配深、浅色模式',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-setting-color-mode',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '适配深、浅色模式';

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
        id: "适配深浅色模式",
        children: "适配深、浅色模式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要根据设备的深、浅色模式变化动态切换主题时，开发者可通过UIAbility的onConfigurationUpdate回调判断模式的变化，然后设置模式对应的字体颜色及背景色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适配深、浅色主题主要涉及1个接口，具体介绍如下表所示。"
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
      children: ["在适配深、浅色主题之前，请先确保已经“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/reader-kit-guide/reader-content/reader-read-page",
        children: "构建阅读器"
      }), "”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["监听UIAbility的onConfigurationUpdate回调，并通过应用级变量的状态管理", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
            children: "AppStorage"
          }), "保存当前colorMode值。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Configuration, UIAbility } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n\n  onConfigurationUpdate(newConfig: Configuration): void {\n    AppStorage.setOrCreate('colorMode', newConfig.colorMode);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["阅读页通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
            children: "@StorageLink"
          }), "装饰器监听colorMode字段的变化。如果颜色变化，则触发对应主题色的变更。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ConfigurationConstant } from '@kit.AbilityKit';\n\n@StorageLink('colorMode') @Watch('colorModeChange') colorMode: ConfigurationConstant.ColorMode =\n  ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET;\n\n/**\n * 系统深色模式变化，可以重新设置主题\n */\ncolorModeChange() {\n  if (this.colorMode === ConfigurationConstant.ColorMode.COLOR_MODE_DARK) {\n    this.readerSetting.nightMode = true;\n    this.readerSetting.fontColor = '#ffffff';\n    this.readerSetting.themeColor = '#202224';\n  } else {\n    this.readerSetting.nightMode = false;\n    this.readerSetting.fontColor = '#000000';\n    this.readerSetting.themeColor = '#FFFFFF';\n  }\n  this.readerComponentController.setPageConfig(this.readerSetting);\n}\n"
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