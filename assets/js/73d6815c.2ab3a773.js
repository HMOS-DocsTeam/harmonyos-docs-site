"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["754571"], {
328811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_faqs_image_rotate_faq_image_rotate_faq_md_73d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-faqs-image-rotate-faq-image-rotate-faq-md-73d.json
var site_docs_image_kit_image_faqs_image_rotate_faq_image_rotate_faq_md_73d_namespaceObject = JSON.parse('{"id":"image-kit/image-faqs/image-rotate-faq/image-rotate-faq","title":"如何获取图片的旋转角度信息","description":"图片旋转角度介绍","source":"@site/docs/image-kit/image-faqs/image-rotate-faq/image-rotate-faq.md","sourceDirName":"image-kit/image-faqs/image-rotate-faq","slug":"/image-kit/image-faqs/image-rotate-faq/","permalink":"/harmonyos-docs-site/image-kit/image-faqs/image-rotate-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"如何获取图片的旋转角度信息","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-rotate-faq","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何处理HEIF图片","permalink":"/harmonyos-docs-site/image-kit/image-faqs/heif-adapter-faq/"},"next":{"title":"Image Kit异常处理","permalink":"/harmonyos-docs-site/image-kit/image-faqs/image-error-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-faqs/image-rotate-faq/image-rotate-faq.md


const frontMatter = {
	title: '如何获取图片的旋转角度信息',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-rotate-faq',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '如何获取图片的旋转角度信息';

const assets = {

};



const toc = [{
  "value": "图片旋转角度介绍",
  "id": "图片旋转角度介绍",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "读取图片旋转角度为空怎么办",
  "id": "读取图片旋转角度为空怎么办",
  "level": 3
}, {
  "value": "为什么会出现Exif数据丢失",
  "id": "为什么会出现exif数据丢失",
  "level": 3
}, {
  "value": "图片编码时，如何保存Exif数据",
  "id": "图片编码时如何保存exif数据",
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
        id: "如何获取图片的旋转角度信息",
        children: "如何获取图片的旋转角度信息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图片旋转角度介绍",
      children: "图片旋转角度介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在数码摄影中，拍摄设备（如手机、相机）会将图片的旋转角度（方向）信息保存在图片的Exif（Exchangeable image file format）数据的Orientation字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该信息不会直接改变图片的像素内容，但会告诉图像查看器如何正确地显示图像方向。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exif标准中定义了8个Orientation值和它们的字符串表示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要将图片正确显示需要执行与之对应的特定的操作，如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字符串表示"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "要将图片正确显示需要执行的操作"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Top-left\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正常方向（无需旋转）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Top-right\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平镜像翻转。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Bottom-right\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转180°。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Bottom-left\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垂直镜像翻转。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Left-top\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先水平镜像翻转，再顺时针旋转270°。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Right-top\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "顺时针旋转90°。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Right-bottom\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先水平镜像翻转，再顺时针旋转90°。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Left-bottom\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "顺时针旋转270°。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS场景下读取和编辑图片的旋转角度信息，可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-arkts-dev/image-editing-arkts/image-tool",
        children: "编辑图片Exif信息"
      }), "，对应的propertyKey需要设置为：ORIENTATION。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C/C++场景下读取和编辑图片的旋转角度信息，可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-native/image-editing-c/image-tool-c",
        children: "使用Image_NativeModule编辑图片Exif信息"
      }), "，对应的key需要设置为：OHOS_IMAGE_PROPERTY_ORIENTATION。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "读取图片旋转角度为空怎么办",
      children: "读取图片旋转角度为空怎么办"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分图片可能没有Exif数据，或者Exif数据中没有写入Orientation字段，这些图片无需旋转（与Orientation值为1的情况保持一致）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "为什么会出现exif数据丢失",
      children: "为什么会出现Exif数据丢失"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与图片来源有关，网络传输的图片可能进行了二次编码，在编码时未保存Exif数据，导致无法获取旋转角度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "图片编码时如何保存exif数据",
      children: "图片编码时，如何保存Exif数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用图片编码接口时，需要设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-i/arkts-apis-image-i#packingoption",
        children: "packingOption"
      }), "的needsPackProperties属性为true（该属性的默认值为false）。"]
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