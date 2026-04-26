"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["711419"], {
996683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_temporalupscaledescription_xengine_kit_xeg_temporalupscaledescription_md_06f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-total-xengine-kit-annotated-xengine-kit-xeg-temporalupscaledescription-xengine-kit-xeg-temporalupscaledescription-md-06f.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_temporalupscaledescription_xengine_kit_xeg_temporalupscaledescription_md_06f_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription","title":"XEG_TemporalUpscaleDescription","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription","slug":"/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"title":"XEG_TemporalUpscaleDescription","sidebar_position":22,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xeg-temporalupscaledescription"},"sidebar":"ref","previous":{"title":"XEG_TemporalUpscaleCreateInfo","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscalecreateinfo/xengine-kit-xeg-temporalupscalecreateinfo"},"next":{"title":"authentication (华为账号应用统一认证服务)","permalink":"/harmonyos-docs-site/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription.md


const frontMatter = {
	title: 'XEG_TemporalUpscaleDescription',
	sidebar_position: 22,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xeg-temporalupscaledescription'
};
const contentTitle = 'XEG_TemporalUpscaleDescription';

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
  "value": "depthImage",
  "id": "depthimage",
  "level": 3
}, {
  "value": "dynamicMaskImage",
  "id": "dynamicmaskimage",
  "level": 3
}, {
  "value": "inputImage",
  "id": "inputimage",
  "level": 3
}, {
  "value": "jitterX",
  "id": "jitterx",
  "level": 3
}, {
  "value": "jitterY",
  "id": "jittery",
  "level": 3
}, {
  "value": "motionVectorImage",
  "id": "motionvectorimage",
  "level": 3
}, {
  "value": "outputImage",
  "id": "outputimage",
  "level": 3
}, {
  "value": "resetHistory",
  "id": "resethistory",
  "level": 3
}, {
  "value": "steadyLevel",
  "id": "steadylevel",
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
        id: "xeg_temporalupscaledescription",
        children: "XEG_TemporalUpscaleDescription"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述下发时域AI超分渲染命令时的输入信息。"
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
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-temporal-upscale-8h/xengine-kit-xeg-vulkan-temporal-upscale-8h",
        children: "xeg_vulkan_temporal_upscale.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputimage",
              children: "inputImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#depthimage",
              children: "depthImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深度图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#motionvectorimage",
              children: "motionVectorImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。图像格式需要是VK_FORMAT_R16G16_SFLOAT或更高精度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dynamicmaskimage",
              children: "dynamicMaskImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "物体的动态遮罩图像，格式需要是VK_FORMAT_R8_UNORM或其兼容格式。R通道的合法值为0.0，0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outputimage",
              children: "outputImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出图像。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#jitterx",
              children: "jitterX"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机在X方向上的抖动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#jittery",
              children: "jitterY"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机在Y方向上的抖动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#resethistory",
              children: "resetHistory"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，当前帧开始使用超分的情况下建议设置为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#steadylevel",
              children: "steadyLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。取值范围为[0.0, 1.0]，值越大越偏向历史帧。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "depthimage",
      children: "depthImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_TemporalUpscaleDescription::depthImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "深度图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamicmaskimage",
      children: "dynamicMaskImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_TemporalUpscaleDescription::dynamicMaskImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "物体的动态遮罩图像，格式需要是VK_FORMAT_R8_UNORM或其兼容格式。R通道的合法值为0.0，0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputimage",
      children: "inputImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_TemporalUpscaleDescription::inputImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jitterx",
      children: "jitterX"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_TemporalUpscaleDescription::jitterX\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机在X方向上的抖动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jittery",
      children: "jitterY"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_TemporalUpscaleDescription::jitterY\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机在Y方向上的抖动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "motionvectorimage",
      children: "motionVectorImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_TemporalUpscaleDescription::motionVectorImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。图像格式需要是VK_FORMAT_R16G16_SFLOAT或更高精度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outputimage",
      children: "outputImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_TemporalUpscaleDescription::outputImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resethistory",
      children: "resetHistory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool XEG_TemporalUpscaleDescription::resetHistory\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，当前帧开始使用超分的情况下建议设置为true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steadylevel",
      children: "steadyLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_TemporalUpscaleDescription::steadyLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。取值范围为[0.0, 1.0]，值越大越偏向历史帧。"
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