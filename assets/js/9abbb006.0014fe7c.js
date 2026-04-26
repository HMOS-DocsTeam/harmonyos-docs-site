"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["437290"], {
476332(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_nearlink_kit_guide_nearlink_send_advertising_nearlink_send_advertising_md_9ab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-nearlink-kit-guide-nearlink-send-advertising-nearlink-send-advertising-md-9ab.json
var site_docs_system_network_nearlink_kit_guide_nearlink_send_advertising_nearlink_send_advertising_md_9ab_namespaceObject = JSON.parse('{"id":"system-network/nearlink-kit-guide/nearlink-send-advertising/nearlink-send-advertising","title":"发送星闪广播","description":"场景介绍","source":"@site/docs/system-network/nearlink-kit-guide/nearlink-send-advertising/nearlink-send-advertising.md","sourceDirName":"system-network/nearlink-kit-guide/nearlink-send-advertising","slug":"/system-network/nearlink-kit-guide/nearlink-send-advertising/","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-send-advertising/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"发送星闪广播","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-send-advertising","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询星闪开关状态","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-getstate/"},"next":{"title":"发起星闪扫描","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-start-scan/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/nearlink-kit-guide/nearlink-send-advertising/nearlink-send-advertising.md


const frontMatter = {
	title: '发送星闪广播',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-send-advertising',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '发送星闪广播';

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
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "发送星闪广播",
        children: "发送星闪广播"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送星闪广播，广播数据可以被支持星闪能力的中心设备扫描到。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-advertising/nearlink-advertising#startadvertising",
              children: "startAdvertising"
            }), "(advertisingParams: AdvertisingParams): Promise<number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动星闪广播。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-advertising/nearlink-advertising#stopadvertising",
              children: "stopAdvertising"
            }), "(advertisingId: number): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止星闪广播。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-advertising/nearlink-advertising#on-advertisingstatechange",
              children: "on"
            }), "(type: 'advertisingStateChange', callback: Callback<AdvertisingStateChangeInfo>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅星闪广播状态变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-advertising/nearlink-advertising#off-advertisingstatechange",
              children: "off"
            }), "(type: 'advertisingStateChange', callback?: Callback<AdvertisingStateChangeInfo>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅星闪广播状态变化事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { advertising } from '@kit.NearLinkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅星闪广播状态变化事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let onReceiveEvent:(data: advertising.AdvertisingStateChangeInfo) => void = (data: advertising.AdvertisingStateChangeInfo) => {\n  console.info('advertisingId:'+ data.advertisingId);\n  console.info('advertisingState:'+ data.state);\n}\ntry {\n  advertising.on('advertisingStateChange', onReceiveEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造用户需要的广播参数及数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let manufactureValueBuffer = new Uint8Array(4);\nmanufactureValueBuffer[0] = 1;\nmanufactureValueBuffer[1] = 2;\nmanufactureValueBuffer[2] = 3;\nmanufactureValueBuffer[3] = 4;\nlet serviceValueBuffer = new Uint8Array(4);\nserviceValueBuffer[0] = 4;\nserviceValueBuffer[1] = 6;\nserviceValueBuffer[2] = 7;\nserviceValueBuffer[3] = 8;\nconsole.info('manufactureValueBuffer = '+ JSON.stringify(manufactureValueBuffer));\nconsole.info('serviceValueBuffer = '+ JSON.stringify(serviceValueBuffer));\nlet setting: advertising.AdvertisingSettings = {\n  interval:5000,\n  power:advertising.TxPowerMode.ADV_TX_POWER_LOW\n};\nlet manufactureDataUnit: advertising.ManufacturerData = {\n  manufacturerId:4567,\n  manufacturerData:manufactureValueBuffer.buffer\n};\nlet serviceDataUnit: advertising.ServiceData = {\n  serviceUuid:\"37bea880-fc70-11ea-b720-000000001234\",\n  serviceData:serviceValueBuffer.buffer\n};\nlet advData: advertising.AdvertisingData = {\n  serviceUuids:[\"37bea880-fc70-11ea-b720-000000001234\"],\n  manufacturerData:[manufactureDataUnit],\n  serviceData:[serviceDataUnit]\n};\nlet advertisingParams: advertising.AdvertisingParams = {\n  advertisingSettings: setting,\n  advertisingData: advData\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启星闪广播，返回advertisingId表示当前广播索引。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let advId = -1;\ntry {\n  advertising.startAdvertising(advertisingParams).then((advertisingId:number) => {\n    advId = advertisingId;\n    console.info('advertising id:'+ JSON.stringify(advId));\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止星闪广播，其中advId是步骤4开启广播后返回的advertisingId。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  advertising.stopAdvertising(advId).then(() => {\n      console.info(\"stop advertising success\");\n    }).catch ((err: BusinessError) => {\n      console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n    });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅星闪广播状态变化事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  advertising.off('advertisingStateChange', onReceiveEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["星闪广播场景可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/nearlink-kit_-sample-code",
        children: "星闪示例代码"
      }), "，entry/src/main/ets/pages/MainPage.ets中的实现方法。"]
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