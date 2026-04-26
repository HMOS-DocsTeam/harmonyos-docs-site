"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["332020"], {
968000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_scope_task_ndk_scope_task_md_44c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-scope-task-ndk-scope-task-md-44c.json
var site_docs_arkui_arkts_use_ndk_ndk_scope_task_ndk_scope_task_md_44c_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-scope-task/ndk-scope-task","title":"在NDK中保证多实例场景功能正常","description":"API version 20开始，ArkUI开发框架新增了OH\\\\ArkUI\\\\RunTaskInScope接口，解决Native侧多实例场景下的组件操作问题。该功能通过动态切换执行上下文，确保跨实例组件属性设置的合法性，避免实例上下文不匹配导致的接口调用异常。","source":"@site/docs/arkui/arkts-use-ndk/ndk-scope-task/ndk-scope-task.md","sourceDirName":"arkui/arkts-use-ndk/ndk-scope-task","slug":"/arkui/arkts-use-ndk/ndk-scope-task/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-scope-task/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"在NDK中保证多实例场景功能正常","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-scope-task","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过EmbeddedComponent拉起EmbeddedUIExtensionAbility","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-embedded-component/"},"next":{"title":"使用多线程NDK接口并行化构建UI页面","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-on-multi-thread/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-scope-task/ndk-scope-task.md


const frontMatter = {
	title: '在NDK中保证多实例场景功能正常',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-scope-task',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '在NDK中保证多实例场景功能正常';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "在ndk中保证多实例场景功能正常",
        children: "在NDK中保证多实例场景功能正常"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API version 20开始，ArkUI开发框架新增了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_runtaskinscope",
        children: "OH_ArkUI_RunTaskInScope"
      }), "接口，解决Native侧多实例场景下的组件操作问题。该功能通过动态切换执行上下文，确保跨实例组件属性设置的合法性，避免实例上下文不匹配导致的接口调用异常。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在NDK多窗口开发时，可能会涉及到组件的跨实例设置属性等场景，使用该能力可确保在调用跨实例组件设置属性时的上下文正确性，避免跨实例接口调用失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(484603)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "适用于NDK多窗口开发中不同UI实例间的交互场景，例如在页面B中修改页面A创建的组件属性或未挂载到UI树的组件逻辑。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持通过userData参数传递自定义数据结构（如组件指针、业务参数等），便于在回调任务中精准定位目标组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getattachednodehandlebyid",
          children: "OH_ArkUI_NodeUtils_GetAttachedNodeHandleById"
        }), "等接口配合使用，有效规避跨实例访问导致的空指针或权限异常问题。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例展示OH_ArkUI_RunTaskInScope接口的基础使用方式，OH_ArkUI_NodeUtils_GetAttachedNodeHandleById用于获取前置实例页面内的组件，相关使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getattachednodehandlebyid",
        children: "OH_ArkUI_NodeUtils_GetAttachedNodeHandleById"
      }), "，此处userData传入的数据类型为最终要设置的组件指针，便于设置对应组件属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const uint32_t VALUE_2 = 250;\nconst uint32_t VALUE_3 = 480;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//page1\nArkUI_NodeHandle button = nodeAPI->createNode(ARKUI_NODE_BUTTON);\nArkUI_AttributeItem LABEL_Item = {.string = \"pageOneButton\"};\n// 设置id，用于在第二个页面内通过接口查找\nArkUI_AttributeItem id = {.string = \"pageOneButton\"};\nnodeAPI->setAttribute(button, NODE_ID, &id);\nnodeAPI->setAttribute(button, NODE_BUTTON_LABEL, &LABEL_Item);\nnodeAPI->addChild(textContainer, button);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//page2\n//pageOneButton由前置页面创建，通过OH_ArkUI_NodeUtils_GetAttachedNodeHandleById在第二个页面获取。\nArkUI_NodeHandle pageOneButton = nullptr;\nauto errorCode = OH_ArkUI_NodeUtils_GetAttachedNodeHandleById(\"pageOneButton\", &pageOneButton);\nif (errorCode != ARKUI_ERROR_CODE_NO_ERROR) {\n    OH_LOG_ERROR(LOG_APP, \"test Failed to get pageOneButton handle, error code: %{public}d\", errorCode);\n    return nullptr;\n}\nauto uiContext = OH_ArkUI_GetContextByNode(pageOneButton);\nif (uiContext == nullptr) {\n    OH_LOG_ERROR(LOG_APP, \"test Failed to get UI context for pageOneButton\");\n    return nullptr;\n}\nOH_ArkUI_RunTaskInScope(uiContext, pageOneButton, [](void *userData) {\n    auto *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    auto pageOneButton = (ArkUI_NodeHandle)userData;\n    ArkUI_NumberValue value[] = {VALUE_3};\n    ArkUI_AttributeItem LABEL_Item = {.string = \"success\"};\n    value[0].f32 = VALUE_2;\n    ArkUI_AttributeItem button_Item = {value, sizeof(value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(pageOneButton, NODE_BUTTON_LABEL, &LABEL_Item);\n    nodeAPI->setAttribute(pageOneButton, NODE_WIDTH, &button_Item);\n});\n"
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
484603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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