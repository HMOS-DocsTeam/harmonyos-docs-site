"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["488513"], {
104782(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_multi_window_guide_multi_window_adapt_multi_window_support_multi_window_support_md_8f0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-multi-window-guide-multi-window-adapt-multi-window-support-multi-window-support-md-8f0.json
var site_docs_arkui_window_manager_multi_window_guide_multi_window_adapt_multi_window_support_multi_window_support_md_8f0_namespaceObject = JSON.parse('{"id":"arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-support/multi-window-support","title":"应用声明支持智慧多窗","description":"当应用需要智慧多窗的能力时，可以通过在module.json5配置文件中对应标签添加相关字段声明支持。","source":"@site/docs/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-support/multi-window-support.md","sourceDirName":"arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-support","slug":"/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-support/","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-support/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用声明支持智慧多窗","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-window-support","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"智慧多窗简介","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-intro/"},"next":{"title":"应用布局适配智慧多窗","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-layout-adapt/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-support/multi-window-support.md


const frontMatter = {
	title: '应用声明支持智慧多窗',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-window-support',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用声明支持智慧多窗';

const assets = {

};



const toc = [{
  "value": "声明支持悬浮窗",
  "id": "声明支持悬浮窗",
  "level": 2
}, {
  "value": "声明支持分屏",
  "id": "声明支持分屏",
  "level": 2
}, {
  "value": "应用内分屏",
  "id": "应用内分屏",
  "level": 2
}, {
  "value": "应用内多窗",
  "id": "应用内多窗",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "应用声明支持智慧多窗",
        children: "应用声明支持智慧多窗"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用需要智慧多窗的能力时，可以通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5配置文件"
      }), "中对应标签添加相关字段声明支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "声明支持悬浮窗",
      children: "声明支持悬浮窗"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过在module.json5配置文件中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
        children: "abilities标签"
      }), "下的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "supportWindowMode"
        })
      }), "属性增加“", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "floating"
        })
      }), "”字段或使用缺省值以声明应用支持悬浮窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(171456)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "supportWindowMode缺省值为[\"fullscreen\", \"split\", \"floating\"]。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "supportWindowMode"
        })
      }), "属性主要标识当前UIAbility所支持的窗口模式，支持的字段及含义如下表所示。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fullscreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口支持全屏显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口支持分屏显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "floating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口支持悬浮窗显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用声明支持智慧多窗后，还可根据业务场景的需要配置是否支持横向悬浮窗或上下分屏模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用需要支持横向悬浮窗时，开发者可以通过在module.json5配置文件中", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "abilities"
        })
      }), "标签下的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "preferMultiWindowOrientation"
        })
      }), "属性增加“", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "landscape"
        })
      }), "”或者“", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "landscape_auto"
        })
      }), "”配合API以声明应用支持横向悬浮窗或上下分屏模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "preferMultiWindowOrientation"
        })
      }), "属性主要标识当前UIAbility组件多窗布局方向，支持的字段及含义如下表所示。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "效果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "portrait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多窗布局方向为竖向。建议竖向游戏类应用配置。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "手机"
              })
            }), "  手势触发悬浮窗：竖向悬浮窗  手势触发分屏：不支持  分屏样式切换：不涉及  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "折叠屏手机展开态"
              })
            }), "  手势触发悬浮窗：竖向悬浮窗  手势触发分屏：形成左右分屏  分屏样式切换：不支持样式切换"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "landscape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多窗布局方向为横向，配置后支持横向悬浮窗和上下分屏。建议横向游戏类应用配置。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "手机"
              })
            }), "  手势触发悬浮窗：横向悬浮窗  手势触发分屏：不支持  分屏样式切换：不涉及  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "折叠屏手机展开态"
              })
            }), "  手势触发悬浮窗：横向悬浮窗  手势触发分屏：形成上下分屏  分屏样式切换：不支持样式切换"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "landscape_auto"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多窗布局动态可变为横向，需要配合API（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#enablelandscapemultiwindow12",
              children: "enableLandscapeMultiWindow"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#disablelandscapemultiwindow12",
              children: "disableLandscapeMultiWindow"
            }), "）使用。建议视频类应用配置。"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统识别应用为横向全屏播放："
              })
            }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "手机"
              })
            }), "  手势触发悬浮窗：横向悬浮窗  手势触发分屏：形成上下分屏  分屏样式切换：不涉及  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "折叠屏手机展开态"
              })
            }), "  手势触发悬浮窗：横向悬浮窗  手势触发分屏：形成上下分屏  分屏样式切换：支持样式切换  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "系统识别应用为非横向全屏播放："
              })
            }), " 同配置为default"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缺省值，参数不配置时默认为default。  建议其他应用类配置。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "折叠屏手机折叠态 & 手机"
              })
            }), "  手势触发悬浮窗：竖向悬浮窗  手势触发分屏：形成上下分屏  分屏样式切换：不涉及  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "折叠屏手机展开态"
              })
            }), "  手势触发悬浮窗：竖向悬浮窗  手势触发分屏：形成左右分屏  分屏样式切换：支持样式切换"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "声明支持分屏",
      children: "声明支持分屏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过在module.json5配置文件中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
        children: "abilities标签"
      }), "下的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "supportWindowMode"
        })
      }), "属性增加“", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "split"
        })
      }), "”字段或使用缺省值以声明应用支持分屏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(386097)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "supportWindowMode缺省值为[\"fullscreen\", \"split\", \"floating\"]。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "supportWindowMode"
        })
      }), "属性主要标识当前UIAbility所支持的窗口模式，支持的字段及含义如下表所示。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fullscreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口支持全屏显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口支持分屏显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "floating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口支持悬浮窗显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用内分屏",
      children: "应用内分屏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用内分屏功能允许", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A3%B0%E6%98%8E%E6%94%AF%E6%8C%81%E5%88%86%E5%B1%8F",
        children: "声明支持分屏"
      }), "的应用在全屏显示模式下，通过调用startAbility方法启动UIAbility并形成分屏。该功能能够增强应用的多任务处理能力，提升用户的操作体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以点击按钮启动分屏为例，主要步骤和示例如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用中获取UIAbilityContext 对象，这是启动分屏所必需的上下文对象，用于后续调用startAbility接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.hostContext = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用startAbility接口启动UIAbility，形成分屏。调用startAbility接口时，设置StartOptions对象，需要指定窗口模式", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant#windowmode12",
            children: "windowMode"
          }), "（需设置为WINDOW_MODE_SPLIT_PRIMARY或者WINDOW_MODE_SPLIT_SECONDARY），并可根据需要设置其他StartOptions属性或startAbility参数，如Want对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建StartOptions并设置为主窗口模式\nlet option: StartOptions = { windowMode: AbilityConstant.WindowMode.WINDOW_MODE_SPLIT_PRIMARY };\nlet want: Want = { bundleName: 'com.example.startsplitdemo', abilityName: 'EntryAbility1', moduleName: '' };\nthis.hostContext?.startAbility(want, option);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若继续执行上述步骤，可继续启动其他UIAbility窗口，呈现左右分屏或替换一侧的分屏窗口。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用DevEco Studio新建Ability，创建EntryAbility1和EntryAbility2，对应文中组成分屏的两个窗口页面，加载页面为默认页面Index.ets。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { AbilityConstant, common, StartOptions, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  @State name: string = '';\n  private hostContext: common.UIAbilityContext | null = null;\n\n  aboutToAppear(): void {\n    this.hostContext = this.getUIContext()?.getHostContext() as common.UIAbilityContext;\n    this.name = this.hostContext.abilityInfo.name;\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      Text(this.name)\n\n      Button() {\n        Text('启动应用内分屏')\n      }\n      .height(40)\n      .onClick(() => {\n        // 指定拉起的分屏窗口的应用信息\n        let want: Want = { bundleName: 'com.example.startsplitdemo', abilityName: 'EntryAbility1', moduleName: '' };\n        // 创建StartOptions并设置窗口模式为分屏模式，左侧分屏\n        let option: StartOptions = { windowMode: AbilityConstant.WindowMode.WINDOW_MODE_SPLIT_PRIMARY };\n        this.hostContext?.startAbility(want, option);\n      })\n\n      Button() {\n        Text('启动另一分屏窗口')\n      }\n      .height(40)\n      .onClick(() => {\n        let want: Want = { bundleName: 'com.example.startsplitdemo', abilityName: 'EntryAbility2', moduleName: '' };\n        // 指定启动EntryAbility2的窗口模式，右侧分屏\n        let option: StartOptions = { windowMode: AbilityConstant.WindowMode.WINDOW_MODE_SPLIT_SECONDARY };\n        this.hostContext?.startAbility(want, option, (error: BusinessError) => {\n          if (error.code) {\n            return;\n          }\n          hilog.info(0x0000, 'testTag', '启动分屏成功');\n        });\n      })\n    }\n    .padding(20)\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图1 启动左侧分屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(778259)/* ["default"] */.A) + "",
        width: "400",
        height: "420"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图2 启动右侧分屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(627382)/* ["default"] */.A) + "",
        width: "400",
        height: "420"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用内多窗",
      children: "应用内多窗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从HarmonyOS 6.0.0版本开始，新增支持应用内多窗。应用内多窗功能支持应用拉起分屏或全景多窗，方便用户进行多任务处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用开发者需要使用应用内多窗图标时，可以使用高级组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-multiwindowentryinapp-api/ui-design-multiwindowentryinapp-api",
        children: "MultiWindowEntryInAPP"
      }), "实现该功能。"]
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
627382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798548-88516f1fb4f5f8ea6c0c46ed277cf31e.gif");

},
778259(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478197-0b22ff83de9a2f27277e511c95f44f34.gif");

},
171456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
386097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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