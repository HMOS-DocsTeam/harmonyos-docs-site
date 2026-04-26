"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["490613"], {
611284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_l_10_n_testing_pseudo_i_18_n_testing_pseudo_i_18_n_testing_translation_pseudo_i_18_n_testing_translation_md_3c6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-l-10-n-testing-pseudo-i-18-n-testing-pseudo-i-18-n-testing-translation-pseudo-i-18-n-testing-translation-md-3c6.json
var site_docs_localization_kit_l_10_n_testing_pseudo_i_18_n_testing_pseudo_i_18_n_testing_translation_pseudo_i_18_n_testing_translation_md_3c6_namespaceObject = JSON.parse('{"id":"localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-translation/pseudo-i18n-testing-translation","title":"翻译伪本地化测试","description":"使用场景","source":"@site/docs/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-translation/pseudo-i18n-testing-translation.md","sourceDirName":"localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-translation","slug":"/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-translation/","permalink":"/harmonyos-docs-site/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-translation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"翻译伪本地化测试","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pseudo-i18n-testing-translation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"伪本地化测试概述","permalink":"/harmonyos-docs-site/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-overview/"},"next":{"title":"界面镜像伪本地化测试","permalink":"/harmonyos-docs-site/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-mirror/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-translation/pseudo-i18n-testing-translation.md


const frontMatter = {
	title: '翻译伪本地化测试',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pseudo-i18n-testing-translation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '翻译伪本地化测试';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "测试流程",
  "id": "测试流程",
  "level": 2
}, {
  "value": "测试事项",
  "id": "测试事项",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "翻译伪本地化测试",
        children: "翻译伪本地化测试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "翻译伪本地化测试是模拟应用翻译的过程，提前识别应用翻译后可能出现的界面布局或文字显示异常等问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "出现文字截断或界面显示问题的主要原因是：对于软件的菜单、文字区域、按键、复选框等，设计者在做界面设计时通常先调整出适于源语言文字长度的大小（通常为英文），并进一步调整界面的对齐、位置、行距等。然而，一些源语言被翻译后，长度往往会增加，使得UI布局出现异常或导致文本在不合适的位置截断。例如俄文或是挪威文通常比英文长，如果原始UI界面预留的空间过小，会导致超出界面的文字被裁剪，最终无法正常显示完整的翻译后的文字。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文字或符号无法正常显示的可能原因是：系统缺少相应字体或排版整形能力；开发过程中未考虑用户会输入特殊字符或特定语言的文字。例如中文界面的应用，可能输入维吾尔语的相关信息后无法显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试流程",
      children: "测试流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "切换到伪本地化测试区域，如“en-XA”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(109081)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "测试区域的切换接口为系统接口，需由系统应用调用。系统应用切换测试区域成功后，普通应用可以进行伪本地化测试。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "遍历需要测试的APP。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试事项",
      children: "测试事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(14048)/* ["default"] */.A) + "",
        width: "234",
        height: "416"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查界面截断、变形或布局异常等问题。其中，界面截断可通过观察界面字符串是否以“]”正确结尾，看不到“]”说明界面字符串未完整显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查硬编码问题。如果界面需要翻译的文字未处理为伪翻译格式，说明代码中存在对界面文字的硬编码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查字符串拼接问题。如果存在连续的伪翻译格式字符串出现在同一个控件里，例如“[字符串1][字符串2]”，说明存在字符串拼接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查多语言文字显示问题。如果伪翻译文字未能正常显示，出现类似方块、空白或文字显示不完整等现象，说明多语言显示存在异常。"
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
109081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
14048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478323-76a5eeae8b3f0f03dde5e732c395fcd4.png");

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