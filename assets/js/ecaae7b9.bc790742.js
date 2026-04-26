"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["294987"], {
981787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_rtshadowaocreateinfo_xengine_kit_xeg_rtshadowaocreateinfo_md_eca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-xengine-api-xengine-c-xengine-kit-total-xengine-kit-annotated-xengine-kit-xeg-rtshadowaocreateinfo-xengine-kit-xeg-rtshadowaocreateinfo-md-eca.json
var site_docs_ref_xengine_api_xengine_c_xengine_kit_total_xengine_kit_annotated_xengine_kit_xeg_rtshadowaocreateinfo_xengine_kit_xeg_rtshadowaocreateinfo_md_eca_namespaceObject = JSON.parse('{"id":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo","title":"XEG_RTShadowAOCreateInfo","description":"概述","source":"@site/docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo.md","sourceDirName":"xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo","slug":"/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"XEG_RTShadowAOCreateInfo","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaocreateinfo","kit":"图形","last_updated":"2026-04-22","slug":"xengine-kit-xeg-rtshadowaocreateinfo"},"sidebar":"ref","previous":{"title":"XEG_RTReflectionDescription","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtreflectiondescription/xengine-kit-xeg-rtreflectiondescription"},"next":{"title":"XEG_RTShadowAODenoiserParameters","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaodenoiserparameters/xengine-kit-xeg-rtshadowaodenoiserparameters"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-rtshadowaocreateinfo/xengine-kit-xeg-rtshadowaocreateinfo.md


const frontMatter = {
	title: 'XEG_RTShadowAOCreateInfo',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaocreateinfo',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'xengine-kit-xeg-rtshadowaocreateinfo'
};
const contentTitle = 'XEG_RTShadowAOCreateInfo';

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
  "value": "aoOnlyInShadow",
  "id": "aoonlyinshadow",
  "level": 3
}, {
  "value": "denoiseMode",
  "id": "denoisemode",
  "level": 3
}, {
  "value": "enableRTAO",
  "id": "enablertao",
  "level": 3
}, {
  "value": "enableRTShadow",
  "id": "enablertshadow",
  "level": 3
}, {
  "value": "pNext",
  "id": "pnext",
  "level": 3
}, {
  "value": "reverseZ",
  "id": "reversez",
  "level": 3
}, {
  "value": "rtInputGbufferSize",
  "id": "rtinputgbuffersize",
  "level": 3
}, {
  "value": "rtShadowAOSize",
  "id": "rtshadowaosize",
  "level": 3
}, {
  "value": "sType",
  "id": "stype",
  "level": 3
}, {
  "value": "traversalMode",
  "id": "traversalmode",
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
        id: "xeg_rtshadowaocreateinfo",
        children: "XEG_RTShadowAOCreateInfo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此结构体描述创建支持光线追踪阴影和环境光遮蔽效果", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
        children: "XEG_RTVisibleMask"
      }), "实例的初始化信息。当结构体中的信息变化时，需要创建新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/xengine-api/xengine-c/xengine-kit-index/xengine-kit-xengine/xengine-kit-xengine#xeg_rtvisiblemask",
        children: "XEG_RTVisibleMask"
      }), "对象。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            }), "值，必须是XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO。"]
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
            children: ["VkExtent2D ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rtinputgbuffersize",
              children: "rtInputGbufferSize"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入的GBuffer深度和法线图像的尺寸，深度图像和法线图像的尺寸必须相同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["VkExtent2D ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rtshadowaosize",
              children: "rtShadowAOSize"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出的阴影和环境光遮蔽图像的尺寸，必须与rtInputGbufferSize等比例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#enablertshadow",
              children: "enableRTShadow"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启光线追踪阴影效果，true为开启，false为不开启。阴影与环境光遮蔽效果至少需要开启一个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#enablertao",
              children: "enableRTAO"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启光线追踪环境光遮蔽效果，true为开启，false为不开启。阴影与环境光遮蔽效果至少需要开启一个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEG_TraversalMode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#traversalmode",
              children: "traversalMode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遍历模式，光线追踪阴影和环境光遮蔽使用相同的遍历模式设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["XEG_DenoiseQualityMode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#denoisemode",
              children: "denoiseMode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去噪质量模式，光线追踪阴影和环境光遮蔽使用相同的质量设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aoonlyinshadow",
              children: "aoOnlyInShadow"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅在开启光线追踪阴影效果时生效，如果设置为true，将只计算处于阴影区域的像素的环境光遮蔽值。如果设置为false则计算所有像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#reversez",
              children: "reverseZ"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "场景是否开启了深度翻转，即远平面处的深度为0。深度翻转可以获取更高精度的深度值，建议开启。true表示已开启，false表示未开启。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aoonlyinshadow",
      children: "aoOnlyInShadow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool XEG_RTShadowAOCreateInfo::aoOnlyInShadow\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅在开启光线追踪阴影效果时生效，如果设置为true，将只计算处于阴影区域的像素的环境光遮蔽值。如果设置为false则计算所有像素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "denoisemode",
      children: "denoiseMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "XEG_DenoiseQualityMode XEG_RTShadowAOCreateInfo::denoiseMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "去噪质量模式，光线追踪阴影和环境光遮蔽使用相同的质量设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablertao",
      children: "enableRTAO"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool XEG_RTShadowAOCreateInfo::enableRTAO\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "是否开启光线追踪环境光遮蔽效果，true为开启，false为不开启。阴影与环境光遮蔽效果至少需要开启一个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablertshadow",
      children: "enableRTShadow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool XEG_RTShadowAOCreateInfo::enableRTShadow\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "是否开启光线追踪阴影效果，true为开启，false为不开启。阴影与环境光遮蔽效果至少需要开启一个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pnext",
      children: "pNext"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const void* XEG_RTShadowAOCreateInfo::pNext\n"
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
      id: "reversez",
      children: "reverseZ"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool XEG_RTShadowAOCreateInfo::reverseZ\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景是否开启了深度翻转，即远平面处的深度为0。深度翻转可以获取更高精度的深度值，建议开启。true表示已开启，false表示未开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rtinputgbuffersize",
      children: "rtInputGbufferSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkExtent2D XEG_RTShadowAOCreateInfo::rtInputGbufferSize\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入的GBuffer深度和法线图像的尺寸，深度图像和法线图像的尺寸必须相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rtshadowaosize",
      children: "rtShadowAOSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VkExtent2D XEG_RTShadowAOCreateInfo::rtShadowAOSize\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输出的阴影和环境光遮蔽图像的尺寸，必须与rtInputGbufferSize等比例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stype",
      children: "sType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "XEG_StructureType XEG_RTShadowAOCreateInfo::sType\n"
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
      }), "值，必须是XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "traversalmode",
      children: "traversalMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "XEG_TraversalMode XEG_RTShadowAOCreateInfo::traversalMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "遍历模式，光线追踪阴影和环境光遮蔽使用相同的遍历模式设置。"
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