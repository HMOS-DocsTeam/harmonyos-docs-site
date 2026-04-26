"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["825355"], {
158503(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_annotated_x_f_g_image_format_v_k_x_f_g_image_format_v_k_md_dfd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-graphics-accelerate-api-graphics-accelerate-c-api-total-annotated-x-f-g-image-format-v-k-x-f-g-image-format-v-k-md-dfd.json
var site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_annotated_x_f_g_image_format_v_k_x_f_g_image_format_v_k_md_dfd_namespaceObject = JSON.parse('{"id":"graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_format___v_k/x_f_g___image_format___v_k","title":"FG_ImageFormat_VK","description":"概述","source":"@site/docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_format___v_k/x_f_g___image_format___v_k.md","sourceDirName":"graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_format___v_k","slug":"/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_format___v_k/x_f_g___image_format___v_k","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_format___v_k/x_f_g___image_format___v_k","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"FG_ImageFormat_VK","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_format___v_k","kit":"图形","last_updated":"2026-04-22","slug":"x_f_g___image_format___v_k"},"sidebar":"ref","previous":{"title":"FG_DispatchDescription_VK","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___v_k/x_f_g___dispatch_description___v_k"},"next":{"title":"FG_ImageInfo_VK","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_info___v_k/x_f_g___image_info___v_k"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___image_format___v_k/x_f_g___image_format___v_k.md


const frontMatter = {
	title: 'FG_ImageFormat_VK',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_format___v_k',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'x_f_g___image_format___v_k'
};
const contentTitle = 'FG_ImageFormat_VK';

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
  "value": "inputColorFormat",
  "id": "inputcolorformat",
  "level": 3
}, {
  "value": "inputDepthStencilFormat",
  "id": "inputdepthstencilformat",
  "level": 3
}, {
  "value": "outputColorFormat",
  "id": "outputcolorformat",
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
        id: "fg_imageformat_vk",
        children: "FG_ImageFormat_VK"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述超帧输入输出图像的格式信息，该接口仅适配Vulkan图形API平台。"
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
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate",
        children: "GraphicsAccelerate"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__vk_8h/frame__generation__vk_8h",
        children: "frame_generation_vk.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["VkFormat ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputcolorformat",
              children: "inputColorFormat"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "真实渲染帧颜色缓冲区图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkFormat ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputdepthstencilformat",
              children: "inputDepthStencilFormat"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深度模板缓冲区图像格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkFormat ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outputcolorformat",
              children: "outputColorFormat"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预测帧缓冲区图像格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputcolorformat",
      children: "inputColorFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkFormat FG_ImageFormat_VK::inputColorFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "真实渲染帧颜色缓冲区图像格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputdepthstencilformat",
      children: "inputDepthStencilFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkFormat FG_ImageFormat_VK::inputDepthStencilFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "深度模板缓冲区图像格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outputcolorformat",
      children: "outputColorFormat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkFormat FG_ImageFormat_VK::outputColorFormat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预测帧缓冲区图像格式。"
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