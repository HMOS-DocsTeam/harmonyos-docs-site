"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["163800"], {
459285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_environmental_life_cycle_use_napi_about_environmental_life_cycle_md_990_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-environmental-life-cycle-use-napi-about-environmental-life-cycle-md-990.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_environmental_life_cycle_use_napi_about_environmental_life_cycle_md_990_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-environmental-life-cycle/use-napi-about-environmental-life-cycle","title":"使用Node-API接口关联数据，使其生命周期与当前环境的生命周期相关联","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-environmental-life-cycle/use-napi-about-environmental-life-cycle.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-environmental-life-cycle","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-environmental-life-cycle/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-environmental-life-cycle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"使用Node-API接口关联数据，使其生命周期与当前环境的生命周期相关联","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-environmental-life-cycle","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行错误处理开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-error/"},"next":{"title":"使用Node-API接口进行函数创建和调用","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-function/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-environmental-life-cycle/use-napi-about-environmental-life-cycle.md


const frontMatter = {
	title: '使用Node-API接口关联数据，使其生命周期与当前环境的生命周期相关联',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-environmental-life-cycle',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口关联数据，使其生命周期与当前环境的生命周期相关联';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "场景和功能介绍",
  "id": "场景和功能介绍",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "napi_set_instance_data",
  "id": "napi_set_instance_data",
  "level": 3
}, {
  "value": "napi_get_instance_data",
  "id": "napi_get_instance_data",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用node-api接口关联数据使其生命周期与当前环境的生命周期相关联",
        children: "使用Node-API接口关联数据，使其生命周期与当前环境的生命周期相关联"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Node-API模块中，可以使用Node-API接口将特定数据与当前环境相关联，并在需要时检索该数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Node-API中，关联数据指的是将自定义的C++数据结构与当前环境的生命周期绑定，这意味着只要当前运行环境存在，关联数据就会保持有效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下接口可在Node-API模块中更方便地管理对象实例所需的状态信息、引用计数或其他自定义数据，它们的使用场景如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_instance_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定与当前运行的环境相关联的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_instance_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索与当前运行的环境相关联的数据项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "使用Node-API实现跨语言交互开发流程"
      }), "，本文仅对接口对应C++及ArkTS相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_set_instance_data",
      children: "napi_set_instance_data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将需要绑定的数据与当前运行的环境相关联。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\n// 定义一个结构来存储实例数据\nstruct InstanceData {\n    int32_t value;\n};\n\n// 对象被释放时的回调函数，用于清理实例数据\nvoid FinalizeCallback(napi_env env, void *finalizeData, void *finalizeHint)\n{\n    if (finalizeData) {\n        InstanceData *data = reinterpret_cast<InstanceData *>(finalizeData);\n        // 释放内存，清除指针指向地址\n        delete (data);\n    }\n}\n\n// napi_set_instance_data\nstatic napi_value SetInstanceData(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1];\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    int32_t instanceDataValue;\n    napi_get_value_int32(env, argv[0], &instanceDataValue);\n    InstanceData *instanceData = new InstanceData;\n    instanceData->value = instanceDataValue;\n    // 调用napi_set_instance_data将实例数据关联到Node-API环境，并指定FinalizeCallback函数\n    napi_status status = napi_set_instance_data(env, instanceData, FinalizeCallback, nullptr);\n    if (status != napi_ok) {\n        delete instanceData;\n        napi_throw_error(env, nullptr, \"Test Node-API napi_set_instance_data failed\");\n        return nullptr;\n    }\n    bool success = true;\n    napi_value result = nullptr;\n    napi_get_boolean(env, success, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const setInstanceData: (data: number) => boolean | undefined; // napi_set_instance_data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_set_instance_data\nlet data = 5;\nlet value = testNapi.setInstanceData(data);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_set_instance_data:%{public}s', value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_instance_data",
      children: "napi_get_instance_data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检索与当前运行的环境相关联的数据项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_instance_data\nstatic napi_value GetInstanceData(napi_env env, napi_callback_info info)\n{\n    InstanceData *resData = nullptr;\n    // napi_get_instance_data获取之前相关联的数据项\n    napi_status status = napi_get_instance_data(env, (void **)&resData);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    if (resData == nullptr) {\n        napi_throw_error(env, nullptr, \"Instance data not set or already freed\");\n        return nullptr;\n    }\n    napi_value result = nullptr;\n    napi_create_int32(env, resData->value, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getInstanceData: () => number | undefined; // napi_get_instance_data\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_instance_data\nlet data = 5;\ntestNapi.setInstanceData(data);\nlet value = testNapi.getInstanceData();\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_set_instance_data:%{public}d', value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上代码如果要在native cpp中打印日志，需在CMakeLists.txt文件中添加以下配置信息（并添加头文件：#include \"hilog/log.h\"）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CMakeLists.txt\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
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