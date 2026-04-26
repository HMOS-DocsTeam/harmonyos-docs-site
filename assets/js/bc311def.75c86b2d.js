"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["478789"], {
597502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_spatialupscalecreateinfo_xengine_kit_xeg_spatialupscalecreateinfo_md_bc3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-total-xengine-kit-annotated-xengine-kit-xeg-spatialupscalecreateinfo-xengine-kit-xeg-spatialupscalecreateinfo-md-bc3.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_spatialupscalecreateinfo_xengine_kit_xeg_spatialupscalecreateinfo_md_bc3_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo","title":"XEG_SpatialUpscaleCreateInfo","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo","slug":"/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"XEG_SpatialUpscaleCreateInfo","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xeg-spatialupscalecreateinfo"},"sidebar":"ref","previous":{"title":"XEG_RTShadowParameters","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowparameters/xengine-kit-xeg-rtshadowparameters"},"next":{"title":"XEG_SpatialUpscaleDescription","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscaledescription/xengine-kit-xeg-spatialupscaledescription"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo.md


const frontMatter = {
	title: 'XEG_SpatialUpscaleCreateInfo',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xeg-spatialupscalecreateinfo'
};
const contentTitle = 'XEG_SpatialUpscaleCreateInfo';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "成员变量",
  "id": "成员变量",
  "level": 3
}, {
  "value": "结构体成员变量说明",
  "id": "结构体成员变量说明",
  "level": 2
}, {
  "value": "format",
  "id": "format",
  "level": 3
}, {
  "value": "inputRegion",
  "id": "inputregion",
  "level": 3
}, {
  "value": "inputSize",
  "id": "inputsize",
  "level": 3
}, {
  "value": "outputRegion",
  "id": "outputregion",
  "level": 3
}, {
  "value": "outputSize",
  "id": "outputsize",
  "level": 3
}, {
  "value": "sharpness",
  "id": "sharpness",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "xeg_spatialupscalecreateinfo",
        children: "XEG_SpatialUpscaleCreateInfo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale",
        children: "XEG_SpatialUpscale"
      }), "对象的信息，当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_spatialupscale",
        children: "XEG_SpatialUpscale"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine",
        children: "XEngine"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-spatial-upscale-8h/xengine-kit-xeg-vulkan-spatial-upscale-8h",
        children: "xeg_vulkan_spatial_upscale.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkExtent2D ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputsize",
              children: "inputSize"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超分输入图像的尺寸，必须与超分输入图像的VkimageView的尺寸一致，否则会导致未定义问题，如超分失败、程序崩溃等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkRect2D ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputregion",
              children: "inputRegion"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超分输入图像的采样区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染失败或者渲染效果不合预期，此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkExtent2D ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outputsize",
              children: "outputSize"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超分输出图像的尺寸，必须与超分结果VkimageView的尺寸一致，否则会导致未定义问题，如超分失败、程序崩溃等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkRect2D ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outputregion",
              children: "outputRegion"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超分输出图像的绘制区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染失败或者渲染效果不合预期，此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkFormat ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#format",
              children: "format"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超分输入图像的格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sharpness",
              children: "sharpness"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超分的锐化参数，建议取值范围为[0, 1]，不同风格图像锐化值需要调整，否则会导致过度锐化现象，如出现大量噪点。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "format",
      children: "format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkFormat XEG_SpatialUpscaleCreateInfo::format\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超分输入图像的格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputregion",
      children: "inputRegion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkRect2D XEG_SpatialUpscaleCreateInfo::inputRegion\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超分输入图像的采样区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染失败或者渲染效果不合预期，此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputsize",
      children: "inputSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkExtent2D XEG_SpatialUpscaleCreateInfo::inputSize\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超分输入图像的尺寸，必须与超分输入图像的VkimageView的尺寸一致，否则会导致未定义问题，如超分失败、程序崩溃等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outputregion",
      children: "outputRegion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkRect2D XEG_SpatialUpscaleCreateInfo::outputRegion\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超分输出图像的绘制区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染失败或者渲染效果不合预期，此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outputsize",
      children: "outputSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkExtent2D XEG_SpatialUpscaleCreateInfo::outputSize\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超分输出图像的尺寸，必须与超分结果VkimageView的尺寸一致，否则会导致未定义问题，如超分失败、程序崩溃等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sharpness",
      children: "sharpness"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_SpatialUpscaleCreateInfo::sharpness\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超分的锐化参数，建议取值范围为[0, 1]，不同风格图像锐化值需要调整，否则会导致过度锐化现象，如出现大量噪点。"
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