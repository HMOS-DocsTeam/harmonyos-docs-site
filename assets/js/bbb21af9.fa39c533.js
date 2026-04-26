"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["741767"], {
599549(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkts_api_arkts_arkts_js_apis_arkts_utils_arkts_apis_arkts_utils_locks_arkts_apis_arkts_utils_locks_md_bbb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkts-api-arkts-arkts-js-apis-arkts-utils-arkts-apis-arkts-utils-locks-arkts-apis-arkts-utils-locks-md-bbb.json
var site_docs_ref_arkts_api_arkts_arkts_js_apis_arkts_utils_arkts_apis_arkts_utils_locks_arkts_apis_arkts_utils_locks_md_bbb_namespaceObject = JSON.parse('{"id":"arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-locks/arkts-apis-arkts-utils-locks","title":"ArkTSUtils.locks","description":"为了解决多并发实例间的数据竞争问题，ArkTS语言基础库引入了异步锁能力。为了开发者的开发效率，AsyncLock对象支持跨并发实例引用传递。","source":"@site/docs-ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-locks/arkts-apis-arkts-utils-locks.md","sourceDirName":"arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-locks","slug":"/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-locks/arkts-apis-arkts-utils-locks","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-locks/arkts-apis-arkts-utils-locks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ArkTSUtils.locks","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-utils-locks","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-arkts-utils-locks"},"sidebar":"ref","previous":{"title":"Functions","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-f/arkts-apis-arkts-utils-f"},"next":{"title":"ArkTSUtils.ASON","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-ason/arkts-apis-arkts-utils-ason"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-locks/arkts-apis-arkts-utils-locks.md


const frontMatter = {
	title: 'ArkTSUtils.locks',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-utils-locks',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-arkts-utils-locks'
};
const contentTitle = 'ArkTSUtils.locks';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "AsyncLockCallback",
  "id": "asynclockcallback",
  "level": 2
}, {
  "value": "AsyncLock",
  "id": "asynclock",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "request",
  "id": "request",
  "level": 3
}, {
  "value": "query",
  "id": "query",
  "level": 3
}, {
  "value": "queryAll",
  "id": "queryall",
  "level": 3
}, {
  "value": "lockAsync",
  "id": "lockasync",
  "level": 3
}, {
  "value": "lockAsync",
  "id": "lockasync-1",
  "level": 3
}, {
  "value": "lockAsync",
  "id": "lockasync-2",
  "level": 3
}, {
  "value": "AsyncLockMode",
  "id": "asynclockmode",
  "level": 2
}, {
  "value": "AsyncLockOptions",
  "id": "asynclockoptions",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor-1",
  "level": 3
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "AsyncLockState",
  "id": "asynclockstate",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-2",
  "level": 3
}, {
  "value": "AsyncLockInfo",
  "id": "asynclockinfo",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-3",
  "level": 3
}, {
  "value": "AbortSignal",
  "id": "abortsignal",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-4",
  "level": 3
}, {
  "value": "ConditionVariable18+",
  "id": "conditionvariable18",
  "level": 2
}, {
  "value": "constructor18+",
  "id": "constructor18",
  "level": 3
}, {
  "value": "request18+",
  "id": "request18",
  "level": 3
}, {
  "value": "wait18+",
  "id": "wait18",
  "level": 3
}, {
  "value": "waitFor18+",
  "id": "waitfor18",
  "level": 3
}, {
  "value": "notifyAll18+",
  "id": "notifyall18",
  "level": 3
}, {
  "value": "notifyOne18+",
  "id": "notifyone18",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    u: "u",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arktsutilslocks",
        children: "ArkTSUtils.locks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了解决多并发实例间的数据竞争问题，ArkTS语言基础库引入了异步锁能力。为了开发者的开发效率，AsyncLock对象支持跨并发实例引用传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于ArkTS语言支持异步操作，阻塞锁容易产生死锁问题，因此我们在ArkTS中仅支持异步锁（非阻塞式锁）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用异步锁的方法需要标记为async，调用方需要await修饰调用，才能保证时序正确。因此会导致外层调用函数全部标记成async。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(961179)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArkTSUtils } from '@kit.ArkTS'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "asynclockcallback",
      children: "AsyncLockCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AsyncLockCallback<T> = () => T | Promise<T>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这是一个补充类型别名，表示", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lockasync",
        children: "lockAsync"
      }), "函数所有重载中的回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "asynclock",
      children: "AsyncLock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实现异步锁功能的类，允许在锁下执行异步操作。该类使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "@Sendable装饰器"
      }), "装饰。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "锁的名称。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 示例一：\n@Sendable\nclass A {\n  count_: number = 0;\n  async getCount(): Promise<number> {\n    let lock: ArkTSUtils.locks.AsyncLock = ArkTSUtils.locks.AsyncLock.request(\"lock_1\");\n    return lock.lockAsync(() => {\n      return this.count_;\n    })\n  }\n  async setCount(count: number) {\n    let lock: ArkTSUtils.locks.AsyncLock = ArkTSUtils.locks.AsyncLock.request(\"lock_1\");\n    await lock.lockAsync(() => {\n      this.count_ = count;\n    })\n  }\n}\n\n// 示例二：\n@Sendable\nclass A {\n  count_: number = 0;\n  lock_: ArkTSUtils.locks.AsyncLock = new ArkTSUtils.locks.AsyncLock();\n  async getCount(): Promise<number> {\n    return this.lock_.lockAsync(() => {\n      return this.count_;\n    })\n  }\n  async setCount(count: number) {\n    await this.lock_.lockAsync(() => {\n      this.count_ = count;\n    })\n  }\n}\n\n@Concurrent\nasync function foo(a: A) {\n  await a.setCount(10)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认构造函数。创建一个异步锁。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let lock = new ArkTSUtils.locks.AsyncLock();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request",
      children: "request"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static request(name: string): AsyncLock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用指定的名称查找或创建（如果未找到）异步锁实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按指定名称查找或创建异步锁实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asynclock",
              children: "AsyncLock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回查找到或创建后的异步锁实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let lockName = 'isAvailableLock';\nlet lock = ArkTSUtils.locks.AsyncLock.request(lockName);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "query",
      children: "query"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static query(name: string): AsyncLockState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询指定异步锁的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要查询的锁的名称，仅可查询通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#request",
              children: "request接口"
            }), "获取的锁（即与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#request",
              children: "request接口"
            }), "入参锁名称保持一致）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asynclockstate",
              children: "AsyncLockState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含状态描述的异步锁状态实例。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
        children: "语言基础类库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The input parameters are invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10200030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The lock does not exist."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 查询已存在的锁信息\nlet lock = ArkTSUtils.locks.AsyncLock.request(\"queryTestLock\");\nlet state = ArkTSUtils.locks.AsyncLock.query('queryTestLock');\nlet pending: ArkTSUtils.locks.AsyncLockInfo[] = state.pending;\nlet held: ArkTSUtils.locks.AsyncLockInfo[] = state.held;\n// 输出当前处于pending状态的锁数量\nconsole.info(`Number of pending locks: ${pending.length}`);\n// 输出当前处于held状态的锁数量\nconsole.info(`Number of held locks: ${held.length}`);\n\n// 查询不存在的锁信息，会抛出错误信息：The lock does not exist.\ntry {\n  let state1 = ArkTSUtils.locks.AsyncLock.query('queryTestLock1');\n} catch (e) {\n  console.error(`Error is: ${e}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "queryall",
      children: "queryAll"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static queryAll(): AsyncLockState[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询所有现有锁的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#asynclockstate",
              children: "AsyncLockState"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含锁状态信息的异步锁状态数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 查询已存在的锁信息\nlet lock1 = ArkTSUtils.locks.AsyncLock.request(\"queryTestLock1\");\nlet lock2 = ArkTSUtils.locks.AsyncLock.request(\"queryTestLock2\");\nlet states: ArkTSUtils.locks.AsyncLockState[] = ArkTSUtils.locks.AsyncLock.queryAll();\n// 输出当前存在的锁数量\nconsole.info(\"The states size is \" + states.length);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lockasync",
      children: "lockAsync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lockAsync<T>(callback: AsyncLockCallback<T>): Promise<T>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在获取的锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。回调在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lockasync",
        children: "lockAsync"
      }), "的同一线程中以异步方式执行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asynclockcallback",
              children: "AsyncLockCallback<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取锁后要调用的函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调执行后将解决的Promise。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
        children: "语言基础类库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The input parameters are invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10200030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The lock does not exist."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let lock = new ArkTSUtils.locks.AsyncLock();\nlet p1 = lock.lockAsync<void>(() => {\n    // 执行某些操作\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lockasync-1",
      children: "lockAsync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lockAsync<T>(callback: AsyncLockCallback<T>, mode: AsyncLockMode): Promise<T>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在获取的锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。回调在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lockasync",
        children: "lockAsync"
      }), "的同一线程中以异步方式执行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12 开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Utils.Lang"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asynclockcallback",
              children: "AsyncLockCallback<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取锁后要调用的函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#asynclockmode",
              children: "AsyncLockMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "锁的操作模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<T>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调执行后将解决的Promise。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
        children: "语言基础类库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The input parameters are invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10200030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The lock does not exist."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let lock = new ArkTSUtils.locks.AsyncLock();\nlet p1 = lock.lockAsync<void>(() => {\n    // 执行某些操作\n}, ArkTSUtils.locks.AsyncLockMode.EXCLUSIVE);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lockasync-2",
      children: "lockAsync"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["lockAsync<T, U>(callback: AsyncLockCallback<T>, mode: AsyncLockMode, options: AsyncLockOptions", (0,jsx_runtime.jsx)(_components.u, {
        children: "): Promise<T | U>"
      })]
    }), (0,jsx_runtime.jsxs)(_components.u, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["在获取的锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。回调在调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#lockasync",
          children: "lockAsync"
        }), "的同一线程中以异步方式执行。在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#asynclockoptions",
          children: "AsyncLockOptions"
        }), "中可以提供一个可选的超时值。在这种情况下，如果超时前未能获取锁，lockAsync将返回被拒绝的Promise并带上一个BusinessError实例。这种情况下，错误信息将包含持有的锁和等待的锁的信息以及可能的死锁警告。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 12 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "参数："
          })
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "必填"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "callback"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#asynclockcallback",
                children: "AsyncLockCallback<T>"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "是"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "获取锁后要调用的函数。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "mode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#asynclockmode",
                children: "AsyncLockMode"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "是"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "锁的操作模式。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "options"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#asynclockoptions",
                children: "AsyncLockOptions<U>"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "是"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "锁的操作选项。"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "返回值："
          })
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Promise<T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "U>"
            })]
          })
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "错误码："
          })
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/errorcode-universal/errorcode-universal",
          children: "通用错误码"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils",
          children: "语言基础类库错误码"
        }), "。"]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "错误码ID"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "错误信息"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "401"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The input parameters are invalid."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "10200030"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The lock does not exist."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "10200031"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Timeout exceeded."
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "示例："
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "let lock = new ArkTSUtils.locks.AsyncLock();\nlet options = new ArkTSUtils.locks.AsyncLockOptions<void>();\noptions.timeout = 1000;\nlet p: Promise<void> = lock.lockAsync<void, void>(\n    () => {\n        // 执行某些操作\n    },\n    ArkTSUtils.locks.AsyncLockMode.EXCLUSIVE,\n    options\n);\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "asynclockmode",
        children: "AsyncLockMode"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "锁操作对应的模式枚举。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 12 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "值"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SHARED"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "共享锁模式。如果指定了此模式，允许​​多个线程或并发任务同时获取锁并执行操作。多用于读操作、无数据竞争的并行任务。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "EXCLUSIVE"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "独占锁模式。如果指定了此模式，仅允许持有锁的任务执行。 它与任何其他锁均不兼容​​，包括其他独占锁和共享锁。多用于写操作、数据更新、状态修改等可能产生竞争的场景。"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "示例："
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "let lock = new ArkTSUtils.locks.AsyncLock();\n// shared0可获取锁并开始执行\nlock.lockAsync(async () => {\n    console.info('shared0');\n    await new Promise<void>((resolve) => setTimeout(resolve, 1000));\n}, ArkTSUtils.locks.AsyncLockMode.SHARED);\n// shared1可获取锁并开始执行，无需等待shared0\nlock.lockAsync(async () => {\n    console.info('shared1');\n    await new Promise<void>((resolve) => setTimeout(resolve, 1000));\n}, ArkTSUtils.locks.AsyncLockMode.SHARED);\n// exclusive0需等待shared0、1执行完后才可获取锁并执行\nlock.lockAsync(async () => {\n    console.info('exclusive0');\n    await new Promise<void>((resolve) => setTimeout(resolve, 1000));\n}, ArkTSUtils.locks.AsyncLockMode.EXCLUSIVE);\n// shared2需等待exclusive0执行完后才可获取锁并执行\nlock.lockAsync(async () => {\n    console.info('shared2');\n    await new Promise<void>((resolve) => setTimeout(resolve, 1000));\n}, ArkTSUtils.locks.AsyncLockMode.SHARED);\n// shared3需等待exclusive0执行完后才可获取锁并执行，无需等待shared2\nlock.lockAsync(async () => {\n    console.info('shared3');\n    await new Promise<void>((resolve) => setTimeout(resolve, 1000));\n}, ArkTSUtils.locks.AsyncLockMode.SHARED);\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "asynclockoptions",
        children: "AsyncLockOptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class AsyncLockOptions<T>"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "表示锁操作选项的类。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 12 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "constructor-1",
        children: "constructor"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "constructor()"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "默认构造函数。创建一个所有属性均具有默认值的异步锁配置项实例。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 12 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "示例："
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "let s: ArkTSUtils.locks.AbortSignal<string> = { aborted: false, reason: 'Aborted' };\nlet options = new ArkTSUtils.locks.AsyncLockOptions<string>();\noptions.isAvailable = false;\noptions.signal = s;\nlet lock = new ArkTSUtils.locks.AsyncLock();\nlet p = lock.lockAsync<void, string>(\n  () => {\n    // 执行某些操作\n  },\n  ArkTSUtils.locks.AsyncLockMode.EXCLUSIVE,\n  options,\n);\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "属性-1",
        children: "属性"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "只读"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "可选"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "isAvailable"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "boolean"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "当前锁是否可用。取值为true，则只有在尚未持有锁定请求时才会授予该锁定请求；为false则表示将等待当前锁被释放。默认为 false。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "signal"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#abortsignal",
                children: "AbortSignal<T>"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "null"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "timeout"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["锁的超时时间，单位为毫秒。若该值大于零，且操作运行时间超过该时间，", (0,jsx_runtime.jsx)(_components.a, {
                href: "#lockasync",
                children: "lockAsync"
              }), "将返回被拒绝的Promise。默认为 0。"]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "asynclockstate",
        children: "AsyncLockState"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "用于存储异步锁实例上当前执行的所有锁操作的信息的类。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 12 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "属性-2",
        children: "属性"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "只读"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "可选"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "held"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#asynclockinfo",
                children: "AsyncLockInfo[]"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "持有的锁信息。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "pending"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#asynclockinfo",
                children: "AsyncLockInfo[]"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "等待中的锁信息。"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "asynclockinfo",
        children: "AsyncLockInfo"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "关于锁的信息。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 12 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "属性-3",
        children: "属性"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "只读"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "可选"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "string"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "锁的名称。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "mode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#asynclockmode",
                children: "AsyncLockMode"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "锁的模式。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "contextId"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "#asynclockmode",
                children: "AsyncLockMode"
              }), "调用者的执行上下文标识符。"]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "abortsignal",
        children: "AbortSignal"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "用于终止异步操作的对象。该类的实例必须在其创建的同一线程中访问。从其他线程访问此类的字段会导致未定义的行为。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 12 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "属性-4",
        children: "属性"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "只读"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "可选"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "aborted"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "boolean"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "是否终止异步操作。为true时表示终止异步操作，为false时表示异步操作未被终止。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reason"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "否"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["终止的原因。此值将用于拒绝", (0,jsx_runtime.jsx)(_components.a, {
                href: "#lockasync",
                children: "lockAsync"
              }), "返回的Promise。"]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "conditionvariable18",
        children: "ConditionVariable18+"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["实现异步等待功能的类，支持异步等待通知操作。该类使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
          children: "@Sendable装饰器"
        }), "装饰。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 18 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "constructor18",
        children: "constructor18+"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "constructor()"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "默认构造函数。创建一个异步等待通知操作的对象。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 18 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "示例："
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "let conditionVariable = new ArkTSUtils.locks.ConditionVariable();\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "request18",
        children: "request18+"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "static request(name: string): ConditionVariable"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "使用指定的名称查找或创建（如果未找到）异步等待通知操作的对象。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 18 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "参数："
          })
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "必填"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "string"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "是"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "按指定名称查找或创建等待通知操作的对象名称，字符串无特别限制。"
            })]
          })
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "返回值："
          })
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#conditionvariable18",
                children: "ConditionVariable"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "返回查找到或创建后的异步等待通知操作的实例。"
            })]
          })
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "示例："
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "let conditionVariable = ArkTSUtils.locks.ConditionVariable.request(\"conditionName\");\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "wait18",
        children: "wait18+"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "wait(): Promise<void>"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "异步调用进入等待中，将在被唤醒后继续执行。使用Promise异步回调。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 18 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "返回值："
          })
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Promise<void>"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "无返回结果的Promise对象。"
            })]
          })
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "示例："
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "const conditionVariable: ArkTSUtils.locks.ConditionVariable = new ArkTSUtils.locks.ConditionVariable();\nconditionVariable.wait().then(() => {\n  console.info(`Thread being awakened, then continue...`); // 被唤醒后输出日志\n});\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "waitfor18",
        children: "waitFor18+"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "waitFor(timeout : number) : Promise<void>"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "异步调用进入等待中, 将在被唤醒或者等待时间结束后继续执行。使用Promise异步回调。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 18 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "参数："
          })
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "必填"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "timeout"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "是"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "等待时间，单位为ms，正整数。"
            })]
          })
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "返回值："
          })
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Promise<void>"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "无返回结果的Promise对象。"
            })]
          })
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "示例："
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "const conditionVariable: ArkTSUtils.locks.ConditionVariable = new ArkTSUtils.locks.ConditionVariable();\nconditionVariable.waitFor(3000).then(() => {\n  console.info(`Thread being awakened, then continue...`); // 被唤醒后输出日志\n});\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "notifyall18",
        children: "notifyAll18+"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "notifyAll() : void"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "通知所有等待的线程。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 18 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "示例："
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "const conditionVariable: ArkTSUtils.locks.ConditionVariable = new ArkTSUtils.locks.ConditionVariable();\nconditionVariable.waitFor(3000).then(() => {\n  console.info(`Thread being awakened, then continue...`); // 被唤醒后输出日志\n});\n// 通知所有等待的线程。\nconditionVariable.notifyAll();\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "notifyone18",
        children: "notifyOne18+"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "notifyOne() : void"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "通知第一个等待的线程。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "元服务API"
          })
        }), "：从API version 18 开始，该接口支持在元服务中使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Utils.Lang"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "示例："
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "const conditionVariable: ArkTSUtils.locks.ConditionVariable = new ArkTSUtils.locks.ConditionVariable();\nconditionVariable.waitFor(3000).then(() => {\n  console.info(`Thread a being awakened, then continue...`); // 被唤醒后输出日志\n});\n// 通知第一个等待的线程。\nconditionVariable.notifyOne();\n"
        })
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
961179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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