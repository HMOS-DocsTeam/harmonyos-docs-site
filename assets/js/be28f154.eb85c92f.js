"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["811783"], {
145134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_system_share_system_share_overview_system_share_overview_md_be2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-system-share-system-share-overview-system-share-overview-md-be2.json
var site_docs_share_kit_guide_system_share_system_share_overview_system_share_overview_md_be2_namespaceObject = JSON.parse('{"id":"share-kit-guide/system-share/system-share-overview/system-share-overview","title":"概述","description":"场景介绍","source":"@site/docs/share-kit-guide/system-share/system-share-overview/system-share-overview.md","sourceDirName":"share-kit-guide/system-share/system-share-overview","slug":"/share-kit-guide/system-share/system-share-overview/","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/system-share-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/system-share-overview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"目标设备接收分享数据一步直达体验","permalink":"/harmonyos-docs-site/share-kit-guide/share-access-precautions/share-access-one-step/"},"next":{"title":"宿主应用接入模式","permalink":"/harmonyos-docs-site/share-kit-guide/system-share/share-map-creation/share-access-mode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/system-share/system-share-overview/system-share-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/system-share-overview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "设计规范",
  "id": "设计规范",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在手机设备中，分享框通过模态弹窗方式被拉起，效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(421201)/* ["default"] */.A) + "",
        width: "320",
        height: "681"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在2in1设备上分享框通过Popup形式展示，效果如图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(519564)/* ["default"] */.A) + "",
        width: "839",
        height: "559"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "宿主应用可以分享一段文本、一个文件或一条备忘录到其他应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "宿主应用可以分享多个内容，如文本、图片等到其他应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(79662)/* ["default"] */.A) + "",
        width: "525",
        height: "542"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、宿主应用构造分享数据、构造ShareController以及注册分享面板状态监听（可选）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、宿主应用拉起系统分享面板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、用户可选择目标设备或者应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、目标应用处理分享数据，并关闭系统分享面板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设计规范",
      children: "设计规范"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["宿主应用接入系统分享时，根据不同的内容类型，应选择恰当的分享方式。详细参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/share-0000001957076313",
        children: "系统分享设计指南"
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
79662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479179-b62eb8dd9fbad2d8fb41c8827862bad4.png");

},
421201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439223-99487957a03963f6204ceb078dfc3fe8.png");

},
519564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959178-86f4e88d270efa44ba8700e52264e0e4.png");

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