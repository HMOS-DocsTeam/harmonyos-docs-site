"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["662884"], {
897464(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_native_interthread_shared_native_interthread_shared_md_cd4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-native-interthread-shared-native-interthread-shared-md-cd4.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_native_interthread_shared_native_interthread_shared_md_cd4_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/native-interthread-shared/native-interthread-shared","title":"C++线程间数据共享场景","description":"在C++层进行多线程并发计算时，需要在每个C++线程上创建ArkTS执行环境，直接调用API。这样可以避免在非UI主线程回调时等待UI主线程的API调用结果。同时，还需要在C++线程之间共享和操作Sendable对象。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/native-interthread-shared/native-interthread-shared.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/native-interthread-shared","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/native-interthread-shared/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/native-interthread-shared/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"C++线程间数据共享场景","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-interthread-shared","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkUI数据更新场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/makeobserved-sendable/"},"next":{"title":"TaskPool指定任务并发度场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-async-task-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/native-interthread-shared/native-interthread-shared.md


const frontMatter = {
	title: 'C++线程间数据共享场景',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-interthread-shared',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'C++线程间数据共享场景';

const assets = {

};



const toc = [{
  "value": "在C++线程上调用ArkTS能力",
  "id": "在c线程上调用arkts能力",
  "level": 2
}, {
  "value": "在C++线程之间操作Sendable共享对象",
  "id": "在c线程之间操作sendable共享对象",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "c线程间数据共享场景",
        children: "C++线程间数据共享场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在C++层进行多线程并发计算时，需要在每个C++线程上创建ArkTS执行环境，直接调用API。这样可以避免在非UI主线程回调时等待UI主线程的API调用结果。同时，还需要在C++线程之间共享和操作Sendable对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了支持此类场景，C++线程需要能够创建并调用ArkTS，同时支持对Sendable对象进行多线程共享和操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在c线程上调用arkts能力",
      children: "在C++线程上调用ArkTS能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Node-API接口在C++线程中创建ArkTS运行环境并调用的方法，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime",
        children: "使用Node-API接口创建ArkTS运行时环境"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "核心代码片段如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS文件定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nexport class SendableObjTest {\n  static newSendable() {\n    return 1024;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现Native加载ArkTS模块的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <thread>\n\n#include \"napi/native_api.h\"\n\nstatic void* g_serializationData = nullptr;\nstatic void* CreateEnvAndSendSendable(void*)\n{\n    // 1. 创建基础运行环境\n    napi_env env = nullptr;\n    napi_status ret = napi_create_ark_runtime(&env);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    // 2. 加载自定义模块，假定SendableObjTest中提供创建sendable对象的方法newSendable\n    napi_value test = nullptr;\n    ret = napi_load_module_with_info(\n        env, \"entry/src/main/ets/pages/SendableObjTest\", \"com.example.myapplication/entry\", &test);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    napi_value sendableObjTest = nullptr;\n    ret = napi_get_named_property(env, test, \"SendableObjTest\", &sendableObjTest);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    // 3. 使用ArkTS中的newSendable，假设sendableObjTest中有一个函数newSendable能返回sendable对象\n    napi_value newSendable = nullptr;\n    ret = napi_get_named_property(env, sendableObjTest, \"newSendable\", &newSendable);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    // 4. 调用newSendable函数返回新创建的sendable对象，并保存在result中\n    napi_value result = nullptr;\n    ret = napi_call_function(env, sendableObjTest, newSendable, 0, nullptr, &result);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    // 5. 序列化sendable对象\n    napi_value undefined;\n    napi_get_undefined(env, &undefined);\n    ret = napi_serialize(env, result, undefined, undefined, &g_serializationData);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["主要步骤包括：创建执行环境、加载模块、查找并调用模块函数（或直接通过Node-API接口创建Sendable对象），最后销毁执行环境。加载模块的详细信息，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module-with-info",
        children: "使用Node-API接口进行模块加载"
      }), "。查找并调用函数及更多Node-API接口能力，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi",
        children: "Node-API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在c线程之间操作sendable共享对象",
      children: "在C++线程之间操作Sendable共享对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在C++中调用ArkTS能力后，需要通过序列化和反序列化跨线程传递。napi_value不是多线程安全的，不能直接在多线程之间操作和共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面代码例子说明了如何序列化和反序列化传递对象，注意因为Sendable共享对象是引用传递，所以序列化不会产生另外一份拷贝数据，而是直接传递对象引用到反序列化线程，所以在性能上相比非Sendable对象的序列化和反序列化更为高效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS文件定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nexport class SendableObjTest {\n  static newSendable() {\n    return 1024;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Native中实现两个线程的序列化和反序列化Sendable的逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <thread>\n\n#include \"napi/native_api.h\"\n\nstatic void* g_serializationData = nullptr;\nstatic void* CreateEnvAndSendSendable(void*)\n{\n    // 1. 创建基础运行环境\n    napi_env env = nullptr;\n    napi_status ret = napi_create_ark_runtime(&env);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    // 2. 加载自定义模块，假定SendableObjTest中提供创建sendable对象的方法newSendable\n    napi_value test = nullptr;\n    ret = napi_load_module_with_info(\n        env, \"entry/src/main/ets/pages/SendableObjTest\", \"com.example.myapplication/entry\", &test);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    napi_value sendableObjTest = nullptr;\n    ret = napi_get_named_property(env, test, \"SendableObjTest\", &sendableObjTest);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    // 3. 使用ArkTS中的newSendable，假设sendableObjTest中有一个函数newSendable能返回sendable对象\n    napi_value newSendable = nullptr;\n    ret = napi_get_named_property(env, sendableObjTest, \"newSendable\", &newSendable);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    // 4. 调用newSendable函数返回新创建的sendable对象，并保存在result中\n    napi_value result = nullptr;\n    ret = napi_call_function(env, sendableObjTest, newSendable, 0, nullptr, &result);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    // 5. 序列化sendable对象\n    napi_value undefined;\n    napi_get_undefined(env, &undefined);\n    ret = napi_serialize(env, result, undefined, undefined, &g_serializationData);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    return nullptr;\n}\n\nstatic void* CreateEnvAndReceiveSendable(void*)\n{\n    // 1. 创建基础运行环境\n    napi_env env = nullptr;\n    napi_status ret = napi_create_ark_runtime(&env);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    // 2. 反序列化获取sendable共享对象，结果保存在result中，这个result就可以通过napi接口进行各种操作了\n    napi_value result = nullptr;\n    ret = napi_deserialize(env, g_serializationData, &result);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    // 3. 删除序列化数据\n    ret = napi_delete_serialization_data(env, g_serializationData);\n    if (ret != napi_ok) {\n        std::abort();\n    }\n    napi_valuetype valuetype0;\n    napi_typeof(env, result, &valuetype0);\n    if (valuetype0 != napi_number) {\n        std::abort();\n    }\n    int value0;\n    napi_get_value_int32(env, result, &value0);\n    // 1024是判断ArkTS返回的结果是否正确\n    if (value0 != 1024) {\n        std::abort();\n    }\n    return nullptr;\n}\n\nstatic napi_value TestSendSendable([[maybe_unused]] napi_env env, [[maybe_unused]] napi_callback_info info)\n{\n    std::thread t1(CreateEnvAndSendSendable, nullptr);\n    t1.join();\n    std::thread t2(CreateEnvAndReceiveSendable, nullptr);\n    t2.join();\n    return nullptr;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = { { \"testSendSendable\", nullptr, TestSendSendable, nullptr, nullptr, nullptr,\n        napi_default, nullptr } };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const testSendSendable: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI主线程发起调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\nimport { SendableObjTest } from './SendableObjTest'\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            SendableObjTest.newSendable()\n            hilog.info(0x0000, 'testTag', 'Test send Sendable begin');\n            testNapi.testSendSendable();\n            hilog.info(0x0000, 'testTag', 'Test send Sendable end');\n            this.message = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "整个过程主要包括的逻辑实现为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在UI主线程中创建ArkTS运行环境，并发起一个C++子线程创建Sendable对象，保存到result中，然后将result引用的Sendable对象序列化到全局序列化数据serializationData中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当这些流程完成后，发起另外一个C++子线程，并在这个新的线程中创建ArkTS运行环境。然后再通过反序列化接口从serializationData中反序列化出UI主线程创建的Sendable对象，并保存到result中，从而实现了Sendable对象的跨C++线程传递。反序列化完成后，需要销毁反序列化数据避免内存泄露。这时UI主线程和子线程都同时持有这个Sendable共享对象，即可通过Node-API进行对象操作，比如读写或者传递到ArkTS层等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(528658)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["操作对象需要符合Sendable对象的规则，具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints",
            children: "Sendable使用规则与约束"
          }), "。"]
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
528658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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