"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["719088"], {
721988(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_data_types_interfaces_jsvm_data_types_interfaces_md_4ad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-data-types-interfaces-jsvm-data-types-interfaces-md-4ad.json
var site_docs_coding_jsvm_jsvm_data_types_interfaces_jsvm_data_types_interfaces_md_4ad_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-data-types-interfaces/jsvm-data-types-interfaces","title":"JSVM-API 支持的数据类型和接口","description":"JSVM-API 的数据类型","source":"@site/docs/coding/jsvm/jsvm-data-types-interfaces/jsvm-data-types-interfaces.md","sourceDirName":"coding/jsvm/jsvm-data-types-interfaces","slug":"/coding/jsvm/jsvm-data-types-interfaces/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-data-types-interfaces/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"JSVM-API 支持的数据类型和接口","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-data-types-interfaces","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JSVM-API简介","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-introduction/"},"next":{"title":"使用JSVM-API实现JS与C/C++语言交互开发流程","permalink":"/harmonyos-docs-site/coding/jsvm/use-jsvm-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-data-types-interfaces/jsvm-data-types-interfaces.md


const frontMatter = {
	title: 'JSVM-API 支持的数据类型和接口',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-data-types-interfaces',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'JSVM-API 支持的数据类型和接口';

const assets = {

};



const toc = [{
  "value": "JSVM-API 的数据类型",
  "id": "jsvm-api-的数据类型",
  "level": 2
}, {
  "value": "JSVM_Status",
  "id": "jsvm_status",
  "level": 3
}, {
  "value": "JSVM_ExtendedErrorInfo",
  "id": "jsvm_extendederrorinfo",
  "level": 3
}, {
  "value": "JSVM_Value",
  "id": "jsvm_value",
  "level": 3
}, {
  "value": "JSVM_Env",
  "id": "jsvm_env",
  "level": 3
}, {
  "value": "JSVM_ValueType",
  "id": "jsvm_valuetype",
  "level": 3
}, {
  "value": "JSVM_TypedarrayType",
  "id": "jsvm_typedarraytype",
  "level": 3
}, {
  "value": "JSVM_RegExpFlags",
  "id": "jsvm_regexpflags",
  "level": 3
}, {
  "value": "编译选项相关类型",
  "id": "编译选项相关类型",
  "level": 3
}, {
  "value": "JSVM",
  "id": "jsvm",
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
  "value": "支持的JSVM-API接口",
  "id": "支持的jsvm-api接口",
  "level": 2
}, {
  "value": "使用 JSVM-API 接口创建引擎实例及 JS 执行上下文环境",
  "id": "使用-jsvm-api-接口创建引擎实例及-js-执行上下文环境",
  "level": 3
}, {
  "value": "使用 JSVM-API 接口编译及执行 JS 代码",
  "id": "使用-jsvm-api-接口编译及执行-js-代码",
  "level": 3
}, {
  "value": "使用 JSVM-API WebAssembly 接口编译 wasm module",
  "id": "使用-jsvm-api-webassembly-接口编译-wasm-module",
  "level": 3
}, {
  "value": "异常处理",
  "id": "异常处理",
  "level": 3
}, {
  "value": "对象生命周期管理",
  "id": "对象生命周期管理",
  "level": 3
}, {
  "value": "创建JS对象类型和基本类型",
  "id": "创建js对象类型和基本类型",
  "level": 3
}, {
  "value": "从JS类型获取C类型&amp;JS类型信息",
  "id": "从js类型获取c类型js类型信息",
  "level": 3
}, {
  "value": "JS值操作和抽象操作",
  "id": "js值操作和抽象操作",
  "level": 3
}, {
  "value": "JS属性操作",
  "id": "js属性操作",
  "level": 3
}, {
  "value": "JS函数操作",
  "id": "js函数操作",
  "level": 3
}, {
  "value": "对象绑定操作",
  "id": "对象绑定操作",
  "level": 3
}, {
  "value": "版本管理",
  "id": "版本管理",
  "level": 3
}, {
  "value": "内存管理",
  "id": "内存管理",
  "level": 3
}, {
  "value": "Promise操作",
  "id": "promise操作",
  "level": 3
}, {
  "value": "JSON操作",
  "id": "json操作",
  "level": 3
}, {
  "value": "创建和使用虚拟机的启动快照",
  "id": "创建和使用虚拟机的启动快照",
  "level": 3
}, {
  "value": "检查传入的值是否可调用",
  "id": "检查传入的值是否可调用",
  "level": 3
}, {
  "value": "Lock操作",
  "id": "lock操作",
  "level": 3
}, {
  "value": "设置与获取和当前运行的JSVM环境相关联的数据",
  "id": "设置与获取和当前运行的jsvm环境相关联的数据",
  "level": 3
}, {
  "value": "任务队列",
  "id": "任务队列",
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
        id: "jsvm-api-支持的数据类型和接口",
        children: "JSVM-API 支持的数据类型和接口"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "jsvm-api-的数据类型",
      children: "JSVM-API 的数据类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_status",
      children: "JSVM_Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这是一个枚举数据类型，用来表示JSVM-API接口返回的状态信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每调用一次JSVM-API函数，都会返回一个值，用来表示操作成功与否的相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    typedef enum {\n        JSVM_OK,                              /* 成功状态 */\n        JSVM_INVALID_ARG,                     /* 无效的状态 */\n        JSVM_OBJECT_EXPECTED,                 /* 期待传入对象类型 */\n        JSVM_STRING_EXPECTED,                 /* 期待传入字符串类型 */\n        JSVM_NAME_EXPECTED,                   /* 期待传入名字 */\n        JSVM_FUNCTION_EXPECTED,               /* 期待传入函数类型 */\n        JSVM_NUMBER_EXPECTED,                 /* 期待传入数字类型 */\n        JSVM_BOOL_EXPECTED,                   /* 期待传入布尔类型 */\n        JSVM_ARRAY_EXPECTED,                  /* 期待传入数组类型 */\n        JSVM_GENERIC_FAILURE,                 /* 泛型失败状态 */\n        JSVM_PENDING_EXCEPTION,               /* 挂起异常状态 */\n        JSVM_CANCELLED,                       /* 取消状态 */\n        JSVM_ESCAPE_CALLED_TWICE,             /* 转义调用了2次 */\n        JSVM_HANDLE_SCOPE_MISMATCH,           /* 句柄作用域不匹配 */\n        JSVM_CALLBACK_SCOPE_MISMATCH,         /* 回调作用域不匹配 */\n        JSVM_QUEUE_FULL,                      /* 队列满 */\n        JSVM_CLOSING,                         /* 关闭中 */\n        JSVM_BIGINT_EXPECTED,                 /* 期望传入Bigint类型 */\n        JSVM_DATE_EXPECTED,                   /* 期望传入日期类型 */\n        JSVM_ARRAYBUFFER_EXPECTED,            /* 期望传入ArrayBuffer类型 */\n        JSVM_DETACHABLE_ARRAYBUFFER_EXPECTED, /* 可分离的数组缓冲区预期状态 */\n        JSVM_WOULD_DEADLOCK,                  /* 将死锁状态 */\n        JSVM_NO_EXTERNAL_BUFFERS_ALLOWED,     /* 不允许外部缓冲区 */\n        JSVM_CANNOT_RUN_JS,                   /* 不能执行JS */\n        JSVM_INVALID_TYPE,                    /* 非法类型 */\n        JSVM_JIT_MODE_EXPECTED,                /* 期望在JIT模式下执行 */\n    } JSVM_Status;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_extendederrorinfo",
      children: "JSVM_ExtendedErrorInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个结构体，在调用函数不成功时存储了较为详细的错误信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    const char* errorMessage;\n    void* engineReserved;\n    uint32_t engineErrorCode;\n    JSVM_Status errorCode;\n} JSVM_ExtendedErrorInfo;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_value",
      children: "JSVM_Value"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在C++代码中，用于表示JavaScript值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_env",
      children: "JSVM_Env"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "表示JSVM-API执行时的上下文，作为Native函数的参数传递给JSVM-API接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "退出Native侧插件时，JSVM_Env将失效，该事件通过回调传递给OH_JSVM_SetInstanceData接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止缓存JSVM_Env，并禁止在不同Worker中传递JSVM_Env。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在不同线程间共享JSVM_Env时，要保证在线程切换时在前一个线程中关闭env scope并在新的线程中打开新的env scope，以保证threadlocal变量的线程隔离。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_valuetype",
      children: "JSVM_ValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM_Value的类型。包含了ECMAScript语言规范中定义的类型，其中JSVM_EXTERNAL表示外部数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    JSVM_UNDEFINED,\n    JSVM_NULL,\n    JSVM_BOOLEAN,\n    JSVM_NUMBER,\n    JSVM_STRING,\n    JSVM_SYMBOL,\n    JSVM_OBJECT,\n    JSVM_FUNCTION,\n    JSVM_EXTERNAL,\n    JSVM_BIGINT,\n} JSVM_ValueType;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_typedarraytype",
      children: "JSVM_TypedarrayType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypedArray 的基本二进制标量数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    JSVM_INT8_ARRAY,\n    JSVM_UINT8_ARRAY,\n    JSVM_UINT8_CLAMPED_ARRAY,\n    JSVM_INT16_ARRAY,\n    JSVM_UINT16_ARRAY,\n    JSVM_INT32_ARRAY,\n    JSVM_UINT32_ARRAY,\n    JSVM_FLOAT32_ARRAY,\n    JSVM_FLOAT64_ARRAY,\n    JSVM_BIGINT64_ARRAY,\n    JSVM_BIGUINT64_ARRAY,\n} JSVM_TypedarrayType;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm_regexpflags",
      children: "JSVM_RegExpFlags"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正则表达式标志位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    JSVM_REGEXP_NONE = 0,\n    JSVM_REGEXP_GLOBAL = 1 << 0,\n    JSVM_REGEXP_IGNORE_CASE = 1 << 1,\n    JSVM_REGEXP_MULTILINE = 1 << 2,\n    JSVM_REGEXP_STICKY = 1 << 3,\n    JSVM_REGEXP_UNICODE = 1 << 4,\n    JSVM_REGEXP_DOT_ALL = 1 << 5,\n    JSVM_REGEXP_LINEAR = 1 << 6,\n    JSVM_REGEXP_HAS_INDICES = 1 << 7,\n    JSVM_REGEXP_UNICODE_SETS = 1 << 8,\n} JSVM_RegExpFlags;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编译选项相关类型",
      children: "编译选项相关类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_CompileOptions"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配合 OH_JSVM_CompileScriptWithOptions 接口使用，是其参数中 options 数组的元素类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "id 代表这个编译选项的类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "content 代表编译选项的内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "id 的值和 content 的类型需对应使用，具体对应关系请参见各选项类型的介绍。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    /** compile option id. */\n    JSVM_CompileOptionId id;\n    /** option content. */\n    union {\n      /** ptr type. */\n      void *ptr;\n      /** int type. */\n      int num;\n      /** bool type. */\n      _Bool boolean;\n    } content;\n} JSVM_CompileOptions;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_CompileOptionId"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM_CompileOptions 中的 id 对应类型，每个值有对应的 content 类型。JSVM_COMPILE_ENABLE_SOURCE_MAP 的类型为 bool，当 JSVM_ScriptOrigin 中的 sourceMapUrl 不为空时生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    /** compile mode. */\n    JSVM_COMPILE_MODE,\n    /** code cache content. */\n    JSVM_COMPILE_CODE_CACHE,\n    /** script origin. */\n    JSVM_COMPILE_SCRIPT_ORIGIN,\n    /** compile profile content. */\n    JSVM_COMPILE_COMPILE_PROFILE,\n    /** switch for source map support. */\n    JSVM_COMPILE_ENABLE_SOURCE_MAP,\n} JSVM_CompileOptionId;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_CompileMode"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当 id 为 JSVM_COMPILE_MODE 时，content 类型的每个值代表一种编译模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_COMPILE_MODE_DEFAULT : 默认的编译选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_COMPILE_MODE_CONSUME_CODE_CACHE : 消耗 codecache 进行编译。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_COMPILE_MODE_EAGER_COMPILE : 进行全量编译，不再进行 lazy compile。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_COMPILE_MODE_PRODUCE_COMPILE_PROFILE/JSVM_COMPILE_MODE_CONSUME_COMPILE_PROFILE : 当前暂无效果，请等待后续更新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum {\n    /** default mode. */\n    JSVM_COMPILE_MODE_DEFAULT,\n    /** consume code cache. */\n    JSVM_COMPILE_MODE_CONSUME_CODE_CACHE,\n    /** apply eager compile. */\n    JSVM_COMPILE_MODE_EAGER_COMPILE,\n    /** preset for compile profile. */\n    JSVM_COMPILE_MODE_PRODUCE_COMPILE_PROFILE,\n    /** consume compile profile. */\n    JSVM_COMPILE_MODE_CONSUME_COMPILE_PROFILE,\n} JSVM_CompileMode;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_CodeCache"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当 id 为 JSVM_COMPILE_CODE_CACHE 时，content 的类型为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cache : 指向 code cache 的指针。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "length : 代表 code cache 的大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    /** cache pointer. */\n    uint8_t *cache;\n    /** length. */\n    size_t length;\n} JSVM_CodeCache;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_ScriptOrigin"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当 id 为 JSVM_COMPILE_SCRIPT_ORIGIN 时，content 存放待编译脚本的源码信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sourceMapUrl : sourceMap 的路径，当前仅支持运行设备上的本地路径，可以为空。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "resourceName : 待编译的 js script 的名字。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    /** Sourcemap url. */\n    const char* sourceMapUrl;\n    /** Resource name. */\n    const char* resourceName;\n    /** Resource line offset. */\n    size_t resourceLineOffset;\n    /** Resource column offset. */\n    size_t resourceColumnOffset;\n} JSVM_ScriptOrigin;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jsvm",
      children: "JSVM"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存管理类型",
      children: "内存管理类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API 包含以下内存管理类型："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_HandleScope"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM_HandleScope 数据类型用于管理 JavaScript 对象的生命周期。它确保在指定范围内创建的 JavaScript 对象保持活动状态，直到该范围结束。这样可以防止使用已释放的对象，提高代码的可靠性和性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_EscapableHandleScope"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由 OH_JSVM_OpenEscapableHandleScope 接口创建，由 OH_JSVM_CloseEscapableHandleScope 接口关闭。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "表示一种特殊类型的句柄范围，用于将在JSVM_EscapableHandleScope范围内创建的值返回给父scope。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用于 OH_JSVM_EscapeHandle 接口，将 JSVM_EscapableHandleScope 范围内的值提升为 JavaScript 对象，以便在外部作用域使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_Ref"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向JSVM_Value，允许开发者管理JavaScript值的生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_TypeTag"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该结构体定义了一个包含两个无符号64位整数的类型标签，用于标识一个JSVM-API值的类型信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    uint64_t lower;\n    uint64_t upper;\n} JSVM_TypeTag;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "存储了两个无符号64位整数的128位值，用它来标识JavaScript对象，确保它们属于某种类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "比OH_JSVM_Instanceof更强的类型检查，如果对象的原型被操纵，OH_JSVM_Instanceof可能会报告误报。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM_TypeTag 在与 OH_JSVM_Wrap 结合使用时最有用，因为它确保从包装对象检索的指针可以安全地转换为与先前应用于JavaScript对象的类型标签相对应的Native类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "回调类型",
      children: "回调类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API包含以下回调类型："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_CallbackStruct"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户提供的 Native callback 的回调函数指针和数据，JSVM_CallbackStruct 将通过 JSVM-API 暴露给 JavaScript。例如，可以使用 OH_JSVM_CreateFunction 接口创建绑定到 Native callback 的 JS 函数，其中 Native callback 就是通过 JSVM_CallbackStruct 结构定义。除非在对象生命周期管理中有特殊要求，一般不在此 callback 中创建 handle 或者 callback scope。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n  JSVM_Value(*callback)(JSVM_Env env, JSVM_CallbackInfo info);\n  void* data;\n} JSVM_CallbackStruct;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_Callback"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM_CallbackStruct 指针类型的别名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义如下:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef JSVM_CallbackStruct* JSVM_Callback;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_CallbackInfo"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户定义的 Native callback，第一个参数类型是 JSVM_Env，第二个参数类型是 JSVM_CallbackInfo。JSVM_CallbackInfo 表示从 JS 侧调用到 Native 侧时携带的调用信息，如参数列表。在实现 Native callback 时，一般使用 OH_JSVM_GetCbInfo 接口从 JSVM_CallbackInfo 中获取调用信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_Finalize"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数指针，用于传入OH_JSVM_SetInstanceData、OH_JSVM_CreateExternal、OH_JSVM_Wrap等接口。JSVM_Finalize在对象被回收后会被调用，可用于在JavaScript对象被垃圾回收时释放Native对象。JSVM 不保证是否执行该回调函数，也不保证执行该回调函数的时机，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发者不应依赖于该回调的执行时机"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "写法如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*JSVM_Finalize)(JSVM_Env env, void* finalizeData, void* finalizeHint);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_PropertyHandlerConfigurationStruct"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当执行对象的getter、setter、deleter和enumerator操作时，对应的回调将会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {\n    JSVM_Value(JSVM_CDECL* genericNamedPropertyGetterCallback)(JSVM_Env env,\n                                                               JSVM_Value name,\n                                                               JSVM_Value thisArg,\n                                                               JSVM_Value namedPropertyData);\n    JSVM_Value(JSVM_CDECL* genericNamedPropertySetterCallback)(JSVM_Env env,\n                                                               JSVM_Value name,\n                                                               JSVM_Value property,\n                                                               JSVM_Value thisArg,\n                                                               JSVM_Value namedPropertyData);\n    JSVM_Value(JSVM_CDECL* genericNamedPropertyDeleterCallback)(JSVM_Env env,\n                                                                JSVM_Value name,\n                                                                JSVM_Value thisArg,\n                                                                JSVM_Value namedPropertyData);\n    JSVM_Value(JSVM_CDECL* genericNamedPropertyEnumeratorCallback)(JSVM_Env env,\n                                                                   JSVM_Value thisArg,\n                                                                   JSVM_Value namedPropertyData);\n    JSVM_Value(JSVM_CDECL* genericIndexedPropertyGetterCallback)(JSVM_Env env,\n                                                                JSVM_Value index,\n                                                                JSVM_Value thisArg,\n                                                                JSVM_Value indexedPropertyData);\n    JSVM_Value(JSVM_CDECL* genericIndexedPropertySetterCallback)(JSVM_Env env,\n                                                                 JSVM_Value index,\n                                                                 JSVM_Value property,\n                                                                 JSVM_Value thisArg,\n                                                                 JSVM_Value indexedPropertyData);\n    JSVM_Value(JSVM_CDECL* genericIndexedPropertyDeleterCallback)(JSVM_Env env,\n                                                                  JSVM_Value index,\n                                                                  JSVM_Value thisArg,\n                                                                  JSVM_Value indexedPropertyData);\n    JSVM_Value(JSVM_CDECL* genericIndexedPropertyEnumeratorCallback)(JSVM_Env env,\n                                                                     JSVM_Value thisArg,\n                                                                     JSVM_Value indexedPropertyData);\n    JSVM_Value namedPropertyData;\n    JSVM_Value indexedPropertyData;\n} JSVM_PropertyHandlerConfigurationStruct;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_PropertyHandlerCfg"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包含属性监听回调的结构指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本用法如下:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef JSVM_PropertyHandlerConfigurationStruct* JSVM_PropertyHandlerCfg;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的jsvm-api接口",
      children: "支持的JSVM-API接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准JS引擎的能力通过JSVM-API提供。JSVM-API支持动态链接到不同版本的JS引擎库，从而为开发者屏蔽掉不同引擎接口的差异。JSVM-API提供引擎生命周期管理、JS context管理、JS代码执行、JS/C++互操作、执行环境快照、codecache等能力，具体可见下文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-jsvm-api-接口创建引擎实例及-js-执行上下文环境",
      children: "使用 JSVM-API 接口创建引擎实例及 JS 执行上下文环境"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行JS代码需要先创建JavaScript VM，创建JS执行的上下文环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化JavaScript引擎实例"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建JavaScript引擎实例"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DestroyVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁JavaScript引擎实例"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_OpenVMScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开一个新的VM scope，引擎实例只能在scope范围内使用，可以保证引擎实例不被销毁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CloseVMScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭VM scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateEnv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的JS执行上下文环境，并注册指定的Native函数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DestroyEnv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个JS执行上下文环境"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_OpenEnvScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开一个新的Env scope，Env只能在scope范围内使用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CloseEnvScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭Env scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_OpenHandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开一个Handle scope，确保scope范围内的JSVM_Value不被GC回收"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CloseHandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭Handle scope"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSVM_InitOptions 的使用描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM 提供了多种配置选项，允许开发者在执行 OH_JSVM_Init 时灵活配置其行为。可以通过 OH_JSVM_GetVMInfo 接口获取当前 JSVM 版本所对应的 V8 引擎版本。JSVM 中可支持的选项范围与对应的 V8 引擎版本可支持的选项范围保持一致。OH_JSVM_GetVMInfo 接口的使用参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-use/use-jsvm-about-version",
        children: "使用JSVM-API接口获取JSVM API的版本号"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(832246)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议开发者在没有特殊需求的情况下，仅使用JSVM内部的默认配置选项。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常规模式下初始化 VM 平台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void NormalInit(bool &vmInit) {\n    if (!vmInit) {\n        // JSVM only need init once\n        JSVM_InitOptions initOptions;\n        memset(&initOptions, 0, sizeof(initOptions));\n        JSVM_Status cond = OH_JSVM_Init(&initOptions);\n        if(cond == JSVM_OK) {\n            vmInit = true;\n        } else {\n            vmInit = false;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化低内存占用的 VM 平台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void LowMemoryInit(bool &vmInit) {\n    if (!vmInit) {\n        // JSVM only need init once\n        JSVM_InitOptions initOptions;\n        int argc = 4;\n        initOptions.argc = &argc;\n        const char* argv[4];\n        argv[1] = \"--incremental-marking-hard-trigger=40\";\n        argv[2] = \"--min-semi-space-size=1\";\n        argv[3] = \"--max-semi-space-size=4\";\n        initOptions.argv = const_cast<char**>(argv);\n        OH_JSVM_Init(&initOptions);\n        vmInit = true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化低GC触发频次的 VM 平台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void LowGCFrequencyInit(bool &vmInit) {\n    if (!vmInit) {\n        // JSVM only need init once\n        JSVM_InitOptions initOptions;\n        int argc = 4;\n        initOptions.argc = &argc;\n        const char* argv[4];\n        argv[1] = \"--incremental-marking-hard-trigger=80\";\n        argv[2] = \"--min-semi-space-size=16\";\n        argv[3] = \"--max-semi-space-size=16\";\n        initOptions.argv = const_cast<char**>(argv);\n        OH_JSVM_Init(&initOptions);\n        vmInit = true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用以上三个接口可以分别初始化具备不同特性的 VM 平台。初始化之后，可以创建 VM 实例，并执行 JavaScript 脚本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比 NormalInit 接口，LowGCFrequencyInit 接口初始化的VM平台 GC 触发频次更低。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比 NormalInit 接口，LowMemoryInit 接口初始化的VM平台内存占用更少。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "创建 VM 实例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建及销毁 JavaScript 引擎实例，包含创建及销毁 JS 执行上下文环境"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool VM_INIT = false;\n\nstatic JSVM_Value ConsoleInfo(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1];\n    char log[256] = \"\";\n    size_t logLength = 0;\n    OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL);\n\n    OH_JSVM_GetValueStringUtf8(env, args[0], log, 255, &logLength);\n    log[255] = 0;\n    OH_LOG_INFO(LOG_APP, \"JSVM API TEST: %{public}s\", log);\n    return nullptr;\n}\n\nstatic JSVM_Value Add(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 2;\n    JSVM_Value args[2];\n    OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL);\n    double num1 = 0;\n    double num2 = 0;\n    OH_JSVM_GetValueDouble(env, args[0], &num1);\n    OH_JSVM_GetValueDouble(env, args[1], &num2);\n    JSVM_Value sum = nullptr;\n    OH_JSVM_CreateDouble(env, num1 + num2, &sum);\n    return sum;\n}\n\nstatic napi_value MyJSVMDemo([[maybe_unused]] napi_env _env, [[maybe_unused]] napi_callback_info _info) {\n    std::thread t([]() {\n        // 可以根据不同的业务需求初始化具备不同能力的 VM 平台：\n        // 1. 初始化默认的 VM 平台：调用'NormalInit'接口。\n        // 2. 初始化低内存占用的 VM 平台：调用'LowMemoryInit'接口。\n        // 3. 初始化低 GC 触发频次的 VM 平台：调用'LowGCFrequencyInit'接口。\n        NormalInit(VM_INIT);\n        // create vm, and open vm scope\n        JSVM_VM vm;\n        JSVM_CreateVMOptions options;\n        memset(&options, 0, sizeof(options));\n        OH_JSVM_CreateVM(&options, &vm);\n\n        JSVM_VMScope vmScope;\n        OH_JSVM_OpenVMScope(vm, &vmScope);\n\n        JSVM_CallbackStruct param[] = {\n            {.data = nullptr, .callback = ConsoleInfo},\n            {.data = nullptr, .callback = Add},\n        };\n        JSVM_PropertyDescriptor descriptor[] = {\n            {\"consoleinfo\", NULL, &param[0], NULL, NULL, NULL, JSVM_DEFAULT},\n            {\"add\", NULL, &param[1], NULL, NULL, NULL, JSVM_DEFAULT},\n        };\n        // create env, register native method, and open env scope\n        JSVM_Env env;\n        OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env);\n\n        JSVM_EnvScope envScope;\n        OH_JSVM_OpenEnvScope(env, &envScope);\n\n        // open handle scope\n        JSVM_HandleScope handleScope;\n        OH_JSVM_OpenHandleScope(env, &handleScope);\n\n        std::string sourceCodeStr = \"\\\n        {\\\n            let value = add(4.96, 5.28);\\\n            consoleinfo('Result is:' + value);\\\n        }\";\n        // compile js script\n        JSVM_Value sourceCodeValue;\n        OH_JSVM_CreateStringUtf8(env, sourceCodeStr.c_str(), sourceCodeStr.size(), &sourceCodeValue);\n        JSVM_Script script;\n        OH_JSVM_CompileScript(env, sourceCodeValue, nullptr, 0, true, nullptr, &script);\n        JSVM_Value result;\n        // run js script\n        OH_JSVM_RunScript(env, script, &result);\n        JSVM_ValueType type;\n        OH_JSVM_Typeof(env, result, &type);\n        OH_LOG_INFO(LOG_APP, \"JSVM API TEST type: %{public}d\", type);\n\n        // exit vm and clean memory\n        OH_JSVM_CloseHandleScope(env, handleScope);\n\n        OH_JSVM_CloseEnvScope(env, envScope);\n        OH_JSVM_DestroyEnv(env);\n\n        OH_JSVM_CloseVMScope(vm, vmScope);\n        OH_JSVM_DestroyVM(vm);\n    });\n\n    t.detach();\n\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-jsvm-api-接口编译及执行-js-代码",
      children: "使用 JSVM-API 接口编译及执行 JS 代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译及执行JS代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_CompileScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译JavaScript代码并返回绑定到当前环境的编译脚本"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CompileScriptWithOrigin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译JavaScript代码并返回绑定到当前环境的编译脚本，同时传入包括 sourceMapUrl 和源文件名在内的源代码信息，用于处理 source map 信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CompileScriptWithOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用的编译接口，通过传入 option 数组完成前面的 compile 接口全部功能，同时支持后续选项扩展"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateCodeCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为编译脚本创建code cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_RunScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行编译脚本，如果没有 JIT 权限支持，执行含wasm的脚本会失败，在特定场景下存在性能差异，并打印一行日志提示开发者"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译及执行 JS 代码（创建 VM 实例，注册函数，执行 JS，销毁 VM 实例）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstring>\n#include <fstream>\n#include <string>\n#include <vector>\n\n// 依赖libjsvm.so\n#include \"ark_runtime/jsvm.h\"\n\nusing namespace std;\n\nstatic JSVM_Value Hello(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_Value output;\n    void* data = nullptr;\n    OH_JSVM_GetCbInfo(env, info, nullptr, nullptr, nullptr, &data);\n    OH_JSVM_CreateStringUtf8(env, (char*)data, strlen((char*)data), &output);\n    return output;\n}\n\nstatic JSVM_CallbackStruct hello_cb = { Hello, (void*)\"Hello\" };\n\nstatic string srcGlobal = R\"JS(\nconst concat = (...args) => args.reduce((a, b) => a + b);\n)JS\";\n\nstatic void RunScriptWithOption(JSVM_Env env, string& src,\n                                uint8_t** dataPtr = nullptr,\n                                size_t* lengthPtr = nullptr) {\n    JSVM_HandleScope handleScope;\n    OH_JSVM_OpenHandleScope(env, &handleScope);\n\n    JSVM_Value jsSrc;\n    OH_JSVM_CreateStringUtf8(env, src.c_str(), src.size(), &jsSrc);\n\n    uint8_t* data = dataPtr ? *dataPtr : nullptr;\n    auto compilMode = data ? JSVM_COMPILE_MODE_CONSUME_CODE_CACHE :  JSVM_COMPILE_MODE_DEFAULT;\n    size_t length = lengthPtr ? *lengthPtr : 0;\n    JSVM_Script script;\n    // 编译js代码\n    JSVM_ScriptOrigin origin {\n        // 以包名 helloworld 为例, 假如存在对应的 sourcemap, sourcemap 的路径可以是 /data/app/el2/100/base/com.example.helloworld/files/index.js.map\n        .sourceMapUrl = \"/data/app/el2/100/base/com.example.helloworld/files/index.js.map\",\n        // 源文件名字\n        .resourceName = \"index.js\",\n        // script 在源文件中的起始行列号\n        .resourceLineOffset = 0,\n        .resourceColumnOffset = 0,\n    };\n    JSVM_CompileOptions option[3];\n    option[0] = {\n        .id = JSVM_COMPILE_MODE,\n        .content = { .num = compilMode }\n    };\n    JSVM_CodeCache codeCache = {\n        .cache = data,\n        .length = length\n    };\n    option[1] = {\n        .id = JSVM_COMPILE_CODE_CACHE,\n        .content = { .ptr = &codeCache }\n    };\n    // JSVM_COMPILE_ENABLE_SOURCE_MAP 选项默认值为 false，若为 true 那么对应的 sourceMapUrl 必须不为空\n    option[2] = {\n        .id = JSVM_COMPILE_ENABLE_SOURCE_MAP,\n        .content = { .boolean = true }\n    };\n    OH_JSVM_CompileScriptWithOptions(env, jsSrc, 3, option, &script);\n\n    JSVM_Value result;\n    // 执行js代码\n    OH_JSVM_RunScript(env, script, &result);\n\n    char resultStr[128];\n    size_t size = 0;\n    OH_JSVM_GetValueStringUtf8(env, result, resultStr, 128, &size);\n\n    OH_JSVM_CloseHandleScope(env, handleScope);\n}\n\nstatic void RunScript(JSVM_Env env, string& src,\n                       bool withOrigin = false,\n                       uint8_t** dataPtr = nullptr,\n                       size_t* lengthPtr = nullptr) {\n    JSVM_HandleScope handleScope;\n    OH_JSVM_OpenHandleScope(env, &handleScope);\n\n    JSVM_Value jsSrc;\n    OH_JSVM_CreateStringUtf8(env, src.c_str(), src.size(), &jsSrc);\n\n    uint8_t* data = dataPtr ? *dataPtr : nullptr;\n    size_t length = lengthPtr ? *lengthPtr : 0;\n    bool cacheRejected = true;\n    JSVM_Script script;\n    // 编译js代码\n    if (withOrigin) {\n        JSVM_ScriptOrigin origin {\n            // 以包名 helloworld 为例, 假如存在对应的 sourcemap, sourcemap 的路径可以是 /data/app/el2/100/base/com.example.helloworld/files/index.js.map\n            .sourceMapUrl = \"/data/app/el2/100/base/com.example.helloworld/files/index.js.map\",\n            // 源文件名字\n            .resourceName = \"index.js\",\n            // script 在源文件中的起始行列号\n            .resourceLineOffset = 0,\n            .resourceColumnOffset = 0,\n        };\n        OH_JSVM_CompileScriptWithOrigin(env, jsSrc, data, length, true, &cacheRejected, &origin, &script);\n    } else {\n        OH_JSVM_CompileScript(env, jsSrc, data, length, true, &cacheRejected, &script);\n    }\n    printf(\"Code cache is %s\\n\", cacheRejected ? \"rejected\" : \"used\");\n\n    JSVM_Value result;\n    // 执行js代码\n    OH_JSVM_RunScript(env, script, &result);\n\n    char resultStr[128];\n    size_t size = 0;\n    OH_JSVM_GetValueStringUtf8(env, result, resultStr, 128, &size);\n\n    OH_JSVM_CloseHandleScope(env, handleScope);\n}\n\nvoid RunWithOption(uint8_t** dataPtr, size_t* lengthPtr) {\n    // 创建虚拟机实例\n    JSVM_VM vm;\n    OH_JSVM_CreateVM(nullptr, &vm);\n    JSVM_VMScope vmScope;\n    OH_JSVM_OpenVMScope(vm, &vmScope);\n\n    JSVM_Env env;\n    // 将native函数注册成js可调用的方法，hello_cb中记录该native方法的指针和参数等信息\n    JSVM_PropertyDescriptor descriptors[] = {\n        { \"hello\", NULL, &hello_cb, NULL, NULL, NULL, JSVM_DEFAULT }\n    };\n    OH_JSVM_CreateEnv(vm, 1, descriptors, &env);\n    JSVM_EnvScope envScope;\n    OH_JSVM_OpenEnvScope(env, &envScope);\n    // 执行js源码src，src中可以包含任何js语法。也可以调用已注册的native方法。\n    auto src = srcGlobal + \"concat(hello(), ', ', 'World', ' from RunWithOption!')\";\n    // 其中使用新增接口，可以覆盖原有 Compile 系列接口的功能且具有拓展性\n    RunScriptWithOption(env, src, dataPtr, lengthPtr);\n\n    OH_JSVM_CloseEnvScope(env, envScope);\n    OH_JSVM_DestroyEnv(env);\n    OH_JSVM_CloseVMScope(vm, vmScope);\n    OH_JSVM_DestroyVM(vm);\n\n    bool result = true;\n    OH_LOG_INFO(LOG_APP, \"RunWithOption: success: %{public}d\", result);\n}\n\nvoid RunWithOrigin(uint8_t **dataPtr, size_t *lengthPtr) {\n    // 创建虚拟机实例\n    JSVM_VM vm;\n    JSVM_CreateVMOptions options;\n    memset(&options, 0, sizeof(options));\n    options.isForSnapshotting = true;\n    OH_JSVM_CreateVM(&options, &vm);\n    JSVM_VMScope vmScope;\n    OH_JSVM_OpenVMScope(vm, &vmScope);\n\n    // 从快照中创建env\n    JSVM_Env env;\n    // 将native函数注册成js可调用的方法，hello_cb中记录该native方法的指针和参数等信息\n    JSVM_PropertyDescriptor descriptors[] = {\n        { \"hello\", NULL, &hello_cb, NULL, NULL, NULL, JSVM_DEFAULT }\n    };\n    OH_JSVM_CreateEnv(vm, 1, descriptors, &env);\n    JSVM_EnvScope envScope;\n    OH_JSVM_OpenEnvScope(env, &envScope);\n    // 执行js脚本，因为快照记录的env中定义了hello()，所以无需重新定义。dataPtr中如果保存了编译后的js脚本，就能直接执行js脚本，避免从源码重复编译。\n    string src = \"concat(hello(), ', ', 'World', ' from RunWithOrigin!')\";\n    RunScript(env, src, true, dataPtr, lengthPtr);\n\n    OH_JSVM_CloseEnvScope(env, envScope);\n    OH_JSVM_DestroyEnv(env);\n    OH_JSVM_CloseVMScope(vm, vmScope);\n    OH_JSVM_DestroyVM(vm);\n\n    bool result = true;\n    OH_LOG_INFO(LOG_APP, \"RunWithOrigin: success: %{public}d\", result);\n}\n\nstatic JSVM_Value RunDemo(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n\n    char* str = \"WithOrigin\";\n    size_t len = strlen(str);\n    JSVM_Value result = nullptr;\n    OH_JSVM_CreateStringUtf8(env, str, len, &result);\n\n    uint8_t* data = nullptr;\n    size_t length = 0;\n    bool equal = false;\n    OH_JSVM_StrictEquals(env, args[0], result, &equal);\n    const auto run = equal ? RunWithOrigin : RunWithOption;\n    run(&data, &length);\n    delete[] data;\n\n    return nullptr;\n}\n\n// RunDemo注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = RunDemo},\n};\nstatic JSVM_CallbackStruct *method = param;\n// RunDemo方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"RunDemo\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(RunDemo(\"WithOrigin\"); RunDemo(\"WithOption\"))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RunWithOption: success: 1\nRunWithOrigin: success: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OH_JSVM_CreateCodeCache接口用法可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-about-code-cache",
        children: "使用code cache加速编译"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-jsvm-api-webassembly-接口编译-wasm-module",
      children: "使用 JSVM-API WebAssembly 接口编译 wasm module"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API WebAssembly 接口提供了 WebAssembly 字节码编译、WebAssembly 函数优化、WebAssembly cache 序列化和反序列化的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-use/use-jsvm-about-wasm",
        children: "使用 JSVM-API WebAssembly 接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_CompileWasmModule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将 wasm 字节码同步编译为 wasm module。如果提供了 cache 参数，先尝试将 cache 反序列为 wasm module，反序列化失败时再执行编译。如果没有 JIT 权限支持，则打印一行日志提示开发者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CompileWasmFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将 wasm module 中指定编号的函数编译为优化后的机器码，目前只使能了最高的优化等级，函数编号的合法性由接口调用者保证。如果没有 JIT 权限支持，则打印一行日志提示开发者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsWasmModuleObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断传入的值是否是一个 wasm module。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateWasmCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将 wasm module 中的机器码序列化为 wasm cache，如果 wasm module 不包含机器码，则会序列化失败。如果没有 JIT 权限支持，则打印一行日志提示开发者。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ReleaseCache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放由 JSVM 接口生成的 cache。传入的 cacheType 和 cacheData 必须匹配，否则会产生未定义行为。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-use/use-jsvm-about-wasm",
        children: "使用 JSVM-API WebAssembly 接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异常处理",
      children: "异常处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取、抛出、清理JS异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_Throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个JS值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ThrowTypeError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个JS TypeError"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ThrowRangeError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个JS RangeError"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断JS值是否为JS异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个JS异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateTypeError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个JS TypeError并返回"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateRangeError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个JS RangeError并返回"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ThrowError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个JS异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetAndClearLastException"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清理并返回最后一个JS异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsExceptionPending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前是否有异常"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetLastErrorInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最后一个异常的信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ThrowSyntaxError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个JS SyntaxError"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateSyntaxError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个JS SyntaxError并返回"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以TypeError为例。创建、判断，并抛出JS TypeError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value code = nullptr;\nJSVM_Value message = nullptr;\nOH_JSVM_CreateStringUtf8(env, \"500\", JSVM_AUTO_LENGTH, &code);\nOH_JSVM_CreateStringUtf8(env, \"type error 500\", JSVM_AUTO_LENGTH, &message);\nJSVM_Value error = nullptr;\nOH_JSVM_CreateTypeError(env, code, message, &error);\nbool isError = false;\nOH_JSVM_IsError(env, error, &isError);\nOH_JSVM_ThrowTypeError(env, nullptr, \"type error1\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用OH_JSVM_GetAndClearLastException后将异常信息以字符串形式打印"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (status != JSVM_OK) // 当执行失败出现异常时\n{\n    bool isPending = false;\n    if (JSVM_OK == OH_JSVM_IsExceptionPending((env), &isPending) && isPending)\n    {\n        JSVM_Value error;\n        if (JSVM_OK == OH_JSVM_GetAndClearLastException((env), &error))\n        {\n            // 获取异常堆栈\n            JSVM_Value stack;\n            OH_JSVM_GetNamedProperty((env), error, \"stack\", &stack);\n\n            JSVM_Value message;\n            OH_JSVM_GetNamedProperty((env), error, \"message\", &message);\n\n            char stackstr[256];\n            OH_JSVM_GetValueStringUtf8(env, stack, stackstr, 256, nullptr);\n            OH_LOG_INFO(LOG_APP, \"JSVM error stack: %{public}s\", stackstr);\n\n            char messagestr[256];\n            OH_JSVM_GetValueStringUtf8(env, message, messagestr, 256, nullptr);\n            OH_LOG_INFO(LOG_APP, \"JSVM error message: %{public}s\", messagestr);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象生命周期管理",
      children: "对象生命周期管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在调用JSVM-API接口时，底层VM堆中的对象可能会作为JSVM_Values返回句柄。这些句柄必须在Native方法销毁或主动释放掉前，使其关联的对象处于“活动”状态，防止被引擎回收掉。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当对象句柄被返回时，它们与一个“scope”相关联。默认作用域的生命周期与Native方法调用的生命周期相关联，这些句柄及关联的对象将在Native方法的生命周期内保持活动状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然而，在许多情况下，句柄必须保持有效的时间范围并不与Native方法的生命周期相同。下面将介绍可用于更改句柄的生命周期的JSVM-API方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "对象生命周期管理接口说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "打开一个新的scope，在关闭该scope之前创建的对象在scope范围内不会被GC回收"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CloseHandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭一个scope，在此scope范围内创建的对象在关闭scope后可以被GC回收"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_OpenEscapableHandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开一个新的scope逃逸handle scope，在关闭该scope之前创建的对象与父作用域有相同的生命周期"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CloseEscapableHandleScope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭一个scope，在此scope范围外创建的对象不受父作用域保护"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_EscapeHandle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将 JavaScript 对象的句柄提升到外部作用域，确保在外部作用域中可以持续地使用该对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateReference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以指定的引用计数为JavaScript对象创建一个新的引用，该引用将指向传入的对象，引用允许在不同的上下文中使用和共享对象，并且可以有效地监测对象的生命周期"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DeleteReference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放由 OH_JSVM_CreateReference 创建的引用，确保对象在不再被使用时能够被正确地释放和回收，避免内存泄漏"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ReferenceRef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加由OH_JSVM_CreateReference 创建的引用的引用计数，以确保对象在有引用时不会被提前释放"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ReferenceUnref"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少由OH_JSVM_CreateReference 创建的引用的引用计数，以确保没有任何引用指向该对象时能正确地释放和回收"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetReferenceValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回由 OH_JSVM_CreateReference 创建的引用的对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_RetainScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "持久化保存一个 JSVM_Script, 使其能够跨过当前 scope 使用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ReleaseScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放持久化保存过的 JSVM_Script，释放之后 JSVM_Script 不再可用，应当置为空"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过handle scope保护在scope范围内创建的对象在该范围内不被回收。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_HandleScope scope;\nOH_JSVM_OpenHandleScope(env, &scope);\nJSVM_Value obj = nullptr;\nOH_JSVM_CreateObject(env, &obj);\nOH_JSVM_CloseHandleScope(env, scope);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过escapable handle scope保护在scope范围内创建的对象在父作用域范围内不被回收"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_EscapableHandleScope scope;\nJSVM_CALL(OH_JSVM_OpenEscapableHandleScope(env, &scope));\nJSVM_Value output = NULL;\nJSVM_Value escapee = NULL;\nJSVM_CALL(OH_JSVM_CreateObject(env, &output));\nJSVM_CALL(OH_JSVM_EscapeHandle(env, scope, output, &escapee));\nJSVM_CALL(OH_JSVM_CloseEscapableHandleScope(env, scope));\nreturn escapee;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过CreateReference创建对象引用和释放"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value obj = nullptr;\nOH_JSVM_CreateObject(env, &obj);\n// 创建引用\nJSVM_Ref reference;\nOH_JSVM_CreateReference(env, obj, 1, &reference);\n\n// 使用引用\nJSVM_Value result;\nOH_JSVM_GetReferenceValue(env, reference, &result);\n\n// 释放引用\nOH_JSVM_DeleteReference(env, reference);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过 RetainScript 持久化保存 JSVM_Script 并使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_HandleScope scope;\nJSVM_CALL(OH_JSVM_OpenHandleScope(env, &scope));\nJSVM_Script script;\nJSVM_Value jsSrc;\nstd::string src(R\"JS(\nlet a = 37;\na = a * 9;\n)JS\");\nJSVM_CALL(OH_JSVM_CreateStringUtf8(env, src.c_str(), src.size(), &jsSrc));\nJSVM_CALL(OH_JSVM_CompileScriptWithOptions(env, jsSrc, 0, nullptr, &script));\nJSVM_CALL(OH_JSVM_RetainScript(env, script));\nJSVM_CALL(OH_JSVM_CloseHandleScope(env, scope));\n\n// 使用JSVM_Script\nJSVM_CALL(OH_JSVM_OpenHandleScope(env, &scope));\nJSVM_Value result;\nJSVM_CALL(OH_JSVM_RunScript(env, script, &result));\n\n// 释放JSVM_Script，并置空\nJSVM_CALL(OH_JSVM_ReleaseScript(env, script));\nscript = nullptr;\nJSVM_CALL(OH_JSVM_CloseHandleScope(env, scope));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建js对象类型和基本类型",
      children: "创建JS对象类型和基本类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建JS对象类型和基本类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_CreateArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的 JavaScript 数组对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateArrayWithLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指定长度的 JavaScript 数组对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateArraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指定大小的 ArrayBuffer 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateDate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建了一个表示给定毫秒数的 Date 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateExternal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个包装了外部指针的 JavaScript 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个默认的JavaScript Object对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateSymbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的描述符创建一个 Symbol 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SymbolFor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在全局注册表中搜索具有给定描述的现有Symbol，如果该Symbol已经存在，它将被返回，否则将在注册表中创建一个新Symbol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateTypedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在现有的 ArrayBuffer 上创建一个 JavaScript TypedArray 对象，TypedArray 对象在底层数据缓冲区上提供类似数组的视图，其中每个元素都具有相同的底层二进制标量数据类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateDataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在现有的 ArrayBuffer 上创建一个 JavaScript DataView 对象，DataView 对象在底层数据缓冲区上提供类似数组的视图"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateInt32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据 Int32_t 类型对象创建 JavaScript number 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateUint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据 Uint32_t 类型对象创建 JavaScript number 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateInt64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据 Int64_t 类型对象创建 JavaScript number 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateDouble"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据 Double 类型对象创建 JavaScript number 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateBigintInt64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据 Int64 类型对象创建 JavaScript Bigint 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateBigintUint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据 Uint64 类型对象创建 JavaScript Bigint 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateBigintWords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的 Uint64_t 数组创建一个 JavaScript BigInt 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateStringLatin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据 Latin-1 编码的字符串创建一个 JavaScript string 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateStringUtf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据 Utf16 编码的字符串创建一个 JavaScript string 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateStringUtf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据 Utf8 编码的字符串创建一个 JavaScript string 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的 JavaScript Map对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateRegExp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据输入的字符串创建一个JavaScript 正则对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的 JavaScript Set对象"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建指定长度的JavaScript数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t arrayLength = 2;\nJSVM_Value arr;\n\nOH_JSVM_CreateArrayWithLength(env, arrayLength, &arr);\nfor (uint32_t i = 0; i < arrayLength; i++)\n{\n    JSVM_Value element;\n    OH_JSVM_CreateUint32(env, i * 2, &element);\n    OH_JSVM_SetElement(env, arr, i, element);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建TypedArray，以Int32Array为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value arrayBuffer = nullptr;\nvoid *arrayBufferPtr = nullptr;\nsize_t arrayBufferSize = 16;\nsize_t typedArrayLength = 4;\nOH_JSVM_CreateArraybuffer(env, arrayBufferSize, &arrayBufferPtr, &arrayBuffer);\n\nvoid *tmpArrayBufferPtr = nullptr;\nsize_t arrayBufferLength = 0;\nOH_JSVM_GetArraybufferInfo(env, arrayBuffer, &tmpArrayBufferPtr, &arrayBufferLength);\n\nJSVM_Value result;\nOH_JSVM_CreateTypedarray(env, JSVM_TypedarrayType::JSVM_INT32_ARRAY, typedArrayLength, arrayBuffer, 0, &result);\nreturn result;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建number和string："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *testStringStr = \"test\";\nJSVM_Value testString = nullptr;\nOH_JSVM_CreateStringUtf8(env, testStringStr, strlen(testStringStr), &testString);\n\nJSVM_Value testNumber1 = nullptr;\nJSVM_Value testNumber2 = nullptr;\nOH_JSVM_CreateDouble(env, 10.1, &testNumber1);\nOH_JSVM_CreateInt32(env, 10, &testNumber2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Map："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value value = nullptr;\nOH_JSVM_CreateMap(env, &value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建RegExp："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value value = nullptr;\nconst char testStr[] = \"ab+c\";\nOH_JSVM_CreateStringUtf8(env, testStr, strlen(testStr), &value);\nJSVM_Value result = nullptr;\nOH_JSVM_CreateRegExp(env, value, JSVM_RegExpFlags::JSVM_REGEXP_GLOBAL, &result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建Set："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value value = nullptr;\nOH_JSVM_CreateSet(env, &value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从js类型获取c类型js类型信息",
      children: "从JS类型获取C类型&JS类型信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从JS类型获取C类型&JS类型信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_GetArrayLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回 Array 对象的长度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetArraybufferInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索 ArrayBuffer 的底层数据缓冲区及其长度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetPrototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript 对象的原型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetTypedarrayInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取 TypedArray（类型化数组）对象的信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetDataviewInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取 Dataview 对象的信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetDateValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript Date 的时间值的 Double 基础类型值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueBool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript Boolean 的 C 布尔基础类型值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueDouble"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript number 的 Double 基础类型值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueBigintInt64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript BigInt 的 Int64_t 基础类型值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueBigintUint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript BigInt 的 Uint64_t 基础类型值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueBigintWords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript BigInt 对象的底层数据，即 BigInt 数据的字词表示"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueExternal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取先前传递给 OH_JSVM_CreateExternal 的外部数据指针"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueInt32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript number 的 Int32 基础类型值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueInt64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript number 的 Int64 基础类型值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueStringLatin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript string 对象的 Latin1 编码字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueStringUtf8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript string 对象的 Utf8 编码字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueStringUtf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript string 对象的 Utf16 编码字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueUint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 JavaScript number 的 Uint32 基础类型值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetBoolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回用于表示给定布尔值的 JavaScript 单例对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetGlobal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前环境中的全局 global 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetNull"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回 JavaScript null 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetUndefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回 JavaScript Undefined 对象"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建64位的 BigInt，并获取64位 Int 值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t testValue = INT64_MAX;\nJSVM_Value result = nullptr;\nOH_JSVM_CreateBigintInt64(env, testValue, &result);\nint64_t resultValue = 0;\nbool flag = false;\nOH_JSVM_GetValueBigintInt64(env, result, &resultValue, &flag);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个 Int32Array，并获取其长度、byteOffset 等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value arrayBuffer = nullptr;\nvoid *arrayBufferPtr = nullptr;\nsize_t arrayBufferSize = 16;\nsize_t typedArrayLength = 4;\nOH_JSVM_CreateArraybuffer(env, arrayBufferSize, &arrayBufferPtr, &arrayBuffer);\n\nbool isArrayBuffer = false;\nOH_JSVM_IsArraybuffer(env, arrayBuffer, &isArrayBuffer);\n\nJSVM_Value result;\nOH_JSVM_CreateTypedarray(env, JSVM_TypedarrayType::JSVM_INT32_ARRAY, typedArrayLength, arrayBuffer, 0, &result);\n\nbool isTypedArray = false;\nOH_JSVM_IsTypedarray(env, result, &isTypedArray);\n\n\nJSVM_TypedarrayType type;\nsize_t length = 0;\nvoid *data = nullptr;\nJSVM_Value retArrayBuffer;\nsize_t byteOffset = -1;\nOH_JSVM_GetTypedarrayInfo(env, result, &type, &length, &data, &retArrayBuffer, &byteOffset);\n\n\nbool retIsArrayBuffer = false;\nOH_JSVM_IsArraybuffer(env, retArrayBuffer, &retIsArrayBuffer);\nvoid *tmpArrayBufferPtr = nullptr;\nsize_t arrayBufferLength = 0;\nOH_JSVM_GetArraybufferInfo(env, retArrayBuffer, &tmpArrayBufferPtr, &arrayBufferLength);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据 UTF-8 编码的 C 字符串创建一个 JavaScript 字符串，以及获取给定 JavaScript 字符串的 UTF-8 编码 C 字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *testStringStr = \"testString\";\nJSVM_Value testString = nullptr;\nJSVM_CALL(OH_JSVM_CreateStringUtf8(env, testStringStr, strlen(testStringStr), &testString));\n\nchar buffer[128];\nsize_t bufferSize = 128;\nsize_t copied = 0;\n\nJSVM_CALL(OH_JSVM_GetValueStringUtf8(env, testString, buffer, bufferSize, &copied));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "js值操作和抽象操作",
      children: "JS值操作和抽象操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS值操作和抽象操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_CoerceToBool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将目标值转换为 Boolean 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CoerceToNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将目标值转换为 Number 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CoerceToObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将目标值转换为 Object 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CoerceToString"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将目标值转换为 String 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CoerceToBigInt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将目标值转换为 BigInt 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_Typeof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回 JavaScript 对象的类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_Instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个对象是否是某个构造函数的实例"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个 JavaScript 对象是否为 Array 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsArraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个 JavaScript 对象是否为 ArrayBuffer 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsDate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个 JavaScript 对象是否为 Date 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsTypedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个 JavaScript 对象是否为 TypedArray 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsDataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个 JavaScript 对象是否为 DataView 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsUndefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为Undefined。这相当于JS中的value === undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsNull"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为Null对象。这相当于JS中的value === null。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsNullOrUndefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为Null或Undefined。这相当于JS中的value == null。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsBoolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为Boolean。这相当于JS中的typeof value === 'boolean'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为Number。这相当于JS中的typeof value === 'number'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsString"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为String。这相当于JS中的typeof value === 'string'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsSymbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为Symbol。这相当于JS中的typeof value === 'symbol'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为Function。这相当于JS中的typeof value === 'function'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为Object。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsBigInt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为BigInt。这相当于JS中的typeof value === 'bigint'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsConstructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为构造函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为Map。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsSet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为Set。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsRegExp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此API检查传入的值是否为RegExp。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_StrictEquals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断两个 JSVM_Value 对象是否严格相等"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_Equals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断两个 JSVM_Value 对象是否宽松相等"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DetachArraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用 ArrayBuffer 对象的Detach操作"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsDetachedArraybuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查给定的 ArrayBuffer 是否已被分离(detached)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断JS值是否为Array类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value array = nullptr;\nOH_JSVM_CreateArray(env, &array);\nbool isArray = false;\nOH_JSVM_IsArray(env, array, &isArray);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将int32类型的目标值转换为string类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t num = 123;\nJSVM_Value intValue;\nOH_JSVM_CreateInt32(env, num, &intValue);\nJSVM_Value stringValue;\nOH_JSVM_CoerceToString(env, intValue, &stringValue);\n\nchar buffer[128];\nsize_t bufferSize = 128;\nsize_t copied = 0;\n\nOH_JSVM_GetValueStringUtf8(env, stringValue, buffer, bufferSize, &copied);\n// buffer:\"123\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将boolean类型的目标值转换为bigint类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value boolValue;\nOH_JSVM_GetBoolean(env, false, &boolValue);\nJSVM_Value bigIntValue;\nOH_JSVM_CoerceToBigInt(env, boolValue, &bigIntValue);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断两个JSVM_Value对象类型是否严格相同：先比较操作数类型，操作数类型不同就是不相等，操作数类型相同时，比较值是否相等，相等才返回true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value value = nullptr;\nJSVM_Value value1 = nullptr;\nOH_JSVM_CreateArray(env, &value);\n\nOH_JSVM_CreateInt32(env, 10, &value1);\nbool isArray = true;\nOH_JSVM_StrictEquals(env, value, value, &isArray);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断两个JSVM_Value对象类型是否宽松相同：判断两个操作数的类型是否相同，若不相同，且可以转换为相同的数据类型，转换为相同的数据类型后，值做严格相等比较，其他的都返回false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_HandleScope handleScope;\nOH_JSVM_OpenHandleScope(env, &handleScope);\nconst char testStr[] = \"1\";\nJSVM_Value lhs = nullptr;\nOH_JSVM_CreateStringUtf8(env, testStr, strlen(testStr), &lhs);\nJSVM_Value rhs;\nOH_JSVM_CreateInt32(env, 1, &rhs);\nbool isEquals = false;\nOH_JSVM_Equals(env, lhs, rhs, &isEquals); // 这里isEquals的值是true\nOH_JSVM_CloseHandleScope(env, handleScope);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断传入的JS值是否为构造函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value SayHello(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    return nullptr;\n}\nJSVM_Value value = nullptr;\nJSVM_CallbackStruct param;\nparam.data = nullptr;\nparam.callback = SayHello;\nOH_JSVM_CreateFunction(env, \"func\", JSVM_AUTO_LENGTH, &param, &value);\nbool isConstructor = false;\nOH_JSVM_IsConstructor(env, value, &isConstructor); // 这里isConstructor的值是true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断传入的JS值是否为Map类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value value = nullptr;\nOH_JSVM_CreateMap(env, &value);\nbool isMap = false;\nOH_JSVM_IsMap(env, value, &isMap); // 这里isMap的值是true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断传入的JS值是否为Set类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value value;\nOH_JSVM_CreateSet(env, &value);\nbool isSet = false;\nOH_JSVM_IsSet(env, value, &isSet); // 这里isSet的值是true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断JS值是否为RegExp类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value value = nullptr;\nconst char testStr[] = \"ab+c\";\nOH_JSVM_CreateStringUtf8(env, testStr, strlen(testStr), &value);\nJSVM_Value result = nullptr;\nOH_JSVM_CreateRegExp(env, value, JSVM_RegExpFlags::JSVM_REGEXP_GLOBAL, &result);\nbool isRegExp = false;\nOH_JSVM_IsRegExp(env, result, &isRegExp);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "js属性操作",
      children: "JS属性操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS对象属性的增加、删除、获取和判断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_GetPropertyNames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定对象的所有可枚举属性名称, 结果变量将存储一个包含所有可枚举属性名称的JavaScript数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetAllPropertyNames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定对象的所有可用属性名称, 结果变量将存储一个包含所有可枚举属性名称的JavaScript数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SetProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为给定对象设置一个属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称，检索目标对象的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_HasProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称，查询目标对象是否有此属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DeleteProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称，删除目标对象属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_HasOwnProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查目标对象是否具有指定的自有属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SetNamedProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称为目标对象设置属性，此方法等效于使用从作为 utf8Name 传入的字符串创建的 JSVM_Value 调用 OH_JSVM_SetProperty。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetNamedProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称，检索目标对象的属性，此方法等效于使用从作为 utf8Name 传入的字符串创建的 JSVM_Value 调用 OH_JSVM_GetProperty。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_HasNamedProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称，查询目标对象是否有此属性，此方法等效于使用从作为 utf8Name 传入的字符串创建的 JSVM_Value 调用 OH_JSVM_HasProperty。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SetElement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在给定对象的指定索引处设置元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetElement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定对象指定索引处的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_HasElement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若给定对象的指定索引处拥有属性，获取该元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DeleteElement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试删除给定对象的指定索引处的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DefineProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量的向给定对象中定义属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ObjectFreeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结给定的对象,防止向其添加新属性，删除现有属性，防止更改现有属性的可枚举性、可配置性或可写性，并防止更改现有属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ObjectSeal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密封给定的对象。这可以防止向其添加新属性，以及将所有现有属性标记为不可配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ObjectSetPrototypeOf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为给定对象设置一个原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ObjectGetPrototypeOf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript对象的原型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS对象属性的增加、删除、获取和判断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建一个空对象\nJSVM_Value myObject = nullptr;\nOH_JSVM_CreateObject(env, &myObject);\n\n// 设置属性\nconst char *testNameStr = \"John Doe\";\nJSVM_Value propValue = nullptr;\nJSVM_Value key = nullptr;\nOH_JSVM_CreateStringUtf8(env, \"name\", JSVM_AUTO_LENGTH, &key);\nOH_JSVM_CreateStringUtf8(env, testNameStr, strlen(testNameStr), &propValue);\nOH_JSVM_SetProperty(env, myObject, key, propValue);\n\n// 获取属性\nJSVM_Value propResult = nullptr;\nOH_JSVM_GetProperty(env, myObject, key, &propResult);\n\n// 检查属性是否存在\nbool hasProperty = false;\nOH_JSVM_HasNamedProperty(env, myObject, \"name\", &hasProperty);\n    // 属性存在，做相应处理...\n    if (hasProperty)\n    {\n        // 获取对象的所有属性名\n        JSVM_Value propNames = nullptr;\n        OH_JSVM_GetPropertyNames(env, myObject, &propNames);\n\n        bool isArray = false;\n        OH_JSVM_IsArray(env, propNames, &isArray);\n\n        uint32_t arrayLength = 0;\n        OH_JSVM_GetArrayLength(env, propNames, &arrayLength);\n        // 遍历属性元素\n        for (uint32_t i = 0; i < arrayLength; i++)\n        {\n            bool hasElement = false;\n            OH_JSVM_HasElement(env, propNames, i, &hasElement);\n\n            JSVM_Value propName = nullptr;\n            OH_JSVM_GetElement(env, propNames, i, &propName);\n\n            bool hasProp = false;\n            OH_JSVM_HasProperty(env, myObject, propName, &hasProp);\n\n            JSVM_Value propValue = nullptr;\n            OH_JSVM_GetProperty(env, myObject, propName, &propValue);\n        }\n    }\n\n// 删除属性\nOH_JSVM_DeleteProperty(env, myObject, key, &hasProperty);\n\n// 设置对象原型\nJSVM_Value value;\nOH_JSVM_CreateSet(env, &value);\nOH_JSVM_ObjectSetPrototypeOf(env, myObject, value);\n\n// 获取对象原型\nJSVM_Value proto;\nOH_JSVM_ObjectGetPrototypeOf(env, myObject, &proto);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "js函数操作",
      children: "JS函数操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS函数操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_CallFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在C/C++侧调用JS方法"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建JavaScript函数,用于从JavaScript环境中调用C/C++代码中的函数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetCbInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从给定的callback info中获取有关调用的详细信息，如参数和this指针"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetNewTarget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取构造函数调用的new.target"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_NewInstance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的构造函数，构建一个实例"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateFunctionWithScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据传入的函数体和函数参数列表，创建一个新的 JavaScript Function对象"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建JavaScript函数操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value SayHello(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    printf(\"Hello\\n\");\n    JSVM_Value ret;\n    OH_JSVM_CreateInt32(env, 2, &ret);\n    return ret;\n}\n\nstatic JSVM_Value JsvmCreateFunction(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    JSVM_CallbackStruct param;\n    param.data = nullptr;\n    param.callback = SayHello;\n\n    JSVM_Value funcValue = nullptr;\n    JSVM_Status status = OH_JSVM_CreateFunction(env, \"func\", JSVM_AUTO_LENGTH, &param, &funcValue);\n    return funcValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在C/C++侧调用JS方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static JSVM_Value CallFunction(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1];\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL));\n    if (argc < 1) {\n        OH_LOG_ERROR(LOG_APP, \"Wrong number of arguments\");\n        return nullptr;\n    }\n\n    JSVM_ValueType valuetype;\n    JSVM_CALL(OH_JSVM_Typeof(env, args[0], &valuetype));\n    if (valuetype != JSVM_ValueType::JSVM_FUNCTION) {\n        OH_LOG_ERROR(LOG_APP, \"Wrong type of argument. Expects a function.\");\n        return nullptr;\n    }\n\n    JSVM_Value global;\n    JSVM_CALL(OH_JSVM_GetGlobal(env, &global));\n\n    JSVM_Value ret;\n    JSVM_CALL(OH_JSVM_CallFunction(env, global, args[0], 0, nullptr, &ret));\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建JavaScript函数:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Value script;\nOH_JSVM_CreateStringUtf8(env, \"return a + b;\", JSVM_AUTO_LENGTH, &script);\nJSVM_Value param1;\nJSVM_Value param2;\nOH_JSVM_CreateStringUtf8(env, \"a\", JSVM_AUTO_LENGTH, &param1);\nOH_JSVM_CreateStringUtf8(env, \"b\", JSVM_AUTO_LENGTH, &param2);\nJSVM_Value argus[] = {param1, param2};\nJSVM_Value func;\nOH_JSVM_CreateFunctionWithScript(env, \"add\", JSVM_AUTO_LENGTH, 2, argus, script, &func);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "对象绑定操作",
      children: "对象绑定操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象绑定操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_DefineClass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在JavaScript中定义一个类，并与对应的C类进行封装和交互。它提供了创建类的构造函数、定义属性和方法的能力，以及在C和JavaScript之间进行数据交互的支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_Wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在 JavaScript 对象中封装原生实例。稍后可以使用 OH_JSVM_Unwrap() 检索原生实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_Unwrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用 OH_JSVM_Wrap() 检索先前封装在 JavaScript 对象中的原生实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_RemoveWrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检索先前封装在 JavaScript 对象中的原生实例并移除封装。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_TypeTagObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将 type_tag 指针的值与 JavaScript 对象或外部对象相关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CheckObjectTypeTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查给定的类型标签是否与对象上的类型标签匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_AddFinalizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为对象添加 JSVM_Finalize 回调，以便在 JavaScript 对象被垃圾回收时调用来释放原生对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DefineClassWithPropertyHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个具有给定类名、构造函数、属性和回调处理程序的JavaScript类，并作为函数回调进行调用。属性操作包括getter、setter、deleter、enumerator等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DefineClassWithOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个具有给定类名、构造函数、属性和回调处理程序、父类的JavaScript类，并根据传入了DefineClassOptions来决定是否需要为所定义的Class设置属性代理、预留internal-field槽位、为class作为函数进行调用时设置函数回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象绑定操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static int aa = 0;\n\nstatic JSVM_Value AssertEqual(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 2;\n    JSVM_Value args[2];\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL));\n\n    bool isStrictEquals = false;\n    OH_JSVM_StrictEquals(env, args[0], args[1], &isStrictEquals);\n    return nullptr;\n}\n\nstatic napi_value TestWrap(napi_env env1, napi_callback_info info)\n{\n    OH_LOG_ERROR(LOG_APP, \"testWrap start\");\n    JSVM_InitOptions init_options;\n    memset(&init_options, 0, sizeof(init_options));\n    if (aa == 0) {\n        OH_JSVM_Init(&init_options);\n        aa++;\n    }\n    JSVM_VM vm;\n    JSVM_CreateVMOptions options;\n    memset(&options, 0, sizeof(options));\n    OH_JSVM_CreateVM(&options, &vm);\n    JSVM_VMScope vm_scope;\n    OH_JSVM_OpenVMScope(vm, &vm_scope);\n    JSVM_Env env;\n    JSVM_CallbackStruct param[1];\n    param[0].data = nullptr;\n    param[0].callback = AssertEqual;\n    JSVM_PropertyDescriptor descriptor[] = {\n        {\"assertEqual\", NULL, &param[0], NULL, NULL, NULL, JSVM_DEFAULT},\n    };\n    OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env);\n    JSVM_EnvScope envScope;\n    OH_JSVM_OpenEnvScope(env, &envScope);\n    JSVM_HandleScope handlescope;\n    OH_JSVM_OpenHandleScope(env, &handlescope);\n    JSVM_Value testClass = nullptr;\n    JSVM_CallbackStruct param1;\n    param1.data = nullptr;\n    param1.callback = [](JSVM_Env env, JSVM_CallbackInfo info) -> JSVM_Value {\n        JSVM_Value thisVar = nullptr;\n        OH_JSVM_GetCbInfo(env, info, nullptr, nullptr, &thisVar, nullptr);\n\n        return thisVar;\n    };\n    OH_JSVM_DefineClass(env, \"TestClass\", JSVM_AUTO_LENGTH, &param1, 0, nullptr, &testClass);\n\n    JSVM_Value instanceValue = nullptr;\n    OH_JSVM_NewInstance(env, testClass, 0, nullptr, &instanceValue);\n\n    const char *testStr = \"test\";\n    OH_JSVM_Wrap(\n        env, instanceValue, (void *)testStr, [](JSVM_Env env, void *data, void *hint) {}, nullptr, nullptr);\n    const char *tmpTestStr = nullptr;\n    OH_JSVM_Unwrap(env, instanceValue, (void **)&tmpTestStr);\n    const char *tmpTestStr1 = nullptr;\n    OH_JSVM_RemoveWrap(env, instanceValue, (void **)&tmpTestStr1);\n    OH_JSVM_Unwrap(env, instanceValue, (void **)&tmpTestStr1);\n    OH_JSVM_CloseHandleScope(env, handlescope);\n    OH_JSVM_CloseEnvScope(env, envScope);\n    OH_JSVM_DestroyEnv(env);\n    OH_JSVM_CloseVMScope(vm, vm_scope);\n    OH_JSVM_DestroyVM(vm);\n    OH_LOG_ERROR(LOG_APP, \"testWrap pass\");\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对象绑定及监听拦截属性操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static int aa = 0;\nstatic JSVM_Value hello(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_Value output;\n    void *data = nullptr;\n    OH_JSVM_GetCbInfo(env, info, nullptr, nullptr, nullptr, &data);\n    OH_JSVM_CreateStringUtf8(env, (char *)data, strlen((char *)data), &output);\n    return output;\n}\n\nstatic JSVM_CallbackStruct hello_cb = {hello, (void *)\"Hello\"};\nstatic intptr_t externals[] = {\n    (intptr_t)&hello_cb,\n    0,\n};\n\nstatic void test1() { OH_LOG_INFO(LOG_APP, \"test1 called\"); }\n\nstruct Test {\n    void *ptr1;\n    void *ptr2;\n};\n\nstatic JSVM_Value assertEqual(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 2;\n    JSVM_Value args[2];\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, NULL, NULL));\n\n    bool isStrictEquals = false;\n    OH_JSVM_StrictEquals(env, args[0], args[1], &isStrictEquals);\n    return nullptr;\n}\n\nstatic JSVM_Value GetPropertyCbInfo(JSVM_Env env, JSVM_Value name, JSVM_Value thisArg, JSVM_Value data) {\n    // 该回调是由对象上的获取请求触发的\n    char strValue[100];\n    size_t size = 0;\n    OH_JSVM_GetValueStringUtf8(env, name, strValue, 300, &size);\n    JSVM_Value newResult = nullptr;\n    char newStr[] = \"new return value hahaha from name listening\";\n    OH_JSVM_CreateStringUtf8(env, newStr, strlen(newStr), &newResult);\n    int signBit = 0;\n    size_t wordCount = 2;\n    uint64_t wordsOut[2] = {0ULL, 0ULL};\n    JSVM_Status status = OH_JSVM_GetValueBigintWords(env, data, &signBit, &wordCount, wordsOut);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"GetPropertyCbInfo wordCount is %{public}zu\", wordCount);\n        auto test = reinterpret_cast<Test *>(wordsOut);\n        typedef void (*callTest1)();\n        callTest1 callTe = reinterpret_cast<callTest1>(test->ptr1);\n        callTe();\n    }\n    return nullptr;\n}\n\nstatic JSVM_Value SetPropertyCbInfo(JSVM_Env env, JSVM_Value name, JSVM_Value property, JSVM_Value thisArg, JSVM_Value data) {\n    // 该回调是由对象上的设置请求触发的\n    char strValue[100];\n    size_t size = 0;\n    OH_JSVM_GetValueStringUtf8(env, name, strValue, 300, &size);\n    JSVM_Value newResult = nullptr;\n    char newStr[] = \"new return value hahaha from name listening\";\n    OH_JSVM_CreateStringUtf8(env, newStr, strlen(newStr), &newResult);\n    int signBit = 0;\n    size_t wordCount = 2;\n    uint64_t wordsOut[2] = {0ULL, 0ULL};\n    JSVM_Status status = OH_JSVM_GetValueBigintWords(env, data, &signBit, &wordCount, wordsOut);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"SetPropertyCbInfo wordCount is %{public}zu\", wordCount);\n        auto test = reinterpret_cast<Test *>(wordsOut);\n        typedef void (*callTest1)();\n        callTest1 callTe = reinterpret_cast<callTest1>(test->ptr1);\n        callTe();\n    }\n    return nullptr;\n}\n\nstatic JSVM_Value DeleterPropertyCbInfo(JSVM_Env env, JSVM_Value name, JSVM_Value thisArg, JSVM_Value data) {\n    // 该回调是由对象上的删除请求触发的\n    char strValue[100];\n    size_t size = 0;\n    OH_JSVM_GetValueStringUtf8(env, name, strValue, 300, &size);\n    JSVM_Value newResult = nullptr;\n    bool returnValue = false;\n    OH_JSVM_GetBoolean(env, returnValue, &newResult);\n    int signBit = 0;\n    size_t wordCount = 2;\n    uint64_t wordsOut[2] = {0ULL, 0ULL};\n    JSVM_Status status = OH_JSVM_GetValueBigintWords(env, data, &signBit, &wordCount, wordsOut);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"DeleterPropertyCbInfo wordCount is %{public}zu\", wordCount);\n        auto test = reinterpret_cast<Test *>(wordsOut);\n        typedef void (*callTest1)();\n        callTest1 callTe = reinterpret_cast<callTest1>(test->ptr1);\n        callTe();\n    }\n    return nullptr;\n}\n\nstatic JSVM_Value EnumeratorPropertyCbInfo(JSVM_Env env, JSVM_Value thisArg, JSVM_Value data) {\n    // 该回调是由获取对象上的所有属性请求触发的\n    JSVM_Value testArray = nullptr;\n    OH_JSVM_CreateArrayWithLength(env, 2, &testArray);\n    JSVM_Value name1 = nullptr;\n    char newStr1[] = \"hahaha\";\n    OH_JSVM_CreateStringUtf8(env, newStr1, strlen(newStr1), &name1);\n    JSVM_Value name2 = nullptr;\n    char newStr2[] = \"heheheh\";\n    OH_JSVM_CreateStringUtf8(env, newStr2, strlen(newStr2), &name2);\n\n    OH_JSVM_SetElement(env, testArray, 0, name1);\n    OH_JSVM_SetElement(env, testArray, 1, name2);\n    int signBit = 0;\n    size_t wordCount = 2;\n    uint64_t wordsOut[2] = {0ULL, 0ULL};\n    JSVM_Status status = OH_JSVM_GetValueBigintWords(env, data, &signBit, &wordCount, wordsOut);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"EnumeratorPropertyCbInfo wordCount is %{public}zu\", wordCount);\n        auto test = reinterpret_cast<Test *>(wordsOut);\n        typedef void (*callTest1)();\n        callTest1 callTe = reinterpret_cast<callTest1>(test->ptr1);\n        callTe();\n    }\n    return nullptr;\n}\n\nstatic JSVM_Value IndexedPropertyGet(JSVM_Env env, JSVM_Value index, JSVM_Value thisArg, JSVM_Value data) {\n    // 该回调是由获取实例对象的索引属性触发的\n    uint32_t value = 0;\n    OH_JSVM_GetValueUint32(env, index, &value);\n\n    JSVM_Value newResult = nullptr;\n    char newStr[] = \"new return value hahaha from index listening\";\n    OH_JSVM_CreateStringUtf8(env, newStr, strlen(newStr), &newResult);\n    int signBit = 0;\n    size_t wordCount = 2;\n    uint64_t wordsOut[2] = {0ULL, 0ULL};\n    JSVM_Status status = OH_JSVM_GetValueBigintWords(env, data, &signBit, &wordCount, wordsOut);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"IndexedPropertyGet wordCount is %{public}zu\", wordCount);\n        auto test = reinterpret_cast<Test *>(wordsOut);\n        typedef void (*callTest1)();\n        callTest1 callTe = reinterpret_cast<callTest1>(test->ptr1);\n        callTe();\n    }\n    return nullptr;\n}\n\nstatic JSVM_Value IndexedPropertySet(JSVM_Env env, JSVM_Value index, JSVM_Value property, JSVM_Value thisArg, JSVM_Value data) {\n    // 该回调是由设置实例对象的索引属性触发的\n    uint32_t value = 0;\n    OH_JSVM_GetValueUint32(env, index, &value);\n    char str[100];\n    size_t size = 0;\n    OH_JSVM_GetValueStringUtf8(env, property, str, 100, &size);\n    JSVM_Value newResult = nullptr;\n    char newStr[] = \"new return value hahaha from name listening\";\n    OH_JSVM_CreateStringUtf8(env, newStr, strlen(newStr), &newResult);\n    int signBit = 0;\n    size_t wordCount = 2;\n    uint64_t wordsOut[2] = {0ULL, 0ULL};\n    JSVM_Status status = OH_JSVM_GetValueBigintWords(env, data, &signBit, &wordCount, wordsOut);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"IndexedPropertySet wordCount is %{public}zu\", wordCount);\n        auto test = reinterpret_cast<Test *>(wordsOut);\n        typedef void (*callTest1)();\n        callTest1 callTe = reinterpret_cast<callTest1>(test->ptr1);\n        callTe();\n    }\n    return nullptr;\n}\n\nstatic JSVM_Value IndexedPropertyDeleter(JSVM_Env env, JSVM_Value index, JSVM_Value thisArg, JSVM_Value data) {\n    // 该回调是由删除实例对象的索引属性触发的\n    uint32_t value = 0;\n    OH_JSVM_GetValueUint32(env, index, &value);\n    JSVM_Value newResult = nullptr;\n    bool returnValue = false;\n    OH_JSVM_GetBoolean(env, returnValue, &newResult);\n    int signBit = 0;\n    size_t wordCount = 2;\n    uint64_t wordsOut[2] = {0ULL, 0ULL};\n    JSVM_Status status = OH_JSVM_GetValueBigintWords(env, data, &signBit, &wordCount, wordsOut);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"IndexedPropertyDeleter wordCount is %{public}zu\", wordCount);\n        auto test = reinterpret_cast<Test *>(wordsOut);\n        typedef void (*callTest1)();\n        callTest1 callTe = reinterpret_cast<callTest1>(test->ptr1);\n        callTe();\n    }\n    return nullptr;\n}\n\nstatic JSVM_Value IndexedPropertyEnumerator(JSVM_Env env, JSVM_Value thisArg, JSVM_Value data) {\n    // 该回调是由获取对象上的所有索引属性请求触发的\n    JSVM_Value testArray = nullptr;\n    OH_JSVM_CreateArrayWithLength(env, 2, &testArray);\n    JSVM_Value index1 = nullptr;\n    OH_JSVM_CreateUint32(env, 1, &index1);\n    JSVM_Value index2 = nullptr;\n    OH_JSVM_CreateUint32(env, 2, &index2);\n    OH_JSVM_SetElement(env, testArray, 0, index1);\n    OH_JSVM_SetElement(env, testArray, 1, index2);\n    int signBit = 0;\n    size_t wordCount = 2;\n    uint64_t wordsOut[2] = {0ULL, 0ULL};\n    JSVM_Status status = OH_JSVM_GetValueBigintWords(env, data, &signBit, &wordCount, wordsOut);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"IndexedPropertyDeleter wordCount is %{public}zu\", wordCount);\n        auto test = reinterpret_cast<Test *>(wordsOut);\n        typedef void (*callTest1)();\n        callTest1 callTe = reinterpret_cast<callTest1>(test->ptr1);\n        callTe();\n    }\n    return nullptr;\n}\n\nstatic napi_value TestDefineClassWithProperty(napi_env env1, napi_callback_info info) {\n    OH_LOG_ERROR(LOG_APP, \"TestDefineClassWithProperty start\");\n    JSVM_InitOptions init_options;\n    memset(&init_options, 0, sizeof(init_options));\n    init_options.externalReferences = externals;\n    if (aa == 0) {\n        OH_JSVM_Init(&init_options);\n        aa++;\n    }\n    JSVM_VM vm;\n    JSVM_CreateVMOptions options;\n    memset(&options, 0, sizeof(options));\n    OH_JSVM_CreateVM(&options, &vm);\n    JSVM_VMScope vm_scope;\n    OH_JSVM_OpenVMScope(vm, &vm_scope);\n    JSVM_Env env;\n    JSVM_CallbackStruct param[1];\n    param[0].data = nullptr;\n    param[0].callback = assertEqual;\n    JSVM_PropertyDescriptor descriptor[] = {\n        {\"assertEqual\", NULL, &param[0], NULL, NULL, NULL, JSVM_DEFAULT},\n    };\n    OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env);\n    JSVM_EnvScope envScope;\n    OH_JSVM_OpenEnvScope(env, &envScope);\n    JSVM_HandleScope handlescope;\n    OH_JSVM_OpenHandleScope(env, &handlescope);\n\n\n    JSVM_CallbackStruct param1;\n    param1.callback = [](JSVM_Env env, JSVM_CallbackInfo info) -> JSVM_Value {\n        JSVM_Value thisVar = nullptr;\n        OH_JSVM_GetCbInfo(env, info, nullptr, nullptr, &thisVar, nullptr);\n        return thisVar;\n    };\n    param1.data = nullptr;\n\n    JSVM_Value res = nullptr;\n    Test *test = new Test();\n    test->ptr1 = (void *)test1;\n    test->ptr2 = (void *)test1;\n    OH_LOG_INFO(LOG_APP, \"OH_JSVM_CreateBigintWords 111 word count %{public}d\",\n                sizeof(*test) / sizeof(uint64_t));\n    JSVM_Status status = OH_JSVM_CreateBigintWords(env, 1, 2, reinterpret_cast<const uint64_t *>(test), &res);\n\n    // 初始化propertyCfg\n    JSVM_PropertyHandlerConfigurationStruct propertyCfg;\n    propertyCfg.genericNamedPropertyGetterCallback = GetPropertyCbInfo;\n    propertyCfg.genericNamedPropertySetterCallback = SetPropertyCbInfo;\n    propertyCfg.genericNamedPropertyDeleterCallback = DeleterPropertyCbInfo;\n    propertyCfg.genericNamedPropertyEnumeratorCallback = EnumeratorPropertyCbInfo;\n    propertyCfg.genericIndexedPropertyGetterCallback = IndexedPropertyGet;\n    propertyCfg.genericIndexedPropertySetterCallback = IndexedPropertySet;\n    propertyCfg.genericIndexedPropertyDeleterCallback = IndexedPropertyDeleter;\n    propertyCfg.genericIndexedPropertyEnumeratorCallback = IndexedPropertyEnumerator;\n    propertyCfg.namedPropertyData = res;\n    propertyCfg.indexedPropertyData = res;\n\n    JSVM_CallbackStruct callbackStruct;\n    callbackStruct.callback = [](JSVM_Env env, JSVM_CallbackInfo info) -> JSVM_Value {\n        OH_LOG_INFO(LOG_APP, \"call as a function called\");\n        JSVM_Value thisVar = nullptr;\n        void *innerData;\n        size_t argc = 1;\n        JSVM_Value args[1];\n        OH_JSVM_GetCbInfo(env, info, &argc, args, &thisVar, &innerData);\n        OH_LOG_INFO(LOG_APP, \"function call as function result is %{public}s\", reinterpret_cast<char *>(innerData));\n        uint32_t ret = 0;\n        OH_JSVM_GetValueUint32(env, args[0], &ret);\n        const char testStr[] = \"hello world 111111\";\n        JSVM_Value setvalueName = nullptr;\n        JSVM_CALL(OH_JSVM_CreateStringUtf8(env, testStr, strlen(testStr), &setvalueName));\n        return setvalueName;\n    };\n    char data[100] = \"1111 hello world\";\n    callbackStruct.data = data;\n    JSVM_Value testWrapClass = nullptr;\n\n    // 将属性的访问监听注册在propertyCfg中\n    OH_JSVM_DefineClassWithPropertyHandler(env, \"TestWrapClass\", NAPI_AUTO_LENGTH, &param1, 0, nullptr, &propertyCfg,\n                                           &callbackStruct, &testWrapClass);\n    JSVM_Value instanceValue = nullptr;\n    OH_JSVM_NewInstance(env, testWrapClass, 0, nullptr, &instanceValue);\n    const char testStr[] = \"hello world\";\n    JSVM_Value setvalueName = nullptr;\n    OH_JSVM_CreateStringUtf8(env, testStr, strlen(testStr), &setvalueName);\n\n    // 1. 名称属性回调\n    // 设置属性\n    OH_JSVM_SetNamedProperty(env, instanceValue, \"str11\", setvalueName);\n    OH_JSVM_SetNamedProperty(env, instanceValue, \"str123\", setvalueName);\n\n    // 获取属性\n    JSVM_Value valueName = nullptr;\n    OH_JSVM_GetNamedProperty(env, instanceValue, \"str11\", &valueName);\n    char str[100];\n    size_t size = 0;\n    OH_JSVM_GetValueStringUtf8(env, valueName, str, 100, &size);\n\n    // 获取所有属性的名称\n    JSVM_Value allPropertyNames = nullptr;\n    OH_JSVM_GetAllPropertyNames(env, instanceValue, JSVM_KEY_OWN_ONLY,\n                                static_cast<JSVM_KeyFilter>(JSVM_KEY_ENUMERABLE | JSVM_KEY_SKIP_SYMBOLS),\n                                JSVM_KEY_NUMBERS_TO_STRINGS, &allPropertyNames);\n    uint32_t nameSize = 0;\n    OH_JSVM_GetArrayLength(env, allPropertyNames, &nameSize);\n    JSVM_Value propertyName = nullptr;\n    for (uint32_t i = 0; i < nameSize; ++i) {\n        OH_JSVM_GetElement(env, allPropertyNames, i, &propertyName);\n        char str[100];\n        size_t size = 0;\n        OH_JSVM_GetValueStringUtf8(env, propertyName, str, 100, &size);\n    }\n\n    // 删除属性\n    bool result = false;\n    propertyName = nullptr;\n    char propertyChar[] = \"str11\";\n    OH_JSVM_CreateStringUtf8(env, propertyChar, strlen(propertyChar), &propertyName);\n    OH_JSVM_DeleteProperty(env, instanceValue, propertyName, &result);\n\n    // 2. 索引属性回调\n    // 设置属性\n    JSVM_Value jsIndex = nullptr;\n    uint32_t index = 0;\n    OH_JSVM_CreateUint32(env, index, &jsIndex);\n    OH_JSVM_SetProperty(env, instanceValue, jsIndex, setvalueName);\n    JSVM_Value jsIndex1 = nullptr;\n    index = 1;\n    OH_JSVM_CreateUint32(env, index, &jsIndex1);\n    OH_JSVM_SetProperty(env, instanceValue, jsIndex1, setvalueName);\n\n    // 获取属性\n    JSVM_Value valueName1 = nullptr;\n    OH_JSVM_GetProperty(env, instanceValue, jsIndex, &valueName1);\n    char str1[100];\n    size_t size1 = 0;\n    OH_JSVM_GetValueStringUtf8(env, valueName1, str1, 100, &size1);\n\n    // 获取所有属性的名称\n    JSVM_Value allPropertyNames1 = nullptr;\n    OH_JSVM_GetAllPropertyNames(env, instanceValue, JSVM_KEY_OWN_ONLY,\n                                static_cast<JSVM_KeyFilter>(JSVM_KEY_ENUMERABLE | JSVM_KEY_SKIP_SYMBOLS),\n                                JSVM_KEY_NUMBERS_TO_STRINGS, &allPropertyNames1);\n    uint32_t nameSize1 = 0;\n    OH_JSVM_GetArrayLength(env, allPropertyNames1, &nameSize1);\n    JSVM_Value propertyName1 = nullptr;\n    for (uint32_t i = 0; i < nameSize1; ++i) {\n        OH_JSVM_GetElement(env, allPropertyNames1, i, &propertyName1);\n        char str[100];\n        size_t size = 0;\n        OH_JSVM_GetValueStringUtf8(env, propertyName1, str, 100, &size);\n    }\n\n    // 删除属性\n    bool result1 = false;\n    OH_JSVM_DeleteProperty(env, instanceValue, jsIndex, &result1);\n\n    // 3. 作为函数的回调\n    JSVM_Value globalObj = nullptr;\n    OH_JSVM_GetGlobal(env, &globalObj);\n    OH_JSVM_SetNamedProperty(env, globalObj, \"myTestInstance\", instanceValue);\n    OH_LOG_INFO(LOG_APP, \"set property on global object\");\n    std::string innerSourcecodestr = R\"(\n    {\n        let res = myTestInstance(12);\n    })\";\n    JSVM_Value innerSourcecodevalue;\n    OH_JSVM_CreateStringUtf8(env, innerSourcecodestr.c_str(), innerSourcecodestr.size(), &innerSourcecodevalue);\n    JSVM_Script innerscript;\n    OH_JSVM_CompileScript(env, innerSourcecodevalue, nullptr, 0, true, nullptr, &innerscript);\n    JSVM_Value innerResult;\n    OH_JSVM_RunScript(env, innerscript, &innerResult);\n\n    OH_JSVM_CloseHandleScope(env, handlescope);\n    OH_JSVM_CloseEnvScope(env, envScope);\n    OH_JSVM_DestroyEnv(env);\n    OH_JSVM_CloseVMScope(vm, vm_scope);\n    OH_JSVM_DestroyVM(vm);\n    OH_LOG_ERROR(LOG_APP, \"TestDefineClassWithProperty pass\");\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例：设置父类并通过DefineClassOptions设置监听拦截属性操作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体示例参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-use/use-jsvm-about-class",
        children: "使用JSVM-API接口进行class相关开发"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "版本管理",
      children: "版本管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前版本信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_GetVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回JSVM运行时支持的最高JSVM API版本"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetVMInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回虚拟机的信息"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前版本信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_VMInfo result;\nOH_JSVM_GetVMInfo(&result);\nuint32_t versionId = 0;\nOH_JSVM_GetVersion(env, &versionId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存管理",
      children: "内存管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_AdjustExternalMemory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将因JavaScript对象而保持活跃的外部分配的内存大小及时通知给底层虚拟机，虚拟机后续触发GC时，就会综合内外内存状态来判断是否进行全局GC。即增大外部内存分配，则会增大触发全局GC的概率；反之减少。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_MemoryPressureNotification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知虚拟机系统内存压力层级，并有选择地触发垃圾回收。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_AllocateArrayBufferBackingStoreData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请一块 BackingStore 内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_FreeArrayBufferBackingStoreData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放 BackingStore 内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateArrayBufferFromBackingStoreData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于申请的 BackingStore 内存创建 array buffer。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 BackingStore 属于高危操作，使用者需确保内存使用正确。请参考下方正确示例，谨慎操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 分别在调用OH_JSVM_AdjustExternalMemory前后来查看底层虚拟机视角下外部分配的内存大小\nint64_t result = 0;\nOH_JSVM_AdjustExternalMemory(env, 0, &result); // 假设外部分配内存的变化不变\nOH_LOG_INFO(LOG_APP, \"Before AdjustExternalMemory: %{public}lld\\n\", result); // 得到调整前的数值\n// 调整外部分配的内存大小通知给底层虚拟机（此示例假设内存使用量增加）\nint64_t memoryIncrease = 1024 * 1024; // 增加 1 MB\nOH_JSVM_AdjustExternalMemory(env, memoryIncrease, &result);\nOH_LOG_INFO(LOG_APP, \"After AdjustExternalMemory: %{public}lld\\n\", result); // 得到调整后的数值\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 打开一个Handle scope，在scope范围内申请大量内存来测试函数功能；\n// 分别在“完成申请后”、“关闭scope后”和“调用OH_JSVM_MemoryPressureNotification后”三个节点查看内存状态\nJSVM_HandleScope tmpscope = nullptr;\nOH_JSVM_OpenHandleScope(env, &tmpscope);\nfor (int i = 0; i < 1000000; ++i) {\n    JSVM_Value obj;\n    OH_JSVM_CreateObject(env, &obj);\n}\nJSVM_HeapStatistics mem;\nOH_JSVM_GetHeapStatistics(vm, &mem); // 获取虚拟机堆的统计数据\nOH_LOG_INFO(LOG_APP, \"%{public}zu\\n\", mem.usedHeapSize); // 申请完成后，内存处于最大状态\nOH_JSVM_CloseHandleScope(env, tmpscope); // 关闭Handle scope\n\nOH_JSVM_GetHeapStatistics(vm, &mem);\nOH_LOG_INFO(LOG_APP, \"%{public}zu\\n\", mem.usedHeapSize); // 关闭scope后，GC并没有立即回收\n\n// 通知虚拟机系统内存压力层级，并有选择地触发垃圾回收\nOH_JSVM_MemoryPressureNotification(env, JSVM_MEMORY_PRESSURE_LEVEL_CRITICAL); // 假设内存压力处于临界状态\n\nOH_JSVM_GetHeapStatistics(vm, &mem);\nOH_LOG_INFO(LOG_APP, \"%{public}zu\\n\", mem.usedHeapSize); // 触发垃圾回收后\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BackingStore 正确使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void *backingStore;\nJSVM_Value arrayBuffer;\n\n// 申请一块大小为 100 字节的 BackingStore 内存\nOH_JSVM_AllocateArrayBufferBackingStoreData(100, JSVM_ZERO_INITIALIZED, &backingStore);\n\n// 在之前申请的 BackingStore 上创建一个 ArrayBuffer，位置为距离 BackingStore 起始地址加 30 字节处，大小为 20 字节\nOH_JSVM_CreateArrayBufferFromBackingStoreData(env, backingStore, 100, 30, 20, &arrayBuffer);\n\n// 在 JS 中使用创建的 ArrayBuffer\nJSVM_Value js_global;\nJSVM_Value name;\nOH_JSVM_GetGlobal(env, &js_global);\nOH_JSVM_CreateStringUtf8(env, \"buffer\", JSVM_AUTO_LENGTH, &name);\nOH_JSVM_SetProperty(env, js_global, name, arrayBuffer);\n\nJSVM_Script script;\nJSVM_Value scriptString;\nJSVM_Value result;\nconst char *src = R\"JS(\nfunction writeBuffer(data) {\n  let view = new Uint8Array(data);\n  // Write some values to the ArrayBuffer\n  for (let i = 0; i < view.length; i++) {\n    view[i] = i % 256;\n  }\n}\nwriteBuffer(buffer)\n)JS\";\nOH_JSVM_CreateStringUtf8(env, src, JSVM_AUTO_LENGTH, &scriptString);\nOH_JSVM_CompileScriptWithOptions(env, scriptString, 0, nullptr, &script);\nOH_JSVM_RunScript(env, script, &result);\n\n// 检查 ArrayBuffer 的内容\nuint8_t *array = static_cast<uint8_t*>(backingStore);\nfor (auto i = 0; i < 100; ++i) {\n  if (array[i] != i % 256) {\n    return false;\n  }\n}\n\n// 释放 array buffer. 注意对于这种方式创建的 ArrayBuffer, 在释放对应的 BackingStore 之前,\n// 务必使用 OH_JSVM_DetachArraybuffer 将所有使用当前的 BackingStore 创建的 ArrayBuffer 释放\n// 否则可能产生不可预测的内存问题，请谨慎使用\nOH_JSVM_DetachArraybuffer(env, arrayBuffer);\n\n// 释放申请的 backing store 内存\nOH_JSVM_FreeArrayBufferBackingStoreData(backingStore);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "promise操作",
      children: "Promise操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promise相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_CreatePromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个延迟对象和一个JavaScript promise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ResolveDeferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过与之关联的延迟对象来解析JavaScript promise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_RejectDeferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过与之关联的延迟对象来拒绝JavaScript Promise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsPromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询Promise是否为原生Promise对象"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promise相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_Deferred deferred;\nJSVM_Value promise;\nOH_JSVM_CreatePromise(env, &deferred, &promise);\n\n// 模拟异步操作\nint result = 42;\nbool success = true;\nif (success)\n{\n    // 解析Promise，并传递结果\n    JSVM_Value value;\n    OH_JSVM_CreateInt32(env, result, &value);\n    OH_JSVM_ResolveDeferred(env, deferred, value);\n} else {\n    // 拒绝Promise，并传递错误信息\n    JSVM_Value code = nullptr;\n    JSVM_Value message = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"600\", JSVM_AUTO_LENGTH, &code);\n    OH_JSVM_CreateStringUtf8(env, \"Async operation failed\", JSVM_AUTO_LENGTH, &message);\n    JSVM_Value error = nullptr;\n    OH_JSVM_CreateError(env, code, message, &error);\n    OH_JSVM_RejectDeferred(env, deferred, error);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "json操作",
      children: "JSON操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_JsonParse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析JSON字符串，并返回成功解析的值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_JsonStringify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将对象字符串化，并返回成功转换后的字符串"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析JSON操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "std::string sourcecodestr = \"{\\\"name\\\": \\\"John\\\", \\\"age\\\": 30, \\\"city\\\": \\\"New York\\\"}\" ;\nJSVM_Value jsonString;\nOH_JSVM_CreateStringUtf8(env, sourcecodestr.c_str(), sourcecodestr.size(), &jsonString);\nJSVM_Value result;\nOH_JSVM_JsonParse(env, jsonString, &result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建和使用虚拟机的启动快照",
      children: "创建和使用虚拟机的启动快照"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建和使用虚拟机的启动快照。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_CreateSnapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建虚拟机的启动快照"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateEnvFromSnapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于启动快照创建jsvm环境"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-use/use-jsvm-create-snapshot",
        children: "创建和使用虚拟机的启动快照。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检查传入的值是否可调用",
      children: "检查传入的值是否可调用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查传入的值是否可调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_IsCallable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查传入的值是否可调用"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查传入的值是否可调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static JSVM_Value NapiIsCallable(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_Value value, rst;\n    size_t argc = 1;\n    bool isCallable = false;\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, &value, NULL, NULL));\n    JSVM_CALL(OH_JSVM_IsCallable(env, value, &isCallable));\n    OH_JSVM_GetBoolean(env, isCallable, &rst);\n    return rst;\n}\n\nstatic napi_value MyJSVMDemo([[maybe_unused]] napi_env _env, [[maybe_unused]] napi_callback_info _info) {\n    std::thread t([]() {\n        // create vm, and open vm scope\n        JSVM_VM vm;\n        JSVM_CreateVMOptions options;\n        memset(&options, 0, sizeof(options));\n        OH_JSVM_CreateVM(&options, &vm);\n        JSVM_VMScope vmScope;\n        OH_JSVM_OpenVMScope(vm, &vmScope);\n        JSVM_CallbackStruct param[] = {\n            {.data = nullptr, .callback = NapiIsCallable},\n        };\n        JSVM_PropertyDescriptor descriptor[] = {\n            {\"napiIsCallable\", NULL, &param[0], NULL, NULL, NULL, JSVM_DEFAULT},\n        };\n        // create env, register native method, and open env scope\n        JSVM_Env env;\n        OH_JSVM_CreateEnv(vm, sizeof(descriptor) / sizeof(descriptor[0]), descriptor, &env);\n        JSVM_EnvScope envScope;\n        OH_JSVM_OpenEnvScope(env, &envScope);\n        // open handle scope\n        JSVM_HandleScope handleScope;\n        OH_JSVM_OpenHandleScope(env, &handleScope);\n        std::string sourceCodeStr = R\"JS(\n        function addNumbers(num1, num2)\n        {\n            var rst= num1 + num2;\n            return rst;\n        }\n        let rst = napiIsCallable(addNumbers);\n        )JS\";\n        // compile js script\n        JSVM_Value sourceCodeValue;\n        OH_JSVM_CreateStringUtf8(env, sourceCodeStr.c_str(), sourceCodeStr.size(), &sourceCodeValue);\n        JSVM_Script script;\n        OH_JSVM_CompileScript(env, sourceCodeValue, nullptr, 0, true, nullptr, &script);\n        JSVM_Value result;\n        // run js script\n        OH_JSVM_RunScript(env, script, &result);\n        JSVM_ValueType type;\n        OH_JSVM_Typeof(env, result, &type);\n        OH_LOG_INFO(LOG_APP, \"JSVM API TEST type: %{public}d\", type);\n        // exit vm and clean memory\n        OH_JSVM_CloseHandleScope(env, handleScope);\n        OH_JSVM_CloseEnvScope(env, envScope);\n        OH_JSVM_DestroyEnv(env);\n        OH_JSVM_CloseVMScope(vm, vmScope);\n        OH_JSVM_DestroyVM(vm);\n    });\n    t.detach();\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lock操作",
      children: "Lock操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lock操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_IsLocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前线程是否持有指定环境的锁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_AcquireLock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定环境的锁"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ReleaseLock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放指定环境的锁"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加锁解锁操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class LockWrapper {\n public:\n  LockWrapper(JSVM_Env env) : env(env) {\n    OH_JSVM_IsLocked(env, &isLocked);\n    if (!isLocked) {\n      OH_JSVM_AcquireLock(env);\n      OH_JSVM_GetVM(env, &vm);\n      OH_JSVM_OpenVMScope(vm, &vmScope);\n      OH_JSVM_OpenEnvScope(env, &envScope);\n    }\n  }\n\n  ~LockWrapper() {\n    if (!isLocked) {\n      OH_JSVM_CloseEnvScope(env, envScope);\n      OH_JSVM_CloseVMScope(vm, vmScope);\n      OH_JSVM_ReleaseLock(env);\n    }\n  }\n\n  LockWrapper(const LockWrapper&) = delete;\n  LockWrapper& operator=(const LockWrapper&) = delete;\n  LockWrapper(LockWrapper&&) = delete;\n  void* operator new(size_t) = delete;\n  void* operator new[](size_t) = delete;\n\n private:\n  JSVM_Env env;\n  JSVM_EnvScope envScope;\n  JSVM_VMScope vmScope;\n  JSVM_VM vm;\n  bool isLocked;\n};\n\nstatic int aa = 0;\n\nstatic napi_value Add([[maybe_unused]] napi_env _env, [[maybe_unused]] napi_callback_info _info) {\n    static JSVM_VM vm;\n    static JSVM_Env env;\n    if (aa == 0) {\n        OH_JSVM_Init(nullptr);\n        aa++;\n        // create vm\n        JSVM_CreateVMOptions options;\n        memset(&options, 0, sizeof(options));\n        OH_JSVM_CreateVM(&options, &vm);\n        // create env\n        OH_JSVM_CreateEnv(vm, 0, nullptr, &env);\n    }\n\n    std::thread t1([]() {\n        LockWrapper lock(env);\n        JSVM_HandleScope handleScope;\n        OH_JSVM_OpenHandleScope(env, &handleScope);\n        JSVM_Value value;\n        JSVM_Status rst = OH_JSVM_CreateInt32(env, 32, &value); // 32: numerical value\n        if (rst == JSVM_OK) {\n            OH_LOG_INFO(LOG_APP, \"JSVM:t1 OH_JSVM_CreateInt32 suc\");\n        } else {\n            OH_LOG_ERROR(LOG_APP, \"JSVM:t1 OH_JSVM_CreateInt32 fail\");\n        }\n        int32_t num1 = 0;\n        OH_JSVM_GetValueInt32(env, value, &num1);\n        OH_LOG_INFO(LOG_APP, \"JSVM:t1 num1 = %{public}d\", num1);\n        OH_JSVM_CloseHandleScope(env, handleScope);\n    });\n    std::thread t2([]() {\n        LockWrapper lock(env);\n        JSVM_HandleScope handleScope;\n        OH_JSVM_OpenHandleScope(env, &handleScope);\n        JSVM_Value value;\n        JSVM_Status rst = OH_JSVM_CreateInt32(env, 32, &value); // 32: numerical value\n        if (rst == JSVM_OK) {\n            OH_LOG_INFO(LOG_APP, \"JSVM:t2 OH_JSVM_CreateInt32 suc\");\n        } else {\n            OH_LOG_ERROR(LOG_APP, \"JSVM:t2 OH_JSVM_CreateInt32 fail\");\n        }\n        int32_t num1 = 0;\n        OH_JSVM_GetValueInt32(env, value, &num1);\n        OH_LOG_INFO(LOG_APP, \"JSVM:t2 num1 = %{public}d\", num1);\n        OH_JSVM_CloseHandleScope(env, handleScope);\n    });\n    t1.detach();\n    t2.detach();\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置与获取和当前运行的jsvm环境相关联的数据",
      children: "设置与获取和当前运行的JSVM环境相关联的数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用OH_JSVM_SetInstanceData接口，设置与当前运行的JSVM环境相关联的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_SetInstanceData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置与当前运行的JSVM环境相关联的数据"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetInstanceData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取与当前运行的JSVM环境相关联的数据"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置并获取与当前运行的JSVM环境相关联的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM_VM vm;\nJSVM_CreateVMOptions options;\nJSVM_VMScope vm_scope;\nJSVM_Env env;\nJSVM_EnvScope envScope;\nJSVM_HandleScope handlescope;\n\nstatic int aa = 0;\nstruct InstanceData {\n    int32_t value;\n};\n\n// 初始化虚拟机，创建JSVM运行环境\nvoid init_JSVM_environment(){\n    JSVM_InitOptions init_options;\n    memset(&init_options, 0, sizeof(init_options));\n    if (aa == 0) {\n        OH_JSVM_Init(&init_options);\n        aa++;\n    }\n    memset(&options, 0, sizeof(options));\n    OH_JSVM_CreateVM(&options, &vm);\n    OH_JSVM_OpenVMScope(vm, &vm_scope);\n    OH_JSVM_CreateEnv(vm, 0, nullptr, &env);\n    OH_JSVM_OpenEnvScope(env, &envScope);\n    OH_JSVM_OpenHandleScope(env, &handlescope);\n}\n\n// 退出虚拟机，释放对应的环境\nnapi_value close_JSVM_environment(napi_env env1, napi_callback_info info)\n{\n    OH_JSVM_CloseHandleScope(env, handlescope);\n    OH_JSVM_CloseEnvScope(env, envScope);\n    OH_JSVM_DestroyEnv(env);\n    OH_JSVM_CloseVMScope(vm, vm_scope);\n    OH_JSVM_DestroyVM(vm);\n    napi_value result;\n    char* s = \"ok\";\n    napi_create_string_latin1(env1, s, strlen(s), &result);\n    return result;\n}\n\n// 清除和释放与实例相关联的内存资源\nvoid InstanceFinalizeCallback(JSVM_Env env, void *finalizeData, void *finalizeHint)\n{\n    if (finalizeData) {\n        InstanceData *data = reinterpret_cast<InstanceData *>(finalizeData);\n        free(data);\n        *(InstanceData **)finalizeData = nullptr;\n    }\n}\n\nstatic napi_value GetInstanceData(napi_env env1, napi_callback_info info)\n{\n    InstanceData *instanceData = reinterpret_cast<InstanceData *>(malloc(sizeof(InstanceData)));\n    if (instanceData == nullptr) {\n        printf(\"Memory allocation failed!\\n\");\n        return nullptr;\n    }\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    // 用于获取回调函数参数\n    napi_get_cb_info(env1, info, &argc, args , nullptr, nullptr);\n    napi_valuetype valuetype0;\n    napi_typeof(env1, args[0], &valuetype0);\n    int32_t tmp = 0;\n    napi_get_value_int32(env1, args[0], &tmp);\n    instanceData->value = tmp;\n    // 将获得的参数与当前运行的JSVM环境关联起来\n    OH_JSVM_SetInstanceData(env, instanceData, InstanceFinalizeCallback, nullptr);\n    InstanceData *resData = nullptr;\n    // 获取与当前运行的JSVM环境相关联的数据\n    OH_JSVM_GetInstanceData(env, (void **)&resData);\n    napi_value result;\n    napi_create_uint32(env1, resData->value, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "任务队列",
      children: "任务队列"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "场景介绍"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在虚拟机内部启动任务队列的运行，检查队列中是否有待处理的微任务。任务队列可由外部事件循环执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口说明"
        })
      })
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
            children: "OH_JSVM_PumpMessageLoop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动任务队列的运行"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_PerformMicrotaskCheckpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行任务队列里的微任务"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-use/use-jsvm-execute_tasks",
        children: "使用JSVM-API接口进行任务队列相关开发"
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
832246(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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