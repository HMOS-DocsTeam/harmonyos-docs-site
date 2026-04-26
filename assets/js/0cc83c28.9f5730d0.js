"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["965758"], {
81408(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_wrapbuilder_arkts_wrapbuilder_md_0cc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-extend-components-arkts-wrapbuilder-arkts-wrapbuilder-md-0cc.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_wrapbuilder_arkts_wrapbuilder_md_0cc_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder/arkts-wrapbuilder","title":"wrapBuilder：封装全局@Builder","description":"当在一个struct内使用多个全局@Builder函数实现UI的不同效果时，代码维护将变得非常困难，且页面不够整洁。此时，可以使用wrapBuilder封装全局@Builder。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder/arkts-wrapbuilder.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"wrapBuilder：封装全局@Builder","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-wrapbuilder","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@BuilderParam装饰器：引用@Builder函数","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam/"},"next":{"title":"mutableBuilder：实现全局@Builder动态更新","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-mutablebuilder/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder/arkts-wrapbuilder.md


const frontMatter = {
	title: 'wrapBuilder：封装全局@Builder',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-wrapbuilder',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'wrapBuilder：封装全局@Builder';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "@Builder方法赋值给变量",
  "id": "builder方法赋值给变量",
  "level": 2
}, {
  "value": "@Builder方法赋值给变量在UI语法中使用",
  "id": "builder方法赋值给变量在ui语法中使用",
  "level": 2
}, {
  "value": "@Builder方法赋值给类或者接口的属性",
  "id": "builder方法赋值给类或者接口的属性",
  "level": 2
}, {
  "value": "引用传递",
  "id": "引用传递",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "重复定义wrapBuilder失效",
  "id": "重复定义wrapbuilder失效",
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
        id: "wrapbuilder封装全局builder",
        children: "wrapBuilder：封装全局@Builder"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当在一个struct内使用多个全局@Builder函数实现UI的不同效果时，代码维护将变得非常困难，且页面不够整洁。此时，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-universal-wrapbuilder/ts-universal-wrapbuilder",
        children: "wrapBuilder"
      }), "封装全局@Builder。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(666452)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，wrapBuilder支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，推荐开发者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-mutablebuilder",
        children: "mutableBuilder"
      }), "，支持二次赋值后刷新UI。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当@Builder方法赋值给变量或者数组后，在UI方法中无法使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction builderElement() {}\n\nlet builderArr: Function[] = [builderElement];\n@Builder\nfunction testBuilder() {\n  ForEach(builderArr, (item: Function) => {\n    item();\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述代码中，builderArr是一个由@Builder方法组成的数组。在ForEach循环中取每个@Builder方法时，会出现@Builder方法在UI方法中无法使用的问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了解决这一问题，引入wrapBuilder作为全局@Builder封装函数。wrapBuilder返回WrappedBuilder对象，用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder#%E5%85%A8%E5%B1%80%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0",
        children: "全局@Builder"
      }), "的赋值和传递。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "wrapBuilder是一个模板函数，返回一个WrappedBuilder对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare function wrapBuilder<Args extends Object[]>(builder: (...args: Args) => void): WrappedBuilder<Args>;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时 WrappedBuilder对象也是一个模板类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare class WrappedBuilder<Args extends Object[]> {\n  builder: (...args: Args) => void;\n\n  constructor(builder: (...args: Args) => void);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513673)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模板参数Args extends Object[]需要匹配@Builder函数参数的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let builderVar: WrappedBuilder<[string, number]> = wrapBuilder(MyBuilder);\nlet builderArr: WrappedBuilder<[string, number]>[] = [wrapBuilder(MyBuilder)]; // 可以放入数组\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["wrapBuilder方法只能传入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder#%E5%85%A8%E5%B1%80%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%E5%87%BD%E6%95%B0",
          children: "全局@Builder"
        }), "方法。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WrappedBuilder对象的builder属性方法仅限在struct内部使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "builder方法赋值给变量",
      children: "@Builder方法赋值给变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Builder装饰器装饰的方法myBuilder作为wrapBuilder的参数，然后将wrapBuilder的返回值赋值给变量globalBuilder，以解决@Builder方法赋值给变量后无法使用的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction myBuilder(value: string, size: number) {\n  Text(value)\n    .fontSize(size)\n}\n\nlet globalBuilder: WrappedBuilder<[string, number]> = wrapBuilder(myBuilder);\n\n@Entry\n@Component\nstruct TestIndex {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        globalBuilder.builder(this.message, 50)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "builder方法赋值给变量在ui语法中使用",
      children: "@Builder方法赋值给变量在UI语法中使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件IndexItem使用ForEach进行不同@Builder函数的渲染，可以使用builderArr声明的wrapBuilder数组来实现不同的@Builder函数的效果。整体代码会更加整洁。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction myBuilder0(value: string, size: number) {\n  Text(value)\n    .fontSize(size)\n    .fontColor(Color.Blue)\n}\n\n@Builder\nfunction yourBuilder(value: string, size: number) {\n  Text(value)\n    .fontSize(size)\n    .fontColor(Color.Pink)\n}\n\nconst builderArr: WrappedBuilder<[string, number]>[] = [wrapBuilder(myBuilder0), wrapBuilder(yourBuilder)];\n\n@Entry\n@Component\nstruct IndexItem {\n  @Builder\n  IndexItem() {\n    ForEach(builderArr, (item: WrappedBuilder<[string, number]>) => {\n      item.builder('Hello World', 30);\n    })\n  }\n\n  build() {\n    Row() {\n      Column() {\n        this.IndexItem();\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "builder方法赋值给类或者接口的属性",
      children: "@Builder方法赋值给类或者接口的属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Builder装饰器装饰的方法MyBuilder作为wrapBuilder的参数，然后将wrapBuilder的返回值赋值给接口ChildOptions中的属性，可以以数据的形式传递给其他子组件调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction MyBuilder(value: string, size: number) {\n  Text(value)\n    .fontSize(size)\n}\n\ninterface ChildOptions {\n  wrappedBuilder: WrappedBuilder<[string, number]>; // 类型为WrappedBuilder的属性可以传递@Builder函数\n}\n\n@Entry\n@Component\nstruct Index {\n  childOptions: ChildOptions = {\n    wrappedBuilder: wrapBuilder(MyBuilder)\n  };\n\n  build() {\n    Row() {\n      Column() {\n        Child({ options: this.childOptions })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n@Component\nstruct Child {\n  @Prop options: ChildOptions;\n  build() {\n    this.options.wrappedBuilder.builder('Hello', 20);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用传递",
      children: "引用传递"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按引用传递参数时，状态变量的改变会引起@Builder方法内的UI刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Tmp {\n  public paramA2: string = 'hello';\n}\n\n@Builder\nfunction overBuilder(param: Tmp) {\n  Column() {\n    Text(`wrapBuildervalue:${param.paramA2}`)\n  }\n}\n\nconst wBuilder: WrappedBuilder<[Tmp]> = wrapBuilder(overBuilder);\n\n@Entry\n@Component\nstruct Parent {\n  @State label: Tmp = new Tmp();\n\n  build() {\n    Column() {\n      wBuilder.builder({ paramA2: this.label.paramA2 })\n      Button('Click me').onClick(() => {\n        this.label.paramA2 = 'ArkUI';\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "重复定义wrapbuilder失效",
      children: "重复定义wrapBuilder失效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在同一个自定义组件内，同一个wrapBuilder只能初始化一次。例如，builderObj通过wrapBuilder(MyBuilderFirst)初始化后，再次对builderObj赋值wrapBuilder(MyBuilderSecond)将不会生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nfunction myBuilderFirst(value: string, size: number) {\n  Text('MyBuilderFirst：' + value)\n    .fontSize(size)\n}\n\n@Builder\nfunction myBuilderSecond(value: string, size: number) {\n  Text('MyBuilderSecond：' + value)\n    .fontSize(size)\n}\n\ninterface BuilderModel {\n  globalBuilder: WrappedBuilder<[string, number]>;\n}\n\n@Entry\n@Component\nstruct TestBuilderIndex {\n  @State message: string = 'Hello World';\n  @State builderObj: BuilderModel = { globalBuilder: wrapBuilder(myBuilderFirst) };\n\n  aboutToAppear(): void {\n    setTimeout(() => {\n      // wrapBuilder(myBuilderSecond) 不会生效\n      this.builderObj.globalBuilder = wrapBuilder(myBuilderSecond);\n    }, 1000);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        this.builderObj.globalBuilder.builder(this.message, 20)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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
666452(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
513673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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