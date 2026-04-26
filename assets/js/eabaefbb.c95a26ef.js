"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["397343"], {
534945(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_modifier_arkts_user_defined_extension_attributeupdater_arkts_user_defined_extension_attributeupdater_md_eab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-modifier-arkts-user-defined-extension-attributeupdater-arkts-user-defined-extension-attributeupdater-md-eab.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_modifier_arkts_user_defined_extension_attributeupdater_arkts_user_defined_extension_attributeupdater_md_eab_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributeupdater/arkts-user-defined-extension-attributeupdater","title":"属性更新器 (AttributeUpdater)","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributeupdater/arkts-user-defined-extension-attributeupdater.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributeupdater","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributeupdater/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributeupdater/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"属性更新器 (AttributeUpdater)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-extension-attributeupdater","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"属性修改器 (AttributeModifier)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributemodifier/"},"next":{"title":"UI国际化","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-internationalization/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributeupdater/arkts-user-defined-extension-attributeupdater.md


const frontMatter = {
	title: '属性更新器 (AttributeUpdater)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-extension-attributeupdater',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '属性更新器 (AttributeUpdater)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "接口定义",
  "id": "接口定义",
  "level": 2
}, {
  "value": "使用说明",
  "id": "使用说明",
  "level": 2
}, {
  "value": "通过modifier直接修改属性",
  "id": "通过modifier直接修改属性",
  "level": 2
}, {
  "value": "通过modifier更新组件的构造参数",
  "id": "通过modifier更新组件的构造参数",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "属性更新器-attributeupdater",
        children: "属性更新器 (AttributeUpdater)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在大量属性频繁更新的场景下，使用状态变量可能导致前端状态管理的计算量过大，并且需要对单个组件进行全量属性更新。尽管可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier",
        children: "AttributeModifier"
      }), "机制实现按需更新属性，但前端仍会采用一定的diff和reset策略，这可能带来性能问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AttributeUpdater作为一个特殊的AttributeModifier，不仅继承了AttributeModifier的功能，还提供了直接获取属性对象的能力。通过属性对象，开发者能够直接更新对应属性，无需经过状态变量。开发者可以利用AttributeUpdater实现自定义的更新策略，从而进一步提升属性更新的性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于AttributeUpdater提供了较高的灵活性，无法限制“单一数据源”的规则，因此在与状态变量同时更新同一属性时，存在相互覆盖的情况。这要求开发者必须确保属性设置的合理性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口定义",
      children: "接口定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export declare class AttributeUpdater<T, C = Initializer<T>> implements AttributeModifier<T> {\n\n  applyNormalAttribute?(instance: T): void;\n\n  initializeModifier(instance: T): void;\n\n  get attribute(): T | undefined;\n\n  public updateConstructorParams: C;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AttributeUpdater实现了AttributeModifier接口，并额外提供了initializeModifier，可以对组件的属性进行初始化。通过attribute属性方法可以获取属性对象，直接更新对应组件的属性。另外也可以直接通过updateConstructorParams更新组件的构造参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者可以继承AttributeUpdater<T>类，并通过组件的通用方法attributeModifier设置，首次绑定时会触发initializeModifier方法，进行属性的初始化，后续其它的生命周期和AttributeModifier保持一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件初始化完成之后，开发者可以通过AttributeUpdater实例的attribute属性方法，获取到属性对象，若获取不到则为undefined。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过attribute属性对象直接修改属性，会将最新设置的属性记录在当前对象中，并立即触发组件属性的更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果将AttributeUpdater实例标记为状态变量进行修改，或者通过其它状态变量更新对应组件的属性，会触发applyNormalAttribute的流程，如果开发者没有复写该逻辑，默认会将属性对象记录的所有属性，进行一次批量更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果开发者复写applyNormalAttribute的逻辑，并且不调用super的该方法，将会失去获取attribute属性对象的能力，不会调用initializeModifier方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个AttributeUpdater对象只能同时关联一个组件，否则只会有一个组件的属性设置生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过modifier直接修改属性",
      children: "通过modifier直接修改属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件初始化完成之后，开发者可以通过AttributeUpdater实例的attribute属性方法，获取到属性对象。通过属性对象直接修改属性，会立即触发组件属性的更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AttributeUpdater } from '@kit.ArkUI';\n\nclass MyButtonModifier extends AttributeUpdater<ButtonAttribute> {\n  // 首次绑定时触发initializeModifier方法，进行属性初始化\n  initializeModifier(instance: ButtonAttribute): void {\n    instance.backgroundColor('#2787D9')\n      .width('50%')\n      .height(30)\n  }\n}\n\n@Entry\n@Component\nstruct updaterDemo {\n  modifier: MyButtonModifier = new MyButtonModifier()\n\n  build() {\n    Row() {\n      Column() {\n        Button('Button')\n          .attributeModifier(this.modifier)\n          .onClick(() => {\n            // 通过attribute，直接修改组件属性，并立即触发组件属性更新\n            this.modifier.attribute?.backgroundColor('#17A98D').width('30%')\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(933792)/* ["default"] */.A) + "",
        width: "340",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过modifier更新组件的构造参数",
      children: "通过modifier更新组件的构造参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过AttributeUpdater实例的updateConstructorParams方法，直接更新组件的构造参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AttributeUpdater } from '@kit.ArkUI';\n\nclass MyTextModifier extends AttributeUpdater<TextAttribute, TextInterface> {\n  initializeModifier(instance: TextAttribute): void {\n  }\n}\n\n@Entry\n@Component\nstruct updaterDemo {\n  modifier: MyTextModifier = new MyTextModifier();\n\n  build() {\n    Row() {\n      Column() {\n        Text('Text')\n          .attributeModifier(this.modifier)\n          .fontColor(Color.White)\n          .fontSize(14)\n          .border({ width: 1 })\n          .textAlign(TextAlign.Center)\n          .lineHeight(20)\n          .width(200)\n          .height(50)\n          .backgroundColor('#2787D9')\n          .onClick(() => {\n            // 调用updateConstructorParams方法，直接更新组件的构造参数\n            this.modifier.updateConstructorParams('Update');\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(184741)/* ["default"] */.A) + "",
        width: "340",
        height: "235"
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
933792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438075-77075a08b9be78b89483e5d3d6c108a3.gif");

},
184741(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958030-18f285eb4f5f4e19d0b3605fcd3506a3.gif");

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