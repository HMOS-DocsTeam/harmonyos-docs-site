"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["266661"], {
303256(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_arraybuffer_use_napi_about_arraybuffer_md_611_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-arraybuffer-use-napi-about-arraybuffer-md-611.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_arraybuffer_use_napi_about_arraybuffer_md_611_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-arraybuffer/use-napi-about-arraybuffer","title":"使用Node-API接口进行ArrayBuffer相关开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-arraybuffer/use-napi-about-arraybuffer.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-arraybuffer","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-arraybuffer/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-arraybuffer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用Node-API接口进行ArrayBuffer相关开发","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-arraybuffer","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行array相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-array/"},"next":{"title":"使用Node-API接口操作bigint类型值","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-bigint/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-arraybuffer/use-napi-about-arraybuffer.md


const frontMatter = {
	title: '使用Node-API接口进行ArrayBuffer相关开发',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-arraybuffer',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行ArrayBuffer相关开发';

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
  "value": "napi_is_arraybuffer",
  "id": "napi_is_arraybuffer",
  "level": 3
}, {
  "value": "napi_get_arraybuffer_info",
  "id": "napi_get_arraybuffer_info",
  "level": 3
}, {
  "value": "napi_detach_arraybuffer",
  "id": "napi_detach_arraybuffer",
  "level": 3
}, {
  "value": "napi_is_detached_arraybuffer",
  "id": "napi_is_detached_arraybuffer",
  "level": 3
}, {
  "value": "napi_create_arraybuffer",
  "id": "napi_create_arraybuffer",
  "level": 3
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
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
        id: "使用node-api接口进行arraybuffer相关开发",
        children: "使用Node-API接口进行ArrayBuffer相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArrayBuffer是ArkTS中的一种数据类型，用于表示通用的、固定长度的原始二进制数据缓冲区。它提供了一种在ArkTS中有效地表示和操作原始二进制数据的方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ArrayBuffer"
          })
        }), "：ArrayBuffer对象用来表示一个通用的、固定长度的原始二进制数据缓冲区。不能直接操作ArrayBuffer的内容，而是需要包装成TypedArray对象或DataView对象来读写。ArrayBuffer常用于处理大量的二进制数据，如文件、网络数据包等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下Node-API接口用于操作ArrayBuffer类型的数据。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_is_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查一个值是否为ArrayBuffer，以确保正在处理正确的数据类型。需要注意的是，此函数只能判断一个值是否为ArrayBuffer，而不能判断一个值是否为TypedArray。要判断一个值是否为TypedArray，可以使用napi_is_typedarray函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_arraybuffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定的ArrayBuffer对象的相关信息，包括数据指针和数据长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_detach_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArrayBuffer底层缓冲区与ArrayBuffer对象分离。分离后可以直接在C/C++中操作数据，而无需通过Node-API接口进行数据访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_detached_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的ArrayBuffer是否已经被分离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中创建一个具有指定字节长度的ArkTS ArrayBuffer对象。"
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
        children: "#include \"napi/native_api.h\"\n#include <cstring>\n#include \"hilog/log.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文ArkTS侧示例代码所需的模块导入如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_arraybuffer",
      children: "napi_is_arraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断给定ArkTS value是否为ArrayBuffer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_is_arraybuffer\nstatic napi_value IsArrayBuffer(napi_env env, napi_callback_info info)\n{\n    // 接受一个入参\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 调用napi_is_arraybuffer接口判断给定入参是否为ArrayBuffer数据\n    bool result = false;\n    napi_status status = napi_is_arraybuffer(env, args[0], &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_is_arraybuffer fail\");\n        return nullptr;\n    }\n    // 将结果转成napi_value类型返回\n    napi_value returnValue = nullptr;\n    napi_get_boolean(env, result, &returnValue);\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const isArrayBuffer: <T>(arrayBuffer: T) => boolean | undefined; // napi_is_arraybuffer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test interface napi_is_arraybuffer\ntry {\n  let value = new ArrayBuffer(1);\n  let data = \"123\";\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_arraybuffer: %{public}s',\n    testNapi.isArrayBuffer(value));\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_arraybuffer: %{public}s',\n    testNapi.isArrayBuffer(data));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_is_arraybuffer error: %{public}s',\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test Node-API napi_is_arraybuffer: true"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test Node-API napi_is_arraybuffer: false"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_arraybuffer_info",
      children: "napi_get_arraybuffer_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArrayBuffer的底层数据缓冲区和长度。接口只能处理ArrayBuffer类型，请勿将其他类型传入接口。若想从Uint8Array类型中取到ArrayBuffer，需要在ArkTS侧执行.buffer操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_arraybuffer_info\nstatic napi_value GetArrayBufferInfo(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 检查参数是否为ArrayBuffer\n    bool isArrayBuffer = false;\n    napi_is_arraybuffer(env, args[0], &isArrayBuffer);\n    if (!isArrayBuffer) {\n        napi_throw_type_error(env, nullptr, \"Argument must be an ArrayBuffer\");\n        return nullptr;\n    }\n\n    void *data = nullptr;\n    size_t byteLength = 0;\n    // 获取ArrayBuffer的底层数据缓冲区和长度\n    napi_status status = napi_get_arraybuffer_info(env, args[0], &data, &byteLength);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Failed to get ArrayBuffer info\");\n        return nullptr;\n    }\n    // 创建结果对象\n    napi_value result = nullptr;\n    napi_create_object(env, &result);\n    // 创建数据缓冲区的字节长度属性\n    napi_value byteLengthValue = nullptr;\n    napi_create_uint32(env, byteLength, &byteLengthValue);\n    napi_set_named_property(env, result, \"byteLength\", byteLengthValue);\n    napi_value bufferData = nullptr;\n    void *newData = nullptr;\n    napi_create_arraybuffer(env, byteLength, &newData, &bufferData);\n    memcpy(newData, data, byteLength);\n    napi_set_named_property(env, result, \"buffer\", bufferData);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export class ArrayBufferInfo {\n  byteLength: number;\n  buffer: ArrayBuffer;\n}\nexport const getArrayBufferInfo: (data: ArrayBuffer) => ArrayBufferInfo | undefined; // napi_get_arraybuffer_info\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test interface napi_get_arraybuffer_info\ntry {\n  let typedArray = new Uint8Array([1, 2, 3, 4, 5]);\n  let buffer = typedArray.buffer;\n  let result = testNapi.getArrayBufferInfo(buffer) as testNapi.ArrayBufferInfo;\n  let resBuffer = new Uint8Array(result.buffer);\n  hilog.info(0x0000, 'testTag', 'Test Node-API get_arrayBuffer_info byteLength: %{public}d buffer: %{public}s', result.byteLength, JSON.stringify(resBuffer));\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API get_arrayBuffer_info error: %{public}s', error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test Node-API napi_get_arraybuffer_info byteLength: 5 buffer: {\"0\":1,\"1\":2,\"2\":3,\"3\":4,\"4\":5}"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_detach_arraybuffer",
      children: "napi_detach_arraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分离给定ArrayBuffer的底层数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_detached_arraybuffer",
      children: "napi_is_detached_arraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断给定的ArrayBuffer是否已被分离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_detach_arraybuffer\nstatic napi_value DetachedArrayBuffer(napi_env env, napi_callback_info info)\n{\n    // 调用napi_detach_arraybuffer接口分离给定ArrayBuffer的底层数据\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    napi_value arrayBuffer = args[0];\n    napi_detach_arraybuffer(env, arrayBuffer);\n    // 将分离后的arraybuffer传出去\n    return arrayBuffer;\n}\n\n// napi_is_detach_arraybuffer\nstatic napi_value IsDetachedArrayBuffer(napi_env env, napi_callback_info info)\n{\n    // 调用napi_is_detached_arraybuffer判断给定的arraybuffer是否已被分离\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    napi_value arrayBuffer = args[0];\n    bool result = false;\n    napi_is_detached_arraybuffer(env, arrayBuffer, &result);\n    // 将返回值通过napi_get_boolean接口转成napi_value传出去做打印\n    napi_value returnValue;\n    napi_get_boolean(env, result, &returnValue);\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const detachedArrayBuffer: (buffer:ArrayBuffer) => ArrayBuffer; // napi_detach_arraybuffer\nexport const isDetachedArrayBuffer: (arrayBuffer: ArrayBuffer) => boolean; //napi_is_detached_arraybuffer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test interface napi_detach_arraybuffer and napi_is_detached_arraybuffer\ntry {\n  const bufferArray = new ArrayBuffer(8);\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_detached_arraybuffer one: %{public}s',\n    testNapi.isDetachedArrayBuffer(bufferArray));\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_detached_arraybuffer two: %{public}s ',\n    testNapi.isDetachedArrayBuffer(testNapi.detachedArrayBuffer(bufferArray)));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_is_detached_arraybuffer error: %{public}s',\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test Node-API napi_is_detached_arraybuffer one: false"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test Node-API napi_is_detached_arraybuffer two: true"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_arraybuffer",
      children: "napi_create_arraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在C/C++中创建一个具有指定字节长度的ArkTS ArrayBuffer对象，如果调用者想要直接操作缓冲区，则可以选择将底层缓冲区返回给调用者。要从ArkTS写入此缓冲区，需要创建类型化数组或DataView对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(344675)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_create_arraybuffer在byte_length为0或超大值时，data返回值将为nullptr。因此在对data进行使用前，有必要对其进行判空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_arraybuffer\nstatic napi_value CreateArrayBuffer(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_value result = nullptr;\n    // 解析传递的参数\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    int32_t value;\n    size_t length;\n    // 将ArkTS侧传递的参数转换为size_t类型，作为napi_create_arraybuffer的参数\n    napi_get_value_int32(env, argv[0], &value);\n    length = size_t(value);\n    void *data = nullptr;\n    // 创建一个新的ArrayBuffer\n    napi_create_arraybuffer(env, length, &data, &result);\n    if (data != nullptr) {\n        // 确保安全后才能使用data进行操作\n    } else {\n        // 处理内存分配失败的情况\n        OH_LOG_ERROR(LOG_APP, \"Failed to allocate memory for ArrayBuffer\");\n        return nullptr;\n    }\n    // 返回ArrayBuffer\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createArrayBuffer: (size: number) => ArrayBuffer; // napi_create_arraybuffer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test interface napi_create_arraybuffer\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_arraybuffer:%{public}s',\n  testNapi.createArrayBuffer(10).toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上代码如果要在native cpp中打印日志，需在CMakeLists.txt文件中添加以下配置信息（并添加头文件：#include \"hilog/log.h\"）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CMakeLists.txt\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test Node-API napi_create_arraybuffer:[object ArrayBuffer]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "生命周期和内存管理"
          })
        }), "：在使用Node-API处理ArrayBuffer时，需注意，void*类型的buffer数据段生命周期由引擎管理，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-guidelines#%E9%98%B2%E6%AD%A2%E9%87%8D%E5%A4%8D%E9%87%8A%E6%94%BE%E8%8E%B7%E5%8F%96%E7%9A%84buffer",
          children: "不允许用户自己delete，否则会double free"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "需注意申请buffer大小"
          })
        }), "：当byte_length很大时，分配失败并不会抛异常，参数data指向的内存为nullptr。建议对*data == nullptr做严格判断，并对超大byte_length做限额检验，避免OOM。"]
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
344675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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