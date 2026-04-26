"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["356336"], {
151182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_2_graphics_accelerate_launch_faq_2_md_65f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-faq-graphics-accelerate-launch-faq-graphics-accelerate-launch-faq-2-graphics-accelerate-launch-faq-2-md-65f.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_2_graphics_accelerate_launch_faq_2_md_65f_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-2/graphics-accelerate-launch-faq-2","title":"游戏上划退出后，场景切换阶段存在振动，应该如何避免？","description":"开发步骤如下：","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-2/graphics-accelerate-launch-faq-2.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-2","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-2/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"游戏上划退出后，场景切换阶段存在振动，应该如何避免？","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-2","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过加载内存镜像启动的游戏会全屏显示来电提醒，应该如何避免？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-1/"},"next":{"title":"快速启动的游戏存在三方SDK功能异常，应该如何排查？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-2/graphics-accelerate-launch-faq-2.md


const frontMatter = {
	title: '游戏上划退出后，场景切换阶段存在振动，应该如何避免？',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-2',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '游戏上划退出后，场景切换阶段存在振动，应该如何避免？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "游戏上划退出后场景切换阶段存在振动应该如何避免",
        children: "游戏上划退出后，场景切换阶段存在振动，应该如何避免？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过globalThis定义全局作用域的变量isCacheStatus，在onCreate生命周期函数中赋值false，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-launchacceleration/graphics-accelerate-launchacceleration#islaunchmirrorenabled",
          children: "isLaunchMirrorEnabled"
        }), "接口返回true时赋值true。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在函数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator#vibratorstartvibration9",
          children: "startVibration"
        }), "前增加isCacheStatus校验，若当前处于缓存态，则不进行振动操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以团结工程为例，修改如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TuanjiePlayerAbilityBase.ets\nimport { launchAcceleration } from '@kit.GraphicsAccelerateKit';\nonCreate(): void {\n  globalThis.isCacheStatus = false;\n  // ......\n}\nonWindowStageWillDestroy(): void {\n  if (launchAcceleration.isLaunchMirrorEnabled()) {\n    globalThis.isCacheStatus = true;\n    // ......\n  }\n}\n\n// TuanjieVibrate.ets\nstatic vibrate(vibrateMs: number) {\n  if (globalThis.isCacheStatus) {\n    console.info('globalThis.isCacheStatus true, vibration returned.');\n    return;\n  }\n  // ......\n}\n"
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