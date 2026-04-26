"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["639815"], {
850288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_application_window_stage_application_window_stage_md_cc9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-application-window-stage-application-window-stage-md-cc9.json
var site_docs_arkui_window_manager_application_window_stage_application_window_stage_md_cc9_namespaceObject = JSON.parse('{"id":"arkui/window-manager/application-window-stage/application-window-stage","title":"管理应用窗口（Stage模型）","description":"基本概念","source":"@site/docs/arkui/window-manager/application-window-stage/application-window-stage.md","sourceDirName":"arkui/window-manager/application-window-stage","slug":"/arkui/window-manager/application-window-stage/","permalink":"/harmonyos-docs-site/arkui/window-manager/application-window-stage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"管理应用窗口（Stage模型）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-window-stage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"窗口开发概述","permalink":"/harmonyos-docs-site/arkui/window-manager/window-overview/"},"next":{"title":"管理应用窗口（FA模型）","permalink":"/harmonyos-docs-site/arkui/window-manager/application-window-fa/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/application-window-stage/application-window-stage.md


const frontMatter = {
	title: '管理应用窗口（Stage模型）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-window-stage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '管理应用窗口（Stage模型）';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "设置应用主窗口",
  "id": "设置应用主窗口",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "设置应用子窗口",
  "id": "设置应用子窗口",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "体验窗口沉浸式能力",
  "id": "体验窗口沉浸式能力",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-2",
  "level": 3
}, {
  "value": "设置全局悬浮窗（受限开放）",
  "id": "设置全局悬浮窗受限开放",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-3",
  "level": 3
}, {
  "value": "监听窗口不可交互与可交互事件",
  "id": "监听窗口不可交互与可交互事件",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-4",
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
        id: "管理应用窗口stage模型",
        children: "管理应用窗口（Stage模型）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "窗口沉浸式能力：指对状态栏、导航栏等系统窗口进行控制，减少状态栏导航栏等系统界面的突兀感，从而使用户获得最佳体验的能力。沉浸式能力只在应用主窗口作为全屏窗口时生效。通常情况下，应用的辅助窗口（子窗、全局悬浮窗等）和处于自由窗口下的应用主窗口无法使用沉浸式能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全局悬浮窗：全局悬浮窗是一种特殊的应用辅助窗口，具备在应用主窗口和对应Ability退至后台后仍然可以在前台显示的能力。全局悬浮窗可以用于应用退至后台后，使用小窗继续显示UI，例如音乐应用用于显示桌面歌词等。应用在创建全局悬浮窗前，需要申请对应的权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Stage模型下，管理应用窗口的典型场景有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置应用主窗口属性及目标页面"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置应用子窗口属性及目标页面"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "体验窗口沉浸式能力"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置全局悬浮窗"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "监听窗口不可交互与可交互事件"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下分别介绍具体开发方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述场景涉及的常用接口如下表所示。更多API说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window/arkts-apis-window",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "实例名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WindowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getMainWindow(callback: AsyncCallback<Window>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取WindowStage实例下的主窗口。  此接口仅可在Stage模型下使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WindowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "loadContent(path: string, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为当前WindowStage的主窗口加载具体页面。  其中path为要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。  此接口仅可在Stage模型下使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WindowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createSubWindow(name: string, callback: AsyncCallback<Window>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建子窗口。  此接口仅可在Stage模型下使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WindowStage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启WindowStage生命周期变化的监听。  此接口仅可在Stage模型下使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "window静态方法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createWindow(config: Configuration, callback: AsyncCallback<Window>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建子窗口或者系统窗口。  -config：创建窗口时的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setUIContent(path: string, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据当前工程中某个页面的路径为窗口加载具体的页面内容。  其中path为要加载到窗口中的页面内容的路径，在Stage模型下该路径需添加到工程的main_pages.json文件中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setWindowBrightness(brightness: number, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置屏幕亮度值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置窗口是否为可触状态。true表示可触；false表示不可触。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "moveWindowTo(x: number, y: number, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动当前窗口位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resize(width: number, height: number, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "改变当前窗口大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置主窗口或子窗口的布局是否为沉浸式布局。true表示沉浸式布局；false表示非沉浸式布局。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setWindowSystemBarEnable(names: Array<'status'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'navigation'>): Promise<void>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置窗口内导航栏、状态栏属性。  systemBarProperties：导航栏、状态栏的属性集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "showWindow(callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示当前窗口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'touchOutside', callback: Callback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启本窗口区域外的点击事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "destroyWindow(callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁当前窗口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置应用主窗口",
      children: "设置应用主窗口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在Stage模型下，应用主窗口由UIAbility创建并维护生命周期。在UIAbility的onWindowStageCreate回调中，通过WindowStage获取应用主窗口，即可对其进行属性设置等操作。还可以在应用配置文件中设置应用主窗口的属性，如最大窗口宽度maxWindowWidth等，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
        children: "module.json5配置文件中的abilities标签"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取应用主窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过getMainWindow接口获取应用主窗口。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置主窗口属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可设置主窗口的背景色、亮度值、是否可触等多个属性，开发者可根据需要选择对应的接口。本示例以设置“是否可触”属性为例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为主窗口加载对应的目标页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过loadContent接口加载主窗口的目标页面。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility} from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0X0000;\nconst TAG: string = '[Sample_CreatMainWindow]';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    // 1.获取应用主窗口。\n    let windowClass: window.Window | null = null;\n    windowStage.getMainWindow((err: BusinessError, data) => {\n      let errCode: number = err.code;\n      if (errCode) {\n        hilog.error(DOMAIN, TAG, `Failed to obtain the main window. Code:${err.code}, message:${err.message}`);\n        return;\n      }\n      windowClass = data;\n      hilog.info(DOMAIN, TAG, `Succeeded in obtaining the main window. Result:${data}`);\n      // 2.设置主窗口属性。以设置\"是否可触\"属性为例。\n      let isTouchable: boolean = true;\n      windowClass.setWindowTouchable(isTouchable, (err: BusinessError) => {\n        let errCode: number = err.code;\n        if (errCode) {\n          hilog.error(DOMAIN, TAG, `Failed to set the window to be touchable. Cause: ${JSON.stringify(err)}`);\n          return;\n        }\n        hilog.info(DOMAIN, TAG, `Succeeded in setting the window to be touchable.`);\n      })\n    })\n    // 3.为主窗口加载对应的目标页面。\n    windowStage.loadContent('pages/Index', (err: BusinessError) => {\n      let errCode: number = err.code;\n      if (errCode) {\n        hilog.error(DOMAIN, TAG, `Failed to load the content. Cause: ${JSON.stringify(err)}`);\n        return;\n      }\n      hilog.info(DOMAIN, TAG, `Succeeded in loading the content.`);\n    });\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置应用子窗口",
      children: "设置应用子窗口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以按需创建应用子窗口，如弹窗等，并对其进行属性设置等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93784)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下几种场景不建议使用子窗口，建议优先考虑使用控件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-overlay/ts-universal-attributes-overlay",
        children: "overlay"
      }), "能力实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "移动设备（手机、在非自由模式下的平板设备）场景下子窗不能超出处于悬浮窗模式、分屏模式的应用主窗口范围，与控件一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分屏窗口与自由窗口模式下，主窗口位置大小发生改变时控件实时跟随变化能力优于子窗。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "部分设备平台下根据实际的系统配置限制，子窗只有系统默认的动效和圆角阴影，应用无法设置，自由度低。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建应用子窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过createSubWindow接口创建应用子窗口。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["子窗口创建后默认是", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/window-manager/window-terminology#%E6%B2%89%E6%B5%B8%E5%BC%8F%E5%B8%83%E5%B1%80",
            children: "沉浸式布局"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置子窗口属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "子窗口创建成功后，可以改变其大小、位置等，还可以根据应用需要设置窗口背景色、亮度等属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在调用showWindow之前，建议设置子窗口的大小和位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果没有设置子窗口的大小，调用showWindow后:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/window-manager/window-terminology#%E8%87%AA%E7%94%B1%E7%AA%97%E5%8F%A3",
              children: "自由窗口"
            }), "状态下，默认子窗口大小为当前物理屏幕的大小。其中，", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-mate-book-fold",
              children: "MateBook Fold折叠电脑"
            }), "半折叠态下，默认子窗口大小为竖向展开态的物理屏幕大小。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "非自由窗口状态下，默认子窗口大小为主窗口大小。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载显示子窗口的具体内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过setUIContent和showWindow接口加载显示子窗口的具体内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁子窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再需要某些子窗口时，可根据具体实现逻辑，使用destroyWindow接口销毁子窗口。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "直接在onWindowStageCreate里面创建子窗口的整体示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0X0000;\nconst TAG: string = '[Sample_CreatSubWindow]';\n\nlet windowStage_: window.WindowStage | null = null;\nlet sub_windowClass: window.Window | null = null;\n\nexport default class EntryAbility extends UIAbility {\n  showSubWindow() {\n    // 1.创建应用子窗口。\n    if (windowStage_ == null) {\n      hilog.error(DOMAIN, TAG, `Failed to create the subwindow. Cause: windowStage_ is null`);\n    } else {\n      windowStage_.createSubWindow('mySubWindow', (err: BusinessError, data) => {\n        let errCode: number = err.code;\n        if (errCode) {\n          hilog.error(DOMAIN, TAG, `Failed to create the subwindow. Cause: ${JSON.stringify(err)}`);\n          return;\n        }\n        sub_windowClass = data;\n        if (!sub_windowClass) {\n          hilog.error(DOMAIN, TAG, `sub_windowClass is null`);\n          return;\n        }\n        hilog.info(DOMAIN, TAG, `Succeeded in creating the subwindow. Data: ${JSON.stringify(data)}`);\n        // 2.子窗口创建成功后，设置子窗口的位置、大小及相关属性等。\n        sub_windowClass.moveWindowTo(300, 300, (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, TAG, `Failed to move the window. Cause: ${JSON.stringify(err)}`);\n            return;\n          }\n          hilog.info(DOMAIN, TAG, `Succeeded in moving the window.`);\n        });\n        sub_windowClass.resize(500, 500, (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, TAG, `Failed to change the window size. Cause: ${JSON.stringify(err)}`);\n            return;\n          }\n          hilog.info(DOMAIN, TAG, `Succeeded in changing the window size.`);\n        });\n        // 3.为子窗口加载对应的目标页面。\n        sub_windowClass.setUIContent('pages/Index', (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.info(DOMAIN, TAG, `Failed to load the content. Cause: ${JSON.stringify(err)}`);\n            return;\n          }\n          hilog.info(DOMAIN, TAG, `Succeeded in loading the content.`);\n          if (!sub_windowClass) {\n            hilog.error(DOMAIN, TAG, `sub_windowClass is null`);\n            return;\n          }\n          // 3.显示子窗口。\n          sub_windowClass.showWindow((err: BusinessError) => {\n            let errCode: number = err.code;\n            if (errCode) {\n              hilog.error(DOMAIN, TAG, `Failed to show the window. Cause: ${JSON.stringify(err)}`);\n              return;\n            }\n            hilog.info(DOMAIN, TAG, `Succeeded in showing the window.`);\n          });\n        });\n      })\n    }\n  }\n\n  destroySubWindow() {\n    if (!sub_windowClass) {\n      hilog.error(DOMAIN, TAG, `sub_windowClass is null`);\n      return;\n    }\n    // 4.销毁子窗口。当不再需要子窗口时，可根据具体实现逻辑，使用destroy对其进行销毁。\n    sub_windowClass.destroyWindow((err: BusinessError) => {\n      let errCode: number = err.code;\n      if (errCode) {\n        hilog.error(DOMAIN, TAG, `Failed to destroy the window. Cause: ${JSON.stringify(err)}`);\n        return;\n      }\n      hilog.info(DOMAIN, TAG, `Succeeded in destroying the window.`);\n    });\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    windowStage_ = windowStage;\n    // 开发者可以在适当的时机，如主窗口上按钮点击事件等，创建子窗口。并不一定需要在onWindowStageCreate调用，这里仅作展示\n    this.showSubWindow();\n  }\n\n  onWindowStageDestroy() {\n    // 开发者可以在适当的时机，如子窗口上点击关闭按钮等，销毁子窗口。并不一定需要在onWindowStageDestroy调用，这里仅作展示\n    this.destroySubWindow();\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "另外，也可以在某个page页面通过点击按钮创建子窗口，整体示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0X0000;\nconst TAG: string = '[Sample_CreatSubWindow2]';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, TAG, `Failed to load the content. Cause: ${JSON.stringify(err)}`);\n        return;\n      }\n      hilog.info(DOMAIN, TAG, `Succeeded in loading the content.`);\n    });\n\n    // 给Index页面传递windowStage\n    AppStorage.setOrCreate('windowStage', windowStage);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0X0000;\nconst TAG : string = '[Sample_CreatSubWindow2]';\n\nlet windowStage_: window.WindowStage | undefined = undefined;\nlet sub_windowClass: window.Window | undefined = undefined;\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  private createSubWindow(){\n    // 获取windowStage\n    windowStage_ = AppStorage.get('windowStage');\n    // 1.创建应用子窗口。\n    if (windowStage_ == null) {\n      hilog.error(DOMAIN, TAG, `Failed to create the subwindow. Cause: windowStage_ is null`);\n    } else {\n      windowStage_.createSubWindow('mySubWindow', (err: BusinessError, data) => {\n        let errCode: number = err.code;\n        if (errCode) {\n          hilog.error(DOMAIN, TAG, `Failed to create the subwindow. Cause: ${JSON.stringify(err)}`);\n          return;\n        }\n        sub_windowClass = data;\n        if (!sub_windowClass) {\n          hilog.error(DOMAIN, TAG, `sub_windowClass is null`);\n          return;\n        }\n        hilog.info(DOMAIN, TAG, `Succeeded in creating the subwindow. Data: ${JSON.stringify(data)}`);\n        // 2.子窗口创建成功后，设置子窗口的位置、大小及相关属性等。\n        sub_windowClass.moveWindowTo(300, 300, (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, TAG, `Failed to move the window. Cause: ${JSON.stringify(err)}`);\n            return;\n          }\n          hilog.info(DOMAIN, TAG, `Succeeded in moving the window.`);\n        });\n        sub_windowClass.resize(500, 500, (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, TAG, `Failed to change the window size. Cause: ${JSON.stringify(err)}`);\n            return;\n          }\n          hilog.info(DOMAIN, TAG, `Succeeded in changing the window size.`);\n        });\n        // 3.为子窗口加载对应的目标页面。\n        sub_windowClass.setUIContent('pages/SubWindow', (err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, TAG, `Failed to load the content. Cause: ${JSON.stringify(err)}`);\n            return;\n          }\n          hilog.info(DOMAIN, TAG, `Succeeded in loading the content.`);\n          if (!sub_windowClass) {\n            hilog.error(DOMAIN, TAG, `sub_windowClass is null`);\n            return;\n          }\n          // 3.显示子窗口。\n          sub_windowClass.showWindow((err: BusinessError) => {\n            let errCode: number = err.code;\n            if (errCode) {\n              hilog.error(DOMAIN, TAG, `Failed to show the window. Cause: ${JSON.stringify(err)}`);\n              return;\n            }\n            hilog.info(DOMAIN, TAG, `Succeeded in showing the window.`);\n          });\n        });\n      })\n    }\n  }\n  private destroySubWindow(){\n    if (!sub_windowClass) {\n      hilog.error(DOMAIN, TAG, `sub_windowClass is null`);\n      return;\n    }\n    // 4.销毁子窗口。当不再需要子窗口时，可根据具体实现逻辑，使用destroy对其进行销毁。\n    sub_windowClass.destroyWindow((err: BusinessError) => {\n      let errCode: number = err.code;\n      if (errCode) {\n        hilog.error(DOMAIN, TAG, `Failed to destroy the window. Cause: ${JSON.stringify(err)}`);\n        return;\n      }\n      hilog.info(DOMAIN, TAG, `Succeeded in destroying the window.`);\n    });\n  }\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button(){\n          Text('CreateSubWindow')\n            .fontSize(24)\n            .fontWeight(FontWeight.Normal)\n        }.width(220).height(68)\n        .margin({left:10, top:60})\n        .onClick(() => {\n          this.createSubWindow()\n        })\n        Button(){\n          Text('destroySubWindow')\n            .fontSize(24)\n            .fontWeight(FontWeight.Normal)\n        }.width(220).height(68)\n        .margin({left:10, top:60})\n        .onClick(() => {\n          this.destroySubWindow()\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// subWindow.ets\n@Entry\n@Component\nstruct SubWindow {\n  @State message: string = 'Hello subWindow';\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(20)\n          .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n    }\n    .height('100%')\n    .backgroundColor('#0D9FFB')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "体验窗口沉浸式能力",
      children: "体验窗口沉浸式能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在看视频、玩游戏等场景下，用户往往希望隐藏状态栏、导航栏等不必要的系统窗口，从而获得更佳的沉浸式体验。此时可以借助窗口沉浸式能力（窗口沉浸式能力都是针对应用主窗口而言的），达到预期效果。从API version 10开始，沉浸式窗口默认配置为全屏大小并由组件模块控制布局，状态栏、导航栏背景颜色为透明，文字颜色为黑色；应用窗口调用setWindowLayoutFullScreen接口，设置为true表示由组件模块控制忽略状态栏、导航栏的沉浸式全屏布局，设置为false表示由组件模块控制避让状态栏、导航栏的非沉浸式全屏布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(628477)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前沉浸式界面开发仅支持窗口级别的配置，暂不支持Page级别的配置。若有Page级别切换的需要，可以在页面生命周期开始，例如onPageShow中设置沉浸模式，然后在页面退出，例如onPageHide中恢复默认设置来实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-2",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取应用主窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过getMainWindow接口获取应用主窗口。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现沉浸式效果。有以下两种方式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方式一：应用主窗口为全屏窗口时，调用setWindowSystemBarEnable接口，设置导航栏、状态栏不显示，从而达到沉浸式效果。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "方式二：调用setWindowLayoutFullScreen接口，设置应用主窗口为全屏布局；然后调用setWindowSystemBarProperties接口，设置导航栏、状态栏的透明度、背景/文字颜色以及高亮图标等属性，使之保持与主窗口显示协调一致，从而达到沉浸式效果。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载显示沉浸式窗口的具体内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过loadContent接口加载沉浸式窗口的具体内容。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0X0000;\nconst TAG: string = '[Sample_SetWindowSystemBarEnable]';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    // 1.获取应用主窗口。\n    let windowClass: window.Window | null = null;\n    windowStage.getMainWindow((err: BusinessError, data) => {\n      let errCode: number = err.code;\n      if (errCode) {\n        hilog.error(DOMAIN, TAG, `Failed to obtain the main window. Cause: ${JSON.stringify(err)}`);\n        return;\n      }\n      windowClass = data;\n      hilog.info(DOMAIN, TAG, `Succeeded in obtaining the main window. Data: ${JSON.stringify(data)}`);\n\n      // 2.实现沉浸式效果。方式一：设置导航栏、状态栏不显示。\n      let names: 'status'[] | 'navigation'[] = [];\n      windowClass.setWindowSystemBarEnable(names)\n        .then(() => {\n          hilog.info(DOMAIN, TAG, `Succeeded in setting the system bar to be visible.`);\n        })\n        .catch((err: BusinessError) => {\n          hilog.error(DOMAIN, TAG, `Failed to set the system bar to be visible. Cause: ${JSON.stringify(err)}`);\n        });\n      // 2.实现沉浸式效果。方式二：设置窗口为全屏布局，配合设置导航栏、状态栏的透明度、背景/文字颜色及高亮图标等属性，与主窗口显示保持协调一致。\n      let isLayoutFullScreen = true;\n      windowClass.setWindowLayoutFullScreen(isLayoutFullScreen)\n        .then(() => {\n          hilog.info(DOMAIN, TAG, `Succeeded in setting the window layout to full-screen mode.`);\n        })\n        .catch((err: BusinessError) => {\n          hilog.error(DOMAIN, TAG, `Failed to set the window layout to full-screen mode. Cause: ${JSON.stringify(err)}`);\n        });\n      let sysBarProps: window.SystemBarProperties = {\n        statusBarColor: '#ff00ff',\n        navigationBarColor: '#00ff00',\n        // 以下两个属性从API Version 8开始支持\n        statusBarContentColor: '#ffffff',\n        navigationBarContentColor: '#ffffff'\n      };\n      windowClass.setWindowSystemBarProperties(sysBarProps)\n        .then(() => {\n          hilog.info(DOMAIN, TAG, `Succeeded in setting the system bar properties.`);\n        })\n        .catch((err: BusinessError) => {\n          hilog.error(DOMAIN, TAG, `Failed to set the system bar properties. Cause: ${JSON.stringify(err)}`);\n        });\n    })\n    // 3.为沉浸式窗口加载对应的目标页面。\n    windowStage.loadContent('pages/Index', (err: BusinessError) => {\n      let errCode: number = err.code;\n      if (errCode) {\n        hilog.error(DOMAIN, TAG, `Failed to load the content. Cause: ${JSON.stringify(err)}`);\n        return;\n      }\n      hilog.info(DOMAIN, TAG, `Succeeded in loading the content.`);\n    });\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置全局悬浮窗受限开放",
      children: "设置全局悬浮窗（受限开放）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全局悬浮窗可以在已有的任务基础上，创建一个始终在前台显示的窗口。即使创建全局悬浮窗的任务退至后台，全局悬浮窗仍然可以在前台显示。通常全局悬浮窗位于所有应用窗口之上，开发者可以创建全局悬浮窗，并对全局悬浮窗进行属性设置等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-3",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "前提条件："
        })
      }), " 创建WindowType.TYPE_FLOAT即全局悬浮窗类型的窗口，需要申请ohos.permission.SYSTEM_FLOAT_WINDOW权限，该权限为受控开放权限，仅符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionsystem_float_window",
        children: "指定场景"
      }), "的在2in1设备上的应用可申请该权限。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
        children: "申请使用受限权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在其他设备或场景下，请使用画中画功能，使用方式参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-pipwindow",
        children: "画中画开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(857116)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用未在应用市场（AGC）申请相应的权限证书，却试图在配置文件中声明此类权限，将会导致应用安装失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建全局悬浮窗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过window.createWindow接口创建全局悬浮窗类型的窗口。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对全局悬浮窗进行属性设置等操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全局悬浮窗窗口创建成功后，可以改变其大小、位置等，还可以根据应用需要设置全局悬浮窗背景色、亮度等属性。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载显示全局悬浮窗的具体内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过setUIContent和showWindow接口加载显示全局悬浮窗的具体内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁全局悬浮窗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再需要全局悬浮窗时，可根据具体实现逻辑，使用destroyWindow接口销毁全局悬浮窗。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0X0000;\nconst TAG: string = '[Sample_CreatFloatWindow]';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    // 1.创建悬浮窗。\n    let windowClass: window.Window | null = null;\n    let config: window.Configuration = {\n      name: 'floatWindow', windowType: window.WindowType.TYPE_FLOAT, ctx: this.context\n    };\n    window.createWindow(config, (err: BusinessError, data) => {\n      let errCode: number = err.code;\n      if (errCode) {\n        hilog.error(DOMAIN, TAG, `Failed to create the floatWindow. Cause: ${JSON.stringify(err)}`);\n        return;\n      }\n      hilog.info(DOMAIN, TAG, `Succeeded in creating the floatWindow. Data: ${JSON.stringify(data)}`);\n      windowClass = data;\n      // 2.悬浮窗窗口创建成功后，设置悬浮窗的位置、大小及相关属性等。\n      windowClass.moveWindowTo(300, 300, (err: BusinessError) => {\n        let errCode: number = err.code;\n        if (errCode) {\n          hilog.error(DOMAIN, TAG, `Failed to move the window. Cause: ${JSON.stringify(err)}`);\n          return;\n        }\n        hilog.info(DOMAIN, TAG, `Succeeded in moving the window.`);\n      });\n      windowClass.resize(500, 500, (err: BusinessError) => {\n        let errCode: number = err.code;\n        if (errCode) {\n          hilog.error(DOMAIN, TAG, `Failed to change the window size. Cause: ${JSON.stringify(err)}`);\n          return;\n        }\n        hilog.info(DOMAIN, TAG, `Succeeded in changing the window size.`);\n      });\n      // 3.为悬浮窗加载对应的目标页面。\n      windowClass.setUIContent('pages/Index', (err: BusinessError) => {\n        let errCode: number = err.code;\n        if (errCode) {\n          hilog.error(DOMAIN, TAG, `Failed to load the content. Cause: ${JSON.stringify(err)}`);\n          return;\n        }\n        hilog.info(DOMAIN, TAG, `Succeeded in loading the content.`);\n        // 3.显示悬浮窗。\n        (windowClass as window.Window).showWindow((err: BusinessError) => {\n          let errCode: number = err.code;\n          if (errCode) {\n            hilog.error(DOMAIN, TAG, `Failed to show the window. Cause: ${JSON.stringify(err)}`);\n            return;\n          }\n          hilog.info(DOMAIN, TAG, `Succeeded in showing the window.`);\n        });\n      });\n      // 4.销毁悬浮窗。当不再需要悬浮窗时，可根据具体实现逻辑，使用destroy对其进行销毁。\n    });\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听窗口不可交互与可交互事件",
      children: "监听窗口不可交互与可交互事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在前台显示过程中可能会进入某些不可交互的场景，比较典型的是进入多任务界面。此时，对于一些应用可能需要选择暂停某个与用户正在交互的业务，如视频类应用暂停正在播放的视频或者相机暂停预览流等。而当该应用从多任务又切回前台时，又变成了可交互的状态，此时需要恢复被暂停中断的业务，如恢复视频播放或相机预览流等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-4",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在创建WindowStage对象后可通过监听'windowStageEvent'事件类型，监听到窗口进入前台、后台、前台可交互、前台不可交互等事件，应用可根据这些上报的事件状态进行相应的业务处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0X0000;\nconst TAG: string = '[Sample_ListenWindowStage]';\n\nexport default class EntryAbility extends UIAbility {\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    // ...\n    try {\n      windowStage.on('windowStageEvent', (data) => {\n        hilog.info(DOMAIN, TAG, `Succeeded in enabling the listener for window stage event changes. Data: ${JSON.stringify(data)}`);\n\n        // 根据事件状态类型选择进行相应的处理\n        if (data === window.WindowStageEventType.SHOWN) {\n          hilog.info(DOMAIN, TAG, `current window stage event is SHOWN`);\n          // 应用进入前台，默认为可交互状态\n          // ...\n        } else if (data === window.WindowStageEventType.HIDDEN) {\n          hilog.info(DOMAIN, TAG, `current window stage event is HIDDEN`);\n          // 应用进入后台，默认为不可交互状态\n          // ...\n        } else if (data === window.WindowStageEventType.PAUSED) {\n          hilog.info(DOMAIN, TAG, `current window stage event is PAUSED`);\n          // 前台应用进入多任务，转为不可交互状态\n          // ...\n        } else if (data === window.WindowStageEventType.RESUMED) {\n          hilog.info(DOMAIN, TAG, `current window stage event is RESUMED`);\n          // 进入多任务后又继续返回前台时，恢复可交互状态\n          // ...\n        }\n\n        // ...\n      });\n    } catch (exception) {\n      hilog.error(DOMAIN, TAG, `Failed to enable the listener for window stage event changes. Cause: ${JSON.stringify(exception)}`);\n    }\n  }\n}\n"
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
93784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
628477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
857116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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