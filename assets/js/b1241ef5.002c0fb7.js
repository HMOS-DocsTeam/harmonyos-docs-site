"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["976032"], {
150626(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_wallet_kit_guide_wallet_transport_wallet_transport_operation_wallet_transport_operation_md_b12_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-wallet-kit-guide-wallet-transport-wallet-transport-operation-wallet-transport-operation-md-b12.json
var site_docs_wallet_kit_guide_wallet_transport_wallet_transport_operation_wallet_transport_operation_md_b12_namespaceObject = JSON.parse('{"id":"wallet-kit-guide/wallet-transport/wallet-transport-operation/wallet-transport-operation","title":"交通卡开通","description":"交通卡的开通过程分为：获取卡片开通入口、确认卡片是否支持添加、生成并支付订单和完成开卡四个步骤，整体流程如下图，相关接口定义请参考钱包服务API。","source":"@site/docs/wallet-kit-guide/wallet-transport/wallet-transport-operation/wallet-transport-operation.md","sourceDirName":"wallet-kit-guide/wallet-transport/wallet-transport-operation","slug":"/wallet-kit-guide/wallet-transport/wallet-transport-operation/","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-transport/wallet-transport-operation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"交通卡开通","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-transport-operation","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"云侧准备","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-transport/wallet-transport-cloud/"},"next":{"title":"交通卡充值","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-transport/wallet-transport-recharge/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/wallet-kit-guide/wallet-transport/wallet-transport-operation/wallet-transport-operation.md


const frontMatter = {
	title: '交通卡开通',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-transport-operation',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '交通卡开通';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "交通卡开通",
        children: "交通卡开通"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["交通卡的开通过程分为：获取卡片开通入口、确认卡片是否支持添加、生成并支付订单和完成开卡四个步骤，整体流程如下图，相关接口定义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/wallet-api/wallet-arkts/wallet-wallettransitcard/wallet-wallettransitcard",
        children: "钱包服务API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(156709)/* ["default"] */.A) + "",
        width: "1499",
        height: "2289"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者的app启动后，可调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-wallettransitcard/wallet-wallettransitcard#getcardmetadataindevice",
          children: "getCardMetadataInDevice"
        }), "接口获取指定设备上开发者的app可以访问的交通卡的信息以数组的方式返回。如返回的数组为空，则表示开发者的app在该设备上没有可访问的交通卡，无需显示卡片开通入口；如返回数组不为空，则按具体的交通卡信息做展示。如果交通卡信息中包括卡号、余额信息，则表明该卡片在设备上已开通，显示卡片信息即可；否则可显示卡片的开通入口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["用户在选择开通交通卡后，先调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-wallettransitcard/wallet-wallettransitcard#canaddtransitcard",
          children: "canAddTransitCard"
        }), "传入issuerId和指定的设备Id接口，钱包会检查指定设备上目标卡片的开卡条件是否满足，如有条件不满足，会返回相应错误码，可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-error-code/wallet-error-code",
          children: "ArkTS API错误码"
        }), "，按错误码类型给用户具体的错误提示。如条件满足则会返回开卡凭证数据addCardOpaqueData。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在开卡条件检查通过获取到开卡凭证数据后，开发者的app需要将用户的开卡和首充值的订单信息连同开卡凭证addCardOpaqueData一起提交给开发者的服务器生成开卡+首充的订单，addCardOpaqueData需和订单关联存储。开发者的服务器将订单提交给支付机构，在用户授权完成支付并收到支付机构的支付完成通知后，向卡公司的SP TSM服务器下发开卡+首充值的订单数据，其中需要包括addCardOpaqueData数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在确认订单支付完成后，开发者的app可调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-wallettransitcard/wallet-wallettransitcard#addtransitcard",
          children: "addTransitCard"
        }), "接口并传入addCardOpaqueData和serverOrderId进行开卡过程。开卡过程会跳转到钱包app的页面进行，开卡成功后会返回到开发者的app并且会携带卡片的基本数据，包括卡号和余额信息。开卡过程中如出现失败，钱包app会自动重试，如重试不成功钱包app会自动发起回滚将订单申请退款。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备上支持开通的交通卡列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化TransitCardClient时，构造方法的第二个入参callerId是接口调用方ID。开发者可以联系钱包运营申请交通卡服务时获取。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletTransitCard } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private transitCardClient: walletTransitCard.TransitCardClient = new walletTransitCard.TransitCardClient(this.getUIContext().getHostContext() as common.UIAbilityContext, 'callerId');\n\n  async getCardMetadataInDevice() {\n    this.transitCardClient.getCardMetadataInDevice(walletTransitCard.DeviceType.DEVICE_PHONE).then((result) => {\n      console.info(`Succeeded in getting cardMetadataInDevice`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to get CardMetadataInDevice, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取开卡addCardOpaqueData。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选中一张交通卡，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-wallettransitcard/wallet-wallettransitcard#canaddtransitcard",
            children: "canAddTransitCard"
          }), "接口，获取开卡addCardOpaqueData。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletTransitCard } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private transitCardClient: walletTransitCard.TransitCardClient = new walletTransitCard.TransitCardClient(this.getUIContext().getHostContext() as common.UIAbilityContext, 'callerId');\n\n  async canAddTransitCard() {\n    // the issuerId returned by the getCardMetadataInDevice interface\n    const issuerId = 'issuerId';\n    // the specifiedDeviceId returned by the getCardMetadataInDevice interface\n    const specifiedDeviceId = 'specifiedDeviceId';\n    this.transitCardClient.canAddTransitCard(issuerId, specifiedDeviceId).then((result) => {\n      console.info(`Succeeded in canning AddTransitCard`);\n      // save the result as the input parameter addCardOpaqueData of addTransitCard.\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to can AddTransitCard, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开通交通卡。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用步骤2获取到的addCardOpaqueData，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/wallet-api/wallet-arkts/wallet-wallettransitcard/wallet-wallettransitcard#addtransitcard",
            children: "addTransitCard"
          }), "接口开通交通卡。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletTransitCard } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private transitCardClient: walletTransitCard.TransitCardClient = new walletTransitCard.TransitCardClient(this.getUIContext().getHostContext() as common.UIAbilityContext, 'callerId');\n\n  async addTransitCard() {\n    // order ID generated after payment in a developer's app, which is implemented by the developer\n    let serverOrderId = 'serverOrderId';\n    // the addCardOpaqueData returned by step 2\n    let addCardOpaqueData = 'addCardOpaqueData';\n    this.transitCardClient.addTransitCard(addCardOpaqueData, serverOrderId).then((result) => {\n      console.info(`Succeeded in adding TransitCard`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to add TransitCard, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
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
156709(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479205-e6c5b98fc99fdc55a36ecb89ed8c249e.png");

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