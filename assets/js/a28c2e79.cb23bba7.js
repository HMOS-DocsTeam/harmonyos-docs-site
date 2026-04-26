"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["668983"], {
435097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_guide_arengine_arraybuffer_info_arengine_arraybuffer_info_md_a28_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-guide-arengine-arraybuffer-info-arengine-arraybuffer-info-md-a28.json
var site_docs_ar_engine_kit_guide_arengine_guide_arengine_arraybuffer_info_arengine_arraybuffer_info_md_a28_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-guide/arengine-arraybuffer-info/arengine-arraybuffer-info","title":"数据类型转换说明","description":"在开发AR应用时，部分数据类型需要转换才能使用，以下进行汇总及示例。","source":"@site/docs/ar-engine-kit-guide/arengine-guide/arengine-arraybuffer-info/arengine-arraybuffer-info.md","sourceDirName":"ar-engine-kit-guide/arengine-guide/arengine-arraybuffer-info","slug":"/ar-engine-kit-guide/arengine-guide/arengine-arraybuffer-info/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-arraybuffer-info/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"数据类型转换说明","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-arraybuffer-info","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"高精几何重建（ArkTS）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-guide/arengine-volume-measurement/"},"next":{"title":"管理AR会话（C/C++）","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-c-guide/arengine-c-arsession/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-guide/arengine-arraybuffer-info/arengine-arraybuffer-info.md


const frontMatter = {
	title: '数据类型转换说明',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-arraybuffer-info',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '数据类型转换说明';

const assets = {

};



const toc = [{
  "value": "ArrayBuffer",
  "id": "arraybuffer",
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
        id: "数据类型转换说明",
        children: "数据类型转换说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发AR应用时，部分数据类型需要转换才能使用，以下进行汇总及示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arraybuffer",
      children: "ArrayBuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在一些不支持接收ArrayBuffer数据类型的方法中，需要将其反序列化为int32或者float32类型，涉及转换的接口列表如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#imagecomponent",
              children: "ImageComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数buffer为ArrayBuffer类型，可转换为int32。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arplanegetpolygonxz",
              children: "ARPlane.getPolygonXZ"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回值为ArrayBuffer类型，可转换为float32。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemeshgetvertices",
              children: "ARSceneMesh.getVertices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回值为ArrayBuffer类型，可转换为float32。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemeshgetvertexnormals",
              children: "ARSceneMesh.getVertexNormals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回值为ArrayBuffer类型，可转换为float32。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arscenemeshgettriangleindices",
              children: "ARSceneMesh.getTriangleIndices"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回值为ArrayBuffer类型，可转换为int32。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensepointdata",
              children: "ARSemanticDensePointData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数id为ArrayBuffer类型，可转换为int32。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensepointdata",
              children: "ARSemanticDensePointData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数position为ArrayBuffer类型，可转换为float32。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ar-engine-api/arengine-arkts-api/arengine-api-arengine/arengine-api-arengine#arsemanticdensepointdata",
              children: "ARSemanticDensePointData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数color为ArrayBuffer类型，可转换为int32。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转换的示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArrayBuffer转float32\nfunction arrayBufferFloat32ToNumber(buffer: ArrayBuffer): number[] {\n  let view: Float32Array = new Float32Array(buffer);\n  let numberArray: number[] = Array.from(view);\n  return numberArray;\n}\n\n// ArrayBuffer转int32\nfunction arrayBufferInt32ToNumber(buffer: ArrayBuffer): number[] {\n  let view: Int32Array = new Int32Array(buffer);\n  let numberArray: number[] = Array.from(view);\n  return numberArray;\n}\n"
      })
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