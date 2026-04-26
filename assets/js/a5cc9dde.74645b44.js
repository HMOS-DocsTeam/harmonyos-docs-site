"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["863870"], {
989744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_introduce_arkts_state_management_introduce_md_a5c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-introduce-arkts-state-management-introduce-md-a5c.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_introduce_arkts_state_management_introduce_md_a5c_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce/arkts-state-management-introduce","title":"状态管理原理介绍","description":"本文将介绍状态管理的基本原理。状态管理的核心逻辑是处理状态变量、自定义组件和系统组件之间的绑定关系。其工作流程可以概括为两个核心阶段：收集依赖和触发更新。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce/arkts-state-management-introduce.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"状态管理原理介绍","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-introduce","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"状态管理术语","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary/"},"next":{"title":"状态管理V1和V2更新机制差异","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce/arkts-state-management-introduce.md


const frontMatter = {
	title: '状态管理原理介绍',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-introduce',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '状态管理原理介绍';

const assets = {

};



const toc = [{
  "value": "收集依赖",
  "id": "收集依赖",
  "level": 2
}, {
  "value": "触发更新",
  "id": "触发更新",
  "level": 2
}, {
  "value": "状态管理在渲染管线中的流程",
  "id": "状态管理在渲染管线中的流程",
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
        id: "状态管理原理介绍",
        children: "状态管理原理介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文将介绍状态管理的基本原理。状态管理的核心逻辑是处理状态变量、自定义组件和系统组件之间的绑定关系。其工作流程可以概括为两个核心阶段：收集依赖和触发更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "收集依赖",
      children: "收集依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收集依赖是指建立状态变量与组件之间的数据绑定关系。在UI渲染时，状态管理框架会“观察”哪些状态变量被读取了，并记录下这个“依赖关系”。一个UI界面上可能使用了多个状态变量，在修改状态变量时，仅与该状态变量相关的组件进行UI刷新，其他不相关的组件不会刷新。因此，UI刷新时需要明确哪些组件使用了被修改的状态变量，以能够实现这些组件的精准刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State name: string = 'Jack';\n  @State age: number = 10;\n  @State grade: number = 5;\n\n  build() {\n    Column() {\n      Text(`${this.name}'s age is ${this.age}`) // Text1\n      Text(`${this.name}'s grade is ${this.grade}`) // Text2\n      Button('change age') // Button1\n        .onClick(() => {\n          this.age++;\n        })\n      Button('change grade') // Button2\n        .onClick(() => {\n          this.grade++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例代码中，自定义组件Index中定义了三个状态变量name，age和grade，在build函数中创建了两个Text系统组件和两个Button系统组件。收集依赖的具体步骤为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义组件Index被创建并首次调用build方法创建组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当框架执行到Text(", (0,jsx_runtime.jsx)(_components.code, {
          children: "${this.name}'s age is ${this.age}"
        }), ")时，为了显示文本内容，需要读取this.name和this.age的值。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "name和age都是被@State装饰器装饰的状态变量，状态变量在被读取时会收集当前正在渲染的系统组件的唯一标识elementId，并将其存储到一个Set集合中。因此，状态变量name和age均收集到Text1的唯一标识elementId1。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["同理，当框架执行到Text(", (0,jsx_runtime.jsx)(_components.code, {
          children: "${this.name}'s grade is ${this.grade}"
        }), ")时，状态变量name和grade收集到了Text2的唯一标识elementId2。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个状态变量中维护了一个Set集合，保存所有与其绑定的系统组件的标识信息。在上述示例中，状态变量name的依赖集合中保存了Text1和Text2的信息，状态变量age的依赖集合中保存了Text1的信息，状态变量grade中保存了Text2的信息。由此，框架完成了收集依赖的过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "触发更新",
      children: "触发更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当状态变量发生改变时，状态管理框架会通知所有依赖于它的UI组件，重新计算并刷新，这个过程称为触发更新。触发更新大致可以分为三个步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "计算状态变量发生改变后的新值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改状态变量的值，并将与其绑定的组件标脏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "刷新所有的脏节点，更新UI的同时重新收集依赖。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435580)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新是以自定义组件为单位的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同样对于上述示例代码，点击Button组件修改状态变量，对应的Text组件刷新，具体步骤为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button1，触发 onClick 事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在事件处理函数中执行this.age++。由于age是状态变量，在改值的过程中会执行状态管理内部的更新操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于在一个UI更新周期中，自定义组件中可能存在多个状态变量发生改变，而更新是以自定义组件为单位的，所以每个自定义组件中维护了一个标脏的系统组件集合（下称脏系统组件集合），用于保存在当前UI更新周期中标脏的系统组件的elementId。在状态变量age的更新操作中，将其依赖集合中系统组件的elementId加入到其所属的自定义组件Index的脏系统组件集合中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "完成系统组件标脏后，将状态变量age所属的自定义组件Index标脏，加入到标脏的自定义组件节点列表（下称脏自定义组件列表）中，并请求一个刷新信号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在下一个UI更新周期中，框架遍历脏自定义组件列表，重新调用它们的rerender方法（rerender方法是由系统生成的），执行Index自定义组件的rerender方法时，遍历脏系统组件，刷新Text1组件并更新依赖。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同理，点击Button2修改状态变量grade的值，对应刷新Text2组件并更新依赖。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发更新就是根据状态变量收集到的依赖关系，当状态变量发生改变时，找到所有受影响的组件，标记为“脏”，在一个UI更新周期中，只刷新标脏的组件，实现最小化更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态管理在渲染管线中的流程",
      children: "状态管理在渲染管线中的流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI渲染的流程主要有以下几个步骤："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(256317)/* ["default"] */.A) + "",
        width: "1061",
        height: "299"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "事件触发状态变量发生改变，执行状态变量的set方法，将自定义组件和系统组件标脏，并请求一个刷新信号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "刷新脏节点：刷新标脏的自定义组件和系统组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "布局：根据标脏局部刷新组件树，触发子树上节点的尺寸测量和位置确认。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同样以上述示例代码为例，使用DevEco Studio的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-inspector-profiler#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86profiler%E8%B0%83%E4%BC%98%E8%83%BD%E5%8A%9B",
        children: "Profiler工具"
      }), "，点击Button1，抓取状态变量的变化打点，trace如下图所示："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(422669)/* ["default"] */.A) + "",
        width: "2235",
        height: "569"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对上图中的标记点进行逐一介绍："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button1按钮，产生手势事件的trace点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "手势事件触发onClick回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在onClick回调中改变状态变量age的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "下一帧信号到来，执行VSync回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "刷新脏自定义组件Index。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "遍历自定义组件中的脏系统组件，重新渲染Text1组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行后续布局流程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，状态管理的基本流程如图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(606649)/* ["default"] */.A) + "",
        width: "1417",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理循环执行两大步骤：收集依赖和触发更新。收集状态变量与组件之间的依赖关系。当状态变量发生变化时，执行标脏，刷新对应的UI，同时更新依赖关系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相比状态管理V1，状态管理V2在状态变量变化时，会异步标脏组件，这两者的更新差异详细可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference",
        children: "状态管理V1和V2更新机制差异"
      }), "文档。"]
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
422669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957590-62fb6f3d6baf196f368c5197c800a2d9.png");

},
606649(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477591-5c10c2b12a0907b2c004666f9724ca10.png");

},
435580(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
256317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437635-dd4cb9216b93c6f9bb5573d25c6ee1a4.png");

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