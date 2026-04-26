"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["39783"], {
632744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_nearlink_kit_guide_nearlink_ssap_connect_nearlink_ssap_client_connect_nearlink_ssap_client_connect_md_338_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-nearlink-kit-guide-nearlink-ssap-connect-nearlink-ssap-client-connect-nearlink-ssap-client-connect-md-338.json
var site_docs_system_network_nearlink_kit_guide_nearlink_ssap_connect_nearlink_ssap_client_connect_nearlink_ssap_client_connect_md_338_namespaceObject = JSON.parse('{"id":"system-network/nearlink-kit-guide/nearlink-ssap-connect/nearlink-ssap-client-connect/nearlink-ssap-client-connect","title":"SSAP客户端","description":"提供SSAP（SparkLink Service Access Protocol）客户端相关的连接、数据传输和服务操作功能。","source":"@site/docs/system-network/nearlink-kit-guide/nearlink-ssap-connect/nearlink-ssap-client-connect/nearlink-ssap-client-connect.md","sourceDirName":"system-network/nearlink-kit-guide/nearlink-ssap-connect/nearlink-ssap-client-connect","slug":"/system-network/nearlink-kit-guide/nearlink-ssap-connect/nearlink-ssap-client-connect/","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-ssap-connect/nearlink-ssap-client-connect/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"SSAP客户端","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-ssap-client-connect","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"SSAP服务端","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-ssap-connect/nearlink-ssap-server-connect/"},"next":{"title":"使用星闪传输数据","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-start-data-transfer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/nearlink-kit-guide/nearlink-ssap-connect/nearlink-ssap-client-connect/nearlink-ssap-client-connect.md


const frontMatter = {
	title: 'SSAP客户端',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-ssap-client-connect',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'SSAP客户端';

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
        id: "ssap客户端",
        children: "SSAP客户端"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(557447)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供SSAP（SparkLink Service Access Protocol）客户端相关的连接、数据传输和服务操作功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供设备作为客户端的能力，客户端可连接服务端进行数据传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#createclient",
              children: "createClient"
            }), "(address: string): Client"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建ssap客户端实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#connect",
              children: "connect"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向服务端发起连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#getservices",
              children: "getServices"
            }), "(): Promise<Array<Service>>;"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取服务端支持的服务列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#readproperty",
              children: "readProperty"
            }), "(property: Property): Promise<Property>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取服务端property。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#writeproperty",
              children: "writeProperty"
            }), "(property: Property, writeType: PropertyWriteType): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "写入服务端property。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#setpropertynotification",
              children: "setPropertyNotification"
            }), "(property: Property, enable: boolean): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用/禁用某个property变化的通知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#on-propertychange",
              children: "on"
            }), "(type: 'propertyChange', callback: Callback<Property>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅property变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#on-connectionstatechange",
              children: "on"
            }), "(type: 'connectionStateChange', callback: Callback<ConnectionChangeState>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅连接状态变化事件。"
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
            children: "import { ssap } from '@kit.NearLinkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建ssap客户端实例。其中参数addr是通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/nearlink-kit-guide/nearlink-start-scan",
            children: "扫描流程"
          }), "获取的远端设备地址。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let addr: string = '00:11:22:33:AA:FF'; // 扫描获取到的远端设备地址\nlet client: ssap.Client;\ntry {\n  client = ssap.createClient(addr);\n  console.info('client: ' + JSON.stringify(client));\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅连接状态变化事件。其中client对象在步骤2创建，后续步骤中使用的client对象也是一样，不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let onReceiveConnectionChangeEvent:(data: ssap.ConnectionChangeState) => void = (data: ssap.ConnectionChangeState) => {\n  console.info('data:'+ JSON.stringify(data));\n}\ntry {\n  client.on('connectionStateChange', onReceiveConnectionChangeEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅Property变化事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let onReceivePropertyChangeEvent:(data: ssap.Property) => void = (data: ssap.Property) => {\n  console.info('data:'+ JSON.stringify(data));\n}\ntry {\n  client.on('propertyChange', onReceivePropertyChangeEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向服务端发起连接。连接成功后会收到步骤3中订阅的连接状态变化的回调，之后可以进行数据交互。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  client.connect().then(() => {\n    console.info(\"connect success\");\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取服务端支持的服务列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  client.getServices().then((result: Array<ssap.Service>) => {\n    console.info('getServices successfully:' + JSON.stringify(result));\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["读取指定服务的Property值，参数property中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property",
            children: "serviceUuid"
          }), "以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property",
            children: "propertyUuid"
          }), "通过步骤6获取。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 创建property,实际开发时需要通过getServices接口从服务端获取\n  let arrayBufferC = new ArrayBuffer(1);\n  let properV = new Uint8Array(arrayBufferC);\n  properV[0] = 1;\n  let property: ssap.Property = {\n    serviceUuid:'37bea880-fc70-11ea-b720-000000004386',\n    propertyUuid: '37bea880-fc70-11ea-b720-000000001234',\n    value: arrayBufferC\n  };\n  client.readProperty(property).then((result: ssap.Property) => {\n    console.info('readProperty successfully:' + JSON.stringify(result));\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["写入指定服务的Property值，参数property中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property",
            children: "serviceUuid"
          }), "以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property",
            children: "propertyUuid"
          }), "通过步骤6获取。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let arrayBufferC = new ArrayBuffer(1);\n  // 期望写入的property值\n  let properV = new Uint8Array(arrayBufferC);\n  properV[0] = 1;\n  let property: ssap.Property = {\n    serviceUuid:'37bea880-fc70-11ea-b720-000000004386',\n    propertyUuid: '37bea880-fc70-11ea-b720-000000001234',\n    value: arrayBufferC\n  };\n  client.writeProperty(property, ssap.PropertyWriteType.WRITE_NO_RESPONSE).then(() => {\n    console.info('writeProperty success');\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置支持Property变化通知，参数property中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property",
            children: "serviceUuid"
          }), "以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-ssap/nearlink-ssap#property",
            children: "propertyUuid"
          }), "通过步骤6获取。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "之后如果服务端Property值发生变化，则客户端通过步骤4订阅的事件接收新数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let arrayBufferC = new ArrayBuffer(1);\n  let properV = new Uint8Array(arrayBufferC);\n  properV[0] = 1;\n  let property: ssap.Property = {\n    serviceUuid:'37bea880-fc70-11ea-b720-000000004386',\n    propertyUuid: '37bea880-fc70-11ea-b720-000000001234',\n    value: arrayBufferC\n  };\n  client.setPropertyNotification(property, true).then(() => {\n    console.info('setPropertyNotification success');\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SSAP客户端功能可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/nearlink-kit_-sample-code",
        children: "星闪示例代码"
      }), "，entry/src/main/ets/pages/SsapClientPage.ets中的实现方法。"]
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
557447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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