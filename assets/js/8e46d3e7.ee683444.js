"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["843932"], {
162046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_audio_api_audio_c_audio_struct_capi_ohaudio_oh_audiostreambuilderstruct_capi_ohaudio_oh_audiostreambuilderstruct_md_8e4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-audio-api-audio-c-audio-struct-capi-ohaudio-oh-audiostreambuilderstruct-capi-ohaudio-oh-audiostreambuilderstruct-md-8e4.json
var site_docs_ref_audio_api_audio_c_audio_struct_capi_ohaudio_oh_audiostreambuilderstruct_capi_ohaudio_oh_audiostreambuilderstruct_md_8e4_namespaceObject = JSON.parse('{"id":"audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct","title":"OH_AudioStreamBuilderStruct","description":"概述","source":"@site/docs-ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct.md","sourceDirName":"audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct","slug":"/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"OH_AudioStreamBuilderStruct","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct","kit":"媒体","last_updated":"2026-04-22","slug":"capi-ohaudio-oh-audiostreambuilderstruct"},"sidebar":"ref","previous":{"title":"OH_AudioCapturer_Callbacks_Struct","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct/capi-ohaudio-oh-audiocapturer-callbacks-struct"},"next":{"title":"OH_AudioRendererStruct","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiorendererstruct/capi-ohaudio-oh-audiorendererstruct"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/audio-api/audio-c/audio-struct/capi-ohaudio-oh-audiostreambuilderstruct/capi-ohaudio-oh-audiostreambuilderstruct.md


const frontMatter = {
	title: 'OH_AudioStreamBuilderStruct',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-ohaudio-oh-audiostreambuilderstruct'
};
const contentTitle = 'OH_AudioStreamBuilderStruct';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "oh_audiostreambuilderstruct",
        children: "OH_AudioStreamBuilderStruct"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_AudioStreamBuilderStruct OH_AudioStreamBuilder\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明音频流的构造器。构造器实例通常被用来设置音频流属性和创建音频流。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio",
        children: "OHAudio"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audiostream-base-h/capi-native-audiostream-base-h",
        children: "native_audiostream_base.h"
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