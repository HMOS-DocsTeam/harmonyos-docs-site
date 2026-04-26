"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["305141"], {
479294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_multiwindowentryinapp_ui_design_multiwindowentryinapp_md_a63_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-multiwindowentryinapp-ui-design-multiwindowentryinapp-md-a63.json
var site_docs_ui_design_kit_guide_ui_design_multiwindowentryinapp_ui_design_multiwindowentryinapp_md_a63_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-multiwindowentryinapp/ui-design-multiwindowentryinapp","title":"应用内多窗","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-multiwindowentryinapp/ui-design-multiwindowentryinapp.md","sourceDirName":"ui-design-kit-guide/ui-design-multiwindowentryinapp","slug":"/ui-design-kit-guide/ui-design-multiwindowentryinapp/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-multiwindowentryinapp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"应用内多窗","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-multiwindowentryinapp","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"背景流光","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-streamer/"},"next":{"title":"怎么获取layeredDrawableDescriptor对象信息？","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-faq/ui-design-faq1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-multiwindowentryinapp/ui-design-multiwindowentryinapp.md


const frontMatter = {
	title: '应用内多窗',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-multiwindowentryinapp',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用内多窗';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束条件",
  "id": "约束条件",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用内多窗",
        children: "应用内多窗"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)Beta3版本开始，新增支持应用内多窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过应用内多窗组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-multiwindowentryinapp-api/ui-design-multiwindowentryinapp-api",
        children: "MultiWindowEntryInAPP"
      }), "提供的单应用多窗口接口，实现一个应用多个窗口并行运行的体验。并且可以设置图标大小颜色、背板大小颜色、文字大小颜色等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者未集成HdsNavigation组件，可使用应用内多窗组件实现应用内多窗体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖全景多窗特性，只有当前设备及屏幕状态支持全景多窗，才支持设置此功能。目前支持全景多窗的设备形态有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "双折叠：展开态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三折叠：双屏态，三屏态的横屏态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "平板：横屏态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于不支持的设备形态，该组件不可交互，不响应点击事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从6.0.2(22)版本开始，无需手动导入MultiWindowEntryInAPPAttribute。具体请参考MultiWindowEntryInAPP的导入模块说明。\nimport { MultiWindowEntryInAPP, MultiWindowEntryInAPPAttribute } from '@kit.UIDesignKit';\nimport { Want } from '@kit.AbilityKit';\nimport { TextModifier }  from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用MultiWindowEntryInAPP组件，并且设置组件参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct MultiWindowEntryInAPPTest {\n  @State textModifier: TextModifier = new TextModifier();\n  private want: Want = {\n    // 修改为当前应用的bundleName、moduleName、abilityName，启动应用内的UIAbility\n    bundleName: \"com.example.myapplication\",\n    moduleName: \"entry\",\n    abilityName: \"FuncAbility\",\n  };\n\n  build() {\n    Row() {\n      MultiWindowEntryInAPP({\n        want: this.want, isShowSubtitle: true, multiWindowEntryInAPPStyle: {\n          iconOptions: {\n            iconSize: 24,\n            iconColor: $r('sys.color.font_primary'),\n            iconWeight: FontWeight.Normal,\n            backgroundColor: $r('sys.color.comp_background_tertiary')\n          },\n          subtitleOptions: {\n            modifier: this.textModifier.fontColor(Color.Black)\n          }\n        }\n      })\n        .size({ width: 48, height: 48 })\n        .position({ x: 400, y: 30 })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(775133)/* ["default"] */.A) + "",
            width: "525",
            height: "571"
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
775133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABX/mfV/vI1vLNjr+P9F8eXAgzJLMKW3AvmpJFS6tLLvXSWlK1rTxX8KePPjwxnxt74P0Rh/Z5P51k/FPoeKfSgK2fG3vf/AEQh/aJP5j4298H6IQ/s8n86yfin0oeKfSgK2fG3vg/RCH9nk/nPjb3v/ohD+zyfzrJ+KfSh4p9KArZ8be9/9EIf2eT+c+NvfB+iEP7PJ/Msn4p9KHin0oCtnxt73/0Qh/Z5P5z4297/AOiEP7PJ/Osn4p9KHin0oCtnxt73/wBEIf2eT+c+Nve/+iEP7PJ/Osn4p9KHin0oCtnxs74PP/BGH9nk/nPjZ3v/AKIQ/s8n86yfin0oeKfSgK2fG3vf/RCH9nk/nPjZ3v8A6IQ/s8n8yyfin0oeKfSgK2fG3vg/RCH9nk/nSN2/c6698wytlF1h6eQ6fHgjjrhZFkNYrpL61r6rfTdfd5pSlKV8/L6fP8pN8U+lDxSn4UAAAAAAAAAAAAAAAAAAAAAAAAB//9k=");

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