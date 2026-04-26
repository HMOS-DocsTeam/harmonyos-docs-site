"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["961197"], {
686062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avcodec_api_avcodec_c_avcodec_arkts_dep_avcodec_module_arkts_dep_capi_audioencoder_capi_audioencoder_md_181_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avcodec-api-avcodec-c-avcodec-arkts-dep-avcodec-module-arkts-dep-capi-audioencoder-capi-audioencoder-md-181.json
var site_docs_ref_avcodec_api_avcodec_c_avcodec_arkts_dep_avcodec_module_arkts_dep_capi_audioencoder_capi_audioencoder_md_181_namespaceObject = JSON.parse('{"id":"avcodec-api/avcodec-c/avcodec-arkts-dep/avcodec-module-arkts-dep/capi-audioencoder/capi-audioencoder","title":"AudioEncoder","description":"概述","source":"@site/docs-ref/avcodec-api/avcodec-c/avcodec-arkts-dep/avcodec-module-arkts-dep/capi-audioencoder/capi-audioencoder.md","sourceDirName":"avcodec-api/avcodec-c/avcodec-arkts-dep/avcodec-module-arkts-dep/capi-audioencoder","slug":"/avcodec-api/avcodec-c/avcodec-arkts-dep/avcodec-module-arkts-dep/capi-audioencoder/capi-audioencoder","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-arkts-dep/avcodec-module-arkts-dep/capi-audioencoder/capi-audioencoder","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"AudioEncoder","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-audioencoder","kit":"媒体","last_updated":"2026-04-22","slug":"capi-audioencoder"},"sidebar":"ref","previous":{"title":"AudioDecoder","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-arkts-dep/avcodec-module-arkts-dep/capi-audiodecoder/capi-audiodecoder"},"next":{"title":"avcodec_audio_channel_layout.h","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-arkts-dep/avcodec-headerfile-arkts-dep/capi-avcodec-audio-channel-layout-h/capi-avcodec-audio-channel-layout-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avcodec-api/avcodec-c/avcodec-arkts-dep/avcodec-module-arkts-dep/capi-audioencoder/capi-audioencoder.md


const frontMatter = {
	title: 'AudioEncoder',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-audioencoder',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-audioencoder'
};
const contentTitle = 'AudioEncoder';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "文件汇总",
  "id": "文件汇总",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "audioencoder",
        children: "AudioEncoder"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AudioEncoder模块提供用于音频编码的函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AudioEncoder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代建议："
        })
      }), " 当前模块下的接口均已废弃，开发者可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-audiocodec/capi-audiocodec",
        children: "AudioCodec"
      }), "完成对应功能开发，单个接口的替代关系可查阅具体的接口说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件汇总",
      children: "文件汇总"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-arkts-dep/avcodec-headerfile-arkts-dep/capi-native-avcodec-audioencoder-h/capi-native-avcodec-audioencoder-h",
              children: "native_avcodec_audioencoder.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频编码Native API的声明。"
          })]
        })
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