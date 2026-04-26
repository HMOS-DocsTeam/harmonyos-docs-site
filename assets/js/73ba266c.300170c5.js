"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["803084"], {
401788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_syscap_syscap_md_73b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-syscap-syscap-md-73b.json
var site_docs_ref_syscap_syscap_md_73b_namespaceObject = JSON.parse('{"id":"syscap/syscap","title":"系统能力SystemCapability使用指南","description":"本文将系统阐述SystemCapability（SysCap）的定义、用途，以及在单设备与多设备应用开发场景下的适配开发策略。","source":"@site/docs-ref/syscap/syscap.md","sourceDirName":"syscap","slug":"/syscap/syscap","permalink":"/harmonyos-docs-site/ref/syscap/syscap","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"系统能力SystemCapability使用指南","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap","kit":"API参考概述","last_updated":"2026-04-22","slug":"syscap"},"sidebar":"ref","previous":{"title":"开发说明","permalink":"/harmonyos-docs-site/ref/development-intro-api/development-intro-api"},"next":{"title":"通用错误码","permalink":"/harmonyos-docs-site/ref/errorcode-universal/errorcode-universal"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/syscap/syscap.md


const frontMatter = {
	title: '系统能力SystemCapability使用指南',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap',
	kit: 'API参考概述',
	last_updated: '2026-04-22',
	slug: 'syscap'
};
const contentTitle = '系统能力SystemCapability使用指南';

const assets = {

};



const toc = [{
  "value": "什么是SystemCapability（SysCap）",
  "id": "什么是systemcapabilitysyscap",
  "level": 2
}, {
  "value": "SysCap的用途",
  "id": "syscap的用途",
  "level": 2
}, {
  "value": "SysCap与SDK和Kit的关系",
  "id": "syscap与sdk和kit的关系",
  "level": 2
}, {
  "value": "SysCap与Device type的关系",
  "id": "syscap与device-type的关系",
  "level": 2
}, {
  "value": "SysCap适配应用开发",
  "id": "syscap适配应用开发",
  "level": 2
}, {
  "value": "使用canIUse判断SysCap是否可调用",
  "id": "使用caniuse判断syscap是否可调用",
  "level": 3
}, {
  "value": "使用能力查询接口判断API是否可用",
  "id": "使用能力查询接口判断api是否可用",
  "level": 3
}, {
  "value": "主动监听扩展能力变化",
  "id": "主动监听扩展能力变化",
  "level": 3
}, {
  "value": "错误码异常处理",
  "id": "错误码异常处理",
  "level": 3
}, {
  "value": "单设备及多设备应用开发场景下的适配开发",
  "id": "单设备及多设备应用开发场景下的适配开发",
  "level": 2
}, {
  "value": "单设备应用开发场景下的适配开发",
  "id": "单设备应用开发场景下的适配开发",
  "level": 3
}, {
  "value": "多设备应用开发场景下的适配开发",
  "id": "多设备应用开发场景下的适配开发",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "系统能力systemcapability使用指南",
        children: "系统能力SystemCapability使用指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文将系统阐述SystemCapability（SysCap）的定义、用途，以及在单设备与多设备应用开发场景下的适配开发策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "什么是systemcapabilitysyscap",
      children: "什么是SystemCapability（SysCap）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SystemCapability，下文统一简称为SysCap，用于标识一组实现特定开放能力的API集合，如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(398026)/* ["default"] */.A) + "",
        width: "273",
        height: "308"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以名为SystemCapability.Communication.Bluetooth.Core的蓝牙SysCap为例，它代表了一组蓝牙能力相关的API，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "蓝牙设备扫描API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "蓝牙设备配对与连接API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据的发送与接收API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "蓝牙状态管理API等"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "syscap的用途",
      children: "SysCap的用途"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SysCap的用途："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首要职责：隔离不同设备类型之间的开放能力差异。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仍以蓝牙为例，不同设备类型对蓝牙的支持情况有所不同，为便于开发者判断相关API是否可用，引入了SysCap机制。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/common-basic-arkts/js-apis-syscap/js-apis-syscap#caniuse",
            children: "canIUse"
          }), "接口，判断指定SysCap所代表的开放能力API集合是否支持在目标设备类型上调用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "次要职责：进行特性归类。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每个SysCap所代表的开放能力API集合，对应操作系统中一个独立的功能特性。例如上述蓝牙SysCap标识的API集合，逻辑上均属于“蓝牙核心通信能力”。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(190561)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同一设备类型下不同的产品型号，软硬件规格可能不一致，所以需要开发者通过canIUse和能力查询接口判断，以达到先查询后使用的目的。例如部分手机不支持POI功能，所以需要开发者先使用canIUse判断SystemCapability.Location.Location.Core在手机上是否可调用，接着还需使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/location-api/location-arkts/js-apis-geolocationmanager/js-apis-geolocationmanager#geolocationmanagerispoiservicesupported20",
        children: "geoLocationManager.isPoiServiceSupported"
      }), "查询系统（即软件）是否支持POI服务，全部支持之后开发者才可正常使用POI相关接口。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#syscap%E9%80%82%E9%85%8D%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91",
        children: "SysCap适配应用开发"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "syscap与sdk和kit的关系",
      children: "SysCap与SDK和Kit的关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SysCap与SDK、Kit形成结构化、层级化结构，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(446642)/* ["default"] */.A) + "",
        width: "778",
        height: "958"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SDK由多个功能独立的Kit组成；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个Kit包含一个或多个SysCap，且每个SysCap仅属于一个 Kit；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个SysCap标识/代表了一个或多个API接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这一结构化设计，使得开发者在编写代码时，可通过开发工具（如 DevEco Studio）的智能提示与自动联想，精准、高效地定位和调用所需接口，显著降低误用风险，提升开发效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以Tablet设备为例，如果开发者在.ets文件上导入以“a”开头的某个模块的具体内容（例如：接口、类、函数、变量、对象等），DevEco Studio会联想出所有支持在Tablet上可用的某个模块的具体内容，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(283230)/* ["default"] */.A) + "",
        width: "1321",
        height: "473"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "syscap与device-type的关系",
      children: "SysCap与Device type的关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在SDK的“device-define”文件夹下，以json文件定义了各设备类型支持的SysCap集合。例如：tablet.json文件定义了Tablet设备支持SystemCapability.ArkUI.ArkUI.Full、SystemCapability.Communication.NFC.Core等SysCap。如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(143814)/* ["default"] */.A) + "",
        width: "1118",
        height: "532"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在DevEco Studio创建工程时，需要选择应用的设备类型Device type："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390427)/* ["default"] */.A) + "",
        width: "982",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["也可在新建工程后，通过修改module.json5文件中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
        children: "deviceTypes"
      }), "指定应用支持的设备类型："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(196284)/* ["default"] */.A) + "",
        width: "397",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio自动识别项目中的设备类型，定位SDK“device-define”下对应的SysCap集合，进而提取该设备支持的API，用于智能提示与自动联想，助力开发者精准、高效地调用所需接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(94996)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设备类型为多个时，此时DevEco Studio识别的SysCap集合是这几个设备类型的并集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "syscap适配应用开发",
      children: "SysCap适配应用开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如前文所述，SysCap是隔离设备类型间开放能力差异的机制；但在实际应用开发中，完成SysCap层面的隔离判断后，还需要关注："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一设备类型下的不同设备型号，可能因硬件配置差异等因素导致同一SysCap下的部分API调用异常；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一设备型号可能因硬件动态变更（可插拔等）导致同一SysCap下的部分API调用异常。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，在实际应用开发中，需要开发者进行相关代码适配开发，确保应用在各类设备上均能提供良好、稳定的用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适配开发主要包括以下4部分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用caniuse判断syscap是否可调用",
      children: "使用canIUse判断SysCap是否可调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/common-basic-arkts/js-apis-syscap/js-apis-syscap#caniuse",
        children: "canIUse"
      }), "接口判断SysCap对应的API集合是否可调用：true表示可调用，false表示不可调用（该SysCap在对应设备类型中未包含）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS API使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (canIUse(\"SystemCapability.Location.Location.Core\")) {\n console.info(\"The device supports SystemCapability.Location.Location.Core\");\n} else {\n console.info(\"The device does not support SystemCapability.Location.Location.Core\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Native API使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include \"syscap_ndk.h\"\n\nchar syscap[] = \"SystemCapability.ArkUI.ArkUI.Full\";\nbool result = canIUse(syscap);\nif (result) {\n printf(\"SysCap: %s is supported!\\n\", syscap);\n} else {\n printf(\"SysCap: %s is not supported!\\n\", syscap);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用能力查询接口判断api是否可用",
      children: "使用能力查询接口判断API是否可用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用系统侧的isXXXAvailable()、isXXXSupported()、canMakeXXX()等接口判断API是否可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(448912)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并不是所有API都会有能力查询接口，若需要验证的API没有能力查询接口，可通过主动监听或错误码异常处理来判断API是否可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { geoLocationManager } from '@kit.LocationKit';\n\nif (!canIUse(\"SystemCapability.Location.Location.Core\")) { // 首先对能力集进行可用性判断，该步骤仅适用于多设备应用开发，单设备应用开发可忽略该步骤。\n  return;\n}\ntry {\n  if (geoLocationManager.isPoiServiceSupported()) { // 然后进行POI服务能力的查询\n    geoLocationManager.getPoiInfo().then((poiInfo) => { // 判断能力支持后，进行位置信息的获取接口调用\n      if (poiInfo !== undefined) {\n        console.info(\"get PoiInfo:\" + JSON.stringify(poiInfo));\n      }\n    })\n  }\n} catch (error) {\n  console.error(\"getPoiInfo errCode:\" + error.code + \", errMessage:\" + error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "主动监听扩展能力变化",
      children: "主动监听扩展能力变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在硬件动态扩展场景中，部分硬件插拔会导致能力变化，开发者可以主动监听扩展能力变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：对于USB类型的Camera，存在动态插拔的场景，系统侧提供了on的监听接口，支持开发者处理摄像头设备的动态变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { camera } from '@kit.CameraKit';\n\ncallback(err: BusinessError, cameraStatusInfo: camera.CameraStatusInfo): void {\n  if (err !== undefined && err.code !== 0) {\n    console.error('cameraStatus with errorCode = ' + err.code);\n    return;\n  }\n  console.info(`camera : ${cameraStatusInfo.camera.cameraId}, status: ${cameraStatusInfo.status}`);\n}\nregisterCameraStatus(cameraManager: camera.CameraManager): void {\n  cameraManager.on('cameraStatus', this.callback); // 开发者通过监听Camera的状态，处理动态硬件设备\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "错误码异常处理",
      children: "错误码异常处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为应对调用接口可能出现的异常情况，开发者还需进行错误码异常处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步接口必须使用try...catch处理异常，避免应用功能崩溃。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { omapi } from '@kit.ConnectivityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nlet seService : omapi.SEService;\nlet seReaders : omapi.Reader[];\n\n// 在使用seService之前，需要对seService进行初始化\nfunction secureElementDemo() {\n  // 获取readers\n  try {\n    seReaders = seService.getReaders();\n  } catch (error) {\n   if(error.code=== 801) {\n    console.error('This device does not support this capability');\n   }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异步接口使用.catch的方式捕获异步的异常，开发者也可以不处理异常，应用不会崩溃。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\n\nlet avScreenCaptureRecorder: media.AVScreenCaptureRecorder | undefined;\nmedia.createAVScreenCaptureRecorder().then((captureRecorder: media.AVScreenCaptureRecorder) => {\n  // 执行正常业务\n  if (captureRecorder != null) {\n    avScreenCaptureRecorder = captureRecorder;\n    console.info('Succeeded in creating avScreenCaptureRecorder');\n  } else {\n    console.error('Failed to create avScreenCaptureRecorder');\n  }\n}).catch((error: BusinessError) => {\n  // 处理业务逻辑错误\n  console.error(`createAVScreenCaptureRecorder catchCallback, error message:${error.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用全局捕获，在全局添加异常捕获监听，能够捕获未被try...catch的异常，添加后应用抛出异常后不会主动退出，详情可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-errormanager/js-apis-app-ability-errormanager#errormanageronerror",
            children: "errorManager.on('error')"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单设备及多设备应用开发场景下的适配开发",
      children: "单设备及多设备应用开发场景下的适配开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发可分为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单设备应用开发：指应用工程的Device type只配置1个设备类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多设备应用开发：指应用工程的Device type配置多个设备类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "单设备应用开发场景下的适配开发",
      children: "单设备应用开发场景下的适配开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单设备应用开发时，DevEco Studio只识别到一种设备类型，适配开发过程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854556)/* ["default"] */.A) + "",
        width: "669",
        height: "546"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果存在API在同一设备类型下的不同设备型号存在能力不一致的情况，需使用能力查询接口判断接口能力可用性（注意：此处的能力查询机制并非canIUse，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BD%BF%E7%94%A8%E8%83%BD%E5%8A%9B%E6%9F%A5%E8%AF%A2%E6%8E%A5%E5%8F%A3%E5%88%A4%E6%96%ADapi%E6%98%AF%E5%90%A6%E5%8F%AF%E7%94%A8",
          children: "使用能力查询接口判断API是否可用"
        }), "）；"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为了避免调用接口出现的异常情况，需要开发者进行错误码异常处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多设备应用开发场景下的适配开发",
      children: "多设备应用开发场景下的适配开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多设备应用开发时，DevEco Studio需同时识别多种设备类型，适配开发过程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(64908)/* ["default"] */.A) + "",
        width: "695",
        height: "691"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用canIUse判断并集内交集外的SysCap集合是否可用；"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "canIUse仅适用于多设备应用开发，单设备应用开发可直接进行接口能力查询；"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["多设备应用开发场景下，当SysCap所属设备类型处于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#devicetypes%E6%A0%87%E7%AD%BE",
              children: "deviceTypes"
            }), "选择范围与API支持范围的并集但不在其交集内时（如设备类型选Phone/Tablet，而API仅支持Phone/2in1），必须通过canIUse进行可用性校验。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果API在同一设备类型下的不同设备型号存在能力不一致的情况，需使用能力查询接口判断接口能力可用性（注意：此处的能力查询机制并非canIUse）；"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了避免调用接口出现的异常情况，进行错误码异常处理。"
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
390427(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799742-284564db48b16499641b53a8e93168cd.png");

},
283230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959390-d6c5f43cb230fa9ef5a6231228140f10.png");

},
854556(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959392-972f36898c8b804cff9c6e305b198f41.png");

},
196284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439437-3418c6566f56099856867551532b5d3e.png");

},
398026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAE0CAMAAAFLLMevAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADkUExURQAAAECAv0ZzxkVwxUR0w0NzwkRyxERzxERyxAAAAAQEBAgJCQsMDBgZGRwdHiEiIyQlJiUmJyeH2SgqKyiH2CwuLy8xMjQ2NzV8zjs+Pzx4ykBDREFERURHSERyxEhLTUtOUE1QUlBTVVVYWlhbXV9jZWBkZmFlZ2RoamVpa2lucGxxc3F2eHR5e3Z7fYCFiIWKjYeMj4iOkYySlZGXmpifopuipaCnqqOqraWsr6ivsqyzt6+2urW8wLi/w7zEyMHJzcTM0MjQ1MvU2MzV2c/Y3NTd4djh5uXu8+jx9uz2+/D6/9GO1zgAAAAJdFJOUwAIKDBAUHDP5+2qc6MAAAAJcEhZcwAAFxEAABcRAcom8z8AAA2oSURBVHhe7Z0Be9u2EYa9LV12MhVXceOMm2M3qbVlWrOMqz25jTTHUmJLvP//f/YcQFLgAYgAmbCk5N7nSWxD4PnTRxACjiB88Hw9B89xHUnqACIO6EumvnXWQbhHmCLe48isxH7XpflDTbQeD88PBIMzXnAQ5OG26gDeOFoHjwOIY4Bxq4zVgUX9jVHI47ho1+nhooeIC8S+tw4sFpUefx038XVGSs9yZBRZdXBE7320NIusOk7S1Xn74p6V2HVsHrnOWg74QTYJqvSGMEGEHFrti0cpscS8VcOqQuTtH11VGCFVBOJPvCDEOl5gk6DKPb4rVNcIZvdoVikKhIJ62PHIbDJmlSlVwwJ7WBql0VoGFIWCHZmlZpUMEIsxArZ7/Nhf5KZVhX5R812DWYXKdRWzRvQvcvMVVlnf8a4npPteT9oogBf1d4vbprQ4bL5t4YuC2S859iYfq276v/c54ineI//w1PiiACwQsIAFfgZAmN7nJ4A9xCGvqPBFiWO3oghfAU/PHJOXeJ7yAgfdtLpvJ8oIaE7UUx+ES1SzkUF77LnCGwXUdKb6OB2hmq/02h+rK7xRovBHob4Rjtsf7W/bVRr8UTAjX05VlGEVxmOLP4pKslS+lIsqXRIdJQp/FLhHvHl3afpyFH2OaJRIQ80CxzSMA/riC+KPMjV8oX80MYfWANbAGyUKieJmx6J0QMBYdj0SxCZhkPIf9XfLIyOp7OkRPEHmC+pMTjPqlhCvYYAjGNQfajbuIFgCjuYUYUA/3QGeYq56OieeIIhT6s6u1WF08Clm9QejjTvIZ+jR9J7+B1hcA+AIFnVvaeMOQmStnzxuaPxBIpAgNnyYKgjCTnF2Zmd9o3nayUQ3QAjvYDZBgth8K0HojsEM9CCnym2O3FlFf5D+kuJMdBBQ89qhd4DhC3KIhwhwhINyvFD50fE4jw2ypFk1DbVISV+PGyc0eHLiCUIHTesgdY4VWrcyDDxB4kgbRA0cP+mzo27x+BZsfCHIfEjGFDoI3b0hYoMAXqrFJirI6VwXRgehBDidnXK8mAMMVOYhMkhOzaI+xXQFqNLIIHHsQRC7Kyg9Nxj8QRxdAYVx4wvi6ArYvUQDTxBXV0CpJjeeIK6uoADwNBRPkDgkiM3jBLks8SUv46wNEoIEsfnagnSRBu2CbhKyXSBKbESJTZySMgNKjLZ5CUBLli2chX6ilEwsFYjwCy+pyKbNYtYgopTgWzVZod8A94UaiA312B/xg34hV+noKeLwFOeejLabOCU0cYDFvIf5JSXi4SMWtU05vBrDPeY0wVMqiFpmCFFKil/o9yMWxwPE96SKBnI/I95e0v3Qt6QEPlKVUp8Z3xjPRZSSmrmjvVQoTzZiAyUTeM2LVjyqkkSIEpudUrIr8MyqIAiCIOw4TxS8dCucnZ2d/Y4XboduhPBhwkb8wAs2YJfGbLxoS4gSG1Fis89KhjpRAADHnxB1PkfTSmdldhrsy0Qrmfd0GokSJEXPVGKms1Reg5aYhxOtBBAzys/Qb81ODSWtdJZKXuSnzVEBxCrJVNaKEm36/RcDLMfj8WKVzhqPx2Mtoh+RUYpWkisLJnQHt1GiKFk6C6beJ9g8RCpJiCixiVcC+uKEm9k7uDSv4gKMhnHhvcvtI1pJf7RU1yq10InZnywB+2biMe7KiVdCF4S6KOiaPTKuYtWP0T91FadXov2g986uYu2HfrkqSKuk+miBKVdS5e+rDyUisZKE7LOSsFHBbwDPVj+FEK0kbFSgSHnPK3hUQPRj7jPFKwkcFeBn7/1BH5FKQkcFxeFsNps1h4UQqSQhosRGlNiIEpuHK+nrvjV2sGjxcCVdIUpsRImNKLHZpbv5vGBb7MrJESEcEcIRIRwRwhEhnD0Vcu1YJX2rM6AWRr4vhCghOSxoGW6LE7jC0vU0TpW9DiVKiOUG5cR5SUWd9golSkimM2okB9RpWhg3cNSPJUx0iqnJoocSJaQEuNKrxyeHVQ6pSeIt1AsljKrWUaffQokSQq21R1uyYDZFtUy8SmEpbv96qF5T/zXZ/FAihajTk03V7/ueLpa62ZTQ++d1JUS5UacBQ4kWMunh5HCob5XAJebVRUq3G4tKyByMuwqhRAl5RonOU71FJX7UjQB6C8QLHJII+kf7n50a6chQooRcANCKfvqt6jKh71XhOZ2LowkJmQMtd1/d3QglSkhN5o2v28gmbCLkC094PKqQL10MjyokDSKEI0I4IoQjQjjdpK7+zAs2gC+F3YhONkLqAhHCESEcEcIRIRwRwhEhHBHCESEcEcIRIRwRwhEhLX7/5MnZkyd/4MVbgB787OSBy4fy9KyTHXw7YEcMIUt2w5CDg04M4XmKTfgLL9iAHcoY8aLtIEI4IoQjQjgihCNCOCKEs8dC9MKDAuAZrVEw7oq3llldA/zL+HE90UKqJ36LweyWtnQ3hJjLrCa0KWLMyp54IdWjgurxtNUzp3yZFa2niFrZEy2kfvLYFtJaZkXFCVddGY8skhD1fE0jxFxm1ax5CidWSP0EdEFrmT4qIfrhxXqZlXqyMb2Q5tHJ+hHGRki9zGolJOmpaZ7ENoQo2DIrusZTNtayeYSTC2HLrOiJ7YSLJo0nwrkQvszqwl5v+mXihCREhHBECCdeSNgwILJf3UBI2DDgLvP9YVYf0ULChgGTq7gOPl5I4DAg9pMmXkjYMOARhIQNA9ILCRwGpBcSOgxILSR4GJBaSPgwILGQhIgQjgjhxAsJGwacQORuMdFCwoYB+dWOZAOIhM9gxQwDUm8zGDwMwM/GWQsgVkjwMKCgVyOIFBI8DOjHPbcYLSR0GBDXUIk4IcHDALiJ3eopTkjwMECdp6iBQJyQhIgQjgjhiBCOCOGIEI4I4TxcyDHixRSXL3h5JA8WQiOibBT1+LeTBwvpChHCESEcEcIRIRwRwhEhHBHC6eYp+S7YGSE7w8HzHWkkO4I4whFHOOIIRxzhiCMccYQjjnDEEY44whFHOIkdCb0JfTebfeJlWyKdI8sTfTd83d/cK2k305CKNcs+0NasqUjmyDyjbYXXUuaxi6LKHP7WDzRvE5I5Mlmd8vL9m5+rNRXzNz/dU8HL4+PzK32++eku//3y+PgFvaiOvMK7983PRAGDxQR6cQ9mRJDMERwC9Kqzv+xX7WVJJ3eewflsNnt/Tn+SDg7Zsy9F7/xmNnsL6ogyh1fZ+c3s9qK5UCbqiCEMolZSRZDOEcTfvqcN3GntVXVOy1xt0L16N2Xue2faqjKvHatNnWeq6ZW51ba6IqUjqtln6uqhpl7/T60HXtyo14dWGymvyUeA2pFmGZeyoMzhiFabjd+HdVMbkNgRdbapfdAbmmfN2//8Ur/lib46eO364lg5UjWKIcCxJkvVlSRzZFZfDboZlDn8p2++h+oymAAcGmsaawuqy2V11WinzB7Vbl7dkMwRWt3ZO1Y9iRI+15ePeiu9V29OoO5B1DJQOKY1l5fKIXj1Y9Z7VzvyKoMXP2a6dusT3fEx1QnJHKETPRs3LaXVF97d3rRHqHe3v65qzn5tXtRN5u5D2MC3G1I60mKjz0ujZ300HsWRyYuTzQbeX60je4U4whFHOOIIRxzhiCMccYQjjnDEEY5yRGjB9wTdHruxEfAuIY5wxBGOOMIRRzjiCEcc4YgjHHGEI45wxBGOOMIRRzjiCEcc4YgjHHGEI45wxBGOOMIRRzjiCEcc4YgjHHGEI46s+E79HUvNH/mL3yYrS8SQitoSMaRBWyKGGJAlYkiL73bGEL6gZGv8wAu2hKy6aiOOcMQRjjjCEUc44ghHHOGIIxxxhCOOcMQRjjjCEUc44ghn/xwpE++Kld6R9tZUeicJQj3+Xu3RwvDvZlXQhhUA8Jq/0B3JHWFbU9UWfO6bu9a08e5mVe9PkXDPnkdwhG1N1Vig98JyOuLdzarZB6razSgJqR3hW1M1Fuh353KEH9KwahrN5lkJSOyItTVVAYOb2ezDhd7GyOWIdUiDtatREtI6Ym9NpXvWXr3jm3aEdvSh0mqHsPYhqxdXPqTclyStI/bWVKxR2G3EPsR8rao9z/hL3ZHUEcfWVOsccRyyou4+Ul40SR1xbU21xhHXIQa0L+WzN82uWUlI6UgSSr5PVtfsnSPJEUc44ghHHOHsoyMfknat6R3pNBuA5XXaz95HcKTLbABNmI/+536pM5I7wqb2jQWbZAMUaq/ohKR2hE/tGws2yAZo9twRa2r/kGyAZr8dsab2D8oGaPbbEXtqv2am5zqEsdeOOKb26xxxHMLYZ0dcU/s1jrgOYeyzI/uJOMIRRzjiCEcc4eyfI7PVXx9IQnpHuswG0NHqb1nI2oDqhb/ryt45Txckd4RN7RsLNs4GEN6JcQekdoRP7RsLNs4GNG4mIrEj1tT+4dkAquCa73RFWkesqf2DswF0n/M1N7FT0jpiT+3XzPRchxgs+zAw/kZUEpI64pjar3PEcciKlIskGlI64prar3HEdciK1WAmYdea0pH9RBzhiCMccYQjjnDEEY44whFHOOIIRxzhiCMccYQjjnDEEc72HamShBN9Q6Lgf0r90dm+I4h6eWpZfUmaMgxgFxzZLcQRjjjCEUc44ghHHOGIIxxxhCOOcMQRjjjCEUc44ghHHOGIIxzliNDi///H5lwMoJNVAAAAAElFTkSuQmCC");

},
94996(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
448912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
446642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439435-a436f9b7cfb539c56c3d8ed472ef4b22.png");

},
64908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479393-13bf68cfb9cd69f2aec649dce3b93660.png");

},
143814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479391-25de42c7e687c8c8d6ba536bb344553b.png");

},
190561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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