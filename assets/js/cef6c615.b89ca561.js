"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["854263"], {
66029(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_questions_napi_faq_about_common_basic_napi_faq_about_common_basic_md_cef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-questions-napi-faq-about-common-basic-napi-faq-about-common-basic-md-cef.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_questions_napi_faq_about_common_basic_napi_faq_about_common_basic_md_cef_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic/napi-faq-about-common-basic","title":"常见基本功能问题汇总","description":"模块加载失败，报错信息显示Error message: is not callable.","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic/napi-faq-about-common-basic.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic","slug":"/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"常见基本功能问题汇总","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"内存泄漏相关问题汇总","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-memory-leak/"},"next":{"title":"JSVM-API简介","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic/napi-faq-about-common-basic.md


const frontMatter = {
	title: '常见基本功能问题汇总',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-faq-about-common-basic',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '常见基本功能问题汇总';

const assets = {

};



const toc = [{
  "value": "模块加载失败，报错信息显示Error message: is not callable.",
  "id": "模块加载失败报错信息显示error-message-is-not-callable",
  "level": 2
}, {
  "value": "在大量需要调用ArkTS方法进行通信的场景中如何保证异步任务的有序性",
  "id": "在大量需要调用arkts方法进行通信的场景中如何保证异步任务的有序性",
  "level": 2
}, {
  "value": "是否存在便捷的回调ArkTS的方式",
  "id": "是否存在便捷的回调arkts的方式",
  "level": 2
}, {
  "value": "如何在C++代码中回调ArkTS方法",
  "id": "如何在c代码中回调arkts方法",
  "level": 2
}, {
  "value": "如何确保数据类型的正确映射与内存管理的安全性",
  "id": "如何确保数据类型的正确映射与内存管理的安全性",
  "level": 2
}, {
  "value": "napi_get_uv_event_loop接口错误码说明",
  "id": "napi_get_uv_event_loop接口错误码说明",
  "level": 2
}, {
  "value": "Native层调用ArkTS层对象方法必须传入一个function给Native层吗",
  "id": "native层调用arkts层对象方法必须传入一个function给native层吗",
  "level": 2
}, {
  "value": "是否能调用ArkTS的方法并获取到结果",
  "id": "是否能调用arkts的方法并获取到结果",
  "level": 2
}, {
  "value": "是否有不拷贝的napi_get_value_string_utf8接口或者能力",
  "id": "是否有不拷贝的napi_get_value_string_utf8接口或者能力",
  "level": 2
}, {
  "value": "多线程下napi_env的使用注意事项",
  "id": "多线程下napi_env的使用注意事项",
  "level": 2
}, {
  "value": "napi_call_threadsafe_function执行顺序不符合预期",
  "id": "napi_call_threadsafe_function执行顺序不符合预期",
  "level": 2
}, {
  "value": "ArkTS侧报错显示undefined",
  "id": "arkts侧报错显示undefined",
  "level": 2
}, {
  "value": "接口执行结果非预期",
  "id": "接口执行结果非预期",
  "level": 2
}, {
  "value": "napi_value和napi_ref的生命周期有何区别",
  "id": "napi_value和napi_ref的生命周期有何区别",
  "level": 2
}, {
  "value": "Node-API接口返回值不是napi_ok时如何排查定位",
  "id": "node-api接口返回值不是napi_ok时如何排查定位",
  "level": 2
}, {
  "value": "napi_wrap如何保证被wrap的对象按期望顺序析构",
  "id": "napi_wrap如何保证被wrap的对象按期望顺序析构",
  "level": 2
}, {
  "value": "napi_call_threadsafe_function回调任务不执行",
  "id": "napi_call_threadsafe_function回调任务不执行",
  "level": 2
}, {
  "value": "使用开发工具支撑C/C++代码快速进行Node-API开发",
  "id": "使用开发工具支撑cc代码快速进行node-api开发",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
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
        id: "常见基本功能问题汇总",
        children: "常见基本功能问题汇总"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模块加载失败报错信息显示error-message-is-not-callable",
      children: "模块加载失败，报错信息显示Error message: is not callable."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "问题描述："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过如下模块注册代码提供的libxxx.so，在部分项目中调用动态库的API，出现Error message: is not callable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"xxx\",\n    .nm_priv = nullptr,\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule()\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查建议："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可根据以下文档进行排查："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-common-basic#arkts%E4%BE%A7%E6%8A%A5%E9%94%99%E6%98%BE%E7%A4%BAundefined",
            children: "ArkTS侧import xxx from libxxx.so后，使用xxx报错显示undefined/not callable或明确的Error message"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-guidelines#%E6%A8%A1%E5%9D%97%E6%B3%A8%E5%86%8C%E4%B8%8E%E6%A8%A1%E5%9D%97%E5%91%BD%E5%90%8D",
            children: "模块注册与模块命名"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同时也可参考动态加载能力是否可以满足该场景："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module-with-info#napi_load_module_with_info%E6%94%AF%E6%8C%81%E7%9A%84%E5%9C%BA%E6%99%AF",
            children: "napi_load_module_with_info支持的场景"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module#napi_load_module%E6%94%AF%E6%8C%81%E7%9A%84%E5%9C%BA%E6%99%AF",
            children: "napi_load_module支持的场景"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在大量需要调用arkts方法进行通信的场景中如何保证异步任务的有序性",
      children: "在大量需要调用ArkTS方法进行通信的场景中如何保证异步任务的有序性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体问题：在大量需要通过C++调用ArkTS方法进行通信的场景，如何保证异步任务的有序性？"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参考方案："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可参考线程安全函数来实现，napi_call_threadsafe_function可保证异步任务执行顺序, 需要注意的是这些异步任务会投递到ArkTS线程顺序执行，如果是投递到主线程，异步任务的执行时间过长可能导致应用冻结退出，所以不建议将长耗时的任务通过线程安全函数投递到主线程执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety",
        children: "使用Node-API接口进行线程安全开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此外，Node-API中常见的抛任务方法的差异如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "napi_async_work系列接口只能保证execute_cb在complete_cb之前执行，但无法保证不同napi_async_work的时序。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/napi/napi#napi_queue_async_work_with_qos",
            children: "napi_queue_async_work_with_qos"
          }), "是在普通napi_queue_async_work的基础上，支持自定义qos优先级，而这里只是指定libuv调度任务时使用线程的优先级，不是指任务的优先级，所以也无法保证任务的时序。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "napi_threadsafe_function系列接口内部维护了一个队列，可以保证任务执行的顺序。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "napi_call_threadsafe_function按先入先出的顺序执行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "napi_call_threadsafe_function_with_priority根据指定的入队方式执行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-call-threadsafe-function-with-priority",
            children: "使用Node-API接口从异步线程向ArkTS线程投递指定优先级和入队方式的任务"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "是否存在便捷的回调arkts的方式",
      children: "是否存在便捷的回调ArkTS的方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体描述："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行多线程开发时，ArkTS函数只能在其创建线程上执行，C++线程不能直接通过napi_call_function的形式直接调用ArkTS回调，是否存在便捷的方法？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可参考文档："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-native-sub-main-comm",
        children: "Native侧子线程与UI主线程通信"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task",
        children: "使用Node-API接口进行异步任务开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何在c代码中回调arkts方法",
      children: "如何在C++代码中回调ArkTS方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参考文档："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-26",
        children: "如何在C++调用从ArkTS传递过来的function"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何确保数据类型的正确映射与内存管理的安全性",
      children: "如何确保数据类型的正确映射与内存管理的安全性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体问题：如何在遵循N-API单一返回值约束的前提下，安全、高效地将多个返回值（包括结构化数据和指针信息）传递给ArkTS运行时环境，并确保数据类型的正确映射与内存管理的安全性？"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参考实现："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尽管napi_value接口仅支持单一返回值，但开发者可通过该返回值封装所需的全部信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "比如通过napi_create_object，创建出一个ArkTS对象，用这个对象来承载返回的所有信息，number和string都可以通过napi_set_property/napi_set_named_property等属性设置的接口设置到这个对象上。native对象也可以通过napi_wrap接口和ArkTS对象进行绑定，后续再通过napi_unwrap取出来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此外，还可以使用ArkTS数组作为数据载体，其具有良好的灵活性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参考文档："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-object",
        children: "使用Node-API接口进行object相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-array",
        children: "使用Node-API接口进行array相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_get_uv_event_loop接口错误码说明",
      children: "napi_get_uv_event_loop接口错误码说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS中，对使用非法的napi_env作为napi_get_uv_event_loop入参的行为加入了额外的参数校验，这一行为将直接反映到该接口的返回值上。该接口返回值详情如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当env且（或）loop为nullptr时，返回napi_invalid_arg。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当env为有效的napi_env且loop为合法指针，返回napi_ok。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当env不是有效的napi_env（如已释放的env），返回napi_generic_failure。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "常见错误场景示例如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_value NapiInvalidArg(napi_env env, napi_callback_info)\n{\n    napi_status status = napi_ok;\n    status = napi_get_uv_event_loop(env, nullptr); // loop为nullptr, 状态码napi_invalid_arg\n    if (status == napi_ok) {\n        // do something\n    }\n\n    uv_loop_s* loop = nullptr;\n    status = napi_get_uv_event_loop(nullptr, &loop); // env为nullptr, 状态码napi_invalid_arg\n    if (status == napi_ok) {\n        // do something\n    }\n\n    status = napi_get_uv_event_loop(nullptr, nullptr); // env, loop均为nullptr, 状态码napi_invalid_arg\n    if (status == napi_ok) {\n        // do something\n    }\n\n    return nullptr;\n}\n\nnapi_value NapiGenericFailure(napi_env env, napi_callback_info)\n{\n    std::thread([]() {\n        napi_env env = nullptr;\n        napi_create_ark_runtime(&env); // 通常情况下，需要对该接口返回值进行判断\n        // napi_destroy_ark_runtime 会将指针置空，拷贝一份用以构造问题场景\n        napi_env copiedEnv = env;\n        napi_destroy_ark_runtime(&env);\n        uv_loop_s* loop = nullptr;\n        napi_status status = napi_get_uv_event_loop(copiedEnv, &loop); // env无效, 状态码napi_generic_failure\n        if (status == napi_ok) {\n            // do something\n        }\n    }).detach();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "native层调用arkts层对象方法必须传入一个function给native层吗",
      children: "Native层调用ArkTS层对象方法必须传入一个function给Native层吗"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体问题：Node-API的Native层调用ArkTS层对象方法，必须传入一个function给Native层吗？"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参考方案："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果想要在Native层调用ArkTS层对象方法，则Native层需获取该ArkTS Function对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取的途径有多种，比如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过传递的方式，ArkTS层传给Native层，也就是问题描述的方案。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可以把这个ArkTS function通过属性设置方式绑定到Native层可访问的对象上，这样Native层通过这个对象也能拿到function进行调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node-API层也提供了一个创建ArkTS Function对象的能力，即napi_create_function，可以直接在Native层中创建出来，这样，Native层自然就能拿到这个ArkTS Function对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "是否能调用arkts的方法并获取到结果",
      children: "是否能调用ArkTS的方法并获取到结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体问题：在C++通过pthread或std::thread创建的线程，是否能调用ArkTS的方法并获取到结果？"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "问题分析："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果是直接创建出来的C++线程，该线程没有ArkTS运行环境，即该线程上没有对应的napi_env。直接在该线程上调用ArkTS方法，存在多线程安全问题，属于未定义行为。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解决方案参考："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用napi_threadsafe_function系列的Node-API接口，这系列接口，相当于在C++线程抛任务回到ArkTS线程执行ArkTS方法"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety",
            children: "使用Node-API接口进行线程安全开发"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在C++线程创建出ArkTS运行环境"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime",
            children: "使用Node-API接口创建ArkTS运行时环境"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "是否有不拷贝的napi_get_value_string_utf8接口或者能力",
      children: "是否有不拷贝的napi_get_value_string_utf8接口或者能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体问题：当前Node-API的napi_get_value_string_utf8每次调用的时候都要进行拷贝，是否有不拷贝的napi_get_value_string_utf8接口或者能力？"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "问题解答："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持该功能，每次napi_get_value_string_utf8都需要有一个拷贝过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拷贝是必要的，因为会涉及到string生命周期。当触发GC的时候，ArkTS对象可能会在虚拟机里面被搬移，可能搬移到其它地方，也可能直接对象被回收。如果直接返回类似char*的地址，对象被移动或回收后，原地址的指向的内存可能发生变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多线程下napi_env的使用注意事项",
      children: "多线程下napi_env的使用注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "具体问题："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多线程下napi_env的使用注意事项是什么？是否存在napi_env切换导致的异常问题？是否必须在主线程？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "注意事项："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "napi_env和ArkTS线程是绑定的，napi_env不能跨线程使用，否则会导致稳定性问题。可参考文档"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/use-napi-process#%E5%A4%9A%E7%BA%BF%E7%A8%8B%E9%99%90%E5%88%B6",
            children: "多线程限制"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用env调用napi接口时，需要注意，大部分的napi接口只能在env所在的ArkTS线程上调用，不然会出现多线程安全问题。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可参考该文档的第四点【multi-thread】 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-coding-standard-api#section1219614634615",
            children: "开发者使用napi接口时，跨线程使用napi_env或napi_value引发多线程安全问题"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "最好不要缓存napi env，否则容易出现多线程安全问题和use-after-free问题。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可参考该文档的第八点【use-after-free】", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-coding-standard-api#section1219614634615",
            children: "开发者使用napi接口时，跨线程使用napi_env或napi_value引发多线程安全问题"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-73",
            children: "napi_env禁止缓存的原因是什么"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_call_threadsafe_function执行顺序不符合预期",
      children: "napi_call_threadsafe_function执行顺序不符合预期"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "问题描述："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_call_threadsafe_function执行顺序不符合预期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原本期望的执行顺序是 a -> b -> c"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "posttask(a);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "posttask(b);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "posttask(c);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "但是实际的执行顺序是 b -> a -> c"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查方向："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "是否使用的是同一个napi_threadsafe_function，若使用不同实例，则无法保障执行顺序一致；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注：对于同一个napi_threadsafe_function来说，napi_call_threadsafe_function是保序的，接口内维护了一个队列，先调用就会先执行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "是否能保证实际napi_threadsafe_function的调用顺序是a -> b -> c；"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts侧报错显示undefined",
      children: "ArkTS侧报错显示undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体问题："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧import xxx from libxxx.so后，使用xxx报错显示undefined/not callable或明确的Error message。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排查.cpp文件在注册模块时的模块名称与so的名称匹配一致。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如模块名为entry，则so的名字为libentry.so，napi_module中nm_modname字段应为entry，大小写与模块名保持一致。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排查so是否加载成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用启动时过滤模块加载相关日志，重点搜索\"dlopen\"关键字，确认是否有相关报错信息；常见加载失败原因有权限不足、so文件不存在以及so已拉入黑名单等，可根据以下关键错误日志确认问题。其中，多线程场景（如worker、taskpool等）下优先检查模块实现中nm_modname是否与模块名一致，区分大小写。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排查依赖的so是否加载成功。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确定所依赖的其它so是否打包到应用中以及是否有权限打开。常见加载失败原因有权限不足、so文件不存在等。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "已知关键错误日志"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "修改建议"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "module $SO is not allowed to load in restricted runtime."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "$SO表示模块名。该模块不在受限worker线程的so加载白名单，不允许加载，建议用户删除该模块。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "module $SO is in blocklist, loading prohibited."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "$SO表示模块名。受卡片或者Extension管控，该模块在黑名单内，不允许加载，建议用户删除该模块。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "load module failed. $ERRMSG."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "动态库加载失败。$ERRMSG表示加载失败原因，一般常见原因是so文件不存在、依赖的so文件不存在或者符号未定义，需根据加载失败原因具体分析。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "try to load abc file from $FILEPATH failed."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "通常加载动态库和abc文件为二选一：如果是要加载动态库并且加载失败，该告警可以忽略；如果是要加载abc文件，则该错误打印的原因是abc文件不存在，$FILEPATH表示模块路径。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果有明确的Error message，可以通过Error message判断当前问题。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Error message"
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "修改建议"
                  })
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "First attempt: $ERRMSG."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "首先加载后缀不拼接'_napi'的模块名为'xxx'的so，如果加载失败会有该错误信息，$ERRMSG表示具体加载时的错误信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Second attempt: $ERRMSG."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "第二次加载后缀拼接'_napi'的模块名为'xxx_napi'的so，如果加载失败会有该错误信息，$ERRMSG表示具体加载时的错误信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "try to load abc file from xxx failed."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "第三次加载名字为'xxx'的abc文件，如果加载失败会有该错误信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "module xxx is not allowed to load in restricted runtime."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该模块不允许在受限运行时中使用，xxx表示模块名，建议用户删除该模块。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "module xxx is in blocklist, loading prohibited."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该模块不允许在当前extension下使用，xxx表示模块名，建议用户删除该模块。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口执行结果非预期",
      children: "接口执行结果非预期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "问题描述：接口执行结果非预期，日志显示occur exception need return。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分Node-API接口在调用结束前会进行检查，检查虚拟机中是否存在ArkTS异常。如果存在异常，则会打印出occur exception need return日志，并打印出检查点所在的行号，以及对应的Node-API接口名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解决此类问题有以下两种思路："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若该异常开发者不关心，可以选择直接清除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可直接使用Node-API接口napi_get_and_clear_last_exception，清理异常。调用时机：在打印occur exception need return日志的接口之前调用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将该异常继续向上抛到ArkTS层，在ArkTS层进行捕获。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发生异常时，可以选择走异常分支， 确保不再走多余的Native逻辑 ，直接返回到ArkTS层。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_value和napi_ref的生命周期有何区别",
      children: "napi_value和napi_ref的生命周期有何区别"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_value由HandleScope管理，一般开发者不需要自己加HandleScope（uv_queue_work的complete callback除外）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_ref由开发者自己管理，需要手动delete。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "node-api接口返回值不是napi_ok时如何排查定位",
      children: "Node-API接口返回值不是napi_ok时如何排查定位"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API接口正常执行后，会返回一个napi_ok的状态枚举值，若Node-API接口返回值不为napi_ok，可先参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi_status_introduction",
        children: "Node-API接口返回状态码介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是几个常见场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API接口执行前一般会进行入参校验，首先进行的是判空校验。在代码中体现为："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CHECK_ENV：env判空校验\nCHECK_ARG：其它入参判空校验\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "某些Node-API接口还有入参类型校验。比如napi_get_value_double接口是获取ArkTS number对应的C double值，首先就要保证的是：ArkTS value类型为number，因此可以看到相关校验。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RETURN_STATUS_IF_FALSE(env, NativeValue->TypeOf() == Native_NUMBER, napi_number_expected);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "还有一些接口会对其执行结果进行校验。比如napi_call_function这个接口，其功能是执行一个ArkTS Function，当ArkTS Function中出现异常时，Node-API将会返回napi_pending_exception的状态值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 接口内部实现，经校验可返回状态值\nauto resultValue = engine->CallFunction(NativeRecv, NativeFunc, NativeArgv, argc);\nRETURN_STATUS_IF_FALSE(env, resultValue != nullptr, napi_pending_exception)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "还有一些状态值需要根据相应Node-API接口具体分析：确认具体的状态值，分析这个状态值在什么情况下会返回，再排查具体出错原因。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_wrap如何保证被wrap的对象按期望顺序析构",
      children: "napi_wrap如何保证被wrap的对象按期望顺序析构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "问题：在使用napi_wrap把两个 C++ 对象包装成两个 JavaScript 对象的场景中，由于这两个 C++ 对象存在依赖关系，要求其中一个C++对象必须在另一个C++对象之前析构。然而，JavaScript 垃圾回收（GC）的时机不确定，直接在napi_wrap的finalize_cb回调里销毁 C++ 对象，没办法保证析构顺序符合要求。该如何保证两个C++对象析构的前后顺序？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考方案："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "先标记可释放状态，当A和B都为可释放状态时同时释放C++对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原理：将所有依赖对象的释放逻辑集中在最后一个被销毁的 ArkTS 对象的 finalize_cb 中处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现步骤："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在 jsObjA 的 finalize_cb 中标记 cppObjA 为待销毁（不立即释放）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在 jsObjB 的 finalize_cb 中标记 cppObjB 为待销毁（不立即释放）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当 jsObjA 和 jsObjB 均处于待销毁状态时，按顺序销毁 cppObjA 和 cppObjB。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct ObjectPair {\n    CppObjA* objA;\n    CppObjB* objB;\n    bool objADestroyedA = false;\n    bool objADestroyedB = false;\n};\n\n// jsObjA 的 finalize 回调\nvoid FinalizeA(napi_env env, void* data, void* hint) {\n    ObjectPair* pair = static_cast<ObjectPair*>(data);\n    pair->objADestroyedA = true;\n    if (pair->objADestroyedA && pair->objADestroyedB) {\n        delete pair->objA; // 确保先销毁 A\n        delete pair->objB; // 再销毁 B\n        delete pair;       // 释放包装结构\n    }\n}\n\n// jsObjB 的 finalize 回调\nvoid FinalizeB(napi_env env, void* data, void* hint) {\n    ObjectPair* pair = static_cast<ObjectPair*>(data);\n    pair->objADestroyedB = true;\n    if (pair->objADestroyedA && pair->objADestroyedB) {\n        delete pair->objA; // 确保先销毁 A\n        delete pair->objB; // 再销毁 B\n        delete pair;       // 释放包装结构\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_call_threadsafe_function回调任务不执行",
      children: "napi_call_threadsafe_function回调任务不执行"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "问题排查："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["原因一：napi_call_threadsafe_function函数调用返回值不为napi_ok。请确认调用napi_call_threadsafe_function相关函数的返回值是否都是napi_ok，若不是，请根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi_status_introduction",
        children: "Node-API接口返回状态码介绍"
      }), "排查返回值非napi_ok的原因。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原因二：env所在的ArkTS线程被阻塞。napi_call_threadsafe_function函数的回调将执行在env所在的ArkTS线程上，若ArkTS线程被阻塞，则线程安全函数回调不会被执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原因三：线程安全函数被重复初始化的uv_async_t句柄影响，导致任务不执行。若某个uv_async_t句柄被重新初始化，第一次初始化和重复初始化范围内所创建所有uv_async_t句柄将无法被uv访问。线程安全函数是基于uv_async_t机制实现，在该特殊场景下创建线程安全函数将失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用开发工具支撑cc代码快速进行node-api开发",
      children: "使用开发工具支撑C/C++代码快速进行Node-API开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS提供了丰富的Node-API接口示例。参考开发指南和示例工程，可以快速掌握Node-API模块开发流程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony-sig/aki",
        children: "AKI"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/napi_generator",
        children: "napi-generator"
      }), "等开发工具，辅助Node-API开发，降低学习难度并提高开发效率。"]
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