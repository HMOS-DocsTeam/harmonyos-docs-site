"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["950004"], {
830919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_require_arkts_require_md_a39_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-require-arkts-require-md-a39.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_require_arkts_require_md_a39_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require/arkts-require","title":"@Require装饰器：校验构造传参","description":"@Require是校验@Prop、@State、@Provide、@BuilderParam、@Param和普通变量（无状态装饰器修饰的变量）是否需要构造传参的一个装饰器。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require/arkts-require.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"@Require装饰器：校验构造传参","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-require","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@AnimatableExtend装饰器：定义可动画属性","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-animatable-extend/"},"next":{"title":"状态管理概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require/arkts-require.md


const frontMatter = {
	title: '@Require装饰器：校验构造传参',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-require',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Require装饰器：校验构造传参';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "require装饰器校验构造传参",
        children: "@Require装饰器：校验构造传参"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Require是校验@Prop、@State、@Provide、@BuilderParam、@Param和普通变量（无状态装饰器修饰的变量）是否需要构造传参的一个装饰器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13138)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始对@Prop/@BuilderParam进行校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始对@State/@Provide/@Param/普通变量（无状态装饰器修饰的变量）进行校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当@Require装饰器和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
        children: "@Provide"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
        children: "@Param"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam",
        children: "@BuilderParam"
      }), "、普通变量（无状态装饰器修饰的变量）结合使用时，在构造该自定义组件时，@Prop、@State、@Provide、@Param、@BuilderParam和普通变量（无状态装饰器修饰的变量）必须在构造时传参。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Require装饰器仅用于装饰struct内的@Prop、@State、@Provide、@BuilderParam、@Param和普通变量（无状态装饰器修饰的变量）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["预览器的限制场景请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-previewer-previewchecker-V5",
        children: "PreviewChecker检测规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Child组件内使用@Require装饰器和@Prop、@State、@Provide、@BuilderParam、@Param和普通变量（无状态装饰器修饰的变量）结合使用时，父组件SceneRequire在构造Child时必须传参，否则编译不通过。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SceneRequire {\n  @State message: string = 'Hello World';\n\n  @Builder\n  buildTest() {\n    Row() {\n      Text('Hello, world')\n        .fontSize(30)\n    }\n  }\n\n  build() {\n    Row() {\n      // 构造Child时需传入所有@Require对应参数，否则编译失败。\n      Child({\n        regularValue: this.message,\n        stateValue: this.message,\n        provideValue: this.message,\n        initMessage: this.message,\n        message: this.message,\n        buildTest: this.buildTest,\n        initBuildTest: this.buildTest\n      })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @Require regularValue: string;\n  @Require @State stateValue: string;\n  @Require @Provide provideValue: string;\n  @Require @BuilderParam buildTest: () => void;\n  @Require @BuilderParam initBuildTest: () => void;\n  @Require @Prop initMessage: string;\n  @Require @Prop message: string;\n\n  build() {\n    Column() {\n      Text(this.initMessage)\n        .fontSize(30)\n      Text(this.message)\n        .fontSize(30)\n      this.initBuildTest();\n      this.buildTest();\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "修饰的自定义组件ChildPage通过父组件ParentPage进行初始化，因为有@Require装饰@Param，所以父组件必须进行构造赋值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace public name: string = '';\n  @Trace public age: number = 0;\n}\n\n@ComponentV2\nstruct ChildPage {\n  @Require @Param childInfo: Info;\n  @Require @Param stateValue: string;\n\n  build() {\n    Column() {\n      Text(`ChildPage childInfo name :${this.childInfo.name}`)\n        .fontSize(15)\n        .height(30)\n      Text(`ChildPage childInfo age :${this.childInfo.age}`)\n        .fontSize(15)\n        .height(30)\n      Text(`ChildPage stateValue age :${this.stateValue}`)\n        .fontSize(15)\n        .height(30)\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ParentPage {\n  info1: Info = { name: 'Tom', age: 25 };\n  label1: string = 'Hello World';\n  @Local info2: Info = { name: 'Tom', age: 25 };\n  @Local label2: string = 'Hello World';\n\n  build() {\n    Column() {\n      Text(`info1: ${this.info1.name}  ${this.info1.age}`) // Text1。\n        .fontSize(25)\n        .height(30)\n      // 父组件ParentPage构造子组件ChildPage时进行了构造赋值。\n      // 为ChildPage中被@Require @Param装饰的childInfo和stateValue属性传入了值。\n      ChildPage({ childInfo: this.info1, stateValue: this.label1 }) // 创建自定义组件。\n      Text(`info2: ${this.info2.name}  ${this.info2.age}`) // Text2。\n        .fontSize(25)\n        .height(30)\n      // 同上，在父组件创建子组件的过程中进行构造赋值。\n      ChildPage({ childInfo: this.info2, stateValue: this.label2 }) // 创建自定义组件。\n      Button('change info1&info2')\n        .onClick(() => {\n          this.info1 = { name: 'Cat', age: 18 }; // Text1不会刷新，原因是info1没有装饰器装饰，监听不到值的改变。\n          this.info2 = { name: 'Cat', age: 18 }; // Text2会刷新，原因是info2有装饰器装饰，能够监听到值的改变。\n          this.label1 = 'Luck'; // 不会刷新，原因是label1没有装饰器装饰，监听不到值的改变。\n          this.label2 = 'Luck'; // 会刷新，原因是label2有装饰器装饰，可以监听到值的改变。\n        })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(446585)/* ["default"] */.A) + "",
        width: "318",
        height: "258"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，使用@Require装饰@State、@Prop、@Provide装饰的状态变量，可以在无本地初始值的情况下直接在组件内使用，不会编译报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct PageOne {\n  message: string = 'Hello World';\n\n  build() {\n    Column() {\n      ChildIndex({ message: this.message })\n    }\n  }\n}\n\n@Component\nstruct ChildIndex {\n  @Require @State message: string;\n\n  build() {\n    Column() {\n      Text(this.message) // 从API version 18开始，可以编译通过。\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当状态管理V1组件内将@Require装饰器与@Prop、@State、@Provide、@BuilderParam、普通变量（无状态装饰器修饰的变量）结合使用时，若父组件Index在构造Child时未传递相应参数，则会导致编译失败。当状态管理V2组件内将@Require装饰器与@Param结合使用时，若父组件Index在构造ChildV2时未传递相应参数，则同样会导致编译失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World!';\n\n  @Builder\n  buildTest() {\n    Row() {\n      Text('Hello, world!!')\n        .fontSize(30)\n    }\n  }\n\n  build() {\n    Row() {\n      // 构造Child、ChildV2组件时没有传参，会导致编译不通过。\n      Child()\n      ChildV2()\n    }\n  }\n}\n\n@Component\nstruct Child {\n  // 使用@Require必须构造时传参。\n  @Require regularValue: string;\n  @Require @State stateValue: string;\n  @Require @Provide provideValue: string;\n  @Require @BuilderParam initBuildTest: () => void;\n  @Require @Prop initMessage: string;\n\n  build() {\n    Column() {\n      Text(this.initMessage)\n        .fontSize(30)\n      this.initBuildTest();\n    }\n  }\n}\n\n@ComponentV2\nstruct ChildV2 {\n  // 使用@Require必须构造时传参。\n  @Require @Param message: string;\n\n  build() {\n    Column() {\n      Text(this.message)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当父组件Example在构造ChildV1与ChildV2时传递了相应的参数，则编译通过。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Example {\n  @State message: string = 'Hello World!';\n\n  @Builder\n  buildTest() {\n    Row() {\n      Text('Hello, world!!')\n        .fontSize(30)\n    }\n  }\n\n  build() {\n    Row() {\n      // 构造ChildV1、ChildV2组件时传递相应参数，编译通过。\n      ChildV1({\n        regularValue: 'Hello',\n        stateValue: 'Hello',\n        provideValue: 'Hello',\n        initBuildTest: this.buildTest,\n        initMessage: 'Hello'\n      })\n      ChildV2({ message: this.message })\n    }\n  }\n}\n\n@Component\nstruct ChildV1 {\n  // 使用@Require必须构造时传参。\n  @Require regularValue: string;\n  @Require @State stateValue: string;\n  @Require @Provide provideValue: string;\n  @Require @BuilderParam initBuildTest: () => void;\n  @Require @Prop initMessage: string;\n\n  build() {\n    Column() {\n      Text(this.initMessage)\n        .fontSize(30)\n      this.initBuildTest();\n    }\n  }\n}\n\n@ComponentV2\nstruct ChildV2 {\n  // 使用@Require必须构造时传参。\n  @Require @Param message: string;\n\n  build() {\n    Column() {\n      Text(this.message)\n    }\n  }\n}\n"
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
446585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797938-e30fd32073158cea1b55b14aaf522e36.gif");

},
13138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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