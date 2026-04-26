"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["796822"], {
45835(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_about_crash_use_napi_about_crash_md_c74_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-napi-about-crash-use-napi-about-crash-md-c74.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_about_crash_use_napi_about_crash_md_c74_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-crash/use-napi-about-crash","title":"使用Node-API接口产生的异常日志/崩溃分析","description":"以下维测手段多数依赖于ArkTS运行时的多线程检测能力，因此建议在调试前启用此功能。启用方法参考文档分析CppCrash（进程崩溃）。","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-crash/use-napi-about-crash.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-crash","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-crash/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-crash/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"使用Node-API接口产生的异常日志/崩溃分析","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-crash","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用扩展的Node-API接口创建和销毁临界区作用域及访问字符串内容","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-critical/"},"next":{"title":"使用Node-API调用返回值为promise的ArkTS方法","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-method-promise/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-crash/use-napi-about-crash.md


const frontMatter = {
	title: '使用Node-API接口产生的异常日志/崩溃分析',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-crash',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口产生的异常日志/崩溃分析';

const assets = {

};



const toc = [{
  "value": "数据在使用时，与创建该数据时所使用的env不一致",
  "id": "数据在使用时与创建该数据时所使用的env不一致",
  "level": 2
}, {
  "value": "各问题场景的关键日志",
  "id": "各问题场景的关键日志",
  "level": 3
}, {
  "value": "案例及示例代码",
  "id": "案例及示例代码",
  "level": 3
}, {
  "value": "跨线程调用",
  "id": "跨线程调用",
  "level": 2
}, {
  "value": "覆盖范围及关键日志",
  "id": "覆盖范围及关键日志",
  "level": 3
}, {
  "value": "案例及示例代码",
  "id": "案例及示例代码-1",
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
    img: "img",
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
        id: "使用node-api接口产生的异常日志崩溃分析",
        children: "使用Node-API接口产生的异常日志/崩溃分析"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下维测手段多数依赖于ArkTS运行时的多线程检测能力，因此建议在调试前启用此功能。启用方法参考文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-multi-thread-check",
        children: "分析CppCrash（进程崩溃）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若无特殊说明，本章节描述的维测手段会在启用ArkTS运行时多线程检测开关的情况下，立即中断进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据在使用时与创建该数据时所使用的env不一致",
      children: "数据在使用时，与创建该数据时所使用的env不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "各问题场景的关键日志",
      children: "各问题场景的关键日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该维测手段主要包含以下两种场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用napi方法的入参napi_env与创建napi数据结构时所使用的napi_env不一致。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "关键日志"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "param env not equal to its owner."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用napi方法的入参napi_env与创建napi数据结构时所使用的napi_env一致，但原始napi_env已释放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "关键日志"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "除线程安全函数相关方法外，关键日志如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "owner env has been destroyed, owner id: <owner id> , current env id: <current id>."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "线程安全函数相关方法，关键日志如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "current tsfn was created by dead env, owner id: <owner id>, current env id: <current id>"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该维测手段当前的覆盖范围如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_get_reference_value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_delete_reference*"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_queue_async_work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_queue_async_work_with_qos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_cancel_async_work"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_call_threadsafe_function*"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_release_threadsafe_function*"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具有*标志的接口，仅能触发第二种场景的维测信息，不含有*标志的接口，能触发以上两种场景的维测信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "案例及示例代码",
      children: "案例及示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(313675)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的代码仅用于构造异常场景，触发异常分支的DFX日志。在充分理解其意图前，请勿将其应用到业务场景中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基础工具类"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义一个工具类，便于在后续构造两种异常场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define CHECK(cond)                                                 \\\n    do {                                                            \\\n        if (!(cond)) {                                                 \\\n            OH_LOG_FATAL(LOG_APP, \"Failed to check `\" #cond \"`\");   \\\n            std::abort();                                           \\\n        }                                                           \\\n    } while(0)\n#define CHECK_EQ(lhs, rhs) CHECK(lhs == rhs)\n#define CHECK_NE(lhs, rhs) CHECK(lhs != rhs)\n#define CHECK_NOT_NULL(val) CHECK(val != nullptr)\n\n#define STRICT_NAPI_CALL(call)                                      \\\n    do {                                                            \\\n        napi_status ret = (call);                                   \\\n        if (ret != napi_ok) {                                       \\\n            OH_LOG_FATAL(LOG_APP, \"Failed to execute `\" #call \"`, \" \\\n                \"return code is: %{public}d\", ret);                 \\\n            std::abort();                                           \\\n        }                                                           \\\n    } while(0)\n\n\nclass CallbackInfo {\npublic:\n    CallbackInfo(napi_env env, napi_callback_info info)\n        : env_(env)\n    {\n        napi_get_cb_info(env, info, &argc_, nullptr, &thisVar_, &data_);\n        if (argc_ > 0) {\n            argv_ = new napi_value[argc_];\n            CHECK_NOT_NULL(argv_);\n            memset(argv_, 0, sizeof(argv_));\n            napi_get_cb_info(env, info, &argc_, argv_, nullptr, nullptr);\n        }\n    }\n    ~CallbackInfo()\n    {\n        if (argc_ > 0) {\n            delete[] argv_;\n            argv_ = nullptr;\n        }\n    }\n\n    inline size_t GetArgc() const { return argc_; }\n    inline napi_value* GetArgs() const { return argv_; }\n\n    inline napi_value GetArg(size_t index) const\n    {\n        if (index >= argc_) {\n            napi_value undefined = nullptr;\n            napi_get_undefined(env_, &undefined);\n            return undefined;\n        }\n        return argv_[index];\n    }\n    inline napi_value operator[](size_t index) const\n    {\n        return GetArg(index);\n    }\n\nprivate:\n    napi_env env_ { nullptr };\n    size_t argc_ { 0 };\n    napi_value* argv_ { nullptr };\n    napi_value thisVar_ { nullptr };\n    void* data_ { nullptr };\n};\n\n// 构造相同（或不同）地址的napi_env，以便能触发不同的DFX信息\nclass EngineProxy {\npublic:\n    EngineProxy()\n    {\n        STRICT_NAPI_CALL(napi_create_ark_runtime(&env_));\n        // 5: 使napi_env地址复用更容易\n        for (int i = 0; i < 5; i++) {\n            RecreateOnce();\n        }\n    }\n\n    ~EngineProxy()\n    {\n        STRICT_NAPI_CALL(napi_destroy_ark_runtime(&env_));\n    }\n\n    inline bool RecreateSame()\n    {\n        return Recreate(true);\n    }\n\n    inline bool RecreateDiff()\n    {\n        return Recreate(false);\n    }\n\n    inline operator napi_env() const\n    {\n        return env_;\n    }\n\n    // 重新创建napi_env，直到地址与原始env相同（或不同）\n    bool Recreate(bool requireSame)\n    {\n        const char* recreateTypeTag = requireSame ? \"same\" : \"different\";\n        napi_env old = env_;\n        for (int i = 0; i < MAX_RETRY_TIMES; i++) {\n            if (RecreateOnce(old) == requireSame) {\n                OH_LOG_INFO(LOG_APP, \"Succeed to recreate env with %{public}s pointer \"\n                    \"address after retried %{public}d times.\", recreateTypeTag, i);\n                return true;\n            }\n        }\n        OH_LOG_ERROR(LOG_APP, \"Failed to recreate env with %{public}s pointer \"\n            \"address after retried %{public}d times.\", recreateTypeTag, MAX_RETRY_TIMES);\n        return false;\n    }\n\nprivate:\n    // 重新创建napi_env，返回新地址是否与原地址相同\n    bool RecreateOnce(napi_env old = nullptr)\n    {\n        STRICT_NAPI_CALL(napi_destroy_ark_runtime(&env_));\n        STRICT_NAPI_CALL(napi_create_ark_runtime(&env_));\n        return env_ == old;\n    }\n\n    napi_env env_ {nullptr};\n    \n    constexpr static int MAX_RETRY_TIMES = 1 << 8;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_ref相关接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_get_reference_value 和 napi_delete_reference 的示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 接口声明 index.d.ts\n * const triggerDFXGetRef: (samePtr: boolean) => void;\n */\nnapi_value TriggerDFXGetRef(napi_env env, napi_callback_info cbinfo)\n{\n    CallbackInfo info(env, cbinfo);\n    bool same = true;\n    STRICT_NAPI_CALL(napi_get_value_bool(env, info[0], &same));\n    std::thread([](bool same) {\n        EngineProxy localEnv;\n        napi_value obj = nullptr;\n        STRICT_NAPI_CALL(napi_create_object(localEnv, &obj));\n        napi_ref ref = nullptr;\n        // napi_create_reference为js对象创建了强引用，需要使用napi_delete_reference主动销毁，否则会导致js对象无法被回收，造成内存泄漏\n        napi_create_reference(localEnv, obj, 1, &ref);\n        if (!localEnv.Recreate(same)) {\n            if (ref != nullptr) {\n                napi_delete_reference(localEnv, ref);\n            }\n            return;\n        }\n        napi_value result = nullptr;\n        napi_get_reference_value(localEnv, ref, &result);\n        if (ref != nullptr) {\n            napi_delete_reference(localEnv, ref);\n        }\n    }, same).detach();\n    return nullptr;\n}\n\n/*\n * 接口声明 index.d.ts\n * const triggerDFXDelRef: () => void;\n */\nnapi_value TriggerDFXDelRef(napi_env, napi_callback_info info)\n{\n    std::thread([]() {\n        EngineProxy localEnv;\n        napi_value obj = nullptr;\n        STRICT_NAPI_CALL(napi_create_object(localEnv, &obj));\n        napi_ref ref = nullptr;\n        // 在使用完成后调用napi_delete_reference来释放引用，避免内存泄露\n        napi_create_reference(localEnv, obj, 1, &ref);\n        if (!localEnv.RecreateSame()) {\n            if (ref != nullptr) {\n                napi_delete_reference(localEnv, ref);\n            }\n            return;\n        };\n        if (ref != nullptr) {\n            napi_delete_reference(localEnv, ref);\n        }\n    }).detach();\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_async_work相关接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_queue_async_work、napi_queue_async_work_with_qos 和 napi_cancel_async_work 的示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 宏 EXPAND_ASYNC_WORK_CASE 将为 op 提供如下变量\n * @variable napi_env localEnv\n * @variable napi_async_work work\n */\n#define EXPAND_ASYNC_WORK_CASE(name, op)                                           \\\nnapi_value name(napi_env env, napi_callback_info cbinfo)                           \\\n{                                                                                  \\\n    CallbackInfo info(env, cbinfo);                                                \\\n    bool same = true;                                                              \\\n    STRICT_NAPI_CALL(napi_get_value_bool(env, info[0], &same));                    \\\n    std::thread([](bool same) {                                                    \\\n        EngineProxy localEnv;                                                      \\\n        napi_async_work work = nullptr;                                            \\\n        {                                                                          \\\n            napi_value taskName = nullptr;                                         \\\n            napi_create_string_utf8(localEnv, #name, NAPI_AUTO_LENGTH, &taskName); \\\n            /* 不建议使用空的 execute 回调创建 napi_async_work */                    \\\n            /* 此处可能出现内存泄漏，仅为复现 dfx 维测 */                            \\\n            napi_create_async_work(localEnv, nullptr, taskName,                    \\\n                [](napi_env, void*) {}, [](napi_env, napi_status, void* ) {},      \\\n                nullptr, &work);                                                   \\\n            if (!localEnv.Recreate(same)) {                                        \\\n                if (work != nullptr) {                                             \\\n                    napi_delete_async_work(localEnv, work);                        \\\n                }                                                                  \\\n                return;                                                            \\\n            }                                                                      \\\n        }                                                                          \\\n        (op);                                                                      \\\n        if (work != nullptr) {                                                     \\\n            napi_delete_async_work(localEnv, work);                                \\\n        }                                                                          \\\n    }, same).detach();                                                             \\\n    return nullptr;                                                                \\\n}\n\n/*\n * 接口声明 index.d.ts\n * const triggerDFXQueueWork: (samePtr: boolean) => void;\n * const triggerDFXQueueWorkWithQos: (samePtr: boolean) => void;\n * const triggerDFXCancelWork: (samePtr: boolean) => void;\n */\nEXPAND_ASYNC_WORK_CASE(TriggerDFXQueueWork,\n    napi_queue_async_work(localEnv, work))\nEXPAND_ASYNC_WORK_CASE(TriggerDFXQueueWorkWithQos,\n    napi_queue_async_work_with_qos(localEnv, work, napi_qos_default))\nEXPAND_ASYNC_WORK_CASE(TriggerDFXCancelWork,\n    napi_cancel_async_work(localEnv, work))\n\n#undef EXPAND_ASYNC_WORK_CASE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_threadsafe_function相关接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_call_threadsafe_function 和 napi_release_threadsafe_function 的示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 宏 EXPAND_THREADSAFE_FUNCTION_CASE 将为 op 提供如下变量\n * @variable napi_env localEnv\n * @variable napi_threadsafe_function tsfn\n */\n#define EXPAND_THREADSAFE_FUNCTION_CASE(name, op)                                       \\\n    napi_value name(napi_env, napi_callback_info info) {                                \\\n        std::thread([]() {                                                              \\\n            EngineProxy localEnv;                                                       \\\n            napi_threadsafe_function tsfn = nullptr;                                    \\\n            {                                                                           \\\n                napi_value taskName = nullptr;                                          \\\n                napi_create_string_utf8(localEnv, \"Test\", NAPI_AUTO_LENGTH, &taskName); \\\n                // napi_create_threadsafe_function创建线程安全函数，任务执行完成后，      \\\n                // 需调用napi_release_threadsafe_function释放\n                napi_create_threadsafe_function(                                        \\\n                    localEnv, nullptr, nullptr, taskName, 0, 1, nullptr,                \\\n                    [](napi_env, void *, void *) {}, nullptr,                           \\\n                    [](napi_env, napi_value, void *, void *) {}, &tsfn);                \\\n                if (status != napi_ok) {                                                \\\n                    OH_INFO_ERROR(LOG_APP,\"napi_create_threadsafe_function failed\");    \\\n                    return nullptr;                                                     \\\n                }                                                                       \\\n                if (!localEnv.RecreateSame()) {                                         \\\n                    return;                                                             \\\n                };                                                                      \\\n            }                                                                           \\\n            (op);                                                                       \\\n        }).detach();                                                                    \\\n        return nullptr;                                                                 \\\n    }\n\n/*\n * 接口声明 index.d.ts\n * const triggerDFXTsfnCall: () => void;\n * const triggerDFXTsfnRelease: () => void;\n */\nEXPAND_THREADSAFE_FUNCTION_CASE(TriggerDFXTsfnCall,\n    napi_call_threadsafe_function(tsfn, nullptr, napi_tsfn_nonblocking))\nEXPAND_THREADSAFE_FUNCTION_CASE(TriggerDFXTsfnRelease,\n    napi_release_threadsafe_function(tsfn, napi_tsfn_release))\n\n#undef EXPAND_THREADSAFE_FUNCTION_CASE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨线程调用",
      children: "跨线程调用"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "覆盖范围及关键日志",
      children: "覆盖范围及关键日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "大多数napi接口都不是多线程安全的，因此为这些错误用法额外增加了定位手段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若无特殊说明，本章节描述的维测手段会在启用ArkTS运行时多线程检测开关后，立即中断进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "关键日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "current napi interface cannot run in multi-thread, thread id: <env tid>, current thread id: <current tid>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该维测手段覆盖范围如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_add_env_cleanup_hook*"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_remove_env_cleanup_hook*"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_add_async_cleanup_hook"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_set_instance_data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_get_instance_data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*：具有该标志的接口，在维测触发的情况下，仅打印带有调用栈信息的ERROR日志，并不会中断进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "案例及示例代码-1",
      children: "案例及示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(607454)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的代码仅用于构造异常场景，触发异常分支的DFX日志。在充分理解其意图前，请勿将其应用到业务场景中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "env_cleanup_hook相关接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_add_env_cleanup_hook 和 napi_remove_env_cleanup_hook 的示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void EnvCleanUpCallback(void *arg) {\n    char* data = reinterpret_cast<char *>(arg);\n    delete data;\n}\n\n/*\n * 接口声明 index.d.ts\n * const triggerDFXClnAddXT: () => void;\n */\nnapi_value TriggerDFXClnAddXT(napi_env env, napi_callback_info info)\n{\n    char* data = new char;\n    CHECK_NOT_NULL(data);\n    *data = '\\0';\n    std::thread([](napi_env env, char* data) {\n        napi_add_env_cleanup_hook(env, EnvCleanUpCallback, reinterpret_cast<void *>(data));\n    }, env, data).join();\n    napi_remove_env_cleanup_hook(env, EnvCleanUpCallback, reinterpret_cast<void *>(data));\n    delete data;\n    return nullptr;\n}\n\n/*\n * 接口声明 index.d.ts\n * const triggerDFXClnAddMT: () => void;\n */\nnapi_value TriggerDFXClnAddMT(napi_env env, napi_callback_info info)\n{\n    char* data = new char;\n    CHECK_NOT_NULL(data);\n    *data = '\\0';\n    napi_add_env_cleanup_hook(env, EnvCleanUpCallback, reinterpret_cast<void *>(data));\n    napi_add_env_cleanup_hook(env, EnvCleanUpCallback, reinterpret_cast<void *>(data));\n    napi_remove_env_cleanup_hook(env, EnvCleanUpCallback, reinterpret_cast<void *>(data));\n    delete data;\n    return nullptr;\n}\n\n/*\n * 接口声明 index.d.ts\n * const triggerDFXClnRmXT: () => void;\n */\nnapi_value TriggerDFXClnRmXT(napi_env env, napi_callback_info info)\n{\n    char* data = new char;\n    CHECK_NOT_NULL(data);\n    *data = '\\0';\n    napi_add_env_cleanup_hook(env, EnvCleanUpCallback, reinterpret_cast<void *>(data));\n    std::thread([](napi_env env, char* data) {\n        napi_remove_env_cleanup_hook(env, EnvCleanUpCallback, reinterpret_cast<void *>(data));\n        delete data;\n    }, env, data).join();\n    return nullptr;\n}\n\n/*\n * 接口声明 index.d.ts\n * const triggerDFXClnRmMT: () => void;\n */\nnapi_value TriggerDFXClnRmMT(napi_env env, napi_callback_info info)\n{\n    char* data = new char;\n    CHECK_NOT_NULL(data);\n    *data = '\\0';\n    napi_add_env_cleanup_hook(env, EnvCleanUpCallback, reinterpret_cast<void *>(data));\n    napi_remove_env_cleanup_hook(env, EnvCleanUpCallback, reinterpret_cast<void *>(data));\n    // 解注册使用的参数与注册时的一致性，比重复解注册更值得关注\n    napi_remove_env_cleanup_hook(env, EnvCleanUpCallback, reinterpret_cast<void *>(data));\n    delete data;\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "async_cleanup_hook相关接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_add_async_cleanup_hook示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void AsyncCleanupCallback(napi_async_cleanup_hook_handle handle, void *)\n{\n    napi_remove_async_cleanup_hook(handle);\n}\n\n/*\n * 接口声明 index.d.ts\n * const triggerDFXAsyncAddXT: () => void;\n */\nnapi_value TriggerDFXAsyncAddXT(napi_env env, napi_callback_info info)\n{\n    std::thread([](napi_env env) {\n        napi_add_async_cleanup_hook(env, AsyncCleanupCallback, nullptr, nullptr);\n    }, env).join();\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "instance_data相关接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_set_instance_data、napi_get_instance_data示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 接口声明 index.d.ts\n * const triggerDFXInsSetXT: () => void;\n */\nnapi_value TriggerDFXInsSetXT(napi_env env, napi_callback_info info)\n{\n    std::thread([](napi_env env) {\n        napi_set_instance_data(env, nullptr, [](napi_env, void *, void *) {}, nullptr);\n    }, env).join();\n    return nullptr;\n}\n\n/*\n * 接口声明 index.d.ts\n * const triggerDFXInsGetXT: () => void;\n */\nnapi_value TriggerDFXInsGetXT(napi_env env, napi_callback_info info)\n{\n    std::thread([](napi_env env) {\n        void *data = nullptr;\n        napi_get_instance_data(env, &data);\n    }, env).join();\n    return nullptr;\n}\n"
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
607454(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
313675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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