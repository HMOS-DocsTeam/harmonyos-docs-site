"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["558439"], {
847137(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_dev_guide_iap_dev_guide_md_f78_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-dev-guide-iap-dev-guide-md-f78.json
var site_docs_iap_kit_guide_iap_dev_guide_iap_dev_guide_md_f78_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-dev-guide/iap-dev-guide","title":"使用入门","description":"快速上手体验","source":"@site/docs/iap-kit-guide/iap-dev-guide/iap-dev-guide.md","sourceDirName":"iap-kit-guide/iap-dev-guide","slug":"/iap-kit-guide/iap-dev-guide/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-dev-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"使用入门","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-dev-guide","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"IAP Kit接入规范","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-access-specifications/"},"next":{"title":"开通商户服务","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-merchant-service/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-dev-guide/iap-dev-guide.md


const frontMatter = {
	title: '使用入门',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-dev-guide',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用入门';

const assets = {

};



const toc = [{
  "value": "快速上手体验",
  "id": "快速上手体验",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用入门",
        children: "使用入门"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快速上手体验",
      children: "快速上手体验"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在正式开发应用之前，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/tutorials_IAPKit-ArkTS",
        children: "Codelab"
      }), "快速体验一个应用的开发过程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要按照流程来完成应用的开发工作，完整的开发流程如下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "步骤"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-merchant-service",
              children: "开通商户服务"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在开发应用前，请先参考“", (0,jsx_runtime.jsx)(_components.a, {
              href: "/application-dev-overview",
              children: "应用开发准备"
            }), "”完成基本准备工作。其中", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "配置签名信息"
              })
            }), "时，请使用", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "手动签名"
              })
            }), "方式。  开发者需开通商户服务才能开启应用内购买服务。商户服务里配置的银行卡账号、币种，用于开发者接收华为分成收益。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-create-project-and-application",
              children: "创建项目和应用"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在开始应用开发前，开发者需要先在", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "上完成项目和应用的创建。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-in-app-purchases",
              children: "开启和激活应用内购买服务"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者需开启和激活应用内购买服务才能使用华为应用内支付服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters",
              children: "（可选）配置应用内购买服务参数"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 配置订单/订阅通知接收地址。  - 配置密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-preparations/iap-config-product",
              children: "配置商品信息"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者需要在", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
              children: "AppGallery Connect"
            }), "中完成相关商品配置。在应用调用购买接口时，需传入此处配置的商品ID和商品类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-preparations/iap-config-sign",
              children: "配置签名"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者需要在IDE上完成签名配置，确保能顺利完成项目的编译与开发"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-preparations/iap-config-app-identity-info",
              children: "配置应用身份信息"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在应用工程中配置bundleName、Client ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-purchases/iap-purchase/iap-integrate-purchase",
              children: "商品购买"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-purchases/iap-purchase/iap-integrate-purchase",
              children: "开发消耗型、非消耗型商品购买功能"
            }), "：接入消耗型、非消耗型商品购买功能，主要包括商品列表展示、购买、权益发放等，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-purchases/iap-purchase/iap-integrate-purchase",
              children: "接入购买"
            }), "。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions",
              children: "开发自动续期订阅商品购买功能"
            }), "：开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-subscription-functions",
              children: "自动续期订阅说明"
            }), "了解订阅的相关概念以及支持的功能。具体开发过程可参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-purchases/iap-subscription/iap-integrate-subscription",
              children: "接入自动续期订阅"
            }), "。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-purchases/iap-nonrenewable/iap-integrate-nonrenewable",
              children: "开发非续期订阅商品购买功能"
            }), "：接入非续期订阅商品购买功能，主要包括商品列表展示、购买、权益发放等，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-purchases/iap-nonrenewable/iap-integrate-nonrenewable",
              children: "接入购买"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 在开发过程中，可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-sandbox",
              children: "沙盒测试"
            }), "辅助功能测试。沙盒测试允许开发者在接入华为应用内支付调测过程中无需真实支付即可完成购买测试。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/iapkit-sample-clientdemo-arkts",
        children: "示例代码"
      }), "了解如何在应用中提供消耗型商品、非消耗型商品、自动续期订阅商品购买能力。"]
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