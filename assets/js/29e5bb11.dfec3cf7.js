"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["712197"], {
200986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_tools_overview_ide_tools_overview_md_29e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-tools-overview-ide-tools-overview-md-29e.json
var site_docs_ide_tools_overview_ide_tools_overview_md_29e_namespaceObject = JSON.parse('{"id":"ide-tools-overview/ide-tools-overview","title":"工具概述","description":"HarmonyOS应用/元服务开发","source":"@site/docs/ide-tools-overview/ide-tools-overview.md","sourceDirName":"ide-tools-overview","slug":"/ide-tools-overview/","permalink":"/harmonyos-docs-site/ide-tools-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"工具概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"使用Neon指令扩展","permalink":"/harmonyos-docs-site/hardware-compatibility/neon-guide/"},"next":{"title":"下载与安装DevEco Studio","permalink":"/harmonyos-docs-site/ide-software-install/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-tools-overview/ide-tools-overview.md


const frontMatter = {
	title: '工具概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '工具概述';

const assets = {

};



const toc = [{
  "value": "HarmonyOS应用/元服务开发",
  "id": "harmonyos应用元服务开发",
  "level": 2
}, {
  "value": "DevEco Studio集成开发环境",
  "id": "deveco-studio集成开发环境",
  "level": 3
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 3
}, {
  "value": "命令行开发",
  "id": "命令行开发",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "文档声明",
  "id": "文档声明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "工具概述",
        children: "工具概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "harmonyos应用元服务开发",
      children: "HarmonyOS应用/元服务开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio集成开发环境",
      children: "DevEco Studio集成开发环境"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HUAWEI DevEco Studio（获取工具请单击", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/deveco-studio",
        children: "链接下载"
      }), "，以下简称DevEco Studio）是基于IntelliJ IDEA Community开源版本打造，面向HarmonyOS应用/元服务开发场景的一站式集成开发环境。提供AI辅助编程、编译构建、UI实时预览、代码调试、性能调优、模拟器等功能，帮助你高效开发HarmonyOS应用/元服务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-codegenie",
          children: "CodeGenie AI辅助编程"
        }), "：提供HarmonyOS应用开发智能知识问答、代码生成&补全、万能卡片生成、UI界面生成等能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["智能代码编辑：", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-edit",
          children: "代码编辑"
        }), "功能为ArkTS、JS和C/C++编程语言提供代码智能补全、代码重构等能力，帮助你高效编码。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["多端双向实时预览：", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-01",
          children: "界面预览"
        }), "功能帮助你在UI编码时快速预览界面在多种设备上的显示效果，查看组件布局，提升UI开发效率。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor",
          children: "Hvigor"
        }), "轻量级构建工具：支持源码、资源、构建流程的自定义，可以灵活构建差异化的多目标产物。提供Build Analyzer帮助分析构建性能，提升构建效率。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-debug-app/ide-debug-device",
          children: "跨语言调试"
        }), "：支持ArkTS&C++语言调试、汇编调试、lldb命令调试、反向调试、智能跳转和数据断点等丰富调试能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-insight-description",
          children: "Profiler应用调优"
        }), "：支持分析多种场景应用性能问题，包括内存泄漏、组件耗时、网络请求、应用启动、界面卡顿等。提供可视化泳道图帮助优化HarmonyOS应用性能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-app-test/ide-app-analyzer",
          children: "AppAnalyzer应用与元服务体检"
        }), "：使用体检工具在开发阶段发现可能影响上架的兼容性、性能、功耗、稳定性等问题，并支持场景化检测，提升应用基础体验及上架成功率。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator",
          children: "本地模拟器"
        }), "：提供手机（包括折叠屏）、平板、PC/2in1等类型的模拟器，可以帮助你在各种HarmonyOS设备上调测应用，以更好地适配不同的机型和HarmonyOS版本。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["依赖管理：ohpm是DevEco Studio默认的包管理工具，可以使用ohpm安装、更新、删除和管理HAR、HSP或模块之间的依赖关系，帮助开发者简化了代码的共享、分发和依赖管理。同时，提供", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo",
          children: "ohpm-repo"
        }), "工具帮助开发者搭建轻量级的HarmonyOS三方库私有仓服务。它与ohpm兼容，用来存储和管理您独有的三方库，保证这些三方库的私有性的同时，便于这些三方库能在开发团队内部共享复用，从而提升团队的开发效率。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发一个应用/元服务流程如图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(89797)/* ["default"] */.A) + "",
        width: "605",
        height: "792"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "一、开发准备"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取HUAWEI DevEco Studio请单击", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/",
        children: "链接下载"
      }), "，完成开发工具的安装。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio开发环境依赖于网络环境，需要连接上网络才能确保工具的正常使用。在部分企业网络受限的情况下，需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-appendix/ide-environment-config",
        children: "配置代理"
      }), "信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "二、开发应用/元服务"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio集成了Phone、Tablet、2in1、Car等设备的典型场景模板，可以通过工程向导轻松地", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-create-new-project",
        children: "创建一个新的工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接下来还需要定义应用/元服务的UI、开发业务功能等编码工作，可以根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/application-dev-guide",
        children: "应用开发导读"
      }), "来查看具体的开发过程，通过查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/development-intro-api/development-intro-api",
        children: "API接口文档"
      }), "查阅需要调用的API接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发代码的过程中，可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-01",
        children: "使用预览器查看应用/元服务效果"
      }), "，支持实时预览、动态预览、双向预览等功能，使编码的过程更高效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "三、运行、调试和测试应用/元服务"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用/元服务开发完成后，可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-debug-app/ide-debug-device",
        children: "使用真机进行调试"
      }), "（需要申请调测证书进行签名），支持单步调试、跨语言调试等调试手段，使得应用/元服务调试更加高效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS应用/元服务开发完成后，在发布到应用/元服务市场前，还需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-test",
        children: "对应用进行测试"
      }), "，主要包含Instrument Test、Local Test，确保HarmonyOS应用/元服务纯净、安全，给用户带来更好的使用体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "四、发布应用/元服务"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS应用/元服务开发、测试完成后，需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-publish-app#section6406135115814",
        children: "将应用/元服务发布至应用市场"
      }), "，以便应用市场对应用/元服务进行分发，普通消费者可以通过应用市场获取到对应的HarmonyOS应用/元服务。需要注意的是，发布到华为应用市场的HarmonyOS应用/元服务，必须使用应用市场颁发的发布证书进行签名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行开发",
      children: "命令行开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对流水线或命令行开发场景，推荐使用Command Line Tools", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/command-line-tools-for-hmos",
        children: "命令行工具"
      }), "，其中集合了HarmonyOS应用开发所用到的系列工具，包括代码检查工具codelinter、三方包管理工具ohpm、堆栈解析工具hstack、命令行构建工具hvigorw。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-command-line-codelinter",
          children: "代码检查工具codelinter"
        }), "：对代码进行检查与快速修复，可将codelinter工具集成到门禁或持续集成环境中。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-cli",
          children: "三方包管理工具ohpm"
        }), "：作为OpenHarmony三方库的包管理工具，支持OpenHarmony共享包的发布、安装和依赖管理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-command-line-hstack",
          children: "堆栈解析工具hstack"
        }), "：用于将Release应用混淆后的crash堆栈还原为源码对应堆栈。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-hvigor-commandline",
          children: "命令行构建工具hvigorw"
        }), "：作为Hvigor的wrapper包装工具，支持自动安装Hvigor构建工具和相关插件依赖，以及执行Hvigor构建命令。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下功能仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partner SDK功能"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template Market模板市场"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sample导入功能"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "端云一体化工程创建及开发"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "软件包及符号表上传功能"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect Logs and Diagnostic Data日志回传功能"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operation Analyzer运维服务"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AppAnalyzer应用与元服务体检"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI辅助编程工具DevEco CodeGenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OHPM Index OpenHarmony开源中心仓"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文档声明",
      children: "文档声明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HUAWEI DevEco Studio使用指南配套DevEco Studio", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/",
        children: "最新版本"
      }), "。如使用DevEco Studio其它版本，可能存在文档与产品功能界面、操作不一致的情况，请以实际功能界面为准。"]
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
89797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753617-c148a1a7c56d6454cd82e69cbce9205d.png");

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