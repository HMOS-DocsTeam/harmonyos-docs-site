"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["339437"], {
167348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_phone_numbers_i_18_n_phone_numbers_md_b54_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-phone-numbers-i-18-n-phone-numbers-md-b54.json
var site_docs_localization_kit_i_18_n_i_18_n_phone_numbers_i_18_n_phone_numbers_md_b54_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-phone-numbers/i18n-phone-numbers","title":"电话号码格式化","description":"功能介绍","source":"@site/docs/localization-kit/i18n/i18n-phone-numbers/i18n-phone-numbers.md","sourceDirName":"localization-kit/i18n/i18n-phone-numbers","slug":"/localization-kit/i18n/i18n-phone-numbers/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-phone-numbers/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"电话号码格式化","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-phone-numbers","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数字与度量衡国际化","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-numbers-weights-measures/"},"next":{"title":"设置日历和历法","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-calendar/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-phone-numbers/i18n-phone-numbers.md


const frontMatter = {
	title: '电话号码格式化',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-phone-numbers',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '电话号码格式化';

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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "电话号码格式化",
        children: "电话号码格式化"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同国家和地区的电话号码在号码位数、组合方式、呈现方式等都存在差异。同时，在不同环境和条件下，电话号码可能存在不同的拨打方式和号码格式。例如，在中国境内跨地区打电话，通常需要先输入“0”，再拨打区号和八位电话号码，而在香港或澳门拨打电话时，需要不同的拨号方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过号码格式化，可以根据需要给用户展示特定格式的电话号码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["电话号码格式化通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#phonenumberformat8",
        children: "PhoneNumberFormat"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n#format8",
        children: "format"
      }), "接口实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "电话号码格式化选项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以电话号码158****2312，所属国家代码CN为例，说明PhoneNumberFormatOptions不同取值和显示效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 电话号码格式化的类型(type)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "E164"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+86 158****2312"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTERNATIONAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+86 158 **** 2312"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NATIONAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "158 **** 2312"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RFC3966"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tel:+86-158-****-2312"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TYPING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "158 ***"
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
          children: "处理号码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 格式化电话号码\nlet phoneNumberFormat: i18n.PhoneNumberFormat = new i18n.PhoneNumberFormat('CN');\nlet formattedPhoneNumber = phoneNumberFormat.format('158****2312'); // formattedPhoneNumber = '158 **** 2312'\n\n// RFC3966类型的电话号码\nlet rfcFormat: i18n.PhoneNumberFormat = new i18n.PhoneNumberFormat('CN', { type: 'RFC3966' });\nlet formattedRFCPhoneNumber = rfcFormat.format('158****2312'); // formattedRFCPhoneNumber = 'tel:+86-158-****-2312'\n\n// 判断电话号码是否有效\nlet isValid = phoneNumberFormat.isValidNumber('158****2312'); // isValid = true\n\n// 以某种语言显示号码归属地\nlet locationName = phoneNumberFormat.getLocationName('158****2312', 'en-GB'); // locationName = 'XiAn, Shanxi'\n\n// 拨号中的电话号码格式化\nlet typingFormat: i18n.PhoneNumberFormat = new i18n.PhoneNumberFormat('CN', { type: 'TYPING' });\nlet phoneNumber = '0755453';\nlet formatResult = ''; // 通过如下方式对拨号中的号码格式化后，formatResult = '0755 453'\nfor (let i = 0; i < phoneNumber.length; i++) {\n  formatResult += phoneNumber.charAt(i);\n  formatResult = typingFormat.format(formatResult);\n}\n"
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