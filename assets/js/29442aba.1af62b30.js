"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["275505"], {
406625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_connectivity_api_connectivity_arkts_is_fusionconnectivity_partneragentextensionability_is_fusionconnectivity_partneragentextensionability_md_294_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-connectivity-api-connectivity-arkts-is-fusionconnectivity-partneragentextensionability-is-fusionconnectivity-partneragentextensionability-md-294.json
var site_docs_ref_system_network_api_connectivity_api_connectivity_arkts_is_fusionconnectivity_partneragentextensionability_is_fusionconnectivity_partneragentextensionability_md_294_namespaceObject = JSON.parse('{"id":"system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability","title":"@ohos.FusionConnectivity.PartnerAgentExtensionAbility (支持设备状态通知的ExtensionAbility组件)","description":"PartnerAgentExtensionAbility是外设互通扩展能力的基础类，提供设备发现与设备下线的通知功能，需要应用继承实现。应用模块级配置文件module.json5 中的extensionabilities的type属性应该配置为partnerAgent。","source":"@site/docs-ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability.md","sourceDirName":"system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability","slug":"/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"title":"@ohos.FusionConnectivity.PartnerAgentExtensionAbility (支持设备状态通知的ExtensionAbility组件)","sidebar_position":23,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/is-fusionconnectivity-partneragentextensionability","kit":"系统","last_updated":"2026-04-22","slug":"is-fusionconnectivity-partneragentextensionability"},"sidebar":"ref","previous":{"title":"@ohos.FusionConnectivity.PartnerAgentExtensionContext (设备状态通知能力上下文)","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensioncontext/is-fusionconnectivity-partneragentextensioncontext"},"next":{"title":"nfctech (标准NFC-Tag Nfc 技术)","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/connectivity-nfc-tag-arkts/js-apis-nfctech/js-apis-nfctech"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability.md


const frontMatter = {
	title: '@ohos.FusionConnectivity.PartnerAgentExtensionAbility (支持设备状态通知的ExtensionAbility组件)',
	sidebar_position: 23,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/is-fusionconnectivity-partneragentextensionability',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'is-fusionconnectivity-partneragentextensionability'
};
const contentTitle = '@ohos.FusionConnectivity.PartnerAgentExtensionAbility (支持设备状态通知的ExtensionAbility组件)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "PartnerDeviceAddress",
  "id": "partnerdeviceaddress",
  "level": 2
}, {
  "value": "PartnerAgentExtensionAbilityDestroyReason",
  "id": "partneragentextensionabilitydestroyreason",
  "level": 2
}, {
  "value": "PartnerAgentExtensionAbility",
  "id": "partneragentextensionability",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "onDestroyWithReason",
  "id": "ondestroywithreason",
  "level": 3
}, {
  "value": "onDeviceDiscovered",
  "id": "ondevicediscovered",
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
    p: "p",
    pre: "pre",
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
        id: "ohosfusionconnectivitypartneragentextensionability-支持设备状态通知的extensionability组件",
        children: "@ohos.FusionConnectivity.PartnerAgentExtensionAbility (支持设备状态通知的ExtensionAbility组件)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PartnerAgentExtensionAbility是外设互通扩展能力的基础类，提供设备发现与设备下线的通知功能，需要应用继承实现。应用模块级配置文件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), " 中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
        children: "extensionabilities"
      }), "的type属性应该配置为partnerAgent。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(881712)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 23开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块接口仅可在Stage模型下使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PartnerAgentExtensionAbility, partnerAgent } from '@kit.ConnectivityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partnerdeviceaddress",
      children: "PartnerDeviceAddress"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type PartnerDeviceAddress = partnerAgent.PartnerDeviceAddress"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述设备地址信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-fusionconnectivity-partneragent/js-apis-fusionconnectivity-partneragent#partneragentpartnerdeviceaddress",
              children: "partnerAgent.PartnerDeviceAddress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "信息互通设备的地址信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentextensionabilitydestroyreason",
      children: "PartnerAgentExtensionAbilityDestroyReason"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type PartnerAgentExtensionAbilityDestroyReason = partnerAgent.PartnerAgentExtensionAbilityDestroyReason"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述PartnerAgentExtensionAbility被销毁的原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-fusionconnectivity-partneragent/js-apis-fusionconnectivity-partneragent#partneragentpartneragentextensionabilitydestroyreason",
              children: "partnerAgent.PartnerAgentExtensionAbilityDestroyReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PartnerAgentExtensionAbility被销毁的原因。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentextensionability",
      children: "PartnerAgentExtensionAbility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PartnerAgentExtensionAbility是外设互通扩展能力的基础类，提供设备发现与设备下线的通知功能，需要应用继承实现。本能力继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-extensionability/js-apis-app-ability-extensionability",
        children: "ExtensionAbility"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "： SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensioncontext/is-fusionconnectivity-partneragentextensioncontext",
              children: "PartnerAgentExtensionContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PartnerAgentExtensionAbility的上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondestroywithreason",
      children: "onDestroyWithReason"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDestroyWithReason(reason: PartnerAgentExtensionAbilityDestroyReason): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外设互通扩展能力被销毁时触发的方法回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-fusionconnectivity-partneragent/js-apis-fusionconnectivity-partneragent#partneragentpartneragentextensionabilitydestroyreason",
              children: "PartnerAgentExtensionAbilityDestroyReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知销毁该应用的原因。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default class PartnerAgentExtAbility extends PartnerAgentExtensionAbility {\n  onDestroyWithReason(reason: partnerAgent.PartnerAgentExtensionAbilityDestroyReason): void {\n    console.info(`onDestroyWithReason is: ${reason}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondevicediscovered",
      children: "onDeviceDiscovered"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDeviceDiscovered(deviceAddress: PartnerDeviceAddress): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当已注册的设备被发现时，系统会调用此回调方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-fusionconnectivity-partneragent/js-apis-fusionconnectivity-partneragent#partneragentpartnerdeviceaddress",
              children: "PartnerDeviceAddress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用注册的设备地址信息。  应用需在PartnerDeviceAddress类型中设置bluetoothAddress选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default class PartnerAgentExtAbility extends PartnerAgentExtensionAbility {\n  onDeviceDiscovered(deviceAddress: partnerAgent.PartnerDeviceAddress): void {\n    console.info(`onDeviceDiscovered success: ${deviceAddress.bluetoothAddress}`);\n  }\n}\n"
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
881712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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