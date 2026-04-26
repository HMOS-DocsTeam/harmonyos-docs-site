"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["204974"], {
223468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_usb_usb_serial_dev_usbserial_communication_usbserial_communication_md_eb2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-usb-usb-serial-dev-usbserial-communication-usbserial-communication-md-eb2.json
var site_docs_system_basicfun_basic_services_kit_usb_usb_serial_dev_usbserial_communication_usbserial_communication_md_eb2_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-communication/usbserial-communication","title":"USB串口通信管理","description":"简介","source":"@site/docs/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-communication/usbserial-communication.md","sourceDirName":"system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-communication","slug":"/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-communication/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-communication/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"USB串口通信管理","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usbserial-communication","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"USB串口配置管理","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-configuration/"},"next":{"title":"常见问题","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/faqs-usb/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-communication/usbserial-communication.md


const frontMatter = {
	title: 'USB串口通信管理',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usbserial-communication',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'USB串口通信管理';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "调测验证",
  "id": "调测验证",
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
        id: "usb串口通信管理",
        children: "USB串口通信管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USB串口通信服务中通过Host设备的USB接口连接串口设备的串口进行串行数据传输，通信管理核心目标是实现设备间的高效、稳定数据传输与协同控制。主要使用在工业自动化与远程监控、物联网设备互联、医疗设备管理等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考USB串口通信服务开发概述", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-overview#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
        children: "环境准备"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "getPortList(): Readonly<SerialPort>[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取串口设备列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hasSerialRight(portId: number): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查应用程序是否具有访问串口设备的权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestSerialRight(portId: number): Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求对串口设备的访问权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "open(portId: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开串口设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "close(portId: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭串口设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "read(portId: number, buffer: Uint8Array, timeout?: number): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从串口设备读取数据，使用Promise异步返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "readSync(portId: number, buffer: Uint8Array, timeout?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以同步方法从串口设备读取数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "write(portId: number, buffer: Uint8Array, timeout?: number): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "往串口设备写入数据，使用Promise异步返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "writeSync(portId: number, buffer: Uint8Array, timeout?: number): number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以同步方法往串口设备写入数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过上述接口读取和写入数据："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(175336)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码只是串口数据传输的必要流程，需要放入具体的方法中执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入usbManager模块\nimport { serialManager } from '@kit.BasicServicesKit';\nimport { BusinessError } from '@kit.BasicServicesKit'\nimport { buffer } from '@kit.ArkTS';\nimport { JSON } from '@kit.ArkTS';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取连接主设备的USB设备列表\nlet portList: serialManager.SerialPort[] = serialManager.getPortList();\nconsole.info(`usbSerial portList: ${portList}`);\nthis.logInfo_ += '\\n[INFO] usbSerial portList: ' + JSON.stringify(portList);\nif (portList === undefined || portList.length === 0) {\n  console.error('usbSerial portList is empty');\n  this.logInfo_ += '\\n[ERROR] usbSerial portList is empty';\n  return;\n}\nthis.portList_ = portList;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备操作权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.portList_ === undefined || this.portList_.length === 0) {\n  console.error('usbSerial portList is empty');\n  this.logInfo_ += '\\n[ERROR] usbSerial portList is empty';\n  return;\n}\nlet portList: serialManager.SerialPort[] = this.portList_;\nlet portId: number = portList[0].portId;\nif (!serialManager.hasSerialRight(portId)) {\n  serialManager.requestSerialRight(portId).then((result: boolean) => {\n    console.info('serial device request right result: ' + result);\n    this.logInfo_ += '\\n[INFO] serial device request right result: ' + JSON.stringify(result);\n  }).catch((error: BusinessError) => {\n    console.error(`usb device request right failed : ${error}`);\n    this.logInfo_ += '\\n[ERROR] usb device request right failed: ' + JSON.stringify(error);\n  });\n} else {\n  console.info('serial device already request right');\n  this.logInfo_ += '\\n[INFO] serial device already request right';\n}\nthis.portId_ = portId;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据串口打开设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let portId: number = this.portId_;\ntry {\n  serialManager.open(portId)\n  console.info(`open usbSerial success, portId: ${portId}`);\n  this.logInfo_ += '\\n[INFO] open usbSerial success, portId: ' + JSON.stringify(portId);\n} catch (error) {\n  console.error(`open usbSerial error： ${error}`);\n  this.logInfo_ += '\\n[ERROR] open usbSerial error: ' + JSON.stringify(error);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过串口读取数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let portId: number = this.portId_;\n// 异步读取\nlet readBuffer: Uint8Array = new Uint8Array(64);\nserialManager.read(portId, readBuffer, 2000).then((size: number) => {\n  console.info(`readAsync usbSerial success, readAsyncBuffer: ${readBuffer}`);\n  this.logInfo_ += '\\n[INFO] readAsync usbSerial success, readAsyncBuffer: ' + JSON.stringify(readBuffer);\n}).catch((error: Error) => {\n  console.error(`readAsync usbSerial error: ${error}`);\n  this.logInfo_ += '\\n[ERROR] readAsync usbSerial error: ' + JSON.stringify(error);\n})\n\n// 同步读取\nlet readSyncBuffer: Uint8Array = new Uint8Array(64);\ntry {\n  serialManager.readSync(portId, readSyncBuffer, 2000);\n  console.info(`readSync usbSerial success, readSyncBuffer: ${readSyncBuffer}`);\n  this.logInfo_ += '\\n[INFO] readSync usbSerial success, readSyncBuffer: ' + JSON.stringify(readSyncBuffer);\n} catch (error) {\n  console.error(`readSync usbSerial error: ${error}`);\n  this.logInfo_ += '\\n[ERROR] readSync usbSerial error: ' + JSON.stringify(error);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过串口写入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let portId: number = this.portId_;\n// 异步写入\nlet writeBuffer: Uint8Array = new Uint8Array(buffer.from('Hello World', 'utf-8').buffer)\nserialManager.write(portId, writeBuffer, 2000).then((size: number) => {\n  console.info(`writeAsync usbSerial success, writeAsyncBuffer: ${writeBuffer}`);\n  this.logInfo_ += '\\n[INFO] writeAsync usbSerial success, writeAsyncBuffer: ' + JSON.stringify(writeBuffer);\n}).catch((error: Error) => {\n  console.error(`writeAsync usbSerial error: ${error}`);\n  this.logInfo_ += '\\n[ERROR] writeAsync usbSerial error: ' + JSON.stringify(error);\n})\n\n// 同步写入\nlet writeSyncBuffer: Uint8Array = new Uint8Array(buffer.from('Hello World', 'utf-8').buffer)\ntry {\n  serialManager.writeSync(portId, writeSyncBuffer, 2000);\n  console.info(`writeSync usbSerial success, writeSyncBuffer: ${writeSyncBuffer}`);\n  this.logInfo_ += '\\n[INFO] writeSync usbSerial success, writeSyncBuffer: ' + JSON.stringify(writeSyncBuffer);\n} catch (error) {\n  console.error(`writeSync usbSerial error: ${error}`);\n  this.logInfo_ += '\\n[ERROR] writeSync usbSerial error: ' + JSON.stringify(error);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭串口设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let portId: number = this.portId_;\ntry {\n  serialManager.close(portId);\n  console.info(`close usbSerial success, portId: ${portId}`);\n  this.logInfo_ += '\\n[INFO] close usbSerial success, portId: ' + JSON.stringify(portId);\n} catch (error) {\n  console.error(`close usbSerial error: ${error}`);\n  this.logInfo_ += '\\n[ERROR] close usbSerial error: ' + JSON.stringify(error);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "准备一根USB转串口线缆，线缆的USB接口连接到HarmonyOS设备USB端口（该端口需支持USB转串口），线缆的串口接口连接到目标设备的串口上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在HarmonyOS设备上执行上述示例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "返回usbSerial success，表示相关接口调用成功，设备串口通信能力正常；返回usbSerial error，表示接口调用失败。"
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
175336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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