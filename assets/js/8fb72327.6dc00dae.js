"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["28157"], {
338585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_avoid_overusing_custom_component_check_ide_avoid_overusing_custom_component_check_md_8fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-avoid-overusing-custom-component-check-ide-avoid-overusing-custom-component-check-md-8fb.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_avoid_overusing_custom_component_check_ide_avoid_overusing_custom_component_check_md_8fb_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-avoid-overusing-custom-component-check/ide-avoid-overusing-custom-component-check","title":"@performance/avoid-overusing-custom-component-check","description":"当在应用中使用自定义组件时，可以优先使用@Builder函数代替自定义组件，@Builder函数不会在后端FrameNode节点树上创建一个新的树节点，有助于缩短页面的加载和渲染时长。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-avoid-overusing-custom-component-check/ide-avoid-overusing-custom-component-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-avoid-overusing-custom-component-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-avoid-overusing-custom-component-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-avoid-overusing-custom-component-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@performance/avoid-overusing-custom-component-check","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-avoid-overusing-custom-component-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@security/no-unsafe-huks","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-security/ide_no-unsafe-huks/"},"next":{"title":"@performance/bad-deep-clone-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-bad-deep-clone-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-avoid-overusing-custom-component-check/ide-avoid-overusing-custom-component-check.md


const frontMatter = {
	title: '@performance/avoid-overusing-custom-component-check',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-avoid-overusing-custom-component-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/avoid-overusing-custom-component-check';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "performanceavoid-overusing-custom-component-check",
        children: "@performance/avoid-overusing-custom-component-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当在应用中使用自定义组件时，可以优先使用@Builder函数代替自定义组件，@Builder函数不会在后端FrameNode节点树上创建一个新的树节点，有助于缩短页面的加载和渲染时长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/avoid-overusing-custom-component-check\": \"warn\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1. 自定义@Builder函数组件\n@Builder\nfunction UserCardBuilder(name: string, age?: number, avatarImage?: ResourceStr) {\n  Row() {\n    Row() {\n      Image(avatarImage)\n        .size({ width: 50, height: 50 })\n        .borderRadius(25)\n        .margin(8)\n      Text(name)\n        .fontSize(30)\n    }\n\n    Text(`年龄：${age?.toString()}`)\n      .fontSize(20)\n  }\n  .backgroundColor(DEFAULT_BACKGROUND_COLOR)\n  .justifyContent(FlexAlign.SpaceBetween)\n  .borderRadius(8)\n  .padding(8)\n  .height(66)\n  .width('80%')\n}\n\n@Component\nexport struct UserCardList {\n  @State users: User[] = getUsers();\n\n  aboutToAppear(): void {\n    let message = 'hello world';\n  }\n\n  build() {\n    List({ space: 8 }) {\n      ForEach(this.users, (item: User) => {\n        ListItem() {\n          // 2. 使用@Builder函数\n          UserCardBuilder(item.name, item.age, item.avatarImage)\n        }\n      }, (item: User) => item.id)\n    }\n    .alignListItem(ListItemAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { util } from '@kit.ArkTS';\n\ninterface User {\n  id: string;\n  name: string;\n  age?: number;\n  avatarImage?: ResourceStr;\n  // introduction: string;\n  // ...\n}\n\n// 构造数据\nconst DEFAULT_BACKGROUND_COLOR = Color.Pink;\nconst getUsers = () => {\n  const USERS: User[] = [{\n    id: '1',\n    name: '张三',\n  }, {\n    id: '2',\n    name: '李四',\n  }, {\n    id: '3',\n    name: '王五',\n  }];\n  return Array.from(Array(30), (item: User, i: number) => {\n    return {\n      id: util.generateRandomUUID(),\n      name: USERS[i%3].name,\n      avatarImage: $r('app.media.avatar'),\n      age: 18 + i\n    } as User;\n  });\n}\n\n// 用户卡片列表组件\n@Component\nexport struct UserCardList {\n  @State users: User[] = getUsers();\n\n  build() {\n    List({ space: 8 }) {\n      ForEach(this.users, (item: User) => {\n        ListItem() {\n          UserCard({ name: item.name, age: item.age, avatarImage: item.avatarImage })\n        }\n      }, (item: User) => item.id)\n    }\n    .alignListItem(ListItemAlign.Center)\n  }\n}\n\n// 用户卡片自定义组件\n@Component\nstruct UserCard {\n  @Prop avatarImage: ResourceStr;\n  @Prop name: string;\n  @Prop age: number;\n\n  build() {\n    Row() {\n      Row() {\n        Image(this.avatarImage)\n          .size({ width: 50, height: 50 })\n          .borderRadius(25)\n          .margin(8)\n        Text(this.name)\n          .fontSize(30)\n      }\n\n      Text(`年龄：${this.age.toString()}`)\n        .fontSize(20)\n    }\n    .backgroundColor(DEFAULT_BACKGROUND_COLOR)\n    .justifyContent(FlexAlign.SpaceBetween)\n    .borderRadius(8)\n    .padding(8)\n    .height(66)\n    .width('80%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/recommended\nplugin:@performance/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
      }), "。"]
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