"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["765230"], {
68922(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_list_item_card_ui_design_set_listitem_style_ui_design_set_listitem_style_md_e96_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-list-item-card-ui-design-set-listitem-style-ui-design-set-listitem-style-md-e96.json
var site_docs_ui_design_kit_guide_ui_design_list_item_card_ui_design_set_listitem_style_ui_design_set_listitem_style_md_e96_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-list-item-card/ui-design-set-listitem-style/ui-design-set-listitem-style","title":"设置列表卡片样式","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-listitem-style/ui-design-set-listitem-style.md","sourceDirName":"ui-design-kit-guide/ui-design-list-item-card/ui-design-set-listitem-style","slug":"/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-listitem-style/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-listitem-style/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"设置列表卡片样式","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-set-listitem-style","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置附带横滑的列表样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-hds-slide-horizon-listitem/"},"next":{"title":"点光源效果","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-point-light/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-listitem-style/ui-design-set-listitem-style.md


const frontMatter = {
	title: '设置列表卡片样式',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-set-listitem-style',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置列表卡片样式';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置列表卡片样式",
        children: "设置列表卡片样式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta1版本开始，新增支持设置列表卡片样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdslistitemcard/ui-design-hdslistitemcard",
        children: "HdsListItemCard"
      }), "组件实现多设备上的系统列表样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(892960)/* ["default"] */.A) + "",
        width: "525",
        height: "157"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { HdsListItemCard, PrefixImage, SuffixSwitch} from '@kit.UIDesignKit';\nimport { promptAction } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建HdsListItemCard组件，设置左边为Image，中间为Text，右边为Switch的场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Test {\n  private scroller: ListScroller = new ListScroller();\n\n  build() {\n    Column() {\n      List({ space: 10, scroller: this.scroller }) {\n        ListItem() {\n          HdsListItemCard({\n            // A区图片\n            prefixItem: new PrefixImage({\n              image: $r('app.media.background'),\n              onClick: () => {\n                promptAction.openToast({ message: 'left image' });\n              }\n            }),\n            // B区文本\n            textItem: {\n              primaryText: {\n                text: 'Primary Text'\n              },\n              secondaryText: {\n                text: 'Secondary Text'\n              },\n              description: {\n                text: 'Description Text'\n              }\n            },\n            // C区Switch\n            suffixItem: new SuffixSwitch({\n              isCheck: false,\n              onChange: (num: boolean) => {\n                if (num) {\n                  promptAction.openToast({ message: 'switch is true' });\n                } else {\n                  promptAction.openToast({ message: 'switch is false' });\n                }\n              }\n            }),\n            onClick: () => {\n              promptAction.openToast({ message: 'hdslistitem' });\n            }\n          })\n        }\n      }\n      .width('100%')\n      .height('100%')\n      .margin(10)\n    }.backgroundColor(0x1a0a59f7).height('100%')\n  }\n}\n"
          })
        }), "\n"]
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
892960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798700-59c86c7a8427cccf0bbd2d02db5a345c.jpg");

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