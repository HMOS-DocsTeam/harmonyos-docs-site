"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["222586"], {
995310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_rtshadowaodenoiserparameters_xengine_kit_xeg_rtshadowaodenoiserparameters_md_f25_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-total-xengine-kit-annotated-xengine-kit-xeg-rtshadowaodenoiserparameters-xengine-kit-xeg-rtshadowaodenoiserparameters-md-f25.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_rtshadowaodenoiserparameters_xengine_kit_xeg_rtshadowaodenoiserparameters_md_f25_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodenoiserparameters/xengine-kit-xeg-rtshadowaodenoiserparameters","title":"XEG_RTShadowAODenoiserParameters","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodenoiserparameters/xengine-kit-xeg-rtshadowaodenoiserparameters.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodenoiserparameters","slug":"/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodenoiserparameters/xengine-kit-xeg-rtshadowaodenoiserparameters","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodenoiserparameters/xengine-kit-xeg-rtshadowaodenoiserparameters","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"XEG_RTShadowAODenoiserParameters","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaodenoiserparameters","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xeg-rtshadowaodenoiserparameters"},"sidebar":"ref","previous":{"title":"XEG_RTShadowAOCreateInfo","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo"},"next":{"title":"XEG_RTShadowAODescription","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodescription/xengine-kit-xeg-rtshadowaodescription"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodenoiserparameters/xengine-kit-xeg-rtshadowaodenoiserparameters.md


const frontMatter = {
	title: 'XEG_RTShadowAODenoiserParameters',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaodenoiserparameters',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xeg-rtshadowaodenoiserparameters'
};
const contentTitle = 'XEG_RTShadowAODenoiserParameters';

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
  "value": "ghostingAlpha",
  "id": "ghostingalpha",
  "level": 3
}, {
  "value": "positionConstantDistance",
  "id": "positionconstantdistance",
  "level": 3
}, {
  "value": "spatialDenoiseTimes",
  "id": "spatialdenoisetimes",
  "level": 3
}, {
  "value": "spatialMaxKernelStep",
  "id": "spatialmaxkernelstep",
  "level": 3
}, {
  "value": "spatialNormalWeight",
  "id": "spatialnormalweight",
  "level": 3
}, {
  "value": "temporalBlendFactor",
  "id": "temporalblendfactor",
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
        id: "xeg_rtshadowaodenoiserparameters",
        children: "XEG_RTShadowAODenoiserParameters"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "光线追踪阴影和环境光遮蔽算法去噪参数。"
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
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#temporalblendfactor",
              children: "temporalBlendFactor"
            }), " = 0.075f"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时域滤波时当前帧与历史帧混合的权重系数。一致性校验通过后，权重值越大时越多采用当前帧的信息。此参数的值将被限制在[0.01, 1.0]范围内。默认值为0.075。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#positionconstantdistance",
              children: "positionConstantDistance"
            }), " = 1.0f"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时域滤波中根据世界空间距离进行一致性校验的阈值，必须大于等于0，如果传负值将被视为0。默认值为1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#spatialdenoisetimes",
              children: "spatialDenoiseTimes"
            }), " = 2"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空域滤波器执行的次数。次数越多生成的阴影和环境光遮蔽噪声越少，但可能会导致降噪结果更模糊。此参数的值将被限制在[0, 5]范围内。默认值为2。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#ghostingalpha",
              children: "ghostingAlpha"
            }), " = 0.0f"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时域滤波器中控制运动物体引入的鬼影问题。值为0时，不解决运动物体引入的鬼影问题。值越高，鬼影问题解决的越好，但降噪结果会稍微劣化。此参数的值将被限制在[0.0, 1.0]范围内。默认值为0.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#spatialnormalweight",
              children: "spatialNormalWeight"
            }), " = 1.0f"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空域滤波器使用的法线权重信息，值越大，法线权重越高，画质越锐利。此参数的值将被限制在[0.0, 1.0]范围内。默认值为1.0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#spatialmaxkernelstep",
              children: "spatialMaxKernelStep"
            }), " = 0"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空域滤波器采样步长，值越大，采样范围越大。此参数的值将被限制在[0, 4]范围内。默认值为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ghostingalpha",
      children: "ghostingAlpha"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTShadowAODenoiserParameters::ghostingAlpha = 0.0f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时域滤波器中控制运动物体引入的鬼影问题。值为0时，不解决运动物体引入的鬼影问题。值越高，鬼影问题解决的越好，但降噪结果会稍微劣化。此参数的值将被限制在[0.0, 1.0]范围内。默认值为0.0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positionconstantdistance",
      children: "positionConstantDistance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTShadowAODenoiserParameters::positionConstantDistance = 1.0f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时域滤波中根据世界空间距离进行一致性校验的阈值，必须大于等于0，如果传负值将被视为0。默认值为1.0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spatialdenoisetimes",
      children: "spatialDenoiseTimes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t XEG_RTShadowAODenoiserParameters::spatialDenoiseTimes = 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "空域滤波器执行的次数。次数越多生成的阴影和环境光遮蔽噪声越少，但可能会导致降噪结果更模糊。此参数的值将被限制在[0, 5]范围内。默认值为2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spatialmaxkernelstep",
      children: "spatialMaxKernelStep"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t XEG_RTShadowAODenoiserParameters::spatialMaxKernelStep = 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "空域滤波器采样步长，值越大，采样范围越大。此参数的值将被限制在[0, 4]范围内。默认值为0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spatialnormalweight",
      children: "spatialNormalWeight"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTShadowAODenoiserParameters::spatialNormalWeight = 1.0f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "空域滤波器使用的法线权重信息，值越大，法线权重越高，画质越锐利。此参数的值将被限制在[0.0, 1.0]范围内。默认值为1.0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "temporalblendfactor",
      children: "temporalBlendFactor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTShadowAODenoiserParameters::temporalBlendFactor = 0.075f\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时域滤波时当前帧与历史帧混合的权重系数。一致性校验通过后，权重值越大时越多采用当前帧的信息。此参数的值将被限制在[0.01, 1.0]范围内。默认值为0.075。"
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