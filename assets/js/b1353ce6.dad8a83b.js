"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["125580"], {
732984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_iap_api_iap_arkts_component_iap_cashier_component_iap_cashier_component_md_b13_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-iap-api-iap-arkts-component-iap-cashier-component-iap-cashier-component-md-b13.json
var site_docs_ref_iap_api_iap_arkts_component_iap_cashier_component_iap_cashier_component_md_b13_namespaceObject = JSON.parse('{"id":"iap-api/iap-arkts-component/iap-cashier-component/iap-cashier-component","title":"CashierComponent (iap嵌入式收银台组件)","description":"本模块提供CashierComponent组件，应用通过集成该组件完成iap嵌入式收银台功能。","source":"@site/docs-ref/iap-api/iap-arkts-component/iap-cashier-component/iap-cashier-component.md","sourceDirName":"iap-api/iap-arkts-component/iap-cashier-component","slug":"/iap-api/iap-arkts-component/iap-cashier-component/iap-cashier-component","permalink":"/harmonyos-docs-site/ref/iap-api/iap-arkts-component/iap-cashier-component/iap-cashier-component","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"CashierComponent (iap嵌入式收银台组件)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-cashier-component","kit":"应用服务","last_updated":"2026-04-22","slug":"iap-cashier-component"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/iap-api/iap-arkts/iap-error-code/iap-error-code"},"next":{"title":"cashierComponentManager (iap嵌入式收银台组件管理)","permalink":"/harmonyos-docs-site/ref/iap-api/iap-arkts-component/iap-cashier-component-manager/iap-cashier-component-manager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/iap-api/iap-arkts-component/iap-cashier-component/iap-cashier-component.md


const frontMatter = {
	title: 'CashierComponent (iap嵌入式收银台组件)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-cashier-component',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'iap-cashier-component'
};
const contentTitle = 'CashierComponent (iap嵌入式收银台组件)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "CashierComponent",
  "id": "cashiercomponent",
  "level": 2
}, {
  "value": "build",
  "id": "build",
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
    p: "p",
    pre: "pre",
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
        id: "cashiercomponent-iap嵌入式收银台组件",
        children: "CashierComponent (iap嵌入式收银台组件)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供CashierComponent组件，应用通过集成该组件完成iap嵌入式收银台功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CashierComponent需要配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/iap-api/iap-arkts-component/iap-cashier-component-manager/iap-cashier-component-manager",
        children: "cashierComponentManager"
      }), "一起使用，用于实现iap嵌入式收银台功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CashierComponent, cashierComponentManager } from '@kit.IAPKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cashiercomponent",
      children: "CashierComponent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类用来展示嵌入式收银台的UI组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Component"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本6.1.0(23)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Payment.IAP.EmbeddedCashier"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts/iap-iap/iap-iap#purchaseparameter",
              children: "iap.PurchaseParameter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CashierComponent组件参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该参数必须是@State装饰的局部变量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "displayOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts-component/iap-cashier-component-manager/iap-cashier-component-manager#cashierdisplayoptions",
              children: "cashierComponentManager.CashierDisplayOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CashierComponent组件的配置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "purchaseListener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-arkts-component/iap-cashier-component-manager/iap-cashier-component-manager#cashierlistener",
              children: "cashierComponentManager.CashierListener"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CashierComponent用来接收组件的成功失败的回调事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build",
      children: "build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#cashiercomponent",
        children: "CashierComponent"
      }), "对象的构造函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本6.1.0(23)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Payment.IAP.EmbeddedCashier"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CashierComponent, cashierComponentManager,iap } from '@kit.IAPKit';\nimport { BusinessError} from '@kit.BasicServicesKit';\n\nconst displayOptions: cashierComponentManager.CashierDisplayOptions = {\n  backgroundColor: Color.Grey\n}\nclass PurchaseListener implements cashierComponentManager.CashierListener {\n  onPurchaseSuccess: (productId: string, purchaseResult: iap.CreatePurchaseResult) => void;\n  onPurchaseFailure: (productId: string, error: BusinessError<void>) => void;\n\n  constructor() {\n    this.onPurchaseSuccess = () => {\n\n    };\n    this.onPurchaseFailure = () => {\n\n    }\n  }\n}\nconst purchaseListener = new PurchaseListener();\n\n@Entry\n@Component\nstruct CashierComponentPage {\n  @State params: iap.PurchaseParameter = {\n    // productId需要替换成开发者在AppGallery Connect网站配置商品信息时设置的“商品ID”\n    productId: 'testProduct01',\n    // iap.ProductType.CONSUMABLE：消耗型商品\n    // iap.ProductType.NONCONSUMABLE：非消耗型商品\n    // iap.ProductType.AUTORENEWABLE：自动续期订阅商品\n    // iap.ProductType.NONRENEWABLE：非续期订阅商品\n    productType: iap.ProductType.CONSUMABLE,\n    developerPayload: 'test developer payload string.',\n  };\n\n  build() {\n    Column() {\n      CashierComponent({\n        params: this.params,\n        purchaseListener: purchaseListener,\n        displayOptions: displayOptions\n      });\n    }\n    .width(360)\n    .height(640)\n  }\n}\n"
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