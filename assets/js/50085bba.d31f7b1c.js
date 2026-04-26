"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["657947"], {
431074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_development_standards_jsvm_guidelines_jsvm_guidelines_md_500_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-development-standards-jsvm-guidelines-jsvm-guidelines-md-500.json
var site_docs_coding_jsvm_jsvm_development_standards_jsvm_guidelines_jsvm_guidelines_md_500_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-development-standards/jsvm-guidelines/jsvm-guidelines","title":"JSVM-API使用规范","description":"生命周期管理","source":"@site/docs/coding/jsvm/jsvm-development-standards/jsvm-guidelines/jsvm-guidelines.md","sourceDirName":"coding/jsvm/jsvm-development-standards/jsvm-guidelines","slug":"/coding/jsvm/jsvm-development-standards/jsvm-guidelines/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-development-standards/jsvm-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"JSVM-API使用规范","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-guidelines","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API实现JS与C/C++语言交互开发流程","permalink":"/harmonyos-docs-site/coding/jsvm/use-jsvm-process/"},"next":{"title":"JSVM-API常见问题","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-development-standards/jsvm-frequently-questions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-development-standards/jsvm-guidelines/jsvm-guidelines.md


const frontMatter = {
	title: 'JSVM-API使用规范',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-guidelines',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'JSVM-API使用规范';

const assets = {

};



const toc = [{
  "value": "生命周期管理",
  "id": "生命周期管理",
  "level": 2
}, {
  "value": "多引擎实例上下文敏感",
  "id": "多引擎实例上下文敏感",
  "level": 2
}, {
  "value": "多线程共享引擎实例",
  "id": "多线程共享引擎实例",
  "level": 2
}, {
  "value": "获取JS传入参数及其数量",
  "id": "获取js传入参数及其数量",
  "level": 2
}, {
  "value": "异常处理",
  "id": "异常处理",
  "level": 2
}, {
  "value": "上下文绑定对象",
  "id": "上下文绑定对象",
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
        id: "jsvm-api使用规范",
        children: "JSVM-API使用规范"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期管理",
      children: "生命周期管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " 合理使用OH_JSVM_OpenHandleScope和OH_JSVM_CloseHandleScope管理JSVM_Value的生命周期，做到生命周期最小化，避免发生内存泄漏问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个JSVM_Value属于特定的HandleScope，HandleScope通过OH_JSVM_OpenHandleScope和OH_JSVM_CloseHandleScope来建立和关闭，HandleScope关闭后，所属的JSVM_Value就会自动释放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_Value必须在HandleScope打开后才可创建(Node-API无该限制)，否则会造成应用崩溃；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_Value不能在其对应的HandleScope关闭后使用，如需持久化持有，需调用OH_JSVM_CreateReference转化为JSVM_Ref；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scope(包括JSVM_VMScope、JSVM_EnvScope、JSVM_HandleScope)需逆序关闭，最先打开的Scope需最后关闭，否则可能造成应用崩溃；"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope关闭错误示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 未逆序关闭JSVM_VMScope，可能造成应用崩溃\nJSVM_VM vm;\nJSVM_CreateVMOptions options;\nOH_JSVM_CreateVM(&options, &vm);\n\nJSVM_VMScope vmScope1, vmScope2;\nOH_JSVM_OpenVMScope(vm, &vmScope1);\nOH_JSVM_OpenVMScope(vm, &vmScope2);\n\n// 正确顺序为先关闭vmScope2，再关闭vmScope1\nOH_JSVM_CloseVMScope(vm, vmScope1);\nOH_JSVM_CloseVMScope(vm, vmScope2);\nOH_JSVM_DestroyVM(vm);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "C++使用封装"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class HandleScopeWrapper {\n public:\n  HandleScopeWrapper(JSVM_Env env) : env(env) {\n    OH_JSVM_OpenHandleScope(env, &handleScope);\n  }\n\n  ~HandleScopeWrapper() {\n    OH_JSVM_CloseHandleScope(env, handleScope);\n  }\n\n  HandleScopeWrapper(const HandleScopeWrapper&) = delete;\n  HandleScopeWrapper& operator=(const HandleScopeWrapper&) = delete;\n  HandleScopeWrapper(HandleScopeWrapper&&) = delete;\n  void* operator new(size_t) = delete;\n  void* operator new[](size_t) = delete;\n\n protected:\n  JSVM_Env env;\n  JSVM_HandleScope handleScope;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 在for循环中频繁调用JSVM接口创建js对象时，要加handle_scope及时释放不再使用的资源。\n// 下面例子中，每次循环结束局部变量res的生命周期已结束，因此加scope及时释放其持有的js对象，防止内存泄漏\n// 每次for循环结束后，触发HandleScopeWrapper的析构函数，释放scope持有的js对象\nfor (int i = 0; i < 100000; i++)\n{\n    HandleScopeWrapper scope(env);\n    JSVM_Value res;\n    OH_JSVM_CreateObject(env, &res);\n    if (i == 1000) {\n        // break退出循环后会自动调用HandleScopeWrapper析构函数释放资源\n        break;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多引擎实例上下文敏感",
      children: "多引擎实例上下文敏感"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " 多引擎实例（VM）场景下，禁止通过JSVM-API跨引擎实例访问JS对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引擎实例是一个独立运行环境，JS对象创建访问等操作必须在同一个引擎实例中进行。若在不同引擎实例中操作同一个对象，可能会引发程序崩溃。引擎实例在接口中体现为JSVM_Env。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 线程1执行，在env1创建string对象，值为\"value1\"\nOH_JSVM_CreateStringUtf8(env1, \"value1\", JSVM_AUTO_LENGTH , &string);\n// 线程2执行，在env2创建object对象，并将上述的string对象设置到object对象中\nJSVM_Status status = OH_JSVM_CreateObject(env2, &object);\nif (status != JSVM_OK)\n{\n    return;\n}\n\nstatus = OH_JSVM_SetNamedProperty(env2, object, \"string1\", string);\nif (status != JSVM_OK)\n{\n    return;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所有的JS对象都隶属于具体的某一JSVM_Env，不可将env1的对象，设置到env2中的对象中。在env2中一旦访问到env1的对象，程序可能会发生崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多线程共享引擎实例",
      children: "多线程共享引擎实例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " 多线程同时使用同一个引擎实例的场景下，需要加锁使用。保证一个引擎实例在同一时刻只能在一个线程执行。多线程同一时刻同时使用引擎实例可能造成应用崩溃。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OH_JSVM_IsLocked的结果为", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "当前线程"
          })
        }), "是否持有引擎实例的锁，无需设置循环等待其他线程释放锁；"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_JSVM_AcquireLock在同一线程中嵌套使用不会造成死锁；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用OH_JSVM_ReleaseLock时需判断是否在最外层，避免同一线程中嵌套使用OH_JSVM_AcquireLock的场景下内层释放了整个线程的锁；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OH_JSVM_AcquireLock后需调用OH_JSVM_OpenHandleScope让引擎实例进入线程；OH_JSVM_ReleaseLock前需调用OH_JSVM_CloseHandleScope让引擎实例退出线程；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不同线程禁止嵌套使用引擎实例，如需临时切换线程使用引擎实例，请确保JSVM_Value已保存为JSVM_Ref，释放锁后对JSVM_Value将不可访问；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需注意资源获取的顺序为：锁 -> VMScope -> EnvScope -> HandleScope，资源释放的顺序正好相反，错误的顺序可能导致程序崩溃。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "C++使用封装"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class LockWrapper {\n public:\n  // 构造函数，获取锁、VMScope、EnvScope\n  LockWrapper(JSVM_Env env) : env(env) {\n    OH_JSVM_IsLocked(env, &isLocked);\n    if (!isLocked) {\n      OH_JSVM_AcquireLock(env);\n      OH_JSVM_GetVM(env, &vm);\n      OH_JSVM_OpenVMScope(vm, &vmScope);\n      OH_JSVM_OpenEnvScope(env, &envScope);\n    }\n  }\n\n  // 析构函数，释放EnvScope、VMScope、锁\n  ~LockWrapper() {\n    if (!isLocked) {\n      OH_JSVM_CloseEnvScope(env, envScope);\n      OH_JSVM_CloseVMScope(vm, vmScope);\n      OH_JSVM_ReleaseLock(env);\n    }\n  }\n\n  LockWrapper(const LockWrapper&) = delete;\n  LockWrapper& operator=(const LockWrapper&) = delete;\n  LockWrapper(LockWrapper&&) = delete;\n  void* operator new(size_t) = delete;\n  void* operator new[](size_t) = delete;\n\n private:\n  JSVM_Env env;\n  JSVM_EnvScope envScope;\n  JSVM_VMScope vmScope;\n  JSVM_VM vm;\n  bool isLocked;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 该用例演示了多线程中使用vm\n// t1线程先获取锁，并继续JSVM-API的调用\n// t2线程会在获取锁处阻塞，直到t1线程执行结束释放锁后，t2线程继续执行，调用JSVM-API接口\nstatic napi_value Add([[maybe_unused]] napi_env _env, [[maybe_unused]] napi_callback_info _info) {\n    static JSVM_VM vm;\n    static JSVM_Env env;\n    static int aa = 0;\n    if (aa == 0) {\n        OH_JSVM_Init(nullptr);\n        aa++;\n        // create vm\n        JSVM_CreateVMOptions options;\n        memset(&options, 0, sizeof(options));\n        OH_JSVM_CreateVM(&options, &vm);\n        // create env\n        OH_JSVM_CreateEnv(vm, 0, nullptr, &env);\n    }\n\n    std::thread t1([]() {\n        LockWrapper lock(env);\n        JSVM_HandleScope handleScope;\n        OH_JSVM_OpenHandleScope(env, &handleScope);\n        JSVM_Value value;\n        JSVM_Status rst = OH_JSVM_CreateInt32(env, 32, &value); // 32: numerical value\n        if (rst == JSVM_OK) {\n            OH_LOG_INFO(LOG_APP, \"JSVM:t1 OH_JSVM_CreateInt32 suc\");\n        } else {\n            OH_LOG_ERROR(LOG_APP, \"JSVM:t1 OH_JSVM_CreateInt32 fail\");\n        }\n        int32_t num1 = 0;\n        OH_JSVM_GetValueInt32(env, value, &num1);\n        OH_LOG_INFO(LOG_APP, \"JSVM:t1 num1 = %{public}d\", num1);\n        OH_JSVM_CloseHandleScope(env, handleScope);\n    });\n    std::thread t2([]() {\n        LockWrapper lock(env);\n        JSVM_HandleScope handleScope;\n        OH_JSVM_OpenHandleScope(env, &handleScope);\n        JSVM_Value value;\n        JSVM_Status rst = OH_JSVM_CreateInt32(env, 32, &value); // 32: numerical value\n        if (rst == JSVM_OK) {\n            OH_LOG_INFO(LOG_APP, \"JSVM:t2 OH_JSVM_CreateInt32 suc\");\n        } else {\n            OH_LOG_ERROR(LOG_APP, \"JSVM:t2 OH_JSVM_CreateInt32 fail\");\n        }\n        int32_t num1 = 0;\n        OH_JSVM_GetValueInt32(env, value, &num1);\n        OH_LOG_INFO(LOG_APP, \"JSVM:t2 num1 = %{public}d\", num1);\n        OH_JSVM_CloseHandleScope(env, handleScope);\n    });\n    t1.detach();\n    t2.detach();\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取js传入参数及其数量",
      children: "获取JS传入参数及其数量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), " 当传入OH_JSVM_GetCbInfo的argv不为nullptr时，argv的长度必须大于等于传入argc声明的大小。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当argv不为nullptr时，OH_JSVM_GetCbInfo会根据argc声明的数量将JS实际传入的参数写入argv。如果argc小于等于实际JS传入参数的数量，该接口仅会将声明的argc数量的参数写入argv；而当argc大于实际参数数量时，该接口会在argv的尾部填充undefined。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static JSVM_Value IncorrectDemo1(JSVM_Env env, JSVM_CallbackInfo info) {\n    // argc 未正确的初始化，其值为不确定的随机值，导致 argv 的长度可能小于 argc 声明的数量，数据越界。\n    size_t argc;\n    JSVM_Value argv[10] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    return nullptr;\n}\n\nstatic JSVM_Value IncorrectDemo2(JSVM_Env env, JSVM_CallbackInfo info) {\n    // argc 声明的数量大于 argv 实际初始化的长度，导致 OH_JSVM_GetCbInfo 接口在写入 argv 时数据越界。\n    size_t argc = 5;\n    JSVM_Value argv[3] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正确示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static JSVM_Value GetArgvDemo1(napi_env env, JSVM_CallbackInfo info) {\n    size_t argc = 0;\n    // argv 传入 nullptr 来获取传入参数真实数量\n    OH_JSVM_GetCbInfo(env, info, &argc, nullptr, nullptr, nullptr);\n    // JS 传入参数为0，不执行后续逻辑\n    if (argc == 0) {\n        return nullptr;\n    }\n    // 创建数组用以获取JS传入的参数\n    JSVM_Value* argv = new JSVM_Value[argc];\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    // 业务代码\n    // ... ...\n    // argv 为 new 创建的对象，在使用完成后手动释放\n    delete[] argv;\n    return nullptr;\n}\n\nstatic JSVM_Value GetArgvDemo2(napi_env env, JSVM_CallbackInfo info) {\n    size_t argc = 2;\n    JSVM_Value* argv[2] = {nullptr};\n    // OH_JSVM_GetCbInfo 会向 argv 中写入 argc 个 JS 传入参数或 undefined\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    // 业务代码\n    // ... ...\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异常处理",
      children: "异常处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【建议】"
        })
      }), " JSVM-API接口调用发生异常需要及时处理，不能遗漏异常到后续逻辑，否则程序可能发生不可预期行为。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据主从类型，异常处理可以分为两类："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "JSVM 执行 C++ 回调函数（JS主，Native从）时发生 C++ 异常，需往 JSVM 中抛出异常，下面用例描述了3种情况下 C++ 回调函数的写法。需要注意的是，回调函数中调用JSVM-API失败，如要向JSVM中抛异常，需保证JSVM中无等待处理的异常，也可以不抛出异常，JS的try-catch块可以捕获回调函数调用API失败产生的JS异常，见NativeFunctionExceptionDemo3。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// JSVM主， Native从\nvoid DoSomething() {\n    throw(\"Do something failed\");\n}\n\n// Demo1: C++捕获到异常，抛出异常到JSVM中\nJSVM_Value NativeFunctionExceptionDemo1(JSVM_Env env, JSVM_CallbackInfo info) {\n    try {\n        DoSomething();\n    } catch (const char *ex) {\n        OH_JSVM_ThrowError(env, nullptr, ex);\n        return nullptr;\n    }\n    return nullptr;\n}\n\n// Demo2: JSVM-API调用失败，抛出异常到JSVM中\nJSVM_Value NativeFunctionExceptionDemo2(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_Value JSBool = nullptr;\n    bool value = false;\n    auto status = OH_JSVM_GetValueBool(env, JSBool, &value);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"Get bool value failed\");\n        return nullptr;\n    }\n    return nullptr;\n}\n\n// Demo3：JSVM-API调用失败且在调用过程中已向JSVM中添加等待处理的异常，则无需再向JSVM中抛出异常\nJSVM_Value NativeFunctionExceptionDemo3(JSVM_Env env, JSVM_CallbackInfo info) {\n    std::string sourcecodestr = R\"JS(\n        throw Error('Error throw from js');\n    )JS\";\n    JSVM_Value sourcecodevalue = nullptr;\n    JSVM_CALL(OH_JSVM_CreateStringUtf8(env, sourcecodestr.c_str(), sourcecodestr.size(), &sourcecodevalue));\n    JSVM_Script script;\n    auto status = OH_JSVM_CompileScript(env, sourcecodevalue, nullptr, 0, true, nullptr, &script);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"compile script failed\");\n        return nullptr;\n    }\n    JSVM_Value result;\n    // 执行JS脚本，执行过程中抛出JS异常\n    status = OH_JSVM_RunScript(env, script, &result);\n    if (status != JSVM_OK) {\n        bool isPending = false;\n        // 如果已有异常，则无需再向JSVM中抛出异常；\n        // 如需处理并抛出新异常，需先处理JSVM中等待的异常\n        if (JSVM_OK == OH_JSVM_IsExceptionPending((env), &isPending) && isPending) {\n            return nullptr;\n        }\n        OH_JSVM_ThrowError(env, nullptr, \"Runscript failed\");\n        return nullptr;\n    }\n    return nullptr;\n}\n\n// 绑定NativeFunction到JSVM中，省略\nstd::string sourcecodestr = R\"JS(\n    // console.log需用户实现\n    try {\n        // 调用Native函数\n        NativeFunction()\n    } catch (e) {\n        // 处理Native中产生的异常\n        consolelog(e.message)\n    }\n)JS\";\nJSVM_Value sourcecodevalue = nullptr;\nJSVM_CALL(OH_JSVM_CreateStringUtf8(env, sourcecodestr.c_str(), sourcecodestr.size(), &sourcecodevalue));\nJSVM_Script script;\nJSVM_CALL(OH_JSVM_CompileScript(env, sourcecodevalue, nullptr, 0, true, nullptr, &script));\nJSVM_Value result;\n// 执行JS脚本，JS调用Native方法\nJSVM_CALL(OH_JSVM_RunScript(env, script, &result));\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "C++调用JSVM-API（Native主，JS从）失败，需清理JSVM中等待处理的异常，避免影响后续JSVM-API的执行，并设置C++异常处理分支（或抛出C++异常）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::string sourcecodestr = R\"JS(\n    throw Error('Error throw from js');\n)JS\";\nJSVM_Value sourcecodevalue = nullptr;\nOH_JSVM_CreateStringUtf8(env, sourcecodestr.c_str(), sourcecodestr.size(), &sourcecodevalue);\nJSVM_Script script;\nauto status = OH_JSVM_CompileScript(env, sourcecodevalue, nullptr, 0, true, nullptr, &script);\n// 异常处理分支\nif (status != JSVM_OK) {\n    JSVM_Value error = nullptr;\n    // 获取并清理异常\n    JSVM_CALL(OH_JSVM_GetAndClearLastException((env), &error));\n    // 处理异常，如打印信息，省略\n    // 抛出 C++ 异常或结束函数执行\n    throw \"JS Compile Error\";\n}\nJSVM_Value result;\n// 执行JS脚本，执行过程中抛出JS异常\nstatus = OH_JSVM_RunScript(env, script, &result);\n\n// 异常分支处理\nif (status != JSVM_OK) {\n    JSVM_Value error = nullptr;\n    // 获取并清理异常\n    JSVM_CALL(OH_JSVM_GetAndClearLastException((env), &error));\n    // 处理异常，如打印信息，省略\n    // 抛出 C++ 异常或结束函数执行\n    throw \"JS RunScript Error\";\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "上下文绑定对象",
      children: "上下文绑定对象"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "【规则】"
        })
      }), "：调用JSVM-API生成的JS函数、对象需绑定到上下文中才能从JS侧访问，OH_JSVM_CreateFunction接口中的const char *参数为创建函数的属性name，不代表上下文中指向该函数的名称。调用JSVM-API生成的类、对象同理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value JSFunc = nullptr;\nconst char *name = \"NativeFunction\";\nJSVM_CallbackStruct cb = {NativeFunction, nullptr};\n// 创建JS函数，该函数的属性 \"name\" 为 \"NativeFunction\"\nOH_JSVM_CreateFunction(env, name, strlen(name), &cb, &JSFunc);\n// 绑定函数到上下文\n// 获取上下文的global对象\nJSVM_Value global = nullptr;\nOH_JSVM_GetGlobal(env, &global);\n// 创建JS字符串\"FunctionNameInJSContext\"\nJSVM_Value key = nullptr;\nOH_JSVM_CreateStringLatin1(env, \"FunctionNameInJSContext\", JSVM_AUTO_LENGTH, &key);\n// 设置global的属性\"FunctionNameInJSContext\"为JSFunc，将函数绑定到上下文中\nOH_JSVM_SetProperty(env, global, key, JSFunc);\n// 在JS中调用函数\nstd::string sourcecodestr = R\"JS(\n    // console.log需用户实现\n    FunctionNameInJSContext() // 调用成功\n    consolelog(FunctionNameInJSContext.name) // 打印 \"NativeFunction\"\n    try {\n        NativeFunction() // 无法找到该函数，抛出异常\n    } catch (e) {\n        consolelog(e.message)\n    }\n)JS\";\n"
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