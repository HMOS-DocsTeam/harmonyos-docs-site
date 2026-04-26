"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["157852"], {
22490(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_button_frequently_asked_questions_scenario_fusion_faq_3_scenario_fusion_faq_3_md_93e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-button-frequently-asked-questions-scenario-fusion-faq-3-scenario-fusion-faq-3-md-93e.json
var site_docs_scenario_fusion_guide_scenario_fusion_button_frequently_asked_questions_scenario_fusion_faq_3_scenario_fusion_faq_3_md_93e_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-3/scenario-fusion-faq-3","title":"剪贴板粘贴框遮挡智能填充选择框","description":"*现象描述*","source":"@site/docs/scenario-fusion-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-3/scenario-fusion-faq-3.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-3","slug":"/scenario-fusion-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-3/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-3/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"剪贴板粘贴框遮挡智能填充选择框","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-faq-3","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"打开应用功能跳转第三方应用失败","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-2/"},"next":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-personal-data/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-3/scenario-fusion-faq-3.md


const frontMatter = {
	title: '剪贴板粘贴框遮挡智能填充选择框',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-faq-3',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '剪贴板粘贴框遮挡智能填充选择框';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "剪贴板粘贴框遮挡智能填充选择框",
        children: "剪贴板粘贴框遮挡智能填充选择框"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(729369)/* ["default"] */.A) + "",
        width: "535",
        height: "532"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在代码文件中设置.selectionMenuHidden(true)，使剪贴板粘贴框隐藏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      Row() {\n        Text('收货人：').textAlign(TextAlign.End).width('25%')\n        TextInput().width('75%').contentType(ContentType.PERSON_FULL_NAME).selectionMenuHidden(true)\n      }\n"
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
729369(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799512-4651b73b1d9e61503cc74f24f2879538.jpg");

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