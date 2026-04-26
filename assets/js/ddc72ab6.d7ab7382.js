"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["696203"], {
84350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_annotated_x_f_g_intergration_info_x_f_g_intergration_info_md_ddc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-graphics-accelerate-api-graphics-accelerate-c-api-total-annotated-x-f-g-intergration-info-x-f-g-intergration-info-md-ddc.json
var site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_annotated_x_f_g_intergration_info_x_f_g_intergration_info_md_ddc_namespaceObject = JSON.parse('{"id":"graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info","title":"FG_IntegrationInfo","description":"概述","source":"@site/docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info.md","sourceDirName":"graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info","slug":"/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"FG_IntegrationInfo","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info","kit":"图形","last_updated":"2026-04-22","slug":"x_f_g___intergration_info"},"sidebar":"ref","previous":{"title":"FG_PerFrameExtendedCameraInfo","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___per_frame_extended_camera_info/x_f_g___per_frame_extended_camera_info"},"next":{"title":"OpenGTX_ConfigDescription","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_open_g_t_x___config_description/x_open_g_t_x___config_description"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___intergration_info/x_f_g___intergration_info.md


const frontMatter = {
	title: 'FG_IntegrationInfo',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'x_f_g___intergration_info'
};
const contentTitle = 'FG_IntegrationInfo';

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
  "value": "presentMode",
  "id": "presentmode",
  "level": 3
}, {
  "value": "textureCachedByGame",
  "id": "texturecachedbygame",
  "level": 3
}, {
  "value": "needFlipInputColor",
  "id": "needflipinputcolor",
  "level": 3
}, {
  "value": "needFlipOutputColor",
  "id": "needflipoutputcolor",
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
        id: "fg_integrationinfo",
        children: "FG_IntegrationInfo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述超帧集成的信息。包括显示模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_predictionmode-1",
        children: "FG_PredictionMode"
      }), "为FG_PREDICTION_MODE_INTERPOLATION时生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：5.1.0(18)"]
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
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/files/frame__generation__base_8h/frame__generation__base_8h",
        children: "frame_generation_base.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_presentmode",
              children: "FG_PresentMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#presentmode",
              children: "presentMode"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["预测帧展示模式。取值为FG_PRESENT_BY_SYSTEM时，仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_predictionmode",
              children: "FG_PredictionMode"
            }), "为FG_PREDICTION_MODE_INTERPOLATION时生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#texturecachedbygame",
              children: "textureCachedByGame"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["深度纹理和颜色纹理是否被游戏单独缓存来用于超帧。缓存情况下算法将直接使用不再额外缓存。取值为True时，仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_predictionmode",
              children: "FG_PredictionMode"
            }), "为FG_PREDICTION_MODE_INTERPOLATION时生效。  取值范围：[true, false]。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#needflipinputcolor",
              children: "needFlipInputColor"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入的颜色纹理是否需要翻转。需要翻转情况下，算法映射Y轴坐标读取颜色纹理。取值为True时，仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_predictionmode",
              children: "FG_PredictionMode"
            }), "为FG_PREDICTION_MODE_INTERPOLATION时生效。  取值范围：[true, false]。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#needflipoutputcolor",
              children: "needFlipOutputColor"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["预测帧是否需要翻转。需要翻转情况下，算法映射Y轴坐标进行翻转输出。取值为True时，仅在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_predictionmode",
              children: "FG_PredictionMode"
            }), "为FG_PREDICTION_MODE_INTERPOLATION时生效。  取值范围：[true, false]。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "presentmode",
      children: "presentMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FG_PresentMode FG_IntegrationInfo::presentMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展示模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "texturecachedbygame",
      children: "textureCachedByGame"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool FG_IntegrationInfo::textureCachedByGame\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["深度纹理和颜色纹理是否被游戏单独缓存来用于超帧。缓存情况下算法将直接使用不再额外缓存。取值为True时，仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_predictionmode-1",
        children: "FG_PredictionMode"
      }), "为FG_PREDICTION_MODE_INTERPOLATION生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "needflipinputcolor",
      children: "needFlipInputColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool FG_IntegrationInfo::needFlipInputColor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入的颜色纹理是否需要翻转。需要翻转情况下，算法映射Y轴坐标读取颜色纹理。取值为True时，仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_predictionmode-1",
        children: "FG_PredictionMode"
      }), "为FG_PREDICTION_MODE_INTERPOLATION生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "needflipoutputcolor",
      children: "needFlipOutputColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool FG_IntegrationInfo::needFlipOutputColor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["预测帧是否需要翻转。需要翻转情况下，算法映射Y轴坐标进行翻转输出。取值为True时，仅在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_predictionmode-1",
        children: "FG_PredictionMode"
      }), "为FG_PREDICTION_MODE_INTERPOLATION生效。"]
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