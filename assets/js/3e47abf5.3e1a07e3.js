"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["534947"], {
878370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mindspore_lite_kit_mindspore_lite_kit_introduction_mindspore_lite_kit_introduction_md_3e4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mindspore-lite-kit-mindspore-lite-kit-introduction-mindspore-lite-kit-introduction-md-3e4.json
var site_docs_mindspore_lite_kit_mindspore_lite_kit_introduction_mindspore_lite_kit_introduction_md_3e4_namespaceObject = JSON.parse('{"id":"mindspore-lite-kit/mindspore-lite-kit-introduction/mindspore-lite-kit-introduction","title":"MindSpore Lite Kit简介","description":"使用场景","source":"@site/docs/mindspore-lite-kit/mindspore-lite-kit-introduction/mindspore-lite-kit-introduction.md","sourceDirName":"mindspore-lite-kit/mindspore-lite-kit-introduction","slug":"/mindspore-lite-kit/mindspore-lite-kit-introduction/","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-lite-kit-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"MindSpore Lite Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-lite-kit-introduction","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"附录A：获取华为账号对应UID的方式","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-appendix-a-get-uid/"},"next":{"title":"使用MindSpore Lite进行模型转换","permalink":"/harmonyos-docs-site/mindspore-lite-kit/mindspore-lite-converter-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/mindspore-lite-kit/mindspore-lite-kit-introduction/mindspore-lite-kit-introduction.md


const frontMatter = {
	title: 'MindSpore Lite Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/mindspore-lite-kit-introduction',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'MindSpore Lite Kit简介';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "亮点/优势",
  "id": "亮点优势",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "开发方式",
  "id": "开发方式",
  "level": 2
}, {
  "value": "与其他Kit的关系",
  "id": "与其他kit的关系",
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
        id: "mindspore-lite-kit简介",
        children: "MindSpore Lite Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore Lite是HarmonyOS内置的轻量化AI引擎，面向全场景构建支持多处理器架构的开放AI架构，使能全场景智能应用，为开发者提供端到端的解决方案，为算法工程师和数据科学家提供开发友好、运行高效、部署灵活的体验，帮助人工智能软硬件应用生态繁荣发展。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前已经在图像分类、目标识别、人脸识别、文字识别等应用中广泛使用。常用场景如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图像分类：最基础的计算机视觉应用，属于有监督学习类别，如给定一张图像（猫、狗、飞机、汽车等等），判断图像所属的类别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目标检测：您可以使用预置目标检测模型，检测标识摄像头输入帧中的对象并添加标签，并用边框标识出来。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图像分割：图像分割可用于检测目标在图片中的位置或者图片中某一像素是属于何种对象的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Kit适用于Phone、Tablet、PC/2in1、TV设备，支持使用模拟器运行调试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点优势",
      children: "亮点/优势"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore Lite提供面向不同硬件设备的AI模型推理能力，使用MindSpore Lite的优势如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更优性能：高效的内核算法和汇编级优化，支持CPU、NNRt专用芯片高性能推理，最大化发挥硬件算力，最小化推理时延和功耗。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "轻量化：提供超轻量的解决方案，支持模型量化压缩，模型更小跑得更快，使能AI模型极限环境下的部署执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全场景支持：支持多种操作系统以及嵌入式系统，适配多种软硬件智能设备上的AI应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "高效部署：支持MindSpore/TensorFlow Lite/Caffe/Onnx模型，提供模型压缩、数据处理等能力，统一训练和推理IR，方便用户快速部署。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图 1"
        })
      }), " 使用MindSpore Lite进行模型推理的开发流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(904091)/* ["default"] */.A) + "",
        width: "797",
        height: "340"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore Lite开发流程分为两个阶段："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模型转换"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MindSpore Lite使用.ms格式模型进行推理。对于第三方框架模型，比如 TensorFlow、TensorFlow Lite、Caffe、ONNX等，可以使用MindSpore Lite提供的模型转换工具转换为.ms模型，使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/mindspore-lite-kit/mindspore-lite-converter-guidelines",
            children: "推理模型转换"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模型部署"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用MindSpore Lite运行时接口，实现模型推理/训练，大致步骤如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建推理/训练上下文，包括指定推理/训练硬件、设置线程数等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "加载.ms模型文件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设置模型输入数据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "执行推理/训练，读取输出。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发方式",
      children: "开发方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore Lite已作为系统部件在HarmonyOS标准系统内置，基于MindSpore Lite开发AI应用的开发方式有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["方式一：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/mindspore-lite-kit/mindspore-guidelines-based-js",
          children: "使用MindSpore Lite ArkTS API开发AI应用"
        }), "。开发者直接在UI代码中调用 MindSpore Lite ArkTS API 加载模型并进行AI模型推理，此方式可快速验证效果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["方式二：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/mindspore-lite-kit/mindspore-guidelines-based-native",
          children: "使用MindSpore Lite Native API开发AI应用"
        }), "。开发者将算法模型和调用 MindSpore Lite Native API 的代码封装成动态库，并通过N-API封装成ArkTS接口，供UI调用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与其他kit的关系",
      children: "与其他Kit的关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS AI开放层次由上层到底层分别为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MindSpore Lite Kit：HarmonyOS内置的轻量化AI引擎，提供统一推理接口和多后端硬件加速能力，使能手机、PC/2in1、TV等全场景智能应用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/neural-network-runtime-kit/neural-network-runtime-kit-introduction",
          children: "Neural Network Runtime Kit"
        }), "：面向AI领域的跨芯片推理计算运行时，作为中间桥梁连通上层AI推理框架和底层加速芯片，实现AI模型的跨芯片推理计算。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-introduction",
          children: "CANN Kit"
        }), "：海思AI硬件统一开放计算架构，支持 Ascend C NPU自定义编程、端云协同复用。擅长偏重载AI计算、需深度优化性能功耗场景。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Network Runtime Kit可支持系统内置的MindSpore Lite推理框架（MindSpore Lite Kit），MindSpore Lite Kit作为已开放了配置NNRt的Native接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore Lite Kit与NNRt接口对接时无需构图，两者共享同一份模型图格式（MindIR），因此使用MindSpore Lite Kit在NNRt上加载模型比其他AI推理框架更高效。此外，MindSpore Lite还支持通用硬件CPU/GPU与NNRt AI加速硬件之间的模型异构推理功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CANN Kit作为麒麟平台的后端接入Neural Network Runtime Kit，支撑Neural Network Runtime Kit于麒麟平台的AI计算能力。CANN Kit构建在底层的硬件驱动和优化的计算库之上，与云侧昇腾芯片统一支持AscendC自定义算子编程语言和相关工具链，是HarmonyOS智能生态的重要基石，为众多领域的智能应用提供核心支撑。"
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
904091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479345-3f5522d051961475c3555389a9c8255f.jpg");

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