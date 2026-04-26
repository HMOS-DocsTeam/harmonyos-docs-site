"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["602633"], {
636187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_reuse_date_instances_check_ide_reuse_date_instances_check_md_3ae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-reuse-date-instances-check-ide-reuse-date-instances-check-md-3ae.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_reuse_date_instances_check_ide_reuse_date_instances_check_md_3ae_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reuse-date-instances-check/ide-reuse-date-instances-check","title":"@performance/reuse-date-instances-check","description":"用于检测在循环或调用频繁的方法中重复创建Date对象，建议开发者重用现有实例或使用时间戳进行计算，减少创建Date成本。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reuse-date-instances-check/ide-reuse-date-instances-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reuse-date-instances-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reuse-date-instances-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reuse-date-instances-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":64,"frontMatter":{"title":"@performance/reuse-date-instances-check","sidebar_position":64,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-reuse-date-instances-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/reasonable-gps-use-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reasonable-gps-use-check/"},"next":{"title":"@performance/reasonable-sensor-use-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reasonable-sensor-use-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-reuse-date-instances-check/ide-reuse-date-instances-check.md


const frontMatter = {
	title: '@performance/reuse-date-instances-check',
	sidebar_position: 64,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-reuse-date-instances-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/reuse-date-instances-check';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "performancereuse-date-instances-check",
        children: "@performance/reuse-date-instances-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于检测在循环或调用频繁的方法中重复创建Date对象，建议开发者重用现有实例或使用时间戳进行计算，减少创建Date成本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/reuse-date-instances-check\": \"warn\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aboutToAppear(): void {\n    // 记录开始时间戳\n    this.startTime = Date.now();\n    this.intervalId = setInterval(() => {\n      // 只获取时间戳，避免创建Date对象\n      const nowTimestamp = Date.now();\n      // 重用格式化结果\n      const currentTimeFormatted = this.formatElapsedTime(nowTimestamp);\n      this.currentTimeDisplay = currentTimeFormatted;\n      // 直接使用时间戳计算\n      const elapsedMs = nowTimestamp - this.startTime;\n      this.elapsedTimeDisplay = this.formatElapsedTime(elapsedMs);\n      // 添加到历史记录\n      const seconds = Math.floor(nowTimestamp / 1000) % 60;\n      if (seconds % 10 === 0) {\n        // 每十秒记录一次\n        this.elapsedTimes.push(`${this.elapsedTimeDisplay}-${currentTimeFormatted}`);\n      }\n    }, 1000);\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aboutToAppear(): void {\n  // 记录开始时间\n  this.startTime = Date.now();\n  // 问题：每秒创建多个Date对象\n  this.intervalId = setInterval(() => {\n    // 创建新Date对象显示当前时间\n    const now = new Date();\n    this.currentTimeDisplay = now.toLocaleTimeString();\n    // 再次创建Date对象计算持续时间\n    const currentDate = new Date();\n    const elapsedMs = currentDate.getTime() - this.startTime;\n    // 再次创建Date对象格式化持续时间\n    const elapsedDate = new Date(elapsedMs);\n    const hours = elapsedDate.getUTCHours();\n    const minutes = elapsedDate.getUTCMinutes();\n    const seconds = elapsedDate.getUTCSeconds();\n    const elapsedFormatted = `${hours.toString().padStart(2, '0')}:${\n    minutes.toString().padStart(2, '0')}:${\n    seconds.toString().padStart(2, '0')}`;\n    // 添加到历史记录\n    if (seconds % 10 === 0) {\n      // 每十秒记录一次\n      this.elapsedTimes.push(`${elapsedFormatted}-${new Date().toLocaleString()}`);\n    }\n  }, 1000);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/recommended\nplugin:@performance/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
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