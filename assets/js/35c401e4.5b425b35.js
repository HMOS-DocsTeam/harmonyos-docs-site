"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["73157"], {
62742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_whole_deployment_process_cannkit_whole_deployment_process_md_35c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-on-device-deployment-cannkit-whole-deployment-process-cannkit-whole-deployment-process-md-35c.json
var site_docs_cann_kit_guide_cannkit_on_device_deployment_cannkit_whole_deployment_process_cannkit_whole_deployment_process_md_35c_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-on-device-deployment/cannkit-whole-deployment-process/cannkit-whole-deployment-process","title":"部署全流程","description":"离线模型转换","source":"@site/docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-whole-deployment-process/cannkit-whole-deployment-process.md","sourceDirName":"cann-kit-guide/cannkit-on-device-deployment/cannkit-whole-deployment-process","slug":"/cann-kit-guide/cannkit-on-device-deployment/cannkit-whole-deployment-process/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-whole-deployment-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"部署全流程","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-whole-deployment-process","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"可变data_type","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-variable-data_type/"},"next":{"title":"模型推理","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-model-inference/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-on-device-deployment/cannkit-whole-deployment-process/cannkit-whole-deployment-process.md


const frontMatter = {
	title: '部署全流程',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-whole-deployment-process',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '部署全流程';

const assets = {

};



const toc = [{
  "value": "离线模型转换",
  "id": "离线模型转换",
  "level": 2
}, {
  "value": "App集成",
  "id": "app集成",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "部署全流程",
        children: "部署全流程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(472747)/* ["default"] */.A) + "",
        width: "525",
        height: "601"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "离线模型转换",
      children: "离线模型转换"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "离线模型转换需要将Caffe、TensorFlow、ONNX、MindSpore模型转换为CANN Kit平台支持的模型格式，并可以按需进行AIPP操作、量化操作，使用场景及方法如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AIPP操作"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["AIPP用于在硬件上完成图像预处理，包括改变图像尺寸、色域转换（转换图像格式）、减均值/乘系数（改变图像像素），运用后可避免重新训练匹配推理计算平台需要的数据格式，只通过AIPP参数配置或者在软件层面上调用AIPP接口即可完成适配，同时由于硬件专用，可以获得较好的推理性能收益，具体操作可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example#aipp%E6%A8%A1%E5%9E%8B%E8%BD%AC%E6%8D%A2%E4%BB%A5caffe%E6%A8%A1%E5%9E%8B%E4%B8%BA%E4%BE%8B",
            children: "AIPP模型转换"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "量化操作"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["量化是一种可以把FP32模型转化为低bit模型的操作，以节约网络存储空间、降低传输时延以及提高运算执行效率，量化操作可参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-model-conversion-example#%E9%87%8F%E5%8C%96%E6%A8%A1%E5%9E%8B%E8%BD%AC%E6%8D%A2%E4%BB%A5caffe%E6%A8%A1%E5%9E%8B%E4%B8%BA%E4%BE%8B",
            children: "量化模型转换"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "app集成",
      children: "App集成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "App集成流程包含创建项目、配置项目里的NAPI、集成模型，集成模型又包含加载模型、编译模型、模型输入数据预处理、运行模型、模型输出数据后处理流程。"
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
472747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799570-53384b978b49c68f0d5ebe15e2867f26.png");

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