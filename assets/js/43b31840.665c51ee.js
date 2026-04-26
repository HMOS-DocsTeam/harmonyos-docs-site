"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["715803"], {
461877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_rendering_control_ifelse_arkts_rendering_control_ifelse_md_43b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-rendering-control-arkts-rendering-control-ifelse-arkts-rendering-control-ifelse-md-43b.json
var site_docs_arkui_arkts_ui_development_arkts_rendering_control_arkts_rendering_control_ifelse_arkts_rendering_control_ifelse_md_43b_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse/arkts-rendering-control-ifelse","title":"if/else：条件渲染","description":"ArkTS提供了渲染控制能力。条件渲染可根据应用状态，使用if、else和else if渲染相应的UI内容。","source":"@site/docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse/arkts-rendering-control-ifelse.md","sourceDirName":"arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse","slug":"/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"if/else：条件渲染","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-ifelse","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"渲染控制概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview/"},"next":{"title":"ForEach：循环渲染","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse/arkts-rendering-control-ifelse.md


const frontMatter = {
	title: 'if/else：条件渲染',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-ifelse',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'if/else：条件渲染';

const assets = {

};



const toc = [{
  "value": "使用规则",
  "id": "使用规则",
  "level": 2
}, {
  "value": "更新机制",
  "id": "更新机制",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "使用if进行条件渲染",
  "id": "使用if进行条件渲染",
  "level": 3
}, {
  "value": "if ... else ...语句和子组件状态",
  "id": "if--else-语句和子组件状态",
  "level": 3
}, {
  "value": "嵌套if语句",
  "id": "嵌套if语句",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ifelse条件渲染",
        children: "if/else：条件渲染"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS提供了渲染控制能力。条件渲染可根据应用状态，使用if、else和else if渲染相应的UI内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(420677)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始，该接口支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用规则",
      children: "使用规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持if、else和else if语句。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "if和else if后的条件语句可以使用状态变量或常规变量（状态变量的值改变时会实时渲染UI，而常规变量的值改变则不会）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "允许在容器组件内使用，通过条件渲染语句构建不同的子组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["条件渲染语句在涉及到组件的父子关系时是“透明”的，父组件和子组件之间的条件渲染语句不影响父组件关于子组件使用的限制。例如，某些容器组件限制子组件的类型或数量。将条件渲染语句用于这些组件内时，这些限制同样适用于条件渲染语句内创建的组件。具体而言，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
          children: "Grid"
        }), "容器组件的子组件仅支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem",
          children: "GridItem"
        }), "组件。在Grid内使用条件渲染语句时，条件渲染语句内仅允许使用GridItem组件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["每个分支内部的构建函数必须遵循构建函数的规则，并创建一个或多个组件。无法创建组件的空构建函数会产生语法错误。关于构建函数的规则，请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-basic-syntax-overview",
          children: "基本语法概述"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-declarative-ui-description",
          children: "声明式UI描述"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更新机制",
      children: "更新机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当if、else if后跟随的状态判断中使用的状态变量值变化时，条件渲染语句会进行更新，更新步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "评估if和else if的状态判断条件，如果分支没有变化，无需执行以下步骤。如果分支有变化，则执行2、3步骤。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "移除此前构建的所有子组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行新分支的构造函数，将生成的子组件添加到if父容器中。如果缺少适用的else分支，则不创建任何内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "条件可以包含Typescript表达式。构造函数中的表达式不得更改应用程序状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用if进行条件渲染",
      children: "使用if进行条件渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct IfExample {\n  @State count: number = 0;\n\n  build() {\n    Column() {\n      Text(`count=${this.count}`)\n\n      if (this.count > 0) {\n        Text(`count is positive`)\n          .fontColor(Color.Green)\n      }\n\n      Button('increase count')\n        .onClick(() => {\n          this.count++;\n        })\n\n      Button('decrease count')\n        .onClick(() => {\n          this.count--;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(32974)/* ["default"] */.A) + "",
        width: "300",
        height: "300"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "if语句的每个分支都包含一个构建函数。此类构建函数必须创建一个或多个子组件。在初始渲染时，if语句会执行构建函数，并将生成的子组件添加到其父组件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每当if或else if条件语句中使用的状态变量发生变化时，条件语句都会更新并重新评估新的条件值。如果条件值评估发生了变化，这意味着需要构建另一个条件分支。此时ArkUI框架将："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "移除所有以前渲染的（早期分支的）组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行新分支的构造函数，将生成的子组件添加到其父组件中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以上示例中，当count从0增至1时，if (this.count > 0)更新为true，执行该分支的构造函数，创建一个Text组件并添加到父组件Column中。如果后续count更改为0，则Text组件将从Column组件中删除。由于没有else分支，因此不会执行新的构造函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "if--else-语句和子组件状态",
      children: "if ... else ...语句和子组件状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例包含if ... else ...语句与拥有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "装饰变量的子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct CounterView {\n  @State counter: number = 0;\n  label: string = 'unknown';\n\n  build() {\n    Column({ space: 20 }) {\n      Text(`${this.label}`)\n      Button(`counter ${this.counter} +1`)\n        .onClick(() => {\n          this.counter += 1;\n        })\n    }\n    .margin(10)\n    .padding(10)\n    .border({ width: 1 })\n  }\n}\n\n@Entry\n@Component\nstruct MainView {\n  @State toggle: boolean = true;\n\n  build() {\n    Column() {\n      if (this.toggle) {\n        CounterView({ label: 'CounterView #positive' });\n      } else {\n        CounterView({ label: 'CounterView #negative' });\n      }\n      Button(`toggle ${this.toggle}`)\n        .onClick(() => {\n          this.toggle = !this.toggle;\n        })\n    }\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(909696)/* ["default"] */.A) + "",
        width: "300",
        height: "184"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "初次渲染"
        })
      }), "：创建CounterView子组件（label为 'CounterView #positive'），其状态变量counter初始值为0。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "修改CounterView的counter状态变量"
        })
      }), "：CounterView子组件（label为 'CounterView #positive'）重新渲染并保留状态变量值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "修改MainView.toggle状态变量为false"
        })
      }), "：MainView父组件内的if语句将更新，并进行以下处理："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除旧的CounterView子组件（label为 'CounterView #positive'）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建新的CounterView子组件（label为 'CounterView #negative'），其状态变量counter初始值为0。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(715572)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CounterView（label为 'CounterView #positive'）和CounterView（label为 'CounterView #negative'）是同一自定义组件的两个不同实例。if分支的更改，不会更新现有子组件，也不会保留状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示了条件更改时，若需要保留counter值所做的修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct KeepCounterView {\n  @Link counter: number;\n  label: string = 'unknown';\n\n  build() {\n    Column({ space: 20 }) {\n      Text(`${this.label}`)\n        .fontSize(20)\n      Button(`counter ${this.counter} +1`)\n        .onClick(() => {\n          this.counter += 1;\n        })\n    }\n    .margin(10)\n    .padding(10)\n    .border({ width: 1 })\n  }\n}\n\n@Entry\n@Component\nstruct KeepMainView {\n  @State toggle: boolean = true;\n  @State counter: number = 0;\n\n  build() {\n    Column() {\n      if (this.toggle) {\n        KeepCounterView({ counter: $counter, label: 'CounterView #positive' });\n      } else {\n        KeepCounterView({ counter: $counter, label: 'CounterView #negative' });\n      }\n      Button(`toggle ${this.toggle}`)\n        .onClick(() => {\n          this.toggle = !this.toggle;\n        })\n    }\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(868970)/* ["default"] */.A) + "",
        width: "300",
        height: "186"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此处，@State counter变量归父组件所有。因此，当KeepCounterView组件实例被删除时，该变量不会被销毁。KeepCounterView组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
        children: "@Link"
      }), "装饰器引用状态。状态必须从子级移动到其父级（或父级的父级），以避免在条件内容或重复内容被销毁时丢失状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "嵌套if语句",
      children: "嵌套if语句"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "嵌套条件语句不会影响父组件的相关规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct NestedIf {\n  @State toggle: boolean = false;\n  @State toggleColor: boolean = false;\n\n  build() {\n    Column({ space: 20 }) {\n      Text('Before')\n        .fontSize(15)\n      if (this.toggle) {\n        Text('Top True, positive 1 top')\n          .backgroundColor('#aaffaa').fontSize(20)\n        // 内部if语句\n        if (this.toggleColor) {\n          Text('Top True, Nested True, positive COLOR  Nested ')\n            .backgroundColor('#00aaaa').fontSize(15)\n        } else {\n          Text('Top True, Nested False, Negative COLOR  Nested ')\n            .backgroundColor('#aaaaff').fontSize(15)\n        }\n      } else {\n        Text('Top false, negative top level').fontSize(20)\n          .backgroundColor('#ffaaaa')\n        if (this.toggleColor) {\n          Text('positive COLOR  Nested ')\n            .backgroundColor('#00aaaa').fontSize(15)\n        } else {\n          Text('Negative COLOR  Nested ')\n            .backgroundColor('#aaaaff').fontSize(15)\n        }\n      }\n      Text('After')\n        .fontSize(15)\n      Button('Toggle Outer')\n        .onClick(() => {\n          this.toggle = !this.toggle;\n        })\n      Button('Toggle Inner')\n        .onClick(() => {\n          this.toggleColor = !this.toggleColor;\n        })\n    }\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(753340)/* ["default"] */.A) + "",
        width: "300",
        height: "224"
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
909696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477643-26062ca54319ed5500540508baf43bbd.gif");

},
715572(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
420677(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
753340(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437689-00159ee97dceaf9370931176e0581768.gif");

},
868970(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797994-650f579c844c3e2c8a2b5209c67a1d9d.gif");

},
32974(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957642-6164157b7945b66b6e6d10a8dd845e7d.gif");

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