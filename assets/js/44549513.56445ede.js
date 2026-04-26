"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["361443"], {
921025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_lite_comp_js_lite_framework_overview_js_lite_framework_localization_js_lite_framework_localization_md_445_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-lite-comp-js-lite-framework-overview-js-lite-framework-localization-js-lite-framework-localization-md-445.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_lite_comp_js_lite_framework_overview_js_lite_framework_localization_js_lite_framework_localization_md_445_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-framework-localization/js-lite-framework-localization","title":"多语言支持","description":"基于开发框架的应用会覆盖多个国家和地区，开发框架支持多语言能力后，可以让应用开发者无需开发多个不同语言的版本，就可以同时支持多种语言的切换，为项目维护带来便利。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-framework-localization/js-lite-framework-localization.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-framework-localization","slug":"/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-framework-localization/js-lite-framework-localization","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-framework-localization/js-lite-framework-localization","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"多语言支持","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-framework-localization","kit":"应用框架","last_updated":"2026-04-22","slug":"js-lite-framework-localization"},"sidebar":"ref","previous":{"title":"生命周期","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-framework-lifecycle/js-lite-framework-lifecycle"},"next":{"title":"HML语法参考","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-syntax/js-lite-framework-syntax-hml/js-lite-framework-syntax-hml"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-framework-localization/js-lite-framework-localization.md


const frontMatter = {
	title: '多语言支持',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-lite-framework-localization',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-lite-framework-localization'
};
const contentTitle = '多语言支持';

const assets = {

};



const toc = [{
  "value": "定义资源文件",
  "id": "定义资源文件",
  "level": 2
}, {
  "value": "引用资源",
  "id": "引用资源",
  "level": 2
}, {
  "value": "获取语言",
  "id": "获取语言",
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
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "多语言支持",
        children: "多语言支持"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于开发框架的应用会覆盖多个国家和地区，开发框架支持多语言能力后，可以让应用开发者无需开发多个不同语言的版本，就可以同时支持多种语言的切换，为项目维护带来便利。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者仅需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9A%E4%B9%89%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6",
        children: "定义资源文件"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%BC%95%E7%94%A8%E8%B5%84%E6%BA%90",
        children: "引用资源"
      }), "两个步骤，就可以使用开发框架的多语言能力；如果需要在应用中获取当前系统语言，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8E%B7%E5%8F%96%E8%AF%AD%E8%A8%80",
        children: "获取语言"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定义资源文件",
      children: "定义资源文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源文件用于存放应用在多种语言场景下的资源内容，开发框架使用JSON文件保存资源定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-framework-overview/js-lite-framework-file/js-lite-framework-file",
        children: "文件组织"
      }), "中指定的i18n文件夹内放置每个语言地区下的资源定义文件即可，资源文件命名为“语言-地区.json”格式，例如英文（美国）的资源文件命名为en-US.json。当开发框架无法在应用中找到系统语言的资源文件时，默认使用en-US.json中的资源内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源文件内容格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "en-US.json"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"strings\": {\n        \"hello\": \"Hello world!\",\n        \"object\": \"Object parameter substitution-{name}\",\n        \"array\": \"Array type parameter substitution-{0}\",\n        \"symbol\": \"@#$%^&*()_+-={}[]\\\\|:;\\\"'<>,./?\"\n    },\n\n    \"files\": {\n        \"image\": \"image/en_picture.PNG\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用资源",
      children: "引用资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用中使用$t方法引用资源，$t既可以在hml中使用，也可以在js中使用。系统将根据当前语言环境和指定的资源路径（通过$t的path参数设置），显示对应语言的资源文件中的内容。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "path"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "资源路径"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "params"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Array"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Object"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml -->\n<div>\n  <!-- 不使用占位符，text中显示“Hello world!” -->\n  <text>{{ $t('strings.hello') }}</text>\n  <!-- 具名占位符格式，运行时将占位符{name}替换为“Hello world” -->\n  <text>{{ $t('strings.object', { name: 'Hello world' }) }}</text>\n  <!-- 数字占位符格式，运行时将占位符{0}替换为“Hello world” -->\n  <text>{{ $t('strings.array', ['Hello world']) }}</text>\n  <!-- 先在js中获取资源内容，再在text中显示“Hello world” -->\n  <text>{{ hello }}</text>\n  <!-- 先在js中获取资源内容，并将占位符{name}替换为“Hello world”，再在text中显示“Object parameter substitution-Hello world” -->\n  <text>{{ replaceObject }}</text>\n  <!-- 先在js中获取资源内容，并将占位符{0}替换为“Hello world”，再在text中显示“Array type parameter substitution-Hello world” -->\n  <text>{{ replaceArray }}</text>\n\n  <!-- 获取图片路径 -->\n  <image src=\"{{ $t('files.image') }}\" class=\"image\"></image>\n  <!-- 先在js中获取图片路径，再在image中显示图片 -->\n  <image src=\"{{ replaceSrc }}\" class=\"image\"></image>\n</div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.js\n// 下面为在js文件中的使用方法。\nexport default {\n  data: {\n    hello: '',\n    replaceObject: '',\n    replaceArray: '',\n    replaceSrc: '',\n  },\n  onInit() {\n    this.hello = this.$t('strings.hello');\n    this.replaceObject = this.$t('strings.object', { name: 'Hello world' });\n    this.replaceArray = this.$t('strings.array', ['Hello world']);\n    this.replaceSrc = this.$t('files.image');\n  },\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取语言",
      children: "获取语言"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取语言功能请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-configuration/js-apis-system-configuration",
        children: "应用配置"
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