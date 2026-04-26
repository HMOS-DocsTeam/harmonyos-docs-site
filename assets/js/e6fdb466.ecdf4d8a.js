"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["134291"], {
424664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_want_actions_entities_actions_entities_md_e6f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-want-actions-entities-actions-entities-md-e6f.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_want_actions_entities_actions_entities_md_e6f_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/want/actions-entities/actions-entities","title":"常见action与entities（不推荐使用）","description":"由于action/entity被泛化使用，系统对应用声明action/entity的行为缺少管控，恶意应用虚假声明，抢占流量，导致跳转后功能不可用。后续系统会逐步废弃非必要action/entity，建议通过指定类型的方式拉起应用。","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/want/actions-entities/actions-entities.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/want/actions-entities","slug":"/ability-kit/stage-model-development/stage-model-application-components/want/actions-entities/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/want/actions-entities/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"常见action与entities（不推荐使用）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/actions-entities","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用显式Want启动应用组件","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/want/ability-startup-with-explicit-want/"},"next":{"title":"组件启动规则（Stage模型）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/component-startup-rules/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/want/actions-entities/actions-entities.md


const frontMatter = {
	title: '常见action与entities（不推荐使用）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/actions-entities',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '常见action与entities（不推荐使用）';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "常见action与entities不推荐使用",
        children: "常见action与entities（不推荐使用）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(228513)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于action/entity被泛化使用，系统对应用声明action/entity的行为缺少管控，恶意应用虚假声明，抢占流量，导致跳转后功能不可用。后续系统会逐步废弃非必要action/entity，建议通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel",
        children: "指定类型的方式拉起应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "action"
        })
      }), "：表示调用方要执行的通用操作（如查看、分享、应用详情）。在隐式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "Want"
      }), "中，您可定义该字段，配合uri或parameters来表示对数据要执行的操作。如打开，查看该uri数据。例如，当uri为一段网址，action为ACTION_VIEW_DATA则表示匹配可访问该网址的应用组件。在Want内声明action字段表示希望被调用方应用支持声明的操作。在被调用方应用配置文件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
        children: "skills字段"
      }), "内声明actions表示该应用支持声明操作。常见的action如下，具体的action取值请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-wantconstant/js-apis-ability-wantconstant#action",
        children: "action常数说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "常见action"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ACTION_HOME：启动应用入口组件的动作，需要和ENTITY_HOME配合使用；系统桌面应用图标就是显式的入口组件，点击也是启动入口组件；入口组件可以配置多个。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ACTION_CHOOSE：选择本地资源数据，例如联系人、相册等；系统一般对不同类型的数据有对应的Picker应用，例如联系人和图库。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ACTION_VIEW_DATA：查看数据，当使用网址uri时，则表示显示该网址对应的内容。具体操作流程请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup",
          children: "通过startAbility拉起文件处理类应用"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ACTION_VIEW_MULTIPLE_DATA：发送多个数据记录的操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "entities"
        })
      }), "：表示目标应用组件的类别信息（如浏览器、视频播放器），在隐式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "Want"
      }), "中是对action的补充。在隐式Want中，开发者可定义该字段，来过滤匹配应用的类别，例如必须是浏览器。在Want内声明entities字段表示希望被调用方应用属于声明的类别。在被调用方应用配置文件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#skills%E6%A0%87%E7%AD%BE",
        children: "skills字段"
      }), "内声明entities表示该应用支持的类别。常见的entities如下，具体的entity取值及说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-ability-wantconstant/js-apis-ability-wantconstant#entity",
        children: "entity常数说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "常见entities"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ENTITY_DEFAULT：默认类别无实际意义。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ENTITY_HOME：主屏幕有图标点击入口类别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ENTITY_BROWSABLE：指示浏览器类别。"
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
228513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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