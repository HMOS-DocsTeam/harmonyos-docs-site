"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["703742"], {
505216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_nearbytransfer_dev_gameservice_nearbytransfer_introduction_gameservice_nearbytransfer_introduction_md_bef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-nearbytransfer-dev-gameservice-nearbytransfer-introduction-gameservice-nearbytransfer-introduction-md-bef.json
var site_docs_game_service_kit_guide_gameservice_nearbytransfer_dev_gameservice_nearbytransfer_introduction_gameservice_nearbytransfer_introduction_md_bef_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-introduction/gameservice-nearbytransfer-introduction","title":"概述","description":"功能说明","source":"@site/docs/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-introduction/gameservice-nearbytransfer-introduction.md","sourceDirName":"game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-introduction","slug":"/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-introduction/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-nearbytransfer-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发指导(C/C++)","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure-c/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-config-agc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-introduction/gameservice-nearbytransfer-introduction.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-nearbytransfer-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [{
  "value": "功能说明",
  "id": "功能说明",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "传输资源包",
  "id": "传输资源包",
  "level": 3
}, {
  "value": "传输安装包",
  "id": "传输安装包",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能说明",
      children: "功能说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)版本开始，新增游戏近场快传服务。从6.1.0(23)版本开始，近场快传服务支持安装包传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "游戏近场快传服务支持设备在彼此靠近的情况下进行游戏数据交换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持玩家们面对面互传游戏资源包或游戏安装包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传输资源包",
      children: "传输资源包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已更新游戏版本的玩家可以使用资源包传输能力将自己设备上的游戏资源包发送给未更新玩家，助其迅速完成游戏更新，节省玩家下载资源包所需的流量和时间，同时可降低因游戏频繁更新影响用户体验，导致用户流失的可能性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传输安装包",
      children: "传输安装包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当玩家中有未安装游戏的玩家时，已安装游戏的玩家可以使用安装包传输能力将游戏安装包通过碰一碰或隔空传送传输给未安装游戏的玩家，实现游戏传播效率的提升。"
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