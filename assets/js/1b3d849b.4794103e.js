"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["599335"], {
178354(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_template_ide_template_md_1b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-template-ide-template-md-1b3.json
var site_docs_ide_project_ide_template_ide_template_md_1b3_namespaceObject = JSON.parse('{"id":"ide-project/ide-template/ide-template","title":"工程模板介绍","description":"DevEco Studio支持多种品类的应用/元服务开发，预置丰富的工程模板，可以根据工程向导轻松创建适应于各类设备的工程，并自动生成对应的代码和资源模板。同时，DevEco Studio还提供了多种编程语言供开发者进行应用/元服务开发，包括ArkTS、JS和C/C++。","source":"@site/docs/ide-project/ide-template/ide-template.md","sourceDirName":"ide-project/ide-template","slug":"/ide-project/ide-template/","permalink":"/harmonyos-docs-site/ide-project/ide-template/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"工程模板介绍","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-template","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"工程目录结构","permalink":"/harmonyos-docs-site/ide-project/ide-project-structure/"},"next":{"title":"创建一个新的工程","permalink":"/harmonyos-docs-site/ide-project/ide-create-new-project/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-template/ide-template.md


const frontMatter = {
	title: '工程模板介绍',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-template',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '工程模板介绍';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
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
        id: "工程模板介绍",
        children: "工程模板介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio支持多种品类的应用/元服务开发，预置丰富的工程模板，可以根据工程向导轻松创建适应于各类设备的工程，并自动生成对应的代码和资源模板。同时，DevEco Studio还提供了多种编程语言供开发者进行应用/元服务开发，包括ArkTS、JS和C/C++。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(618960)/* ["default"] */.A) + "",
        width: "962",
        height: "618"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工程模板支持的开发语言及模板说明如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "模板名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty Ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于Phone、Tablet、2in1、Car、Wearable、TV设备的模板，展示基础的Hello World功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Native C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于Phone、Tablet、2in1、Car、Wearable、TV设备的模板，作为应用调用C++代码的示例工程，界面显示“Hello World”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[CloudDev]Empty Ability"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["端云一体化开发通用模板。更多信息请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddevguide",
              children: "端云一体化开发"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "约束与限制"
              })
            }), "：该功能仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[Lite]Empty Ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于Lite Wearable设备的模板，展示了基础的Hello World功能。可基于此模板，修改设备类型及RuntimeOS，进行小型嵌入式设备开发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible Layout Ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建跨设备应用开发的三层工程结构模板。三层工程结构包含common（公共能力层）、features（基础特性层）、products（产品定制层）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embeddable Ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于开发支持被其他应用嵌入式运行的元服务的工程模板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[ArkUI-X]Empty Ability"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个展示基础的Hello World功能的模板，构建基于HarmonyOS应用的跨平台应用包。更多信息请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/arkui-x/docs/blob/master/zh-cn/ArkUI-X-Overview-zh.md#arkui-x%E6%A6%82%E8%A7%88",
              children: "ArkUI-X概览"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[ArkUI-X]Library"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于基于HarmonyOS应用构建跨平台应用的依赖包。依赖包支持添加到已有的应用中。更多信息请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/arkui-x/docs/blob/master/zh-cn/ArkUI-X-Overview-zh.md#arkui-x%E6%A6%82%E8%A7%88",
              children: "ArkUI-X概览"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[ArkUI-X]Native C++"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个调用C++代码的示例工程，构建基于HarmonyOS应用的跨平台应用包。更多信息请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/arkui-x/docs/blob/master/zh-cn/ArkUI-X-Overview-zh.md#arkui-x%E6%A6%82%E8%A7%88",
              children: "ArkUI-X概览"
            }), "。"]
          })]
        })]
      })]
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
618960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561752659-05482af6d25e51ceb040bbb0a29a9bd6.png");

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