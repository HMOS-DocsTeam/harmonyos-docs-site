"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["291534"], {
260916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_run_emulator_ide_emulator_overview_ide_emulator_requirements_ide_emulator_requirements_md_137_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-run-emulator-ide-emulator-overview-ide-emulator-requirements-ide-emulator-requirements-md-137.json
var site_docs_ide_run_emulator_ide_emulator_overview_ide_emulator_requirements_ide_emulator_requirements_md_137_namespaceObject = JSON.parse('{"id":"ide-run-emulator/ide-emulator-overview/ide-emulator-requirements/ide-emulator-requirements","title":"使用环境","description":"模拟器在本地计算机上创建和运行，在运行和调试应用/元服务时可以保持良好的流畅性和稳定性，但是需要耗费一定的计算机资源，具体的运行环境要求如下。","source":"@site/docs/ide-run-emulator/ide-emulator-overview/ide-emulator-requirements/ide-emulator-requirements.md","sourceDirName":"ide-run-emulator/ide-emulator-overview/ide-emulator-requirements","slug":"/ide-run-emulator/ide-emulator-overview/ide-emulator-requirements/","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-overview/ide-emulator-requirements/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用环境","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-requirements","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"使用仿真器运行轻量级穿戴应用","permalink":"/harmonyos-docs-site/ide-run-simulator/"},"next":{"title":"设备支持类型","permalink":"/harmonyos-docs-site/ide-run-emulator/ide-emulator-overview/ide-emulator-devicetype/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-run-emulator/ide-emulator-overview/ide-emulator-requirements/ide-emulator-requirements.md


const frontMatter = {
	title: '使用环境',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-requirements',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '使用环境';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
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
        id: "使用环境",
        children: "使用环境"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟器在本地计算机上创建和运行，在运行和调试应用/元服务时可以保持良好的流畅性和稳定性，但是需要耗费一定的计算机资源，具体的运行环境要求如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Windows运行环境："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "最低要求"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "操作系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 10企业版、专业版或教育版及以上，且操作系统版本不低于10.0.18363"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最新的64位Windows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 具有二级地址转换 (SLAT) 的64位处理器 - CPU支持AES指令集 - CPU支持VM监视器模式扩展（Intel CPU的VT-c技术） - 不支持在虚拟机系统中运行模拟器 - 不支持采用ARM CPU的Windows计算机 - 2017年以后CPU型号。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 最新的Intel Core i5、i7、i9系列CPU - 最新的AMD Ryzen 5、6、7、9系列CPU - CPU后缀为H/HK/HX的笔记本电脑或后缀为S/F/K的台式机   由于性能不足，不推荐使用 Intel® Core™ N 系列和 U 系列处理器"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32GB及以上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "磁盘空间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32GB及以上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕分辨率1280*800像素以上"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕分辨率1920*1080像素以上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 支持OpenGL版本4.1 - 支持2017年以后的集成显卡，或具有4GB或以上显存的独立显卡 - 从DevEco Studio 6.0.0 Release版本开始，AMD的GPU显示驱动要求不低于24.1.1版本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 支持OpenGL版本4.1及以上 - 最新的集成显卡 - 最新的具有8GB或以上显存的独立显卡，并配套最新驱动程序"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mac运行环境："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "最低要求"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "推荐"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "操作系统"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "macOS系统为12.5及以上版本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最新的64位macOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 不支持在虚拟机系统中运行模拟器 - 支持Apple Silicon芯片，不支持intel芯片"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最新的Apple Silicon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16GB及以上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "磁盘空间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32GB及以上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕分辨率1280*800像素以上"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕分辨率1920*1080像素以上"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持OpenGL版本4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持OpenGL版本4.1及以上"
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