"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["471963"], {
666929(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_attribution_store_attribution_introduction_store_attribution_introduction_md_994_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-attribution-store-attribution-introduction-store-attribution-introduction-md-994.json
var site_docs_store_kit_guide_store_attribution_store_attribution_introduction_store_attribution_introduction_md_994_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-attribution/store-attribution-introduction/store-attribution-introduction","title":"开发概述","description":"应用归因服务是华为提供的不依赖用户标识符的端侧归因能力。","source":"@site/docs/store-kit-guide/store-attribution/store-attribution-introduction/store-attribution-introduction.md","sourceDirName":"store-kit-guide/store-attribution/store-attribution-introduction","slug":"/store-kit-guide/store-attribution/store-attribution-introduction/","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution/store-attribution-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-attribution-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用市场更新功能","permalink":"/harmonyos-docs-site/store-kit-guide/store-update/"},"next":{"title":"注册企业账号","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution/store-attribution-preparations/store-attribution-config-agc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-attribution/store-attribution-introduction/store-attribution-introduction.md


const frontMatter = {
	title: '开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-attribution-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '开发概述';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "开发概述",
        children: "开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用归因服务是华为提供的不依赖用户标识符的端侧归因能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户完成应用安装或在已安装应用内完成转化时，应用归因服务通过匹配用户在转化前的行为数据，分析用户的来源渠道以及转化的原因，并将归因结果回传给分发平台、开发者、归因监测平台。开发者可以通过归因结果数据分析投放效果、评估渠道质量，进而优化投放策略，分发平台可以评估渠道商业价值，优化营销效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(162478)/* ["default"] */.A) + "",
        width: "797",
        height: "448"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务流程中各任务描述如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "任务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详情"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-preparations/store-attribution-register#%E6%B3%A8%E5%86%8C%E5%BD%92%E5%9B%A0%E8%A7%92%E8%89%B2",
              children: "注册归因角色"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用生态伙伴通过应用归因服务云侧注册归因角色并完成其信息的配置，包括：名称、回传地址（用于接收归因结果回传的URL）、公钥。注册成功后平台生成归因角色ID。应用生态伙伴指：开发者、分发平台、归因监测平台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-developmentguide#%E7%99%BB%E8%AE%B0%E5%BD%92%E5%9B%A0%E6%9D%A5%E6%BA%90",
              children: "登记归因来源"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["媒体App、分发平台通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-attributionmanager/store-attributionmanager#attributionmanagerregistersource",
              children: "registerSource"
            }), "接口登记归因来源（曝光/点击）。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-developmentguide#%E7%99%BB%E8%AE%B0%E5%BD%92%E5%9B%A0%E8%BD%AC%E5%8C%96",
              children: "登记归因转化"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开发者App、归因监测平台通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/store-api/store-arkts/store-attributionmanager/store-attributionmanager#attributionmanagerregistertrigger",
              children: "registerTrigger"
            }), "接口登记归因转化事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-receive",
              children: "归因结果回传"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用归因服务将归因结果通过回传地址回传至应用生态伙伴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/store-kit-guide/store-attribution/store-attribution-test",
              children: "接入调试"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用归因服务提供接入调试功能，开发者通过调用调试接口验证接入的准确性及归因结果回传等基础能力。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用需要在应用市场上架。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接入应用归因服务的所有开发者应严格遵循法律法规、已签署的协议条款和开发者文档的要求处理用户的个人信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止通过应用归因服务上报、透传个人信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用归因服务接入调试功能接口当前支持ARM版本、X86版本的模拟器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用归因服务支持Phone、Tablet设备。并且从6.1.0(23)版本开始，新增支持PC/2in1、TV设备。"
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
162478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799132-fbf1bd1464a86beecb27f8c03330c6d3.jpg");

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