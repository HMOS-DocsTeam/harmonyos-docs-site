"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["212833"], {
664904(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_napi_define_sendable_object_napi_define_sendable_object_md_451_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-napi-define-sendable-object-napi-define-sendable-object-md-451.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_napi_define_sendable_object_napi_define_sendable_object_md_451_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-define-sendable-object/napi-define-sendable-object","title":"自定义Native Sendable对象的多线程操作场景","description":"ArkTS支持开发者自定义Native Sendable对象，Sendable对象提供了并发实例间高效的通信能力，即引用传递，适用于开发者自定义大对象需要线程间通信的场景，例如子线程读取数据库数据并返回给宿主线程。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-define-sendable-object/napi-define-sendable-object.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-define-sendable-object","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-define-sendable-object/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-define-sendable-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"自定义Native Sendable对象的多线程操作场景","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-define-sendable-object","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义Native Transferable对象的多线程操作场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-coerce-to-native-binding-object/"},"next":{"title":"Worker常驻线程通过TaskPool进行多任务并发处理","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/worker-and-taskpool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-define-sendable-object/napi-define-sendable-object.md


const frontMatter = {
	title: '自定义Native Sendable对象的多线程操作场景',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-define-sendable-object',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义Native Sendable对象的多线程操作场景';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
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
        id: "自定义native-sendable对象的多线程操作场景",
        children: "自定义Native Sendable对象的多线程操作场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS支持开发者自定义Native Sendable对象，Sendable对象提供了并发实例间高效的通信能力，即引用传递，适用于开发者自定义大对象需要线程间通信的场景，例如子线程读取数据库数据并返回给宿主线程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例将详细说明如何使用自定义Native Sendable对象实现并发实例间数据共享。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口声明中自定义Sendable类。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.d.ets\n@Sendable\nexport class MyObject {\n  constructor(arg: number);\n  plusOne(): number;\n\n  public get value(): number;\n  public set value(newVal: number);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# CMakeLists.txt\n# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(napi_wrap_sendable_demo)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_definitions(\"-DLOG_DOMAIN=0x0000\")\nadd_definitions(\"-DLOG_TAG=\\\"testTag\\\"\")\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native实现各项接口功能，例如取值、设置值或者给Native对象的值加1等功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// napi_init.cpp\n#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n\n// 一个native类，它的实例在下面会包装在ArkTS的Sendable对象中\nclass MyObject {\npublic:\n    static napi_value Init(napi_env env, napi_value exports);\n    static void Destructor(napi_env env, void *nativeObject, void *finalizeHint);\n\nprivate:\n    explicit MyObject(double value = 0);\n    ~MyObject();\n\n    static napi_value New(napi_env env, napi_callback_info info);\n    static napi_value GetValue(napi_env env, napi_callback_info info);\n    static napi_value SetValue(napi_env env, napi_callback_info info);\n    static napi_value PlusOne(napi_env env, napi_callback_info info);\n\n    double value_;\n    napi_env env_;\n};\n\nstatic thread_local napi_ref g_ref = nullptr;\n\nMyObject::MyObject(double value) : value_(value), env_(nullptr) {}\n\nMyObject::~MyObject() {}\n\nvoid MyObject::Destructor(napi_env env, void *nativeObject, [[maybe_unused]] void *finalizeHint)\n{\n    OH_LOG_INFO(LOG_APP, \"MyObject::Destructor called\");\n    reinterpret_cast<MyObject *>(nativeObject)->~MyObject();\n}\n\n// 在构造函数中绑定ArkTS Sendable对象与C++对象\nnapi_value MyObject::New(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"MyObject::New called\");\n\n    napi_value newTarget;\n    napi_get_new_target(env, info, &newTarget);\n    if (newTarget != nullptr) {\n        // 使用`new MyObject(...)`调用方式\n        size_t argc = 1;\n        napi_value args[1];\n        napi_value jsThis;\n        napi_get_cb_info(env, info, &argc, args, &jsThis, nullptr);\n\n        double value = 0.0;\n        napi_valuetype valuetype;\n        napi_typeof(env, args[0], &valuetype);\n        if (valuetype != napi_undefined) {\n            napi_get_value_double(env, args[0], &value);\n        }\n\n        MyObject *obj = new MyObject(value);\n\n        obj->env_ = env;\n        // 通过napi_wrap_sendable将ArkTS Sendable对象jsThis与C++对象obj绑定\n        napi_wrap_sendable(env, jsThis, reinterpret_cast<void *>(obj), MyObject::Destructor, nullptr);\n\n        return jsThis;\n    } else {\n        // 使用`MyObject(...)`调用方式\n        size_t argc = 1;\n        napi_value args[1];\n        napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n        napi_value cons;\n        napi_get_reference_value(env, g_ref, &cons);\n        napi_value instance;\n        napi_new_instance(env, cons, argc, args, &instance);\n\n        return instance;\n    }\n}\n\n// 取出Native对象的值\nnapi_value MyObject::GetValue(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"MyObject::GetValue called\");\n\n    napi_value jsThis;\n    napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);\n\n    MyObject *obj;\n    // 通过napi_unwrap_sendable将jsThis之前绑定的C++对象取出，并对其进行操作\n    napi_unwrap_sendable(env, jsThis, reinterpret_cast<void **>(&obj));\n    napi_value num;\n    napi_create_double(env, obj->value_, &num);\n\n    return num;\n}\n\n// 设置Native对象的值\nnapi_value MyObject::SetValue(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"MyObject::SetValue called\");\n\n    size_t argc = 1;\n    napi_value value;\n    napi_value jsThis;\n\n    napi_get_cb_info(env, info, &argc, &value, &jsThis, nullptr);\n\n    MyObject *obj;\n    // 通过napi_unwrap_sendable将jsThis之前绑定的C++对象取出，并对其进行操作\n    napi_unwrap_sendable(env, jsThis, reinterpret_cast<void **>(&obj));\n    napi_get_value_double(env, value, &obj->value_);\n\n    return nullptr;\n}\n\n// 给Native对象的值加1\nnapi_value MyObject::PlusOne(napi_env env, napi_callback_info info)\n{\n    OH_LOG_INFO(LOG_APP, \"MyObject::PlusOne called\");\n\n    napi_value jsThis;\n    napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);\n\n    MyObject *obj;\n    // 通过napi_unwrap_sendable将jsThis之前绑定的C++对象取出，并对其进行操作\n    napi_unwrap_sendable(env, jsThis, reinterpret_cast<void **>(&obj));\n    obj->value_ += 1;\n    napi_value num;\n    napi_create_double(env, obj->value_, &num);\n\n    return num;\n}\n\nnapi_value MyObject::Init(napi_env env, napi_value exports)\n{\n    napi_value num;\n    napi_create_double(env, 0, &num);\n    napi_property_descriptor properties[] = {\n        {\"value\", nullptr, nullptr, GetValue, SetValue, nullptr, napi_default, nullptr},\n        {\"plusOne\", nullptr, PlusOne, nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n\n    napi_value cons;\n    // 定义一个Sendable class MyObject\n    napi_define_sendable_class(env, \"MyObject\", NAPI_AUTO_LENGTH, New, nullptr,\n                               sizeof(properties) / sizeof(properties[0]), properties, nullptr, &cons);\n\n    napi_create_reference(env, cons, 1, &g_ref);\n    // 在exports对象上挂载MyObject类\n    napi_set_named_property(env, exports, \"MyObject\", cons);\n    return exports;\n}\n\nEXTERN_C_START\n// 模块初始化\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    MyObject::Init(env, exports);\n    return exports;\n}\nEXTERN_C_END\n\n// 准备模块加载相关信息，将上述Init函数与本模块名等信息记录下来\nstatic napi_module nativeModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = nullptr,\n    .reserved = {0},\n};\n\n// 加载so时，自动调用该函数，将上述nativeModule模块注册到系统中\nextern \"C\" __attribute__((constructor)) void RegisterObjectWrapModule() { napi_module_register(&nativeModule); }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧在UI主线程中定义Sendable实例对象并传递给TaskPool子线程，子线程处理完数据后返回UI主线程，UI主线程可以继续访问该Sendable实例对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { MyObject } from 'libentry.so';\nimport { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nasync function sum(object: MyObject) {\n  object.value = 2000;\n  let num = object.plusOne();\n  console.info('taskpool thread num is ' + num); // 日志输出：taskpool thread num is 2001\n  return num;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '使用Sendable对象进行线程间通信';\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize($r('app.float.page_text_font_size'))\n          .fontWeight(FontWeight.Bold)\n          .onClick( async () => {\n            let object : MyObject = new MyObject(0);\n            object.value = 1023;\n            let num = object.plusOne();\n            console.info('host thread num1 is ' + num); // 日志输出：host thread num1 is 1024\n            let task = new taskpool.Task(sum, object);\n            let result = await taskpool.execute(task);\n            console.info('host thread result is ' + result); // 日志输出：host thread result is 2001\n            console.info('host thread num2 is ' + object.value); // 日志输出：host thread num2 is 2001\n            this.message = 'host thread num2 is ' + object.value;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改与Index.d.ets同目录下的配置文件oh-package.json5，配置如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"libentry.so\",\n  \"types\": \"./Index.d.ets\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Please describe the basic information.\"\n}\n"
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