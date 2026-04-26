"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["27371"], {
698282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_error_use_napi_about_error_md_5d0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-error-use-napi-about-error-md-5d0.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_error_use_napi_about_error_md_5d0_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-error/use-napi-about-error","title":"使用Node-API接口进行错误处理开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-error/use-napi-about-error.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-error","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-error/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-error/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"使用Node-API接口进行错误处理开发","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-error","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行Date相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-date/"},"next":{"title":"使用Node-API接口关联数据，使其生命周期与当前环境的生命周期相关联","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-environmental-life-cycle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-error/use-napi-about-error.md


const frontMatter = {
	title: '使用Node-API接口进行错误处理开发',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-error',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行错误处理开发';

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
  "value": "napi_get_last_error_info",
  "id": "napi_get_last_error_info",
  "level": 3
}, {
  "value": "napi_create_type_error",
  "id": "napi_create_type_error",
  "level": 3
}, {
  "value": "napi_create_range_error",
  "id": "napi_create_range_error",
  "level": 3
}, {
  "value": "napi_create_error",
  "id": "napi_create_error",
  "level": 3
}, {
  "value": "napi_throw",
  "id": "napi_throw",
  "level": 3
}, {
  "value": "napi_throw_error",
  "id": "napi_throw_error",
  "level": 3
}, {
  "value": "napi_throw_business_error",
  "id": "napi_throw_business_error",
  "level": 3
}, {
  "value": "napi_throw_type_error",
  "id": "napi_throw_type_error",
  "level": 3
}, {
  "value": "napi_throw_range_error",
  "id": "napi_throw_range_error",
  "level": 3
}, {
  "value": "napi_is_error",
  "id": "napi_is_error",
  "level": 3
}, {
  "value": "napi_get_and_clear_last_exception",
  "id": "napi_get_and_clear_last_exception",
  "level": 3
}, {
  "value": "napi_is_exception_pending",
  "id": "napi_is_exception_pending",
  "level": 3
}, {
  "value": "napi_fatal_error",
  "id": "napi_fatal_error",
  "level": 3
}, {
  "value": "napi_fatal_exception",
  "id": "napi_fatal_exception",
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
        id: "使用node-api接口进行错误处理开发",
        children: "使用Node-API接口进行错误处理开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API接口进行错误处理，使得在Node-API模块中能够更好地管理和响应错误情况。通过合理使用这些函数，可以提高模块的稳定性和可靠性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS编程中，异常和错误是常见的概念。异常表示发生了某种意外情况，而错误则指示程序无法正确执行某些操作。Node-API提供了一系列方法来帮助开发者在Node-API模块中处理ArkTS中的异常和错误。下面是一些基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "异常（Exception）"
          })
        }), "：在程序执行过程中可能会出现的意外情况，可以是语法错误、运行时错误或逻辑错误，例如除以零或对未定义变量的操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "错误（Error）"
          })
        }), "：表示程序无法顺利执行某些操作，可以是由底层系统、API函数或开发者自定义的。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "类型错误（Type Error）"
          })
        }), "：表示操作或值的类型不符合预期，通常是由错误的数据类型导致的。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "范围错误（Range Error）"
          })
        }), "：表示一个值不在预期的范围内，例如对数组长度之外的索引进行访问。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些基本概念在异常和错误处理中非常重要，开发者需要通过适当的方法来捕获、处理或向用户报告这些异常和错误，以确保程序的稳定性和正确性。Node-API提供的方法可以帮助开发者在Node-API模块中处理ArkTS中的异常和错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi#%E5%B7%B2%E4%BB%8Enode-api%E7%BB%84%E4%BB%B6%E6%A0%87%E5%87%86%E5%BA%93%E4%B8%AD%E5%AF%BC%E5%87%BA%E7%9A%84%E7%AC%A6%E5%8F%B7%E5%88%97%E8%A1%A8",
        children: "Node-API"
      }), "接口主要用于与ArkTS交互时处理错误和异常情况。其使用场景如下："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_error、napi_create_type_error、napi_create_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在C/C++中需要创建一个错误对象时，可以使用这些函数。创建的错误对象可以使用napi_throw抛出到ArkTS。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当在C/C++中出现了错误或异常情况时，通过使用napi_create_error或napi_get_last_error_info方法创建或获取ArkTS Error对象，使用该方法抛出已有的ArkTS Error对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_error、napi_throw_type_error、napi_throw_range_error、napi_throw_business_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当在C/C++中出现了错误或异常情况时，可以使用这些函数来抛出ArkTS中的异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查一个napi_value是否代表一个错误对象时，可以使用这个函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_and_clear_last_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当你需要获取最近一次出现的异常，并将异常队列清空时，可以使用这个函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_exception_pending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当你需要判断是否有未处理的异常时，可以使用这个函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当遇到严重错误或不可恢复的情况时，可以使用这个函数引发致命错误来立即终止进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个致命异常并终止进程, 同时产生相应的crash日志。"
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
      id: "napi_get_last_error_info",
      children: "napi_get_last_error_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取最后一次发生的错误信息，包括错误码、错误消息以及错误进栈信息，即使存在挂起的ArkTS异常，也可以调用此API。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_last_error_info\nstatic napi_value GetLastErrorInfo(napi_env env, napi_callback_info info)\n{\n    // 获取输入参数（这里以字符串message作为参数传入）\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 将传入的字符串参数以napi_get_value_int32取出，主动制造错误\n    int32_t value = 0;\n    napi_status status = napi_get_value_int32(env, args[0], &value);\n    // 接口使用错误，故返回值不为napi_ok\n    if (status != napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"napi_get_value_int32 return status, status is not equal to napi_ok.\");\n    }\n    // 调用接口napi_get_last_error_info获取最后一次错误信息\n    const napi_extended_error_info *errorInfo;\n    napi_get_last_error_info(env, &errorInfo);\n    // 取出错误码与接口调用错误后其返回值作比较\n    if (errorInfo->error_code == status) {\n        OH_LOG_INFO(LOG_APP, \"napi_get_last_error_info return errorInfo, error_code equal to status.\");\n    }\n    // 取出错误消息作为返回值带出去打印\n    napi_value result = nullptr;\n    napi_create_string_utf8(env, errorInfo->error_message, NAPI_AUTO_LENGTH, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getLastErrorInfo: (str: string) => string; // napi_get_last_error_info\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_last_error_info\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_last_error_info: %{public}s',\n    testNapi.getLastErrorInfo('message'));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_get_last_error_info error: %{public}s', error);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_type_error",
      children: "napi_create_type_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并获取一个带文本信息的ArkTS TypeError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_type_error\nstatic napi_value CreateTypeError(napi_env env, napi_callback_info info)\n{\n    // 构造errorCode和errorMessage\n    napi_value errorCode = nullptr;\n    napi_create_string_utf8(env, \"napi_create_error errorCode\", NAPI_AUTO_LENGTH, &errorCode);\n    napi_value errorMessage = nullptr;\n    napi_create_string_utf8(env, \"napi_create_error errorMessage\", NAPI_AUTO_LENGTH, &errorMessage);\n    // 调用napi_create_type_error创建一个typeError错误对象\n    napi_value error = nullptr;\n    napi_create_type_error(env, errorCode, errorMessage, &error);\n    return error;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createTypeError: () => Error; // napi_create_type_error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  // ...\n  throw testNapi.createTypeError();\n} catch (error) { // napi_create_type_error\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API napi_create_type_error errorCode: %{public}s, errorMessage %{public}s', error.code,\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_range_error",
      children: "napi_create_range_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并获取一个带文本信息的ArkTS RangeError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_range_error\nstatic napi_value CreateRangeError(napi_env env, napi_callback_info info)\n{\n    // 构造errorCode和errorMessage\n    napi_value errorCode = nullptr;\n    napi_create_string_utf8(env, \"napi_create_error errorCode\", NAPI_AUTO_LENGTH, &errorCode);\n    napi_value errorMessage = nullptr;\n    napi_create_string_utf8(env, \"napi_create_error errorMessage\", NAPI_AUTO_LENGTH, &errorMessage);\n    // 调用napi_create_range_error创建一个typeError错误对象\n    napi_value error = nullptr;\n    napi_create_range_error(env, errorCode, errorMessage, &error);\n    return error;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createRangeError: () => Error; // napi_create_range_error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_range_error\ntry {\n  // ...\n  throw testNapi.createRangeError();\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API napi_create_range_error errorCode: %{public}s, errorMessage: %{public}s',\n    error.code,\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_error",
      children: "napi_create_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并获取一个带文本信息的ArkTS Error。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_throw",
      children: "napi_throw"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在Node-API模块中抛出ArkTS异常的函数。当在本地代码中发生错误或检测到不符合预期的情况时，可以使用此接口来抛出一个ArkTS异常，使其能够被捕获并处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_error and napi_throw\nstatic napi_value NapiThrow(napi_env env, napi_callback_info info)\n{\n    // 代码中发生某些错误后，可执行以下操作抛出异常\n    // 在Node-API环境中创建一个字符串，并将其存储在errorCode变量中\n    napi_value errorCode = nullptr;\n    napi_create_string_utf8(env, \"throw errorCode\", NAPI_AUTO_LENGTH, &errorCode);\n    // 在Node-API环境中创建一个字符串，并将其存储在errorMessage变量中\n    napi_value errorMessage = nullptr;\n    napi_create_string_utf8(env, \"throw errorMessage\", NAPI_AUTO_LENGTH, &errorMessage);\n    // 创建一个ArkTS对象error\n    napi_value error = nullptr;\n    napi_create_error(env, errorCode, errorMessage, &error);\n    // 通过napi_throw接口将对象抛出\n    napi_throw(env, error);\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiThrow: () => void; // napi_create_error and napi_throw\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_error and napi_throw\ntry {\n  testNapi.napiThrow();\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API napi_throw errorCode: %{public}s, errorMessage: %{public}s',\n    error.code, error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_throw_error",
      children: "napi_throw_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于抛出一个带文本信息的ArkTS Error。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_throw_error\n// 这里直接抛出一个带有errorMessage的错误\nstatic napi_value NapiThrowErrorMessage(napi_env env, napi_callback_info info)\n{\n    napi_throw_error(env, nullptr, \"napi_throw_error throwing an error\");\n    return nullptr;\n}\n\n// 传入两个参数，在第二个参数，也就是除数为0的时候抛出一个错误\nstatic napi_value NapiThrowError(napi_env env, napi_callback_info info)\n{\n    // ArkTS侧传入两个参数\n    size_t argc = 2;\n    napi_value argv[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 将其转换为double类型的值作为被除数和除数\n    double dividend;\n    double divisor;\n    napi_get_value_double(env, argv[0], &dividend);\n    napi_get_value_double(env, argv[1], &divisor);\n    // 在这里判断除数如果为0则直接抛出一个错误，errorCode为：DIVIDE_BY_ZERO，errorMessage为：Cannot divide by zero\n    if (divisor == 0) {\n        napi_throw_error(env, \"DIVIDE_BY_ZERO\", \"Cannot divide by zero\");\n    }\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiThrowErrorMessage: () => void; // napi_throw_error\n\nexport const napiThrowError: (dividend: number, divisor: number) => void; // napi_throw_error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_throw_error\ntry {\n  testNapi.napiThrowErrorMessage();\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API napi_throw_error error code: %{public}s , message: %{public}s', error.code,\n    error.message);\n  // ...\n}\ntry {\n  testNapi.napiThrowError(5, 0);\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API napi_throw_error errorCode: %{public}s , errorMessage: %{public}s', error.code,\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_throw_business_error",
      children: "napi_throw_business_error"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于抛出一个带文本信息的ArkTS Error，其错误对象的code属性类型为number。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi#node-api%E7%BB%84%E4%BB%B6%E6%89%A9%E5%B1%95%E7%9A%84%E7%AC%A6%E5%8F%B7%E5%88%97%E8%A1%A8",
        children: "该接口抛出的是一个原生的Error对象，并不是ArkTS的SDK中声明的BusinessError对象。"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n\nstatic constexpr int INT_ARG_100 = 100;\n\n// 这里直接抛出一个带有errorMessage的错误\nstatic napi_value NapiThrowBusinessError(napi_env env, napi_callback_info info)\n{\n    napi_status status = napi_throw_business_error(env, INT_ARG_100, \"error message\");\n    if (status != napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"napi_throw_business_error failed :: %{public}d\", status);\n    }\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const napiThrowBusinessError: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntry {\n  testNapi.napiThrowBusinessError();\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_throw_business_error error code: %{public}d , message: %{public}s', error.code, error.message);\n  console.info(typeof error.code); // \"number\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_throw_type_error",
      children: "napi_throw_type_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "抛出一个带文本信息的ArkTS TypeError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_throw_type_error\n// 这里直接抛出一个带有errorMessage的TypeError\nstatic napi_value ThrowTypeErrorMessage(napi_env env, napi_callback_info info)\n{\n    napi_throw_type_error(env, nullptr, \"napi_throw_type_error throwing an error\");\n    return nullptr;\n}\n\n// 传入一个类型不匹配的参数，判断类型不匹配之后抛出typeError\nstatic napi_value ThrowTypeError(napi_env env, napi_callback_info info)\n{\n    // ArkTS侧传入一个参数\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 将传入参数转换为napi_valuetype类型的值\n    napi_valuetype valueType;\n    napi_typeof(env, argv[0], &valueType);\n    // 如果传入参数不为napi_number类型的值则抛出TypeError\n    if (valueType != napi_number) {\n        // 这里抛出一个既带有errorCode也带有errorMessage的TypeError\n        napi_throw_type_error(env, \"napi_throw_type_error\", \"Argument must be a number\");\n    }\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const throwTypeErrorMessage: () => void; // napi_throw_type_error\n\nexport const throwTypeError: (message: string) => void; // napi_throw_type_error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_throw_type_error\ntry {\n  testNapi.throwTypeErrorMessage();\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API napi_throw_type_error errorCode: %{public}s, errorMessage: %{public}s',\n    error.code,\n    error.message);\n  // ...\n}\ntry {\n  testNapi.throwTypeError('str');\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API napi_throw_type_error errorCode: %{public}s, errorMessage: %{public}s',\n    error.code,\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_throw_range_error",
      children: "napi_throw_range_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "抛出一个带文本信息的ArkTS RangeError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_throw_range_error\n// 这里直接抛出一个带有errorMessage的RangeError\nstatic napi_value ThrowRangeErrorMessage(napi_env env, napi_callback_info info)\n{\n    napi_throw_range_error(env, nullptr, \"napi_throw_range_error one\");\n    return nullptr;\n}\n\n// 传入不匹配的参数个数，判断不匹配之后抛出rangeError\nstatic napi_value ThrowRangeError(napi_env env, napi_callback_info info)\n{\n    // ArkTS侧传入两个参数\n    size_t argc = 2;\n    napi_value argv[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 如果传入参数个数不为2\n    if (argc != 2) {\n        // 这里抛出一个RangeError\n        napi_throw_range_error(env, \"napi_throw_range_error\", \"Expected two numbers as arguments\");\n        return nullptr;\n    }\n    // 下面将传入的两值相加并传出去\n    double numOne = 0;\n    double numTwo = 0;\n    napi_get_value_double(env, argv[0], &numOne);\n    napi_get_value_double(env, argv[1], &numTwo);\n    double result = numOne + numTwo;\n    napi_value resultValue;\n    napi_create_double(env, result, &resultValue);\n    return resultValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const throwRangeErrorMessage: () => void; // napi_throw_range_error\n\nexport const throwRangeError: (num: number) => number | undefined; // napi_throw_range_error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_throw_range_error\ntry {\n  testNapi.throwRangeErrorMessage();\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API napi_throw_range_error errorCode: %{public}s, errorMessage: %{public}s',\n    error.code,\n    error.message);\n  // ...\n}\n\ntry {\n  testNapi.throwRangeError(1);\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API napi_throw_range_error errorCode: %{public}s, errorMessage: %{public}s',\n    error.code,\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_error",
      children: "napi_is_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于判断给定的napi_value是否表示一个error对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_is_error\nstatic napi_value NapiIsError(napi_env env, napi_callback_info info)\n{\n    // 接收一个入参\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 调用接口napi_is_error判断入参是否为一个error对象\n    bool result = false;\n    // 如果napi_value为一个error对象，则设置result为true的布尔值，否则设置为false\n    napi_is_error(env, args[0], &result);\n    // 取出result通过napi_get_boolean接口将取出的bool值转换为napi_value类型的值返回出去\n    napi_value returnValue = nullptr;\n    napi_get_boolean(env, result, &returnValue);\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiIsError: <T>(obj: T) => boolean; // napi_is_error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_is_error\ntry {\n  // ...\n  throw new Error(\"throwing an error\");\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_is_error error: %{public}s',\n    testNapi.napiIsError(error)\n      .toString());\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_is_error error: %{public}s',\n    testNapi.napiIsError(1)\n      .toString());\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_and_clear_last_exception",
      children: "napi_get_and_clear_last_exception"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取并清除最近一次出现的异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_and_clear_last_exception\nstatic napi_value GetAndClearLastException(napi_env env, napi_callback_info info)\n{\n    // 抛出异常，创造异常情况\n    napi_throw_error(env, \"napi_create_error errorCode\", \"napi_create_error errorMessage\");\n    // 调用napi_get_and_clear_last_exception接口获取并清除最后一个未处理的异常。即使存在挂起的ArkTS异常，也可以调用此API\n    napi_value result = nullptr;\n    napi_status status = napi_get_and_clear_last_exception(env, &result);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getAndClearLastException: () => Error | undefined; // napi_get_and_clear_last_exception\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_and_clear_last_exception\n// 这里获取到最后一个未处理的异常\nhilog.info(0x0000, 'testTag',\n  'Test Node-API napi_get_and_clear_last_exception, error.message: %{public}s',\n  testNapi.getAndClearLastException());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_exception_pending",
      children: "napi_is_exception_pending"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于判断是否出现了异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_is_exception_pending\nstatic napi_value IsExceptionPending(napi_env env, napi_callback_info info)\n{\n    napi_status status;\n    bool isExceptionPending = false;\n    // 在执行一些可能引发异常的操作后\n    napi_throw_error(env, \"napi_create_error errorCode\", \"napi_create_error errorMessage\");\n    // 检查当前环境中是否有异常挂起\n    status = napi_is_exception_pending(env, &isExceptionPending);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    if (isExceptionPending) {\n        // 处理异常挂起的情况\n        napi_value result = nullptr;\n        status = napi_get_and_clear_last_exception(env, &result);\n        if (status != napi_ok) {\n            return nullptr;\n        }\n        // 将处理的异常返回出去\n        return result;\n    }\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const isExceptionPending: () => Object | undefined; // napi_is_exception_pending\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_is_exception_pending\ninterface MyObject {\n  code: string;\n  message: string;\n}\n\ntry {\n  let result = testNapi.isExceptionPending() as MyObject;\n  hilog.info(0x0000, 'testTag',\n    'Test Node-API napi_is_exception_pending, error.Code: %{public}s, error.message: %{public}s',\n    result.code, result.message);\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_is_exception_pending error');\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_fatal_error",
      children: "napi_fatal_error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于引发致命错误以立即终止进程。在调用napi_fatal_error函数后，导致应用程序终止，因此应该慎重使用，避免在正常操作中频繁调用该函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_fatal_error\nstatic napi_value FatalError(napi_env env, napi_callback_info info)\n{\n    // 请注意，使用napi_fatal_error函数会导致应用进程直接终止，因此应该谨慎使用，仅在遇到无法恢复的严重错误时才应该调用该函数\n    // 模拟一个致命错误条件\n    bool errorCondition = true;\n    if (errorCondition) {\n        // 创建一个致命错误信息\n        napi_fatal_error(\"napi_fatal_error test\", NAPI_AUTO_LENGTH, \"napi_create_error errorMessage\", NAPI_AUTO_LENGTH);\n    }\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const fatalError: () => void; // napi_fatal_error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_fatal_error 请注意，使用napi_fatal_error函数会导致应用进程直接终止，因此应该谨慎使用，仅在遇到无法恢复的严重错误时才应该调用该函数\n// 模拟一个致命错误条件\ntry {\n  testNapi.fatalError();\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_fatal_error error');\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_fatal_exception",
      children: "napi_fatal_exception"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在主线程的上下文环境中调用napi_fatal_exception函数后，抛出一个致命异常，导致应用程序终止，同时会生成相应的crash日志。因此应该慎重使用，避免在正常操作中频繁调用该函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_fatal_exception\nstatic napi_value FatalException(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_status status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    // 请注意，使用napi_fatal_exception函数会导致应用进程直接终止，因此应该谨慎使用，仅在主线程遇到无法恢复的严重错误时才应该调用该函数\n    // 模拟一个致命错误条件\n    status = napi_fatal_exception(env, args[0]);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const fatalException: (err: Error) => void; // napi_fatal_exception\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const err = new Error(\"a fatal exception occurred\");\ntestNapi.fatalException(err);\n"
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