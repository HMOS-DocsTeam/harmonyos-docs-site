"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["643680"], {
672180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ar_engine_api_arengine_capi_arengine_header_struct_arengine_struct_arengine_struct_arsemanticdensecubedata_arengine_struct_arsemanticdensecubedata_md_3df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ar-engine-api-arengine-capi-arengine-header-struct-arengine-struct-arengine-struct-arsemanticdensecubedata-arengine-struct-arsemanticdensecubedata-md-3df.json
var site_docs_ref_ar_engine_api_arengine_capi_arengine_header_struct_arengine_struct_arengine_struct_arsemanticdensecubedata_arengine_struct_arsemanticdensecubedata_md_3df_namespaceObject = JSON.parse('{"id":"ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensecubedata/arengine-struct-arsemanticdensecubedata","title":"AREngine_ARSemanticDenseCubeData","description":"概述","source":"@site/docs-ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensecubedata/arengine-struct-arsemanticdensecubedata.md","sourceDirName":"ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensecubedata","slug":"/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensecubedata/arengine-struct-arsemanticdensecubedata","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensecubedata/arengine-struct-arsemanticdensecubedata","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"AREngine_ARSemanticDenseCubeData","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-arsemanticdensecubedata","kit":"图形","last_updated":"2026-04-22","slug":"arengine-struct-arsemanticdensecubedata"},"sidebar":"ref","previous":{"title":"AREngine_ARSemanticDensePointData","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensepointdata/arengine-struct-arsemanticdensepointdata"},"next":{"title":"AR Engine错误码","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-error-code/arengine-error-code"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensecubedata/arengine-struct-arsemanticdensecubedata.md


const frontMatter = {
	title: 'AREngine_ARSemanticDenseCubeData',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-arsemanticdensecubedata',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'arengine-struct-arsemanticdensecubedata'
};
const contentTitle = 'AREngine_ARSemanticDenseCubeData';

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
  "value": "id",
  "id": "id",
  "level": 3
}, {
  "value": "vertexSize",
  "id": "vertexsize",
  "level": 3
}, {
  "value": "vertexData",
  "id": "vertexdata",
  "level": 3
}, {
  "value": "confidence",
  "id": "confidence",
  "level": 3
}, {
  "value": "label",
  "id": "label",
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
        id: "arengine_arsemanticdensecubedata",
        children: "AREngine_ARSemanticDenseCubeData"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "高精几何重建对象的立方体数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedata",
        children: "HMS_AREngine_ARSemanticDense_AcquireCubeData"
      }), "接口输入。"]
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
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine",
        children: "AR Engine"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file",
        children: "ar_engine_core.h"
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
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#id",
              children: "id"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前立方体的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vertexsize",
              children: "vertexSize"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前立方体的顶点大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vertexdata",
              children: "vertexData"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前立方体的顶点数据。  对应立方体的8个顶点。索引从立方体后表面开始，按逆时针方向排列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#confidence",
              children: "confidence"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前立方体的置信度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["AREngine_ARSemanticPlaneLabel ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#label",
              children: "label"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前立方体的语义标签。  参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticplanelabel",
              children: "AREngine_ARSemanticPlaneLabel"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "id",
      children: "id"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t AREngine_ARSemanticDenseCubeData::id\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前立方体的ID。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vertexsize",
      children: "vertexSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t AREngine_ARSemanticDenseCubeData::vertexSize\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前立方体的顶点大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vertexdata",
      children: "vertexData"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float* AREngine_ARSemanticDenseCubeData::vertexData\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前立方体的顶点数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "confidence",
      children: "confidence"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float AREngine_ARSemanticDenseCubeData::confidence\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前立方体的置信度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "label",
      children: "label"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AREngine_ARSemanticPlaneLabel AREngine_ARSemanticDenseCubeData::label\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前立方体的语义标签。"
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