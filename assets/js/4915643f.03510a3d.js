"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["634134"], {
596028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_model_benefits_cannkit_model_benefits_md_491_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-optimization-cannkit-lightweight-tool-instructions-cannkit-model-benefits-cannkit-model-benefits-md-491.json
var site_docs_cann_kit_guide_cannkit_model_optimization_cannkit_lightweight_tool_instructions_cannkit_model_benefits_cannkit_model_benefits_md_491_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-model-benefits/cannkit-model-benefits","title":"模型收益","description":"Quant\\\\_INT8-8量化收益","source":"@site/docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-model-benefits/cannkit-model-benefits.md","sourceDirName":"cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-model-benefits","slug":"/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-model-benefits/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-model-benefits/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"模型收益","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-model-benefits","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"常见问题","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-model-size-reduction-faqs/"},"next":{"title":"模型转换前准备","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-preparing-for-model-conversion/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-optimization/cannkit-lightweight-tool-instructions/cannkit-model-benefits/cannkit-model-benefits.md


const frontMatter = {
	title: '模型收益',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-model-benefits',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '模型收益';

const assets = {

};



const toc = [{
  "value": "Quant_INT8-8量化收益",
  "id": "quant_int8-8量化收益",
  "level": 2
}, {
  "value": "网络结构搜索工具分类场景收益对比",
  "id": "网络结构搜索工具分类场景收益对比",
  "level": 2
}, {
  "value": "检测场景收益对比",
  "id": "检测场景收益对比",
  "level": 3
}, {
  "value": "分割场景收益对比",
  "id": "分割场景收益对比",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "模型收益",
        children: "模型收益"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quant_int8-8量化收益",
      children: "Quant_INT8-8量化收益"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以resnet-18为例，使用轻量化工具后（Quant_INT8-8量化）的收益如下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "框架"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据集"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "原始精度"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "重训练后精度"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非量化OM离线  模型体积(MB)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Quant_INT8-8量化OM  离线模型体积(MB)"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resnet-18(v2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70.0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70.0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22.457"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.9"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络结构搜索工具分类场景收益对比",
      children: "网络结构搜索工具分类场景收益对比"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以resnet-18为例，使用轻量化工具后（网络结构搜索）的收益如下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "框架"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据集"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数量（M）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "精度"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet-18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.69"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70.32%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NASEA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.93"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72.13%[1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet-18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.69"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "69.6%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NASEA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72.88%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检测场景收益对比",
      children: "检测场景收益对比"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "框架"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据集"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "计算量（G）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mAP@[.5, .95][2]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSD(backbone：ResNet-18)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COCO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet-18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17.8[3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSD(backbone：ResNet-18)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COCO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NASEA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18.4[3]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "分割场景收益对比",
      children: "分割场景收益对比"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "框架"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据集"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "模型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "计算量（G）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mIOU[4]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VOC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet-18 + Deeplab v3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "54.1[5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VOC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NASEA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56.1[5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VOC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet-18 + Deeplab v3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VOC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NASEA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65.1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(980558)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[1] 此精度是使用tensorpack重训练模型得出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[2] 此指标的计算方法为：IoU(Intersection over Union)从0.5~0.95区间上，以0.05为间隔计算AP的值，再计算所有AP的均值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[3] 此精度是在COCO val2017数据集上测试得出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[4] 此指标为平均交并比，计算方法为先求每个类别的交并比，再平均。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[5] 此精度是在VOC val2012数据集上测试得出。"
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
980558(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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