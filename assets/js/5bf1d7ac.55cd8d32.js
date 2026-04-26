"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["610667"], {
394329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_object_wrap_use_napi_object_wrap_md_5bf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-napi-object-wrap-use-napi-object-wrap-md-5bf.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_object_wrap_use_napi_object_wrap_md_5bf_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-object-wrap/use-napi-object-wrap","title":"Native与ArkTS对象绑定","description":"场景介绍","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-object-wrap/use-napi-object-wrap.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-object-wrap","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-object-wrap/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-object-wrap/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Native与ArkTS对象绑定","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-object-wrap","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行线程安全开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety/"},"next":{"title":"Native与Sendable ArkTS对象绑定","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-sendable-napi/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-object-wrap/use-napi-object-wrap.md


const frontMatter = {
	title: 'Native与ArkTS对象绑定',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-object-wrap',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'Native与ArkTS对象绑定';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "native与arkts对象绑定",
        children: "Native与ArkTS对象绑定"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过napi_wrap将ArkTS对象与Native的C++对象绑定，后续操作时再通过napi_unwrap将ArkTS对象绑定的C++对象取出，并对其进行操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口声明、编译配置以及模块注册"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "接口声明"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.d.ts\nexport class MyObject {\n  constructor(arg: number);\n  plusOne: () => number;\n\n  public get value();\n  public set value(newVal: number);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "编译配置"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(napi_wrap_demo)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_definitions(\"-DLOG_DOMAIN=0x0000\")\nadd_definitions(\"-DLOG_TAG=\\\"testTag\\\"\")\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "模块注册"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// napi_init.cpp\n#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n\nclass MyObject {\npublic:\n    static napi_value Init(napi_env env, napi_value exports);\n    static void Destructor(napi_env env, void* nativeObject, void* finalize_hint);\n\nprivate:\n    explicit MyObject(double value_ = 0);\n    ~MyObject();\n\n    static napi_value New(napi_env env, napi_callback_info info);\n    static napi_value GetValue(napi_env env, napi_callback_info info);\n    static napi_value SetValue(napi_env env, napi_callback_info info);\n    static napi_value PlusOne(napi_env env, napi_callback_info info);\n\n    double value_;\n    napi_env env_;\n    napi_ref wrapper_;\n};\n\nMyObject::MyObject(double value) : value_(value), env_(nullptr), wrapper_(nullptr) {}\n\nMyObject::~MyObject()\n{\n    napi_status status = napi_delete_reference(env_, wrapper_);\n    if (status != napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"Failed to delete reference, return code: %{public}d\", status);\n    }\n}\n\nvoid MyObject::Destructor(napi_env env, void* nativeObject, [[maybe_unused]] void* finalize_hint)\n{\n    OH_LOG_INFO(LOG_APP, \"MyObject::Destructor called\");\n    delete reinterpret_cast<MyObject*>(nativeObject);\n}\n\nnapi_value MyObject::Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor properties[] = {\n        { \"value\", nullptr, nullptr, GetValue, SetValue, nullptr, napi_default, nullptr },\n        { \"plusOne\", nullptr, PlusOne, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n\n    napi_value cons = nullptr;\n    napi_status status = napi_define_class(env, \"MyObject\", NAPI_AUTO_LENGTH, New, nullptr, 2, properties, &cons);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_define_class fail\");\n        return nullptr;\n    }\n\n    status = napi_set_named_property(env, exports, \"MyObject\", cons);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_set_named_property fail\");\n        return nullptr;\n    }\n    return exports;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    MyObject::Init(env, exports);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module nativeModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = nullptr,\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterObjectWrapModule()\n{\n    napi_module_register(&nativeModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在构造函数中绑定ArkTS与C++对象"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value MyObject::New(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"MyObject::New called\");\n\n    napi_value newTarget = nullptr;\n    napi_status status = napi_get_new_target(env, info, &newTarget);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_get_new_target fail\");\n        return nullptr;\n    }\n    if (newTarget != nullptr) {\n        // 使用`new MyObject(...)`调用方式\n        size_t argc = 1;\n        napi_value args[1] = { nullptr };\n        napi_value jsThis = nullptr;\n        status = napi_get_cb_info(env, info, &argc, args, &jsThis, nullptr);\n        if (status != napi_ok) {\n            napi_throw_error(env, nullptr, \"Node-API napi_get_cb_info fail\");\n            return nullptr;\n        }\n\n        double value = 0.0;\n        napi_valuetype valuetype = napi_undefined;\n        status = napi_typeof(env, args[0], &valuetype);\n        if (status != napi_ok) {\n            napi_throw_error(env, nullptr, \"Node-API napi_typeof fail\");\n            return nullptr;\n        }\n        if (valuetype != napi_undefined) {\n            status = napi_get_value_double(env, args[0], &value);\n            if (status != napi_ok) {\n                napi_throw_error(env, nullptr, \"Node-API napi_get_value_double fail\");\n                return nullptr;\n            }\n        }\n\n        MyObject* obj = new MyObject(value);\n\n        obj->env_ = env;\n        // 通过napi_wrap将ArkTS对象jsThis)与C++对象obj绑定\n        status = napi_wrap(env,\n                           jsThis,\n                           reinterpret_cast<void*>(obj),\n                           MyObject::Destructor,\n                           nullptr,  // finalize_hint\n                           &obj->wrapper_);\n        // napi_wrap失败时，必须手动释放已分配的内存，以防止内存泄漏\n        if (status != napi_ok) {\n            delete obj;\n            napi_throw_error(env, nullptr, \"Node-API napi_wrap fail\");\n            return jsThis;\n        }\n        // 从napi_wrap接口的result获取napi_ref的行为，将会为jsThis创建强引用，\n        // 若开发者不需要主动管理jsThis的生命周期，可直接在napi_wrap最后一个参数中传入nullptr，\n        // 或者使用napi_reference_unref方法将napi_ref转为弱引用。\n        uint32_t refCount = 0;\n        napi_reference_unref(env, obj->wrapper_, &refCount);\n\n        return jsThis;\n    } else {\n        // 使用`MyObject(...)`调用方式\n        size_t argc = 1;\n        napi_value args[1] = { nullptr };\n        napi_value jsThis = nullptr;\n        status = napi_get_cb_info(env, info, &argc, args, &jsThis, nullptr);\n        if (status != napi_ok) {\n            napi_throw_error(env, nullptr, \"Node-API napi_get_cb_info fail\");\n            return nullptr;\n        }\n\n        napi_value cons = nullptr;\n        const char* constructorName = \"MyObject\";\n        status = napi_get_named_property(env, jsThis, constructorName, &cons);\n        if (status != napi_ok) {\n            napi_throw_error(env, nullptr, \"Node-API napi_get_named_property fail\");\n            return nullptr;\n        }\n        napi_value instance = nullptr;\n        status = napi_new_instance(env, cons, argc, args, &instance);\n        if (status != napi_ok) {\n            napi_throw_error(env, nullptr, \"Node-API napi_new_instance fail\");\n            return nullptr;\n        }\n\n        return instance;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将ArkTS对象之前绑定的C++对象取出，并对其进行操作"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value MyObject::GetValue(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"MyObject::GetValue called\");\n\n    napi_value jsThis = nullptr;\n    napi_status status = napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_get_cb_info fail\");\n        return nullptr;\n    }\n\n    MyObject* obj = nullptr;\n    // 通过napi_unwrap将jsThis之前绑定的C++对象取出，并对其进行操作\n    status = napi_unwrap(env, jsThis, reinterpret_cast<void**>(&obj));\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_unwrap fail\");\n        return nullptr;\n    }\n    napi_value num = nullptr;\n    status = napi_create_double(env, obj->value_, &num);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_create_double fail\");\n        return nullptr;\n    }\n\n    return num;\n}\n\nnapi_value MyObject::SetValue(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"MyObject::SetValue called\");\n\n    size_t argc = 1;\n    napi_value value = nullptr;\n    napi_value jsThis = nullptr;\n\n    napi_status status = napi_get_cb_info(env, info, &argc, &value, &jsThis, nullptr);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_get_cb_info fail\");\n        return nullptr;\n    }\n\n    MyObject* obj = nullptr;\n    // 通过napi_unwrap将jsThis之前绑定的C++对象取出，并对其进行操作\n    status = napi_unwrap(env, jsThis, reinterpret_cast<void**>(&obj));\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_unwrap fail\");\n        return nullptr;\n    }\n    status = napi_get_value_double(env, value, &obj->value_);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_get_value_double fail\");\n        return nullptr;\n    }\n\n    return nullptr;\n}\n\nnapi_value MyObject::PlusOne(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"MyObject::PlusOne called\");\n\n    napi_value jsThis = nullptr;\n    napi_status status = napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_get_cb_info fail\");\n        return nullptr;\n    }\n\n    MyObject* obj = nullptr;\n    // 通过napi_unwrap将jsThis之前绑定的C++对象取出，并对其进行操作\n    status = napi_unwrap(env, jsThis, reinterpret_cast<void**>(&obj));\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_unwrap fail\");\n        return nullptr;\n    }\n    obj->value_ += 1;\n    napi_value num = nullptr;\n    status = napi_create_double(env, obj->value_, &num);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_create_double fail\");\n        return nullptr;\n    }\n\n    return num;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧示例代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { MyObject } from 'libentry.so';\n\ntry {\n    let object : MyObject = new MyObject(0);\n    object.value = 1023.1;\n    hilog.info(0x0000, 'testTag', 'MyObject value after set: %{public}s', object.value.toString());\n    hilog.info(0x0000, 'testTag', 'MyObject plusOne: %{public}s', object.plusOne().toString());\n} catch (error) {\n    hilog.error(0x0000, 'testTag', 'Test Node-API error: %{public}s', error.message);\n}\n"
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