"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["410002"], {
510949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_utils_buffer_buffer_md_e43_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-utils-buffer-buffer-md-e43.json
var site_docs_arkts_arkts_utils_buffer_buffer_md_e43_namespaceObject = JSON.parse('{"id":"arkts/arkts-utils/buffer/buffer","title":"Buffer与FastBuffer","description":"场景介绍","source":"@site/docs/arkts/arkts-utils/buffer/buffer.md","sourceDirName":"arkts/arkts-utils/buffer","slug":"/arkts/arkts-utils/buffer/","permalink":"/harmonyos-docs-site/arkts/arkts-utils/buffer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Buffer与FastBuffer","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/buffer","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"XML转换","permalink":"/harmonyos-docs-site/arkts/arkts-utils/xml-generation-parsing-conversion/xml-conversion/"},"next":{"title":"JSON扩展库","permalink":"/harmonyos-docs-site/arkts/arkts-utils/arkts-json/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-utils/buffer/buffer.md


const frontMatter = {
	title: 'Buffer与FastBuffer',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/buffer',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Buffer与FastBuffer';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "Buffer",
  "id": "buffer",
  "level": 2
}, {
  "value": "FastBuffer",
  "id": "fastbuffer",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "buffer与fastbuffer",
        children: "Buffer与FastBuffer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Buffer和FastBuffer模块将内存区域抽象为可读写、修改的逻辑对象，提供高效的二进制数据处理接口。每个Buffer实例是连续的字节序列，支持创建自定义大小的内存块，用于存储和操作序列化后的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Buffer和FastBuffer模块的主要应用场景包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "大数据传输"
          })
        }), "：传输大量数据，如二进制文件、数据库记录或网络报文时，使用Buffer作为数据的存储和处理容器，可减少拷贝和内存消耗，提升效率。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "图像和音频处理"
          })
        }), "：在图像编码、解码和音频数据流处理中，Buffer帮助开发者操作像素或采样数据，确保数据的完整性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "二进制数据操作"
          })
        }), "：Buffer提供接口解析和操作二进制数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buffer",
      children: "Buffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Buffer模块的核心功能包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "创建和分配内存"
          })
        }), "：允许指定大小初始化Buffer，创建后内存容量固定。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "读写和复制数据"
          })
        }), "：支持按索引访问Buffer内的字节，按字节块读取和写入，复制Buffer的某部分到其他Buffer或数组。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "转换操作"
          })
        }), "：提供Buffer与基本类型（如Uint8Array、string）之间的转换方法，满足不同的数据处理需求。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "内存操作"
          })
        }), "：支持截取部分Buffer、切片和合并多个Buffer，便于数据流的处理和管理。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Buffer模块各接口使用详见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-buffer/js-apis-buffer",
        children: "@ohos.buffer"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fastbuffer",
      children: "FastBuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastBuffer是一种高性能二进制数据容器，专为固定长度字节序列的存储与处理设计，相比Buffer，它在效率和读写速度上具有显著优势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当构造FastBuffer的入参为number | FastBuffer | Uint8Array | ArrayBuffer | Array<number> | string时，推荐使用FastBuffer处理大量二进制数据，如图片处理和文件接收上传等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastBuffer模块的核心功能包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "创建和分配内存"
          })
        }), "：允许基于uint32指定大小初始化FastBuffer，创建后内存容量固定。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "读写和复制数据"
          })
        }), "：支持按索引访问Buffer内的字节，按字节块读取和写入，复制FastBuffer的某部分到其他FastBuffer或数组。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "转换操作"
          })
        }), "：提供FastBuffer与基本类型（如Uint8Array、string）之间的转换方法，满足不同的数据处理需求。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "内存操作"
          })
        }), "：支持截取部分FastBuffer、切片和合并多个FastBuffer，便于数据流的处理和管理。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FastBuffer模块各接口使用详见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-fastbuffer/js-apis-fastbuffer",
        children: "@ohos.fastbuffer"
      }), "。"]
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