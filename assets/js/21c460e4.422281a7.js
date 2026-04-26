"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["708213"], {
324963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_l_10_n_l_10_n_translation_l_10_n_hard_coding_concatenate_l_10_n_hard_coding_concatenate_md_21c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-l-10-n-l-10-n-translation-l-10-n-hard-coding-concatenate-l-10-n-hard-coding-concatenate-md-21c.json
var site_docs_localization_kit_l_10_n_l_10_n_translation_l_10_n_hard_coding_concatenate_l_10_n_hard_coding_concatenate_md_21c_namespaceObject = JSON.parse('{"id":"localization-kit/l10n/l10n-translation/l10n-hard-coding-concatenate/l10n-hard-coding-concatenate","title":"避免硬编码与拼接","description":"使用场景","source":"@site/docs/localization-kit/l10n/l10n-translation/l10n-hard-coding-concatenate/l10n-hard-coding-concatenate.md","sourceDirName":"localization-kit/l10n/l10n-translation/l10n-hard-coding-concatenate","slug":"/localization-kit/l10n/l10n-translation/l10n-hard-coding-concatenate/","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-translation/l10n-hard-coding-concatenate/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"避免硬编码与拼接","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/l10n-hard-coding-concatenate","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"多语言适配","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-multilingual-resources/"},"next":{"title":"提供翻译场景","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-translation/l10n-translation-scene/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/l10n/l10n-translation/l10n-hard-coding-concatenate/l10n-hard-coding-concatenate.md


const frontMatter = {
	title: '避免硬编码与拼接',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/l10n-hard-coding-concatenate',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '避免硬编码与拼接';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "避免硬编码与拼接",
        children: "避免硬编码与拼接"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本地化的关键操作是资源文件的翻译，为提升翻译可行性在开发过程中应避免硬编码与拼接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与从外部获取数据或在运行时动态生成数据不同，硬编码是将数据、参数或常量直接写入程序代码中，从而实现特定功能。在界面中显示的文字，包括图片中的文字、音频、字幕等，不能采用硬编码，避免难以本地化或增加本地化的工作量。同时，界面上的一句完整文本，不应由多个片段直接前后拼接而成，这可能导致翻译时无法获取句子完整信息，从而导致翻译错误或语义表达顺序问题。例如，下图中将“Rain tomorrow”和“Bring an umbrella”两句直接拼接在一起，造成语句大小写问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(722018)/* ["default"] */.A) + "",
        width: "287",
        height: "66"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["避免使用硬编码，将需要翻译的字符串提取到资源文件中，与代码分离，然后使用相关的接口加载，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/localization-kit/l10n/l10n-multilingual-resources",
            children: "提供多语言资源"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "避免字符串直接拼接，若语句存在变化部分（如“打开视频”和“打开浏览器”，变化部分是“视频”和“浏览器”），对应变量应使用占位标识，呈现完整的语句表达。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源占位符示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"name\": \"string1\",\n  \"value\": \"打开%s\"\n}\n"
          })
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
722018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958322-75cc4f03aa1b8679865d2ce65cba097f.png");

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