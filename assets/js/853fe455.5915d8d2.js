"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["798161"], {
441146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_gameplayer_dev_gameservice_gameplayer_minigame_gameservice_gameplayer_minigame_pay_gameservice_gameplayer_minigame_pay_md_853_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-gameplayer-dev-gameservice-gameplayer-minigame-gameservice-gameplayer-minigame-pay-gameservice-gameplayer-minigame-pay-md-853.json
var site_docs_game_service_kit_guide_gameservice_gameplayer_dev_gameservice_gameplayer_minigame_gameservice_gameplayer_minigame_pay_gameservice_gameplayer_minigame_pay_md_853_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-pay/gameservice-gameplayer-minigame-pay","title":"小游戏支付","description":"小游戏接入基础游戏服务的小游戏支付API后，支持在小游戏内提供付费商品，玩家可以在小游戏内进行购买。","source":"@site/docs/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-pay/gameservice-gameplayer-minigame-pay.md","sourceDirName":"game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-pay","slug":"/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-pay/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-pay/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"小游戏支付","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameplayer-minigame-pay","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"小游戏登录（必选）","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-login/"},"next":{"title":"基础游戏服务术语","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-terminology/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-pay/gameservice-gameplayer-minigame-pay.md


const frontMatter = {
	title: '小游戏支付',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameplayer-minigame-pay',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '小游戏支付';

const assets = {

};



const toc = [{
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "初始化",
  "id": "初始化",
  "level": 3
}, {
  "value": "发起支付请求",
  "id": "发起支付请求",
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
        id: "小游戏支付",
        children: "小游戏支付"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "小游戏接入基础游戏服务的小游戏支付API后，支持在小游戏内提供付费商品，玩家可以在小游戏内进行购买。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["已完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-preparation",
          children: "开发准备"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["已开通", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/start/merchant-service-0000001053025967",
          children: "商户服务"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["已前往AGC控制台为小游戏", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-minigame-goods-0000002424923350",
          children: "添加数字商品"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(273303)/* ["default"] */.A) + "",
        width: "959",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "玩家在小游戏内购买商品。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["小游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerminigamepay",
          children: "miniGamePay"
        }), "向Game Service Kit发起支付请求。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Game Service Kit向IAP Kit发送请求拉起收银台，IAP Kit处理支付请求，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/iap-kit-guide/iap-purchases/iap-purchase/iap-integrate-purchase",
          children: "商品购买"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IAP Kit处理完成后向Game Service Kit返回此次商品购买的结果等信息。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Game Service Kit返回此次商品购买的结果等信息，开发者将接收到一个", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#createpurchaseresult",
          children: "CreatePurchaseResult"
        }), "对象，对象内的purchaseData字段包括了此次购买的结果信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerinit-1",
              children: "init"
            }), "(context: common.UIAbilityContext, callback: AsyncCallback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏初始化接口，使用默认的上下文信息，通过callback回调获取返回值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerminigamepay",
              children: "miniGamePay"
            }), "(context: common.Context, parameter: PurchaseParameter): Promise<CreatePurchaseResult>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小游戏支付接口，通过Promise对象获取返回值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入Game Service Kit及公共模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { gamePlayer } from '@kit.GameServiceKit';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { window } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "初始化",
      children: "初始化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerinit-1",
        children: "init"
      }), "接口初始化Game Service Kit。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onWindowStageCreate(windowStage: window.WindowStage) {\n  windowStage.loadContent(\"pages/index\", (err, data) => {\n    try {\n      gamePlayer.init(this.context,()=>{\n        hilog.info(0x0000, 'testTag', `Succeeded in initializing.`);\n      });\n    } catch (error) {\n      let err = error as BusinessError;\n      hilog.error(0x0000, 'testTag', `Failed to init. Code: ${err.code}, message: ${err.message}`);\n    }\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "发起支付请求",
      children: "发起支付请求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerminigamepay",
        children: "miniGamePay"
      }), "向Game Service Kit发起支付请求，Game Service Kit将向IAP Kit发送请求拉起收银台，IAP Kit处理支付请求。IAP Kit处理完成后向Game Service Kit返回此次商品购买的结果等信息，Game Service Kit将此次商品购买的结果等信息通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#createpurchaseresult",
        children: "CreatePurchaseResult"
      }), "对象返回给开发者。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\nlet request: gamePlayer.PurchaseParameter = {\n  productId: 'xxx', // 待支付的商品ID\n  productType: 0, // 待查询的商品类型\n  developerPayload: 'xxx', // 商户侧保留信息，该参数长度限制为[0, 256]。若该字段有值，在支付成功后的回调结果中会原样返回给应用\n  reservedInfo: 'xxx' // 要求JSON String格式，商户可以将额外需要传入的字段以key-value的形式设置在JSON String中，并通过该参数传入\n};\ntry {\n  gamePlayer.miniGamePay(context, request).then((result: gamePlayer.CreatePurchaseResult) => {\n    hilog.info(0x0000, 'testTag', `Succeeded in paying`);\n  }).catch((error: BusinessError) => {\n    hilog.error(0x0000, 'testTag', `Failed to pay. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (error) {\n  let err = error as BusinessError;\n  hilog.error(0x0000, 'testTag', `Failed to pay. Code: ${err.code}, message: ${err.message}`);\n}\n"
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
273303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478899-6a11c2966dfd20cd652674b8b953366d.png");

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