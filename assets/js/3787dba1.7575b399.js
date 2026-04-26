"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["569035"], {
399020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_page_custom_components_lifecycle_arkts_page_custom_components_lifecycle_md_378_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-custom-components-arkts-page-custom-components-lifecycle-arkts-page-custom-components-lifecycle-md-378.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_page_custom_components_lifecycle_arkts_page_custom_components_lifecycle_md_378_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-lifecycle/arkts-page-custom-components-lifecycle","title":"自定义组件生命周期","description":"自定义组件生命周期，即用@Component或@ComponentV2装饰的自定义组件的生命周期，提供以下生命周期接口：","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-lifecycle/arkts-page-custom-components-lifecycle.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-lifecycle","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-lifecycle/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-lifecycle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"自定义组件生命周期","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-page-custom-components-lifecycle","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建自定义组件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components/"},"next":{"title":"自定义组件的自定义布局","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-layout/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-lifecycle/arkts-page-custom-components-lifecycle.md


const frontMatter = {
	title: '自定义组件生命周期',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-page-custom-components-lifecycle',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义组件生命周期';

const assets = {

};



const toc = [{
  "value": "自定义组件的创建和渲染流程",
  "id": "自定义组件的创建和渲染流程",
  "level": 2
}, {
  "value": "自定义组件重新渲染",
  "id": "自定义组件重新渲染",
  "level": 2
}, {
  "value": "自定义组件的删除",
  "id": "自定义组件的删除",
  "level": 2
}, {
  "value": "自定义组件嵌套使用与示例",
  "id": "自定义组件嵌套使用与示例",
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
        id: "自定义组件生命周期",
        children: "自定义组件生命周期"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义组件生命周期，即用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
        children: "@Component"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "装饰的自定义组件的生命周期，提供以下生命周期接口："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
          children: "aboutToAppear"
        }), "：组件即将出现时回调该接口，具体时机为在创建自定义组件的新实例后，在执行其build函数之前执行。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#ondidbuild12",
          children: "onDidBuild"
        }), "：在组件首次渲染触发的build函数执行完成之后回调该接口，后续组件重新渲染将不回调该接口。开发者可以在这个阶段实现埋点数据上报等不影响实际UI的功能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
          children: "aboutToDisappear"
        }), "：aboutToDisappear函数在自定义组件析构销毁之前执行。不允许在aboutToDisappear函数中改变状态变量，特别是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link变量"
        }), "的修改可能会导致应用程序行为不稳定。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(440729)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面生命周期及其相关内容参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",
        children: "页面路由"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件生命周期流程如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180500)/* ["default"] */.A) + "",
        width: "268",
        height: "467"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据上面的流程图，接下来从自定义组件的初始创建、重新渲染和删除来详细说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义组件的创建和渲染流程",
      children: "自定义组件的创建和渲染流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义组件的创建：自定义组件的实例由ArkUI框架创建。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化自定义组件的成员变量：通过本地默认值或者构造方法传递参数来初始化自定义组件的成员变量，初始化顺序为成员变量的定义顺序。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果开发者定义了aboutToAppear，则执行build方法之前执行该方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在首次渲染的时候，执行build方法渲染系统组件，如果子组件为自定义组件，则创建自定义组件的实例。在首次渲染的过程中，框架会记录状态变量和组件的映射关系，当状态变量改变时，驱动其相关的组件刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果开发者定义了onDidBuild，则执行build方法之后执行该方法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义组件重新渲染",
      children: "自定义组件重新渲染"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当触发事件（比如点击）改变状态变量时，或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
        children: "LocalStorage"
      }), " / ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "中的属性更改，并导致绑定的状态变量更改其值时："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "框架观察到变化，启动重新渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据框架记录的状态变量和组件的映射关系，仅刷新发生变化的状态变量所关联的组件，实现最小化更新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义组件的删除",
      children: "自定义组件的删除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如if组件的分支改变或ForEach循环渲染中数组的个数改变，组件将被移除："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在删除组件之前，将调用其aboutToDisappear生命周期函数，标记着该节点将要被销毁。ArkUI的节点删除机制是：后端节点直接从组件树上摘下，后端节点被销毁，对前端节点解引用，前端节点已经没有引用时，将被Ark虚拟机垃圾回收。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义组件和它的变量将被删除，如果组件有同步的变量（如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
          children: "@Link"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
          children: "@Prop"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
          children: "@StorageLink"
        }), "），将从", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary#%E6%95%B0%E6%8D%AE%E6%BA%90%E5%90%8C%E6%AD%A5%E6%BA%90data-source",
          children: "同步源"
        }), "上取消注册。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不建议在生命周期aboutToDisappear中使用async await。如果在此生命周期中使用异步操作（如 Promise 或回调方法），自定义组件将被保留在Promise的闭包中，直到回调方法执行完毕，这会阻止自定义组件的垃圾回收。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义组件嵌套使用与示例",
      children: "自定义组件嵌套使用与示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过以下示例，来详细说明自定义组件在嵌套使用时，自定义组件生命周期的调用时序："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Parent {\n  @State showChild: boolean = true;\n  @State btnColor: string = '#FF007DFF';\n\n  // 组件生命周期\n  aboutToAppear() {\n    hilog.info(0x0000, 'testTag', 'Parent aboutToAppear');\n  }\n\n  // 组件生命周期\n  onDidBuild() {\n    hilog.info(0x0000, 'testTag', 'Parent onDidBuild');\n  }\n\n  // 组件生命周期\n  aboutToDisappear() {\n    hilog.info(0x0000, 'testTag', 'Parent aboutToDisappear');\n  }\n\n  build() {\n    Column() {\n      // this.showChild为true，创建Child子组件，执行Child aboutToAppear和Child onDidBuild。\n      if (this.showChild) {\n        Child()\n      }\n      Button(this.showChild ? 'delete Child' : 'add Child')\n        .margin(20)\n        .backgroundColor(this.btnColor)\n        .onClick(() => {\n          // 更改this.showChild为false，删除Child子组件，执行Child aboutToDisappear。\n          // 更改this.showChild为true，添加Child子组件，执行Child aboutToAppear和Child onDidBuild。\n          this.showChild = !this.showChild;\n        })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @State title: string = 'Hello World';\n\n  // 组件生命周期\n  aboutToDisappear() {\n    hilog.info(0x0000, 'testTag', 'Child aboutToDisappear');\n  }\n\n  // 组件生命周期\n  onDidBuild() {\n    hilog.info(0x0000, 'testTag', 'Child onDidBuild');\n  }\n\n  // 组件生命周期\n  aboutToAppear() {\n    hilog.info(0x0000, 'testTag', 'Child aboutToAppear');\n  }\n\n  build() {\n    Text(this.title)\n      .fontSize(50)\n      .margin(20)\n      .onClick(() => {\n        this.title = 'Hello ArkUI';\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例中，Index页面包含两个自定义组件，一个是Parent，一个是Child，Parent及其子组件Child分别声明了各自的自定义组件生命周期函数（aboutToAppear / onDidBuild / aboutToDisappear）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用冷启动的初始化流程为：Parent aboutToAppear --> Parent build --> Parent onDidBuild --> Child aboutToAppear --> Child build --> Child onDidBuild。此处体现了自定义组件懒展开特性，即Parent执行完onDidBuild之后才会执行Child组件的aboutToAppear。日志输出信息如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Parent aboutToAppear\nParent onDidBuild\nChild aboutToAppear\nChild onDidBuild\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button按钮，更改showChild为false，删除Child组件，执行Child aboutToDisappear方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果直接退出应用，则会触发以下生命周期：Parent aboutToDisappear --> Child aboutToDisappear，此处体现了自定义组件删除顺序也是从父到子。日志输出信息如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Parent aboutToDisappear\nChild aboutToDisappear\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最小化应用或者应用进入后台，当前Index页面未被销毁，所以并不会执行组件的aboutToDisappear。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果showChild的默认值为false，则应用冷启动的初始化流程为：Parent aboutToAppear --> Parent build --> Parent onDidBuild。日志输出信息如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Parent aboutToAppear\nParent onDidBuild\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果showChild的默认值为false，直接退出应用，则只执行Parent aboutToDisappear方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果showChild的默认值为false，此时点击Button按钮，更改showChild为true，添加Child组件，添加流程为：Child aboutToAppear --> Child build --> Child onDidBuild。日志输出信息如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Child aboutToAppear\nChild onDidBuild\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当showChild为默认值true时，该示例的生命周期流程图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(87645)/* ["default"] */.A) + "",
        width: "269",
        height: "941"
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
440729(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
87645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437599-1bc93532652d055c0b86df5932327023.png");

},
180500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797904-b557c354f12550dd6091b8f97f2e6caa.png");

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