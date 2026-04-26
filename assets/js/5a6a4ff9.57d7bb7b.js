"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["922588"], {
205220(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ar_engine_api_arengine_capi_arengine_header_struct_arengine_struct_arengine_struct_araugmentedimagesource_arengine_struct_araugmentedimagesource_md_5a6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ar-engine-api-arengine-capi-arengine-header-struct-arengine-struct-arengine-struct-araugmentedimagesource-arengine-struct-araugmentedimagesource-md-5a6.json
var site_docs_ref_ar_engine_api_arengine_capi_arengine_header_struct_arengine_struct_arengine_struct_araugmentedimagesource_arengine_struct_araugmentedimagesource_md_5a6_namespaceObject = JSON.parse('{"id":"ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-araugmentedimagesource/arengine-struct-araugmentedimagesource","title":"AREngine_ARAugmentedImageSource","description":"概述","source":"@site/docs-ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-araugmentedimagesource/arengine-struct-araugmentedimagesource.md","sourceDirName":"ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-araugmentedimagesource","slug":"/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-araugmentedimagesource/arengine-struct-araugmentedimagesource","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-araugmentedimagesource/arengine-struct-araugmentedimagesource","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"AREngine_ARAugmentedImageSource","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-araugmentedimagesource","kit":"图形","last_updated":"2026-04-22","slug":"arengine-struct-araugmentedimagesource"},"sidebar":"ref","previous":{"title":"ar_engine_core.h","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file"},"next":{"title":"AREngine_ClipPlaneDistance","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-clipplanedistance/arengine-struct-clipplanedistance"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-araugmentedimagesource/arengine-struct-araugmentedimagesource.md


const frontMatter = {
	title: 'AREngine_ARAugmentedImageSource',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-araugmentedimagesource',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'arengine-struct-araugmentedimagesource'
};
const contentTitle = 'AREngine_ARAugmentedImageSource';

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
  "value": "imageName",
  "id": "imagename",
  "level": 3
}, {
  "value": "imageData",
  "id": "imagedata",
  "level": 3
}, {
  "value": "pixelWidth",
  "id": "pixelwidth",
  "level": 3
}, {
  "value": "pixelHeight",
  "id": "pixelheight",
  "level": 3
}, {
  "value": "stride",
  "id": "stride",
  "level": 3
}, {
  "value": "realWidthInMeters",
  "id": "realwidthinmeters",
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
        id: "arengine_araugmentedimagesource",
        children: "AREngine_ARAugmentedImageSource"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
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
            children: ["const char *", (0,jsx_runtime.jsx)(_components.a, {
              href: "#imagename",
              children: "imageName"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像名，不允许为空，不能超出255字节，超出255字节的字符将会被丢弃。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const uint8_t *", (0,jsx_runtime.jsx)(_components.a, {
              href: "#imagedata",
              children: "imageData"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "灰度图像元素数组地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pixelwidth",
              children: "pixelWidth"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像像素宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pixelheight",
              children: "pixelHeight"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像像素高度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#stride",
              children: "stride"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像步幅。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#realwidthinmeters",
              children: "realWidthInMeters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像中对象的实际物理宽度。无限制，默认值为A4纸张尺寸。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imagename",
      children: "imageName"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* AREngine_ARAugmentedImageSource::imageName\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像名，不允许为空，不能超出255字节，超出255字节的字符将会被丢弃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imagedata",
      children: "imageData"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const uint8_t* AREngine_ARAugmentedImageSource::imageData\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "灰度图像元素数组地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pixelwidth",
      children: "pixelWidth"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t AREngine_ARAugmentedImageSource::pixelWidth\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像像素宽度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pixelheight",
      children: "pixelHeight"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t AREngine_ARAugmentedImageSource::pixelHeight\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像像素高度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stride",
      children: "stride"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t AREngine_ARAugmentedImageSource::stride\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像步幅。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "realwidthinmeters",
      children: "realWidthInMeters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float AREngine_ARAugmentedImageSource::realWidthInMeters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像中对象的实际物理宽度。无限制，默认值为A4纸张尺寸。"
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