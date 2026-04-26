"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["950743"], {
603004(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_nearlink_kit_guide_nearlink_start_data_transfer_nearlink_start_data_transfer_md_3ad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-nearlink-kit-guide-nearlink-start-data-transfer-nearlink-start-data-transfer-md-3ad.json
var site_docs_system_network_nearlink_kit_guide_nearlink_start_data_transfer_nearlink_start_data_transfer_md_3ad_namespaceObject = JSON.parse('{"id":"system-network/nearlink-kit-guide/nearlink-start-data-transfer/nearlink-start-data-transfer","title":"使用星闪传输数据","description":"提供星闪数传相关的端口通道建立和数据传输等功能，同一设备可以同时承担数据发送端和接收端的角色。","source":"@site/docs/system-network/nearlink-kit-guide/nearlink-start-data-transfer/nearlink-start-data-transfer.md","sourceDirName":"system-network/nearlink-kit-guide/nearlink-start-data-transfer","slug":"/system-network/nearlink-kit-guide/nearlink-start-data-transfer/","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-start-data-transfer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"使用星闪传输数据","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-start-data-transfer","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"SSAP客户端","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-ssap-connect/nearlink-ssap-client-connect/"},"next":{"title":"NearLink Kit常见问题","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/nearlink-kit-guide/nearlink-start-data-transfer/nearlink-start-data-transfer.md


const frontMatter = {
	title: '使用星闪传输数据',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-start-data-transfer',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '使用星闪传输数据';

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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "使用星闪传输数据",
        children: "使用星闪传输数据"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供星闪数传相关的端口通道建立和数据传输等功能，同一设备可以同时承担数据发送端和接收端的角色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)开始支持星闪数据传输，包括端口注册、建立连接、读写数据等能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "星闪设备间已建立起逻辑链路基础上，支持应用基于Nearlink技术进行设备间的数据传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487428)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["数据传输通道不保证链路加密。如需加密数传，需先进行配对流程，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-remote-device/nearlink-remote-device#startpairing",
          children: "startPairing"
        }), "接口发起。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["链路是否加密可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-remote-device/nearlink-remote-device#getacbstate",
          children: "getAcbState"
        }), "接口查询，ENCRYPTED状态表示链路已加密。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-data-transfer-api/nearlink-data-transfer-api#createport",
              children: "createPort"
            }), "(uuid: string): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册端口服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-data-transfer-api/nearlink-data-transfer-api#connect",
              children: "connect"
            }), "(params: ConnectionParams): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接远端设备，建立端口通道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-data-transfer-api/nearlink-data-transfer-api#writedata",
              children: "writeData"
            }), "(params: DataParams): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过设备地址和UUID向远端设备发数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-data-transfer-api/nearlink-data-transfer-api#onconnectionstatechanged",
              children: "on"
            }), "(type: 'connectionStateChanged', callback: Callback<ConnectionResult>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅端口通道连接状态变更事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-data-transfer-api/nearlink-data-transfer-api#onreaddata",
              children: "on"
            }), "(type: 'readData', callback: Callback<DataParams>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅端口通道数据接收事件。"
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
            children: "import { dataTransfer } from '@kit.NearLinkKit';\nimport { remoteDevice } from '@kit.NearLinkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与远端设备配对加密（可选，如需加密数传，则需执行此步骤）。该步骤执行后，将依据本端与远端设备的输入输出能力标识弹出不同类型的弹窗，需使用者进一步确认。目前支持免输入配对弹窗、数字比较弹窗与通行码鉴权弹窗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址\nlet device: remoteDevice.RemoteDevice;\ntry {\n  device = remoteDevice.createRemoteDevice(addr);\n  device.startPairing().then(()=>{\n    console.info('start pairing success');\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册端口通道，发送端和接收端均需注册，并需保证发送端和接收端UUID相同。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let serviceUuid: string = 'FFFFFFFF-FC70-11EA-B720-000078951234'; // 星闪服务UUID，此处举例为自定义服务UUID\ntry {\n  dataTransfer.createPort(serviceUuid);\n  console.info('create port success');\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅端口通道连接状态变更事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let onReceiveConnectionStateEvent:(data: dataTransfer.ConnectionResult) => void = (data: dataTransfer.ConnectionResult) => {\n  console.info('data: ' + JSON.stringify(data));\n}\ntry {\n  dataTransfer.on('connectionStateChanged', onReceiveConnectionStateEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅端口通道数据接收事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let onReceiveReadDataEvent:(data: dataTransfer.DataParams) => void = (data: dataTransfer.DataParams) => {\n  console.info('data: ' + JSON.stringify(data));\n}\ntry {\n  dataTransfer.on('readData', onReceiveReadDataEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接远端设备，建立端口通道。其中UUID要与步骤3中注册的UUID相同。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构造端口通道建立的参数\nlet connectionParams:dataTransfer.ConnectionParams = {\n  address: addr, // 扫描获取到的远端设备地址\n  uuid: serviceUuid, // 星闪服务UUID\n  mtu: 1024, // 期望发送数据包的字节大小,可选参数\n};\ntry {\n  dataTransfer.connect(connectionParams).then(()=>{\n    console.info('connect success');\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过设备地址和UUID向远端设备发数据。其中UUID要与步骤3中注册的UUID相同。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构造发送数据参数\nlet transferValueBuffer: Uint8Array = new Uint8Array(4);\ntransferValueBuffer[0] = 1;\ntransferValueBuffer[1] = 2;\ntransferValueBuffer[2] = 3;\ntransferValueBuffer[3] = 4;\nlet dataParams: dataTransfer.DataParams = {\n  address: addr, // 星闪远端设备地址\n  uuid: serviceUuid, // 星闪服务UUID\n  data: transferValueBuffer.buffer, // 星闪设备间传输的数据\n};\ntry {\n  dataTransfer.writeData(dataParams).then(() => {\n    console.info('writeData success');\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
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
487428(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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