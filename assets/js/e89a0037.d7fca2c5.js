"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["127969"], {
373983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_audio_api_audio_c_audio_struct_udiosuite_oh_audiosuite_spacerenderextensionparams_udiosuite_oh_audiosuite_spacerenderextensionparams_md_e89_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-audio-api-audio-c-audio-struct-udiosuite-oh-audiosuite-spacerenderextensionparams-udiosuite-oh-audiosuite-spacerenderextensionparams-md-e89.json
var site_docs_ref_audio_api_audio_c_audio_struct_udiosuite_oh_audiosuite_spacerenderextensionparams_udiosuite_oh_audiosuite_spacerenderextensionparams_md_e89_namespaceObject = JSON.parse('{"id":"audio-api/audio-c/audio-struct/udiosuite-oh-audiosuite-spacerenderextensionparams/udiosuite-oh-audiosuite-spacerenderextensionparams","title":"OH_AudioSuite_SpaceRenderExtensionParams","description":"概述","source":"@site/docs-ref/audio-api/audio-c/audio-struct/udiosuite-oh-audiosuite-spacerenderextensionparams/udiosuite-oh-audiosuite-spacerenderextensionparams.md","sourceDirName":"audio-api/audio-c/audio-struct/udiosuite-oh-audiosuite-spacerenderextensionparams","slug":"/audio-api/audio-c/audio-struct/udiosuite-oh-audiosuite-spacerenderextensionparams/udiosuite-oh-audiosuite-spacerenderextensionparams","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-struct/udiosuite-oh-audiosuite-spacerenderextensionparams/udiosuite-oh-audiosuite-spacerenderextensionparams","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"title":"OH_AudioSuite_SpaceRenderExtensionParams","sidebar_position":28,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/udiosuite-oh-audiosuite-spacerenderextensionparams","kit":"媒体","last_updated":"2026-04-22","slug":"udiosuite-oh-audiosuite-spacerenderextensionparams"},"sidebar":"ref","previous":{"title":"OH_AudioSuite_PureVoiceChangeOption","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-struct/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption/i-ohaudiosuite-oh-audiosuite-purevoicechangeoption"},"next":{"title":"OH_AudioSuite_SpaceRenderRotationParams","permalink":"/harmonyos-docs-site/ref/audio-api/audio-c/audio-struct/audiosuite-oh-audiosuite-spacerenderrotationparams/audiosuite-oh-audiosuite-spacerenderrotationparams"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/audio-api/audio-c/audio-struct/udiosuite-oh-audiosuite-spacerenderextensionparams/udiosuite-oh-audiosuite-spacerenderextensionparams.md


const frontMatter = {
	title: 'OH_AudioSuite_SpaceRenderExtensionParams',
	sidebar_position: 28,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/udiosuite-oh-audiosuite-spacerenderextensionparams',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'udiosuite-oh-audiosuite-spacerenderextensionparams'
};
const contentTitle = 'OH_AudioSuite_SpaceRenderExtensionParams';

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
        id: "oh_audiosuite_spacerenderextensionparams",
        children: "OH_AudioSuite_SpaceRenderExtensionParams"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_AudioSuite_SpaceRenderExtensionParams {...}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义空间渲染效果节点扩展模式配置参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudiosuite/capi-ohaudiosuite",
        children: "OHAudioSuite"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-headerfile/capi-native-audio-suite-base-h/capi-native-audio-suite-base-h",
        children: "native_audio_suite_base.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float extRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展半径。取值范围为[1.0, 5.0]，单位为米。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t extAngle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展角度。取值范围为(0, 360)，单位为度。"
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