"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["87802"], {
810953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_embedded_component_ndk_embedded_component_md_a4f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-embedded-component-ndk-embedded-component-md-a4f.json
var site_docs_arkui_arkts_use_ndk_ndk_embedded_component_ndk_embedded_component_md_a4f_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-embedded-component/ndk-embedded-component","title":"通过EmbeddedComponent拉起EmbeddedUIExtensionAbility","description":"ArkUI在Native侧提供的能力是ArkTS的子集，某些能力不会在Native侧提供，例如声明式UI语法、自定义struct组件及UI系统预置UI组件库。","source":"@site/docs/arkui/arkts-use-ndk/ndk-embedded-component/ndk-embedded-component.md","sourceDirName":"arkui/arkts-use-ndk/ndk-embedded-component","slug":"/arkui/arkts-use-ndk/ndk-embedded-component/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-embedded-component/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"通过EmbeddedComponent拉起EmbeddedUIExtensionAbility","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-embedded-component","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询和操作自定义节点","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-node-query-operate/"},"next":{"title":"在NDK中保证多实例场景功能正常","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-scope-task/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-embedded-component/ndk-embedded-component.md


const frontMatter = {
	title: '通过EmbeddedComponent拉起EmbeddedUIExtensionAbility',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-embedded-component',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过EmbeddedComponent拉起EmbeddedUIExtensionAbility';

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
        id: "通过embeddedcomponent拉起embeddeduiextensionability",
        children: "通过EmbeddedComponent拉起EmbeddedUIExtensionAbility"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI在Native侧提供的能力是ArkTS的子集，某些能力不会在Native侧提供，例如声明式UI语法、自定义struct组件及UI系统预置UI组件库。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，ArkUI开发框架提供了Native侧嵌入EmbeddedComponent组件的能力，此能力依赖于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component",
        children: "EmbeddedComponent"
      }), "机制。EmbeddedComponent用于支持在当前页面嵌入同一应用内其他", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddeduiextensionability/js-apis-app-ability-embeddeduiextensionability",
        children: "EmbeddedUIExtensionAbility"
      }), "提供的UI。EmbeddedUIExtensionAbility在独立进程中运行，负责页面布局和渲染。此功能主要用于有进程隔离需求的模块化开发场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(409493)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_embeddedcomponentoption_create",
          children: "OH_ArkUI_EmbeddedComponentOption_Create"
        }), "获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-nativemodule-arkui-embeddedcomponentoption/i-arkui-nativemodule-arkui-embeddedcomponentoption",
          children: "ArkUI_EmbeddedComponentOption"
        }), "后，可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_embeddedcomponentoption_setonerror",
          children: "OH_ArkUI_EmbeddedComponentOption_SetOnError"
        }), "设置onError回调，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_embeddedcomponentoption_setonterminated",
          children: "OH_ArkUI_EmbeddedComponentOption_SetOnTerminated"
        }), "设置onTerminated回调。可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_moveto",
          children: "OH_ArkUI_NodeUtils_MoveTo"
        }), "迁移节点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_embeddedcomponentoption_setonterminated",
          children: "OH_ArkUI_EmbeddedComponentOption_SetOnTerminated"
        }), "设置onTerminated回调时，返回的want参数，只支持提供方返回的want参数的key，value解析，不支持嵌套解析。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在EmbeddedComponent销毁时，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_embeddedcomponentoption_dispose",
          children: "OH_ArkUI_EmbeddedComponentOption_Dispose"
        }), "释放内存。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["EmbeddedComponent组件需要使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setattribute",
          children: "setAttribute"
        }), "设置宽高才能显示。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例展示EmbeddedComponent组件NDK的基础使用方式，ability相关使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component",
        children: "EmbeddedComponent"
      }), "。示例应用的bundleName为\"com.example.embeddeddemo\"，同一应用下被拉起的EmbeddedUIExtensionAbility为\"ExampleEmbeddedAbility\"。本示例仅支持在具有多进程权限的设备上运行，例如PC/2in1。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <arkui/native_node.h>\n#include <arkui/native_type.h>\n#include <AbilityKit/ability_base/want.h> //引用元能力want头文件\n\n// 注册事件\nvoid onError(int32_t code, const char *name, const char *message) {}\nvoid onTerminated(int32_t code, AbilityBase_Want *want) {}\nconst unsigned int LOG_PRINT_DOMAIN = 0xFF00;\n#define SIZE_300 300\n#define SIZE_401 401\n#define SIZE_480 480\n// ···\n    // 创建节点\n    ArkUI_NodeHandle embeddedNode = nodeAPI->createNode(ARKUI_NODE_EMBEDDED_COMPONENT);\n    // 设置属性\n    AbilityBase_Element Element = {.bundleName = \"com.example.uiextensionandaccessibility\",\n                                   .abilityName = \"ExampleEmbeddedAbility\",\n                                   .moduleName = \"entry\"};       // 由元能力提供接口\n    AbilityBase_Want *want = OH_AbilityBase_CreateWant(Element); // 由元能力提供接口\n    if (want == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"AbilityBase_Want\", \"~PluginManager\");\n    }\n    ArkUI_AttributeItem itemobjwant = {.object = want};\n    nodeAPI->setAttribute(embeddedNode, NODE_EMBEDDED_COMPONENT_WANT, &itemobjwant);\n\n    auto embeddedNode_option = OH_ArkUI_EmbeddedComponentOption_Create();\n    auto onErrorCallback = onError;\n    auto onTerminatedCallback = onTerminated;\n    OH_ArkUI_EmbeddedComponentOption_SetOnError(embeddedNode_option, onErrorCallback);\n    OH_ArkUI_EmbeddedComponentOption_SetOnTerminated(embeddedNode_option, onTerminatedCallback);\n\n    ArkUI_AttributeItem itemobjembeddedNode = {.object = embeddedNode_option};\n    nodeAPI->setAttribute(embeddedNode, NODE_EMBEDDED_COMPONENT_OPTION, &itemobjembeddedNode);\n\n    // 设置基本属性，如宽高\n    ArkUI_NumberValue value[] = {SIZE_480};\n    ArkUI_AttributeItem item = {value, sizeof(value) / sizeof(ArkUI_NumberValue)};\n    value[0].f32 = SIZE_300;\n    nodeAPI->setAttribute(embeddedNode, NODE_WIDTH, &item);\n    nodeAPI->setAttribute(embeddedNode, NODE_HEIGHT, &item);\n\n    // 创建Column\n    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    nodeAPI->setAttribute(column, NODE_WIDTH, &item);\n    ArkUI_NumberValue column_bc[] = {{.u32 = 0xFFF00BB}};\n    ArkUI_AttributeItem column_item = {column_bc, 1};\n    nodeAPI->setAttribute(column, NODE_BACKGROUND_COLOR, &column_item);\n    ArkUI_AttributeItem column_id = {.string = \"Column_CAPI\"};\n    nodeAPI->setAttribute(column, NODE_ID, &column_id);\n\n    // 上树\n    nodeAPI->addChild(column, embeddedNode);\n"
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
409493(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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