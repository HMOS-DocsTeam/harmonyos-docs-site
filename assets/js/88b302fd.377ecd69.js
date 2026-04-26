"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["606479"], {
59695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_optimization_cannkit_optimization_md_88b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-on-device-deployment-cannkit-optimization-cannkit-optimization-md-88b.json
var site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_optimization_cannkit_optimization_md_88b_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-on-device-deployment/cannkit-optimization/cannkit-optimization","title":"异构","description":"概述","source":"@site/docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-optimization/cannkit-optimization.md","sourceDirName":"cann-kit-guide/cannkit-on-device-deployment/cannkit-optimization","slug":"/cann-kit-guide/cannkit-on-device-deployment/cannkit-optimization/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-optimization/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"异构","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-optimization","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AIPP部署","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-aipp-deployment/"},"next":{"title":"维测调优","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-debugging-and-optimization/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-optimization/cannkit-optimization.md


const frontMatter = {
	title: '异构',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-optimization',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '异构';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "在线调优开发步骤",
  "id": "在线调优开发步骤",
  "level": 2
}, {
  "value": "在线调优示例说明",
  "id": "在线调优示例说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "异构",
        children: "异构"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异构是CANN Kit提供的异构计算能力，能够使开发者App在华为平台上充分享受到硬件平台的计算加速性能，同时提供非华为硬件平台的模型计算兼容性和计算加速，使开发者App开发过程归一化，不再需要为不同硬件平台适配不同模型或者计算框架，减少App开发及维护的难度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异构的原理如下图所示，指定OP1、OP2、OP5~OPn在CPU上进行推理，OP3、OP4在NPU上进行推理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(667316)/* ["default"] */.A) + "",
        width: "1035",
        height: "203"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实现异构可以通过在线调优方式，以下为在线调优参数设置接口，接口使用见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9C%A8%E7%BA%BF%E8%B0%83%E4%BC%98%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
        children: "在线调优开发步骤"
      }), "。如要使用更丰富的设置和查询接口，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit",
        children: "API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 在线调优接口及功能介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIOptions_SetTuningMode(OH_NNCompilation* compilation, HiAI_TuningMode tuningMode);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "芯片调优模式配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NN_ReturnCode HMS_HiAIOptions_SetTuningCacheDir(OH_NNCompilation* compilation, const char* cacheDir);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "芯片调优缓存目录配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在线调优开发步骤",
      children: "在线调优开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置芯片调优模式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nncompilation_constructwithofflinemodelfile",
              children: "OH_NNCompilation_ConstructWithOfflineModelFile"
            }), "，读取模型buffer，创建模型编译实例。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_settuningmode",
              children: "HMS_HiAIOptions_SetTuningMode"
            }), "向模型编译实例中设置芯片调优模式调优选项。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaioptions_settuningcachedir",
            children: "HMS_HiAIOptions_SetTuningCacheDir"
          }), "向模型编译实例中设置芯片调优缓存目录调优选项。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行模型编译。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置好所需调优选项参数后，通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/neural-network-runtime-api/neural-network-runtime-c/neural-network-runtime-headerfile/capi-neural-network-core-h/capi-neural-network-core-h#oh_nncompilation_build",
            children: "OH_NNCompilation_Build"
          }), "，传入创建模型编译实例，即可执行模型编译，编译成功则返回编译后的模型指针。后续流程同", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-on-device-deployment/cannkit-model-inference",
            children: "模型推理"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在线调优示例说明",
      children: "在线调优示例说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码设置调优参数SetTuningMode及SetTuningCacheDir，实现在线调优。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"neural_network_runtime/neural_network_core.h\"\n#include \"CANNKit/hiai_options.h\"\n// 基于离线模型文件创建编译实例\nOH_NNCompilation* compilation = OH_NNCompilation_ConstructWithOfflineModelFile(\"test.om\");\nif (compilation == nullptr) {\n    return;\n}\n// 选择辅助调优模式\nOH_NN_ReturnCode ret = HMS_HiAIOptions_SetTuningMode(compilation, HIAI_TUNING_MODE_HETER);\nif (ret != OH_NN_SUCCESS ) {\n    return;\n}\n// 设置辅助调优的缓存目录\nconst char* cacheDir = \"/data/local/tmp\";\nret = HMS_HiAIOptions_SetTuningCacheDir(compilation, cacheDir);\nif (ret != OH_NN_SUCCESS ) {\n    return;\n}\n// 编译模型\nret = OH_NNCompilation_Build(compilation);\nif (ret != OH_NN_SUCCESS ) {\n    return;\n}\n"
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
667316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479221-0e0ed234ad9ca484f3f0897767379680.png");

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