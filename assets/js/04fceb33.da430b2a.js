"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["438338"], {
872489(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_buffer_use_napi_about_buffer_md_04f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-buffer-use-napi-about-buffer-md-04f.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_buffer_use_napi_about_buffer_md_04f_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-buffer/use-napi-about-buffer","title":"使用Node-API接口进行buffer相关开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-buffer/use-napi-about-buffer.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-buffer","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-buffer/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-buffer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用Node-API接口进行buffer相关开发","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-buffer","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口操作bigint类型值","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-bigint/"},"next":{"title":"使用Node-API接口创建基本数据类型","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-basic-data-types/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-buffer/use-napi-about-buffer.md


const frontMatter = {
	title: '使用Node-API接口进行buffer相关开发',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-buffer',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行buffer相关开发';

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
  "value": "场景和功能使用",
  "id": "场景和功能使用",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "napi_create_buffer",
  "id": "napi_create_buffer",
  "level": 3
}, {
  "value": "napi_create_buffer_copy",
  "id": "napi_create_buffer_copy",
  "level": 3
}, {
  "value": "napi_create_external_buffer",
  "id": "napi_create_external_buffer",
  "level": 3
}, {
  "value": "napi_get_buffer_info",
  "id": "napi_get_buffer_info",
  "level": 3
}, {
  "value": "napi_is_buffer",
  "id": "napi_is_buffer",
  "level": 3
}, {
  "value": "napi_create_external_arraybuffer",
  "id": "napi_create_external_arraybuffer",
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
        id: "使用node-api接口进行buffer相关开发",
        children: "使用Node-API接口进行buffer相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，Buffer是一种用于处理二进制数据的数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API接口进行buffer相关开发时，可以通过Buffer对象实现ArkTS代码与Node-API模块之间的二进制数据交互，包括创建、操作Buffer对象，以处理I/O、网络传输等场景中的二进制数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Buffer对象"
          })
        }), "：用于表示一段二进制数据的对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "外部Buffer"
          })
        }), "：在Node-API模块中创建的Buffer，可以与现有的数据关联起来而不需要复制数据到新的Buffer中。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能使用",
      children: "场景和功能使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下这些接口用于有效地与ArkTS层进行交互，这使Node-API模块能够更好地处理ArkTS层的二进制数据，比如处理文件I/O、网络传输等操作："
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
            children: "napi_create_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建并获取一个指定大小的ArkTS Buffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer_copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建并获取一个指定大小的ArkTS Buffer，并以给定的入参数据对buffer的缓冲区进行初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化，该接口可为Buffer附带额外数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS Buffer底层数据缓冲区及其长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为Buffer对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于分配一个附加有外部数据的ArkTS ArrayBuffer。外部ArrayBuffer是一个特殊类型的ArrayBuffer，它持有对外部数据的引用而不实际拥有数据存储。"
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
      id: "napi_create_buffer",
      children: "napi_create_buffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口用于创建Buffer对象。Buffer对象是用于在Node-API模块中操作二进制数据的一种特殊类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <string>\n#include \"hilog/log.h\"\n#include \"napi/native_api.h\"\n\nstatic napi_value CreateBuffer(napi_env env, napi_callback_info info)\n{\n    std::string str(\"CreateBuffer\");\n    void *bufferPtr = nullptr;\n    size_t bufferSize = str.size();\n    napi_value buffer = nullptr;\n    // 调用napi_create_buffer接口创建并获取一个指定大小的ArkTS Buffer\n    napi_status status = napi_create_buffer(env, bufferSize + 1, &bufferPtr, &buffer);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"napi_create_buffer failed\");\n        return nullptr;\n    }\n    // 将字符串str的值复制到buffer的内存中\n    strcpy((char *)bufferPtr, str.data());\n    return buffer;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const createBuffer: () => string;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_create_buffer: %{public}s', testNapi.createBuffer().toString());\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_create_buffer error');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_buffer_copy",
      children: "napi_create_buffer_copy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本接口是Node-API中用于创建并复制数据到Buffer对象的函数。它可以在Node-API模块中创建一个新的Buffer对象，并将指定的数据复制到该Buffer对象中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <string>\n#include \"hilog/log.h\"\n#include \"napi/native_api.h\"\n\nstatic napi_value CreateBufferCopy(napi_env env, napi_callback_info info)\n{\n    // 要copy的内容\n    char str[] = \"CreateBufferCopy\";\n    napi_value buffer = nullptr;\n    // 调用napi_create_buffer_copy接口创建buffer并将str的内容copy到buffer\n    void* resultData = nullptr;\n    napi_status status = napi_create_buffer_copy(env, sizeof(str), str, &resultData, &buffer);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"napi_create_buffer_copy failed\");\n        return nullptr;\n    }\n    if (resultData != nullptr) {\n        OH_LOG_INFO(LOG_APP, \"Node-API resultData is : %{public}s.\", reinterpret_cast <const char*>(resultData));\n    } else {\n        OH_LOG_INFO(LOG_APP, \"Node-API resultData is nullptr.\");\n    }\n    return buffer;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const createBufferCopy: () => string;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_create_buffer_copy: %{public}s', testNapi.createBufferCopy().toString());\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_create_buffer_copy error');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_external_buffer",
      children: "napi_create_external_buffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当希望在ArkTS中使用现有的Node-API模块内存块，而不需要额外的拷贝时，可以使用napi_create_external_buffer。这将允许ArkTS层直接访问并操作该内存，避免额外的内存分配和拷贝操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstdlib>\n#include <string>\n#include <hilog/log.h>\n#include \"napi/native_api.h\"\n\n// 回调函数，用于释放内存\nvoid FinalizeCallback(napi_env env, void *data, void *hint)\n{\n    if (data == nullptr) {\n        return;\n    }\n    free(data);\n    data = nullptr;\n}\n\nstatic napi_value CreateExternalBuffer(napi_env env, napi_callback_info info)\n{\n    // 创建一个字符串\n    std::string str(\"CreateExternalBuffer\");\n    // 在堆上分配内存，大小为字符串的长度\n    void* data = malloc(str.size() + 1);\n    if (data == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"malloc failed\");\n        return nullptr;\n    }\n    memset(data, 0, str.size() + 1);\n    // 将字符串复制到分配的内存中\n    strcpy((char *)(data), (char*)(str.data()));\n    // 使用napi_create_external_buffer接口创建并获取一个指定大小buffer\n    napi_value buffer = nullptr;\n    napi_status status = napi_create_external_buffer(env, str.size(), data, FinalizeCallback, nullptr, &buffer);\n    if (status != napi_ok) {\n        free(data);\n        OH_LOG_ERROR(LOG_APP, \"napi_create_external_buffer failed\");\n        return nullptr;\n    }\n    return buffer;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const createExternalBuffer: () => string;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_create_external_buffer: %{public}s', testNapi.createExternalBuffer()\n    .toString());\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_create_external_buffer error');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_buffer_info",
      children: "napi_get_buffer_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中需要对Buffer对象中的数据执行特定的操作时，可以使用此接口来获取指向数据的指针和数据长度。这样可以在Node-API模块直接对数据进行操作，而无需进行数据的拷贝。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <string>\n#include \"hilog/log.h\"\n#include \"napi/native_api.h\"\n\nstatic napi_value GetBufferInfo(napi_env env, napi_callback_info info)\n{\n    // 创建一个字符串\n    std::string str(\"GetBufferInfo\");\n    napi_value buffer = nullptr;\n    void *bufferPtr = nullptr;\n    size_t bufferSize = str.size();\n    napi_status status = napi_create_buffer(env, bufferSize + 1, &bufferPtr, &buffer);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"napi_create_buffer failed\");\n        return nullptr;\n    }\n    strcpy((char *)bufferPtr, str.data());\n\n    // 获取Buffer的信息\n    void *tmpBufferPtr = nullptr;\n    size_t bufferLength = 0;\n    napi_get_buffer_info(env, buffer, &tmpBufferPtr, &bufferLength);\n\n    // 创建一个新的ArkTS字符串来保存Buffer的内容并返出去\n    if (bufferLength == 0 || ((char*)tmpBufferPtr)[bufferLength - 1] != '\\0') {\n        OH_LOG_ERROR(LOG_APP, \"Buffer is not null-terminated\");\n        return nullptr;\n    }\n    napi_value returnValue = nullptr;\n    napi_create_string_utf8(env, (char*)tmpBufferPtr, bufferLength, &returnValue);\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const getBufferInfo: () => string;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_buffer_info: %{public}s', testNapi.getBufferInfo().toString());\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_get_buffer_info error');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_buffer",
      children: "napi_is_buffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断给定ArkTS value是否为Buffer对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <string>\n#include \"napi/native_api.h\"\n\nstatic napi_value IsBuffer(napi_env env, napi_callback_info info)\n{\n    // 创建一个Buffer对象\n    std::string str = \"buffer\";\n    napi_value buffer = nullptr;\n    void *bufferPtr = nullptr;\n    napi_create_buffer(env, str.size(), &bufferPtr, &buffer);\n\n    // 调用napi_is_buffer接口判断创建的对象是否为buffer\n    bool result = false;\n    napi_is_buffer(env, buffer, &result);\n    // 将结果返回出去\n    napi_value returnValue = nullptr;\n    napi_get_boolean(env, result, &returnValue);\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const isBuffer: () => boolean;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_buffer: %{public}s', JSON.stringify(testNapi.isBuffer()));\n} catch (error) {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_buffer error');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_external_arraybuffer",
      children: "napi_create_external_arraybuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分配一个附加有外部数据的ArkTS ArrayBuffer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\ntypedef struct {\n    uint8_t *data;\n    size_t length;\n} BufferData;\n\nvoid FinalizeCallback(napi_env env, void *finalize_data, void *finalize_hint)\n{\n    // 获取终结时的数据\n    BufferData *bufferData = static_cast<BufferData *>(finalize_hint);\n\n    // 执行清理操作，比如释放资源\n    delete[] bufferData->data;\n    delete bufferData;\n}\n\nnapi_value CreateExternalArraybuffer(napi_env env, napi_callback_info info)\n{\n    // 创建一个有五个元素的C++数组\n    uint8_t *dataArray = new uint8_t[5]{1, 2, 3, 4, 5};\n    napi_value externalBuffer = nullptr;\n    BufferData *bufferData = new BufferData{dataArray, 5};\n\n    // 使用napi_create_external_arraybuffer创建一个外部Array Buffer对象，并指定终结回调函数\n    napi_status status =\n        napi_create_external_arraybuffer(env, dataArray, 5, FinalizeCallback, bufferData, &externalBuffer);\n    if (status != napi_ok) {\n        // 处理错误\n        delete[] dataArray;\n        delete bufferData;\n        napi_throw_error(env, nullptr, \"Node-API napi_create_external_arraybuffer fail\");\n        return nullptr;\n    }\n    napi_value outputArray;\n    // 使用napi_create_typedarray创建一个Array对象，并将externalBuffer对象作为参数传入\n    status = napi_create_typedarray(env, napi_int8_array, 5, externalBuffer, 0, &outputArray);\n    if (status != napi_ok) {\n        // 处理错误\n        napi_throw_error(env, nullptr, \"Node-API napi_create_typedarray fail\");\n        return nullptr;\n    }\n    return outputArray;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const createExternalArraybuffer: () => ArrayBuffer | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\nhilog.info(0x0000, 'testTag', 'Node-API createExternalArraybuffer: %{public}s',\n           JSON.stringify(testNapi.createExternalArraybuffer()));\n"
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