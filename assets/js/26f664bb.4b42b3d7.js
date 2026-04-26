"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["672418"], {
992400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_preparations_payment_product_configuration_payment_product_configuration_md_26f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-preparations-payment-product-configuration-payment-product-configuration-md-26f.json
var site_docs_payment_kit_guide_payment_preparations_payment_product_configuration_payment_product_configuration_md_26f_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-preparations/payment-product-configuration/payment-product-configuration","title":"（可选）特定场景配置操作","description":"如涉及以下场景，需提前完成相关产品的开通或配置操作。如不涉及，请直接跳转下一章节。","source":"@site/docs/payment-kit-guide/payment-preparations/payment-product-configuration/payment-product-configuration.md","sourceDirName":"payment-kit-guide/payment-preparations/payment-product-configuration","slug":"/payment-kit-guide/payment-preparations/payment-product-configuration/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-product-configuration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"（可选）特定场景配置操作","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-product-configuration","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"商户入网和获取商户号","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-merc-regist-apply/"},"next":{"title":"开通支付服务","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-config-agc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-preparations/payment-product-configuration/payment-product-configuration.md


const frontMatter = {
	title: '（可选）特定场景配置操作',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-product-configuration',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '（可选）特定场景配置操作';

const assets = {

};



const toc = [{
  "value": "场景一：产品开通操作",
  "id": "场景一产品开通操作",
  "level": 2
}, {
  "value": "场景二：涉及结算账单下载",
  "id": "场景二涉及结算账单下载",
  "level": 2
}, {
  "value": "场景三：服务商代特约商户发起退款",
  "id": "场景三服务商代特约商户发起退款",
  "level": 2
}, {
  "value": "场景四：设置支付账户留存金额",
  "id": "场景四设置支付账户留存金额",
  "level": 2
}, {
  "value": "场景五：涉及账单分账",
  "id": "场景五涉及账单分账",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "可选特定场景配置操作",
        children: "（可选）特定场景配置操作"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如涉及以下场景，需提前完成相关产品的开通或配置操作。如不涉及，请直接跳转", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-preparations/payment-config-agc",
        children: "下一章节"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景一产品开通操作",
      children: "场景一：产品开通操作"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["部分支付场景接入涉及产品开通，未开通产品直接接入，商户请求华为支付开放的API接口时可能会导致“商户未找到对应的产品示例”、“不支持的操作”等异常响应。开通产品需商户侧与华为支付侧沟通（合作咨询可", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-service-support",
        children: "点击此处"
      }), "）后申请开通对应产品。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及产品开通的支付场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-partner-combined",
          children: "平台类商户合单支付场景"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-password-free-pay/payment-pay-and-sign",
          children: "支付并签约场景"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-password-free-pay/payment-withhold-process",
          children: "签约代扣场景"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-common-pay-connect/payment-common-pay-introduction",
          children: "通用收银台支付相关场景"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及商户：直连商户、服务商、平台类商户"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理人：商户产品、商户BD等"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景二涉及结算账单下载",
      children: "场景二：涉及结算账单下载"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需要生成及下载账单，需商户在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "入网时设置的管理员先在“", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), " > 商户中心 > 产品功能 > 功能设置”中开启“账单接口获取开关”，开启后", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "次日开始生成"
        })
      }), "前一日的账单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(16369)/* ["default"] */.A) + "",
        width: "1447",
        height: "546"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及商户：直连商户、服务商、平台类商户"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["处理人：商户在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "设置的超级管理员"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景三服务商代特约商户发起退款",
      children: "场景三：服务商代特约商户发起退款"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["服务商商户模型接入，特约商户需要发起退款，涉及", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "服务商代特约商户发起退款"
        })
      }), "，需要服务商在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "上", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-apituikuan-0000002371871965",
        children: "申请API退款授权"
      }), "完成特约商户退款授权操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及商户：服务商"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["处理人：商户在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "设置的超级管理员"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景四设置支付账户留存金额",
      children: "场景四：设置支付账户留存金额"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户交易款项会结算到卡，商户可", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-zhanghuyue-0000002344207501#section1946479152718",
        children: "设置支付账户留存金额阈值"
      }), "并充值留存一定的余额在支付账户，以此保证退款功能正常可用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及商户：直连商户、服务商、平台类商户"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["处理人：商户在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "设置的超级管理员"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景五涉及账单分账",
      children: "场景五：涉及账单分账"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["商户如需对订单进行分账操作，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-prepay/payment-prepay",
        children: "直连商户预下单"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-agent-merc/payment-partner-pay/payment-agent-prepay/payment-agent-prepay",
        children: "平台类商户/服务商预下单"
      }), "接口中allocationType字段实现，使用该字段前需商户侧与华为支付侧沟通（合作咨询可", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-service-support",
        children: "点击此处"
      }), "）后申请开通并配置分账能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["分账相关操作参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-fenzhangjiaoyi-0000001723142294",
        children: "分账交易管理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及商户：直连商户、服务商、平台类商户"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["处理人：商户在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://petalpay-merchant.cloud.huawei.com/",
        children: "华为支付商户平台"
      }), "设置的超级管理员"]
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
16369(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959074-08cf69977e948115e259913e9e3ecb7a.png");

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