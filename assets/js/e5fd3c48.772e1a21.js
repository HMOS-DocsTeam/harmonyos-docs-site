"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["936862"], {
386564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_usb_usb_serial_dev_usbserial_configuration_usbserial_configuration_md_e5f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-usb-usb-serial-dev-usbserial-configuration-usbserial-configuration-md-e5f.json
var site_docs_system_basicfun_basic_services_kit_usb_usb_serial_dev_usbserial_configuration_usbserial_configuration_md_e5f_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-configuration/usbserial-configuration","title":"USB串口配置管理","description":"简介","source":"@site/docs/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-configuration/usbserial-configuration.md","sourceDirName":"system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-configuration","slug":"/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-configuration/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-configuration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"USB串口配置管理","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usbserial-configuration","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"USB串口通信服务开发概述","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-overview/"},"next":{"title":"USB串口通信管理","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-communication/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/usb/usb-serial-dev/usbserial-configuration/usbserial-configuration.md


const frontMatter = {
	title: 'USB串口配置管理',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/usbserial-configuration',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'USB串口配置管理';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 3
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "usb串口配置管理",
        children: "USB串口配置管理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USB串口配置管理中，波特率、数据位、校验位和停止位是串口通信协议的核心参数，它们共同定义了数据传输的格式和规则。通过合理配置这些参数，可以显著提升串口通信的可靠性和效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行USB串口开发时，开发者应了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "波特率（Baud Rate）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "波特率表示串口设备每秒传输的符号数（符号即二进制位，包括数据位、起始位、停止位、校验位），单位为Baud（波特），例如9600 Baud表示每秒传输9600个符号。收发双方必须使用相同的波特率，否则数据无法正确解析。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据位（Data Bit）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据位表示每个数据包中实际传输的有效二进制位数，决定了单个字符的数据容量。常见的取值包括5位、6位、7位和8位。数据位决定单次传输的信息量，数据位越多，单次传输信息量越大，但需更多时间同步。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验位（Parity Bit）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验位是附加在数据帧中的1位二进制值，根据数据位的内容按特定规则生成。常见的有，奇校验（Odd）数据位+校验位中“1”的总数为奇数，偶校验（Even）数据位+校验位中“1”的总数为偶数，无校验（None）不添加校验位。校验位通过验证数据位中“1”的数量，判断数据在传输过程中是否发生位翻转、噪声干扰等错误，增加校验位会略微降低传输效率，但能提高容错性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止位（Stop Bit）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止位位于数据帧末尾，是逻辑高电平信号，用于标识一个字符（数据包）传输的结束。典型长度有1位和2位（实际开发中1位最常用，2位多用于抗干扰场景）。其核心作用是为接收端提供时序同步容错空间，并确保数据完整性。"
        }), "\n"]
      }), "\n"]
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
            children: "getAttribute(portId: number): Readonly<SerialAttribute>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取串口设备配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setAttribute(portId: number, attribute: SerialAttribute): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置串口设备配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过上述接口获取和设置串口的配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(491951)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码只是获取和设置串口的配置的必要流程，需要放入具体的方法中执行。"
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
          children: "获取和修改串口配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let portId: number = this.portId_;\n// 获取串口配置\ntry {\n  let attribute: serialManager.SerialAttribute = serialManager.getAttribute(portId);\n  if (attribute === undefined) {\n    console.error('getAttribute usbSerial error, attribute is undefined');\n    this.logInfo_ += '\\n[ERROR] getAttribute usbSerial error, attribute is undefined';\n  } else {\n    console.info(`getAttribute usbSerial success, attribute: ${attribute}`);\n    this.logInfo_ += '\\n[INFO] getAttribute usbSerial success, attribute: ' + JSON.stringify(attribute);\n  }\n} catch (error) {\n  console.error(`getAttribute usbSerial error: ${error}`);\n  this.logInfo_ += '\\n[ERROR] getAttribute usbSerial error: ' + JSON.stringify(error);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let portId: number = this.portId_;\n// 设置串口配置\ntry {\n  let attribute: serialManager.SerialAttribute = {\n    baudRate: serialManager.BaudRates.BAUDRATE_9600,\n    dataBits: serialManager.DataBits.DATABIT_8,\n    parity: serialManager.Parity.PARITY_NONE,\n    stopBits: serialManager.StopBits.STOPBIT_1\n  }\n  serialManager.setAttribute(portId, attribute);\n  console.info(`setAttribute usbSerial success, attribute: ${attribute}`);\n  this.logInfo_ += '\\n[INFO] setAttribute usbSerial success, attribute: ' + JSON.stringify(attribute);\n} catch (error) {\n  console.error(`setAttribute usbSerial error: ${error}`);\n  this.logInfo_ += '\\n[ERROR] setAttribute usbSerial error: ' + JSON.stringify(error);\n}\n"
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
        children: "返回getAttribute usbSerial success和setAttribute usbSerial success表示相关接口调用成功，可以查看当前串口的配置。"
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
491951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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