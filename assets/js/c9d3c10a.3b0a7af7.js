"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["229150"], {
125055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_suggest_cache_avplayer_ide_hp_arkui_suggest_cache_avplayer_md_c9d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-hp-arkui-suggest-cache-avplayer-ide-hp-arkui-suggest-cache-avplayer-md-c9d.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_suggest_cache_avplayer_ide_hp_arkui_suggest_cache_avplayer_md_c9d_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-cache-avplayer/ide-hp-arkui-suggest-cache-avplayer","title":"@performance/hp-arkui-suggest-cache-avplayer","description":"建议缓存AVPlayer实例减少起播时延。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-cache-avplayer/ide-hp-arkui-suggest-cache-avplayer.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-cache-avplayer","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-cache-avplayer/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-cache-avplayer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"title":"@performance/hp-arkui-suggest-cache-avplayer","sidebar_position":29,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hp-arkui-suggest-cache-avplayer","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/hp-arkui-set-cache-count-for-lazyforeach-grid","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-set-cache-count-for-lazyforeach-grid/"},"next":{"title":"@performance/hp-arkui-suggest-reuseid-for-if-else-reusable-component","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-reuseid-if-else-component/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-cache-avplayer/ide-hp-arkui-suggest-cache-avplayer.md


const frontMatter = {
	title: '@performance/hp-arkui-suggest-cache-avplayer',
	sidebar_position: 29,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hp-arkui-suggest-cache-avplayer',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/hp-arkui-suggest-cache-avplayer';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "performancehp-arkui-suggest-cache-avplayer",
        children: "@performance/hp-arkui-suggest-cache-avplayer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议缓存AVPlayer实例减少起播时延。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音视频起播速度慢的场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/hp-arkui-suggest-cache-avplayer\": \"warn\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import media from '@ohos.multimedia.media';\n\n@Entry\n@Component\nstruct MyComponent{\n  private avPlayer: media.AVPlayer | undefined = undefined;\n  private avPlayerManager: AVPlayerManager = AVPlayerManager.getInstance();\n\n  aboutToAppear(): void {\n    this.avPlayerManager.switchPlayer();\n    this.avPlayer = this.avPlayerManager.getCurrentPlayer();\n  }\n\n  aboutToDisappear(): void {\n    this.avPlayerManager.resetCurrentPlayer();\n    this.avPlayer = undefined;\n  }\n\n  build() {\n    // 组件布局\n  }\n}\n\nclass AVPlayerManager {\n  private static instance?: AVPlayerManager;\n\n  private player1?: media.AVPlayer;\n  private player2?: media.AVPlayer;\n  private currentPlayer?: media.AVPlayer;\n\n  public static getInstance(): AVPlayerManager {\n    if (!AVPlayerManager.instance) {\n      AVPlayerManager.instance = new AVPlayerManager();\n    }\n    return AVPlayerManager.instance;\n  }\n\n  async AVPlayerManager() {\n    this.player1 = await media.createAVPlayer();\n    this.player2 = await media.createAVPlayer();\n  }\n\n  /**\n   * 切换页面时切换AVPlayer实例\n   */\n  switchPlayer(): void {\n    if (this.currentPlayer === this.player1) {\n      this.currentPlayer = this.player2;\n    } else {\n      this.currentPlayer = this.player1;\n    }\n  }\n\n  getCurrentPlayer(): media.AVPlayer | undefined {\n    return this.currentPlayer;\n  }\n\n  /**\n   * 使用reset方法重置AVPlayer实例\n   */\n  resetCurrentPlayer(): void {\n    this.currentPlayer?.pause(() => {\n      this.currentPlayer?.reset();\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import media from '@ohos.multimedia.media';\n\n@Entry\n@Component\nstruct MyComponent{\n  private avPlayer: media.AVPlayer | undefined = undefined;\n\n  aboutToAppear(): void {\n    // 页面创建时初始化AVPlayer实例\n    media.createAVPlayer().then((ret) => {\n      this.avPlayer = ret;\n    });\n  }\n\n  aboutToDisappear(): void {\n    // 离开页面时销毁AVPlayer实例\n    if (this.avPlayer) {\n      this.avPlayer.release();\n    }\n    this.avPlayer = undefined;\n  }\n\n  build() {\n    // 组件布局\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/recommended\nplugin:@performance/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
      }), "。"]
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