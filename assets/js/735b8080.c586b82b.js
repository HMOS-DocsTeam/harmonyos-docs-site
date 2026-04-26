"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["331645"], {
254766(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_driver_development_kit_driverdevelopment_overview_driverdevelopment_overview_md_735_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-driver-development-kit-driverdevelopment-overview-driverdevelopment-overview-md-735.json
var site_docs_system_hardware_driver_development_kit_driverdevelopment_overview_driverdevelopment_overview_md_735_namespaceObject = JSON.parse('{"id":"system-hardware/driver-development-kit/driverdevelopment-overview/driverdevelopment-overview","title":"Driver Development Kit简介","description":"Driver Development Kit（驱动开发套件）为外设驱动开发者提供高效、安全、丰富的扩展外设驱动开发解决方案ArkTS-API和C-API，支持外设驱动开发者为消费者带来外设即插即用的极致体验。","source":"@site/docs/system-hardware/driver-development-kit/driverdevelopment-overview/driverdevelopment-overview.md","sourceDirName":"system-hardware/driver-development-kit/driverdevelopment-overview","slug":"/system-hardware/driver-development-kit/driverdevelopment-overview/","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/driverdevelopment-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Driver Development Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/driverdevelopment-overview","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"超级桌面应用接入分布式相机","permalink":"/harmonyos-docs-site/system-hardware/car-kit-guide/car-superlauncher-camera-distributed/"},"next":{"title":"环境准备","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/environmental-preparation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/driver-development-kit/driverdevelopment-overview/driverdevelopment-overview.md


const frontMatter = {
	title: 'Driver Development Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/driverdevelopment-overview',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = 'Driver Development Kit简介';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "亮点特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "扩展外设驱动架构",
  "id": "扩展外设驱动架构",
  "level": 3
}, {
  "value": "运作流程",
  "id": "运作流程",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "关联模块",
  "id": "关联模块",
  "level": 2
}, {
  "value": "驱动应用规格说明",
  "id": "驱动应用规格说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
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
        id: "driver-development-kit简介",
        children: "Driver Development Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Driver Development Kit（驱动开发套件）为外设驱动开发者提供高效、安全、丰富的扩展外设驱动开发解决方案ArkTS-API和C-API，支持外设驱动开发者为消费者带来外设即插即用的极致体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持开发者高效、安全开发专业外设或扩展外设增强能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "面向专业专用办公外设驱动开发场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如：银行柜台、企业办公、医疗检测等领域专业专用外设，如：高拍仪、身份证扫描仪、指纹识别仪、血氧血糖监测设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "面向非标外设扩展增强能力开放场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如：厂商私有非标HID外设增强能力开放场景，如：手写板快捷键定制、压感/绘图区域设置、扩展增强能力设置、鼠标灯光效果设置、鼠标扩展按键定制、DPI及X/Y轴等高阶能力设置。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持开发者开发外设配件的高阶功能，满足消费者高阶使用场景诉求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "扩展驱动框架支持扩展外设驱动生命周期管理，面向扩展设备应用提供扩展外设查询绑定能力接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["扩展外设驱动客户端：查询驱动并绑定驱动，自定义驱动与设备之间的通信方式以及数据处理方式等，即", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-hardware/driver-development-kit/development-of-basic-drivers/externaldevice-guidelines",
          children: "带UI界面基础驱动"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["扩展外设驱动：基于DDK能力开发的专业专用扩展外设驱动或扩展外设增强驱动，即", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-hardware/driver-development-kit/development-of-basic-drivers/driverextensionability",
          children: "无UI界面基础驱动"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "扩展外设管理服务（External Device Manager）：扩展设备管理，驱动包全生命周期管理等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BMS（Bundle Manager Service）：包管理服务，在HarmonyOS上主要负责应用的安装、卸载和数据管理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AMS（Ability Manager Service）：元能力管理服务，用于拉起和关闭扩展驱动能力DriverExtensionAbility。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SA（SystemAbility）：系统元能力，是一种系统服务，对外提供能力。如：外设扩展服务SA就是对外提供非标外设驱动能力的系统服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非标外设：指的是采用了非标准的协议通信（也称为厂商自定义协议）的一类外设。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HDF扩展驱动框架为扩展外设驱动开发，提供稳定统一的外设驱动开发接口，支撑用户态扩展外设驱动开发者基于DDK能力开发用户态扩展外设驱动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展外设管理服务作为用户态扩展外设管理的核心服务，实现对扩展外部设备和扩展外设驱动的生命周期管理，同时面向扩展设备应用开发提供标准ArkTS API接口，支持扩展外设查询、绑定及解绑能力接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扩展外设驱动架构",
      children: "扩展外设驱动架构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 扩展外设驱动原理图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(56285)/* ["default"] */.A) + "",
        width: "895",
        height: "495"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运作流程",
      children: "运作流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户插入外设时，外设与驱动的匹配流程如图2所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 非标外设与对应扩展外设驱动应用匹配的时序图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(779784)/* ["default"] */.A) + "",
        width: "1000",
        height: "750"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户使用扩展外设驱动客户端时，扩展外设驱动客户端与扩展外设驱动的绑定流程如图3所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 扩展外设驱动客户端与扩展外设驱动绑定的时序图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(111562)/* ["default"] */.A) + "",
        width: "1000",
        height: "750"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用Driver Development Kit提供的ArkTS-API或者C-API，开发者需要申请特定权限，才能使用相关接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所需权限如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "API 类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DDK类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "权限名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkTS-API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C-API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UsbDdk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.ACCESS_DDK_USB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C-API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HidDdk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.ACCESS_DDK_HID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C-API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USBSerialDDK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.ACCESS_DDK_USB_SERIAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C-API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ScsiPeripheralDDK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ohos.permission.ACCESS_DDK_SCSI_PERIPHERAL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关联模块",
      children: "关联模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在扩展外设驱动开发过程中，需要使用到其他关联模块的部分能力，来协助驱动开发。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PerformanceAnalysisKit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["引入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hilog/js-apis-hilog",
              children: "hilog"
            }), "用于日志打印。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BasicServicesKit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["引入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#businesserror",
              children: "BusinessError"
            }), "用于捕获错误信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPCKit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["引入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc",
              children: "rpc"
            }), "用于驱动与客户端IPC（Inter-Process Communication）通信。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AbilityKit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["引入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-application-want/js-apis-application-want",
              children: "@ohos.application.Want (Want)"
            }), "用于生命周期管理。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "驱动应用规格说明",
      children: "驱动应用规格说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.驱动应用定义"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "驱动应用是基于Driver Development Kit开发的、面向非标外设的用户态驱动。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "驱动应用基于DriverExtensionAbility，开发者需要重写该Ability的生命周期回调接口。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.驱动应用安装卸载规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["安装策略\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当用户安装某一驱动应用时，系统会将应用安装到当前已有的所有用户环境下。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当创建新用户时，系统会将已安装的驱动应用在该用户环境下进行安装。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卸载策略：当用户在任意用户环境下发起卸载某一驱动应用，系统会将所有用户环境下的该驱动应用卸载。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.基于DriverExtensionAbility生命周期管理说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExtensionAbility是基于场景服务的扩展能力的统称，简称为扩展能力（例如用户态扩展驱动、卡片、输入法等）以便满足不同的使用场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "各类Extension的生命周期由各个SA管理，通过connectAbility启动Extension，并驱动定义的业务接口；业务结束，SA调用disconnectAbility接口断开Extension连接，AMS会根据该Extension是否有SA连接来决定是否销毁该Extension及进程。在用户态扩展驱动开发场景下，管理DriverExtensionAbility生命周期的系统SA为外设扩展服务SA。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.在DriverExtensionAbility中API访问安全管控说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统支持基于ExtensionAbility构建场景化扩展Ability，DriverExtensionAbility为支持开发用户态扩展驱动的一类Ability。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在DriverExtensionAbility中仅支持访问DDK（", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/docs/tree/master/zh-cn/application-dev/reference/apis-driverdevelopment-kit",
          children: "docs/zh-cn/application-dev/reference/apis-driverdevelopment-kit · HarmonyOS/docs - AtomGit | GitCode"
        }), "）API，实现对非标外设进行访问控制和数据通信。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于驱动开发安全约束及驱动开发业务场景，在DriverExtensionAbility中不支持访问其它ArkTS API，以防止恶意行为和数据泄漏。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DriverExtensionAbility受限访问ArkTS API方案说明：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ArkTS API受限原理：在初始化和创建Extension进程时，会根据Extension配置的受限访问ArkTS API名单加载系统模块。在运行时，如果在DriverExtensionAbility中调用受限ArkTS API，由于初始化和创建阶段未加载相应系统模块，API会调用失败。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DriverExtensionAbility具体受限ArkTS API名单，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/ability_ability_runtime/blob/master/frameworks/native/ability/native/etc/extension_blocklist_config.json",
          children: "frameworks/native/ability/native/etc/extension_blocklist_config.json · HarmonyOS/ability_ability_runtime - AtomGit | GitCode"
        }), "中DriverExtension配置。"]
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
56285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438517-543789c220d8e1f1e1c74d91129b09e1.png");

},
779784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958472-c988e008eaea082433a890875b1c930e.png");

},
111562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478473-66179ed0fb77150a79493ca73a1cf935.png");

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