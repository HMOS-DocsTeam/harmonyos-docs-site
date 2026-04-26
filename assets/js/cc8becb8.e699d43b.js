"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["42662"], {
748543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_development_faq_arkts_attribute_modifier_faq_arkts_attribute_modifier_faq_md_cc8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-development-faq-arkts-attribute-modifier-faq-arkts-attribute-modifier-faq-md-cc8.json
var site_docs_arkui_ui_debug_optimize_ui_development_faq_arkts_attribute_modifier_faq_arkts_attribute_modifier_faq_md_cc8_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-development-faq/arkts-attribute-modifier-faq/arkts-attribute-modifier-faq","title":"动态属性设置常见问题","description":"本文档介绍动态属性设置的常见问题并提供参考。","source":"@site/docs/arkui/ui-debug-optimize/ui-development-faq/arkts-attribute-modifier-faq/arkts-attribute-modifier-faq.md","sourceDirName":"arkui/ui-debug-optimize/ui-development-faq/arkts-attribute-modifier-faq","slug":"/arkui/ui-debug-optimize/ui-development-faq/arkts-attribute-modifier-faq/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-attribute-modifier-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"动态属性设置常见问题","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-attribute-modifier-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用文本常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq/"},"next":{"title":"命令式节点常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-arkui-framenode-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-development-faq/arkts-attribute-modifier-faq/arkts-attribute-modifier-faq.md


const frontMatter = {
	title: '动态属性设置常见问题',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-attribute-modifier-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '动态属性设置常见问题';

const assets = {

};



const toc = [{
  "value": "使用AttributeModifier设置组件动态属性，出现jscrash",
  "id": "使用attributemodifier设置组件动态属性出现jscrash",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "动态属性设置常见问题",
        children: "动态属性设置常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档介绍动态属性设置的常见问题并提供参考。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用attributemodifier设置组件动态属性出现jscrash",
      children: "使用AttributeModifier设置组件动态属性，出现jscrash"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用AttributeModifier对组件进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier",
        children: "动态属性设置"
      }), "，设置某些属性后出现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines",
        children: "JS Crash"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(982937)/* ["default"] */.A) + "",
        width: "431",
        height: "102"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据提示跳转至报错日志，查看具体的报错原因，进行相应的修改，具体的跳转方法请参考下方示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过Button绑定AttributeModifier，展示了AttributeModifier在设置不支持的属性时会抛出异常的场景，运行示例代码后会出现jscrash报错，参考下方的动图，跳转至具体的报错场景。在本示例中，删除reuseId相关代码即可正常运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n// 设置Button组件属性的自定义AttributeModifier\nclass MyButtonModifier implements AttributeModifier<ButtonAttribute> {\n\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    instance.reuseId('String') // 删除本行可以让程序正常运行\n    instance.backgroundColor(Color.Red)\n  }\n}\n\n@Entry\n@Component\nstruct attributeDemo {\n  @State modifier: MyButtonModifier = new MyButtonModifier();\n\n  build() {\n    Row() {\n      Column() {\n        Button('Button')\n          .attributeModifier(this.modifier)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(290674)/* ["default"] */.A) + "",
        width: "1380",
        height: "593"
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
982937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
290674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438217-6d7ee6dd411bf68a24f6e66c119a8c63.gif");

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