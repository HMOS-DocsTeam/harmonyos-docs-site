"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["908254"], {
764274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_time_zone_dst_i_18_n_dst_transition_i_18_n_dst_transition_md_051_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-time-zone-dst-i-18-n-dst-transition-i-18-n-dst-transition-md-051.json
var site_docs_localization_kit_i_18_n_i_18_n_time_zone_dst_i_18_n_dst_transition_i_18_n_dst_transition_md_051_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-time-zone-dst/i18n-dst-transition/i18n-dst-transition","title":"夏令时跳变","description":"功能介绍","source":"@site/docs/localization-kit/i18n/i18n-time-zone-dst/i18n-dst-transition/i18n-dst-transition.md","sourceDirName":"localization-kit/i18n/i18n-time-zone-dst/i18n-dst-transition","slug":"/localization-kit/i18n/i18n-time-zone-dst/i18n-dst-transition/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-time-zone-dst/i18n-dst-transition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"夏令时跳变","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-dst-transition","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"时区","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-time-zone-dst/i18n-time-zone/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-sorting/i18n-sorting-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-time-zone-dst/i18n-dst-transition/i18n-dst-transition.md


const frontMatter = {
	title: '夏令时跳变',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-dst-transition',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '夏令时跳变';

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
  "value": "夏令时跳变计算",
  "id": "夏令时跳变计算",
  "level": 3
}, {
  "value": "存储和显示数据",
  "id": "存储和显示数据",
  "level": 3
}, {
  "value": "存储和传输时间数据",
  "id": "存储和传输时间数据",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "夏令时跳变",
        children: "夏令时跳变"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "夏令时是一种为节约能源而规定的地方时间制度，即在天亮早的夏季人为将时间调快一段时间，使人们早起早睡，减少照明时间，从而节约照明用电。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统会配置夏令时跳变规则，当系统时间到达跳变点时，会自动实现跳变。如果应用通过标准的TS接口（例如 Date()）获取和显示时间，则到夏令时跳变时间点时，应用会同步显示夏令时时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "夏令时跳变计算",
      children: "夏令时跳变计算"
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
          children: "使用场景。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "计算一天的小时数：一整天的小时数在夏令时跳变的当天会发生变化，并非24小时。例如，在大多数国家，夏令时开始的当天，一整天时间为23小时；夏令时结束的当天，一整天时间为25小时。计算夏令时跳变前后挂钟时间之间相差的小时数。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let calendar: i18n.Calendar = i18n.getCalendar('zh-Hans');\ncalendar.setTimeZone('Europe/London');\ncalendar.set(2021, 2, 27, 16, 0, 0); // 夏令时开始前的时间\nlet startTime = calendar.getTimeInMillis();\ncalendar.set(2021, 2, 28, 16, 0, 0); // 处于夏令时期间的时间\nlet finishTime = calendar.getTimeInMillis();\nlet hours = (finishTime - startTime) / (3600 * 1000); // hours = 23\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "存储和显示数据",
      children: "存储和显示数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按当地夏令时计时规则，存储和显示数据，需要处理夏令时跳变带来的时间空缺和重复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "夏令时跳入将导致一段时间空缺，例如1:59:59跳转到3:00:00；夏令时跳出将导致一段时间重复，例如3:59:59回退到3:00:00。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在夏令时内，本地时间显示建议添加夏令时标识。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(771508)/* ["default"] */.A) + "",
        width: "1207",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "存储和传输时间数据",
      children: "存储和传输时间数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议使用零时区标准时间（UTC或者GMT）存储和传输时间数据，避免夏令时跳变导致的信息丢失或异常。"
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
771508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438367-fa1a7a009872e6417c7f920ba09422c0.png");

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