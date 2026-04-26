"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["46751"], {
233416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_locale_culture_i_18_n_locale_culture_md_6dd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-locale-culture-i-18-n-locale-culture-md-6dd.json
var site_docs_localization_kit_i_18_n_i_18_n_locale_culture_i_18_n_locale_culture_md_6dd_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-locale-culture/i18n-locale-culture","title":"区域ID与文化习惯划分","description":"功能介绍","source":"@site/docs/localization-kit/i18n/i18n-locale-culture/i18n-locale-culture.md","sourceDirName":"localization-kit/i18n/i18n-locale-culture","slug":"/localization-kit/i18n/i18n-locale-culture/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-locale-culture/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"区域ID与文化习惯划分","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-locale-culture","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"国际化界面设计","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-ui-design/"},"next":{"title":"系统语言与区域","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-language-user-preferences/i18n-system-language-region/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-locale-culture/i18n-locale-culture.md


const frontMatter = {
	title: '区域ID与文化习惯划分',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-locale-culture',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '区域ID与文化习惯划分';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
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
        id: "区域id与文化习惯划分",
        children: "区域ID与文化习惯划分"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "广义地讲，区域ID是指通过数字、字母、符号或其组合，作为唯一标识识别特定地理区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在国际化中，区域ID是对用户群体的抽象，包括用户语言、脚本（使用的文字系统，如中文可用简体字或繁体字）、所在国家或地区以及其他一些文化习惯（如历法、数字系统）等。区域ID是应用实现国际化能力的基础，开发过程中需通过区域ID对象控制和实现国际化行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "区域ID由语言、脚本、国家地区和扩展参数四部分组成。其中，语言是必填内容，其余为选填内容，按照语言、脚本、国家地区和扩展参数的顺序通过“-”连接，详细说明可参考表1；支持的扩展参数参考表2；不同语言对应的数字系统参考表3，表中未列出的语言均使用阿拉伯数字系统。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "语言ID由语言、脚本和国家地区组成，不包含扩展参数，其他规则与区域ID一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 区域ID组成"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "组成成分"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语言"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户使用的语言，由2~3个小写英文字母组成。例如，中文使用“zh”表示。  更多语言代码列表请参考ISO-639标准。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "脚本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户使用的字符集，由首字母大写的4个英文字母组成。例如，简体使用“Hans”表示。  更多脚本代码列表请参考ISO-15924标准。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "国家地区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户所在的国家或地区，使用2个大写英文字母表示。例如，中国使用“CN”表示。  更多的国家地区代码列表请参考ISO-3166标准。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "扩展参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户其他的特征，包括历法、字符串排序、数字系统、小时周期，由小写字母u开头，每一个扩展参数由key和value组成，使用中划线拼接。例如，农历拼音排序使用“u-ca-chinese-co-pinyin”。  支持的扩展参数请参考表2，更多的扩展参数取值请参考BCP 47扩展。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 扩展参数"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ca"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户使用的历法系统。例如，农历使用“chinese”表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "co"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户使用的字符串排序规则。例如，按照拼音排序使用“pinyin”表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户使用的小时周期。例如，0~11小时周期使用“h11”表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户使用的数字系统。例如，阿拉伯数字系统使用“arab”表示。具体请参考表3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户排序时对数字的处理方式。  - “true”表示将数字作为整体进行数值比较。  - “false”表示将数字作为普通字符比较。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示用户排序时是否考虑字符的大小写。  - “upper”表示将大写字母排序在前。  - “lower”表示将小写字母排序在前。  - “false”表示使用当前区域的默认值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " 语言和本地数字系统"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "语言"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "本地数字系统"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "as"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "beng"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "beng"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arabext"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deva"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "my"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mymr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deva"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "latn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "其他语言"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arab"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",
        children: "Intl.Locale"
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