"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["334189"], {
801924(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_framework_overview_card_comp_syntax_js_service_widget_syntax_css_js_service_widget_syntax_css_md_96f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-card-comp-card-comp-framework-overview-card-comp-syntax-js-service-widget-syntax-css-js-service-widget-syntax-css-md-96f.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_framework_overview_card_comp_syntax_js_service_widget_syntax_css_js_service_widget_syntax_css_md_96f_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-css/js-service-widget-syntax-css","title":"CSS语法参考","description":"CSS是描述HML页面结构的样式语言。所有组件均存在系统默认样式，也可在页面CSS样式文件中对组件、页面自定义不同的样式。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-css/js-service-widget-syntax-css.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-css","slug":"/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-css/js-service-widget-syntax-css","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-css/js-service-widget-syntax-css","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CSS语法参考","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-syntax-css","kit":"应用框架","last_updated":"2026-04-22","slug":"js-service-widget-syntax-css"},"sidebar":"ref","previous":{"title":"HML语法参考","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-hml/js-service-widget-syntax-hml"},"next":{"title":"多语言支持","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-multiple-languages/js-service-widget-multiple-languages"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-css/js-service-widget-syntax-css.md


const frontMatter = {
	title: 'CSS语法参考',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-syntax-css',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-service-widget-syntax-css'
};
const contentTitle = 'CSS语法参考';

const assets = {

};



const toc = [{
  "value": "尺寸单位",
  "id": "尺寸单位",
  "level": 2
}, {
  "value": "样式导入",
  "id": "样式导入",
  "level": 2
}, {
  "value": "声明样式",
  "id": "声明样式",
  "level": 2
}, {
  "value": "选择器",
  "id": "选择器",
  "level": 2
}, {
  "value": "选择器优先级",
  "id": "选择器优先级",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "css语法参考",
        children: "CSS语法参考"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSS是描述HML页面结构的样式语言。所有组件均存在系统默认样式，也可在页面CSS样式文件中对组件、页面自定义不同的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "尺寸单位",
      children: "尺寸单位"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "逻辑像素px（文档中以<length>表示）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "默认卡片具有的逻辑宽度为150px，实际显示时会将页面布局缩放至屏幕实际宽度，如100px在宽度为300的卡片上，实际渲染为200物理像素（从150px向300物理像素，所有尺寸放大2倍）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "额外配置autoDesignWidth为true时，逻辑像素px将按照屏幕密度进行缩放，如100px在屏幕密度为3的设备上，实际渲染为300物理像素。应用需要适配多种设备时，建议采用此方法。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "百分比（文档中以<percentage>表示）：表示该组件占父组件尺寸的百分比，如组件的width设置为50%，代表其宽度为父组件的50%。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样式导入",
      children: "样式导入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了模块化管理和代码复用，CSS样式文件支持 @import 语句，导入 CSS 文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "声明样式",
      children: "声明样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个页面目录下存在一个与布局hml文件同名的css文件，用来描述该hml页面中组件的样式，决定组件应该如何显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内部样式，支持使用style、class属性来控制组件的样式。例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.hml -->\n<div class=\"container\">\n  <text style=\"color: red\">Hello World</text>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* index.css */\n.container {\n  justify-content: center;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件导入，合并外部样式文件。例如，在common目录中定义样式文件style.css，并在index.css中进行导入："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* style.css */\n.title {\n  font-size: 50px;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* index.css */\n@import '../../common/style.css';\n.container {\n  justify-content: center;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择器",
      children: "选择器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "css选择器用于选择需要添加样式的元素，支持的选择器如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选择器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "样例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "样例描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于选择class=\"container\"的组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#titleId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于选择id=\"titleId\"的组件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- 页面布局xxx.hml -->\n<div id=\"containerId\" class=\"container\">\n  <text id=\"titleId\" class=\"title\">标题</text>\n  <div class=\"content\">\n    <text id=\"contentId\">内容</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 页面样式xxx.css */\n/* 对class=\"title\"的组件设置样式 */\n.title {\n  font-size: 30px;\n}\n/* 对id=\"contentId\"的组件设置样式 */\n#contentId {\n  font-size: 20px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择器优先级",
      children: "选择器优先级"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择器的优先级计算规则与w3c规则保持一致（只支持：内联样式，id，class），其中内联样式为在元素style属性中声明的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当多条选择器声明匹配到同一元素时，各类选择器优先级由高到低顺序为：内联样式 > id > class 。"
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