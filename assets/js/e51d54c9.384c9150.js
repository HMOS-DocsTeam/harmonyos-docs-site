"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["417186"], {
726664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_struct_capi_image_nativemodule_oh_imagepackernative_capi_image_nativemodule_oh_imagepackernative_md_e51_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-struct-capi-image-nativemodule-oh-imagepackernative-capi-image-nativemodule-oh-imagepackernative-md-e51.json
var site_docs_ref_image_api_image_c_image_struct_capi_image_nativemodule_oh_imagepackernative_capi_image_nativemodule_oh_imagepackernative_md_e51_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative","title":"OH_ImagePackerNative","description":"概述","source":"@site/docs-ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative.md","sourceDirName":"image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative","slug":"/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"OH_ImagePackerNative","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-imagepackernative","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-nativemodule-oh-imagepackernative"},"sidebar":"ref","previous":{"title":"OH_ImageNative","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagenative/capi-image-nativemodule-oh-imagenative"},"next":{"title":"OH_ImageBufferData","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagebufferdata/capi-image-nativemodule-oh-imagebufferdata"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative.md


const frontMatter = {
	title: 'OH_ImagePackerNative',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-imagepackernative',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-nativemodule-oh-imagepackernative'
};
const contentTitle = 'OH_ImagePackerNative';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "oh_imagepackernative",
        children: "OH_ImagePackerNative"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_ImagePackerNative OH_ImagePackerNative\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ImagePacker结构体类型，用于执行ImagePacker相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体内容不可直接操作，采用函数调用方式操作具体字段，结构体内容和操作方式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "操作函数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "函数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ImageSourceNative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "imageSource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片源"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_packtodatafromimagesource",
              children: "OH_ImagePackerNative_PackToDataFromImageSource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ImageSource编码为指定格式的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PixelmapNative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pixelmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "native层的pixelmap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_packtodatafrompixelmap",
              children: "OH_ImagePackerNative_PackToDataFromPixelmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Pixelmap编码为指定格式的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "imagesourceFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageSource关联的文件描述符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_packtofilefromimagesource",
              children: "OH_ImagePackerNative_PackToFileFromImageSource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一个ImageSource编码到文件中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pixelmapFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pixelmap关联的文件描述符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_packtofilefrompixelmap",
              children: "OH_ImagePackerNative_PackToFileFromPixelmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一个Pixelmap编码到文件中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建OH_ImagePackerNative对象使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_create",
        children: "OH_ImagePackerNative_Create"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放OH_ImagePackerNative对象使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_release",
        children: "OH_ImagePackerNative_Release"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule",
        children: "Image_NativeModule"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h",
        children: "image_packer_native.h"
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