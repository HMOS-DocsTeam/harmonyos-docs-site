"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["497124"], {
143436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_guidelines_napi_guidelines_md_6d8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-guidelines-napi-guidelines-md-6d8.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_guidelines_napi_guidelines_md_6d8_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-guidelines/napi-guidelines","title":"Node-API开发规范","description":"获取JS传入参数及其数量","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-guidelines/napi-guidelines.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-guidelines","slug":"/coding/using-napi-interaction-with-cpp/napi-guidelines/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Node-API开发规范","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-guidelines","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Node-API支持的数据类型和接口","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-data-types-interfaces/"},"next":{"title":"使用Node-API实现跨语言交互开发流程","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/use-napi-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-guidelines/napi-guidelines.md


const frontMatter = {
	title: 'Node-API开发规范',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-guidelines',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'Node-API开发规范';

const assets = {

};



const toc = [{
  "value": "获取JS传入参数及其数量",
  "id": "获取js传入参数及其数量",
  "level": 2
}, {
  "value": "生命周期管理",
  "id": "生命周期管理",
  "level": 2
}, {
  "value": "上下文敏感",
  "id": "上下文敏感",
  "level": 2
}, {
  "value": "异常处理",
  "id": "异常处理",
  "level": 2
}, {
  "value": "异步任务",
  "id": "异步任务",
  "level": 2
}, {
  "value": "对象绑定",
  "id": "对象绑定",
  "level": 2
}, {
  "value": "高性能数组",
  "id": "高性能数组",
  "level": 2
}, {
  "value": "数据转换",
  "id": "数据转换",
  "level": 2
}, {
  "value": "模块注册与模块命名",
  "id": "模块注册与模块命名",
  "level": 2
}, {
  "value": "dlopen与模块注册",
  "id": "dlopen与模块注册",
  "level": 2
}, {
  "value": "正确的使用napi_create_external系列接口创建的JS Object",
  "id": "正确的使用napi_create_external系列接口创建的js-object",
  "level": 2
}, {
  "value": "防止重复释放获取的buffer",
  "id": "防止重复释放获取的buffer",
  "level": 2
}, {
  "value": "其他",
  "id": "其他",
  "level": 2
}, {
  "value": "参考文档",
  "id": "参考文档",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "node-api开发规范",
        children: "Node-API开发规范"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取js传入参数及其数量",
      children: "获取JS传入参数及其数量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " 当传入napi_get_cb_info的argv不为nullptr时，argv的长度必须大于等于传入argc声明的大小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当argv不为nullptr时，napi_get_cb_info会根据argc声明的数量将JS实际传入的参数写入argv。如果argc小于等于实际JS传入参数的数量，该接口仅会将声明的argc数量的参数写入argv；而当argc大于实际参数数量时，该接口会在argv的尾部填充undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value IncorrectDemo1(napi_env env, napi_callback_info info) {\n    // argc 未正确的初始化，其值为不确定的随机值，导致 argv 的长度可能小于 argc 声明的数量，数据越界。\n    size_t argc;\n    napi_value argv[10] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    return nullptr;\n}\n\nstatic napi_value IncorrectDemo2(napi_env env, napi_callback_info info) {\n    // argc 声明的数量大于 argv 实际初始化的长度，导致 napi_get_cb_info 接口在写入 argv 时数据越界。\n    size_t argc = 5;\n    napi_value argv[3] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value GetArgvDemo1(napi_env env, napi_callback_info info) {\n    size_t argc = 0;\n    // argv 传入 nullptr 来获取传入参数真实数量\n    napi_get_cb_info(env, info, &argc, nullptr, nullptr, nullptr);\n    // JS 传入参数为0，不执行后续逻辑\n    if (argc == 0) {\n        return nullptr;\n    }\n    // 创建数组用以获取JS传入的参数\n    napi_value* argv = new napi_value[argc];\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 业务代码\n    // ... ...\n    // argv 为 new 创建的对象，在使用完成后手动释放\n    delete[] argv;\n    return nullptr;\n}\n\nstatic napi_value GetArgvDemo2(napi_env env, napi_callback_info info) {\n    size_t argc = 2;\n    napi_value argv[2] = {nullptr};\n    // napi_get_cb_info 会向 argv 中写入 argc 个 JS 传入参数或 undefined\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 业务代码\n    // ... ...\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期管理",
      children: "生命周期管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " 合理使用napi_open_handle_scope和napi_close_handle_scope管理napi_value的生命周期，做到生命周期最小化，避免发生内存泄漏问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个napi_value属于特定的HandleScope，HandleScope通过napi_open_handle_scope和napi_close_handle_scope来建立和关闭，HandleScope关闭后，所属的napi_value就会自动释放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在for循环中频繁调用napi接口创建js对象时，要加handle_scope及时释放不再使用的资源。\n// 下面例子中，每次循环结束局部变量res的生命周期已结束，因此加scope及时释放其持有的js对象，防止内存泄漏\nfor (int i = 0; i < 100000; i++) {\n    napi_handle_scope scope = nullptr;\n    napi_open_handle_scope(env, &scope);\n    if (scope == nullptr) {\n        return;\n    }\n    napi_value res;\n    napi_create_object(env, &res);\n    napi_close_handle_scope(env, scope);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "上下文敏感",
      children: "上下文敏感"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " 多引擎实例场景下，禁止通过Node-API跨引擎实例访问JS对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引擎实例是一个独立运行环境，JS对象创建访问等操作必须在同一个引擎实例中进行。若在不同引擎实例中操作同一个对象，可能会引发程序崩溃。引擎实例在接口中体现为napi_env。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 线程1执行，在env1创建string对象，值为\"bar\"\nnapi_create_string_utf8(env1, \"bar\", NAPI_AUTO_LENGTH, &string);\n// 线程2执行，在env2创建object对象，并将上述的string对象设置到object对象中\nnapi_status status = napi_create_object(env2, &object);\nif (status != napi_ok) {\n    napi_throw_error(env, ...);\n    return;\n}\n\nstatus = napi_set_named_property(env2, object, \"foo\", string);\nif (status != napi_ok) {\n    napi_throw_error(env, ...);\n    return;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所有的JS对象都隶属于具体的某一napi_env，不可将env1的对象，设置到env2中的对象中。在env2中一旦访问到env1的对象，程序可能会发生崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异常处理",
      children: "异常处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【建议】"
        })
      }), " Node-API接口调用发生异常需要及时处理，不能遗漏异常到后续逻辑，否则程序可能发生不可预期行为。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1.创建对象\nnapi_status status = napi_create_object(env, &object);\nif (status != napi_ok) {\n    napi_throw_error(env, ...);\n    return;\n}\n// 2.创建属性值\nstatus = napi_create_string_utf8(env, \"bar\", NAPI_AUTO_LENGTH, &string);\nif (status != napi_ok) {\n    napi_throw_error(env, ...);\n    return;\n}\n// 3.将步骤2的结果设置为对象object属性foo的值\nstatus = napi_set_named_property(env, object, \"foo\", string);\nif (status != napi_ok) {\n    napi_throw_error(env, ...);\n    return;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上示例中，步骤1或者步骤2出现异常时，步骤3都不会正常进行。只有当方法的返回值是napi_ok时，才能保持继续正常运行；否则后续流程可能会出现不可预期的行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异步任务",
      children: "异步任务"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " 当使用uv_queue_work方法将任务抛到JS线程上面执行的时候，对JS线程的回调方法，一般情况下需要加上napi_handle_scope来管理回调方法创建的napi_value的生命周期。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用uv_queue_work方法，不会走Node-API框架，此时需要开发者自己合理使用napi_handle_scope来管理napi_value的生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(536914)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本规则旨在强调napi_value生命周期情况，若只想往JS线程抛任务，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不推荐"
        })
      }), "使用uv_queue_work方法。如有抛任务的需要，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety",
        children: "napi_threadsafe_function系列"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void CallbackTest(CallbackContext* context)\n{\n    uv_loop_s* loop = nullptr;\n    napi_get_uv_event_loop(context->env, &loop);\n    uv_work_t* work = new uv_work_t;\n    context->retData = 1;\n    work->data = (void*)context;\n    uv_queue_work(\n        loop, work,\n        // 请注意，uv_queue_work会创建一个线程并执行该回调函数，若开发者只想往JS线程抛任务，不推荐使用uv_queue_work，以避免冗余的线程创建\n        [](uv_work_t* work) {\n            // 执行一些业务逻辑\n        },\n        // 该回调会执行在loop所在的JS线程上\n        [](uv_work_t* work, int status) {\n            CallbackContext* context = (CallbackContext*)work->data;\n            napi_handle_scope scope = nullptr;\n            napi_open_handle_scope(context->env, &scope);\n            if (scope == nullptr) {\n                if (work != nullptr) {\n                    delete work;\n                }\n                return;\n            }\n            napi_value callback = nullptr;\n            napi_get_reference_value(context->env, context->callbackRef, &callback);\n            napi_value retArg;\n            napi_create_int32(context->env, context->retData, &retArg);\n            napi_value ret;\n            napi_call_function(context->env, nullptr, callback, 1, &retArg, &ret);\n            napi_delete_reference(context->env, context->callbackRef);\n            napi_close_handle_scope(context->env, scope);\n            if (work != nullptr) {\n                delete work;\n            }\n            delete context;\n        }\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "对象绑定",
      children: "对象绑定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " 使用napi_wrap接口，如果最后一个参数result传递不为nullptr，需要开发者在合适的时机调用napi_remove_wrap函数主动删除创建的napi_ref。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_wrap接口定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_wrap(napi_env env, napi_value js_object, void* native_object, napi_finalize finalize_cb, void* finalize_hint, napi_ref* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当最后一个参数result不为空时，框架会创建一个napi_ref对象，指向js_object。此时开发者需要自己管理js_object的生命周期，即需要在合适的时机调用napi_remove_wrap删除napi_ref，这样GC才能正常释放js_object，从而触发绑定C++对象native_object的析构函数finalize_cb。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一般情况下，根据业务情况最后一个参数result可以直接传递为nullptr。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 用法1：napi_wrap不需要接收创建的napi_ref，最后一个参数传递nullptr，创建的napi_ref是弱引用，由系统管理，不需要用户手动释放\nnapi_wrap(env, jsobject, nativeObject, cb, nullptr, nullptr);\n\n// 用法2：napi_wrap需要接收创建的napi_ref，最后一个参数不为nullptr，返回的napi_ref是强引用，需要用户手动释放，否则会内存泄漏\nnapi_ref result;\nnapi_wrap(env, jsobject, nativeObject, cb, nullptr, &result);\n// 当js_object和result后续不再使用时，及时调用napi_remove_wrap释放result\nvoid* nativeObjectResult = nullptr;\nnapi_remove_wrap(env, jsobject, &nativeObjectResult);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "高性能数组",
      children: "高性能数组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【建议】"
        })
      }), " 存储值类型数据时，使用ArrayBuffer代替JSArray来提高应用性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSArray作为容器储存数据，支持几乎所有的JS数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用napi_set_element方法对JSArray存储值类型数据（如int32）时，同样会涉及到与运行时的交互，造成不必要的开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArrayBuffer进行增改是直接对缓冲区进行更改，具有远优于使用napi_set_element操作JSArray的性能表现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此此种场景下，更推荐使用napi_create_arraybuffer接口创建的ArrayBuffer对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 以下代码使用常规JSArray作为容器，但其仅存储int32类型数据。\n// 但因为是JS对象，因此只能使用napi方法对其进行增改，性能较低。\nstatic napi_value ArrayDemo(napi_env env, napi_callback_info info)\n{\n    constexpr size_t arrSize = 1000;\n    napi_value jsArr = nullptr;\n    napi_create_array(env, &jsArr);\n    for (int i = 0; i < arrSize; i++) {\n        napi_value arrValue = nullptr;\n        napi_create_int32(env, i, &arrValue);\n        // 常规JSArray使用napi方法对array进行读写，性能较差。\n        napi_set_element(env, jsArr, i, arrValue);\n    }\n    return jsArr;\n}\n\n// 推荐写法：\n// 同样以int32类型数据为例，但以下代码使用ArrayBuffer作为容器。\n// 因此可以使用C/C++的方法直接对缓冲区进行增改。\nstatic napi_value ArrayBufferDemo(napi_env env, napi_callback_info info)\n{\n    constexpr size_t arrSize = 1000;\n    napi_value arrBuffer = nullptr;\n    void* data = nullptr;\n\n    napi_create_arraybuffer(env, arrSize * sizeof(int32_t), &data, &arrBuffer);\n    // data为空指针，避免对data进行写入\n    if (data == nullptr) {\n        return arrBuffer;\n    }\n    int32_t* i32Buffer = reinterpret_cast<int32_t*>(data);\n    for (int i = 0; i < arrSize; i++) {\n        // arrayBuffer直接对缓冲区进行修改，跳过运行时，\n        // 与操作原生C/C++对象性能相当\n        i32Buffer[i] = i;\n    }\n\n    return arrBuffer;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_create_arraybuffer等同于JS代码中的new ArrayBuffer(size)，其生成的对象不可直接在TS/JS中进行读取，需要将其包装为TypedArray或DataView后方可进行读写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基准性能测试结果如下："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435563)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下数据为千次循环写入累计数据，为更好的体现出差异，已对设备核心频率进行限制。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "容器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benchmark数据（us）"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1566.174"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.609"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据转换",
      children: "数据转换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【建议】"
        })
      }), " 尽可能的减少数据转换次数，避免不必要的复制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "减少数据转换次数："
          })
        }), " 频繁的数据转换可能会导致性能下降，可以通过批量处理数据或者使用更高效的数据结构来优化性能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "避免不必要的数据复制："
          })
        }), " 在进行数据转换时，可以使用Node-API提供的接口来直接访问原始数据，而不是创建新的副本。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "使用缓存："
          })
        }), " 如果某些数据在多次转换中都会被使用到，可以考虑使用缓存来避免重复的数据转换。缓存可以减少不必要的计算，提高性能。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模块注册与模块命名",
      children: "模块注册与模块命名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nm_register_func对应的函数需要加上修饰符static，防止与其他二进制so文件里的符号冲突。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块注册的入口，即使用__attribute__((constructor))修饰函数的函数名需要确保与其他模块不同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块实现中.nm_modname字段需要与二进制so文件的名字完全匹配，区分大小写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下代码为二进制so文件的名为nativerender时的错误示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXTERN_C_START\nnapi_value Init(napi_env env, napi_value exports)\n{\n    // ...\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module nativeModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    // 没有在nm_register_func对应的函数加上static\n    .nm_register_func = Init,\n    // 模块实现中.nm_modname字段没有与模块名完全匹配，会导致多线程场景模块加载失败\n    .nm_modname = \"entry\",\n    .nm_priv = nullptr,\n    .reserved = { 0 },\n};\n\n// 模块注册的入口函数名为RegisterModule，容易与其他模块重复\nextern \"C\" __attribute__((constructor)) void RegisterModule()\n{\n    napi_module_register(&nativeModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图一"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(638908)/* ["default"] */.A) + "",
        width: "589",
        height: "276"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图二"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(552553)/* ["default"] */.A) + "",
        width: "569",
        height: "385"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下代码为模块名为nativerender时的正确示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    // ...\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module nativeModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"nativerender\",\n    .nm_priv = nullptr,\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterNativeRenderModule()\n{\n    napi_module_register(&nativeModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dlopen与模块注册",
      children: "dlopen与模块注册"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果注册的模块事先有被dlopen，需使用以下方式注册模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块需对外导出固定名称为napi_onLoad的函数，在该函数内调用注册函数。napi_onLoad函数只会在ArkTS代码的import语句中被主动调用，从而避免dlopen时提前触发模块的注册。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    // ...\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module nativeModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"nativerender\",\n    .nm_priv = nullptr,\n    .reserved = { 0 },\n};\n\nextern \"C\" void napi_onLoad()\n{\n    napi_module_register(&nativeModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正确的使用napi_create_external系列接口创建的js-object",
      children: "正确的使用napi_create_external系列接口创建的JS Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " napi_create_external系列接口创建出来的JS对象仅允许在当前线程传递和使用，跨线程传递（如使用worker的post_message）将会导致应用crash。若需跨线程传递绑定有Native对象的JS对象，请使用napi_coerce_to_native_binding_object接口绑定JS对象和Native对象。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-object#napi_create_external",
        children: "API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void MyFinalizeCB(napi_env env, void *finalize_data, void *finalize_hint) { return; }\n\nstatic napi_value CreateMyExternal(napi_env env, napi_callback_info info) {\n    napi_value result = nullptr;\n    napi_create_external(env, nullptr, MyFinalizeCB, nullptr, &result);\n    return result;\n}\n\n// 此处已省略模块注册的代码，你可能需要自行注册 CreateMyExternal 方法\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const createMyExternal: () => Object;\n\n// 应用代码\nimport testNapi from 'libentry.so';\nimport { worker } from '@kit.ArkTS';\n\nconst mWorker = new worker.ThreadWorker('../workers/Worker');\n\n{\n    const mExternalObj = testNapi.createMyExternal();\n\n    mWorker.postMessage(mExternalObj);\n\n}\n\n// 关闭worker线程\n// 应用可能在此步骤崩溃，或在后续引擎进行GC的时候崩溃\nmWorker.terminate();\n// Worker的实现为默认模板，此处省略\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "防止重复释放获取的buffer",
      children: "防止重复释放获取的buffer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " 使用napi_get_arraybuffer_info等接口，参数data资源开发者不允许释放，data的生命周期受引擎管理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这里以napi_get_arraybuffer_info为例，该接口定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_get_arraybuffer_info(napi_env env, napi_value arraybuffer, void** data, size_t* byte_length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "data获取的是ArrayBuffer的Buffer头指针，开发者只可以在范围内读写该Buffer区域，不可以进行释放操作。该段内存由引擎内部的ArrayBuffer Allocator管理，随JS对象ArrayBuffer的生命周期释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void* arrayBufferPtr = nullptr;\nnapi_value arrayBuffer = nullptr;\nsize_t createBufferSize = ARRAY_BUFFER_SIZE;\nnapi_status verification = napi_create_arraybuffer(env, createBufferSize, &arrayBufferPtr, &arrayBuffer);\nsize_t arrayBufferSize;\nnapi_status result = napi_get_arraybuffer_info(env, arrayBuffer, &arrayBufferPtr, &arrayBufferSize);\ndelete arrayBufferPtr; // 这一步是禁止的，创建的arrayBufferPtr生命周期由引擎管理，不允许用户自己delete，否则会double free\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "Node-API中受当前规则约束的接口有："
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_arraybuffer"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_arraybuffer"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_arraybuffer_info"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_info"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_typedarray_info"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_dataview_info"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "其他",
      children: "其他"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【建议】"
        })
      }), " 合理使用napi_object_freeze和napi_object_seal来控制对象以及对象属性的可变性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_object_freeze等同于Object.freeze语义，freeze后对象的所有属性都不可能以任何方式被修改；napi_object_seal等同于Object.seal语义，对象不可增删属性。两者的主要区别是，freeze不能改属性的值，seal还可以改属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用以上语义时，需确保约束条件是自己需要的，一旦违背以上语义严格模式下就会抛出Error（默认严格模式）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参考文档",
      children: "参考文档"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices-V5/bpta-native-sub-main-comm-V5",
        children: "Native侧子线程与UI主线程通信开发"
      }), ";"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs-V5/faqs-ndk-8-V5",
        children: "如何在Native侧C++子线程直接调用ArkTS接口，不用通过ArkTS侧触发回调"
      }), ";"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs-V5/faqs-ndk-55-V5",
        children: "napi_env、napi_value实例是否可以跨worker线程共享"
      }), ";"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs-V5/faqs-ndk-68-V5",
        children: "Native如何创建子线程，有什么约束，与主线程如何通信"
      }), "."]
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
552553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959370-3b24a9a8840bae93cc3b9afe03726b32.png");

},
638908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439415-70d9a1b92cfbcdcc57823279d85dd743.png");

},
435563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
536914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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