"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["694625"], {
58587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_pen_api_pen_c_api_pen_headerfile_and_struct_pen_headerfile_pen_headerfile_declare_pen_headerfile_declare_md_d55_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-pen-api-pen-c-api-pen-headerfile-and-struct-pen-headerfile-pen-headerfile-declare-pen-headerfile-declare-md-d55.json
var site_docs_ref_system_hardware_api_pen_api_pen_c_api_pen_headerfile_and_struct_pen_headerfile_pen_headerfile_declare_pen_headerfile_declare_md_d55_namespaceObject = JSON.parse('{"id":"system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-headerfile-declare/pen-headerfile-declare","title":"native_gcp_api.h","description":"概述","source":"@site/docs-ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-headerfile-declare/pen-headerfile-declare.md","sourceDirName":"system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-headerfile-declare","slug":"/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-headerfile-declare/pen-headerfile-declare","permalink":"/harmonyos-docs-site/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-headerfile-declare/pen-headerfile-declare","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"native_gcp_api.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-headerfile-declare","kit":"系统","last_updated":"2026-04-22","slug":"pen-headerfile-declare"},"sidebar":"ref","previous":{"title":"HandWrite","permalink":"/harmonyos-docs-site/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-handwrite-c/pen-handwrite-c"},"next":{"title":"native_handwrite_api.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-handwrite-headerfile-declare/pen-handwrite-headerfile-declare"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-headerfile-declare/pen-headerfile-declare.md


const frontMatter = {
	title: 'native_gcp_api.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-headerfile-declare',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'pen-headerfile-declare'
};
const contentTitle = 'native_gcp_api.h';

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
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "native_gcp_apih",
        children: "native_gcp_api.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于对外提供全局取色能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libcolorpicker_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <color_picker/native_gcp_api.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Stylus.ColorPicker"]
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
        href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c",
        children: "GlobalColorPicker"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-imagefeaturepicker-struct-color/pen-imagefeaturepicker-struct-color",
              children: "HMS_GCP_Color"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义颜色值的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-imagefeaturepicker-struct-colorinfo/pen-imagefeaturepicker-struct-colorinfo",
              children: "HMS_GCP_PickedColorInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义取色的颜色信息的结构体。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_onresult",
              children: "HMS_GCP_OnResult"
            }), ") (void *userData, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-imagefeaturepicker-struct-colorinfo/pen-imagefeaturepicker-struct-colorinfo",
              children: "HMS_GCP_PickedColorInfo"
            }), " colorInfo, const int32_t code)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此回调用于接收拾取的颜色结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_colorspace",
              children: "HMS_GCP_ColorSpace"
            }), " {  HMS_GCP_UNKNOWN = 0,  HMS_GCP_ADOBE_RGB_1998 = 1,  HMS_GCP_DCI_P3 = 2,  HMS_GCP_DISPLAY_P3 = 3,  HMS_GCP_SRGB = 4,  HMS_GCP_BT709 = 6,  HMS_GCP_BT601_EBU = 7,  HMS_GCP_BT601_SMPTE_C = 8,  HMS_GCP_BT2020_HLG = 9,  HMS_GCP_BT2020_PQ = 10,  HMS_GCP_P3_HLG = 11,  HMS_GCP_P3_PQ = 12,  HMS_GCP_ADOBE_RGB_1998_LIMIT = 13,  HMS_GCP_DISPLAY_P3_LIMIT = 14,  HMS_GCP_SRGB_LIMIT = 15,  HMS_GCP_BT709_LIMIT = 16,  HMS_GCP_BT601_EBU_LIMIT = 17,  HMS_GCP_BT601_SMPTE_C_LIMIT = 18,  HMS_GCP_BT2020_HLG_LIMIT = 19,  HMS_GCP_BT2020_PQ_LIMIT = 20,  HMS_GCP_P3_HLG_LIMIT = 21,  HMS_GCP_P3_PQ_LIMIT = 22,  HMS_GCP_LINEAR_P3 = 23,  HMS_GCP_LINEAR_SRGB = 24,  HMS_GCP_LINEAR_BT2020 = 25,  CUSTOM = 5  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "颜色空间枚举。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_startcolorpicker",
              children: "HMS_GCP_StartColorPicker"
            }), " (int32_t initialPosX, int32_t initialPosY, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_onresult",
              children: "HMS_GCP_OnResult"
            }), " onResultCallback, void *userData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动全局取色器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_startcolorpickerwithcolorvalue",
              children: "HMS_GCP_StartColorPickerWithColorValue"
            }), " (int32_t initialPosX, int32_t initialPosY, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-imagefeaturepicker-c/pen-imagefeaturepicker-c#hms_gcp_onresult",
              children: "HMS_GCP_OnResult"
            }), " onResultCallback, void *userData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动全局取色器。"
          })]
        })]
      })]
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