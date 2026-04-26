"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["644193"], {
106960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_numbers_weights_measures_i_18_n_numbers_weights_measures_md_140_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-numbers-weights-measures-i-18-n-numbers-weights-measures-md-140.json
var site_docs_localization_kit_i_18_n_i_18_n_numbers_weights_measures_i_18_n_numbers_weights_measures_md_140_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-numbers-weights-measures/i18n-numbers-weights-measures","title":"数字与度量衡国际化","description":"功能介绍","source":"@site/docs/localization-kit/i18n/i18n-numbers-weights-measures/i18n-numbers-weights-measures.md","sourceDirName":"localization-kit/i18n/i18n-numbers-weights-measures","slug":"/localization-kit/i18n/i18n-numbers-weights-measures/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-numbers-weights-measures/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"数字与度量衡国际化","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-numbers-weights-measures","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"时间日期国际化","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-time-date/"},"next":{"title":"电话号码格式化","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-phone-numbers/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-numbers-weights-measures/i18n-numbers-weights-measures.md


const frontMatter = {
	title: '数字与度量衡国际化',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-numbers-weights-measures',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '数字与度量衡国际化';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "数字格式化",
  "id": "数字格式化",
  "level": 3
}, {
  "value": "数字范围格式化",
  "id": "数字范围格式化",
  "level": 3
}, {
  "value": "货币和单位格式化",
  "id": "货币和单位格式化",
  "level": 3
}, {
  "value": "度量衡转换",
  "id": "度量衡转换",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数字与度量衡国际化",
        children: "数字与度量衡国际化"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在不同的国家和文化中，数字、货币和度量衡的表示方法各异，包括小数分隔符、小数位数、货币和度量衡单位等。例如，应用界面需要显示数字“1,000”（一千）表示商品价格。若采用固定格式“1,000”，在欧洲某些国家（如德国）用户会将其理解为“1”，因为这些国家使用逗号作为小数分隔符。为了确保界面符合当地习惯，需要对数字、货币和度量衡进行格式化，使其根据用户的语言和地区设置显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数字格式化",
      children: "数字格式化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["数字格式化请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",
        children: "Intl.NumberFormat"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数字范围格式化",
      children: "数字范围格式化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["数字范围格式化请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange",
        children: "formatRange"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "货币和单位格式化",
      children: "货币和单位格式化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["货币和单位的格式化基于数字格式化，在创建货币和单位格式化对象时，将数字的显示风格分别设置为“currency(货币)”和“unit(单位)”。同样，对货币和度量衡进行格式化时也支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options",
        children: "Intl.NumberFormatOptions"
      }), "设置不同的格式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "度量衡转换",
      children: "度量衡转换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["度量衡包括长度单位、面积单位、体积单位和容量单位等，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#i18nutil9",
        children: "I18NUtil"
      }), "类的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#unitconvert9",
        children: "unitConvert"
      }), "接口实现度量衡转换和格式化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "格式化风格"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unitConvert接口可以将原始单位转换为目标单位，并根据区域ID格式化。通过style参数可以控制格式化风格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以原始单位为美制单位cup，目标单位为公制单位liter，数字大小1000为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 格式化使用的风格(style)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "显示效果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "236.588 liters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "short"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "236.588 L"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "narrow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "236.588L"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发实例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { i18n } from '@kit.LocalizationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单位转换。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置要转换的单位和目标单位\nlet fromUnit: i18n.UnitInfo = {unit: 'cup', measureSystem: 'US'};\nlet toUnit: i18n.UnitInfo = {unit: 'liter', measureSystem: 'SI'};\n\n// 以en-US区域ID转换度量衡\nlet simplifyConvertedUnit = i18n.I18NUtil.unitConvert(fromUnit, toUnit, 1000, 'en-US'); // simplifyConvertedUnit = '236.588 L'\n\n// 显示完整的度量衡\nlet convertedUnit = i18n.I18NUtil.unitConvert(fromUnit, toUnit, 1000, 'en-US', 'long'); // convertedUnit = '236.588 liters'\n"
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