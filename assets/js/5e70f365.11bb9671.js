"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["247903"], {
326268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_struct_capi_avrecorder_oh_avrecorder_config_capi_avrecorder_oh_avrecorder_config_md_5e7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-struct-capi-avrecorder-oh-avrecorder-config-capi-avrecorder-oh-avrecorder-config-md-5e7.json
var site_docs_ref_media_api_media_c_media_struct_capi_avrecorder_oh_avrecorder_config_capi_avrecorder_oh_avrecorder_config_md_5e7_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-config/capi-avrecorder-oh-avrecorder-config","title":"OH_AVRecorder_Config","description":"概述","source":"@site/docs-ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-config/capi-avrecorder-oh-avrecorder-config.md","sourceDirName":"media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-config","slug":"/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-config/capi-avrecorder-oh-avrecorder-config","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-config/capi-avrecorder-oh-avrecorder-config","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"OH_AVRecorder_Config","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-config","kit":"媒体","last_updated":"2026-04-22","slug":"capi-avrecorder-oh-avrecorder-config"},"sidebar":"ref","previous":{"title":"OH_AVRecorder_Metadata","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-metadata/capi-avrecorder-oh-avrecorder-metadata"},"next":{"title":"OH_AVRecorder_Range","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-range/capi-avrecorder-oh-avrecorder-range"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-config/capi-avrecorder-oh-avrecorder-config.md


const frontMatter = {
	title: 'OH_AVRecorder_Config',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-config',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-avrecorder-oh-avrecorder-config'
};
const contentTitle = 'OH_AVRecorder_Config';

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
        id: "oh_avrecorder_config",
        children: "OH_AVRecorder_Config"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_AVRecorder_Config {...} OH_AVRecorder_Config\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供媒体AVRecorder的配置定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-avrecorder/capi-avrecorder",
        children: "AVRecorder"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h",
        children: "avrecorder_base.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h#oh_avrecorder_audiosourcetype",
              children: "OH_AVRecorder_AudioSourceType"
            }), " audioSourceType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制音频源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h#oh_avrecorder_videosourcetype",
              children: "OH_AVRecorder_VideoSourceType"
            }), " videoSourceType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制视频源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-profile/capi-avrecorder-oh-avrecorder-profile",
              children: "OH_AVRecorder_Profile"
            }), " profile"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含音频和视频编码配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义文件URL，格式为fd://xx。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h#oh_avrecorder_filegenerationmode",
              children: "OH_AVRecorder_FileGenerationMode"
            }), " fileGenerationMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定录制输出文件的生成模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-metadata/capi-avrecorder-oh-avrecorder-metadata",
              children: "OH_AVRecorder_Metadata"
            }), " metadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包含录制媒体的附加元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t maxDuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定录制的最大时长，单位为秒。"
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