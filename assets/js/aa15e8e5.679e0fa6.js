"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["498303"], {
622963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_support_gesture_arkts_gesture_events_binding_arkts_gesture_events_binding_md_aa1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-rkts-interaction-development-guide-support-gesture-arkts-gesture-events-binding-arkts-gesture-events-binding-md-aa1.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_rkts_interaction_development_guide_support_gesture_arkts_gesture_events_binding_arkts_gesture_events_binding_md_aa1_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding/arkts-gesture-events-binding","title":"绑定手势方法","description":"通过给各个组件绑定不同的手势事件，并设计事件的响应方式，当手势识别成功时，ArkUI框架将通过事件回调通知组件手势识别的结果。","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding/arkts-gesture-events-binding.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"绑定手势方法","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-binding","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持表冠输入事件","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-common-events-crown-event/"},"next":{"title":"单一手势","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding/arkts-gesture-events-binding.md


const frontMatter = {
	title: '绑定手势方法',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-binding',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '绑定手势方法';

const assets = {

};



const toc = [{
  "value": "gesture（常规手势绑定方法）",
  "id": "gesture常规手势绑定方法",
  "level": 2
}, {
  "value": "priorityGesture（带优先级的手势绑定方法）",
  "id": "prioritygesture带优先级的手势绑定方法",
  "level": 2
}, {
  "value": "parallelGesture（并行手势绑定方法）",
  "id": "parallelgesture并行手势绑定方法",
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
        id: "绑定手势方法",
        children: "绑定手势方法"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过给各个组件绑定不同的手势事件，并设计事件的响应方式，当手势识别成功时，ArkUI框架将通过事件回调通知组件手势识别的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(662416)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "gesture、priorityGesture和parallelGesture当前不支持使用三目运算符（条件? 表达式1 : 表达式2）切换手势绑定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gesture常规手势绑定方法",
      children: "gesture（常规手势绑定方法）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".gesture(gesture: GestureType, mask?: GestureMask)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "gesture为通用的一种手势绑定方法，可以将手势绑定到对应的组件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，可以将点击手势TapGesture通过gesture方法将手势绑定到Text组件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct RegularBinding {\n  build() {\n    Column() {\n      Text('Gesture').fontSize(28)\n      // 采用gesture手势绑定方法绑定TapGesture\n        .gesture(\n          TapGesture()\n            .onAction(() => {\n              console.info('TapGesture is onAction');\n            }))\n    }\n    .height(200)\n    .width(250)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prioritygesture带优先级的手势绑定方法",
      children: "priorityGesture（带优先级的手势绑定方法）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".priorityGesture(gesture: GestureType, mask?: GestureMask)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "priorityGesture是带优先级的手势绑定方法，可以在组件上绑定优先识别的手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在默认情况下，当父组件和子组件均使用gesture绑定相同类型手势时，子组件优先识别通过gesture绑定的手势。当父组件使用priorityGesture绑定与子组件同类型的手势时，父组件优先识别通过priorityGesture绑定的手势。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于绑定了长按手势的组件，可以设置触发长按的最短时间", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesturehandler/ts-gesturehandler#longpressgesturehandleroptions",
        children: "duration"
      }), "。触发长按时，系统将优先响应触发长按时间最短的组件，忽略priorityGesture设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，当父组件Column和子组件Text同时绑定TapGesture手势时，父组件以带优先级手势priorityGesture的形式进行绑定时，优先响应父组件绑定的TapGesture。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct PriorityBinding {\n  build() {\n    Column() {\n      Text('Gesture').fontSize(28)\n        .gesture(\n          TapGesture()\n            .onAction(() => {\n              hilog.info(DOMAIN, TAG,'Text TapGesture is onAction');\n            }))\n    }\n    .height(200)\n    .width(250)\n    // 设置为priorityGesture时，点击文本区域会忽略Text组件的TapGesture手势事件，优先响应父组件Column的TapGesture手势事件\n    .priorityGesture(\n      TapGesture()\n        .onAction(() => {\n          hilog.info(DOMAIN, TAG,'Column TapGesture is onAction');\n        }), GestureMask.IgnoreInternal)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "parallelgesture并行手势绑定方法",
      children: "parallelGesture（并行手势绑定方法）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".parallelGesture(gesture: GestureType, mask?: GestureMask)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "parallelGesture是并行的手势绑定方法，可以在父子组件上绑定可以同时响应的相同手势。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在默认情况下，手势事件为非冒泡事件，当父子组件绑定相同的手势时，父子组件绑定的手势事件会发生竞争，最多只有一个组件的手势事件能够获得响应。而当父组件绑定了并行手势parallelGesture时，父子组件相同的手势事件都可以触发，实现类似冒泡效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ParallelBinding {\n  build() {\n    Column() {\n      Text('Gesture').fontSize(28)\n        .gesture(\n          TapGesture()\n            .onAction(() => {\n              hilog.info(DOMAIN, TAG,'Text TapGesture is onAction');\n            }))\n    }\n    .height(200)\n    .width(250)\n    // 设置为parallelGesture时，点击文本区域会同时响应父组件Column和子组件Text的TapGesture手势事件\n    .parallelGesture(\n      TapGesture()\n        .onAction(() => {\n          hilog.info(DOMAIN, TAG,'Column TapGesture is onAction');\n        }), GestureMask.Normal)\n  }\n}\n"
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
662416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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