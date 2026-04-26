"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["848112"], {
843686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_gameplayer_dev_gameservice_gameplayer_minigame_gameservice_gameplayer_minigame_login_gameservice_gameplayer_minigame_login_md_647_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-gameplayer-dev-gameservice-gameplayer-minigame-gameservice-gameplayer-minigame-login-gameservice-gameplayer-minigame-login-md-647.json
var site_docs_game_service_kit_guide_gameservice_gameplayer_dev_gameservice_gameplayer_minigame_gameservice_gameplayer_minigame_login_gameservice_gameplayer_minigame_login_md_647_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-login/gameservice-gameplayer-minigame-login","title":"小游戏登录（必选）","description":"小游戏接入基础游戏服务的小游戏登录API后，支持玩家使用华为账号快速进入游戏，且小游戏的华为账号实名认证、未成年人防沉迷功能由基础游戏服务实现。","source":"@site/docs/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-login/gameservice-gameplayer-minigame-login.md","sourceDirName":"game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-login","slug":"/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-login/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-login/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"小游戏登录（必选）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameplayer-minigame-login","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-preparation/"},"next":{"title":"小游戏支付","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-pay/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-login/gameservice-gameplayer-minigame-login.md


const frontMatter = {
	title: '小游戏登录（必选）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameplayer-minigame-login',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '小游戏登录（必选）';

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
  "value": "监听小游戏防沉迷事件",
  "id": "监听小游戏防沉迷事件",
  "level": 3
}, {
  "value": "小游戏登录",
  "id": "小游戏登录",
  "level": 3
}, {
  "value": "取消监听小游戏防沉迷事件",
  "id": "取消监听小游戏防沉迷事件",
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
        id: "小游戏登录必选",
        children: "小游戏登录（必选）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "小游戏接入基础游戏服务的小游戏登录API后，支持玩家使用华为账号快速进入游戏，且小游戏的华为账号实名认证、未成年人防沉迷功能由基础游戏服务实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["已完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-minigame/gameservice-gameplayer-minigame-preparation",
        children: "开发准备"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(323553)/* ["default"] */.A) + "",
        width: "754",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "玩家启动小游戏。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["小游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerinit-1",
            children: "init"
          }), "接口初始化Game Service Kit。初始化后，弹出华为隐私协议窗口，玩家确认同意后，可继续往下执行。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["小游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayeronminigameaddictionprevented",
            children: "on"
          }), "接口注册小游戏防沉迷事件监听。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["小游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerminigamelogin",
            children: "miniGameLogin"
          }), "接口。小游戏顶部弹出欢迎横幅，并向小游戏返回playerId、playerSign等信息。同时对玩家是否完成实名认证及是否成年进行校验。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["若玩家未完成实名认证，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerminigamelogin",
              children: "miniGameLogin"
            }), "接口自动弹出实名认证窗口要求玩家进行实名认证。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["若玩家账号实名认证为未成年人，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerminigamelogin",
              children: "miniGameLogin"
            }), "接口将自动检测未成年人的游戏时间。若玩家不在指定时间内登录小游戏，将强制玩家退出小游戏并返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-error-code/gameservice-error-code#section1002000006-%E7%8E%A9%E5%AE%B6%E6%9C%AA%E6%88%90%E5%B9%B4%E5%B9%B6%E4%B8%94%E5%BD%93%E5%89%8D%E4%B8%8D%E5%9C%A8%E5%8F%AF%E6%B8%B8%E6%88%8F%E6%97%B6%E9%97%B4",
              children: "1002000006"
            }), "错误码。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayeronminigameaddictionprevented",
              children: "on"
            }), "(type: 'miniGameAddictionPrevented', callback: Callback<string>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小游戏防沉迷事件监听接口，通过callback回调获取小游戏防沉迷事件结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayeroffminigameaddictionprevented",
              children: "off"
            }), "(type: 'miniGameAddictionPrevented', callback?: Callback<string>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消小游戏防沉迷事件监听接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerminigamelogin",
              children: "miniGameLogin"
            }), "(context: common.Context, loginParam: MiniGameLoginParam): Promise<MiniGamePlayer>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小游戏登录接口，通过Promise对象获取返回值。"
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
      id: "监听小游戏防沉迷事件",
      children: "监听小游戏防沉迷事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayeronminigameaddictionprevented",
        children: "on"
      }), "接口注册小游戏防沉迷事件监听。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private miniGameAddictionPreventedCallback(result: string) {\n  // 退出小游戏\n}\n// ...\n// 调用on接口注册小游戏防沉迷事件监听\ntry {\n  gamePlayer.on('miniGameAddictionPrevented', this.miniGameAddictionPreventedCallback);\n} catch (error) {\n  let err = error as BusinessError;\n  hilog.error(0x0000, 'testTag', `Failed to register. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "小游戏登录",
      children: "小游戏登录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayerminigamelogin",
        children: "miniGameLogin"
      }), "接口登录小游戏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\nlet request: gamePlayer.MiniGameLoginParam = {\n  'gameAppId': '123xxx', // 小游戏appId\n  'extraData': 'xxx' // 附加信息，要求JSON String格式\n};\ntry {\n  gamePlayer.miniGameLogin(context, request).then((result: gamePlayer.MiniGamePlayer) => {\n    hilog.info(0x0000, 'testTag', `Succeeded in logging in`);\n  }).catch((error: BusinessError) => {\n    hilog.error(0x0000, 'testTag', `Failed to login. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (error) {\n  let err = error as BusinessError;\n  hilog.error(0x0000, 'testTag', `Failed to login. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "取消监听小游戏防沉迷事件",
      children: "取消监听小游戏防沉迷事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["游戏退出时通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameplayer/gameservice-gameplayer#gameplayeroffminigameaddictionprevented",
        children: "off"
      }), "接口取消监听状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 取消miniGameAddictionPrevented事件的全部监听\ntry {\n  gamePlayer.off('miniGameAddictionPrevented');\n} catch (error) {\n  let err = error as BusinessError;\n  hilog.error(0x0000, 'testTag', `Failed to unregister. Code: ${err.code}, message: ${err.message}`);\n}\n"
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
323553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958898-87e7fd1a8d6a8fcf4dedeb6a60518c36.png");

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