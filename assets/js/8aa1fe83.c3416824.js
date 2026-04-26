"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["115597"], {
33741(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_multimodal_awareness_kit_stationary_guidelines_stationary_guidelines_md_8aa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-multimodal-awareness-kit-stationary-guidelines-stationary-guidelines-md-8aa.json
var site_docs_system_hardware_multimodal_awareness_kit_stationary_guidelines_stationary_guidelines_md_8aa_namespaceObject = JSON.parse('{"id":"system-hardware/multimodal-awareness-kit/stationary-guidelines/stationary-guidelines","title":"Stationary开发指导","description":"场景介绍","source":"@site/docs/system-hardware/multimodal-awareness-kit/stationary-guidelines/stationary-guidelines.md","sourceDirName":"system-hardware/multimodal-awareness-kit/stationary-guidelines","slug":"/system-hardware/multimodal-awareness-kit/stationary-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/stationary-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Stationary开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/stationary-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Multimodal Awareness Kit简介","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/multimodalawareness-kit-intro/"},"next":{"title":"获取用户动作开发指导","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/motion-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/multimodal-awareness-kit/stationary-guidelines/stationary-guidelines.md


const frontMatter = {
	title: 'Stationary开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/stationary-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = 'Stationary开发指导';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "设备状态类型参数说明",
  "id": "设备状态类型参数说明",
  "level": 2
}, {
  "value": "订阅设备状态事件参数说明",
  "id": "订阅设备状态事件参数说明",
  "level": 2
}, {
  "value": "返回设备状态参数说明",
  "id": "返回设备状态参数说明",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "stationary开发指导",
        children: "Stationary开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要获取当前设备状态时，可以调用Stationary模块，例如：需要判断当前设备处于绝对静止状态或者相对静止状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/multimodal-awareness-api/multimodal-awareness-arkts/js-apis-stationary/js-apis-stationary",
        children: "@ohos.stationary (设备状态感知框架)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备状态类型参数说明",
      children: "设备状态类型参数说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "still"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绝对静止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "relativeStill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对静止。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅设备状态事件参数说明",
      children: "订阅设备状态事件参数说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "变量"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅进入事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅退出事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENTER_EXIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅进入和退出事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回设备状态参数说明",
      children: "返回设备状态参数说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "变量"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回进入状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回退出状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(activity: ActivityType, event: ActivityEvent, reportLatencyNs: number, callback: Callback<ActivityResponse>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅设备状态，结果通过callback返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "once(activity: ActivityType, callback: Callback<ActivityResponse>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询设备状态，结果通过callback返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(activity: ActivityType, event: ActivityEvent, callback?: Callback<ActivityResponse>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅设备状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备需要支持加速度传感器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前只提供了算法框架，api接口测试框架的调用返回结果为:data={\"type\":3,\"value\":-1};"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如需相对静止和绝对静止能力，则具体算法需要开发者自己在device_status/libs/src/algorithm实现，可参考案例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "algoPara_.resultantAcc =\n   sqrt((algoPara_.x * algoPara_.x) + (algoPara_.y * algoPara_.y) + (algoPara_.z * algoPara_.z));\nif ((algoPara_.resultantAcc > RESULTANT_ACC_LOW_THRHD) && (algoPara_.resultantAcc < RESULTANT_ACC_UP_THRHD)) {\n   if (state_ == STILL) {\n      return;\n   }\n   counter_--;\n   if (counter_ == 0) {\n      counter_ = COUNTER_THRESHOLD;\n      UpdateStateAndReport(VALUE_ENTER, STILL, TYPE_ABSOLUTE_STILL);\n   }\n} else {\n   counter_ = COUNTER_THRESHOLD;\n   if (state_ == UNSTILL) {\n      return;\n   }\n   UpdateStateAndReport(VALUE_EXIT, UNSTILL, TYPE_ABSOLUTE_STILL);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅绝对静止的进入事件，1秒上报一次。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { stationary } from '@kit.MultimodalAwarenessKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet reportLatencyNs = 1000000000; // 单位：纳秒\ntry {\n   stationary.on('still', stationary.ActivityEvent.ENTER, reportLatencyNs, (data) => {\n      console.info('data=' + JSON.stringify(data));\n   })\n} catch (error) {\n   let message = (error as BusinessError).message;\n   console.error('stationary on failed:' + message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询绝对静止状态的进入事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { stationary } from '@kit.MultimodalAwarenessKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n   stationary.once('still', (data) => {\n      console.info('data=' + JSON.stringify(data));\n   })\n} catch (error) {\n   let message = (error as BusinessError).message;\n   console.error('stationary once failed:' + message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅绝对静止状态的进入事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { stationary } from '@kit.MultimodalAwarenessKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n   stationary.off('still', stationary.ActivityEvent.ENTER, (data) => {\n      console.info('data=' + JSON.stringify(data));\n   })\n} catch (error) {\n   let message = (error as BusinessError).message;\n   console.error('stationary off failed:' + message);\n}\n"
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