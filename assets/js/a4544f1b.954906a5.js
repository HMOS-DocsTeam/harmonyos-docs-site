"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["856021"], {
320559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_scenarios_jsvm_secure_shield_mode_jsvm_secure_shield_mode_md_a45_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-scenarios-jsvm-secure-shield-mode-jsvm-secure-shield-mode-md-a45.json
var site_docs_coding_jsvm_jsvm_scenarios_jsvm_secure_shield_mode_jsvm_secure_shield_mode_md_a45_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode/jsvm-secure-shield-mode","title":"JSVM-API 坚盾守护模式","description":"坚盾守护模式是为高安全需求用户设计的系统级安全防护方案。该模式通过实施严格的功能限制，显著增强系统安全性，有效防范针对远程攻击面的各类威胁。在坚盾守护模式下，JSVM 增加了功能限制，需要开发者评估应用在坚盾守护模式下的可用性。","source":"@site/docs/coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode/jsvm-secure-shield-mode.md","sourceDirName":"coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode","slug":"/coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"JSVM-API 坚盾守护模式","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-secure-shield-mode","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JSVM-API 申请JIT权限指导","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-apply-jit-profile/"},"next":{"title":"JSVM-API 内存泄漏问题定位指导","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-locate-memory-leak/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-scenarios/jsvm-secure-shield-mode/jsvm-secure-shield-mode.md


const frontMatter = {
	title: 'JSVM-API 坚盾守护模式',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-secure-shield-mode',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'JSVM-API 坚盾守护模式';

const assets = {

};



const toc = [{
  "value": "启用坚盾守护模式",
  "id": "启用坚盾守护模式",
  "level": 2
}, {
  "value": "坚盾守护模式下的功能限制",
  "id": "坚盾守护模式下的功能限制",
  "level": 2
}, {
  "value": "应用兼容性评估指南",
  "id": "应用兼容性评估指南",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "jsvm-api-坚盾守护模式",
        children: "JSVM-API 坚盾守护模式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "坚盾守护模式是为高安全需求用户设计的系统级安全防护方案。该模式通过实施严格的功能限制，显著增强系统安全性，有效防范针对远程攻击面的各类威胁。在坚盾守护模式下，JSVM 增加了功能限制，需要开发者评估应用在坚盾守护模式下的可用性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启用坚盾守护模式",
      children: "启用坚盾守护模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要启用坚盾守护模式，请按以下路径操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进入手机系统设置"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选择\"隐私和安全\"选项"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击\"坚盾守护模式\"并开启"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "坚盾守护模式下的功能限制",
      children: "坚盾守护模式下的功能限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为降低JSVM受攻击风险，坚盾守护模式将实施以下关键安全限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全面禁用即时编译(JIT)功能，包括已获取 ACL 权限的应用程序"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "暂停 WebAssembly 支持（当前版本中 WebAssembly 依赖 JIT 功能实现）"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用兼容性评估指南",
      children: "应用兼容性评估指南"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在坚盾守护模式下运行应用程序时，建议进行以下兼容性检查："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "JavaScript 性能评估："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "测试应用在限制环境中的运行效率"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "优化可能存在的性能瓶颈"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "WebAssembly 兼容性检查："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "静态代码分析：检查项目中的 WebAssembly 相关API调用，与第三方库的 Wasm 依赖情况。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "运行时验证：在坚盾守护模式下执行全功能测试。"
          }), "\n"]
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