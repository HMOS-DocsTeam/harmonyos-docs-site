"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["33068"], {
733329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_streamreq_remote_communication_syncstreamreq_remote_communication_syncstreamreq_md_962_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-streamreq-remote-communication-syncstreamreq-remote-communication-syncstreamreq-md-962.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_streamreq_remote_communication_syncstreamreq_remote_communication_syncstreamreq_md_962_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-streamreq/remote-communication-syncstreamreq/remote-communication-syncstreamreq","title":"流式传输","description":"场景介绍","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-streamreq/remote-communication-syncstreamreq/remote-communication-syncstreamreq.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-streamreq/remote-communication-syncstreamreq","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-streamreq/remote-communication-syncstreamreq/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-streamreq/remote-communication-syncstreamreq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"流式传输","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-syncstreamreq","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"实现请求暂停、恢复与断点续传","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-pauseresume/"},"next":{"title":"基于TracingConfiguration实现性能维测","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-tpms/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-streamreq/remote-communication-syncstreamreq/remote-communication-syncstreamreq.md


const frontMatter = {
	title: '流式传输',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-syncstreamreq',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '流式传输';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "基于缓冲区的流式传输",
  "id": "基于缓冲区的流式传输",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 3
}, {
  "value": "基于回调函数的流式传输",
  "id": "基于回调函数的流式传输",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-1",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-1",
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
        id: "流式传输",
        children: "流式传输"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP流式传输（Streaming）允许客户端与服务器之间以流的形式进行数据交互，而无需等待所有数据准备完毕，能显著提升用户体验。流式传输适用于大文件的上传下载、直播、实时数据更新等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流式传输能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基于缓冲区的流式传输",
      children: "基于缓冲区的流式传输"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#networkinputqueue",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "write(buffer: string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArrayBuffer): void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "read(buffer: ArrayBuffer): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从文件中读取数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "利用rcp.NetworkInputQueue创建同步写队列对象实现同步写功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const testNetworkInputQueue = () => {\n  // 创建同步写队列对象\n  const networkInputQueue = new rcp.NetworkInputQueue();\n  // 模拟文件通过同步读写流上传场景，将文件写入到同步写队列 networkInputQueue 中\n  let counter = 0;\n  const interval = setInterval(() => {\n    // 添加数据到同步写队列\n    networkInputQueue.write('a counter ' + counter++);\n    console.info(`networkInputQueue write`);\n    if (counter === 10) {\n      clearInterval(interval);\n      // 关闭同步写队列\n      networkInputQueue.close();\n    }\n  }, 1000);\n  try {\n    // 创建session\n    const session = rcp.createSession();\n    console.info(`Post start.`);\n    // 发起请求，相关数据在写入队列 networkInputQueue 的同时会同步进行上传\n    session.post('https://httpbin.org/anything', networkInputQueue).then((response) => {\n      // 结果状态码\n      console.info(`Response status code is: ${response.statusCode}`);\n      if (response && response.statusCode === 200) {\n        console.info(`Post succeeded! response: ${response.toString()}`);\n      } else {\n        console.error(`Post failed.`);\n      }\n      session.close();\n    }).catch((err: BusinessError) => {\n      console.error(`Post error code is ${err.code}, error data is ${err.data}`);\n      session.close();\n    });\n  } catch (err) {\n    console.error(`create session error code is ${err.code}, error data is ${err.data}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "利用rcp.NetworkOutputQueue创建同步读队列对象实现同步读功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const testNetworkOutputQueue = () => {\n  // 创建同步读队列对象\n  const networkOutputQueue = new rcp.NetworkOutputQueue();\n  // 创建session\n  try {\n    const session = rcp.createSession();\n    // 配置请求流数据size\n    const numOfChunks = 10;\n    const chunkLength = 1000;\n    const totalBytes = numOfChunks * chunkLength;\n    // 发起请求，响应数据会暂存在同步读队列networkOutputQueue中\n    session.get('https://httpbin.org/bytes/' + totalBytes.toString(), networkOutputQueue).then((response) => {\n      if (response && response.statusCode === 200) {\n        console.info(`get bytes succeeded.`);\n      } else {\n        console.error(`get bytes failed.`);\n      }\n      session.close();\n    }).catch((err: BusinessError) => {\n      console.error(`get bytes error code is ${err.code}, error data is ${err.data}`);\n      session.close();\n    });\n    // 在需要使用响应数据时，可按需从 `networkOutputQueue` 队列中循环读取，例如每隔 1000 毫秒读取一次，每次读取 1000 个字节的数据\n    let totalGetLength = 0;\n    const intervalId = setInterval(() => {\n      // 读取数据后，开发者需根据具体业务场景进行后续处理\n      const chunk = networkOutputQueue.read(chunkLength);\n      totalGetLength += chunk.byteLength;\n      console.info(`get bytes totalGetLength: ${totalGetLength}`);\n      // 数据读取完成后，清除计时器\n      if (totalGetLength === totalBytes) {\n        clearInterval(intervalId);\n        console.info(`get bytes finished.`);\n      }\n    }, 1000);\n  } catch (err) {\n    console.error(`create session error code is ${err.code}, error data is ${err.data}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基于回调函数的流式传输",
      children: "基于回调函数的流式传输"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-1",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#uploadfromstream",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["uploadFromStream(url: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#urlorstring",
              children: "URLOrString"
            }), ", uploadFrom: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#uploadfromstream-2",
              children: "UploadFromStream"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#response",
              children: "Response"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从流中上传。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["downloadToStream(url: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#urlorstring",
              children: "URLOrString"
            }), ", downloadTo: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#downloadtostream-2",
              children: "DownloadToStream"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#response",
              children: "Response"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载到流中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-1",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义FdReadStream实现rcp.ReadStream接口，从流中读取数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class FdReadStream implements rcp.ReadStream {\n  readonly fd: number;\n\n  constructor(fd: number) {\n    this.fd = fd;\n  }\n\n  async read(buffer: ArrayBuffer): Promise<number> {\n    return fileIo.read(this.fd, buffer);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用uploadFromStream接口以流的形式上传数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export function testUploadFromStream(uploadFilePath: string) {\n  try {\n    // 创建session\n    const session = rcp.createSession();\n    // 根据传入的上传文件的路径打开文件\n    const file = fileIo.openSync(uploadFilePath, fileIo.OpenMode.READ_ONLY);\n    // 文件读取流\n    const fileStream = new rcp.UploadFromStream(new FdReadStream(file.fd));\n    // 以流的形式上传数据\n    session.uploadFromStream('https://httpbin.org/anything', fileStream).then((resp) => {\n      console.info(`testUploadFromStream response: ${JSON.stringify(resp)}`);\n      if (resp && resp.statusCode === 200) {\n        console.info(`testUploadFromStream succeeded.`);\n      } else {\n        console.error(`testUploadFromStream failed.`);\n      }\n      // 完成后关闭文件和session\n      fileIo.closeSync(file.fd);\n      session.close();\n    }).catch((err: BusinessError) => {\n      console.error(`testUploadFromStream error code is ${err.code}, error data is ${err.data}`);\n      fileIo.closeSync(file.fd);\n      session.close();\n    });\n  } catch (err) {\n    console.error(`testUploadFromStream error code is ${err.code}, error data is ${err.data}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义FdWriteStream实现WriteStream接口，将数据写入流中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class FdWriteStream implements rcp.WriteStream {\n  readonly fd: number;\n\n  constructor(fd: number) {\n    this.fd = fd;\n  }\n\n  async write(buffer: ArrayBuffer): Promise<number | void> {\n    return fileIo.write(this.fd, buffer);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用downloadToStream接口，以流的形式下载数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export function testDownloadToStream(downloadToPath: string) {\n  try {\n    // 创建session\n    const session = rcp.createSession();\n    // 根据传入的下载文件保存路径打开文件\n    const file = fileIo.openSync(downloadToPath, fileIo.OpenMode.CREATE | fileIo.OpenMode.WRITE_ONLY);\n    // 文件写入流\n    const fileStream = { kind: 'stream', stream: new FdWriteStream(file.fd) } as rcp.DownloadToStream\n    // 以流的形式下载数据\n    session.downloadToStream('https://httpbin.org/bytes/', fileStream)\n      .then((resp) => {\n        console.info(`testDownloadToStream response: ${JSON.stringify(resp)}`);\n        if (resp && resp.statusCode === 200) {\n          console.info(`testDownloadToStream succeeded.`);\n        } else {\n          console.error(`testDownloadToStream failed.`);\n        }\n        // 完成后关闭文件和session\n        fileIo.close(file.fd);\n        session.close();\n      })\n      .catch((err: BusinessError) => {\n        console.error(`testDownloadToStream error code is ${err.code}, error data is ${err.data}`);\n        fileIo.close(file.fd);\n        session.close();\n      })\n  } catch (err) {\n    console.error(`testDownloadToStream error code is ${err.code}, error data is ${err.data}`);\n  }\n}\n"
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