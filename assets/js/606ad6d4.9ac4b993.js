"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["555309"], {
313941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_introduction_gameservice_introduction_md_606_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-introduction-gameservice-introduction-md-606.json
var site_docs_game_service_kit_guide_gameservice_introduction_gameservice_introduction_md_606_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-introduction/gameservice-introduction","title":"Game Service Kit简介","description":"业务简介","source":"@site/docs/game-service-kit-guide/gameservice-introduction/gameservice-introduction.md","sourceDirName":"game-service-kit-guide/gameservice-introduction","slug":"/game-service-kit-guide/gameservice-introduction/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Game Service Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"监听游戏手柄的轴和按键事件（C/C++）","permalink":"/harmonyos-docs-site/game-controller-kit/game-controller-monitor-pad/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-introduction/gameservice-introduction.md


const frontMatter = {
	title: 'Game Service Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Game Service Kit简介';

const assets = {

};



const toc = [{
  "value": "业务简介",
  "id": "业务简介",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家和地区",
  "id": "支持的国家和地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "game-service-kit简介",
        children: "Game Service Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务简介",
      children: "业务简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Game Service Kit（游戏服务）主要提供快速、低成本构建游戏基本能力与游戏场景优化服务，有效提升游戏开发效率，帮助游戏运营。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/game-service-kit-guide/gameservice-gameplayer-dev/gameservice-gameplayer-gamelogin/gameservice-gameplayer-introduction",
              children: "基础游戏服务"
            }), "（必选）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为游戏快速、低成本地构建基础功能，例如联合登录、华为账号实名认证、未成年人防沉迷等，让开发者聚焦游戏本身的业务能力，从而迅速推广游戏，并基于用户和内容的本地化进行深度的游戏运营。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-introduction",
              children: "游戏场景感知"
            }), "（可选）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过游戏为系统提供精细化场景信息、配置信息、网络信息等数据，系统向游戏反馈系统状态等信息，使得双方能够利用这些信息进行更紧密和深入的协作，在系统资源有限的情况下优化玩家的游戏体验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-introduction",
              children: "游戏近场快传"
            }), "（可选）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏近场快传服务支持设备在彼此靠近的情况下进行游戏数据交换。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家和地区",
      children: "支持的国家和地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit仅支持华为账号的服务地和注册地均为中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）的用户。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础游戏服务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "游戏场景感知"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "游戏近场快传"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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