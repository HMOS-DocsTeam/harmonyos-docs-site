"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["367715"], {
806310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_personal_privacy_arengine_personal_privacy_md_df2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-personal-privacy-arengine-personal-privacy-md-df2.json
var site_docs_ar_engine_kit_guide_arengine_personal_privacy_arengine_personal_privacy_md_df2_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-personal-privacy/arengine-personal-privacy","title":"个人数据处理说明","description":"此文档针对华为作为最终用户数据处理者，开发者作为最终用户数据控制者的数据处理进行说明，包括：","source":"@site/docs/ar-engine-kit-guide/arengine-personal-privacy/arengine-personal-privacy.md","sourceDirName":"ar-engine-kit-guide/arengine-personal-privacy","slug":"/ar-engine-kit-guide/arengine-personal-privacy/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-personal-privacy/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"个人数据处理说明","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-personal-privacy","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"某些特殊场景下（如附近存在磁场干扰、手机发烫或扫描到重复纹理等），出现平面漂移或者位姿数据跳变现象","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-faq/arengine-faq-4/"},"next":{"title":"附录","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-appendix/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-personal-privacy/arengine-personal-privacy.md


const frontMatter = {
	title: '个人数据处理说明',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-personal-privacy',
	kit: 'graphics',
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
      children: "此文档针对华为作为最终用户数据处理者，开发者作为最终用户数据控制者的数据处理进行说明，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为处理的个人数据清单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指导开发者如何帮助最终用户实现对数据的控制"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "华为处理的个人数据清单",
      children: "华为处理的个人数据清单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后修改时间：2025/11/18"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "传感器信息（包含加速度传感器、陀螺仪传感器、磁场传感器、重力传感器）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该信息用于计算设备运动变化时位姿的状态。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器捕获到的信息只在端侧处理，处理完成后即丢弃，不会留存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "相机捕获的图像"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AR Engine通过分析相机捕获到的图像信息来实现运动跟踪、环境跟踪和命中检测等AR能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机捕获到的图像只在端侧处理，处理完成后即丢弃，不会留存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "人脸信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AR Engine通过分析相机捕获的人脸信息，来实现面部特征识别，提供人脸跟踪能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机捕获到的图像只在端侧处理，处理完成后即丢弃，不会留存。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指导开发者如何帮助最终用户实现对数据的控制",
      children: "指导开发者如何帮助最终用户实现对数据的控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AR Engine不存储用户数据，由数据控制者面向最终用户提供相应的数据主体权利及其相关解释。"
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