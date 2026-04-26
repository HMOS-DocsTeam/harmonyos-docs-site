"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["736536"], {
890503(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animator_arkts_animator_md_68e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animator-arkts-animator-md-68e.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animator_arkts_animator_md_68e_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animator/arkts-animator","title":"帧动画（ohos.animator）","description":"帧动画具备逐帧回调的特性，便于开发者在每一帧中处理需调整的属性。通过向应用提供AnimatorResult的onFrame属性逐帧回调，帧动画使开发者能够在应用的每一帧设置属性值，从而实现组件属性值变化的自然过渡，营造出动画效果。帧动画接口详情可参考@ohos.animator (动画)。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animator/arkts-animator.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animator","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animator/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animator/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"帧动画（ohos.animator）","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-animator","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"色彩","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-color-effect/"},"next":{"title":"自定义能力概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animator/arkts-animator.md


const frontMatter = {
	title: '帧动画（ohos.animator）',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-animator',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '帧动画（ohos.animator）';

const assets = {

};



const toc = [{
  "value": "使用帧动画实现动画效果",
  "id": "使用帧动画实现动画效果",
  "level": 2
}, {
  "value": "使用帧动画实现小球抛物运动",
  "id": "使用帧动画实现小球抛物运动",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "帧动画ohosanimator",
        children: "帧动画（ohos.animator）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["帧动画具备逐帧回调的特性，便于开发者在每一帧中处理需调整的属性。通过向应用提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-animator/js-apis-animator#animatorresult",
        children: "AnimatorResult"
      }), "的onFrame属性逐帧回调，帧动画使开发者能够在应用的每一帧设置属性值，从而实现组件属性值变化的自然过渡，营造出动画效果。帧动画接口详情可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-animator/js-apis-animator",
        children: "@ohos.animator (动画)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与属性动画相比，帧动画能让开发者实时感知动画进程，即时调整UI值，具备事件即时响应和可暂停的优势，但在性能上略逊于属性动画。当属性动画能满足需求时，建议优先采用属性动画接口实现。属性动画接口可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis",
        children: "实现属性动画"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "实现方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "事件响应方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可暂停"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "性能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "帧动画（ohos.animator）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者可每帧修改UI侧属性值，UI侧属性实时更新"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实时响应"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "较差"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "属性动画"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI侧只计算动画最终状态，动画过程为渲染值在改变，UI侧一直为动画最终状态，不感知实时渲染值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按最终状态响应"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "较好"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图所示，帧动画在动画过程中即可实时响应，而属性动画按最终状态响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(77717)/* ["default"] */.A) + "",
        width: "345",
        height: "299"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(907320)/* ["default"] */.A) + "",
        width: "344",
        height: "299"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用帧动画实现动画效果",
      children: "使用帧动画实现动画效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用如下步骤可以创建一个简单的animator，并且在每个帧回调中打印当前插值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入相关依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AnimatorOptions, AnimatorResult } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建执行动画的对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建动画的初始参数\nlet options: AnimatorOptions = {\n  duration: 1500,\n  easing: 'friction',\n  delay: 0,\n  fill: 'forwards',\n  direction: 'normal',\n  iterations: 2,\n  // 动画onFrame 插值首帧值\n  begin: 200.0,\n  // 动画onFrame 插值尾帧值\n  end: 400.0\n};\nlet result: AnimatorResult | undefined = this.getUIContext().createAnimator(options);\n// 设置接收到帧时回调，动画播放过程中每帧会调用onFrame回调\nresult.onFrame = (value: number) => {\n  hilog.info(DOMAIN, TAG, 'current value is :' + value);\n\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "播放动画。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 播放动画\nresult.play();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动画执行完成后手动释放AnimatorResult对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放动画对象\nresult = undefined;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用帧动画实现小球抛物运动",
      children: "使用帧动画实现小球抛物运动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入相关依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AnimatorOptions, AnimatorResult } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义要做动画的组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button()\n  .width(60)\n  .height(60)\n  .translate({ x: this.translateX, y: this.translateY })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在onPageShow中创建AnimatorResult对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onPageShow(): void {\n  // 创建animatorResult对象\n  this.animatorResult = this.getUIContext().createAnimator(this.animatorOption);\n  this.animatorResult.onFrame = (progress: number) => {\n    this.translateX = progress;\n    if (progress > this.topWidth && this.translateY < this.bottomHeight) {\n      this.translateY = Math.pow(progress - this.topWidth, 2) * this.g;\n    }\n  }\n  // 动画取消时执行方法\n  this.animatorResult.onCancel = () => {\n    // 请将$r('app.string.cancel')替换为实际资源文件，在本示例中该资源文件的value值为\"取消\"\n    this.animatorStatus = $r('app.string.cancel');\n  }\n  // 动画完成时执行方法\n  this.animatorResult.onFinish = () => {\n    // 请将$r('app.string.complete')替换为实际资源文件，在本示例中该资源文件的value值为\"完成\"\n    this.animatorStatus = $r('app.string.complete');\n  }\n  // 动画重复播放时执行方法\n  this.animatorResult.onRepeat = () => {\n    // 'repeat'资源文件中的value值为'动画重复播放'\n    hilog.info(DOMAIN, TAG, this.manager.getStringByNameSync('repeat'));\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义动画播放，重置，暂停的按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.string.play')替换为实际资源文件，在本示例中该资源文件的value值为\"播放\"\nButton($r('app.string.play')).onClick(() => {\n  this.animatorResult?.play();\n  // 请将$r('app.string.playing')替换为实际资源文件，在本示例中该资源文件的value值为\"播放中\"\n  this.animatorStatus = $r('app.string.playing');\n}).width(80).height(35)\n// 请将$r('app.string.reset')替换为实际资源文件，在本示例中该资源文件的value值为\"重置\"\nButton($r('app.string.reset')).onClick(() => {\n  this.translateX = 0;\n  this.translateY = 0;\n}).width(80).height(35)\n// 请将$r('app.string.pause')替换为实际资源文件，在本示例中该资源文件的value值为\"暂停\"\nButton($r('app.string.pause')).onClick(() => {\n  this.animatorResult?.pause();\n  // 请将$r('app.string.pause')替换为实际资源文件，在本示例中该资源文件的value值为\"暂停\"\n  this.animatorStatus = $r('app.string.pause');\n}).width(80).height(35)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在页面隐藏或销毁的生命周期中释放动画对象，避免内存泄漏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onPageHide(): void {\n  this.animatorResult = undefined;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AnimatorOptions, AnimatorResult } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG: string = '[AnimatorTest]';\n\n@Entry\n@Component\nstruct Index {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private manager = this.context.resourceManager;\n  @State animatorResult: AnimatorResult | undefined = undefined;\n  // 'create'资源文件中的value值为'创建'\n  @State animatorStatus: string = 'create';\n  begin: number = 0;\n  end: number = 300;\n  topWidth: number = 150;\n  bottomHeight: number = 100;\n  // 自由落体运动的加速度系数\n  g: number = 0.18;\n  animatorOption: AnimatorOptions = {\n    duration: 4000,\n    delay: 0,\n    easing: 'linear',\n    iterations: 1,\n    fill: \"forwards\",\n    direction: 'normal',\n    begin: this.begin,\n    end: this.end\n  };\n  @State translateX: number = 0;\n  @State translateY: number = 0;\n\n  onPageShow(): void {\n    this.animatorResult = this.getUIContext().createAnimator(this.animatorOption);\n    this.animatorResult.onFrame = (progress: number) => {\n      this.translateX = progress;\n      if (progress > this.topWidth && this.translateY < this.bottomHeight) {\n        this.translateY = Math.pow(progress - this.topWidth, 2) * this.g;\n      }\n    }\n    this.animatorResult.onCancel = () => {\n      // 'cancel'资源文件中的value值为'取消'\n      this.animatorStatus = 'cancel';\n    }\n    this.animatorResult.onFinish = () => {\n      // 'complete'资源文件中的value值为'完成'\n      this.animatorStatus = 'complete';\n    }\n    this.animatorResult.onRepeat = () => {\n      // 'repeat'资源文件中的value值为'动画重复播放'\n      hilog.info(DOMAIN, TAG, this.manager.getStringByNameSync('repeat'));\n    }\n  }\n\n  onPageHide(): void {\n    this.animatorResult = undefined;\n  }\n\n  build() {\n    Column() {\n      Column({ space: 30 }) {\n        // 请将$r('app.string.play')替换为实际资源文件，在本示例中该资源文件的value值为\"播放\"\n        Button($r('app.string.play')).onClick(() => {\n          this.animatorResult?.play();\n          // 'playing'资源文件中的value值为'播放中'\n          this.animatorStatus = 'playing';\n        }).width(80).height(35)\n        // 请将$r('app.string.reset')替换为实际资源文件，在本示例中该资源文件的value值为\"重置\"\n        Button($r('app.string.reset')).onClick(() => {\n          this.translateX = 0;\n          this.translateY = 0;\n        }).width(80).height(35)\n        // 请将$r('app.string.pause')替换为实际资源文件，在本示例中该资源文件的value值为\"暂停\"\n        Button($r('app.string.pause')).onClick(() => {\n          this.animatorResult?.pause();\n          // 'pause'资源文件中的value值为'暂停'\n          this.animatorStatus = 'pause';\n        }).width(80).height(35)\n      }.width('100%').height('25%')\n\n      Stack() {\n        Button()\n          .width(60)\n          .height(60)\n          .translate({ x: this.translateX, y: this.translateY })\n      }\n      .width('100%')\n      .height('45%')\n      .align(Alignment.Start)\n      // 'animatorStatus'资源文件中的value值为'当前动画状态为:'\n      Text(this.manager.getStringByNameSync('animatorStatus') + this.manager.getStringByNameSync(this.animatorStatus))\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(752656)/* ["default"] */.A) + "",
        width: "385",
        height: "629"
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
752656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958004-4b83a24d93f768a320cdc6444b21c2f3.gif");

},
77717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798354-f9f96ae2e2c1c8b9b89434865580e370.gif");

},
907320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438049-7ac22296de6fbc083a01086f2d0b0421.gif");

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