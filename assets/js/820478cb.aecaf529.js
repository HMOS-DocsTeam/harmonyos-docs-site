"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["507860"], {
529577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_napi_coerce_to_native_binding_object_napi_coerce_to_native_binding_object_md_820_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-napi-coerce-to-native-binding-object-napi-coerce-to-native-binding-object-md-820.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_napi_coerce_to_native_binding_object_napi_coerce_to_native_binding_object_md_820_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-coerce-to-native-binding-object/napi-coerce-to-native-binding-object","title":"自定义Native Transferable对象的多线程操作场景","description":"在ArkTS应用开发中，有很多场景需要将ArkTS对象与Native对象进行绑定。ArkTS对象将数据写入Native对象，Native对象再将数据写入目的地。例如，将ArkTS对象中的数据写入C++数据库场景。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-coerce-to-native-binding-object/napi-coerce-to-native-binding-object.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-coerce-to-native-binding-object","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-coerce-to-native-binding-object/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-coerce-to-native-binding-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"自定义Native Transferable对象的多线程操作场景","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-coerce-to-native-binding-object","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"多线程取消TaskPool任务场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/multi-thread-cancel-task/"},"next":{"title":"自定义Native Sendable对象的多线程操作场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-define-sendable-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-coerce-to-native-binding-object/napi-coerce-to-native-binding-object.md


const frontMatter = {
	title: '自定义Native Transferable对象的多线程操作场景',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-coerce-to-native-binding-object',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义Native Transferable对象的多线程操作场景';

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
        id: "自定义native-transferable对象的多线程操作场景",
        children: "自定义Native Transferable对象的多线程操作场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS应用开发中，有很多场景需要将ArkTS对象与Native对象进行绑定。ArkTS对象将数据写入Native对象，Native对象再将数据写入目的地。例如，将ArkTS对象中的数据写入C++数据库场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native Transferable对象有两种模式：共享模式和转移模式。本示例将详细说明如何实现这两种模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native实现各项功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// napi_init.cpp\n#include <mutex>\n#include <unordered_set>\n#include \"napi/native_api.h\"\n#include <hilog/log.h>\n\nclass CustomNativeObject {\npublic:\n    CustomNativeObject() {}\n    ~CustomNativeObject() = default;\n    static CustomNativeObject& GetInstance()\n    {\n        static CustomNativeObject instance;\n        return instance;\n    }\n\n    static napi_value GetAddress(napi_env env, napi_callback_info info)\n    {\n        napi_value thisVar = nullptr;\n        napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr);\n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        \n        uint64_t addressVal = reinterpret_cast<uint64_t>(object);\n        napi_value address = nullptr;\n        napi_create_bigint_uint64(env, addressVal, &address);\n        return address;\n    }\n\n    // 获取数组大小\n    static napi_value GetSetSize(napi_env env, napi_callback_info info)\n    {\n        napi_value thisVar = nullptr;\n        napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr);\n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        CustomNativeObject* obj = static_cast<CustomNativeObject*>(object);\n        std::lock_guard<std::mutex> lock(obj->numberSetMutex_);\n        uint32_t setSize = reinterpret_cast<CustomNativeObject*>(object)->numberSet_.size();\n        napi_value napiSize = nullptr;\n        napi_create_uint32(env, setSize, &napiSize);\n        return napiSize;\n    }\n\n    // 往数组里插入元素\n    static napi_value Store(napi_env env, napi_callback_info info)\n    {\n        size_t argc = 1;\n        napi_value args[1] = {nullptr};\n        napi_value thisVar = nullptr;\n        napi_get_cb_info(env, info, &argc, args, &thisVar, nullptr);\n        if (argc != 1) {\n            napi_throw_error(env, nullptr, \"Store args number must be one.\");\n            return nullptr;\n        }\n        napi_valuetype type = napi_undefined;\n        napi_typeof(env, args[0], &type);\n        if (type != napi_number) {\n            napi_throw_error(env, nullptr, \"Store args is not number.\");\n            return nullptr;\n        }\n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        \n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        \n        uint32_t value = 0;\n        napi_get_value_uint32(env, args[0], &value);\n        CustomNativeObject* obj = static_cast<CustomNativeObject*>(object);\n        std::lock_guard<std::mutex> lock(obj->numberSetMutex_);\n        reinterpret_cast<CustomNativeObject *>(object)->numberSet_.insert(value);\n        return nullptr;\n    }\n\n    // 删除数组元素\n    static napi_value Erase(napi_env env, napi_callback_info info)\n    {\n        size_t argc = 1;\n        napi_value args[1] = {nullptr};\n        napi_value thisVar = nullptr;\n        napi_get_cb_info(env, info, &argc, args, &thisVar, nullptr);\n        if (argc != 1) {\n            napi_throw_error(env, nullptr, \"Erase args number must be one.\");\n            return nullptr;\n        }\n        napi_valuetype type = napi_undefined;\n        napi_typeof(env, args[0], &type);\n        if (type != napi_number) {\n            napi_throw_error(env, nullptr, \"Erase args is not number.\");\n            return nullptr;\n        }\n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        \n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        \n        uint32_t value = 0;\n        napi_get_value_uint32(env, args[0], &value);\n        \n        CustomNativeObject* obj = static_cast<CustomNativeObject*>(object);\n        std::lock_guard<std::mutex> lock(obj->numberSetMutex_);\n        reinterpret_cast<CustomNativeObject *>(object)->numberSet_.erase(value);\n        return nullptr;\n    }\n\n    // 清空数组\n    static napi_value Clear(napi_env env, napi_callback_info info)\n    {\n        napi_value thisVar = nullptr;\n        napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr);\n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        CustomNativeObject* obj = static_cast<CustomNativeObject*>(object);\n        std::lock_guard<std::mutex> lock(obj->numberSetMutex_);\n        reinterpret_cast<CustomNativeObject *>(object)->numberSet_.clear();\n        return nullptr;\n    }\n    \n    // 设置传输模式\n    static napi_value SetTransferDetached(napi_env env, napi_callback_info info)\n    {\n        size_t argc = 1;\n        napi_value args[1];\n        napi_value thisVar;\n        napi_get_cb_info(env, info, &argc, args, &thisVar, nullptr);\n        if (argc != 1) {\n            napi_throw_error(env, nullptr, \"SetTransferDetached args number must be one.\");\n            return nullptr;\n        }\n        \n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        \n        napi_valuetype type = napi_undefined;\n        napi_typeof(env, args[0], &type);\n        if (type != napi_boolean) {\n            napi_throw_error(env, nullptr, \"SetTransferDetached args is not boolean.\");\n            return nullptr;\n        }\n        \n        bool isDetached;\n        napi_get_value_bool(env, args[0], &isDetached);\n        \n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        CustomNativeObject* obj = static_cast<CustomNativeObject*>(object);\n        std::lock_guard<std::mutex> lock(obj->numberSetMutex_);\n        obj->isDetached_ = isDetached;\n        return nullptr;\n    }\n    \n    bool isDetached_ = false;\n\nprivate:\n    CustomNativeObject(const CustomNativeObject &) = delete;\n    CustomNativeObject &operator=(const CustomNativeObject &) = delete;\n\n    std::unordered_set<uint32_t> numberSet_{};\n    std::mutex numberSetMutex_{};\n};\n\nvoid FinalizeCallback(napi_env env, void *data, void *hint)\n{\n    return;\n}\n\n// 解绑回调，在序列化时调用，可在对象解绑时执行一些清理操作\nvoid* DetachCallback(napi_env env, void *value, void *hint)\n{\n    if (hint == nullptr) {\n        return value;\n    }\n    napi_value jsObject = nullptr;\n    napi_get_reference_value(env, reinterpret_cast<napi_ref>(hint), &jsObject);\n    void* object = nullptr;\n    if (static_cast<CustomNativeObject*>(value)->isDetached_) {\n        napi_remove_wrap(env, jsObject, &object);\n    }\n    return value;\n}\n\n// 绑定回调，在反序列化时调用\nnapi_value AttachCallback(napi_env env, void* value, void* hint)\n{\n    napi_value object = nullptr;\n    napi_create_object(env, &object);\n    napi_property_descriptor desc[] = {\n        {\"getAddress\", nullptr, CustomNativeObject::GetAddress, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"getSetSize\", nullptr, CustomNativeObject::GetSetSize, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"store\", nullptr, CustomNativeObject::Store, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"erase\", nullptr, CustomNativeObject::Erase, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"clear\", nullptr, CustomNativeObject::Clear, nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, object, sizeof(desc) / sizeof(desc[0]), desc);\n    // 将JS对象object和native对象value生命周期进行绑定\n    napi_wrap(env, object, value, FinalizeCallback, nullptr, nullptr);\n    // JS对象携带native信息\n    napi_coerce_to_native_binding_object(env, object, DetachCallback, AttachCallback, value, nullptr);\n    return object;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"getAddress\", nullptr, CustomNativeObject::GetAddress, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"getSetSize\", nullptr, CustomNativeObject::GetSetSize, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"store\", nullptr, CustomNativeObject::Store, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"erase\", nullptr, CustomNativeObject::Erase, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"clear\", nullptr, CustomNativeObject::Clear, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"setTransferDetached\", nullptr, CustomNativeObject::SetTransferDetached,\n            nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    auto &object = CustomNativeObject::GetInstance();\n    napi_wrap(env, exports, reinterpret_cast<void*>(&object), FinalizeCallback, nullptr, nullptr);\n    napi_ref exportsRef;\n    napi_create_reference(env, exports, 1, &exportsRef);\n    napi_coerce_to_native_binding_object(env, exports, DetachCallback,\n        AttachCallback, reinterpret_cast<void*>(&object), exportsRef);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ArkTS中声明接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.d.ts\nexport const getAddress: () => number;\nexport const getSetSize: () => number;\nexport const store: (a: number) => void;\nexport const erase: (a: number) => void;\nexport const clear: () => void;\nexport const setTransferDetached: (b : boolean) => number;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS对象调用Native侧实现的各项功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在转移模式下，跨线程传递后，原来的ArkTS对象与Native对象解绑，因此不能继续访问。示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\nimport { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction getAddress() {\n  let address: number = testNapi.getAddress();\n  console.info('taskpool:: address is ' + address);\n}\n\n@Concurrent\nfunction store(a:number, b:number, c:number) {\n  let size:number = testNapi.getSetSize();\n  console.info('set size is ' + size + ' before store');\n  testNapi.store(a);\n  testNapi.store(b);\n  testNapi.store(c);\n  size = testNapi.getSetSize();\n  console.info('set size is ' + size + ' after store');\n}\n\n@Concurrent\nfunction erase(a:number) {\n  let size:number = testNapi.getSetSize();\n  console.info('set size is ' + size + ' before erase');\n  testNapi.erase(a);\n  size = testNapi.getSetSize();\n  console.info('set size is ' + size + ' after erase');\n}\n\n@Concurrent\nfunction clear() {\n  let size:number = testNapi.getSetSize();\n  console.info('set size is ' + size + ' before clear');\n  testNapi.clear();\n  size = testNapi.getSetSize();\n  console.info('set size is ' + size + ' after clear');\n}\n\n// 转移模式\nasync function test(): Promise<void> {\n  // setTransferDetached 设置为true，表示传输方式为转移模式\n  testNapi.setTransferDetached(true);\n  let address:number = testNapi.getAddress();\n  console.info('host thread address is ' + address);\n\n  let task1 = new taskpool.Task(getAddress, testNapi);\n  await taskpool.execute(task1);\n\n  let task2 = new taskpool.Task(store, 1, 2, 3);\n  await taskpool.execute(task2);\n\n  let task3 = new taskpool.Task(store, 4, 5, 6);\n  await taskpool.execute(task3);\n\n  // 由于已经设置了转移模式，且testNapi已跨线程传递，所以主线程无法继续访问到Native对象的值\n  let size:number = testNapi.getSetSize();\n  // 输出的日志为“host thread size is undefined”\n  console.info('host thread size is ' + size);\n\n  let task4 = new taskpool.Task(erase, 3);\n  await taskpool.execute(task4);\n\n  let task5 = new taskpool.Task(erase, 5);\n  await taskpool.execute(task5);\n\n  let task6 = new taskpool.Task(clear);\n  await taskpool.execute(task6);\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize($r('app.float.page_text_font_size'))\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            test();\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在共享模式下，跨线程传递后，原来的ArkTS对象还可以继续访问Native对象。示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport testNapi from 'libentry.so';\nimport { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction getAddress() {\n  let address: number = testNapi.getAddress();\n  console.info('taskpool:: address is ' + address);\n}\n\n@Concurrent\nfunction store(a:number, b:number, c:number) {\n  let size:number = testNapi.getSetSize();\n  console.info('set size is ' + size + ' before store');\n  testNapi.store(a);\n  testNapi.store(b);\n  testNapi.store(c);\n  size = testNapi.getSetSize();\n  console.info('set size is ' + size + ' after store');\n}\n\n@Concurrent\nfunction erase(a:number) {\n  let size:number = testNapi.getSetSize();\n  console.info('set size is ' + size + ' before erase');\n  testNapi.erase(a);\n  size = testNapi.getSetSize();\n  console.info('set size is ' + size + ' after erase');\n}\n\n@Concurrent\nfunction clear() {\n  let size:number = testNapi.getSetSize();\n  console.info('set size is ' + size + ' before clear');\n  testNapi.clear();\n  size = testNapi.getSetSize();\n  console.info('set size is ' + size + ' after clear');\n}\n\n// 共享模式\nasync function test(): Promise<void> {\n  let address:number = testNapi.getAddress();\n  console.info('host thread address is ' + address);\n\n  let task1 = new taskpool.Task(getAddress, testNapi);\n  await taskpool.execute(task1);\n\n  let task2 = new taskpool.Task(store, 1, 2, 3);\n  await taskpool.execute(task2);\n\n  let task3 = new taskpool.Task(store, 4, 5, 6);\n  await taskpool.execute(task3);\n\n  // 由于默认的传输模式为共享模式，testNapi跨线程传递后，主线程可以继续访问Native对象的值\n  let size:number = testNapi.getSetSize();\n  // 输出的日志为“host thread size is 6”\n  console.info('host thread size is ' + size);\n\n  let task4 = new taskpool.Task(erase, 3);\n  await taskpool.execute(task4);\n\n  let task5 = new taskpool.Task(erase, 5);\n  await taskpool.execute(task5);\n\n  let task6 = new taskpool.Task(clear);\n  await taskpool.execute(task6);\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize($r('app.float.page_text_font_size'))\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            test();\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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