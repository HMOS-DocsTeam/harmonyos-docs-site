"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["764161"], {
457140(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_search_rec_intents_search_rec_scene_experience_intents_search_rec_scene_experience_md_3f2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-search-rec-intents-search-rec-scene-experience-intents-search-rec-scene-experience-md-3f2.json
var site_docs_intents_kit_guide_intents_search_rec_intents_search_rec_scene_experience_intents_search_rec_scene_experience_md_3f2_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-search-rec/intents-search-rec-scene-experience/intents-search-rec-scene-experience","title":"场景体验","description":"典型场景","source":"@site/docs/intents-kit-guide/intents-search-rec/intents-search-rec-scene-experience/intents-search-rec-scene-experience.md","sourceDirName":"intents-kit-guide/intents-search-rec/intents-search-rec-scene-experience","slug":"/intents-kit-guide/intents-search-rec/intents-search-rec-scene-experience/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-search-rec/intents-search-rec-scene-experience/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"场景体验","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-search-rec-scene-experience","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-search-rec/intents-search-rec-introduction/"},"next":{"title":"功能搜索方案","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-search-rec/intents-search-rec-access-programme/intents-skill-all-rec-function-search/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-search-rec/intents-search-rec-scene-experience/intents-search-rec-scene-experience.md


const frontMatter = {
	title: '场景体验',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-search-rec-scene-experience',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '场景体验';

const assets = {

};



const toc = [{
  "value": "典型场景",
  "id": "典型场景",
  "level": 2
}, {
  "value": "卡片展示效果",
  "id": "卡片展示效果",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "场景体验",
        children: "场景体验"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "典型场景",
      children: "典型场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "功能搜索："
        })
      }), " 开发者将应用内的功能接入Intents Kit后，在小艺搜索入口，搜索对应功能名或者应用名，可以将应用内功能直接搜出，比如视频应用接入“会员中心”功能后，用户可通过搜索应用名或功能名搜出具体功能，点击后直接拉起应用中的功能页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(793637)/* ["default"] */.A) + "",
        width: "3900",
        height: "2475"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "内容搜索："
        })
      }), " 以音乐为例，当用户在使用应用时，应用可以将音乐数据通过端侧API共享到意图框架，这里的音乐数据可以是用户收听过的歌曲，或是应用预测用户感兴趣的歌曲，那么后续用户在小艺搜索入口中搜索歌名时，系统将会在应用共享数据中检索对应内容，并使用模板卡片展示内容结果。当用户点击对应卡片热区时，可以跳转进具体音乐播放页或者后台执行播放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(753045)/* ["default"] */.A) + "",
        width: "1962",
        height: "1041"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片展示效果",
      children: "卡片展示效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图框架提供各垂域在小艺搜索展示使用的标准模板卡片，开发者无需开发展示卡片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模板卡片包含应用/元服务和内容必要信息，比如歌曲名称、歌曲封面图、歌曲描述，这类参数需要开发者共享到系统。各垂域适用的风格卡片不同，以实际特性场景要求为准。以下为歌曲本地搜索的模板卡样式的示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(259009)/* ["default"] */.A) + "",
        width: "1660",
        height: "542"
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
753045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439383-57328112c523ee0b556d5ef42ff353ee.png");

},
259009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959338-7cf8b32bf6b9169036baab8dab8f656e.png");

},
793637(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799688-31b37ccbe7df374bf4aad141999c42cd.png");

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