"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["984128"], {
574810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_uniform_data_definition_components_based_on_uniform_data_structure_components_based_on_uniform_data_structure_md_36c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-uniform-data-definition-components-based-on-uniform-data-structure-components-based-on-uniform-data-structure-md-36c.json
var site_docs_arkdata_uniform_data_definition_components_based_on_uniform_data_structure_components_based_on_uniform_data_structure_md_36c_namespaceObject = JSON.parse('{"id":"arkdata/uniform-data-definition/components-based-on-uniform-data-structure/components-based-on-uniform-data-structure","title":"基于标准化数据结构的控件 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/uniform-data-definition/components-based-on-uniform-data-structure/components-based-on-uniform-data-structure.md","sourceDirName":"arkdata/uniform-data-definition/components-based-on-uniform-data-structure","slug":"/arkdata/uniform-data-definition/components-based-on-uniform-data-structure/","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/components-based-on-uniform-data-structure/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"基于标准化数据结构的控件 (ArkTS)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/components-based-on-uniform-data-structure","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"标准化数据结构 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-structure-c/"},"next":{"title":"UTD预置列表","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-type-list/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/uniform-data-definition/components-based-on-uniform-data-structure/components-based-on-uniform-data-structure.md


const frontMatter = {
	title: '基于标准化数据结构的控件 (ArkTS)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/components-based-on-uniform-data-structure',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '基于标准化数据结构的控件 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "内容卡片控件",
  "id": "内容卡片控件",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发示例",
  "id": "开发示例",
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
        id: "基于标准化数据结构的控件-arkts",
        children: "基于标准化数据结构的控件 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们提供了部分标准化数据结构的预置卡片，当需要展示标准化数据结构数据时，可以直接引用提供的预置卡片，快捷地展示数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "内容卡片控件",
      children: "内容卡片控件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在需要展示内容（标题、描述、图片、应用信息）并在点击后跳转至对应来源时，可以使用内容卡片快速的展示信息。开发者只需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-comp/js-apis-data-udmfcomponents/js-apis-data-udmfcomponents#contentformcard",
        children: "ContentFormCard"
      }), "接口，传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformdatastruct/js-apis-data-uniformdatastruct#contentform14",
        children: "ContentForm"
      }), "数据、卡片宽高、点击事件回调函数即可获得良好的展示效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-comp/js-apis-data-udmfcomponents/js-apis-data-udmfcomponents",
        children: "内容卡片控件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为内容卡片接口介绍："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ContentFormCard({contentFormData: uniformDataStruct.ContentForm, formType: FormType, formWidth?: number, formHeight?: number, handleOnClick?: Function})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照固定的样式展示传入的内容卡片数据，并在点击操作时，执行回调函数，并跳转至配置的页面。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1. 导入需要的模块\nimport { ContentFormCard, FormType, uniformDataStruct } from '@kit.ArkData';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State contentForm: uniformDataStruct.ContentForm = {\n    uniformDataType: 'general.content-form',\n    title: ''\n  };\n  @State startToShow: boolean = false;\n\n  aboutToAppear(): void {\n    // 2. 初始化数据\n    this.initData();\n  }\n\n  async initData() {\n    let context = this.getUIContext().getHostContext();\n    if (!context) {\n      return;\n    }\n    try {\n      let appIcon = await context.resourceManager.getMediaContent($r('app.media.startIcon').id);\n      let thumbImage = await context.resourceManager.getMediaContent($r('app.media.foreground').id);\n      this.contentForm = {\n        uniformDataType: 'general.content-form',\n        title: 'Content form title',\n        thumbData: appIcon,\n        description: 'Content form description',\n        appIcon: thumbImage,\n        appName: 'com.test.demo'\n      };\n    } catch (err) {\n      hilog.error(0xFF00, '[Sample_Udmf]', 'Init data error');\n    }\n  }\n\n  build() {\n    Column() {\n      Button('show card').fontSize(30)\n        .onClick(() => {\n          // 3. 点击后startToShow变为true，页面重新渲染\n          this.startToShow = true;\n        })\n      if (this.startToShow) {\n        // 4. 使用内容卡片，传入对应的参数\n        ContentFormCard({\n          contentFormData: this.contentForm,\n          formType: FormType.TYPE_SMALL,\n          formWidth: 220,\n          formHeight: 100,\n          handleOnClick: () => {\n            hilog.info(0xFF00, '[Sample_Udmf]', 'Clicked card');\n          }\n        })\n      }\n    }\n    .height('100%')\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
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