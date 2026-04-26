"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["891528"], {
253075(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_adapt_faq_arkts_ui_widget_adapt_faq_md_368_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-adapt-faq-arkts-ui-widget-adapt-faq-md-368.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_adapt_faq_arkts_ui_widget_adapt_faq_md_368_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget-adapt-faq/arkts-ui-widget-adapt-faq","title":"ArkTS卡片适配常见问题","description":"ArkTS卡片开发是否支持V2装饰器？如何从V1到V2迁移？","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget-adapt-faq/arkts-ui-widget-adapt-faq.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget-adapt-faq","slug":"/form-kit/arkts-ui/arkts-ui-widget-adapt-faq/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-adapt-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"ArkTS卡片适配常见问题","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-adapt-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"场景动效类型互动卡片开发指导","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-development/"},"next":{"title":"JS卡片概述","permalink":"/harmonyos-docs-site/form-kit/form-js-ui/js-ui-widget-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget-adapt-faq/arkts-ui-widget-adapt-faq.md


const frontMatter = {
	title: 'ArkTS卡片适配常见问题',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-adapt-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS卡片适配常见问题';

const assets = {

};



const toc = [{
  "value": "ArkTS卡片开发是否支持V2装饰器？如何从V1到V2迁移？",
  "id": "arkts卡片开发是否支持v2装饰器如何从v1到v2迁移",
  "level": 2
}, {
  "value": "如何定位ArkTS卡片白屏问题？",
  "id": "如何定位arkts卡片白屏问题",
  "level": 2
}, {
  "value": "ArkTS卡片如何适配深浅色模式？",
  "id": "arkts卡片如何适配深浅色模式",
  "level": 2
}, {
  "value": "导入particleAbility、audio、camera、media、backgroundTaskManager模块导致应用崩溃问题。",
  "id": "导入particleabilityaudiocameramediabackgroundtaskmanager模块导致应用崩溃问题",
  "level": 2
}, {
  "value": "问题现象",
  "id": "问题现象",
  "level": 3
}, {
  "value": "原因",
  "id": "原因",
  "level": 3
}, {
  "value": "解决措施",
  "id": "解决措施",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkts卡片适配常见问题",
        children: "ArkTS卡片适配常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts卡片开发是否支持v2装饰器如何从v1到v2迁移",
      children: "ArkTS卡片开发是否支持V2装饰器？如何从V1到V2迁移？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS卡片开发支持V2装饰器语法(如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), ")，建议开发者使用V2装饰器替代V1语法进行状态管理，以获得更优的组件渲染性能和状态同步能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的语法差异对比、迁移步骤及示例代码，请参见官方文档: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration",
        children: "V1->V2迁移指导概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何定位arkts卡片白屏问题",
      children: "如何定位ArkTS卡片白屏问题？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS卡片白屏问题定位请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/forum/topic/0202182083369423556",
        children: "服务卡片显示问题定位指导"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts卡片如何适配深浅色模式",
      children: "ArkTS卡片如何适配深浅色模式？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前系统存在深浅色两种显示模式，为了给用户更好的使用体验，保障卡片与页面视觉体验一致性，ArkTS卡片支持适配深浅色模式，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation",
        children: "应用深浅色适配"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入particleabilityaudiocameramediabackgroundtaskmanager模块导致应用崩溃问题",
      children: "导入particleAbility、audio、camera、media、backgroundTaskManager模块导致应用崩溃问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "问题现象",
      children: "问题现象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入particleAbility、audio、camera、media、backgroundTaskManager后应用崩溃，FaultLog指向相关调用行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(786493)/* ["default"] */.A) + "",
        width: "722",
        height: "308"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报错对应的代码行如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(37181)/* ["default"] */.A) + "",
        width: "864",
        height: "574"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "原因",
      children: "原因"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS卡片的FormExtensionAbility不支持加载上述模块，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability",
        children: "@ohos.app.form.FormExtensionAbility"
      }), "。强行加载得到的对象是undefined，使用时就会产生JS crash。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解决措施",
      children: "解决措施"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查 FormExtensionAbility 的导入链，将涉及上述模块的文件与 ArkTS 卡片使用的文件拆分，避免被 FormExtensionAbility 加载。"
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
37181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798664-c9b6a189083f22933ce89891c967e51b.png");

},
786493(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478313-136e922dd624604bf2c79da31b5e92e5.png");

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