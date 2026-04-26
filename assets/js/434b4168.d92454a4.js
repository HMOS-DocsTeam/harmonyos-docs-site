"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["468118"], {
51658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_common_pay_connect_payment_launch_third_party_payment_payment_launch_third_party_payment_sdk_payment_launch_third_party_payment_sdk_md_434_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-common-pay-connect-payment-launch-third-party-payment-payment-launch-third-party-payment-sdk-payment-launch-third-party-payment-sdk-md-434.json
var site_docs_payment_kit_guide_payment_common_pay_connect_payment_launch_third_party_payment_payment_launch_third_party_payment_sdk_payment_launch_third_party_payment_sdk_md_434_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-sdk/payment-launch-third-party-payment-sdk","title":"基于接口拉起方式","description":"- 当前基于接口拉起方式拉起三方支付收银台支持的支付方式参见PayMethod。","source":"@site/docs/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-sdk/payment-launch-third-party-payment-sdk.md","sourceDirName":"payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-sdk","slug":"/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-sdk/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-sdk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"基于接口拉起方式","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-launch-third-party-payment-sdk","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于URL跳转方式","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-url/"},"next":{"title":"三方支付问题处理","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-third-party-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-common-pay-connect/payment-launch-third-party-payment/payment-launch-third-party-payment-sdk/payment-launch-third-party-payment-sdk.md


const frontMatter = {
	title: '基于接口拉起方式',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-launch-third-party-payment-sdk',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '基于接口拉起方式';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "基于接口拉起方式",
        children: "基于接口拉起方式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(754389)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当前基于接口拉起方式拉起三方支付收银台支持的支付方式参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#paymethod",
          children: "PayMethod"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于接口拉起三方支付收银台起始版本为：6.0.0(20)。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["商户客户端根据Payment Kit接口返回的支付信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#payresult",
            children: "PayResult"
          }), "(混合支付场景）/", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-arkts/payment-paymentservice/payment-paymentservice#pickerresult",
            children: "PickerResult"
          }), "（纯外部支付场景），按照三方支付平台接入要求构建三方支付信息", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#payinfo",
            children: "payInfo"
          }), "调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#pay",
            children: "ThirdPayClient.pay"
          }), "接口拉起三方支付收银台。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拉起三方支付收银台示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { thirdPaymentService } from '@kit.PaymentKit';\nimport { common } from '@kit.AbilityKit';\n\nexport let thirdPayClient: thirdPaymentService.ThirdPayClient | undefined = undefined;\n\n@Entry\n@Component\nstruct Index {\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  thirdPaymentServicePayPromise() {\n    thirdPayClient = new thirdPaymentService.ThirdPayClient(this.context, thirdPaymentService.PayMethod.WECHAT_PAY, \"appid_123456\");\n    // use your own payInfo\n    const payInfo = '{\"xxx1\":\"***\", \"xxx2\":\"***\", \"token\":\"***\"}';\n    thirdPayClient.pay(payInfo).then(() => {\n        // succeeded in paying\n        console.info('succeeded in paying.');\n      }).catch((error: BusinessError) => {\n        // failed to pay\n        console.error(`failed to pay, error.code: ${error.code}, error.message: ${error.message}`);\n      });\n  }\n\n  build() {\n    Column() {\n      Button('thirdPaymentServicePayPromise')\n        .type(ButtonType.Capsule)\n        .width('50%')\n        .margin(20)\n        .onClick(() => {\n          this.thirdPaymentServicePayPromise();\n        })\n      }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["拉起三方支付收银台可同步通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-arkts/payment-third-payment-service/payment-third-payment-service#handlepaycallback",
            children: "ThirdPayClient.handlePayCallback"
          }), "接口（用户支付完成后，会将支付操作结果回调给商户客户端），获取三方支付处理结果，完成支付操作处理。参考示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { UIAbility, Want } from '@kit.AbilityKit';\n// 需要从thirdPayClient对象定义的代码文件中导入三方支付客户端对象，以下为示例，具体以应用定义路径为准。\nimport { thirdPayClient } from '../pages/thirdPaymentServicetest';\n\n// 如果已有Ability实现类，可直接添加onNewWant生命周期方法处理即可。\nexport default class EntryAbility extends UIAbility {\n  onNewWant(want: Want): void {\n    // 需要和拉起支付收银台的三方支付客户端对象为同一个\n    if (thirdPayClient) {\n      hilog.info(0x0000, 'testTag', '%{public}s','clientForThirdPayment handlePayCallback');\n      let handlePayCallback = thirdPayClient.handlePayCallback(want);\n      hilog.info(0x0000, 'testTag', 'clientForThirdPayment handlePayCallback result: %{public}s', handlePayCallback);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "商户客户端收到三方支付回调通知或主动查询订单支付结果成功后，按照三方支付平台要求完成订单支付后的下一步业务处理，如对返回的支付结果信息验签等。"
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
754389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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