"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["181884"], {
645749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_app_testing_overview_app_testing_overview_md_c00_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-app-testing-overview-app-testing-overview-md-c00.json
var site_docs_app_testing_overview_app_testing_overview_md_c00_namespaceObject = JSON.parse('{"id":"app-testing-overview/app-testing-overview","title":"HarmonyOS 开发者测试服务概述","description":"本章节介绍HarmonyOS 开发者测试服务的所有环节，包括代码静态检查、单元测试、应用和元服务体检、UI测试、专项测试、上架预检测试、用户测试、应用性能监测服务和持续集成与交付（CI/CD）。","source":"@site/docs/app-testing-overview/app-testing-overview.md","sourceDirName":"app-testing-overview","slug":"/app-testing-overview/","permalink":"/harmonyos-docs-site/app-testing-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HarmonyOS 开发者测试服务概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-testing-overview","kit":"testing","last_updated":"2026-04-20"},"sidebar":"docs","previous":{"title":"搭建流水线","permalink":"/harmonyos-docs-site/ide-command-line-building-app/"},"next":{"title":"单元测试框架使用指导","permalink":"/harmonyos-docs-site/ut/arkxtest-guidelines/unittest-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/app-testing-overview/app-testing-overview.md


const frontMatter = {
	title: 'HarmonyOS 开发者测试服务概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-testing-overview',
	kit: 'testing',
	last_updated: '2026-04-20'
};
const contentTitle = 'HarmonyOS 开发者测试服务概述';

const assets = {

};



const toc = [{
  "value": "代码静态检查",
  "id": "代码静态检查",
  "level": 2
}, {
  "value": "单元测试",
  "id": "单元测试",
  "level": 2
}, {
  "value": "应用与元服务体检",
  "id": "应用与元服务体检",
  "level": 2
}, {
  "value": "UI测试",
  "id": "ui测试",
  "level": 2
}, {
  "value": "专项测试",
  "id": "专项测试",
  "level": 2
}, {
  "value": "上架预检测试",
  "id": "上架预检测试",
  "level": 2
}, {
  "value": "用户测试",
  "id": "用户测试",
  "level": 2
}, {
  "value": "应用性能监测服务",
  "id": "应用性能监测服务",
  "level": 2
}, {
  "value": "持续集成与交付（CI/CD）",
  "id": "持续集成与交付cicd",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "harmonyos-开发者测试服务概述",
        children: "HarmonyOS 开发者测试服务概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍HarmonyOS 开发者测试服务的所有环节，包括代码静态检查、单元测试、应用和元服务体检、UI测试、专项测试、上架预检测试、用户测试、应用性能监测服务和持续集成与交付（CI/CD）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "代码静态检查",
      children: "代码静态检查"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-check",
        children: "代码静态检查"
      }), "是在不运行程序的情况下，通过分析代码的语法、结构、逻辑等静态特性来发现潜在问题的方法，能够帮助开发者在代码开发阶段确保代码质量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单元测试",
      children: "单元测试"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS 的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ut",
        children: "单元测试"
      }), "基于测试框架执行。框架由核心模块和扩展模块组成：核心模块提供测试运行所需的基础接口和执行逻辑，并通过插件化机制向外提供接入能力和运行时上下文；扩展模块在核心能力之上补充常用功能，例如用例超时、筛选、数据驱动和压力测试等，并以插件形式接入核心模块。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用与元服务体检",
      children: "应用与元服务体检"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成 HarmonyOS 应用/元服务开发后，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-app-test/ide-app-analyzer",
        children: "应用与元服务体检"
      }), "工具进行开发自测试，快速发现应用/元服务在特定场景下性能、功耗、安全、稳定性、功能等方面的兼容性问题，并且通过工具提供的诊断建议快速定位到故障代码，从而快速进行修复。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ui测试",
      children: "UI测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过简洁易用的API提供查找和操作界面控件能力，支持开发者编写基于界面操作的自动化测试脚本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "专项测试",
      children: "专项测试"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/test-service",
        children: "专项测试"
      }), "包括兼容性、稳定性、安全、性能、功耗、UX等，开发者可以结合各维度的应用质量建议，通过提供的多种专项测试工具来保障应用质量。如果需要对指定代码段进行性能测试，开发者可以使用 DevEco Studio ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ut/arkxtest-guidelines/perftest-guideline",
        children: "白盒性能测试框架"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "上架预检测试",
      children: "上架预检测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上架预检测试可以按照应用市场上架应用/元服务的标准进行测试，提前发现应用中基础体验类（性能/稳定性/UX/功耗/兼容性）问题，提升上架审核通过率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以根据实际情况，自主选择两种上架预检测试方法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者希望在本地开展上架预检测试，可以下载", (0,jsx_runtime.jsx)(_components.a, {
        href: "/test-service/deveco-testing/publish-testing",
        children: "DevEco Testing"
      }), "在本地进行测试。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者希望在云端开展测试，可以上传应用包至 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-cloudtest-introduction-0000002255036400",
        children: "AGC云测试"
      }), "，使用云端设备进行测试。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户测试",
      children: "用户测试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS 应用正式上架之前，开发者可以邀请特定的内外部测试用户提前体验，收集测试用户的反馈意见以优化应用体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据不同的体验测试阶段，开发者可以结合体验测试的目标用户群，自主选择或搭配使用三种用户测试方法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者需要在开发团队内进行内部测试，可以选择", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-internal-test-0000002270709477",
        children: "内部测试"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者需要在特定用户群组来测试，可以选择", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-invite-test-0000002270829393",
        children: "邀请测试"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者需要面向全网公开招募部分用户测试，可以选择", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-public-test-0000002287814841",
        children: "公开测试"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用性能监测服务",
      children: "应用性能监测服务"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS 应用/元服务上架后，开发者可能会关注其在真实海量设备上运行的性能和稳定性，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-apms-0000002235870062",
        children: "应用性能监测服务"
      }), "（英文简称APMS），一旦线上用户遇到卡顿或崩溃，开发者能第一时间收到预警，查看性能问题监测看板，并根据问题发生时的堆栈等信息快速分析，持续保障用户体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "持续集成与交付cicd",
      children: "持续集成与交付（CI/CD）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-command-line-building-app",
        children: "CI/CD"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-command-line-building-app",
        children: "流水线"
      }), "，开发者可以通过命令行集成华为官方的测试工具。通过 DevEco Studio 的命令行工具调用 Hvigor任务进行 HAP/APP 构建、签名、安装运行等操作。"]
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