"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["959945"], {
668445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avsession_kit_distributed_avsession_distributed_playback_avsession_extended_screen_avsession_extended_screen_md_28d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avsession-kit-distributed-avsession-distributed-playback-avsession-extended-screen-avsession-extended-screen-md-28d.json
var site_docs_avsession_kit_distributed_avsession_distributed_playback_avsession_extended_screen_avsession_extended_screen_md_28d_namespaceObject = JSON.parse('{"id":"avsession-kit/distributed-avsession/distributed-playback/avsession-extended-screen/avsession-extended-screen","title":"扩展屏投播开发指导","description":"通过本节开发指导，可在系统镜像投屏后，获取投屏设备信息，实现扩展屏模式的投播，实现双屏协作的能力。","source":"@site/docs/avsession-kit/distributed-avsession/distributed-playback/avsession-extended-screen/avsession-extended-screen.md","sourceDirName":"avsession-kit/distributed-avsession/distributed-playback/avsession-extended-screen","slug":"/avsession-kit/distributed-avsession/distributed-playback/avsession-extended-screen/","permalink":"/harmonyos-docs-site/avsession-kit/distributed-avsession/distributed-playback/avsession-extended-screen/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"扩展屏投播开发指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-extended-screen","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"投播组件开发指导","permalink":"/harmonyos-docs-site/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-guide/"},"next":{"title":"应用接入播控自检表","permalink":"/harmonyos-docs-site/avsession-kit/playback-control-access-selfcheck/playback-control-access-checklist/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avsession-kit/distributed-avsession/distributed-playback/avsession-extended-screen/avsession-extended-screen.md


const frontMatter = {
	title: '扩展屏投播开发指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-extended-screen',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '扩展屏投播开发指导';

const assets = {

};



const toc = [{
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "扩展屏投播开发指导",
        children: "扩展屏投播开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过本节开发指导，可在系统镜像投屏后，获取投屏设备信息，实现扩展屏模式的投播，实现双屏协作的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(525747)/* ["default"] */.A) + "",
        width: "1089",
        height: "416"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "虚拟扩展屏"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "是在系统投屏启动过程中建立的，依据双端协商的投屏视频流的分辨率创建，支持1080P 及以上分辨率。默认镜像主屏内容，当虚拟扩展屏上有UIAbility绘制时，会投屏该屏内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UIAbility A（本机内容）"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在本端主屏上显示的内容。假定UIAbility A 与 UIAbility B 属于同一应用，UIAbility A可以控制UIAbility B，实现双屏联动。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UIAbility B（投屏内容）"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在虚拟扩展屏上绘制的内容，考虑到远端投屏用户体验，UIAbility B 应铺满全屏。从安全角度考虑，在启动UIAbility B 时，系统会校验主屏前台UIAbility是否归属同一应用，如果校验失败会禁止其在虚拟扩展屏启动。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需同时满足以下条件方可使用该功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "设备限制"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本端设备：HarmonyOS NEXT Developer Beta1及以上版本的手机设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "远端设备：支持Cast+或Miracast标准协议的设备，推荐使用华为智慧屏HarmonyOS2.0及以上版本。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用限制"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要系统发起无线/有线投屏后才可通过接口获取有效的扩展投屏设备。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发具体功能前，请先查阅参考文档，获取详细的接口说明。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getAllCastDisplays(): Promise<Array<CastDisplayInfo>>;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前系统中所有支持扩展屏投播的显示设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'castDisplayChange', callback: Callback<CastDisplayInfo>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置扩展屏投播显示设备变化的监听事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'castDisplayChange', callback?: Callback<CastDisplayInfo>): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消扩展屏投播显示设备变化事件监听，关闭后，不再进行该事件回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UIAbility A创建AVSession, 获取可用扩展屏投播设备并注册监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(341227)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取的屏幕信息CastDisplayInfo中包含屏幕ID，屏幕名称、状态以及分辨率宽度、高度基础属性，其中屏幕id 值同于", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#display",
            children: "Display"
          }), "的id，如需要获取更详细的信息可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displaygetalldisplays9",
            children: "Display获取设备信息说明"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport  { avSession }  from '@kit.AVSessionKit'; // 导入AVSession模块\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class AbilityA extends UIAbility{\n  private session: avSession.AVSession | undefined = undefined;\n  private extCastDisplayInfo: avSession.CastDisplayInfo | undefined = undefined;\n  // 注册监听可投屏设备变化事件\n  private onCastDisplayChangedCallback = (castDisplayInfo: avSession.CastDisplayInfo) => {\n    // 新增扩展屏,进入扩展屏显示\n    if (this.extCastDisplayInfo === undefined && castDisplayInfo.state === avSession.CastDisplayState.STATE_ON) {\n      console.info('Succeeded in opening the cast display');\n      this.extCastDisplayInfo = castDisplayInfo;\n      this.startExternalDisplay();\n    } else if (this.extCastDisplayInfo?.id == castDisplayInfo.id) {\n      this.extCastDisplayInfo = castDisplayInfo;\n      // 扩展屏不可用，退出扩展屏显示\n      if (castDisplayInfo.state === avSession.CastDisplayState.STATE_OFF){\n        console.info('Succeeded in closing the cast display');\n        this.stopExternalDisplay();\n        this.extCastDisplayInfo = undefined;\n      }\n    }\n  };\n\n  // 创建AVSession, 获取可用扩展屏投播设备并注册监听\n  initAVSession(context: Context) {\n    avSession.createAVSession(context, 'CastDisplay', 'video').then((session: avSession.AVSession) => {\n      this.session = session;\n      this.session?.on('castDisplayChange', this.onCastDisplayChangedCallback);\n\n      // 获取当前系统可用的扩展屏显示设备\n      session.getAllCastDisplays().then((infoArr: avSession.CastDisplayInfo[]) => {\n        // 有多个扩展屏时可以提供用户选择，也可使用其中任一个作为扩展屏使用。\n        if (infoArr.length > 0) {\n          this.extCastDisplayInfo = infoArr[0];\n          this.startExternalDisplay();\n        }\n      }).catch((err: BusinessError<void>) => {\n        console.error(`Failed to get all CastDisplay. Code: ${err.code}, message: ${err.message}`);\n      });\n    });\n  }\n\n  async onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): Promise<void> {\n    super.onCreate(want, launchParam);\n    this.initAVSession(this.context);\n  }\n\n  onDestroy() {\n    this.stopExternalDisplay();\n    // 去注册监听\n    this.session?.off('castDisplayChange');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在UIAbilityA中构建扩展屏启动和退出能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 扩展屏启动UIAbilityB\n  startExternalDisplay() {\n    if (this.extCastDisplayInfo !== undefined &&\n      this.extCastDisplayInfo.id !== 0 &&\n      this.extCastDisplayInfo.state === avSession.CastDisplayState.STATE_ON) {\n      let id = this.extCastDisplayInfo?.id;\n      console.info(`Succeeded in starting ability and the id of display is ${id}`);\n      this.context.startAbility({\n        bundleName: 'com.example.myapplication', // 应用自有包名\n        abilityName: 'AbilityB'\n      }, {\n        displayId: id // 扩展屏ID\n      });\n      AppStorage.setOrCreate('CastDisplayState', 1);\n    }\n  }\n\n  // 停止使用扩展屏\n  stopExternalDisplay() {\n    AppStorage.setOrCreate('CastDisplayState', 0);\n    // 更新本页面显示。\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UIAbilityB扩展屏显示内容绘制，需响应退出处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport default class AbilityB extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    windowStage.getMainWindowSync().setWindowLayoutFullScreen(true); // 设置为全屏\n    windowStage.loadContent('pages/CastPage', (err: BusinessError) => {\n      if (err.code) {\n        console.error(`Failed to load the content. Code: ${err.code}, message: ${err.message}`);\n        return;\n      }\n      console.info('Succeeded in loading the content. ');\n    });\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct CastPage {\n  // 监测到CastDisplayState变化后，当设备断开时，销毁本页内容。\n  @StorageLink('CastDisplayState') @Watch('onDestroyExtend') private displayState: number = 1;\n\n  private onDestroyExtend() {\n    if (this.displayState === 1) return;\n    let context = (getContext(this) as common.UIAbilityContext)\n    context.terminateSelf().then(() => {\n      console.info('CastPage finished');\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to destroying CastPage. Code: ${err.code}, message: ${err.message}`);\n    });\n  }\n  //...\n}\n"
          })
        }), "\n"]
      }), "\n"]
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
525747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478555-95a0404944a6d746b687d7003f2f9437.png");

},
341227(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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