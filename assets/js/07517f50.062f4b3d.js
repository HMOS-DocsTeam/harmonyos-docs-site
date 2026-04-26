"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["850135"], {
50235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_featured_topics_cannkit_tensor_basics_cannkit_data_layout_format_cannkit_data_layout_format_md_075_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-featured-topics-cannkit-tensor-basics-cannkit-data-layout-format-cannkit-data-layout-format-md-075.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_featured_topics_cannkit_tensor_basics_cannkit_data_layout_format_cannkit_data_layout_format_md_075_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-tensor-basics/cannkit-data-layout-format/cannkit-data-layout-format","title":"数据排布格式","description":"Format为数据的物理排布格式，定义了解读数据的维度，比如1D，2D，3D，4D，5D等。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-tensor-basics/cannkit-data-layout-format/cannkit-data-layout-format.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-tensor-basics/cannkit-data-layout-format","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-tensor-basics/cannkit-data-layout-format/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-tensor-basics/cannkit-data-layout-format/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"数据排布格式","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-data-layout-format","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Tensor基本概念","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-tensor-basics/cannkit-basic-concepts-of-tensor/"},"next":{"title":"如何使用double buffer优化性能","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-double-buffer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-tensor-basics/cannkit-data-layout-format/cannkit-data-layout-format.md


const frontMatter = {
	title: '数据排布格式',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-data-layout-format',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '数据排布格式';

const assets = {

};



const toc = [{
  "value": "NCHW和NHWC",
  "id": "nchw和nhwc",
  "level": 2
}, {
  "value": "NC1HWC0",
  "id": "nc1hwc0",
  "level": 2
}, {
  "value": "FRACTAL_NZ",
  "id": "fractal_nz",
  "level": 2
}, {
  "value": "FRACTAL_Z",
  "id": "fractal_z",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数据排布格式",
        children: "数据排布格式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Format为数据的物理排布格式，定义了解读数据的维度，比如1D，2D，3D，4D，5D等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nchw和nhwc",
      children: "NCHW和NHWC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在深度学习领域，多维数据通过多维数组存储，比如卷积神经网络的特征图(Feature Map)通常用四维数组保存，即4D，4D格式解释如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "N：Batch数量，例如图像的数目。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "H：Height，特征图高度，即垂直高度方向的像素个数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "W：Width，特征图宽度，即水平宽度方向的像素个数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C：Channels，特征图通道，例如彩色RGB图像的Channels为3。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于数据只能线性存储，因此这四个维度有对应的顺序。不同深度学习框架会按照不同的顺序存储特征图数据，比如Caffe，排列顺序为[Batch, Channels, Height, Width]，即NCHW。TensorFlow中，排列顺序为[Batch, Height, Width, Channels]，即NHWC。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示，以一张格式为RGB的图片为例，NCHW中，C排列在外层，实际存储的是“RRRRRRGGGGGGBBBBBB”，即同一通道的所有像素值顺序存储在一起；而NHWC中C排列在最内层，实际存储的则是“RGBRGBRGBRGBRGBRGB”，即多个通道的同一位置的像素值顺序存储在一起。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(239953)/* ["default"] */.A) + "",
        width: "355",
        height: "66"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尽管存储的数据相同，但不同的存储顺序会导致数据的访问特性不一致，因此即便进行同样的运算，相应的计算性能也会不同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nc1hwc0",
      children: "NC1HWC0"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kirin AI处理器中，为了提高通用矩阵乘法(GEMM)运算数据块的访问效率，所有张量数据统一采用NC1HWC0的五维数据格式。其中C0与微架构强相关，等于AI Core中矩阵计算单元的大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C1=(C+C0-1)/C0。如果结果不整除，向上取整。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NHWC/NCHW -> NC1HWC0的转换过程为：将数据在C维度进行分割，变成C1份NHWC0/NC0HW，再将C1份NHWC0/NC0HW在内存中连续排列成NC1HWC0，其格式转换示意图如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(241895)/* ["default"] */.A) + "",
        width: "528",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NHWC -> NC1HWC0的转换公式如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Tensor.reshape([N, H, W, C1, C0]).transpose([0, 3, 1, 2, 4])\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NCHW -> NC1HWC0的转换公式如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Tensor.reshape([N, C1, C0, H, W]).transpose([0, 1, 3, 4, 2])\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fractal_nz",
      children: "FRACTAL_NZ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FRACTAL_NZ是分形格式，如Feature Map的数据存储，在cube单元计算时，输出矩阵的数据格式为NW1H1H0W0。整个矩阵被分为（H1*W1）个分形，按照column major排布，形状如N字形；每个分形内部有（H0*W0）个元素，按照row major排布，形状如z字形。考虑到数据排布格式，将NW1H1H0W0数据格式称为Nz（大N小z）格式。其中，H0,W0表示一个分形的大小，示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(986658)/* ["default"] */.A) + "",
        width: "325",
        height: "380"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ND –> FRACTAL_NZ的变换过程为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(..., N，H, W )->pad->(..., N, H1*H0, W1*W0)->reshape->(..., N, H1, H0, W1, W0)->transpose->(..., N, W1, H1, H0, W0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fractal_z",
      children: "FRACTAL_Z"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FRACTAL_Z是用于定义卷积权重的数据格式，由FT Matrix（FT：Filter，卷积核）变换得到。FRACTAL_Z是送往Cube的最终数据格式，采用“C1HW,N1,N0,C0”的4维数据排布。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据有两层Tiling，如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(426880)/* ["default"] */.A) + "",
        width: "500",
        height: "337"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第一层与Cube的Size相关，数据按照列的方向连续（小n）；第二层与矩阵的Size相关，数据按照行的方向连续（大Z）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：HWCN = (2, 2, 32, 32)，将其变成FRACTAL_Z( C1HW, N1, N0, C0 ) = (8, 2, 16, 16)。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HWCN变换FRACTAL_Z的过程为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tensor.padding([ [0,0], [0,0], [0,(C0–C%C0)%C0], [0,(N0–N%N0)%N0] ]).reshape( [H, W, C1, C0, N1, N0]).transpose( [2, 0, 1, 4, 5, 3] ).reshape( [C1*H*W, N1, N0, C0])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NCHW变换FRACTAL_Z的过程为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tensor.padding([ [0,(N0–N%N0)%N0], [0,(C0–C%C0)%C0], [0,0], [0,0] ]).reshape( [N1, N0, C1, C0, H, W]).transpose( [2, 4, 5, 0, 1, 3] ).reshape( [C1*H*W, N1, N0, C0])\n"
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
241895(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479253-ca7f29cd411a3fb443c520e7a030420c.png");

},
426880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439299-3c1d767fd3c74af4f485411a9b72fdf6.png");

},
239953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
986658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799604-eb592dd293608cba7ba92780c9ec8d2e.png");

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