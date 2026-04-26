"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["708630"], {
713170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_spatial_recon_api_spatial_recon_c_spatial_recon_struct_capi_spatialrecon_hms_spatialrecon_dataframe_capi_spatialrecon_hms_spatialrecon_dataframe_md_007_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-spatial-recon-api-spatial-recon-c-spatial-recon-struct-capi-spatialrecon-hms-spatialrecon-dataframe-capi-spatialrecon-hms-spatialrecon-dataframe-md-007.json
var site_docs_ref_spatial_recon_api_spatial_recon_c_spatial_recon_struct_capi_spatialrecon_hms_spatialrecon_dataframe_capi_spatialrecon_hms_spatialrecon_dataframe_md_007_namespaceObject = JSON.parse('{"id":"spatial-recon-api/spatial-recon-c/spatial-recon-struct/capi-spatialrecon-hms-spatialrecon-dataframe/capi-spatialrecon-hms-spatialrecon-dataframe","title":"HMS_SpatialRecon_DataFrame","description":"概述","source":"@site/docs-ref/spatial-recon-api/spatial-recon-c/spatial-recon-struct/capi-spatialrecon-hms-spatialrecon-dataframe/capi-spatialrecon-hms-spatialrecon-dataframe.md","sourceDirName":"spatial-recon-api/spatial-recon-c/spatial-recon-struct/capi-spatialrecon-hms-spatialrecon-dataframe","slug":"/spatial-recon-api/spatial-recon-c/spatial-recon-struct/capi-spatialrecon-hms-spatialrecon-dataframe/capi-spatialrecon-hms-spatialrecon-dataframe","permalink":"/harmonyos-docs-site/ref/spatial-recon-api/spatial-recon-c/spatial-recon-struct/capi-spatialrecon-hms-spatialrecon-dataframe/capi-spatialrecon-hms-spatialrecon-dataframe","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"HMS_SpatialRecon_DataFrame","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-spatialrecon-hms-spatialrecon-dataframe","kit":"图形","last_updated":"2026-04-22","slug":"capi-spatialrecon-hms-spatialrecon-dataframe"},"sidebar":"ref","previous":{"title":"HMS_SpatialRecon_ModelWriteInfo","permalink":"/harmonyos-docs-site/ref/spatial-recon-api/spatial-recon-c/spatial-recon-struct/capi-spatialrecon-hms-spatialrecon-modelwriteinfo/capi-spatialrecon-hms-spatialrecon-modelwriteinfo"},"next":{"title":"HMS_SpatialRecon_Session","permalink":"/harmonyos-docs-site/ref/spatial-recon-api/spatial-recon-c/spatial-recon-struct/capi-spatialrecon-hms-spatialrecon-session/capi-spatialrecon-hms-spatialrecon-session"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/spatial-recon-api/spatial-recon-c/spatial-recon-struct/capi-spatialrecon-hms-spatialrecon-dataframe/capi-spatialrecon-hms-spatialrecon-dataframe.md


const frontMatter = {
	title: 'HMS_SpatialRecon_DataFrame',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-spatialrecon-hms-spatialrecon-dataframe',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'capi-spatialrecon-hms-spatialrecon-dataframe'
};
const contentTitle = 'HMS_SpatialRecon_DataFrame';

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
        id: "hms_spatialrecon_dataframe",
        children: "HMS_SpatialRecon_DataFrame"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct HMS_SpatialRecon_DataFrame {...} HMS_SpatialRecon_DataFrame\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义HMS（Huawei Mobile Services）空间重建数据帧的结构体，包含用于空间重建的相机内参、姿态信息、时间戳和图像数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.1.0(23)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/spatial-recon-api/spatial-recon-c/spatial-recon-module/capi-spatialrecon/capi-spatialrecon",
        children: "SpatialRecon"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/spatial-recon-api/spatial-recon-c/spatial-recon-headerfile/capi-spatial-recon-interface-h/capi-spatial-recon-interface-h",
        children: "spatial_recon_interface.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float focalX = 0.0f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X轴方向的焦距，单位：px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float focalY = 0.0f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y轴方向的焦距，单位：px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float principalX = 0.0f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主点X坐标（光心），单位：px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float principalY = 0.0f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主点Y坐标（光心），单位：px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float distortionCoef[8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失真参数 [k1, k2, p1, p2, k3, k4, k5, k6]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t imageWidth = 0.0f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像的宽度，单位：px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t imageHeight = 0.0f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像的高度，单位：px。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float position[3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机在3D空间中的位置 [x, y, z]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float rotation[4]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机旋转，表示为四元数 [x, y, z, w]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t timestamp = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帧捕获的时间戳，单位：ns。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *imageData = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向原始图像像素数据的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMS_SpatialReconImageDataFormat format = SPATIAL_RECON_IMAGEDATA_FORMAT_RGB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像数据的格式/编码。"
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