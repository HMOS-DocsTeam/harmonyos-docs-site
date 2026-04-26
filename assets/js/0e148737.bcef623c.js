"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["743997"], {
871127(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_extension_use_napi_about_extension_md_0e1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-extension-use-napi-about-extension-md-0e1.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_extension_use_napi_about_extension_md_0e1_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-extension/use-napi-about-extension","title":"使用Node-API进行扩展能力功能开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-extension/use-napi-about-extension.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-extension","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-extension/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-extension/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用Node-API进行扩展能力功能开发","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-extension","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API实现跨语言交互开发流程","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/use-napi-process/"},"next":{"title":"使用Node-API接口进行array相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-array/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-extension/use-napi-about-extension.md


const frontMatter = {
	title: '使用Node-API进行扩展能力功能开发',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-extension',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API进行扩展能力功能开发';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "模块加载",
  "id": "模块加载",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 3
}, {
  "value": "ArkTS Object相关",
  "id": "arkts-object相关",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-1",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-1",
  "level": 3
}, {
  "value": "运行指定abc文件",
  "id": "运行指定abc文件",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-2",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-2",
  "level": 3
}, {
  "value": "异步工作对象加入队列并指定优先级",
  "id": "异步工作对象加入队列并指定优先级",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-3",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-3",
  "level": 3
}, {
  "value": "给ArkTS对象绑定回调和回调所需的参数",
  "id": "给arkts对象绑定回调和回调所需的参数",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-4",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-4",
  "level": 3
}, {
  "value": "事件循环",
  "id": "事件循环",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-5",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-5",
  "level": 3
}, {
  "value": "ArkTS基础运行时环境",
  "id": "arkts基础运行时环境",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-6",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-6",
  "level": 3
}, {
  "value": "序列化和反序列化",
  "id": "序列化和反序列化",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-7",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-7",
  "level": 3
}, {
  "value": "根据任务指定的优先级和入队方式进行处理异步线程向ArkTS线程投递的任务",
  "id": "根据任务指定的优先级和入队方式进行处理异步线程向arkts线程投递的任务",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-8",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-8",
  "level": 3
}, {
  "value": "Sendable相关",
  "id": "sendable相关",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-9",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-9",
  "level": 3
}, {
  "value": "napi_wrap接口增强",
  "id": "napi_wrap接口增强",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-10",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-10",
  "level": 3
}, {
  "value": "napi提供多上下文环境能力",
  "id": "napi提供多上下文环境能力",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-11",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-11",
  "level": 3
}, {
  "value": "napi提供通过指针访问ArkTS String内存数据的功能",
  "id": "napi提供通过指针访问arkts-string内存数据的功能",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-12",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-12",
  "level": 3
}, {
  "value": "napi实现临界区作用域",
  "id": "napi实现临界区作用域",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-13",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-13",
  "level": 3
}, {
  "value": "napi支持创建轻量级的强引用对象",
  "id": "napi支持创建轻量级的强引用对象",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-14",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-14",
  "level": 3
}, {
  "value": "napi支持创建Sendable的强引用",
  "id": "napi支持创建sendable的强引用",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-15",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-15",
  "level": 3
}, {
  "value": "napi支持抛出错误对象的code属性类型为number的ArkTS Error",
  "id": "napi支持抛出错误对象的code属性类型为number的arkts-error",
  "level": 2
}, {
  "value": "接口描述",
  "id": "接口描述-16",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-16",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用node-api进行扩展能力功能开发",
        children: "使用Node-API进行扩展能力功能开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-data-types-interfaces#%E6%89%A9%E5%B1%95%E8%83%BD%E5%8A%9B",
        children: "扩展能力"
      }), "接口进一步扩展了Node-API的功能，提供了一些额外的接口，用于在Node-API模块中与ArkTS进行更灵活的交互和定制，这些接口可以用于创建自定义ArkTS对象等场景。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "使用Node-API实现跨语言交互开发流程"
      }), "，本文仅对接口对应C++及ArkTS相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文cpp部分代码所需引用的头文件如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include <bits/alltypes.h>\n#include <mutex>\n#include <unordered_set>\n#include <uv.h>\n#include \"hilog/log.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文ArkTS侧示例代码所需的模块导入如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\nimport { taskpool } from '@kit.ArkTS';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模块加载",
      children: "模块加载"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_load_module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中将abc文件作为模块加载，返回模块的命名空间，适用于需要在运行时动态加载模块或资源的应用程序，从而实现灵活的扩展和定制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module_with_info"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于在Node-API中进行模块的加载，当模块加载出来之后，可以使用函数napi_get_property获取模块导出的变量，也可以使用napi_get_named_property获取模块导出的函数，该函数可以在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime",
              children: "新创建的ArkTS基础运行时环境"
            }), "中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_module_register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有些功能可能需要通过Node-API模块来实现以获得更好的性能，通过将这些功能实现为自定义模块并注册到ArkTS环境中，可以在一定程度上提高整体的性能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_load_module"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module",
        children: "使用Node-API接口在主线程中进行模块加载"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_load_module_with_info"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module-with-info",
        children: "使用Node-API接口进行模块加载"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_module_register"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS代码环境中使用Node-API模块编写的代码来实现特定的功能，可以将这部分功能封装成自定义模块，然后通过napi_module_register将其注册到ArkTS代码环境中，以实现功能的扩展和复用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\n// 此模块是一个Node-API的回调函数\nstatic napi_value Add(napi_env env, napi_callback_info info)\n{\n    // 接受传入两个参数\n    size_t requireArgc = 2;\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);\n\n    // 将传入的napi_value类型的参数转化为double类型\n    double valueLeft;\n    double valueRight;\n    napi_get_value_double(env, args[0], &valueLeft);\n    napi_get_value_double(env, args[1], &valueRight);\n\n    // 将转化后的double值相加并转成napi_value返回给ArkTS代码使用\n    napi_value sum;\n    napi_create_double(env, valueLeft + valueRight, &sum);\n\n    return sum;\n}\n\n// C++函数Init用于初始化插件，用于将ArkTS层的函数或属性与C++层的函数进行关联\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    // 通过napi_property_descriptor结构体，可以定义需要导出的属性，并在Node-API模块中使用。napi_define_properties将属性与实际的C++函数进行关联，使其可以被ArkTS层访问和调用\n    napi_property_descriptor desc[] = {\n        { \"add\", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\n// 插件的初始化被定义在一个名为demoModule的结构体中，其中包含了模块的基本信息，比如模块的版本号、注册函数等\nstatic napi_module demoModule = {\n    .nm_version =1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\n// 在RegisterEntryModule函数中，使用napi_module_register函数注册并导出了这个插件\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const add: (a: number, b: number) => number; // 模块加载\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog.info(0x0000, 'testTag', 'Test Node-API 2 + 3 = %{public}d', testNapi.add(2, 3));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts-object相关",
      children: "ArkTS Object相关"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-1",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_object_with_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中使用给定的napi_property_descriptor创建ArkTS Object。descriptor的键名必须为string，且不可转为number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object_with_named_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中使用给定的napi_value和键名创建ArkTS Object。键名必须为string，且不可转为number。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-1",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_object_with_properties"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用给定的napi_property_descriptor作为属性去创建一个ArkTS对象，并且descriptor的键名必须为string，且不可转为number。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkTS Object相关 napi_create_object_with_properties\nstatic napi_value CreateObjectWithProperties(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    // 获取解析传递的参数\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 声明了一个napi_property_descriptor数组desc，其中包含了一个名为\"name\"的属性，其值为传入的第一个参数argv[0]。\n    napi_property_descriptor desc[] = {\n        {\"name\", nullptr, nullptr, nullptr, nullptr, argv[0], napi_default_jsproperty, nullptr}};\n    napi_value object = nullptr;\n    // 调用napi_create_object_with_properties来创建一个新的ArkTS对象，并将属性值添加到该对象中。\n    napi_create_object_with_properties(env, &object, sizeof(desc) / sizeof(desc[0]), desc);\n    napi_valuetype valueType;\n    napi_typeof(env, object, &valueType);\n    if (valueType == napi_object) {\n        return object;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createObjectWithProperties: (data: string) => {name:string}; // ArkTS Object相关 napi_create_object_with_properties\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkTS Object相关 napi_create_object_with_properties\nlet value1 = testNapi.createObjectWithProperties('createObject');\nhilog.info(0x0000, 'testTag', 'Node-API napi_create_object_with_properties:%{public}s',\n  JSON.stringify(value1));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_object_with_named_properties"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于使用给定的napi_value和键名创建一个ArkTS对象，并且给定的键名必须为string，且不可转为number。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkTS Object相关 napi_create_object_with_named_properties\nstatic napi_value CreateObjectWithNameProperties(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    // 获取解析传递的参数\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    napi_value obj = nullptr;\n    const char *key[] = {\n        \"name\",\n    };\n    const napi_value values[] = {\n        argv[0],\n    };\n    napi_property_descriptor desc[] = {{\"name\", nullptr, nullptr,\n                                        nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_status status = napi_create_object_with_named_properties(\n        env, &obj, sizeof(desc) / sizeof(desc[0]), key, values\n    );\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return obj;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createObjectWithNameProperties: (data: string) => undefined | { name: string }; // ArkTS Object相关 napi_create_object_with_named_properties\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkTS Object相关 napi_create_object_with_named_properties\nlet value2 = testNapi.createObjectWithNameProperties('ls');\ntry {\n  hilog.info(0x0000, 'testTag', 'Node-API napi_create_object_with_named_properties:%{public}s', JSON.stringify(value2));\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Node-API napi_create_object_with_named_properties: %{public}s', error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行指定abc文件",
      children: "运行指定abc文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-2",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_script_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在Node-API模块中运行指定abc文件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-2",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_run_script_path"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Node-API模块中运行abc文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(774481)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在信号函数中调用不安全，直接调用可能导致栈溢出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 运行指定abc文件 napi_run_script_path\nstatic napi_value RunScriptPath(napi_env env, napi_callback_info info)\n{\n    napi_value value = nullptr;\n    // 注意：记得在应用rawfile目录下放置.abc文件\n    const char *scriptPath = \"/entry/resources/rawfile/test.abc\";\n    // 使用napi_run_script_path函数执行指定路径中的文件\n    napi_status status = napi_run_script_path(env, scriptPath, &value);\n    // 检查是否执行成功，如果失败，返回false\n    napi_value returnValue = nullptr;\n    if (value == nullptr || status != napi_ok) {\n        napi_get_boolean(env, false, &returnValue);\n    } else {\n        napi_get_boolean(env, true, &returnValue);\n    }\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const runScriptPath: () => boolean; // 运行指定abc文件 napi_run_script_path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 运行指定abc文件 napi_run_script_path\ntry { // 在此处执行错误返回false，成功就返回true\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_run_script_path: %{public}s',\n    testNapi.runScriptPath());\n  // ···\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_run_script_path errorMessage: %{public}s',\n    error.message);\n  // ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "test.js代码，将JS代码编译为.abc文件，步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在SDK的ets/build-tools/ets-loader/bin/ark/build-win/bin目录下放置test.js文件"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行命令如es2abc.exe test.js --output test.abc后便可生成test.abc文件"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "放入指定路径中：/entry/resources/rawfile"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function add(a, b) {\n  return a + b;\n}\nadd(1, 2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异步工作对象加入队列并指定优先级",
      children: "异步工作对象加入队列并指定优先级"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-3",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_queue_async_work_with_qos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于将异步工作对象加入队列，让开发者能够根据QoS优先级来管理和调度异步工作的执行，从而更好地满足程序的性能和响应需求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-3",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_queue_async_work_with_qos"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将异步工作对象加到队列，由底层根据传入的qos优先级去调度执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "给arkts对象绑定回调和回调所需的参数",
      children: "给ArkTS对象绑定回调和回调所需的参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-4",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于给ArkTS对象绑定回调和回调所需的参数，其作用是为了给ArkTS对象携带Native信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-4",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_coerce_to_native_binding_object"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于给ArkTS Object绑定回调和回调所需的参数，给ArkTS Object携带Native信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n#include <mutex>\n#include <unordered_set>\n#include \"napi/native_api.h\"\n\nclass Object {\npublic:\n    Object() = default;\n    ~Object() = default;\n\n    static Object* GetInstance()\n    {\n        Object* instance = new Object();\n        return instance;\n    }\n\n    static napi_value GetAddress(napi_env env, napi_callback_info info)\n    {\n        napi_value thisVar = nullptr;\n        napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr);\n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        uint64_t addressVal = reinterpret_cast<uint64_t>(object);\n        napi_value address = nullptr;\n        napi_create_bigint_uint64(env, addressVal, &address);\n        return address;\n    }\n\n    // 获取数组大小\n    static napi_value GetSetSize(napi_env env, napi_callback_info info)\n    {\n        napi_value thisVar = nullptr;\n        napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr);\n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        std::lock_guard<std::mutex> lock(reinterpret_cast<Object*>(object)->numberSetMutex_);\n        uint32_t setSize = reinterpret_cast<Object*>(object)->numberSet_.size();\n        napi_value napiSize = nullptr;\n        napi_create_uint32(env, setSize, &napiSize);\n        return napiSize;\n    }\n\n    // 往数组里插入元素\n    static napi_value Store(napi_env env, napi_callback_info info)\n    {\n        size_t argc = 1;\n        napi_value args[1] = {nullptr};\n        napi_value thisVar = nullptr;\n        napi_get_cb_info(env, info, &argc, args, &thisVar, nullptr);\n        if (argc != 1) {\n            napi_throw_error(env, nullptr, \"Store args number must be one.\");\n            return nullptr;\n        }\n        napi_valuetype type = napi_undefined;\n        napi_typeof(env, args[0], &type);\n        if (type != napi_number) {\n            napi_throw_error(env, nullptr, \"Store args is not number.\");\n            return nullptr;\n        }\n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        uint32_t value = 0;\n        napi_get_value_uint32(env, args[0], &value);\n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        std::lock_guard<std::mutex> lock(reinterpret_cast<Object*>(object)->numberSetMutex_);\n        reinterpret_cast<Object *>(object)-> numberSet_.insert(value);\n        return nullptr;\n    }\n\n    // 删除数组元素\n    static napi_value Erase(napi_env env, napi_callback_info info)\n    {\n        size_t argc = 1;\n        napi_value args[1] = {nullptr};\n        napi_value thisVar = nullptr;\n        napi_get_cb_info(env, info, &argc, args, &thisVar, nullptr);\n        if (argc != 1) {\n            napi_throw_error(env, nullptr, \"Erase args number must be one.\");\n            return nullptr;\n        }\n        napi_valuetype type = napi_undefined;\n        napi_typeof(env, args[0], &type);\n        if (type != napi_number) {\n            napi_throw_error(env, nullptr, \"Erase args is not number.\");\n            return nullptr;\n        }\n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        uint32_t value = 0;\n        napi_get_value_uint32(env, args[0], &value);\n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        std::lock_guard<std::mutex> lock(reinterpret_cast<Object*>(object)->numberSetMutex_);\n        reinterpret_cast<Object *>(object)->numberSet_.erase(value);\n        return nullptr;\n    }\n\n    // 清空数组\n    static napi_value Clear(napi_env env, napi_callback_info info)\n    {\n        napi_value thisVar = nullptr;\n        napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr);\n        if (thisVar == nullptr) {\n            return nullptr;\n        }\n        void* object = nullptr;\n        napi_unwrap(env, thisVar, &object);\n        if (object == nullptr) {\n            return nullptr;\n        }\n        std::lock_guard<std::mutex> lock(reinterpret_cast<Object*>(object)->numberSetMutex_);\n        reinterpret_cast<Object *>(object)->numberSet_.clear();\n        return nullptr;\n    }\n\nprivate:\n    Object(const Object &) = delete;\n    Object &operator=(const Object &) = delete;\n\n    std::unordered_set<uint32_t> numberSet_{};\n    std::mutex numberSetMutex_{};\n};\n\nvoid FinalizerCallback(napi_env env, void *data, void *hint)\n{\n    return;\n}\n\n// 解绑回调，在序列化时调用，可在对象解绑时执行一些清理操作\nvoid* DetachCallback(napi_env env, void *value, void *hint)\n{\n    return value;\n}\n\n// 绑定回调，在反序列化时调用\nnapi_value AttachCallback(napi_env env, void* value, void* hint)\n{\n    napi_value object = nullptr;\n    napi_create_object(env, &object);\n    napi_property_descriptor desc[] = {\n        {\"getAddress\", nullptr, Object::GetAddress, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"getSetSize\", nullptr, Object::GetSetSize, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"store\", nullptr, Object::Store, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"erase\", nullptr, Object::Erase, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"clear\", nullptr, Object::Clear, nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, object, sizeof(desc) / sizeof(desc[0]), desc);\n    // 将JS对象object和native对象value生命周期进行绑定\n    napi_status status = napi_wrap(env, object, value, FinalizerCallback, nullptr, nullptr);\n    if (status != napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"Node-API attachCallback is failed.\");\n    }\n    // JS对象携带native信息\n    napi_coerce_to_native_binding_object(env, object, DetachCallback, AttachCallback, value, hint);\n    return object;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"getAddress\", nullptr, Object::GetAddress, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"getSetSize\", nullptr, Object::GetSetSize, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"store\", nullptr, Object::Store, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"erase\", nullptr, Object::Erase, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"clear\", nullptr, Object::Clear, nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    auto object = Object::GetInstance();\n    napi_status status = napi_wrap(env, exports, reinterpret_cast<void*>(object), FinalizerCallback, nullptr, nullptr);\n    if (status != napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"Node-API napi_wrap is failed.\");\n    }\n    napi_coerce_to_native_binding_object(env, exports, DetachCallback, AttachCallback, reinterpret_cast<void*>(object),\n                                         nullptr);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 给ArkTS对象绑定回调和回调所需的参数 napi_coerce_to_native_binding_object\nexport const getAddress: () => number;\n\nexport const getSetSize: () => number;\n\nexport const store: (a: number) => void;\n\nexport const erase: (a: number) => void;\n\nexport const clear: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.ets\nimport testNapi from 'libentry.so';\nimport { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction getAddress() {\n  let address: number = testNapi.getAddress();\n  console.info(\"taskpool:: address is \" + address);\n}\n\n@Concurrent\nfunction store(a:number, b:number, c:number) {\n  let size:number = testNapi.getSetSize();\n  console.info(\"set size is \" + size + \" before store\");\n  testNapi.store(a);\n  testNapi.store(b);\n  testNapi.store(c);\n  size = testNapi.getSetSize();\n  console.info(\"set size is \" + size + \" after store\");\n}\n\n@Concurrent\nfunction erase(a:number) {\n  let size:number = testNapi.getSetSize();\n  console.info(\"set size is \" + size + \" before erase\");\n  testNapi.erase(a);\n  size = testNapi.getSetSize();\n  console.info(\"set size is \" + size + \" after erase\");\n}\n\n@Concurrent\nfunction clear() {\n  let size:number = testNapi.getSetSize();\n  console.info(\"set size is \" + size + \" before clear\");\n  testNapi.clear();\n  size = testNapi.getSetSize();\n  console.info(\"set size is \" + size + \" after clear\");\n}\n\nasync function test01(): Promise<void> {\n    let address:number = testNapi.getAddress();\n    console.info(\"host thread address is \" + address);\n\n    let task1 = new taskpool.Task(getAddress);\n    await taskpool.execute(task1);\n\n    let task2 = new taskpool.Task(store, 1, 2, 3);\n    await taskpool.execute(task2);\n\n    let task3 = new taskpool.Task(store, 4, 5, 6);\n    await taskpool.execute(task3);\n\n    let task4 = new taskpool.Task(erase, 3);\n    await taskpool.execute(task4);\n\n    let task5 = new taskpool.Task(erase, 5);\n    await taskpool.execute(task5);\n\n    let task6 = new taskpool.Task(clear);\n    await taskpool.execute(task6);\n}\n\ntest01();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对ArkTS对象A调用napi_coerce_to_native_binding_object将开发者实现的detach/attach回调和native对象信息加到A上，再将A跨线程传递。跨线程传递需要对A进行序列化和反序列化。此处的序列化与反序列化是人为控制的，需要调用后文介绍的napi_serialize、napi_deserialize接口。过程如下图所示：在当前线程thread1序列化A得到数据data，序列化阶段执行detach回调。然后将data传给目标线程thread2，在thread2中反序列化data，执行attach回调，最终得到ArkTS对象A。此处的detach/attach是告知开发者序列化与反序列化执行完毕的回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(539494)/* ["default"] */.A) + "",
        width: "840",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件循环",
      children: "事件循环"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-5",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_run_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发底层的事件循环。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_stop_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止底层的事件循环。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-5",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_run_event_loop、napi_stop_event_loop"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-event-loop",
        children: "使用扩展的Node-API接口在异步线程中运行和停止事件循环"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts基础运行时环境",
      children: "ArkTS基础运行时环境"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-6",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建基础运行时环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_destroy_ark_runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁基础运行时环境。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-6",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_ark_runtime、napi_destroy_ark_runtime"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime",
        children: "使用Node-API接口创建ArkTS运行时环境"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "序列化和反序列化",
      children: "序列化和反序列化"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-7",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象转换为native数据。第一个参数env是接口执行的ArkTS环境；第二个参数object是待序列化的ArkTS对象；第三个参数transfer_list是存放需要以transfer传递的arrayBuffer的array，如不涉及可传undefined；第四个参数clone_list是存放需要克隆传递的Sendable对象的array，如不涉及可传undefined；第五个参数result是序列化结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_deserialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将native数据转为ArkTS对象。第一个参数env是接口执行的ArkTS环境；第二个参数buffer是序列化数据；第三个参数object是反序列化得到的结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_serialization_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除序列化数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-7",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_serialize、napi_deserialize、napi_delete_serialization_data"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将ArkTS对象转换为native数据、将native数据转为ArkTS对象、删除序列化数据等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 序列化和反序列化\nstatic napi_value AboutSerialize(napi_env env, napi_callback_info info)\n{\n    // 获取传入的ts的一个对象作为参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    napi_value undefined = nullptr;\n    // 构造napi_serialize方法所需参数\n    napi_get_undefined(env, &undefined);\n    void *data = nullptr;\n    // 调用napi_serialize方法将ts对象转化为native数据\n    napi_status status = napi_serialize(env, args[0], undefined, undefined, &data);\n    if (status != napi_ok || data == nullptr) {\n        napi_throw_error(env, nullptr, \"Node-API napi_serialize fail\");\n        return nullptr;\n    }\n    // 构造napi_value类型的数据，用于接收将native数据转化为ts对象后的数据\n    napi_value result = nullptr;\n    napi_deserialize(env, data, &result);\n    napi_value number = nullptr;\n    // 获取native数据转化为ts对象后的数据中的numKey属性的值\n    napi_get_named_property(env, result, \"numKey\", &number);\n    // 判断获取到的属性值是否为number类型\n    napi_valuetype valuetype;\n    napi_typeof(env, number, &valuetype);\n    if (valuetype != napi_number) {\n        napi_throw_error(env, nullptr, \"Node-API Wrong type of argument. Expects a number.\");\n        return nullptr;\n    }\n    // 调用napi_delete_serialization_data方法删除序列化数据\n    napi_delete_serialization_data(env, data);\n    // 返回获取到的属性值\n    return number;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const aboutSerialize: (obj: {numKey:number}) => number | undefined; // 序列化和反序列化\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Obj {\n  numKey: number = 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 序列化和反序列化\nlet obj: Obj = { numKey: 500 };\nhilog.info(0x0000, 'testTag', ' Node-API aboutSerialize: %{public}d', testNapi.aboutSerialize(obj));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "根据任务指定的优先级和入队方式进行处理异步线程向arkts线程投递的任务",
      children: "根据任务指定的优先级和入队方式进行处理异步线程向ArkTS线程投递的任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-8",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function_with_priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将指定优先级和入队方式的任务投递到ArkTS主线程。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-8",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_call_threadsafe_function_with_priority"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-call-threadsafe-function-with-priority",
        children: "使用Node-API接口从异步线程向ArkTS线程投递指定优先级和入队方式的的任务"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendable相关",
      children: "Sendable相关"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-9",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_is_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否是Sendable的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_sendable_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个sendable类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_object_with_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_property_descriptor创建一个sendable对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个sendable数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_array_with_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指定长度的sendable数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个sendable ArrayBuffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个sendable TypedArray。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_sendable_with_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包裹一个native实例到ArkTS对象中并指定大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS对象包裹的native实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除并获取ArkTS对象包裹的native实例，移除后回调将不再触发，需手动delete释放内存。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-9",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_is_sendable"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断给定ArkTS value是否是Sendable的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sendable相关 napi_is_sendable\nstatic napi_value IsSendable(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    bool isSendable = false;\n    napi_is_sendable(env, args[0], &isSendable);\n    napi_value result;\n    napi_get_boolean(env, isSendable, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const isSendable: <T>(a: T) => boolean; // Sendable相关 napi_is_sendable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sendable相关 napi_is_sendable\nlet value = testNapi.isSendable('createObject');\nhilog.info(0x0000, 'testTag', 'Node-API napi_is_sendable: %{public}s', JSON.stringify(value));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_define_sendable_class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个sendable类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic napi_value func(napi_env env, napi_callback_info info) {\n    napi_value val;\n    napi_create_string_utf8(env, \"func result\", NAPI_AUTO_LENGTH, &val);\n    return val;\n}\n\nstatic napi_value DefineSendableClass(napi_env env) {\n    napi_value str;\n    napi_create_string_utf8(env, \"str\", NAPI_AUTO_LENGTH, &str);\n\n    napi_property_descriptor props[] = {\n        {\"staticStr\", nullptr, nullptr, nullptr, nullptr, str,\n         static_cast<napi_property_attributes>(napi_static | napi_writable), nullptr},\n        {\"staticFunc\", nullptr, func, nullptr, nullptr, nullptr, napi_static, nullptr},\n        {\"str\", nullptr, nullptr, nullptr, nullptr, str, static_cast<napi_property_attributes>(1 << 9 | napi_writable),\n         nullptr},\n        {\"func\", nullptr, nullptr, nullptr, nullptr, nullptr,\n         static_cast<napi_property_attributes>(1 << 11 | napi_writable), nullptr},\n    };\n\n    napi_value sendableClass = nullptr;\n    napi_define_sendable_class(\n        env, \"SendableClass\", NAPI_AUTO_LENGTH,\n        [](napi_env env, napi_callback_info info) -> napi_value {\n            napi_value thisVar = nullptr;\n            napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr);\n            napi_value str;\n            napi_create_string_utf8(env, \"instance str\", NAPI_AUTO_LENGTH, &str);\n            napi_property_descriptor props[] = {\n                {\"str\", nullptr, nullptr, nullptr, nullptr, str, napi_default, nullptr},\n                {\"func\", nullptr, func, nullptr, nullptr, nullptr, napi_default, nullptr},\n            };\n            napi_define_properties(env, thisVar, sizeof(props) / sizeof(props[0]), props);\n            return thisVar;\n        },\n        nullptr, sizeof(props) / sizeof(props[0]), props, nullptr, &sendableClass);\n\n    return sendableClass;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {};\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    napi_value cons = DefineSendableClass(env);\n    napi_set_named_property(env, exports, \"SendableClass\", cons);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nexport class SendableClass {\n  static staticStr: string;\n  static staticFunc(): string;\n  str: string;\n  func(): string;\n} // Sendable相关 napi_define_sendable_class\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sendable相关 napi_define_sendable_class\nlet value = new testNapi.SendableClass();\nhilog.info(0x0000, 'testTag', 'Node-API napi_define_sendable_class: %{public}s', value.str);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_sendable_object_with_properties"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用给定的napi_property_descriptor创建一个sendable对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sendable相关 napi_create_sendable_object_with_properties\nstatic napi_value GetSendableObject(napi_env env, napi_callback_info info)\n{\n    napi_value val_true;\n    napi_get_boolean(env, true, &val_true);\n    napi_property_descriptor desc1[] = {\n        {\"x\", nullptr, nullptr, nullptr, nullptr, val_true, napi_default_jsproperty, nullptr},\n    };\n    napi_value obj;\n    napi_create_sendable_object_with_properties(env, 1, desc1, &obj);\n    return obj;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getSendableObject: () => { x: true }; // Sendable相关 napi_create_sendable_object_with_properties\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sendable相关 napi_create_sendable_object_with_properties\nlet value = testNapi.getSendableObject();\nhilog.info(0x0000, 'testTag', 'Node-API napi_create_sendable_object_with_properties: %{public}s',\n  JSON.stringify(value));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_sendable_array"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个sendable数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sendable相关 napi_create_sendable_array\nstatic napi_value GetSendableArray(napi_env env, napi_callback_info info)\n{\n    napi_value result = nullptr;\n    napi_create_sendable_array(env, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getSendableArray: () => []; // Sendable相关 napi_create_sendable_array\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sendable相关 napi_create_sendable_array\nlet value = testNapi.getSendableArray();\nhilog.info(0x0000, 'testTag', 'Node-API napi_create_sendable_array: %{public}s',\n  JSON.stringify(value));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_sendable_array_with_length"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个指定长度的sendable数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Sendable相关 napi_create_sendable_array_with_length\nstatic napi_value GetSendableArrayWithLength(napi_env env, napi_callback_info info)\n{\n    napi_value result = nullptr;\n    napi_create_sendable_array_with_length(env, 1, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const getSendableArrayWithLength: () => [];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let value = testNapi.getSendableArrayWithLength();\nhilog.info(0x0000, 'testTag', 'Node-API napi_create_sendable_array_with_length: %{public}s', JSON.stringify(value.length));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_sendable_arraybuffer"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个sendable ArrayBuffer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value GetSendableArrayBuffer(napi_env env, napi_callback_info info) {\n    static size_t LENGTH = 1024;\n    void *data;\n    napi_value result = nullptr;\n    napi_create_sendable_arraybuffer(env, LENGTH, &data, &result);\n    bool isArrayBuffer = false;\n    napi_is_arraybuffer(env, result, &isArrayBuffer);\n    OH_LOG_INFO(LOG_APP, \"isArrayBuffer: %{public}d\", isArrayBuffer);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const getSendableArrayBuffer: () => ArrayBuffer;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "testNapi.getSendableArrayBuffer();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_sendable_typedarray"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个sendable TypedArray。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static napi_value GetSendableTypedArray(napi_env env, napi_callback_info info) {\n    static size_t LENGTH = 1024;\n    static size_t OFFSET = 0;\n    void *data;\n    napi_value arraybuffer = nullptr;\n    napi_create_sendable_arraybuffer(env, LENGTH, &data, &arraybuffer);\n\n    napi_value result = nullptr;\n    napi_create_sendable_typedarray(env, napi_uint8_array, LENGTH, arraybuffer, OFFSET, &result);\n    bool isTypedArray = false;\n    napi_is_typedarray(env, result, &isTypedArray);\n    OH_LOG_INFO(LOG_APP, \"isTypedArray: %{public}d\", isTypedArray);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const getSendableTypedArray: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntestNapi.getSendableTypedArray();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_wrap_sendable"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包裹一个native实例到ArkTS对象中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic napi_value WrapSendable(napi_env env, napi_callback_info info) {\n    napi_value val_true;\n    napi_get_boolean(env, true, &val_true);\n    napi_property_descriptor desc1[] = {\n        {\"x\", nullptr, nullptr, nullptr, nullptr, val_true, napi_default_jsproperty, nullptr},\n    };\n    napi_value obj;\n    napi_create_sendable_object_with_properties(env, 1, desc1, &obj);\n\n    const char* testStr = \"test\";\n    napi_wrap_sendable(env, obj, (void*)testStr, [](napi_env env, void* data, void* hint) {}, nullptr);\n\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const wrapSendable: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntestNapi.wrapSendable();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_wrap_sendable_with_size"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包裹一个native实例到ArkTS对象中并指定大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic napi_value WrapSendableWithSize(napi_env env, napi_callback_info info) {\n    napi_value val_true;\n    napi_get_boolean(env, true, &val_true);\n    napi_property_descriptor desc1[] = {\n        {\"x\", nullptr, nullptr, nullptr, nullptr, val_true, napi_default_jsproperty, nullptr},\n    };\n    napi_value obj;\n    napi_create_sendable_object_with_properties(env, 1, desc1, &obj);\n\n    const char* testStr = \"test\";\n    napi_wrap_sendable_with_size(env, obj, (void*)testStr, [](napi_env env, void* data, void* hint) {}, nullptr, 100);\n\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const wrapSendableWithSize: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntestNapi.wrapSendableWithSize();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_unwrap_sendable"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkTS对象包裹的native实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic napi_value UnwrapSendable(napi_env env, napi_callback_info info) {\n    napi_value val_true;\n    napi_get_boolean(env, true, &val_true);\n    napi_property_descriptor desc1[] = {\n        {\"x\", nullptr, nullptr, nullptr, nullptr, val_true, napi_default_jsproperty, nullptr},\n    };\n    napi_value obj;\n    napi_create_sendable_object_with_properties(env, 1, desc1, &obj);\n\n    const char* testStr = \"test\";\n    napi_wrap_sendable(env, obj, (void*)testStr, [](napi_env env, void* data, void* hint) {}, nullptr);\n\n    char* tmpTestStr = nullptr;\n    napi_unwrap_sendable(env, obj, (void**)&tmpTestStr);\n    OH_LOG_INFO(LOG_APP, \"native value is %{public}s\", tmpTestStr);\n\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const unwrapSendable: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntestNapi.unwrapSendable();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_remove_wrap_sendable"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移除并获取ArkTS对象包裹的native实例，移除后回调将不再触发，需手动delete释放内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic napi_value RemoveWrapSendable(napi_env env, napi_callback_info info) {\n    napi_value val_true;\n    napi_get_boolean(env, true, &val_true);\n    napi_property_descriptor desc1[] = {\n        {\"x\", nullptr, nullptr, nullptr, nullptr, val_true, napi_default_jsproperty, nullptr},\n    };\n    napi_value obj;\n    napi_create_sendable_object_with_properties(env, 1, desc1, &obj);\n\n    const char* testStr = \"test\";\n    napi_wrap_sendable(env, obj, (void*)testStr, [](napi_env env, void* data, void* hint) {}, nullptr);\n\n    char* tmpTestStr = nullptr;\n    napi_remove_wrap_sendable(env, obj, (void**)&tmpTestStr);\n    OH_LOG_INFO(LOG_APP, \"native value is %{public}s\", tmpTestStr);\n\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const removeWrapSendable: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntestNapi.removeWrapSendable();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上代码如果要在native cpp中打印日志，需在CMakeLists.txt文件中添加以下配置信息（并添加头文件：#include \"hilog/log.h\"）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CMakeLists.txt\ntarget_compile_definitions(entry PRIVATE LOG_DOMAIN=0xd0d0 LOG_TAG=\"testTag\")\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_wrap接口增强",
      children: "napi_wrap接口增强"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-10",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_enhance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS对象上绑定一个native对象实例并指定实例大小，运行时会统计传入的实例大小并将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。开发者可以指定绑定的回调函数是否异步执行，如果是异步执行，回调函数必须保证是线程安全的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-10",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_wrap_enhance"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS对象上绑定一个native对象实例并指定实例大小，运行时会统计传入的实例大小并将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。开发者可以指定绑定的回调函数是否异步执行，如果是异步执行，回调函数必须保证是线程安全的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic napi_value TestNapiWrapEnhance(napi_env env, napi_callback_info info)\n{\n    napi_value testClass = nullptr;\n    napi_define_class(\n        env, \"TestClass\", NAPI_AUTO_LENGTH,\n        [](napi_env env, napi_callback_info info) -> napi_value {\n            napi_value thisVar = nullptr;\n            napi_get_cb_info(env, info, nullptr, nullptr, &thisVar, nullptr);\n            return thisVar;\n        },\n        nullptr, 0, nullptr, &testClass);\n\n    napi_value obj = nullptr;\n    napi_new_instance(env, testClass, 0, nullptr, &obj);\n    const char* testStr = \"test\";\n    napi_ref wrappedRef = nullptr;\n    napi_wrap_enhance(env, obj, (void*)testStr, [](napi_env env, void* data, void* hint) {}, false, nullptr, sizeof(testStr), &wrappedRef);\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const testNapiWrapEnhance: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntestNapi.testNapiWrapEnhance();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi提供多上下文环境能力",
      children: "napi提供多上下文环境能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-11",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建基础运行时上下文环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_switch_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "切换到指定的运行时上下文环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_destroy_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁基础运行时上下文环境。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-11",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_ark_context、napi_switch_ark_context、napi_destroy_ark_context"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-context",
        children: "使用扩展的Node-API接口创建、切换和销毁上下文环境"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi提供通过指针访问arkts-string内存数据的功能",
      children: "napi提供通过指针访问ArkTS String内存数据的功能"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-12",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_string_utf16_in_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取以Utf16编码的ArkTS String的内存数据缓冲区"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-12",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_get_buffer_string_utf16_in_critical_scope"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-critical",
        children: "使用扩展的Node-API接口创建和销毁临界区作用域及访问字符串内容"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi实现临界区作用域",
      children: "napi实现临界区作用域"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-13",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_open_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开临界区作用域"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭临界区作用域"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-13",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_open_critical_scope、napi_close_critical_scope"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-critical",
        children: "使用扩展的Node-API接口创建和销毁临界区作用域及访问字符串内容"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi支持创建轻量级的强引用对象",
      children: "napi支持创建轻量级的强引用对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-14",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向ArkTS对象的强引用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除强引用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据强引用对象获取其关联的ArkTS对象值"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-14",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_strong_reference、napi_delete_strong_reference、napi_get_value_strong_reference"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-strong-reference",
        children: "使用扩展的Node-API接口创建、销毁和使用强引用对象"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi支持创建sendable的强引用",
      children: "napi支持创建Sendable的强引用"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-15",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向Sendable ArkTS对象的Sendable强引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_sendable_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除Sendable强引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_sendable_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Sendable强引用获取其关联的ArkTS对象值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-15",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_strong_sendable_reference、napi_delete_strong_sendable_reference、napi_get_strong_sendable_reference_value"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-sendable-reference",
        children: "使用扩展的Node-API接口创建、销毁和使用Sendable强引用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi支持抛出错误对象的code属性类型为number的arkts-error",
      children: "napi支持抛出错误对象的code属性类型为number的ArkTS Error"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口描述-16",
      children: "接口描述"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_business_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出带文本信息的ArkTS Error，其错误对象的code属性类型为number。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-16",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_throw_business_error"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-error",
        children: "使用扩展的Node-API接口抛出ArkTS异常"
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
774481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
539494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479371-ab3405fd937d9b67e39ae9c962d02daa.png");

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