"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["218978"], {
596620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_get_pose_arengine_c_get_pose_md_3f0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-c-guide-arengine-c-get-pose-arengine-c-get-pose-md-3f0.json
var site_docs_ar_engine_kit_guide_arengine_c_guide_arengine_c_get_pose_arengine_c_get_pose_md_3f0_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-c-guide/arengine-c-get-pose/arengine-c-get-pose","title":"获取设备位姿（C/C++）","description":"本章节给出了关键开发步骤，完整代码可以参考示例代码。","source":"@site/docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-pose/arengine-c-get-pose.md","sourceDirName":"ar-engine-kit-guide/arengine-c-guide/arengine-c-get-pose","slug":"/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-pose/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-pose/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"获取设备位姿（C/C++）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-pose","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理AR会话（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-arsession/"},"next":{"title":"检测环境中的平面（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-plane/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-c-guide/arengine-c-get-pose/arengine-c-get-pose.md


const frontMatter = {
	title: '获取设备位姿（C/C++）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-pose',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '获取设备位姿（C/C++）';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "创建ARSession",
  "id": "创建arsession",
  "level": 2
}, {
  "value": "获取设备当前位姿",
  "id": "获取设备当前位姿",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "获取设备位姿cc",
        children: "获取设备位姿（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节给出了关键开发步骤，完整代码可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/arengine_-sample-code_-clientdemo_cpp",
        children: "示例代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取设备位姿能力支持部分Phone、部分Tablet设备。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-preparations#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82",
        children: "硬件要求"
      }), "判断设备是否支持运动跟踪及平面识别特性（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_featuretype",
        children: "ARENGINE_FEATURE_TYPE_SLAM"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建arsession",
      children: "创建ARSession"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arsession",
        children: "管理AR会话"
      }), "创建ARSession。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取设备当前位姿",
      children: "获取设备当前位姿"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个空位姿变量cameraPose。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AREngine_ARPose *cameraPose = nullptr;\nHMS_AREngine_ARPose_Create(arSession, nullptr, 0, &cameraPose);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取当前时刻相机位姿信息，并存储在cameraPose变量中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个新的AREngine_ARFrame对象。\nAREngine_ARFrame *arFrame = nullptr;\nHMS_AREngine_ARFrame_Create(arSession, &arFrame);\n// 更新当前帧的结果到arFrame。\nHMS_AREngine_ARSession_Update(arSession, arFrame);\n// 获取当前帧的相机参数对象。\nAREngine_ARCamera *arCamera = nullptr;\nHMS_AREngine_ARFrame_AcquireCamera(arSession, arFrame, &arCamera);\n// 获取当前时刻相机位姿信息。\nHMS_AREngine_ARCamera_GetPose(arSession, arCamera, cameraPose);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从cameraPose中获取相机位姿的不同分量，包括平移分量和旋转分量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "float poseRaw[7] = { 0.0f };\nHMS_AREngine_ARPose_GetPoseRaw(arSession, cameraPose, poseRaw, 7);\n"
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