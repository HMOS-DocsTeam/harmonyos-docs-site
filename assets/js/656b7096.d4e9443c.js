"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["798257"], {
316180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_usb_usb_dev_usb_host_dev_bulktransfer_bulktransfer_md_656_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-usb-usb-dev-usb-host-dev-bulktransfer-bulktransfer-md-656.json
var site_docs_system_basicfun_basic_services_kit_usb_usb_dev_usb_host_dev_bulktransfer_bulktransfer_md_656_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/usb/usb-dev/usb-host-dev/bulktransfer/bulktransfer","title":"USB批量传输","description":"场景介绍","source":"@site/docs/system-basicfun/basic-services-kit/usb/usb-dev/usb-host-dev/bulktransfer/bulktransfer.md","sourceDirName":"system-basicfun/basic-services-kit/usb/usb-dev/usb-host-dev/bulktransfer","slug":"/system-basicfun/basic-services-kit/usb/usb-dev/usb-host-dev/bulktransfer/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-dev/usb-host-dev/bulktransfer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"USB批量传输","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bulktransfer","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"USB中断传输","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-dev/usb-host-dev/interrupttransfer/"},"next":{"title":"USB实时传输","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-dev/usb-host-dev/isochronoustransfer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/usb/usb-dev/usb-host-dev/bulktransfer/bulktransfer.md


const frontMatter = {
	title: 'USB批量传输',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bulktransfer',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'USB批量传输';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "环境要求",
  "id": "环境要求",
  "level": 3
}, {
  "value": "搭建环境",
  "id": "搭建环境",
  "level": 3
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
        id: "usb批量传输",
        children: "USB批量传输"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "批量传输主要应用在传输和接收大量数据同时又没有带宽和间隔时间要求的情况下，例如传输文件、图像等场景，打印机和扫描仪等设备属于这种类型的设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发工具及配置："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DevEco Studio作为驱动开发工具，是进行驱动开发必备条件之一，开发者可以使用该工具进行开发、调试、打包等操作。请", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/download/",
            children: "下载安装"
          }), "该工具，并参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-tools-overview",
            children: "DevEco Studio使用指南"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-create-new-project",
            children: "创建工程及运行"
          }), "进行基本的操作验证，保证DevEco Studio可正常运行。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SDK版本配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "扩展外设管理提供的ArkTS接口，所需SDK版本为API 16及以上才可使用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HDC配置："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["HDC（HarmonyOS Device Connector）是为开发人员提供的用于调试的命令行工具，通过该工具可以在Windows/Linux/Mac系统上与真实设备或者模拟器进行交互，详细参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/hdc",
            children: "HDC配置"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "搭建环境",
      children: "搭建环境"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在PC上安装", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/download/deveco-studio",
          children: "DevEco Studio"
        }), "，要求版本在4.1及以上。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将public-SDK更新到API 16或以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PC安装HDC工具，通过该工具可以在Windows/Linux/Mac系统上与真实设备或者模拟器进行交互。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用USB线缆将搭载HarmonyOS的设备连接到PC。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bulkTransfer(pipe: USBDevicePipe, endpoint: USBEndpoint, buffer: Uint8Array, timeout ?: number): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量传输。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多关于设备管理和传输模式的详细接口介绍，请查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-usbmanager/js-apis-usbmanager",
        children: "@ohos.usbManager"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主机（Host）连接设备（Device），通过bulkTransfer接口进行数据传输。以下步骤描述了如何使用批量传输方式来传输数据："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(786507)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码只是使用批量传输方式来传输数据的必要流程，需要放入具体的方法中执行。在实际调用时，设备开发者需要遵循设备相关协议进行调用，确保数据的正确传输和设备的兼容性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入usbManager模块\nimport { usbManager } from '@kit.BasicServicesKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { JSON } from '@kit.ArkTS';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(346482)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["批量传输只能在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-usbmanager/js-apis-usbmanager#usbendpointtransfertype18",
            children: "传输类型"
          }), "为2的端点上进行，若不匹配会返回IO错误。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取设备列表。\nlet deviceList: usbManager.USBDevice[] = usbManager.getDevices();\nconsole.info(`deviceList: ${deviceList}`);\nthis.logInfo_ += '\\n[INFO] deviceList: ' + JSON.stringify(deviceList);\nif (deviceList === undefined || deviceList.length === 0) {\n  console.error('deviceList is empty');\n  this.logInfo_ += '\\n[ERROR] deviceList is empty';\n  return;\n}\n/*\ndeviceList结构示例\n[\n  {\n    name: '1-1',\n    serial: '',\n    manufacturerName: '',\n    productName: '',\n    version: '',\n    vendorId: 7531,\n    productId: 2,\n    clazz: 9,\n    subClass: 0,\n    protocol: 1,\n    devAddress: 1,\n    busNum: 1,\n    configs: [\n      {\n        id: 1,\n        attributes: 224,\n        isRemoteWakeup: true,\n        isSelfPowered: true,\n        maxPower: 0,\n        name: '1-1',\n        interfaces: [\n          {\n            id: 0,\n            protocol: 0,\n            clazz: 9,\n            subClass: 0,\n            alternateSetting: 0,\n            name: '1-1',\n            endpoints: [\n              {\n                address: 129,\n                attributes: 3,\n                interval: 12,\n                maxPacketSize: 4,\n                direction: 128,\n                number: 1,\n                type: 3,\n                interfaceId: 0,\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n]\n */\nthis.deviceList_ = deviceList;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备操作权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.deviceList_ === undefined || this.deviceList_.length === 0) {\n  console.error('deviceList is empty');\n  this.logInfo_ += '\\n[ERROR] deviceList is empty';\n  return;\n}\nlet deviceList: usbManager.USBDevice[] = this.deviceList_;\nlet deviceName: string = deviceList[0].name;\n// 申请操作指定的device的操作权限。\nusbManager.requestRight(deviceName).then((hasRight: boolean) => {\n  console.info('usb device request right result: ' + hasRight);\n  this.logInfo_ += '\\n[INFO] usb device request right result: ' + JSON.stringify(hasRight);\n}).catch((error: BusinessError) => {\n  console.error(`usb device request right failed : ${error}`);\n  this.logInfo_ += '\\n[ERROR] usb device request right failed: ' + JSON.stringify(error);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.deviceList_ === undefined || this.deviceList_.length === 0) {\n  console.error('deviceList_ is empty');\n  this.logInfo_ += '\\n[ERROR] deviceList is empty';\n  return;\n}\nlet deviceList: usbManager.USBDevice[] = this.deviceList_;\nif (!usbManager.hasRight(deviceList[0]?.name)) {\n  console.error('permission denied');\n  this.logInfo_ += '\\n[ERROR] permission denied';\n  return;\n}\n// 打开设备，获取数据传输通道。\nlet pipe: usbManager.USBDevicePipe = usbManager.connectDevice(deviceList[0]);\nif (!deviceList?.[0]?.configs?.[0]?.interfaces?.[0]) {\n  console.error('invalid interface');\n  this.logInfo_ += '\\n[ERROR] invalid interface';\n  return;\n}\nlet interface1: usbManager.USBInterface = deviceList?.[0]?.configs?.[0]?.interfaces?.[0];\n/*\n 打开对应接口，在设备信息（deviceList）中选取对应的interface。\ninterface1为设备配置中的一个接口。\n */\nusbManager.claimInterface(pipe, interface1, true);\nthis.pipe_ = pipe;\nthis.interface_ = interface1;\nconsole.info('open device success');\nthis.logInfo_ += '\\n[INFO] open device success';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据传输。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(758081)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在数据传输前建议先获取interface所属endpoint的type，通过type判断interface是否支持所需的传输类型。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若调用传输接口失败，请先确认设备interface是否支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-usbmanager/js-apis-usbmanager#usbinterface",
            children: "模式切换"
          }), "。若alternateSetting支持切换设置，可在传输前调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-usbmanager/js-apis-usbmanager#usbmanagersetinterface",
            children: "usbManager.setInterface"
          }), "重新设置interface，使端点和传输类型匹配，保证端点正常通信。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.pipe_ === undefined || this.interface_ === undefined) {\n  console.error('pipe_ or interface_ is null');\n  this.logInfo_ += '\\n[ERROR] pipe_ or interface_ is null';\n  return;\n}\nlet pipe: usbManager.USBDevicePipe = this.pipe_;\nlet interface1: usbManager.USBInterface = this.interface_;\n/*\n读取数据，在device信息中选取对应数据接收的endpoint来做数据传输\n（endpoint.direction == 0x80）；dataUint8Array是要读取的数据，类型为Uint8Array。\n */\nlet inEndpoint: usbManager.USBEndpoint = interface1.endpoints?.[1];\nlet outEndpoint: usbManager.USBEndpoint = interface1.endpoints?.[0];\nlet dataUint8Array: Uint8Array = new Uint8Array(1024);\nif (inEndpoint !== undefined && inEndpoint.direction === 0x80) {\n  usbManager.bulkTransfer(pipe, inEndpoint, dataUint8Array, 15000).then((dataLength: number) => {\n    if (dataLength >= 0) {\n      console.info(`usb readData result Length : ${dataLength}`);\n      this.logInfo_ += '\\n[INFO] usb readData result Length: ' + JSON.stringify(dataLength);\n    } else {\n      console.error('usb readData failed');\n      this.logInfo_ += '\\n[ERROR] usb readData failed';\n    }\n  }).catch((error: BusinessError) => {\n    console.error(`usb readData error : ${error}`);\n    this.logInfo_ += '\\n[ERROR] usb readData error: ' + JSON.stringify(error);\n  });\n}\n\n// 发送数据，在device信息中选取对应数据发送的endpoint来做数据传输。（endpoint.direction == 0）\nif (outEndpoint !== undefined && outEndpoint.direction === 0) {\n  usbManager.bulkTransfer(pipe, outEndpoint, dataUint8Array, 15000).then((dataLength: number) => {\n    if (dataLength >= 0) {\n      console.info(`usb writeData result write length : ${dataLength}`);\n      this.logInfo_ += '\\n[INFO] usb writeData result write length: ' + JSON.stringify(dataLength);\n    } else {\n      console.error('usb writeData failed');\n      this.logInfo_ += '\\n[ERROR] usb writeData failed';\n    }\n  }).catch((error: BusinessError) => {\n    console.error(`usb writeData error : ${error}`);\n    this.logInfo_ += '\\n[ERROR] usb writeData error: ' + JSON.stringify(error);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放接口，关闭设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (this.pipe_ === undefined || this.interface_ === undefined) {\n  console.error('pipe_ or interface_ is null');\n  this.logInfo_ += '\\n[ERROR] pipe_ or interface_ is null';\n  return;\n}\nlet pipe: usbManager.USBDevicePipe = this.pipe_;\nlet interface1: usbManager.USBInterface = this.interface_;\nusbManager.releaseInterface(pipe, interface1);\nusbManager.closePipe(pipe);\nthis.pipe_ = undefined;\nthis.interface_ = undefined;\nconsole.info('close device success');\nthis.logInfo_ += '\\n[INFO] close device success';\n"
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
786507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
758081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
346482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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