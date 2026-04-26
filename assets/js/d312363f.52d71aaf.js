"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["943454"], {
661288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_personal_data_processing_gameservice_personal_data_processing_md_d31_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-personal-data-processing-gameservice-personal-data-processing-md-d31.json
var site_docs_game_service_kit_guide_gameservice_personal_data_processing_gameservice_personal_data_processing_md_d31_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-personal-data-processing/gameservice-personal-data-processing","title":"个人数据处理说明","description":"此文档针对华为作为最终用户数据处理者，开发者作为最终用户数据控制者的数据处理进行说明，包括：","source":"@site/docs/game-service-kit-guide/gameservice-personal-data-processing/gameservice-personal-data-processing.md","sourceDirName":"game-service-kit-guide/gameservice-personal-data-processing","slug":"/game-service-kit-guide/gameservice-personal-data-processing/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-personal-data-processing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"个人数据处理说明","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-personal-data-processing","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发指导","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-access-procedure/"},"next":{"title":"若游戏无HarmonyOS 4及以下系统包时，是否可以不配置APP ID映射关系？","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-personal-data-processing/gameservice-personal-data-processing.md


const frontMatter = {
	title: '个人数据处理说明',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-personal-data-processing',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '个人数据处理说明';

const assets = {

};



const toc = [{
  "value": "Game Service Kit处理的个人数据清单",
  "id": "game-service-kit处理的个人数据清单",
  "level": 2
}, {
  "value": "指导开发者如何帮助最终用户实现对数据的控制",
  "id": "指导开发者如何帮助最终用户实现对数据的控制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
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
        id: "个人数据处理说明",
        children: "个人数据处理说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此文档针对华为作为最终用户数据处理者，开发者作为最终用户数据控制者的数据处理进行说明，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Game Service Kit处理的个人数据清单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指导开发者如何帮助最终用户实现对数据的控制"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "game-service-kit处理的个人数据清单",
      children: "Game Service Kit处理的个人数据清单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最后修改时间：2025/08/26"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "个人数据清单"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用目的"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "存留期"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "社交信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保障用户正常启动/登录游戏。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据产生后在未销户的情况下最多存储2年（由当地法律法规决定），超期将自动删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "位置信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "满足相关法律法规对实名制的要求。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用后立即删除，不涉及存留期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "身份信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "满足相关法律法规对实名制的要求。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户如果销户，则30天内自动删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设备信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "满足相关法律法规对实名制的要求，对未成年用户提供防沉迷保护。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用后立即删除，不涉及存留期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保障用户正常启动/登录游戏，对未成年用户提供防沉迷保护。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据产生后在未销户的情况下最多存储7年（由当地法律法规决定），超期将自动删除。  用户如果销户，则30天内自动删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "账号信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保障用户正常启动/登录游戏，满足相关法律法规对实名制的要求，对未成年用户提供防沉迷保护。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户如果销户，则30天内自动删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "应用信息（应用设置信息、应用基本信息）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于游戏场景感知上报游戏信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据产生后在未销户的情况下最多存储180天（由当地法律法规决定），超期将自动删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "用户应用基本信息（应用包名、客户端版本号）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于游戏近场快传上报游戏信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据不上云，不涉及存留期。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指导开发者如何帮助最终用户实现对数据的控制",
      children: "指导开发者如何帮助最终用户实现对数据的控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "如何清除最终用户的数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最终用户删除华为账号且操作成功后，Game Service Kit会清除最终用户登录记录中能够绑定到最终用户的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Game Service Kit最多保存最近5年（由当地法律法规决定）的登录记录，超期登录记录会自动删除。"
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