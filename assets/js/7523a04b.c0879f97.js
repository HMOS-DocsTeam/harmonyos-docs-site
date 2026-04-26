"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["835832"], {
692057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_get_semantics_arengine_c_get_semantics_md_752_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-c-guide-arengine-c-get-semantics-arengine-c-get-semantics-md-752.json
var site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_get_semantics_arengine_c_get_semantics_md_752_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-c-guide/arengine-c-get-semantics/arengine-c-get-semantics","title":"识别平面语义（C/C++）","description":"约束与限制","source":"@site/docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-semantics/arengine-c-get-semantics.md","sourceDirName":"ar-engine-kit-guide/arengine-c-guide/arengine-c-get-semantics","slug":"/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-semantics/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-semantics/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"识别平面语义（C/C++）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-semantics","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"检测环境中的平面（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane/"},"next":{"title":"识别目标形状（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane-shape/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-semantics/arengine-c-get-semantics.md


const frontMatter = {
	title: '识别平面语义（C/C++）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-semantics',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '识别平面语义（C/C++）';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "引入AR Engine",
  "id": "引入ar-engine",
  "level": 2
}, {
  "value": "创建AR会话",
  "id": "创建ar会话",
  "level": 2
}, {
  "value": "检测环境中的平面",
  "id": "检测环境中的平面",
  "level": 2
}, {
  "value": "初始化平面语义标签",
  "id": "初始化平面语义标签",
  "level": 2
}, {
  "value": "识别平面类型",
  "id": "识别平面类型",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "识别平面语义cc",
        children: "识别平面语义（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["识别平面语义能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_featuretype",
        children: "ARENGINE_FEATURE_TYPE_SEMANTIC"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引入ar-engine",
      children: "引入AR Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参考管理AR会话章节的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arsession#%E5%BC%95%E5%85%A5ar-engine",
        children: "引入AR Engine"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建ar会话",
      children: "创建AR会话"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建AR会话并配置为平面语义识别模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARSession *arSession = nullptr;\n// 创建AR会话。\nHMS_AREngine_ARSession_Create(nullptr, nullptr, &arSession);\nAREngine_ARConfig *arConfig = nullptr;\n// 创建AR会话配置器。\nHMS_AREngine_ARConfig_Create(arSession, &arConfig);\n// 设置语义识别模式为平面语义识别。\nHMS_AREngine_ARConfig_SetSemanticMode(arSession, arConfig, ARENGINE_SEMANTIC_MODE_PLANE);\n// 配置器设置给AR会话。\nHMS_AREngine_ARSession_Configure(arSession, arConfig);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检测环境中的平面",
      children: "检测环境中的平面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进行平面语义识别之前，需要先检测环境中的平面。开发者可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane",
        children: "检测环境中的平面"
      }), "完成平面检测过程，并获取环境中的平面数量。当存在平面时，就可以继续下面的步骤。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "初始化平面语义标签",
      children: "初始化平面语义标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并初始化平面语义标签label，用于描述平面的语义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARSemanticPlaneLabel label = ARENGINE_PLANE_UNKNOWN;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "平面语义标签定义为枚举类型，包括12种枚举值（1种未知类型+11种平面类型）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    /** Unknown type. */\n    ARENGINE_PLANE_UNKNOWN = 0,\n    /** Wall. */\n    ARENGINE_PLANE_WALL = 1,\n    /** Floor. */\n    ARENGINE_PLANE_FLOOR = 2,\n    /** Seat. */\n    ARENGINE_PLANE_SEAT = 3,\n    /** Table. */\n    ARENGINE_PLANE_TABLE = 4,\n    /** Ceiling. */\n    ARENGINE_PLANE_CEILING = 5,\n    /** Door. */\n    ARENGINE_PLANE_DOOR = 6,\n    /** Window. */\n    ARENGINE_PLANE_WINDOW = 7,\n    /** Bed. */\n    ARENGINE_PLANE_BED = 8,\n    /** Plane Space. */\n    ARENGINE_PLANE_SPACE = 9,\n    /** Cube Volume. */\n    ARENGINE_CUBE_VOLUME = 10,\n    /** Cube Space. */\n    ARENGINE_CUBE_SPACE = 11,\n} AREngine_ARSemanticPlaneLabel;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "识别平面类型",
      children: "识别平面类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arplane_getlabel",
        children: "HMS_AREngine_ARPlane_GetLabel"
      }), "函数，获取平面类型，结果存放在label中。平面的获取可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane#%E8%8E%B7%E5%8F%96%E5%B9%B3%E9%9D%A2%E5%AE%9E%E4%BE%8B",
        children: "获取平面实例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HMS_AREngine_ARPlane_GetLabel(arSession, arPlane, &label);\n"
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