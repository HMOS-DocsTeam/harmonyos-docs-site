"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["277693"], {
872309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_prefetch_service_cloudfoundation_prefetch_call_cloudfoundation_prefetch_add_dependency_class_cloudfoundation_prefetch_tool_class_cloudfoundation_prefetch_tool_class_md_ef7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-prefetch-service-cloudfoundation-prefetch-call-cloudfoundation-prefetch-add-dependency-class-cloudfoundation-prefetch-tool-class-cloudfoundation-prefetch-tool-class-md-ef7.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_prefetch_service_cloudfoundation_prefetch_call_cloudfoundation_prefetch_add_dependency_class_cloudfoundation_prefetch_tool_class_cloudfoundation_prefetch_tool_class_md_ef7_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-tool-class/cloudfoundation-prefetch-tool-class","title":"预加载工具类","description":"在“entry/src/main/ets/common”目录下新增GlobalContext.ets和PreferenceUtil.ets。","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-tool-class/cloudfoundation-prefetch-tool-class.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-tool-class","slug":"/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-tool-class/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-tool-class/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"预加载工具类","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-prefetch-tool-class","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发预加载资源接口","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-cloud-interdev/"},"next":{"title":"预加载实现类","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-implementation-class/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-tool-class/cloudfoundation-prefetch-tool-class.md


const frontMatter = {
	title: '预加载工具类',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-prefetch-tool-class',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '预加载工具类';

const assets = {

};



const toc = [{
  "value": "GlobalContext",
  "id": "globalcontext",
  "level": 2
}, {
  "value": "PreferenceUtil",
  "id": "preferenceutil",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "预加载工具类",
        children: "预加载工具类"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“entry/src/main/ets/common”目录下新增GlobalContext.ets和PreferenceUtil.ets。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "globalcontext",
      children: "GlobalContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局上下文类，提供全局上下文句柄的初始化和获取功能。参考示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n\nexport class GlobalContext {\n  private static context: common.UIAbilityContext;\n\n  public static initContext(context: common.UIAbilityContext): void {\n    GlobalContext.context = context;\n  }\n\n  public static getContext(): common.UIAbilityContext {\n    return GlobalContext.context;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preferenceutil",
      children: "PreferenceUtil"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首选项工具类，提供数据读取和存储功能。参考示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import dataPreferences from '@ohos.data.preferences';\nimport { Context } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG = 'PreferenceUtil';\nconst DEFAULT_STORE_NAME: string = \"prefetchDefaultStore\";\n\nexport class PreferenceUtil {\n  private static cachedPreferences: Map<string, dataPreferences.Preferences> = new Map();\n\n  private constructor() {\n  }\n\n  public static async getValue(context: Context, storeName: string,\n    key: string): Promise<dataPreferences.ValueType | null> {\n    try {\n      let store = await PreferenceUtil.getStore(context, storeName);\n      PreferenceUtil.updateStoreCache(storeName, store);\n      const result = await store.get(key, '');\n      return result;\n    } catch (err) {\n      hilog.error(DOMAIN, TAG,\n        `getValue from ${storeName} error, key:${key}, err:${err.message}`);\n      return null;\n    }\n  }\n\n  public static getValueSync(context: Context, storeName: string, key: string): dataPreferences.ValueType | null {\n    try {\n      let store = PreferenceUtil.getStoreSync(context, storeName);\n      PreferenceUtil.updateStoreCache(storeName, store);\n      const result = store.getSync(key, '');\n      return result;\n    } catch (err) {\n      hilog.error(DOMAIN, TAG,\n        `getValueSync from ${storeName} error, key:${key}, err:${err.message}`);\n      return null;\n    }\n  }\n\n  public static async setValue(context: Context, storeName: string, key: string,\n    value: dataPreferences.ValueType): Promise<void> {\n    try {\n      let store = await PreferenceUtil.getStore(context, storeName);\n      PreferenceUtil.updateStoreCache(storeName, store);\n      await store.put(key, value);\n      await store.flush();\n    } catch (err) {\n      hilog.error(DOMAIN, TAG, `putValue from ${storeName} error, key:${key}, err:${err.message}`);\n    }\n  }\n\n\n  private static async getStore(context: Context, storeName: string): Promise<dataPreferences.Preferences> {\n    let actualStoreName = !storeName ? DEFAULT_STORE_NAME : storeName;\n    let store = PreferenceUtil.cachedPreferences.get(actualStoreName);\n    if (store) {\n      return store;\n    }\n    hilog.info(DOMAIN, TAG, `there is no cached store:${actualStoreName}, begin to get one`);\n    return dataPreferences.getPreferences(context, actualStoreName);\n  }\n\n  private static getStoreSync(context: Context, storeName: string): dataPreferences.Preferences {\n    let actualStoreName = !storeName ? DEFAULT_STORE_NAME : storeName;\n    let store = PreferenceUtil.cachedPreferences.get(actualStoreName);\n    if (store) {\n      return store;\n    }\n    hilog.info(DOMAIN, TAG, `getStoreSync there is no cached store:${actualStoreName}, begin to get one`);\n    return dataPreferences.getPreferencesSync(context, { name: actualStoreName });\n  }\n\n  private static updateStoreCache(storeName: string, store: dataPreferences.Preferences): void {\n    if (!PreferenceUtil.cachedPreferences.has(storeName)) {\n      PreferenceUtil.cachedPreferences.set(storeName, store);\n    }\n  }\n}\n"
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