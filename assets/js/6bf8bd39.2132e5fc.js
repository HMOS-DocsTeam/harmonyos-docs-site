"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["70604"], {
14405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_l_10_n_l_10_n_multilingual_resources_l_10_n_multilingual_resources_md_6bf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-l-10-n-l-10-n-multilingual-resources-l-10-n-multilingual-resources-md-6bf.json
var site_docs_localization_kit_l_10_n_l_10_n_multilingual_resources_l_10_n_multilingual_resources_md_6bf_namespaceObject = JSON.parse('{"id":"localization-kit/l10n/l10n-multilingual-resources/l10n-multilingual-resources","title":"多语言适配","description":"功能介绍","source":"@site/docs/localization-kit/l10n/l10n-multilingual-resources/l10n-multilingual-resources.md","sourceDirName":"localization-kit/l10n/l10n-multilingual-resources","slug":"/localization-kit/l10n/l10n-multilingual-resources/","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-multilingual-resources/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"多语言适配","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/l10n-multilingual-resources","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"本地化语言与地区名称","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-name-localization/i18n-language-region-display/"},"next":{"title":"避免硬编码与拼接","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-translation/l10n-hard-coding-concatenate/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/l10n/l10n-multilingual-resources/l10n-multilingual-resources.md


const frontMatter = {
	title: '多语言适配',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/l10n-multilingual-resources',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '多语言适配';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "国际化接口使用",
  "id": "国际化接口使用",
  "level": 2
}, {
  "value": "多语言资源配置",
  "id": "多语言资源配置",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "多语言适配",
        children: "多语言适配"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要提供给不同国家和地区的用户使用时，为了满足这些用户在语言、文化方面的需求，需要将应用进行本地化定制，使应用加载和显示符合所在地域使用习惯的内容。本地化过程中需要对语言和地区名称、时间日期、数字单位、文本字符、图片、音频、视频等进行适配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "语言和地区名称、时间日期、数字单位的适配，建议使用国际化接口获取显示的内容。因为区域使用习惯可能会发生变化，国际化接口返回值也会随之变化，不建议进一步处理接口的返回值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本字符、图片、音频、视频的适配，建议创建多个不同的资源目录，配置多语言资源。当用户运行应用时，系统根据语言区域自动选择并加载与设备最匹配的资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "国际化接口使用",
      children: "国际化接口使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本地化接口调用"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为了确保接口返回值与用户设置保持一致，通常需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n",
            children: "i18n模块"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/localization-api/localization-arkts/js-apis-intl/js-apis-intl",
            children: "intl模块"
          }), "接口中传入系统区域ID或系统区域对象。系统区域ID和系统区域对象传入的示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { i18n } from '@kit.LocalizationKit';\n\n// 获取系统区域对象\nlet locale = i18n.System.getSystemLocaleInstance();\n\n// 如果接口入参是区域ID（string类型），则通过toString()获取系统区域ID\nlet dateTimeFormat = new Intl.DateTimeFormat(locale.toString());\n\n// 如果接口入参是区域对象（Intl.Locale类型），则直接使用系统区域对象\nlet simpleDateTimeFormat = i18n.getSimpleDateTimeFormatBySkeleton('yMd', locale);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "识别系统语言"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用如果需要识别语言，应避免通过硬编码的方式直接比较语言码。推荐使用如下方式："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { i18n } from '@kit.LocalizationKit';\n\nlet systemLanguage = i18n.System.getSimplifiedLanguage();\n// languagesList根据应用实际需要进行配置。例如，当应用不需要区分不同的繁体中文时，可将'zh-Hant-HK'和'zh-Hant-TW'合并成'zh-Hant'\nlet languagesList = ['zh-Hans', 'zh-Hant-HK', 'zh-Hant-TW'];\nlet matchedLanguage = i18n.I18NUtil.getBestMatchLocale(systemLanguage, languagesList);\nswitch (matchedLanguage) {\n  case 'zh-Hans':\n    // 系统语言为简体中文\n    break;\n  case 'zh-Hant-HK':\n    // 系统语言为繁体中文（香港）\n    break;\n  case 'zh-Hant-TW':\n    // 系统语言为繁体中文（台湾）\n    break;\n  default:\n    // 系统语言不属于languagesList中的任何一种\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多语言资源配置",
      children: "多语言资源配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为确保应用可以加载到不同国家和地区、不同语言等类型的内容，需要创建多个不同的资源目录，放置多种资源，当用户运行应用时，根据所在的语言区域自动选择并加载与设备最匹配的资源。为更好实现应用本地化，推荐作法是将本地化的内容与核心功能尽可能分开，本地化内容放置在资源目录下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于应用开发者，仅需关注资源配置，资源文件配置完成后，根据业务需求对资源进行访问。资源文件配置和资源匹配规则请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/resource-categories-and-access",
        children: "资源分类与访问"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(134156)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果设置了应用偏好语言，应用会优先加载应用偏好语言对应的资源。"
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
134156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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