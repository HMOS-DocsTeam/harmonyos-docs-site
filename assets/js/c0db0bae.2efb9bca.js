"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["902973"], {
856907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_rtreflectiondescription_xengine_kit_xeg_rtreflectiondescription_md_c0d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-total-xengine-kit-annotated-xengine-kit-xeg-rtreflectiondescription-xengine-kit-xeg-rtreflectiondescription-md-c0d.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_rtreflectiondescription_xengine_kit_xeg_rtreflectiondescription_md_c0d_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription","title":"XEG_RTReflectionDescription","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription","slug":"/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"XEG_RTReflectionDescription","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectiondescription","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xeg-rtreflectiondescription"},"sidebar":"ref","previous":{"title":"XEG_RTReflectionCreateInfo","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectioncreateinfo/xengine-kit-xeg-rtreflectioncreateinfo"},"next":{"title":"XEG_RTShadowAOCreateInfo","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription.md


const frontMatter = {
	title: 'XEG_RTReflectionDescription',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectiondescription',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xeg-rtreflectiondescription'
};
const contentTitle = 'XEG_RTReflectionDescription';

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
  "value": "accelerationStructure",
  "id": "accelerationstructure",
  "level": 3
}, {
  "value": "inputRayDirectionImage",
  "id": "inputraydirectionimage",
  "level": 3
}, {
  "value": "inputRayOriginImage",
  "id": "inputrayoriginimage",
  "level": 3
}, {
  "value": "outputReflectionInfoImage",
  "id": "outputreflectioninfoimage",
  "level": 3
}, {
  "value": "pNext",
  "id": "pnext",
  "level": 3
}, {
  "value": "rayMax",
  "id": "raymax",
  "level": 3
}, {
  "value": "rayMin",
  "id": "raymin",
  "level": 3
}, {
  "value": "reflectionCullMask",
  "id": "reflectioncullmask",
  "level": 3
}, {
  "value": "sType",
  "id": "stype",
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
        id: "xeg_rtreflectiondescription",
        children: "XEG_RTReflectionDescription"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体描述下发光线求交命令时的输入信息。"
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
        href: "/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-files/xengine-kit-xeg-vulkan-rt-reflection-8h/xengine-kit-xeg-vulkan-rt-reflection-8h",
        children: "xeg_vulkan_rt_reflection.h"
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
            children: ["XEG_StructureType ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#stype",
              children: "sType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["识别此结构的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype",
              children: "XEG_StructureType"
            }), "值，必须是XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const void * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pnext",
              children: "pNext"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向扩展结构的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputrayoriginimage",
              children: "inputRayOriginImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线原点图像，不能为空。格式必须是至少3通道的float类型，RGB通道分别存储原点的xyz坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputraydirectionimage",
              children: "inputRayDirectionImage"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线方向图像，不能为空。格式必须是至少3通道的float类型，RGB通道分别存储方向的xyz坐标。 如果格式为有符号的float类型，不做特殊处理，如果格式为无符号的float类型，方向信息需要按照以下方式量化：direction = (direction + 1.0) / 2.0 。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkImageView ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outputreflectioninfoimage",
              children: "outputReflectionInfoImage"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出的反射光线求交结果，格式必须为R32G32B32A32_UINT。求交结果会将光线追踪最近的命中信息打包成128bit，解析方式参考结构体成员变量说明中", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outputreflectioninfoimage",
              children: "outputReflectionInfoImage"
            }), "描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkAccelerationStructureKHR ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#accelerationstructure",
              children: "accelerationStructure"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景的光线追踪加速结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#raymin",
              children: "rayMin"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线起点到最近可能相交点之间的最小距离。必须为非负值，且小于等于rayMax。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#raymax",
              children: "rayMax"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光线起点到最远可能相交点之间的最大距离。超出此范围的任何相交都将被忽略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#reflectioncullmask",
              children: "reflectionCullMask"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置光线查询", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/KhronosGroup/GLSL/blob/main/extensions/ext/GLSL_EXT_ray_query.txt",
              children: "rayQueryInitializeEXT"
            }), "函数中的rayFlags和cullMask参数。高24bit表示rayFlags，低8bit表示cullMask。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accelerationstructure",
      children: "accelerationStructure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkAccelerationStructureKHR XEG_RTReflectionDescription::accelerationStructure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景的光线追踪加速结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputraydirectionimage",
      children: "inputRayDirectionImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_RTReflectionDescription::inputRayDirectionImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "光线方向图像，不能为空。格式必须是至少3通道的float类型，RGB通道分别存储方向的xyz坐标。 如果格式为有符号的float类型，不做特殊处理，如果格式为无符号的float类型，方向信息需要按照以下方式量化：direction = (direction + 1.0) / 2.0 。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputrayoriginimage",
      children: "inputRayOriginImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_RTReflectionDescription::inputRayOriginImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "光线原点图像，不能为空。格式必须是至少3通道的float类型，RGB通道分别存储原点的xyz坐标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outputreflectioninfoimage",
      children: "outputReflectionInfoImage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkImageView XEG_RTReflectionDescription::outputReflectionInfoImage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出的反射光线求交结果，格式必须为R32G32B32A32_UINT。求交结果会将光线追踪最近的命中信息打包成128bit，解析方式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint raymiss = outputReflectionInfoImage.x & 1;\nuint primitiveId = (outputReflectionInfoImage.x >> 1) & (0x3ffff);\nuint instanceId = outputReflectionInfoImage.x >> 19;\nvec2 barycentrics = unpackHalf2x16(outputReflectionInfoImage.z);\nfloat hitT = uintBitsToFloat(outputReflectionInfoImage.w);\nuint sbtOffest = (outputReflectionInfoImage.y >> 16);\nuint geomtryIndex = (outputReflectionInfoImage.y) & 0xffff;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pnext",
      children: "pNext"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const void* XEG_RTReflectionDescription::pNext\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向扩展结构的指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "raymax",
      children: "rayMax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTReflectionDescription::rayMax\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "光线起点到最远可能相交点之间的最大距离。超出此范围的任何相交都将被忽略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "raymin",
      children: "rayMin"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float XEG_RTReflectionDescription::rayMin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "光线起点到最近可能相交点之间的最小距离。必须为非负值，且小于等于rayMax。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reflectioncullmask",
      children: "reflectionCullMask"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t XEG_RTReflectionDescription::reflectionCullMask\n"
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
      }), "函数中的rayFlags和cullMask参数。高24bit表示rayFlags，低8bit表示cullMask。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stype",
      children: "sType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "XEG_StructureType XEG_RTReflectionDescription::sType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["识别此结构的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_structuretype",
        children: "XEG_StructureType"
      }), "值，必须是XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION。"]
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