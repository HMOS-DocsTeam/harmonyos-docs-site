"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["953883"], {
112668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_data_types_interfaces_napi_data_types_interfaces_md_35d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-data-types-interfaces-napi-data-types-interfaces-md-35d.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_data_types_interfaces_napi_data_types_interfaces_md_35d_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-data-types-interfaces/napi-data-types-interfaces","title":"Node-API支持的数据类型和接口","description":"Node-API的数据类型","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-data-types-interfaces/napi-data-types-interfaces.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-data-types-interfaces","slug":"/coding/using-napi-interaction-with-cpp/napi-data-types-interfaces/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-data-types-interfaces/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Node-API支持的数据类型和接口","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-data-types-interfaces","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Node-API接口返回状态码介绍","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi_status_introduction/"},"next":{"title":"Node-API开发规范","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-data-types-interfaces/napi-data-types-interfaces.md


const frontMatter = {
	title: 'Node-API支持的数据类型和接口',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-data-types-interfaces',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'Node-API支持的数据类型和接口';

const assets = {

};



const toc = [{
  "value": "Node-API的数据类型",
  "id": "node-api的数据类型",
  "level": 2
}, {
  "value": "napi_status",
  "id": "napi_status",
  "level": 3
}, {
  "value": "napi_extended_error_info",
  "id": "napi_extended_error_info",
  "level": 3
}, {
  "value": "napi_value",
  "id": "napi_value",
  "level": 3
}, {
  "value": "napi_env",
  "id": "napi_env",
  "level": 3
}, {
  "value": "napi_threadsafe_function",
  "id": "napi_threadsafe_function",
  "level": 3
}, {
  "value": "napi_threadsafe_function_release_mode",
  "id": "napi_threadsafe_function_release_mode",
  "level": 3
}, {
  "value": "napi_threadsafe_function_call_mode",
  "id": "napi_threadsafe_function_call_mode",
  "level": 3
}, {
  "value": "内存管理类型",
  "id": "内存管理类型",
  "level": 3
}, {
  "value": "回调类型",
  "id": "回调类型",
  "level": 3
}, {
  "value": "调度优先级",
  "id": "调度优先级",
  "level": 3
}, {
  "value": "事件循环模式",
  "id": "事件循环模式",
  "level": 3
}, {
  "value": "线程安全任务优先级",
  "id": "线程安全任务优先级",
  "level": 3
}, {
  "value": "支持的Node-API接口",
  "id": "支持的node-api接口",
  "level": 2
}, {
  "value": "异步安全线程相关",
  "id": "异步安全线程相关",
  "level": 3
}, {
  "value": "buffer相关",
  "id": "buffer相关",
  "level": 3
}, {
  "value": "string相关",
  "id": "string相关",
  "level": 3
}, {
  "value": "date相关",
  "id": "date相关",
  "level": 3
}, {
  "value": "arraybuffer相关",
  "id": "arraybuffer相关",
  "level": 3
}, {
  "value": "module相关",
  "id": "module相关",
  "level": 3
}, {
  "value": "生命周期相关",
  "id": "生命周期相关",
  "level": 3
}, {
  "value": "promise相关",
  "id": "promise相关",
  "level": 3
}, {
  "value": "array相关",
  "id": "array相关",
  "level": 3
}, {
  "value": "primitive相关",
  "id": "primitive相关",
  "level": 3
}, {
  "value": "class相关",
  "id": "class相关",
  "level": 3
}, {
  "value": "object相关",
  "id": "object相关",
  "level": 3
}, {
  "value": "基本数据类型相关",
  "id": "基本数据类型相关",
  "level": 3
}, {
  "value": "bigint相关",
  "id": "bigint相关",
  "level": 3
}, {
  "value": "异常和错误相关",
  "id": "异常和错误相关",
  "level": 3
}, {
  "value": "属性相关",
  "id": "属性相关",
  "level": 3
}, {
  "value": "异步任务相关",
  "id": "异步任务相关",
  "level": 3
}, {
  "value": "自定义异步操作",
  "id": "自定义异步操作",
  "level": 3
}, {
  "value": "uv相关",
  "id": "uv相关",
  "level": 3
}, {
  "value": "函数调用",
  "id": "函数调用",
  "level": 3
}, {
  "value": "环境生命周期",
  "id": "环境生命周期",
  "level": 3
}, {
  "value": "对象生命周期管理",
  "id": "对象生命周期管理",
  "level": 3
}, {
  "value": "扩展能力",
  "id": "扩展能力",
  "level": 3
}, {
  "value": "其他实用工具",
  "id": "其他实用工具",
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
        id: "node-api支持的数据类型和接口",
        children: "Node-API支持的数据类型和接口"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "node-api的数据类型",
      children: "Node-API的数据类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_status",
      children: "napi_status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "是一个枚举数据类型，表示Node-API接口返回的状态信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每当调用一个Node-API函数，都会返回该值，表示操作成功与否的相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    napi_ok,\n    napi_invalid_arg,\n    napi_object_expected,\n    napi_string_expected,\n    napi_name_expected,\n    napi_function_expected,\n    napi_number_expected,\n    napi_boolean_expected,\n    napi_array_expected,\n    napi_generic_failure,\n    napi_pending_exception,\n    napi_cancelled,\n    napi_escape_called_twice,\n    napi_handle_scope_mismatch,\n    napi_callback_scope_mismatch,\n    napi_queue_full,\n    napi_closing,\n    napi_bigint_expected,\n    napi_date_expected,\n    napi_arraybuffer_expected,\n    napi_detachable_arraybuffer_expected,\n    napi_would_deadlock, /* unused */\n    napi_no_external_buffers_allowed,\n    napi_cannot_run_js\n} napi_status;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_extended_error_info",
      children: "napi_extended_error_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个结构体，在调用Node-API接口不成功时存储了较为详细的错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    const char *error_message;\n    void *engine_reserved;\n    uint32_t engine_error_code;\n    napi_status error_code;\n} napi_extended_error_info;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_value",
      children: "napi_value"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["napi_value是一个C的结构体指针，表示一个ArkTS/JS对象的引用。napi_value持有了ArkTS/JS对象，同时，napi_value受", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E7%B1%BB%E5%9E%8B",
        children: "napi_handle_scope"
      }), "管理，scope中napi_value持有的JS对象不会被释放；出scope后，napi_value将失效，不再持有对应的ArkTS/JS对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_env",
      children: "napi_env"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用于表示Node-API执行时的上下文，Native侧函数入参，并传递给函数中的Node-API接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_env与ArkTS/JS线程的上下文环境绑定，每一个napi_env都持有独立的运行时上下文环境，当ArkTS/JS线程退出之后，相应的napi_env将不再有效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止缓存napi_env，禁止在不同线程间传递napi_env。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_threadsafe_function",
      children: "napi_threadsafe_function"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-thread-safety",
        children: "napi_threadsafe_function"
      }), "用来创建一个线程安全的ArkTS/JS函数，可以在不同的线程中调用。可以用于将异步操作的结果传递给ArkTS/JS环境，例如从另一个线程中读取数据或执行计算密集型操作。线程安全函数回调的执行仅在创建线程安全函数的ArkTS线程中执行。通过使用napi_threadsafe_function，可以实现ArkTS/JS和C++之间的高效通信，同时保持线程安全性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_threadsafe_function_release_mode",
      children: "napi_threadsafe_function_release_mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该枚举类型定义了两个常量，用于指定以哪一种方式来释放线程安全函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n  napi_tsfn_release,\n  napi_tsfn_abort\n} napi_threadsafe_function_release_mode;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该值会传给napi_release_threadsafe_function。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_release_threadsafe_function(napi_threadsafe_function func,\n                                 napi_threadsafe_function_release_mode mode);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "mode值为napi_tsfn_release时：表示将tsfn中持有的线程数减一，当线程数减到0时，线程安全函数tsfn将被销毁。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "mode值为napi_tsfn_abort时：该tsfn关闭，不能再调用此tsfn。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果设置为napi_tsfn_abort，利用napi_call_threadsafe_function接口调用此tsfn时，该行为可能导致UAF问题————当napi_tsfn_abort被设置时，tsfn立刻关闭，不能再被调用。如果此时调用napi_call_threadsafe_function，系统可能会返回napi_closing状态，表示tsfn正在关闭，但是传递给tsfn的data并未被放入队列中，这意味着data可能未被正确处理。如果data指向的内存已经被释放（例如，tsfn的资源被释放），但调用者仍然尝试访问或使用data，就会出现UAF(Use-After-Free)问题。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_threadsafe_function_call_mode",
      children: "napi_threadsafe_function_call_mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该枚举类型定义了两个常量，用于指定线程安全函数的调用模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据结构如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n  napi_tsfn_nonblocking,\n  napi_tsfn_blocking\n} napi_threadsafe_function_call_mode;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_tsfn_nonblocking：napi_call_threadsafe_function是非阻塞的，如果队列已满，则返回napi_queue_full，从而阻止数据添加到队列中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napi_tsfn_blocking：napi_call_threadsafe_function是阻塞的，直至队列中有空间可用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存管理类型",
      children: "内存管理类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API包含以下内存管理类型："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_handle_scope"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["napi_handle_scope数据类型是用来管理ArkTS/JS对象的生命周期的。它允许ArkTS/JS对象在一定范围内保持活动状态，以便在ArkTS/JS代码中使用。在创建napi_handle_scope时，所有在该范围内创建的ArkTS/JS对象都会保持活动状态，直到scope被关闭。这样可以做到ArkTS/JS对象生命周期最小化，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-guidelines#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%AE%A1%E7%90%86",
        children: "避免发生内存泄漏问题"
      }), "。同时，napi_handle_scope也可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-scenario-stability-cppcrash#section1662118147417",
        children: "生命周期类问题注意事项"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_escapable_handle_scope"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由napi_open_escapable_handle_scope接口创建，由napi_close_escapable_handle_scope接口关闭。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "表示一种特殊类型的句柄范围，用于将在escapable_handle_scope范围内创建的值返回给父scope。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用于napi_escape_handle接口，将ArkTS/JS对象逃逸到父scope，以便在外部作用域使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_ref"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向napi_value，允许用户管理ArkTS/JS值的生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_type_tag"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该结构体定义了一个包含两个无符号64位整数的类型标签，用于标识一个Node-API值的类型信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n  uint64_t lower;\n  uint64_t upper;\n} napi_type_tag;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "存储了两个无符号64位整数的128位值，用它来标记ArkTS/JS对象，确保它们属于某种类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "比napi_instanceof更强的类型检查，如果对象的原型被操纵，napi_instanceof可能会存在误报。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "type_tag与napi_wrap结合非常有用，因为它确保从包装对象检索的指针可以安全地转换为与先前应用于JavaScript对象的类型标记相对应的Native类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_async_cleanup_hook_handle"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_async_cleanup_hook_handle是Node-API中用于管理异步资源生命周期的一种机制。它允许注册一个清理钩子（cleanup hook），该钩子仅在当前napi_env环境生命周期结束时被调用。通过使用 napi_async_cleanup_hook_handle，可以确保某些异步资源在环境销毁前得到妥善释放，从而避免资源泄漏。此外，在Node-API实现中，只要该结构未被释放，会延迟整个 napi_env 环境的销毁。在HarmonyOS中，该接口的行为基本等同于env生命周期相关的清理钩子，除了支持重复注册相同的上下文数据（data）外，其余行为与标准的env清理钩子一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_critical_scope（扩展能力）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_critical_scope是Node-API中，用于创建临界接口执行环境的机制。它由napi_open_critical_scope接口创建，由napi_close_critical_scope接口关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "临界接口：需要在临界区作用域内执行的接口，通常接口名中含有critical关键字。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_strong_ref（扩展能力）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向napi_value，允许用户管理ArkTS对象的生命周期。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "提示："
        })
      }), " napi_strong_ref与napi_ref相比，具有更高的创建效率，但支持的功能受限（如：不支持强弱引用转换等）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_sendable_ref（扩展能力）"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向napi_value，允许调用者管理Sendable ArkTS对象的生命周期，并支持跨ArkTS线程操作napi_sendable_ref。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "提示："
        })
      }), " 与napi_ref相比，napi_sendable_ref支持跨ArkTS线程操作（例如，在A线程创建napi_sendable_ref，B线程通过napi_sendable_ref获取napi_value，C线程删除napi_sendable_ref。调用者需保证调用时序。），但功能上有以下限制：被引用napi_value必须是Sendable的，不支持强弱引用转换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "回调类型",
      children: "回调类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API包含以下回调类型："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_callback_info"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native侧获取JS侧参数信息，传递给napi_get_cb_info，用于获取JS侧入参信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_callback"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示用户定义的Native函数，暴露给ArkTS/JS，即ArkTS/JS侧调用的接口；一般不需要在callback中创建handle或者callback scope。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本用法如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef napi_value (*napi_callback)(napi_env, napi_callback_info);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_finalize"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数指针，用于传入napi_create_threadsafe_function、napi_set_instance_data、napi_wrap、napi_add_finalizer等接口。napi_finalize在对象被回收时会被调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_async_execute_callback"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数指针，用于napi_create_async_work接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "异步执行的Native函数，从工作池线程调用，可与事件循环线程并行执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "函数实现中必须避免调用非线程安全的Node-API。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node-API调用可以在napi_async_complete_callback中执行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_async_complete_callback"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_async_complete_callback用于异步操作完成后的回调。当需要进行异步操作时，可以使用napi_create_async_work函数创建一个异步操作任务，并指定一个napi_async_complete_callback回调函数，在异步操作完成后会自动调用该回调函数，以便进行后续的处理。该回调函数的参数包括当前异步操作任务的状态和返回值等信息，可以根据这些信息进行相应的处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_threadsafe_function_call_js"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数指针，在事件循环线程中执行，可与ArkTS/JS交互，从而实现更加复杂的功能，用于napi_create_threadsafe_function(napi_env env,…,napi_threadsafe_function_call_js call_js_cb,...)接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_cleanup_hook"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数指针，用于napi_add_env_cleanup_hook接口，当环境销毁时会被执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_async_cleanup_hook"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数指针，用于napi_add_async_cleanup_hook接口，当环境销毁时会被执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调度优先级",
      children: "调度优先级"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QoS决定了线程调度的优先级，等级定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    napi_qos_background = 0,\n    napi_qos_utility = 1,\n    napi_qos_default = 2,\n    napi_qos_user_initiated = 3,\n} napi_qos_t;\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "QoS等级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "适用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_qos_background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低等级，用户不可见任务，例如数据同步、备份。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_qos_utility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中低等级，不需要立即看到响应效果的任务，例如下载或导入数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_qos_default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_qos_user_initiated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高等级，用户触发并且可见进展，例如打开文档。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "事件循环模式",
      children: "事件循环模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi提供了运行底层事件循环的两种模式, 其定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    napi_event_mode_default = 0,\n    napi_event_mode_nowait = 1,\n} napi_event_mode;\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "事件循环运行模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解释说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_event_mode_default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阻塞式的运行底层事件循环，直到循环中没有或活跃的uv_handle句柄时退出事件循环。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_event_mode_nowait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非阻塞式的运行底层事件循环，尝试去处理一个任务，处理完之后退出事件循环；如果事件循环中没有任务，立刻退出事件循环。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "线程安全任务优先级",
      children: "线程安全任务优先级"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi提供了线程安全任务的优先级, 底层任务队列中的任务会根据其优先级被依次执行, 优先级的定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    napi_priority_immediate = 0,\n    napi_priority_high = 1,\n    napi_priority_low = 2,\n    napi_priority_idle = 3,\n} napi_task_priority;\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "任务优先级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解释说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_priority_immediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该优先级的级别最高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_priority_high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该优先级的级别低于napi_priority_immediate。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_priority_low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该优先级的级别低于napi_priority_immediate和napi_priority_high。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_priority_idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该优先级的级别最低。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的node-api接口",
      children: "支持的Node-API接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API接口在Node.js提供的原生模块基础上扩展，目前支持部分接口，具体可见下文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异步安全线程相关",
      children: "异步安全线程相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建线程安全函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_threadsafe_function_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取线程安全函数中的context。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用线程安全函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_acquire_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数可以开始使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_release_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示线程安全函数将停止使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_ref_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在主线程上运行的事件循环在线程安全函数被销毁之前不应退出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unref_threadsafe_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示在主线程上运行的事件循环可能会在线程安全函数被销毁之前退出。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffer相关",
      children: "buffer相关"
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
            children: "napi_create_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_buffer_copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，并以给定数据进行初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的ArkTS Buffer，使用给定的数据作为buffer对象的底层缓冲区，该接口可为Buffer附带额外数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取JS Buffer底层data及其长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定JS value是否为Buffer对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配一个附加有外部数据的JS ArrayBuffer。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "string相关",
      children: "string相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF16编码的C字符串数据创建ArkTS String。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的UTF16编码的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过ISO-8859-1编码的C字符串数据创建ArkTS String。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过UTF8编码的C字符串数据创建ArkTS String。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_latin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的ISO-8859-1编码的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_string_utf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value对应的UTF8编码的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_utf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的UTF-16编码的字符串缓冲区来创建ArkTS字符串，该方法能避免字符串的内存拷贝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external_string_ascii"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的ASCII编码的字符串缓冲区来创建ArkTS字符串，该方法能避免字符串的内存拷贝。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "date相关",
      children: "date相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的double数据创建ArkTS Date。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_date_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Date对应的C double值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为ArkTS Date对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arraybuffer相关",
      children: "arraybuffer相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_get_arraybuffer_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArrayBuffer的底层缓冲区及其长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为ArrayBuffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_detach_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分离给定ArrayBuffer的底层数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_detached_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的ArrayBuffer是否已被分离。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定大小的JS ArrayBuffer。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "module相关",
      children: "module相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_module_register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native模块注册接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生命周期相关",
      children: "生命周期相关"
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
            children: "napi_open_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个napi_handle_scope。需要使用napi_close_handle_scope进行关闭。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭传入的napi_handle_scope，关闭后，全部在其中产生的napi_value都将被关闭。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建出一个可逃逸的handle scope，可将范围内声明的值返回到父作用域。需要使用napi_close_escapable_handle_scope进行关闭。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_escapable_handle_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭传入的可逃逸的handle scope。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_escape_handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提升传入的JS Object的生命周期到其父作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为Object创建一个napi_ref。调用者需要自己管理napi_ref生命周期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除传入的napi_ref。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reference_ref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加传入的napi_ref的引用计数，并获取新的计数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reference_unref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少传入的napi_ref的引用计数，并获取新的计数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取与napi_ref相关联的JS Object。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_finalizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当ArkTS Object中的对象被垃圾回收时调用注册的napi_finalize回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "promise相关",
      children: "promise相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Promise对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_resolve_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对Promise关联的deferred对象进行兑现。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reject_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对Promise关联的deferred对象进行拒绝。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定napi_value是否为Promise对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "array相关",
      children: "array相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个ArkTS Array。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_array_with_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个指定长度的ArkTS Array。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_array_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取array的length。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为array。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在给定Object的指定索引处，设置属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object指定索引处的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若给定Object的指定索引处拥有属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试删除给定Object的指定索引处的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS TypeArray。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为TypeArray。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_typedarray_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定TypedArray的各种属性（例如：类型，长度，字节偏移量，ArrayBuffer等）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过现有的ArrayBuffer创建一个ArkTS DataView。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_dataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定ArkTS value是否为DataView。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_dataview_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定DataView的各种属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primitive相关",
      children: "primitive相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_get_boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的C boolean值，获取JS Boolean对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取global对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取null对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取undefined对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的JS value强转成JS Boolean。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的JS value强转成JS Number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的JS value强转成JS Object。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的JS value强转成JS String。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "class相关",
      children: "class相关"
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
            children: "napi_new_instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的构造函数，构建一个实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_new_target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取构造函数调用的new.target。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义与C++类相对应的JavaScript类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS对象上绑定一个Node-API模块对象实例。这个函数通常在将Node-API模块对象与ArkTS对象进行绑定时使用，以便在ArkTS中使用Native方法和属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_unwrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS对象上获取之前绑定的Node-API模块对象实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ArkTS对象上获取之前绑定的Node-API模块对象实例，并解除绑定。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "object相关",
      children: "object相关"
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
            children: "napi_get_prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS Object的prototype。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个默认的ArkTS Object。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_freeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结给定的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_seal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密封给定的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_typeof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定ArkTS value的ArkTS Type。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定object是否为给定constructor的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_type_tag_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将tag指针的值与Object关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_check_object_type_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的tag指针是否被关联到了ArkTS Object上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个ArkTS Symbol对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个ArkTS外部对象，该对象可以用于将C/C++中的自定义数据结构或对象传递到JS中，并且可以在ArkTS中访问其属性和方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获得napi_create_external创建的绑定了外部数据的ArkTS值，此函数可以在ArkTS和C/C++之间传递数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本数据类型相关",
      children: "基本数据类型相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int32数据创建JS number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint32数据创建JS number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int64数据创建JS number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的double数据创建JS number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JS number对应的C int32值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JS number对应的C uint32值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JS number对应的C int64值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JS number对应的C double值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定js Boolean对应的C bool值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bigint相关",
      children: "bigint相关"
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
            children: "napi_create_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的int64数据创建JS BigInt。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数据创建JS BigInt。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过一个C的uint64数组创建单个JS BigInt。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_int64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JS BigInt对应的C int64值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_uint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JS BigInt对应的C uint64值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bigint_words"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JS BigInt对应的信息，包括符号位、64位小端序数组和数组中的元素个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异常和错误相关",
      children: "异常和错误相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个JS value。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于抛出一个带文本信息的ArkTS Error。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的ArkTS TypeError。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的ArkTS RangeError。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断napi_value是否表示为一个error对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS Error。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_type_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS Error对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_range_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并获取一个带文本信息的ArkTS Error对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_and_clear_last_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取并清除最近一次出现的异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_exception_pending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否出现了异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "引发致命错误以立即终止进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_last_error_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取napi_extended_error_info结构体，其中包含最近一次出现的error信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_fatal_exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个致命异常并终止进程, 同时产生相应的crash日志。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性相关",
      children: "属性相关"
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
            children: "napi_get_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以字符串数组的形式获取对象的可枚举属性的名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object的给定属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定对象中是否存在给定属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试从给定Object中删除给定key属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_own_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有名为key的own property。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对给定Object设置一个给定名称的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定Object中指定名称的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有给定名称的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量的向给定Object中定义属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_all_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一个数组，其中包含此对象过滤后的属性名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异步任务相关",
      children: "异步任务相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_create_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步工作对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放先前创建的异步工作对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_queue_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将异步工作对象加到队列，由底层去调度执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_cancel_async_work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消入队的异步任务。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义异步操作",
      children: "自定义异步操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_async_init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步资源上下文环境（不支持与async_hook相关能力）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_make_callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在异步资源上下文环境中回调JS函数（不支持与async_hook相关能力）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_async_destroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁先前创建的异步资源上下文环境（不支持与async_hook相关能力）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个回调作用域（不支持与async_hook相关能力）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭先前创建的回调作用域（不支持与async_hook相关能力）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uv相关",
      children: "uv相关"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_uv_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前libuv loop实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数调用",
      children: "函数调用"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_call_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在C/C++侧调用JS方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_cb_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从给定的callback info中获取有关调用的详细信息，如参数和this指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境生命周期",
      children: "环境生命周期"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_set_instance_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定与当前运行的环境相关联的数据项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_instance_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索与当前运行的环境相关联的数据项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象生命周期管理",
      children: "对象生命周期管理"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_add_env_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册环境清理钩子函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_env_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消环境清理钩子函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_add_async_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册清理异步钩子函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_remove_async_cleanup_hook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消清理异步钩子函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扩展能力",
      children: "扩展能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/napi/napi#node-api%E7%BB%84%E4%BB%B6%E6%89%A9%E5%B1%95%E7%9A%84%E7%AC%A6%E5%8F%B7%E5%88%97%E8%A1%A8",
        children: "Node-API组件扩展的符号列表"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_queue_async_work_with_qos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将异步工作对象加到队列，由底层根据传入的qos优先级去调度执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_script_path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行指定的abc文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_load_module_with_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将abc文件作为模块加载，返回模块的命名空间，可在ArkTS基础运行时环境中使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object_with_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_property_descriptor创建js Object。descriptor的键名必须为string，且不可转为number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object_with_named_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_value和键名创建js Object。键名必须为string，且不可转为number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_native_binding_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制将js Object和Native对象绑定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_run_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动底层的事件循环。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_stop_event_loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止底层的事件循环。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ArkTS对象序列化为native数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_deserialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将native数据反序列化为ArkTS对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_serialization_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除序列化数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_threadsafe_function_with_priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照指定的优先级和入队策略，将任务投递到ArkTS主线程中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_sendable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定的JS value是否是Sendable的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_sendable_class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_object_with_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用给定的napi_property_descriptor创建一个Sendable对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_array_with_length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指定长度的Sendable数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_arraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable ArrayBuffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_sendable_typedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sendable TypedArray。"
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_wrap_enhance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ArkTS对象上绑定一个native对象实例并指定实例大小，运行时会统计传入的实例大小并将其累加，当累计大小达到GC触发阈值时，运行时会启动垃圾回收流程。开发者可以指定绑定的回调函数是否异步执行，如果是异步执行，回调函数必须保证是线程安全的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_ark_context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的上下文环境。"
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
            children: "销毁通过napi_create_ark_context创建的上下文环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开临界区作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_close_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭临界区作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_buffer_string_utf16_in_critical_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS String的UTF-16编码内存缓冲区数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向ArkTS对象的强引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除强引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据强引用对象获取其关联的ArkTS对象值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_throw_business_error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个带文本信息的ArkTS Error, 其错误对象的code属性类型为number。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_queue_async_work_with_qos"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_queue_async_work_with_qos(napi_env env,\n                                           napi_async_work work,\n                                           napi_qos_t qos);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用法同napi_queue_async_work，但可以指定QoS等级。napi_queue_async_work_with_qos使用方法可参考指定异步任务调度优先级。QoS详细介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/thread-scheduling/qos-guidelines",
        children: "QoS 开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_run_script_path"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_run_script_path(napi_env env,\n                                 const char* abcPath,\n                                 napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**注：**使用限制说明文档：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-65",
        children: "使用napi_run_script_path接口执行包内abc文件的使用限制"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_load_module"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_load_module(napi_env env,\n                             const char* path,\n                             napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_object_with_properties"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_object_with_properties(napi_env env,\n                                               napi_value* result,\n                                               size_t property_count,\n                                               const napi_property_descriptor* properties);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_object_with_named_properties"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_object_with_named_properties(napi_env env,\n                                                     napi_value* result,\n                                                     size_t property_count,\n                                                     const char** keys,\n                                                     const napi_value* values);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_coerce_to_native_binding_object"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_coerce_to_native_binding_object(napi_env env,\n                                                 napi_value js_object,\n                                                 napi_native_binding_detach_callback detach_cb,\n                                                 napi_native_binding_attach_callback attach_cb,\n                                                 void* native_object,\n                                                 void* hint);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_ark_runtime"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_ark_runtime(napi_env *env);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime",
        children: "使用napi_create_ark_runtime、napi_destroy_ark_runtime接口创建ArkTS运行时环境"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_destroy_ark_runtime"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_destroy_ark_runtime(napi_env *env);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_run_event_loop"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_run_event_loop(napi_env env, napi_event_mode mode);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者只能在自己通过napi_create_ark_runtime创建的ArkTS运行环境中调用napi_run_event_loop与napi_stop_event_loop接口，使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-event-loop",
        children: "使用扩展的Node-API接口在异步线程中运行和停止事件循环"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_stop_event_loop"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_stop_event_loop(napi_env env);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_serialize"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_serialize(napi_env env,\n                           napi_value object,\n                           napi_value transfer_list,\n                           napi_value clone_list,\n                           void** result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_deserialize"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_deserialize(napi_env env, void* buffer, napi_value* object);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_delete_serialization_data"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_delete_serialization_data(napi_env env, void* buffer);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_call_threadsafe_function_with_priority"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_call_threadsafe_function_with_priority(napi_threadsafe_function func,\n                                                        void *data,\n                                                        napi_task_priority priority,\n                                                        bool isTail);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_is_sendable"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_is_sendable(napi_env env, napi_value value, bool* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_define_sendable_class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_define_sendable_class(napi_env env,\n                                       const char* utf8name,\n                                       size_t length,\n                                       napi_callback constructor,\n                                       void* data,\n                                       size_t property_count,\n                                       const napi_property_descriptor* properties,\n                                       napi_value parent,\n                                       napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_sendable_object_with_properties"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_sendable_object_with_properties(napi_env env,\n                                                        size_t property_count,\n                                                        const napi_property_descriptor* properties,\n                                                        napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_sendable_array"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_sendable_array(napi_env env, napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_sendable_array_with_length"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_sendable_array_with_length(napi_env env, size_t length, napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_sendable_arraybuffer"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_sendable_arraybuffer(napi_env env, size_t byte_length, void** data, napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_sendable_typedarray"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_sendable_typedarray(napi_env env,\n                                            napi_typedarray_type type,\n                                            size_t length,\n                                            napi_value arraybuffer,\n                                            size_t byte_offset,\n                                            napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_wrap_sendable"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_wrap_sendable(napi_env env,\n                               napi_value js_object,\n                               void* native_object,\n                               napi_finalize finalize_cb,\n                               void* finalize_hint);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_wrap_sendable_with_size"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_wrap_sendable_with_size(napi_env env,\n                                         napi_value js_object,\n                                         void* native_object,\n                                         napi_finalize finalize_cb,\n                                         void* finalize_hint,\n                                         size_t native_binding_size);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_unwrap_sendable"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_unwrap_sendable(napi_env env, napi_value js_object, void** result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_remove_wrap_sendable"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_remove_wrap_sendable(napi_env env, napi_value js_object, void** result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_wrap_enhance"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_wrap_enhance(napi_env env,\n                              napi_value js_object,\n                              void* native_object,\n                              napi_finalize finalize_cb,\n                              bool async_finalizer,\n                              void* finalize_hint,\n                              size_t native_binding_size,\n                              napi_ref* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_ark_context"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_ark_context(napi_env env,\n                                    napi_env* newEnv);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_switch_ark_context"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_switch_ark_context(napi_env env);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_destroy_ark_context"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_destroy_ark_context(napi_env env);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_open_critical_scope"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_open_critical_scope(napi_env env, napi_critical_scope* scope);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_close_critical_scope"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_close_critical_scope(napi_env env, napi_critical_scope scope);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_get_buffer_string_utf16_in_critical_scope"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_get_buffer_string_utf16_in_critical_scope(napi_env env,\n                                                           napi_value value,\n                                                           const char16_t** buffer,\n                                                           size_t* length);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_strong_reference"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_strong_reference(napi_env env, napi_value value, napi_strong_ref* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_delete_strong_reference"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_delete_strong_reference(napi_env env, napi_strong_ref ref)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_get_strong_reference_value"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_get_strong_reference_value(napi_env env, napi_strong_ref ref, napi_value* result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_external_string_utf16"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_external_string_utf16(napi_env env,\n                                              const char16_t* str,\n                                              size_t length,\n                                              napi_finalize_callback finalize_callback,\n                                              void* finalize_hint,\n                                              napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_external_string_ascii"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_external_string_ascii(napi_env env,\n                                              const char* str,\n                                              size_t length,\n                                              napi_finalize_callback finalize_callback,\n                                              void* finalize_hint,\n                                              napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_create_strong_sendable_reference"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_create_strong_sendable_reference(napi_env env,\n                                                  napi_value value,\n                                                  napi_sendable_ref* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_delete_strong_sendable_reference"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_delete_strong_sendable_reference(napi_env env, napi_sendable_ref ref);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_get_strong_sendable_reference_value"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_get_strong_sendable_reference_value(napi_env env,\n                                                     napi_sendable_ref ref,\n                                                     napi_value* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "napi_throw_business_error"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_status napi_throw_business_error(napi_env env,\n                                      int32_t errorCode,\n                                      const char* msg);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他实用工具",
      children: "其他实用工具"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_get_version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取Node运行时支持的最高 NAPI 版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "node_api_get_module_file_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取加载项加载位置的绝对路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_strict_equals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要确保两个值不仅值相等且类型也相同时（例如处理特定类型的数据结构或算法时），可以使用napi_strict_equals来保证数据一致性。"
          })]
        })]
      })]
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