"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["39409"], {
423481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_previewer_01_ide_previewer_previewchecker_ide_previewer_previewchecker_md_e4d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-previewer-01-ide-previewer-previewchecker-ide-previewer-previewchecker-md-e4d.json
var site_docs_ide_previewer_01_ide_previewer_previewchecker_ide_previewer_previewchecker_md_e4d_namespaceObject = JSON.parse('{"id":"ide-previewer-01/ide-previewer-previewchecker/ide-previewer-previewchecker","title":"PreviewChecker检测规则","description":"DevEco Studio启动预览时将执行PreviewChecker，检测通过后才可进行预览，以确保在使用预览器前识别到已知的不支持预览的场景，若存在不支持预览的场景，将给出优化提示，以便于开发者根据提示的建议进行代码优化。","source":"@site/docs/ide-previewer-01/ide-previewer-previewchecker/ide-previewer-previewchecker.md","sourceDirName":"ide-previewer-01/ide-previewer-previewchecker","slug":"/ide-previewer-01/ide-previewer-previewchecker/","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-previewchecker/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"PreviewChecker检测规则","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-previewchecker","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-overview/"},"next":{"title":"查看ArkTS/JS预览效果","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-arkts-js/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-previewer-01/ide-previewer-previewchecker/ide-previewer-previewchecker.md


const frontMatter = {
	title: 'PreviewChecker检测规则',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-previewchecker',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'PreviewChecker检测规则';

const assets = {

};



const toc = [{
  "value": "@previewer/mandatory-default-value-for-local-initialization",
  "id": "previewermandatory-default-value-for-local-initialization",
  "level": 2
}, {
  "value": "@previewer/no-unallowed-decorator-on-root-component",
  "id": "previewerno-unallowed-decorator-on-root-component",
  "level": 2
}, {
  "value": "@previewer/paired-use-of-consume-and-provide",
  "id": "previewerpaired-use-of-consume-and-provide",
  "level": 2
}, {
  "value": "@previewer/no-page-method-on-preview-component",
  "id": "previewerno-page-method-on-preview-component",
  "level": 2
}, {
  "value": "@previewer/no-page-import-unmocked-hsp",
  "id": "previewerno-page-import-unmocked-hsp",
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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "previewchecker检测规则",
        children: "PreviewChecker检测规则"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio启动预览时将执行PreviewChecker，检测通过后才可进行预览，以确保在使用预览器前识别到已知的不支持预览的场景，若存在不支持预览的场景，将给出优化提示，以便于开发者根据提示的建议进行代码优化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "previewermandatory-default-value-for-local-initialization",
      children: "@previewer/mandatory-default-value-for-local-initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于所有将被预览到的组件，如果组件的属性支持本地初始化，则都应当设置一个合法的不依赖运行时的默认值，以确保异常调用到该组件时，即使入参不完整，也能正常运行渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  message?: string;\n  @BuilderParam myBuilder: () => void;\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n        this.myBuilder()\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder function MyBuilderFunction(): void {}\n\n@Entry\n@Component\nstruct Index {\n  message?: string = 'message';\n  @Provide messageA: string = 'messageA';\n  @StorageLink('varA') varA: number = 2;\n  @StorageProp('languageCode') lang: string = 'en';\n  @LocalStorageLink('PropA') storageLink1: number = 1;\n  @LocalStorageProp('PropB') storageLink2: number = 2;\n  @BuilderParam myBuilder: () => void = MyBuilderFunction;\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n        this.myBuilder()\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "previewerno-unallowed-decorator-on-root-component",
      children: "@previewer/no-unallowed-decorator-on-root-component"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不允许直接预览包含@Consume、@Link、@ObjectLink、@Prop等装饰器的子组件；建议使用一个定义了完整的、合法的、不依赖运行时的默认值的父组件，并预览此父组件来查看子组件的预览效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Preview\n@Component\nstruct LinkSample {\n  @Link message: string;\n\n  build() {\n    Row() {\n      Text(this.message)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct LinkSampleContainer {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      LinkSample({message: this.message})\n    }\n  }\n}\n \n@Component\nstruct LinkSample {\n  @Link message: string;\n\n  build() {\n    Row() {\n      Text(this.message)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "previewerpaired-use-of-consume-and-provide",
      children: "@previewer/paired-use-of-consume-and-provide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果缺少@Provide定义，@Consume组件在预览时将无法获取有效值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 19及以前，@Consume装饰的变量不支持设置默认值，建议被@Consume修饰的组件的祖先组件上应当有对应的@Provide属性，并且该属性应当有合法的不依赖运行时的默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，@Consume装饰的变量支持设置默认值，建议优先对@Consume装饰的变量设置默认值，或者按照API version 19及以前版本的方式进行设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Parent {\n  build() {\n    Column() {\n      Child()\n    }\n  }\n}\n \n@Component\nstruct Child {\n  @Consume message: string;\n \n  build() {\n    Text(this.message)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例"
        })
      }), "一"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// API 20及以上推荐此方式\n@Entry\n@Component\nstruct Parent {\n  @Consume message: string = 'hello world';\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(50)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例二"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 所有版本均可使用此方式\n@Entry\n@Component\nstruct Parent {\n  @Provide message: string = 'hello world';\n \n  build() {\n    Column() {\n      Child()\n    }\n  }\n}\n \n@Component\nstruct Child {\n  @Consume message: string;\n \n  build() {\n    Text(this.message)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "previewerno-page-method-on-preview-component",
      children: "@previewer/no-page-method-on-preview-component"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Preview通常修饰在组件上，而非@Entry的页面入口。onPageShow、onPageHide、onBackPress仅在@Entry组件上生效。因此禁止在非路由组件上实例化onPageShow等页面级方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Preview\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  onPageShow(): void {}\n  onPageHide(): void {}\n  onBackPress(): void {}\n\n  build() {\n    Column() {\n      Text(this.message)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  onPageShow(): void {}\n  onPageHide(): void {}\n  onBackPress(): void {}\n\n  build() {\n    Column() {\n      Text(this.message)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "previewerno-page-import-unmocked-hsp",
      children: "@previewer/no-page-import-unmocked-hsp"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于能力缺失，预览器无法确保HSP是可以正常运行的。界面代码调用HSP可能会在预览运行时无法按预期执行，未正确初始化的接口调用可能会导致运行异常，从而影响界面渲染结果。建议待预览的组件及其依赖的组件避免引用HSP，或为该HSP设置Mock实现，更多关于Mock实现的介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-previewer-01/ide-previewer-mock",
        children: "预览数据模拟"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "反例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { add } from 'library'; // 该模块未配置自定义mock。\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Text(this.message)\n        .onClick(() => add(1, 2))\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "正例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { add } from 'library'; // 该模块已配置自定义mock，配置方法见下文。\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Text(this.message)\n        .onClick(() => add(1, 2))\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义mock配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/mock/mock-config.json5\n{\n  \"library\": {\n    \"source\": \"src/mock/myhsp.mock.ets\"\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/mock/myhsp.mock.ets\nexport function add(a: number, b: number): number {\n  return a + b;\n}\n"
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