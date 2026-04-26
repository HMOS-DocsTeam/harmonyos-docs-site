"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["310211"], {
814655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_wallet_kit_guide_wallet_transport_wallet_transport_recharge_wallet_transport_recharge_md_f9d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-wallet-kit-guide-wallet-transport-wallet-transport-recharge-wallet-transport-recharge-md-f9d.json
var site_docs_wallet_kit_guide_wallet_transport_wallet_transport_recharge_wallet_transport_recharge_md_f9d_namespaceObject = JSON.parse('{"id":"wallet-kit-guide/wallet-transport/wallet-transport-recharge/wallet-transport-recharge","title":"交通卡充值","description":"交通卡的充值过程分为：卡片展示、生成并支付充值订单和发起充值三个步骤，整体流程如下图，相关接口定义请参照钱包服务API。","source":"@site/docs/wallet-kit-guide/wallet-transport/wallet-transport-recharge/wallet-transport-recharge.md","sourceDirName":"wallet-kit-guide/wallet-transport/wallet-transport-recharge","slug":"/wallet-kit-guide/wallet-transport/wallet-transport-recharge/","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-transport/wallet-transport-recharge/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"交通卡充值","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-transport-recharge","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"交通卡开通","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-transport/wallet-transport-operation/"},"next":{"title":"交通卡更新","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-transport/wallet-transport-update/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/wallet-kit-guide/wallet-transport/wallet-transport-recharge/wallet-transport-recharge.md


const frontMatter = {
	title: '交通卡充值',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wallet-transport-recharge',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '交通卡充值';

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
        id: "交通卡充值",
        children: "交通卡充值"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["交通卡的充值过程分为：卡片展示、生成并支付充值订单和发起充值三个步骤，整体流程如下图，相关接口定义请参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/wallet-api/wallet-arkts/wallet-wallettransitcard/wallet-wallettransitcard",
        children: "钱包服务API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(696514)/* ["default"] */.A) + "",
        width: "1277",
        height: "1253"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者的app启动后，可调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-wallettransitcard/wallet-wallettransitcard#getcardmetadataindevice",
          children: "getCardMetadataInDevice"
        }), "接口获取指定设备上开发者的app可以访问的交通卡的信息以数组的方式返回。如返回的数组为空，则表示开发者的app在该设备上没有可访问的交通卡，无需显示卡片开通入口；如返回数组不为空，则按具体的交通卡信息做展示。如果交通卡信息中包括卡号、余额信息，则表明该卡片在设备上已开通，显示卡片信息即可；否则可显示卡片的开通入口。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户选择了给指定的交通卡充值时，开发者的app需向开发者的后台服务器发起充值订单的生成请求，并让用户完成支付。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者的app在查询到订单已支付完成后，可调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-wallettransitcard/wallet-wallettransitcard#rechargetransitcard",
          children: "rechargeTransitCard"
        }), "接口发起将订单金额充值到卡内的处理过程。如果充值正常结束，开发者的app会收到充值成功的返回值并携带了新的余额；如果充值过程出现失败，在钱包app自行发起重试后仍然失败的情况下，钱包会发起订单退款的请求。在SP TSM或开发者的后台服务器确认订单状态是可退款的情况下，需调用对应支付渠道的订单撤销接口，将订单金额原路退回，这种情况下开发者的app会收到充值失败的错误码，可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/wallet-api/wallet-arkts/wallet-error-code/wallet-error-code",
          children: "ArkTS API错误码"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备上已开通的交通卡列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化TransitCardClient时，构造方法的第二个入参callerId是接口调用方ID。开发者可以联系钱包运营申请交通卡服务时获取。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletTransitCard } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private transitCardClient: walletTransitCard.TransitCardClient = new walletTransitCard.TransitCardClient(this.getUIContext().getHostContext() as common.UIAbilityContext, 'callerId');\n\n  async getCardMetadataInDevice() {\n    this.transitCardClient.getCardMetadataInDevice(walletTransitCard.DeviceType.DEVICE_PHONE).then((result) => {\n      console.info(`Succeeded in getting cardMetadataInDevice`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to get CardMetadataInDevice, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "交通卡充值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { walletTransitCard } from '@kit.WalletKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private transitCardClient: walletTransitCard.TransitCardClient = new walletTransitCard.TransitCardClient(this.getUIContext().getHostContext() as common.UIAbilityContext, 'callerId');\n\n  async rechargeTransitCard() {\n    // number of the enabled traffic card returned by the getCardMetadataInDevice interface\n    const logicalCardNumber = 'logicalCardNumber';\n    // the specifiedDeviceId returned by the getCardMetadataInDevice interface\n    const specifiedDeviceId = 'specifiedDeviceId';\n    // order ID generated after payment in a developer's app, which is implemented by the developer\n    const serverOrderId = 'serverOrderId';\n    this.transitCardClient.rechargeTransitCard(logicalCardNumber, specifiedDeviceId, serverOrderId).then((result) => {\n      console.info(`Succeeded in recharging TransitCard`);\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to recharge TransitCard, code:${err.code}, message:${err.message}`);\n    })\n  }\n\n  build() {\n    // your application UI\n  }\n}\n"
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
696514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799556-aa25d8f72d8a8bcadfddc6e55371ba69.png");

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