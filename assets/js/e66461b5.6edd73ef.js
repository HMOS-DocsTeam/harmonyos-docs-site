"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["186829"], {
174285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_api_path_conversion_scenario_fusion_api_path_conversion_md_e66_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-api-path-conversion-scenario-fusion-api-path-conversion-md-e66.json
var site_docs_scenario_fusion_guide_scenario_fusion_api_path_conversion_scenario_fusion_api_path_conversion_md_e66_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-api-path-conversion/scenario-fusion-api-path-conversion","title":"文件路径转换API","description":"场景介绍","source":"@site/docs/scenario-fusion-guide/scenario-fusion-api-path-conversion/scenario-fusion-api-path-conversion.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-api-path-conversion","slug":"/scenario-fusion-guide/scenario-fusion-api-path-conversion/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-api-path-conversion/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"文件路径转换API","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-api-path-conversion","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过API展示关注组件","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-followcomponent/"},"next":{"title":"智能填充概述","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-to-smart-fill/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-api-path-conversion/scenario-fusion-api-path-conversion.md


const frontMatter = {
	title: '文件路径转换API',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-api-path-conversion',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '文件路径转换API';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
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
        id: "文件路径转换api",
        children: "文件路径转换API"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scenario Fusion Kit提供文件路径转换的API，在HarmonyOS 4及以下到HarmonyOS 5及以上的升级场景和克隆场景，调用该接口可以将源文件路径转换为目标文件路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是获取转换文件uri信息的接口说明，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-fileuriresult/scenario-fusion-fileuriresult",
        children: "fileUriService（文件路径转换API）"
      }), "。"]
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
              href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-fileuriresult/scenario-fusion-fileuriresult#convertfileuris",
              children: "convertFileUris"
            }), "(sourceFileUris: Array<string>): Promise<Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-fileuriresult/scenario-fusion-fileuriresult#fileuriresult",
              children: "FileUriResult"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取转换文件uri信息的请求对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Scenario Fusion Kit模块以及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fileUriService } from '@kit.ScenarioFusionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "传入待转换的文件路径参数列表，调用接口获取转换后的文件路径列表，代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // '/storage/emulated/0/Pictures/test.gif'表示test.gif的文件路径。\n  let sourceFileUris: Array<string> =\n    ['100','content://media/external/files/10', '/storage/emulated/0/Pictures/test.gif',\n      '/storage/emulated/0/media/com.test/test.mp4'];\n  fileUriService.convertFileUris(sourceFileUris).then(result => {\n    hilog.info(0x0000, 'testTag', 'succeeded in converting file uris');\n    result.forEach(data => {\n      switch (data.targetType) {\n        case fileUriService.TargetType.UNKNOWN:\n          hilog.info(0x0000, 'testTag', 'input uri or path is not exist');\n          break;\n        case fileUriService.TargetType.MEDIA:\n          hilog.info(0x0000, 'testTag', 'converted media uri: %{public}s', data.targetUri);\n          break;\n        case fileUriService.TargetType.FILE:\n          // 如果输入路径存在，结果中的targetUri将是转换后的URI。\n          // 否则，targetUri 将与输入路径相同，targetType 将为 UNKNOWN。\n          hilog.info(0x0000, 'testTag', 'converted file path: %{public}s', data.targetUri);\n          break;\n      }\n    })\n  }).catch((error: BusinessError) => {\n    hilog.error(0x0000, 'testTag', 'Promise error: %{public}d %{public}s', error.code, error.message);\n  });\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'failReason: %{public}d %{public}s', error.code, error.message);\n}\n"
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