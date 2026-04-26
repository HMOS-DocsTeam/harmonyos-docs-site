"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["532770"], {
783011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_annotated_x_f_g_dispatch_description_g_l_e_s_x_f_g_dispatch_description_g_l_e_s_md_2e3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-graphics-accelerate-api-graphics-accelerate-c-api-total-annotated-x-f-g-dispatch-description-g-l-e-s-x-f-g-dispatch-description-g-l-e-s-md-2e3.json
var site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_annotated_x_f_g_dispatch_description_g_l_e_s_x_f_g_dispatch_description_g_l_e_s_md_2e3_namespaceObject = JSON.parse('{"id":"graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s/x_f_g___dispatch_description___g_l_e_s","title":"FG_DispatchDescription_GLES","description":"概述","source":"@site/docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s/x_f_g___dispatch_description___g_l_e_s.md","sourceDirName":"graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s","slug":"/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s/x_f_g___dispatch_description___g_l_e_s","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s/x_f_g___dispatch_description___g_l_e_s","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"FG_DispatchDescription_GLES","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___g_l_e_s","kit":"图形","last_updated":"2026-04-22","slug":"x_f_g___dispatch_description___g_l_e_s"},"sidebar":"ref","previous":{"title":"FG_Dimension2D","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dimension2_d/x_f_g___dimension2_d"},"next":{"title":"FG_DispatchDescription_VK","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___v_k/x_f_g___dispatch_description___v_k"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dispatch_description___g_l_e_s/x_f_g___dispatch_description___g_l_e_s.md


const frontMatter = {
	title: 'FG_DispatchDescription_GLES',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___g_l_e_s',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'x_f_g___dispatch_description___g_l_e_s'
};
const contentTitle = 'FG_DispatchDescription_GLES';

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
  "value": "inputColor",
  "id": "inputcolor",
  "level": 3
}, {
  "value": "inputDepthStencil",
  "id": "inputdepthstencil",
  "level": 3
}, {
  "value": "invViewProj",
  "id": "invviewproj",
  "level": 3
}, {
  "value": "outputColor",
  "id": "outputcolor",
  "level": 3
}, {
  "value": "viewProj",
  "id": "viewproj",
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
        id: "fg_dispatchdescription_gles",
        children: "FG_DispatchDescription_GLES"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述下发帧生成命令", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#hms_fg_dispatch_gles",
        children: "HMS_FG_Dispatch_GLES"
      }), "需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。"]
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
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__gles_8h/frame__generation__gles_8h",
        children: "frame_generation_gles.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputcolor",
              children: "inputColor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "真实渲染帧颜色缓冲区索引，支持格式包括GL_RGBA8、GL_R11F_G11F_B10F、GL_RGBA16F。  取值范围：[0, 2^32 -1]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputdepthstencil",
              children: "inputDepthStencil"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "真实渲染帧深度模板缓冲区索引，支持格式包括GL_DEPTH24_STENCIL8、GL_DEPTH32F_STENCIL8。  取值范围：[0, 2^32 -1]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4",
              children: "FG_Mat4x4"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#viewproj",
              children: "viewProj"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "真实渲染帧视图投影矩阵，即世界空间到相机裁剪空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___mat4x4/x_f_g___mat4x4",
              children: "FG_Mat4x4"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#invviewproj",
              children: "invViewProj"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "真实渲染帧逆视图投影矩阵，即相机裁剪空间到世界空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outputcolor",
              children: "outputColor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预测帧缓冲区索引，此预测帧缓冲区需要用户创建并输入，支持格式包括GL_RGBA8、GL_R11F_G11F_B10F、GL_RGBA16F。  取值范围：[0, 2^32 -1]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputcolor",
      children: "inputColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t FG_DispatchDescription_GLES::inputColor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "真实渲染帧颜色缓冲区索引，支持格式包括GL_RGBA8、GL_R11F_G11F_B10F、GL_RGBA16F。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputdepthstencil",
      children: "inputDepthStencil"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t FG_DispatchDescription_GLES::inputDepthStencil\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "真实渲染帧深度模板缓冲区索引，支持格式包括GL_DEPTH24_STENCIL8、GL_DEPTH32F_STENCIL8。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invviewproj",
      children: "invViewProj"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_Mat4x4 FG_DispatchDescription_GLES::invViewProj\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "真实渲染帧逆视图投影矩阵，即相机裁剪空间到世界空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outputcolor",
      children: "outputColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t FG_DispatchDescription_GLES::outputColor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预测帧缓冲区索引，此预测帧缓冲区需要用户创建并输入，支持格式包括GL_RGBA8、GL_R11F_G11F_B10F、GL_RGBA16F。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "viewproj",
      children: "viewProj"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_Mat4x4 FG_DispatchDescription_GLES::viewProj\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "真实渲染帧视图投影矩阵，即世界空间到相机裁剪空间坐标系转换矩阵，矩阵必须是4x4列主序的矩阵。"
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