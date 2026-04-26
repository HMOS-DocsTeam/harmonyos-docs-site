"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["138837"], {
51488(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_rtshadowparameters_xengine_kit_xeg_rtshadowparameters_md_d98_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-total-xengine-kit-annotated-xengine-kit-xeg-rtshadowparameters-xengine-kit-xeg-rtshadowparameters-md-d98.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_rtshadowparameters_xengine_kit_xeg_rtshadowparameters_md_d98_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowparameters/xengine-kit-xeg-rtshadowparameters","title":"XEG_RTShadowParameters","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowparameters/xengine-kit-xeg-rtshadowparameters.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowparameters","slug":"/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowparameters/xengine-kit-xeg-rtshadowparameters","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowparameters/xengine-kit-xeg-rtshadowparameters","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"XEG_RTShadowParameters","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowparameters","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xeg-rtshadowparameters"},"sidebar":"ref","previous":{"title":"XEG_RTShadowAODescription","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodescription/xengine-kit-xeg-rtshadowaodescription"},"next":{"title":"XEG_SpatialUpscaleCreateInfo","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-spatialupscalecreateinfo/xengine-kit-xeg-spatialupscalecreateinfo"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowparameters/xengine-kit-xeg-rtshadowparameters.md


const frontMatter = {
	title: 'XEG_RTShadowParameters',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowparameters',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xeg-rtshadowparameters'
};
const contentTitle = 'XEG_RTShadowParameters';

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
  "value": "rayPerPixel",
  "id": "rayperpixel",
  "level": 3
}, {
  "value": "raySourceAngleInDegree",
  "id": "raysourceangleindegree",
  "level": 3
}, {
  "value": "rayTMax",
  "id": "raytmax",
  "level": 3
}, {
  "value": "rayTMin",
  "id": "raytmin",
  "level": 3
}, {
  "value": "shadowCullDistance",
  "id": "shadowculldistance",
  "level": 3
}, {
  "value": "shadowCullMask",
  "id": "shadowcullmask",
  "level": 3
}, {
  "value": "sunDirection",
  "id": "sundirection",
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
        id: "xeg_rtshadowparameters",
        children: "XEG_RTShadowParameters"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "光线追踪阴影（Shadow）算法参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
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
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-visible-mask-8h/xengine-kit-xeg-vulkan-rt-visible-mask-8h",
        children: "xeg_vulkan_rt_visible_mask.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#raytmax",
              children: "rayTMax"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阴影光线的tMax值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#raytmin",
              children: "rayTMin"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阴影光线的tMin值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sundirection",
              children: "sunDirection"
            }), " [3]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方向光的方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#raysourceangleindegree",
              children: "raySourceAngleInDegree"
            }), " = 0.0f"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "沿光源方向进行阴影采样的角度范围，值越大，半影区域越大。此参数的值将被限制在[0.0, 90.0]范围内。默认值为0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#shadowcullmask",
              children: "shadowCullMask"
            }), " = 0x5FF"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置光线查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/KhronosGroup/GLSL/blob/main/extensions/ext/GLSL_EXT_ray_query.txt",
              children: "rayQueryInitializeEXT"
            }), "函数中的rayFlags和cullMask参数，高24bit表示rayFlags，低8bit表示cullMask。 默认值为0x5FF，即 ((gl_RayFlagsOpaqueEXT"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#shadowculldistance",
              children: "shadowCullDistance"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阴影剔除的世界空间距离，场景中像素超过此距离时不计算阴影，必须大于0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rayperpixel",
              children: "rayPerPixel"
            }), " = 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每像素采样数，当前仅支持1spp。默认值为1。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rayperpixel",
      children: "rayPerPixel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t XEG_RTShadowParameters::rayPerPixel = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每像素采样数，当前仅支持1spp。默认值为1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "raysourceangleindegree",
      children: "raySourceAngleInDegree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTShadowParameters::raySourceAngleInDegree = 0.0f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "沿光源方向进行阴影采样的角度范围，值越大，半影区域越大。此参数的值将被限制在[0.0, 90.0]范围内。默认值为0.0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "raytmax",
      children: "rayTMax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTShadowParameters::rayTMax\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "阴影光线的tMax值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "raytmin",
      children: "rayTMin"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTShadowParameters::rayTMin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "阴影光线的tMin值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowculldistance",
      children: "shadowCullDistance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTShadowParameters::shadowCullDistance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "阴影剔除的世界空间距离，场景中像素超过此距离时不计算阴影，必须大于0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shadowcullmask",
      children: "shadowCullMask"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t XEG_RTShadowParameters::shadowCullMask = 0x5FF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置光线查询", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/KhronosGroup/GLSL/blob/main/extensions/ext/GLSL_EXT_ray_query.txt",
        children: "rayQueryInitializeEXT"
      }), "函数中的rayFlags和cullMask参数，高24bit表示rayFlags，低8bit表示cullMask。 默认值为0x5FF，即 ((gl_RayFlagsOpaqueEXT | gl_RayFlagsTerminateOnFirstHitEXT) << 8) | 0xFF。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sundirection",
      children: "sunDirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTShadowParameters::sunDirection[3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方向光的方向。"
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