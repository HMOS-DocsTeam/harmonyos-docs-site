"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["722589"], {
217308(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_load_module_use_napi_load_module_md_20c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-napi-load-module-use-napi-load-module-md-20c.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_load_module_use_napi_load_module_md_20c_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module/use-napi-load-module","title":"使用Node-API接口在主线程中进行模块加载","description":"场景介绍","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module/use-napi-load-module.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用Node-API接口在主线程中进行模块加载","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-load-module","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口创建ArkTS运行时环境","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime/"},"next":{"title":"使用扩展的Node-API接口在异步线程中运行和停止事件循环","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-event-loop/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module/use-napi-load-module.md


const frontMatter = {
	title: '使用Node-API接口在主线程中进行模块加载',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-load-module',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口在主线程中进行模块加载';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "使用限制",
  "id": "使用限制",
  "level": 2
}, {
  "value": "napi_load_module支持的场景",
  "id": "napi_load_module支持的场景",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用node-api接口在主线程中进行模块加载",
        children: "使用Node-API接口在主线程中进行模块加载"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API中的napi_load_module接口的功能是在主线程中进行模块的加载，当模块加载出来之后，可以使用函数napi_get_property获取模块导出的变量，也可以使用napi_get_named_property获取模块导出的函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_load_module(napi_env env, const char* path, napi_value* result);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前的虚拟机环境"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载的文件路径或者模块名"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载的模块"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止在非主线程当中使用该接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止在Init函数中使用该接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止在线程安全函数的回调函数当中进行文件路径的加载。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在信号函数中调用不安全，直接调用可能导致栈溢出。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-load-module-with-info",
        children: "napi_load_module_with_info"
      }), "来进行模块加载，该接口支持了更多的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_load_module支持的场景",
      children: "napi_load_module支持的场景"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "系统模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载@ohos.或 @system."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地工程模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载ets目录下文件中的模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求路径以ets开头"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地工程模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载模块内文件路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要求路径以moduleName开头"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地工程模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载HAR模块名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地工程模块"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载HSP模块名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "远程包"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载远程HAR模块名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "远程包"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载ohpm包名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "模块Native库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载Native模块(.so文件)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "加载系统模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value loadModule(napi_env env, napi_callback_info info)\n{\n    // 1. 使用napi_load_module加载模块@ohos.hilog\n    napi_value result;\n    napi_status status = napi_load_module(env, \"@ohos.hilog\", &result);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    // 2. 使用napi_get_named_property获取info函数\n    napi_value infoFn;\n    status = napi_get_named_property(env, result, \"info\", &infoFn);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value tag;\n    std::string formatStr = \"test\";\n    napi_create_string_utf8(env, formatStr.c_str(), formatStr.size(), &tag);\n\n    napi_value outputString;\n    std::string str = \"Hello HarmonyOS\";\n    napi_create_string_utf8(env, str.c_str(), str.size(), &outputString);\n\n    napi_value flag;\n    napi_create_int32(env, 0, &flag);\n\n    napi_value args[3] = {flag, tag, outputString};\n    // 3. 使用napi_call_function调用info函数\n    status = napi_call_function(env, result, infoFn, 3, args, nullptr);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "加载ets目录下文件中的模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当加载文件中的模块时，如以下ArkTS代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let value = 123;\nfunction test() {\n  console.info('Hello HarmonyOS');\n}\nexport {value, test};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要在模块的build-profile.json5文件中进行以下配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"arkOptions\" : {\n    \"runtimeOnly\" : {\n      \"sources\": [\n        \"./src/main/ets/Test.ets\"\n      ],\n      \"packages\": [\n        \"library\",\n        \"sharedlibrary\",\n        \"@ohos/hypium\",\n        \"@ohos/axios\",\n        \"libentry7.so\"\n      ]\n    }\n  },\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用napi_load_module加载Test文件，调用函数test以及获取变量value："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value loadModule(napi_env env, napi_callback_info info)\n{\n    napi_value result;\n    // 1. 使用napi_load_module加载Test文件中的模块\n    napi_status status = napi_load_module(env, \"ets/Test\", &result);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value testFn;\n    // 2. 使用napi_get_named_property获取test函数\n    status = napi_get_named_property(env, result, \"test\", &testFn);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    // 3. 使用napi_call_function调用函数test\n    status = napi_call_function(env, result, testFn, 0, nullptr, nullptr);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value value;\n    napi_value key;\n    std::string keyStr = \"value\";\n    napi_create_string_utf8(env, keyStr.c_str(), keyStr.size(), &key);\n    // 4. 使用napi_get_property获取变量value\n    status = napi_get_property(env, result, key, &value);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "加载模块内文件路径"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当加载文件中的模块时，如以下ArkTS代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//./src/main/ets/Test.ets\nlet value = 123;\nfunction test() {\n  console.info(\"Hello HarmonyOS\");\n}\nexport {value, test};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要当前模块的build-profile.json5文件中进行以下配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"buildOption\" : {\n    \"arkOptions\" : {\n      \"runtimeOnly\" : {\n        \"sources\": [\n          \"./src/main/ets/Test.ets\"\n        ]\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用napi_load_module加载Test文件，调用函数test以及获取变量value："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value loadModule(napi_env env, napi_callback_info info) {\n    napi_value result;\n    // 1. 使用napi_load_module加载Test文件中的模块\n    napi_status status = napi_load_module(env, \"entry/src/main/ets/Test\", &result);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value testFn;\n    // 2. 使用napi_get_named_property获取test函数\n    status = napi_get_named_property(env, result, \"test\", &testFn);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    // 3. 使用napi_call_function调用函数test\n    status = napi_call_function(env, result, testFn, 0, nullptr, nullptr);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value value;\n    napi_value key;\n    std::string keyStr = \"value\";\n    napi_create_string_utf8(env, keyStr.c_str(), keyStr.size(), &key);\n    // 4. 使用napi_get_property获取变量value\n    status = napi_get_property(env, result, key, &value);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "加载HAR模块名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HAR包Index.ets文件如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//library Index.ets\nlet value = 123;\nfunction test() {\n  console.info(\"Hello HarmonyOS\");\n}\nexport {value, test};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在当前模块下的oh-package.json5文件中配置dependencies项："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"library\": \"file:../library\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用library的模块中，对build-profile.json5进行配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"buildOption\" : {\n    \"arkOptions\" : {\n      \"runtimeOnly\" : {\n        \"packages\": [\n          \"library\"\n        ]\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用napi_load_module加载library，调用函数test以及获取变量value："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value loadModule(napi_env env, napi_callback_info info) {\n    napi_value result;\n    // 1. 使用napi_load_module加载library\n    napi_status status = napi_load_module(env, \"library\", &result);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value testFn;\n    // 2. 使用napi_get_named_property获取test函数\n    status = napi_get_named_property(env, result, \"test\", &testFn);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    // 3. 使用napi_call_function调用函数test\n    status = napi_call_function(env, result, testFn, 0, nullptr, nullptr);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value value;\n    napi_value key;\n    std::string keyStr = \"value\";\n    napi_create_string_utf8(env, keyStr.c_str(), keyStr.size(), &key);\n    // 4. 使用napi_get_property获取变量value\n    status = napi_get_property(env, result, key, &value);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "加载HSP模块名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HSP包Index.ets文件如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//sharedlibrary Index.ets\nlet value = 123;\nfunction test() {\n  console.info(\"Hello HarmonyOS\");\n}\nexport {value, test};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在当前模块下的oh-package.json5文件中配置dependencies项："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"sharedlibrary\": \"file:../sharedlibrary\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用library的模块中，对build-profile.json5进行配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"buildOption\" : {\n    \"arkOptions\" : {\n      \"runtimeOnly\" : {\n        \"packages\": [\n          \"sharedlibrary\"\n        ]\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用napi_load_module加载sharedlibrary，调用函数test以及获取变量value："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value loadModule(napi_env env, napi_callback_info info) {\n    napi_value result;\n    // 1. 使用napi_load_module加载sharedlibrary\n    napi_status status = napi_load_module(env, \"sharedlibrary\", &result);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value testFn;\n    // 2. 使用napi_get_named_property获取test函数\n    status = napi_get_named_property(env, result, \"test\", &testFn);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    // 3. 使用napi_call_function调用函数test\n    status = napi_call_function(env, result, testFn, 0, nullptr, nullptr);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value value;\n    napi_value key;\n    std::string keyStr = \"value\";\n    napi_create_string_utf8(env, keyStr.c_str(), keyStr.size(), &key);\n    // 4. 使用napi_get_property获取变量value\n    status = napi_get_property(env, result, key, &value);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "加载远程HAR模块名"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在当前模块下的oh-package.json5文件中配置dependencies项："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"@ohos/hypium\": \"1.0.16\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用@ohos/hypium的模块中，对build-profile.json5进行配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"buildOption\" : {\n    \"arkOptions\" : {\n      \"runtimeOnly\" : {\n        \"packages\": [\n          \"@ohos/hypium\"\n        ]\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用napi_load_module加载@ohos/hypium，获取DEFAULT变量："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value loadModule(napi_env env, napi_callback_info info) {\n    napi_value result;\n    // 1. 使用napi_load_module加载@ohos/hypium\n    napi_status status = napi_load_module(env, \"@ohos/hypium\", &result);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value key;\n    std::string keyStr = \"DEFAULT\";\n    napi_create_string_utf8(env, keyStr.c_str(), keyStr.size(), &key);\n    // 2. 使用napi_get_property获取DEFAULT变量\n    napi_value defaultValue;\n    status = napi_get_property(env, result, key, &defaultValue);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "加载ohpm包名"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在当前模块下的oh-package.json5文件中配置dependencies项："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"@ohos/axios\": \"2.2.4\",\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用@ohos/axios的模块中，对build-profile.json5进行配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"buildOption\" : {\n    \"arkOptions\" : {\n      \"runtimeOnly\" : {\n        \"packages\": [\n          \"@ohos/axios\"\n        ]\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用napi_load_module加载@ohos/axios，获取VERSION变量："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value loadModule(napi_env env, napi_callback_info info) {\n    napi_value result;\n    // 1. 使用napi_load_module加载@ohos/axios\n    napi_status status = napi_load_module(env, \"@ohos/axios\", &result);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value key;\n    std::string keyStr = \"VERSION\";\n    napi_create_string_utf8(env, keyStr.c_str(), keyStr.size(), &key);\n    // 2. 使用napi_get_property获取VERSION\n    napi_value defaultValue;\n    status = napi_get_property(env, result, key, &defaultValue);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "加载Native库"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "libentry.so的index.d.ts文件如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//index.d.ts\nexport const add: (a: number, b: number) => number;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在当前模块下的oh-package.json5文件中配置dependencies项："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"libentry.so\": \"file:../src/main/cpp/types/libentry\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用libentry.so的模块中，对build-profile.json5进行配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"buildOption\" : {\n    \"arkOptions\" : {\n      \"runtimeOnly\" : {\n        \"packages\": [\n          \"libentry.so\"\n        ]\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用napi_load_module加载libentry.so，调用函数add："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value loadModule(napi_env env, napi_callback_info info) {\n    napi_value result;\n    // 1. 使用napi_load_module加载libentry.so\n    napi_status status = napi_load_module(env, \"libentry.so\", &result);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value addFn;\n    // 2. 使用napi_get_named_property获取add函数\n    status = napi_get_named_property(env, result, \"add\", &addFn);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    \n    napi_value a;\n    napi_value b;\n    napi_create_int32(env, 2, &a);\n    napi_create_int32(env, 3, &b);\n    napi_value args[2] = {a, b};\n    // 3. 使用napi_call_function调用函数add\n    napi_value returnValue;\n    status = napi_call_function(env, result, addFn, 2, args, &returnValue);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAR加载HAR模块名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "场景为har1加载har2，har2中的Index.ets文件如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//har2 Index.ets\nlet value = 123;\nfunction test() {\n  console.info(\"Hello HarmonyOS\");\n}\nexport {value, test};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在har1中的oh-package.json5文件中配置dependencies项："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dependencies\": {\n    \"har2\": \"file:../har2\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在har1的build-profile.json5文件中进行配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"buildOption\" : {\n    \"arkOptions\" : {\n      \"runtimeOnly\" : {\n        \"packages\": [\n          \"har2\"\n        ]\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在har1中用napi_load_module加载har2，调用函数test以及获取变量value："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value loadModule(napi_env env, napi_callback_info info) {\n    napi_value result;\n    // 1. 使用napi_load_module加载har2\n    napi_status status = napi_load_module(env, \"har2\", &result);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    \n    napi_value testFn;\n    // 2. 使用napi_get_named_property获取test函数\n    status = napi_get_named_property(env, result, \"test\", &testFn);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    // 3. 使用napi_call_function调用函数test\n    status = napi_call_function(env, result, testFn, 0, nullptr, nullptr);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n\n    napi_value value;\n    napi_value key;\n    std::string keyStr = \"value\";\n    napi_create_string_utf8(env, keyStr.c_str(), keyStr.size(), &key);\n    // 4. 使用napi_get_property获取变量value\n    status = napi_get_property(env, result, key, &value);\n    if (status != napi_ok) {\n        return nullptr;\n    }\n    return result;\n}\n"
          })
        }), "\n"]
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