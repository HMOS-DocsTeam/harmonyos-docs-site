"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["646163"], {
758481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_string_use_napi_about_string_md_361_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-string-use-napi-about-string-md-361.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_string_use_napi_about_string_md_361_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string/use-napi-about-string","title":"使用Node-API接口创建和获取string值","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string/use-napi-about-string.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"使用Node-API接口创建和获取string值","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-string","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口设置ArkTS对象的属性","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property/"},"next":{"title":"使用Node-API进行自定义异步操作相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-custom-asynchronous-operations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string/use-napi-about-string.md


const frontMatter = {
	title: '使用Node-API接口创建和获取string值',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-string',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口创建和获取string值';

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
  "value": "napi_get_value_string_utf8",
  "id": "napi_get_value_string_utf8",
  "level": 3
}, {
  "value": "napi_create_string_utf8",
  "id": "napi_create_string_utf8",
  "level": 3
}, {
  "value": "napi_get_value_string_utf16",
  "id": "napi_get_value_string_utf16",
  "level": 3
}, {
  "value": "napi_create_string_utf16",
  "id": "napi_create_string_utf16",
  "level": 3
}, {
  "value": "napi_get_value_string_latin1",
  "id": "napi_get_value_string_latin1",
  "level": 3
}, {
  "value": "napi_create_string_latin1",
  "id": "napi_create_string_latin1",
  "level": 3
}, {
  "value": "napi_create_external_string_utf16",
  "id": "napi_create_external_string_utf16",
  "level": 3
}, {
  "value": "napi_create_external_string_ascii",
  "id": "napi_create_external_string_ascii",
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
        id: "使用node-api接口创建和获取string值",
        children: "使用Node-API接口创建和获取string值"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API的八个关于string的接口，可以实现Node-API模块与ArkTS字符串的交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字符串是编程中常用的数据类型，用于存储和操作文本数据。它可以表示和处理字符序列，构建用户界面元素（如标签、按钮和文本框），处理用户输入，验证和格式化数据。不同编码支持的字符集和语言不同，以下是一些主要编码方案及其区别："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ASCII"
          })
        }), "：ASCII是最早的字符编码方案之一，使用7位编码，只能表示英文字母、数字和一些基本符号。它是许多其他编码方案的基础。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "UTF-8"
          })
        }), "：UTF-8是一种变长编码方案，可以表示全球范围的字符集。它使用8位编码，根据字符的不同范围使用不同长度的字节序列。UTF-8是互联网上广泛使用的编码方案。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "UTF-16"
          })
        }), "：UTF-16是一种定长或变长编码方案，使用16位编码。它可以表示全球范围的字符集，并且适用于较大的字符集。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ISO-8859-1（Latin-1）"
          })
        }), "：ISO-8859-1是一种单字节编码方案，使用8位编码。它主要用于表示拉丁字母字符集，包括欧洲大部分语言。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下Node-API接口主要用于string值的创建和获取，使用场景如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "起始支持版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要将ArkTS的字符类型的数据转换为UTF-8编码的字符时使用这个函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过UTF-8编码的C字符串创建ArkTS string值时使用这个函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要将ArkTS的字符类型的数据转换为UTF-16编码的字符时使用这个函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过UTF-16编码的C字符串创建ArkTS string值时使用这个函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要将ArkTS的字符类型的数据转换为ISO-8859-1编码的字符时使用这个函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过ISO-8859-1编码的字符串创建ArkTS string值时使用这个函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部UTF-16编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_ascii"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要通过外部ASCII编码的字符串缓冲区创建ArkTS字符串值且避免内存拷贝时使用此函数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
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
      id: "napi_get_value_string_utf8",
      children: "napi_get_value_string_utf8"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将ArkTS的字符类型的数据转换为UTF-8编码的字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value GetValueStringUtf8(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取字符串的长度\n    size_t length = 0;\n    napi_status status = napi_get_value_string_utf8(env, args[0], nullptr, 0, &length);\n    // 传入一个非字符串 napi_get_value_string_utf8接口会返回napi_string_expected\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"napi_get_value_string_utf8 failed\");\n        return nullptr;\n    }\n    char *buf = new char[length + 1];\n    std::memset(buf, 0, length + 1);\n    status = napi_get_value_string_utf8(env, args[0], buf, length + 1, &length);\n    if (status != napi_ok) {\n        if (buf) {\n            delete[] buf;\n        }\n        OH_LOG_ERROR(LOG_APP, \"napi_get_value_string_utf8 failed\");\n        return nullptr;\n    }\n    napi_value result = nullptr;\n    status = napi_create_string_utf8(env, buf, length, &result);\n    if (buf) {\n        delete[] buf;\n    }\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_create_string_utf8 failed\");\n        return nullptr;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getValueStringUtf8: (param: string | number) => string | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 分别传入字符和非字符检测接口，传入字符串类型的数据将返回原字符串，传入其他类型返回undefined\nhilog.info(0x0000, 'testTag', 'Test Node-API get_value_string_utf8_string %{public}s',\n  testNapi.getValueStringUtf8('aaBC+-$%^你好123'));\nhilog.info(0x0000, 'testTag', 'Test Node-API get_value_string_utf8_not_string %{public}s',\n  testNapi.getValueStringUtf8(50));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_string_utf8",
      children: "napi_create_string_utf8"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个UTF-8编码的ArkTS字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value CreateStringUtf8(napi_env env, napi_callback_info info)\n{\n    const char *str = u8\"你好, World!, successes to create UTF-8 string! 111\";\n    size_t length = strlen(str);\n    napi_value result = nullptr;\n    napi_status status = napi_create_string_utf8(env, str, length, &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Failed to create UTF-8 string\");\n        return nullptr;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createStringUtf8: () => string | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog.info(0x0000, 'testTag', 'Test Node-API napi_create_string_utf8:%{public}s',\n  testNapi.createStringUtf8());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_string_utf16",
      children: "napi_get_value_string_utf16"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将ArkTS的字符类型的数据转换为UTF-16编码的字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value GetValueStringUtf16(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1];\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    napi_value result = nullptr;\n    // 字符串的缓冲区\n    char16_t buffer[MAX_BUFFER_SIZE];\n    // 字符串的缓冲区大小\n    size_t bufferSize = MAX_BUFFER_SIZE;\n    // 字符串的长度\n    size_t stringLen;\n    // 获取字符串的数据和长度\n    napi_get_value_string_utf16(env, args[0], buffer, bufferSize, &stringLen);\n    // 获取字符串返回结果\n    napi_create_string_utf16(env, buffer, stringLen, &result);\n    // 返回结果\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getValueStringUtf16: (data: string) => string;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let result = testNapi.getValueStringUtf16('hello,');\nhilog.info(0x0000, 'testTag', 'Node-API napi_get_value_string_utf16:%{public}s', result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_string_utf16",
      children: "napi_create_string_utf16"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个UTF-16编码的ArkTS字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value CreateStringUtf16(napi_env env, napi_callback_info info)\n{\n    const char16_t *str = u\"你好, World!, successes to create UTF-16 string! 111\";\n    size_t length = NAPI_AUTO_LENGTH;\n    napi_value result = nullptr;\n    napi_status status = napi_create_string_utf16(env, str, length, &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Failed to create UTF-16 string\");\n        return nullptr;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createStringUtf16: () => string | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog.info(0x0000, 'testTag', 'Test Node-API napi_create_string_utf16:%{public}s ',\n  testNapi.createStringUtf16());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_string_latin1",
      children: "napi_get_value_string_latin1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将ArkTS的字符类型数据转换为ISO-8859-1编码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value GetValueStringLatin1(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    char buf[MAX_BUFFER_SIZE];\n    size_t length = 0;\n    napi_value napi_Res = nullptr;\n    napi_status status = napi_get_value_string_latin1(env, args[0], buf, MAX_BUFFER_SIZE, &length);\n    // 当输入的值不是字符串时，接口会返回napi_string_expected\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    napi_create_string_latin1(env, buf, length, &napi_Res);\n    return napi_Res;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getValueStringLatin1: (param: number | string) => string | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 传入非字符型数据，函数返回undefined\nhilog.info(0x0000, 'testTag', 'Test Node-API get_value_string_latin1_not_string %{public}s',\n  testNapi.getValueStringLatin1(10));\n// ISO-8859-1编码不支持中文，传入中文字符会乱码\nhilog.info(0x0000, 'testTag', 'Test Node-API get_value_string_latin1_string_chinese %{public}s',\n  testNapi.getValueStringLatin1('中文'));\n// 传入其他字符，不会乱码\nhilog.info(0x0000, 'testTag', 'Test Node-API get_value_string_latin1_string %{public}s',\n  testNapi.getValueStringLatin1('abo ABP=-&*/'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_string_latin1",
      children: "napi_create_string_latin1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个Latin-1编码的ArkTS字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value CreateStringLatin1(napi_env env, napi_callback_info info)\n{\n    const char *str = \"Hello, World! éçñ, successes to create Latin1 string! 111\";\n    size_t length = NAPI_AUTO_LENGTH;\n    napi_value result = nullptr;\n    napi_status status = napi_create_string_latin1(env, str, length, &result);\n    if (status != napi_ok) {\n        // 处理错误\n        napi_throw_error(env, nullptr, \"Failed to create Latin1 string\");\n        return nullptr;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createStringLatin1: () => string | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog.info(0x0000, 'testTag', 'Test Node-API  napi_create_string_latin1:%{public}s',\n  testNapi.createStringLatin1());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_external_string_utf16",
      children: "napi_create_external_string_utf16"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个引用外部资源的UTF-16编码的ArkTS字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义字符串的析构回调函数，如果需要释放外部资源，可以在该函数中实现\n// hint参数可以传递一些额外的信息，如引用计数等，也可以忽略此参数，直接传入nullptr\nstatic void StringFinalizerUTF16(void* data, void* hint)\n{\n    // 释放外部资源\n    delete[] static_cast<char16_t*>(data);\n}\n\nstatic napi_value CreateExternalStringUtf16(napi_env env, napi_callback_info info)\n{\n    const char16_t source[] = u\"你好, World!, successes to create UTF-16 string! 111\";\n    napi_value result = nullptr;\n    int char16tLength = sizeof(source) / sizeof(char16_t);\n    // 在堆上动态分配内存，并复制字符串内容\n    char16_t* str = new char16_t[char16tLength];\n    std::copy(source, source + char16tLength, str);\n    // 当创建出来的字符串在ArkTS侧生命周期结束被GC回收时，会调用StringFinalizerUTF16函数，调用方式为StringFinalizerUTF16(str, finalize_hint);\n    // 如果finalize_callback传入nullptr，则不会调用任何回调函数。开发者需要自行管理外部资源str的生命周期。\n    napi_status status = napi_create_external_string_utf16(\n        env,\n        str,                    // 外部字符串缓冲区\n        NAPI_AUTO_LENGTH,       // 字符串长度，如果传入NAPI_AUTO_LENGTH，则字符串需要以'\\0'结尾\n        StringFinalizerUTF16,   // 字符串的析构回调函数\n        nullptr,                // 传递给析构回调函数的hint参数，本例不需要\n        &result                 // 接受创建的ArkTS字符串值\n    );\n    if (status != napi_ok) {\n        // 处理错误\n        delete[] str;\n        napi_throw_error(env, nullptr, \"Failed to create utf16 string\");\n        return nullptr;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const CreateExternalStringUtf16: () => string | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog.info(0x0000, 'testTag', 'Test Node-API  napi_create_external_string_utf16:%{public}s',\n  testNapi.CreateExternalStringUtf16());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过napi_create_external_string_utf16接口创建出的ArkTS string对象受GC管理，其生命周期结束，GC会回收ArkTS string对象，同时触发StringFinalizerUTF16函数来回收ArkTS string对象指向的native侧资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_external_string_ascii",
      children: "napi_create_external_string_ascii"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个引用外部资源的ASCII编码的ArkTS字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义字符串的析构回调函数，如果需要释放外部资源，可以在该函数中实现\n// hint参数可以传递一些额外的信息，如引用计数等，也可以忽略此参数，直接传入nullptr\nstatic void StringFinalizerASCII(void* data, void* hint)\n{\n    // 释放外部资源\n    delete[] static_cast<char*>(data);\n}\n\nstatic napi_value CreateExternalStringAscii(napi_env env, napi_callback_info info)\n{\n    const char source[] = \"hello, World!, successes to create ASCII string! 111\";\n    napi_value result = nullptr;\n    int charLength = sizeof(source) / sizeof(char);\n    // 在堆上动态分配内存，并复制字符串内容\n    char* str = new char[charLength];\n    std::copy(source, source + charLength, str);\n    // 当创建出来的字符串在ArkTS侧生命周期结束被GC回收时，会调用StringFinalizerASCII函数，调用方式为StringFinalizerASCII(str, finalize_hint);\n    // 如果finalize_callback传入nullptr，则不会调用任何回调函数。开发者需要自行管理外部资源str的生命周期。\n    // napi_create_external_string_ascii 接口要求传入的字符串在指定的长度范围内不得包含'\\0'字符，否则可能导致异常行为。\n    napi_status status = napi_create_external_string_ascii(\n        env,\n        str,                    // 外部字符串缓冲区\n        NAPI_AUTO_LENGTH,       // 字符串长度，如果传入NAPI_AUTO_LENGTH，则字符串需要以'\\0'结尾\n        StringFinalizerASCII,   // 字符串的析构回调函数\n        nullptr,                // 传递给析构回调函数的hint参数，本例不需要\n        &result                 // 接受创建的ArkTS字符串值\n    );\n    // 重要：str指向的内存必须在ArkTS string对象的整个生命周期内保持有效。\n    // 而且在调用此接口后，str指向的内存内容必须保持不可变。任何对该内存的写入操作都可能导致程序崩溃。\n    if (status != napi_ok) {\n        // 处理错误\n        delete[] str;\n        napi_throw_error(env, nullptr, \"Failed to create ascii string\");\n        return nullptr;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const CreateExternalStringAscii: () => string | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog.info(0x0000, 'testTag', 'Test Node-API  napi_create_external_string_ascii:%{public}s',\n  testNapi.CreateExternalStringAscii());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过napi_create_external_string_ascii接口创建出的ArkTS string对象受GC管理，其生命周期结束，GC会回收ArkTS string对象，同时触发StringFinalizerASCII函数来回收ArkTS string对象指向的native侧资源。"
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