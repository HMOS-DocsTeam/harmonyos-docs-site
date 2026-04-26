"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["683102"], {
470881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_lottie_animation_destroy_check_ide_lottie_animation_destroy_check_md_a4d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-lottie-animation-destroy-check-ide-lottie-animation-destroy-check-md-a4d.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_lottie_animation_destroy_check_ide_lottie_animation_destroy_check_md_a4d_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lottie-animation-destroy-check/ide-lottie-animation-destroy-check","title":"@performance/lottie-animation-destroy-check","description":"该规则检测使用lottie加载的动画是否都正确销毁。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lottie-animation-destroy-check/ide-lottie-animation-destroy-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lottie-animation-destroy-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lottie-animation-destroy-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lottie-animation-destroy-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":54,"frontMatter":{"title":"@performance/lottie-animation-destroy-check","sidebar_position":54,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-lottie-animation-destroy-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/lazyforeach-args-check（已下线）","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lazyforeach-args-check/"},"next":{"title":"@performance/multiple-associations-state-var-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-multi-associations-state-var-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lottie-animation-destroy-check/ide-lottie-animation-destroy-check.md


const frontMatter = {
	title: '@performance/lottie-animation-destroy-check',
	sidebar_position: 54,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-lottie-animation-destroy-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/lottie-animation-destroy-check';

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
  "value": "正例1",
  "id": "正例1",
  "level": 2
}, {
  "value": "正例2",
  "id": "正例2",
  "level": 2
}, {
  "value": "反例1",
  "id": "反例1",
  "level": 2
}, {
  "value": "反例2",
  "id": "反例2",
  "level": 2
}, {
  "value": "反例3",
  "id": "反例3",
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
        id: "performancelottie-animation-destroy-check",
        children: "@performance/lottie-animation-destroy-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则检测使用lottie加载的动画是否都正确销毁。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用lottie加载动画时，一般需要先通过lottie.loadAnimation将动画加载到内存，动画执行完毕后需要在合适的时机（例如：onDisAppear，onPageHide，aboutToDisappear）通过调用animationItem的destroy方法将单个动画销毁或者调用lottie.destroy()方法将当前页面所有动画销毁，如果动画未被销毁就会造成资源浪费，影响应用性能体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存优化场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/lottie-animation-destroy-check\": \"suggestion\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例1",
      children: "正例1"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import lottie from '@ohos/lottie';   //需安装@ohos/lottie依赖后import\nimport { AnimationItem } from '@ohos/lottie';    //需安装@ohos/lottie依赖后import\n\nconst FRAME_START: number = 60;\nconst FRAME_END: number = 120;\n\n@Entry\n@Component\nstruct LottieAnimation1 {\n  private politeChickyController: CanvasRenderingContext2D = new CanvasRenderingContext2D();\n  private politeChicky: string = 'politeChicky';\n  private politeChickyPath: string = 'media/politeChicky.json';\n  private animateItem?: AnimationItem;\n\n  build() {\n    Canvas(this.politeChickyController)\n      .width(160)\n      .height(160)\n      .borderRadius(3)\n      .onReady(() => {\n        this.animateItem = lottie.loadAnimation({\n          container: this.politeChickyController,\n          renderer: 'canvas',\n          loop: true,\n          autoplay: true,\n          name: this.politeChicky,\n          path: this.politeChickyPath,\n          initialSegment: [FRAME_START, FRAME_END]\n        })\n      })\n      .onDisAppear(() => {\n        this.animateItem?.destroy();//只加载了一个Animation，可以使用animateItem的destroy接口\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例2",
      children: "正例2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import lottie from '@ohos/lottie';\nimport { AnimationItem } from '@ohos/lottie';\n\n// 动画播放的起始帧\nconst FRAME_START: number = 60; \n// 动画播放的终止帧\nconst FRAME_END: number = 120; \n\n@Entry\n@Component\nstruct LottieAnimation2 {\n  private politeChickyController: CanvasRenderingContext2D = new CanvasRenderingContext2D();\n  // 动画名称\n  private politeChicky: string = 'politeChicky'; \n  // hap包内动画资源文件路径，仅支持json格式\n  private politeChickyPath: string = 'media/politeChicky.json'; \n  private animateItem: AnimationItem | null = null;\n\n  build() {\n    Canvas(this.politeChickyController)\n      .width(160)\n      .height(160)\n      .borderRadius(3)\n      .onReady(() => {\n        this.animateItem = lottie.loadAnimation({\n          container: this.politeChickyController,\n          renderer: 'canvas',\n          loop: true,\n          autoplay: true,\n          name: 'anim_name1',\n          path: this.politeChickyPath,\n          initialSegment: [FRAME_START, FRAME_END]\n        })\n      })\n      .onClick(() => {\n        this.animateItem = lottie.loadAnimation({\n          container: this.politeChickyController,\n          renderer: 'canvas',\n          loop: true,\n          autoplay: true,\n          name: 'anim_name2',\n          path: this.politeChickyPath,\n          initialSegment: [FRAME_START, FRAME_END]\n        })\n      })\n  }\n\n  onPageHide(): void {\n    lottie.destroy();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例1",
      children: "反例1"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import lottie from '@ohos/lottie';\nimport { AnimationItem } from '@ohos/lottie';\n\nconst FRAME_START: number = 60;\nconst FRAME_END: number = 120;\n\n@Entry\n@Component\nstruct LottieAnimation1 {\n  private politeChickyController: CanvasRenderingContext2D = new CanvasRenderingContext2D();\n  private politeChicky: string = 'politeChicky';\n  private politeChickyPath: string = 'media/politeChicky.json';\n  private animateItem?: AnimationItem;\n\n  build() {\n    Canvas(this.politeChickyController)\n      .width(160)\n      .height(160)\n      .backgroundColor(Color.Gray)\n      .borderRadius(3)\n      .onReady(() => {\n        //告警\n        this.animateItem = lottie.loadAnimation({\n          container: this.politeChickyController,\n          renderer: 'canvas',\n          loop: true,\n          autoplay: true,\n          name: this.politeChicky,\n          path: this.politeChickyPath,\n          initialSegment: [FRAME_START, FRAME_END]\n        })\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例2",
      children: "反例2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import lottie from '@ohos/lottie';\nimport { AnimationItem } from '@ohos/lottie';\n\n// 动画播放的起始帧\nconst FRAME_START: number = 60; \n// 动画播放的终止帧\nconst FRAME_END: number = 120; \n\n//调用多次loadAnimation，但是只在onDisAppear销毁一次\n@Entry\n@Component\nstruct LottieAnimation4 {\n  private politeChickyController: CanvasRenderingContext2D = new CanvasRenderingContext2D();\n  // 动画名称  \n  private politeChicky: string = 'politeChicky'; \n  // hap包内动画资源文件路径，仅支持json格式\n  private politeChickyPath: string = 'media/politeChicky.json'; \n  private animateItem: AnimationItem | null = null;\n  // 初始化点击次数 \n  @State times: number = 0; \n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      // 动画\n      Canvas(this.politeChickyController)\n        .width(160)\n        .height(160)\n        .backgroundColor(Color.Gray)\n        .borderRadius(3)\n        .onReady(() => {\n          this.animateItem = lottie.loadAnimation({\n            container: this.politeChickyController,\n            renderer: 'canvas',\n            loop: true,\n            autoplay: true,\n            name: this.politeChicky,\n            path: this.politeChickyPath,\n            initialSegment: [FRAME_START, FRAME_END]\n          })\n        })\n        .onClick(() => {\n          this.animateItem = lottie.loadAnimation({\n            container: this.politeChickyController,\n            renderer: 'canvas',\n            loop: true,\n            autoplay: true,\n            name: this.politeChicky,\n            path: this.politeChickyPath,\n            initialSegment: [FRAME_START, FRAME_END]\n          })\n          this.times++;\n        })\n        .onDisAppear(()=> {\n          //上报此处animateItem，描述description不一样，如果无法找到动画名称，则直接建议用lottie.destroy\n          this.animateItem?.destroy();\n        })\n      // 响应动画的文本\n      Text('text')\n        .fontSize(16)\n        .margin(10)\n        .fontColor(Color.White)\n    }.margin({ top: 20 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例3",
      children: "反例3"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import lottie from '@ohos/lottie';\nimport { AnimationItem } from '@ohos/lottie';\n\n// 动画播放的起始帧\nconst FRAME_START: number = 60; \n// 动画播放的终止帧\nconst FRAME_END: number = 120; \n\n//调用了销毁，但是不是全部销毁，上报\n@Entry\n@Component\nstruct LottieAnimation5 {\n  private politeChickyController: CanvasRenderingContext2D = new CanvasRenderingContext2D();\n  // 动画名称 \n  private politeChicky: string = 'politeChicky'; \n  // hap包内动画资源文件路径，仅支持json格式\n  private politeChickyPath: string = 'media/politeChicky.json'; \n  private animateItem: AnimationItem | null = null;\n\n  build() {\n    Canvas(this.politeChickyController)\n      .width(160)\n      .height(160)\n      .backgroundColor(Color.Gray)\n      .borderRadius(3)\n      .onReady(() => {\n        this.animateItem = lottie.loadAnimation({\n          container: this.politeChickyController,\n          renderer: 'canvas',\n          loop: true,\n          autoplay: true,\n          name: 'anim_name1',\n          path: this.politeChickyPath,\n          initialSegment: [FRAME_START, FRAME_END]\n        })\n      })\n      .onClick(()=> {\n        this.animateItem = lottie.loadAnimation({\n          container: this.politeChickyController,\n          renderer: 'canvas',\n          loop: true,\n          autoplay: true,\n          name: 'anim_name2',\n          path: this.politeChickyPath,\n          initialSegment: [FRAME_START, FRAME_END]\n        })\n      })\n      .onDisAppear(()=>{\n        //上报lottie,只销毁一个\n        lottie.destroy('anim_name2');\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/all\n"
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