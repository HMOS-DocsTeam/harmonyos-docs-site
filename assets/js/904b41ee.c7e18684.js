"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["897446"], {
988749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_inner_class_arkts_v_1_v_2_migration_inner_class_md_904_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-guide-arkts-state-management-v-1-v-2-migration-guide-arkts-v-1-v-2-migration-inner-class-arkts-v-1-v-2-migration-inner-class-md-904.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_inner_class_arkts_v_1_v_2_migration_inner_class_md_904_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class/arkts-v1-v2-migration-inner-class","title":"数据对象状态变量迁移","description":"本文档主要介绍数据对象内的状态变量的迁移场景，包含以下场景：","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class/arkts-v1-v2-migration-inner-class.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"数据对象状态变量迁移","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-inner-class","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组件内状态变量迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component/"},"next":{"title":"应用内状态变量迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class/arkts-v1-v2-migration-inner-class.md


const frontMatter = {
	title: '数据对象状态变量迁移',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-inner-class',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '数据对象状态变量迁移';

const assets = {

};



const toc = [{
  "value": "各装饰器迁移示例",
  "id": "各装饰器迁移示例",
  "level": 2
}, {
  "value": "@ObjectLink/@Observed/@Track -&gt; @ObservedV2/@Trace",
  "id": "objectlinkobservedtrack---observedv2trace",
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
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数据对象状态变量迁移",
        children: "数据对象状态变量迁移"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档主要介绍数据对象内的状态变量的迁移场景，包含以下场景："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "V1装饰器名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "V2装饰器名"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
              children: "@ObjectLink"
            }), "/", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
              children: "@Observed"
            }), " /", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
              children: "@Track"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@ObservedV2"
            }), "/", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@Trace"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "各装饰器迁移示例",
      children: "各装饰器迁移示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "objectlinkobservedtrack---observedv2trace",
      children: "@ObjectLink/@Observed/@Track -> @ObservedV2/@Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，@Observed与@ObjectLink装饰器用于观察类对象及其嵌套属性的变化，但V1只能观察对象的第一层属性。嵌套对象的属性需要通过自定义组件和@ObjectLink观察。此外，V1中提供了@Track装饰器实现对属性级别变化的精确控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V2中，结合使用@ObservedV2和@Trace，可以高效实现类对象及其嵌套属性的深度观察，省去对自定义组件的依赖，简化开发流程。同时，@Trace装饰器具备精确更新能力，替代V1中的@Track，实现更高效的UI刷新控制。根据不同场景，有以下迁移策略："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "嵌套对象的属性观察：V1中需要通过自定义组件和@ObjectLink观察嵌套属性，V2中则可以使用@ObservedV2和@Trace直接观察嵌套对象，简化了代码结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类属性的精确更新：V1中的@Track可以用V2中的@Trace取代，@Trace可以同时观察和精确更新属性变化，使代码更简洁高效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "嵌套对象属性观察方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，无法直接观察嵌套对象的属性变化，只能观察到第一层属性的变化。必须通过创建自定义组件并使用@ObjectLink来实现对嵌套属性的观察。V2中使用@ObservedV2和@Trace，可以直接对嵌套对象的属性进行深度观察，减少复杂度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass Address {\n  public city: string;\n\n  constructor(city: string) {\n    this.city = city;\n  }\n}\n\n@Observed\nclass User {\n  public name: string;\n  public address: Address;\n\n  constructor(name: string, address: Address) {\n    this.name = name;\n    this.address = address;\n  }\n}\n\n@Component\nstruct AddressView {\n  // 子组件中@ObjectLink装饰的address从父组件初始化，接收被@Observed装饰的Address实例\n  @ObjectLink address: Address;\n\n  build() {\n    Column() {\n      Text(`City: ${this.address.city}`)\n      Button('city +a')\n        .onClick(() => {\n          this.address.city += 'a';\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct UserProfile {\n  @State user: User = new User('Alice', new Address('New York'));\n\n  build() {\n    Column() {\n      Text(`Name: ${this.user.name}`)\n      // 无法直接观察嵌套对象的属性变化，例如this.user.address.city\n      // 只能观察到对象第一层属性变化，所以需要将嵌套的对象Address抽取到自定义组件AddressView\n      AddressView({ address: this.user.address })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：使用@ObservedV2和@Trace。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Address {\n  @Trace public city: string;\n\n  constructor(city: string) {\n    this.city = city;\n  }\n}\n\n@ObservedV2\nclass User {\n  @Trace public name: string;\n  @Trace public address: Address;\n\n  constructor(name: string, address: Address) {\n    this.name = name;\n    this.address = address;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct UserProfile {\n  @Local user: User = new User('Alice', new Address('New York'));\n\n  build() {\n    Column() {\n      Text(`Name: ${this.user.name}`)\n      // 通过@ObservedV2和@Trace可以直接观察嵌套属性\n      Text(`City: ${this.user.address.city}`)\n      Button('city +a')\n        .onClick(() => {\n          this.user.address.city += 'a';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "类属性变化观测"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中，@Observed用于观察类实例及其属性的变化，@Track用于类对象的属性级的观察。在V2中，@Trace实现了观察和更新属性级别变化的能力，搭配@ObservedV2实现高效的UI更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass User {\n  @Track public name: string;\n  @Track public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n@Entry\n@Component\nstruct UserProfile {\n  @State user: User = new User('Alice', 30);\n\n  build() {\n    Column() {\n      Text(`Name: ${this.user.name}`)\n      Text(`Age: ${this.user.age}`)\n      Button('increase age')\n        .onClick(() => {\n          this.user.age++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2迁移策略：使用@ObservedV2和@Trace。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass User {\n  @Trace public name: string;\n  @Trace public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct UserProfile {\n  @Local user: User = new User('Alice', 30);\n\n  build() {\n    Column() {\n      Text(`Name: ${this.user.name}`)\n      Text(`Age: ${this.user.age}`)\n      Button('Increase age')\n        .onClick(() => {\n          this.user.age++;\n        })\n    }\n  }\n}\n"
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