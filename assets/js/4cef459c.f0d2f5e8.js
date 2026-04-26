"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["466393"], {
807936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_filetransfer_remote_communication_filetransferfast_remote_communication_filetransferfast_md_4ce_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-filetransfer-remote-communication-filetransferfast-remote-communication-filetransferfast-md-4ce.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_filetransfer_remote_communication_filetransferfast_remote_communication_filetransferfast_md_4ce_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-filetransferfast/remote-communication-filetransferfast","title":"快速实现上传下载","description":"Remote Communication Kit 结合 Core File Kit 可以实现基于文件、目录、对象的快速上传和下载功能。 Remote Communication Kit 提供了远程通信的功能，包括远程连接、数据传输等 API 接口。而 Core File Kit 则提供了文件管理的功能，包括文件读取、写入等 API 接口。结合起来使用，可以通过 Remote Communication Kit 实现文件、目录、对象的远程传输，并且由于 Core File Kit 的高效文件处理能力，可以实现快速的上传和下载功能。","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-filetransferfast/remote-communication-filetransferfast.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-filetransferfast","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-filetransferfast/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-filetransferfast/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"快速实现上传下载","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-filetransferfast","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拦截器：更丰富、更高阶的定制能力","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-interceptconfig/"},"next":{"title":"实现请求暂停、恢复与断点续传","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-pauseresume/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-filetransferfast/remote-communication-filetransferfast.md


const frontMatter = {
	title: '快速实现上传下载',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-filetransferfast',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '快速实现上传下载';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "下载功能实现",
  "id": "下载功能实现",
  "level": 2
}, {
  "value": "上传功能实现",
  "id": "上传功能实现",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "快速实现上传下载",
        children: "快速实现上传下载"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remote Communication Kit 结合 Core File Kit 可以实现基于文件、目录、对象的快速上传和下载功能。 Remote Communication Kit 提供了远程通信的功能，包括远程连接、数据传输等 API 接口。而 Core File Kit 则提供了文件管理的功能，包括文件读取、写入等 API 接口。结合起来使用，可以通过 Remote Communication Kit 实现文件、目录、对象的远程传输，并且由于 Core File Kit 的高效文件处理能力，可以实现快速的上传和下载功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件上传下载能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "下载功能实现",
      children: "下载功能实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块，示例中除去发起请求以及响应错误处理，还需用到CoreFileKit中的fileIo，所以需导入以下模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定义下载路径，并创建相关配置。如还需访问应用文件，可以参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file",
            children: "应用文件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//下载文件保存的文件夹路径，仅为示例，请按需求进行替换。\nconst DOWNLOAD_TO_PATH = `/data/storage/el2/base/haps/entry/files`;\n// 创建了一个安全配置对象，其中remoteValidation设置为'skip'，表示将跳过远程验证。\nconst securityConfig: rcp.SecurityConfiguration = {\n  remoteValidation: 'skip'\n}\n\n// 创建了一个下载配置对象，其中kind设置为'folder'，表示下载的目标是文件夹，path设置为之前定义的DOWNLOAD_TO_PATH。\nlet downloadToFile: rcp.DownloadToFile = {\n  kind: 'folder',\n  path: DOWNLOAD_TO_PATH\n}\n\n// 创建一个HTTP会话，其中请求配置包括传输超时设置和安全配置（配置可自定义）\nconst session = rcp.createSession({\n  requestConfiguration: {\n    transfer: { timeout: { connectMs: 6000, transferMs: 6000, inactivityMs: 6000 } },\n    security: securityConfig\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["检查目标路径是否存在，如果存在，则先删除该路径，以确保下载的文件不会覆盖已存在的文件；最后发起请求，使用创建的会话执行下载操作，将“", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://example.com/test.png”这个URL的内容下载到指定的本地路径。如果下载成功，会输出成功信息；如果失败，会输出错误信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 检查目标路径是否存在\nif (fileIo.accessSync(DOWNLOAD_TO_PATH)) {\n  fileIo.rmdirSync(DOWNLOAD_TO_PATH);\n}\n// 发起请求，执行下载操作，这里的\"`https://example.com/test.png\"网址为示例图片网址`，模拟下载图片场景\nsession.downloadToFile('https://example.com/test.png', downloadToFile)\n  .then((response: rcp.Response) => {\n    console.info(`Successfully received the response, statusCode: ${JSON.stringify(response.statusCode)}`);\n  }).catch((err: BusinessError) => {\n  console.error(`Failed, the error code is ${err.code}, error data is ${err.data}`)\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "上传功能实现",
      children: "上传功能实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块，示例中除去发起请求以及响应错误处理，还需用到CoreFileKit中的fileIo，需导入以下模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义Session配置，定义一个名为SESSION_CONFIG的对象，用于配置请求会话。配置包括传输超时和安全设置，如远程验证和TLS版本。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let SESSION_CONFIG: rcp.SessionConfiguration = {\n  requestConfiguration: {\n    transfer: {\n      timeout: {\n        connectMs: 6000\n      }\n    },\n    security: {\n      remoteValidation: 'skip',\n      tlsOptions: {\n        tlsVersion: 'TlsV1.3'\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义FdReadFile类，用于读取文件描述符（File Descriptor）指向的文件。read方法异步读取指定的ArrayBuffer缓冲区，并返回实际读取的字节数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class FdReadFile {\n  readonly fd: number;\n\n  constructor(fd: number) {\n    this.fd = fd;\n  }\n\n  async read(buffer: ArrayBuffer): Promise<number> {\n    return fileIo.read(this.fd, buffer);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话并打开文件，以只读模式打开一个文件。fileIo.openSync方法返回一个文件描述符，如果打开失败，程序会打印错误信息并返回。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const session = rcp.createSession(SESSION_CONFIG);\nconst file = fileIo.openSync('/data/storage/el1/bundle/entry_test/resources/resfile/upload_file.txt',\n  fileIo.OpenMode.READ_ONLY);\nif (!file) {\n  console.error('fileIo.openSync failed');\n  return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "读取文件，创建一个FdReadFile实例，并分配一个缓冲区来读取文件。read方法异步执行，等待文件读取完成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const fdReadFile = new FdReadFile(file.fd);\nconst buffer = new ArrayBuffer(1024 * 1024); // 假设文件大小为1MB\nawait fdReadFile.read(buffer);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上传文件，使用会话的uploadFromFile方法将文件上传到指定的URL。UploadFromFile构造函数接受一个文件描述符读取文件。上传成功或失败时，会分别打印相应的信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "session.uploadFromFile('https://httpbin.org/anything', new rcp.UploadFromFile(fdReadFile))\n  .then((response: rcp.Response) => {\n    console.info(`Upload succeeded: ${response}`)\n  })\n  .catch((err: BusinessError) => {\n    console.error(`Upload failed: error code is ${err.code}, error data is ${err.data}`)\n  });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭文件和会话，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "fileIo.closeSync(file.fd);\nsession.close();\n"
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