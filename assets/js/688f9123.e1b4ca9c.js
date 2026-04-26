"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["671637"], {
752628(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_typical_scenarios_hap_to_har_hap_to_har_md_688_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-typical-scenarios-hap-to-har-hap-to-har-md-688.json
var site_docs_development_fundamentals_application_typical_scenarios_hap_to_har_hap_to_har_md_688_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-typical-scenarios/hap-to-har/hap-to-har","title":"HAP转HAR指导","description":"HAP不支持导出接口或ArkUI组件给其他模块或应用使用，如果需要导出模块中的接口或ArkUI组件，并将模块作为二方库、三方库共享给其他模块或应用，可以使用HAR。本文介绍如何通过配置项的变更将HAP工程变成HAR工程。","source":"@site/docs/development-fundamentals/application-typical-scenarios/hap-to-har/hap-to-har.md","sourceDirName":"development-fundamentals/application-typical-scenarios/hap-to-har","slug":"/development-fundamentals/application-typical-scenarios/hap-to-har/","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/hap-to-har/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"HAP转HAR指导","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hap-to-har","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HSP转HAR指导","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/hsp-to-har/"},"next":{"title":"集成态HSP","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/integrated-hsp/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-typical-scenarios/hap-to-har/hap-to-har.md


const frontMatter = {
	title: 'HAP转HAR指导',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hap-to-har',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'HAP转HAR指导';

const assets = {

};



const toc = [{
  "value": "HAP转HAR的操作步骤",
  "id": "hap转har的操作步骤",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hap转har指导",
        children: "HAP转HAR指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HAP不支持导出接口或ArkUI组件给其他模块或应用使用，如果需要导出模块中的接口或ArkUI组件，并将模块作为二方库、三方库共享给其他模块或应用，可以使用HAR。本文介绍如何通过配置项的变更将HAP工程变成HAR工程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(334742)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["部分组件和模块在HAP、HSP、HAR中集成使用时存在差异，例如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction#%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
        children: "加载HAR中Worker线程文件相比HSP存在单独的使用约束"
      }), "，因此按照如下步骤完成HAP转HAR后，请关注对应组件和模块介绍并进行适配。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hap转har的操作步骤",
      children: "HAP转HAR的操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改HAP模块下的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5"
          }), "文件，具体操作如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将type标签值改为har，删除mainElement、deliveryWithInstall、installationFree和pages标签。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["由于API version 17及之前版本HAR不支持创建任何ExtensionAbility，从API version 18开始HAR仅支持创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-project/ide-module-management/ide-add-new-ability#section18891639459",
              children: "两种ExtensionAbility"
            }), "，因此在API version 18及之后版本但未配置为支持的两种ExtensionAbility、或在API version 17及之前版本，需要删除extensionAbilities标签，并将关联的ExtensionAbility组件删除或迁移到其他HAP模块中。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "由于HAR模块在API version 13及以下不支持UIAbility，因此在API version 13及以前的版本，需要删除abilities标签，并将关联的UIAbility组件删除或迁移到其他HAP模块中。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    \"name\": \"har\",\n    \"type\": \"har\",\n    \"deviceTypes\": [\n      \"tablet\",\n      \"2in1\"\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在HAP模块的src\\main\\resource\\base\\profile文件夹下，删除main_pages.json文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改HAP模块的hvigorfile.ts文件，将内容替换为以下内容："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { harTasks } from '@ohos/hvigor-ohos-plugin';\n\nexport default {\n  system: harTasks,  // 修改成HAR编译任务\n  plugins:[]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在HAP模块的根目录下创建名为Index.ets的文件，并在模块的oh-package.json5文件中的main标签配置该文件。Index.ets文件用于导出ArkUI组件或接口，详细导出方法参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package#%E5%BC%80%E5%8F%91",
            children: "HAR-开发"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  // ...\n  \"main\": \"Index.ets\",\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改项目级的配置文件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
            children: "build-profile.json5"
          }), "，在 modules 标签下找到HAP的配置信息，并删除HAP配置下的 targets。"]
        }), "\n"]
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
334742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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