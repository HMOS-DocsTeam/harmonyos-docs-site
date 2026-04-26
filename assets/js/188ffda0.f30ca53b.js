"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["171564"], {
479450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_filetransfer_remote_communication_pauseresume_remote_communication_pauseresume_md_188_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-filetransfer-remote-communication-pauseresume-remote-communication-pauseresume-md-188.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_filetransfer_remote_communication_pauseresume_remote_communication_pauseresume_md_188_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-pauseresume/remote-communication-pauseresume","title":"实现请求暂停、恢复与断点续传","description":"约束与限制","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-pauseresume/remote-communication-pauseresume.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-pauseresume","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-pauseresume/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-pauseresume/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"实现请求暂停、恢复与断点续传","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-pauseresume","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"快速实现上传下载","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-filetransferfast/"},"next":{"title":"流式传输","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-streamreq/remote-communication-syncstreamreq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-pauseresume/remote-communication-pauseresume.md


const frontMatter = {
	title: '实现请求暂停、恢复与断点续传',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-pauseresume',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '实现请求暂停、恢复与断点续传';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "请求暂停、恢复",
  "id": "请求暂停恢复",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 3
}, {
  "value": "使用实例",
  "id": "使用实例",
  "level": 3
}, {
  "value": "实现断点续传",
  "id": "实现断点续传",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍-1",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "实现请求暂停恢复与断点续传",
        children: "实现请求暂停、恢复与断点续传"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求暂停、恢复与断点续传能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求暂停恢复",
      children: "请求暂停、恢复"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remote Communication Kit提供完善的功能支持，包括请求的暂停和恢复功能。这不仅涵盖接收暂停，还包括发送暂停。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用实例",
      children: "使用实例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { util } from '@kit.ArkTS';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义调试信息接口、调试信息源类型以及调试信息序列化函数，用于将调试信息序列化为StringifiedDebugInfo数组。函数首先根据infoSource的类型获取调试信息，然后使用TextDecoder将调试信息的data字段解码为字符串，并返回一个包含解码后的调试信息的数组。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const HTTP_SERVER_POST: string = \"https://example.org/anything\";\n// 定义调试信息接口\ninterface StringifiedDebugInfo {\n  type: rcp.DebugEvent;\n  data: string;\n};\n// 定义调试信息源类型\ntype DebugInfoSource = undefined | rcp.DebugInfo[] | rcp.Response;\n\n// 定义调试信息序列化函数\nfunction debugInfoStringify(infoSource: DebugInfoSource): StringifiedDebugInfo[] {\n  const debugInfo = Array.isArray(infoSource)\n    ? (infoSource as rcp.DebugInfo[])\n    : (infoSource as rcp.Response).debugInfo;\n\n  if (!debugInfo) {\n    return [];\n  }\n\n  const decoder = util.TextDecoder.create('utf-8');\n  return debugInfo.map((i: rcp.DebugInfo): StringifiedDebugInfo => {\n    return {\n      type: i.type,\n      data: decoder.decodeToString(new Uint8Array(i.data)).trim(),\n    };\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取发送暂停和恢复事件，用于从调试信息中筛选出发送暂停和恢复事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getSendPausedEvents(debugInfo: DebugInfoSource) {\n  return debugInfoStringify(debugInfo).filter((i) => i.data.startsWith('[[RCP]]: Pause sending'));\n}\n\nfunction getSendResumedEvents(debugInfo: DebugInfoSource) {\n  return debugInfoStringify(debugInfo).filter((i) => i.data.startsWith('[[RCP]]: Resume sending'));\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写发起请求的函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const SendingPauseByTimeout = async (done: Function): Promise<void> => {\n  const session = rcp.createSession();\n  const request = new rcp.Request(HTTP_SERVER_POST);\n  // 定义发送暂停策略，kind为'timeout'，timeoutMs为1ms\n  const sendPolicy: rcp.SendingPausePolicy = {\n    kind: 'timeout',\n    timeoutMs: 1,\n  };\n  // 定义暂停策略，sending字段引用了上述定义的发送暂停策略\n  const pausePolicy: rcp.PausePolicy = {\n    sending: sendPolicy,\n  };\n  // 设置请求的配置，包括传输策略和跟踪信息\n  request.configuration = {\n    transfer: {\n      pausePolicy: pausePolicy,\n    },\n    tracing: {\n      infoToCollect: {\n        textual: true,\n      },\n    },\n  };\n  // 定义请求体数据\n  const data = 'TestData';\n  // 设置请求头，'Content-Length'字段表示请求体的长度\n  request.headers = {\n    'Content-Length': data.length.toString(),\n  };\n  // 定义布尔型标志变量用于控制请求体生成\n  let isReadCompleted = false;\n  // 设置请求方法为POST\n  request.method = 'POST';\n  // 定义请求体内容生成函数，如果read为true，则返回空的ArrayBuffer，否则生成包含请求体数据的ArrayBuffer\n  request.content = (maxSize) => {\n    if (isReadCompleted) {\n      return new ArrayBuffer(0);\n    }\n    isReadCompleted = true;\n    const buffer = new ArrayBuffer(data.length);\n    util.TextEncoder.create('utf-8').encodeIntoUint8Array(data, new Uint8Array(buffer));\n    return buffer;\n  };\n\n  // 发送请求并等待响应\n  const response = await session.fetch(request)\n\n  // 从响应的调试信息中获取发送暂停和恢复事件\n  const pausedEvents = getSendPausedEvents(response);\n  const resumedEvents = getSendResumedEvents(response);\n\n  // 关闭会话\n  session.close();\n  // 调用完成回调函数\n  done();\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现断点续传",
      children: "实现断点续传"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景介绍-1",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在需要接续数据请求的场景中，用户可以通过定义", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#transferrange",
        children: "TransferRange"
      }), "对象的from和to属性来控制数据的截取范围。下载的内容可以被准确地截取并拼接到目标文件中，确保数据的完整性和一致性，开发者可以灵活地管理和恢复下载过程。"]
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
          children: "创建session，定义请求URL，并对request进行配置，同时定义变量以记录下载文件的总大小。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建会话\nlet session: rcp.Session | null = rcp.createSession();\n// 定义服务器地址\nconst kHttpServerAddress = \"http://www.example.com/fetch\";\n// 创建请求\nconst request = new rcp.Request(kHttpServerAddress, \"GET\");\n// 定义变量记录下载文件的大小\nlet totalSize = 0;\n// 定义一个存储上次传输位置的变量\nlet lastTransferPosition = 0;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写一个函数以获取要下载的文件大小。有多种方法可以获取下载文件的大小，请根据实际需求选择合适的方法。在本例中，通过从响应数据的header中的content-range字段来获取下载文件的总大小。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 获取要下载文件的大小\n *\n * @returns 文件的大小\n */\nasync function getTotalSize(): Promise<number> {\n  request.transferRange = { from: 0, to: 1 };\n  try {\n    let rep = await session?.fetch(request);\n    if (rep) {\n      // 从响应数据的header的content-range字段中提取出文件的大小\n      let contentRange = rep.headers['content-range'];\n      let sizeStr = contentRange ? contentRange.substring(contentRange.indexOf('\\/') + 1, contentRange.length) : '0';\n      totalSize = Number(sizeStr);\n    }\n  } catch (err) {\n    console.error(`getTotalSize error code is ${err.code}, error data is ${err.data}`);\n  }\n  console.info(`getTotalSize totalSize: ${totalSize.toString()}`);\n  return totalSize;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写一个依据传输范围下载文件的函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 根据传输范围下载文件\n *\n * @param from - 传输范围的起始位置\n * @param to - 传输范围的结束位置\n */\nfunction downloadTransfer(from: number, to: number) {\n  // 设置请求的数据传输范围\n  request.transferRange = { from: from, to: to };\n  session?.fetch(request).then((rep) => {\n    if (rep.body) {\n      // 处理响应，可以在此处将文件保存到本地\n      console.info(`Response succeeded: ${JSON.stringify(rep.headers)}`);\n      // 下次传输的起始位置 = 上次的位置 + 本次传输数据的长度\n      lastTransferPosition += rep.body.byteLength;\n      if (lastTransferPosition < totalSize) {\n        // 计算下一次传输范围的结束位置\n        const nextTo = Math.min(lastTransferPosition + 100, totalSize);\n        // 递归调用继续下载下一段数据\n        downloadTransfer(lastTransferPosition, nextTo);\n      } else {\n        console.info(\"Response succeeded, completed.\");\n      }\n    }\n  }).catch((err: BusinessError) => {\n    console.error(`Continue transfer error: code is ${err.code}, message is ${err.message}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用以下方式开始下载。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 开始下载\n */\nasync function startDownload() {\n  if (!session) {\n    session = rcp.createSession();\n  }\n  // 传输位置归零\n  lastTransferPosition = 0;\n  // 获取要下载文件的总大小\n  totalSize = await getTotalSize();\n  // 计算传输范围的结束位置\n  const nextTo = Math.min(lastTransferPosition + 100, totalSize);\n  // 开始下载\n  downloadTransfer(lastTransferPosition, nextTo);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用以下方式暂停下载。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 暂停下载\n */\nfunction pauseDownload() {\n  // 取消下载请求\n  session?.cancel(request);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用以下方式继续下载。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 继续下载\n */\nfunction resumeDownload() {\n  // 计算传输范围的结束位置\n  const nextTo = Math.min(lastTransferPosition + 100, totalSize);\n  // 开始下载\n  downloadTransfer(lastTransferPosition, nextTo);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用以下方式停止下载。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * 停止下载\n */\nfunction stopDownload() {\n  // 取消下载请求\n  session?.cancel(request);\n  // 关闭session\n  session?.close();\n  session = null;\n}\n"
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