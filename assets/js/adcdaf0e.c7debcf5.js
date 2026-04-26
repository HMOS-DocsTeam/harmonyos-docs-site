"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["172698"], {
205350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_local_rec_intents_local_rec_scene_experience_intents_local_rec_scene_experience_md_adc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-local-rec-intents-local-rec-scene-experience-intents-local-rec-scene-experience-md-adc.json
var site_docs_intents_kit_guide_intents_local_rec_intents_local_rec_scene_experience_intents_local_rec_scene_experience_md_adc_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-local-rec/intents-local-rec-scene-experience/intents-local-rec-scene-experience","title":"场景体验","description":"典型场景","source":"@site/docs/intents-kit-guide/intents-local-rec/intents-local-rec-scene-experience/intents-local-rec-scene-experience.md","sourceDirName":"intents-kit-guide/intents-local-rec/intents-local-rec-scene-experience","slug":"/intents-kit-guide/intents-local-rec/intents-local-rec-scene-experience/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-local-rec/intents-local-rec-scene-experience/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"场景体验","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-local-rec-scene-experience","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-local-rec/intents-local-rec-introduction/"},"next":{"title":"接入方案","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-local-rec/intents-local-rec-access-programme/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-local-rec/intents-local-rec-scene-experience/intents-local-rec-scene-experience.md


const frontMatter = {
	title: '场景体验',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-local-rec-scene-experience',
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
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "场景体验",
        children: "场景体验"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "典型场景",
      children: "典型场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为意图框架位置感知推荐能力主要支持室内位置推荐、室外近场位置推荐、跨域位置推荐等高确定性场景，结合华为智慧决策能力，在小艺建议入口推荐更贴心、更及时、更满足用户诉求的场景卡片。场景示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(499224)/* ["default"] */.A) + "",
        width: "4425",
        height: "1572"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "推荐类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "能力概述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "适用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "室内位置推荐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于：  - WLAN指纹识别  - 基站Cell信息定位  - Beacon定位  用户进入店内、场馆内触发围栏感知，可实现室内精准定位感知能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于室内多楼层、小范围高精度定位场景，如美食门店、博物馆、体育馆、医院科室、银行、政务大厅、地铁站等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "室外近场位置推荐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于：  - POI多边形围栏  - POI点+半径  - Beacon定位  用户到达指定位置附近或进入区域范围后触发围栏感知。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于室外区域范围定位分发场景，如商圈、景区、医院、机场、火车站、加油站、停车场等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跨域位置推荐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主要基于城市、国家级别围栏触发感知，用户跨城、出境触发围栏感知，可实现跨域定位感知能力。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于跨城、出境定位场景，如到新城市推旅游攻略场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片展示效果",
      children: "卡片展示效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于POI（Point of interest）和Beacon（蓝牙信标设备）触发的位置推荐场景，由近场服务提供模板卡片的配置入口，开发者开通近场服务权限后自行配置。卡片的尺寸样式可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-xiaoyi-create-formalstate-service-0000002349016144",
        children: "近场服务-POI接入小艺建议场景-创建全网态服务-创建全网态服务"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于WLAN指纹和Cell触发的位置推荐场景，意图框架提供标准的卡片模板。卡片由华为侧统一配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片模板参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(274811)/* ["default"] */.A) + "",
        width: "2886",
        height: "592"
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
274811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439363-55e34511d3c3484c48902fe6090d554b.png");

},
499224(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799668-b88ae6defa01e47919cf4b1e30446623.png");

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