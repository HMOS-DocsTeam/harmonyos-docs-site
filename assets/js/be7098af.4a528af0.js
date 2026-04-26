"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["6416"], {
336522(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_string_use_jsvm_about_string_md_be7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-string-use-jsvm-about-string-md-be7.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_string_use_jsvm_about_string_md_be7_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-string/use-jsvm-about-string","title":"使用JSVM-API接口创建和获取string值","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-string/use-jsvm-about-string.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-string","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-string/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-string/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"使用JSVM-API接口创建和获取string值","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-string","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口设置JavaScript对象的属性","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-property/"},"next":{"title":"使用JSVM-API接口获取JSVM API的版本号","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-version/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-string/use-jsvm-about-string.md


const frontMatter = {
	title: '使用JSVM-API接口创建和获取string值',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-string',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口创建和获取string值';

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
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "OH_JSVM_GetValueStringUtf8",
  "id": "oh_jsvm_getvaluestringutf8",
  "level": 3
}, {
  "value": "OH_JSVM_CreateStringUtf8",
  "id": "oh_jsvm_createstringutf8",
  "level": 3
}, {
  "value": "OH_JSVM_GetValueStringUtf16",
  "id": "oh_jsvm_getvaluestringutf16",
  "level": 3
}, {
  "value": "OH_JSVM_CreateStringUtf16",
  "id": "oh_jsvm_createstringutf16",
  "level": 3
}, {
  "value": "OH_JSVM_GetValueStringLatin1",
  "id": "oh_jsvm_getvaluestringlatin1",
  "level": 3
}, {
  "value": "OH_JSVM_CreateStringLatin1",
  "id": "oh_jsvm_createstringlatin1",
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
        id: "使用jsvm-api接口创建和获取string值",
        children: "使用JSVM-API接口创建和获取string值"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM-API的六个字符串接口，可以实现JSVM模块与JavaScript字符串的交互功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "string是编程中常用的数据类型。用于存储和操作文本数据，它们可用于构建用户界面元素，如标签、按钮和文本框，处理用户输入，验证和格式化数据。不同的编码方案支持不同的字符集和语言，以下是一些主要的编码方案及其区别："
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
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueStringUtf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript string对象的Utf8编码字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateStringUtf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Utf8编码的字符串创建一个JavaScript string对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueStringUtf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript string对象的Utf16编码字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateStringUtf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Utf16编码的字符串数据创建JavaScript string对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueStringLatin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript string对象的Latin-1编码字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateStringLatin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Latin-1编码的字符串创建一个JavaScript string对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "。本文仅展示接口对应的C++相关代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvaluestringutf8",
      children: "OH_JSVM_GetValueStringUtf8"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_JSVM_GetValueStringUtf8接口可以将JavaScript的字符类型的数据转换为utf8编码的字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <cstdlib>\n// OH_JSVM_GetValueStringUtf8的样例方法\nstatic JSVM_Value GetValueStringUtf8(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    size_t length = 0;\n    JSVM_Status status = OH_JSVM_GetValueStringUtf8(env, args[0], nullptr, 0, &length);\n    char *buf = (char *)malloc(length + 1);\n    if (buf == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"malloc failed\");\n        return nullptr;\n    }\n    memset(buf, 0, length + 1);\n    status = OH_JSVM_GetValueStringUtf8(env, args[0], buf, length + 1, &length);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetValueStringUtf8 fail\");\n        free(buf);\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetValueStringUtf8 success: %{public}s\", buf);\n    }\n    JSVM_Value result = nullptr;\n    OH_JSVM_CreateStringUtf8(env, buf, length, &result);\n    free(buf);\n    return result;\n}\n// GetValueStringUtf8注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetValueStringUtf8},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetValueStringUtf8方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getValueStringUtf8\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let data = \"aaBC+-$%^你好123\";\n    let script = getValueStringUtf8(data);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetValueStringUtf8 success: aaBC+-$%^你好123\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      }), "：getValueStringUtf8(arg)入参arg非字符串型数据时接口会调用失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createstringutf8",
      children: "OH_JSVM_CreateStringUtf8"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个UTF-8编码的JavaScript字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <string>\n// OH_JSVM_CreateStringUtf8的样例方法\nstatic JSVM_Value CreateStringUtf8(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    const char *str = u8\"你好, World!, succeed in creating UTF-8 string!\";\n    size_t length = strlen(str);\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_CreateStringUtf8(env, str, length, &result);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"Failed to create UTF-8 string\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateStringUtf8 success: %{public}s\", str);\n    }\n    return result;\n}\n// CreateStringUtf8注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateStringUtf8},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateStringUtf8方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createStringUtf8\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let script = createStringUtf8();\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateStringUtf8 success: 你好, World!, succeed in creating UTF-8 string!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvaluestringutf16",
      children: "OH_JSVM_GetValueStringUtf16"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_JSVM_GetValueStringUtf16，将JavaScript的字符类型的数据转换为utf16编码的字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <codecvt>\n#include <locale>\n#include <cstdlib>\n\n// OH_JSVM_GetValueStringUtf16的样例方法\n// 定义字符串缓冲区的最大长度\nstatic const int MAX_BUFFER_SIZE = 128;\nstatic JSVM_Value GetValueStringUtf16(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    JSVM_Value result = nullptr;\n    size_t length = 0;\n    char16_t buffer[MAX_BUFFER_SIZE] = {0};\n    // 字符串的缓冲区大小\n    size_t bufferSize = MAX_BUFFER_SIZE;\n    JSVM_Status status = OH_JSVM_GetValueStringUtf16(env, args[0], buffer, bufferSize, &length);\n    // 将 char16_t 转换为 std::u16string\n    std::u16string u16str = {buffer};\n    // 将 std::u16string 转换为 std::string\n    std::wstring_convert<std::codecvt_utf8_utf16<char16_t>, char16_t> converter;\n    std::string str = converter.to_bytes(u16str);\n    // 获取字符串返回结果\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetValueStringUtf16 fail\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetValueStringUtf16 success: %{public}s\", str.c_str());\n    }\n    return result;\n}\n// GetValueStringUtf16注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetValueStringUtf16},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetValueStringUtf16方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getValueStringUtf16\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let data = \"ahello。\";\n    let script = getValueStringUtf16(data);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetValueStringUtf16 success: ahello。\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      }), "：getValueStringUtf16(arg)的参数arg必须是字符串，否则接口会调用失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createstringutf16",
      children: "OH_JSVM_CreateStringUtf16"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个UTF-16编码的JavaScript字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <codecvt>\n#include <locale>\n#include <cstring>\n\n// OH_JSVM_CreateStringUtf16的样例方法\nstatic JSVM_Value CreateStringUtf16(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    const char16_t *str = u\"你好, World!, succeed in creating UTF-16 string!\";\n    std::u16string ustr(str);\n    size_t length = ustr.length();\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_CreateStringUtf16(env, str, length, &result);\n    std::u16string u16str = {str};\n    // 将 std::u16string 转换为 std::string\n    std::wstring_convert<std::codecvt_utf8_utf16<char16_t>, char16_t> converter;\n    std::string strResult = converter.to_bytes(u16str);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateStringUtf16 fail\");\n    }else {\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateStringUtf16 success: %{public}s\", strResult.c_str());\n    }\n    return result;\n}\n// CreateStringUtf16注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateStringUtf16},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateStringUtf16方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createStringUtf16\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let script = createStringUtf16();\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateStringUtf16 success: 你好, World!, succeed in creating UTF-16 string!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvaluestringlatin1",
      children: "OH_JSVM_GetValueStringLatin1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_JSVM_GetValueStringLatin1接口可以将JavaScript的字符类型的数据转换为ISO-8859-1编码的字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <cstdlib>\n// OH_JSVM_GetValueStringLatin1的样例方法\n// 定义字符串缓冲区的最大长度\nstatic const int MAX_BUFFER_SIZE = 128;\nstatic JSVM_Value GetValueStringLatin1(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    char buf[MAX_BUFFER_SIZE];\n    size_t length = 0;\n    JSVM_Value jsvmRes = nullptr;\n    JSVM_Status status = OH_JSVM_GetValueStringLatin1(env, args[0], buf, MAX_BUFFER_SIZE, &length);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetValueStringLatin1 fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetValueStringLatin1 success: %{public}s\", buf);\n    }\n    OH_JSVM_CreateStringLatin1(env, buf, length, &jsvmRes);\n    return jsvmRes;\n}\n// GetValueStringLatin1注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetValueStringLatin1},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetValueStringLatin1方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getValueStringLatin1\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let data = \"中文\";\n    let script = getValueStringLatin1(data);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果（ISO-8859-1编码不支持中文，传入中文字符会导致乱码）："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(506825)/* ["default"] */.A) + "",
        width: "322",
        height: "24"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      }), "：getValueStringLatin1(arg)入参arg必须为字符串类型，否则接口调用会失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createstringlatin1",
      children: "OH_JSVM_CreateStringLatin1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个Latin1编码的JavaScript字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <cstring>\n// CreateStringLatin1注册回调\n// 定义字符串缓冲区的最大长度\nstatic const int MAX_BUFFER_SIZE = 128;\n// OH_JSVM_CreateStringLatin1的样例方法\nstatic JSVM_Value CreateStringLatin1(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    const char *str = \"Hello, World! éçñ, succeed in creating Latin1 string!\";\n    size_t length = JSVM_AUTO_LENGTH;\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_CreateStringLatin1(env, str, length, &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateStringLatin1 fail\");\n    } else {\n        char buf[MAX_BUFFER_SIZE];\n        size_t length = 0;\n        OH_JSVM_GetValueStringLatin1(env, result, buf, MAX_BUFFER_SIZE, &length);\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateStringLatin1 success: %{public}s\", buf);\n    }\n    return result;\n}\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateStringLatin1},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateStringLatin1方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createStringLatin1\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let script = createStringLatin1();\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateStringLatin1 success: Hello, World! éçñ, succeed in creating Latin1 string!\n"
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
506825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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