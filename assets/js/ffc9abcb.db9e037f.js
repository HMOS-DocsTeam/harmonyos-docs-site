"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["763486"], {
493583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_animateto_arkts_v_1_v_2_migration_animateto_md_ffc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-guide-arkts-state-management-v-1-v-2-migration-guide-arkts-v-1-v-2-migration-animateto-arkts-v-1-v-2-migration-animateto-md-ffc.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_animateto_arkts_v_1_v_2_migration_animateto_md_ffc_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-animateto/arkts-v1-v2-migration-animateto","title":"AnimateTo使用迁移","description":"在状态管理从V1迁移至V2的过程中，animateTo执行动画前如需修改状态变量，可参考本文档的适配方案。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-animateto/arkts-v1-v2-migration-animateto.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-animateto","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-animateto/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-animateto/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"AnimateTo使用迁移","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-animateto","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"内置对象的迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object/"},"next":{"title":"状态管理V1和V2混用指导（API version 19前）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage-before-api-version/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-animateto/arkts-v1-v2-migration-animateto.md


const frontMatter = {
	title: 'AnimateTo使用迁移',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-animateto',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'AnimateTo使用迁移';

const assets = {

};



const toc = [{
  "value": "执行动画前重新定义初始态场景",
  "id": "执行动画前重新定义初始态场景",
  "level": 2
}, {
  "value": "迁移方案",
  "id": "迁移方案",
  "level": 2
}, {
  "value": "API version 22之前的迁移方案",
  "id": "api-version-22之前的迁移方案",
  "level": 3
}, {
  "value": "API version 22及以后的迁移方案",
  "id": "api-version-22及以后的迁移方案",
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
        id: "animateto使用迁移",
        children: "AnimateTo使用迁移"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理从V1迁移至V2的过程中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#animateto",
        children: "animateTo"
      }), "执行动画前如需修改状态变量，可参考本文档的适配方案。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "执行动画前重新定义初始态场景",
      children: "执行动画前重新定义初始态场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "V1实现代码如下："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State w: number = 50; // 宽度\n  @State h: number = 50; // 高度\n  @State message: string = 'Hello';\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          this.w = 100;\n          this.h = 100;\n          this.message = 'Hello World';\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n          })\n        })\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期动画效果：绿色矩形从长宽100变为200，字符串从Hello World变为Hello ArkUI。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(927148)/* ["default"] */.A) + "",
        width: "275",
        height: "314"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "V1迁移V2"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n  @Local message: string = 'Hello';\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          this.w = 100;\n          this.h = 100;\n          this.message = 'Hello World';\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n          })\n        })\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于当前animateTo与V2的刷新机制不兼容，执行动画前的额外修改未生效，实际显示的动画效果如下图所示：绿色矩形从长宽50变为200，字符串从Hello变为Hello ArkUI。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(343765)/* ["default"] */.A) + "",
        width: "275",
        height: "314"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "迁移方案",
      children: "迁移方案"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-version-22之前的迁移方案",
      children: "API version 22之前的迁移方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22之前，可以使用一个duration为0的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animatetoimmediately/ts-explicit-animatetoimmediately#animatetoimmediately",
        children: "animateToImmediately"
      }), "将额外的修改先刷新，再执行原来的动画达成预期的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n  @Local message: string = 'Hello';\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          this.w = 100;\n          this.h = 100;\n          this.message = 'Hello World';\n          animateToImmediately({\n            duration: 0\n          }, () => {\n          })\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n          })\n        })\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-version-22及以后的迁移方案",
      children: "API version 22及以后的迁移方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates",
        children: "applySync接口"
      }), "实现预期的显示效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原理为使用applySync接口同步刷新闭包函数内的状态变量变化，再执行原来的动画达成预期的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n  @Local message: string = 'Hello';\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          UIUtils.applySync(() => {\n            this.w = 100;\n            this.h = 100;\n            this.message = 'Hello World';\n          })\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n          })\n        })\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
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
343765(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957616-c0eff502b65d06cb2c01ecccc3a8fbe0.gif");

},
927148(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477617-7c9d4055b8aa9c487454a67edb9f55d9.gif");

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