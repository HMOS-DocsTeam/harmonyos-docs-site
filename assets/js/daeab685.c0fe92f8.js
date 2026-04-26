"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["840974"], {
249090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_window_overview_window_overview_md_dae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-window-overview-window-overview-md-dae.json
var site_docs_arkui_window_manager_window_overview_window_overview_md_dae_namespaceObject = JSON.parse('{"id":"arkui/window-manager/window-overview/window-overview","title":"窗口开发概述","description":"窗口模块的定义","source":"@site/docs/arkui/window-manager/window-overview/window-overview.md","sourceDirName":"arkui/window-manager/window-overview","slug":"/arkui/window-manager/window-overview/","permalink":"/harmonyos-docs-site/arkui/window-manager/window-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"窗口开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI并行化常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/multi-thread-ui-build-faq/"},"next":{"title":"管理应用窗口（Stage模型）","permalink":"/harmonyos-docs-site/arkui/window-manager/application-window-stage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/window-overview/window-overview.md


const frontMatter = {
	title: '窗口开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '窗口开发概述';

const assets = {

};



const toc = [{
  "value": "窗口模块的定义",
  "id": "窗口模块的定义",
  "level": 2
}, {
  "value": "窗口模块的用途",
  "id": "窗口模块的用途",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "窗口类型",
  "id": "窗口类型",
  "level": 3
}, {
  "value": "应用窗口模式",
  "id": "应用窗口模式",
  "level": 3
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "主窗口的生命周期",
  "id": "主窗口的生命周期",
  "level": 2
}, {
  "value": "生命周期概述",
  "id": "生命周期概述",
  "level": 3
}, {
  "value": "生命周期状态",
  "id": "生命周期状态",
  "level": 3
}, {
  "value": "监听生命周期状态变化",
  "id": "监听生命周期状态变化",
  "level": 3
}, {
  "value": "不同设备生命周期的差异化行为",
  "id": "不同设备生命周期的差异化行为",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "窗口开发概述",
        children: "窗口开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "窗口模块的定义",
      children: "窗口模块的定义"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "窗口模块用于在同一块物理屏幕上，提供多个应用界面显示、交互的机制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对应用开发者而言，窗口模块提供了界面显示和交互能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对终端用户而言，窗口模块提供了控制应用界面的方式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对整个操作系统而言，窗口模块提供了不同应用界面的组织管理逻辑。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "窗口模块的用途",
      children: "窗口模块的用途"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS中，窗口模块主要负责以下职责："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "提供应用和系统界面的窗口对象。"
          })
        }), " 应用开发者通过窗口加载UI界面，实现界面显示功能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "组织不同窗口的显示关系，即维护不同窗口间的叠加层次和位置属性。"
          })
        }), " 应用和系统的窗口具有多种类型，不同类型的窗口具有不同的默认位置和叠加层次（Z轴高度）。同时，用户操作也可以在一定范围内对窗口的位置和叠加层次进行调整。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "提供窗口装饰。窗口装饰指窗口标题栏和窗口边框。"
          })
        }), " 窗口标题栏通常包括窗口最大化、最小化及关闭按钮等界面元素，具有默认的点击行为，方便用户进行操作；窗口边框则方便用户对窗口进行拖拽缩放等行为。窗口装饰是系统的默认行为，开发者可选择启用/禁用，无需关注UI代码层面的实现。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "提供窗口动效。"
          })
        }), " 在窗口显示、隐藏及窗口间切换时，窗口模块通常会添加动画效果，以使各个交互过程更加连贯流畅。在HarmonyOS中，应用窗口的动效为默认行为，不需要开发者进行设置或者修改。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "指导输入事件分发。"
          })
        }), " 即根据当前窗口的状态或焦点，进行事件的分发。触摸和鼠标事件根据窗口的位置和尺寸进行分发，而键盘事件会被分发至焦点窗口。应用开发者可以通过窗口模块提供的接口设置窗口是否可以触摸和是否可以获焦。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "窗口类型",
      children: "窗口类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "窗口有系统窗口、应用窗口两种分类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统窗口"
          })
        }), "：系统窗口指完成系统特定功能的窗口。如音量条、壁纸、通知栏、状态栏、导航栏等。系统窗口仅系统应用可用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "应用窗口"
          })
        }), "：应用窗口区别于系统窗口，指与应用显示相关的窗口，用来显示应用的内容。根据管理方式和用途的不同，应用窗口又可以分为主窗口、辅助窗口两种类型。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "主窗口：主窗口由UIAbility创建时默认创建，会在“任务管理界面”中以一个独立的任务卡片显示，用于显示应用UIAbility主界面。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "辅助窗口：辅助窗口由应用自行管理创建和销毁，不会在“任务管理界面”中以一个独立的任务卡片显示，可以用于显示应用的辅助内容，例如弹窗等。辅助窗口包括子窗口、全局悬浮窗、模态窗口、画中画和闪控球。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用窗口模式",
      children: "应用窗口模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用窗口模式指应用主窗口启动时的显示方式。HarmonyOS目前支持全屏、分屏、自由窗口三种应用窗口模式。这种对多种应用窗口模式的支持能力，也称为操作系统的“多窗口能力”。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "全屏"
          })
        }), "：应用主窗口启动时铺满整个屏幕。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "分屏"
          })
        }), "：应用主窗口启动时占据屏幕的某个部分，当前支持二分屏。两个分屏窗口之间具有分界线，可通过拖拽分界线调整两个部分的窗口尺寸。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自由窗口"
          })
        }), "：自由窗口的大小和位置可自由改变。同一个屏幕上可同时显示多个自由窗口，这些自由窗口按照打开或者获取焦点的顺序在Z轴排布。当自由窗口被点击或触摸时，将导致其Z轴高度提升，并获取焦点。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(200102)/* ["default"] */.A) + "",
        width: "3084",
        height: "750"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对窗口模式的适配开发指导，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-mode",
        children: "窗口模式最佳实践"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前窗口的实现和开发与应用开发模型相关联，不同模型下的接口功能略有区别。当前应用开发模型分为FA模型和Stage模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["两个模型的整体架构和设计思想，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/application-models",
        children: "应用模型"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对窗口开发，推荐使用Stage模型进行相关开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主窗口的生命周期",
      children: "主窗口的生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生命周期概述",
      children: "生命周期概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Stage模型下，一个UIAbility对应一个WindowStage，一个WindowStage对应一个应用主窗口，UIAbility、WindowStage和应用主窗口三者之间的关系如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(239419)/* ["default"] */.A) + "",
        width: "222",
        height: "277"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个UIAbility实例都会与一个WindowStage类实例绑定，该类起到了应用进程内窗口管理器的作用。它包含一个主窗口，也就是说UIAbility实例通过WindowStage持有了一个主窗口，该主窗口为ArkUI提供了绘制区域，可以加载不同的ArkUI页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Stage模型下，由UIAbility通过WindowStage管理主窗口并维护其生命周期，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
        children: "onWindowStageCreate"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagedestroy",
        children: "onWindowStageDestroy"
      }), "接收主窗口创建和销毁的通知。详见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle",
        children: "UIAbility生命周期"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生命周期状态",
      children: "生命周期状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "窗口在进入前台、前后台切换及退后台时，会触发窗口相应的生命周期状态变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stage模型下主窗口的生命周期状态包括切到前台（SHOWN）、可交互状态（RESUMED）、不可交互状态（PAUSED）和切到后台（HIDDEN）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "SHOWN"
          })
        }), "：窗口进入到前台。当应用从后台切换至前台时，会触发SHOWN事件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RESUMED"
          })
        }), "：窗口进入可交互状态。窗口到前台后会进入该状态，另外窗口恢复也会触发RESUMED事件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "PAUSED"
          })
        }), "：窗口进入不可交互状态。窗口在前台可见但是不可交互时，触发PAUSED事件。窗口会保持这种状态，直到重新恢复或退后台。如果窗口恢复，则会触发RESUMED事件，进入可交互状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "HIDDEN"
          })
        }), "：窗口进入到后台。当应用从前台切换至后台时，会触发HIDDEN事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(153252)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RESUMED和PAUSED状态分别在窗口切换至前台和切换至后台时触发。但是在一些场景下，RESUMED和PAUSED状态触发会有差异。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在一些系统管控场景下会导致RESUMED和PAUSED事件差异，例如应用管控场景，应用窗口在切换至前台进入到认证界面时，触发PAUSED事件，认证通过后，触发RESUMED事件。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "生命周期状态"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "触发场景举例"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "例如：应用全屏启动、悬浮窗被拉起等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RESUMED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "例如：应用全屏启动、悬浮窗被拉起或应用上滑悬停后回到应用等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PAUSED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "例如：应用退后台回到桌面、应用全屏状态上滑跟手进入多任务或全屏状态下被系统管控等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIDDEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "例如：应用全屏状态上滑退后台回到桌面以及其他退后台或销毁等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用主窗口生命周期事件流转关系如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(882298)/* ["default"] */.A) + "",
        width: "1103",
        height: "229"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "特殊场景"
        })
      }), "：存在应用被系统管控的场景，会导致应用在启动过程中或RESUMED状态下，进入PAUSED状态，并触发回调通知。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听生命周期状态变化",
      children: "监听生命周期状态变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要感知应用主窗口生命周期变化，开发者可以使用下述注册监听接口来监听应用主窗口的生命周期变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 20之前，通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#onwindowstageevent9",
          children: "on('windowStageEvent')"
        }), "注册WindowStage生命周期变化的监听，通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#offwindowstageevent9",
          children: "off('windowStageEvent')"
        }), "注销WindowStage生命周期变化的监听。本接口无法保证生命周期状态切换间的顺序，对于状态间的顺序有要求的情况下不建议使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 20开始，通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#onwindowstagelifecycleevent20",
          children: "on('windowStageLifecycleEvent')"
        }), "注册WindowStage生命周期变化的监听，通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#offwindowstagelifecycleevent20",
          children: "off('windowStageLifecycleEvent')"
        }), "注销WindowStage生命周期变化的监听。本接口不提供WindowStage的获焦失焦状态监听，对于WindowStage获焦失焦状态有监听需求的情况下，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onwindowevent10",
          children: "on('windowEvent')"
        }), "， 对生命周期状态间的顺序有要求的情况下建议使用本接口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不同设备生命周期的差异化行为",
      children: "不同设备生命周期的差异化行为"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Stage模型下，应用主窗口从前台进入后台状态也会驱动UIAbility的生命周期。在该模型下，需要额外关注这个机制在不同类型产品的差异化行为。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phone类型设备上"
            })
          }), "：窗口从前台进入后台状态，会驱动UIAbility到后台状态。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tablet类型设备上："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "针对不支持在2in1设备上运行的应用，或可同时支持在phone和2in1上运行的应用，窗口从前台进入后台状态，会驱动UIAbility为后台状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "针对不支持在phone设备上运行且支持在2in1设备上运行的应用，窗口从前台进入后台状态，不会驱动UIAbility为后台状态。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2in1类型设备上："
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "针对支持在phone设备运行的应用，窗口从前台进入后台状态，会驱动UIAbility为后台状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "针对不支持在phone设备运行的应用，窗口从前台进入后台状态，不会驱动UIAbility为后台状态。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在FA模型下，不支持系统窗口的相关开发。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["窗口存在大小限制", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-i/arkts-apis-window-i#windowlimits11",
          children: "WindowLimits"
        }), "，该限制由产品配置决定。未调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowlimits11",
          children: "setWindowLimits"
        }), "配置过WindowLimits时，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowlimits11",
          children: "getWindowLimits"
        }), "可获取系统限制，单位为px。"]
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
200102(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438219-fde631f49515c81b3db8f7f6b0ebd9ef.png");

},
153252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
882298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
239419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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