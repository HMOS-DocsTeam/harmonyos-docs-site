"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["309722"], {
725413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_nfc_nfc_se_access_guide_nfc_se_access_guide_md_9ed_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-nfc-nfc-se-access-guide-nfc-se-access-guide-md-9ed.json
var site_docs_system_network_connectivity_kit_nfc_nfc_se_access_guide_nfc_se_access_guide_md_9ed_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/nfc/nfc-se-access-guide/nfc-se-access-guide","title":"安全单元访问开发指南","description":"简介","source":"@site/docs/system-network/connectivity-kit/nfc/nfc-se-access-guide/nfc-se-access-guide.md","sourceDirName":"system-network/connectivity-kit/nfc/nfc-se-access-guide","slug":"/system-network/connectivity-kit/nfc/nfc-se-access-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/nfc/nfc-se-access-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"安全单元访问开发指南","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nfc-se-access-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HCE卡模拟开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/nfc/nfc-hce-guide/"},"next":{"title":"WLAN服务开发概述","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/wlan-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/nfc/nfc-se-access-guide/nfc-se-access-guide.md


const frontMatter = {
	title: '安全单元访问开发指南',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nfc-se-access-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '安全单元访问开发指南';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "主要场景开发步骤",
  "id": "主要场景开发步骤",
  "level": 2
}, {
  "value": "应用程序访问安全单元",
  "id": "应用程序访问安全单元",
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
        id: "安全单元访问开发指南",
        children: "安全单元访问开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "电子设备上可能存在一个或多个安全单元（SecureElement，简称SE），比如有eSE(Embedded SE)和SIM卡。安全单元的访问控制，通过GPAC（GlobalPlatform Access Control）规范实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用程序可以通过接口访问安全单元，比如往安全单元里面写入数据，实现在电子设备上模拟一张NFC卡片的目的。该卡片数据可能存储在eSE安全单元，或在SIM卡安全单元上。安全单元上一般会预置有访问控制规则（GPAC规范），应用程序需要具备对应的权限，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-secureelement/js-apis-secureelement",
        children: "安全单元接口"
      }), "，也就是通过安全单元的访问控制权限校验之后，才能正常访问安全单元。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["安全单元完整的API说明以及示例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-secureelement/js-apis-secureelement",
        children: "安全单元接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现安全单元的访问，需要使用到下面的接口。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持版本"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createService(): Promise<SEService>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 12开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建立一个可用于连接到系统中所有可用SE的新连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getReaders(): Reader[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 10开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回可用SE Reader的数组，包含该设备上支持的所有的安全单元。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openSession(): Session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 10开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在SE Reader实例上创建连接会话，返回Session实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openLogicalChannel(aid: number[]): Promise<Channel>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 10开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开逻辑通道，返回逻辑Channel实例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transmit(command: number[]): Promise<number[]>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 10开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向SE发送APDU数据"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "close(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 10开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭Channel。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主要场景开发步骤",
      children: "主要场景开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用程序访问安全单元",
      children: "应用程序访问安全单元"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import需要的安全单元模块。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "判断设备是否支持安全单元能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "访问安全单元，实现数据的读取或写入。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "释放通道资源。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(673520)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 9之后的应用开发新增支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#stage%E6%A8%A1%E5%9E%8B",
          children: "Stage模型"
        }), "，作为目前主推并长期演进的模型。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于SE的安全级别较高，必须将构建模式设置为release进行打包，否则应用将无法正常运行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { omapi } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nlet seService: omapi.SEService;\nlet seReaders: omapi.Reader[];\nlet seSession: omapi.Session;\nlet seChannel: omapi.Channel;\nlet testSelectedAid: number[] = [0xA0, 0x00, 0x00, 0x00, 0x03, 0x10, 0x10];\nlet p2: number = 0x00;\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n\n    // 判断设备是否支持安全单元能力\n    if (!canIUse(\"SystemCapability.Communication.SecureElement\")) {\n      hilog.error(0x0000, 'testTag', 'secure element unavailable.');\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'secure element available.');\n    this.omaTest();\n  }\n\n  private async omaTest() {\n    // 创建安全单元service，用于访问安全单元\n    await omapi.createService().then((data) => {\n      if (data == undefined || !data.isConnected()) {\n        hilog.error(0x0000, 'testTag', 'secure element service disconnected.');\n        return;\n      }\n      seService = data;\n      hilog.info(0x0000, 'testTag', 'secure element service connected.');\n    }).catch((error: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'createService error %{public}s', JSON.stringify(error));\n      return;\n    });\n\n    // 获取设备上所有支持的readers，即所有的安全单元列表\n    try {\n      seReaders = seService.getReaders();\n    } catch (error) {\n      hilog.error(0x0000, 'testTag', 'getReaders error %{public}s', JSON.stringify(error));\n    }\n    if (seReaders == undefined || seReaders.length == 0) {\n      hilog.error(0x0000, 'testTag', 'no valid reader found.');\n      seService.shutdown();\n      return;\n    }\n\n    // 根据业务需求，选择一个安全单元来访问，比如选择eSE或SIM或SIM2，其中SIM2从API version 22开始支持\n    let reader: (omapi.Reader | undefined);\n    for (let i = 0; i < seReaders.length; ++i) {\n      let r = seReaders[i];\n      // 安全单元的Name来区分，比如是eSE或SIM或SIM2\n      if (r.getName() === 'SIM') {\n        reader = r;\n        break;\n      }\n    }\n    if (reader == undefined) {\n      hilog.error(0x0000, 'testTag', 'no valid sim reader.');\n      seService.shutdown();\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'reader is %{public}s', reader?.getName());\n\n    // 在选定的一个安全单元实例上，打开一个会话session\n    try {\n      seSession = reader?.openSession() as omapi.Session;\n    } catch (error) {\n      hilog.error(0x0000, 'testTag', 'openSession error %{public}s', JSON.stringify(error));\n    }\n    if (seSession == undefined) {\n      hilog.error(0x0000, 'testTag', 'seSession invalid.');\n      seService.shutdown();\n      return;\n    }\n\n    // 通过会话session实例，创建逻辑通道或基础通道，一般选择逻辑通道访问，因为基础通道可能是受限的\n    try {\n      // testSelectedAid 根据实际业务，修改为打开逻辑通道的应用的aid值\n      seChannel = await seSession.openLogicalChannel(testSelectedAid, p2);\n    } catch (exception) {\n      hilog.error(0x0000, 'testTag', 'openLogicalChannel exception %{public}s', JSON.stringify(exception));\n    }\n\n    if (seChannel == undefined) {\n      hilog.error(0x0000, 'testTag', 'seChannel invalid.');\n      seService.shutdown();\n      return;\n    }\n\n    // 使用通道发送APDU数据到安全单元，testApduData根据实际业务，修改为正确的业务数据值。所填充的APDU数据格式，需要符合APDU规范。\n    let testApduData = [0x01, 0x02, 0x03, 0x04];\n    try {\n      let response: number[] = await seChannel.transmit(testApduData);\n      hilog.info(0x0000, 'testTag', 'seChannel.transmit() response = %{public}s.', JSON.stringify(response));\n    } catch (exception) {\n      hilog.error(0x0000, 'testTag', 'seChannel.transmit() exception = %{public}s.', JSON.stringify(exception));\n    }\n\n    // 通道访问结束后，必须确保通道资源是关闭的\n    try {\n      seChannel.close();\n    } catch (exception) {\n      hilog.error(0x0000, 'testTag', 'seChannel.close() exception = %{public}s.', JSON.stringify(exception));\n    }\n\n    // 关闭服务资源，关闭应用程序和安全单元服务的绑定关系\n    seService.shutdown();\n  }\n}\n"
      })
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
673520(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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