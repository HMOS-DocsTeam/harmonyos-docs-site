"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["21799"], {
556713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_life_cycle_use_jsvm_life_cycle_md_9e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-life-cycle-use-jsvm-life-cycle-md-9e2.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_life_cycle_use_jsvm_life_cycle_md_9e2_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-life-cycle/use-jsvm-life-cycle","title":"使用JSVM-API接口进行生命周期相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-life-cycle/use-jsvm-life-cycle.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-life-cycle","slug":"/coding/jsvm/jsvm-use/use-jsvm-life-cycle/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-life-cycle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"使用JSVM-API接口进行生命周期相关开发","sidebar_position":20,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-life-cycle","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行JavaScript代码调试调优","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/m-heapstatistics-debugger-cpuprofiler-heapsnapshot/"},"next":{"title":"使用JSVM-API进行内存管理","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-memory-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-life-cycle/use-jsvm-life-cycle.md


const frontMatter = {
	title: '使用JSVM-API接口进行生命周期相关开发',
	sidebar_position: 20,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-life-cycle',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行生命周期相关开发';

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
  "value": "OH_JSVM_OpenHandleScope、OH_JSVM_CloseHandleScope",
  "id": "oh_jsvm_openhandlescopeoh_jsvm_closehandlescope",
  "level": 3
}, {
  "value": "OH_JSVM_OpenEscapableHandleScope、OH_JSVM_CloseEscapableHandleScope、OH_JSVM_EscapeHandle",
  "id": "oh_jsvm_openescapablehandlescopeoh_jsvm_closeescapablehandlescopeoh_jsvm_escapehandle",
  "level": 3
}, {
  "value": "OH_JSVM_CreateReference、OH_JSVM_DeleteReference、OH_JSVM_GetReferenceValue",
  "id": "oh_jsvm_createreferenceoh_jsvm_deletereferenceoh_jsvm_getreferencevalue",
  "level": 3
}, {
  "value": "OH_JSVM_ReferenceRef、OH_JSVM_ReferenceUnref",
  "id": "oh_jsvm_referencerefoh_jsvm_referenceunref",
  "level": 3
}, {
  "value": "OH_JSVM_AddFinalizer",
  "id": "oh_jsvm_addfinalizer",
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
        id: "使用jsvm-api接口进行生命周期相关开发",
        children: "使用JSVM-API接口进行生命周期相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JSVM-API中，JSVM_Value是一个表示JavaScript值的抽象类型，它可以表示任何JavaScript值，包括基本类型（如数字、字符串、布尔值）和对象类型（如数组、函数、对象等）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM_Value的生命周期与JavaScript值的生命周期相关。JavaScript值被垃圾回收后，JSVM_Value将不再有效。避免在JavaScript值不存在时使用JSVM_Value。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "框架层的scope通常用于管理JSVM_Value的生命周期。在JSVM-API中，可以使用OH_JSVM_OpenHandleScope和OH_JSVM_CloseHandleScope函数来创建和销毁scope。通过在scope内创建JSVM_Value，可以确保在scope结束时自动释放JSVM_Value，避免内存泄漏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM_Ref是一个JSVM-API类型，用于管理JSVM_Value的生命周期。JSVM_Ref允许您在JSVM_Value的生命周期内保持对其的引用，即使它已经超出了其原始上下文的范围。这使得您可以在不同的上下文中共享JSVM_Value，并确保在不再需要时正确释放其内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "合理使用OH_JSVM_OpenHandleScope和OH_JSVM_CloseHandleScope管理JSVM_Value的生命周期，避免发生内存泄漏问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个JSVM_Value属于特定的HandleScope，HandleScope通过OH_JSVM_OpenHandleScope和OH_JSVM_CloseHandleScope来建立和关闭，HandleScope关闭后，所属的JSVM_Value就会自动释放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API提供了一组功能，使开发人员能够在JSVM-API模块中创建和操作JavaScript对象，管理引用和生命周期，并注册垃圾回收回调函数等。下面是一些基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "作用域"
          })
        }), "：用于创建一个范围，在范围内声明的引用在范围外部将不再生效。JSVM-API提供了创建、关闭普通和可逃逸的作用域的函数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "引用管理"
          })
        }), "：JSVM-API提供函数来创建、删除和管理对象的引用，以延长对象的生命周期，并避免在使用对象时发生内存泄漏。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "可逃逸的作用域"
          })
        }), "：允许在创建的作用域中声明的对象返回到父作用域，通过OH_JSVM_OpenEscapableHandleScope和OH_JSVM_CloseEscapableHandleScope进行管理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "垃圾回收回调"
          })
        }), "：允许注册回调函数，以便在JavaScript对象被垃圾回收时执行特定的清理操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些基本概念使开发人员安全且有效地操作JavaScript对象，并确保正确管理对象的生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_OpenHandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开一个Handle scope，确保scope范围内的JSVM_Value不被GC回收。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CloseHandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭Handle scope。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_OpenEscapableHandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开一个新的scope逃逸Handle scope，在关闭该scope之前创建的对象与父作用域有相同的生命周期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CloseEscapableHandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭一个scope，在此scope范围外创建的对象不受父作用域保护。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_EscapeHandle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将JavaScript对象的句柄提升到外部作用域，确保在外部作用域中可以持续地使用该对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateReference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以指定的引用计数为JavaScript对象创建一个新的引用，该引用将指向传入的对象，引用允许在不同的上下文中使用和共享对象，并且可以有效地跟踪对象的生命周期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DeleteReference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放由OH_JSVM_CreateReference创建的引用，确保对象在不再被使用时能够被正确地释放和回收，避免内存泄漏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ReferenceRef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加由OH_JSVM_CreateReference创建的引用的引用计数，以确保对象在有引用时不会被提前释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ReferenceUnref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少引用计数，用于管理引用计数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetReferenceValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少由OH_JSVM_CreateReference创建的引用的引用计数，以确保没有任何引用指向该对象时能正确地释放和回收。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_AddFinalizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为对象添加JSVM_Finalize回调，以便在JavaScript对象被垃圾回收时调用来释放原生对象。"
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
      }), "，本文仅展示接口对应的C++代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_openhandlescopeoh_jsvm_closehandlescope",
      children: "OH_JSVM_OpenHandleScope、OH_JSVM_CloseHandleScope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过接口OH_JSVM_OpenHandleScope创建上下文环境，并使用OH_JSVM_CloseHandleScope关闭。这用于管理JavaScript对象的生命周期，确保在JSVM-API模块中正确处理JavaScript对象句柄，避免垃圾回收问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_OpenHandleScope、OH_JSVM_CloseHandleScope的三种样例方法\nstatic JSVM_Value HandleScopeFor(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 在for循环中频繁调用JSVM接口创建js对象时，要加handle_scope及时释放不再使用的资源。\n    // 下面例子中，每次循环结束局部变量res的生命周期已结束，因此加scope及时释放其持有的js对象，防止内存泄漏\n    constexpr uint32_t DIFF_VALUE_TEN_THOUSAND = 10000;\n    JSVM_Value checked = nullptr;\n    for (int i = 0; i < DIFF_VALUE_TEN_THOUSAND; i++) {\n        JSVM_HandleScope scope = nullptr;\n        JSVM_Status status = OH_JSVM_OpenHandleScope(env, &scope);\n        if (status != JSVM_OK || scope == nullptr) {\n            OH_JSVM_GetBoolean(env, false, &checked);\n            OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_OpenHandleScope: failed\");\n            return checked;\n        }\n        JSVM_Value res = nullptr;\n        OH_JSVM_CreateObject(env, &res);\n        status = OH_JSVM_CloseHandleScope(env, scope);\n        if (status != JSVM_OK) {\n            OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_CloseHandleScope: failed\");\n        }\n    }\n    OH_JSVM_GetBoolean(env, true, &checked);\n    OH_LOG_INFO(LOG_APP, \"JSVM HandleScopeFor: success\");\n    return checked;\n}\n\n// HandleScopeFor注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.callback = HandleScopeFor, .data = nullptr},\n};\n\nstatic JSVM_CallbackStruct *method = param;\n// HandleScopeFor方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"HandleScopeFor\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\nconst char *srcCallNative = \"HandleScopeFor()\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM HandleScopeFor: success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_openescapablehandlescopeoh_jsvm_closeescapablehandlescopeoh_jsvm_escapehandle",
      children: "OH_JSVM_OpenEscapableHandleScope、OH_JSVM_CloseEscapableHandleScope、OH_JSVM_EscapeHandle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过接口 OH_JSVM_OpenEscapableHandleScope 创建出一个可逃逸的 handle scope，可将 1 个范围内声明的值返回到父作用域。创建的 scope 需使用 OH_JSVM_CloseEscapableHandleScope 进行关闭。OH_JSVM_EscapeHandle 将传入的 JavaScript 对象的生命周期提升到其父作用域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过上述接口可以更灵活的使用管理传入的 JavaScript 对象，特别是在处理跨作用域的值传递时非常有用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_OpenEscapableHandleScope、OH_JSVM_CloseEscapableHandleScope、OH_JSVM_EscapeHandle的样例方法\nstatic JSVM_Value EscapableHandleScopeTest(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 创建一个可逃逸的句柄作用域\n    JSVM_EscapableHandleScope scope = nullptr;\n    JSVM_Status status = OH_JSVM_OpenEscapableHandleScope(env, &scope);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_OpenEscapableHandleScope: failed\");\n        return nullptr;\n    }\n    // 在可逃逸的句柄作用域内创建一个obj\n    JSVM_Value obj = nullptr;\n    OH_JSVM_CreateObject(env, &obj);\n    // 在对象中添加属性\n    JSVM_Value value = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"Test jsvm_escapable_handle_scope\", JSVM_AUTO_LENGTH, &value);\n    OH_JSVM_SetNamedProperty(env, obj, \"name\", value);\n    // 调用OH_JSVM_EscapeHandle将对象逃逸到作用域之外\n    JSVM_Value escapedObj = nullptr;\n    OH_JSVM_EscapeHandle(env, scope, obj, &escapedObj);\n    // 关闭可逃逸的句柄作用域，清理资源\n    status = OH_JSVM_CloseEscapableHandleScope(env, scope);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_CloseEscapableHandleScope: failed\");\n        return nullptr;\n    }\n    // 此时的escapedObj已逃逸，可以在作用域外继续使用escapedObj\n    bool result = false;\n    OH_JSVM_CreateStringUtf8(env, \"name\", JSVM_AUTO_LENGTH, &value);\n    OH_JSVM_HasProperty(env, escapedObj, value, &result);\n    if (result) {\n        OH_LOG_INFO(LOG_APP, \"JSVM EscapableHandleScopeTest: success\");\n    }\n    return escapedObj;\n}\n\n// EscapableHandleScopeTest注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.callback = EscapableHandleScopeTest, .data = nullptr},\n};\nstatic JSVM_CallbackStruct *method = param;\n// EscapableHandleScopeTest方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"escapableHandleScopeTest\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\nconst char *srcCallNative = \"escapableHandleScopeTest()\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM EscapableHandleScopeTest: success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createreferenceoh_jsvm_deletereferenceoh_jsvm_getreferencevalue",
      children: "OH_JSVM_CreateReference、OH_JSVM_DeleteReference、OH_JSVM_GetReferenceValue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用 OH_JSVM_CreateReference 为 JavaScript 变量创建一个引用，以延长其生命周期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用 OH_JSVM_GetReferenceValue 获取与引用关联的 JavaScript 变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用 OH_JSVM_DeleteReference 删除传入的引用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用者需要自己管理引用生命周期，引用有效期间 JavaScript 变量不会被垃圾回收处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_referencerefoh_jsvm_referenceunref",
      children: "OH_JSVM_ReferenceRef、OH_JSVM_ReferenceUnref"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增加/减少传入的引用的引用计数，并获取新的计数。当引用计数被置为 0 后，对于可以被设置为弱引用的 JavaScript 类型（对象、函数、外部变量），引用将被置为弱引用，在垃圾回收机制认为必要的时候该变量会被回收，当变量被回收后，调用 OH_JSVM_GetReferenceValue 会获得 C NULL；对于不可被置为弱引用的 JavaScript 类型，该引用会被清除，调用 OH_JSVM_GetReferenceValue 会获得 C NULL。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static JSVM_Value UseReference(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 创建 JavaScript 对象\n    JSVM_Value obj = nullptr;\n    OH_JSVM_CreateObject(env, &obj);\n    JSVM_Value value = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"UseReference\", JSVM_AUTO_LENGTH, &value);\n    OH_JSVM_SetNamedProperty(env, obj, \"name\", value);\n    \n    JSVM_Ref g_ref = nullptr;\n    // 创建对JavaScript对象的引用\n    JSVM_Status status = OH_JSVM_CreateReference(env, obj, 1, &g_ref);\n    if (status != JSVM_OK) {\n        return nullptr;\n    }\n\n    // 增加传入引用的引用计数并返回生成的引用计数\n    uint32_t result = 0u;\n    OH_JSVM_ReferenceRef(env, g_ref, &result);\n    OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_ReferenceRef, count = %{public}d.\", result);\n    if (result != 2) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_ReferenceRef: failed\");\n        return nullptr;\n    }\n\n    // 减少传入引用的引用计数并返回生成的引用计数\n    uint32_t num = 0u;\n    OH_JSVM_ReferenceUnref(env, g_ref, &num);\n    OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_ReferenceUnref, count = %{public}d.\", num);\n    if (num != 1) {\n        return nullptr;\n    }\n\n    JSVM_Value object = nullptr;\n    // 通过调用OH_JSVM_GetReferenceValue获取引用的JavaScript对象\n    status = OH_JSVM_GetReferenceValue(env, g_ref, &object);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_GetReferenceValue: failed\");\n        return nullptr;\n    }\n\n    // 不再使用引用，通过调用OH_JSVM_DeleteReference删除对JavaScript对象的引用\n    status = OH_JSVM_DeleteReference(env, g_ref);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_DeleteReference: failed\");\n        return nullptr;\n    }\n\n    // 将获取到的对象返回\n    OH_LOG_INFO(LOG_APP, \"JSVM UseReference success\");\n    return object;\n}\n\n// CreateReference、UseReference、DeleteReference注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.callback = UseReference, .data = nullptr},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateReference、UseReference、DeleteReference方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"useReference\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\nconst char *srcCallNative = \"useReference()\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_ReferenceRef, count = 2.\nJSVM OH_JSVM_ReferenceUnref, count = 1.\nJSVM UseReference success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_addfinalizer",
      children: "OH_JSVM_AddFinalizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为 JavaScript 对象添加 JSVM_Finalize 回调，当 JavaScript 对象被垃圾回收时执行函数回调，该接口通常被用于释放与 JavaScript 对象相关的原生对象。如果传入的参数类型不是 JavaScript 对象，该接口调用失败并返回错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finalizer 方法被注册后无法取消，如果在调用 OH_JSVM_DestroyEnv 前均未被执行，则在 OH_JSVM_DestroyEnv 时执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static int AddFinalizer(JSVM_VM vm, JSVM_Env env) {\n    // 打开 handlescope\n    JSVM_HandleScope handleScope;\n    CHECK_RET(OH_JSVM_OpenHandleScope(env, &handleScope));\n    // 创建 object 并设置回调\n    JSVM_Value obj = nullptr;\n    CHECK_RET(OH_JSVM_CreateObject(env, &obj));\n    CHECK_RET(OH_JSVM_AddFinalizer(\n        env, obj, nullptr,\n        [](JSVM_Env env, void *data, void *hint) -> void {\n            // Finalizer 方法，可在该方法中清理 Native 对象\n            OH_LOG_INFO(LOG_APP, \"JSVM: finalizer called.\");\n        },\n        nullptr, nullptr));\n    OH_LOG_INFO(LOG_APP, \"JSVM: finalizer added.\");\n    // 关闭 handlescope，触发 GC，GC 时 Finalizer 会被调用\n    CHECK_RET(OH_JSVM_CloseHandleScope(env, handleScope));\n    OH_LOG_INFO(LOG_APP, \"JSVM: before call gc.\");\n    CHECK_RET(OH_JSVM_MemoryPressureNotification(env, JSVM_MemoryPressureLevel::JSVM_MEMORY_PRESSURE_LEVEL_CRITICAL));\n    OH_LOG_INFO(LOG_APP, \"JSVM: after call gc.\");\n\n    return 0;\n}\n\nstatic JSVM_Value RunDemo(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_VM vm;\n    OH_JSVM_GetVM(env, &vm);\n    if (AddFinalizer(vm, env) != 0) {\n        OH_LOG_INFO(LOG_APP, \"Run PromiseRegisterHandler failed\");\n    }\n\n    return nullptr;\n}\n\n// RunDemo注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = RunDemo},\n};\nstatic JSVM_CallbackStruct *method = param;\n// RunDemo方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"RunDemo\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(RunDemo();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM: finalizer added.\nJSVM: before call gc.\nJSVM: finalizer called.\nJSVM: after call gc.\n"
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