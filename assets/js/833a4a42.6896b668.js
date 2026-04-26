"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["60404"], {
821990(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_status_bar_extension_api_statusbar_extension_arkts_statusbar_extension_ability_statusbar_extension_ability_md_833_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-status-bar-extension-api-statusbar-extension-arkts-statusbar-extension-ability-statusbar-extension-ability-md-833.json
var site_docs_ref_system_basicfun_api_status_bar_extension_api_statusbar_extension_arkts_statusbar_extension_ability_statusbar_extension_ability_md_833_namespaceObject = JSON.parse('{"id":"system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-ability/statusbar-extension-ability","title":"StatusBarViewExtensionAbility（状态栏扩展Ability）","description":"StatusBarViewExtensionAbility为状态栏扩展Ability，继承自UIExtensionAbility，用于给应用提供接入状态栏图标左键业务弹窗的能力。","source":"@site/docs-ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-ability/statusbar-extension-ability.md","sourceDirName":"system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-ability","slug":"/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-ability/statusbar-extension-ability","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-ability/statusbar-extension-ability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"StatusBarViewExtensionAbility（状态栏扩展Ability）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-ability","kit":"系统","last_updated":"2026-04-22","slug":"statusbar-extension-ability"},"sidebar":"ref","previous":{"title":"statusBarManager（状态栏管理服务）","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-manager/statusbar-extension-manager"},"next":{"title":"quickBarManager（快捷栏管理服务）","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/desktop-quickbar-extension-manager/desktop-quickbar-extension-manager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/status-bar-extension-api/statusbar-extension-arkts/statusbar-extension-ability/statusbar-extension-ability.md


const frontMatter = {
	title: 'StatusBarViewExtensionAbility（状态栏扩展Ability）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-ability',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'statusbar-extension-ability'
};
const contentTitle = 'StatusBarViewExtensionAbility（状态栏扩展Ability）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "statusbarviewextensionability状态栏扩展ability",
        children: "StatusBarViewExtensionAbility（状态栏扩展Ability）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["StatusBarViewExtensionAbility为状态栏扩展Ability，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability#uiextensionability",
        children: "UIExtensionAbility"
      }), "，用于给应用提供接入状态栏图标左键业务弹窗的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(908380)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.PCService.StatusBarManager"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { StatusBarViewExtensionAbility } from '@kit.DeskTopExtensionKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { StatusBarViewExtensionAbility } from '@kit.DeskTopExtensionKit';\nimport { UIExtensionContentSession, Want } from '@kit.AbilityKit';\n\nlet TAG = \"MyStatusBarViewAbility\";\n\nexport default class MyStatusBarViewAbility extends StatusBarViewExtensionAbility {\n  onCreate() {\n    console.info(TAG, `onCreate`);\n  }\n\n  onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    console.info(TAG, `onSessionCreate, want: ${want.abilityName}`);\n    session.loadContent('pages/Index');\n  }\n\n  onForeground() {\n    console.info(TAG, `onForeground`);\n  }\n\n  onBackground() {\n    console.info(TAG, `onBackground`);\n  }\n\n  onSessionDestroy(session: UIExtensionContentSession) {\n    console.info(TAG, `onSessionDestroy`);\n  }\n\n  onDestroy() {\n    console.info(TAG, `onDestroy`);\n  }\n}\n"
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
908380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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