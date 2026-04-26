"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["275843"], {
749512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_configuration_file_fa_application_configuration_file_overview_fa_application_configuration_file_overview_fa_md_1e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-configuration-file-fa-application-configuration-file-overview-fa-application-configuration-file-overview-fa-md-1e2.json
var site_docs_development_fundamentals_application_configuration_file_fa_application_configuration_file_overview_fa_application_configuration_file_overview_fa_md_1e2_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa/application-configuration-file-overview-fa","title":"应用配置文件概述（FA模型）","description":"每个应用项目必须在项目的代码目录下加入配置文件，这些配置文件会向编译工具、操作系统和应用市场提供描述应用的基本信息。","source":"@site/docs/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa/application-configuration-file-overview-fa.md","sourceDirName":"development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa","slug":"/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa/","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用配置文件概述（FA模型）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-configuration-file-overview-fa","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"module.json5配置文件","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-stage/module-configuration-file/"},"next":{"title":"app对象内部结构","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/app-structure/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa/application-configuration-file-overview-fa.md


const frontMatter = {
	title: '应用配置文件概述（FA模型）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-configuration-file-overview-fa',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '应用配置文件概述（FA模型）';

const assets = {

};



const toc = [{
  "value": "配置文件的内部结构",
  "id": "配置文件的内部结构",
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
        id: "应用配置文件概述fa模型",
        children: "应用配置文件概述（FA模型）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个应用项目必须在项目的代码目录下加入配置文件，这些配置文件会向编译工具、操作系统和应用市场提供描述应用的基本信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用配置文件需要声明以下内容："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用的软件Bundle名称，应用的开发厂商，版本号等应用的基本配置信息，这些信息被要求设置在app这个字段下。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用的组件的基本信息，包括所有的Ability，设备类型，组件的类型以及当前组件所使用的语法类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用在具体设备上的配置信息，这些信息会影响应用在设备上的具体功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在FA模型的应用开发过程中，需要在config.json配置文件中对应用的包结构进行声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件的内部结构",
      children: "配置文件的内部结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "config.json由app、deviceConfig和module三个部分组成，缺一不可。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-fa/app-structure",
              children: "app"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用的全局配置信息。同一个应用的不同HAP的app配置必须保持一致。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-fa/deviceconfig-structure",
              children: "deviceConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用在具体设备上的配置信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-fa/module-structure",
              children: "module"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识HAP的配置信息。该标签下的配置只对当前HAP生效。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "config.json示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"app\": {\n    \"vendor\": \"example\",\n    \"bundleName\": \"com.example.demo\",\n    \"version\": {\n      \"code\": 1000000,\n      \"name\": \"1.0.0\"\n    }\n  },\n  \"deviceConfig\": {\n  },\n  \"module\": {\n    \"mainAbility\": \".MainAbility_entry\",\n    \"deviceType\": [\n      \"tablet\"\n    ],\n    \"commonEvents\": [\n      {\n        \"name\": \".EntryAbility\",\n        \"permission\": \"ohos.permission.GET_BUNDLE_INFO\",\n        \"data\": [\n          \"com.example.demo\",\n          \"100\"\n        ],\n        \"events\": [\n          \"install\",\n          \"update\"\n        ]\n      }\n    ],\n    \"abilities\": [\n      {\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"action.system.home\"\n            ]\n          }\n        ],\n        \"orientation\": \"unspecified\",\n        \"visible\": true,\n        \"srcPath\": \"MainAbility_entry\",\n        \"name\": \".MainAbility_entry\",\n        \"srcLanguage\": \"ets\",\n        \"icon\": \"$media:icon\",\n        \"description\": \"$string:MainAbility_entry_desc\",\n        \"formsEnabled\": false,\n        \"label\": \"$string:MainAbility_entry_label\",\n        \"type\": \"page\",\n        \"launchType\": \"multiton\"\n      }\n    ],\n    \"distro\": {\n      \"moduleType\": \"entry\",\n      \"installationFree\": false,\n      \"deliveryWithInstall\": true,\n      \"moduleName\": \"myapplication\"\n    },\n    \"package\": \"com.example.myapplication\",\n    \"srcPath\": \"\",\n    \"name\": \".myapplication\",\n    \"js\": [\n      {\n        \"mode\": {\n          \"syntax\": \"ets\",\n          \"type\": \"pageAbility\"\n        },\n        \"pages\": [\n          \"pages/index\"\n        ],\n        \"name\": \".MainAbility_entry\",\n        \"window\": {\n          \"designWidth\": 720,\n          \"autoDesignWidth\": false\n        }\n      }\n    ]\n  }\n}\n"
      })
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