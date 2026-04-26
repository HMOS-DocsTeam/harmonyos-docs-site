"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["568491"], {
588510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_interaction_arkts_ui_widget_interaction_overview_arkts_ui_widget_interaction_overview_md_53b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-interaction-arkts-ui-widget-interaction-overview-arkts-ui-widget-interaction-overview-md-53b.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_interaction_arkts_ui_widget_interaction_overview_arkts_ui_widget_interaction_overview_md_53b_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-interaction-overview/arkts-ui-widget-interaction-overview","title":"ArkTS卡片页面刷新概述","description":"卡片使用方（例如：桌面）和卡片提供方均可主动触发卡片页面刷新。此外，卡片管理服务会根据开发者声明的定时信息，按需通知卡片提供方进行卡片刷新。因此，卡片刷新方式包括：卡片提供方主动触发刷新、卡片使用方主动触发刷新以及卡片定时定点刷新。这些刷新方式均需由卡片提供方推送需要刷新的卡片数据。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-interaction-overview/arkts-ui-widget-interaction-overview.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-interaction-overview","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-interaction-overview/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-interaction-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkTS卡片页面刷新概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-interaction-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS卡片使用自定义字体","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-load-custom-font/"},"next":{"title":"ArkTS卡片主动刷新","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-active-refresh/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-interaction-overview/arkts-ui-widget-interaction-overview.md


const frontMatter = {
	title: 'ArkTS卡片页面刷新概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-interaction-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS卡片页面刷新概述';

const assets = {

};



const toc = [{
  "value": "卡片数据交互",
  "id": "卡片数据交互",
  "level": 2
}, {
  "value": "页面刷新分类",
  "id": "页面刷新分类",
  "level": 2
}, {
  "value": "主动刷新",
  "id": "主动刷新",
  "level": 3
}, {
  "value": "被动刷新",
  "id": "被动刷新",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "arkts卡片页面刷新概述",
        children: "ArkTS卡片页面刷新概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片使用方（例如：桌面）和卡片提供方均可主动触发卡片页面刷新。此外，卡片管理服务会根据开发者声明的定时信息，按需通知卡片提供方进行卡片刷新。因此，卡片刷新方式包括：卡片提供方主动触发刷新、卡片使用方主动触发刷新以及卡片定时定点刷新。这些刷新方式均需由卡片提供方推送需要刷新的卡片数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片数据交互",
      children: "卡片数据交互"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS卡片管理服务支持卡片提供方（例如：应用）和卡片之间的数据交互。卡片通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-postcardaction/js-apis-postcardaction#postcardaction-1",
        children: "postCardAction"
      }), "传递数据给卡片提供方，卡片提供方则通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
        children: "updateForm"
      }), "接口传递数据给卡片。卡片提供方将数据提供给卡片后，可以用于卡片页面刷新等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于卡片提供方和卡片为相互独立的进程，两者间的数据共享只能通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorageprop",
        children: "LocalStorageProp"
      }), "传递，不能使用getContext方法。因此卡片提供方推送数据后，卡片UI需要通过LocalStorageProp接收数据，且接收数据时，卡片数据会被转换成string类型。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面刷新分类",
      children: "页面刷新分类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据触发方式的差异，卡片刷新分为主动刷新和被动刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "主动刷新",
      children: "主动刷新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["主动刷新包括卡片提供方主动刷新卡片和卡片使用方主动刷新卡片。开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-active-refresh",
        children: "ArkTS卡片主动刷新"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1 卡片提供方主动刷新卡片流程图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(465000)/* ["default"] */.A) + "",
        width: "865",
        height: "278"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["卡片提供方应用运行过程中，如果识别到有要更新卡片数据的诉求，可以主动通过formProvider提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
        children: "updateForm"
      }), "接口更新卡片。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2 卡片使用方主动刷新卡片流程图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(719019)/* ["default"] */.A) + "",
        width: "943",
        height: "284"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当卡片使用方检测到系统语言或主题模式（如深浅色）发生变化时，可以主动通过formHost提供的requestForm（仅支持系统应用使用）接口请求更新卡片，卡片管理服务会进而通知卡片提供方完成卡片更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "被动刷新",
      children: "被动刷新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["被动刷新包括定时刷新、定点刷新。开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh",
        children: "ArkTS卡片被动刷新"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["卡片定时刷新：表示在一定时间间隔内调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonupdateform",
        children: "onUpdateForm"
      }), "的生命周期回调函数自动刷新卡片内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片定点刷新：表示在每天的某个特定时间点自动刷新卡片内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3 卡片管理服务通知卡片提供方定时定点刷新卡片流程图"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(307890)/* ["default"] */.A) + "",
        width: "949",
        height: "285"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据卡片提供方开发者提前配置声明的定时刷新信息，卡片管理服务会根据定时信息、卡片可见状态、刷新次数等因素综合判断是否需要通知卡片提供方更新卡片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片提供方仅允许刷新自己的卡片，其他提供方的卡片无法刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片使用方仅允许刷新添加到自己的卡片，添加到其他使用方的卡片无法刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 20开始，如果卡片刷新的数据通过共享内存更新，刷新数据总大小不超过10MB，刷新图片数量不超过20张。API version 19及之前的版本，图片文件数量上限为5张，每张限制内存2MB，超出限制的图片会显示异常。"
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
307890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478295-2fe811d91b560c29542a3345a44afc09.png");

},
465000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438339-16102cd307626c84d07f0affaa9e3c1a.png");

},
719019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958294-98bfacd646f1409d92ac92b851adff40.png");

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