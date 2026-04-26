"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["926610"], {
123096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_annotated_x_f_g_context_description_v_k_x_f_g_context_description_v_k_md_926_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-graphics-accelerate-api-graphics-accelerate-c-api-total-annotated-x-f-g-context-description-v-k-x-f-g-context-description-v-k-md-926.json
var site_docs_ref_graphics_accelerate_api_graphics_accelerate_c_api_total_annotated_x_f_g_context_description_v_k_x_f_g_context_description_v_k_md_926_namespaceObject = JSON.parse('{"id":"graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k","title":"FG_ContextDescription_VK","description":"概述","source":"@site/docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k.md","sourceDirName":"graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k","slug":"/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"FG_ContextDescription_VK","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___context_description___v_k","kit":"图形","last_updated":"2026-04-22","slug":"x_f_g___context_description___v_k"},"sidebar":"ref","previous":{"title":"FG_AlgorithmModeInfo","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___algorithm_mode_info/x_f_g___algorithm_mode_info"},"next":{"title":"FG_Dimension2D","permalink":"/harmonyos-docs-site/ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___dimension2_d/x_f_g___dimension2_d"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/graphics-accelerate-api/graphics_accelerate_c_api/total/annotated/x_f_g___context_description___v_k/x_f_g___context_description___v_k.md


const frontMatter = {
	title: 'FG_ContextDescription_VK',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___context_description___v_k',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'x_f_g___context_description___v_k'
};
const contentTitle = 'FG_ContextDescription_VK';

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
  "value": "fnVulkanLoaderFunction",
  "id": "fnvulkanloaderfunction",
  "level": 3
}, {
  "value": "framesInFlight",
  "id": "framesinflight",
  "level": 3
}, {
  "value": "vkDevice",
  "id": "vkdevice",
  "level": 3
}, {
  "value": "vkInstance",
  "id": "vkinstance",
  "level": 3
}, {
  "value": "vkPhysicalDevice",
  "id": "vkphysicaldevice",
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
        id: "fg_contextdescription_vk",
        children: "FG_ContextDescription_VK"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述创建超帧上下文实例", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk",
        children: "FG_Context_VK"
      }), "所需的属性信息。"]
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
            children: ["VkInstance ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkinstance",
              children: "vkInstance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Vulkan实例，需在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk",
              children: "FG_Context_VK"
            }), "的整个生命周期内有效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkPhysicalDevice ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkphysicaldevice",
              children: "vkPhysicalDevice"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Vulkan物理设备句柄，需在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk",
              children: "FG_Context_VK"
            }), "的整个生命周期内有效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkDevice ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vkdevice",
              children: "vkDevice"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Vulkan逻辑设备句柄，需在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk",
              children: "FG_Context_VK"
            }), "的整个生命周期内有效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint8_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#framesinflight",
              children: "framesInFlight"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置并行渲染图像数。例如，如果下一帧图像需要等待上一帧图像送显后再进行渲染，则framesInFlight应设置为1；如果上一帧图像送显的同时，下一帧图像已经在进行渲染，则framesInFlight应设置为2。注意：framesInFlight不允许设置成0。超出取值范围返回FG_INVALID_PARAMETER错误码。  取值范围：[1, 2]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["PFN_vkGetInstanceProcAddr ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#fnvulkanloaderfunction",
              children: "fnVulkanLoaderFunction"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向Vulkan的vkGetInstanceProcAddr的函数指针，不允许设置为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fnvulkanloaderfunction",
      children: "fnVulkanLoaderFunction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PFN_vkGetInstanceProcAddr FG_ContextDescription_VK::fnVulkanLoaderFunction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向Vulkan的vkGetInstanceProcAddr的函数指针，不允许设置为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framesinflight",
      children: "framesInFlight"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint8_t FG_ContextDescription_VK::framesInFlight\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置并行渲染图像数。 例如，如果下一帧图像需要等待上一帧图像送显后再进行渲染，则framesInFlight应设置为1； 如果上一帧图像送显的同时，下一帧图像已经在进行渲染，则framesInFlight应设置为2。注意：framesInFlight不允许设置成0。超出取值范围返回FG_INVALID_PARAMETER错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkdevice",
      children: "vkDevice"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkDevice FG_ContextDescription_VK::vkDevice\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vulkan逻辑设备句柄，需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk",
        children: "FG_Context_VK"
      }), "的整个生命周期内有效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkinstance",
      children: "vkInstance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkInstance FG_ContextDescription_VK::vkInstance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vulkan实例, 需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk",
        children: "FG_Context_VK"
      }), "的整个生命周期内有效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vkphysicaldevice",
      children: "vkPhysicalDevice"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkPhysicalDevice FG_ContextDescription_VK::vkPhysicalDevice\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vulkan物理设备句柄，需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics_accelerate_c_api/index/x_graphics_accelerate/x_graphics_accelerate#fg_context_vk",
        children: "FG_Context_VK"
      }), "的整个生命周期内有效。"]
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