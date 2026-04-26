"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["52233"], {
72687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_enterprise_space_kit_guide_enterprisespace_introduction_enterprisespace_introduction_md_4d0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-enterprise-space-kit-guide-enterprisespace-introduction-enterprisespace-introduction-md-4d0.json
var site_docs_enterprise_space_kit_guide_enterprisespace_introduction_enterprisespace_introduction_md_4d0_namespaceObject = JSON.parse('{"id":"enterprise-space-kit-guide/enterprisespace-introduction/enterprisespace-introduction","title":"Enterprise Space Kit简介","description":"Enterprise Space Kit（企业数字空间服务）为企业MDM应用提供空间管控、空间互传管控API，用于企业空间灵活配置管理、空间互传文件发送策略管控。企业MDM应用可以通过集中管理、远程配置来保障空间满足企业业务需求及数据传输安全诉求。它广泛应用于政府机构、大型科技企业、央国企、商业银行等“一机两用”、“一企多网”场景，以确保企业员工高效易用，企业管理简单易管，企业数据安全隔离。","source":"@site/docs/enterprise-space-kit-guide/enterprisespace-introduction/enterprisespace-introduction.md","sourceDirName":"enterprise-space-kit-guide/enterprisespace-introduction","slug":"/enterprise-space-kit-guide/enterprisespace-introduction/","permalink":"/harmonyos-docs-site/enterprise-space-kit-guide/enterprisespace-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Enterprise Space Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用picker管理联系人","permalink":"/harmonyos-docs-site/contacts-kit/contacts-addcontactviaui/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/enterprise-space-kit-guide/enterprisespace-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/enterprise-space-kit-guide/enterprisespace-introduction/enterprisespace-introduction.md


const frontMatter = {
	title: 'Enterprise Space Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Enterprise Space Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家和地区",
  "id": "支持的国家和地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "访问限制",
  "id": "访问限制",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "enterprise-space-kit简介",
        children: "Enterprise Space Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enterprise Space Kit（企业数字空间服务）为企业", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit",
        children: "MDM"
      }), "应用提供空间管控、空间互传管控API，用于企业空间灵活配置管理、空间互传文件发送策略管控。企业MDM应用可以通过集中管理、远程配置来保障空间满足企业业务需求及数据传输安全诉求。它广泛应用于政府机构、大型科技企业、央国企、商业银行等“一机两用”、“一企多网”场景，以确保企业员工高效易用，企业管理简单易管，企业数据安全隔离。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供企业安全管控类", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mdm-kit",
          children: "MDM"
        }), "应用设置空间数据外发审批信息、获取审批内容的能力，便于企业根据自身安全管控要求管理并审批空间文件外发事件。其中审批信息可包含文件信息、文件状态、文件发送对象、文件发送时间等信息。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供统一的空间管理能力、下发空间管理策略，包括创建工作空间、移除工作空间、订阅空间事件等能力，便于企业根据自身业务需求配置管理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家和地区",
      children: "支持的国家和地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）提供服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前设备类型仅支持PC/2in1，支持的设备详见下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "设备类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "产品型号"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PC/2in1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为擎云系列"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "访问限制",
      children: "访问限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在企业数字空间服务使能后，经过空间切换，处于后台的空间，其", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-debug-app/ide-device-file-explorer#section975311314172",
        children: "公共目录"
      }), "数据可能无法访问。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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