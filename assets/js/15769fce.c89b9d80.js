"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["595272"], {
912229(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_error_manager_errormanager_guidelines_errormanager_guidelines_md_157_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-error-manager-errormanager-guidelines-errormanager-guidelines-md-157.json
var site_docs_system_debug_optimize_performance_analysis_kit_error_manager_errormanager_guidelines_errormanager_guidelines_md_157_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines/errormanager-guidelines","title":"错误管理开发指导","description":"场景介绍","source":"@site/docs/system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines/errormanager-guidelines.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines","slug":"/system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"错误管理开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/errormanager-guidelines","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用HiCollie监控函数执行时间超长问题（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-settimer-guidelines-ndk/"},"next":{"title":"应用恢复开发指导","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/error-manager/apprecovery-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines/errormanager-guidelines.md


const frontMatter = {
	title: '错误管理开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/errormanager-guidelines',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '错误管理开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "解除注册结果码",
  "id": "解除注册结果码",
  "level": 3
}, {
  "value": "开发示例",
  "id": "开发示例",
  "level": 2
}, {
  "value": "单线程监听场景",
  "id": "单线程监听场景",
  "level": 3
}, {
  "value": "进程监听异常场景",
  "id": "进程监听异常场景",
  "level": 3
}, {
  "value": "进程监听promise异常场景",
  "id": "进程监听promise异常场景",
  "level": 3
}, {
  "value": "主线程监听freeze",
  "id": "主线程监听freeze",
  "level": 3
}, {
  "value": "主线程监听消息处理耗时",
  "id": "主线程监听消息处理耗时",
  "level": 3
}, {
  "value": "进程promise监听注册被拒绝",
  "id": "进程promise监听注册被拒绝",
  "level": 3
}, {
  "value": "错误处理器责任链模式场景",
  "id": "错误处理器责任链模式场景",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "错误管理开发指导",
        children: "错误管理开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用的代码存在规范问题或错误时，会在运行中产生异常和错误，如应用未捕获异常等。在错误产生后，应用会异常退出。错误日志通常会保存在用户本地存储设备中，不方便开发者定位问题。所以，应用开发者可以使用错误管理的接口，在应用退出前，及时将相关错误及日志上报到开发者的服务平台来定位问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用errorManager接口监听异常和错误后，应用不会退出，建议在回调函数执行完后，增加同步退出操作，如果只是为了获取错误日志，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
        children: "HiAppEvent订阅事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用错误管理接口由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-errormanager/js-apis-app-ability-errormanager",
        children: "@ohos.app.ability.errorManager (错误管理模块)"
      }), "提供，使用接口能力前需注册错误观测器，开发者可以通过import引入，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BC%80%E5%8F%91%E7%A4%BA%E4%BE%8B",
        children: "开发示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误管理接口功能介绍"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: \"error\", observer: ErrorObserver): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册错误监听接口，当系统监测到应用异常时会回调该监听。该接口为同步接口，返回值为注册的监听对象对应的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: \"error\", observerId: number, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以callback的形式解除注册监听，传入的number为之前注册监听时返回的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: \"error\", observerId: number): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以Promise的形式解除注册监听，传入的number为之前注册监听时返回的序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'globalErrorOccurred', observer: GlobalObserver): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册进程错误监听接口，当系统监测到应用异常时会回调该监听，该接口为同步接口，即一次注册，全局监听。（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "推荐使用"
              })
            }), "）  说明：从API version 18开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'globalErrorOccurred', observer?: GlobalObserver): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以callback的形式解除注册监听。（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "推荐使用"
              })
            }), "）  说明：从API version 18开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'globalUnhandledRejectionDetected', observer: GlobalObserver): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册进程错误监听接口，当系统监测到应用promise异常时会回调该监听，该接口为同步接口，即一次注册，全局监听。（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "推荐使用"
              })
            }), "）  说明：从API version 18开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'globalUnhandledRejectionDetected', observer?: GlobalObserver): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以callback的形式解除注册监听。（", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "推荐使用"
              })
            }), "）  说明：从API version 18开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'loopObserver', timeout: number, observer: LoopObserver): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册主线程消息处理耗时监听器，当系统监测到应用主线程事件处理超时时会回调该监听。  只能在主线程调用，多次注册后，后一次的注册会覆盖前一次的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'loopObserver', observer?: LoopObserver): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以LoopObserver的形式解除应用主线程消息处理耗时监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'freeze', observer: FreezeObserver): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册应用主线程freeze监听。只能在主线程调用，重复注册后，后一次的注册会覆盖前一次的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'freeze', observer?: FreezeObserver): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以FreezeObserver的形式解除应用主线程消息处理耗时监听。  说明：从API version 18开始，支持该接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setDefaultErrorHandler(defaultHandler?: ErrorHandler): ErrorHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅允许在主线程调用，发生JS_CRASH异常时，支持链式回调，返回值为上一次注册的处理器。  说明：从API version 21开始，支持该接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当采用callback作为异步回调时，可以在callback中进行下一步处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当采用Promise对象返回时，可以在Promise对象中类似地处理接口返回值，具体结果码说明见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%A7%A3%E9%99%A4%E6%B3%A8%E5%86%8C%E7%BB%93%E6%9E%9C%E7%A0%81",
        children: "解除注册结果码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误监听(ErrorObserver)接口功能介绍"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onUnhandledException(errMsg: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统回调接口，应用注册后，当应用产生未捕获的异常时的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onException?(errObject: Error): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统回调接口，应用注册后，当应用产生异常上报js层时的回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用主线程监听(LoopObserver)接口功能介绍"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onLoopTimeOut?(timeout: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统回调接口，应用注册后，当应用主线程处理事件超时的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解除注册结果码",
      children: "解除注册结果码"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "结果码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "原因"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常返回"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入的number参数不存在"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数错误"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发示例",
      children: "开发示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(855123)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议在异常回调函数处理的最后，增加同步退出操作，以避免多次异常回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "单线程监听场景",
      children: "单线程监听场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { errorManager } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增监听回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let observer: errorManager.ErrorObserver = {\n  onUnhandledException(errorMsg) {\n    console.error('testErrorManage','onUnhandledException, errorMsg: ', errorMsg);\n  },\n  onException(errorObj) {\n    console.error('testErrorManage','onException, name: ', errorObj.name);\n    console.error('testErrorManage','onException, message: ', errorObj.message);\n    if (typeof(errorObj.stack) === 'string') {\n      console.error('testErrorManage','onException, stack: ', errorObj.stack);\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增触发按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('单线程监听场景').onClick(()=>{\n  let observerId = -1;\n  try {\n    observerId = errorManager.on('error', observer);\n  } catch (paramError) {\n    let code = (paramError as BusinessError).code;\n    let message = (paramError as BusinessError).message;\n    console.error('testErrorManage',`error: ${code}, ${message}`);\n  }\n  // 构造场景故障\n  throw new Error('test errorObserver msg');\n}).position({x:50, y:50});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进程监听异常场景",
      children: "进程监听异常场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { errorManager } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增监听回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function errorFunc(observer: errorManager.GlobalError) {\n  console.error('testErrorManage','result name :' + observer.name);\n  console.error('testErrorManage','result message :' + observer.message);\n  console.error('testErrorManage','result stack :' + observer.stack);\n  console.error('testErrorManage','result instanceName :' + observer.instanceName);\n  console.error('testErrorManage','result instanceType :' + observer.instanceType);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增触发按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('进程监听异常场景').onClick(()=>{\n  try {\n    errorManager.on('globalErrorOccurred', errorFunc);\n  } catch (paramError) {\n    let code = (paramError as BusinessError).code;\n    let message = (paramError as BusinessError).message;\n    console.error('testErrorManage',`error: ${code}, ${message}`);\n  }\n  // 构造场景故障\n  throw new Error('test errorFunc msg');\n}).position({x:50, y:100});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进程监听promise异常场景",
      children: "进程监听promise异常场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { errorManager } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增监听回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function promiseFunc(observer: errorManager.GlobalError) {\n  console.error('testErrorManage','result name :' + observer.name);\n  console.error('testErrorManage','result message :' + observer.message);\n  console.error('testErrorManage','result stack :' + observer.stack);\n  console.error('testErrorManage','result instanceName :' + observer.instanceName);\n  console.error('testErrorManage','result instanceType :' + observer.instanceType);\n};\n\nasync function promiseFuncOne() {\n  throw new Error('process promise exception');\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增触发按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('进程监听promise异常场景').onClick(()=>{\n  try {\n    errorManager.on('globalUnhandledRejectionDetected', promiseFunc);\n  } catch (paramError) {\n    let code = (paramError as BusinessError).code;\n    let message = (paramError as BusinessError).message;\n    console.error('testErrorManage',`error: ${code}, ${message}`);\n  }\n  // 构造场景故障\n  new Promise<string>(() => {\n    promiseFuncOne();\n  }).then(() => {\n    throw new Error('test promiseFuncOne msg');\n  });\n}).position({x:50, y:200});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "主线程监听freeze",
      children: "主线程监听freeze"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { errorManager } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增监听回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function freezeCallback() {\n  console.error('testErrorManage','freezecallback');\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增触发按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('主线程监听freeze').onClick(()=>{\n  try {\n    errorManager.on('freeze', freezeCallback);\n  } catch (paramError) {\n    let code = (paramError as BusinessError).code;\n    let message = (paramError as BusinessError).message;\n    console.error('testErrorManage',`error: ${code}, ${message}`);\n  }\n  // 构造场景故障\n  let date = Date.now();\n  while (Date.now() - date < 15000) {\n  };\n}).position({x:50, y:300});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "主线程监听消息处理耗时",
      children: "主线程监听消息处理耗时"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { errorManager } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增监听回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let loopObserver: errorManager.LoopObserver = {\n  onLoopTimeOut(timeout: number) {\n    console.error('testErrorManage','Duration timeout: ' + timeout);\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增触发按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('主线程监听消息处理耗时').onClick(()=>{\n  try {\n    errorManager.on('loopObserver', 1, loopObserver);\n  } catch (paramError) {\n    let code = (paramError as BusinessError).code;\n    let message = (paramError as BusinessError).message;\n    console.error('testErrorManage',`error: ${code}, ${message}`);\n  }\n  // 构造场景故障\n  let date = Date.now();\n  while (Date.now() - date < 4000) {\n  };\n}).position({x:50, y:150});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进程promise监听注册被拒绝",
      children: "进程promise监听注册被拒绝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { errorManager } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增监听回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let promise1 = new Promise<void>(() => {}).then(() => {\n  throw new Error('uncaught error');\n});\n\nlet unhandledrejectionObserver: errorManager.UnhandledRejectionObserver = (reason: Error, promise: Promise<void>) => {\n  if (promise === promise1) {\n    console.error('testErrorManage','promise1 is rejected');\n  }\n  console.error('testErrorManage','reason.name: ', reason.name);\n  console.error('testErrorManage','reason.message: ', reason.message);\n  if (reason.stack) {\n    console.error('testErrorManage','reason.stack: ', reason.stack);\n  }\n};\n\nasync function promiseFuncTwo() {\n  throw new Error('process promise unhandled rejection exception');\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增触发按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('进程promise监听注册被拒绝').onClick(()=>{\n  try {\n    errorManager.on('unhandledRejection', unhandledrejectionObserver);\n  } catch (paramError) {\n    let code = (paramError as BusinessError).code;\n    let message = (paramError as BusinessError).message;\n    console.error('testErrorManage',`error: ${code}, ${message}`);\n  }\n  // 构造场景故障\n  new Promise<string>(() => {\n    promiseFuncTwo();\n  }).then(() => {\n    throw new Error('test promiseFuncTwo msg');\n  });\n}).position({x:50, y:250});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "错误处理器责任链模式场景",
      children: "错误处理器责任链模式场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义第一个错误处理器及注册方法，无前置处理器时退出进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { errorManager } from '@kit.AbilityKit';\nimport { process } from '@kit.ArkTS';\n\nlet firstHandler: errorManager.ErrorHandler;\nconst firstErrorHandler: errorManager.ErrorHandler = (reason: Error) => {\n    // 自定义的第一个errorHandler实现逻辑\n    console.info('[FirstHandler] First uncaught exception handler invoked.');\n    if (firstHandler) {\n        firstHandler(reason);\n    } else {\n        // 建议增加判空操作，如果为空采用同步退出方式\n        const processManager = new process.ProcessManager();\n        processManager.exit(0);\n    }\n};\n\nexport function setFirstErrorHandler() {\n    firstHandler = errorManager.setDefaultErrorHandler(firstErrorHandler);\n    console.info('Registered First Error Handler');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义第二个错误处理器及注册方法，形成链式调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { errorManager } from '@kit.AbilityKit';\nimport { process } from '@kit.ArkTS';\n\nlet secondHandler: errorManager.ErrorHandler;\nconst secondErrorHandler: errorManager.ErrorHandler = (reason: Error) => {\n    // 自定义的第二个errorHandler实现逻辑\n    console.info('[SecondHandler] Second uncaught exception handler invoked.');\n    if (secondHandler) {\n        secondHandler(reason);\n    } else {\n        const processManager = new process.ProcessManager();\n        processManager.exit(0);\n    }\n};\n\nexport function setSecondErrorHandler() {\n    secondHandler = errorManager.setDefaultErrorHandler(secondErrorHandler);\n    console.info('Registered Second Error Handler');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引入头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { setFirstErrorHandler } from './FirstErrorHandler';\nimport { setSecondErrorHandler } from './SecondErrorHandler';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新增错误处理器责任链模式构造函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function testErrorHandlers() {\n  setFirstErrorHandler();\n  setSecondErrorHandler();\n  throw new Error('Test uncaught exception!');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主组件通过按钮触发测试，注册两个处理器并抛错验证处理链。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Button('错误处理器责任链模式场景').onClick(()=>{\n  testErrorHandlers();\n}).position({x:50, y:350});\n"
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
855123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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