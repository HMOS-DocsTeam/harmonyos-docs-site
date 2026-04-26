"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["893524"], {
957237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_life_cycle_use_napi_life_cycle_md_1ec_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-life-cycle-use-napi-life-cycle-md-1ec.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_life_cycle_use_napi_life_cycle_md_1ec_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle/use-napi-life-cycle","title":"使用Node-API接口进行生命周期相关开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle/use-napi-life-cycle.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"使用Node-API接口进行生命周期相关开发","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-life-cycle","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行函数创建和调用","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-function/"},"next":{"title":"使用Node-API接口进行object相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle/use-napi-life-cycle.md


const frontMatter = {
	title: '使用Node-API接口进行生命周期相关开发',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-life-cycle',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行生命周期相关开发';

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
  "value": "napi_open_handle_scope、napi_close_handle_scope",
  "id": "napi_open_handle_scopenapi_close_handle_scope",
  "level": 3
}, {
  "value": "napi_open_escapable_handle_scope、napi_close_escapable_handle_scope、napi_escape_handle",
  "id": "napi_open_escapable_handle_scopenapi_close_escapable_handle_scopenapi_escape_handle",
  "level": 3
}, {
  "value": "napi_ref",
  "id": "napi_ref",
  "level": 3
}, {
  "value": "napi_create_reference、napi_delete_reference",
  "id": "napi_create_referencenapi_delete_reference",
  "level": 3
}, {
  "value": "napi_reference_ref、napi_reference_unref",
  "id": "napi_reference_refnapi_reference_unref",
  "level": 3
}, {
  "value": "napi_get_reference_value",
  "id": "napi_get_reference_value",
  "level": 3
}, {
  "value": "napi_add_finalizer",
  "id": "napi_add_finalizer",
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
        id: "使用node-api接口进行生命周期相关开发",
        children: "使用Node-API接口进行生命周期相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Node-API中，napi_value是一个表示ArkTS值的抽象类型，它可以表示任何ArkTS值，包括基本类型（如数字、字符串、布尔值）和复杂对象类型（如数组、函数、对象等）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_value的生命周期与其在ArkTS中的对应值的生命周期紧密相关。当ArkTS值被垃圾回收时，与之关联的napi_value也将不再有效。重要的是不要在ArkTS值不再存在时尝试使用napi_value。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "框架层的scope通常用于管理napi_value的生命周期。在Node-API中，可以使用napi_open_handle_scope和napi_close_handle_scope函数来创建和销毁scope。通过在scope内创建napi_value，可以确保在scope结束时自动释放napi_value，避免内存泄漏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_ref是一个Node-API类型，用于管理napi_value的生命周期。napi_ref允许您在napi_value的生命周期内保持对其的引用，即使它已经超出了其原始上下文的范围。这使得您可以在不同的上下文中共享napi_value，并确保在不再需要时正确释放其内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API提供了一组功能，使开发人员能够在Node-API模块中创建和操作ArkTS对象，管理引用和生命周期，并注册垃圾回收回调函数等。下面是一些基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "作用域"
          })
        }), "：用于管理ArkTS对象的生命周期。在某个作用域中创建的对象句柄，默认情况下只能在该作用域内使用。当作用域被关闭后，其中创建的对象将无法再被访问，除非显式地将它们逃逸出当前作用域。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "引用管理"
          })
        }), "：Node-API提供函数来创建、删除和管理对象的引用，以延长对象的生命周期，避免出现对象use-after-free的问题。同时也通过引用管理去避免发生内存泄漏的问题。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "可逃逸的作用域"
          })
        }), "：允许在创建的作用域中声明的对象返回到父作用域，通过napi_open_escapable_handle_scope和napi_close_escapable_handle_scope进行管理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "垃圾回收回调"
          })
        }), "：允许注册回调函数，以便在ArkTS对象被垃圾回收时执行特定的清理操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些基本概念使开发人员能够在Node-API模块中安全且有效地操作ArkTS对象，并确保正确管理对象的生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下Node-API接口主要用于ArkTS对象的引用管理，并确保在Node-API模块代码中正确地处理ArkTS对象的生命周期。使用场景如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_open_handle_scope、napi_close_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主要用于管理ArkTS对象的生命周期，确保在Node-API模块代码中使用ArkTS对象时能够正确地进行内存管理。当在Node-API模块中处理ArkTS对象时，需要创建一个临时的作用域来存储对象的引用，以便在执行期间正确访问这些对象，并在执行结束后关闭这个handle scope。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_escapable_handle_scope、napi_close_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个可逃逸的作用域，使得在原生函数中创建的ArkTS对象可以被正确返回到调用该函数的外部ArkTS环境中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_escape_handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象的生命周期提升到父作用域中，避免对象被意外释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_reference、napi_delete_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主要用于在Node-API模块代码中管理ArkTS对象的引用，以确保对象的生命周期符合插件的需求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reference_ref、napi_reference_unref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主要用于管理ArkTS对象引用的引用计数，以确保在多个地方共享引用时引用计数能够正确地增加和减少。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主要用于在Node-API模块代码中获取与引用相关联的ArkTS对象，以便在Node-API模块中对其进行操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_finalizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在需要在ArkTS对象被垃圾回收前执行一些清理或释放资源的情况下，确保资源的正确释放和管理。"
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
        children: "#include \"napi/native_api.h\"\n// log.h用于C++中日志打印\n#include \"hilog/log.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文ArkTS侧示例代码所需的模块导入如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_open_handle_scopenapi_close_handle_scope",
      children: "napi_open_handle_scope、napi_close_handle_scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过接口napi_open_handle_scope创建一个上下文环境，并使用napi_close_handle_scope进行关闭。这组接口用于管理ArkTS对象的生命周期，确保在Node-API模块代码处理ArkTS对象时能够正确地管理其句柄，以避免出现对象错误回收的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，接口仅支持单层嵌套的scope结构。在任何时刻，只有一个scope处于活动状态，所有新创建的handles都将与该scope相关联。scope必须按照与打开顺序相反的顺序关闭。此外，在native方法中创建的所有scope必须在该方法返回之前被关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关于生命周期管理的代码部分也可参考下面链接："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-guidelines#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%AE%A1%E7%90%86",
        children: "生命周期管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关于典型错误使用方法的代码部分也可参考下面链接:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-questions/napi-faq-about-stability#napi_open_handle_scope%E4%B8%8Enapi_close_handle_scope%E8%BF%9B%E8%A1%8C%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%9B%B8%E5%85%B3%E5%BC%80%E5%8F%91%E5%85%B8%E5%9E%8B%E9%94%99%E8%AF%AF%E5%9C%BA%E6%99%AF",
        children: "典型错误场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_open_handle_scope、napi_close_handle_scope\nstatic napi_value HandleScopeTest(napi_env env, napi_callback_info info)\n{\n    // 通过调用napi_open_handle_scope来创建一个句柄作用域\n    napi_handle_scope scope;\n    napi_open_handle_scope(env, &scope);\n    // 在句柄作用域内创建一个obj\n    napi_value obj = nullptr;\n    napi_create_object(env, &obj);\n    // 在对象中添加属性\n    napi_value value = nullptr;\n    napi_create_string_utf8(env, \"handleScope\", NAPI_AUTO_LENGTH, &value);\n    napi_set_named_property(env, obj, \"key\", value);\n    // 在作用域内获取obj的属性并返回\n    napi_value result = nullptr;\n    napi_get_named_property(env, obj, \"key\", &result);\n    // 关闭句柄作用域，自动释放在该作用域内创建的对象句柄\n    napi_close_handle_scope(env, scope);\n    // result已经离开scope的作用域，继续使用可能会存在稳定性问题，如果需要在作用域外使用对象，建议使用napi_open_escapable_handle_scope系列接口\n    return nullptr;\n}\n\nstatic napi_value HandleScope(napi_env env, napi_callback_info info)\n{\n    // 通过调用napi_open_handle_scope来创建一个句柄作用域\n    napi_handle_scope scope;\n    napi_open_handle_scope(env, &scope);\n    // 在句柄作用域内创建一个obj\n    napi_value obj = nullptr;\n    napi_create_object(env, &obj);\n    // 在对象中添加属性\n    napi_value value = nullptr;\n    napi_create_string_utf8(env, \"handleScope\", NAPI_AUTO_LENGTH, &value);\n    napi_set_named_property(env, obj, \"key\", value);\n    // 关闭句柄作用域，自动释放在该作用域内创建的对象句柄\n    napi_close_handle_scope(env, scope);\n    // 在作用域外获取obj的属性并返回，此处只能得到“undefined”\n    napi_value result = nullptr;\n    napi_get_named_property(env, obj, \"key\", &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const handleScopeTest: () => string; // napi_open_handle_scope、napi_close_handle_scope\n\nexport const handleScope: () => string;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_open_handle_scope  napi_close_handle_scope\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API handleScopeTest: %{public}s',\n    testNapi.handleScopeTest());\n  hilog.info(0x0000, 'testTag', 'Test Node-API handleScope: %{public}s', testNapi.handleScope());\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API handleScopeTest errorCode: %{public}s, errorMessage: %{public}s', error.code,\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "框架层在核心初始化函数Init中定义了ArkTS侧和native侧的接口映射表，在ArkTS侧通过映射表中的接口访问native侧的函数时，框架层会自动加上scope, 不需要额外增加napi_open_handle_scope、napi_close_handle_scope接口来管理ArkTS对象的生命周期。即：进入开发者自己写的native函数前自动open scope, native函数结束后自动close scope。native侧函数中创建的ArkTS对象的生命周期在native函数返回时结束，不会存在内存泄漏的问题。以NewObject函数举例如下（定义接口映射表中映射的函数不需要手动加napi_open_handle_scope、napi_close_handle_scope管理ArkTS对象的生命周期）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 调用NewObject前会open scope\nnapi_value NewObject(napi_env env, napi_callback_info info)\n{\n    napi_value object = nullptr;\n    // 创建一个空对象\n    napi_create_object(env, &object);\n    // 设置对象的属性\n    napi_value name = nullptr;\n    // 设置属性名为\"name\"\n    napi_create_string_utf8(env, \"name\", NAPI_AUTO_LENGTH, &name);\n    napi_value value = nullptr;\n    // 设置属性值为\"Hello from Node-API!\"\n    napi_create_string_utf8(env, \"Hello from Node-API!\", NAPI_AUTO_LENGTH, &value);\n    // 将属性设置到对象上\n    napi_set_property(env, object, name, value);\n    //result离开作用域后，对象句柄（handle）跟随释放，返回到ArkTS侧的对象由ArkTS侧管理\n    return object;\n}\n// NewObject调用函数结束后框架层会close scope\n\n// 核心初始化函数\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    // 定义接口映射表\n    napi_property_descriptor desc[] = {\n        { \"newObject\", nullptr, NewObject, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_open_escapable_handle_scopenapi_close_escapable_handle_scopenapi_escape_handle",
      children: "napi_open_escapable_handle_scope、napi_close_escapable_handle_scope、napi_escape_handle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过接口napi_open_escapable_handle_scope创建出一个可逃逸的handle scope，可将范围内声明的值返回到父作用域。该作用域需要使用napi_close_escapable_handle_scope进行关闭。napi_escape_handle用于提升传入的ArkTS对象的生命周期到其父作用域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过上述接口可以更灵活的使用管理传入的ArkTS对象，特别是在处理跨作用域的值传递时非常有用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_open_escapable_handle_scope、napi_close_escapable_handle_scope、napi_escape_handle\nstatic napi_value EscapableHandleScopeTest(napi_env env, napi_callback_info info)\n{\n    // 创建一个可逃逸的句柄作用域\n    napi_escapable_handle_scope scope;\n    napi_open_escapable_handle_scope(env, &scope);\n    // 在可逃逸的句柄作用域内创建一个obj\n    napi_value obj = nullptr;\n    napi_create_object(env, &obj);\n    // 在对象中添加属性\n    napi_value value = nullptr;\n    napi_create_string_utf8(env, \"Test napi_escapable_handle_scope\", NAPI_AUTO_LENGTH, &value);\n    napi_set_named_property(env, obj, \"key\", value);\n    napi_value prop = nullptr;\n    napi_get_named_property(env, obj, \"key\", &prop);\n    // 调用napi_escape_handle将属性值逃逸到作用域之外\n    napi_value result = nullptr;\n    napi_escape_handle(env, scope, prop, &result);\n    // 关闭可逃逸的句柄作用域，清理资源\n    napi_close_escapable_handle_scope(env, scope);\n    // 逃逸后的result可以在作用域外继续使用\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const escapableHandleScopeTest: () => string; // napi_open_escapable_handle_scope、napi_close_escapable_handle_scope、napi_escape_handle\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_open_escapable_handle_scope napi_close_escapable_handle_scope、napi_escape_handle\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API EscapableHandleScopeTest: %{public}s',\n    testNapi.escapableHandleScopeTest());\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API EscapableHandleScopeTest errorCode: %{public}s, errorMessage: %{public}s',\n    error.code,\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_ref",
      children: "napi_ref"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_ref 是 napi 中用于管理 ArkTS 对象生命周期的引用类型，分为强引用和弱引用两种类型。当ref计数为0时为弱引用，计数大于0时为强引用。强引用会阻止垃圾回收器回收被引用的对象，适用于需要长期保持对象存活的场景，但必须手动管理引用计数和释放，否则会导致内存泄漏；弱引用则不会阻止垃圾回收，允许对象在不再被其他强引用持有时被正常回收，适用于缓存等临时性引用场景，能够自动失效但需要在获取时检查对象是否仍存活。正确选择强弱引用类型对于平衡内存管理和性能至关重要。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_referencenapi_delete_reference",
      children: "napi_create_reference、napi_delete_reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为Object创建一个reference，以延长其生命周期。调用者需要自己管理reference生命周期。可以调用napi_delete_reference删除传入的reference。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_reference_refnapi_reference_unref",
      children: "napi_reference_ref、napi_reference_unref"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增加/减少传入的reference的引用计数，并获取新的计数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_reference_value",
      children: "napi_get_reference_value"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取与reference相关联的ArkTS Object。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(706704)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于弱引用（引用计数为0的napi_ref）的释放与gc回收js对象并非同时发生。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此可能在弱引用被释放前，js对象已经被回收。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这意味着你可能在napi_ref有效的情况下，通过本接口获取到一个空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "弱引用使用示例代码："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建时将引用计数初始化为0，这样创建的ref即为弱引用，弱引用不会阻止对象被回收。获取前需将weakValue初始化为nullptr，获取后检查weakValue是否仍为nullptr。若为nullptr，说明对象已被回收；若不为nullptr，则可继续使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nnapi_ref g_weakRef = nullptr;\n\nstatic napi_value CreateWeakReference(napi_env env, napi_callback_info info)\n{\n    napi_value value = nullptr;\n    napi_create_string_utf8(env, \"This is a test property\", NAPI_AUTO_LENGTH, &value);\n    napi_value jsObject = nullptr;\n    napi_create_object(env, &jsObject);\n    napi_set_named_property(env, jsObject, \"test\", value);\n\n    // 清理之前的引用（如果存在）\n    if (g_weakRef != nullptr) {\n        napi_delete_reference(env, g_weakRef);\n        g_weakRef = nullptr;\n    }\n\n    // 创建弱引用，不会阻止垃圾回收，没有其他强引用持有时会被正常回收\n    napi_status status = napi_create_reference(env, jsObject, 0, &g_weakRef);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Failed to create weak reference\");\n        return nullptr;\n    }\n\n    return nullptr;\n}\n\nstatic napi_value GetWeakReferenceValue(napi_env env, napi_callback_info info)\n{\n    napi_value weakValue;\n    napi_status status = napi_get_reference_value(env, g_weakRef, &weakValue);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Failed to get reference value\");\n        return nullptr;\n    }\n\n    // 判断对象是否已被回收\n    if (weakValue == nullptr) {\n        napi_throw_error(env, nullptr, \"Object has been garbage collected\");\n        return nullptr;\n    }\n\n    // 尝试获取对象的属性来确认它仍然有效\n    napi_value result = nullptr;\n    napi_get_named_property(env, weakValue, \"test\", &result);\n\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createWeakReference: () => void;\n\nexport const getWeakReferenceValue: () => string;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n    testNapi.createWeakReference();\n    hilog.info(0x0000, 'testTag', 'reference test: %{public}s', testNapi.getWeakReferenceValue());\n} catch (error) {\n    hilog.error(0x0000, 'testTag', `调用错误：${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "强引用使用示例代码："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建时将引用计数初始化为1，这样创建的ref即为强引用，保证对象不会被回收。不再使用时调用napi_delete_reference释放对象，避免内存泄漏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\n// 全局强引用\nnapi_ref g_strongRef = nullptr;\n\n// 创建强引用\nstatic napi_value CreateStrongReference(napi_env env, napi_callback_info info)\n{\n    napi_value value = nullptr;\n    napi_create_string_utf8(env, \"This is a test property\", NAPI_AUTO_LENGTH, &value);\n    napi_value jsObject = nullptr;\n    napi_create_object(env, &jsObject);\n    napi_set_named_property(env, jsObject, \"test\", value);\n\n    // 清理之前的强引用（如果存在）\n    if (g_strongRef != nullptr) {\n        napi_delete_reference(env, g_strongRef);\n        g_strongRef = nullptr;\n    }\n\n    // 创建强引用（初始引用计数为1），阻止垃圾回收器回收\n    napi_status status = napi_create_reference(env, jsObject, 1, &g_strongRef);\n\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Failed to create strong reference\");\n        return nullptr;\n    }\n\n    return nullptr;\n}\n\nstatic napi_value GetStrongReferenceValue(napi_env env, napi_callback_info info)\n{\n    napi_value jsValue;\n    napi_status status = napi_get_reference_value(env, g_strongRef, &jsValue);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Failed to get reference value\");\n        return nullptr;\n    }\n\n    // 尝试获取对象的属性来确认它仍然有效\n    napi_value result = nullptr;\n    napi_get_named_property(env, jsValue, \"test\", &result);\n\n    return result;\n}\n\n// 清理强引用\nstatic napi_value CleanupStrongReference(napi_env env, napi_callback_info info) {\n    napi_value ret = nullptr;\n    if (g_strongRef != nullptr) {\n        // 强制删除引用，即使引用计数不为0\n        napi_delete_reference(env, g_strongRef);\n        g_strongRef = nullptr;\n        napi_get_boolean(env, true, &ret);\n        return ret;\n    }\n    napi_get_boolean(env, false, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createStrongReference: () => void;\n\nexport const getStrongReferenceValue: () => string;\n\nexport const cleanupStrongReference: () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n    testNapi.createStrongReference();\n    hilog.info(0x0000, 'testTag', 'reference test: %{public}s', testNapi.getStrongReferenceValue());\n    testNapi.cleanupStrongReference();\n} catch (error) {\n    hilog.error(0x0000, 'testTag', `调用错误：${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_add_finalizer",
      children: "napi_add_finalizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当ArkTS Object中的对象被垃圾回收时调用注册的napi_add_finalizer回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建一个napi_ref类型的指针，用于存储创建的引用。在调用napi_add_finalizer函数前，分配一个napi_ref类型的变量，并传递其地址作为result参数。\nnapi_ref gRefFinalizer = nullptr;\n\n// 创建一个napi_ref类型的指针，用于存储创建的引用。在调用napi_create_reference函数前，分配一个napi_ref类型的变量，并传递其地址作为result参数。\nnapi_ref gRef = nullptr;\n\nvoid Finalizer(napi_env env, void *data, void *hint)\n{\n    // 执行资源清理操作\n    OH_LOG_INFO(LOG_APP, \"Test Node-API Use Finalizer to release resources.\");\n    // do something 执行资源清理操作\n}\n\nstatic napi_value AddFinalizer(napi_env env, napi_callback_info info)\n{\n    napi_value obj = nullptr;\n    napi_status status = napi_create_object(env, &obj);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_create_object fail\");\n        return nullptr;\n    }\n    napi_value value = nullptr;\n    status = napi_create_string_utf8(env, \"AddFinalizer\", NAPI_AUTO_LENGTH, &value);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_create_string_utf8 fail\");\n        return nullptr;\n    }\n    // 将键值对添加到对象中\n    status = napi_set_named_property(env, obj, \"key\", value);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_set_named_property fail\");\n        return nullptr;\n    }\n\n    // 注册回调函数Finalizer用于清理资源\n    void *data = {};\n    status = napi_add_finalizer(env, obj, data, Finalizer, nullptr, &gRefFinalizer);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_add_finalizer fail\");\n        return nullptr;\n    }\n\n    return obj;\n}\n\nstatic napi_value CreateReference(napi_env env, napi_callback_info info)\n{\n    napi_value obj = nullptr;\n    napi_status status = napi_create_object(env, &obj);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_create_object fail\");\n        return nullptr;\n    }\n    napi_value value = nullptr;\n    status = napi_create_string_utf8(env, \"CreateReference\", NAPI_AUTO_LENGTH, &value);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_create_string_utf8 fail\");\n        return nullptr;\n    }\n    // 将键值对添加到对象中\n    status = napi_set_named_property(env, obj, \"key\", value);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_set_named_property fail\");\n        return nullptr;\n    }\n    // 创建对ArkTS对象的引用\n    status = napi_create_reference(env, obj, 1, &gRef);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_create_reference fail\");\n        return nullptr;\n    }\n    // 增加传入引用的引用计数并返回生成的引用计数\n    uint32_t result = 0;\n    status = napi_reference_ref(env, gRef, &result);\n    OH_LOG_INFO(LOG_APP, \"Test Node-API napi_reference_ref, count = %{public}d.\", result);\n    uint32_t numCount = 2;\n    if (status != napi_ok || result != numCount) {\n        // 若传入引用的引用计数未增加，则抛出错误\n        napi_throw_error(env, nullptr, \"napi_reference_ref fail\");\n        return nullptr;\n    }\n    return obj;\n}\n\nstatic napi_value UseReference(napi_env env, napi_callback_info info)\n{\n    napi_value obj = nullptr;\n    // 通过调用napi_get_reference_value获取引用的ArkTS对象\n    napi_status status = napi_get_reference_value(env, gRef, &obj);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_get_reference_value fail\");\n        return nullptr;\n    }\n    // 返回获取的对象\n    return obj;\n}\n\nstatic napi_value DeleteReference(napi_env env, napi_callback_info info)\n{\n    // 减少传入引用的引用计数并返回生成的引用计数\n    uint32_t result = 0;\n    napi_value count = nullptr;\n    napi_status status = napi_reference_unref(env, gRef, &result);\n    OH_LOG_INFO(LOG_APP, \"Test Node-API napi_reference_unref, count = %{public}d.\", result);\n    uint32_t numCount = 1;\n    if (status != napi_ok || result != numCount) {\n        // 若传入引用的引用计数未减少，则抛出错误\n        napi_throw_error(env, nullptr, \"napi_reference_unref fail\");\n        return nullptr;\n    }\n\n    // 通过调用napi_delete_reference删除对ArkTS对象的引用\n    status = napi_delete_reference(env, gRef);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_delete_reference fail\");\n        return nullptr;\n    }\n\n    status = napi_delete_reference(env, gRefFinalizer);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_delete_reference fail\");\n        return nullptr;\n    }\n    napi_value returnResult = nullptr;\n    status = napi_create_string_utf8(env, \"napi_delete_reference success\", NAPI_AUTO_LENGTH, &returnResult);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_create_string_utf8 fail\");\n        return nullptr;\n    }\n    return returnResult;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const addFinalizer: () => Object | undefined; // napi_add_finalizer\n\nexport const createReference: () => Object | undefined; // napi_create_reference、napi_reference_ref\n\nexport const useReference: () => Object | undefined; // napi_get_reference_value\n\nexport const deleteReference: () => string | undefined; // napi_delete_reference、napi_reference_unref\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_add_finalizer\ntry {\n  hilog.info(0x0000, 'testTag', 'Test Node-API addFinalizer: %{public}s',\n    JSON.stringify(testNapi.addFinalizer()));\n  hilog.info(0x0000, 'testTag', 'Test Node-API createReference: %{public}s',\n    JSON.stringify(testNapi.createReference()));\n  hilog.info(0x0000, 'testTag', 'Test Node-API useReference: %{public}s',\n    JSON.stringify(testNapi.useReference()));\n  hilog.info(0x0000, 'testTag', 'Test Node-API deleteReference: %{public}s',\n    testNapi.deleteReference());\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag',\n    'Test Node-API ReferenceTest errorCode: %{public}s, errorMessage: %{public}s', error.code,\n    error.message);\n  // ...\n}\n"
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
706704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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