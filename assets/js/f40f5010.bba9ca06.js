"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["165892"], {
121930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_6_graphics_accelerate_launch_faq_6_md_f40_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-faq-graphics-accelerate-launch-faq-graphics-accelerate-launch-faq-6-graphics-accelerate-launch-faq-6-md-f40.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_6_graphics_accelerate_launch_faq_6_md_f40_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-6/graphics-accelerate-launch-faq-6","title":"游戏出现卡死后，应该如何避免下一次秒启后还是卡死场景？","description":"建议游戏上划退出后进行场景切换操作，若场景切换失败或场景切换超时（5s）则设置游戏不支持缓存后快速启动。","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-6/graphics-accelerate-launch-faq-6.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-6","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-6/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-6/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"游戏出现卡死后，应该如何避免下一次秒启后还是卡死场景？","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-6","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"日志中频繁打印BusinessError: The Worker instance is not running, maybe worker is terminated when PostMessage错误信息，应该如何排查？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-5/"},"next":{"title":"秒级启动后，游戏出现类似UIContent is nullptr报错导致登录等异常，应该如何排查？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-7/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-6/graphics-accelerate-launch-faq-6.md


const frontMatter = {
	title: '游戏出现卡死后，应该如何避免下一次秒启后还是卡死场景？',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-6',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '游戏出现卡死后，应该如何避免下一次秒启后还是卡死场景？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "游戏出现卡死后应该如何避免下一次秒启后还是卡死场景",
        children: "游戏出现卡死后，应该如何避免下一次秒启后还是卡死场景？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议游戏上划退出后进行场景切换操作，若场景切换失败或场景切换超时（5s）则设置游戏不支持缓存后快速启动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以团结工程为例，修改如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { launchAcceleration } from '@kit.GraphicsAccelerateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { preferences } from '@kit.ArkData';\nimport Tuanjie from 'libtuanjie.so';\nimport sleepNapi from 'libentry.so'; // 通过napi封装的std::this_thread::sleep_for\nlet dataPreferences: preferences.Preferences | null = null;\n\nonWindowStageWillDestroy(): void {\n  let enable = launchAcceleration.isLaunchMirrorEnabled();\n  if (enable) {\n    this.onResume(); // 团结工程中恢复引擎方法\n    Tuanjie.TuanjieSendMessage(\"GlobalObjectForArkTSCall\", \"OnMessageCall\", \"SwitchToLoginPage\");\n    let waitTime = 0; // 等待时长，单位：ms\n    while(true) {\n      let sceneChangeResult = dataPreferences?.getSync('sceneChangeResult', undefined);\n      if (sceneChangeResult != undefined) {\n        if (sceneChangeResult) {\n          break; // 场景切换成功，跳出while循环\n        }\n        this.setSupportedProcessCache(false); // 场景切换失败，设置游戏不支持缓存后快速启动\n        break;\n      }\n      if (waitTime >= 5000) {\n        this.setSupportedProcessCache(false); // 场景切换超时,设置游戏不支持缓存后快速启动\n        break;\n      }\n      sleepNapi.sleep(500);\n      waitTime += 500;\n    }\n    sleepNapi.sleep(500);\n    this.onPause(); // 团结工程中暂停引擎方法\n  }\n}\n\nsetSupportedProcessCache(isSupported : boolean): void {\n  try {\n    this.context.getApplicationContext().setSupportedProcessCache(isSupported);\n  } catch (error) {\n    let code = (error as BusinessError).code;\n    let message = (error as BusinessError).message;\n    console.error(`setSupportedProcessCache fail, code: ${code}, msg: ${message}`);\n  }\n}\n"
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