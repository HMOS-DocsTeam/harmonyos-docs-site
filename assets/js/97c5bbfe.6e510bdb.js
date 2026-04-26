"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["885769"], {
125533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_inter_app_redirection_link_between_apps_overview_link_between_apps_overview_md_97c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-inter-app-redirection-link-between-apps-overview-link-between-apps-overview-md-97c.json
var site_docs_ability_kit_stage_model_development_inter_app_redirection_link_between_apps_overview_link_between_apps_overview_md_97c_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview/link-between-apps-overview","title":"应用间跳转概述","description":"应用跳转是指从一个应用跳转至另外一个应用，传递相应的数据、执行特定的功能。通过应用跳转可以满足用户更为真实丰富的场景诉求、提升交互体验的便捷性和流畅性。","source":"@site/docs/ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview/link-between-apps-overview.md","sourceDirName":"ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview","slug":"/ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用间跳转概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/link-between-apps-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取/设置环境变量","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/subscribe-system-environment-variable-changes/"},"next":{"title":"拉起指定应用概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview/link-between-apps-overview.md


const frontMatter = {
	title: '应用间跳转概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/link-between-apps-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用间跳转概述';

const assets = {

};



const toc = [{
  "value": "应用场景",
  "id": "应用场景",
  "level": 2
}, {
  "value": "应用跳转的两种类型",
  "id": "应用跳转的两种类型",
  "level": 2
}, {
  "value": "典型场景：拉起系统应用",
  "id": "典型场景拉起系统应用",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "应用间跳转概述",
        children: "应用间跳转概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用跳转是指从一个应用跳转至另外一个应用，传递相应的数据、执行特定的功能。通过应用跳转可以满足用户更为真实丰富的场景诉求、提升交互体验的便捷性和流畅性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用场景",
      children: "应用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用间跳转在社交分享、推广营销等场景广泛使用。举例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "社交分享："
          })
        }), " 在社交软件中分享位置链接、美食推荐链接、购物链接、游戏链接等，可以通过该链接快速跳转到匹配的导航App、美食App、购物App、游戏App等应用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "推广营销："
          })
        }), " 在视频类App、社交类App、浏览器App等广告投放平台中，嵌入需要推广的应用链接（该链接可能以文本、卡片、视频等形式呈现），通过该链接信息可以跳转到目标应用的指定页面；也可以在推送短信、发送邮件时，在正文中携带需要推广的应用链接，通过该链接信息可以跳转到目标应用的指定页面。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用跳转的两种类型",
      children: "应用跳转的两种类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview",
            children: "拉起指定应用"
          }), "：拉起方应用明确指定跳转的目标应用，来实现应用跳转。指向性跳转可以分为指定应用链接、指定Ability两种方式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(331104)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API 12开始，已不再推荐三方应用使用指定Ability方式（即显式Want）拉起其他应用。关于如何从指定Ability方式切换到指定", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview#%E5%BA%94%E7%94%A8%E9%93%BE%E6%8E%A5",
            children: "应用链接"
          }), "方式，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust",
            children: "显式Want跳转切换应用链接跳转适配指导"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["指定应用链接（推荐）：通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#openlink12",
              children: "openLink"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
              children: "startAbility"
            }), "接口来指定", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview#%E5%BA%94%E7%94%A8%E9%93%BE%E6%8E%A5",
              children: "应用链接"
            }), "，拉起目标应用页面。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["指定Ability（不推荐）：通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
              children: "startAbility"
            }), "接口指定具体的Ability（即显式Want方式），拉起目标应用页面。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel",
            children: "拉起指定类型的应用"
          }), "：拉起方应用通过指定应用类型，拉起垂类应用面板。该面板将展示目标方接入的垂域应用，由用户选择打开指定应用。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "典型场景拉起系统应用",
      children: "典型场景：拉起系统应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拉起系统应用是应用间跳转的一种典型场景。系统提供了一些能力和接口，在确保访问安全的前提下，可以让开发者快捷地实现系统应用跳转，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/system-app-startup",
        children: "拉起系统应用"
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
331104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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