"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["651990"], {
448917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_core_vision_kit_guide_corevisionkit_personal_data_corevisionkit_personal_data_md_aca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-core-vision-kit-guide-corevisionkit-personal-data-corevisionkit-personal-data-md-aca.json
var site_docs_core_vision_kit_guide_corevisionkit_personal_data_corevisionkit_personal_data_md_aca_namespaceObject = JSON.parse('{"id":"core-vision-kit-guide/corevisionkit-personal-data/corevisionkit-personal-data","title":"个人数据处理说明","description":"此文档针对华为作为最终用户数据处理者，客户作为最终用户数据控制者的数据处理进行说明，包括：","source":"@site/docs/core-vision-kit-guide/corevisionkit-personal-data/corevisionkit-personal-data.md","sourceDirName":"core-vision-kit-guide/corevisionkit-personal-data","slug":"/core-vision-kit-guide/corevisionkit-personal-data/","permalink":"/harmonyos-docs-site/core-vision-kit-guide/corevisionkit-personal-data/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"个人数据处理说明","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/corevisionkit-personal-data","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"骨骼点检测","permalink":"/harmonyos-docs-site/core-vision-kit-guide/core-vision-skeleton-detection/"},"next":{"title":"Intents Kit简介","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/core-vision-kit-guide/corevisionkit-personal-data/corevisionkit-personal-data.md


const frontMatter = {
	title: '个人数据处理说明',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/corevisionkit-personal-data',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '个人数据处理说明';

const assets = {

};



const toc = [{
  "value": "华为处理的个人数据清单",
  "id": "华为处理的个人数据清单",
  "level": 2
}, {
  "value": "指导开发者如何帮助最终用户实现对数据的控制",
  "id": "指导开发者如何帮助最终用户实现对数据的控制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
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
        id: "个人数据处理说明",
        children: "个人数据处理说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此文档针对华为作为最终用户数据处理者，客户作为最终用户数据控制者的数据处理进行说明，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为处理的个人数据清单；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指导开发者如何帮助最终用户实现对数据的控制。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "华为处理的个人数据清单",
      children: "华为处理的个人数据清单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后修改时间：2025/6/13"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "个人数据清单"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用目的"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "存留期"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "图片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core Vision Kit各子能力API：基础视觉服务基本功能为识别图片中相关内容，需要开发者提供需要分析的图片。具体为，  通用文字识别API：开发者提供图片，Core Vision Kit帮助开发者提取图片上的文本信息。  人脸检测API：开发者提供图片，Core Vision Kit帮助开发者提取图片上的人脸信息，如人脸矩形框坐标、人脸五官位置、人脸朝向、人脸置信度等。  人脸比对API：开发者提供图片，Core Vision Kit帮助开发者比对两张图片中的人脸是否是一个人。  主体分割API：开发者提供图片，Core Vision Kit帮助开发者检测&分离图片中区别于背景的前景物体或区域。  多目标识别API：开发者提供图片，Core Vision Kit帮助开发者检测图片中特定目标，如动物、植物、建筑物等。  骨骼点检测API：开发者提供图片，Core Vision Kit帮助开发者检测图片中人体关键点信息，通过关键点描述人体骨骼信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不留存"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指导开发者如何帮助最终用户实现对数据的控制",
      children: "指导开发者如何帮助最终用户实现对数据的控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "云端不存储用户数据，由数据控制者面向最终用户提供相应的数据主体权利及其相关解释。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在您接入、使用Core Vision Kit服务前，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "我们要求您在隐私政策中向用户告知我们是如何处理其个人数据的，并获取用户同意或取得其他合法性基础"
        })
      }), "。"]
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