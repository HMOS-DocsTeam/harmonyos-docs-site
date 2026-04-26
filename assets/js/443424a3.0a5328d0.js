"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["407589"], {
250032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_native_surface_native_buffer_guidelines_native_buffer_guidelines_md_443_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-native-surface-native-buffer-guidelines-native-buffer-guidelines-md-443.json
var site_docs_arkgraphics_2_d_native_surface_native_buffer_guidelines_native_buffer_guidelines_md_443_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/native-surface/native-buffer-guidelines/native-buffer-guidelines","title":"NativeBuffer开发指导 (C/C++)","description":"场景介绍","source":"@site/docs/arkgraphics-2d/native-surface/native-buffer-guidelines/native-buffer-guidelines.md","sourceDirName":"arkgraphics-2d/native-surface/native-buffer-guidelines","slug":"/arkgraphics-2d/native-surface/native-buffer-guidelines/","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-buffer-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NativeBuffer开发指导 (C/C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-buffer-guidelines","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"NativeVSync开发指导 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-vsync-guidelines/"},"next":{"title":"NativeImage开发指导 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-surface/native-image-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/native-surface/native-buffer-guidelines/native-buffer-guidelines.md


const frontMatter = {
	title: 'NativeBuffer开发指导 (C/C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-buffer-guidelines',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'NativeBuffer开发指导 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
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
        id: "nativebuffer开发指导-cc",
        children: "NativeBuffer开发指导 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NativeBuffer模块提供", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "共享内存"
        })
      }), "功能，支持内存的申请、使用、查询和释放等操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NativeBuffer的常见开发场景：通过Native API申请OH_NativeBuffer实例，获取内存属性，将ION内存映射到进程空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_NativeBuffer_Alloc (const OH_NativeBuffer_Config *config)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_NativeBuffer_Config创建OH_NativeBuffer实例，每次调用都会产生一个新的OH_NativeBuffer实例。本接口需要与OH_NativeBuffer_Unreference接口配合使用，否则会存在内存泄露。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Reference (OH_NativeBuffer *buffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeBuffer对象的引用计数增加1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Unreference (OH_NativeBuffer *buffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeBuffer对象的引用计数减1，当引用计数为0的时候，该NativeBuffer对象会被析构掉。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_GetConfig (OH_NativeBuffer *buffer, OH_NativeBuffer_Config *config)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获取OH_NativeBuffer的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Map (OH_NativeBuffer *buffer, void **virAddr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeBuffer对应的ION内存映射到进程空间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_Unmap (OH_NativeBuffer *buffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将OH_NativeBuffer对应的ION内存从进程空间移除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeBuffer_GetSeqNum (OH_NativeBuffer *buffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_NativeBuffer的序列号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativebuffer/capi-oh-nativebuffer",
        children: "native_buffer"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下步骤描述了如何使用NativeBuffer提供的Native API接口创建OH_NativeBuffer实例，获取内存属性信息，并将ION内存映射到进程空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libnative_buffer.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <native_buffer/native_buffer.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "创建OH_NativeBuffer实例"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_NativeBuffer_Config config {\n    .width = 0x100,\n    .height = 0x100,\n    .format = NATIVEBUFFER_PIXEL_FMT_RGBA_8888,\n    .usage = NATIVEBUFFER_USAGE_CPU_READ | NATIVEBUFFER_USAGE_CPU_WRITE | NATIVEBUFFER_USAGE_MEM_DMA,\n};\n\nOH_NativeBuffer *nativeBuffer = OH_NativeBuffer_Alloc(&config);\nif (nativeBuffer == nullptr) {\n    LOGE(\"OH_NativeBuffer_Alloc fail, nativeBuffer is null\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "将OH_NativeBuffer对应的ION内存映射到进程空间"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用如需访问buffer内存空间，可通过OH_NativeBuffer_Map接口将ION内存映射到进程空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void* virAddr = nullptr;\nint32_t ret = OH_NativeBuffer_Map(nativeBuffer, &virAddr);\nif (ret != 0) {\n    LOGE(\"OH_NativeBuffer_Map Failed\");\n}\n// ...\nret = OH_NativeBuffer_Unmap(nativeBuffer);\nif (ret != 0) {\n    LOGE(\"OH_NativeBuffer_Unmap Failed\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取内存的属性信息"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_NativeBuffer_Config config2 = {};\nOH_NativeBuffer_GetConfig(nativeBuffer, &config2);\nuint32_t hwBufferID = OH_NativeBuffer_GetSeqNum(nativeBuffer);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "销毁OH_NativeBuffer"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_NativeBuffer_Unreference(nativeBuffer);\nnativeBuffer = nullptr;\n"
          })
        }), "\n"]
      }), "\n"]
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