"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["866751"], {
295391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_basic_data_types_use_napi_basic_data_types_md_907_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-basic-data-types-use-napi-basic-data-types-md-907.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_basic_data_types_use_napi_basic_data_types_md_907_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-basic-data-types/use-napi-basic-data-types","title":"使用Node-API接口创建基本数据类型","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-basic-data-types/use-napi-basic-data-types.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-basic-data-types","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-basic-data-types/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-basic-data-types/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用Node-API接口创建基本数据类型","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-basic-data-types","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行buffer相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-buffer/"},"next":{"title":"使用Node-API进行class相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-class/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-basic-data-types/use-napi-basic-data-types.md


const frontMatter = {
	title: '使用Node-API接口创建基本数据类型',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-basic-data-types',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口创建基本数据类型';

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
  "value": "napi_get_value_uint32",
  "id": "napi_get_value_uint32",
  "level": 3
}, {
  "value": "napi_get_value_int32",
  "id": "napi_get_value_int32",
  "level": 3
}, {
  "value": "napi_get_value_int64",
  "id": "napi_get_value_int64",
  "level": 3
}, {
  "value": "napi_get_value_double",
  "id": "napi_get_value_double",
  "level": 3
}, {
  "value": "napi_create_int32",
  "id": "napi_create_int32",
  "level": 3
}, {
  "value": "napi_create_uint32",
  "id": "napi_create_uint32",
  "level": 3
}, {
  "value": "napi_create_int64",
  "id": "napi_create_int64",
  "level": 3
}, {
  "value": "napi_create_double",
  "id": "napi_create_double",
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
        id: "使用node-api接口创建基本数据类型",
        children: "使用Node-API接口创建基本数据类型"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS的Number类型是一个双精度64位二进制格式IEEE 754值。只有在-2^53+1到2^53-1范围内（闭区间）的整数才能在不丢失精度的情况下被表示，在超过该取值范围的情况下，需要使用BigInt对应的Node-API接口来处理更大范围的整数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用Node-API接口进行数值类型的创建和获取时，有一些基本概念需要了解："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数值类型"
          })
        }), "：在使用Node-API接口时，可能需要从Node-API模块数值类型转换为ArkTS数值类型值，或者从ArkTS数据类型值转换为Node-API模块数值类型。在进行数据类型转换时，需要注意数据范围是否匹配，以及有无符号整数和双精度数值等区别。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "错误处理"
          })
        }), "：在使用这些接口时，需要对可能发生的错误进行适当处理。比如，在创建整数值时可能发生内存分配错误或其他运行时错误，需要使用Node-API提供的错误处理机制来捕获并处理这些错误。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ArkTS交互"
          })
        }), "：在开发过程中，需要考虑如何将创建的数值类型值与ArkTS环境进行交互，包括传递参数、返回值等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下Node-API函数通常在开发ArkTS的Node-API模块时使用，以便处理数值类型值，帮助开发人员在Node-API模块中和ArkTS数值进行交互："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#napi_get_value_uint32",
              children: "napi_get_value_uint32"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将从ArkTS环境中获取的number类型数据转为Node-API模块中的uint32_t类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#napi_get_value_int32",
              children: "napi_get_value_int32"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将从ArkTS环境中获取的number类型数据转为Node-API模块中的int32_t类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#napi_get_value_int64",
              children: "napi_get_value_int64"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将从ArkTS环境中获取的number类型数据转为Node-API模块中的int64_t类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#napi_get_value_double",
              children: "napi_get_value_double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将从ArkTS环境中获取的number类型数据转为Node-API模块中的double类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-primitive#napi_get_value_bool",
              children: "napi_get_value_bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS环境中获取的boolean类型数据转为Node-API模块中的bool类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string#napi_get_value_string_utf8",
              children: "napi_get_value_string_utf8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS环境中获取的string类型数据转为Node-API模块中的utf8编码的字符类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string#napi_get_value_string_utf16",
              children: "napi_get_value_string_utf16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS环境中获取的string类型数据转为Node-API模块中的utf16编码的字符类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string#napi_get_value_string_latin1",
              children: "napi_get_value_string_latin1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS环境中获取的string类型数据转为Node-API模块中的ISO-8859-1编码的字符类型数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#napi_create_int32",
              children: "napi_create_int32"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Node-API模块中的int32_t类型转换为ArkTS环境中number类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#napi_create_uint32",
              children: "napi_create_uint32"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Node-API模块中的uint32_t类型转换为ArkTS环境中number类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#napi_create_int64",
              children: "napi_create_int64"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Node-API模块中的int64_t类型转换为ArkTS环境中number类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#napi_create_double",
              children: "napi_create_double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Node-API模块中的double类型转换为ArkTS环境中number类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-primitive#napi_get_boolean",
              children: "napi_get_boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Node-API模块中的bool类型转换为ArkTS环境中boolean类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string#napi_create_string_utf8",
              children: "napi_create_string_utf8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Node-API模块中的utf8编码的字符串类型转换为ArkTS环境中string类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string#napi_create_string_utf16",
              children: "napi_create_string_utf16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Node-API模块中的utf16编码的字符串类型转换为ArkTS环境中string类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string#napi_create_string_latin1",
              children: "napi_create_string_latin1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Node-API模块中的ISO-8859-1编码的字符串类型转换为ArkTS环境中string类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string#napi_create_external_string_ascii",
              children: "napi_create_external_string_ascii"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Node-API模块中的ascii编码的字符串类型无拷贝的转换为ArkTS环境中string类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string#napi_create_external_string_utf16",
              children: "napi_create_external_string_utf16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Node-API模块中的utf16编码的字符串类型无拷贝的转换为ArkTS环境中string类型。"
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
      id: "napi_get_value_uint32",
      children: "napi_get_value_uint32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于从ArkTS环境中获取32位无符号整数值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_uint32\nstatic napi_value GetValueUint32(napi_env env, napi_callback_info info)\n{\n    // 获取传入的数字类型参数\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    // 解析传入的参数\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n\n    uint32_t number = 0;\n    // 获取传入参数的值中的无符号32位整数\n    napi_status status = napi_get_value_uint32(env, argv[0], &number);\n    // 如果传递的参数不是数字,将会返回napi_number_expected，设置函数返回nullptr\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    napi_value result = nullptr;\n    // 创建传入参数无符号32位整数，并传出\n    napi_create_uint32(env, number, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getValueUint32: <T>(data: T) => number | undefined; // napi_get_value_uint32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_uint32\nlet value = testNapi.getValueUint32<number>(111111111111);\nlet data = testNapi.getValueUint32<string>(\"sssss\");\nhilog.info(0x0000, 'Node-API', 'get_value_uint32_number %{public}d', value);\n// 传入非数字\"sssss\"时函数返回undefined\nhilog.info(0x0000, 'Node-API', 'get_value_uint32_number %{public}s', data);\n// 传入uint32范围内的数字100时函数返回原数字\nhilog.info(0x0000, 'Node-API', 'get_value_uint32_number %{public}d',\n  testNapi.getValueUint32<number>(100));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_int32",
      children: "napi_get_value_int32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将ArkTS value转为Node-API模块中的int32类型数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_int32\nstatic napi_value GetValueInt32(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    int32_t result32 = 0;\n    // 解析传递的参数\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 将前端传过来的参数转为Node-API模块的int32类型\n    napi_status status = napi_get_value_int32(env, args[0], &result32);\n    // 如果传递的参数不是数字napi_get_value_int32接口将会返回napi_number_expected，设置函数返回nullptr\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    // 调用napi_create_int32接口将int32类型的数据转为napi_value返回\n    napi_value napiResult32 = nullptr;\n    napi_create_int32(env, result32, &napiResult32);\n    return napiResult32;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getValueInt32: (value: number | string) => number | undefined; // napi_get_value_int32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_int32\n// 传入非数字“ss”时函数返回undefined\nhilog.info(0x0000, 'Node-API', 'get_value_int32_not_number %{public}s', testNapi.getValueInt32('ss'));\n// 传入int32范围内的数字100时函数返回原数字\nhilog.info(0x0000, 'Node-API', 'get_value_int32_number %{public}d', testNapi.getValueInt32(100));\n// 传入68719476735，此数字的二进制为111111111111111111111111111111111111，在int32类型中此二进制代表数字-1\nhilog.info(0x0000, 'Node-API', 'get_value_int32_oversize %{public}d',\n  testNapi.getValueInt32(68719476735));\n// 大于2的31次-1的数字且不是二进制为111111111111111111111111111111111111这样的在int32中有特殊含义的数字也会溢出，导致数值发生改变，返回值按后32位二进制编码解码\nhilog.info(0x0000, 'Node-API', 'get_value_int32_oversize %{public}d',\n  testNapi.getValueInt32(687194767355));\n// 传入NAN（not a number）、+Infinity（正无穷）或-Infinity（负无穷），会返回数字0\nhilog.info(0x0000, 'Node-API', 'get_value_int32_number_NAN %{public}d', testNapi.getValueInt32(NaN));\nhilog.info(0x0000, 'Node-API', 'get_value_int32_number_+Infinity %{public}d',\n  testNapi.getValueInt32(+Infinity));\nhilog.info(0x0000, 'Node-API', 'get_value_int32_number_-Infinity %{public}d',\n  testNapi.getValueInt32(-Infinity));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_int64",
      children: "napi_get_value_int64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将ArkTS value转为Node-API模块中的int64类型数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_int64\nstatic napi_value GetValueInt64(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    int64_t result64 = 0;\n    // 解析传递的值\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 将前端传过来的参数转为Node-API模块的int64类型\n    napi_status status = napi_get_value_int64(env, args[0], &result64);\n    // 如果传递的参数不是数字, 返回napi_number_expected.\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    // 调用napi_create_int64接口将int64类型的数据转为napi_value返回前端\n    napi_value napiResult64 = nullptr;\n    napi_create_int64(env, result64, &napiResult64);\n    return napiResult64;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getValueInt64: (value: number | string) => number | undefined; // napi_get_value_int64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_int64\n// 输入不超过int64表示范围的数字，会返回该数字\nhilog.info(0x0000, 'Node-API', 'get_value_int64_number %{public}d', testNapi.getValueInt64(80));\n// 传入非数字“ss”，获得函数返回的值应为undefined\nhilog.info(0x0000, 'Node-API', 'get_value_int64_not_number %{public}s',\n  testNapi.getValueInt64('sAs'));\n// 输入超过int64表示范围的数字会溢出，失去精度，导致输入数字与返回数字不相等\nhilog.info(0x0000, 'Node-API', 'get_value_int64_number_oversize %{public}d',\n  testNapi.getValueInt64(9223372036854775809));\n// 传入NAN（not a number）、+Infinity（正无穷）或-Infinity（负无穷）接口返回数字0\nhilog.info(0x0000, 'Node-API', 'get_value_int64_number_NAN %{public}d', testNapi.getValueInt64(NaN));\nhilog.info(0x0000, 'Node-API', 'get_value_int64_number_+Infinity %{public}d',\n  testNapi.getValueInt64(+Infinity));\nhilog.info(0x0000, 'Node-API', 'get_value_int64_number_-Infinity %{public}d',\n  testNapi.getValueInt64(-Infinity));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_double",
      children: "napi_get_value_double"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将ArkTS value转为Node-API模块中的double类型数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_double\nstatic napi_value GetDouble(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    double value = 0;\n    napi_status status = napi_get_value_double(env, args[0], &value);\n    // 传入非数字接口返回napi_number_expected\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    napi_value result = nullptr;\n    napi_create_double(env, value, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getDouble: (value: number | string) => number | undefined; // napi_get_value_double\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_double\n// 输入数字，返回该数字\nhilog.info(0x0000, 'Node-API', 'get_value_double_number %{public}d', testNapi.getDouble(80.885));\n// 传入非数字，获得函数返回的值应为undefined\nhilog.info(0x0000, 'Node-API', 'get_value_double_not_number %{public}s', testNapi.getDouble('sAs'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_int32",
      children: "napi_create_int32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个ArkTS数字（int32类型）的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_int32\nstatic napi_value CreateInt32(napi_env env, napi_callback_info info)\n{\n    // int32_t是有符号的32位整数类型，表示带有符号的整数，它的范围是从-2^31到2^31 - 1，也就是-2147483648到2147483647\n    // 要表示的整数值\n    int32_t value = -26;\n    // 创建ArkTS中的int32数字\n    napi_value result = nullptr;\n    napi_status status = napi_create_int32(env, value, &result);\n    if (status != napi_ok) {\n        // 处理错误\n        napi_throw_error(env, nullptr, \"Failed to create int32 value\");\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createInt32: () => number; // napi_create_int32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_int32\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_int32：' + testNapi.createInt32());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_uint32",
      children: "napi_create_uint32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个ArkTS数字（uint32类型）的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_uint32\nstatic napi_value CreateUInt32(napi_env env, napi_callback_info info)\n{\n    // 如果使用\n    // uint32_t类型来定义-26，会发生溢出，溢出时会对结果进行模运算，将负数的二进制补码转换为相应的正数。-26输出4294967270\n    // uint32_t是无符号的32位整数类型，只能表示非负整数。它的范围是从0到2 ^32 - 1，即0到4294967295\n    // 要表示的整数值\n    uint32_t value = 26;\n    // 创建ArkTS中的uint32数字\n    napi_value result = nullptr;\n    napi_status status = napi_create_uint32(env, value, &result);\n    if (status != napi_ok) {\n        // 处理错误\n        napi_throw_error(env, nullptr, \"Failed to create uint32 value\");\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createUInt32: () => number; // napi_create_uint32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_uint32\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_uint32: ' + testNapi.createUInt32());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_int64",
      children: "napi_create_int64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个ArkTS数字（int64类型）的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_int64\nstatic napi_value CreateInt64(napi_env env, napi_callback_info info)\n{\n    // int64是有符号的64位整数类型，可以表示范围从-2^63到2^63 - 1的整数，即 -9223372036854775808到9223372036854775807\n    // 要表示的整数值\n    int64_t value = 2147483648;\n    // 使用给定数值创建一个ArkTS number，仅能准确表示范围从-2^53 + 1到2^53 - 1（闭区间）的整数\n    // 如果想表示的数值超过了2^53，请使用napi_create_bigint64接口\n    napi_value result = nullptr;\n    napi_status status = napi_create_int64(env, value, &result);\n    if (status != napi_ok) {\n        // 处理错误\n        napi_throw_error(env, nullptr, \"Failed to create int64 value\");\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createInt64: () => number; // napi_create_int64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_int64\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_int64: ' + testNapi.createInt64());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_double",
      children: "napi_create_double"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个ArkTS数字（double类型）的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_double\nstatic napi_value CreateDouble(napi_env env, napi_callback_info info)\n{\n    double value = 1.234;\n    // 创建ArkTS中的double数字\n    napi_value result = nullptr;\n    napi_status status = napi_create_double(env, value, &result);\n    if (status != napi_ok) {\n        // 处理错误\n        napi_throw_error(env, nullptr, \"Failed to create double value\");\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createDouble: () => number; // napi_create_double\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_double\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_double: ' + testNapi.createDouble());\n"
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