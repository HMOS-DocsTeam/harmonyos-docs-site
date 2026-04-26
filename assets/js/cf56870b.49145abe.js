"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["87377"], {
91764(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_bigint_use_napi_about_bigint_md_cf5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-bigint-use-napi-about-bigint-md-cf5.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_bigint_use_napi_about_bigint_md_cf5_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-bigint/use-napi-about-bigint","title":"使用Node-API接口操作bigint类型值","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-bigint/use-napi-about-bigint.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-bigint","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-bigint/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-bigint/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用Node-API接口操作bigint类型值","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-bigint","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行ArrayBuffer相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-arraybuffer/"},"next":{"title":"使用Node-API接口进行buffer相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-buffer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-bigint/use-napi-about-bigint.md


const frontMatter = {
	title: '使用Node-API接口操作bigint类型值',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-bigint',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口操作bigint类型值';

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
  "value": "napi_create_bigint_int64",
  "id": "napi_create_bigint_int64",
  "level": 3
}, {
  "value": "napi_create_bigint_uint64",
  "id": "napi_create_bigint_uint64",
  "level": 3
}, {
  "value": "napi_create_bigint_words",
  "id": "napi_create_bigint_words",
  "level": 3
}, {
  "value": "napi_get_value_bigint_int64",
  "id": "napi_get_value_bigint_int64",
  "level": 3
}, {
  "value": "napi_get_value_bigint_uint64",
  "id": "napi_get_value_bigint_uint64",
  "level": 3
}, {
  "value": "napi_get_value_bigint_words",
  "id": "napi_get_value_bigint_words",
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
        id: "使用node-api接口操作bigint类型值",
        children: "使用Node-API接口操作bigint类型值"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BigInt是ArkTS中用于表示任意精度整数的数据类型，它能够处理比Number类型更大范围的整数值。通过Node-API提供的接口，可以在Node-API模块中创建、获取和操作BigInt类型值，从而实现与BigInt相关的功能扩展。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用Node-API接口操作BigInt类型值时，需要理解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BigInt类型："
          })
        }), " BigInt是ArkTS中的一种数据类型，用于表示任意精度的整数。与Number类型不同，BigInt类型可以精确表示非常大的整数，而不会丢失精度或溢出。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BigInt创建："
          })
        }), " 使用Node-API提供的接口，可以通过传递C的int64或uint64数据来创建对应的ArkTS BigInt。这使得在Node-API模块中可以方便地创建BigInt类型值。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BigInt操作："
          })
        }), " Node-API提供了多个接口用于操作BigInt类型值。通过这些接口，可以获取BigInt的数值，进行数值转换，以及执行常见的算术和位运算操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建64位带符号整数（int64）的BigInt对象的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建64位无符号整数（uint64）的BigInt对象的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于根据提供的64位无符号（uint64）整数创建BigInt对象的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于从BigInt对象中获取64位带符号整数（int64）值的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于从BigInt对象中获取64位无符号整数（uint64）值的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于从BigInt对象中获取底层的64位无符号（uint64）整数。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文cpp部分代码所需引用的头文件如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文ArkTS侧示例代码所需的模块导入如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_bigint_int64",
      children: "napi_create_bigint_int64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个函数用于在给定的Node-API环境中依据一个带有符号的64位整数创建一个ArkTS的BigInt对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_bigint_int64\nstatic napi_value CreateBigintInt64t(napi_env env, napi_callback_info info)\n{\n    // 声明int64_t的变量value\n    int64_t value = -5555555555555555555;\n    // 将value转化为napi_value类型返回\n    napi_value returnValue = nullptr;\n    napi_create_bigint_int64(env, value, &returnValue);\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createBigintInt64t: () => bigint; // napi_create_bigint_int64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_bigint_int64\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_bigint_int64: %{public}d',\n  testNapi.createBigintInt64t());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_bigint_uint64",
      children: "napi_create_bigint_uint64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个函数用于在给定的Node-API环境中依据一个无符号的64位整数创建一个ArkTS的BigInt对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_bigint_uint64\nstatic napi_value CreateBigintUint64t(napi_env env, napi_callback_info info)\n{\n    // 声明uint64_t的变量value\n    uint64_t value = 5555555555555555555;\n    // 将value转化为napi_value类型返回\n    napi_value returnValue = nullptr;\n    napi_create_bigint_uint64(env, value, &returnValue);\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createBigintUint64t: () => bigint; // napi_create_bigint_uint64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_bigint_uint64\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_bigint_uint64: %{public}d',\n  testNapi.createBigintUint64t());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_bigint_words",
      children: "napi_create_bigint_words"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个函数用于在给定的Node-API环境中由一系列无符号64位整数创建一个ArkTS的BigInt对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_bigint_words\nstatic napi_value CreateBigintWords(napi_env env, napi_callback_info info)\n{\n    // 使用napi_create_bigint_words接口创建一个BigInt对象\n    int signBit = 0;\n    size_t wordCount = 3;\n    uint64_t words[] = {12ULL, 34ULL, 56ULL};\n    napi_value returnValue = nullptr;\n    napi_status status = napi_create_bigint_words(env, signBit, wordCount, words, &returnValue);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_create_bigint_words fail\");\n        return nullptr;\n    }\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createBigintWords: () => bigint | undefined; // napi_create_bigint_words\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_bigint_words\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_create_bigint_words: %{public}d',\n    testNapi.createBigintWords());\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API NapiGetValueBigint: %{public}s', error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_bigint_int64",
      children: "napi_get_value_bigint_int64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于从传入的参数中提取64位整数的BigInt数据，以供后续处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_bigint_int64\nstatic napi_value GetValueBigintInt64t(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 从传入的参数中提取64位整数的BigInt数据\n    int64_t value = 0;\n    bool lossLess = false;\n    napi_status status = napi_get_value_bigint_int64(env, args[0], &value, &lossLess);\n    // 判断从ArkTS侧获取bigint是否为无损转换，如果不是抛出异常\n    if (!lossLess) {\n        napi_throw_error(env, nullptr, \"BigInt values have not been lossless converted\");\n        return nullptr;\n    }\n    // 如果接口调用成功正常调用则返回true给ArkTS侧\n    napi_value returnValue = nullptr;\n    if (status == napi_ok) {\n        napi_get_boolean(env, true, &returnValue);\n        return returnValue;\n    } else {\n        napi_throw_error(env, nullptr, \"napi_get_value_bigint_int64 failed\");\n        return nullptr;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getValueBigintInt64t: (bigInt64: bigint) => boolean | undefined; // napi_get_value_bigint_int64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_bigint_int64\nlet bigInt = BigInt(-5555555555555555);\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_value_bigint_int64: %{public}s',\n    JSON.stringify(testNapi.getValueBigintInt64t(bigInt)));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API NapiGetValueBigint: %{public}s', error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_bigint_uint64",
      children: "napi_get_value_bigint_uint64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于从传入的参数中提取无符号64位整数的BigInt数据，以供后续处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_bigint_uint64\nstatic napi_value GetValueBigintUint64t(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 从参数值中获取BigInt的数值\n    uint64_t value = 0;\n    bool lossLess = false;\n    napi_status status = napi_get_value_bigint_uint64(env, args[0], &value, &lossLess);\n    // 判断从ArkTS侧获取bigint是否为无损转换，如果不是抛出异常\n    if (!lossLess) {\n        napi_throw_error(env, nullptr, \"BigInt values have no lossless converted\");\n        return nullptr;\n    }\n    // 如果接口调用成功正常调用则返回true给ArkTS侧\n    napi_value returnValue = nullptr;\n    napi_get_boolean(env, status == napi_ok, &returnValue);\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getValueBigintUint64t: (bigUint64: bigint) => boolean | undefined; // napi_get_value_bigint_uint64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_bigint_uint64\nlet bigUint = BigInt(5555555555555555);\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_value_bigint_uint64: %{public}s',\n    JSON.stringify(testNapi.getValueBigintUint64t(bigUint)));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API NapiGetValueBigint: %{public}s', error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_bigint_words",
      children: "napi_get_value_bigint_words"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于从ArkTS对象中获取其符号位和底层64位无符号整数数组表示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_bigint_words\nstatic napi_value GetValueBigintWords(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    int signBit = 0;\n    size_t wordCount = 0;\n    // 调用napi_get_value_bigint_words接口获取wordCount\n    napi_status status = napi_get_value_bigint_words(env, args[0], nullptr, &wordCount, nullptr);\n    OH_LOG_INFO(LOG_APP, \"Node-API , wordCount:%{public}d.\", wordCount);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"Node-API , get wordCount fail, status:%{public}d.\", status);\n        napi_throw_error(env, nullptr, \"napi_get_value_bigint_words call failed\");\n        return nullptr;\n    }\n    if (wordCount == 0) {\n        OH_LOG_ERROR(LOG_APP, \"Node-API , wordCount is 0, invalid BigInt or empty value.\");\n        napi_throw_error(env, nullptr, \"napi_get_value_bigint_words returned wordCount 0\");\n        return nullptr;\n    }\n    \n    const size_t MAX_ALLOWED_WORDS = 1024; // 限制wordCount上限（业务防护，根据实际场景调整）示例：最多允许1024个uint64_t（8KB）\n    if (wordCount > MAX_ALLOWED_WORDS) {\n        OH_LOG_ERROR(LOG_APP, \"Node-API , wordCount(%{public}zu) exceeds max limit(%{public}zu)\",\n            wordCount, MAX_ALLOWED_WORDS);\n        napi_throw_error(env, nullptr, \"wordCount is too large\");\n        return nullptr;\n    }\n    // 分配足够空间存储所有word\n    uint64_t* words = new uint64_t[wordCount];\n    // 调用napi_get_value_bigint_words接口获取传入bigInt相关信息，如：signBit传入bigInt正负信息\n    status = napi_get_value_bigint_words(env, args[0], &signBit, &wordCount, words);\n    OH_LOG_INFO(LOG_APP, \"Node-API , signBit: %{public}d.\", signBit);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"Node-API , reason:%{public}d.\", status);\n        delete[] words;\n        napi_throw_error(env, nullptr, \"napi_get_value_bigint_words fail\");\n        return nullptr;\n    }\n    // 可在此处处理words数组内容，如日志输出等\n    // ...\n    // 将符号位转化为int类型传出去\n    napi_value returnValue = nullptr;\n    napi_create_int32(env, signBit, &returnValue);\n    delete[] words;\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getValueBigintWords: (bigIntWords: bigint) => bigint | undefined; // napi_get_value_bigint_words\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_bigint_words\nlet bigInt = BigInt(-5555555555555555);\nlet bigUint = BigInt(5555555555555555);\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_value_bigint_words signBit is: %{public}d',\n    testNapi.getValueBigintWords(bigInt));\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_value_bigint_words signBit is: %{public}d',\n    testNapi.getValueBigintWords(bigUint));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API NapiGetValueBigint: %{public}s', error.message);\n  // ...\n}\n"
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