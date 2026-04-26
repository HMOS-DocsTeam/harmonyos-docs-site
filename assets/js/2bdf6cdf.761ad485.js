"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["183919"], {
240394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_driver_development_kit_development_of_basic_drivers_driverextensionability_driverextensionability_md_2bd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-driver-development-kit-development-of-basic-drivers-driverextensionability-driverextensionability-md-2bd.json
var site_docs_system_hardware_driver_development_kit_development_of_basic_drivers_driverextensionability_driverextensionability_md_2bd_namespaceObject = JSON.parse('{"id":"system-hardware/driver-development-kit/development-of-basic-drivers/driverextensionability/driverextensionability","title":"开发无UI界面基础驱动","description":"场景介绍","source":"@site/docs/system-hardware/driver-development-kit/development-of-basic-drivers/driverextensionability/driverextensionability.md","sourceDirName":"system-hardware/driver-development-kit/development-of-basic-drivers/driverextensionability","slug":"/system-hardware/driver-development-kit/development-of-basic-drivers/driverextensionability/","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/development-of-basic-drivers/driverextensionability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"开发无UI界面基础驱动","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/driverextensionability","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"环境准备","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/environmental-preparation/"},"next":{"title":"开发带UI界面基础驱动","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/development-of-basic-drivers/externaldevice-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/driver-development-kit/development-of-basic-drivers/driverextensionability/driverextensionability.md


const frontMatter = {
	title: '开发无UI界面基础驱动',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/driverextensionability',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '开发无UI界面基础驱动';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "环境搭建",
  "id": "环境搭建",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "扩展设备能力",
  "id": "扩展设备能力",
  "level": 2
}, {
  "value": "应用签名",
  "id": "应用签名",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发无ui界面基础驱动",
        children: "开发无UI界面基础驱动"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无UI界面的基础驱动，适用于不需要通过UI界面设置驱动能力的简单设备，例如鼠标、键盘等，保证设备的即插即用功能即可。开发者可以通过DriverExtensionAbility实现此类应用的开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DriverExtensionAbility"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/driver-development-api/driver-development-arkts/js-apis-app-ability-driverextensionability/js-apis-app-ability-driverextensionability",
            children: "DriverExtensionAbility"
          }), "是Driver类型的ExtensionAbility组件，提供驱动相关扩展框架能力。对于部分设备，支持插入外接的硬件模块来扩展设备能力， 此时可以以应用方式安装该硬件模块的驱动程序。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/driver-development-api/driver-development-arkts/js-apis-app-ability-driverextensionability/js-apis-app-ability-driverextensionability",
            children: "DriverExtensionAbility"
          }), "可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/driver-development-api/driver-development-arkts/js-apis-driver-devicemanager/js-apis-driver-devicemanager",
            children: "@ohos.driver.deviceManager (外设管理)"
          }), "提供的接口被应用绑定，并根据应用的请求信息在后台处理相关事务。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["每个类型的ExtensionAbility都有自己的Context，DriverExtensionAbility通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/driver-development-api/driver-development-arkts/driver-development-arkts-application/js-apis-inner-application-driverextensioncontext/js-apis-inner-application-driverextensioncontext",
            children: "DriverExtensionContext"
          }), "提供相关能力。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境搭建",
      children: "环境搭建"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/driver-development-kit/environmental-preparation",
        children: "环境准备"
      }), "完成开发前的准备工作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在实现一个驱动时，需要在DevEco Studio工程中手动新建一个DriverExtensionAbility，具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建新工程，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-project/ide-create-new-project",
            children: "创建一个新的工程"
          }), "，创建一个HarmonyOS工程。（如果在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/driver-development-kit/development-of-basic-drivers/externaldevice-guidelines",
            children: "开发带UI界面基础驱动"
          }), "已经创建，则此处不需要创建。）"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在新创建的工程对应的ets目录下，右键选择“New > Directory”，新建一个目录并命名为driverextability。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在driverextability目录，右键选择“New > ArkTS File”，新建一个文件并命名为DriverExtAbility.ets。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在文件中导入相关Kit，并定义请求Code。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';\nimport { Want } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\n\nconst REQUEST_CODE = 99; // 与扩展外设客户端约定请求码。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开DriverExtAbility.ets文件，导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc",
            children: "@ohos.rpc (RPC通信)"
          }), "，重载onRemoteMessageRequest()方法，接收应用传递过来的消息，并将处理的结果返回给应用。REQUEST_CODE用于校验应用发送的服务请求码。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class StubTest extends rpc.RemoteObject {\n  // 接收应用传递过来的消息处理，以及将处理的结果返回给客户端。\n  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,\n    option: rpc.MessageOption) {\n    if (code === REQUEST_CODE) {\n      // 接收应用传递过来的数据。\n      // 应用使用多次调用data.writeString()写入多个数据时，驱动可以通过多次调用data.readString()方法接收对应的数据。\n      let optFir: string = data.readString();\n      // 驱动将数据的处理结果返回给应用。\n      // 示例中为接收了\"Hello\"，并将\"Hello World\"返回给应用。\n      reply.writeString(optFir + ` World`);\n    }\n    return true;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在DriverExtAbility.ets文件中，增加导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/driver-development-api/driver-development-arkts/js-apis-app-ability-driverextensionability/js-apis-app-ability-driverextensionability",
            children: "DriverExtensionAbility"
          }), "的依赖包，该包提供了onInit()、onRelease()、onConnect()和onDisconnect()生命周期回调，自定义类继承", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/driver-development-api/driver-development-arkts/js-apis-app-ability-driverextensionability/js-apis-app-ability-driverextensionability",
            children: "DriverExtensionAbility"
          }), "并根据需要重写生命周期回调。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class DriverExtAbility extends DriverExtensionAbility {\n  onInit(want: Want) {\n    console.info('testTag', `onInit, want: ${want.abilityName}`);\n  }\n\n  onRelease() {\n    console.info('testTag', `onRelease`);\n  }\n\n  onConnect(want: Want) {\n    console.info('testTag', `onConnect, want: ${want.abilityName}`);\n    return new StubTest('test');\n  }\n\n  onDisconnect(want: Want) {\n    console.info('testTag', `onDisconnect, want: ${want.abilityName}`);\n  }\n\n  onDump(params: Array<string>) {\n    console.info('testTag', `onDump, params:` + JSON.stringify(params));\n    return ['params'];\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程Module对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中注册DriverExtensionAbility，type标签需要设置为“driver”，srcEntry标签表示当前ExtensionAbility组件所对应的代码路径。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"name\": \"entry\",\n    \"type\": \"entry\",\n    \"description\": \"$string:module_desc\",\n    \"mainElement\": \"EntryAbility\",\n    \"deviceTypes\": [\n      \"default\"\n    ],\n    \"requestPermissions\": [\n      {\n        \"name\": \"ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER\" // 此处为扩展外设相关权限，必须配置。\n      }\n    ],\n    \"deliveryWithInstall\": true,\n    \"installationFree\": false,\n    \"pages\": \"$profile:main_pages\",\n    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ets\",\n        \"description\": \"$string:EntryAbility_desc\",\n        \"icon\": \"$media:layered_image\",\n        \"label\": \"$string:EntryAbility_label\",\n        \"startWindowIcon\": \"$media:startIcon\",\n        \"startWindowBackground\": \"$color:start_window_background\",\n        \"exported\": true,\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\"\n            ]\n          }\n        ]\n      }\n    ],\n    \"extensionAbilities\": [\n      {\n        \"name\": \"DriverExtAbility\",\n        \"icon\": \"$media:startIcon\",\n        \"description\": \"driver\",\n        \"type\": \"driver\",\n        \"exported\": true,\n        \"srcEntry\": \"./ets/driverextability/DriverExtAbility.ets\",\n        \"metadata\": [\n          {\n            \"name\": \"bus\", // 必填项，所属总线。\n            \"value\": \"USB\"\n          },\n          {\n            \"name\": \"desc\", // 选填项，必要的驱动描述。\n            \"value\": \"the sample of driverExtensionAbility\"\n          },\n          {\n            \"name\": \"vendor\", // 选填项，驱动厂商名称。\n            \"value\": \"string\"\n          },\n          {\n            \"name\": \"vid\", // 支持 USB vendor id 列表，填写16进制，此处为4817的16进制。\n            \"value\": \"0x12D1\"\n          },\n          {\n            \"name\": \"pid\", // 支持的 USB product id 列表，填写16进制，此处为4258的16进制。\n            \"value\": \"0x10A2\"\n          },\n          {\n            \"name\": \"launchOnBind\", // 选填项，延迟拉起驱动。此处“true”表示延迟拉起，“false”表示即时拉起，配置错误或不配置，默认为“false”。\n            \"value\": \"true\"\n          },\n          {\n            \"name\": \"ohos.permission.ACCESS_DDK_ALLOWED\", // 选填项，允许应用访问。此处“true”表示允许访问，“false”表示不允许访问，配置错误或不配置，默认为“false”。\n            \"value\": \"true\"\n          }\n        ]\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完成客户端和驱动示例代码开发后，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device",
            children: "使用本地真机运行应用/元服务"
          }), "，将Hap导入设备中，并点击hap中的Hello，查看是否会转变为Hello world，即实现ipc通信功能。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "扩展设备能力",
      children: "扩展设备能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扩展外设管理目前提供了HidDdk、UsbDdk、USBSerialDDK和ScsiPeripheralDDK四种能力，用于扩展外设专项驱动的开发。具体使用方法，请参考："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-hardware/driver-development-kit/specialized-driver-development/hid-ddk-guidelines",
          children: "开发适用HID协议的设备驱动"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-hardware/driver-development-kit/specialized-driver-development/usb-ddk-guidelines",
          children: "开发适用USB协议的设备驱动"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-hardware/driver-development-kit/specialized-driver-development/usb-serial-ddk-guidelines",
          children: "开发适用串口协议的设备驱动"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-hardware/driver-development-kit/specialized-driver-development/scsi-peripheral-ddk-guidelines",
          children: "开发使用SCSI协议的设备驱动"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用签名",
      children: "应用签名"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意："
        })
      }), " 先配置权限，再自动签名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用需要配置签名文件才能在设备上运行，并且扩展外设管理客户端开发，需要配置扩展外设的权限：ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在module.json5配置文件的requestPermissions标签中", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "后，即可获得授权。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ohos.permission.ACCESS_DDK_DRIVERS"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在module.json5配置文件的requestPermissions标签中", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
              children: "声明权限"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["HarmonyAppProvision配置文件中，修改acls字段，跨级别申请权限，可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
              children: "申请使用受限权限"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成权限配置后，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing",
        children: "自动签名"
      }), "对应用进行签名。"]
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