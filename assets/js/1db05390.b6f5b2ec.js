"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["798330"], {
583253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_common_basic_arkts_js_apis_timer_js_apis_timer_md_1db_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-common-basic-arkts-js-apis-timer-js-apis-timer-md-1db.json
var site_docs_ref_common_basic_arkts_js_apis_timer_js_apis_timer_md_1db_namespaceObject = JSON.parse('{"id":"common-basic-arkts/js-apis-timer/js-apis-timer","title":"Timer (定时器)","description":"本模块提供基础的定时器能力，支持按照指定的时间执行对应函数。","source":"@site/docs-ref/common-basic-arkts/js-apis-timer/js-apis-timer.md","sourceDirName":"common-basic-arkts/js-apis-timer","slug":"/common-basic-arkts/js-apis-timer/js-apis-timer","permalink":"/harmonyos-docs-site/ref/common-basic-arkts/js-apis-timer/js-apis-timer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Timer (定时器)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer","kit":"公共基础能力","last_updated":"2026-04-22","slug":"js-apis-timer"},"sidebar":"ref","previous":{"title":"SysCap (系统能力)","permalink":"/harmonyos-docs-site/ref/common-basic-arkts/js-apis-syscap/js-apis-syscap"},"next":{"title":"Init","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-module/init/init"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/common-basic-arkts/js-apis-timer/js-apis-timer.md


const frontMatter = {
	title: 'Timer (定时器)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer',
	kit: '公共基础能力',
	last_updated: '2026-04-22',
	slug: 'js-apis-timer'
};
const contentTitle = 'Timer (定时器)';

const assets = {

};



const toc = [{
  "value": "setTimeout",
  "id": "settimeout",
  "level": 2
}, {
  "value": "clearTimeout",
  "id": "cleartimeout",
  "level": 2
}, {
  "value": "setInterval",
  "id": "setinterval",
  "level": 2
}, {
  "value": "clearInterval",
  "id": "clearinterval",
  "level": 2
}, {
  "value": "其他说明",
  "id": "其他说明",
  "level": 2
}, {
  "value": "超时延迟",
  "id": "超时延迟",
  "level": 3
}, {
  "value": "最大延迟值",
  "id": "最大延迟值",
  "level": 3
}, {
  "value": "定时器冻结",
  "id": "定时器冻结",
  "level": 3
}, {
  "value": "定时器ID",
  "id": "定时器id",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "timer-定时器",
        children: "Timer (定时器)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供基础的定时器能力，支持按照指定的时间执行对应函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(988371)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在UI界面中使用定时器时，定时器的触发机制会受UI底层原理管控。如果UI界面退到后台，定时器会被冻结。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settimeout",
      children: "setTimeout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置一个定时器，该定时器在定时器到期后执行一个函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该定时器在回调被执行后自动删除，或使用clearTimeout()接口手动删除。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
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
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["延迟的毫秒数，函数的调用会在该延迟之后发生。建议传入整数，若传入小数，会被向下取整。  如果省略该参数，delay取默认值0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意"
              })
            }), "：  1. 该计时器非精准计时器，实际延迟可能会与预期延迟存在误差。  2. 如果值小于1，会被默认取0。  3. delay值受系统限制，超出2^31 - 1时会溢出，delay值为0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "...arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "附加参数，仅当handler类型为Function时生效，作为参数传递给handler。  arguments参数数量少于handler函数参数数量时，未被arguments覆盖的参数会被设为undefined。  arguments参数数量多于handler函数参数数量时，多余的arguments参数会被忽略，但可通过handler函数内部的arguments对象访问。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该定时器的ID，定时器ID为进程共享，是从0开始顺序增加的整数，无重复值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1"
        })
      }), "：不带参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "setTimeout(() => {\n  console.info('delay 1s');\n}, 1000);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2"
        })
      }), "：带参数传递给函数(handler为function时参数与arguments参数个数一致)。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function myFunction(param1: string, param2: string) {\n  console.info(param1, param2);\n}\nsetTimeout(myFunction, 1000, 'Hello', 'World');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例3"
        })
      }), "：带参数传递给函数(handler为function时参数比arguments参数个数少)。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function myFunction(a: string, b: string) {\n  console.info(a);\n  // Output: hello\n  console.info(b);\n  // Output: world\n  console.info(JSON.stringify(arguments));\n  // Output: {\"0\":\"hello\",\"1\":\"world\",\"2\":\"c++\",\"3\":\"js\"}\n}\nsetTimeout(myFunction, 1000, 'hello', 'world', 'C++', 'js');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例4"
        })
      }), "：带参数传递给函数(handler为function时参数比arguments参数个数多)。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function myFunction(a: string, b: string) {\n  console.info(a);\n  // Output: hello\n  console.info(b);\n  // Output: undefined\n  console.info(JSON.stringify(arguments));\n  // Output: {\"0\":\"hello\"}\n}\nsetTimeout(myFunction, 1000, 'hello');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cleartimeout",
      children: "clearTimeout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clearTimeout(timeoutID?: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可取消通过调用setTimeout()建立的定时器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定时器对象保存在创建它的线程内，删除定时器时需要在该线程中进行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
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
            children: "timeoutID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消定时器的ID，需要与调用setTimeout()设置定时器的返回值一致。如果省略该参数或指定的定时器ID不存在时，不会取消任何定时任务。"
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
        children: "let timeoutID = setTimeout(() => {\n  console.info('do after 1s delay.');\n}, 1000);\nclearTimeout(timeoutID);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setinterval",
      children: "setInterval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setInterval(handler: Function | string, delay: number, ...arguments: any[]): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重复调用一个函数，在每次调用之间具有固定的时间延迟。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除该定时器需手动调用clearInterval接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
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
            children: "handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["延迟的毫秒数，函数的调用会在该延迟之后发生。建议传入整数，若传入小数，会被向下取整。  如果省略该参数，delay取默认值0。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意"
              })
            }), "：  1. 该计时器非精准计时器，实际延迟可能会与预期延迟存在误差。  2. 如果值小于1，将被默认设置为0。  3. delay值受系统限制，超出2^31 - 1时会溢出，delay值为0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "...arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "any[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "附加参数，仅当handler类型为Function时生效，作为参数传递给handler。  arguments参数数量少于handler函数参数数量时，未被arguments覆盖的参数会被设为undefined。  arguments参数数量多于handler函数参数数量时，多余的arguments参数会被忽略，但可通过handler函数内部的arguments对象访问。"
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该定时器的ID，定时器ID为进程共享，是从0开始顺序增加的整数，无重复值。"
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
        children: "setInterval(() => {\n  console.info('do every 1s.');\n}, 1000);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clearinterval",
      children: "clearInterval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "clearInterval(intervalID?: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可取消通过setInterval()设置的重复定时任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定时器对象保存在创建它的线程内，删除定时器时需要在该线程中进行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
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
            children: "intervalID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要取消的重复定时器的ID，需要与调用setInterval设置重复定时器的返回值一致。如果省略该参数或指定的重复定时器ID不存在时，不会取消任何定时任务。"
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
        children: "let intervalID = setInterval(() => {\n  console.info('do every 1s.');\n}, 1000);\nclearInterval(intervalID);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "其他说明",
      children: "其他说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "超时延迟",
      children: "超时延迟"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果页面正忙于其他任务，超时可能比预期晚。setTimeout的函数或代码片段在下一个时间周期执行。例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo() {\n  console.info('OH test foo is called')\n}\nsetTimeout(foo, 0);\nconsole.info('After OH test setTimeout')\n\n// output\nAfter OH test setTimeout\nOH test foo is called\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这是因为，虽然setTimeout()设置了0ms的延迟，但任务不会立即执行，而是被放入队列中，等待下一次事件循环。当前代码执行完毕后，队列中的函数才会被执行，因此最终的执行顺序可能与预期不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "最大延迟值",
      children: "最大延迟值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定时器内部使用32位带符号整数存储延时。因此，当延时超过2147483647毫秒（约24.8天）时，定时器会溢出并立即执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定时器冻结",
      children: "定时器冻结"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定时器的触发受底层任务调度。当前应用被切换到后台后，定时器到期不会触发。应用被重新拉起到前台后，到期定时器会按序触发。可以使用trace查看进程是否还存在调度，如果没有调度，定时器会被冻结。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定时器id",
      children: "定时器ID"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTimeout()和setInterval()使用相同的ID池，因此技术上可以互相调用clearTimeout()和clearInterval()来清除。然而，为了提高代码的可读性和可维护性，建议分别使用各自对应的清除方法，以避免混淆。"
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
988371(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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