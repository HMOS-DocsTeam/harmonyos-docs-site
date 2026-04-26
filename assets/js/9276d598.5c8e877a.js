"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["588912"], {
790254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_array_use_napi_about_array_md_927_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-array-use-napi-about-array-md-927.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_array_use_napi_about_array_md_927_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-array/use-napi-about-array","title":"使用Node-API接口进行array相关开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-array/use-napi-about-array.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-array","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-array/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-array/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用Node-API接口进行array相关开发","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-array","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API进行扩展能力功能开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-extension/"},"next":{"title":"使用Node-API接口进行ArrayBuffer相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-arraybuffer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-array/use-napi-about-array.md


const frontMatter = {
	title: '使用Node-API接口进行array相关开发',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-array',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行array相关开发';

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
  "value": "napi_create_array",
  "id": "napi_create_array",
  "level": 3
}, {
  "value": "napi_create_array_with_length",
  "id": "napi_create_array_with_length",
  "level": 3
}, {
  "value": "napi_get_array_length",
  "id": "napi_get_array_length",
  "level": 3
}, {
  "value": "napi_is_array",
  "id": "napi_is_array",
  "level": 3
}, {
  "value": "napi_set_element",
  "id": "napi_set_element",
  "level": 3
}, {
  "value": "napi_get_element",
  "id": "napi_get_element",
  "level": 3
}, {
  "value": "napi_has_element",
  "id": "napi_has_element",
  "level": 3
}, {
  "value": "napi_delete_element",
  "id": "napi_delete_element",
  "level": 3
}, {
  "value": "napi_create_typedarray",
  "id": "napi_create_typedarray",
  "level": 3
}, {
  "value": "napi_is_typedarray",
  "id": "napi_is_typedarray",
  "level": 3
}, {
  "value": "napi_get_typedarray_info",
  "id": "napi_get_typedarray_info",
  "level": 3
}, {
  "value": "napi_create_dataview",
  "id": "napi_create_dataview",
  "level": 3
}, {
  "value": "napi_is_dataview",
  "id": "napi_is_dataview",
  "level": 3
}, {
  "value": "napi_get_dataview_info",
  "id": "napi_get_dataview_info",
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
        id: "使用node-api接口进行array相关开发",
        children: "使用Node-API接口进行array相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API接口进行array相关开发时，调用相关接口可以在Node-API模块中直接操作和处理ArkTS中的数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API接口进行数组（array）相关开发时，涉及的基本概念主要包括数组的创建、访问、修改、遍历以及与数组相关的操作。这些概念对于理解如何在Node-API模块中与ArkTS数组交互非常重要。以下是一些关键概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数组的创建"
          })
        }), "：在Node-API模块中需要创建一个新的ArkTS数组。可以使用napi_create_array接口创建数组，并将数组传递给ArkTS层。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数组相关操作"
          })
        }), "：在Node-API模块中通过对应的接口获取ArkTS数组的长度，检索指定索引处的元素以及设置指定索引处的元素值。这样可以实现Node-API模块与ArkTS数组的交互。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "TypedArray"
          })
        }), "：ArkTS 中的 TypedArray 是一种描述二进制数据的类数组数据视图，可以理解为指定元素类型的数组。TypedArray 没有直接构造器，但可以通过其子类构造器创建。TypedArray 的子类包括：Int8Array、Uint8Array、Uint8ClampedArray、Int16Array、Int32Array 等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "DataView"
          })
        }), "：DataView是ArkTS中的一种灵活的二进制数据访问视图。它提供了从ArrayBuffer读取和写入多种数值类型的方法。与TypedArray不同，DataView不要求数据必须按特定字节对齐，因此可以处理任意字节偏移的数据结构。DataView支持以下方法（均有对应的get和set版本）：Int8、Uint8、Int16、Uint16、Int32、Uint32、Float32、Float64等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ArrayBuffer"
          })
        }), "：ArrayBuffer 是固定长度的二进制数据缓冲区。它不能直接读写，但可以通过 TypedArray 或 DataView 来操作其内容。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API接口进行数组相关开发时，可以处理各种涉及ArkTS数组的操作和交互场景。以下是几个具体的使用场景介绍："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_create_array",
              children: "napi_create_array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中向ArkTS层创建一个ArkTS数组对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_create_array_with_length",
              children: "napi_create_array_with_length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中向ArkTS层创建指定长度的ArkTS数组对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_get_array_length",
              children: "napi_get_array_length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中获取ArkTS数组对象的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_is_array",
              children: "napi_is_array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中判断一个napi_value值是否为数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_set_element",
              children: "napi_set_element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中对ArkTS数组对象的特定索引处设置一个值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_get_element",
              children: "napi_get_element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中从ArkTS数组对象的特定索引处获取一个值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_has_element",
              children: "napi_has_element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中判断ArkTS数组对象请求索引处是否包含元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_delete_element",
              children: "napi_delete_element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中从ArkTS数组对象中删除请求索引对应的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_create_typedarray",
              children: "napi_create_typedarray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中创建指定类型的TypedArray，例如Uint8Array、Int32Array等，通常用于将Node-API模块中的数据转换为ArkTS中的TypedArray，以便进行高性能的数据处理操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_is_typedarray",
              children: "napi_is_typedarray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中判断一个给定的napi_value是否为TypedArray对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_get_typedarray_info",
              children: "napi_get_typedarray_info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中获得某个TypedArray的各种属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_create_dataview",
              children: "napi_create_dataview"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中创建一个DataView对象，可以访问和操作二进制数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_is_dataview",
              children: "napi_is_dataview"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中判断给定的napi_value是否为ArkTS中的DataView对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://nodejs.org/docs/latest-v18.x/api/n-api.html#napi_get_dataview_info",
              children: "napi_get_dataview_info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中获得某个DataView的各种属性。"
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
      }), "，本文仅对接口对应C++及ArkTS相关代码进行展示。具体使用见示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文cpp部分代码所需引用的头文件如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文ArkTS侧示例代码所需的模块导入如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_array",
      children: "napi_create_array"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在Node-API模块中创建一个ArkTS数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static constexpr int INT_NUM_5 = 5; // 入参索引 数组长度\n\n// 使用Node-API接口进行array相关开发 napi_create_array\nstatic napi_value CreateArray(napi_env env, napi_callback_info info)\n{\n    // 创建一个空数组\n    napi_value jsArray = nullptr;\n    napi_create_array(env, &jsArray);\n    // 将创建好的数组进行赋值\n    for (int i = 0; i < INT_NUM_5; i++) {\n        napi_value element;\n        napi_create_int32(env, i, &element);\n        napi_set_element(env, jsArray, i, element);\n    }\n    // 返回已创建好的数组\n    return jsArray;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createArray: () => number[]; // 使用Node-API接口进行array相关开发 napi_create_array\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//使用Node-API接口进行array相关开发 napi_create_array\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_array:%{public}s',\n  JSON.stringify(testNapi.createArray()));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_array_with_length",
      children: "napi_create_array_with_length"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在Node-API模块中创建一个具有指定长度的ArkTS数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_create_array_with_length\nstatic napi_value CreateArrayWithLength(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_value jsArray = nullptr;\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 获取传递的数组长度\n    int32_t length = 0;\n    napi_get_value_int32(env, argv[0], &length);\n    // 使用napi_create_array_with_length创建指定长度的数组\n    napi_create_array_with_length(env, length, &jsArray);\n    // 返回数组\n    return jsArray;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createArrayWithLength: (length: number) => void[]; // 使用Node-API接口进行array相关开发 napi_create_array_with_length\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_create_array_with_length\nlet array = testNapi.createArrayWithLength(6);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_array_with_length:%{public}d', array.length);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_array_length",
      children: "napi_get_array_length"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定array的长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_get_array_length\nstatic napi_value GetArrayLength(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_value result;\n    uint32_t length;\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 检查参数是否为数组\n    bool isArray;\n    napi_is_array(env, args[0], &isArray);\n    if (!isArray) {\n        napi_throw_error(env, nullptr, \"Argument must be an array\");\n        return nullptr;\n    }\n    napi_get_array_length(env, args[0], &length);\n    // 创建返回值\n    napi_create_uint32(env, length, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getArrayLength: (arr: Array<any>) => number | undefined; // 使用Node-API接口进行array相关开发 napi_get_array_length\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_get_array_length\nconst arr = [0, 1, 2, 3, 4, 5];\nhilog.info(0x0000, 'testTag', 'Test Node-API get_array_length:%{public}d',\n  testNapi.getArrayLength(arr));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_array",
      children: "napi_is_array"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断给定ArkTS值是否为数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_is_array\nstatic napi_value IsArray(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 调用napi_is_array接口判断给定入参是否为array数组\n    bool result = false;\n    napi_status status = napi_is_array(env, args[0], &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_is_array fail\");\n        return nullptr;\n    }\n    // 将结果转成napi_value类型返回\n    napi_value returnValue;\n    napi_get_boolean(env, result, &returnValue);\n\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const isArray: <T>(data: Array<T> | T) => boolean | undefined; // 使用Node-API接口进行array相关开发 napi_is_array\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_is_array\ntry {\n  let value = new Array<number>(1);\n  let data = \"123\";\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_array: %{public}s',\n    testNapi.isArray<number>(value));\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_array: %{public}s',\n    testNapi.isArray<string>(data));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_is_array error: %{public}s', error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_set_element",
      children: "napi_set_element"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在ArkTS数组中设置指定索引位置的元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于以索引值为键的object，可以使用napi_set_element来设置属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static constexpr int INT_ARG_2 = 2; // 入参索引\n// ...\n// 使用Node-API接口进行array相关开发 napi_set_element\nstatic napi_value NapiSetElement(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 3;\n    napi_value args[3] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 检查第一个参数是否为数组\n    bool isArr = false;\n    napi_is_array(env, args[0], &isArr);\n    if (!isArr) {\n        napi_throw_error(env, nullptr, \"Argument should be an object of type array\");\n        return nullptr;\n    }\n    // 获取要设置的元素索引\n    double index = 0;\n    napi_status status = napi_get_value_double(env, args[1], &index);\n    if (status != napi_ok || index < 0) {\n        napi_throw_error(env, nullptr, \"The index should be a non-negative number\");\n        return nullptr;\n    }\n    // 将传入的值设置到数组指定索引位置\n    napi_set_element(env, args[0], static_cast<uint32_t>(index), args[INT_ARG_2]);\n\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiSetElement: <T>(arr: Array<T>, index: number,\n  value: T) => void; // 使用Node-API接口进行array相关开发 napi_set_element\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_set_element\ntry {\n  let arr = [10, 20, 30];\n  testNapi.napiSetElement<number | string>(arr, 1, 'newElement');\n  testNapi.napiSetElement<number | string>(arr, 2, 50);\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_set_element arr: %{public}s', arr.toString());\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_set_element arr[3]: %{public}s', arr[3]);\n  interface MyObject {\n    first: number;\n    second: number;\n  }\n  let obj: MyObject = {\n    first: 1,\n    second: 2\n  };\n  testNapi.napiSetElement<number | string | Object>(arr, 4, obj);\n  let objAsString = JSON.stringify(arr[4]);\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_set_element arr[4]: %{public}s', objAsString);\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_set_element error: %{public}s', error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_element",
      children: "napi_get_element"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于从ArkTS数组中获取请求索引位置的元素值。请求索引值应在数组的有效范围内，如果索引超出数组长度，函数会返回undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_get_element\nstatic napi_value NapiGetElement(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取请求元素的索引值\n    uint32_t index;\n    napi_get_value_uint32(env, args[1], &index);\n    // 获取请求索引位置的元素值并存储在result中\n    napi_value result;\n    napi_get_element(env, args[0], index, &result);\n\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiGetElement: <T>(arr: Array<T>,\n  index: number) => number | string | Object | boolean | undefined; // 使用Node-API接口进行array相关开发 napi_get_element\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_get_element\ninterface MyObject {\n  first: number;\n  second: number;\n}\n\nlet obj: MyObject = {\n  first: 1,\n  second: 2\n};\nlet arr = [10, 'hello', null, obj];\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_element arr[0]: %{public}d',\n  testNapi.napiGetElement<number | string | null | Object>(arr, 0));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_element arr[1]: %{public}s',\n  testNapi.napiGetElement<number | string | null | Object>(arr, 1));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_element arr[2]: %{public}s',\n  testNapi.napiGetElement<number | string | null | Object>(arr, 2));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_element arr[3]: %{public}s',\n  testNapi.napiGetElement<number | string | null | Object>(arr, 3));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_element arr[4]: %{public}s',\n  JSON.stringify(testNapi.napiGetElement(arr, 4)));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_element arr[null]: %{public}s',\n  testNapi.napiGetElement<number | string | null | Object>(arr, 5));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_has_element",
      children: "napi_has_element"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于判断ArkTS数组是否具有指定索引的元素。如果索引超出了对象的有效范围，函数返回false，表示没有元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_has_element\nstatic napi_value NapiHasElement(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取要判断的元素的索引\n    uint32_t index;\n    napi_get_value_uint32(env, args[1], &index);\n    // 判断指定索引位置的元素是否存在\n    bool hasElement = true;\n    napi_has_element(env, args[0], index, &hasElement);\n    // 将bool结果转换为napi_value并返回\n    napi_value result;\n    napi_get_boolean(env, hasElement, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiHasElement: <T>(arr: Array<T>, index: number) => boolean; // 使用Node-API接口进行array相关开发 napi_has_element\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_has_element\nlet arr = [10, 'hello', null, 'world'];\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_has_element arr[0]: %{public}s',\n  testNapi.napiHasElement<number | string | null>(arr, 0));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_has_element arr[7]: %{public}s',\n  testNapi.napiHasElement<number | string | null>(arr, 7));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_delete_element",
      children: "napi_delete_element"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于从ArkTS数组对象中删除请求索引的元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_delete_element\nstatic napi_value NapiDeleteElement(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取要删除的元素的索引\n    uint32_t index;\n    napi_get_value_uint32(env, args[1], &index);\n    // 尝试删除请求索引位置的元素\n    bool deleted = true;\n    napi_delete_element(env, args[0], index, &deleted);\n    // 将bool结果转换为napi_value并返回\n    napi_value result;\n    napi_get_boolean(env, deleted, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiDeleteElement: <T>(arr: Array<T>,\n  index: number) => boolean; // 使用Node-API接口进行array相关开发 napi_delete_element\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts需要同时导入前文示例代码中的napiHasElement、napiGetElement接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_delete_element\nlet arr = [10, 'hello', null, 'world'];\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_has_element arr[0]: %{public}s',\n  testNapi.napiHasElement<number | string | null>(arr, 0));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_delete_element arr[0]: %{public}s',\n  testNapi.napiDeleteElement<number | string | null>(arr, 0));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_has_element deleted arr[0]: %{public}s',\n  testNapi.napiHasElement<number | string | null>(arr, 0));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_element arr[0]: %{public}d',\n  testNapi.napiGetElement<number | string | null>(arr, 0));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_typedarray",
      children: "napi_create_typedarray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在Node-API模块中通过现有的ArrayBuffer创建指定类型的ArkTS TypedArray。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_create_typedarray\nstatic napi_value CreateTypedArray(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    int32_t typeNum = 0;\n    napi_get_value_int32(env, args[0], &typeNum);\n    napi_typedarray_type arrayType;\n    // 用于存储每个元素的大小\n    size_t elementSize = 0;\n    // 根据传递的类型值选择创建对应的类型数组\n    arrayType = static_cast<napi_typedarray_type>(typeNum);\n    switch (arrayType) {\n        case napi_int8_array:\n        case napi_uint8_array:\n        case napi_uint8_clamped_array:\n            elementSize = sizeof(int8_t);\n            break;\n        case napi_int16_array:\n        case napi_uint16_array:\n            elementSize = sizeof(int16_t);\n            break;\n        case napi_int32_array:\n        case napi_uint32_array:\n            elementSize = sizeof(int32_t);\n            break;\n        case napi_float32_array:\n            elementSize = sizeof(float);\n            break;\n        case napi_float64_array:\n            elementSize = sizeof(double);\n            break;\n        case napi_bigint64_array:\n        case napi_biguint64_array:\n            elementSize = sizeof(int64_t);\n            break;\n        default:\n        // 默认创建napi_int8_array类型\n            arrayType = napi_int8_array;\n            elementSize = sizeof(int8_t);\n            break;\n    }\n    size_t length = 3;\n    napi_value arrayBuffer = nullptr;\n    napi_value typedArray = nullptr;\n    void *data;\n    // 创建一个ArrayBuffer\n    napi_create_arraybuffer(env, length * elementSize, (void **)&data, &arrayBuffer);\n    // 根据给定类型创建TypedArray\n    napi_create_typedarray(env, arrayType, length, arrayBuffer, 0, &typedArray);\n    return typedArray;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const enum TypedArrayTypes {\n  INT8_ARRAY = 0,\n  UINT8_ARRAY,\n  UINT8_CLAMPED_ARRAY,\n  INT16_ARRAY,\n  UINT16_ARRAY,\n  INT32_ARRAY,\n  UINT32_ARRAY,\n  FLOAT32_ARRAY,\n  FLOAT64_ARRAY,\n  BIGINT64_ARRAY,\n  BIGUINT64_ARRAY,\n}\n\nexport const createTypedArray: <T>(type: TypedArrayTypes) => T; // 使用Node-API接口进行array相关开发 napi_create_typedarray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_create_typedarray\n// 传递要创建的类型值\nlet typedArray = testNapi.createTypedArray<Int8Array>(testNapi.TypedArrayTypes[\"INT8_ARRAY\"]);\nif (typedArray instanceof Int8Array) {\n  hilog.info(0x0000, 'testTag', ' Node-API napi_create_typedarray: Int8Array');\n  // ...\n}\nlet uint8Array = testNapi.createTypedArray<Uint8Array>(testNapi.TypedArrayTypes[\"UINT8_ARRAY\"]);\nif (uint8Array instanceof Uint8Array) {\n  hilog.info(0x0000, 'testTag', ' Node-API napi_create_typedarray: Uint8Array');\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要对use-napi-process.md中的模块初始化部分进行修改，具体见如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <string>\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    // 定义的TypedArray类型供ArkTS侧使用，用于存放typedArrayTypes类型，使用示例见ArkTS侧的createTypedArray函数\n    napi_value typedArrayTypes;\n    napi_create_object(env, &typedArrayTypes);\n    napi_value typeIndex;\n    std::string typeKeys[] = {\n        \"INT8_ARRAY\",   \"UINT8_ARRAY\",   \"UINT8_CLAMPED_ARRAY\", \"INT16_ARRAY\",      \"UINT16_ARRAY\",    \"INT32_ARRAY\",\n        \"UINT32_ARRAY\", \"FLOAT32_ARRAY\", \"FLOAT64_ARRAY\",       \"BIGINT64_ARRAY\", \"BIGUINT64_ARRAY\",\n    };\n    for (int32_t i = 0; i < sizeof(typeKeys) / sizeof(typeKeys[0]); i++) {\n        napi_create_int32(env, i, &typeIndex);\n        napi_set_named_property(env, typedArrayTypes, typeKeys[i].c_str(), typeIndex);\n    }\n    napi_property_descriptor desc[] = {\n        {\"createTypedArray\", nullptr, CreateTypedArray, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"TypedArrayTypes\", nullptr, nullptr, nullptr, nullptr, typedArrayTypes, napi_default, nullptr}\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_typedarray",
      children: "napi_is_typedarray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在Node-API模块中判断ArkTS侧给定的napi_value是否为TypedArray对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_is_typedarray\nstatic napi_value IsTypedarray(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 调用napi_is_typedarray接口判断给定入参类型是否为TypedArray。\n    bool result = false;\n    napi_status status = napi_is_typedarray(env, args[0], &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_is_typedarray fail\");\n        return nullptr;\n    }\n    // 将结果转成napi_value类型返回。\n    napi_value returnValue = nullptr;\n    napi_get_boolean(env, result, &returnValue);\n\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const isTypedarray: (data: Object) => boolean | undefined; // 使用Node-API接口进行array相关开发 napi_is_typedarray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_is_typedarray\ntry {\n  let value = new Uint8Array([1, 2, 3, 4]);\n  let data = \"123\";\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_typedarray: %{public}s',\n    testNapi.isTypedarray(value));\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_typedarray: %{public}s',\n    testNapi.isTypedarray(data));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_is_typedarray error: %{public}s', error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_typedarray_info",
      children: "napi_get_typedarray_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定TypedArray的各种属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_get_typedarray_info\nstatic napi_value GetTypedarrayInfo(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数，第一个参数为需要获得的信息的TypedArray类型数据，第二个参数为需要获得的信息类型的枚举值\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 将第二个参数转为int32类型便于比较\n    int32_t infoTypeParam;\n    napi_get_value_int32(env, args[1], &infoTypeParam);\n    // 定义枚举类型与ArkTS侧枚举类型InfoType顺序含义一致\n    enum InfoType { INFO_TYPE = 1, INFO_LENGTH, INFO_ARRAY_BUFFER, INFO_BYTE_OFFSET };\n    void *data;\n    napi_typedarray_type type;\n    size_t byteOffset;\n    size_t length;\n    napi_value arraybuffer;\n    // 调用接口napi_get_typedarray_info获得TypedArray类型数据的信息\n    napi_get_typedarray_info(env, args[0], &type, &length, &data, &arraybuffer, &byteOffset);\n    napi_value result = nullptr;\n    // 根据属性名，返回TypedArray对应的属性值\n    switch (infoTypeParam) {\n        case INFO_TYPE:\n            // 如果传入的参数是int8类型的TypedArray数据，它的类型（type）为napi_int8_array\n            napi_value int8_type;\n            napi_get_boolean(env, type == napi_int8_array, &int8_type);\n            result = int8_type;\n            break;\n        case INFO_LENGTH:\n            // TypedArray中元素的字节长度\n            napi_value napiLength;\n            napi_create_int32(env, length, &napiLength);\n            result = napiLength;\n            break;\n        case INFO_BYTE_OFFSET:\n            // TypedArray数组的第一个元素所在的基础原生数组中的字节偏移量\n            napi_value napiByteOffset;\n            napi_create_int32(env, byteOffset, &napiByteOffset);\n            result = napiByteOffset;\n            break;\n        case INFO_ARRAY_BUFFER:\n            // TypedArray下的ArrayBuffer\n            result = arraybuffer;\n            break;\n        default:\n            napi_throw_error(env, nullptr, \"infoType is not the InfoType\");\n            break;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getTypedarrayInfo: <T>(typeArray: T,\n  infoType: number) => ArrayBuffer | number | boolean; // 使用Node-API接口进行array相关开发 napi_get_typedarray_info\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_get_typedarray_info\n// 传入TypedArray类型数据。TypedArray是一种用来描述二进制数据的类数组数据视图，没有直接构造器，可以用其子类构造类数组\n// TypedArray的子类有: Int8Array Uint8Array Uint8ClampedArray Int16Array Int32Array等\nlet int8Array = new Int8Array([15, 7]);\n// 定义枚举类型 这些都是TypedArray的属性\nenum InfoType {\n  TYPE = 1, // 传入的TypedArray的类型\n  LENGTH = 2, // 传入的TypedArray的长度\n  ARRAY_BUFFER = 3, // TypedArray下的ArrayBuffer\n  BYTE_OFFSET = 4 // 数组的第一个元素所在的基础原生数组中的字节偏移量\n};\ntry {\n  let arrBuffer = testNapi.getTypedarrayInfo(int8Array, InfoType.ARRAY_BUFFER) as ArrayBuffer;\n  // 将arraybuffer转为数组\n  let arr = new Array(new Int8Array(arrBuffer));\n  hilog.info(0x0000, 'Node-API', 'get_typedarray_info_arraybuffer: %{public}s', arr.toString());\n  hilog.info(0x0000, 'Node-API', 'get_typedarray_info_isIn8Array: %{public}s', testNapi.getTypedarrayInfo(int8Array, InfoType.TYPE).toString());\n  hilog.info(0x0000, 'Node-API', 'get_typedarray_info_length: %{public}d', testNapi.getTypedarrayInfo(int8Array, InfoType.LENGTH));\n  hilog.info(0x0000, 'Node-API', 'get_typedarray_info_byte_offset: %{public}d', testNapi.getTypedarrayInfo(int8Array, InfoType.BYTE_OFFSET));\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_get_typedarray_info error: %{public}s', error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_dataview",
      children: "napi_create_dataview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建dataview对象，便于访问和操作二进制数据，需要提供一个指向二进制数据的缓冲区，并指定要包含的字节数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_create_dataview\nstatic napi_value CreateDataView(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_value arraybuffer = nullptr;\n    napi_value result = nullptr;\n    // DataView的字节长度\n    size_t byteLength = 12;\n    // 字节偏移量\n    size_t byteOffset = 4;\n    // 获取回调函数的参数信息\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 将参数转换为对象类型\n    napi_coerce_to_object(env, args[0], &arraybuffer);\n    // 创建一个数据视图对象，并指定字节长度和字节偏移量\n    napi_status status = napi_create_dataview(env, byteLength, arraybuffer, byteOffset, &result);\n    if (status != napi_ok) {\n        // 抛出创建DataView内容失败的错误\n        napi_throw_error(env, nullptr, \"Failed to create DataView\");\n        return nullptr;\n    }\n    // 获取DataView的指针和长度信息\n    uint8_t *data = nullptr;\n    size_t length = 0;\n    napi_get_dataview_info(env, result, &length, (void **)&data, nullptr, nullptr);\n    // 为DataView赋值\n    for (size_t i = 0; i < length; i++) {\n        data[i] = static_cast<uint8_t>(i + 1);\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createDataView: (arraybuffer:ArrayBuffer) => DataView | undefined; // 使用Node-API接口进行array相关开发 napi_create_dataview\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_create_dataview\nconst arrayBuffer = new ArrayBuffer(16);\nconst dataView = testNapi.createDataView(arrayBuffer) as DataView;\nhilog.info(0x0000, 'testTag', 'Test Node-API dataView：%{public}d', dataView.byteLength);\nhilog.info(0x0000, 'testTag', 'Test Node-API dataView第一个数据：%{public}d', dataView.getInt8(0));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_dataview",
      children: "napi_is_dataview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在Node-API模块中判断ArkTS侧给定的napi_value是否为DataView。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_is_dataview\nstatic napi_value IsDataView(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 调用napi_is_dataview接口判断给定入参是否为DataView数据。\n    bool result = false;\n    napi_status status = napi_is_dataview(env, args[0], &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_is_dataview fail\");\n        return nullptr;\n    }\n    // 将结果转成napi_value类型返回。\n    napi_value returnValue;\n    napi_get_boolean(env, result, &returnValue);\n\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const isDataView: (date: DataView | string) => boolean | undefined; // 使用Node-API接口进行array相关开发 napi_is_dataview\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_is_dataview\ntry {\n  let buffer = new ArrayBuffer(16);\n  let dataView = new DataView(buffer);\n  let data = \"123\";\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_dataview: %{public}s',\n    testNapi.isDataView(dataView));\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_dataview: %{public}s',\n    testNapi.isDataView(data));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_is_dataview error: %{public}s', error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_dataview_info",
      children: "napi_get_dataview_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定DataView的各种属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_get_dataview_info\nstatic napi_value GetDataViewInfo(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传入的参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 将第二个参数转为int32类型的数字\n    int32_t infoType;\n    napi_get_value_int32(env, args[1], &infoType);\n    size_t byteLength;\n    void *data;\n    napi_value arrayBuffer;\n    size_t byteOffset;\n    // 定义枚举类型与ArkTS侧枚举类型InfoType顺序含义一致\n    enum InfoType { BYTE_LENGTH = 0, ARRAY_BUFFER, BYTE_OFFSET };\n    // 获取dataview信息\n    napi_get_dataview_info(env, args[0], &byteLength, &data, &arrayBuffer, &byteOffset);\n    napi_value result = nullptr;\n    switch (infoType) {\n        case BYTE_LENGTH:\n            // 返回查询DataView的字节数\n            napi_value napiByteLength;\n            napi_create_int32(env, byteLength, &napiByteLength);\n            result = napiByteLength;\n            break;\n        case ARRAY_BUFFER:\n            // 返回查询DataView的arraybuffer\n            result = arrayBuffer;\n            break;\n        case BYTE_OFFSET:\n            // 返回查询DataView的偏移字节量\n            napi_value napiByteOffset;\n            napi_create_int32(env, byteOffset, &napiByteOffset);\n            result = napiByteOffset;\n            break;\n        default:\n            napi_throw_error(env, nullptr, \"infoType is not the InfoType\");\n            break;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getDataViewInfo: (dataView: DataView,\n  infoType: number) => ArrayBuffer | number; // 使用Node-API接口进行array相关开发 napi_get_dataview_info\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 使用Node-API接口进行array相关开发 napi_get_dataview_info\n// 创建一个ArrayBuffer\nlet arrayBuffer = new Int8Array([2, 5]).buffer;\n// 使用arrayBuffer创建一个dataView\nlet dataView = new DataView(arrayBuffer);\n// 定义一个枚举类型\nenum InfoType {\n  BYTE_LENGTH = 0,\n  ARRAY_BUFFER = 1,\n  BYTE_OFFSET = 2,\n};\ntry {\n  // 传入DataView类型参数查询DataView的字节数\n  hilog.info(0x0000, 'Node-API', 'get_dataview_info_bytelength %{public}d', testNapi.getDataViewInfo(dataView, InfoType.BYTE_LENGTH));\n  // 传入DataView类型参数查询DataView的ArrayBuffer\n  let arrBuffer = testNapi.getDataViewInfo(dataView, InfoType.ARRAY_BUFFER) as ArrayBuffer;\n  // 将arraybuffer转为数组\n  let arr = Array.from(new Int8Array(arrBuffer));\n  hilog.info(0x0000, 'Node-API', 'get_dataview_info_arraybuffer %{public}s', arr.toString());\n  // 传入DataView类型参数查询DataView开始投影的数据缓冲区中的字节偏移量\n  hilog.info(0x0000, 'Node-API', 'get_dataview_info_byteoffset %{public}d', testNapi.getDataViewInfo(dataView, InfoType.BYTE_OFFSET));\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_get_dataview_info error: %{public}s', error.message);\n}\n"
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